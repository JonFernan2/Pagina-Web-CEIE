'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Video {
  id: string
  title: string
  caption: string
}

export default function VideoCarousel({ videos }: { videos: Video[] }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + videos.length) % videos.length)
  const next = () => setCurrent((c) => (c + 1) % videos.length)

  const v = videos[current]

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      <div className="relative">
        <div className="overflow-hidden" style={{ borderRadius: '4px', border: '1px solid #E5E3DE' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            <iframe
              key={v.id}
              src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          </div>
        </div>

        <button
          onClick={prev}
          aria-label="Video anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 transition-opacity opacity-75 hover:opacity-100"
          style={{ background: 'rgba(29,30,32,0.80)', borderRadius: '50%', color: '#fff' }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          aria-label="Siguiente video"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 transition-opacity opacity-75 hover:opacity-100"
          style={{ background: 'rgba(29,30,32,0.80)', borderRadius: '50%', color: '#fff' }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="text-xs mt-2 font-body text-center" style={{ color: '#6B6B6B' }}>{v.caption}</p>

      <div className="flex justify-center items-center gap-2 mt-5">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Video ${i + 1}`}
            className="transition-all duration-200"
            style={{
              width: i === current ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: i === current ? '#6493b5' : '#C7C2ba',
            }}
          />
        ))}
      </div>

      <p className="text-xs text-center mt-2 font-body" style={{ color: '#9CA3AF' }}>
        {current + 1} / {videos.length}
      </p>
    </div>
  )
}
