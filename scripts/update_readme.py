#!/usr/bin/env python3
"""
update_readme.py

Reads a GitHub issue number and title (supplied via environment variables),
then:
  1. Looks up all papers for that issue in assets/js/papers.js.
  2. Checks whether a section for that issue already exists in README.md.
  3. If not, inserts a new section (with paper links) after the Table of
     Contents divider.
  4. Prepends a new entry at the end of the Table of Contents list.

Environment variables
---------------------
ISSUE_NUMBER  : integer issue number
ISSUE_TITLE   : issue title (used as the section heading)
GITHUB_REPO   : repository slug, e.g. "inoue0426/Paper-reading"
"""

import json
import os
import re
import sys

PAPERS_JS_PATH = os.path.join(
    os.path.dirname(__file__), "..", "assets", "js", "papers.js"
)
README_PATH = os.path.join(os.path.dirname(__file__), "..", "README.md")


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def load_papers(path: str) -> list[dict]:
    """Return the papers list parsed from papers.js."""
    with open(path, encoding="utf-8") as fh:
        content = fh.read()
    m = re.search(r"const papers\s*=\s*(\[.*\]);?\s*$", content, re.DOTALL)
    if not m:
        raise ValueError("Could not locate 'const papers = [...]' in papers.js")
    return json.loads(m.group(1))


def slugify(title: str) -> str:
    """Convert a section heading to a GitHub-flavored Markdown anchor slug."""
    slug = title.lower()
    # Keep only ASCII letters, digits, spaces, and hyphens (matches GitHub's algo)
    slug = re.sub(r"[^a-z0-9\s-]", "", slug)
    # Strip surrounding whitespace, then replace each space with a hyphen.
    # Each space is replaced individually (no collapsing) because a removed
    # symbol that was surrounded by spaces produces a double hyphen, e.g.
    # "foo & bar" -> "foo--bar".
    slug = slug.strip().replace(" ", "-")
    return slug


def build_toc_entry(title: str) -> str:
    return f"- [{title}](#{slugify(title)})"


def build_section(
    issue_number: int, issue_title: str, papers: list[dict], repo: str
) -> str:
    """Return a Markdown section block for an issue."""
    issue_url = f"https://github.com/{repo}/issues/{issue_number}"
    lines = [
        f"## {issue_title}",
        "",
        f"> Issue [#{issue_number}]({issue_url})",
        "",
    ]
    for p in papers:
        title = " ".join(p["title"].split())  # normalise embedded whitespace
        lines.append(f"- **[{title}]({p['url']})**")
    lines += ["", "---", ""]
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Main logic
# ---------------------------------------------------------------------------


def main() -> int:
    issue_number_raw = os.environ.get("ISSUE_NUMBER", "").strip()
    issue_title = os.environ.get("ISSUE_TITLE", "").strip()
    repo = os.environ.get("GITHUB_REPO", "inoue0426/Paper-reading")

    if not issue_number_raw:
        print("ISSUE_NUMBER is not set – nothing to do.", file=sys.stderr)
        return 0

    try:
        issue_number = int(issue_number_raw)
    except ValueError:
        print(f"Invalid ISSUE_NUMBER: {issue_number_raw!r}", file=sys.stderr)
        return 1

    if not issue_title:
        issue_title = f"Issue #{issue_number}"

    # Load papers for this issue from papers.js
    papers = load_papers(PAPERS_JS_PATH)
    issue_papers = [p for p in papers if p.get("issue") == issue_number]

    if not issue_papers:
        print(
            f"No papers found for issue #{issue_number} – nothing to add to README."
        )
        return 0

    with open(README_PATH, encoding="utf-8") as fh:
        readme = fh.read()

    # Check if this issue already has a section in the README
    issue_anchor = f"Issue [#{issue_number}]"
    if issue_anchor in readme:
        print(
            f"README already contains a section for issue #{issue_number} – skipping."
        )
        return 0

    # ── Locate Table of Contents ──────────────────────────────────────────────
    toc_header = "## Table of Contents"
    toc_pos = readme.find(toc_header)
    if toc_pos == -1:
        print("Could not find '## Table of Contents' in README.md", file=sys.stderr)
        return 1

    # Find the first horizontal rule after the TOC header
    divider = "\n---\n"
    divider_pos = readme.find(divider, toc_pos)
    if divider_pos == -1:
        print(
            "Could not find '---' divider after Table of Contents", file=sys.stderr
        )
        return 1

    # ── Add TOC entry ─────────────────────────────────────────────────────────
    # Insert the new TOC entry just before the divider (= end of the TOC list).
    # readme[:divider_pos] already ends with "\n" from the last entry, so we
    # only need the entry text plus a newline -- no extra blank line.
    new_toc_entry = build_toc_entry(issue_title)
    readme = (
        readme[:divider_pos]
        + new_toc_entry + "\n"
        + readme[divider_pos:]
    )

    # ── Add new section ───────────────────────────────────────────────────────
    # Re-locate the divider after the TOC modification, then insert the section
    # immediately after it so the new issue appears at the top of the sections.
    divider_pos = readme.find(divider, toc_pos)
    section_insert_pos = divider_pos + len(divider)
    new_section = build_section(issue_number, issue_title, issue_papers, repo)
    readme = readme[:section_insert_pos] + "\n" + new_section + readme[section_insert_pos:]

    with open(README_PATH, "w", encoding="utf-8") as fh:
        fh.write(readme)

    print(
        f"Added section for issue #{issue_number} ('{issue_title}') "
        f"to README.md with {len(issue_papers)} paper(s)."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
