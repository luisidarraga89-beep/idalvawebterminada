'use client'
import Image from 'next/image'
import { useInView } from '@/lib/hooks'

export function Team() {
  const [ref, inView] = useInView(0.08)
  const s = (d: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.85s ease ${d}s, transform 0.85s ease ${d}s`,
  })

  return (
    <section ref={ref} id="nosotros" className="py-28 md:py-40 overflow-hidden">
      <div className="container-ed">

        {/* Intro */}
        <div className="max-w-2xl mb-20 md:mb-28" style={s(0)}>
          <p className="t-label mb-6" style={{color:'rgba(200,240,78,0.6)'}}>Quiénes somos</p>
          <h2 className="t-headline text-white mb-6 text-balance">No somos consultores de PowerPoint.</h2>
          <p className="t-body-lg text-balance" style={{color:'rgba(240,237,232,0.5)'}}>
            Somos dos personas que han construido negocios, organizado operaciones y vivido el caos empresarial desde dentro.
          </p>
        </div>

        {/* Dual portrait — editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-20 md:mb-28">

          {/* Luis */}
          <div style={s(0.1)}>
            <div className="relative h-[460px] md:h-[560px] rounded-2xl overflow-hidden mb-8">
              <Image
                src="/luis.jpg"
                alt="Luis Idárraga — Co-fundador y CEO de idalva"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 45%, rgba(10,9,9,0.95) 100%)'}} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-semibold text-xl text-white mb-1">Luis Idárraga</p>
                <p className="t-label" style={{color:'rgba(200,240,78,0.7)'}}>Co-fundador & CEO · Estrategia comercial</p>
              </div>
            </div>
            <blockquote className="border-l-2 border-volt/25 pl-6 mb-6">
              <p className="text-base italic leading-relaxed" style={{color:'rgba(240,237,232,0.55)'}}>
                "El crecimiento de un negocio no depende de la suerte. Depende de la estructura que exista detrás."
              </p>
            </blockquote>
            <p className="text-sm leading-relaxed" style={{color:'rgba(240,237,232,0.4)'}}>
              Empezó vendiendo junto a su padre en la calle. Con los años pasó por multinacionales, startups tecnológicas y equipos comerciales en España. Su especialidad: convertir el caos comercial en un sistema de crecimiento predecible y escalable.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['CRM', 'Sales pipeline', 'Estrategia comercial', 'Go-to-market'].map(t => (
                <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/[0.07]" style={{color:'rgba(240,237,232,0.3)'}}>{t}</span>
              ))}
            </div>
          </div>

          {/* Melissa — offset vertically */}
          <div className="lg:mt-20" style={s(0.2)}>
            <div className="relative h-[460px] md:h-[560px] rounded-2xl overflow-hidden mb-8">
              <Image
                src="/melissa.jpg"
                alt="Melissa Villegas — Co-fundadora y COO de idalva"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 45%, rgba(10,9,9,0.95) 100%)'}} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-semibold text-xl text-white mb-1">Melissa Villegas</p>
                <p className="t-label" style={{color:'rgba(200,240,78,0.7)'}}>Co-fundadora & COO · Operaciones y estructura</p>
              </div>
            </div>
            <blockquote className="border-l-2 border-volt/25 pl-6 mb-6">
              <p className="text-base italic leading-relaxed" style={{color:'rgba(240,237,232,0.55)'}}>
                "El problema no es crecer. El problema es crecer sin estructura."
              </p>
            </blockquote>
            <p className="text-sm leading-relaxed" style={{color:'rgba(240,237,232,0.4)'}}>
              Economista especializada en operaciones. Entró en negocios desordenados y convirtió el caos en procesos claros durante toda su carrera. En startups tecnológicas construyó operaciones desde cero: procesos, herramientas, equipos alineados.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Operaciones', 'ERP', 'Procesos', 'Gestión de equipos'].map(t => (
                <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/[0.07]" style={{color:'rgba(240,237,232,0.3)'}}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Narrative note */}
        <div className="rule mb-12" style={s(0.4)} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={s(0.45)}>
          <p className="t-title text-white text-balance">
            Lo que separa a la mayoría,{' '}
            <span style={{color:'rgba(240,237,232,0.3)'}}>nosotros lo conectamos.</span>
          </p>
          <p className="text-base leading-relaxed self-center" style={{color:'rgba(240,237,232,0.45)'}}>
            Luis impulsa el crecimiento y la estructura comercial. Melissa organiza la operación, los procesos y el control interno. Juntos cubren el ciclo completo que necesita una empresa para escalar sin romperse.
          </p>
        </div>
      </div>
    </section>
  )
}
