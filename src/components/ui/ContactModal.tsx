'use client'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '@/lib/utils'

const schema = z.object({
  name:    z.string().min(2, 'Nombre demasiado corto'),
  email:   z.string().email('Email no válido'),
  phone:   z.string().min(6, 'Teléfono no válido'),
  company: z.string().optional(),
  message: z.string().min(10, 'Cuéntanos un poco más'),
  _hp:     z.string().max(0).optional(),
})
type F = z.infer<typeof schema>

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<'idle'|'loading'|'ok'|'err'>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<F>({ resolver: zodResolver(schema) })

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) { window.addEventListener('keydown', fn); document.body.style.overflow = 'hidden' }
    return () => { window.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [open, onClose])

  const onSubmit = async (data: F) => {
    if (data._hp) return
    setStatus('loading')
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!r.ok) throw new Error()
      setStatus('ok'); reset()
    } catch { setStatus('err') }
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4 md:p-6">
      <div onClick={onClose} className="absolute inset-0 bg-black/75 backdrop-blur-md" aria-hidden />
      <div className="relative w-full max-w-lg bg-[#111010] border border-white/[0.07] rounded-2xl overflow-hidden">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-volt/50 to-transparent" />
        <div className="p-8 md:p-10">
          {status === 'ok' ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 rounded-full border border-volt/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-5 h-5 text-volt" fill="none" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-white font-medium mb-2">Mensaje recibido.</p>
              <p className="text-sm mt-1" style={{color:'rgba(240,237,232,0.45)'}}>Te contactamos en menos de 24h.</p>
              <button onClick={onClose} className="mt-8 btn-outline text-sm">Cerrar</button>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="t-label mb-2" style={{color:'#C8F04E'}}>Contacto</p>
                  <h2 className="text-xl font-semibold text-white">Hablemos sobre tu empresa</h2>
                  <p className="text-sm mt-1" style={{color:'rgba(240,237,232,0.45)'}}>
                    Una conversación de 30 minutos puede cambiarlo todo.
                  </p>
                </div>
                <button onClick={onClose} className="text-white/30 hover:text-white transition-colors p-1" aria-label="Cerrar">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="hidden"><input {...register('_hp')} tabIndex={-1} autoComplete="off" /></div>

                {/* Name + Phone */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs mb-2" style={{color:'rgba(240,237,232,0.35)'}}>Nombre *</label>
                    <input className={cn('field', errors.name && 'border-red-500/40')}
                      placeholder="Tu nombre" {...register('name')} />
                    {errors.name && <p className="text-xs mt-1" style={{color:'rgba(248,113,113,0.7)'}}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs mb-2" style={{color:'rgba(240,237,232,0.35)'}}>Teléfono *</label>
                    <input className={cn('field', errors.phone && 'border-red-500/40')}
                      placeholder="+34 600 000 000" type="tel" {...register('phone')} />
                    {errors.phone && <p className="text-xs mt-1" style={{color:'rgba(248,113,113,0.7)'}}>{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Email + Company */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs mb-2" style={{color:'rgba(240,237,232,0.35)'}}>Email *</label>
                    <input className={cn('field', errors.email && 'border-red-500/40')}
                      placeholder="tu@empresa.com" type="email" {...register('email')} />
                    {errors.email && <p className="text-xs mt-1" style={{color:'rgba(248,113,113,0.7)'}}>{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs mb-2" style={{color:'rgba(240,237,232,0.35)'}}>Empresa</label>
                    <input className="field" placeholder="Tu empresa" {...register('company')} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs mb-2" style={{color:'rgba(240,237,232,0.35)'}}>¿Cuál es tu mayor reto operativo? *</label>
                  <textarea
                    className={cn('field resize-none', errors.message && 'border-red-500/40')}
                    rows={4}
                    placeholder="Ej: Todo depende de mí, no tenemos procesos definidos..."
                    {...register('message')}
                  />
                  {errors.message && <p className="text-xs mt-1" style={{color:'rgba(248,113,113,0.7)'}}>{errors.message.message}</p>}
                </div>

                {status === 'err' && (
                  <p className="text-sm" style={{color:'rgba(248,113,113,0.7)'}}>Algo falló. Escríbenos directamente a luis@idalva.es</p>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className={cn('btn-primary w-full justify-center', status === 'loading' && 'opacity-50 cursor-not-allowed')}>
                  {status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
                </button>
                <p className="text-center text-xs" style={{color:'rgba(240,237,232,0.2)'}}>
                  Sin spam · Respuesta garantizada en 24h
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
