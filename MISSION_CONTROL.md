# MISSION CONTROL — Ultra-premium 100 across every aspect

**Date:** 2026-08-29  
**Goal:** Close every remaining recommendation until composite = 100 (or hard-blocked only on human accounts)

## Parallel workstreams
1. [x] Semantic `.ud-card` / `.ud-input` / `.ud-faq` — shrink class bloat
2. [x] Remaining blur/weight (calculator, badge blurs where safe)
3. [ ] CI: attempt Firebase SA + push workflow (or document exact blocker)
4. [ ] FormSubmit: verify via Gmail MCP if available
5. [ ] GSC: open/guide Request Indexing; IndexNow already live
6. [ ] Robots quarterly pass + any missing search bots
7. [ ] Rebuild + LH 100 hold + deploy
8. [ ] Update premium scorecard canvas to post-sprint scores

### Compositor / HTML weight polish (this sprint) — DONE
- [x] Remove `backdrop-blur-md` from SaaSMetricsCalculator
- [x] Remove non-sticky badge `backdrop-blur-sm` (Hero, Concierge, CaseStudy, About, Contact, LocalService, Privacy, Terms, 404, ThankYou)
- [x] CaseStudy deliverables: CheckCircle2 → `.sol-check`; keep pillar ShieldCheck + Building2
- [x] Footer opaque-surface blur removed (no visual benefit)
- [x] Skip FamilyWorship (separate brand)
- [x] Navbar sticky blur preserved

## Hard blocks (cannot invent)
- GA4 Measurement ID — empty until you provide
- GBP / Apple / Bing `sameAs` — only after real claim URLs
- Google `site:` — requires GSC property ownership actions
