import type { Metadata } from 'next';
import Image from 'next/image';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBreadcrumbSchema } from '@/lib/schema';
import { WORKSHOPS, SITE_URL, WHATSAPP_LINK } from '@/lib/constants';

const workshop = WORKSHOPS.find((w) => w.slug === 'gift-card')!;

export const metadata: Metadata = {
  title: 'Gift Card Workshop de Acuarela | Josefina Fainé',
  description:
    'Regala una experiencia creativa: una Gift Card canjeable por cualquier workshop de acuarela en Santiago con Josefina Fainé. Válida por 3 meses desde la compra.',
  alternates: { canonical: '/talleres/gift-card' },
  openGraph: {
    siteName: 'Josefina Fainé',
    title: 'Gift Card Workshop de Acuarela | Josefina Fainé',
    description:
      'Un regalo diferente, lleno de color, calma e inspiración. Canjeable por cualquier workshop de acuarela con cupos disponibles.',
    url: 'https://www.josefinafainearte.cl/talleres/gift-card',
    type: 'website',
    images: ['/fotos/gift-card.jpg'],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Inicio', url: SITE_URL },
  { name: 'Talleres', url: `${SITE_URL}/talleres` },
  { name: 'Gift Card', url: `${SITE_URL}/talleres/gift-card` },
];

const CONDICIONES = [
  'Válida por 3 meses desde la fecha de compra.',
  'Canjeable por cualquier workshop de acuarela con cupos disponibles.',
  'Consulta los valores vigentes al momento de la compra.',
];

export default function GiftCardPage() {
  const breadcrumb = getBreadcrumbSchema(BREADCRUMB_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content" className="pt-[88px]">
        {/* Hero de la gift card */}
        <section className="section-padding bg-gradient-to-b from-bg-cream to-white">
          <div className="max-w-section mx-auto">
            <Breadcrumbs items={BREADCRUMB_ITEMS} />
            <AnimateOnScroll>
              <p className="text-[13px] uppercase tracking-[0.18em] text-brand-lavender-dark font-body mb-3">
                Gift Card · Workshop de Acuarela
              </p>
              <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-[2.75rem] text-text-main leading-tight mb-4">
                Regala una experiencia creativa
              </h1>
              <p className="text-text-muted font-body text-lg max-w-reading leading-relaxed">
                Sorprende a alguien especial con un momento para desconectarse de la rutina,
                explorar su creatividad y descubrir la magia de la acuarela.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="mt-8 relative rounded-2xl overflow-hidden aspect-[1484/1060] max-w-[820px] mx-auto bg-brand-lavender/15 shadow-card">
                <Image
                  src={workshop.image}
                  alt="Gift Card válida por un workshop de acuarela con Josefina Fainé en Santiago"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 820px"
                  priority
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 1 — El regalo */}
        <section className="section-padding">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="El regalo" title="Un regalo diferente, lleno de color" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  No importa si nunca ha pintado antes: este workshop está diseñado para disfrutar,
                  aprender y llevarse una obra creada con sus propias manos.
                </p>
                <p>
                  Un regalo diferente, lleno de color, calma e inspiración — una pausa creativa
                  guiada por Josefina Fainé, artista visual con magíster en Arteterapia, en un
                  grupo reducido y con todos los materiales incluidos.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 2 — Condiciones */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Condiciones" title="Condiciones de la Gift Card" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <ul className="flex flex-col gap-3 font-body text-base text-text-main">
                {CONDICIONES.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA final */}
        <section className="section-padding bg-gradient-to-b from-bg-warm to-bg-cream">
          <div className="max-w-reading mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-text-main mb-4">
                ¿Quieres sorprender a alguien especial?
              </h2>
              <p className="text-text-muted font-body text-base leading-relaxed mb-8">
                Escríbenos por WhatsApp para coordinar tu Gift Card: te contamos los valores
                vigentes y la dejamos lista para regalar.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={workshop.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  {workshop.ctaText ?? 'Regalar una Gift Card'}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#25D366] text-[#25D366] rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:bg-[#25D366]/5 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escríbenos por WhatsApp
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
