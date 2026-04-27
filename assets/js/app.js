/* app.js – search, filter, and render logic for Paper Reading site */

(function () {
  'use strict';

  // ── Tag Category Classification ─────────────────────────────────────────
  const VENUE_TAGS = new Set([
    'ICLR 2026', 'AAAI 2026',
    'NeurIPS 2025', 'ICML 2025', 'ICLR 2025',
    'ICML 2024', 'ICLR 2024', 'IJCAI 2024', 'ACL 2024', 'AAAI 2024',
    'ACM TIST 2024', 'Information Processing & Management 2024', 'TMLR 2024',
    'IEEE TKDE 2024', 'Expert Systems with Applications 2024', 'Artificial Intelligence Review 2024',
    'NeurIPS 2023', 'IJCAI 2023', 'LoG 2023', 'BIBM 2023', 'EMNLP 2023', 'ACL 2023',
    'EMNLP Findings 2023', 'TMLR 2023', 'ACM CSUR 2023',
    'ACM BCB',
    'arXiv',
  ]);

  const YEAR_TAGS = new Set(['2016', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']);

  // Everything else is a topic tag

  // ── State ────────────────────────────────────────────────────────────────
  let activeFilters = new Set();
  let searchQuery = '';

  // ── DOM refs ─────────────────────────────────────────────────────────────
  const grid          = document.getElementById('papers-grid');
  const noResults     = document.getElementById('no-results');
  const resultsCount  = document.getElementById('results-count');
  const searchInput   = document.getElementById('search-input');
  const searchClear   = document.getElementById('search-clear');
  const clearBtn      = document.getElementById('clear-filters');
  const resetLink     = document.getElementById('reset-link');
  const venueCont     = document.getElementById('venue-tags');
  const yearCont      = document.getElementById('year-tags');
  const topicCont     = document.getElementById('topic-tags');
  const toggleBtn     = document.getElementById('toggle-sidebar');
  const sidebar       = document.getElementById('sidebar');

  // ── Helpers ──────────────────────────────────────────────────────────────
  function escHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function highlight(text, query) {
    if (!query) return escHtml(text);
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return escHtml(text).replace(
      new RegExp(`(${escaped})`, 'gi'),
      '<mark>$1</mark>'
    );
  }

  // ── Filter logic ─────────────────────────────────────────────────────────
  function matchesPaper(paper) {
    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const haystack = (
        paper.title + ' ' +
        (paper.summary || '') + ' ' +
        paper.tags.join(' ') + ' ' +
        paper.section
      ).toLowerCase();
      if (!haystack.includes(q)) return false;
    }

    // Tag filter (AND across tag categories, OR within same category)
    if (activeFilters.size > 0) {
      // Group active filters by category
      const activeVenues  = [...activeFilters].filter(t => VENUE_TAGS.has(t));
      const activeYears   = [...activeFilters].filter(t => YEAR_TAGS.has(t));
      const activeTopics  = [...activeFilters].filter(t => !VENUE_TAGS.has(t) && !YEAR_TAGS.has(t));

      const paperTags = new Set(paper.tags);

      if (activeVenues.length  && !activeVenues.some(t  => paperTags.has(t)))  return false;
      if (activeYears.length   && !activeYears.some(t   => paperTags.has(t)))   return false;
      if (activeTopics.length  && !activeTopics.some(t  => paperTags.has(t)))  return false;
    }

    return true;
  }

  // ── Render papers ─────────────────────────────────────────────────────────
  function renderPapers() {
    const visible = papers.filter(matchesPaper);

    resultsCount.textContent = `${visible.length} paper${visible.length !== 1 ? 's' : ''}`;

    if (visible.length === 0) {
      grid.innerHTML = '';
      noResults.hidden = false;
      return;
    }
    noResults.hidden = true;

    grid.innerHTML = visible.map(p => renderCard(p)).join('');

    // Attach tag click handlers to cards
    grid.querySelectorAll('.paper-tag').forEach(btn => {
      btn.addEventListener('click', () => toggleFilter(btn.dataset.tag));
    });
  }

  function renderCard(paper) {
    const tagsHtml = paper.tags.map(t => {
      const active = activeFilters.has(t) ? ' class="paper-tag active-tag"' : ' class="paper-tag"';
      return `<span${active} data-tag="${escHtml(t)}">${escHtml(t)}</span>`;
    }).join('');

    const scoreHtml = paper.score
      ? `<span class="paper-score">Score: ${paper.score}</span>`
      : '';

    const issueHtml = paper.issue
      ? `<span class="paper-issue">Issue <a href="https://github.com/inoue0426/Paper-reading/issues/${paper.issue}" target="_blank" rel="noopener">#${paper.issue}</a></span>`
      : '';

    const summaryHtml = paper.summary
      ? `<p class="paper-summary">${highlight(paper.summary, searchQuery)}</p>`
      : '';

    const footerContent = (issueHtml || scoreHtml)
      ? `<div class="paper-footer">${issueHtml}${scoreHtml}</div>`
      : '';

    const titleHtml = paper.url
      ? `<a href="${escHtml(paper.url)}" target="_blank" rel="noopener">${highlight(paper.title, searchQuery)}</a>`
      : highlight(paper.title, searchQuery);

    return `
<article class="paper-card">
  <div class="paper-card-header">
    <span class="paper-section">${escHtml(paper.section)}</span>
    <h3 class="paper-title">${titleHtml}</h3>
  </div>
  ${summaryHtml}
  <div class="paper-tags">${tagsHtml}</div>
  ${footerContent}
</article>`;
  }

  // ── Filter tag buttons ──────────────────────────────────────────────────
  function toggleFilter(tag) {
    if (activeFilters.has(tag)) {
      activeFilters.delete(tag);
    } else {
      activeFilters.add(tag);
    }
    updateFilterUI();
    renderPapers();
  }

  function clearFilters() {
    activeFilters.clear();
    updateFilterUI();
    renderPapers();
  }

  function updateFilterUI() {
    document.querySelectorAll('.tag-btn').forEach(btn => {
      btn.classList.toggle('active', activeFilters.has(btn.dataset.tag));
    });
  }

  // ── Build sidebar tag buttons ───────────────────────────────────────────
  function buildTagButtons() {
    // Count papers per tag
    const counts = {};
    papers.forEach(p => p.tags.forEach(t => {
      counts[t] = (counts[t] || 0) + 1;
    }));

    const venueTags  = [];
    const yearTags   = [];
    const topicTags  = [];

    Object.keys(counts).forEach(tag => {
      if (VENUE_TAGS.has(tag))      venueTags.push(tag);
      else if (YEAR_TAGS.has(tag))  yearTags.push(tag);
      else                           topicTags.push(tag);
    });

    // Sort: venues by count desc, years desc, topics alpha
    venueTags.sort((a, b) => counts[b] - counts[a]);
    yearTags.sort((a, b) => Number(b) - Number(a));
    topicTags.sort();

    function makeBtn(tag) {
      const btn = document.createElement('button');
      btn.className = 'tag-btn';
      btn.dataset.tag = tag;
      btn.innerHTML = `${escHtml(tag)}<span class="count">${counts[tag]}</span>`;
      btn.addEventListener('click', () => toggleFilter(tag));
      return btn;
    }

    venueTags.forEach(t  => venueCont.appendChild(makeBtn(t)));
    yearTags.forEach(t   => yearCont.appendChild(makeBtn(t)));
    topicTags.forEach(t  => topicCont.appendChild(makeBtn(t)));
  }

  // ── Event listeners ─────────────────────────────────────────────────────
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    searchClear.hidden = searchQuery === '';
    renderPapers();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.hidden = true;
    searchInput.focus();
    renderPapers();
  });

  clearBtn.addEventListener('click', clearFilters);
  resetLink.addEventListener('click', e => { e.preventDefault(); clearFilters(); searchInput.value = ''; searchQuery = ''; searchClear.hidden = true; renderPapers(); });

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Close sidebar on outside click (mobile)
  document.addEventListener('click', e => {
    if (window.innerWidth <= 900 &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  // ── Init ────────────────────────────────────────────────────────────────
  buildTagButtons();
  renderPapers();
})();
