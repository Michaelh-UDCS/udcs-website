# UDCS Website — Workspace Memory

Last verified: **2026-08-29**

> Persistent local memory for agents. Read this before guessing about accounts, hosting, or contact-form delivery.

---

## Workspace Meta-State

| Field | Value |
| :--- | :--- |
| Local path | `C:\Users\micha\Desktop\UDCS Website` |
| Active branch | `master` (tracks `origin/master`) |
| Architecture | Zero-hydration SSG (`vite-react-ssg` + Tailwind v4 + vanilla JS islands) |
| Domain | `https://universal-dynamic.com` |
| Quality target | 100/100/100/100 mobile Lighthouse |

---

## Account Ownership (UDCS Business — Do Not Guess)

Per `dual_account_orchestrator`: this repo is **business context only**. Never deploy or commit under personal Gmail.

### Git / GitHub

| Check | Canonical value |
| :--- | :--- |
| Remote | `https://github.com/Michaelh-UDCS/udcs-website.git` |
| GitHub owner | `Michaelh-UDCS` (public repo `udcs-website`) |
| Expected `gh` active account | `Michaelh-UDCS` |
| Commit / local git email | `michael@universal-dynamic.com` |
| Commit name | `Michael Huerta` |

**Not for this repo:** `michaelhuerta16-eng`, `michaelhuerta16@gmail.com`, `jeanniemaree`.

### Firebase / Hosting

| Check | Canonical value |
| :--- | :--- |
| Firebase login (UDCS) | `michael@universal-dynamic.com` |
| Project ID | `universal-dynamic-website` |
| Project number | `879702190148` |
| Hosting site ID | `universal-dynamic-website` |
| Console | https://console.firebase.google.com/project/universal-dynamic-website/overview |
| Default subdomain | https://universal-dynamic-website.web.app |
| Secondary subdomain | https://universal-dynamic-website.firebaseapp.com |

**Verified 2026-08-29:** `universal-dynamic.com` and `universal-dynamic-website.web.app` served identical content fingerprint (same `Last-Modified`).

### Pre-deploy identity checklist

```powershell
git config --local user.email          # must be michael@universal-dynamic.com
gh auth status                         # active: Michaelh-UDCS
npx firebase login:list                # active: michael@universal-dynamic.com
npx firebase use                       # universal-dynamic-website
```

If Firebase credentials expire: `firebase login:use michael@universal-dynamic.com` then `firebase login --reauth`.

### CI deploy

- Workflow: `.github/workflows/firebase-deploy.yml` (triggers on push to **`master`**)
- Needs GitHub secret **`FIREBASE_SERVICE_ACCOUNT`** on `Michaelh-UDCS/udcs-website` (UDCS business account) — create before first CI deploy will succeed

---

## Contact Form / Email Notifications

| Field | Value |
| :--- | :--- |
| Provider | FormSubmit.co |
| Endpoint | `https://formsubmit.co/michael@universal-dynamic.com` |
| Source | `src/components/Contact.tsx` |
| Success redirect | `https://universal-dynamic.com/thank-you` (`_next`) |
| Subject | `New Universal Dynamic Client Inquiry` |
| Captcha | Disabled (`_captcha=false`) + honeypot `_honey` |
| CSP | `form-action` allows `https://formsubmit.co` (see `firebase.json`) |
| Privacy disclosure | `src/pages/PrivacyPolicyPage.tsx` mentions FormSubmit |

### Delivery verification (2026-08-29)

- AJAX POST to `https://formsubmit.co/ajax/michael@universal-dynamic.com` returned:
  `{"success":"true","message":"The form was submitted successfully."}`
- That response means the FormSubmit address is **activated** (not stuck on first-time confirmation).
- Test subject sent: **UDCS Form Audit Test - FormSubmit Verification**
- Human confirmation of inbox receipt still recommended (check Inbox + Spam for `michael@universal-dynamic.com`).

### [LEARN] FormSubmit testing on Windows

- Do **not** pass JSON with em dashes / unescaped spaces via PowerShell inline `curl` args — the shell splits the payload.
- Write a UTF-8 JSON file and POST with `curl.exe --data-binary "@payload.json"`.

---

## Stale / Hazardous Leftovers (Known)

