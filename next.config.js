/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// next.config.js

module.exports = nextConfig;

const withImages = require('next-images');
module.exports = withImages();
