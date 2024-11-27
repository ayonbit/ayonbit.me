export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${process.env.PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
