'use client'

import { useEffect, useCallback } from 'react'
import { X, Download } from 'lucide-react'

interface ImageLightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = src
    a.download = src.split('/').pop() ?? 'imagen.jpg'
    a.click()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      {/* Controls */}
      <div
        className="absolute top-4 right-4 flex gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleDownload}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wide rounded transition-colors duration-150"
          style={{ background: '#6493b5', color: '#fff' }}
          title="Descargar imagen"
        >
          <Download size={14} />
          Descargar
        </button>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-9 h-9 rounded transition-colors duration-150"
          style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
          title="Cerrar"
        >
          <X size={18} />
        </button>
      </div>

      {/* Image */}
      <div
        className="flex items-center justify-center p-4 pt-16"
        style={{ maxWidth: '90vw', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: '85vw',
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
