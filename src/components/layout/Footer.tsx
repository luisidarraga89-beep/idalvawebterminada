'use client'
import Link from 'next/link'
import { BRAND } from '@/lib/utils'

export function Footer({ onOpen }: { onOpen: () => void }) {
  return (
    <footer className="border-t border-white/[0.07] py-16 md:py-20">
      <div className="container-ed">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-semibold text-xl text-white">idal</span>
              <span className="font-semibold text-xl text-volt">va</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{color:'rgba(240,237,232,0.35)'}}>
              Estructura operativa para empresas<br />que quieren crecer sin caos.
            </p>
            <p className="text-xs mt-6" style={{color:'rgba(240,237,232,0.2)'}}>
              Vilanova i la Geltrú, Barcelona · España
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <button onClick={onOpen} className="btn-primary text-sm">
              Agendar conversación
            </button>
            <div className="flex items-center gap-6 text-sm" style={{color:'rgba(240,237,232,0.3)'}}>
              <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">{BRAND.email}</a>
              <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="rule mt-12 md:mt-16" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <p className="text-xs" style={{color:'rgba(240,237,232,0.18)'}}>© 2026 idalva · Luis Idárraga & Melissa Villegas</p>
          <div className="flex gap-6 text-xs" style={{color:'rgba(240,237,232,0.18)'}}>
            <Link href="/aviso-legal" className="hover:text-white/50 transition-colors">Aviso legal</Link>
            <Link href="/politica-privacidad" className="hover:text-white/50 transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
