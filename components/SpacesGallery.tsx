'use client'

import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

interface Space {
  nombre: string
  descripcion: string
  alt: string
}

export interface SpaceImages {
  srcs: string[]
  wide?: boolean
  position?: string
}

interface SpacesGalleryProps {
  spaces: Space[]
  title: string
  spaceImages: SpaceImages[]
  lang?: 'es' | 'en' | 'pt' | 'zh'
}

export default function SpacesGallery({ spaces, title, spaceImages, lang = 'es' }: SpacesGalleryProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section style={{ background: '#C7C2ba' }} className="py-16">
      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spaces.map((space, i) => {
            const { srcs, wide, position = 'center' } = spaceImages[i]
            return (
            <div
              key={space.nombre}
              className={`flex flex-col overflow-hidden ${wide ? 'md:col-span-2' : ''}`}
              style={{ border: '1px solid #E5E3DE', borderRadius: '4px' }}
            >
              <div className="w-full overflow-hidden flex gap-1" style={{ height: wide ? '280px' : '220px' }}>
                {srcs.map((src) => (
                  <button
                    key={src}
                    className="flex-1 h-full p-0 border-0 bg-transparent cursor-zoom-in focus:outline-none"
                    onClick={() => setLightbox({ src, alt: space.alt })}
                  >
                    <img
                      src={src}
                      alt={space.alt}
                      className="w-full h-full object-cover transition-opacity duration-200 hover:opacity-90"
                      style={{ objectPosition: position }}
                    />
                  </button>
                ))}
              </div>
              <div className="p-5 flex-1">
                <h3 className="font-body text-lg font-semibold text-negro mb-2">{space.nombre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#2D2D2D' }}>{space.descripcion}</p>
              </div>
            </div>
            )
          })}
        </div>
      </div>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} lang={lang} onClose={() => setLightbox(null)} />
      )}
    </section>
  )
}
