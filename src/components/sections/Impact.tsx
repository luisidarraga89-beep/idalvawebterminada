'use client'
import { useInView, useCountUp } from '@/lib/hooks'

const metrics = [
  { value: 40, prefix: '+', suffix: '%', label: 'más tiempo libre para el fundador' },
  { value: 0,  prefix: '',  suffix: '%', label: 'trabajo duplicado tras implementación' },
  { value: 4,  prefix: '',  suffix: ' fases', label: 'de implementación estructurada' },
]

function Counter({ value, prefix, suffix, label, trigger }: typeof metrics[0] & { trigger: boolean }) {
  const count = useCountUp(value, 1600, trigger)
  return (
    <div className="text-center px-8 py-10 border-r border-white/[0.06] last:border-r-0">
      <div className="text-5xl md:text-6xl font-bold text-volt mb-3 tabular-nums">{prefix}{count}{suffix}</div>
      <p className="text-sm text-white/50 max-w-[160px] mx-auto leading-relaxed">{label}</p>
    </div>
  )
}

export function ImpactSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 })
  return (
    <section ref={ref} id="impacto" className="bg-grafito-mid py-24">
      <div className="section-wrapper">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow"><span className="w-5 h-px bg-volt inline-block" aria-hidden />La propuesta</span>
          <h2 className="font-bold text-white mt-2 leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.25rem)' }}>
            No te damos más herramientas. Te damos estructura.
          </h2>
        </div>
        <div className={`border border-white/[0.07] rounded-2xl overflow-hidden bg-grafito transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="grid grid-cols-3">
            {metrics.map((m, i) => <Counter key={i} {...m} trigger={inView} />)}
          </div>
          <div className="border-t border-white/[0.06] px-8 py-5 text-center">
            <p className="text-sm text-white/30 italic">"Convertimos negocios que funcionan como pueden… en empresas que funcionan con lógica, orden y dirección."</p>
          </div>
        </div>
      </div>
    </section>
  )
}
