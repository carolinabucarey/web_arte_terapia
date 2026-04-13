import type { Metadata } from 'next';
import WorkshopGrid from '@/components/WorkshopGrid';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Próximos Talleres de Acuarela | artejosefaine.cl',
  description:
    'Descubre los próximos talleres de acuarela y arteterapia en Santiago. Grupos pequeños, experiencia boutique. Sin experiencia previa necesaria.',
};

export default function TalleresPage() {
  return (
    <>
      <main className="pt-[88px]">
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
