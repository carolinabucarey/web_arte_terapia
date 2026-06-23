import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';
import type { FAQ } from '@/lib/faqs';

interface FaqsProps {
  items: FAQ[];
  label?: string;
  title?: string;
  className?: string;
}

export default function Faqs({
  items,
  label = 'Preguntas frecuentes',
  title = 'Resolvemos tus dudas',
  className = 'section-padding',
}: FaqsProps) {
  if (items.length === 0) return null;

  return (
    <section className={className} aria-label="Preguntas frecuentes">
      <div className="max-w-reading mx-auto">
        <AnimateOnScroll>
          <SectionHeader label={label} title={title} centered />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="mt-8 flex flex-col gap-4">
            {items.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border bg-white p-5 md:p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-semibold text-text-main text-lg list-none">
                  {faq.question}
                  <span className="text-brand-lavender-dark transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-text-muted font-body text-base leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
