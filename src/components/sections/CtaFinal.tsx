'use client'
import { useInView } from '@/lib/hooks'
import { Isotipo } from '@/components/ui/Isotipo'

export function CtaFinal({ onOpen }: { onOpen: () => void }) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 })
  return (
    <section ref={ref} id="contacto" className="relative bg-grafito py-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,240,78,0.05) 0%, transparent 70%)' }} />
      <div className="section-wrapper relative z-10">
        <div className={`max-w-3xl mx-auto text-center flex flex-col items-center gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div aria-hidden><Isotipo size={64} /></div>
          <div>
            <h2 className="font-bold text-white mb-4 leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.25rem)' }}>Tu empresa debería darte libertad.</h2>
            <p className="text-lg text-white/50">No convertirse en otra fuente de caos.</p>
          </div>
          <button onClick={onOpen} className="btn-volt text-base px-8 py-4 group">
            Solicitar diagnóstico gratuito
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 20 20" aria-hidden>
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <p className="text-xs text-white/25">Sin compromiso · Respuesta en menos de 24h · luisidarraga89@gmail.com</p>
        </div>
      </div>
    </section>
  )
}
