'use client'
import { useInView } from '@/lib/hooks'

export function Problem() {
  const [ref, inView] = useInView(0.15)
  const s = (d: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
  })

  return (
    <section ref={ref} id="problema" className="py-28 md:py-40">
      <div className="container-sm">
        <p className="t-label mb-12" style={{...s(0), color:'rgba(240,237,232,0.25)'}}>El problema</p>

        <div className="space-y-6 md:space-y-8">
          <p className="t-headline text-white text-balance" style={s(0.1)}>
            La mayoría de empresas no necesita más herramientas.
          </p>

          <div className="rule" style={s(0.2)} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-4" style={s(0.25)}>
            <div className="space-y-5">
              {['Orden', 'Procesos', 'Estructura'].map((w, i) => (
                <div key={w} className="flex items-center gap-4" style={{...s(0.25 + i * 0.08)}}>
                  <span className="text-xs font-medium tabular-nums" style={{color:'rgba(200,240,78,0.5)'}}>0{i+1}</span>
                  <p className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{w}</p>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              {['Sistemas claros para operar', 'Personas que no sean el cuello de botella', 'Empresas que crecen sin romperse'].map((w, i) => (
                <div key={w} className="flex items-start gap-4" style={{...s(0.35 + i * 0.08)}}>
                  <span className="w-1 h-1 rounded-full mt-2.5 flex-shrink-0" style={{background:'rgba(200,240,78,0.4)'}} />
                  <p className="text-base leading-relaxed" style={{color:'rgba(240,237,232,0.45)'}}>{w}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 pt-10 border-t border-white/[0.06]" style={s(0.6)}>
          <p className="t-title text-white text-balance">
            Porque crecer sin estructura solo{' '}
            <span style={{color:'rgba(240,237,232,0.3)'}}>crea más caos.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
