export function formatCLP(amount: number): string {
  return '$' + amount.toLocaleString('es-CL');
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

import type { Workshop } from './constants';

/**
 * Ordena los talleres: los vigentes primero (en su orden original) y los que
 * ya pasaron al final, sin fecha. Un taller se considera pasado si tiene
 * `isoDate` y esa fecha es anterior a hoy.
 */
export function orderWorkshops(workshops: Workshop[]): Workshop[] {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const isPast = (w: Workshop): boolean =>
    Boolean(w.isoDate) && new Date(w.isoDate as string) < startOfToday;

  const vigentes = workshops.filter((w) => !isPast(w));
  const pasados = workshops
    .filter(isPast)
    .map((w) => ({ ...w, date: '', time: '', isoDate: undefined }));

  return [...vigentes, ...pasados];
}
