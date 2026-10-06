import Link from 'next/link'
import { Clock, ChevronRight } from 'lucide-react'

// Home-page summary card: only what helps choose a program. Schedule, group size and prices live on each program page.
interface ProgramCardProps {
  nombre: string
  descripcion: string
  nivel: string
  duracion: string
  precioDesde?: string
  imagen?: string
  imagenPos?: string
  href: string
  lang?: 'es' | 'en' | 'pt' | 'zh'
}

const labels = {
  es: { nivel: 'Nivel', duracion: 'Duración', cta: 'Ver programa' },
  en: { nivel: 'Level', duracion: 'Duration', cta: 'View program' },
  pt: { nivel: 'Nível', duracion: 'Duração', cta: 'Ver programa' },
  zh: { nivel: '级别', duracion: '时长', cta: '查看课程' },
}

export default function ProgramCard({ nombre, descripcion, nivel, duracion, precioDesde, imagen, imagenPos, href, lang = 'es' }: ProgramCardProps) {
  const t = labels[lang]

  return (
    <div
      className="flex flex-col font-body h-full overflow-hidden"
      style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}
    >
      {imagen && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={imagen}
          alt=""
          loading="lazy"
          className="w-full aspect-[16/9] object-cover"
          style={{ borderBottom: '3px solid #6493b5', objectPosition: imagenPos ?? 'center' }}
        />
      )}
      <div className="flex flex-col flex-1 px-6 py-6 gap-4">
        <div>
          <h3 className="font-body text-xl font-semibold text-negro mb-1">{nombre}</h3>
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1d1e20' }}>
            {t.nivel}: {nivel}
          </p>
        </div>

        <p className="text-sm leading-relaxed flex-1" style={{ color: '#2D2D2D' }}>{descripcion}</p>

        <div className="flex flex-col gap-1 pt-4" style={{ borderTop: '1px solid #E5E3DE' }}>
          <p className="flex items-center gap-2 text-sm" style={{ color: '#2D2D2D' }}>
            <Clock size={14} className="shrink-0" style={{ color: '#6493b5' }} aria-hidden="true" />
            <span><span className="font-medium text-negro">{t.duracion}:</span> {duracion}</span>
          </p>
          {precioDesde && (
            <p className="text-lg font-bold" style={{ color: '#1d1e20' }}>{precioDesde}</p>
          )}
        </div>

        <Link
          href={href}
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-90"
          style={{ background: '#1d1e20', color: '#FFFFFF', borderRadius: '2px' }}
        >
          {t.cta} <ChevronRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
