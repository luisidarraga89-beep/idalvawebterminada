'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('idalva-cookies-accepted')
      if (!accepted) setVisible(true)
    } catch { setVisible(true) }
  }, [])

  const accept = () => {
    try { localStorage.setItem('idalva-cookies-accepted', '1') } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200]"
      style={{borderTop:'1px solid rgba(200,240,78,0.2)', background:'rgba(10,9,9,0.97)', backdropFilter:'blur(16px)'}}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm flex-1 max-w-2xl" style={{color:'rgba(240,237,232,0.5)'}}>
          Utilizamos cookies para mejorar tu experiencia y analizar el tráfico. Al continuar navegando, aceptas nuestra{' '}
          <Link href="/privacidad" className="underline underline-offset-2 transition-colors hover:text-white"
            style={{color:'rgba(240,237,232,0.7)'}}>
            política de privacidad
          </Link>.
        </p>
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link href="/privacidad" className="text-sm transition-colors"
            style={{color:'rgba(240,237,232,0.35)'}}>
            Configurar
          </Link>
          <button
            onClick={accept}
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all hover:brightness-110"
            style={{background:'#C8F04E', color:'#0A0909'}}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
