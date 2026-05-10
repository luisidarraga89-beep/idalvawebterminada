'use client'
const phrases = ['Escalar sin caos.','El dueño no puede ser el sistema.','Menos Excel. Más claridad.','Estructura antes que herramientas.','Crecimiento sin romperse.','Operaciones que funcionan solas.']

export function MarqueeTicker() {
  const items = [...phrases, ...phrases]
  return (
    <div aria-hidden className="relative overflow-hidden py-4 border-y border-white/[0.06] bg-grafito-mid">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-grafito-mid to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-grafito-mid to-transparent pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((p, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-8">
            <span className="text-sm font-light text-white/30 tracking-wide">{p}</span>
            <span className="w-1 h-1 rounded-full bg-volt/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
