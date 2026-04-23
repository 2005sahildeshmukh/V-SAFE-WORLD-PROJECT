/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensure trailing slashes for better compatibility with static hosting (GitHub Pages)
  trailingSlash: true,
  // Only apply basePath in production for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/V-SAFE-WORLD-PROJECT' : '',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
};

export default nextConfig;
