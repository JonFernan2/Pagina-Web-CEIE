import PlaceholderImage from './PlaceholderImage'

interface TeacherCardProps {
  nombre: string
  rol: string
  formacion: string
  especialidad: string
  foto?: string | null
  fotoPendiente?: boolean
}

function Initials({ nombre }: { nombre: string }) {
  const parts = nombre.split(' ').filter((p) => p && !p.startsWith('['))
  const initials = parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : (parts[0]?.[0] ?? '?').toUpperCase()

  return (
    <div
      className="relative w-full h-48 flex flex-col items-center justify-center"
      style={{
        background: '#1A1A1A',
        border: '2px dashed #C5A028',
        borderRadius: '4px 4px 0 0',
      }}
    >
      <span
        className="font-display font-bold text-5xl mb-2"
        style={{ color: '#C5A028' }}
      >
        {initials}
      </span>
      {/* Pending badge */}
      <div
        className="absolute bottom-3 left-0 right-0 mx-4 py-1 text-center text-xs font-body font-medium"
        style={{
          background: '#DC2626',
          color: '#FFFFFF',
          borderRadius: '2px',
        }}
      >
        Fotografía pendiente · Sesión programada
      </div>
    </div>
  )
}

export default function TeacherCard({
  nombre,
  rol,
  formacion,
  especialidad,
  foto,
  fotoPendiente,
}: TeacherCardProps) {
  return (
    <div
      className="flex flex-col font-body overflow-hidden"
      style={{
        border: '1px solid #E5E3DE',
        borderRadius: '4px',
        background: '#FFFFFF',
      }}
    >
      {/* Photo area */}
      <div className="overflow-hidden">
        {foto ? (
          <img
            src={foto}
            alt={`Fotografía de ${nombre}, ${rol} del CEIE UAI`}
            className="w-full h-48 object-cover"
          />
        ) : fotoPendiente ? (
          <Initials nombre={nombre} />
        ) : (
          <div className="w-full h-48">
            <PlaceholderImage
              label={`Foto: ${nombre}`}
              alt={`Fotografía de ${nombre}, ${rol} del CEIE UAI`}
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-5 py-4 flex flex-col gap-2">
        <h3 className="font-body text-lg font-semibold text-negro">{nombre}</h3>
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: '#C5A028' }}
        >
          {rol}
        </p>
        <div
          className="pt-3 mt-1 flex flex-col gap-2 text-sm"
          style={{ borderTop: '1px solid #E5E3DE' }}
        >
          <div>
            <span className="font-medium text-negro">Formación: </span>
            <span style={{ color: '#6B6B6B' }}>{formacion}</span>
          </div>
          <div>
            <span className="font-medium text-negro">Especialidad: </span>
            <span style={{ color: '#6B6B6B' }}>{especialidad}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
