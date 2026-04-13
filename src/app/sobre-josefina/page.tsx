import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Josefina Faine — Artista Visual y Arteterapeuta | Santiago',
  description:
    'Conoce a Josefina Faine, licenciada en Artes Visuales de la U. de Chile y magíster en Arteterapia. Guía creativa de talleres de acuarela en Santiago.',
};

export default function SobreJosefinaPage() {
  return (
    <>
      <main className="pt-[88px]">
        <section className="section-padding">
          <div className="max-w-section mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Tu guía creativa" title="Josefina Fainé" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="flex flex-wrap gap-10 items-start mt-4">
                <Image
                  src="/fotos/jose.png"
                  alt="Josefina Fainé — Artista visual y arteterapeuta"
                  width={280}
                  height={280}
                  className="rounded-2xl object-cover w-[clamp(200px,30vw,280px)] flex-shrink-0"
                />

                <div className="flex-1 min-w-[300px]">
                  <p className="font-body text-text-muted text-base leading-relaxed mb-4">
                    Artista visual titulada de la Universidad de Chile, magíster en Artes en la Salud y
                    Arteterapia. Integra técnicas tradicionales con exploración emocional, acompañando
                    procesos creativos desde una mirada sensible, intuitiva y profundamente humana.
                  </p>
                  <p className="font-body text-text-muted text-base leading-relaxed mb-4">
                    En sus talleres invita a soltar la exigencia, conectar con el cuerpo y permitir que
                    el color se convierta en lenguaje, creando un espacio seguro donde cada persona puede
                    expresarse libremente y reconectar con su mundo interior.
                  </p>
                  <p className="font-body text-text-muted text-base leading-relaxed mb-8">
                    Su enfoque no es enseñar a pintar, sino acompañar un proceso de autoconocimiento
                    a través de la acuarela. Una experiencia donde el resultado importa menos que el
                    camino — y donde el arte se transforma en herramienta de bienestar.
                  </p>

                  <div className="flex flex-col gap-2 text-sm font-body text-text-muted">
                    <p><strong className="text-text-main">Formación:</strong> Licenciada en Artes Visuales, Universidad de Chile</p>
                    <p><strong className="text-text-main">Posgrado:</strong> Magíster en Artes en la Salud y Arteterapia</p>
                    <p><strong className="text-text-main">Especialización:</strong> Acuarela contemporánea y expresión emocional</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="font-display font-semibold text-2xl text-text-main mb-4">
                ¿Te gustaría participar en un taller?
              </h2>
              <p className="text-text-muted font-body mb-6">
                Conoce los próximos talleres o escríbenos para más información.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/#talleres"
                  className="bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Ver talleres
                </Link>
                <Link
                  href="/contacto"
                  className="border border-border text-text-main rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:bg-bg-warm transition-colors"
                >
                  Contactar
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