| Item | Risk | Action |
| :--- | :--- | :--- |
| ~~`.firebaserc` `launch` alias~~ | ~~Wrong project~~ | **Done 2026-08-29** — alias removed; only `default: universal-dynamic-website` |
| ~~`DEPLOY-FIX.md`~~ | ~~Misdirect deploys~~ | **Done 2026-08-29** — ARCHIVED banner; do not follow old gen-lang-client steps |
| `FamilyWorshipPage` links | Points at `gen-lang-client-0036096964.web.app` | Separate app host; not main-site hosting |

Other logged-in Firebase CLIs on this machine (do not use for this repo): `michaelhuerta16@gmail.com`, `mike@thebarbershopbymike.com`.

---

## DNS / Mail (Namecheap — from `udcs_website` skill)

- A `@` → Firebase `199.36.158.100` + `199.36.158.67`
- CNAME `www` → `universal-dynamic-website.web.app.`
- Google Workspace MX + SPF/DKIM/DMARC for `michael@universal-dynamic.com`

---

## Active TODO Queue (from 2026-08-29 upgraded global-skills audit)

**Scorecard (pre-remediation):** ~68/100. Canvas: `udcs-skills-gap-audit.canvas.tsx`. Mission: `MISSION_CONTROL.md`.  
**Remediation wave:** 2026-08-29 — multi-agent + parent reconcile. Local `npm run build` + `test:routes` passed.

### P0 — Visibility / ops (human)

- [ ] **BLOCKER:** Google `site:universal-dynamic.com` returned no results — verify GSC + Request Indexing — see `docs/GSC_INDEXING.md`
- [ ] Confirm FormSubmit test email arrived in `michael@universal-dynamic.com` (Inbox + Spam)
- [ ] Reauth Firebase CLI before next deploy (`firebase login --reauth` as UDCS)
- [ ] Create GitHub secret **`FIREBASE_SERVICE_ACCOUNT`** on Michaelh-UDCS (CI needs it)
- [x] **Deploy** remediation build to `universal-dynamic-website` (`npm run deploy`) — 2026-08-29 live

### P1 — Skill-gap hardening — DONE (2026-08-29)

- [x] Remove stale `.firebaserc` `launch` alias
- [x] Archive `DEPLOY-FIX.md`
- [x] `.github/workflows/firebase-deploy.yml` on `master`
- [x] `public/llms.txt` + `llms-full.txt`
- [x] Multi-AI `robots.txt`
- [x] `manifest.json` + head link / theme-color / apple-touch
- [x] Real brand icons (`favicon.ico` ~811 B, `apple-touch-icon.png` 180×180 ~2.6 KB)
- [x] Protocol Zero `CLAUDE.md` + `src/config/siteConfig.ts`
- [x] BreadcrumbNav + BreadcrumbList JSON-LD on secondary routes
- [x] Skip-to-content + ScrollToTop; Footer Client Portal removed
- [x] Homepage meta description trimmed (149 chars)
- [x] Placeholder Maps/Apple `sameAs` removed (social only until listings claimed)
- [x] Privacy policy discloses search vs training crawler policy

### P2 — Polish / off-page (open)

- [ ] **GA4 intentionally empty** until a real Measurement ID is provided
- [ ] Add GBP / Apple / Bing `sameAs` URLs after listings are claimed
- [ ] Complete off-page claims — GBP, Apple, Bing, Nextdoor, Foursquare
- [ ] Optional FormSubmit captcha / `_cc` backup notify

---

## NAP Canonical (must stay identical everywhere)

- Legal name: `Universal Dynamic Consulting Services LLC`
- Brand: `Universal Dynamic`
- Location: `Lake Jackson, TX 77566`
- Phone: `(979) 417-6489` / `+19794176489`
- Email: `michael@universal-dynamic.com`
- Site: `https://universal-dynamic.com`

Off-page checklist: `SEO_CLIENT_CHECKLIST.md` (GBP, Apple Business Connect, Bing Places, Nextdoor, Foursquare).

---

## Logged Insights

- [LEARN]: Production consulting site hosting is **only** project `universal-dynamic-website` under Workspace `michael@universal-dynamic.com` — not personal Gmail Firebase projects.
- [LEARN]: FormSubmit for this site is activated and API-successful as of 2026-08-29; inbox receipt still needs human eyeball confirmation.
- [LEARN]: Git identity for this workspace is locked to `Michaelh-UDCS` + `michael@universal-dynamic.com`.
- [LEARN]: 2026-08-29 — `.firebaserc` launch alias removed; `DEPLOY-FIX.md` archived; CI workflow targets `master` + secret `FIREBASE_SERVICE_ACCOUNT`.
