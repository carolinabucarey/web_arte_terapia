import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Galería — Acuarelas y Momentos del Taller | artejosefaine.cl',
  description:
    'Explora las acuarelas y momentos de los talleres de Josefina Faine. Arte terapéutico, expresión emocional y creatividad en Santiago.',
};

export default function GaleriaPage() {
  return (
    <>
      <main className="pt-[88px]">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
