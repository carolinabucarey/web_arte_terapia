'use client';

import { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '@/lib/constants';
import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="section-padding bg-bg-cream">
      <div className="max-w-section mx-auto">
        <AnimateOnScroll>
          <SectionHeader label="Lo que dicen" title="Voces del taller" centered />
        </AnimateOnScroll>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Testimonial cards */}
          <div className="overflow-hidden">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-out ${
                  index === current
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 absolute inset-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 md:p-12 relative max-w-reading mx-auto text-center">
                  {/* Decorative quote */}
                  <span className="absolute top-4 left-6 text-brand-lavender/20 text-6xl font-display leading-none select-none">
                    &ldquo;
                  </span>

                  <blockquote className="font-display italic text-brand-deep text-lg md:text-xl leading-relaxed mb-6 relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <p className="font-body text-text-main font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-text-muted text-xs">
                    {testimonial.context}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex gap-2 justify-center mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Ver testimonio ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-brand-lavender-dark w-6'
                    : 'bg-border hover:bg-brand-lavender'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
