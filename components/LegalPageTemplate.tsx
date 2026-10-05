
interface LegalSection {
  heading: string
  body: string
  table?: { headers: string[]; rows: string[][] }
}

interface LegalPageTemplateProps {
  lang?: 'es' | 'en' | 'pt' | 'zh'
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
        style={{ background: '#1d1e20', minHeight: '200px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {lang === 'es' ? 'Última actualización:' : lang === 'pt' ? 'Última atualização:' : lang === 'zh' ? '最后更新：' : 'Last updated:'} {lastUpdated}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 py-12 max-w-3xl">

        <div className="flex flex-col gap-8">
          {sections.map((section, i) => (
            <section key={i}>
              <h2
                className="font-body text-xl font-semibold mb-3 pb-2"
                style={{
                  color: '#1d1e20',
                  borderBottom: '2px solid #6493b5',
                }}
              >
                {section.heading}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>
                {section.body}
              </p>
              {section.table && (
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: '#1d1e20' }}>
                        {section.table.headers.map((h) => (
                          <th key={h} className="text-left text-xs font-medium uppercase tracking-widest px-3 py-2" style={{ color: '#6493b5' }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, r) => (
                        <tr key={r} style={{ background: r % 2 === 0 ? '#F4F2EE' : '#FFFFFF' }}>
                          {row.map((cell, c) => (
                            <td key={c} className="px-3 py-2 align-top" style={{ color: '#2D2D2D', borderBottom: '1px solid #E5E3DE' }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
