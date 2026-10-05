'use client'

import { useEffect } from 'react'
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react'

type Lang = 'es' | 'en' | 'pt' | 'zh'

const LABELS: Record<Lang, { download: string; close: string; prev: string; next: string }> = {
  es: { download: 'Descargar', close: 'Cerrar', prev: 'Foto anterior', next: 'Foto siguiente' },
  en: { download: 'Download', close: 'Close', prev: 'Previous photo', next: 'Next photo' },
  pt: { download: 'Baixar', close: 'Fechar', prev: 'Foto anterior', next: 'Próxima foto' },
  zh: { download: '下载', close: '关闭', prev: '上一张', next: '下一张' },
}

interface ImageLightboxProps {
  src: string
  alt: string
  onClose: () => void
  lang?: Lang
  onPrev?: () => void
  onNext?: () => void
  counter?: string
}

export default function ImageLightbox({ src, alt, onClose, lang = 'es', onPrev, onNext, counter }: ImageLightboxProps) {
  const t = LABELS[lang]

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = src
    a.download = src.split('/').pop() ?? 'imagen.jpg'
    a.click()
  }

  const navButton = 'absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full transition-opacity opacity-80 hover:opacity-100'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.88)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div className="absolute top-4 right-4 flex gap-3" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleDownload}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wide rounded transition-colors duration-150"
          style={{ background: '#6493b5', color: '#fff' }}
          title={t.download}
        >
          <Download size={14} />
          {t.download}
        </button>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-9 h-9 rounded transition-colors duration-150"
          style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
          title={t.close}
          aria-label={t.close}
        >
          <X size={18} />
        </button>
      </div>

      {counter && (
        <p className="absolute top-6 left-4 text-sm font-body text-white/70">{counter}</p>
      )}

      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className={`${navButton} left-3`}
          style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
          aria-label={t.prev}
        >
          <ChevronLeft size={24} />
        </button>
      )}
      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className={`${navButton} right-3`}
          style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
          aria-label={t.next}
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div
        className="flex items-center justify-center p-4 pt-16"
        style={{ maxWidth: '90vw', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: '80vw',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: '4px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          }}
        />
      </div>
    </div>
  )
}
