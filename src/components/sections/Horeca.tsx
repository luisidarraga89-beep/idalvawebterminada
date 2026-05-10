'use client'
import { useInView } from '@/lib/hooks'

const items = [
  { title: 'Control de compras',     desc: 'Pedidos, proveedores y costes bajo control. Sin depender de la memoria del jefe de cocina.' },
  { title: 'Gestión de stock',       desc: 'Inventario en tiempo real. Cero roturas de stock, cero desperdicio invisible.' },
  { title: 'Escandallos digitales',  desc: 'Coste real por plato. Sabes exactamente qué margen tienes en cada línea del menú.' },
  { title: 'Rentabilidad por turno', desc: 'KPIs claros por servicio. Decisiones basadas en datos, no en intuición.' },
]
const tags = ['Restaurantes', 'Hoteles', 'Cafeterías', 'Catering', 'Dark kitchens']

export function HorecaSection() {
  const [ref, inView] = useInView<HTMLElement>()
  return (
    <section ref={ref} id="horeca" className="relative bg-grafito py-24 overflow-hidden">
      <div aria-hidden className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(200,240,78,0.06) 0%,transparent 70%)' }} />
      <div className="section-wrapper relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <span className="eyebrow"><span className="w-5 h-px bg-volt inline-block" aria-hidden />Especialidad HORECA</span>
            <h2 className="font-bold text-white mt-2 mb-6 leading-tight text-balance" style={{ fontSize: 'clamp(2rem,4vw,3.25rem)' }}>
              Expertos en operaciones gastronómicas.
            </h2>
            <p className="text-lg text-white/55 leading-relaxed mb-8">
              Los restaurantes no fallan por falta de talento en cocina. Fallan porque nadie ha organizado cómo funciona la empresa por dentro. Nosotros sí sabemos hacerlo.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(t => <span key={t} className="px-3 py-1.5 rounded-full text-sm border border-volt/20 text-volt/70 bg-volt/[0.06]">{t}</span>)}
            </div>
            <p className="text-sm text-white/35 mb-8">Trabajamos con Prezo, Holded y herramientas específicas para HORECA.</p>
            <a href="#contacto" className="btn-volt">Ver solución HORECA →</a>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            {items.map((item, i) => (
              <div key={i} className="p-5 rounded-xl border border-white/[0.07] bg-grafito-mid hover:border-volt/20 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-volt/[0.08] border border-volt/20 flex items-center justify-center mb-4 group-hover:bg-volt/[0.15] transition-colors">
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-volt" aria-hidden>
                    <path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
