/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only apply basePath in production for GitHub Pages, 
  // so development runs normally at http://localhost:3000/
  basePath: process.env.NODE_ENV === 'production' ? '/V-SAFE-WORLD-PROJECT' : undefined,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
};

export default nextConfig;
