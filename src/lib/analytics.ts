declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/** Google Ads lead conversion (shared by contact form and WhatsApp clicks). */
export const LEAD_CONVERSION_SEND_TO = 'AW-18139986626/fodHCO7ut6ccEML16MlD';

export function trackLeadConversion() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: LEAD_CONVERSION_SEND_TO,
      value: 1.0,
      currency: 'CLP',
    });
  }
}
