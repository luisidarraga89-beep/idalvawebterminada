'use client'
import { useState } from 'react'
import { useInView } from '@/lib/hooks'
import { Isotipo } from '@/components/ui/Isotipo'

const phases = [
  {
    num: '00',
    label: 'Diagnóstico Operativo',
    title: 'Entendemos cómo funciona realmente el negocio.',
    items: [
      'Detectamos cuellos de botella y tareas repetitivas',
      'Identificamos procesos desordenados y pérdida de tiempo',
      'Localizamos herramientas mal conectadas y dependencias del fundador',
      'Si el proyecto está empezando, diseñamos la estructura desde cero',
    ],
  },
  {
    num: '01',
    label: 'Presencia y Captación',
    title: 'Construimos la base visible del negocio.',
    items: [
      'Posicionamiento, identidad visual y página web',
      'Estructura comercial y captación de clientes',
      'Campañas digitales y presencia profesional',
      'Objetivo: atraer mejores oportunidades y transmitir confianza',
    ],
  },
  {
    num: '02',
    label: 'Operación y Sistemas',
    title: 'Organizamos la empresa por dentro.',
    items: [
      'CRM, ERP, automatizaciones y procesos comerciales',
      'Sistemas de control y documentación operativa',
      'Estructuras internas claras y menos dependencia',
      'Menos caos. Menos Excel. Más control y más claridad.',
    ],
  },
  {
    num: '03',
    label: 'Escalabilidad y Dirección',
    title: 'Una empresa organizada necesita dirección constante.',
    items: [
      'Revisión de métricas y optimización de procesos',
      'Estrategia comercial y mejora operativa continua',
      'Evolución del negocio con acompañamiento real',
      'No instalamos herramientas y desaparecemos.',
    ],
  },
]

export function System() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView(0.1)
  const s = (d: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.7s ease ${d}s, transform 0.7s ease ${d}s`,
  })

  return (
    <section ref={ref} id="sistema" className="py-28 md:py-40 relative overflow-hidden">
      {/* Decorative isotipo */}
      <div aria-hidden className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.035] pointer-events-none hidden lg:block">
        <Isotipo size={480} />
      </div>

      <div className="container-ed relative z-10">
        {/* Header */}
        <div className="mb-14 md:mb-20" style={s(0)}>
          <p className="t-label mb-4" style={{color:'rgba(200,240,78,0.6)'}}>Arquitectura idalva™</p>
          <h2 className="t-headline text-white max-w-2xl text-balance mb-4">
            No hacemos acciones aisladas.
          </h2>
          <p className="text-lg" style={{color:'rgba(240,237,232,0.45)'}}>Diseñamos sistemas completos para que la empresa funcione de forma organizada, clara y escalable.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-20">
          {/* Phase selector */}
          <div className="flex flex-col gap-1" style={s(0.1)}>
            {phases.map((p, i) => (
              <button key={i} onClick={() => setActive(i)}
                className="text-left flex items-center gap-5 py-5 px-5 rounded-xl transition-all duration-200 group"
                style={{
                  background: active === i ? 'rgba(200,240,78,0.06)' : 'transparent',
                  border: `1px solid ${active === i ? 'rgba(200,240,78,0.15)' : 'transparent'}`,
                }}>
                {/* Number */}
                <span className="text-2xl md:text-3xl font-bold tracking-tighter flex-shrink-0 transition-colors duration-200"
                  style={{color: active === i ? '#C8F04E' : 'rgba(240,237,232,0.18)'}}>
                  {p.num}
                </span>
                {/* Label */}
                <div>
                  <p className="text-base md:text-lg font-medium transition-colors duration-200"
                    style={{color: active === i ? '#F0EDE8' : 'rgba(240,237,232,0.45)'}}>
                    {p.label}
                  </p>
                  {active === i && (
                    <div className="mt-1.5 w-6 h-0.5 rounded-full bg-volt/50" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Phase detail */}
          <div className="lg:sticky lg:top-28 self-start" style={s(0.2)}>
            <div key={active}>
              <p className="t-label mb-5" style={{color:'rgba(200,240,78,0.5)'}}>Fase {phases[active].num}</p>
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-8 text-balance leading-tight">
                {phases[active].title}
              </p>
              <ul className="space-y-5">
                {phases[active].items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-0.5 h-5 rounded-full flex-shrink-0 mt-0.5" style={{background:'rgba(200,240,78,0.35)'}} />
                    <p className="text-base leading-relaxed" style={{color:'rgba(240,237,232,0.6)'}}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
