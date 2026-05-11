/** @type {import('next').NextConfig} */

// Hosts desde donde se sirven imágenes del admin (Payload).
// - localhost: dev local (Payload sirve archivos en /api/media/file/...)
// - *.public.blob.vercel-storage.com: Vercel Blob en producción
// - el dominio de NEXT_PUBLIC_ADMIN_URL (si es custom)
const remotePatterns = [
  { protocol: 'http', hostname: 'localhost' },
  { protocol: 'https', hostname: '**.public.blob.vercel-storage.com' },
];

if (process.env.NEXT_PUBLIC_ADMIN_URL) {
  try {
    const adminUrl = new URL(process.env.NEXT_PUBLIC_ADMIN_URL);
    remotePatterns.push({
      protocol: adminUrl.protocol.replace(':', ''),
      hostname: adminUrl.hostname,
    });
  } catch {
    // URL inválida — se ignora, los demás patrones siguen aplicando.
  }
}

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns,
  },
};

module.exports = nextConfig;
