'use client'
import { Isotipo } from '@/components/ui/Isotipo'

export function HeroSection({ onOpen }: { onOpen: () => void }) {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 bg-grafito overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(200,240,78,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(200,240,78,0.8) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div aria-hidden className="absolute -top-32 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(200,240,78,0.06) 0%,transparent 70%)' }} />
      <div className="section-wrapper relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6 max-w-2xl">
            <span className="eyebrow"><span className="w-5 h-px bg-volt inline-block" aria-hidden />Firma de estructura operativa</span>
            <h1 className="font-bold tracking-tight leading-[1.05] text-white" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
              Tu empresa crece.{' '}
              <span className="text-white/40">Pero tú trabajas más que nunca.</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed max-w-xl">
              Procesos desordenados, herramientas desconectadas y todo dependiendo de ti. En <strong className="text-white font-medium">idalva</strong> diseñamos la estructura, los sistemas y la operación que tu negocio necesita para crecer sin caos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={onOpen} className="btn-volt group">
                Agendar diagnóstico
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="#contacto" className="btn-ghost">Hablar con nosotros</a>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-1.5" aria-hidden>
                {['LI','MV'].map((i, k) => (
                  <div key={k} className="w-7 h-7 rounded-full bg-grafito-mid border border-white/10 flex items-center justify-center text-[9px] font-medium text-volt-dim">{i}</div>
                ))}
              </div>
              <p className="text-xs text-white/35">Luis &amp; Melissa · más de 12 años operando negocios reales</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center" aria-hidden>
            <div className="relative flex items-center justify-center w-80 h-80">
              <div className="absolute w-48 h-48 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle,#C8F04E 0%,transparent 70%)' }} />
              <Isotipo size={180} />
              {[{ a: 30, l: 'CRM' }, { a: 150, l: 'ERP' }, { a: 270, l: 'Ventas' }].map(({ a, l }) => {
                const x = 50 + Math.cos(a * Math.PI / 180) * 42
                const y = 50 + Math.sin(a * Math.PI / 180) * 42
                return (
                  <div key={l} className="absolute" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}>
                    <div className="bg-grafito-mid border border-volt/20 rounded-lg px-2.5 py-1.5 text-[10px] font-medium text-volt whitespace-nowrap">{l}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
