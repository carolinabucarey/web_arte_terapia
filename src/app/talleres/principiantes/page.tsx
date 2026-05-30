import type { Metadata } from 'next';
import Image from 'next/image';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCourseSchema, getBreadcrumbSchema } from '@/lib/schema';
import { WORKSHOPS, SITE_URL, WHATSAPP_LINK } from '@/lib/constants';
import { formatCLP } from '@/lib/utils';

const workshop = WORKSHOPS.find((w) => w.slug === 'principiantes')!;

export const metadata: Metadata = {
  title: 'Workshop de Acuarela para Principiantes | josefinafainearte.cl',
  description:
    'Inicia en la acuarela desde cero. Crearemos una obra en acuarela y un marcapáginas plastificado. Sábado 6 de junio, 16:00 a 19:15 hrs en Providencia (metro Los Leones). Materiales y coffee break incluidos. Sin experiencia previa.',
  alternates: { canonical: '/talleres/principiantes' },
  openGraph: {
    title: 'Workshop de Acuarela para Principiantes | Josefina Faine',
    description:
      'Una obra en acuarela + un marcapáginas plastificado. Sábado 6 de junio en Providencia. Materiales y coffee break incluidos. Sin experiencia previa.',
    url: 'https://www.josefinafainearte.cl/talleres/principiantes',
    type: 'website',
    images: ['/fotos/principiantes-junio.jpg'],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Inicio', url: SITE_URL },
  { name: 'Talleres', url: `${SITE_URL}/talleres` },
  { name: 'Workshop para Principiantes', url: `${SITE_URL}/talleres/principiantes` },
];

const CREACIONES = [
  {
    title: 'Una obra en acuarela',
    description:
      'Tu primera pieza en acuarela, guiada paso a paso — desde mojar el papel hasta dar las últimas pinceladas.',
  },
  {
    title: 'Un marcapáginas plastificado',
    description:
      'Un marcapáginas pintado a mano y plastificado para que lo conserves y lo uses cada día.',
  },
];

const INCLUYE = [
  'Todos los materiales — acuarelas, pinceles y papel',
  'Coffee break para acompañar la tarde',
  'Guía paso a paso, sin necesidad de experiencia previa',
  'Un espacio relajado para soltar el estrés y crear',
];

export default function TallerPrincipiantesPage() {
  const courseSchema = getCourseSchema({
    name: workshop.name,
    description: workshop.description,
    url: `${SITE_URL}/talleres/principiantes`,
    image: workshop.image,
    price: workshop.price,
  });
  const breadcrumb = getBreadcrumbSchema(BREADCRUMB_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content" className="pt-[88px]">
        {/* Hero del taller */}
        <section className="section-padding bg-gradient-to-b from-bg-cream to-white">
          <div className="max-w-section mx-auto">
            <Breadcrumbs items={BREADCRUMB_ITEMS} />
            <AnimateOnScroll>
              <p className="text-[13px] uppercase tracking-[0.18em] text-brand-lavender-dark font-body mb-3">
                Workshop para principiantes
              </p>
              <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-[2.75rem] text-text-main leading-tight mb-4">
                Da tus primeras pinceladas en acuarela
              </h1>
              <p className="text-text-muted font-body text-lg max-w-reading leading-relaxed">
                Un taller para iniciarte desde cero — crearemos una obra en acuarela y un marcapáginas
                plastificado para llevar. No necesitas experiencia, solo ganas de crear.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="mt-8 relative rounded-2xl overflow-hidden aspect-[1080/713] bg-brand-lavender/15">
                <Image
                  src={workshop.image}
                  alt="Workshop de Acuarela para Principiantes — sábado 6 de junio, 16:00 a 19:15 hrs en Providencia"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 1120px"
                  priority
                />
                {workshop.badge && (
                  <span className="absolute top-4 left-4 bg-brand-lavender/90 text-brand-deep text-sm font-body font-semibold px-4 py-1.5 rounded-pill backdrop-blur-sm">
                    {workshop.badge}
                  </span>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 1 — La experiencia */}
        <section className="section-padding">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="La experiencia" title="Tu primer encuentro con la acuarela" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  Este workshop está pensado para quienes nunca han pintado en acuarela y quieren
                  iniciarse en la técnica desde cero, sin presiones ni resultados esperados.
                </p>
                <p>
                  Aprenderás los materiales esenciales, el control del agua y las pinceladas básicas
                  mientras creas, guiada paso a paso. Es un espacio relajado para soltar el estrés,
                  desconectar de la rutina y descubrir un nuevo lenguaje creativo.
                </p>
                <p>
                  Nos juntamos en Providencia, a pasos del metro Los Leones, en un grupo reducido para
                  que el acompañamiento sea cercano y todas avancen a su ritmo.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 2 — Qué crearás */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-section mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Qué crearás" title="Dos piezas para llevar a casa" centered />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[760px] mx-auto">
                {CREACIONES.map((c) => (
                  <div
                    key={c.title}
                    className="bg-white rounded-2xl border border-border p-6 md:p-7 flex flex-col gap-3"
                  >
                    <h3 className="font-display font-semibold text-xl text-text-main">{c.title}</h3>
                    <p className="text-text-muted font-body text-sm leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 3 — Qué incluye */}
        <section className="section-padding">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Qué incluye" title="Todo listo para que solo crees" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p className="text-text-muted font-body text-base leading-relaxed mb-6">
                No tienes que traer nada. La sesión incluye:
              </p>
              <ul className="flex flex-col gap-3 font-body text-base text-text-main">
                {INCLUYE.map((t) => (
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

        {/* Sección 4 — Detalles prácticos */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-section mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Detalles prácticos" title="Todo lo que necesitas saber" centered />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="max-w-[640px] mx-auto mt-2">
                <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
                  <table className="w-full text-left font-body">
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main w-[140px]">Fecha</td>
                        <td className="py-3 text-sm text-text-muted">{workshop.date}</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Horario</td>
                        <td className="py-3 text-sm text-text-muted">{workshop.time} hrs</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Duración</td>
                        <td className="py-3 text-sm text-text-muted">{workshop.duration}</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Lugar</td>
                        <td className="py-3 text-sm text-text-muted">Providencia · metro Los Leones</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Grupo</td>
                        <td className="py-3 text-sm text-text-muted">Máximo {workshop.groupSize} personas</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Nivel</td>
                        <td className="py-3 text-sm text-text-muted">{workshop.level}</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Incluye</td>
                        <td className="py-3 text-sm text-text-muted">Materiales y coffee break</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Valor</td>
                        <td className="py-3 text-sm text-text-main font-semibold">{typeof workshop.price === 'number' ? formatCLP(workshop.price) : 'Consultar'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-center text-xs text-text-muted font-body mt-4">
                  Cupos limitados — reserva con anticipación para asegurar tu lugar
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA final */}
        <section className="section-padding bg-gradient-to-b from-bg-warm to-bg-cream">
          <div className="max-w-reading mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-text-main mb-4">
                ¿Te animas a pintar tu primera acuarela?
              </h2>
              <p className="text-text-muted font-body text-base leading-relaxed mb-8">
                Los cupos son limitados para mantener la experiencia cercana y personalizada.
                Escríbenos para reservar tu lugar del sábado 6 de junio.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={workshop.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  {workshop.ctaText ?? 'Reservar mi lugar'}
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
