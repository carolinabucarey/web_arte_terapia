/**
 * Cliente del admin de Payload (arte_admin).
 *
 * El frontend lee de los endpoints REST que expone Payload:
 *   /api/talleres, /api/galeria, /api/globals/hero
 *
 * Configurar `NEXT_PUBLIC_ADMIN_URL` en `.env.local` (dev) y en Vercel (prod).
 */

import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, INSTAGRAM_BRAND } from './constants';
import type { Workshop } from './constants';

function getAdminUrl(): string {
  const url = process.env.NEXT_PUBLIC_ADMIN_URL;
  if (!url) {
    throw new Error(
      'NEXT_PUBLIC_ADMIN_URL no está configurada. Apuntala al admin de Payload (ej. http://localhost:3000 en dev).',
    );
  }
  return url;
}

// Cuántos segundos cachea Next el contenido del admin antes de re-fetchearlo.
// 60s da un balance entre velocidad y "cambios se ven rápido".
const REVALIDATE_SECONDS = 60;

// ---------------------------------------------------------------------------
// Tipos del shape que devuelve Payload (los relevantes — no exhaustivos).
// ---------------------------------------------------------------------------

interface PayloadMedia {
  id: number;
  url?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
}

interface PayloadTaller {
  id: number;
  nombre: string;
  slug?: string | null;
  tagline?: string | null;
  descripcionCorta: string;
  descripcionLarga?: string | null;
  fechaInicio?: string | null;
  fechaTexto?: string | null;
  horario?: string | null;
  duracion?: string | null;
  tipoPrecio?: 'fijo' | 'consultar' | null;
  precioCLP?: number | null;
  cuposTotales?: number | null;
  cuposDisponibles?: number | null;
  nivel?: string | null;
  imagenPortada: number | PayloadMedia;
  etiqueta?: string | null;
  textoBoton?: string | null;
  ctaLink?: string | null;
  mensajeWhatsApp?: string | null;
  detailLink?: string | null;
  estado: 'borrador' | 'publicado' | 'agotado' | 'archivado';
  orden?: number | null;
}

interface PayloadHero {
  eyebrow?: string | null;
  titulo: string;
  subtitulo?: string | null;
  imagenFondo: number | PayloadMedia;
  textoBoton?: string | null;
  linkBoton?: string | null;
  textoBoton2?: string | null;
  linkBoton2?: string | null;
  instagramUrl?: string | null;
}

interface PayloadGaleriaItem {
  id: number;
  imagen: number | PayloadMedia;
  tituloAlt?: string | null;
  caption?: string | null;
  visible?: boolean | null;
  orden?: number | null;
}

interface PaginatedResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  page: number;
}

// ---------------------------------------------------------------------------
// Tipos públicos (los que consumen los componentes).
// ---------------------------------------------------------------------------

export interface HeroContent {
  eyebrow: string;
  titulo: string;
  imagenFondo: { src: string; alt: string };
  botonPrimario: { texto: string; link: string };
  botonSecundario?: { texto: string; link: string };
  instagramUrl?: string;
}

export interface GaleriaItem {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function resolveUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  // URL relativa devuelta por Payload en dev (ej. /api/media/file/foo.jpg)
  return `${getAdminUrl()}${url}`;
}

function getMediaUrl(media: number | PayloadMedia | null | undefined): string | null {
  if (!media || typeof media === 'number') return null;
  return resolveUrl(media.url);
}

function getMediaAlt(media: number | PayloadMedia | null | undefined, fallback: string): string {
  if (!media || typeof media === 'number') return fallback;
  return media.alt || fallback;
}

