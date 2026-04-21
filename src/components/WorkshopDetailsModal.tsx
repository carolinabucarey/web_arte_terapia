'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { formatCLP } from '@/lib/utils';
import type { Workshop } from '@/lib/constants';
import WorkshopShareButton from './WorkshopShareButton';

export default function WorkshopDetailsModal({ workshop }: { workshop: Workshop }) {
  const [open, setOpen] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  const images = workshop.images && workshop.images.length > 0 ? workshop.images : [workshop.image];
  const priceLabel = workshop.price === 'consultar' ? 'Consultar' : formatCLP(workshop.price);
  const dateTime = [workshop.date, workshop.time].filter(Boolean).join(' · ');
  const isWhatsApp = /wa\.me|whatsapp/.test(workshop.ctaLink);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    trackEvent('workshop_details_open', {
      workshop_id: workshop.id,
      workshop_name: workshop.name,
    });
  };

  const handleCtaClick = () => {
    trackEvent('workshop_cta_click', {
      workshop_id: workshop.id,
      workshop_name: workshop.name,
      method: isWhatsApp ? 'whatsapp' : 'internal',
      source: 'details_modal',
    });
    if (isWhatsApp) {
      trackEvent('generate_lead', { workshop_id: workshop.id, method: 'whatsapp' });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="text-brand-deep font-body text-sm underline underline-offset-4 hover:text-brand-green transition-colors self-start"
      >
        Ver detalles
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`workshop-${workshop.id}-title`}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-brand-deep/60 backdrop-blur-sm animate-in fade-in"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="relative bg-white rounded-card shadow-card-hover max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-text-main flex items-center justify-center shadow-card"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className="relative aspect-[4/3] bg-bg-warm overflow-hidden rounded-t-card">
              {images.map((src, i) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-400 ${i === imgIdx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <Image src={src} alt={`${workshop.name} — imagen ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 640px" />
                </div>
              ))}
              {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setImgIdx(i)}
                      aria-label={`Imagen ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${i === imgIdx ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/80'}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 md:p-8 flex flex-col gap-4">
              <p className="text-brand-green text-xs font-body font-medium tracking-wide uppercase">{workshop.tagline}</p>
              <h3 id={`workshop-${workshop.id}-title`} className="font-display font-semibold text-2xl md:text-3xl text-text-main">
                {workshop.name}
              </h3>

              <p className="text-text-muted font-body text-base leading-relaxed whitespace-pre-line">
                {workshop.description}
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-2 font-body text-sm">
                {dateTime && (
                  <div>
                    <dt className="text-text-muted text-xs uppercase tracking-wide">Fecha</dt>
                    <dd className="text-text-main">{dateTime}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-text-muted text-xs uppercase tracking-wide">Duración</dt>
                  <dd className="text-text-main">{workshop.duration}</dd>
                </div>
                {workshop.location && (
                  <div>
                    <dt className="text-text-muted text-xs uppercase tracking-wide">Ubicación</dt>
                    <dd className="text-text-main">{workshop.location}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-text-muted text-xs uppercase tracking-wide">Grupo</dt>
                  <dd className="text-text-main">Máx. {workshop.groupSize} personas · {workshop.level}</dd>
                </div>
                <div>
                  <dt className="text-text-muted text-xs uppercase tracking-wide">Valor</dt>
                  <dd className="text-text-main font-semibold text-base">{priceLabel}</dd>
                </div>
              </dl>

              <a
                href={workshop.ctaLink}
                onClick={handleCtaClick}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm text-center hover:opacity-90 transition-opacity"
              >
                {workshop.ctaText ?? 'Reservar mi lugar'}
              </a>

              <div className="flex justify-center pt-1">
                <WorkshopShareButton
                  workshopId={workshop.id}
                  workshopName={workshop.name}
                  tagline={workshop.tagline}
                  variant="modal"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
