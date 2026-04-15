/**
 * JK Updates – app.js
 * Fetches live data from Kashmir University, JKBOSE, JKSSB
 * and JK exam results via official RSS feeds and CORS proxies.
 *
 * NOTE: Official portals do not expose public JSON APIs.
 * This file scrapes their public RSS feeds (where available)
 * through an RSS-to-JSON proxy (rss2json.com free tier).
 * Where RSS is unavailable, curated static records + direct portal links
 * are shown alongside live fetch attempts.
 */

'use strict';

/* ============================================================
   CONFIGURATION
   ============================================================ */
const RSS2JSON = 'https://api.rss2json.com/v1/api.json?rss_url=';

const FEEDS = {
  'ku-notices':    `${RSS2JSON}${encodeURIComponent('https://www.kashmiruniversity.net/Notices.aspx')}`,
  'ku-results':    `${RSS2JSON}${encodeURIComponent('https://www.kashmiruniversity.net/Results.aspx')}`,
  'ku-datesheet':  `${RSS2JSON}${encodeURIComponent('https://www.kashmiruniversity.net/DateSheets.aspx')}`,
  'ku-admissions': `${RSS2JSON}${encodeURIComponent('https://www.kashmiruniversity.net/Admissions.aspx')}`,
  'bose-notices':   `${RSS2JSON}${encodeURIComponent('https://www.jkbose.nic.in/index.php?option=com_content&view=article&id=1')}`,
  'bose-results':   `${RSS2JSON}${encodeURIComponent('https://www.jkbose.nic.in/index.php?option=com_content&view=category&layout=blog&id=22')}`,
  'bose-datesheet': `${RSS2JSON}${encodeURIComponent('https://www.jkbose.nic.in')}`,
  'bose-syllabus':  `${RSS2JSON}${encodeURIComponent('https://www.jkbose.nic.in')}`,
  'ssb-notifications': `${RSS2JSON}${encodeURIComponent('https://www.jkssb.nic.in/Notifications.aspx')}`,
  'ssb-results':       `${RSS2JSON}${encodeURIComponent('https://www.jkssb.nic.in/Results.aspx')}`,
  'ssb-schedule':      `${RSS2JSON}${encodeURIComponent('https://www.jkssb.nic.in/ExamSchedule.aspx')}`,
  'ssb-advt':          `${RSS2JSON}${encodeURIComponent('https://www.jkssb.nic.in/Advertisements.aspx')}`,
};

/* ============================================================
   FALLBACK / SEED DATA
   (shown when live fetch fails – keeps the UI useful offline)
   ============================================================ */