async function fetchFromAdmin<T>(path: string): Promise<T> {
  const res = await fetch(`${getAdminUrl()}${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    throw new Error(`Admin respondió ${res.status} para ${path}`);
  }
  return res.json() as Promise<T>;
}

// ---------------------------------------------------------------------------
// Mappers (Payload → shape esperado por los componentes)
// ---------------------------------------------------------------------------

function buildWhatsAppLink(mensaje?: string | null): string {
  const texto = mensaje?.trim() || WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
}

function formatFechaDesdeISO(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function mapTallerToWorkshop(t: PayloadTaller): Workshop {
  const date = t.fechaInicio
    ? formatFechaDesdeISO(t.fechaInicio)
    : t.fechaTexto?.trim() || 'Próximamente';

  const time = t.horario?.trim() || '';
  const duration = t.duracion?.trim() || '';

  // tipoPrecio === 'consultar' fuerza "Consultar" aunque haya un precio numérico cargado.
  const price: Workshop['price'] =
    t.tipoPrecio === 'consultar' || typeof t.precioCLP !== 'number'
      ? 'consultar'
      : t.precioCLP;

  const groupSize = typeof t.cuposTotales === 'number' ? t.cuposTotales : 6;
  const level = t.nivel?.trim() || 'Todos los niveles';
  const tagline = t.tagline?.trim() || '';
  const slug = t.slug?.trim() || '';

  const ctaLink = t.ctaLink?.trim() || buildWhatsAppLink(t.mensajeWhatsApp);
  const imageUrl = getMediaUrl(t.imagenPortada);

  return {
    id: slug || String(t.id),
    slug,
    name: t.nombre,
    tagline,
    description: t.descripcionCorta,
    longDescription: t.descripcionLarga?.trim() || undefined,
    date,
    time,
    duration,
    price,
    groupSize,
    level,
    image: imageUrl ?? '/fotos/foto1.jpeg',
    ctaLink,
    ctaText: t.textoBoton?.trim() || undefined,
    badge: t.etiqueta?.trim() || undefined,
    detailLink: t.detailLink?.trim() || (slug ? `/talleres/${slug}` : undefined),
  };
}

function mapHero(h: PayloadHero): HeroContent {
  const fondoUrl = getMediaUrl(h.imagenFondo);
  return {
    eyebrow: h.eyebrow?.trim() || 'Acuarela · Autocuidado · Expresión',
    titulo: h.titulo,
    imagenFondo: {
      src: fondoUrl ?? '/fotos/foto2.jpeg',
      alt: getMediaAlt(h.imagenFondo, 'Taller de acuarela y arteterapia'),
    },
    botonPrimario: {
      texto: h.textoBoton?.trim() || 'Ver talleres',
      link: h.linkBoton?.trim() || '/#talleres',
    },
    botonSecundario:
      h.textoBoton2?.trim() && h.linkBoton2?.trim()
        ? {
            texto: h.textoBoton2.trim(),
            link: h.linkBoton2.trim(),
          }
        : undefined,
    instagramUrl: h.instagramUrl?.trim() || INSTAGRAM_BRAND,
  };
}

function mapGaleriaItem(g: PayloadGaleriaItem): GaleriaItem | null {
  const url = getMediaUrl(g.imagen);
  if (!url) return null;
  return {
    id: g.id,
    src: url,
    alt: g.tituloAlt?.trim() || 'Foto de la galería',
    caption: g.caption?.trim() || undefined,
  };
}

// ---------------------------------------------------------------------------
// API pública del módulo
// ---------------------------------------------------------------------------

export async function getTalleres(): Promise<Workshop[]> {
  const data = await fetchFromAdmin<PaginatedResponse<PayloadTaller>>(
    '/api/talleres?where[estado][equals]=publicado&sort=orden&depth=1&limit=100',
  );
  return data.docs.map(mapTallerToWorkshop);
}

export async function getTallerBySlug(slug: string): Promise<Workshop | null> {
  if (!slug || slug === 'undefined') return null;
  const data = await fetchFromAdmin<PaginatedResponse<PayloadTaller>>(
    `/api/talleres?where[slug][equals]=${encodeURIComponent(slug)}&depth=1&limit=1`,
  );
  const taller = data.docs[0];
  return taller ? mapTallerToWorkshop(taller) : null;
}

const HERO_FALLBACK: HeroContent = {
  eyebrow: 'Acuarela · Autocuidado · Expresión',
  titulo: 'Talleres para crear, sentir y habitar tu mundo interior a través del arte',
  imagenFondo: { src: '/fotos/foto2.jpeg', alt: 'Taller de acuarela y arteterapia' },
  botonPrimario: { texto: 'Ver talleres', link: '/#talleres' },
  botonSecundario: { texto: 'Reservar mi lugar', link: '/contacto' },
  instagramUrl: INSTAGRAM_BRAND,
};

export async function getHero(): Promise<HeroContent> {
  try {
    const data = await fetchFromAdmin<PayloadHero>('/api/globals/hero?depth=1');
    return mapHero(data);
  } catch (err) {
    // Si el admin tira 500 (ej. relación a media rota), usamos un hero de fallback
    // para no tirar el sitio entero. Logueamos para que se note en dev.
    console.error('[cms] getHero falló, usando fallback:', err);
    return HERO_FALLBACK;
  }
}

export async function getGaleria(): Promise<GaleriaItem[]> {
  const data = await fetchFromAdmin<PaginatedResponse<PayloadGaleriaItem>>(
    '/api/galeria?where[visible][equals]=true&sort=orden&depth=1&limit=100',
  );
  return data.docs.map(mapGaleriaItem).filter((x): x is GaleriaItem => x !== null);
}
