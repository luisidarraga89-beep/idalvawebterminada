'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Lockup } from '@/components/ui/Isotipo'
import { cn } from '@/lib/utils'

export function Navbar({ onOpen }: { onOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Servicios',  href: '#servicios' },
    { label: 'Método',     href: '#metodo'    },
    { label: 'Nosotros',   href: '#equipo'    },
    { label: 'HORECA',     href: '#horeca'    },
  ]

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-16 transition-all duration-300',
      scrolled ? 'py-3 bg-grafito/90 backdrop-blur-lg border-b border-white/[0.06]' : 'py-5 bg-transparent')}>
      <nav className="mx-auto max-w-6xl flex items-center justify-between" aria-label="Navegación principal">
        <Link href="/" aria-label="idalva — inicio"><Lockup isoSize={28} wmSize="sm" /></Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex">
          <button onClick={onOpen} className="btn-volt text-sm px-4 py-2">Agendar diagnóstico</button>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
          <span className={cn('w-6 h-0.5 bg-white/70 transition-all', mobileOpen && 'rotate-45 translate-y-2')} />
          <span className={cn('w-6 h-0.5 bg-white/70 transition-all', mobileOpen && 'opacity-0')} />
          <span className={cn('w-6 h-0.5 bg-white/70 transition-all', mobileOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden bg-grafito-mid border-t border-white/[0.06] mt-3 rounded-b-xl overflow-hidden">
          <ul className="flex flex-col p-4 gap-2">
            {links.map(l => (
              <li key={l.href}><Link href={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 text-sm">{l.label}</Link></li>
            ))}
            <li className="mt-2"><button onClick={() => { setMobileOpen(false); onOpen() }} className="btn-volt w-full justify-center text-sm">Agendar diagnóstico</button></li>
          </ul>
        </div>
      )}
    </header>
  )
}
