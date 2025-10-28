import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    output: "export",
    distDir: "./dist",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
