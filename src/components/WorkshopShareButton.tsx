'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { SITE_URL } from '@/lib/constants';

interface Props {
  workshopId: string;
  workshopName: string;
  tagline?: string;
  variant?: 'card' | 'modal';
}

export default function WorkshopShareButton({ workshopId, workshopName, tagline, variant = 'card' }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${SITE_URL}/talleres#${workshopId}`;
    const text = tagline
      ? `${workshopName} — ${tagline}`
      : workshopName;

    trackEvent('workshop_share_click', { workshop_id: workshopId, workshop_name: workshopName });

    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({ title: workshopName, text, url });
        trackEvent('workshop_share_success', { workshop_id: workshopId, method: 'native' });
        return;
      } catch (err) {
        if ((err as Error)?.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setCopied(true);
      trackEvent('workshop_share_success', { workshop_id: workshopId, method: 'clipboard' });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copia este enlace', url);
    }
  };

  const label = copied ? '¡Copiado!' : 'Compartir';

  if (variant === 'modal') {
    return (
      <button
        type="button"
        onClick={handleShare}
        aria-label={`Compartir taller ${workshopName}`}
        className="inline-flex items-center gap-2 text-text-muted font-body text-sm hover:text-brand-green transition-colors"
      >
        <ShareIcon />
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label={`Compartir taller ${workshopName}`}
      className="inline-flex items-center gap-1.5 text-text-muted font-body text-xs hover:text-brand-green transition-colors self-start"
    >
      <ShareIcon />
      {label}
    </button>
  );
}

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}
