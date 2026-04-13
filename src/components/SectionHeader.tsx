interface SectionHeaderProps {
  label: string;
  title: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ label, title, centered = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}>
      <p className="text-[13px] uppercase tracking-[0.18em] text-brand-lavender-dark font-body font-light mb-4">
        {label}
      </p>
      <h2 className="font-display font-semibold text-text-main text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.2]">
        {title}
      </h2>
    </div>
  );
}
