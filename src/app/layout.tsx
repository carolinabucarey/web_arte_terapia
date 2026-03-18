import './globals.css';
import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}