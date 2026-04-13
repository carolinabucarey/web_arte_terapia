import Image from 'next/image';
import Link from 'next/link';
import { formatCLP } from '@/lib/utils';

interface WorkshopCardProps {
  name: string;
  description: string;
  date: string;
  time: string;
  price: number;
  image: string;
  ctaLink: string;
}

export default function WorkshopCard({ name, description, date, time, price, image, ctaLink }: WorkshopCardProps) {
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
      </div>

      <div className="p-6 flex flex-col gap-3">
        <h3 className="font-display font-medium text-lg text-text-main">{name}</h3>
        <p className="text-text-muted text-sm font-body line-clamp-2">{description}</p>

        <div className="flex items-center gap-2 text-sm text-text-muted font-body">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span>{date} · {time}</span>
        </div>

        <p className="font-semibold text-text-main font-body text-lg">{formatCLP(price)}</p>

        <Link
          href={ctaLink}
          className="mt-1 bg-brand-green text-white rounded-pill px-5 py-2.5 font-body font-semibold text-sm text-center hover:opacity-90 transition-opacity"
        >
          Reservar
        </Link>
      </div>
    </div>
  );
}
