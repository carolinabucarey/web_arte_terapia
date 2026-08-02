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
import type { WorkshopSession } from './constants';

export function getUpcomingSessions(
  workshop: Workshop,
  referenceDate = new Date(),
): WorkshopSession[] {
  return [...(workshop.sessions ?? [])]
    .filter((session) => {
      if (session.status === 'cancelled') return false;
      const sessionEnd = new Date(`${session.date}T${session.endTime}:00`);
      return Number.isFinite(sessionEnd.getTime()) && sessionEnd >= referenceDate;
    })
    .sort((a, b) =>
      `${a.date}T${a.startTime}`.localeCompare(`${b.date}T${b.startTime}`),
    );
}

export function getNextSession(
  workshop: Workshop,
  referenceDate = new Date(),
): WorkshopSession | undefined {
  return getUpcomingSessions(workshop, referenceDate)[0];
}

export function formatSessionDate(session: WorkshopSession): string {
  // El mediodía evita que el parseo UTC cambie el día en Chile.
  const date = new Date(`${session.date}T12:00:00`);
  const formatted = new Intl.DateTimeFormat('es-CL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(date);

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatSessionTime(session: WorkshopSession): string {
  return `${session.startTime} a ${session.endTime}`;
}

export function getWorkshopSchedule(workshop: Workshop): { date: string; time: string } {
  return getWorkshopSchedules(workshop)[0] ?? { date: '', time: '' };
}

export function getWorkshopSchedules(
  workshop: Workshop,
): Array<{ date: string; time: string; status?: WorkshopSession['status'] }> {
  const sessions = getUpcomingSessions(workshop);

  if (sessions.length) {
    return sessions.map((session) => ({
      date: formatSessionDate(session),
      time: formatSessionTime(session),
      status: session.status,
    }));
  }

  // Si el taller ya utilizó `sessions`, no volvemos a mostrar una fecha vencida.
  if (workshop.sessions?.length) {
    return [];
  }

  return workshop.date || workshop.time
    ? [{ date: workshop.date, time: workshop.time }]
    : [];
}

/**
 * Ordena los talleres: los vigentes primero (en su orden original) y los que
 * ya pasaron al final, sin fecha. Un taller se considera pasado si tenía
 * sesiones publicadas y ya no queda ninguna vigente.
 */
export function orderWorkshops(workshops: Workshop[]): Workshop[] {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const isPast = (w: Workshop): boolean =>
    Boolean(w.sessions?.length) && getUpcomingSessions(w, startOfToday).length === 0;

  const vigentes = workshops.filter((w) => !isPast(w));
  const pasados = workshops
    .filter(isPast)
    .map((w) => ({ ...w, date: '', time: '' }));

  return [...vigentes, ...pasados];
}
