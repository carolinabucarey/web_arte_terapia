import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SITE_URL, WHATSAPP_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Arte terapia con Josefina Fainé | Santiago',
  description:
    'Sesiones de arteterapia con Josefina Fainé, magíster en Artes en la Salud y Arteterapia (U. Finis Terrae). Un espacio para acompañar tu proceso a través del arte en Santiago.',
  alternates: { canonical: '/arte-terapia' },
  openGraph: {
    title: 'Arte terapia con Josefina Fainé',
    description:
      'Acompañamiento terapéutico a través del arte. Sesiones con Josefina Fainé, arteterapeuta titulada en Santiago.',
    url: 'https://www.josefinafainearte.cl/arte-terapia',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Inicio', url: SITE_URL },
  { name: 'Arte terapia', url: `${SITE_URL}/arte-terapia` },
];

export default function ArteTerapiaPage() {
  const breadcrumb = getBreadcrumbSchema(BREADCRUMB_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content" className="pt-[88px]">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-bg-cream to-white">
          <div className="max-w-section mx-auto">
            <Breadcrumbs items={BREADCRUMB_ITEMS} />
            <AnimateOnScroll>
              <p className="text-[13px] uppercase tracking-[0.18em] text-brand-lavender-dark font-body mb-3">
                Arte terapia
              </p>
              <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-[2.75rem] text-text-main leading-tight mb-4">
                Acompañamiento terapéutico a través del arte
              </h1>
              <p className="text-text-muted font-body text-lg max-w-reading leading-relaxed">
                Un espacio para mirar hacia adentro y dejar que el proceso creativo se transforme en
                una herramienta de autoconocimiento, expresión y bienestar emocional.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="mt-8 relative rounded-2xl overflow-hidden aspect-[16/7]">
                <Image
                  src="/fotos/mano-paisaje.jpeg"
                  alt="Sesión de arte terapia con acuarela"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1120px"
                  priority
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ¿Qué es el arteterapia? */}
        <section className="section-padding">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="¿Qué es?" title="Arte como camino terapéutico" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  El arteterapia es una práctica que utiliza el proceso creativo como vía para
                  expresar, explorar y elaborar lo que muchas veces no encuentra palabras.
                </p>
                <p>
                  No se necesita experiencia ni habilidad artística previa. Lo importante no es el
                  resultado: es el camino que se abre cuando una imagen, un color o un trazo se
                  convierten en lenguaje.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Mi enfoque */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Mi enfoque" title="Una mirada cercana y respetuosa" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  Trabajo desde la acuarela y el dibujo como lenguajes expresivos, integrando
                  herramientas del arteterapia para acompañar procesos personales de forma íntima y
                  cuidada.
                </p>
                <p>
                  Cada encuentro respeta el ritmo de cada persona. No hay un programa rígido ni un
                  resultado esperado: hay un espacio sostenido en el que crear se vuelve un acto
                  de presencia y de escucha hacia uno mismo.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Para quién es */}
        <section className="section-padding">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Para quién es" title="Un espacio para ti" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <ul className="flex flex-col gap-3 text-text-muted font-body text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-brand-green mt-1.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  Para quienes buscan un espacio de pausa, autoconocimiento y bienestar emocional.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-green mt-1.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  Para personas que están atravesando un proceso de cambio o transición.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-green mt-1.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  Para quienes quieren explorar su mundo interno desde una vía no verbal.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-green mt-1.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  No necesitas experiencia previa en arte ni en técnicas creativas.
                </li>
              </ul>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Cómo trabajamos" title="Sesiones a tu medida" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  Las sesiones son individuales o en grupos pequeños, en un espacio cuidado en
                  Santiago. Cada proceso comienza con una conversación inicial para conocer qué te
                  trae y definir juntas el camino más adecuado.
                </p>
                <p>
                  Si quieres saber más sobre modalidades, frecuencia y valores, escríbeme y
                  conversamos.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Formación */}
        <section className="section-padding">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Formación" title="Una práctica con respaldo" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <ul className="flex flex-col gap-2 font-body text-text-muted text-base">
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
                  Licenciada en Artes Visuales — Universidad Mayor
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  15 años de experiencia acompañando procesos creativos
                </li>
              </ul>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA final */}
        <section className="section-padding bg-gradient-to-b from-bg-warm to-bg-cream">
          <div className="max-w-reading mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-text-main mb-4">
                ¿Te gustaría conversar?
              </h2>
              <p className="text-text-muted font-body text-base leading-relaxed mb-8">
                Si sientes que un proceso de arteterapia puede acompañarte, escríbeme y conversamos
                sin compromiso.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Conversar por WhatsApp
                </a>
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
