import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://artejosefaine.cl';
  return [
    { url: baseUrl, lastModified: new Date('2026-04-13'), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/talleres`, lastModified: new Date('2026-04-28'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/talleres/semanal`, lastModified: new Date('2026-04-28'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/sobre-josefina`, lastModified: new Date('2026-04-14'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/arte-terapia`, lastModified: new Date('2026-04-28'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/galeria`, lastModified: new Date('2026-04-13'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contacto`, lastModified: new Date('2026-04-13'), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
