interface LegalAlertProps {
  lang?: 'es' | 'en'
}

const copy = {
  es: {
    title: '⚠️ TEXTO PENDIENTE DE REVISIÓN JURÍDICA',
    body: 'El contenido de esta página está en proceso de redacción por la asesoría legal de la UAI. Esta versión es un placeholder estructural para efectos del proceso SACIC.',
  },
  en: {
    title: '⚠️ CONTENT PENDING LEGAL REVIEW',
    body: "The content of this page is being drafted by UAI's legal counsel. This is a structural placeholder for the SACIC accreditation process.",
  },
}

export default function LegalAlert({ lang = 'es' }: LegalAlertProps) {
  const t = copy[lang]
  return (
    <div
      className="mb-8 p-4 font-body"
      style={{
        background: '#FEF9C3',
        borderLeft: '4px solid #CA8A04',
        borderRadius: '2px',
      }}
    >
      <p className="font-semibold text-sm mb-1" style={{ color: '#92400E' }}>
        {t.title}
      </p>
      <p className="text-sm" style={{ color: '#78350F' }}>
        {t.body}
      </p>
    </div>
  )
}
