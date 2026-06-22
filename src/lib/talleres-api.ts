/**
 * Capa de datos: trae los talleres publicados desde el admin (Payload) y los
 * traduce al tipo `Workshop` que ya usa toda la web.
 *
 * - Sólo lee talleres con estado "publicado".
 * - ISR: revalida cada 60s, así que al publicar en el admin el cambio aparece
 *   en la web en ~1 minuto sin necesidad de redeploy.
 * - Red de seguridad: si el admin no responde, cae a los talleres hardcodeados
 *   (`WORKSHOPS`) para que el sitio nunca se rompa.
 */
import { WORKSHOPS, WHATSAPP_NUMBER, type Workshop } from './constants';

const ADMIN_URL = (
  process.env.NEXT_PUBLIC_ADMIN_URL || 'https://arte-admin.vercel.app'
).replace(/\/$/, '');

// Forma cruda de un taller tal como lo devuelve el API del admin (campos en español).
interface TallerDoc {
  id: number | string;
  slug: string;
  nombre: string;
  tagline?: string | null;
  descripcionCorta: string;
  fechaInicio?: string | null;
  fechaTexto?: string | null;
  horario?: string | null;
  duracion?: string | null;
  tipoPrecio?: 'fijo' | 'consultar';
  precioCLP?: number | null;
  cuposTotales?: number | null;
  nivel?: string | null;
  imagenPortada?: { url?: string; sizes?: { card?: { url?: string } } } | null;
  etiqueta?: string | null;
  mensajeWhatsApp?: string | null;
  textoBoton?: string | null;
  ctaLink?: string | null;
  detailLink?: string | null;
}

// Asegura URL absoluta para las imágenes servidas por el admin.
function toAbsolute(url?: string): string {
  if (!url) return '';
  return url.startsWith('http') ? url : `${ADMIN_URL}${url}`;
}

function buildCtaLink(doc: TallerDoc): string {
  if (doc.ctaLink) return doc.ctaLink;
  const mensaje =
    doc.mensajeWhatsApp || `Hola Josefina! Quiero saber más sobre ${doc.nombre}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

// Traduce un taller del admin al tipo `Workshop` de la web.
function mapTaller(doc: TallerDoc): Workshop {
  const image =
    toAbsolute(doc.imagenPortada?.sizes?.card?.url) ||
    toAbsolute(doc.imagenPortada?.url);

  return {
    id: String(doc.id),
    slug: doc.slug,
    name: doc.nombre,
    tagline: doc.tagline ?? '',
    description: doc.descripcionCorta,
    date: doc.fechaTexto || 'Próximamente',
    isoDate: doc.fechaInicio ?? undefined,
    time: doc.horario ?? '',
    duration: doc.duracion ?? '',
    price: doc.tipoPrecio === 'consultar' ? 'consultar' : doc.precioCLP ?? 'consultar',
    groupSize: doc.cuposTotales ?? 0,
    level: doc.nivel ?? '',
    image,
    images: image ? [image] : undefined,
    ctaLink: buildCtaLink(doc),
    ctaText: doc.textoBoton ?? undefined,
    badge: doc.etiqueta ?? undefined,
    detailLink: doc.detailLink ?? undefined,
  };
}

/**
 * Trae todos los talleres publicados, ordenados por el campo "orden" del admin.
 * Si el admin falla, devuelve los talleres hardcodeados como respaldo.
 */
export async function getTalleres(): Promise<Workshop[]> {
  const url =
    `${ADMIN_URL}/api/talleres` +
    `?where[estado][equals]=publicado&depth=1&sort=orden&limit=100`;

  try {
    const res = await fetch(url, { next: { revalidate: 60, tags: ['talleres'] } });
    if (!res.ok) throw new Error(`Admin respondió ${res.status}`);
    const data = (await res.json()) as { docs?: TallerDoc[] };
    return (data.docs ?? []).map(mapTaller);
  } catch (err) {
    console.error('[talleres-api] No se pudo leer del admin, uso respaldo:', err);
    return WORKSHOPS;
  }
}

/** Trae un taller publicado por su slug (o `undefined` si no existe). */
export async function getTallerBySlug(slug: string): Promise<Workshop | undefined> {
  const talleres = await getTalleres();
  return talleres.find((t) => t.slug === slug);
}
