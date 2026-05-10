import { cn } from '@/lib/utils'

export function Isotipo({ size = 48, onDark = true, className }: { size?: number; onDark?: boolean; className?: string }) {
  const apex   = '#C8F04E'
  const edges  = onDark ? 'rgba(245,244,240,0.28)' : 'rgba(10,10,11,0.28)'
  const baseD  = onDark ? 'rgba(245,244,240,0.14)' : 'rgba(10,10,11,0.14)'
  const inner  = onDark ? 'rgba(200,240,78,0.52)'  : 'rgba(10,10,11,0.50)'
  const inner2 = onDark ? 'rgba(200,240,78,0.28)'  : 'rgba(10,10,11,0.28)'
  const nodes  = onDark ? 'rgba(245,244,240,0.55)' : 'rgba(10,10,11,0.45)'
  const mid    = onDark ? 'rgba(200,240,78,0.70)'  : 'rgba(10,10,11,0.62)'
  const sw     = Math.max(0.6, size * 0.022)
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none"
      className={cn('select-none', className)} aria-label="idalva" role="img">
      <line x1="50" y1="12" x2="10" y2="82" stroke={edges} strokeWidth={sw} strokeLinecap="round"/>
      <line x1="50" y1="12" x2="90" y2="82" stroke={edges} strokeWidth={sw} strokeLinecap="round"/>
      <line x1="10" y1="82" x2="90" y2="82" stroke={baseD} strokeWidth={sw*.55} strokeLinecap="round" strokeDasharray="6 4"/>
      <line x1="50" y1="12" x2="50" y2="50" stroke={inner}  strokeWidth={sw*.7}  strokeLinecap="round"/>
      <line x1="50" y1="50" x2="10" y2="82" stroke={inner2} strokeWidth={sw*.55} strokeLinecap="round"/>
      <line x1="50" y1="50" x2="90" y2="82" stroke={inner2} strokeWidth={sw*.55} strokeLinecap="round"/>
      <circle cx="50" cy="12" r="5.5" fill={apex} className="animate-pulse-volt"/>
      <circle cx="10" cy="82" r="3.5" fill={nodes}/>
      <circle cx="90" cy="82" r="3.5" fill={nodes}/>
      <circle cx="50" cy="50" r="2.2" fill={mid} className="animate-pulse-volt" style={{ animationDelay: '1.2s' }}/>
    </svg>
  )
}

export function Wordmark({ size = 'md', onDark = true }: { size?: 'sm'|'md'|'lg'; onDark?: boolean }) {
  const sizes = { sm: 'text-xl', md: 'text-2xl', lg: 'text-4xl' }
  return (
    <span className={`font-bold tracking-tight leading-none ${sizes[size]}`} aria-label="idalva">
      <span className={onDark ? 'text-white' : 'text-grafito'}>idal</span>
      <span className="text-volt-dim">va</span>
    </span>
  )
}

export function Lockup({ isoSize = 32, wmSize = 'md' as 'sm'|'md'|'lg', onDark = true, className }: {
  isoSize?: number; wmSize?: 'sm'|'md'|'lg'; onDark?: boolean; className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Isotipo size={isoSize} onDark={onDark} />
      <div className="w-px self-stretch opacity-20" style={{ background: onDark ? '#C8F04E' : '#0A0A0B' }} aria-hidden />
      <Wordmark size={wmSize} onDark={onDark} />
    </div>
  )
}
