'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { Clock, Users, ChevronRight, ChevronDown } from 'lucide-react'

interface ProgramCardProps {
  nombre: string
  descripcion: string
  nivel: string
  duracion: string
  horario: string
  grupoMax: string
  precioReferencial: string
  href: string
  lang?: 'es' | 'en' | 'pt' | 'zh'
}

const labels = {
  es: {
    nivel: 'Nivel',
    duracion: 'Duración',
    horario: 'Horario',
    grupo: 'Grupo',
    precio: 'Precio referencial',
    cta: 'Ver programa',
    detalles: 'Ver detalles',
    ocultar: 'Ocultar',
  },
  en: {
    nivel: 'Level',
    duracion: 'Duration',
    horario: 'Schedule',
    grupo: 'Group',
    precio: 'Reference price',
    cta: 'View program',
    detalles: 'View details',
    ocultar: 'Hide',
  },
  pt: {
    nivel: 'Nível',
    duracion: 'Duração',
    horario: 'Horário',
    grupo: 'Grupo',
    precio: 'Preço referencial',
    cta: 'Ver programa',
    detalles: 'Ver detalhes',
    ocultar: 'Ocultar',
  },
  zh: {
    nivel: '级别',
    duracion: '时长',
    horario: '课程时间',
    grupo: '参与人数',
    precio: '参考价格',
    cta: '查看课程',
    detalles: '查看详情',
    ocultar: '收起',
  },
}

export default function ProgramCard({
  nombre,
  descripcion,
  nivel,
  duracion,
  horario,
  grupoMax,
  precioReferencial,
  href,
  lang = 'es',
}: ProgramCardProps) {
  const t = labels[lang]
  const [open, setOpen] = useState(false)
  const detailsId = useId()

  return (
    <div
      className="flex flex-col font-body"
      style={{
        border: '1px solid #E5E3DE',
        borderRadius: '4px',
        background: '#FFFFFF',
      }}
    >
      {/* Header */}
      <div
        className="px-6 py-4"
        style={{ borderBottom: '2px solid #6493b5', background: '#1d1e20' }}
      >
        <h3 className="font-body text-xl font-semibold text-white mb-1">
          {nombre}
        </h3>
        <span
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: '#6493b5' }}
        >
          {t.nivel}: {nivel}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 py-5 gap-4">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-widest focus:outline-none focus-visible:ring-2"
          style={{ color: '#6493b5' }}
        >
          {open ? t.ocultar : t.detalles}
          <ChevronDown
            size={18}
            aria-hidden="true"
            className="transition-transform duration-200"
            style={{ transform: open ? 'rotate(180deg)' : 'none' }}
          />
        </button>

        <div id={detailsId} className={open ? 'flex flex-col gap-4' : 'hidden'}>
        <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
          {descripcion}
        </p>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-start gap-2">
            <Clock size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
            <div>
              <span className="font-medium text-negro">{t.duracion}: </span>
              <span style={{ color: '#6B6B6B' }}>{duracion}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Clock size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
            <div>
              <span className="font-medium text-negro">{t.horario}: </span>
              <span style={{ color: '#6B6B6B' }}>{horario}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Users size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
            <div>
              <span className="font-medium text-negro">{t.grupo}: </span>
              <span style={{ color: '#6B6B6B' }}>{grupoMax}</span>
            </div>
          </div>
        </div>
        </div>

        {/* Price */}
        <div className="mt-auto pt-4" style={{ borderTop: '1px solid #E5E3DE' }}>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#6B6B6B' }}>
            {t.precio}
          </p>
          <p className="text-xl font-bold" style={{ color: '#6493b5' }}>
            {precioReferencial}
          </p>
        </div>

        <Link
          href={href}
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 mt-2"
          style={{
            background: '#1d1e20',
            color: '#FFFFFF',
            borderRadius: '2px',
          }}
        >
          {t.cta} <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  )
}
