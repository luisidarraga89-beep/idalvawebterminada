'use client'
import { useInView } from '@/lib/hooks'

const timeline = [
  { year: 'Antes', text: 'Vendimos postres. Importamos productos. Montamos una tienda online. Creamos una empresa de logística y gestión de eventos públicos.' },
  { year: 'Con el tiempo', text: 'Llegamos a startups tecnológicas, departamentos comerciales, operaciones y proyectos de digitalización. Y ahí vimos el mismo problema repetirse: mucho potencial, muy poca estructura.' },
  { year: '2025', text: 'Nos enteramos de que íbamos a ser padres. Eso cambió todo. Cuando tienes un hijo entiendes que el tiempo es limitado. Vimos que muchos emprendedores construían empresas que crecían… pero les quitaban la vida.' },
  { year: 'Hoy', text: 'Así nació idalva — de unir nuestros apellidos, Idárraga y Villegas. Tu empresa debería darte libertad. No convertirse en la razón por la que nunca puedes desconectar.' },
]

const differentiators = [
  { n: '01', title: 'Diseñamos cómo funciona una empresa', body: 'No vendemos servicios aislados. Construimos la estructura operativa y comercial que conecta las diferentes áreas del negocio.' },
  { n: '02', title: 'Ventas + Operación', body: 'Luis impulsa crecimiento y estructura comercial. Melissa organiza operación, procesos y control. Lo que normalmente funciona separado, nosotros lo trabajamos integrado.' },
  { n: '03', title: 'Partimos de la realidad', body: 'No imponemos modelos genéricos. Trabajamos sobre la realidad de cada empresa y diseñamos sistemas adaptados.' },
  { n: '04', title: 'Simplificamos', body: 'No creemos en llenar empresas de herramientas innecesarias. Creemos en procesos claros, sistemas conectados y operaciones fáciles de mantener.' },
  { n: '05', title: 'Experiencia real', body: 'Hemos vendido, operado, construido y ajustado negocios desde dentro. Sabemos cómo se vive el caos operativo en el día a día.' },
]

