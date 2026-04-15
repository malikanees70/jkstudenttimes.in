/* ═══════════════════════════════════════════════
JKUpdates.in — Main JavaScript
═══════════════════════════════════════════════ */

‘use strict’;

// ── DATA ──────────────────────────────────────────
const DB = [
{
id:“ku-001”, src:“ku”, cat:[“ku”], isNew:true, date:“2026-04-14”,
title:“Date Sheet for Annual Examination 2025 – B.A/B.Sc/B.Com (General) Semester VI”,
excerpt:“The Controller of Examinations notifies all concerned that the date sheet for Annual Examinations 2025 (Semester VI) stands released for B.A, B.Sc, and B.Com General courses.”,
tags:[“Date Sheet”,“Kashmir University”,“B.A”,“B.Sc”,“B.Com”,“Semester VI”],
officialUrl:“https://kashmiruniversity.net”,
body:`<p>The <strong>Controller of Examinations, University of Kashmir</strong>, Hazratbal Srinagar, notifies all students, colleges, and examination centres that the <strong>Date Sheet for Annual Examination 2025</strong> for B.A / B.Sc / B.Com (General) Semester VI has been released.</p>

<div class="hl">📅 Examinations commence: <strong>1st May 2025</strong>. Download the complete date sheet from the official portal.</div>
<h3>Key Instructions for Students</h3>
<ul>
<li>Carry your University Admit Card to the examination centre every day.</li>
<li>Report at least 30 minutes before the scheduled start time.</li>
<li>Mobile phones and electronic devices are strictly prohibited.</li>
<li>Write all required details on the answer booklet in blue or black ink.</li>
</ul>
<h3>Examination Schedule Overview</h3>
<table>
<tr><th>Course</th><th>Start Date</th><th>Timing</th></tr>
<tr><td>B.A (General) Sem VI</td><td>01 May 2025</td><td>10:00 AM – 1:00 PM</td></tr>
<tr><td>B.Sc (General) Sem VI</td><td>02 May 2025</td><td>10:00 AM – 1:00 PM</td></tr>
<tr><td>B.Com (General) Sem VI</td><td>03 May 2025</td><td>10:00 AM – 1:00 PM</td></tr>
</table>
<p>For the complete subject-wise date sheet, visit the official University of Kashmir website. Affiliated colleges should display the date sheet on their notice boards immediately.</p>`
  },
  {
    id:"ku-002", src:"ku", cat:["ku"], isNew:false, date:"2026-04-12",
    title:"Notice: Submission of Examination Forms – Regular & Ex-Students (Semester V)",
    excerpt:"Students who have not submitted examination forms for Semester V courses are advised to complete registration before the deadline to avoid late fee charges.",
    tags:["Examination Forms","Kashmir University","Semester V","Deadline"],
    officialUrl:"https://kashmiruniversity.net",
    body:`<p>The <strong>Controller of Examinations, University of Kashmir</strong>, notifies all Regular and Ex-Students registered in Semester V programmes that the last date for submission of Examination Forms is approaching.</p>
<div class="hl">⚠️ <strong>Last Date (no late fee):</strong> 30 April 2025 &nbsp;|&nbsp; <strong>With late fee (₹500):</strong> 10 May 2025</div>
<h3>How to Submit Examination Forms</h3>
<ul>
<li>Log in to the student portal at <strong>kashmiruniversity.net</strong>.</li>
<li>Navigate to "Examination Form Submission" under your dashboard.</li>
<li>Verify your registered subjects and fee payment status.</li>
<li>Complete payment via Net Banking / UPI / Debit Card.</li>
<li>Download and retain the acknowledgement receipt.</li>
</ul>`
  },
  {
    id:"ku-003", src:"ku", cat:["ku"], isNew:false, date:"2026-04-10",
    title:"Ph.D. Entrance Test 2025 – Schedule and Syllabus Announced",
    excerpt:"The University has released the schedule and subject-wise syllabus for the Ph.D. Entrance Test 2025. Eligible candidates must register online before the deadline.",
    tags:["Ph.D.","Entrance Test","Kashmir University","Research","2025"],
    officialUrl:"https://kashmiruniversity.net",
    body:`<p>The <strong>University of Kashmir</strong> announces the schedule for the <strong>Ph.D. Entrance Test 2025</strong>.</p>
<h3>Important Dates</h3>
<table>
<tr><th>Event</th><th>Date</th></tr>
<tr><td>Online Registration Opens</td><td>15 April 2025</td></tr>
<tr><td>Last Date for Registration</td><td>5 May 2025</td></tr>
<tr><td>Admit Card Download</td><td>15 May 2025</td></tr>
<tr><td>Ph.D. Entrance Test</td><td>25 May 2025</td></tr>
</table>
<h3>Eligibility</h3>
<ul>
<li>Master's degree with at least 55% marks (50% for SC/ST/PwD candidates).</li>
<li>Candidates who have qualified UGC-NET/JRF are exempted from the entrance test.</li>
</ul>`
  },
  {
    id:"ku-004", src:"ku", cat:["ku","results"], isNew:false, date:"2026-04-05",
    title:"Results Declared: B.Ed Semester IV Annual Examination 2024",
    excerpt:"Students who appeared in B.Ed Semester IV Annual Examination 2024 can check their results on the official KU results portal now.",
    tags:["Results","B.Ed","Kashmir University","Semester IV","2024"],
    officialUrl:"https://jkresults.nic.in",
    body:`<p>The <strong>Controller of Examinations, University of Kashmir</strong>, notifies that results of the <strong>B.Ed Semester IV Annual Examination 2024</strong> have been declared.</p>
<div class="hl">✅ Results are LIVE. Check at <strong>jkresults.nic.in</strong> or on the University portal.</div>
<h3>How to Check Your Result</h3>
<ul>
<li>Visit <strong>kashmiruniversity.net</strong> and click on "Results".</li>
<li>Alternatively visit <strong>jkresults.nic.in</strong>.</li>
<li>Enter your Roll Number and Registration Number.</li>
<li>View and download your result for future reference.</li>
</ul>`
  },
  {
    id:"bose-001", src:"bose", cat:["bose","results"], isNew:true, date:"2026-04-14",
    title:"JKBOSE Class 10 Annual Regular 2025 – Result Declared",
    excerpt:"JKBOSE has declared the Class 10th Annual Regular Examination 2025 result for both Jammu and Kashmir Divisions. Students can check their results immediately.",
    tags:["Results","JKBOSE","Class 10","2025","Annual Regular"],
    officialUrl:"https://jkbose.nic.in",
    body:`<p>The <strong>Jammu and Kashmir Board of School Education (JKBOSE)</strong> has officially declared the result of the <strong>Class 10th Annual Regular Examination 2025</strong> for both Divisions.</p>
<div class="hl">🎉 Results are DECLARED! Check now at <strong>jkbose.nic.in</strong></div>
<h3>Overall Pass Percentage</h3>
<table>
<tr><th>Division</th><th>Appeared</th><th>Passed</th><th>Pass %</th></tr>
<tr><td>Kashmir Division</td><td>1,02,450</td><td>81,960</td><td>80.0%</td></tr>
<tr><td>Jammu Division</td><td>98,320</td><td>76,690</td><td>78.0%</td></tr>
</table>
<h3>Steps to Check Your Result</h3>
<ul>
<li>Go to <strong>jkbose.nic.in</strong> or <strong>jkresults.nic.in</strong>.</li>
<li>Click on "Class 10 Annual Regular 2025 Result".</li>
<li>Enter your Roll Number.</li>
<li>View and download your Marks Certificate.</li>
</ul>`
  },
  {
    id:"bose-002", src:"bose", cat:["bose"], isNew:true, date:"2026-04-13",
    title:"Date Sheet: Class 11 Annual Regular Examination – Kashmir Division 2025",
    excerpt:"JKBOSE has released the date sheet for Class 11 Annual Regular Examination 2025 for Kashmir Division. Examinations commence from 5th May 2025.",
    tags:["Date Sheet","JKBOSE","Class 11","Kashmir Division","2025"],
    officialUrl:"https://jkbose.nic.in",
    body:`<p>The <strong>JKBOSE</strong> has released the <strong>Date Sheet for Class 11 Annual Regular Examination 2025 – Kashmir Division</strong>.</p>
<div class="hl">📅 Examinations begin: <strong>5th May 2025</strong> | Timing: <strong>10:00 AM – 1:00 PM</strong></div>
<h3>General Instructions</h3>
<ul>
<li>Carry your Admit Card / Hall Ticket to the examination centre every day.</li>
<li>Be present at least 15 minutes before the scheduled start time.</li>
<li>Use of unfair means will result in cancellation of the entire examination.</li>
</ul>`
  },
  {
    id:"bose-003", src:"bose", cat:["bose","admit"], isNew:false, date:"2026-04-09",
    title:"Admit Cards Released – Class 12 Annual Regular Examination 2025",
    excerpt:"JKBOSE has released Admit Cards for Class 12 Annual Regular Examination 2025. Students can download their hall tickets from the official portal.",
    tags:["Admit Card","JKBOSE","Class 12","2025","Hall Ticket"],
    officialUrl:"https://jkbose.nic.in",
    body:`<p>The <strong>J&K Board of School Education (JKBOSE)</strong> has made available the <strong>Admit Cards for Class 12 Annual Regular Examination 2025</strong>.</p>
<div class="hl">🎫 Admit Cards are AVAILABLE. Download now from <strong>jkbose.nic.in</strong></div>
<h3>How to Download Admit Card</h3>
<ul>
<li>Visit <strong>jkbose.nic.in</strong> and click on "Download Admit Card".</li>
<li>Enter your Registration Number and Date of Birth.</li>
<li>Download and take a colour printout.</li>
</ul>`
  },
  {
    id:"ssb-001", src:"ssb", cat:["ssb"], isNew:true, date:"2026-04-14",
    title:"JKSSB Recruitment 2025 – Advertisement for 1,200 Posts Across Departments",
    excerpt:"The J&K Services Selection Board has released a mega recruitment advertisement for 1,200 posts across various government departments. Online applications are open.",
    tags:["Recruitment","JKSSB","Jobs","2025","Government Jobs","J&K"],
    officialUrl:"https://jkssb.nic.in",
    body:`<p>The <strong>Jammu and Kashmir Services Selection Board (JKSSB)</strong> has issued a <strong>Recruitment Advertisement for 1,200 Posts</strong> across Government Departments.</p>
<div class="hl">🔔 Applications Open! Last Date: <strong>30 April 2025</strong></div>
<h3>Posts Available</h3>
<table>
<tr><th>Post Name</th><th>Department</th><th>Posts</th><th>Qualification</th></tr>
<tr><td>Junior Assistant</td><td>Finance</td><td>350</td><td>12th Pass + Computer Knowledge</td></tr>
<tr><td>Sub-Inspector</td><td>Various</td><td>200</td><td>Graduation</td></tr>
<tr><td>Panchayat Inspector</td><td>Rural Development</td><td>150</td><td>Graduation</td></tr>
<tr><td>Accountant</td><td>Finance</td><td>100</td><td>B.Com / CA Inter</td></tr>
<tr><td>Other Posts</td><td>Various</td><td>400</td><td>As per notification</td></tr>
</table>
<h3>How to Apply</h3>
<ul>
<li>Visit <strong>jkssb.nic.in</strong> and click "Apply Online" under Recruitment.</li>
<li>Register with your valid email address and mobile number.</li>
<li>Fill the application form and upload required documents.</li>
<li>Pay the application fee (General: ₹500 | SC/ST/PwD: ₹250).</li>
<li>Submit and download your confirmation receipt.</li>
</ul>`
  },
  {
    id:"ssb-002", src:"ssb", cat:["ssb","admit"], isNew:true, date:"2026-04-13",
    title:"Admit Card Download – Written Test for Junior Assistant Posts",
    excerpt:"Candidates who applied for Junior Assistant (Finance) posts can now download their Admit Cards from the official JKSSB portal.",
    tags:["Admit Card","JKSSB","Junior Assistant","Written Test","Finance"],
    officialUrl:"https://jkssb.nic.in",
    body:`<p>The <strong>JKSSB</strong> has released <strong>Admit Cards for the Written Test</strong> for the post of <strong>Junior Assistant (Finance Department)</strong>.</p>
<div class="hl">🎫 Admit Cards LIVE! Written Test Date: <strong>20 April 2025</strong></div>
<h3>How to Download JKSSB Admit Card</h3>
<ul>
<li>Visit <strong>jkssb.nic.in</strong> → Recruitment → Admit Card.</li>
<li>Enter your Application Number and Date of Birth.</li>
<li>Download and print the Admit Card in colour.</li>
</ul>
<h3>Exam Day Instructions</h3>
<ul>
<li>Carry Admit Card + valid Government-issued Photo ID.</li>
<li>Report at least 45 minutes before start time.</li>
<li>Electronic gadgets strictly prohibited.</li>
</ul>`
  },
  {
    id:"ssb-003", src:"ssb", cat:["ssb","results"], isNew:false, date:"2026-04-08",
    title:"Final Answer Key Released – Panchayat Inspector Written Examination",
    excerpt:"The final answer key for the Panchayat Inspector Written Examination has been published after considering all objections raised by candidates.",
    tags:["Answer Key","JKSSB","Panchayat Inspector","Rural Development"],
    officialUrl:"https://jkssb.nic.in",
    body:`<p>The <strong>JKSSB</strong> has published the <strong>Final Answer Key</strong> for the Written Examination for the post of <strong>Panchayat Inspector</strong>.</p>
<div class="hl">📋 Results based on the final answer key will be declared within 30 days.</div>
<h3>How to Check Final Answer Key</h3>
<ul>
<li>Visit <strong>jkssb.nic.in</strong> → Recruitment → Answer Keys.</li>
<li>Select "Panchayat Inspector Written Examination Final Answer Key".</li>
<li>Download the PDF and cross-check with your responses.</li>
</ul>`
  }
];

