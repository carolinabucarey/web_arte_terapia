import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contacto — Reserva tu Taller de Acuarela | josefinafainearte.cl',
  description:
    'Contacta a Josefina Faine para reservar tu lugar en los talleres de acuarela y arteterapia en Santiago. WhatsApp y formulario de contacto.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: 'Contacto — Reserva tu Taller de Acuarela',
    description: 'Contacta a Josefina Faine para reservar tu lugar en los talleres de acuarela.',
    url: 'https://www.josefinafainearte.cl/contacto',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Inicio', url: SITE_URL },
  { name: 'Contacto', url: `${SITE_URL}/contacto` },
];

export default function ContactoPage() {
  const breadcrumb = getBreadcrumbSchema(BREADCRUMB_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content" className="pt-[88px]">
        <section className="section-padding pb-0">
          <div className="max-w-section mx-auto">
            <Breadcrumbs items={BREADCRUMB_ITEMS} />
            <AnimateOnScroll>
              <p className="text-[13px] uppercase tracking-[0.18em] text-brand-lavender-dark font-body mb-3">
                Contacto
              </p>
              <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-[2.75rem] text-text-main leading-tight mb-4">
                Reserva tu taller de acuarela
              </h1>
              <p className="text-text-muted font-body text-lg max-w-reading leading-relaxed">
                Escríbenos por WhatsApp o desde el formulario para reservar tu lugar o conversar sobre los talleres en Santiago.
              </p>
            </AnimateOnScroll>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
