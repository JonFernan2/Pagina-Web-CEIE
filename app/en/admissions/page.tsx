import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import AdmissionSteps from '@/components/AdmissionSteps'
import { ADMISSIONS_EN } from '@/data/content.en'

export default function AdmissionsENPage() {
  const d = ADMISSIONS_EN

  return (
    <>
      <Navbar lang="en" currentPath="/en/admissions" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">{d.hero.h1}</h1>
          <p className="text-white/70 text-lg">{d.hero.subtitle}</p>
        </div>
      </div>

      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl mb-10 text-center">Admission process</h2>
          <AdmissionSteps steps={d.steps} />
        </div>
      </section>

      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl mb-8">{d.requirements.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#1d1e20' }}>
                  {d.requirements.table.headers.map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest" style={{ color: '#6493b5' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.requirements.table.rows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#C7C2ba' : '#FFFFFF' }}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3" style={{ color: '#2D2D2D', borderBottom: '1px solid #E5E3DE' }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl mb-8 text-center">{d.form.title}</h2>
          <iframe
            src="https://forms.cloud.microsoft/r/hKxAtJqgm5?embed=true"
            width="100%"
            height="800"
            frameBorder={0}
            marginWidth={0}
            marginHeight={0}
            style={{ border: 'none', maxWidth: '100%', borderRadius: '4px' }}
            allowFullScreen
          />
        </div>
      </section>

      {/* Upcoming cohorts */}
      <section style={{ background: '#FFFFFF' }} className="py-12">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-2xl mb-3">{d.cohorts.title}</h2>
          <p className="text-sm mb-6" style={{ color: '#6B6B6B' }}>{d.cohorts.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {d.cohorts.rows.map((row) => (
              <div key={row.program} className="px-4 py-3" style={{ background: '#F5F4F1', borderLeft: '3px solid #6493b5' }}>
                <p className="text-sm font-semibold text-negro mb-0.5">{row.program}</p>
                <p className="text-sm" style={{ color: '#2D2D2D' }}>{row.schedule}</p>
                {row.detail && <p className="text-xs mt-1" style={{ color: '#6B6B6B' }}>{row.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
