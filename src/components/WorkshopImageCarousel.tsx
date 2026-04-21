'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  images: string[];
  alt: string;
  badge?: string;
}

export default function WorkshopImageCarousel({ images, alt, badge }: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const go = (next: number) => setIndex((next + total) % total);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-t-card bg-bg-warm">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ease-out ${
            i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt={`${alt} — imagen ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={i === 0}
          />
        </div>
      ))}

      {badge && (
        <span className="absolute top-3 left-3 z-10 bg-brand-lavender/90 text-brand-deep text-xs font-body font-semibold px-3 py-1 rounded-pill backdrop-blur-sm">
          {badge}
        </span>
      )}

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-text-main flex items-center justify-center shadow-card backdrop-blur-sm transition-opacity"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Imagen siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-text-main flex items-center justify-center shadow-card backdrop-blur-sm transition-opacity"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