export function AboutFull() {
  const [ref, inView] = useInView(0.08)
  const s = (d: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.75s ease ${d}s, transform 0.75s ease ${d}s`,
  })

  return (
    <section ref={ref} id="quienes-somos" className="py-28 md:py-40 bg-[#0D0C0C]">
      <div className="container-ed">

        {/* ── QUIÉNES SOMOS ─────────────────────────── */}
        <div className="mb-20 md:mb-28" style={s(0)}>
          <p className="t-label mb-6" style={{color:'rgba(200,240,78,0.6)'}}>¿Quiénes somos?</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="t-headline text-white mb-6 text-balance">
                Ayudamos a las empresas a organizar su operación y crecer sin caos.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-base leading-relaxed" style={{color:'rgba(240,237,232,0.5)'}}>
                Diseñamos la estructura, los procesos y los sistemas que un negocio necesita para funcionar con claridad, control y dirección.
              </p>
              <p className="text-base leading-relaxed" style={{color:'rgba(240,237,232,0.5)'}}>
                Porque el problema de muchas empresas no es vender más. Es que cada vez que crecen: el caos aumenta, los procesos se rompen, el equipo se desordena y el dueño termina trabajando más que nunca.
              </p>
              <p className="text-base leading-relaxed font-medium" style={{color:'rgba(240,237,232,0.7)'}}>
                Ahí es donde entramos nosotros.
              </p>
            </div>
          </div>

          {/* 4 pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {['Organizamos operaciones.', 'Conectamos herramientas.', 'Estructuramos procesos.', 'Profesionalizamos negocios.'].map((p, i) => (
              <div key={i} className="p-5 rounded-xl border border-white/[0.07] bg-[#111010]">
                <p className="text-sm font-medium text-white">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-xl border border-volt/10 bg-volt/[0.03]">
            <p className="text-base font-medium" style={{color:'rgba(240,237,232,0.65)'}}>
              La tecnología por sí sola no arregla un negocio.{' '}
              <span className="text-white">La estructura sí.</span>
            </p>
          </div>
        </div>

        <div className="rule mb-20" />

        {/* ── MISIÓN Y VISIÓN ───────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 md:mb-28" style={s(0.1)}>
          <div>
            <p className="t-label mb-5" style={{color:'rgba(240,237,232,0.25)'}}>Misión</p>
            <p className="text-lg leading-relaxed" style={{color:'rgba(240,237,232,0.6)'}}>
              Ayudar a empresas y fundadores a construir negocios organizados, rentables y escalables, implementando estructura, procesos y sistemas claros que reduzcan el caos operativo y devuelvan el control.
            </p>
          </div>
          <div>
            <p className="t-label mb-5" style={{color:'rgba(240,237,232,0.25)'}}>Visión</p>
            <p className="text-lg leading-relaxed" style={{color:'rgba(240,237,232,0.6)'}}>
              Convertirnos en el equipo de referencia para empresas que necesitan profesionalizarse, ordenar su operación y crecer de forma sostenible sin depender constantemente del fundador.
            </p>
          </div>
        </div>

        <div className="rule mb-20" />

        {/* ── HISTORIA EN LÍNEA DE TIEMPO ──────────── */}
        <div style={s(0.15)}>
          <p className="t-label mb-10" style={{color:'rgba(200,240,78,0.6)'}}>Nuestra historia</p>
          <div className="mb-8">
            <h3 className="t-title text-white mb-4 text-balance">idalva no empezó en una oficina.</h3>
            <p className="text-base" style={{color:'rgba(240,237,232,0.45)'}}>
              Empezó muchos años antes, haciendo lo que tocaba para salir adelante.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px hidden md:block" style={{background:'linear-gradient(to bottom, rgba(200,240,78,0.3), rgba(200,240,78,0.05))'}} />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="md:pl-10 pb-12 relative">
                  {/* Dot */}
                  <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full hidden md:block"
                    style={{background: i === 0 ? 'rgba(200,240,78,0.4)' : i === 3 ? '#C8F04E' : 'rgba(200,240,78,0.25)'}} />
                  <p className="t-label mb-3" style={{color: i === 3 ? 'rgba(200,240,78,0.8)' : 'rgba(240,237,232,0.25)'}}>
                    {item.year}
                  </p>
                  <p className="text-base leading-relaxed max-w-2xl" style={{color:'rgba(240,237,232,0.55)'}}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule mb-20" />

        {/* ── PROPUESTA DE VALOR ───────────────────── */}
        <div style={s(0.2)}>
          <p className="t-label mb-8" style={{color:'rgba(200,240,78,0.6)'}}>Propuesta de valor</p>
          <h3 className="t-title text-white mb-10 text-balance max-w-2xl">
            Convertimos negocios desordenados en empresas organizadas, escalables y preparadas para crecer.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              'No te damos más herramientas. Te damos estructura.',
              'No te damos más trabajo. Te ayudamos a quitarlo.',
              'No te damos teoría. Diseñamos sistemas que funcionan.',
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/[0.07] bg-[#111010]">
                <p className="text-base font-medium text-white">{t}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Recuperar el control de tu operación',
              'Delegar con tranquilidad y sin miedo',
              'Ordenar tu empresa de verdad',
              'Volver a enfocarte en dirigir, no en apagar fuegos',
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:'rgba(200,240,78,0.5)'}} />
                <p className="text-sm" style={{color:'rgba(240,237,232,0.55)'}}>{t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule mb-20" />

        {/* ── QUÉ NOS DIFERENCIA ───────────────────── */}
        <div style={s(0.25)}>
          <p className="t-label mb-4" style={{color:'rgba(200,240,78,0.6)'}}>Qué nos diferencia</p>
          <h3 className="t-title text-white mb-12 text-balance">
            Lo que la mayoría ofrece es consejo.{' '}
            <span style={{color:'rgba(240,237,232,0.3)'}}>Lo que nosotros entregamos es sistema.</span>
          </h3>
          <div className="divide-y divide-white/[0.06]">
            {differentiators.map((d, i) => (
              <div key={i} className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1.4fr] gap-4 md:gap-10 py-8 transition-all duration-300">
                <span className="text-4xl font-bold tracking-tighter" style={{color:'rgba(240,237,232,0.1)'}}>
                  {d.n}
                </span>
                <p className="text-lg font-semibold text-white">{d.title}</p>
                <p className="text-base leading-relaxed" style={{color:'rgba(240,237,232,0.45)'}}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
