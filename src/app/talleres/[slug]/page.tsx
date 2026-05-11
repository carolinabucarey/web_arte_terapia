import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCourseSchema, getBreadcrumbSchema } from '@/lib/schema';
import { SITE_URL, WHATSAPP_LINK } from '@/lib/constants';
import { getTallerBySlug } from '@/lib/cms';
import { formatCLP } from '@/lib/utils';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const workshop = await getTallerBySlug(params.slug);
  if (!workshop) {
    return { title: 'Taller no encontrado | josefinafainearte.cl' };
  }
  const url = `${SITE_URL}/talleres/${workshop.slug}`;
  const description =
    workshop.description.length > 160
      ? workshop.description.slice(0, 157) + '…'
      : workshop.description;

  return {
    title: `${workshop.name} | josefinafainearte.cl`,
    description,
    alternates: { canonical: `/talleres/${workshop.slug}` },
    openGraph: {
      title: `${workshop.name} | Josefina Faine`,
      description,
      url,
      type: 'website',
      images: [workshop.image],
    },
  };
}

function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export default async function TallerDetailPage({ params }: Props) {
  const workshop = await getTallerBySlug(params.slug);
  if (!workshop) notFound();

  const breadcrumbItems = [
    { name: 'Inicio', url: SITE_URL },
    { name: 'Talleres', url: `${SITE_URL}/talleres` },
    { name: workshop.name, url: `${SITE_URL}/talleres/${workshop.slug}` },
  ];

  const courseSchema = getCourseSchema({
    name: workshop.name,
    description: workshop.description,
    url: `${SITE_URL}/talleres/${workshop.slug}`,
    image: workshop.image,
    price: workshop.price,
  });
  const breadcrumb = getBreadcrumbSchema(breadcrumbItems);

  const dateTime = [workshop.date, workshop.time].filter(Boolean).join(' · ');
  const priceLabel =
    typeof workshop.price === 'number' ? formatCLP(workshop.price) : 'Consultar';
  const longParagraphs = workshop.longDescription
    ? splitParagraphs(workshop.longDescription)
    : [];

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
            <Breadcrumbs items={breadcrumbItems} />
            <AnimateOnScroll>
              {workshop.tagline && (
                <p className="text-[13px] uppercase tracking-[0.18em] text-brand-lavender-dark font-body mb-3">
                  {workshop.tagline}
                </p>
              )}
              <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-[2.75rem] text-text-main leading-tight mb-4">
                {workshop.name}
              </h1>
              <p className="text-text-muted font-body text-lg max-w-reading leading-relaxed">
                {workshop.description}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="mt-8 relative rounded-2xl overflow-hidden aspect-[16/7]">
                <Image
                  src={workshop.image}
                  alt={workshop.name}
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

        {/* Descripción larga */}
        {longParagraphs.length > 0 && (
          <section className="section-padding">
            <div className="max-w-reading mx-auto">
              <AnimateOnScroll>
                <SectionHeader label="Sobre el taller" title="Lo que vas a vivir" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <div className="flex flex-col gap-5 text-text-muted font-body text-base leading-relaxed">
                  {longParagraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </section>
        )}

        {/* Detalles prácticos */}
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
                      {dateTime && (
                        <tr>
                          <td className="py-3 pr-4 text-sm font-semibold text-text-main w-[140px]">Fecha</td>
                          <td className="py-3 text-sm text-text-muted">{dateTime}</td>
                        </tr>
                      )}
                      {workshop.duration && (
                        <tr>
                          <td className="py-3 pr-4 text-sm font-semibold text-text-main">Duración</td>
                          <td className="py-3 text-sm text-text-muted">{workshop.duration}</td>
                        </tr>
                      )}
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
                        <td className="py-3 pr-4 text-sm font-semibold text-text-main">Precio</td>
                        <td className="py-3 text-sm text-text-main font-semibold">{priceLabel}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                <a
                  href={workshop.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  {workshop.ctaText || 'Reservar mi lugar'}
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
                <Link
                  href="/talleres"
                  className="inline-flex items-center gap-2 border border-brand-deep/30 text-brand-deep rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:bg-brand-deep/5 transition-colors"
                >
                  Ver todos los talleres
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
