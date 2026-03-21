/**
 * Brand image paths under `/public/assets` (PNG).
 * Replace placeholder files with final exports from design (see ImageMark + README).
 * Prefix matches `basePath` in next.config (GitHub Pages project site).
 */
const p = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const brandAssets = {
  logoMark: `${p}/assets/logo-mark.png`,
  logoHorizontalLight: `${p}/assets/logo-horizontal-light.png`,
  logoHorizontalDark: `${p}/assets/logo-horizontal-dark.png`,
} as const;
