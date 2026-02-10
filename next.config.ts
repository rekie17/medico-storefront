import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "loma-client-media.s3.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "9sjzhbcgs1nuxebj.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
