/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false, // Ensures no extra slashes in URLs
  async redirects() {
    return [
      {
        source: "/old-path",
        destination: "/new-path",
        permanent: true, // 301 redirect
      },
    ];
  },
  env: {
    BASE_URL: process.env.BASE_URL, // Ensure BASE_URL is accessible
  },
};

export default nextConfig;
