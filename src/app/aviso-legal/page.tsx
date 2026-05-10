import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal · idalva',
  description: 'Aviso legal e información sobre el titular del sitio web idalva.es',
  robots: { index: false, follow: false },
}

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-[#0A0909] pt-28 pb-24">
      <div className="mx-auto max-w-[760px] px-6 md:px-12">

        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-12 transition-colors"
          style={{color:'rgba(240,237,232,0.35)'}}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Volver a idalva
        </Link>

        <p className="t-label mb-6" style={{color:'rgba(200,240,78,0.6)'}}>Legal</p>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-12">Aviso Legal</h1>

        <div className="space-y-10 text-base leading-relaxed" style={{color:'rgba(240,237,232,0.55)'}}>

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">1. Titular del sitio web</h2>
            <div className="space-y-2">
              <p><span className="text-white/70">Titular:</span> idalva</p>
              <p><span className="text-white/70">Responsable:</span> Melissa Villegas Chica (DNI: 48028274L)</p>
              <p><span className="text-white/70">Dirección:</span> Calle Teodor Creus i Corominas 11, 1-2, 08800 Vilanova i la Geltrú, Barcelona, España</p>
              <p><span className="text-white/70">Email:</span>{' '}
                <a href="mailto:legal@idalva.es" className="text-volt/70 hover:text-volt transition-colors">legal@idalva.es</a>
              </p>
              <p><span className="text-white/70">Teléfono:</span>{' '}
                <a href="tel:+34643431297" className="hover:text-white transition-colors">+34 643 43 12 97</a>
              </p>
            </div>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente Aviso Legal regula el acceso y el uso del sitio web <strong className="text-white/70">idalva.es</strong>, titularidad de idalva, con domicilio en Vilanova i la Geltrú, Barcelona, España.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">3. Propiedad intelectual</h2>
            <p>
              Todos los derechos de propiedad intelectual sobre el diseño, código y contenidos del presente sitio web pertenecen a <strong className="text-white/70">idalva</strong>. Queda expresamente prohibida la reproducción, distribución o comunicación pública de cualquier parte de este sitio sin autorización previa y por escrito.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">4. Responsabilidad</h2>
            <p>
              idalva no garantiza la inexistencia de interrupciones o errores en el acceso al sitio web. idalva queda exonerada de cualquier responsabilidad por daños o perjuicios derivados del uso del sitio.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">5. Legislación aplicable</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Barcelona.
            </p>
          </section>

          <div className="mt-12 p-4 rounded-lg border border-white/[0.06] text-sm" style={{color:'rgba(240,237,232,0.3)'}}>
            Última actualización: mayo de 2026
          </div>
        </div>
      </div>
    </main>
  )
}
