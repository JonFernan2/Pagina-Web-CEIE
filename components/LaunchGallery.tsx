'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import ImageLightbox from './ImageLightbox'

type Lang = 'es' | 'en' | 'pt' | 'zh'

interface GalleryImage {
  src: string
  alt: string
  objectPosition?: string
}

interface LaunchGalleryProps {
  title: string
  subtitle: string
  images: GalleryImage[]
  lang?: Lang
}

const LABELS: Record<Lang, { prev: string; next: string; goTo: string; enlarge: string }> = {
  es: { prev: 'Foto anterior', next: 'Foto siguiente', goTo: 'Ver foto', enlarge: 'Ampliar foto' },
  en: { prev: 'Previous photo', next: 'Next photo', goTo: 'Show photo', enlarge: 'Enlarge photo' },
  pt: { prev: 'Foto anterior', next: 'Próxima foto', goTo: 'Ver foto', enlarge: 'Ampliar foto' },
  zh: { prev: '上一张', next: '下一张', goTo: '查看照片', enlarge: '放大照片' },
}

const AUTOPLAY_MS = 5000

export default function LaunchGallery({ title, subtitle, images, lang = 'es' }: LaunchGalleryProps) {
  const t = LABELS[lang]
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [paused, setPaused] = useState(false)
  const [userNavigated, setUserNavigated] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const thumbsRef = useRef<HTMLDivElement>(null)
  const count = images.length

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count])
  const prev = useCallback(() => { setUserNavigated(true); go(index - 1) }, [go, index])
  const next = useCallback(() => { setUserNavigated(true); go(index + 1) }, [go, index])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || paused || userNavigated || lightboxOpen || count < 2) return
    const id = window.setTimeout(() => go(index + 1), AUTOPLAY_MS)
    return () => window.clearTimeout(id)
  }, [index, paused, userNavigated, lightboxOpen, count, go])

  useEffect(() => {
    const strip = thumbsRef.current
    const thumb = strip?.children[index] as HTMLElement | undefined
    if (strip && thumb) {
      strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2, behavior: 'smooth' })
    }
  }, [index])

  const current = images[index]
  const arrow = 'absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full transition-opacity opacity-80 hover:opacity-100 focus:outline-none focus-visible:ring-2'

  return (
    <section style={{ background: '#FFFFFF' }} className="py-16">
      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-3">{title}</h2>
        <p className="font-body text-sm mb-8" style={{ color: '#6B6B6B' }}>{subtitle}</p>

        <div
          className="relative overflow-hidden h-72 sm:h-96 lg:h-[520px]"
          style={{ borderRadius: '4px', background: '#1d1e20' }}
          role="region"
          aria-roledescription="carousel"
          aria-label={title}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const dx = e.changedTouches[0].clientX - touchStartX.current
            if (Math.abs(dx) > 40) (dx > 0 ? prev() : next())
            touchStartX.current = null
          }}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="absolute inset-0 w-full h-full p-0 border-0 bg-transparent cursor-zoom-in transition-opacity duration-700 ease-in-out"
              style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? 'auto' : 'none' }}
              aria-hidden={i !== index}
              tabIndex={i === index ? 0 : -1}
              aria-label={`${t.enlarge}: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover"
                style={{ objectPosition: img.objectPosition ?? 'center' }}
              />
            </button>
          ))}

          <div
            className="absolute bottom-3 right-3 z-10 flex items-center gap-2 px-2.5 py-1 pointer-events-none"
            style={{ background: 'rgba(29,30,32,0.7)', borderRadius: '999px' }}
          >
            <span className="font-body text-xs text-white/90">{index + 1} / {count}</span>
            <Expand size={14} className="text-white/90" aria-hidden="true" />
          </div>

          <button type="button" onClick={prev} className={`${arrow} left-3`} style={{ background: 'rgba(29,30,32,0.75)', color: '#fff' }} aria-label={t.prev}>
            <ChevronLeft size={22} />
          </button>
          <button type="button" onClick={next} className={`${arrow} right-3`} style={{ background: 'rgba(29,30,32,0.75)', color: '#fff' }} aria-label={t.next}>
            <ChevronRight size={22} />
          </button>
        </div>

        <div ref={thumbsRef} className="flex gap-2 mt-3 overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin' }}>
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => { setUserNavigated(true); go(i) }}
              className="shrink-0 w-24 h-16 md:w-28 md:h-20 overflow-hidden p-0 bg-transparent transition-opacity focus:outline-none focus-visible:ring-2"
              style={{
                borderRadius: '4px',
                border: i === index ? '2px solid #6493b5' : '2px solid transparent',
                opacity: i === index ? 1 : 0.6,
              }}
              aria-label={`${t.goTo} ${i + 1}`}
              aria-current={i === index}
            >
              <img src={img.src} alt="" loading="lazy" className="w-full h-full object-cover" style={{ objectPosition: img.objectPosition ?? 'center' }} />
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          src={current.src}
          alt={current.alt}
          lang={lang}
          counter={`${index + 1} / ${count}`}
          onClose={() => setLightboxOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
