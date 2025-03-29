export default async function sitemap() {
  const baseUrl =
    process.env.BASE_URL?.replace(/\/$/, "") || "https://ayonbit.me";
  const lastmod = new Date().toISOString();

  // Core pages with optimized update frequencies
  const corePages = [
    {
      url: baseUrl,
      changefreq: "weekly",
      priority: 1.0,
      lastmod,
    },
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
    {
      url: `${baseUrl}/work`,
      changefreq: "weekly", // More frequent if portfolio updates often
      priority: 0.9,
      lastmod,
    },
    {
      url: `${baseUrl}/about`,
      changefreq: "yearly",
      priority: 0.7,
      lastmod,
    },
  ];

  // Optional: Add blog posts if you have a blog
  // const posts = await getBlogPosts();
  // const blogPages = posts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   changefreq: "monthly",
  //   priority: 0.7,
  //   lastmod: post.updatedAt || lastmod
  // }));

  return [
    ...corePages,
    // ...blogPages
  ];
}
