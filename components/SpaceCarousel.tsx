'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ImageLightbox from './ImageLightbox'

type Lang = 'es' | 'en' | 'pt' | 'zh'

const LABELS: Record<Lang, { prev: string; next: string; photo: string }> = {
  es: { prev: 'Foto anterior', next: 'Foto siguiente', photo: 'Foto' },
  en: { prev: 'Previous photo', next: 'Next photo', photo: 'Photo' },
  pt: { prev: 'Foto anterior', next: 'Próxima foto', photo: 'Foto' },
  zh: { prev: '上一张', next: '下一张', photo: '照片' },
}

export default function SpaceCarousel({
  srcs, positions, alt, height, lang = 'es',
}: { srcs: string[]; positions: string[]; alt: string; height: string; lang?: Lang }) {
  const t = LABELS[lang]
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)
  const touchX = useRef<number | null>(null)
  const n = srcs.length
  const go = (i: number) => setIndex(((i % n) + n) % n)
  const arrow = 'absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full opacity-80 hover:opacity-100 focus:outline-none focus-visible:ring-2'

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height, background: '#1d1e20' }}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 40) go(index + (dx > 0 ? -1 : 1))
        touchX.current = null
      }}
    >
      {srcs.map((src, i) => (
        <button
          key={src}
          type="button"
          onClick={() => setZoom(true)}
          className="absolute inset-0 w-full h-full p-0 border-0 bg-transparent cursor-zoom-in transition-opacity duration-500"
          style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? 'auto' : 'none' }}
          tabIndex={i === index ? 0 : -1}
          aria-hidden={i !== index}
        >
          <img src={src} alt={alt} loading={i === 0 ? 'eager' : 'lazy'} className="w-full h-full object-cover" style={{ objectPosition: positions[i] ?? 'center' }} />
        </button>
      ))}

      <button type="button" onClick={() => go(index - 1)} className={`${arrow} left-2`} style={{ background: 'rgba(29,30,32,0.75)', color: '#fff' }} aria-label={t.prev}>
        <ChevronLeft size={20} />
      </button>
      <button type="button" onClick={() => go(index + 1)} className={`${arrow} right-2`} style={{ background: 'rgba(29,30,32,0.75)', color: '#fff' }} aria-label={t.next}>
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-1 inset-x-0 z-10 flex justify-center">
        {srcs.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => go(i)}
            aria-label={`${t.photo} ${i + 1}`}
            aria-current={i === index}
            className="flex items-center justify-center min-w-[28px] h-7 px-1"
          >
            <span
              className="block rounded-full transition-all duration-200"
              style={{ width: i === index ? '22px' : '8px', height: '8px', background: i === index ? '#6493b5' : 'rgba(255,255,255,0.85)' }}
            />
          </button>
        ))}
      </div>

      {zoom && (
        <ImageLightbox
          src={srcs[index]}
          alt={alt}
          lang={lang}
          counter={`${index + 1} / ${n}`}
          onClose={() => setZoom(false)}
          onPrev={() => go(index - 1)}
          onNext={() => go(index + 1)}
        />
      )}
    </div>
  )
}
