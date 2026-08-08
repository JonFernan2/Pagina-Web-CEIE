'use client'

import { useState, useEffect } from 'react'

interface CookieBannerProps {
  lang?: 'es' | 'en' | 'pt' | 'zh'
}

const copy = {
  es: {
    text: 'Este sitio utiliza cookies para mejorar su experiencia de navegación. Puede aceptar todas las cookies o rechazar las no esenciales.',
    accept: 'Aceptar todas',
    reject: 'Rechazar no esenciales',
    learnMore: 'Política de cookies',
    href: '/cookies',
  },
  en: {
    text: 'This site uses cookies to improve your browsing experience. You may accept all cookies or reject non-essential ones.',
    accept: 'Accept all',
    reject: 'Reject non-essential',
    learnMore: 'Cookie policy',
    href: '/en/cookie-policy',
  },
  pt: {
    text: 'Este site utiliza cookies para melhorar sua experiência de navegação. Você pode aceitar todos os cookies ou recusar os não essenciais.',
    accept: 'Aceitar todos',
    reject: 'Recusar não essenciais',
    learnMore: 'Política de cookies',
    href: '/pt/politica-de-cookies',
  },
  zh: {
    text: '本网站使用Cookie以改善您的浏览体验。您可以接受所有Cookie或拒绝非必要Cookie。',
    accept: '全部接受',
    reject: '拒绝非必要',
    learnMore: 'Cookie政策',
    href: '/zh/cookie-policy',
  },
}

export default function CookieBanner({ lang = 'es' }: CookieBannerProps) {
  const [visible, setVisible] = useState(false)
  const t = copy[lang]

  useEffect(() => {
    const consent = localStorage.getItem('ceie-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('ceie-cookie-consent', 'all')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('ceie-cookie-consent', 'essential')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 font-body"
      style={{ background: '#1d1e20', borderTop: '2px solid #6493b5' }}
      role="dialog"
      aria-label={lang === 'es' ? 'Aviso de cookies' : lang === 'pt' ? 'Aviso de cookies' : lang === 'zh' ? 'Cookie通知' : 'Cookie notice'}
    >
      <div className="max-w-ceie mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/80 flex-1">
          {t.text}{' '}
          <a
            href={t.href}
            className="underline transition-colors duration-200 hover:text-dorado"
            style={{ color: '#6493b5' }}
          >
            {t.learnMore}
          </a>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-sm font-medium px-4 py-2 transition-colors duration-200 text-white/70 hover:text-white"
          >
            {t.reject}
          </button>
          <button
            onClick={accept}
            className="text-sm font-semibold px-5 py-2 transition-colors duration-200"
            style={{
              background: '#6493b5',
              color: '#1d1e20',
              borderRadius: '2px',
            }}
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
