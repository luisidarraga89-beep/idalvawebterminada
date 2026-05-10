'use client'
import Link from 'next/link'
import { BRAND } from '@/lib/utils'
import { Isotipo } from '@/components/ui/Isotipo'

export function Footer({ onOpen }: { onOpen: () => void }) {
  return (
    <footer className="border-t border-white/[0.07] py-16 md:py-20">
      <div className="container-ed">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Isotipo size={24} />
              <span className="font-semibold text-lg">
                <span className="text-white">idal</span>
                <span className="text-volt">va</span>
              </span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed mb-3" style={{color:'rgba(240,237,232,0.35)'}}>
              Estructura operativa para empresas que quieren crecer sin caos.
            </p>
            <p className="text-xs" style={{color:'rgba(240,237,232,0.2)'}}>
              Vilanova i la Geltrú, Barcelona · España
            </p>
          </div>

          {/* CTA + contact */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <button onClick={onOpen} className="btn-primary text-sm">
              Agendar conversación
            </button>
            <div className="flex flex-col md:items-end gap-2 text-sm" style={{color:'rgba(240,237,232,0.3)'}}>
              <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">{BRAND.email}</a>
              <a href="mailto:info@idalva.es" className="hover:text-white transition-colors">info@idalva.es</a>
              <a href={`tel:${BRAND.phone.replace(/\s/g,'')}`} className="hover:text-white transition-colors">{BRAND.phone}</a>
              <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn →</a>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/[0.06] mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{color:'rgba(240,237,232,0.18)'}}>
            © 2026 idalva · Luis Idárraga & Melissa Villegas
          </p>
          <div className="flex gap-6 text-xs" style={{color:'rgba(240,237,232,0.25)'}}>
            <Link href="/aviso-legal" className="hover:text-white/50 transition-colors">Aviso legal</Link>
            <Link href="/privacidad"  className="hover:text-white/50 transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
