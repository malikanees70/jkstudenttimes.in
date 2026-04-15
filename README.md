# 🏔️ JK Updates

> Live updates, notifications, results and news from Kashmir University, JKBOSE, JKSSB and all Jammu & Kashmir exam boards — in one place.

---

## Features

| Feature | Details |
|---|---|
| **Kashmir University** | Notifications, Results, Date Sheets, Admissions |
| **JKBOSE** | Notifications, Class 10 & 12 Results, Date Sheets, Syllabus |
| **JKSSB** | Job Notifications, Exam Results, Schedule, Advertisements |
| **JK Results** | Aggregated results from KU, BOSE, JKSSB, JKPSC, SMVDU, IUST |
| **Education News** | Headlines from Greater Kashmir, Rising Kashmir, Daily Excelsior |
| **Live Ticker** | Scrolling headline bar showing latest updates |
| **Search** | Full-text search across all sections |
| **Filter Results** | Filter by organisation and year |
| **Dark / Light Theme** | Persisted via `localStorage` |
| **Auto Refresh** | Feeds refresh automatically every 5 minutes |
| **Responsive Design** | Works on mobile, tablet and desktop |

---

## Project Structure

```
JKupdates/
├── index.html      # Main HTML – layout, sections, navigation
├── styles.css      # All CSS – variables, responsive grid, components
├── app.js          # JavaScript – fetch logic, rendering, interactivity
├── README.md       # This file
└── .github/
    └── copilot-instructions.md
```

---

## Running Locally

Because the site uses `fetch()` for live RSS feeds, it needs to be served over HTTP (not opened as a plain `file://` URL).

### Option A – VS Code Live Server (Recommended)

1. Install the **Live Server** extension (`ritwickdey.liveserver`) in VS Code.
2. Right-click `index.html` → **Open with Live Server**.
3. The site opens at `http://127.0.0.1:5500`.

### Option B – Python HTTP Server

```bash
# Python 3
python -m http.server 5500
```
Then open `http://localhost:5500` in your browser.

### Option C – Node http-server

```bash
npx http-server . -p 5500
```

---

## Live Data

The site attempts to fetch live data from official portals via the **rss2json.com** RSS-to-JSON proxy. When a live feed is unavailable (network error, CORS, or no RSS feed on the portal), it gracefully falls back to curated seed data and displays a note with a direct link to the official portal.

| Portal | Official URL |
|---|---|
| Kashmir University | https://www.kashmiruniversity.net |
| KU Results | https://results.kashmiruniversity.net |
| JKBOSE | https://www.jkbose.nic.in |
| JKSSB | https://www.jkssb.nic.in |
| JKPSC | https://www.jkpsc.nic.in |
| SMVDU | https://smvdu.ac.in |
| IUST | https://iust.ac.in |

---

## Customisation

- **Add new portals:** Add entries to the `FEEDS` and `SEED` objects in `app.js`.
- **Colours:** Edit CSS custom properties (`--accent-*`) in `styles.css`.
- **Refresh interval:** Change the `5 * 60 * 1000` value in `initAutoRefresh()` in `app.js`.

---

## Disclaimer

All content is sourced from publicly available official government and university portals. JK Updates does not own any of the data — it aggregates public notifications for convenience only. Always verify information on the respective official portals.

---

*© 2026 JK Updates*
