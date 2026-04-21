'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { WORKSHOPS } from '@/lib/constants';
import { formatCLP } from '@/lib/utils';

const PROMO_ID = 'pinta-tu-mascota';
const STORAGE_KEY = `promo-dismissed:${PROMO_ID}`;
const SHOW_DELAY_MS = 1200;

export default function WorkshopPromoPopup() {
  const [open, setOpen] = useState(false);

  const workshop = WORKSHOPS.find((w) => w.id === PROMO_ID);

  useEffect(() => {
    if (!workshop) return;
    if (typeof window === 'undefined') return;

    let dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {}

    if (dismissed) return;

    const t = window.setTimeout(() => {
      setOpen(true);
      trackEvent('promo_popup_view', { workshop_id: PROMO_ID });
    }, SHOW_DELAY_MS);

    return () => window.clearTimeout(t);
  }, [workshop]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close('escape'); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  if (!workshop) return null;

  const close = (reason: 'x' | 'backdrop' | 'escape' | 'cta') => {
    setOpen(false);
    try { window.sessionStorage.setItem(STORAGE_KEY, '1'); } catch {}
    if (reason !== 'cta') {
      trackEvent('promo_popup_dismiss', { workshop_id: PROMO_ID, reason });
    }
  };

  const handleCtaClick = () => {
    trackEvent('promo_popup_cta_click', { workshop_id: PROMO_ID });
    trackEvent('generate_lead', { workshop_id: PROMO_ID, method: 'whatsapp', source: 'promo_popup' });
    close('cta');
  };

  if (!open) return null;

  const image = workshop.images?.[0] ?? workshop.image;
  const priceLabel = workshop.price === 'consultar' ? 'Consultar' : formatCLP(workshop.price);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
      className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-brand-deep/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) close('backdrop'); }}
    >
      <div className="relative bg-white rounded-card shadow-card-hover max-w-md w-full overflow-hidden">
        <button
          type="button"
          onClick={() => close('x')}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-text-main flex items-center justify-center shadow-card"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="relative aspect-[4/3] bg-bg-warm">
          <Image
            src={image}
            alt={workshop.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 448px"
            priority
          />
          {workshop.badge && (
            <span className="absolute top-3 left-3 bg-brand-lavender/90 text-brand-deep text-xs font-body font-semibold px-3 py-1 rounded-pill backdrop-blur-sm">
              {workshop.badge}
            </span>
          )}
        </div>

        <div className="p-6 flex flex-col gap-3 text-center">
          <p className="text-brand-green text-xs font-body font-semibold tracking-wide uppercase">
            Nuevo taller · Cupos limitados
          </p>
          <h3 id="promo-popup-title" className="font-display font-semibold text-2xl text-text-main leading-tight">
            {workshop.name}
          </h3>
          <p className="text-text-muted font-body text-sm leading-relaxed">
            {workshop.date}{workshop.time ? ` · ${workshop.time}` : ''} · {priceLabel}
          </p>
          <p className="text-text-muted font-body text-sm leading-relaxed">
            Desconéctate, crea y transforma el amor por tu mascota en un retrato en acuarela. Sin experiencia previa.
          </p>

          <a
            href={workshop.ctaLink}
            onClick={handleCtaClick}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-brand-green text-white rounded-pill px-6 py-3 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {workshop.ctaText ?? 'Reserva tu cupo'}
          </a>
          <button
            type="button"
            onClick={() => close('x')}
            className="text-text-muted font-body text-xs underline underline-offset-4 hover:text-text-main transition-colors"
          >
            Ahora no
          </button>
        </div>
      </div>
    </div>
  );
}
