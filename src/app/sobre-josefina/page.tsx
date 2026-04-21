import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Josefina Faine — Artista Visual y Arteterapeuta | Santiago',
  description:
    'Conoce a Josefina Fainé, licenciada en Artes Visuales (U. Mayor) y magíster en Arteterapia (U. Finis Terrae). 15 años de experiencia. Guía creativa de talleres de acuarela en Santiago.',
  openGraph: {
    title: 'Josefina Faine — Artista Visual y Arteterapeuta',
    description: 'Conoce a Josefina Faine, guía creativa de talleres de acuarela en Santiago.',
    url: 'https://www.josefinafainearte.com/sobre-josefina',
    type: 'profile',
  },
};

export default function SobreJosefinaPage() {
  const personSchema = getPersonSchema();
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Sobre Josefina', url: `${SITE_URL}/sobre-josefina` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content" className="pt-[88px]">
        {/* Header + foto */}
        <section className="section-padding">
          <div className="max-w-section mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Sobre mí" title="Josefina Fainé" />
              <p className="text-brand-water font-body text-sm font-medium -mt-2 mb-6">
                Artista visual · Arteterapeuta · Guía creativa
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="flex flex-wrap gap-10 items-start">
                <Image
                  src="/fotos/jose.png"
                  alt="Josefina Fainé — Artista visual y arteterapeuta"
                  width={320}
                  height={320}
                  className="rounded-2xl object-cover w-[clamp(220px,35vw,320px)] flex-shrink-0"
                />

                <div className="flex-1 min-w-[300px]">
                  <h3 className="font-display font-semibold text-xl text-text-main mb-4">Mi camino</h3>
                  <div className="flex flex-col gap-4 font-body text-text-muted text-base leading-relaxed">
                    <p>Creo en el arte como un espacio de pausa, conexión y sanación.</p>
                    <p>
                      Soy Josefina, artista visual y arteterapeuta. Desde una mirada cercana al arteterapia,
                      acompaño procesos creativos donde el acto de pintar se convierte en una herramienta
                      para expresar lo que a veces no se puede poner en palabras.
                    </p>
                    <p>
                      La acuarela me eligió a mí tanto como yo la elegí a ella. Tiene un carácter sensible
                      y fluido que invita a soltar el control, a confiar en el proceso, a bajar el ritmo.
                      Y eso es exactamente lo que busco transmitir en cada taller: un espacio donde crear
                      sea también una forma de reconectar contigo.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Lo que me mueve */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <h3 className="font-display font-semibold text-xl text-text-main mb-4">Lo que me mueve</h3>
              <div className="flex flex-col gap-4 font-body text-text-muted text-base leading-relaxed">
                <p>
                  Me motiva acompañar los procesos de cada persona. Ver cómo alguien llega con miedo a
                  &ldquo;no saber dibujar&rdquo; y poco a poco se suelta, explora y descubre nuevas formas de expresarse.
                </p>
                <p>
                  En mis talleres no busco un resultado técnico perfecto. Busco que el proceso creativo
                  favorezca el bienestar emocional y la reconexión con uno mismo. Que cada pincelada sea
                  un momento de presencia, no de exigencia.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Mi enfoque */}
        <section className="section-padding">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <h3 className="font-display font-semibold text-xl text-text-main mb-4">Mi enfoque</h3>
              <div className="flex flex-col gap-4 font-body text-text-muted text-base leading-relaxed">
                <p>
                  Trabajo desde la acuarela como lenguaje expresivo, integrando herramientas del arteterapia
                  en un formato de taller grupal e íntimo. Cada persona elige su propio camino dentro del
                  taller, y mi rol es guiar ese proceso con cercanía, respeto y sensibilidad.
                </p>
                <p>
                  No es terapia clínica. No es una clase tradicional de técnica. Es un espacio donde el
                  arte y el bienestar se encuentran de forma natural.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Quote destacada */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto text-center">
            <AnimateOnScroll>
              <blockquote className="font-display italic text-xl md:text-2xl text-text-main leading-relaxed">
                &ldquo;La acuarela invita a soltar el control y confiar en el proceso
                — y ahí es donde empieza la magia.&rdquo;
              </blockquote>
              <p className="text-text-muted font-body text-sm mt-4">— Josefina Fainé</p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Mi obra */}
        <section className="section-padding">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <h3 className="font-display font-semibold text-xl text-text-main mb-4">Mi obra</h3>
              <div className="flex flex-col gap-4 font-body text-text-muted text-base leading-relaxed">
                <p>
                  Mi trabajo nace de una curiosidad profunda por el mundo interno y la mente humana.
                  A través de rostros y formas orgánicas, exploro lo que no vemos: pensamientos,
                  emociones y memorias que habitan bajo la superficie.
                </p>
                <p>
                  Me interesa el rostro como máscara, una envoltura que contiene un universo interno
                  invisible. Trabajo con acuarela y escultura en técnica mixta: lo tridimensional
                  contiene y da forma; la acuarela abre un espacio libre, donde la imagen se vuelve
                  etérea, emocional y en constante transformación.
                </p>
              </div>
              <a
                href="https://www.instagram.com/arte.jose.fa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-water font-body font-medium text-sm mt-5 hover:text-brand-deep transition-colors"
              >
                Ver más en @arte.jose.fa
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
              </a>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Formación */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <h3 className="font-display font-semibold text-xl text-text-main mb-4">Formación</h3>
              <ul className="flex flex-col gap-2 font-body text-text-muted text-base">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  Licenciada en Artes Visuales — Universidad Mayor
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  Magíster en Artes en la Salud y Arteterapia — Universidad Finis Terrae
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  15 años de experiencia
                </li>
              </ul>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-bg-cream to-bg-warm">
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
