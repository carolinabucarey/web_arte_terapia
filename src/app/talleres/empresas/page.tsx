import type { Metadata } from 'next';
import Image from 'next/image';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCourseSchema, getBreadcrumbSchema } from '@/lib/schema';
import { WORKSHOPS, SITE_URL, WHATSAPP_LINK } from '@/lib/constants';

const workshop = WORKSHOPS.find((w) => w.slug === 'empresas')!;

export const metadata: Metadata = {
  title: 'Talleres para Empresas | josefinafainearte.cl',
  description:
    'Talleres de arteterapia y experiencias creativas para empresas en Santiago. Fomenta el bienestar, la creatividad y la cohesión de tu equipo. Coordinación previa online para definir objetivos, formato y duración.',
  alternates: { canonical: '/talleres/empresas' },
  openGraph: {
    title: 'Talleres para Empresas | Josefina Faine',
    description:
      'Experiencias de arteterapia para equipos. Bienestar, creatividad y cohesión a través del arte. Adaptado a las necesidades de tu empresa.',
    url: 'https://www.josefinafainearte.cl/talleres/empresas',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Inicio', url: SITE_URL },
  { name: 'Talleres', url: `${SITE_URL}/talleres` },
  { name: 'Talleres para Empresas', url: `${SITE_URL}/talleres/empresas` },
];

const BENEFITS_EMPRESAS = [
  {
    title: 'Bienestar',
    description:
      'Una pausa real en la rutina laboral. El proceso creativo activa la calma, baja el estrés y permite que el equipo respire.',
  },
  {
    title: 'Creatividad',
    description:
      'Reconectar con el lado creativo abre nuevas formas de mirar, pensar y resolver — habilidades que vuelven al trabajo del día a día.',
  },
  {
    title: 'Cohesión',
    description:
      'Crear lado a lado, fuera del rol y del cargo, genera conversaciones distintas y fortalece los vínculos del equipo.',
  },
];

const TECNICAS = [
  'Acuarela guiada paso a paso',
  'Exploración libre del color y el material',
  'Ejercicios de expresión emocional a través del arte',
  'Dinámicas guiadas de relajación y atención plena',
];

export default function TallerEmpresasPage() {
  const courseSchema = getCourseSchema({
    name: workshop.name,
    description: workshop.description,
    url: `${SITE_URL}/talleres/empresas`,
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
                Talleres para empresas
              </p>
              <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-[2.75rem] text-text-main leading-tight mb-4">
                Una pausa creativa para tu equipo
              </h1>
              <p className="text-text-muted font-body text-lg max-w-reading leading-relaxed">
                Talleres de arteterapia y experiencias creativas diseñados a la medida — para fomentar el
                bienestar, la creatividad y la cohesión de tu equipo a través del arte.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="mt-8 relative rounded-2xl overflow-hidden aspect-[16/7]">
                <Image
                  src={workshop.image}
                  alt="Taller de arteterapia para empresas — equipo creando en acuarela"
                  fill
                  className="object-cover"
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
              <SectionHeader label="La experiencia" title="Más que un taller, una experiencia de bienestar" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  Ofrezco talleres de arteterapia y experiencias creativas basadas en distintas técnicas
                  artísticas, diseñados especialmente para empresas que buscan fomentar el bienestar,
                  la creatividad y la cohesión de sus equipos.
                </p>
                <p>
                  Cada taller se adapta a las necesidades del grupo. No es un programa rígido — es un
                  espacio pensado para que tu equipo se desconecte de las pantallas, salga del rol del día
                  a día y se reconecte desde otro lugar: el color, el agua, el proceso.
                </p>
                <p>
                  No se necesita experiencia previa. La invitación es a soltar el resultado y disfrutar
                  el camino.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 2 — Beneficios para tu equipo */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-section mx-auto">
            <AnimateOnScroll>
              <SectionHeader
                label="Beneficios"
                title="Qué se lleva tu equipo"
                centered
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-section mx-auto">
                {BENEFITS_EMPRESAS.map((b) => (
                  <div
                    key={b.title}
                    className="bg-white rounded-2xl border border-border p-6 md:p-7 flex flex-col gap-3"
                  >
                    <h3 className="font-display font-semibold text-xl text-text-main">{b.title}</h3>
                    <p className="text-text-muted font-body text-sm leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 3 — Técnicas y dinámicas */}
        <section className="section-padding">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Técnicas y dinámicas" title="Qué puede incluir el taller" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p className="text-text-muted font-body text-base leading-relaxed mb-6">
                Cada experiencia se arma en conjunto, combinando elementos según los objetivos del equipo.
                Algunos componentes posibles:
              </p>
              <ul className="flex flex-col gap-3 font-body text-base text-text-main">
                {TECNICAS.map((t) => (
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

        {/* Sección 4 — Cómo coordinamos */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Cómo coordinamos" title="Una reunión previa online para diseñar tu taller" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  Antes de cada taller agendamos una reunión online conmigo. Ahí conversamos sobre el
                  equipo, sus objetivos y el contexto — desde un día de pausa creativa hasta una actividad
                  de team building o un cierre de año.
                </p>
                <p>
                  En esa misma conversación definimos lo concreto: <strong>objetivos</strong>, <strong>formato</strong>,
                  {' '}<strong>duración</strong> y <strong>modalidad</strong> del taller, según los requerimientos
                  de la empresa.
                </p>
                <p>
                  El resultado es un taller hecho para tu equipo — no una receta repetida.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 5 — Detalles prácticos */}
        <section className="section-padding">
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
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main w-[160px]">Modalidad</td>
                        <td className="py-3 text-sm text-text-muted">Presencial — en tus oficinas o en taller en Santiago</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Duración</td>
                        <td className="py-3 text-sm text-text-muted">{workshop.duration}</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Grupo</td>
                        <td className="py-3 text-sm text-text-muted">Adaptable al tamaño del equipo</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Nivel</td>
                        <td className="py-3 text-sm text-text-muted">{workshop.level}</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Coordinación</td>
                        <td className="py-3 text-sm text-text-muted">Reunión online previa para definir objetivos y formato</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Materiales</td>
                        <td className="py-3 text-sm text-text-muted">Incluidos — todo lo necesario para crear</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Precio</td>
                        <td className="py-3 text-sm text-text-main font-semibold">Consultar según formato y tamaño del grupo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-center text-xs text-text-muted font-body mt-4">
                  Cada taller se cotiza en función de los objetivos y el grupo
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
                ¿Quieres llevar este taller a tu empresa?
              </h2>
              <p className="text-text-muted font-body text-base leading-relaxed mb-8">
                Cuéntame sobre tu equipo y los objetivos que tienes en mente. Agendamos una reunión online
                y diseñamos juntos la experiencia.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={workshop.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  {workshop.ctaText ?? 'Cotizar para mi empresa'}
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
