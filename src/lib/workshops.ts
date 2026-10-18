import 'server-only';
import { cache } from 'react';
import { WORKSHOPS, type Workshop } from './constants';

type Catalog = { workshops: Workshop[]; managedSlugs: string[] };

/** Conserva el catálogo existente y agrega los talleres publicados desde Arte Admin. */
export const getWorkshops = cache(async (): Promise<Workshop[]> => {
  const origin = process.env.ARTE_ADMIN_URL;
  if (!origin) return WORKSHOPS;
  try {
    const response = await fetch(new URL('/api/workshops', origin), {
      next: { revalidate: 60 }, signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const catalog: Catalog = await response.json();
    if (!Array.isArray(catalog.workshops) || !Array.isArray(catalog.managedSlugs)) {
      throw new Error('Respuesta de talleres inválida');
    }
    // Los talleres existentes siguen con su contenido actual hasta importarlos al admin.
    const existing = new Map(WORKSHOPS.map(workshop => [workshop.slug, workshop]));
    const managed = new Set(catalog.managedSlugs);
    const special = new Set(['empresas', 'gift-card']);
    return [
      ...catalog.workshops.map(workshop => ({ ...existing.get(workshop.slug), ...workshop })),
      ...WORKSHOPS.filter(workshop => special.has(workshop.slug) && !managed.has(workshop.slug)),
    ];
  } catch (error) {
    console.error('No se pudo cargar el catálogo de Arte Admin:', error instanceof Error ? error.message : 'Error de conexión');
    return WORKSHOPS;
  }
});

export async function getWorkshop(slug: string): Promise<Workshop | undefined> {
  return (await getWorkshops()).find(workshop => workshop.slug === slug);
}
