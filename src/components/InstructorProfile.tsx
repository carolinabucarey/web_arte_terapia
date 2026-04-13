import Image from 'next/image';
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
              alt="Josefina Fainé — Artista visual y arteterapeuta"
              width={180}
              height={180}
              className="rounded-full object-cover w-[clamp(140px,24vw,180px)] h-[clamp(140px,24vw,180px)] flex-shrink-0"
            />

            <div className="flex-1 min-w-[280px] max-w-[520px]">
              <h2 className="font-display font-semibold text-[clamp(1.6rem,3vw,2.2rem)] text-text-main mb-3">
                Josefina Fainé
              </h2>

              <p className="font-body text-[1.05rem] leading-[1.8] text-text-muted">
                Artista visual titulada de la Universidad de Chile, magíster en Artes en la Salud y
                Arteterapia. Integra técnicas tradicionales con exploración emocional. En sus talleres
                invita a soltar la exigencia, conectar con el cuerpo y permitir que el color se convierta
                en lenguaje.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
