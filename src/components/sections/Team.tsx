'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useInView } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const members = [
  {
    id: 'luis',
    name: 'Luis Idárraga',
    role: 'Co-fundador & CEO',
    focus: 'Estrategia comercial y crecimiento',
    quote: 'El crecimiento de un negocio no depende de la suerte. Depende de la estructura que exista detrás.',
    bio: 'Empezó vendiendo junto a su padre en la calle. Con los años pasó por multinacionales, startups tecnológicas y equipos comerciales en España, liderando equipos y ayudando a empresas a estructurar sus sistemas de crecimiento. Su especialidad: detectar qué está frenando las ventas de un negocio y construir procesos comerciales claros, medibles y escalables.',
    skills: ['CRM', 'Sales pipeline', 'Estrategia comercial', 'Go-to-market'],
    photo: '/luis.jpg',
    photoAlt: 'Luis Idárraga — Co-fundador y CEO de idalva',
  },
  {
    id: 'melissa',
    name: 'Melissa Villegas',
    role: 'Co-fundadora & COO',
    focus: 'Operaciones, procesos y control',
    quote: 'El problema no es crecer. El problema es crecer sin estructura.',
    bio: 'Economista especializada en operaciones. Desde el inicio de su carrera tuvo una habilidad muy concreta: entrar en negocios desordenados y convertir el caos en procesos claros. En startups tecnológicas construyó operaciones desde cero: documentando procesos, definiendo estructura interna e implementando herramientas. Entendió algo clave: las empresas no fallan por falta de talento. Fallan porque no tienen un sistema claro para operar.',
    skills: ['Operaciones', 'ERP', 'Procesos', 'Gestión de equipos'],
    photo: '/melissa.jpg',
    photoAlt: 'Melissa Villegas — Co-fundadora y COO de idalva',
  },
]

export function Team() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView(0.08)
  const s = (d: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
  })

  return (
    <section ref={ref} id="nosotros" className="py-28 md:py-40 overflow-hidden">
      <div className="container-ed">

        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20" style={s(0)}>
          <p className="t-label mb-5" style={{color:'rgba(200,240,78,0.6)'}}>El equipo</p>
          <h2 className="t-headline text-white mb-6 text-balance">
            No somos consultores de PowerPoint.
          </h2>
          <p className="t-body-lg text-balance" style={{color:'rgba(240,237,232,0.5)'}}>
            Somos dos personas que han construido negocios, organizado operaciones y vivido el caos empresarial desde dentro.
          </p>
        </div>

        {/* Interactive portraits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">

          {/* Left — photo selector */}
          <div style={s(0.1)}>
            {/* Selector tabs */}
            <div className="flex gap-3 mb-6">
              {members.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    'text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300',
                    active === i
                      ? 'bg-volt text-black'
                      : 'border border-white/10 text-white/40 hover:text-white hover:border-white/20'
                  )}
                >
                  {m.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Photo container — fixed height, photos switch */}
            <div className="relative h-[500px] md:h-[580px] rounded-2xl overflow-hidden">
              {members.map((m, i) => (
                <div
                  key={m.id}
                  className="absolute inset-0 transition-all duration-700"
                  style={{
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? 'scale(1)' : 'scale(1.03)',
                  }}
                >
                  <Image
                    src={m.photo}
                    alt={m.photoAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 45%, rgba(10,9,9,0.97) 100%)'}} />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="font-semibold text-xl text-white mb-1">{m.name}</p>
                    <p className="t-label" style={{color:'rgba(200,240,78,0.75)'}}>{m.role}</p>
                    <p className="text-sm mt-1.5" style={{color:'rgba(240,237,232,0.45)'}}>{m.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio panel */}
          <div className="flex flex-col justify-center relative" style={s(0.2)}>
            {members.map((m, i) => (
              <div
                key={m.id}
                className="transition-all duration-500"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? 'translateY(0)' : 'translateY(12px)',
                  position: active === i ? 'relative' : 'absolute',
                  pointerEvents: active === i ? 'auto' : 'none',
                  width: '100%',
                }}
              >
                <blockquote className="border-l-2 pl-6 mb-7" style={{borderColor:'rgba(200,240,78,0.3)'}}>
                  <p className="text-lg italic leading-relaxed" style={{color:'rgba(240,237,232,0.65)'}}>
                    &ldquo;{m.quote}&rdquo;
                  </p>
                </blockquote>
                <p className="text-base leading-relaxed mb-8" style={{color:'rgba(240,237,232,0.45)'}}>
                  {m.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {m.skills.map(skill => (
                    <span key={skill} className="text-xs px-3 py-1.5 rounded-full border border-white/[0.08]"
                      style={{color:'rgba(240,237,232,0.35)'}}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/[0.06]">
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">+12</p>
                    <p className="text-xs" style={{color:'rgba(240,237,232,0.35)'}}>años de experiencia real</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">{i === 0 ? 'Ventas' : 'Ops'}</p>
                    <p className="text-xs" style={{color:'rgba(240,237,232,0.35)'}}>{i === 0 ? 'Crecimiento comercial' : 'Estructura operativa'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="rule mb-12" style={s(0.4)} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" style={s(0.5)}>
          <p className="t-title text-white text-balance">
            Lo que separa a la mayoría,{' '}
            <span style={{color:'rgba(240,237,232,0.28)'}}>nosotros lo conectamos.</span>
          </p>
          <p className="text-base leading-relaxed self-center" style={{color:'rgba(240,237,232,0.4)'}}>
            Luis impulsa el crecimiento y la estructura comercial. Melissa organiza la operación, los procesos y el control interno. Juntos cubren el ciclo completo que necesita una empresa para escalar sin romperse.
          </p>
        </div>
      </div>
    </section>
  )
}
