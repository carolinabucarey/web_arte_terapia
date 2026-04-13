import { SITE_NAME, SITE_URL, INSTAGRAM_BRAND, INSTAGRAM_PERSONAL } from './constants';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: 'Talleres de acuarela terapéutica y arteterapia en Santiago, Chile.',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago',
      addressCountry: 'CL',
    },
    sameAs: [INSTAGRAM_BRAND, INSTAGRAM_PERSONAL],
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Josefina Faine',
    jobTitle: 'Artista Visual y Arteterapeuta',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad de Chile',
    },
    url: `${SITE_URL}/sobre-josefina`,
    sameAs: [INSTAGRAM_BRAND, INSTAGRAM_PERSONAL],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getEventSchema(workshop: {
  name: string;
  description: string;
  date: string;
  price: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: workshop.name,
    description: workshop.description,
    startDate: workshop.date,
    location: {
      '@type': 'Place',
      name: 'Taller Arte y Terapia Salud',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santiago',
        addressCountry: 'CL',
      },
    },
    organizer: {
      '@type': 'Person',
      name: 'Josefina Faine',
    },
    offers: {
      '@type': 'Offer',
      price: workshop.price,
      priceCurrency: 'CLP',
      url: `${SITE_URL}/contacto`,
    },
  };
}
