import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';

const ALUMNAS_DIR = path.join(process.cwd(), 'public/fotos/alumnas');
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

// Lee la carpeta /public/fotos/alumnas en build time y arma la galería con
// TODAS las imágenes que encuentre. Para agregar obras basta con dejar el
// archivo en esa carpeta (cualquier nombre/formato) — no hay que tocar código.
function getStudentWorks() {
  let files: string[] = [];
  try {
    files = fs.readdirSync(ALUMNAS_DIR).filter((file) => IMAGE_EXT.test(file));
  } catch {
    files = [];
  }
  // Orden natural: obra-2 antes que obra-10.
  files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  return files.map((file, i) => ({
    src: `/fotos/alumnas/${file}`,
    alt: `Acuarela creada por una alumna del taller de Josefina Faine — obra ${i + 1}`,
  }));
}

export default function StudentWorks() {
  const STUDENT_WORKS = getStudentWorks();

  if (STUDENT_WORKS.length === 0) return null;

  return (
    <section id="obras-alumnas" className="section-padding bg-white">
      <div className="max-w-container mx-auto">
        <AnimateOnScroll>
          <SectionHeader
            label="Obras de alumnas"
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
