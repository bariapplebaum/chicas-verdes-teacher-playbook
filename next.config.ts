import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/chicas-verdes-teacher-playbook",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
