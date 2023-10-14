/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["https://lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
