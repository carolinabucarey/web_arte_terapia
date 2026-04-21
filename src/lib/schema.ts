import { SITE_NAME, SITE_URL, INSTAGRAM_BRAND, INSTAGRAM_PERSONAL, WHATSAPP_NUMBER } from './constants';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: 'Talleres de acuarela terapéutica y arteterapia en Santiago, Chile. Un espacio de autocuidado y expresión creativa.',
    url: SITE_URL,
    telephone: `+${WHATSAPP_NUMBER}`,
    image: `${SITE_URL}/fotos/foto1.jpeg`,
    logo: `${SITE_URL}/logo/logo.jpeg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Traiguén',
      addressLocality: 'Santiago',
      addressRegion: 'Región Metropolitana',
      addressCountry: 'CL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.44,
      longitude: -70.61,
    },
    priceRange: '$$',
    sameAs: [INSTAGRAM_BRAND, INSTAGRAM_PERSONAL],
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Josefina Faine',
    jobTitle: 'Artista Visual y Arteterapeuta',
    description: 'Licenciada en Artes Visuales de la Universidad Mayor, magíster en Artes en la Salud y Arteterapia de la Universidad Finis Terrae. Guía creativa de talleres de acuarela en Santiago.',
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Universidad Mayor' },
      { '@type': 'CollegeOrUniversity', name: 'Universidad Finis Terrae' },
    ],
    url: `${SITE_URL}/sobre-josefina`,
    image: `${SITE_URL}/fotos/jose.png`,
    sameAs: [INSTAGRAM_BRAND, INSTAGRAM_PERSONAL],
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Talleres de acuarela y arteterapia en Santiago, Chile. Reserva tu lugar con Josefina Faine.',
    inLanguage: 'es',
  };
}

export function getEventSchema(workshop: {
  name: string;
  description: string;
  date: string;
  price: number | 'consultar';
  image?: string;
  images?: string[];
  startIso?: string;
  endIso?: string;
  location?: string;
  offerUrl?: string;
}) {
  const imgs = (workshop.images && workshop.images.length > 0 ? workshop.images : [workshop.image ?? '/fotos/foto1.jpeg'])
    .map((src) => `${SITE_URL}${src}`);

  const locationName = workshop.location ?? 'Taller Arte y Terapia Salud';
  const addressLocality = /los leones/i.test(workshop.location ?? '') ? 'Providencia' : 'Santiago';

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: workshop.name,
    description: workshop.description,
    startDate: workshop.startIso ?? workshop.date,
    ...(workshop.endIso ? { endDate: workshop.endIso } : {}),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: locationName,
      address: {
        '@type': 'PostalAddress',
        addressLocality,
        addressRegion: 'Región Metropolitana',
        addressCountry: 'CL',
      },
    },
    organizer: {
      '@type': 'Person',
      name: 'Josefina Faine',
      url: `${SITE_URL}/sobre-josefina`,
    },
    performer: {
      '@type': 'Person',
      name: 'Josefina Faine',
    },
    offers: {
      '@type': 'Offer',
      price: workshop.price === 'consultar' ? 0 : workshop.price,
      priceCurrency: 'CLP',
      url: workshop.offerUrl ?? `${SITE_URL}/contacto`,
      availability: 'https://schema.org/InStock',
      ...(workshop.startIso ? { validFrom: workshop.startIso } : {}),
    },
    image: imgs,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
