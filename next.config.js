/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com"
            }
        ]
    },
    experimental: {
        scrollRestoration: true
    }
};

module.exports = nextConfig;
