import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "7u3rnz8d1mz8ef0n.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
