import Image from 'next/image';
import Link from 'next/link';
import { formatCLP } from '@/lib/utils';
import type { Workshop } from '@/lib/constants';

export default function WorkshopCard({
  name, tagline, description, date, time, duration, price, groupSize, level, image, ctaLink, badge,
}: Workshop) {
  return (
    <div className="bg-white rounded-card border border-border shadow-card hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-lavender transition-all duration-300 ease-out overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-card"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-brand-lavender/90 text-brand-deep text-xs font-body font-semibold px-3 py-1 rounded-pill backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col gap-3">
        <p className="text-brand-green text-xs font-body font-medium tracking-wide">{tagline}</p>
        <h3 className="font-display font-medium text-lg text-text-main">{name}</h3>
        <p className="text-text-muted text-sm font-body line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted font-body">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {date} · {time}
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {duration}
          </span>
        </div>

        <p className="text-xs text-text-muted font-body">
          Máx. {groupSize} personas · {level}
        </p>

        <p className="font-semibold text-text-main font-body text-lg">{formatCLP(price)}</p>

        <Link
          href={ctaLink}
          className="mt-1 bg-brand-green text-white rounded-pill px-5 py-2.5 font-body font-semibold text-sm text-center hover:opacity-90 transition-opacity"
        >
          Reservar mi lugar
        </Link>
      </div>
    </div>
  );
}
