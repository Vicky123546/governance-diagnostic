# CCC Governance & Regulatory Readiness Diagnostic™

A structured, interactive governance maturity assessment tool built for CCC Consultancy Group Ltd. Runs entirely in the browser — no server, no database, no backend required.

---

## Files in this repository

| File | Purpose |
|---|---|
| `index.html` | Landing page — introduces the tool and starts the diagnostic |
| `survey.html` | 36 scenario-based questions, one at a time with progress tracking |
| `results.html` | Full results: radar chart, section scores, score breakdowns, and recommendations |
| `questions.js` | All questions, scoring logic, result descriptions, and recommendation text |
| `logo.png` | **Add your own CCC logo file here** (PNG, ~80–120px height recommended) |

---

## How to publish on GitHub Pages — step by step

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up if you do not already have one.

### Step 2 — Create a new repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `governance-diagnostic`
3. Set visibility to **Public**
4. Leave all other defaults and click **Create repository**

### Step 3 — Upload your files
1. On the repository page, click **Add file → Upload files**
2. Upload all five files: `index.html`, `survey.html`, `results.html`, `questions.js`, `logo.png`
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to repository **Settings**
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set branch to **main**, folder to **/ (root)**
5. Click **Save**

### Step 5 — Your site is live
After 1–2 minutes, your tool is accessible at:
```
https://YOUR-GITHUB-USERNAME.github.io/governance-diagnostic/
```
GitHub shows the exact URL in the Pages settings section.

---

## How the scoring works

Each of the 36 questions has four answer options scored 1 through 4:

| Score | Maturity Level |
|---|---|
| 1 | Initial |
| 2 | Developing |
| 3 | Established |
| 4 | Optimised |

**Section score** = average of the six question scores in that section  
**Overall score** = average of all six section scores

**Maturity bands:**

| Score range | Maturity level |
|---|---|
| 1.00 – 1.74 | Initial |
| 1.75 – 2.49 | Developing |
| 2.50 – 3.24 | Established |
| 3.25 – 4.00 | Optimised |

---

## How the results page works

The results page shows three levels of detail:

1. **Overall score and maturity level** — displayed as an animated ring with a headline summary
2. **Radar chart** — visual maturity profile across all six sections
3. **Section cards (expandable)** — click any section to reveal:
   - Individual question scores (which question scored what)
   - **How this score was determined** — explains the pattern of responses and what it means
   - **Recommended next steps** — specific, actionable recommendations matched to the maturity level

All result text is pre-written in `questions.js` and served conditionally based on the score. Nothing is sent to any server.

---

## How to customise

### Update a question
In `questions.js`, find the question by its `id` (e.g. `b1`, `ct4`). Edit the `text` field or any option's `text`. Do **not** change the `score` values — these drive the entire scoring system.

### Update result text
In `questions.js`, find `SECTION_RESULTS`. Each section has:
- `scoreExplanation[1]` through `[4]` — the "how it was determined" text per maturity level
- `recommendations[1]` through `[4]` — the recommended next steps per maturity level

### Update the overall summary
Edit `OVERALL_SUMMARIES` in `questions.js`. The `headline` and `body` fields appear on the results hero panel.

### Change the logo
Replace `logo.png` with your updated file. Keep the filename exactly as `logo.png`.

---

## Technical notes

- Runs entirely in the browser — no server, database, or backend
- Answers stored in `sessionStorage` during the session only — not transmitted anywhere
- Radar chart uses Chart.js loaded from a public CDN — requires an internet connection
- Works on all modern browsers and is fully mobile-responsive
- Print to PDF works from the results page — all section cards open automatically before printing

---

*CCC Consultancy Group Ltd — UK expertise. Global perspective. Local impact.*
