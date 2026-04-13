import { BENEFITS } from '@/lib/constants';
import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';

function BenefitIcon({ icon }: { icon: string }) {
  const className = 'w-10 h-10 text-brand-green';

  switch (icon) {
    case 'calm':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <path d="M9 9h.01M15 9h.01" />
        </svg>
      );
    case 'expression':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      );
    case 'explore':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M11 8v6M8 11h6" />
        </svg>
      );
    case 'mindfulness':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
          <path d="M6 1v3M10 1v3M14 1v3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Benefits() {
  return (
    <section className="section-padding bg-bg-warm">
      <div className="max-w-section mx-auto">
        <AnimateOnScroll>
          <SectionHeader label="Por qué crear" title="Lo que el arte hace por ti" centered />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, index) => (
            <AnimateOnScroll key={benefit.title} delay={index * 0.15}>
              <div className="bg-white/60 rounded-2xl p-6 border border-border/50">
                <BenefitIcon icon={benefit.icon} />
                <h3 className="font-display font-medium text-lg text-text-main mt-4 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm font-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
