import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'

export const viewport: Viewport = {
  themeColor: '#0A0909',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'idalva · Estructura operativa para empresas que quieren crecer sin caos',
  description: 'Diseñamos la estructura, los procesos y los sistemas que tu negocio necesita para crecer con claridad, control y dirección. No somos una agencia. Somos la estructura que falta.',
  keywords: ['estructura operativa', 'organización empresarial', 'caos operativo', 'escalar empresa', 'CRM pymes', 'dirección estratégica Barcelona'],
  authors: [{ name: 'Luis Idárraga' }, { name: 'Melissa Villegas' }],
  openGraph: {
    title: 'idalva · Estructura operativa para empresas',
    description: 'Diseñamos la estructura, los procesos y los sistemas que tu negocio necesita para crecer con claridad, control y dirección.',
    url: 'https://idalva.es',
    siteName: 'idalva',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://idalva.es/og.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'idalva · Estructura operativa', description: 'Tu empresa debería darte libertad. Nosotros construimos la estructura para que eso sea posible.' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'idalva',
          url: 'https://idalva.es',
          email: 'luis@idalva.es',
          description: 'Firma de estructura operativa y escalabilidad para empresas',
          founder: [
            { '@type': 'Person', name: 'Luis Idárraga', jobTitle: 'CEO' },
            { '@type': 'Person', name: 'Melissa Villegas', jobTitle: 'COO' },
          ],
          address: { '@type': 'PostalAddress', addressLocality: 'Barcelona', addressCountry: 'ES' },
        })}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
