import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    // Used for public file URLs (e.g. brand PNGs); unoptimized next/image does not prefix basePath on src.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
