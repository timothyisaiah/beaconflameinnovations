import type { NextConfig } from "next";

// const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
// const basePath = isGitHubPages ? "/beaconflameinnovations" : "";
const basePath = "";
const nextConfig: NextConfig = {
  output: "export",
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
