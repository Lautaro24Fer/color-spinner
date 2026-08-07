/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  ...(isProduction
    ? {
        basePath: '/color-spinner',
        assetPrefix: '/color-spinner/',
      }
    : {}),
  trailingSlash: true,
};

module.exports = nextConfig;