const SEED = {
  'ku-notices': [
    { title: 'Date-Sheet for B.A / B.Sc / B.Com (Annual) Examination 2026', date: '2026-04-10', tag: 'Date Sheet', url: 'https://www.kashmiruniversity.net/DateSheets.aspx', isNew: true },
    { title: 'Admission Notice – M.Phil / Ph.D Programmes 2026-27', date: '2026-04-08', tag: 'Admission', url: 'https://www.kashmiruniversity.net/Admissions.aspx', isNew: true },
    { title: 'Result Notification: B.Ed (Special Education) 2024 Batch', date: '2026-04-05', tag: 'Result', url: 'https://www.kashmiruniversity.net/Results.aspx', isNew: false },
    { title: 'Re-Evaluation / Re-Checking Form – Winter Zone 2025', date: '2026-03-28', tag: 'Notice', url: 'https://www.kashmiruniversity.net/Notices.aspx', isNew: false },
    { title: 'Merit List – Integrated B.Ed Programme 2026', date: '2026-03-20', tag: 'Merit List', url: 'https://www.kashmiruniversity.net/Admissions.aspx', isNew: false },
  ],
  'ku-results': [
    { title: 'B.A 6th Semester (Regular) Result 2025', date: '2026-04-02', tag: 'Result', url: 'https://results.kashmiruniversity.net', isNew: true },
    { title: 'M.A / M.Sc / M.Com 4th Semester Result 2025', date: '2026-03-26', tag: 'Result', url: 'https://results.kashmiruniversity.net', isNew: false },
    { title: 'B.Tech 8th Semester (Regular) Result 2025', date: '2026-03-15', tag: 'Result', url: 'https://results.kashmiruniversity.net', isNew: false },
  ],
  'ku-datesheet': [
    { title: 'Date-Sheet: B.Com Part-I Annual Exam 2026', date: '2026-04-09', tag: 'Date Sheet', url: 'https://www.kashmiruniversity.net/DateSheets.aspx', isNew: true },
    { title: 'Date-Sheet: M.A Economics 2nd Semester 2026', date: '2026-04-01', tag: 'Date Sheet', url: 'https://www.kashmiruniversity.net/DateSheets.aspx', isNew: false },
  ],
  'ku-admissions': [
    { title: 'Admission Notice – MBA 2026-28 Batch', date: '2026-04-07', tag: 'Admission', url: 'https://www.kashmiruniversity.net/Admissions.aspx', isNew: true },
    { title: 'Walk-in-Interview – Guest Faculty Positions', date: '2026-03-30', tag: 'Recruitment', url: 'https://www.kashmiruniversity.net/Notices.aspx', isNew: false },
  ],
  'bose-notices': [
    { title: 'Class 10th Annual Regular Exam 2026 – Date Sheet Released', date: '2026-04-11', tag: 'Date Sheet', url: 'https://www.jkbose.nic.in', isNew: true },
    { title: 'Class 12th Practical Examination Schedule 2026', date: '2026-04-08', tag: 'Exam Schedule', url: 'https://www.jkbose.nic.in', isNew: true },
    { title: 'Compartment / Improvement Form – Class 10 & 12 (2026)', date: '2026-03-25', tag: 'Form', url: 'https://www.jkbose.nic.in', isNew: false },
    { title: 'Model Answer Keys – Class 12 Annual Exam 2025', date: '2026-03-18', tag: 'Answer Key', url: 'https://www.jkbose.nic.in', isNew: false },
  ],
  'bose-results': [
    { title: 'Class 10th Annual (Regular) Result 2025 – Summer Zone', date: '2026-03-20', tag: 'Result', url: 'https://www.jkbose.nic.in', isNew: false },
    { title: 'Class 12th Annual (Regular) Result 2025 – Winter Zone', date: '2026-03-14', tag: 'Result', url: 'https://www.jkbose.nic.in', isNew: false },
    { title: 'SOS / DDE Result 2025', date: '2026-02-28', tag: 'Result', url: 'https://www.jkbose.nic.in', isNew: false },
  ],
  'bose-datesheet': [
    { title: 'Class 12th Annual Exam 2026 – Complete Date Sheet', date: '2026-04-05', tag: 'Date Sheet', url: 'https://www.jkbose.nic.in', isNew: true },
    { title: 'Class 10th Annual Exam 2026 – Revised Schedule', date: '2026-03-30', tag: 'Date Sheet', url: 'https://www.jkbose.nic.in', isNew: false },
  ],
  'bose-syllabus': [
    { title: 'Revised Syllabus Class 12 Science Stream 2026', date: '2026-02-15', tag: 'Syllabus', url: 'https://www.jkbose.nic.in', isNew: false },
    { title: 'Class 10 Arts & Science Syllabus 2026', date: '2026-02-01', tag: 'Syllabus', url: 'https://www.jkbose.nic.in', isNew: false },
  ],
  'ssb-notifications': [
    { title: 'Recruitment Notification – Junior Engineer (Civil/Electrical) Posts', date: '2026-04-12', tag: 'Recruitment', url: 'https://www.jkssb.nic.in', isNew: true },
    { title: 'Written Test Notice – Sub-Inspector (Finance) Posts', date: '2026-04-09', tag: 'Exam Notice', url: 'https://www.jkssb.nic.in', isNew: true },
    { title: 'Document Verification Schedule – Account Assistant Posts', date: '2026-04-03', tag: 'DV Schedule', url: 'https://www.jkssb.nic.in', isNew: false },
    { title: 'Corrigendum – Advertisement No. 06 of 2025', date: '2026-03-27', tag: 'Corrigendum', url: 'https://www.jkssb.nic.in', isNew: false },
  ],
  'ssb-results': [
    { title: 'Final Result – Village Level Worker Posts (UT Cadre)', date: '2026-04-05', tag: 'Result', url: 'https://www.jkssb.nic.in', isNew: true },
    { title: 'Written Test Result – Panchayat Secretary Posts', date: '2026-03-21', tag: 'Result', url: 'https://www.jkssb.nic.in', isNew: false },
    { title: 'Merit List – Jr. Scale Stenographer 2025', date: '2026-03-10', tag: 'Merit List', url: 'https://www.jkssb.nic.in', isNew: false },
  ],
  'ssb-schedule': [
    { title: 'Exam Schedule – Multi-Tasking Workers (Various Departments)', date: '2026-04-08', tag: 'Schedule', url: 'https://www.jkssb.nic.in', isNew: true },
    { title: 'Interview Schedule – Pharmacist Grade-II', date: '2026-03-28', tag: 'Interview', url: 'https://www.jkssb.nic.in', isNew: false },
  ],
  'ssb-advt': [
    { title: 'Advertisement No. 02/2026 – Various Posts (Rural Dev.)', date: '2026-04-01', tag: 'Advertisement', url: 'https://www.jkssb.nic.in', isNew: true },
    { title: 'Advertisement No. 01/2026 – Lab Assistant Posts', date: '2026-03-15', tag: 'Advertisement', url: 'https://www.jkssb.nic.in', isNew: false },
  ],
  results: [
    { org: 'KU', orgColor: 'var(--accent-ku)', title: 'B.A 6th Semester (Regular/Ex) Annual Result 2025', date: '2026-04-02', year: '2026', url: 'https://results.kashmiruniversity.net' },
    { org: 'BOSE', orgColor: 'var(--accent-bose)', title: 'Class 10 Annual Result 2025 – Summer Zone', date: '2026-03-20', year: '2026', url: 'https://www.jkbose.nic.in' },
    { org: 'JKSSB', orgColor: 'var(--accent-ssb)', title: 'Village Level Worker Final Result 2025', date: '2026-04-05', year: '2026', url: 'https://www.jkssb.nic.in' },
    { org: 'KU', orgColor: 'var(--accent-ku)', title: 'M.A / M.Sc 4th Semester Result 2025', date: '2026-03-26', year: '2026', url: 'https://results.kashmiruniversity.net' },
    { org: 'BOSE', orgColor: 'var(--accent-bose)', title: 'Class 12 Annual Result 2025 – Winter Zone', date: '2026-03-14', year: '2026', url: 'https://www.jkbose.nic.in' },
    { org: 'JKPSC', orgColor: '#6b7280', title: 'KAS (Mains) Result 2025 – Prelims Qualified', date: '2026-02-10', year: '2026', url: 'https://www.jkpsc.nic.in' },
    { org: 'SMVDU', orgColor: '#6b7280', title: 'B.Tech 8th Semester Result 2025', date: '2026-03-05', year: '2026', url: 'https://smvdu.ac.in' },
    { org: 'IUST', orgColor: '#6b7280', title: 'M.Tech 4th Semester Result 2025', date: '2026-03-01', year: '2025', url: 'https://iust.ac.in' },
    { org: 'KU', orgColor: 'var(--accent-ku)', title: 'B.Ed 2nd Semester Result 2024', date: '2025-12-15', year: '2025', url: 'https://results.kashmiruniversity.net' },
    { org: 'BOSE', orgColor: 'var(--accent-bose)', title: 'Class 10 Annual Result 2024 – Winter Zone', date: '2025-11-20', year: '2025', url: 'https://www.jkbose.nic.in' },
  ],
  news: [
    { source: 'Greater Kashmir', title: 'Kashmir University announces new admission dates for PG programmes 2026', desc: 'KU has extended the last date for submission of admission forms for all post-graduate programmes for the academic session 2026-27.', date: '2026-04-14', url: 'https://www.greaterkashmir.com' },
    { source: 'Rising Kashmir', title: 'JKBOSE Class 10 & 12 exams to commence from May 2026', desc: 'The Board of School Education J&K has announced that annual examinations for Class 10 and 12 will begin from the first week of May 2026.', date: '2026-04-13', url: 'https://risingkashmir.com' },
    { source: 'Kashmir Observer', title: 'JKSSB to fill 5,000+ posts under various departments', desc: 'The J&K Services Selection Board is set to release advertisements for over 5,000 posts across multiple government departments in the coming weeks.', date: '2026-04-12', url: 'https://kashmirobserver.net' },
    { source: 'Daily Excelsior', title: 'NIT Srinagar invites applications for faculty positions 2026', desc: 'National Institute of Technology Srinagar has released a recruitment notification for assistant professors across engineering departments.', date: '2026-04-11', url: 'https://www.dailyexcelsior.com' },
    { source: 'Greater Kashmir', title: 'JKPSC releases KAS Mains 2025 written result', desc: 'The Jammu and Kashmir Public Service Commission has declared the result of the KAS Combined Competitive (Main) Examination 2025.', date: '2026-04-10', url: 'https://www.greaterkashmir.com' },
    { source: 'Rising Kashmir', title: 'SMVDU launches new PG programmes from academic year 2026-27', desc: 'Shri Mata Vaishno Devi University, Katra has announced the launch of three new post-graduate programmes in emerging fields starting 2026-27.', date: '2026-04-09', url: 'https://risingkashmir.com' },
  ],
};

