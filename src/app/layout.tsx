import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import WorkshopPromoPopup from '@/components/WorkshopPromoPopup';
import { getLocalBusinessSchema, getWebSiteSchema } from '@/lib/schema';

const GA_ID = 'G-MXQHRV8XFY';

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
  metadataBase: new URL('https://artejosefaine.cl'),
  title: 'Talleres de Acuarela y Arteterapia en Santiago | Josefina Faine',
  description:
    'Talleres de acuarela terapéutica en Santiago, Chile. Un espacio para crear, sentir y reconectar contigo a través del arte. Reserva tu lugar con Josefina Faine.',
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_CL',
    type: 'website',
    siteName: 'Arte y Terapia Salud',
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
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Navbar />
        {children}
        <WhatsAppButton />
        <WorkshopPromoPopup />
      </body>
    </html>
  );
}
