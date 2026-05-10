import { cn } from '@/lib/utils'

interface IsotipoProps {
  size?: number
  className?: string
  animated?: boolean
}

/**
 * idalva — El Nodo Estructural
 * Isotipo SVG. Apex Volt, nodos base blancos, aristas dim.
 */
export function Isotipo({ size = 32, className, animated = false }: IsotipoProps) {
  const apex   = '#C8F04E'
  const edges  = 'rgba(240,237,232,0.28)'
  const baseD  = 'rgba(240,237,232,0.14)'
  const inner  = 'rgba(200,240,78,0.52)'
  const inner2 = 'rgba(200,240,78,0.28)'
  const nodes  = 'rgba(240,237,232,0.55)'
  const mid    = 'rgba(200,240,78,0.70)'
  const sw     = Math.max(0.6, size * 0.022)

  return (
    <svg
      width={size} height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('select-none flex-shrink-0', className)}
      aria-hidden
    >
      <line x1="50" y1="12" x2="10" y2="82" stroke={edges} strokeWidth={sw} strokeLinecap="round"/>
      <line x1="50" y1="12" x2="90" y2="82" stroke={edges} strokeWidth={sw} strokeLinecap="round"/>
      <line x1="10" y1="82" x2="90" y2="82" stroke={baseD} strokeWidth={sw*0.55} strokeLinecap="round" strokeDasharray="6 4"/>
      <line x1="50" y1="12" x2="50" y2="50" stroke={inner}  strokeWidth={sw*0.7}  strokeLinecap="round"/>
      <line x1="50" y1="50" x2="10" y2="82" stroke={inner2} strokeWidth={sw*0.55} strokeLinecap="round"/>
      <line x1="50" y1="50" x2="90" y2="82" stroke={inner2} strokeWidth={sw*0.55} strokeLinecap="round"/>
      <circle cx="50" cy="12" r="5.5" fill={apex} className={animated ? 'animate-[pulse_2s_ease-in-out_infinite]' : ''}/>
      <circle cx="10" cy="82" r="3.5" fill={nodes}/>
      <circle cx="90" cy="82" r="3.5" fill={nodes}/>
      <circle cx="50" cy="50" r="2.2" fill={mid}/>
    </svg>
  )
}
