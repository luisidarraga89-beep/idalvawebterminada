'use client'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '@/lib/utils'
import { Lockup } from './Isotipo'

const schema = z.object({
  name:      z.string().min(2, 'Nombre muy corto'),
  company:   z.string().min(1, 'Indica tu empresa'),
  email:     z.string().email('Email no válido'),
  phone:     z.string().optional(),
  challenge: z.string().min(10, 'Cuéntanos un poco más'),
  _hp:       z.string().max(0).optional(),
})
type F = z.infer<typeof schema>

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<F>({ resolver: zodResolver(schema) })

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [open, onClose])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  const onSubmit = async (data: F) => {
    if (data._hp) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error()
      setStatus('success'); reset()
    } catch { setStatus('error') }
  }

  if (!open) return null
  return (
    <>
      <div onClick={onClose} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" aria-hidden />
      <div role="dialog" aria-modal="true" className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 bg-grafito-mid border border-white/10 rounded-2xl shadow-2xl">
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            <Lockup isoSize={24} wmSize="sm" />
            <h2 className="mt-4 text-lg font-semibold text-white">Cuéntanos sobre tu empresa</h2>
            <p className="mt-1 text-sm text-white/50">Una conversación de 30 minutos puede cambiarlo todo.</p>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors" aria-label="Cerrar">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20"><path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="p-6">
          {status === 'success' ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 rounded-full bg-volt/10 border border-volt/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-volt" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p className="text-white font-medium mb-1">¡Recibido! Te contactamos en menos de 24h.</p>
              <button onClick={onClose} className="mt-6 btn-volt text-sm px-6">Cerrar</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
              <div className="hidden" aria-hidden><input type="text" {...register('_hp')} tabIndex={-1} autoComplete="off" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Tu nombre *</label>
                  <input type="text" className={cn('form-input', errors.name && 'border-red-500/50')} placeholder="Tu nombre" {...register('name')} />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Empresa *</label>
                  <input type="text" className={cn('form-input', errors.company && 'border-red-500/50')} placeholder="Tu empresa" {...register('company')} />
                  {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Email *</label>
                  <input type="email" className={cn('form-input', errors.email && 'border-red-500/50')} placeholder="tu@empresa.com" {...register('email')} />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Teléfono (opcional)</label>
                  <input type="tel" className="form-input" placeholder="+34 600 000 000" {...register('phone')} />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">¿Cuál es tu principal reto operativo? *</label>
                <textarea rows={3} className={cn('form-input resize-none', errors.challenge && 'border-red-500/50')} placeholder="Ej: Todo depende de mí, no tenemos procesos..." {...register('challenge')} />
                {errors.challenge && <p className="mt-1 text-xs text-red-400">{errors.challenge.message}</p>}
              </div>
              {status === 'error' && <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">Algo salió mal. Escríbenos a luisidarraga89@gmail.com</p>}
              <button type="submit" disabled={status === 'loading'} className={cn('btn-volt justify-center mt-1', status === 'loading' && 'opacity-60 cursor-not-allowed')}>
                {status === 'loading' ? 'Enviando…' : 'Enviar solicitud'}
              </button>
              <p className="text-center text-xs text-white/25">Sin spam · Respuesta en menos de 24h</p>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
