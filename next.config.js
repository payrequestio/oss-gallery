/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "assets.dub.co",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "o41lbhvmufhkidta.public.blob.vercel-storage.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/dubinc/oss-gallery",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
