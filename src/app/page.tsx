import Hero from '@/components/Hero';
import About from '@/components/About';
import InstructorProfile from '@/components/InstructorProfile';
import WorkshopGrid from '@/components/WorkshopGrid';
import Benefits from '@/components/Benefits';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <main>
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
