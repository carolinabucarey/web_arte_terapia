'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface Props {
  href: string;
  workshopId: string;
  workshopName: string;
  children: React.ReactNode;
}

export default function WorkshopCTA({ href, workshopId, workshopName, children }: Props) {
  const isExternal = /^https?:\/\//.test(href);
  const isWhatsApp = /wa\.me|whatsapp/.test(href);
  const method = isWhatsApp ? 'whatsapp' : 'internal';

  const handleClick = () => {
    trackEvent('workshop_cta_click', {
      workshop_id: workshopId,
      workshop_name: workshopName,
      method,
    });
    trackEvent('select_content', {
      content_type: 'workshop',
      item_id: workshopId,
    });
    if (isWhatsApp) {
      trackEvent('generate_lead', { workshop_id: workshopId, method: 'whatsapp' });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      data-workshop-id={workshopId}
      className="mt-1 bg-brand-green text-white rounded-pill px-5 py-2.5 font-body font-semibold text-sm text-center hover:opacity-90 transition-opacity"
    >
      {children}
    </Link>
  );
}
