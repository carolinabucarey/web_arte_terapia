import type { Metadata } from 'next';
import WorkshopGrid from '@/components/WorkshopGrid';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { getEventSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { WORKSHOPS, SITE_URL } from '@/lib/constants';
import { TALLERES_FAQS } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Próximos Talleres de Acuarela | artejosefaine.cl',
  description:
    'Descubre los próximos talleres de acuarela y arteterapia en Santiago. Grupos pequeños, experiencia boutique. Sin experiencia previa necesaria.',
  alternates: { canonical: '/talleres' },
  openGraph: {
    title: 'Próximos Talleres de Acuarela | artejosefaine.cl',
    description: 'Descubre los próximos talleres de acuarela y arteterapia en Santiago.',
    url: 'https://artejosefaine.cl/talleres',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Inicio', url: SITE_URL },
  { name: 'Talleres', url: `${SITE_URL}/talleres` },
];

export default function TalleresPage() {
  const breadcrumb = getBreadcrumbSchema(BREADCRUMB_ITEMS);
  const faqSchema = getFAQSchema(TALLERES_FAQS);
  const eventSchemas = WORKSHOPS
    .map((w) => getEventSchema({ name: w.name, description: w.description, date: w.date, price: w.price }))
    .filter((schema): schema is NonNullable<typeof schema> => schema !== null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {eventSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main id="main-content" className="pt-[88px]">
        <section className="section-padding pb-0">
          <div className="max-w-section mx-auto">
            <Breadcrumbs items={BREADCRUMB_ITEMS} />
            <AnimateOnScroll>
              <p className="text-[13px] uppercase tracking-[0.18em] text-brand-lavender-dark font-body mb-3">
                Talleres
              </p>
              <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-[2.75rem] text-text-main leading-tight mb-4">
                Próximos talleres de acuarela en Santiago
              </h1>
              <p className="text-text-muted font-body text-lg max-w-reading leading-relaxed">
                Grupos reducidos, acompañamiento personalizado y un espacio cálido para crear sin experiencia previa.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <WorkshopGrid />

        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="font-display font-semibold text-2xl text-text-main mb-4">
                ¿Tienes preguntas?
              </h2>
              <p className="text-text-muted font-body mb-6">
                Escríbenos para reservar tu lugar o resolver cualquier duda sobre los talleres.
              </p>
              <Link
                href="/contacto"
                className="inline-flex bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Contactar
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
