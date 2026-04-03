import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.86.226"],
  async redirects() {
    return [
      { source: "/why", destination: "/#why", permanent: true },
      { source: "/steps", destination: "/#steps", permanent: true },
      { source: "/advanced", destination: "/#advanced", permanent: true },
      { source: "/pricing", destination: "/#pricing", permanent: true },
      { source: "/testimonials", destination: "/#testimonials", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
