'use client'
import { useState } from 'react'
import { useInView } from '@/lib/hooks'

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
    <section ref={ref} id="sistema" className="py-28 md:py-40">
      <div className="container-ed">
        <div className="mb-16 md:mb-20" style={s(0)}>
          <p className="t-label mb-4" style={{color:'rgba(200,240,78,0.6)'}}>Arquitectura idalva™</p>
          <h2 className="t-headline text-white max-w-2xl text-balance">No hacemos acciones aisladas. Diseñamos sistemas completos.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          {/* Phase selector */}
          <div className="flex flex-col" style={s(0.1)}>
            {phases.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left flex items-start gap-5 py-6 border-b border-white/[0.07] group transition-all duration-200"
                style={{ paddingLeft: active === i ? '0' : '0' }}
              >
                <span className="t-label mt-1 flex-shrink-0 transition-colors duration-200"
                  style={{color: active === i ? '#C8F04E' : 'rgba(240,237,232,0.2)'}}>
                  {p.num}
                </span>
                <div>
                  <p className="text-sm font-medium transition-colors duration-200"
                    style={{color: active === i ? '#F0EDE8' : 'rgba(240,237,232,0.4)'}}>
                    {p.label}
                  </p>
                  {active === i && (
                    <div className="mt-1 w-8 h-px" style={{background:'#C8F04E'}} />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Phase detail */}
          <div className="lg:sticky lg:top-28 self-start" style={s(0.2)}>
            <div key={active} style={{animation:'fadeIn 0.4s ease'}}>
              <p className="t-label mb-6" style={{color:'rgba(200,240,78,0.5)'}}>Fase {phases[active].num}</p>
              <p className="t-title text-white mb-8 text-balance">{phases[active].title}</p>
              <ul className="space-y-4">
                {phases[active].items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-px h-4 bg-volt/30 flex-shrink-0 mt-1.5" />
                    <p className="text-base" style={{color:'rgba(240,237,232,0.55)'}}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  )
}
