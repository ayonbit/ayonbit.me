export default async function sitemap() {
  const baseUrl = `${process.env.PUBLIC_BASE_URL}`;

  return [
    {
      url: baseUrl,
      changefreq: "daily",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/services`,
      changefreq: "monthly",
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
      url: `${baseUrl}/resume`,
      changefreq: "yearly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  ];
}
