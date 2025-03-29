export default async function sitemap() {
  const baseUrl =
    process.env.BASE_URL?.replace(/\/$/, "") || "https://ayonbit.me";
  const lastmod = new Date().toISOString();

  // Core pages with optimized frequencies & priorities
  const corePages = [
    { url: `${baseUrl}/`, changefreq: "weekly", priority: 1.0, lastmod },
    {
      url: `${baseUrl}/services`,
      changefreq: "monthly",
      priority: 0.9,
      lastmod,
    },
    {
      url: `${baseUrl}/contact`,
      changefreq: "monthly",
      priority: 0.8,
      lastmod,
    },
    { url: `${baseUrl}/work`, changefreq: "weekly", priority: 0.9, lastmod },
    { url: `${baseUrl}/about`, changefreq: "yearly", priority: 0.7, lastmod },
  ];

  // Example: Fetching dynamic blog posts (if applicable)
  // const posts = await getBlogPosts();
  // const blogPages = posts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   changefreq: "monthly",
  //   priority: 0.7,
  //   lastmod: post.updatedAt || lastmod
  // }));

  return [...corePages]; // Add blogPages if dynamic content exists
}
