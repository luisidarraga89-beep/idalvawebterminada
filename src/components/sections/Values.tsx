'use client'
import { useInView } from '@/lib/hooks'

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
    <section ref={ref} id="valores" className="py-28 md:py-40 bg-[#0D0C0C]">
      <div className="container-ed">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-16">
          <div>
            <p className="t-label mb-4" style={{color:'rgba(200,240,78,0.6)'}}>Nuestros valores</p>
            <p className="text-sm leading-relaxed" style={{color:'rgba(240,237,232,0.35)'}}>
              No son palabras para una presentación. Son el filtro con el que tomamos decisiones.
            </p>
          </div>
          <h2 className="t-title text-white text-balance self-end">
            Las reglas bajo las que trabajamos.
          </h2>
        </div>

        {/* Manifesto list */}
        <div>
          {values.map((v, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1.5fr] gap-4 md:gap-8 py-8 border-b border-white/[0.07] transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.7s ease ${0.05 * i}s, transform 0.7s ease ${0.05 * i}s`,
              }}>
              <span className="t-label self-start md:self-center" style={{color:'rgba(200,240,78,0.35)'}}>{v.n}</span>
              <p className="text-lg font-semibold tracking-tight text-white self-center group-hover:text-volt transition-colors duration-300">{v.title}</p>
              <p className="text-sm leading-relaxed" style={{color:'rgba(240,237,232,0.4)'}}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