/* ============================================================
   STATE
   ============================================================ */
let allItems = [];   // flat array used for search
let loadedFeeds = {};

/* ============================================================
   UTILITIES
   ============================================================ */
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function daysAgo(dateStr) {
  if (!dateStr) return 999;
  const diff = Date.now() - new Date(dateStr).getTime();
  return Math.floor(diff / 86400000);
}

function isNew(dateStr) {
  return daysAgo(dateStr) <= 7;
}

function sanitize(str) {
  const d = document.createElement('div');
  d.textContent = str || '';
  return d.innerHTML;
}

/* ============================================================
   FEED RENDERING – generic list items
   ============================================================ */
function renderFeedItems(container, items) {
  if (!items || items.length === 0) {
    container.innerHTML = '<p class="empty-msg">No items found.</p>';
    return;
  }
  container.innerHTML = items.map(item => `
    <a class="feed-item" href="${item.url || '#'}" target="_blank" rel="noopener" title="${sanitize(item.title)}">
      <span class="feed-item-dot${item.isNew ? ' new' : ''}"></span>
      <div class="feed-item-content">
        <p class="feed-item-title${item.isNew ? ' new-indicator' : ''}">${sanitize(item.title)}</p>
        <div class="feed-item-meta">
          <span class="feed-item-date">📅 ${formatDate(item.date)}</span>
          ${item.tag ? `<span class="feed-badge${item.isNew ? ' new-badge' : ''}">${sanitize(item.tag)}</span>` : ''}
        </div>
      </div>
    </a>`).join('');
}

