import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contacto — Reserva tu Taller de Acuarela | artejosefaine.cl',
  description:
    'Contacta a Josefina Faine para reservar tu lugar en los talleres de acuarela y arteterapia en Santiago. WhatsApp y formulario de contacto.',
};

export default function ContactoPage() {
  return (
    <>
      <main className="pt-[88px]">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
