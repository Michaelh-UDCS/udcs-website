# Project Constitution: Universal Dynamic Consulting Services LLC

> **Protocol Zero** — immutable single source of truth for agents. Read this before design, content, or deploy work. NAP and brand constants live in `src/config/siteConfig.ts`.

## 1. Core Architecture & Tech Stack

| Layer | Choice |
| :--- | :--- |
| **Archetype** | **Mode A** — local Texas consulting (service-area) + cloud web architecture hybrid |
| **Framework** | React 19 + Vite + **vite-react-ssg** (zero-hydration static generation) |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/postcss`) + design tokens in `tailwind.config.js` |
| **Interactivity** | Vanilla JS **islands** (`src/islands/*`) — no client React hydration for chrome |
| **Routing / SEO** | `react-router-dom` + `react-helmet-async` (SSG-injected head) |
| **Hosting** | Firebase Hosting — project **`universal-dynamic-website`** only |
| **Domain** | https://universal-dynamic.com |
| **Icons** | Lucide React (tree-shaken) |

Do **not** deploy or commit under personal Gmail Firebase projects. Business context only.

## 2. Design System Tokens (Non-Negotiable)

Canonical hex values also exported from `siteConfig.colors`.

### Color Palette

| Token | Hex | Role |
| :--- | :--- | :--- |
| Charcoal | `#0a0a0a` | Surface base (`charcoal-950`) |
| Gold | `#c5a572` | Primary accent (`gold`) |
| Cream | `#e0e0e0` | Primary text (`cream`) |
| Navy | `#141e26` | Elevated panels (`navy`) |

Avoid AI-slop defaults (purple gradients, warm-cream + terracotta, broadsheet hairlines). Preserve charcoal / gold / cream / navy.

### Typography (self-hosted — zero third-party font requests)

* **Display / headings:** Cormorant Garamond (`font-display`)
* **Body / UI:** Inter (`font-sans`)
* Files under `/public/fonts/`; declared in `src/fonts.css` with size-adjusted fallbacks

### Motion

* Prefer `transform` + `opacity` only
* Spring ease: `cubic-bezier(0.16, 1, 0.3, 1)`
* Respect `prefers-reduced-motion`; default SSR state must remain visible when JS is off

## 3. NAP & Schema Constants

**Source of truth:** `src/config/siteConfig.ts`

| Field | Value |
| :--- | :--- |
| Legal name | Universal Dynamic Consulting Services LLC |
| Brand / alternateName | Universal Dynamic |
| Owner | Michael Huerta, CEO & Founder |
| Phone | (979) 417-6489 / +19794176489 |
| Email | michael@universal-dynamic.com |
| Location | Lake Jackson, TX 77566 (**no street** — service-area business) |
| Schema `@type` | ProfessionalService |
| OG image | `/og-image.jpg` (not `og-banner`) |
| Contact form | FormSubmit → `siteConfig.formSubmitEndpoint` |

### sameAs

Only confirmed profiles belong in `siteConfig.sameAs` and JSON-LD:

* LinkedIn, X, Facebook, YouTube (see `siteConfig`)
* **Do not** invent Maps / Apple / Bing URLs
* After GBP / Apple Business Connect / Bing Places are claimed, append real listing URLs to `siteConfig.sameAs` and mirror in `index.html` JSON-LD

### Analytics

* `siteConfig.analytics.ga4MeasurementId` is **intentionally empty**
* Do not inject GA4 scripts until a real measurement ID is set (also via `VITE_GA4_MEASUREMENT_ID` in `.env`)
* Placeholder exists in `.env.example` as `VITE_GA4_MEASUREMENT_ID=`

## 4. Account Ownership (Business Context)

| System | Identity |
| :--- | :--- |
| Email / Workspace | `michael@universal-dynamic.com` |
| GitHub | `Michaelh-UDCS` / repo `udcs-website` |
| Firebase | login `michael@universal-dynamic.com`, project `universal-dynamic-website` |
| Commit email | `michael@universal-dynamic.com` |

## 5. Visual Standard & Anti-Slop Guardrails

* Brand-first hero; one composition per first viewport
* Full-bleed / atmospheric backgrounds — not flat single-color slabs
* Cards only when they contain interaction; no card clutter in hero
* Visible `:hover`, `:focus-visible`, and `:active` on interactive controls
* WCAG 2.2 AA contrast for cream/gold on charcoal

## 6. Verification Commands & Quality Gates

| Gate | Command / criterion |
| :--- | :--- |
| Build | `npm run build` (SSG + sitemap + FAQ + JS-disabled checks) |
| Routes | `npm run test:routes` |
| Lighthouse | `npm run test:lighthouse` — **target 100/100/100/100** mobile |
| Preview | `npm run preview` |
| Deploy | `npm run deploy` — **only** to `universal-dynamic-website`; never guess project IDs |
| Post-deploy | Antigravity skill **`gate100_browser_scorecard`** — live PSI + Agentic + GSC side-panel indexing |

**Quality Gate 100:** Zero-hydration SSG, self-hosted fonts, CSP-aware Firebase headers, multi-AI crawl assets (`robots.txt`, optional `llms.txt`), GSC/Bing measurement readiness, answer-first local content. Session log: `docs/GATE100_BROWSER_SESSION_2026-08-29.md`.

## 7. Two-Tier Memory

* Workspace meta, accounts, FormSubmit, and NAP checklist: `MEMORY.md`
* Live task board: `MISSION_CONTROL.md`
* Inline learnings: `// [LEARN]: …` harvested into `MEMORY.md`

## 8. Code Surgery Rules

* Prefer minimal, whitespace-sensitive edits over rewrites
* Do not invent NAP, sameAs, or analytics IDs
* Preserve zero-hydration architecture — no accidental client hydration of the shell
