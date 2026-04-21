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

export const metadata: Metadata = {
  title: 'Talleres de Acuarela y Arteterapia en Santiago | Josefina Faine',
  description:
    'Talleres de acuarela terapéutica en Santiago, Chile. Un espacio para crear, sentir y reconectar contigo a través del arte. Reserva tu lugar con Josefina Faine.',
  openGraph: {
    title: 'Talleres de Acuarela y Arteterapia en Santiago | Josefina Faine',
    description: 'Talleres de acuarela terapéutica en Santiago, Chile. Reserva tu lugar.',
    url: 'https://artejosefaine.cl',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <About />
        <WorkshopGrid />
        <InstructorProfile />
        <Benefits />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
