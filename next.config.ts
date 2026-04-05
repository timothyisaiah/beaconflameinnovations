import type { NextConfig } from "next";

// GitHub Pages needs a static `out/` bundle (set STATIC_EXPORT=true in CI). That bundle
// cannot run Route Handlers—use NEXT_PUBLIC_CONTACT_API_URL at build time to POST to a
// full Next/Vercel deployment (same repo, no STATIC_EXPORT) or another HTTPS endpoint.
// Hosting the full app on Vercel/Node: omit STATIC_EXPORT so `/api/contact` ships with the app.
const basePath = "";
const useStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(useStaticExport ? { output: "export" as const } : {}),
  basePath,
  env: {
    // Used for public file URLs (e.g. brand PNGs); unoptimized next/image does not prefix basePath on src.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Static export cannot use the built-in Image Optimization API; use pre-built
  // assets (see npm run optimize:images) and sharp WebP under public/assets/cap/.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
