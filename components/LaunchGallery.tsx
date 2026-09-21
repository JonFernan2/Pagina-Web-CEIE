'use client'

import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

interface GalleryImage {
  src: string
  alt: string
  colSpan?: number
  height: number
  objectPosition?: string
}

interface LaunchGalleryProps {
  title: string
  subtitle: string
  images: GalleryImage[]
}

export default function LaunchGallery({ title, subtitle, images }: LaunchGalleryProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section style={{ background: '#FFFFFF' }} className="py-16">
      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-3">{title}</h2>
        <p className="font-body text-sm mb-8" style={{ color: '#6B6B6B' }}>{subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox({ src: img.src, alt: img.alt })}
              className={`overflow-hidden p-0 border-0 bg-transparent cursor-zoom-in focus:outline-none ${img.colSpan === 2 ? 'md:col-span-2' : ''}`}
              style={{ height: `${img.height}px`, borderRadius: '4px' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-opacity duration-200 hover:opacity-90"
                style={{ objectPosition: img.objectPosition ?? 'center' }}
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  )
}
