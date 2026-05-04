import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';

export default function InstructorProfile() {
  return (
    <section id="sobre-mi" className="section-padding">
      <div className="max-w-section mx-auto">
        <AnimateOnScroll>
          <SectionHeader label="Tu guía creativa" title="" />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="flex flex-wrap gap-8 items-center">
            <Image
              src="/fotos/jose.png"
              alt="Josefina Faine, artista visual y arteterapeuta en Santiago"
              width={180}
              height={180}
              className="rounded-full object-cover w-[clamp(140px,24vw,180px)] h-[clamp(140px,24vw,180px)] flex-shrink-0"
            />

            <div className="flex-1 min-w-[280px] max-w-[520px]">
              <h2 className="font-display font-semibold text-[clamp(1.6rem,3vw,2.2rem)] text-text-main mb-3">
                Josefina Fainé
              </h2>

              <div className="flex flex-col gap-3 font-body text-[1.05rem] leading-[1.8] text-text-muted">
                <p>
                  Creo en el arte como un espacio de pausa, conexión y sanación.
                </p>
                <p>
                  Soy artista visual y arteterapeuta, y en mis talleres acompaño procesos creativos
                  desde un lugar cercano y respetuoso.
                </p>
                <p>
                  Lo que busco transmitir en cada taller — un espacio donde el acto de crear
                  también sea una forma de volver a ti.
                </p>
              </div>

              <p className="text-sm text-text-muted font-body mt-4">
                Licenciada en Artes Visuales, Universidad Mayor · Magíster en Artes en la Salud y Arteterapia, Universidad Finis Terrae · 15 años de experiencia
              </p>

              <Link
                href="/sobre-josefina"
                className="inline-flex items-center gap-1 text-brand-water font-body font-medium text-sm mt-4 hover:text-brand-deep transition-colors"
              >
                Conocer más sobre Josefina
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
