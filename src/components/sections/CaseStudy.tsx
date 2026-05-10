'use client'
import { useInView } from '@/lib/hooks'

export function CaseStudy({ onOpen }: { onOpen: () => void }) {
  const [ref, inView] = useInView(0.1)
  const s = (d: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
  })

  return (
    <section ref={ref} id="casos" className="py-28 md:py-40 bg-[#0D0C0C]">
      <div className="container-ed">
        <div className="mb-14" style={s(0)}>
          <p className="t-label mb-4" style={{color:'rgba(240,237,232,0.25)'}}>Casos de trabajo</p>
          <h2 className="t-headline text-white max-w-xl text-balance">Empresas que ya operan con estructura.</h2>
        </div>

        {/* Case card — Electric Way */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-px bg-white/[0.06] rounded-2xl overflow-hidden" style={s(0.15)}>
          {/* Left — info */}
          <div className="bg-[#0D0C0C] p-10 md:p-14 flex flex-col justify-between">
            <div>
              <p className="t-label mb-8" style={{color:'rgba(240,237,232,0.2)'}}>Barcelona · 2026</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Electric Way</h3>
              <p className="text-base leading-relaxed mb-8" style={{color:'rgba(240,237,232,0.5)'}}>
                De operar desde el caos a construir una estructura preparada para escalar. Ecosistema operativo completo: identidad Dark-Tech, tienda B2B, CRM, automatizaciones y dirección estratégica mensual.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Identidad visual', 'Shopify B2B', 'CRM', 'Automatización', 'Dirección estratégica'].map(t => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-white/[0.08]" style={{color:'rgba(240,237,232,0.35)'}}>{t}</span>
                ))}
              </div>
            </div>
            <button onClick={onOpen} className="btn-outline self-start text-sm">
              ¿Quieres algo similar?
            </button>
          </div>

          {/* Right — placeholder for result visual */}
          <div className="bg-[#111010] p-10 md:p-14 flex flex-col justify-center min-h-[320px]">
            <div className="space-y-8">
              {[
                { n: '+125%', l: 'Crecimiento en cartera de clientes' },
                { n: '+95%',  l: 'Incremento en facturación ARR' },
                { n: '−30%',  l: 'Reducción tiempo improductivo' },
              ].map(({ n, l }) => (
                <div key={n} className="flex items-end gap-4">
                  <span className="text-4xl font-bold tracking-tight" style={{color:'#C8F04E'}}>{n}</span>
                  <span className="text-sm pb-1 leading-snug" style={{color:'rgba(240,237,232,0.35)'}}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coming soon */}
        <div className="mt-6 flex items-center justify-center h-24 rounded-2xl border border-dashed border-white/[0.06]" style={s(0.3)}>
          <p className="text-sm" style={{color:'rgba(240,237,232,0.2)'}}>Más casos próximamente</p>
        </div>
      </div>
    </section>
  )
}
