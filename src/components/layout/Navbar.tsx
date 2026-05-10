'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Navbar({ onOpen }: { onOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'bg-[#0A0909]/90 backdrop-blur-xl border-b border-white/[0.05]' : 'bg-transparent')}>
      <div className="container-ed flex items-center justify-between h-16 md:h-20">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-1" aria-label="idalva">
          <span className="font-semibold tracking-tight text-lg text-white">idal</span>
          <span className="font-semibold tracking-tight text-lg text-volt">va</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Navegación">
          {[['Sistema', '#sistema'], ['Nosotros', '#nosotros'], ['Valores', '#valores']].map(([l, h]) => (
            <Link key={h} href={h} className="text-sm text-white/45 hover:text-white transition-colors duration-200">{l}</Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <button onClick={onOpen} className="btn-primary text-sm py-2.5 px-6">
            Hablar con nosotros
          </button>
        </div>

        {/* Mobile */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
          <div className="flex flex-col gap-1.5">
            <span className={cn('w-5 h-px bg-white/60 transition-all', mobileOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('w-5 h-px bg-white/60 transition-all', mobileOpen && 'opacity-0')} />
            <span className={cn('w-5 h-px bg-white/60 transition-all', mobileOpen && '-rotate-45 -translate-y-2')} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#111010] border-t border-white/[0.06] px-6 py-8">
          <nav className="flex flex-col gap-6 mb-8">
            {[['Sistema', '#sistema'], ['Nosotros', '#nosotros'], ['Valores', '#valores']].map(([l, h]) => (
              <Link key={h} href={h} onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white text-lg transition-colors">{l}</Link>
            ))}
          </nav>
          <button onClick={() => { setMobileOpen(false); onOpen() }} className="btn-primary w-full justify-center">
            Hablar con nosotros
          </button>
        </div>
      )}
    </header>
  )
}
