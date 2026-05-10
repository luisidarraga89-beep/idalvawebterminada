'use client'
import { useInView } from '@/lib/hooks'

export function CtaFinal({ onOpen }: { onOpen: () => void }) {
  const [ref, inView] = useInView(0.2)
  const s = (d: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
  })

  return (
    <section ref={ref} id="contacto" className="py-32 md:py-48 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0"
        style={{background:'radial-gradient(ellipse 70% 50% at 50% 80%, rgba(200,240,78,0.04) 0%, transparent 70%)'}} />

      <div className="container-sm relative z-10 text-center">
        <p className="t-label mb-8" style={{...s(0), color:'rgba(200,240,78,0.5)'}}>¿Listo para empezar?</p>

        <h2 className="t-headline text-white text-balance mb-6" style={s(0.1)}>
          Tu empresa ya tiene potencial.
        </h2>
        <p className="t-headline text-balance mb-12" style={{...s(0.15), color:'rgba(240,237,232,0.3)'}}>
          Ahora necesita estructura.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={s(0.25)}>
          <button onClick={onOpen} className="btn-primary text-base px-8 py-5">
            Agendar conversación
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <p className="text-sm mt-8" style={{...s(0.35), color:'rgba(240,237,232,0.2)'}}>
          Sin compromiso · Respuesta en menos de 24h · luis@idalva.es
        </p>
      </div>
    </section>
  )
}
