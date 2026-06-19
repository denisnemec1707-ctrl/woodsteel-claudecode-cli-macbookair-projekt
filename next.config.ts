import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "woodsteel.sk" },
      { protocol: "https", hostname: "newdev.woodsteel.sk" },
    ],
  },
};

export default nextConfig;
