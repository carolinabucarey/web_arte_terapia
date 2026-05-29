import Image from 'next/image';
import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';

const STUDENT_WORKS = Array.from({ length: 11 }, (_, i) => ({
  src: `/fotos/alumnas/obra-${i + 1}.jpg`,
  alt: `Acuarela creada por una alumna del taller de Josefina Faine — obra ${i + 1}`,
}));

export default function StudentWorks() {
  return (
    <section id="obras-alumnos" className="section-padding bg-white">
      <div className="max-w-container mx-auto">
        <AnimateOnScroll>
          <SectionHeader
            label="Obras de alumnos"
            title="Lo que florece en cada taller"
            centered
          />
        </AnimateOnScroll>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {STUDENT_WORKS.map((work, index) => (
            <AnimateOnScroll key={work.src} delay={(index % 3) * 0.1}>
              <div className="break-inside-avoid mb-4 group overflow-hidden rounded-image">
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={600}
                  height={index % 2 === 0 ? 500 : 400}
                  className="w-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
