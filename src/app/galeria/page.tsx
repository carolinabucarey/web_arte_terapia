import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Galería — Acuarelas y Momentos del Taller | artejosefaine.cl',
  description:
    'Explora las acuarelas y momentos de los talleres de Josefina Faine. Arte terapéutico, expresión emocional y creatividad en Santiago.',
  openGraph: {
    title: 'Galería — Acuarelas y Momentos del Taller',
    description: 'Explora las acuarelas y momentos de los talleres de Josefina Faine en Santiago.',
    url: 'https://artejosefaine.cl/galeria',
    type: 'website',
  },
};

export default function GaleriaPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Galería', url: `${SITE_URL}/galeria` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content" className="pt-[88px]">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
