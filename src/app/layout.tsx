import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import WhatsAppConversionTracker from '@/components/WhatsAppConversionTracker';
import { getLocalBusinessSchema, getWebSiteSchema } from '@/lib/schema';

const GTM_CONTAINER_ID = 'GTM-MLCM9N6F';

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
  title: 'Talleres de Acuarela y Arteterapia en Santiago | Josefina Fainé',
  description:
    'Talleres de acuarela terapéutica en Santiago, Chile. Un espacio para crear, sentir y reconectar contigo a través del arte. Reserva tu lugar con Josefina Fainé.',
  alternates: { canonical: '/' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Talleres de acuarela y arteterapia en Santiago — Josefina Fainé' }],
    locale: 'es_CL',
    type: 'website',
    siteName: 'Josefina Fainé',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talleres de Acuarela y Arteterapia en Santiago | Josefina Fainé',
    description:
      'Talleres de acuarela terapéutica en Santiago, Chile. Un espacio para crear, sentir y reconectar contigo a través del arte.',
    images: ['/og-image.jpg'],
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) — GA4 G-MXQHRV8XFY + Google Ads AW-18139986626 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MXQHRV8XFY" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MXQHRV8XFY');
gtag('config', 'AW-18139986626', { allow_enhanced_conversions: true });`,
          }}
        />
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        {children}
        <WhatsAppButton />
        <WhatsAppConversionTracker />
      </body>
    </html>
  );
}
