'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

type Lang = 'es' | 'en' | 'pt' | 'zh'

const PLAY_LABEL: Record<Lang, string> = {
  es: 'Reproducir video',
  en: 'Play video',
  pt: 'Reproduzir vídeo',
  zh: '播放视频',
}

// Shows our own poster until clicked, so YouTube's title/channel bar is never displayed before playback.
export default function YouTubeVideo({ id, title, lang = 'es' }: { id: string; title: string; lang?: Lang }) {
  const [playing, setPlaying] = useState(false)
  const [poster, setPoster] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`)
  const fill = { position: 'absolute' as const, top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={fill}
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`${PLAY_LABEL[lang]}: ${title}`}
      className="group p-0 bg-black cursor-pointer focus:outline-none focus-visible:ring-4"
      style={fill}
    >
      <img
        src={poster}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover"
        // maxresdefault doesn't exist for every video; hqdefault always does.
        onLoad={(e) => { if (e.currentTarget.naturalWidth <= 120) setPoster(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`) }}
        onError={() => setPoster(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
      />
      <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <span
          className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform duration-200 group-hover:scale-110"
          style={{ background: 'rgba(29,30,32,0.85)', border: '2px solid #6493b5' }}
        >
          <Play size={30} fill="#FFFFFF" color="#FFFFFF" className="ml-1" />
        </span>
      </span>
    </button>
  )
}
