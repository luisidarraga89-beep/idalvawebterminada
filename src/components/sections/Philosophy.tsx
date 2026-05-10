'use client'
import { useInView } from '@/lib/hooks'

export function Philosophy() {
  const [ref, inView] = useInView(0.1)
  const s = (d: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
  })

  return (
    <section ref={ref} id="filosofia" className="py-28 md:py-40 bg-[#0D0C0C]">
      <div className="container-ed">
        {/* Slogan — typographic hero */}
        <div className="mb-20 md:mb-32" style={s(0)}>
          <p className="t-label mb-8" style={{color:'rgba(200,240,78,0.6)'}}>Filosofía</p>
          <p className="font-bold tracking-tight text-white text-balance leading-[0.95]"
            style={{fontSize:'clamp(2.5rem,6vw,5.5rem)', letterSpacing:'-0.04em'}}>
            Escalar sin caos.
          </p>
          <p className="font-bold tracking-tight text-balance leading-[0.95] mt-2"
            style={{fontSize:'clamp(2.5rem,6vw,5.5rem)', letterSpacing:'-0.04em', color:'rgba(240,237,232,0.25)'}}>
            Operar sin límites.
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div style={s(0.15)}>
            <p className="t-label mb-6" style={{color:'rgba(240,237,232,0.25)'}}>Misión</p>
            <p className="text-lg leading-relaxed text-balance" style={{color:'rgba(240,237,232,0.6)'}}>
              Ayudar a empresas y fundadores a construir negocios organizados, rentables y escalables, implementando estructura, procesos y sistemas claros que reduzcan el caos operativo y devuelvan el control.
            </p>
          </div>
          <div style={s(0.25)}>
            <p className="t-label mb-6" style={{color:'rgba(240,237,232,0.25)'}}>Visión</p>
            <p className="text-lg leading-relaxed text-balance" style={{color:'rgba(240,237,232,0.6)'}}>
              Creemos que una empresa debería darte libertad. No convertirse en la razón por la que nunca puedes desconectar.
            </p>
          </div>
        </div>

        {/* Divider statement */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-white/[0.06]" style={s(0.4)}>
          <p className="t-title max-w-3xl" style={{color:'rgba(240,237,232,0.35)'}}>
            La tecnología por sí sola no arregla un negocio.{' '}
            <span className="text-white">La estructura sí.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
