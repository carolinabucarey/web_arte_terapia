import Link from 'next/link';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Migas de pan" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 font-body text-xs text-text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const path = item.url.startsWith('http')
            ? new URL(item.url).pathname || '/'
            : item.url;

          return (
            <li key={item.url} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-text-main">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={path}
                  className="hover:text-brand-water transition-colors"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-border">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
