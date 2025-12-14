/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'streak-stats.demolab.com',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig

