import type { NextConfig } from "next";

/**
 * The site is deployed as a fully static Next.js export to GitHub Pages.
 *
 * A GitHub Pages *project* site is served from `/<repository-name>`, so every
 * asset and route needs that prefix. The CI workflow passes the prefix in via
 * `NEXT_PUBLIC_BASE_PATH` (computed from the repository name); the fallback
 * below keeps local production builds correct for this repository.
 *
 * `next dev` runs without a prefix so http://localhost:3000/ stays clean.
 */
const isProductionBuild = process.env.NODE_ENV === "production";

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isProductionBuild ? "/peyman-resume" : "");

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS output in `out/` — no Node server required.
  output: "export",

  basePath,
  assetPrefix: basePath || undefined,

  // GitHub Pages serves `about/index.html` for `/about/`; trailing slashes keep
  // those directory URLs canonical and avoid redirect hops.
  trailingSlash: true,

  // The export target has no image optimization server.
  images: { unoptimized: true },

  // `output: "export"` renders every route to static HTML at build time, so
  // `cacheComponents` (which implies Partial Prerendering / Partial
  // Prefetching) cannot be enabled here — Next fails with
  // "Invariant: PPR cannot be enabled in export mode".
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
