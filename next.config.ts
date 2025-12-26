import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  transpilePackages: [],
  images: {
    remotePatterns: [
      {
        hostname: "aceternity.com",
      },
      {
        hostname: "*.google.com",
      },
      {
        hostname: "*.wellfound.com",
      },
    ],
  },
};

export default nextConfig;
