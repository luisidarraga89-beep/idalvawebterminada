'use client'
import { useInView } from '@/lib/hooks'

const symptoms = [
  'Todo depende de ti. Si tú paras, la empresa para.',
  'Las herramientas no están conectadas. La información se pierde.',
  'Los procesos viven en Excel o en la cabeza de alguien.',
  'El equipo no puede actuar sin consultarte cada decisión.',
]

export function ProblemSection() {
  const [ref, inView] = useInView<HTMLElement>()
  return (
    <section ref={ref} id="el-problema" className="bg-grafito py-24 overflow-hidden">
      <div className="section-wrapper">
        <div className={`max-w-3xl mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow"><span className="w-5 h-px bg-volt inline-block" aria-hidden />El problema</span>
          <h2 className="font-bold text-white mt-2 mb-6 text-balance leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.25rem)' }}>
            Tu empresa no necesita más esfuerzo. Necesita estructura.
          </h2>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Muchas empresas crecen… pero internamente siguen funcionando desde Excel, mensajes perdidos, procesos improvisados y decisiones que viven solo en la cabeza del dueño. El resultado: más trabajo, más caos y menos control.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {symptoms.map((s, i) => (
            <div key={i} className={`group flex items-start gap-4 p-5 rounded-xl border border-white/[0.07] bg-grafito-mid hover:border-volt/20 transition-all duration-300
              ${inView ? 'opacity-100 translate-x-0' : `opacity-0 ${i%2===0?'-translate-x-4':'translate-x-4'}`}`}
              style={{ transitionDelay: `${0.1+i*0.1}s` }}>
              <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.07] text-white/40 group-hover:text-volt/60 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2"/>
                  <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-white/60 group-hover:text-white/75 transition-colors leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
        <div className={`mt-16 pt-16 border-t border-white/[0.06] text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-bold text-white/20" style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)' }}>El problema no es falta de ganas.</p>
          <p className="font-bold text-white mt-1" style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)' }}>Es falta de <span className="text-volt">sistema</span>.</p>
        </div>
      </div>
    </section>
  )
}
