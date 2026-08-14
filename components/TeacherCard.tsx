'use client'

import { useState } from 'react'
import PlaceholderImage from './PlaceholderImage'

type Lang = 'es' | 'en' | 'pt' | 'zh'

interface MultiLang {
  es: string
  en: string
  pt: string
  zh: string
}

interface MultiLangList {
  es: string[]
  en: string[]
  pt: string[]
  zh: string[]
}

interface TeacherCardProps {
  nombre: string
  rol: MultiLang
  titulo: MultiLang
  formacionLista: MultiLangList
  bio: MultiLang
  email: string
  foto?: string | null
  fotoPendiente?: boolean
  fotoPosition?: string
  lang?: Lang
}

const LABELS: Record<string, Record<Lang, string>> = {
  formacion: { es: 'Formación', en: 'Education', pt: 'Formação', zh: '学历' },
  fotoPendiente: {
    es: 'Fotografía pendiente · Sesión programada',
    en: 'Photo pending · Session scheduled',
    pt: 'Fotografia pendente · Sessão agendada',
    zh: '照片待定 · 拍摄已安排',
  },
}

function Initials({ nombre, lang = 'es' }: { nombre: string; lang?: Lang }) {
  const parts = nombre.split(' ').filter((p) => p && !p.startsWith('['))
  const initials = parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : (parts[0]?.[0] ?? '?').toUpperCase()

  return (
    <div
      className="relative w-full h-56 flex flex-col items-center justify-center"
      style={{ background: '#1d1e20', border: '2px dashed #6493b5', borderRadius: '4px 4px 0 0' }}
    >
      <span className="font-display font-bold text-5xl mb-2" style={{ color: '#6493b5' }}>
        {initials}
      </span>
      <div
        className="absolute bottom-3 left-0 right-0 mx-4 py-1 text-center text-xs font-body font-medium"
        style={{ background: '#DC2626', color: '#FFFFFF', borderRadius: '2px' }}
      >
        {LABELS.fotoPendiente[lang]}
      </div>
    </div>
  )
}

export default function TeacherCard({
  nombre, rol, titulo, formacionLista, bio, email, foto, fotoPendiente, fotoPosition = 'center 20%', lang = 'es',
}: TeacherCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="flex flex-col font-body overflow-hidden"
      style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}
    >
      {/* Photo */}
      <div className="overflow-hidden shrink-0">
        {foto && !imgError ? (
          <img
            src={foto}
            alt={`${nombre}, ${rol[lang]}`}
            className="w-full h-56 object-cover"
            style={{ objectPosition: fotoPosition }}
            onError={() => setImgError(true)}
          />
        ) : fotoPendiente ? (
          <Initials nombre={nombre} lang={lang} />
        ) : (
          <div className="w-full h-56">
            <PlaceholderImage label={`Foto: ${nombre}`} alt={`${nombre}`} />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-5 py-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-body text-lg font-semibold text-negro leading-tight">{nombre}</h3>
          <p className="text-xs font-medium uppercase tracking-widest mt-1" style={{ color: '#6493b5' }}>
            {rol[lang]}
          </p>
          <p className="text-xs mt-1" style={{ color: '#6B6B6B' }}>{titulo[lang]}</p>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed" style={{ color: '#2D2D2D', borderTop: '1px solid #E5E3DE', paddingTop: '12px' }}>
          {bio[lang]}
        </p>

        {/* Formación */}
        <div style={{ borderTop: '1px solid #E5E3DE', paddingTop: '10px' }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-negro mb-2">{LABELS.formacion[lang]}</p>
          <ul className="flex flex-col gap-1">
            {formacionLista[lang].map((item, i) => (
              <li key={i} className="text-xs flex gap-2" style={{ color: '#6B6B6B' }}>
                <span style={{ color: '#6493b5', flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="text-xs mt-auto hover:underline"
          style={{ color: '#6493b5' }}
        >
          {email}
        </a>
      </div>
    </div>
  )
}
