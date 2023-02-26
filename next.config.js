/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   domains: ["image.tmdb.org"],
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '3000',
        pathname: '',
      },
    ],
  },
}
module.exports = nextConfig
