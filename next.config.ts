import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'eb7cw7lpb6.ufs.sh',
      },
      {
        protocol: 'https',
        hostname: 'www.lpu.in',
      },
      {
        protocol: 'https',
        hostname: 'www.eventeye.in',
      },
    ],
  }
};

export default nextConfig;
