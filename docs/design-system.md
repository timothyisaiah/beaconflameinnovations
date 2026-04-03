# Beacon Flame — design system (quick reference)

## Tokens (`src/app/globals.css`)

Semantic variables are **dark-first** on `:root`. Use these in new code:

| Token | Role |
|--------|------|
| `--bg`, `--bg-subtle` | Page canvas |
| `--surface`, `--surface-raised`, `--surface-elevated` | Panels and cards |
| `--foreground`, `--foreground-secondary`, `--muted` | Text |
| `--accent`, `--accent-hover`, `--accent-muted` | Primary actions (enterprise blue) |
| `--accent-warm`, `--accent-warm-muted` | Secondary emphasis (amber, sparse) |
| `--border`, `--ring`, `--ring-offset` | Edges and focus |
| `--section-y-*`, `--container-max`, `--container-padding` | Layout rhythm |

Legacy aliases (`--background`, `--card`, `--border-subtle`, …) still map to the new palette for older components.

Optional light band: add class `light` on `<html>` (not default) to use `html.light { … }` tokens.

## Primitives (`src/components/ds/`)

- **`Container`** — horizontal padding + max width (`size`: `default` \| `narrow` \| `wide`).
- **`Section`** — vertical section rhythm (`spacing`: `sm` \| `md` \| `lg` \| `none`); `variant`: `muted` \| `bordered`.
- **`SectionHeader`** — eyebrow + title + description + optional `actions`.
- **`Card`**, **`CardHeader`**, **`CardContent`** — card variants: `default`, `elevated`, `outline`, `muted`.
- **`Badge`**, **`TrustChipRow`** — labels and trust chips (`tone`: `neutral`, `accent`, `warm`, `success`).

## Buttons

- **`Button`** (`src/components/ui/Button.tsx`) — uses shared classes from **`buttonClassName()`** in `src/lib/button-styles.ts`.
- Variants: `primary`, `secondary`, `outline`, `ghost`, `warm`.
- For non-`<Button>` elements (e.g. nav CTA), import `buttonClassName` and merge with `cn()`.

## Layout shell

- **`AppShell`** (`src/components/layout/AppShell.tsx`) — skip link + `#main` landmark + top padding for the fixed header. Root layout wraps all pages with it.

## Typography utilities

Global classes in `globals.css`: `.ds-heading-display`, `.ds-heading-1`–`.ds-heading-3`, `.ds-body`, `.ds-body-sm`, `.ds-eyebrow`, `.ds-font-display`, `.ds-link`, `.ds-prose`.

## How to extend page-by-page

1. Wrap page content in **`Container`** (or nest inside **`Section`**).
2. Use **`SectionHeader`** for consistent titles; keep **one `h1`** per page in the hero only.
3. Prefer **`Card`** for grouped content; use **`Badge`** for metadata, not for paragraphs.
4. Use **`var(--accent)`** for links and primary CTAs; reserve **`warm`** for rare emphasis.
5. When migrating old pages, replace hardcoded purple (`#87158c`) with tokens and align borders to `var(--border)`.
