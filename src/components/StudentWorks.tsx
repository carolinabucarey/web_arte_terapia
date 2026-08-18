import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';

const ALUMNAS_DIR = path.join(process.cwd(), 'public/fotos/alumnas');
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

// Orden de la galería: primero las acuarelas más sencillas (aguadas sueltas,
// flores y formas simples) para que quien recién parte se anime, y al final las
// más complejas (pelaje, retratos). Los archivos que no estén en esta lista se
// muestran después, en orden natural.
const ORDEN_POR_DIFICULTAD = [
  'obra-12.jpg', // rama de cerezo en lilas, aguadas sueltas
  'obra-8.jpg', // rama de cerezo en flor
  'obra-18.jpeg', // girasol
  'obra-13.jpg', // peonías con lavanda
  'obra-20.jpg', // rana
  'obra-9.jpg', // botella y limones
  'obra-6.jpg', // globo aerostático
  'obra-21.jpeg', // calas
  'obra-24.jpeg', // tulipán
  'obra-2.jpg', // margarita
  'obra-25.jpeg', // cielo y montaña
  'obra-23.jpeg', // pez
  'obra-16.jpg', // silla con frutas
  'obra-15.jpg', // gato
  'obra-5.jpg', // pájaro azul
  'obra-19.jpg', // koala
  'obra-22.jpeg', // bulldog
  'obra-3.jpg', // cebras
  'obra-10.jpg', // colibrí
  'obra-14.jpg', // panda rojo
  'obra-11.jpeg', // golden retriever
  'obra-7.jpg', // elefantes
  'obra-17.jpeg', // zorro
  'obra-4.jpg', // dragón
  'obra-1.jpg', // retrato
];

// Lee la carpeta /public/fotos/alumnas en build time y arma la galería con
// TODAS las imágenes que encuentre. Para agregar obras basta con dejar el
// archivo en esa carpeta (cualquier nombre/formato) — no hay que tocar código;
// si además quieres fijarle una posición, agrégalo a ORDEN_POR_DIFICULTAD.
function getStudentWorks() {
  let files: string[] = [];
  try {
    files = fs.readdirSync(ALUMNAS_DIR).filter((file) => IMAGE_EXT.test(file));
  } catch {
    files = [];
  }
  // Primero las obras con orden asignado; el resto queda al final en orden
  // natural (obra-2 antes que obra-10).
  const rank = (file: string) => {
    const index = ORDEN_POR_DIFICULTAD.indexOf(file);
    return index === -1 ? ORDEN_POR_DIFICULTAD.length : index;
  };
  files.sort(
    (a, b) => rank(a) - rank(b) || a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
  );

  return files.map((file, i) => ({
    src: `/fotos/alumnas/${file}`,
    alt: `Acuarela creada por una alumna del taller de Josefina Fainé — obra ${i + 1}`,
  }));
}

export default function StudentWorks() {
  const STUDENT_WORKS = getStudentWorks();

  if (STUDENT_WORKS.length === 0) return null;

  return (
    <section id="obras-alumnos" className="section-padding bg-bg-warm">
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
