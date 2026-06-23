'use client';

import { useEffect } from 'react';
import { trackLeadConversion, trackEvent } from '@/lib/analytics';

/**
 * Mounts once and listens for clicks on any anchor pointing to WhatsApp
 * (wa.me / api.whatsapp.com), firing the Google Ads lead conversion plus a
 * GA4 generate_lead event. Covers every WhatsApp entry point — floating button,
 * workshop CTAs, footer, contact card — without touching each link.
 */
export default function WhatsAppConversionTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (!/wa\.me|api\.whatsapp\.com/i.test(href)) return;

      // Always count the click as a Google Ads lead conversion.
      trackLeadConversion();

      // Skip the GA4 generate_lead for links that fire their own richer event
      // (e.g. the promo popup) to avoid double counting.
      if (anchor.hasAttribute('data-wa-skip-lead-event')) return;
      trackEvent('generate_lead', { method: 'whatsapp', source: 'link_click' });
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
