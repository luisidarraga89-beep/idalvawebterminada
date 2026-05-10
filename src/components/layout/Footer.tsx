'use client'
import Link from 'next/link'
import { Lockup } from '@/components/ui/Isotipo'
import { BRAND } from '@/lib/utils'

export function Footer({ onOpen }: { onOpen: () => void }) {
  return (
    <footer className="bg-grafito-mid border-t border-white/[0.06]">
      <div className="section-wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Lockup isoSize={32} wmSize="sm" />
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Firma de estructura operativa y escalabilidad para PYMES. Vilanova i la Geltrú, Barcelona.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Servicios</p>
            <ul className="flex flex-col gap-2.5">
              {[['Estructura Operativa','/estructura-operativa'],['CRM y Ventas','/implementacion-crm'],['ERP y Control','/control-operativo-erp'],['Automatización','/automatizacion-empresarial'],['Dirección Estratégica','/direccion-estrategica'],['HORECA','/digitalizacion-horeca']].map(([l,h]) => (
                <li key={h}><Link href={h} className="text-sm text-white/50 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Contacto</p>
            <ul className="flex flex-col gap-3 text-sm text-white/50">
              <li><a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">{BRAND.email}</a></li>
              <li><a href={`tel:${BRAND.phone.replace(/\s/g,'')}`} className="hover:text-white transition-colors">{BRAND.phone}</a></li>
              <li><a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn →</a></li>
              <li className="pt-1"><button onClick={onOpen} className="btn-volt text-xs px-4 py-2">Agendar diagnóstico</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">© 2026 idalva · Luis Idárraga &amp; Melissa Villegas · Vilanova i la Geltrú, Barcelona</p>
          <div className="flex gap-6">
            <Link href="/aviso-legal"         className="text-xs text-white/25 hover:text-white/50 transition-colors">Aviso legal</Link>
            <Link href="/politica-privacidad" className="text-xs text-white/25 hover:text-white/50 transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
