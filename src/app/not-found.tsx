import Link from 'next/link';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <main className="pt-[88px] section-padding">
        <div className="max-w-reading mx-auto text-center">
          <p className="text-brand-lavender-dark text-6xl font-display font-bold mb-4">404</p>
          <h1 className="font-display font-semibold text-2xl text-text-main mb-4">
            Esta página no existe
          </h1>
          <p className="text-text-muted font-body mb-8">
            Parece que el camino se desvió. Pero siempre puedes volver al inicio y encontrar lo que buscas.
          </p>
          <Link
            href="/"
            className="inline-flex bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
