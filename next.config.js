/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "build",

    images: {
        unoptimized: true
    },
    experimental: {
        scrollRestoration: true
    }
};

module.exports = nextConfig;
