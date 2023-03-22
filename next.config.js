/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: "/sobre/",
        destination: "/about/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
