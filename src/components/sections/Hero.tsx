'use client'
import Image from 'next/image'
import { Isotipo } from '@/components/ui/Isotipo'

export function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0909]">

      <div aria-hidden className="absolute right-[8%] top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
        <Isotipo size={520} />
      </div>

      <div className="container-ed relative z-10 flex flex-col justify-center flex-1 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          <div className="flex flex-col gap-8">
            <p className="t-label" style={{color:'rgba(200,240,78,0.65)'}}>
              Estructura operativa · España
            </p>
            <h1 className="t-display text-white text-balance">
              Tu empresa crece.{' '}
              <span style={{color:'rgba(240,237,232,0.3)'}}>Pero tú trabajas más que nunca.</span>
            </h1>
            <p className="t-body-lg max-w-lg text-balance" style={{color:'rgba(240,237,232,0.5)'}}>
              Diseñamos la estructura operativa que tu negocio necesita para crecer con claridad, control y dirección.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onOpen} className="btn-primary">
                Hablar con nosotros
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="#sistema" className="btn-outline">Ver cómo trabajamos</a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-[600px] w-full">
              <div className="absolute right-0 top-0 w-[60%] h-[90%] rounded-2xl overflow-hidden">
                <Image src="/melissa2.jpg" alt="Melissa Villegas — Co-fundadora y COO de idalva"
                  fill className="object-cover object-top" priority sizes="30vw" />
                <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 55%, rgba(10,9,9,0.92) 100%)'}} />
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-medium" style={{color:'rgba(240,237,232,0.6)'}}>Melissa Villegas</p>
                  <p className="text-[10px] mt-0.5" style={{color:'rgba(200,240,78,0.6)'}}>COO · Operaciones</p>
                </div>
              </div>
              <div className="absolute left-0 bottom-0 w-[58%] h-[82%] rounded-2xl overflow-hidden"
                style={{border:'1px solid rgba(240,237,232,0.06)', boxShadow:'0 24px 60px rgba(0,0,0,0.6)'}}>
                <Image src="/luis2.jpg" alt="Luis Idárraga — Co-fundador y CEO de idalva"
                  fill className="object-cover object-top" priority sizes="28vw" />
                <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 55%, rgba(10,9,9,0.92) 100%)'}} />
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-medium" style={{color:'rgba(240,237,232,0.6)'}}>Luis Idárraga</p>
                  <p className="text-[10px] mt-0.5" style={{color:'rgba(200,240,78,0.6)'}}>CEO · Estrategia</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 rounded-xl px-4 py-2.5"
                style={{background:'rgba(13,12,12,0.9)', border:'1px solid rgba(240,237,232,0.07)'}}>
                <p className="text-xs font-medium text-white">idalva</p>
                <p className="text-[10px] mt-0.5" style={{color:'rgba(240,237,232,0.35)'}}>Luis & Melissa · Co-fundadores</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
