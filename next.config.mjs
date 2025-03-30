/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  async redirects() {
    return [
      // www → non-www redirect
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ayonbit.me" }],
        destination: "https://ayonbit.me/:path*",
        permanent: true,
      },
      // HTTP → HTTPS redirect
      {
        source: "/:path*",
        missing: [{ type: "header", key: "x-forwarded-proto", value: "https" }],
        destination: "https://ayonbit.me/:path*",
        permanent: true,
      },
    ];
  },

  // Optional: Add if you need custom headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
