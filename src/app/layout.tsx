import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Taller de Acuarela y Arteterapia',
  description: 'Un espacio para reconectar contigo a través del color, el agua y la expresión creativa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}