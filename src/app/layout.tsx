import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'idalva · Estructura operativa y escalabilidad para PYMES | Barcelona',
  description: 'Diseñamos la estructura, los procesos y los sistemas que tu negocio necesita para crecer sin caos. Organización operativa, CRM y dirección estratégica para PYMES.',
  openGraph: {
    title: 'idalva · Estructura operativa para PYMES',
    description: 'Diseñamos la estructura, los procesos y los sistemas que tu negocio necesita para crecer sin caos.',
    url: 'https://idalva.es',
    siteName: 'idalva',
    locale: 'es_ES',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-grafito text-white antialiased">
        {children}
      </body>
    </html>
  )
}
