# MISSION CONTROL — Ultra-Premium Gate 100

**Date:** 2026-09-22  
**Workspace root:** `C:\Users\micha\Desktop\UDCS Website`  
**Account:** `michael@universal-dynamic.com`  
**Live:** Sprint 5 hosting release **2026-09-22 22:12:11** · commit **`f5c08f0`** pushed `origin/master` · Firebase `universal-dynamic-website` · `michael@universal-dynamic.com` · https://universal-dynamic.com · IndexNow **200**

## Active — Ultra-premium mobile delight + Case Studies route — 2026-09-22

**Standard:** UDCS site must meet or exceed client-site quality — no lesser house site.

**Goal:** Magnetic phone `/` + dedicated ultra-premium work gallery `/case-studies`.

### Architecture
| Surface | Role |
| :--- | :--- |
| `/` | Consult funnel — one Iron Prairie flagship + View All Case Studies |
| `/case-studies` | Full portfolio depth (all three StudyLayouts) + CollectionPage schema |

### Plan
1. [x] Sprint 1 — Hero diet + sticky CTA + mid CTAs (A+++)
2. [x] Sprint 2 — Temporary home snap carousel (superseded by dedicated route)
3. [x] **Case Studies page** — `/case-studies` route, SEO, nav/footer, sitemap, IndexNow list, LH/routes scripts
4. [x] Home flagship-only teaser + View All / Consult CTAs
5. [x] **Sprint 3+4 (dev):** HowItWorks (File/Build/Own) replaces Solutions+Handoff on `/`; compact calc (select + 5yr-first + collapsed legal); tight flagship; reveal-on-scroll + calc pulse
6. [x] **Hotfix:** Section `background="dark"` → literal `undefined` in className (HowItWorks) — map `dark` + nullish fallback
7. [x] **Hash / CTA UX:** Hero secondary → `#how-it-works` (“See How It Works”); ScrollToTop preserves hash; reveal moved off hash-target `<section>`s
8. [x] **Reveal island fix:** early-return skipped observers in Vite DEV; `data-reveal-visible` + scroll fail-safe; hash force-visible + scrollIntoView; IO threshold 0
9. [x] **Premium polish P0–P2 (dev):** mobile Them/Us matrix · calc 5yr-aha · hero one-breath + solid CTA
10. [x] **Sprint 5 — Gate 100** lab LH **PASS** · **hosting deployed** 2026-09-22 22:12:11 · live PSI **PASS** · GSC **PENDING HUMAN**
   - StudyLayout heading-order (`h3→h2`, `h4→h3`) cleared `/case-studies` a11y 98→100
   - `npm run build` + `npm run test:lighthouse` exit 0 → `lighthouse-100-verified.json` (indexables 100×4; thank-you/404 SEO 63 noindex-exempt)
   - **Deploy:** `npm run deploy` → project `universal-dynamic-website` · account `michael@universal-dynamic.com` · channel `live` release **2026-09-22 22:12:11**
   - **Live markers (post-deploy verify):** short hero (no LLC+$0 fees repeat) · Them/Us · Show breakdown · `/case-studies` h2s Iron Prairie / Barbershop by Mike / Max Press · LM `2026-09-23 03:12:11 GMT`
   - **IndexNow:** submitted 7 URLs · status **200**
   - **Live PSI:** see Gate 100 card below

## Gate 100 — Live browser scorecard (Sprint 5) — 2026-09-22 night

**Identity lock:** `michael@universal-dynamic.com` · Firebase `universal-dynamic-website`  
**Deploy URL:** https://universal-dynamic.com/ · **Verdict: PASS** (desktop Perf flaked 97→100 on retry)  
**PSI API:** `GOOGLE_PSI_API_KEY` missing — scored via pagespeed.web.dev UI  
**Analysis:** https://pagespeed.web.dev/analysis/https-universal-dynamic-com/xpeuc0x136 (canonical post-retry) · prior run `pxc8jjoxck` desktop Perf **97** (TBT 140ms) then cleared

| Surface | Perf | A11y | BP | SEO | Agentic |
| :--- | ---: | ---: | ---: | ---: | ---: |
| PSI mobile (lab) | **100** | **100** | **100** | **100** | **3/3** |
| PSI desktop (lab) | **100** | **100** | **100** | **100** | **3/3** |
| Field CrUX | PENDING FIELD (no data) | — | — | — | — |

