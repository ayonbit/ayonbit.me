export default function robots() {
  const baseUrl =
    process.env.BASE_URL?.replace(/\/$/, "") || "https://ayonbit.me";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/", // Blocks Next.js internal files
          "/api/private/", // Blocks only private API routes (if any)
          "/private/", // Blocks private sections
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
