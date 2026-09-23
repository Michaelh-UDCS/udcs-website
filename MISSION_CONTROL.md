# MISSION CONTROL — Ultra-Premium Gate 100

**Date:** 2026-09-22  
**Workspace root:** `C:\Users\micha\Desktop\UDCS Website`  
**Account:** `michael@universal-dynamic.com`  
**Live:** hosting released 2026-09-22 (copyright ship) · Firebase `universal-dynamic-website` · `michael@universal-dynamic.com`

## Research — Google Workspace referral content idea — 2026-09-22

**Status:** Pillar **outline drafted** (no UI build). Skills: `ultimate_web_architect` · `a-plus-build-gate` · `claude_design_10x` · `ai-search-2026` · referral SoT `UDCS_GOOGLE_WORKSPACE_REFERRAL.md`. Canvas: `google-workspace-pillar-outline`.

### Guardrails (must-keep)
- Disclose Referral Program participation (Google + FTC clear/conspicuous)
- Logos/creative **only** from Resource Portal / approved buttons — never invent Partner badges
- **Never** publicly post promo codes (1:1 only; codes stay in agent SoT, not `src/`)
- Do not frame Google pages; do not claim Google endorsement/partnership unless Partner Advantage
- Eligible referrals only (net-new; not reseller customers; Territory Americas)

### Outline lock
1. [DONE lab] Route `/guides/google-workspace-for-startups` — SSG built; lab LH **100/100/100/100** mobile + desktop (local dist)
2. Hydrate `siteConfig.referrals.googleWorkspaceUrl` → `https://referworkspace.app.goo.gl/Uc52` ✅
3. Dual CTA: `/contact` primary · Custom URL secondary · promo via private contact ✅
4. Cluster later: freemail vs business email · DNS auth · aliases vs seats
5. [ ] After Michael OK → deploy `universal-dynamic-website` + Gate 100 live PSI + GSC request indexing
6. Preview: `http://127.0.0.1:4173/guides/google-workspace-for-startups`

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
