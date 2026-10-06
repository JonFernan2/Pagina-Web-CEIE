'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { MapPin, X, Download } from 'lucide-react'

type Lang = 'es' | 'en' | 'pt' | 'zh'

const MAP_IMG = '/images/mapa-recorridos-campus-vina.jpg'
const MAP_PDF = '/docs/mapa-recorridos-campus-vina-del-mar.pdf'

const T: Record<Lang, {
  button: string
  title: string
  route: string
  download: string
  close: string
  mapAlt: string
  routes: { color: string; stops: string[] }[]
}> = {
  es: {
    button: 'Conoce los recorridos',
    title: 'Recorridos hacia el Campus Viña del Mar',
    route: 'Ruta',
    download: 'Descargar mapa (PDF)',
    close: 'Cerrar',
    mapAlt: 'Mapa ilustrado de Viña del Mar con las dos rutas hacia el Campus Viña del Mar de la UAI',
    routes: [
      { color: '#8da6ff', stops: ['Agua Santa con Av. Álvarez (Café Journal)', 'Plaza Parroquia (Plaza Eduardo Grove)', 'Paradero de Av. Libertad con 4 Norte', '5 Norte entre 6 y 7 Oriente', 'Campus Viña del Mar UAI'] },
      { color: '#ffb07b', stops: ['Av. Libertad con 13 Norte (frente a Clínica Ciudad del Mar)', 'Av. Libertad con 9 Norte', '5 Norte entre 6 y 7 Oriente', 'Campus Viña del Mar UAI'] },
    ],
  },
  en: {
    button: 'See the routes',
    title: 'Routes to the Viña del Mar Campus',
    route: 'Route',
    download: 'Download map (PDF, in Spanish)',
    close: 'Close',
    mapAlt: 'Illustrated map of Viña del Mar showing the two routes to the UAI Viña del Mar Campus',
    routes: [
      { color: '#8da6ff', stops: ['Agua Santa & Av. Álvarez (Café Journal)', 'Plaza Parroquia (Plaza Eduardo Grove)', 'Bus stop at Av. Libertad & 4 Norte', '5 Norte between 6 and 7 Oriente', 'UAI Viña del Mar Campus'] },
      { color: '#ffb07b', stops: ['Av. Libertad & 13 Norte (opposite Clínica Ciudad del Mar)', 'Av. Libertad & 9 Norte', '5 Norte between 6 and 7 Oriente', 'UAI Viña del Mar Campus'] },
    ],
  },
  pt: {
    button: 'Conheça os trajetos',
    title: 'Trajetos até o Campus Viña del Mar',
    route: 'Rota',
    download: 'Baixar mapa (PDF, em espanhol)',
    close: 'Fechar',
    mapAlt: 'Mapa ilustrado de Viña del Mar com as duas rotas até o Campus Viña del Mar da UAI',
    routes: [
      { color: '#8da6ff', stops: ['Agua Santa com Av. Álvarez (Café Journal)', 'Plaza Parroquia (Plaza Eduardo Grove)', 'Ponto de ônibus da Av. Libertad com 4 Norte', '5 Norte entre 6 e 7 Oriente', 'Campus Viña del Mar UAI'] },
      { color: '#ffb07b', stops: ['Av. Libertad com 13 Norte (em frente à Clínica Ciudad del Mar)', 'Av. Libertad com 9 Norte', '5 Norte entre 6 e 7 Oriente', 'Campus Viña del Mar UAI'] },
    ],
  },
  zh: {
    button: '查看路线',
    title: '前往Viña del Mar校区的路线',
    route: '路线',
    download: '下载地图（PDF，西班牙语）',
    close: '关闭',
    mapAlt: 'Viña del Mar插画地图，标示前往UAI Viña del Mar校区的两条路线',
    routes: [
      { color: '#8da6ff', stops: ['Agua Santa与Av. Álvarez交叉口（Café Journal）', 'Plaza Parroquia（Plaza Eduardo Grove）', 'Av. Libertad与4 Norte交叉口公交站', '5 Norte（6 Oriente与7 Oriente之间）', 'UAI Viña del Mar校区'] },
      { color: '#ffb07b', stops: ['Av. Libertad与13 Norte交叉口（Clínica Ciudad del Mar对面）', 'Av. Libertad与9 Norte交叉口', '5 Norte（6 Oriente与7 Oriente之间）', 'UAI Viña del Mar校区'] },
    ],
  },
}

export default function BusRoutes({ lang = 'es' }: { lang?: Lang }) {
  const t = T[lang]
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const trigger = triggerRef.current
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      trigger?.focus()
    }
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2"
        style={{ background: '#1d1e20', color: '#FFFFFF', borderRadius: '2px' }}
      >
        <MapPin size={16} style={{ color: '#6493b5' }} aria-hidden="true" />
        {t.button}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-3 md:p-6"
          style={{ background: 'rgba(0,0,0,0.75)' }}
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full max-w-6xl m-auto font-body"
            style={{ background: '#FFFFFF', borderRadius: '4px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 md:px-6 py-4" style={{ background: '#1d1e20', borderBottom: '2px solid #6493b5', borderRadius: '4px 4px 0 0' }}>
              <h2 id={titleId} className="font-display font-bold text-white text-xl md:text-2xl">{t.title}</h2>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-9 h-9 rounded shrink-0 focus:outline-none focus-visible:ring-2"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
                aria-label={t.close}
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 md:p-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px] items-start">
              <a href={MAP_IMG} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in">
                <img src={MAP_IMG} alt={t.mapAlt} className="block w-full h-auto lg:max-h-[calc(100vh-10rem)] object-contain" style={{ borderRadius: '4px' }} />
              </a>

              <div className="flex flex-col gap-4">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {t.routes.map((r, i) => (
                  <div key={i} className="p-4" style={{ border: '1px solid #E5E3DE', borderRadius: '4px' }}>
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1d1e20' }}>
                      <MapPin size={18} style={{ color: r.color }} fill={r.color} aria-hidden="true" />
                      {t.route} {i + 1}
                    </p>
                    <ol className="flex flex-col">
                      {r.stops.map((s, j) => (
                        <li key={s} className="flex items-start gap-3 text-sm" style={{ color: '#2D2D2D' }}>
                          <span className="flex flex-col items-center self-stretch pt-1.5" aria-hidden="true">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ border: `2px solid ${r.color}`, background: j === 0 ? r.color : '#FFFFFF' }} />
                            {j < r.stops.length - 1 && <span className="w-0.5 flex-1 min-h-3" style={{ background: r.color }} />}
                          </span>
                          <span className={`pb-2 ${j === 0 ? 'font-semibold' : ''}`}>{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>

              <a
                href={MAP_PDF}
                download
                className="self-start inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-90"
                style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
              >
                <Download size={16} aria-hidden="true" />
                {t.download}
              </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