**Mobile metrics (xpeuc0x136):** FCP/LCP **0.9s** · TBT **0ms** · CLS **0.017** · SI **0.9s**  
**Desktop metrics (same):** FCP **0.4s** · LCP **0.5s** · TBT **70ms** · CLS **0.02** · SI **0.7s**

| Check | Status |
| :--- | :--- |
| Sprint 5 live HTML markers | **PASS** |
| Lab LH (other agent) | **PASS** 100×4 indexables |
| Live PSI mobile + desktop | **PASS** |
| GSC URL Inspection `/` + `/case-studies` | **DONE 2026-09-22** — `/` indexed + Request indexing queued; `/case-studies` was **unknown** → Request indexing queued (priority crawl). **Do NOT re-request** — quota limited; Google says resubmits do not raise priority. |

### GSC crawl-budget policy (lock)
- **Never spam Request indexing.** One successful queue confirmation per URL is enough.
- Prefer discovery via **sitemap** + internal links (home → Case Studies) over manual requests.
- If Inspect fails (live test error / quota): fix cause first (sitemap submit, robots, 200 HTML), wait 24–48h, re-inspect **without** Request again unless still Unknown.
- `/case-studies` already in `sitemap.xml` (priority 0.9). Next free lever: confirm Sitemap report in GSC shows success (Pages → Sitemaps), not another Request click.
| GA4 / Maps·Apple·Bing sameAs invent | **Not invented** |

**BLOCKERS:** none  
**WARNINGS:** desktop Perf lab variance (97→100); GSC side-panel auth; CrUX PENDING FIELD  
**Next actions (ordered):**
1. Human: open GSC as `michael@universal-dynamic.com` → property `sc-domain:universal-dynamic.com` → URL Inspection + Request indexing for `/` and `/case-studies`
2. Optional: trim desktop TBT (reveal island forced-reflow insight) if Perf flakes again
3. Leave GA4 Measurement ID empty until real ID exists

**Lab Lighthouse (mobile · 2026-09-22 night):**

| Route | Perf | A11y | BP | SEO |
| :--- | ---: | ---: | ---: | ---: |
| `/` | 100 | 100 | 100 | 100 |
| `/about` | 100 | 100 | 100 | 100 |
| `/case-studies` | 100 | 100 | 100 | 100 |
| `/contact` | 100 | 100 | 100 | 100 |
| `/services/lake-jackson-tx` | 100 | 100 | 100 | 100 |
| `/guides/google-workspace-for-startups` | 100 | 100 | 100 | 100 |
| `/privacy-policy` | 100 | 100 | 100 | 100 |
| `/terms-of-service` | 100 | 100 | 100 | 100 |
| `/thank-you` *(noindex)* | 100 | 100 | 100 | 63 |
| `/404` *(noindex)* | 100 | 100 | 100 | 63 |

Indexables **8/8 = 100×4**. Non-indexable SEO 63 OK.

**P0–P2 verify (468×614 · localhost:5173 · 2026-09-22):**
| Metric | Pre-polish | After P0–P2 |
| :--- | :--- | :--- |
| Mobile total | ~14.9 vp | **~12.7 vp** |
| Comparison | ~4.8 vp | **~2.7 vp** |
| Matrix | — | `display:table` |
| Calc | 3 stacked cards | 5yr `$10,800` + closed “Show breakdown” |
| Hero CTA | outline | solid gold |

**P0:** Them\|Us table `<md`; dual Cards `md+`. **P1:** 5yr aha + breakdown details; island querySelectorAll. **P2:** short local breath; solid gold primary `<sm`.

**Reveal verify (390×844 · localhost:5173):** `#how-it-works` in-view (top ~192) · 5/5 `.reveal-on-scroll` → `data-reveal-visible` + opacity 1

**Dev measure (390×844 · localhost:5173 · 2026-09-22):**
| Metric | Before | After Sprint 3+4 |
| :--- | :--- | :--- |
| Mobile total height | ~23.2 vp | **~11.9 vp** |
| Contact depth | ~20.9 vp | **~9.6 vp** |
| how-it-works | (Solutions+Handoff split) | **~2.0 vp** |
| case-study teaser | ~8.6 vp (×3) | **~1.2 vp** (flagship) |

