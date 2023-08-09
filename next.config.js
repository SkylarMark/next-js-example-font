/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    turbo: {},
  }
}

module.exports = nextConfig
