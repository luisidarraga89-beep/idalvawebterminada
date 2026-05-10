'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Isotipo } from '@/components/ui/Isotipo'

interface DropdownItem { label: string; href: string; desc?: string }

const NAV_ITEMS: {
  label: string
  href?: string
  dropdown?: DropdownItem[]
}[] = [
  {
    label: 'Sistema',
    dropdown: [
      { label: 'Filosofía', href: '#filosofia', desc: 'Misión, visión y slogan' },
      { label: 'El Problema', href: '#problema', desc: 'Por qué muchas empresas no escalan' },
      { label: 'Arquitectura idalva™', href: '#sistema', desc: 'Nuestro método en 4 fases' },
    ],
  },
  {
    label: 'Nosotros',
    dropdown: [
      { label: '¿Quiénes somos?', href: '#nosotros', desc: 'Historia y propósito de idalva' },
      { label: 'Luis Idárraga',    href: '#nosotros', desc: 'Co-fundador & CEO' },
      { label: 'Melissa Villegas', href: '#nosotros', desc: 'Co-fundadora & COO' },
      { label: 'Valores',          href: '#valores',  desc: 'Las reglas bajo las que trabajamos' },
    ],
  },
  { label: 'Casos de éxito', href: '#casos' },
  { label: 'Contáctanos',    href: '#contacto' },
]

function NavDropdown({ items, visible }: { items: DropdownItem[]; visible: boolean }) {
  return (
    <div className={cn(
      'absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 py-2',
      'bg-[#111010] border border-white/[0.08] rounded-xl shadow-2xl',
      'transition-all duration-200 origin-top',
      visible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
    )}>
      {/* Arrow */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#111010] border-l border-t border-white/[0.08] rotate-45" />
      {items.map((item, i) => (
        <Link key={i} href={item.href}
          className="flex flex-col gap-0.5 px-4 py-3 hover:bg-white/[0.04] transition-colors duration-150 group">
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{item.label}</span>
          {item.desc && <span className="text-xs" style={{color:'rgba(240,237,232,0.35)'}}>{item.desc}</span>}
        </Link>
      ))}
    </div>
  )
}

export function Navbar({ onOpen }: { onOpen: () => void }) {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDD, setActiveDD]     = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleMouseEnter = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setActiveDD(i)
  }
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setActiveDD(null), 120)
  }

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'bg-[#0A0909]/92 backdrop-blur-xl border-b border-white/[0.05]' : 'bg-transparent'
    )}>
      <div className="container-ed flex items-center justify-between h-16 md:h-20">

        {/* Logo: isotipo + wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="idalva">
          <Isotipo size={28} className="opacity-90 group-hover:opacity-100 transition-opacity" />
          <span className="font-semibold tracking-tight text-lg leading-none">
            <span className="text-white">idal</span><span className="text-volt">va</span>
          </span>
        </Link>

        {/* Desktop nav — Metalab hover style */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {NAV_ITEMS.map((item, i) => (
            <div key={i} className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}>
              {item.href && !item.dropdown ? (
                <Link href={item.href}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    'text-white/45 hover:text-white hover:bg-white/[0.06]',
                    'group flex items-center gap-1'
                  )}>
                  {item.label === 'Contáctanos' ? (
                    <span className="text-volt/80 hover:text-volt">{item.label}</span>
                  ) : item.label}
                </Link>
              ) : (
                <button
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    'flex items-center gap-1.5',
                    activeDD === i ? 'text-white bg-white/[0.06]' : 'text-white/45 hover:text-white hover:bg-white/[0.04]'
                  )}>
                  {item.label}
                  <svg className={cn('w-3 h-3 transition-transform duration-200', activeDD === i && 'rotate-180')}
                    fill="none" viewBox="0 0 12 12" aria-hidden>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
              {item.dropdown && (
                <NavDropdown items={item.dropdown} visible={activeDD === i} />
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button onClick={onOpen} className="btn-primary text-sm py-2.5 px-5">
            Hablar con nosotros
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 -mr-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
          <div className="flex flex-col gap-[5px]">
            <span className={cn('w-5 h-px bg-white/60 transition-all duration-200', mobileOpen && 'rotate-45 translate-y-[6px]')} />
            <span className={cn('w-5 h-px bg-white/60 transition-all duration-200', mobileOpen && 'opacity-0')} />
            <span className={cn('w-5 h-px bg-white/60 transition-all duration-200', mobileOpen && '-rotate-45 -translate-y-[6px]')} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D0C0C] border-t border-white/[0.06]">
          <div className="container-ed py-6 space-y-1">
            {NAV_ITEMS.map((item, i) => (
              <div key={i}>
                {item.dropdown ? (
                  <>
                    <p className="text-xs font-medium px-3 py-2 mt-3 mb-1" style={{color:'rgba(240,237,232,0.3)'}}>{item.label}</p>
                    {item.dropdown.map((sub, j) => (
                      <Link key={j} href={sub.href} onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/[0.04] transition-all">
                        {sub.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link href={item.href!} onClick={() => setMobileOpen(false)}
                    className={cn('block px-3 py-2.5 rounded-lg text-sm transition-all',
                      item.label === 'Contáctanos' ? 'text-volt/80 hover:text-volt' : 'text-white/60 hover:text-white hover:bg-white/[0.04]')}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <button onClick={() => { setMobileOpen(false); onOpen() }} className="btn-primary w-full justify-center">
                Hablar con nosotros
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
