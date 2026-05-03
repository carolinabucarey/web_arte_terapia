import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import InstructorProfile from '@/components/InstructorProfile';
import WorkshopGrid from '@/components/WorkshopGrid';
import Benefits from '@/components/Benefits';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { getFAQSchema } from '@/lib/schema';
import { HOME_FAQS } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Talleres de Acuarela y Arteterapia en Santiago | Josefina Faine',
  description:
    'Talleres de acuarela terapéutica en Santiago, Chile. Un espacio para crear, sentir y reconectar contigo a través del arte. Reserva tu lugar con Josefina Faine.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Talleres de Acuarela y Arteterapia en Santiago | Josefina Faine',
    description: 'Talleres de acuarela terapéutica en Santiago, Chile. Reserva tu lugar.',
    url: 'https://artejosefaine.cl',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

export default function HomePage() {
  const faqSchema = getFAQSchema(HOME_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main id="main-content">
        <Hero />
        <About />
        <InstructorProfile />
        <WorkshopGrid />
        <Benefits />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
