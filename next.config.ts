import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  images: {
    domains: ['albycosmy99.github.io'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
