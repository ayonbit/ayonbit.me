export default function robots() {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all user agents
        allow: "/", // Allows crawling of the entire website
      },
    ],
    sitemap: process.env.BASE_URL
      ? `${process.env.BASE_URL}/sitemap.xml` // Use the environment variable for BASE_URL if available
      : "https://ayonbit.me/sitemap.xml", // Default sitemap URL if BASE_URL is not set
  };
}
