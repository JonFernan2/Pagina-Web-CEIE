import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { CONTACT_ZH } from '@/data/content.zh'

export const metadata: Metadata = {
  title: CONTACT_ZH.meta.title,
  description: CONTACT_ZH.meta.description,
}

export default function ContactZHPage() {
  const d = CONTACT_ZH

  return (
    <>
      <Navbar lang="zh" currentPath="/zh/contact" />
      <main id="contenido">

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">{d.hero.h1}</h1>
        </div>
      </div>

      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-display font-bold text-negro text-3xl mb-8">{d.form.title}</h2>
              <iframe
                title="联系表单"
                src="https://forms.cloud.microsoft/r/nAPfLyq21W?embed=true"
                width="100%"
                height="700"
                frameBorder={0}
                marginWidth={0}
                marginHeight={0}
                style={{ border: 'none', maxWidth: '100%', borderRadius: '4px' }}
                allowFullScreen
              />
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-negro text-3xl">{d.info.title}</h2>
              <div className="flex flex-col gap-3 text-sm" style={{ color: '#2D2D2D' }}>
                <p className="font-semibold text-base text-negro">{d.info.campus}</p>
                <p>{d.info.address}</p>
                <p>{d.info.phone}</p>
                {d.info.emails.map((em) => (
                  <a key={em} href={`mailto:${em}`} className="underline underline-offset-2 hover:no-underline" style={{ color: '#1d1e20', textDecorationColor: '#6493b5' }}>{em}</a>
                ))}
                <p>{d.info.hours}</p>
              </div>
              <div className="w-full aspect-video overflow-hidden" style={{ borderRadius: '4px', border: '2px solid #6493b5' }}>
                <img
                  src="/images/campus-vina-aerea.jpg"
                  alt="UAI Viña del Mar 校区鸟瞰图 — Padre Hurtado 750"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
