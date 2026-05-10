'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function Hero({ onOpen }: { onOpen: () => void }) {
  const headRef = useRef<HTMLHeadingElement>(null)
  const subRef  = useRef<HTMLParagraphElement>(null)
  const ctaRef  = useRef<HTMLDivElement>(null)
  const imgRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headRef.current, subRef.current, ctaRef.current, imgRef.current]
    els.forEach((el, i) => {
      if (!el) return
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, 200 + i * 150)
    })
  }, [])

  const fadeStyle = { opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden" aria-label="Presentación idalva">
      {/* Background gradient */}
      <div aria-hidden className="absolute inset-0 bg-[#0A0909]">
        <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,240,78,0.03) 0%, transparent 65%)'}} />
      </div>

      {/* Main content */}
      <div className="container-ed relative z-10 flex flex-col justify-center flex-1 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <p className="t-label mb-8 md:mb-12" style={{color:'rgba(200,240,78,0.7)'}}>Estructura operativa · Barcelona</p>

            <h1 ref={headRef} className="t-display text-white text-balance mb-8" style={fadeStyle}>
              Tu empresa crece.{' '}
              <span style={{color:'rgba(240,237,232,0.35)'}}>Pero tú trabajas más que nunca.</span>
            </h1>

            <p ref={subRef} className="t-body-lg max-w-lg mb-10 md:mb-12 text-balance" style={{...fadeStyle, color:'rgba(240,237,232,0.5)'}}>
              Diseñamos la estructura operativa que tu negocio necesita para crecer con claridad, control y dirección.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4" style={fadeStyle}>
              <button onClick={onOpen} className="btn-primary">
                Hablar con nosotros
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <a href="#sistema" className="btn-outline">Ver cómo trabajamos</a>
            </div>
          </div>

          {/* Photo editorial — dual portrait */}
          <div ref={imgRef} className="relative hidden lg:block" style={fadeStyle}>
            <div className="relative h-[580px] w-full">
              {/* Melissa — background, larger */}
              <div className="absolute right-0 top-0 w-[62%] h-[88%] rounded-2xl overflow-hidden">
                <Image
                  src="/melissa.jpg"
                  alt="Melissa Villegas — Co-fundadora & COO de idalva"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1200px) 40vw, 320px"
                />
                <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 50%, rgba(10,9,9,0.8) 100%)'}} />
              </div>
              {/* Luis — foreground, offset */}
              <div className="absolute left-0 bottom-0 w-[55%] h-[78%] rounded-2xl overflow-hidden border border-white/[0.08]">
                <Image
                  src="/luis.jpg"
                  alt="Luis Idárraga — Co-fundador & CEO de idalva"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1200px) 35vw, 280px"
                />
                <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 50%, rgba(10,9,9,0.8) 100%)'}} />
              </div>
              {/* Tag */}
              <div className="absolute bottom-6 right-6 bg-[#111010]/90 backdrop-blur-sm border border-white/[0.08] rounded-xl px-4 py-3">
                <p className="text-xs font-medium text-white">Luis & Melissa</p>
                <p className="text-xs mt-0.5" style={{color:'rgba(240,237,232,0.4)'}}>Co-fundadores · idalva</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}
