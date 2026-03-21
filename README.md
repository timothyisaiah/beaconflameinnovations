# BeaconFlame Innovations

A premium corporate website for **BeaconFlame Innovations**—a software engineering and technology consultancy building AI systems, agentic platforms, analytics, and digital solutions. The experience positions the company as engineering-led and globally competitive, with headquarters in Kampala, Uganda.

## Brand (reference)

- **Primary:** `#87158C` — signature purple; dominant in dark mode and for accents in light mode.
- **Light canvas:** `#FAF9F6` — secondary / light-mode background (clean, premium surfaces).
- **Dark canvas:** deep purple-black (`#0a0610` range) with white and muted text; primary purple for CTAs and emphasis.

The site supports **light and dark** themes (system default, persisted preference) aligned to these guidelines.

## Brand images (PNG)

Logos live in `public/assets/` and are referenced from `src/data/brand.ts`. The **`ImageMark`** component (`src/components/layout/ImageMark.tsx`) renders them in the header and footer.

| File | Use |
|------|-----|
| `logo-mark.png` | Compact / mobile mark |
| `logo-horizontal-light.png` | Horizontal lockup on **light** theme |
| `logo-horizontal-dark.png` | Horizontal lockup on **dark** theme |

The repo includes tiny placeholder PNGs so builds succeed—replace them with final exports from design (match or update `width` / `height` in `ImageMark` if dimensions change).

### Image optimization with static export

This project uses `output: "export"` and `images.unoptimized: true` in `next.config.ts`, so Next.js does **not** run its Image Optimization API at request time; files in `public/` are served as-is.

1. **Pre-optimize assets** — Compress and resize PNGs before committing (e.g. [Squoosh](https://squoosh.app/), TinyPNG, or `sharp` in a small script). Export at the display size you need, or provide `@2x` assets and adjust `width`/`height` / CSS `max-w-*` in `ImageMark`.
2. **Keep using `next/image`** — You still get lazy loading (where applicable), `sizes`-friendly layout, and correct `width`/`height` to reduce CLS; optimization is “manual” in the source files.
3. **Moving off pure static hosting** — If you deploy to a platform that supports the Next image optimizer (e.g. Vercel without static export), you can remove `unoptimized` and use the built-in optimizer—**not** compatible with `output: "export"` as usually deployed to static file hosts.
4. **CDN** — Host optimized images on a CDN and point `brand.ts` to absolute URLs; add `images.remotePatterns` in `next.config.ts` if you use `next/image` with remote URLs.

## Tech Stack

- **Framework:** Next.js 16 (App Router), static export–ready
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Theming:** `next-themes` (class strategy on `<html>`)
- **3D:** React Three Fiber, Drei, Three.js
- **Motion:** Framer Motion; Lenis + GSAP ScrollTrigger for smooth scroll on the immersive homepage
- **Architecture:** Component-based, CMS-ready content modules

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use the header control to switch **light / dark** theme.

## Project Structure

```
src/
├── app/                    # App Router pages & layouts
├── components/
│   ├── home/               # ImmersiveHomeClient + `sections/` (Hero, Capabilities, …)
│   ├── immersive/        # Section progress rail
│   ├── layout/             # Header, Footer, ImageMark, ThemeToggle
│   ├── skeletons/          # Route loading UI
│   ├── three/              # R3F canvas & scenes
│   └── ui/
├── contexts/               # Scroll progress (homepage)
├── data/                   # site.ts, content.ts
├── hooks/
├── lib/
└── providers/              # Theme, smooth scroll
```

## Typography

- **Display:** Syne  
- **Body:** DM Sans  

## Key Routes

- **/** — Immersive scroll narrative + 3D (respects theme; light mode uses a lighter scene)
- **/about**, **/capabilities**, **/partnerships**, **/contact** — Marketing pages with theme-aware styling
- **/products**, **/solutions**, **/sustainability** — Legacy/supplementary routes (update as needed)

## Build & Deploy

```bash
npm run build
npm start
```

Configured for static export via `next.config.ts` (`output: "export"`) when used with GitHub Pages or static hosts.

## License

© BeaconFlame Innovations Ltd. All rights reserved.
