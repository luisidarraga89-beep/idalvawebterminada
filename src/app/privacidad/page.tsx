import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad · idalva',
  description: 'Política de privacidad y protección de datos de idalva conforme al RGPD.',
  robots: { index: false, follow: false },
}

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-[#0A0909] pt-28 pb-24">
      <div className="mx-auto max-w-[760px] px-6 md:px-12">

        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-12 transition-colors"
          style={{color:'rgba(240,237,232,0.35)'}}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Volver a idalva
        </Link>

        <p className="t-label mb-6" style={{color:'rgba(200,240,78,0.6)'}}>Legal</p>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-12">Política de Privacidad</h1>

        <div className="space-y-10 text-base leading-relaxed" style={{color:'rgba(240,237,232,0.55)'}}>

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">1. Responsable del tratamiento</h2>
            <div className="space-y-2">
              <p><span className="text-white/70">Responsable:</span> idalva — Melissa Villegas Chica</p>
              <p><span className="text-white/70">DPD / Delegado de Protección de Datos:</span> Melissa Villegas Chica</p>
              <p><span className="text-white/70">Dirección:</span> Calle Teodor Creus i Corominas 11, 1-2, 08800 Vilanova i la Geltrú, Barcelona, España</p>
              <p><span className="text-white/70">Contacto DPD:</span>{' '}
                <a href="mailto:legal@idalva.es" className="text-volt/70 hover:text-volt transition-colors">legal@idalva.es</a>
              </p>
              <p><span className="text-white/70">Teléfono:</span>{' '}
                <a href="tel:+34643431297" className="hover:text-white transition-colors">+34 643 43 12 97</a>
              </p>
            </div>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">2. Finalidad del tratamiento</h2>
            <p>Los datos personales recogidos a través de los formularios de contacto del sitio web serán tratados con las siguientes finalidades:</p>
            <ul className="mt-4 space-y-2 pl-4">
              {['Gestión y respuesta a consultas recibidas.','Prestación de los servicios solicitados.','Envío de información comercial relacionada con idalva, siempre que el usuario lo haya autorizado expresamente.'].map((t,i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full mt-2.5 flex-shrink-0" style={{background:'rgba(200,240,78,0.4)'}} />
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">3. Base jurídica</h2>
            <p>El tratamiento de sus datos se basa en el consentimiento del interesado (Art. 6.1.a RGPD) y en la ejecución de un contrato o aplicación de medidas precontractuales (Art. 6.1.b RGPD).</p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">4. Conservación de los datos</h2>
            <p>Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para atender las posibles responsabilidades que pudieran derivarse del tratamiento.</p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">5. Derechos del usuario (ARCO)</h2>
            <p className="mb-4">En cualquier momento puede ejercer los siguientes derechos escribiendo a <a href="mailto:legal@idalva.es" className="text-volt/70 hover:text-volt transition-colors">legal@idalva.es</a>:</p>
            <ul className="space-y-2 pl-4">
              {['Acceso a sus datos personales.','Rectificación de datos inexactos.','Supresión (derecho al olvido).','Limitación del tratamiento.','Portabilidad de los datos.','Oposición al tratamiento.'].map((t,i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full mt-2.5 flex-shrink-0" style={{background:'rgba(200,240,78,0.4)'}} />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4">Asimismo, tiene derecho a presentar una reclamación ante la <strong className="text-white/70">Agencia Española de Protección de Datos (AEPD)</strong>.</p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">6. Seguridad</h2>
            <p>idalva implementa protocolos <strong className="text-white/70">SSL/HTTPS</strong> y las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos y evitar su alteración, pérdida, tratamiento o acceso no autorizado.</p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">7. Cookies</h2>
            <p>Este sitio web utiliza cookies propias de carácter técnico y analítico. Puede obtener más información y gestionar sus preferencias a través del banner de cookies que se muestra al acceder al sitio.</p>
          </section>

          <div className="mt-12 p-4 rounded-lg border border-white/[0.06] text-sm" style={{color:'rgba(240,237,232,0.3)'}}>
            Última actualización: mayo de 2026
          </div>
        </div>
      </div>
    </main>
  )
}
