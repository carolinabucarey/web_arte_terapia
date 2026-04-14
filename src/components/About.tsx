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
            La acuarela tiene un carácter sensible y fluido que permite soltar el control, liberar
            emociones y bajar el ritmo. Desde una mirada cercana al arteterapia, el proceso creativo
            se vuelve una herramienta para expresar lo que a veces no se puede poner en palabras,
            favoreciendo el bienestar emocional y la reconexión con uno mismo.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <p className="text-text-muted font-body text-base leading-relaxed text-center mt-6">
            Cada sesión es una invitación a aprender desde un lugar libre, respetando tus tiempos,
            tu sensibilidad y tu propia búsqueda. Con el tiempo, estos talleres también se han
            transformado en un lugar de encuentro — donde se comparte no solo el proceso creativo,
            sino también un espacio de confianza y conexión con otras.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
