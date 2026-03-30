/**
 * Generates production-oriented WebP variants (resize + compress) for capability
 * hero art. Run after updating source PNGs in public/assets/.
 *
 *   npm run optimize:images
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsDir = path.join(root, "public", "assets");
const outDir = path.join(assetsDir, "cap");

/** Max width for cards (~560px × 2 for retina + layout margin) */
const MAX_WIDTH = 1280;
const WEBP_QUALITY = 82;

const jobs = [
  { src: "ai systems.png", dest: "ai-systems.webp" },
  { src: "ai agents.png", dest: "ai-agents.webp" },
  { src: "engineering.png", dest: "engineering.webp" },
  { src: "data and analytics.png", dest: "data-analytics.webp" },
  { src: "consultancy.png", dest: "consultancy.webp" },
];

await mkdir(outDir, { recursive: true });

for (const { src, dest } of jobs) {
  const from = path.join(assetsDir, src);
  const to = path.join(outDir, dest);
  await sharp(from)
    .rotate()
    .resize(MAX_WIDTH, null, { withoutEnlargement: true, fit: "inside" })
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(to);
  console.log(`Wrote ${path.relative(root, to)}`);
}

console.log("Capability images optimized.");
