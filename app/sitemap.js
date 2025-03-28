export default async function sitemap() {
  const baseUrl =
    process.env.BASE_URL?.replace(/\/$/, "") || "https://ayonbit.me";

  const lastmod = new Date().toISOString(); // Set lastmod once

  return [
    {
      url: baseUrl,
      changefreq: "daily",
      priority: 1,
      lastmod,
    },
    {
      url: `${baseUrl}/services`,
      changefreq: "weekly",
      priority: 0.9,
      lastmod,
    },
    {
      url: `${baseUrl}/contact`,
      changefreq: "daily",
      priority: 0.9,
      lastmod,
    },
    {
      url: `${baseUrl}/work`,
      changefreq: "weekly",
      priority: 0.8,
      lastmod,
    },
    {
      url: `${baseUrl}/about`,
      changefreq: "yearly",
      priority: 0.8,
      lastmod,
    },
  ];
}