const SRC_LABELS = { ku:‘Kashmir University’, bose:‘JKBOSE’, ssb:‘JKSSB’ };

let allItems = [];
let activeFilter = ‘all’;

// ── PARTICLES ─────────────────────────────────────
function initParticles() {
const canvas = document.getElementById(‘particles’);
if (!canvas) return;
const ctx = canvas.getContext(‘2d’);
let W, H, particles = [];

function resize() {
W = canvas.width = window.innerWidth;
H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener(‘resize’, resize);

const COLORS = [‘rgba(0,229,204,’, ‘rgba(255,179,0,’, ‘rgba(99,102,241,’];

class Particle {
constructor() { this.reset(); }
reset() {
this.x = Math.random() * W;
this.y = Math.random() * H;
this.r = Math.random() * 1.5 + .3;
this.vx = (Math.random() - .5) * .3;
this.vy = (Math.random() - .5) * .3;
this.alpha = Math.random() * .4 + .1;
this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
}
update() {
this.x += this.vx; this.y += this.vy;
if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
}
draw() {
ctx.beginPath();
ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
ctx.fillStyle = this.color + this.alpha + ‘)’;
ctx.fill();
}
}

for (let i = 0; i < 80; i++) particles.push(new Particle());

// Draw connecting lines
function drawLines() {
for (let i = 0; i < particles.length; i++) {
for (let j = i + 1; j < particles.length; j++) {
const dx = particles[i].x - particles[j].x;
const dy = particles[i].y - particles[j].y;
const dist = Math.sqrt(dx * dx + dy * dy);
if (dist < 100) {
ctx.beginPath();
ctx.moveTo(particles[i].x, particles[i].y);
ctx.lineTo(particles[j].x, particles[j].y);
ctx.strokeStyle = `rgba(0,229,204,${.06 * (1 - dist / 100)})`;
ctx.lineWidth = .5;
ctx.stroke();
}
}
}
}

function loop() {
ctx.clearRect(0, 0, W, H);
particles.forEach(p => { p.update(); p.draw(); });
drawLines();
requestAnimationFrame(loop);
}
loop();
}

// ── PRELOADER ─────────────────────────────────────
function initPreloader() {
const pre = document.getElementById(‘preloader’);
if (!pre) return;
setTimeout(() => {
pre.classList.add(‘done’);
setTimeout(() => pre.remove(), 600);
}, 1400);
}

// ── UTILITIES ─────────────────────────────────────
function fmtDate(d) {
return new Date(d).toLocaleDateString(‘en-IN’, { day:‘numeric’, month:‘short’, year:‘numeric’ });
}

function badgeHtml(src) {
const lbls = { ku:‘Kashmir Uni’, bose:‘JKBOSE’, ssb:‘JKSSB’, results:‘Results’, admit:‘Admit Card’ };
return `<span class="badge badge-${src}">${lbls[src] || src.toUpperCase()}</span>`;
}

function cardHtml(item, delay) {
return `<div class="ncard fade-in" data-src="${item.src}" style="animation-delay:${delay}s" onclick="navigate('article','${item.id}')">
<div class="ncard-meta">
${badgeHtml(item.src)}
<span class="ncard-date">${fmtDate(item.date)}</span>
${item.isNew ? ‘<span class="ncard-new">● NEW</span>’ : ‘’}
</div>
<div class="ncard-title">${item.title}</div>
<div class="ncard-excerpt">${item.excerpt}</div>
<span class="read-more">Read full notification <span>→</span></span>

  </div>`;
}

// ── ROUTER ────────────────────────────────────────
function navigate(pageId, articleId) {
document.querySelectorAll(’.page’).forEach(p => p.classList.remove(‘active’));
document.querySelectorAll(’#mainNav a’).forEach(a => a.classList.toggle(‘active’, a.dataset.page === pageId));

const target = pageId === ‘article’ && articleId
? document.getElementById(‘page-article’)
: document.getElementById(‘page-’ + pageId) || document.getElementById(‘page-home’);

target.classList.add(‘active’);

if (pageId === ‘article’ && articleId) {
renderArticle(articleId);
history.pushState(null, ‘’, ‘#article/’ + articleId);
} else {
history.pushState(null, ‘’, ‘#’ + pageId);
}

if (pageId === ‘ku’)      renderCatFeed(‘kuFeed’, ‘ku’, ‘ku-count’);
if (pageId === ‘bose’)    renderCatFeed(‘boseFeed’, ‘bose’, ‘bose-count’);
if (pageId === ‘ssb’)     renderCatFeed(‘ssbFeed’, ‘ssb’, ‘ssb-count’);
if (pageId === ‘results’) renderCatFeed(‘resultsFeed’, ‘results’, ‘res-count’);
if (pageId === ‘admit’)   renderCatFeed(‘admitFeed’, ‘admit’, ‘adm-count’);

window.scrollTo({ top: 0, behavior: ‘smooth’ });
}

// ── HOME FEED ─────────────────────────────────────
function loadFeed(initial) {
const btn = document.getElementById(‘refreshBtn’);
const feed = document.getElementById(‘homeFeed’);
if (!initial) {
btn && btn.classList.add(‘spin’);
feed.innerHTML = ‘<div class="loading"><div class="loader"></div>Fetching latest notifications…</div>’;
}
setTimeout(() => {
allItems = […DB].sort((a, b) => new Date(b.date) - new Date(a.date));
applyFilter(activeFilter);
updateStats(allItems);
buildTicker(allItems);
btn && btn.classList.remove(‘spin’);
if (!initial) showToast(‘✓ Feed updated with latest notifications’);
}, initial ? 0 : 900);
}

function applyFilter(f) {
activeFilter = f;
document.querySelectorAll(’#homeTabs .ftab’).forEach(t => t.classList.toggle(‘active’, t.dataset.f === f));
const filtered = f === ‘all’ ? allItems : allItems.filter(i => i.cat.includes(f));
document.getElementById(‘homeFeed’).innerHTML = filtered.length
? filtered.map((it, i) => cardHtml(it, i * 0.05)).join(’’)
: ‘<div class="loading">No updates found for this category.</div>’;
// Animate counter
animateCount(document.getElementById(‘feed-count’), filtered.length);
}

function updateStats(items) {
animateCount(document.getElementById(‘s-ku’), items.filter(i => i.src === ‘ku’).length);
animateCount(document.getElementById(‘s-bose’), items.filter(i => i.src === ‘bose’).length);
animateCount(document.getElementById(‘s-ssb’), items.filter(i => i.src === ‘ssb’).length);
animateCount(document.getElementById(‘s-total’), items.length);
}

function animateCount(el, target) {
if (!el) return;
let start = 0;
const duration = 600;
const step = target / (duration / 16);
const t = setInterval(() => {
start = Math.min(start + step, target);
el.textContent = Math.floor(start);
if (start >= target) clearInterval(t);
}, 16);
}

// ── CATEGORY FEED ─────────────────────────────────
function renderCatFeed(feedId, cat, countId) {
const items = DB.filter(i => i.cat.includes(cat)).sort((a, b) => new Date(b.date) - new Date(a.date));
const f = document.getElementById(feedId);
if (f) f.innerHTML = items.length
? items.map((it, i) => cardHtml(it, i * 0.05)).join(’’)
: ‘<div class="loading">No items found.</div>’;
const c = document.getElementById(countId);
if (c) c.textContent = items.length + ’ notification’ + (items.length !== 1 ? ‘s’ : ‘’) + ’ found’;
}

// ── ARTICLE RENDER ────────────────────────────────
function renderArticle(id) {
const art = DB.find(a => a.id === id);
if (!art) return;
const sp = art.src;

document.getElementById(‘artBreadcrumb’).innerHTML =
`<a onclick="navigate('home')">Home</a><span class="sep">/</span> <a onclick="navigate('${sp}')">${SRC_LABELS[sp] || sp}</a><span class="sep">/</span> <span>${art.title.substring(0, 50)}…</span>`;

document.getElementById(‘articleContent’).innerHTML = `<div class="article-hdr"> ${badgeHtml(art.src)} <div class="article-title">${art.title}</div> <div class="article-byline"> <span>📅 ${fmtDate(art.date)}</span> <span>🏛️ ${SRC_LABELS[art.src] || art.src}</span> ${art.isNew ? '<span style="color:var(--coral)">🔴 NEW</span>' : ''} </div> </div> <div class="article-body">${art.body}</div> <div class="art-tags">${art.tags.map(t =>`<span class="tag">#${t}</span>`).join('')}</div> <div class="art-source-note"> <strong>Source:</strong> Aggregated from the official portal at <a href="${art.officialUrl}" target="_blank" rel="noopener noreferrer">${art.officialUrl}</a>. Always verify critical details before taking action. </div>`;

const related = DB.filter(i => i.id !== id && i.src === art.src).slice(0, 4);
document.getElementById(‘relatedFeed’).innerHTML = related.map((it, i) => cardHtml(it, i * 0.07)).join(’’)
|| ‘<div class="loading">No related notifications.</div>’;
}

// ── TICKER ────────────────────────────────────────
function buildTicker(items) {
const top = items.slice(0, 12);
const html = top.map(i =>
`<span class="ticker-item" onclick="navigate('article','${i.id}')">${i.title}</span>`
).join(’’);
const track = document.getElementById(‘tickerTrack’);
if (track) track.innerHTML = html + html;
}

// ── SEARCH ────────────────────────────────────────
function initSearch() {
const inp = document.getElementById(‘searchInput’);
if (!inp) return;
inp.addEventListener(‘input’, () => {
const q = inp.value.trim().toLowerCase();
if (!q) { applyFilter(activeFilter); return; }
const filtered = allItems.filter(i =>
i.title.toLowerCase().includes(q) || i.excerpt.toLowerCase().includes(q) || i.tags.some(t => t.toLowerCase().includes(q))
);
document.getElementById(‘homeFeed’).innerHTML = filtered.length
? filtered.map((it, i) => cardHtml(it, i * 0.04)).join(’’)
: ‘<div class="loading">No results found for “’ + q + ‘”</div>’;
});
}

// ── TOAST ─────────────────────────────────────────
function showToast(msg) {
let t = document.getElementById(‘toast’);
if (!t) { t = document.createElement(‘div’); t.id = ‘toast’; t.className = ‘toast’; document.body.appendChild(t); }
t.textContent = msg;
t.classList.add(‘show’);
setTimeout(() => t.classList.remove(‘show’), 3000);
}

// ── SCROLL TO TOP ─────────────────────────────────
function initScrollTop() {
const btn = document.getElementById(‘scrollTop’);
if (!btn) return;
window.addEventListener(‘scroll’, () => btn.classList.toggle(‘visible’, window.scrollY > 400));
btn.addEventListener(‘click’, () => window.scrollTo({ top: 0, behavior: ‘smooth’ }));
}

// ── CONTACT FORM ──────────────────────────────────
window.submitContact = function () {
const n = document.getElementById(‘cName’).value.trim();
const e = document.getElementById(‘cEmail’).value.trim();
const s = document.getElementById(‘cSubject’).value.trim();
const m = document.getElementById(‘cMessage’).value.trim();
if (!n || !e || !s || !m) { showToast(‘⚠ Please fill in all fields.’); return; }
if (!/\S+@\S+.\S+/.test(e)) { showToast(‘⚠ Please enter a valid email address.’); return; }
document.getElementById(‘formSuccess’).style.display = ‘block’;
[‘cName’, ‘cEmail’, ‘cSubject’, ‘cMessage’].forEach(id => document.getElementById(id).value = ‘’);
showToast(‘✓ Message sent successfully!’);
};

// ── HASH ROUTING ──────────────────────────────────
function handleHash() {
const h = location.hash.replace(’#’, ‘’);
if (!h || h === ‘home’) { navigate(‘home’); return; }
if (h.startsWith(‘article/’)) navigate(‘article’, h.replace(‘article/’, ‘’));
else navigate(h);
}

// ── NAV DELEGATION ────────────────────────────────
function initNav() {
document.getElementById(‘mainNav’).addEventListener(‘click’, e => {
const a = e.target.closest(‘a[data-page]’);
if (a) { e.preventDefault(); navigate(a.dataset.page); }
});
document.getElementById(‘homeTabs’).addEventListener(‘click’, e => {
const t = e.target.closest(’.ftab’);
if (t) applyFilter(t.dataset.f);
});
}

// ── INTERSECTION OBSERVER for fade-in ────────────
function initObserver() {
const obs = new IntersectionObserver((entries) => {
entries.forEach(e => {
if (e.isIntersecting) { e.target.style.animationPlayState = ‘running’; obs.unobserve(e.target); }
});
}, { threshold: .1 });
document.querySelectorAll(’.fade-in’).forEach(el => {
el.style.animationPlayState = ‘paused’;
obs.observe(el);
});
}

// ── DATE ──────────────────────────────────────────
function setDate() {
const el = document.getElementById(‘dateStr’);
const pv = document.getElementById(‘privDate’);
const d = new Date().toLocaleDateString(‘en-IN’, { weekday:‘long’, year:‘numeric’, month:‘long’, day:‘numeric’ });
if (el) el.textContent = d;
if (pv) pv.textContent = new Date().toLocaleDateString(‘en-IN’, { year:‘numeric’, month:‘long’, day:‘numeric’ });
}

// ── INIT ──────────────────────────────────────────
document.addEventListener(‘DOMContentLoaded’, () => {
initParticles();
initPreloader();
setDate();
initNav();
loadFeed(true);
initSearch();
initScrollTop();
handleHash();
window.addEventListener(‘popstate’, handleHash);
setInterval(loadFeed, 10 * 60 * 1000);

// Re-init observer on page transitions
const origNav = navigate;
window.navigate = function (pageId, articleId) {
origNav(pageId, articleId);
setTimeout(initObserver, 50);
};
initObserver();
});