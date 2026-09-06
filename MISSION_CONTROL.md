# MISSION CONTROL — Ultra-Premium Gate 100

**Date:** 2026-09-05  
**Workspace root:** `C:\Users\micha\Desktop\UDCS Website`  
**Account:** `michael@universal-dynamic.com`  
**Live:** `45b3d53` pushed + deployed to `universal-dynamic-website` (2026-09-05)

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
- Factual About copy (ops → management 10–12 yrs → PM 5–6 yrs; A++ SEO/GEO)
- LinkedIn → personal profile `https://www.linkedin.com/in/michael-huerta-6240189a/`
- Case studies portfolio expansion (local commit pending rebase)
- **DONE:** `CaseStudy.tsx` uses `caseStudiesContent.studies` — featured Iron Prairie + Barbershop/Max Press grid; empty guard; nav "Case Studies"; no paddle-blinds; dropped unused `Building2`

## Lab LH
Mobile indexables still **100/100/100/100** after fixes.

## Still human / blocked
- Real GBP / Apple / Bing `sameAs` after claim
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
