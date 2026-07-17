import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.josefinafainearte.cl';
  return [
    { url: baseUrl, lastModified: new Date('2026-04-13'), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/talleres`, lastModified: new Date('2026-04-28'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/talleres/semanal`, lastModified: new Date('2026-04-28'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/talleres/principiantes`, lastModified: new Date('2026-05-30'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/talleres/empresas`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/talleres/gift-card`, lastModified: new Date('2026-07-16'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/talleres/galaxias`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/talleres/pinta-tu-mascota`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/talleres/flores`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/talleres/marmoleado`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/talleres/grupos-cerrados`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/talleres/hada-protectora`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/talleres/cerezo-en-flor`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/talleres/triptico-arboles`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/sobre-josefina`, lastModified: new Date('2026-04-14'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/arte-terapia`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/galeria`, lastModified: new Date('2026-04-13'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contacto`, lastModified: new Date('2026-04-13'), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
