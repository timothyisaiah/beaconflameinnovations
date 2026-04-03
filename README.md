# BeaconFlame Innovations — Web App

Corporate marketing site for **BeaconFlame Innovations** (software engineering and technology consultancy, Kampala, Uganda). The app is a **static Next.js export**: fast, SEO-friendly pages with a **dark-first** design system, a **conversion-focused home landing**, and inner routes for About, Solutions, Process, Contact, and more.

---

## Architecture (what this repo is)

| Layer | Role |
|--------|------|
| **Next.js App Router** (`src/app/`) | Routes, layouts, `metadata`, global CSS, `loading.tsx` skeletons per segment. |
| **Root layout** | Skip link → `#main`, fixed **Header**, **Footer**, `<main id="main">` for page content. Fonts: **Syne** (display), **DM Sans** (body) via `next/font`. |
| **Design system** (`src/components/ds/`) | Tokens-driven primitives: `Container`, `Section`, `SectionHeader`, `Card`, `Badge`, `TrustChipRow`. |
| **Marketing landing** (`src/components/home/landing/`) | Composed **LandingPage**: hero, trust, solutions, how-it-works, case studies, technical credibility, final CTA. **Framer Motion** + `useReducedMotion` for entrance and scroll reveals. |
| **Feature UI** | `components/about/`, `components/solutions/`, `components/contact/`, `components/ui/` (`Button`, `AnimatedSection`). |
| **Content** (`src/data/`) | Central site config (`site.ts`), nav, plus per-page modules (`about.ts`, `solutions-page.ts`, `process.ts`, …). |
| **Shared** | `lib/utils.ts` (`cn`), `lib/button-styles.ts` (shared button classes), `lib/inner-page-layout.ts` (header offset for inner pages). |

**Optional light mode:** `globals.css` defines `html.light { … }` tokens. The root layout currently sets `className="dark"` on `<html>`; toggling light is a matter of adding `light` / removing `dark` (no `next-themes` in this repo today).

---

## Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS v4** (`@import "tailwindcss"` in `globals.css`)
- **Framer Motion** (landing + motion-heavy UI)
- **clsx** via `cn()` for class merging
- **ESLint** (`eslint-config-next`)

**Not included:** 3D (R3F/Three), smooth-scroll (Lenis/GSAP). The site is intentionally lightweight for static hosting.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root shell, metadata, fonts, globals.css
│   ├── page.tsx            # Home → LandingPage
│   ├── loading.tsx         # Home skeleton
│   ├── globals.css         # Design tokens + .ds-* utilities
│   ├── about/              # About page
│   ├── capabilities/       # Capabilities (layout + page)
│   ├── contact/            # Contact + consultation form
│   ├── partnerships/
│   ├── process/
│   ├── products/
│   ├── solutions/          # Solutions narrative (composed sections)
│   └── sustainability/
├── components/
│   ├── ds/                 # Design-system primitives (barrel: index.ts)
│   ├── home/landing/       # Landing sections + motion-config, placeholders, CtaLink
│   ├── layout/             # Header, Footer, ImageMark
│   ├── contact/
│   ├── solutions/
│   ├── about/
│   ├── skeletons/          # Route loading UI (re-exported from index.ts)
│   └── ui/                  # Button, AnimatedSection
├── data/                   # site.ts, brand.ts, content.ts, per-route JSON-like modules
├── hooks/                  # useReducedMotion (prefers-reduced-motion)
└── lib/                    # utils, button-styles, inner-page-layout
```

**Docs:** [`docs/design-system.md`](docs/design-system.md) — token names, primitives, typography utilities.

---

## Routes

| Path | Purpose |
|------|---------|
| `/` | Marketing landing (hero → trust → solutions → process preview → case studies → technical credibility → CTA). |
| `/about` | Company story (`AboutPage` + data from `data/about.ts`). |
| `/capabilities` | Client redirect to `/solutions` (legacy URL; static export has no server redirects). |
| `/solutions` | Solutions narrative (blocks from `data/solutions-page.ts`). |
| `/process` | Delivery process (`data/process.ts`). |
| `/partnerships` | Partnerships (`data/partnerships-page.ts`). |
| `/contact` | Contact + consultation form (`ContactConsultationForm`). |
| `/products` | Product grid (`data/products.ts`). |
| `/sustainability` | Sustainability page. |

**Navigation** source of truth: `navLinks` in [`src/data/site.ts`](src/data/site.ts) (used by **Header**).

---

## Conventions

- **Inner pages** (not `/`): first content band should respect the fixed header using `INNER_PAGE_HERO_TOP_CLASS` from [`src/lib/inner-page-layout.ts`](src/lib/inner-page-layout.ts) (`pt-24 md:pt-32`), consistent with the landing’s own top spacing.
- **Primary CTAs** on the landing and shared CTA links use [`src/components/home/landing/placeholders.ts`](src/components/home/landing/placeholders.ts) (`CONTACT_PATH`, `CASE_STUDIES_ANCHOR`). Adjust there for Calendly, HubSpot, or query params.
- **Motion tuning:** [`src/components/home/landing/motion-config.ts`](src/components/home/landing/motion-config.ts) — durations, stagger, viewport margins; landing respects `prefers-reduced-motion` via `useReducedMotion`.
- **Brand assets:** [`src/data/brand.ts`](src/data/brand.ts) + [`src/components/layout/ImageMark.tsx`](src/components/layout/ImageMark.tsx); files under `public/assets/`.

---

## Static export & images

Configured in [`next.config.ts`](next.config.ts):

- `output: "export"` — static HTML/CSS/JS output (GitHub Pages, S3, any static host).
- `images.unoptimized: true` — no Next Image Optimization API at request time; ship **pre-optimized** assets.
- `basePath` — empty by default; uncomment the GitHub Pages pattern in `next.config.ts` if the repo is deployed under a subpath.

Capability images are generated by `npm run optimize:images` (see `scripts/optimize-capability-images.mjs`) into `public/assets/cap/`.

---

## Scripts

```bash
npm install
npm run dev          # dev server
npm run build        # optimize:images + next build (static export)
npm run start        # serve production build locally
npm run lint         # eslint
```

---

## Brand (reference)

- **Primary accent:** `#87158C` (mapped to `--accent` in `globals.css`).
- **Default experience:** dark UI tokens on `:root`; optional `html.light` for a light band.

---

## License

© BeaconFlame Innovations Ltd. All rights reserved.
