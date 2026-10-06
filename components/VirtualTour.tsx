'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { Rotate3d, X, ExternalLink } from 'lucide-react'

type Lang = 'es' | 'en' | 'pt' | 'zh'

const TOUR_URL = 'https://360.uai.cl/group/vina'

const T: Record<Lang, { button: string; title: string; newTab: string; close: string; hint: string }> = {
  es: {
    button: 'Recorrido virtual 360°',
    title: 'Recorrido virtual 360° · Campus Viña del Mar',
    newTab: 'Abrir en pestaña nueva',
    close: 'Cerrar',
    hint: '¿No se carga el recorrido? Ábrelo en una pestaña nueva.',
  },
  en: {
    button: '360° virtual tour',
    title: '360° virtual tour · Viña del Mar Campus',
    newTab: 'Open in new tab',
    close: 'Close',
    hint: 'Tour not loading? Open it in a new tab.',
  },
  pt: {
    button: 'Tour virtual 360°',
    title: 'Tour virtual 360° · Campus Viña del Mar',
    newTab: 'Abrir em nova aba',
    close: 'Fechar',
    hint: 'O tour não carrega? Abra-o em uma nova aba.',
  },
  zh: {
    button: '360°虚拟游览',
    title: '360°虚拟游览 · Viña del Mar校区',
    newTab: '在新标签页中打开',
    close: '关闭',
    hint: '无法加载？请在新标签页中打开。',
  },
}

export default function VirtualTour({ lang = 'es' }: { lang?: Lang }) {
  const t = T[lang]
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const trigger = triggerRef.current
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      trigger?.focus()
    }
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2"
        style={{ background: '#1d1e20', color: '#FFFFFF', borderRadius: '2px' }}
      >
        <Rotate3d size={16} style={{ color: '#6493b5' }} aria-hidden="true" />
        {t.button}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
          style={{ background: 'rgba(0,0,0,0.75)' }}
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full max-w-6xl h-full max-h-[820px] flex flex-col font-body"
            style={{ background: '#FFFFFF', borderRadius: '4px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-4 md:px-6 py-3" style={{ background: '#1d1e20', borderBottom: '2px solid #6493b5', borderRadius: '4px 4px 0 0' }}>
              <h2 id={titleId} className="font-display font-bold text-white text-base md:text-2xl">{t.title}</h2>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={TOUR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-widest"
                  style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
                >
                  <ExternalLink size={14} aria-hidden="true" />
                  {t.newTab}
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded focus:outline-none focus-visible:ring-2"
                  style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
                  aria-label={t.close}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <iframe
              src={TOUR_URL}
              title={t.title}
              className="w-full flex-1 block"
              style={{ border: 'none', background: '#1d1e20' }}
              allow="fullscreen; accelerometer; gyroscope; magnetometer; xr-spatial-tracking"
              allowFullScreen
            />

            <p className="px-4 md:px-6 py-2 text-xs" style={{ color: '#2D2D2D' }}>
              {t.hint}{' '}
              <a href={TOUR_URL} target="_blank" rel="noopener noreferrer" className="underline font-semibold" style={{ color: '#1d1e20' }}>
                {t.newTab}
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
