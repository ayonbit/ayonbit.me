export default async function sitemap() {
  const baseUrl =
    process.env.BASE_URL?.replace(/\/$/, "") || "https://ayonbit.me";

  return [
    {
      url: baseUrl,
      changefreq: "daily",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/services`,
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contact`,
      changefreq: "daily",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/work`,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/about`,
      changefreq: "yearly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  ];
}
