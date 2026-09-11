# MISSION CONTROL — Ultra-Premium Gate 100

**Date:** 2026-09-05  
**Workspace root:** `C:\Users\micha\Desktop\UDCS Website`  
**Account:** `michael@universal-dynamic.com`  
**Live:** `ef2ee94` pushed + deployed to `universal-dynamic-website` (2026-09-05)

## Active — Real-world discoverability audit — DONE 2026-09-05

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
- Performance (3 mo Web): **1 click · 74 impressions · 1.4% CTR · avg position 52.8**
- Top queries (impressions, 0 clicks): seo agency lake jackson tx · universal dynamic · local seo lake jackson · lake jackson tx seo · website designer lake jackson

### Analytics
- [x] Live GA4 island ships `G-DNXEY3KTKZ` (deferred load)
- [x] GSC ↔ GA4 association confirmed in Settings

### Big 3 business profiles
- [x] **GBP:** **VERIFIED & LIVE (2026-09-11)** — Store code `01716419578033243039`; CID `105280992748935528` (`https://www.google.com/maps?cid=105280992748935528`); website & phone connected; category Business management consultant; service areas active; hours set (opens 9 AM).
- [ ] **Apple Business Connect:** Namecheap TXT domain verification done (2026-09-05) — finish claim in Apple Business Connect, then paste public listing URL for `sameAs`
- [ ] **Bing Places + Bing Webmaster:** ready for 1-click import from verified GBP at `bing.com/forbusiness`; IndexNow key live at `/udcs2026indexnow.txt`
- [x] Site JSON-LD `sameAs`: updated with live Google Maps CID `https://www.google.com/maps?cid=105280992748935528` (2026-09-11)

### Ordered next actions (human)
1. [DONE] GBP verification complete and canonical Maps CID wired into site schema & sitemap
2. Claim Bing Places via 1-click import from verified GBP ([bing.com/forbusiness](https://bing.com/forbusiness))
3. Claim Apple Business Connect ([businessconnect.apple.com](https://businessconnect.apple.com))
4. Sign into Bing Webmaster with Microsoft account → import from GSC or add sitemap + IndexNow

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
