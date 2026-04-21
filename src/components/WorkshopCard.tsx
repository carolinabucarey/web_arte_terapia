import Image from 'next/image';
import { formatCLP } from '@/lib/utils';
import type { Workshop } from '@/lib/constants';
import WorkshopImageCarousel from './WorkshopImageCarousel';
import WorkshopCTA from './WorkshopCTA';

export default function WorkshopCard({
  id, name, tagline, description, date, time, duration, price, groupSize, level, image, images, ctaLink, ctaText, badge,
}: Workshop) {
  const priceLabel = price === 'consultar' ? 'Consultar' : formatCLP(price);
  const buttonText = ctaText ?? 'Reservar mi lugar';
  const dateTime = [date, time].filter(Boolean).join(' · ');
  const hasCarousel = images && images.length > 1;
  return (
    <div className="h-full flex flex-col bg-white rounded-card border border-border shadow-card hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-lavender transition-all duration-300 ease-out overflow-hidden">
      {hasCarousel ? (
        <WorkshopImageCarousel images={images!} alt={name} badge={badge} />
      ) : (
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
      )}

      <div className="p-6 flex flex-col gap-3 flex-1">
        <p className="text-brand-green text-xs font-body font-medium tracking-wide">{tagline}</p>
        <h3 className="font-display font-medium text-lg text-text-main">{name}</h3>
        <p className="text-text-muted text-sm font-body line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted font-body">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {dateTime}
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

        <p className="font-semibold text-text-main font-body text-lg mt-auto">{priceLabel}</p>

        <WorkshopCTA href={ctaLink} workshopId={id} workshopName={name}>
          {buttonText}
        </WorkshopCTA>
      </div>
    </div>
  );
}
