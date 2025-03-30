/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  // 1. Critical Redirect Fixes
  async redirects() {
    return [
      // Force HTTPS and non-www canonicalization
      {
        source: "/((?!_next/).*)",
        has: [
          { type: "host", value: "www.ayonbit.me" },
          { type: "host", value: "ayonbit.me" },
        ],
        destination: "https://ayonbit.me/:path*",
        permanent: true,
      },
      // HTTP → HTTPS redirect (catch-all)
      {
        source: "/(.*)",
        missing: [{ type: "header", key: "x-forwarded-proto", value: "https" }],
        destination: "https://ayonbit.me/:1",
        permanent: true,
      },
    ];
  },

  // 2. SEO Headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Robots control
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large",
          },
          // Cache optimization
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
          // Security headers
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // 3. Environment Configuration
  env: {
    BASE_URL: process.env.BASE_URL || "https://ayonbit.me",
    // Add this for canonical URLs
    CANONICAL_URL: process.env.CANONICAL_URL || "https://ayonbit.me",
  },
};

export default nextConfig;
