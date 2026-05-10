'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Isotipo } from '@/components/ui/Isotipo'

export function Hero({ onOpen }: { onOpen: () => void }) {
  const refs = [useRef<HTMLElement>(null), useRef<HTMLHeadingElement>(null), useRef<HTMLParagraphElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]

  useEffect(() => {
    refs.forEach((r, i) => {
      if (!r.current) return
      setTimeout(() => {
        if (r.current) { r.current.style.opacity = '1'; r.current.style.transform = 'translateY(0)' }
      }, 150 + i * 130)
    })
  }, [])

  const fade = { opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 bg-[#0A0909]">
        <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 70% 50% at 65% 40%, rgba(200,240,78,0.025) 0%, transparent 65%)'}} />
      </div>

      {/* Decorative isotipo — large background element */}
      <div aria-hidden className="absolute right-[8%] top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
        <Isotipo size={520} />
      </div>

      <div className="container-ed relative z-10 flex flex-col justify-center flex-1 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <p ref={refs[0] as any} className="t-label mb-8 md:mb-10" style={{...fade, color:'rgba(200,240,78,0.65)'}}>
              Estructura operativa · España
            </p>

            <h1 ref={refs[1]} className="t-display text-white text-balance mb-8" style={fade}>
              Tu empresa crece.{' '}
              <span style={{color:'rgba(240,237,232,0.3)'}}>Pero tú trabajas más que nunca.</span>
            </h1>

            <p ref={refs[2]} className="t-body-lg max-w-lg mb-10 text-balance" style={{...fade, color:'rgba(240,237,232,0.5)'}}>
              Diseñamos la estructura operativa que tu negocio necesita para crecer con claridad, control y dirección.
            </p>

            <div ref={refs[3]} className="flex flex-col sm:flex-row gap-4" style={fade}>
              <button onClick={onOpen} className="btn-primary">
                Hablar con nosotros
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="#sistema" className="btn-outline">Ver cómo trabajamos</a>
            </div>
          </div>

          {/* Right — editorial dual portrait */}
          <div ref={refs[4]} className="relative hidden lg:block" style={fade}>
            <div className="relative h-[600px] w-full">
              {/* Melissa — back right, taller */}
              <div className="absolute right-0 top-0 w-[60%] h-[90%] rounded-2xl overflow-hidden">
                <Image
                  src="/melissa2.jpg"
                  alt="Melissa Villegas — Co-fundadora y COO de idalva"
                  fill className="object-cover object-top" priority
                  sizes="30vw"
                />
                <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 55%, rgba(10,9,9,0.92) 100%)'}} />
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-medium text-white/60">Melissa Villegas</p>
                  <p className="text-[10px] mt-0.5" style={{color:'rgba(200,240,78,0.6)'}}>COO · Operaciones</p>
                </div>
              </div>
              {/* Luis — front left, offset down */}
              <div className="absolute left-0 bottom-0 w-[58%] h-[82%] rounded-2xl overflow-hidden border border-white/[0.06]" style={{boxShadow:'0 24px 60px rgba(0,0,0,0.6)'}}>
                <Image
                  src="/luis2.jpg"
                  alt="Luis Idárraga — Co-fundador y CEO de idalva"
                  fill className="object-cover object-top" priority
                  sizes="28vw"
                />
                <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 55%, rgba(10,9,9,0.92) 100%)'}} />
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-medium text-white/60">Luis Idárraga</p>
                  <p className="text-[10px] mt-0.5" style={{color:'rgba(200,240,78,0.6)'}}>CEO · Estrategia</p>
                </div>
              </div>
              {/* Tag */}
              <div className="absolute top-4 right-4 bg-[#0D0C0C]/90 backdrop-blur-sm border border-white/[0.07] rounded-xl px-4 py-2.5">
                <p className="text-xs font-medium text-white">idalva</p>
                <p className="text-[10px] mt-0.5" style={{color:'rgba(240,237,232,0.35)'}}>Luis & Melissa · Co-fundadores</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden>
        <div className="w-px h-10 bg-gradient-to-b from-white/15 to-transparent" />
      </div>
    </section>
  )
}
