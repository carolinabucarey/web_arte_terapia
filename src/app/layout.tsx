import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getLocalBusinessSchema, getWebSiteSchema } from '@/lib/schema';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.josefinafainearte.cl'),
  title: 'Talleres de Acuarela y Arteterapia en Santiago | Josefina Faine',
  description:
    'Talleres de acuarela terapéutica en Santiago, Chile. Un espacio para crear, sentir y reconectar contigo a través del arte. Reserva tu lugar con Josefina Faine.',
  alternates: { canonical: '/' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Talleres de acuarela y arteterapia en Santiago — Josefina Faine' }],
    locale: 'es_CL',
    type: 'website',
    siteName: 'Arte y Terapia Salud',
  },
  other: {
    'geo.region': 'CL-RM',
    'geo.placename': 'Santiago',
    'geo.position': '-33.44;-70.61',
    'ICBM': '-33.44, -70.61',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
        />
      </head>
      <body className="bg-bg-cream text-text-main font-body">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
