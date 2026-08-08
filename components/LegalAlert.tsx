interface LegalAlertProps {
  lang?: 'es' | 'en' | 'pt' | 'zh'
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
  pt: {
    title: '⚠️ CONTEÚDO PENDENTE DE REVISÃO JURÍDICA',
    body: 'O conteúdo desta página está em processo de elaboração pela assessoria jurídica da UAI. Esta versão é um placeholder estrutural para o processo de acreditação SACIC.',
  },
  zh: {
    title: '⚠️ 内容待法律顾问审核',
    body: '本页面内容正由UAI法律顾问起草中。此版本为SACIC认证流程的结构性占位文本。',
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
