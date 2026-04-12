/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/v-safe-world',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
};

export default nextConfig;
