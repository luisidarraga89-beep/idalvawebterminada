'use client'
import { useInView } from '@/lib/hooks'
import { Isotipo } from '@/components/ui/Isotipo'

const values = [
  { n: '01', title: 'El dueño no puede ser el sistema', body: 'Si todo depende de ti, el negocio tiene un problema estructural. Nuestro trabajo es ayudarte a construir una empresa que pueda funcionar con orden, procesos y claridad operativa.' },
  { n: '02', title: 'Si no se entiende, no sirve', body: 'La tecnología debe simplificar. No implementamos herramientas por moda ni llenamos empresas de sistemas innecesarios. Buscamos sistemas simples, útiles y fáciles de mantener.' },
  { n: '03', title: 'Crecer sin romper la operación', body: 'Muchas empresas venden más… y empiezan a perder control. El crecimiento solo es sostenible cuando existe estructura detrás.' },
  { n: '04', title: 'Menos teoría. Más realidad.', body: 'No trabajamos desde modelos perfectos. Trabajamos desde experiencia real: operando negocios, organizando equipos, vendiendo y resolviendo problemas del día a día.' },
  { n: '05', title: 'Profesionalizar sin perder esencia', body: 'No queremos convertir negocios humanos en empresas frías. Queremos ayudarte a organizar tu empresa sin perder lo que la hace diferente.' },
]

export function Values() {
  const [ref, inView] = useInView(0.08)

  return (
    <section ref={ref} id="valores" className="py-28 md:py-40 bg-[#0D0C0C] relative overflow-hidden">
      {/* Background isotipo decoration */}
      <div aria-hidden className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Isotipo size={400} />
      </div>

      <div className="container-ed relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-20 mb-14 md:mb-20">
          <div style={{opacity: inView ? 1:0, transform: inView?'translateY(0)':'translateY(20px)', transition:'all 0.7s ease'}}>
            <p className="t-label mb-4" style={{color:'rgba(200,240,78,0.6)'}}>Nuestros valores</p>
            <p className="text-base leading-relaxed" style={{color:'rgba(240,237,232,0.4)'}}>
              No son palabras para una presentación. Son el filtro con el que tomamos decisiones, elegimos proyectos y diseñamos cada solución.
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white text-balance self-end"
            style={{opacity: inView?1:0, transform: inView?'translateY(0)':'translateY(20px)', transition:'all 0.7s ease 0.1s'}}>
            Las reglas bajo las que trabajamos.
          </h2>
        </div>

        {/* Values list */}
        <div className="divide-y divide-white/[0.07]">
          {values.map((v, i) => (
            <div key={i}
              className="group grid grid-cols-1 md:grid-cols-[100px_1fr_1.4fr] gap-4 md:gap-10 py-8 md:py-10 transition-all duration-300 cursor-default"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.65s ease ${0.06 * i}s, transform 0.65s ease ${0.06 * i}s`,
              }}>
              {/* Number — large */}
              <span className="text-4xl md:text-5xl font-bold tracking-tighter self-center transition-colors duration-300 group-hover:text-volt"
                style={{color:'rgba(240,237,232,0.12)'}}>
                {v.n}
              </span>
              {/* Title */}
              <p className="text-lg md:text-xl font-semibold tracking-tight text-white self-center group-hover:text-volt transition-colors duration-300">
                {v.title}
              </p>
              {/* Body */}
              <p className="text-base leading-relaxed self-center" style={{color:'rgba(240,237,232,0.5)'}}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
