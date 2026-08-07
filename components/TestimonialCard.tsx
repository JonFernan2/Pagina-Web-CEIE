interface TestimonialCardProps {
  initials: string
  nombre: string
  pais: string
  bandera?: string
  programa: string
  nivelAlcanzado: string
  texto: string
  fecha?: string
  compact?: boolean
}

export default function TestimonialCard({
  initials,
  nombre,
  pais,
  bandera,
  programa,
  nivelAlcanzado,
  texto,
  fecha,
  compact = false,
}: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col font-body h-full"
      style={{
        border: '1px solid #E5E3DE',
        borderRadius: '4px',
        background: '#FFFFFF',
        padding: compact ? '1.25rem' : '1.5rem',
      }}
    >
      {/* Avatar + name row */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="flex items-center justify-center shrink-0 font-display font-bold text-lg"
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#1A1A1A',
            color: '#C5A028',
            border: '2px solid #C5A028',
          }}
        >
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-negro text-sm">{nombre}</span>
          <span className="text-xs" style={{ color: '#6B6B6B' }}>
            {bandera} {pais}
          </span>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span
          className="text-xs px-2 py-0.5 font-medium"
          style={{
            background: '#F7F5F0',
            color: '#1A1A1A',
            borderRadius: '2px',
            border: '1px solid #E5E3DE',
          }}
        >
          {programa}
        </span>
        <span
          className="text-xs px-2 py-0.5 font-medium"
          style={{
            background: '#C5A028',
            color: '#1A1A1A',
            borderRadius: '2px',
          }}
        >
          {nivelAlcanzado}
        </span>
      </div>

      {/* Testimonial text */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: '#6B6B6B' }}>
        &ldquo;{texto}&rdquo;
      </p>

      {fecha && (
        <p className="text-xs mt-3 pt-3" style={{ color: '#9CA3AF', borderTop: '1px solid #E5E3DE' }}>
          {fecha}
        </p>
      )}
    </div>
  )
}
