import Image from 'next/image';
import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';

const GALLERY_IMAGES = [
  { src: '/fotos/taller-grupal.jpeg', alt: 'Grupo del taller riendo mientras pintan acuarela', caption: 'Risas compartidas' },
  { src: '/fotos/foto1.jpeg', alt: 'Acuarelas en proceso durante el taller', caption: 'Proceso creativo' },
  { src: '/fotos/jose.png', alt: 'Josefina guiando una sesión del taller', caption: 'Guía creativa' },
  { src: '/fotos/mano-paisaje.jpeg', alt: 'Pincelada sobre un paisaje de acuarela', caption: 'Atención plena' },
  { src: '/fotos/pinceles-corazon.jpeg', alt: 'Pinceles de acuarela dentro de un corazón rosa', caption: 'Nuestros materiales' },
  { src: '/fotos/pincel-oscuro.jpeg', alt: 'Pincel aplicando acuarela sobre fondo oscuro', caption: 'Color y textura' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="max-w-container mx-auto">
        <AnimateOnScroll>
          <SectionHeader label="Momentos de color" title="Así se vive el taller" centered />
        </AnimateOnScroll>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-image">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={index % 2 === 0 ? 400 : 500}
                  className="w-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-deep/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-bg-cream font-body text-sm p-4">{img.caption}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
