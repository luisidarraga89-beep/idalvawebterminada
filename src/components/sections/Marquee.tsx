'use client'

const phrases = ['Escalar sin caos','Operar sin límites','Estructura antes que herramientas','El dueño no puede ser el sistema','Menos Excel. Más claridad','Crecimiento sin romperse']

export function Marquee() {
  const items = [...phrases, ...phrases]
  return (
    <div aria-hidden className="py-5 border-y border-white/[0.05] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((p, i) => (
          <span key={i} className="inline-flex items-center mx-10 gap-10">
            <span className="text-sm font-light tracking-wide" style={{color:'rgba(240,237,232,0.2)'}}>{p}</span>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{background:'rgba(200,240,78,0.25)'}} />
          </span>
        ))}
      </div>
    </div>
  )
}
