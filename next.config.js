/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['reqres.in'],
    formats: ['image/webp'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
