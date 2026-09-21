'use client'

import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

interface Space {
  nombre: string
  descripcion: string
  alt: string
}

interface SpacesGalleryProps {
  spaces: Space[]
  title: string
  spaceImages: string[]
  activitiesImg2: string
}

export default function SpacesGallery({ spaces, title, spaceImages, activitiesImg2 }: SpacesGalleryProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section style={{ background: '#C7C2ba' }} className="py-16">
      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spaces.map((space, i) => (
            <div
              key={space.nombre}
              className={`flex flex-col overflow-hidden ${i === 4 ? 'md:col-span-2' : ''}`}
              style={{ border: '1px solid #E5E3DE', borderRadius: '4px' }}
            >
              <div className="w-full overflow-hidden" style={{ height: i === 4 ? '280px' : '220px' }}>
                {i === 4 ? (
                  <div className="flex h-full gap-1">
                    <button
                      className="w-1/2 h-full p-0 border-0 bg-transparent cursor-zoom-in focus:outline-none"
                      onClick={() => setLightbox({ src: spaceImages[i], alt: space.alt })}
                    >
                      <img
                        src={spaceImages[i]}
                        alt={space.alt}
                        className="w-full h-full object-cover object-center transition-opacity duration-200 hover:opacity-90"
                      />
                    </button>
                    <button
                      className="w-1/2 h-full p-0 border-0 bg-transparent cursor-zoom-in focus:outline-none"
                      onClick={() => setLightbox({ src: activitiesImg2, alt: space.alt })}
                    >
                      <img
                        src={activitiesImg2}
                        alt={space.alt}
                        className="w-full h-full object-cover object-center transition-opacity duration-200 hover:opacity-90"
                      />
                    </button>
                  </div>
                ) : (
                  <button
                    className="w-full h-full p-0 border-0 bg-transparent cursor-zoom-in focus:outline-none"
                    onClick={() => setLightbox({ src: spaceImages[i], alt: space.alt })}
                  >
                    <img
                      src={spaceImages[i]}
                      alt={space.alt}
                      className="w-full h-full object-cover object-center transition-opacity duration-200 hover:opacity-90"
                    />
                  </button>
                )}
              </div>
              <div className="p-5 flex-1">
                <h3 className="font-body text-lg font-semibold text-negro mb-2">{space.nombre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{space.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  )
}
