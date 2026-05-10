'use client'
import { useInView } from '@/lib/hooks'

const members = [
  {
    initials: 'LI', name: 'Luis Idárraga', role: 'Co-fundador & CEO', focus: 'Estrategia comercial y crecimiento',
    quote: 'El crecimiento de un negocio no depende de la suerte. Depende de la estructura que exista detrás.',
    bio: 'Más de 12 años liderando equipos comerciales y estructurando sistemas de venta en startups y multinacionales. Su especialidad: convertir el caos comercial en un pipeline predecible y escalable.',
    skills: ['Estrategia comercial', 'CRM', 'Sales pipeline', 'Go-to-market'],
  },
  {
    initials: 'MV', name: 'Melissa Villegas', role: 'Co-fundadora & COO', focus: 'Operaciones, procesos y control',
    quote: 'El problema no es crecer. El problema es crecer sin estructura.',
    bio: 'Economista especializada en operaciones. Ha construido desde cero los sistemas internos de startups tecnológicas: procesos, herramientas, documentación y equipos alineados.',
    skills: ['Operaciones', 'Procesos', 'ERP', 'Gestión de equipos'],
  },
]

export function TeamSection() {
  const [ref, inView] = useInView<HTMLElement>()
  return (
    <section ref={ref} id="equipo" className="bg-surface py-24">
      <div className="section-wrapper">
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow"><span className="w-5 h-px bg-volt inline-block" aria-hidden />El equipo</span>
          <h2 className="font-bold text-white mt-2 mb-4 leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.25rem)' }}>Ventas y operación trabajando juntas.</h2>
          <p className="text-lg text-white/55 max-w-2xl leading-relaxed">No venimos de la teoría. Venimos de construir negocios, operar equipos y vivir el caos operativo desde dentro.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((m, i) => (
            <div key={i} className={`flex flex-col gap-5 p-7 rounded-2xl border border-white/[0.07] bg-grafito-mid hover:border-volt/20 transition-all duration-300
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i*0.15}s` }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-grafito border-2 border-volt/20 flex items-center justify-center text-lg font-bold text-volt flex-shrink-0">{m.initials}</div>
                <div>
                  <h3 className="font-semibold text-lg text-white">{m.name}</h3>
                  <p className="text-sm text-volt-dim font-medium">{m.role}</p>
                  <p className="text-xs text-white/40 mt-0.5">{m.focus}</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-volt/30 pl-4">
                <p className="text-white/70 italic text-sm leading-relaxed">"{m.quote}"</p>
              </blockquote>
              <p className="text-sm text-white/50 leading-relaxed flex-1">{m.bio}</p>
              <div className="h-px bg-white/[0.05]" />
              <div className="flex flex-wrap gap-2">
                {m.skills.map(s => <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-white/50">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className={`mt-10 p-6 rounded-xl border border-volt/10 bg-volt/[0.03] text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-white/50">
            <span className="text-volt font-medium">Emprendedor a emprendedor.</span>{' '}
            Hemos operado negocios propios, fallado, ajustado y vuelto a empezar. No hablamos desde la teoría.
          </p>
        </div>
      </div>
    </section>
  )
}
