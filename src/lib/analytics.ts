declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown> | IArguments>;
  }
}

export type LeadIntent = 'empresas' | 'clases_permanentes';

const LEAD_INTENT_CONVERSION_SEND_TO: Record<LeadIntent, string> = {
  empresas: 'AW-18139986626/6fl2CMygoNkcEML16MlD',
  clases_permanentes: 'AW-18139986626/FxEaCM-goNkcEML16MlD',
};

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/**
 * Records an intent-specific lead for Google Tag Manager and Google Ads so the
 * company and permanent-class campaigns can optimize independently.
 */
export function trackLeadIntent(intent: LeadIntent) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: `lead_${intent}`,
    lead_intent: intent,
    lead_method: 'whatsapp',
    page_path: window.location.pathname,
  });

  // Fire the campaign-specific Google Ads conversion directly. The custom
  // dataLayer event remains available in GTM for diagnostics and reporting.
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: LEAD_INTENT_CONVERSION_SEND_TO[intent],
      value: 1.0,
      currency: 'CLP',
    });
  }
}

/** Google Ads lead conversion (shared by contact form and WhatsApp clicks). */
export const LEAD_CONVERSION_SEND_TO = 'AW-18139986626/fodHCO7ut6ccEML16MlD';

/** First-party data for enhanced conversions (in-page code method). */
export interface LeadUserData {
  email?: string;
  phone?: string;
}

/**
 * Chilean phone numbers to E.164 (+56XXXXXXXXX), which is what enhanced
 * conversions requires. Returns undefined when the input doesn't look like a
 * number we can normalize — sending a malformed value is worse than none.
 */
function normalizePhone(raw: string): string | undefined {
  const digits = raw.replace(/\D/g, '');
  if (raw.trim().startsWith('+') && digits.length >= 8) return `+${digits}`;
  if (digits.length === 11 && digits.startsWith('56')) return `+${digits}`;
  if (digits.length === 9) return `+56${digits}`;
  return undefined;
}

function buildUserData(userData: LeadUserData): Record<string, string> | undefined {
  const payload: Record<string, string> = {};

  const email = userData.email?.trim().toLowerCase();
  if (email && /^\S+@\S+\.\S+$/.test(email)) payload.email = email;

  const phone = userData.phone?.trim() ? normalizePhone(userData.phone) : undefined;
  if (phone) payload.phone_number = phone;

  return Object.keys(payload).length > 0 ? payload : undefined;
}

/**
 * Fires the Google Ads lead conversion. When first-party data is available
 * (contact form), it's set as `user_data` first so Google Ads can match the
 * conversion via enhanced conversions — the in-page code method that
 * complements automatic collection.
 * Docs: https://support.google.com/google-ads/answer/11956168#in-page-code
 */
export function trackLeadConversion(userData?: LeadUserData) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const enhanced = userData ? buildUserData(userData) : undefined;
  if (enhanced) {
    window.gtag('set', 'user_data', enhanced);
  }

  window.gtag('event', 'conversion', {
    send_to: LEAD_CONVERSION_SEND_TO,
    value: 1.0,
    currency: 'CLP',
  });
}
