import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Galería — Acuarelas y Momentos del Taller | josefinafainearte.cl',
  description:
    'Explora las acuarelas y momentos de los talleres de Josefina Faine. Arte terapéutico, expresión emocional y creatividad en Santiago.',
  alternates: { canonical: '/galeria' },
  openGraph: {
    title: 'Galería — Acuarelas y Momentos del Taller',
    description: 'Explora las acuarelas y momentos de los talleres de Josefina Faine en Santiago.',
    url: 'https://www.josefinafainearte.cl/galeria',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Inicio', url: SITE_URL },
  { name: 'Galería', url: `${SITE_URL}/galeria` },
];

export default function GaleriaPage() {
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
                Galería
              </p>
              <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-[2.75rem] text-text-main leading-tight mb-4">
                Acuarelas y momentos del taller
              </h1>
              <p className="text-text-muted font-body text-lg max-w-reading leading-relaxed">
                Una mirada al espacio creativo: obras de alumnas, sesiones grupales y los pequeños rituales del taller.
              </p>
            </AnimateOnScroll>
          </div>
        </section>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
