import LegalAlert from './LegalAlert'

interface LegalSection {
  heading: string
  body: string
}

interface LegalPageTemplateProps {
  lang?: 'es' | 'en'
  title: string
  sections: LegalSection[]
  lastUpdated?: string
}

export default function LegalPageTemplate({
  lang = 'es',
  title,
  sections,
  lastUpdated,
}: LegalPageTemplateProps) {
  return (
    <article className="font-body">
      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1A1A1A', minHeight: '200px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-2 text-sm" style={{ color: '#6B6B6B' }}>
              {lang === 'es' ? 'Última actualización:' : 'Last updated:'} {lastUpdated}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 py-12 max-w-3xl">
        <LegalAlert lang={lang} />

        <div className="flex flex-col gap-8">
          {sections.map((section, i) => (
            <section key={i}>
              <h2
                className="font-body text-xl font-semibold mb-3 pb-2"
                style={{
                  color: '#1A1A1A',
                  borderBottom: '2px solid #C5A028',
                }}
              >
                {section.heading}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