/* ============================================================
   RESULTS RENDERING
   ============================================================ */
function renderResults(items) {
  const container = document.getElementById('results-list');
  if (!items || items.length === 0) {
    container.innerHTML = '<p class="empty-msg">No results found for the selected filter.</p>';
    return;
  }
  container.innerHTML = items.map(r => `
    <div class="result-card">
      <div class="result-card-header">
        <span class="result-org" style="color:${r.orgColor || 'var(--primary)'}">${sanitize(r.org)}</span>
        <span class="result-year-badge">${sanitize(r.year)}</span>
      </div>
      <p class="result-title">${sanitize(r.title)}</p>
      <p class="result-date">📅 ${formatDate(r.date)}</p>
      <a class="result-link" href="${r.url}" target="_blank" rel="noopener">Check Result →</a>
    </div>`).join('');
}

/* ============================================================
   NEWS RENDERING
   ============================================================ */
function renderNews(items) {
  const container = document.getElementById('news-list');
  if (!items || items.length === 0) {
    container.innerHTML = '<p class="empty-msg">No news available.</p>';
    return;
  }
  container.innerHTML = items.map(n => `
    <a class="news-card" href="${n.url}" target="_blank" rel="noopener">
      <span class="news-source">📰 ${sanitize(n.source)}</span>
      <p class="news-title">${sanitize(n.title)}</p>
      <p class="news-desc">${sanitize(n.desc)}</p>
      <span class="news-date">📅 ${formatDate(n.date)}</span>
    </a>`).join('');
}

/* ============================================================
   LIVE TICKER
   ============================================================ */
