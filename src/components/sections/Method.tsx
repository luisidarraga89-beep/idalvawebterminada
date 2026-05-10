'use client'
import { useState } from 'react'
import { useInView } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const steps = [
  { num: '01', title: 'Diagnóstico',    desc: 'Nos metemos en las tripas de tu empresa. Detectamos cuellos de botella, procesos rotos, herramientas mal conectadas y todo lo que depende demasiado de ti.' },
  { num: '02', title: 'Estructura',     desc: 'Diseñamos el blueprint de cómo debe funcionar tu empresa: qué herramientas, qué procesos, qué flujos. Nada se implementa sin validar el encaje con tu realidad.' },
  { num: '03', title: 'Sistemas',       desc: 'Implementamos y conectamos todo: CRM, ERP, automatizaciones, documentación operativa. Tu empresa empieza a funcionar con lógica, no con improvisación.' },
  { num: '04', title: 'Escalabilidad',  desc: 'No instalamos herramientas y desaparecemos. Actuamos como directores de orquesta externos para asegurar que el sistema rinde y tú te mantienes en dirección.' },
]

export function MethodSection() {
  const [active, setActive] = useState<number>(0)
  const [ref, inView] = useInView<HTMLElement>()
  return (
    <section ref={ref} id="metodo" className="bg-surface py-24">
      <div className="section-wrapper">
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow"><span className="w-5 h-px bg-volt inline-block" aria-hidden />Método idalva™</span>
          <h2 className="font-bold text-white mt-2 leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.25rem)' }}>Así es como trabajamos.</h2>
        </div>
        <div className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <div key={i} className={`transition-all duration-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${i*0.1}s` }}>
              <button onClick={() => setActive(i)} className={cn('w-full text-left flex items-start gap-6 p-6 rounded-xl border transition-all duration-300',
                active === i ? 'bg-grafito-mid border-volt/30' : 'bg-grafito-light/20 border-white/[0.06] hover:border-white/[0.12]')}>
                <span className={cn('text-3xl font-bold leading-none mt-0.5 flex-shrink-0 transition-colors', active === i ? 'text-volt' : 'text-white/15')}>{step.num}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className={cn('text-lg font-semibold transition-colors', active === i ? 'text-white' : 'text-white/60')}>{step.title}</span>
                    <svg className={cn('w-5 h-5 flex-shrink-0 transition-all', active === i ? 'text-volt rotate-45' : 'text-white/30')} fill="none" viewBox="0 0 20 20" aria-hidden>
                      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  {active === i && <p className="text-white/55 mt-3 leading-relaxed">{step.desc}</p>}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
