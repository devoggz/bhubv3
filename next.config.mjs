/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};
