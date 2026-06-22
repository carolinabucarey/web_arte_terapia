/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // El admin (Payload) sirve las fotos de los talleres desde su dominio.
    remotePatterns: [
      { protocol: 'https', hostname: 'arte-admin.vercel.app', pathname: '/api/media/**' },
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
    ],
  },
};

module.exports = nextConfig;
