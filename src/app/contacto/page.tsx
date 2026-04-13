import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contacto — Reserva tu Taller de Acuarela | artejosefaine.cl',
  description:
    'Contacta a Josefina Faine para reservar tu lugar en los talleres de acuarela y arteterapia en Santiago. WhatsApp y formulario de contacto.',
  openGraph: {
    title: 'Contacto — Reserva tu Taller de Acuarela',
    description: 'Contacta a Josefina Faine para reservar tu lugar en los talleres de acuarela.',
    url: 'https://artejosefaine.cl/contacto',
    type: 'website',
  },
};

export default function ContactoPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Inicio', url: SITE_URL },
    { name: 'Contacto', url: `${SITE_URL}/contacto` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content" className="pt-[88px]">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
