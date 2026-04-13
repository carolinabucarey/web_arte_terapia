import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';

export default function About() {
  return (
    <section className="section-padding bg-bg-cream">
      <div className="max-w-reading mx-auto">
        <AnimateOnScroll>
          <SectionHeader label="La experiencia" title="Un espacio para pintar, sentir y volver a ti" centered />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <p className="text-text-muted font-body text-base leading-relaxed text-center">
            Describir la experiencia del taller es describir lo que se siente al llegar, el ambiente,
            el proceso. No es una clase, es un encuentro contigo. Un espacio donde el color se convierte
            en lenguaje y la acuarela en una herramienta de autoconocimiento y expresión emocional.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <p className="text-text-muted font-body text-base leading-relaxed text-center mt-6">
            Cada sesión es una invitación a soltar la exigencia, conectar con el presente y permitirte
            explorar sin juicio. Una experiencia boutique de bienestar creativo donde el arte se
            transforma en camino de vuelta a ti.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
