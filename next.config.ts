import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Static export for GitHub Pages
  output: 'export',

  // NO basePath or assetPrefix needed for custom domain
  // Custom domain (abhishek-rajput.me) will serve from root

  // Image optimization (unoptimized for static export)
  images: {
    unoptimized: true,
  },

  // Enable compression
  compress: true,

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  // Trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
