/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: 'COHERE_API_KEY',
  },
}

module.exports = nextConfig
