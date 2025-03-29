export default function robots() {
  const baseUrl =
    process.env.BASE_URL?.replace(/\/$/, "") || "https://ayonbit.me";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Essential Next.js disallows
        disallow: [
          "/_next/", // Next.js internal paths
          "/api/", // API routes
          "/private/", // Private sections
          "/*.json$", // JSON files
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    // Optional but recommended for SEO
    host: baseUrl,
  };
}
