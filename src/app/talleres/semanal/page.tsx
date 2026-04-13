import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { getEventSchema, getBreadcrumbSchema } from '@/lib/schema';
import { WORKSHOPS, SITE_URL, WHATSAPP_LINK } from '@/lib/constants';
import { formatCLP } from '@/lib/utils';

const workshop = WORKSHOPS.find((w) => w.slug === 'semanal')!;

export const metadata: Metadata = {
  title: 'Talleres Semanales de Acuarela | artejosefaine.cl',
  description:
    'Un encuentro semanal para explorar la acuarela a tu ritmo, en grupos de máximo 6 personas. Acompañamiento cercano y personalizado. Sin experiencia previa necesaria.',
  openGraph: {
    title: 'Talleres Semanales de Acuarela | Josefina Faine',
    description:
      'Grupos de máximo 6 personas. Acompañamiento personalizado. Sin experiencia previa necesaria.',
    url: 'https://artejosefaine.cl/talleres/semanal',
    type: 'website',
  },
};

export default function TallerSemanalPage() {
  const eventSchema = getEventSchema({
    name: workshop.name,
    description: workshop.description,
    date: workshop.date,
    price: workshop.price,
  });
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Talleres', url: `${SITE_URL}/talleres` },
    { name: 'Taller Semanal', url: `${SITE_URL}/talleres/semanal` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content" className="pt-[88px]">
        {/* Hero del taller */}
        <section className="section-padding bg-gradient-to-b from-bg-cream to-white">
          <div className="max-w-section mx-auto">
            <AnimateOnScroll>
              <p className="text-[13px] uppercase tracking-[0.18em] text-brand-lavender-dark font-body mb-3">
                Talleres semanales
              </p>
              <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-[2.75rem] text-text-main leading-tight mb-4">
                Un espacio para aprender acuarela desde un lugar libre
              </h1>
              <p className="text-text-muted font-body text-lg max-w-reading leading-relaxed">
                Cada semana, un encuentro íntimo para explorar, crear y reconectar contigo a través del color.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="mt-8 relative rounded-2xl overflow-hidden aspect-[16/7]">
                <Image
                  src="/fotos/foto1.jpeg"
                  alt="Taller semanal de acuarela — grupo pequeño trabajando"
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
              <SectionHeader label="La experiencia" title="Más que una clase de acuarela" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  Más que una clase tradicional de acuarela, esto es una invitación a aprender desde un lugar libre
                  — respetando tus tiempos, tu sensibilidad y tu propia búsqueda.
                </p>
                <p>
                  Cada encuentro dura dos horas y se realiza en grupos reducidos de máximo seis personas.
                  Ese formato íntimo permite algo que en otros talleres no existe: un acompañamiento real,
                  cercano y personalizado.
                </p>
                <p>
                  Aquí no hay un programa rígido ni un resultado esperado. Tú eliges qué quieres trabajar,
                  y yo te guío en ese proceso de manera individual — entregándote herramientas técnicas y
                  creativas que se adaptan a tu nivel y evolución.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 2 — Para quién es */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Para quién es" title="No necesitas experiencia previa" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  Participan tanto personas que recién comienzan como quienes ya tienen conocimientos
                  y quieren profundizar en la técnica.
                </p>
                <p>
                  Lo que todas comparten es la búsqueda de un espacio propio: un momento para pausar,
                  explorar y crear sin juicio.
                </p>
                <p>
                  Aprenderás desde las bases hasta técnicas más avanzadas de la acuarela, siempre a tu
                  ritmo y según tus intereses.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 3 — Sin tiempo límite */}
        <section className="section-padding">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Tu ritmo" title="Sin tiempo límite para tu proceso" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  No hay un tiempo límite para tu proceso. Puedes permanecer en el taller todo el tiempo
                  que quieras, profundizando y desarrollando tu camino en la acuarela de forma continua.
                </p>
                <p>
                  Algunas alumnas llevan meses. Otras, años. Cada una avanza a su manera, y eso es parte
                  de lo que hace especial este espacio.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sección 4 — Lo que se genera */}
        <section className="section-padding bg-bg-warm">
          <div className="max-w-reading mx-auto">
            <AnimateOnScroll>
              <SectionHeader label="Conexión humana" title="Más que un taller, un lugar de encuentro" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                <p>
                  Con el tiempo, estos talleres se han transformado en algo más que un lugar para aprender.
                  Los grupos que se forman generan vínculos cercanos y genuinos — se comparte no solo el
                  proceso creativo, sino también un espacio de confianza, apoyo y conexión con otras.
                </p>
                <p>
                  Es un lugar de encuentro donde lo humano y lo artístico se cruzan de forma natural.
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
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main w-[140px]">Frecuencia</td>
                        <td className="py-3 text-sm text-text-muted">Semanal</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Día</td>
                        <td className="py-3 text-sm text-text-muted">{workshop.date} · {workshop.time}</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Duración</td>
                        <td className="py-3 text-sm text-text-muted">{workshop.duration}</td>
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
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Modalidad</td>
                        <td className="py-3 text-sm text-text-muted">Presencial en Santiago</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Permanencia</td>
                        <td className="py-3 text-sm text-text-muted">Libre — sin compromiso de tiempo mínimo</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Precio</td>
                        <td className="py-3 text-sm text-text-main font-semibold">{formatCLP(workshop.price)} por sesión</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-center text-xs text-text-muted font-body mt-4">
                  Grupos de máximo {workshop.groupSize} personas para un acompañamiento real
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
                ¿Quieres ser parte?
              </h2>
              <p className="text-text-muted font-body text-base leading-relaxed mb-8">
                Los cupos son limitados para mantener la experiencia personalizada.
                Si quieres reservar tu lugar o tienes preguntas, escríbenos.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contacto"
                  className="bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Reservar mi lugar
                </Link>
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
