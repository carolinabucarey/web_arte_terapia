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
 * Records an intent-specific lead directly in GA4 and Google Ads so the
 * company and permanent-class campaigns can optimize independently.
 *
 * The old `lead_empresas` and `lead_clases_permanentes` dataLayer events are
 * intentionally not emitted: the published GTM container also maps those
 * events to the same Ads conversion labels, which would count each lead twice.
 */
export function trackLeadIntent(intent: LeadIntent, userData?: LeadUserData) {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    // Preserve intent reporting in GA4 under a new event name that does not
    // match the legacy GTM conversion triggers.
    window.gtag('event', 'lead_intent', {
      send_to: 'G-MXQHRV8XFY',
      lead_intent: intent,
      lead_method: 'whatsapp',
      page_path: window.location.pathname,
    });

    // Fire the campaign-specific Google Ads conversion directly.
    setEnhancedConversionData(userData);
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

function normalizeEmail(raw: string): string | undefined {
  const normalized = raw.trim().toLowerCase();
  const match = normalized.match(/^([^\s@]+)@([^\s@]+\.[^\s@]+)$/);
  if (!match) return undefined;

  const [, localPart, domain] = match;

  // Google asks advertisers to remove dots before gmail.com/googlemail.com.
  const normalizedLocalPart =
    domain === 'gmail.com' || domain === 'googlemail.com'
      ? localPart.replace(/\./g, '')
      : localPart;

  return `${normalizedLocalPart}@${domain}`;
}

/**
 * Chilean phone numbers to E.164 (+56XXXXXXXXX), which is what enhanced
 * conversions requires. Returns undefined when the input doesn't look like a
 * number we can normalize — sending a malformed value is worse than none.
 */
function normalizePhone(raw: string): string | undefined {
  const digits = raw.replace(/\D/g, '');
  const e164Digits =
    raw.trim().startsWith('+') || digits.startsWith('56')
      ? digits
      : digits.length === 9
        ? `56${digits}`
        : '';

  return e164Digits.length >= 11 && e164Digits.length <= 15
    ? `+${e164Digits}`
    : undefined;
}

function buildUserData(userData: LeadUserData): Record<string, string> | undefined {
  const payload: Record<string, string> = {};

  const email = userData.email ? normalizeEmail(userData.email) : undefined;
  if (email) payload.email = email;

  const phone = userData.phone?.trim() ? normalizePhone(userData.phone) : undefined;
  if (phone) payload.phone_number = phone;

  return Object.keys(payload).length > 0 ? payload : undefined;
}

function setEnhancedConversionData(userData?: LeadUserData) {
  if (!userData || typeof window.gtag !== 'function') return;

  const enhanced = buildUserData(userData);
  if (enhanced) {
    window.gtag('set', 'user_data', enhanced);
  }
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

  setEnhancedConversionData(userData);

  window.gtag('event', 'conversion', {
    send_to: LEAD_CONVERSION_SEND_TO,
    value: 1.0,
    currency: 'CLP',
  });
}
