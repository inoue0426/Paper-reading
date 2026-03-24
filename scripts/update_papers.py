#!/usr/bin/env python3
"""
update_papers.py

Reads a GitHub issue (number, title, body supplied via environment variables),
extracts HTTP/HTTPS URLs from the body, and appends new paper entries to
assets/js/papers.js for any URL that is not already listed there.

Environment variables
---------------------
ISSUE_NUMBER  : integer issue number
ISSUE_TITLE   : issue title (used as the "section" label for new entries)
ISSUE_BODY    : raw issue body text
"""

import html
import json
import os
import re
import sys
import urllib.request
import urllib.error

PAPERS_JS_PATH = os.path.join(
    os.path.dirname(__file__), "..", "assets", "js", "papers.js"
)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def extract_urls(text: str) -> list[str]:
    """Return all distinct HTTP/HTTPS URLs found in *text*."""
    pattern = r"https?://[^\s\)\]\"\'<>]+"
    seen: set[str] = set()
    result: list[str] = []
    for url in re.findall(pattern, text):
        url = url.rstrip(".,;:!?)")  # strip common trailing punctuation
        if url not in seen:
            seen.add(url)
            result.append(url)
    return result


def fetch_title(url: str) -> str:
    """Try to retrieve the <title> of *url*.  Returns the URL itself on failure."""
    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (compatible; PaperBot/1.0)"},
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            # Read in chunks, stopping as soon as we have found </head> or
            # consumed enough data; <title> always appears within <head>.
            chunks: list[bytes] = []
            total = 0
            for chunk in iter(lambda: resp.read(4096), b""):
                chunks.append(chunk)
                total += len(chunk)
                if b"</head>" in b"".join(chunks).lower() or total >= 131072:
                    break
        raw = b"".join(chunks).decode("utf-8", errors="ignore")
        m = re.search(r"<title[^>]*>([^<]+)</title>", raw, re.IGNORECASE)
        if m:
            return html.unescape(m.group(1).strip())
    except Exception:
        pass
    return url


def load_papers(path: str) -> tuple[list[dict], str, str]:
    """
    Parse papers.js and return (papers_list, prefix, suffix).

    prefix is everything before the JSON array, suffix is everything after.
    """
    with open(path, encoding="utf-8") as fh:
        content = fh.read()

    m = re.search(r"(const papers\s*=\s*)(\[.*\])(;?\s*)$", content, re.DOTALL)
    if not m:
        raise ValueError("Could not locate 'const papers = [...]' in papers.js")

    prefix = m.group(1)
    suffix = m.group(3)
    papers = json.loads(m.group(2))
    return papers, prefix, suffix


def save_papers(path: str, papers: list[dict], prefix: str, suffix: str) -> None:
    """Write papers back to papers.js preserving the surrounding JavaScript."""
    body = json.dumps(papers, indent=2, ensure_ascii=False)
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(prefix + body + suffix)


# ---------------------------------------------------------------------------
# Main logic
# ---------------------------------------------------------------------------

def main() -> int:
    issue_number_raw = os.environ.get("ISSUE_NUMBER", "").strip()
    issue_title = os.environ.get("ISSUE_TITLE", "").strip()
    issue_body = os.environ.get("ISSUE_BODY", "").strip()

    if not issue_number_raw:
        print("ISSUE_NUMBER is not set – nothing to do.", file=sys.stderr)
        return 0

    try:
        issue_number = int(issue_number_raw)
    except ValueError:
        print(f"Invalid ISSUE_NUMBER: {issue_number_raw!r}", file=sys.stderr)
        return 1

    if not issue_body:
        print(f"Issue #{issue_number} has no body – nothing to do.")
        return 0

    papers, prefix, suffix = load_papers(PAPERS_JS_PATH)

    existing_urls: set[str] = {p["url"] for p in papers}
    next_id: int = (max(p["id"] for p in papers) if papers else 0) + 1

    urls = extract_urls(issue_body)
    if not urls:
        print(f"No URLs found in issue #{issue_number} – nothing to add.")
        return 0

    added = 0
    for url in urls:
        if url in existing_urls:
            print(f"  skip (already exists): {url}")
            continue

        print(f"  fetching title for: {url}")
        title = fetch_title(url)

        entry: dict = {
            "id": next_id,
            "title": title,
            "url": url,
            "summary": "",
            "tags": [],
            "section": issue_title or f"Issue #{issue_number}",
            "issue": issue_number,
        }
        papers.append(entry)
        existing_urls.add(url)
        next_id += 1
        added += 1

    if added:
        save_papers(PAPERS_JS_PATH, papers, prefix, suffix)
        print(f"Added {added} new paper(s) from issue #{issue_number}.")
    else:
        print(f"All URLs in issue #{issue_number} are already in papers.js.")

    return 0


if __name__ == "__main__":
    sys.exit(main())
