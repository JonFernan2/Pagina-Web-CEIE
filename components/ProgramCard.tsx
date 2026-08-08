import Link from 'next/link'
import { Clock, Users, ChevronRight } from 'lucide-react'

interface ProgramCardProps {
  nombre: string
  descripcion: string
  nivel: string
  duracion: string
  horario: string
  grupoMax: string
  precioReferencial: string
  href: string
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
}: ProgramCardProps) {
  return (
    <div
      className="flex flex-col h-full font-body"
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
          Nivel: {nivel}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 py-5 gap-4">
        <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
          {descripcion}
        </p>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-start gap-2">
            <Clock size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
            <div>
              <span className="font-medium text-negro">Duración: </span>
              <span style={{ color: '#6B6B6B' }}>{duracion}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Clock size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
            <div>
              <span className="font-medium text-negro">Horario: </span>
              <span style={{ color: '#6B6B6B' }}>{horario}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Users size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
            <div>
              <span className="font-medium text-negro">Grupo: </span>
              <span style={{ color: '#6B6B6B' }}>{grupoMax}</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mt-auto pt-4" style={{ borderTop: '1px solid #E5E3DE' }}>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#6B6B6B' }}>
            Precio referencial
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
          Ver programa <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  )
}