**Hotfixes (2026-09-22 night):** Section `dark` bg map · reveal island re-observe/hash · hero CTA → `#how-it-works` · ScrollToTop preserves hash · reveal moved off id'd `<section>`s (inner wrap).

**Preview:** http://localhost:5173/ · http://localhost:5173/#how-it-works · http://localhost:5173/case-studies

**A+++ lock:** brand-first · entity openers · ≥44px · focus-visible · reduced-motion · no invented GA4/sameAs · charcoal/gold/cream/navy · SSG zero-hydration

## Prior — Landing page length / effectiveness audit — 2026-09-22

**Goal:** Deep-analyze `/` — is it too long, or does the length earn its keep?

### Measured (live https://universal-dynamic.com/)
| Metric | Desktop ~1920×1080 | Mobile 390×844 |
| :--- | :--- | :--- |
| Page height | ~10.3k px · **~9.5 viewports** | ~19.6k px · **~23.2 viewports** |
| Main word count | ~1,992 | same |
| Heaviest section | Case studies ~2.9 vp (30%) | Case studies **~8.6 vp (37%)** |
| #2 heaviest | Comparison ~1.8 vp | Comparison **~4.6 vp (20%)** |
| Contact form depth | ~8.3 vp down | **~20.9 vp down** |

### Section stack
Hero → Comparison (+ SaaS calculator) → Solutions → Concierge Handoff → Case Studies (×3 full) → FAQ (8) → Contact

### Verdict
- **Desktop:** long-but-coherent brochure; length is justified for high-consideration B2B.
- **Mobile:** too long for fast local-owner conversion; proof + comparison dominate scroll; form buried.
- Works well as SEO/authority surface; weaker as a short-path consult funnel on phone.

1. [x] Map HomePage sections + content sources
2. [x] Live scroll metrics desktop + mobile
3. [x] Verdict + canvas deliverable
4. [~] Trim plan → superseded by **Mobile delight** active board above

## Ship — Google Workspace guide pillar — 2026-09-22

**URL:** https://universal-dynamic.com/guides/google-workspace-for-startups  
**Commit:** `c088071` · **Project:** `universal-dynamic-website`

### Gates
| Check | Result |
| :--- | :--- |
| Identity | `michael@universal-dynamic.com` · Firebase `universal-dynamic-website` |
| `npm run build` | PASS (FAQ parity home 8/8 + guide 6/6) |
| Lab LH (dist) home + guide | **100/100/100/100** mobile + desktop |
| Live HTML markers | H1 + referral URL + disclosure + FAQPage + legal © name |
| Live LH vs production URL | **100/100/100/100** mobile + desktop |
| Live PSI API | **429 rate-limited** (no `GOOGLE_PSI_API_KEY`) — confirm in pagespeed.web.dev when key available |
| GSC Request indexing | **PENDING human** — `sc-domain:universal-dynamic.com` → URL Inspection on guide URL |

### Research lock (closed)
1. [DONE] `/guides/google-workspace-for-startups` live
2. `siteConfig.referrals.googleWorkspaceUrl` = `https://referworkspace.app.goo.gl/Uc52`
3. Dual CTA + disclosures; no public promo codes
4. Cluster later (optional)

## Active — Copyright 2026 + LinkedIn connection audit — 2026-09-22

**Goal:** Confirm footer copyright shows **© 2026** and LinkedIn is correctly linked both ways (site → LinkedIn + LinkedIn → site).

### Verdict
| Direction | Status |
| :--- | :--- |
| Site → LinkedIn | **OK (confirmed by Michael 2026-09-22)** — personal profile is correct: `https://www.linkedin.com/in/michael-huerta-6240189a/` (footer / About / JSON-LD `sameAs`) |
| LinkedIn → Site | **Still open (human)** — profile still headlines Freeport Welding; update Contact Info website + headline/experience to UDCS when ready. No company page invented. |
| Footer copyright | **LIVE** — `© 2026 Universal Dynamic Consulting Services LLC` on https://universal-dynamic.com |

