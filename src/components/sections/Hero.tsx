'use client'
import { Isotipo } from '@/components/ui/Isotipo'

export function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0909]">

      {/* Video background — cinematic */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover"
          style={{opacity: 0.35}}
          aria-hidden
        >
          <source src="/hero-video-1.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, rgba(10,9,9,0.55) 0%, rgba(10,9,9,0.3) 40%, rgba(10,9,9,0.75) 100%)'}} />
        {/* Left vignette so text is always legible */}
        <div className="absolute inset-0" style={{background:'linear-gradient(to right, rgba(10,9,9,0.9) 0%, rgba(10,9,9,0.5) 50%, transparent 100%)'}} />
      </div>

      {/* Decorative isotipo */}
      <div aria-hidden className="absolute right-[6%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block z-10">
        <Isotipo size={480} />
      </div>

      {/* Content */}
      <div className="container-ed relative z-20 flex flex-col justify-center flex-1 pt-28 pb-16 md:pt-40 md:pb-28">
        <div className="max-w-3xl flex flex-col gap-7">

          <p className="t-label" style={{color:'rgba(200,240,78,0.8)'}}>
            Escalar sin caos. Operar sin límites.
          </p>

          <h1 className="t-display text-white text-balance">
            Tu empresa crece.{' '}
            <br className="hidden md:block" />
            <span style={{color:'rgba(240,237,232,0.35)'}}>Pero tú trabajas más que nunca.</span>
          </h1>

          <p className="t-body-lg max-w-xl text-balance" style={{color:'rgba(240,237,232,0.6)'}}>
            Diseñamos la estructura operativa que tu negocio necesita para crecer con claridad, control y dirección.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button onClick={onOpen} className="btn-primary">
              Hablar con nosotros
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="#sistema" className="btn-outline">Ver cómo trabajamos</a>
          </div>

          {/* Founders tag */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[9px] font-semibold text-volt">LI</div>
              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[9px] font-semibold text-volt">MV</div>
            </div>
            <p className="text-xs" style={{color:'rgba(240,237,232,0.35)'}}>
              Luis Idárraga & Melissa Villegas · Co-fundadores
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" aria-hidden>
        <div className="w-px h-12 bg-gradient-to-b from-volt/30 to-transparent" />
      </div>
    </section>
  )
}
