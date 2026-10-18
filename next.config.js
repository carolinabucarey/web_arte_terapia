/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'arte-admin.vercel.app', pathname: '/api/media/file/**' },
      ...(process.env.NODE_ENV === 'development' ? [{ protocol: 'http', hostname: 'localhost', port: '3100', pathname: '/api/media/file/**' }] : []),
    ],
  },
};

module.exports = nextConfig;