### Ship close-out (2026-09-22)
1. [x] Audit live HTML footer year + LinkedIn `href` / `sameAs`
2. [x] Audit `siteConfig.social.linkedin` + footer/About wiring (personal profile — correct)
3. [x] LinkedIn profile still Freeport Welding on public surface (human to update)
4. [x] Code: `siteConfig.copyrightYear: 2026` + legal name in footer; `updatedAt` → 2026-09-22
5. [x] Identity lock: `michael@universal-dynamic.com` · Firebase `universal-dynamic-website`
6. [x] `npm run build` + lab mobile LH **100/100/100/100** on indexables
7. [x] Deploy hosting (CLI after reauth) — live marker confirmed
8. [x] Live PSI mobile **100/100/100/100** + Agentic **3/3** — [uqqxwb6og8](https://pagespeed.web.dev/analysis/https-universal-dynamic-com/uqqxwb6og8?form_factor=mobile) (first cold run 88 Perf; warm + retest = 100)
9. [~] GSC side panel: browser session hit marketing `/about` (not signed in) — **no Request indexing needed** for footer copyright; Google will recrawl via sitemap `lastmod`
10. [ ] **Human (LinkedIn):** headline/experience/Contact Info website → `https://universal-dynamic.com` when ready

## Prior — Live traffic audit (browser-driven) — 2026-09-22

**Identity lock:** `michael@universal-dynamic.com` · GA4 property **`universal-dynamic-website`** (not Iron Prairie).

### Verdict
Tracking works. Traffic is scarce because **discovery is still weak** (deep SERP + incomplete local amplification), not because GA4 is broken. Last-7d “2 users” were **India / Direct** (noise), while GSC shows real US demand with almost no clicks.

### GA4 `universal-dynamic-website` (live)
| Window | Active users / sessions | Mix |
| :--- | :--- | :--- |
| Last 7 days | **2 users · 16 events · 0 key events** | Direct only; countries **India 2 / US 0**; pages Home 5 views + Contact 1 |
| Last 28 days | **36 sessions · 17 engaged · 47% eng. rate** | Direct **83%** (30) · Organic **11%** (4, 75% eng., 2m26s) · Referral **6%** (2) |

- GBP → GA4 Product link: **NOT linked** (“No links yet”) — still OPEN
- GSC ↔ GA4: linked (confirmed earlier)

### GSC `sc-domain:universal-dynamic.com` (3 mo Web · updated ~5.5h ago)
- **1 click · 153 impressions · 0.7% CTR · avg position 40.1** (impressions ↑ vs Sep 5’s 74; position improved vs 52.8)
- Indexing: **7 indexed / 1 not indexed** (unchanged)
- Top queries (0 clicks): `universal dynamic` (13) · `seo agency lake jackson tx` (6) · `local seo lake jackson` (5) · `lake jackson tx seo` (4) · `seo near me lake jackson tx` / `website designer lake jackson` (3)
- Top pages: `/` **1 click / 68 imp** · `/contact` 53 · `/about` 32 · `/services/lake-jackson-tx` 28
- Countries: **US 1 click / 104 imp** (demand is domestic)

### Fixes completed this session (2026-09-22 browser)
- [x] **GBP → GA4 linked** — `Universal Dynamic Consulting Services LLC` · linked Sep 22, 2026 by `michael@universal-dynamic.com` (Admin → Product links → Google Business Profile)
- [x] **GBP website UTM** — pending Google review (~10 min): `https://universal-dynamic.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
- [x] **GBP Services cards** — pending review (up to 1 day): Website redesign · Local SEO · Business consulting
- [x] **GSC ↔ GA4** re-verified — Domain `universal-dynamic.com` ↔ Web stream `15675001369` (linked Sep 2)

### Ordered next (human + agent)
1. [DONE] Link GBP → GA4
2. [DONE pending review] GBP UTM website + Services · still OPEN: photos + seed reviews + weekly Posts
3. Apple Maps pin: **blocked** (SAB/no storefront) — Brand already Verified; no `sameAs` Maps URL. Bing Places waiting on publish → then `sameAs`
4. Optional agent: title/meta CTR pass on Home + Lake Jackson service for queries already impressing

## Prior — Real-world discoverability audit — DONE 2026-09-05

### Verdict
**Engineering / GSC / GA4: PASS.** Real-world local findability: **GBP VERIFIED & LIVE (2026-09-11)**; Apple/Bing Places queued.

### Google Search Console (`michael@universal-dynamic.com` · `sc-domain:universal-dynamic.com`)
- [x] Verified owner · property added Aug 6, 2026
- [x] Sitemap `https://universal-dynamic.com/sitemap.xml` — **Success** (last read Sep 2; 6 discovered)
- [x] Pages: **7 indexed** / **1 not indexed** = Page with redirect (harmless)
- [x] Homepage URL Inspection: **URL is on Google** · Page is indexed · HTTPS
- [x] Associations: **GA4** linked (`Universal Dynamic Website` / `universal-dynamic-website`)
- [x] Search generative AI: **Include**
- [x] robots.txt: All files valid · Crawl stats: 86 requests / 90d
- Performance snapshot Sep 5 (3 mo Web): **1 click · 74 impressions · 1.4% CTR · avg position 52.8** → **refreshed 2026-09-22 above**
- Top queries (impressions, 0 clicks): seo agency lake jackson tx · universal dynamic · local seo lake jackson · lake jackson tx seo · website designer lake jackson

### Analytics
- [x] Live GA4 island ships `G-DNXEY3KTKZ` (deferred load)
- [x] GSC ↔ GA4 association confirmed in Settings

### Big 3 business profiles
- [x] **GBP:** **VERIFIED & LIVE (2026-09-11)** — Store code `01716419578033243039`; CID `105280992748935528` (`https://www.google.com/maps?cid=105280992748935528`); website & phone connected; category Business management consultant; service areas active; hours set (opens 9 AM).
- [x] **Apple Business org + Brand:** Company `873181909138` · Brand **Universal Dynamic Consulting Services = Verified** (2026-09-22 confirmed)
- [!] **Apple Maps location:** EXISTS but **Not Approved / Doesn’t Meet Requirements** — Apple only accepts storefronts customers can visit without appointment. UDCS is a SAB (no public storefront), so a Maps place pin **cannot be approved** under current Apple policy. Location ID `1554159018444849629` still shows street (home) — do not add fake `maps.apple.com` `sameAs`.
- [ ] **Apple Branded Mail:** not set up (optional)
- [x] **Bing Places:** **VERIFIED · Pending publish** (bizid `5f68fa22-7fda-4f1a-ac6a-549467afef2e`) — ETA 7–12 days. Fixed 2026-09-22: SAB hide-street · service areas Lake Jackson/Freeport/Clute/Angleton/Richwood · email · Bing UTM. Public `sameAs` URL after publish.
- [ ] **Bing Webmaster:** still OPEN — Microsoft account → import from GSC or add sitemap + IndexNow
- [x] Site JSON-LD `sameAs`: Google Maps CID live; Apple Maps URL N/A (policy); Bing public URL after publish

### Ordered next actions (human)
1. [DONE] GBP verification complete and canonical Maps CID wired into site schema & sitemap
2. Claim Bing Places via 1-click import from verified GBP ([bing.com/forbusiness](https://bing.com/forbusiness))
3. Claim Apple Business Connect ([businessconnect.apple.com](https://businessconnect.apple.com))
4. Sign into Bing Webmaster with Microsoft account → import from GSC or add sitemap + IndexNow

### GBP / local amplification upgrades (2026-09-12)
**Goal:** Convert verified GBP → measurable, durable local discovery (not just a one-week traffic spike).

| Priority | Upgrade | Owner | Status |
| :--- | :--- | :--- | :--- |
| P0 | Tag GBP website URL with UTMs: `https://universal-dynamic.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp` | Agent (browser) | DONE 2026-09-22 (pending Google ~10 min review) |
| P0 | Link GBP → GA4 (Admin → Product links → Google Business Profile) | Agent (browser) | DONE 2026-09-22 |
| P0 | Add GBP Services cards aligned to site offers (web redesign, local SEO/entity, consulting/PM advisory) | Agent (browser) | DONE 2026-09-22 (pending review up to 1 day): Website redesign · Local SEO · Business consulting |
| P0 | Request 3–5 genuine seed reviews (real clients/colleagues; local phrases OK if true) | Human | OPEN |
| P1 | Apple Business Brand Profile | Agent | DONE — Brand Verified (company 873181909138) |
| P1 | Apple Maps location pin | Agent | BLOCKED by Apple — SAB/no storefront (“Doesn’t Meet Requirements”). No `sameAs` URL. |
| P1 | Bing Places | Agent | DONE verified · Pending publish (7–12d). SAB hide-street + areas + UTM saved 2026-09-22. `sameAs` after public URL |
| P1 | Bing Webmaster: add property + sitemap + IndexNow | Human | OPEN |
| P2 | GBP photos (logo, work samples, Lake Jackson area context) + weekly Google Post | Human | OPEN |
| P2 | Nextdoor + Foursquare claims (Tier 2 citations) | Human | OPEN |
| P2 | Optional: deploy parked PageSpeed self-audit CTA after Big 3 `sameAs` complete | Agent | PARKED |
| Ops | Confirm FormSubmit inbox delivery; CI `FIREBASE_SERVICE_ACCOUNT` | Human | OPEN |

## Live PageSpeed Insights — VERIFIED (2026-09-05 re-audit)
https://pagespeed.web.dev/analysis/https-universal-dynamic-com/hf9sn6ts4u

| Form | Perf | A11y | BP | SEO | Agentic |
| :--- | ---: | ---: | ---: | ---: | ---: |
| Mobile | **100** | **100** | **100** | **100** | **3/3** |
| Desktop | **100** | **100** | **100** | **100** | **3/3** |

### PSI re-audit notes
- Live homepage still **100 across the board** on the currently deployed build ([report](https://pagespeed.web.dev/analysis/https-universal-dynamic-com/hf9sn6ts4u)).
- Local lab (`npm run test:lighthouse`) on this PC is noisy for `/` Perf (83–95) — TBT from Style & Layout (~1.7–2s), not JS. About/Contact stay 100.
- Hardening staged locally (not yet redeployed): GA4 no longer fires on `scroll` (LH scroll was a live regression risk); fallback 30s; reveal early-exits when no targets; case-study SVG/blur/pulse cuts; nav backdrop-blur removed; hero carbon texture + gradient text simplified; critical CSS h1 breakpoints mirrored to Hero (`sm/md/lg`) to kill async-CSS CLS.

## This session
- **Case study layout uniformity** — DONE
  - All three studies use the same full StudyLayout (pillars, full deliverables, capabilities panel, detail rows, quote)
  - Mike/Tony details aligned with Infrastructure + Status indicators like Iron Prairie
- **Barbershop case study — owner training / liberty** — DONE
  - Eyebrow/tags: Owner-Trained Independence + Owner Training
  - Description + quote: first client to take included training; device handover; photos/content/domain; ops efficiency spillover
  - Pillar #2 + deliverable #1 + details row: hands-on owner training
  - Capabilities panel reframed to “Liberty to Maintain & Improve”
- **Site-wide copy audit** — DONE
  - Live career copy was already mostly confined to About; fixed residual soft phrasing
  - `/about` meta: specific role path (not vague “shop floor to…”)
  - Values card: “Fabrication Floor Experience” + dual Sales/PM titles
  - `llms-full.txt`: founder background aligned; employer name still omitted
  - OK as-is: hero, FAQ, engagement, home schemas, city “Freeport” service-area mentions
  - Stale only in docs: `CSP-HASHES.md` old Person JSON (regenerates on next CSP hash pass); old MC bullet about A++/10–12 yrs
- **About subhead clarity** — DONE
  - Subhead is service-first (formation / SAM / client-owned sites); Lake Jackson, TX in hero
- **About founder bio** — DONE (locked for now)
  - Approved: 25+ years industrial fabrication OJT path → Sales Manager + Project Manager → UDCS offer
- **PSI re-audit (mobile + desktop 100)** — LIVE VERIFIED 100/100/100/100; local hardening pending deploy + re-PSI
- **Case study $500 hosting story** — DONE
  - Barbershop (Mike) + Max Press (Tony): over $500/mo host-only → client-owned GCP ~$0/mo + $0 retainer
  - Iron Prairie stays flagship (no invented $500 claim); CaseStudy icon map `Escaped $500+/mo Hosting` → BadgeDollarSign
- **Ownership/comparison messaging** — DONE
  - `comparison.ts` ROI + host-only card; `calculator.ts` Prior Host-Only Retainer @ $500; `faq.ts` ownership answer; hero unchanged; support stays 1 mo / 30 days
- **Homepage blank sections (scroll-reveal)** — FIXED
  - Root: `html.js-reveal .reveal-on-scroll { opacity: 0 }` + Cards never got `.is-visible`
  - `Card.tsx`: removed `reveal-on-scroll` (cards always visible; keep `ud-card`)
  - `reveal.ts`: MutationObserver + delayed re-observe for late mounts; reduced-motion still strips `js-reveal`
  - `index.css`: `contain-intrinsic-size` 720px → 480px; opacity:0 stays `html.js-reveal`-only
- LinkedIn → personal profile `https://www.linkedin.com/in/michael-huerta-6240189a/`
- About founder copy locked: 25+ yrs industrial fabrication OJT path → Sales Manager + Project Manager (employer name off-site)
- Case studies portfolio expansion (local commit pending rebase)
- **DONE:** `CaseStudy.tsx` uses `caseStudiesContent.studies` — featured Iron Prairie + Barbershop/Max Press grid; empty guard; nav "Case Studies"; no paddle-blinds; dropped unused `Building2`

## Lab LH
Mobile indexables still **100/100/100/100** after fixes.

## Still human / blocked
- [DONE] **GBP verification & Maps CID sameAs** (`105280992748935528`)
- Apple Business Connect + Bing Places claims (Bing 1-click import from GBP)
  - **Apple Business Connect:** Namecheap TXT domain verification done (2026-09-05) — finish claim in Apple Business Connect, then paste public listing URL for `sameAs`
- Bing Webmaster sign-in / site add
- Real Apple / Bing `sameAs` after claims
- CI: `FIREBASE_SERVICE_ACCOUNT`
- Field CWV waits on CrUX
- Firebase CLI login for deploy
- **Form email:** Confirm FormSubmit notifications land in `michael@universal-dynamic.com` (Inbox + Spam). Form posts to `https://formsubmit.co/michael@universal-dynamic.com` via `Contact.tsx` / `siteConfig.formSubmitEndpoint`.

## Ideas — later (do not ship yet)

### Visitor PageSpeed self-audit CTA
**Status:** PARKED until UDCS Big 3 profiles (`sameAs` / GBP–Apple–Bing) are fully claimed and lab + field scores stay confidently strong.

**Legal:** Linking to Google PageSpeed Insights is fine. It is a free public Google tool. Use nominative naming (“Google PageSpeed Insights”), `target="_blank" rel="noopener noreferrer"`, and a one-line non-affiliation note (same pattern as the calculator trademark disclaimer). No Google logo lockup required.

**Method — “Prove it yourself” engineering check**
1. **Placement:** Compact strip under Solutions (Website Redesign card context) and/or one FAQ: “Can I check how fast my current website is?”
2. **CTA:** “Open Google PageSpeed Insights” → `https://pagespeed.web.dev/`
3. **Copy angle:** Invite visitors to paste *their* URL or a competitor’s to compare Performance / Accessibility / Best Practices / SEO—frame as a free way to see if a site is engineered correctly before a redesign.
4. **Optional deep-link:** Pre-fill UDCS as the proof example once scores are stable:  
   `https://pagespeed.web.dev/analysis?url=https%3A%2F%2Funiversal-dynamic.com`
5. **Ship gate:** Only publish the CTA after (a) Big 3 claims + real `sameAs` URLs, (b) mobile + desktop PSI lab still 100/100/100/100, (c) no embarrassing live regressions vs. client case-study sites.
6. **Content home when ready:** `servicesContent.pageSpeedCta` + strip in `Solutions.tsx`; FAQ item in `faq.ts`.

## Account targets
- **GitHub:** `https://github.com/Michaelh-UDCS/udcs-website.git`
- **Firebase project:** `universal-dynamic-website` (number `879702190148`)
- **Live:** https://universal-dynamic.com / https://universal-dynamic-website.web.app

## PSI re-audit in progress (2026-09-05)
- Local SSG build: PASS, including sitemap, FAQ parity, and JS-disabled checks.
- Static route gate: PASS (all canonical routes 200; unknown route correctly 404).
- Scripted Lighthouse mobile: / 93/100/100/100; /services/lake-jackson-tx 92/100/100/100; all other indexable routes 100/100/100/100.
- /thank-you and /404: 100/100/100/63; SEO reduction is consistent with intentional non-indexable utility/error pages and should not be treated as an indexable-route regression.
- Main lab bottleneck is rendering/style-layout work, not shipped React hydration or unused JS/CSS. Service-page audit also loads the OpenStreetMap embed (~300 KB script).
- Priority follow-up: reduce homepage rendering/layout cost, lazy/defer the map iframe, then rerun isolated mobile and desktop audits plus live PSI.