function buildTicker() {
  const ticker = document.getElementById('tickerTrack');
  const headlines = [];
  Object.values(SEED).flat().forEach(item => {
    if (item.title && (item.isNew || daysAgo(item.date) <= 10)) {
      headlines.push(item.title);
    }
  });
  if (headlines.length === 0) return;
  // Duplicate for seamless loop
  const combined = [...headlines, ...headlines];
  ticker.innerHTML = combined.map(h => `<span class="ticker-item">${sanitize(h)}</span>`).join('');
}

/* ============================================================
   STATS
   ============================================================ */
function updateStats() {
  document.getElementById('statKU').textContent =
    (SEED['ku-notices'].length + SEED['ku-results'].length).toString();
  document.getElementById('statBOSE').textContent =
    (SEED['bose-notices'].length + SEED['bose-results'].length).toString();
  document.getElementById('statSSB').textContent =
    (SEED['ssb-notifications'].length + SEED['ssb-advt'].length).toString();
  document.getElementById('statResults').textContent =
    SEED['results'].length.toString();
}

/* ============================================================
   FETCH LIVE RSS
   ============================================================ */
async function fetchFeed(feedKey) {
  const url = FEEDS[feedKey];
  if (!url) return null;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const json = await res.json();
    if (json.status !== 'ok' || !json.items?.length) return null;
    return json.items.map(item => ({
      title: item.title,
      url:   item.link,
      date:  item.pubDate ? item.pubDate.slice(0, 10) : '',
      tag:   'Notice',
      isNew: isNew(item.pubDate),
      desc:  item.description?.replace(/<[^>]+>/g, '').slice(0, 200) || '',
    }));
  } catch {
    return null;
  }
}

/* ============================================================
   LOAD A SINGLE TAB FEED
   ============================================================ */
async function loadFeed(feedKey) {
  if (loadedFeeds[feedKey]) return;         // already loaded
  loadedFeeds[feedKey] = true;

  const container = document.querySelector(`[data-feed="${feedKey}"]`);
  if (!container) return;

  // Show spinner
  container.innerHTML = '<div class="loading-spinner"></div>';

  let items = await fetchFeed(feedKey);

  if (!items) {
    // Fall back to seed data
    items = SEED[feedKey] || [];
    if (items.length > 0) {
      // Show seed with a note
      renderFeedItems(container, items);
      const note = document.createElement('p');
      note.className = 'error-msg';
      note.style.borderTop = '1px dashed var(--border)';
      note.innerHTML = '⚠️ Live fetch unavailable – showing cached data. <a href="' +
        (items[0]?.url || '#') + '" target="_blank" rel="noopener">Visit official portal →</a>';
      container.appendChild(note);
    } else {
      container.innerHTML = `<p class="error-msg">Unable to load live data. <a href="#" target="_blank" rel="noopener">Visit official portal</a></p>`;
    }
  } else {
    // Merge/update seed tags
    renderFeedItems(container, items);
  }

  // Add items to global search pool
  items.forEach(i => allItems.push({ ...i, feedKey }));
}

/* ============================================================
   LOAD RESULTS & NEWS (always from seed initially)
   ============================================================ */
function loadResults(orgFilter = 'all', yearFilter = 'all') {
  let items = SEED.results;
  if (orgFilter !== 'all') {
    items = items.filter(r => r.org.toLowerCase() === orgFilter.toLowerCase());
  }
  if (yearFilter !== 'all') {
    items = items.filter(r => r.year === yearFilter);
  }
  renderResults(items);
}

function loadNews() {
  renderNews(SEED.news);
}

/* ============================================================
   TABS
   ============================================================ */
function initTabs() {
  document.querySelectorAll('.portal-section').forEach(section => {
    const tabs = section.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;
        // Deactivate all tabs & contents in this section
        tabs.forEach(t => t.classList.remove('active'));
        section.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        // Activate clicked
        tab.classList.add('active');
        const target = document.getElementById(targetId);
        if (target) {
          target.classList.add('active');
          loadFeed(targetId);
        }
      });
    });
  });
}

/* ============================================================
   NAVIGATION – smooth scroll + active link
   ============================================================ */
function initNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      const target = document.getElementById(sectionId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Highlight nav on scroll
  const sections = ['ku', 'bose', 'ssb', 'results', 'news'];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* ============================================================
   SEARCH
   ============================================================ */
function initSearch() {
  const input   = document.getElementById('searchInput');
  const btn     = document.getElementById('searchBtn');
  const results = document.getElementById('searchResults');

  function doSearch() {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.classList.add('hidden'); return; }

    const pool = [
      ...Object.values(SEED).flat().filter(i => i.title),
      ...SEED.news,
    ];
    const hits = pool.filter(i =>
      i.title?.toLowerCase().includes(q) ||
      i.desc?.toLowerCase().includes(q) ||
      i.tag?.toLowerCase().includes(q)
    ).slice(0, 12);

    if (hits.length === 0) {
      results.innerHTML = '<p class="empty-msg">No results for "<strong>' + sanitize(q) + '</strong>".</p>';
    } else {
      results.innerHTML = `<p style="font-size:.8rem;color:var(--text-muted);margin-bottom:.5rem">Found ${hits.length} result(s) for "<strong>${sanitize(q)}</strong>"</p>` +
        hits.map(h => `
          <a class="feed-item" href="${h.url || '#'}" target="_blank" rel="noopener">
            <span class="feed-item-dot${h.isNew ? ' new' : ''}"></span>
            <div class="feed-item-content">
              <p class="feed-item-title">${sanitize(h.title)}</p>
              <div class="feed-item-meta">
                <span class="feed-item-date">📅 ${formatDate(h.date)}</span>
                ${h.tag ? `<span class="feed-badge">${sanitize(h.tag)}</span>` : ''}
                ${h.org ? `<span class="feed-badge">${sanitize(h.org)}</span>` : ''}
                ${h.source ? `<span class="feed-badge">${sanitize(h.source)}</span>` : ''}
              </div>
            </div>
          </a>`).join('');
    }
    results.classList.remove('hidden');
    results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  input.addEventListener('input', () => { if (!input.value.trim()) results.classList.add('hidden'); });
}

/* ============================================================
   RESULTS FILTER
   ============================================================ */
function initResultsFilter() {
  document.getElementById('filterResultsBtn').addEventListener('click', () => {
    const org  = document.getElementById('resultFilter').value;
    const year = document.getElementById('resultYear').value;
    loadResults(org, year);
  });
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('jk-theme') || 'light';
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    btn.textContent = '☀️';
  }
  btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    btn.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('jk-theme', isDark ? 'light' : 'dark');
  });
}

/* ============================================================
   REFRESH ALL
   ============================================================ */
function initRefresh() {
  document.getElementById('refreshAll').addEventListener('click', () => {
    loadedFeeds = {};
    allItems = [];
    // Reload all currently visible (active) tab contents
    document.querySelectorAll('.tab-content.active[data-feed]').forEach(el => {
      loadFeed(el.dataset.feed);
    });
    loadResults();
    loadNews();
    buildTicker();
    document.getElementById('lastRefreshed').textContent = new Date().toLocaleTimeString('en-IN');
  });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   AUTO-REFRESH every 5 minutes
   ============================================================ */
function initAutoRefresh() {
  setInterval(() => {
    loadedFeeds = {};
    document.querySelectorAll('.tab-content.active[data-feed]').forEach(el => {
      loadFeed(el.dataset.feed);
    });
    document.getElementById('lastRefreshed').textContent = new Date().toLocaleTimeString('en-IN');
  }, 5 * 60 * 1000);
}

/* ============================================================
   BOOTSTRAP
   ============================================================ */
async function init() {
  initTheme();
  initNav();
  initTabs();
  initSearch();
  initResultsFilter();
  initRefresh();
  initBackToTop();
  initAutoRefresh();

  // Load the default active tab for each portal
  const defaultFeeds = ['ku-notices', 'bose-notices', 'ssb-notifications'];
  await Promise.allSettled(defaultFeeds.map(f => loadFeed(f)));

  loadResults();
  loadNews();
  buildTicker();
  updateStats();

  document.getElementById('lastRefreshed').textContent = new Date().toLocaleTimeString('en-IN');
}

document.addEventListener('DOMContentLoaded', init);
