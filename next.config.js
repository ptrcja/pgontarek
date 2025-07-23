/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
    images: {
        unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/patiqa' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/patiqa/' : '',
}

module.exports = nextConfig 