import PlaceholderImage from './PlaceholderImage'

interface TeacherCardProps {
  nombre: string
  rol: string
  titulo: string
  formacionLista: string[]
  bio: string
  email: string
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
      className="relative w-full h-56 flex flex-col items-center justify-center"
      style={{ background: '#1A1A1A', border: '2px dashed #C5A028', borderRadius: '4px 4px 0 0' }}
    >
      <span className="font-display font-bold text-5xl mb-2" style={{ color: '#C5A028' }}>
        {initials}
      </span>
      <div
        className="absolute bottom-3 left-0 right-0 mx-4 py-1 text-center text-xs font-body font-medium"
        style={{ background: '#DC2626', color: '#FFFFFF', borderRadius: '2px' }}
      >
        Fotografía pendiente · Sesión programada
      </div>
    </div>
  )
}

export default function TeacherCard({
  nombre, rol, titulo, formacionLista, bio, email, foto, fotoPendiente,
}: TeacherCardProps) {
  return (
    <div
      className="flex flex-col font-body overflow-hidden"
      style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}
    >
      {/* Photo */}
      <div className="overflow-hidden shrink-0">
        {foto ? (
          <img
            src={foto}
            alt={`Fotografía de ${nombre}, ${rol} del CEIE UAI`}
            className="w-full h-56 object-cover object-top"
          />
        ) : fotoPendiente ? (
          <Initials nombre={nombre} />
        ) : (
          <div className="w-full h-56">
            <PlaceholderImage label={`Foto: ${nombre}`} alt={`Fotografía de ${nombre}`} />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-5 py-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-body text-lg font-semibold text-negro leading-tight">{nombre}</h3>
          <p className="text-xs font-medium uppercase tracking-widest mt-1" style={{ color: '#C5A028' }}>
            {rol}
          </p>
          <p className="text-xs mt-1" style={{ color: '#6B6B6B' }}>{titulo}</p>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed" style={{ color: '#2D2D2D', borderTop: '1px solid #E5E3DE', paddingTop: '12px' }}>
          {bio}
        </p>

        {/* Formación */}
        <div style={{ borderTop: '1px solid #E5E3DE', paddingTop: '10px' }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-negro mb-2">Formación</p>
          <ul className="flex flex-col gap-1">
            {formacionLista.map((item, i) => (
              <li key={i} className="text-xs flex gap-2" style={{ color: '#6B6B6B' }}>
                <span style={{ color: '#C5A028', flexShrink: 0 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="text-xs mt-auto hover:underline"
          style={{ color: '#C5A028' }}
        >
          {email}
        </a>
      </div>
    </div>
  )
}
