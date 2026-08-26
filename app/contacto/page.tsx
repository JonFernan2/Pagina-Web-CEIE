import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { CONTACT_ES } from '@/data/content.es'

export default function ContactoPage() {
  const d = CONTACT_ES

  return (
    <>
      <Navbar lang="es" currentPath="/contacto" />

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '240px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">
            {d.hero.h1}
          </h1>
        </div>
      </div>

      {/* Content */}
      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <div>
              <h2 className="font-display font-bold text-negro text-2xl mb-6">{d.form.title}</h2>
              <iframe
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

            {/* Contact info */}
            <div>
              <h2 className="font-display font-bold text-negro text-2xl mb-6">{d.info.title}</h2>
              <div className="flex flex-col gap-4 mb-6 text-sm" style={{ color: '#2D2D2D' }}>
                <div>
                  <p className="font-semibold text-negro">{d.info.campus}</p>
                  <p style={{ color: '#6B6B6B' }}>{d.info.address}</p>
                </div>
                <p>{d.info.phone}</p>
                {d.info.emails.map((em: string) => (
                  <a key={em} href={`mailto:${em}`} className="hover:underline" style={{ color: '#6493b5' }}>{em}</a>
                ))}
                <p>{d.info.hours}</p>
                {d.info.social.map((s) => (
                  <p key={s} style={{ color: '#6B6B6B' }}>{s}</p>
                ))}
              </div>

              <div className="w-full aspect-video overflow-hidden" style={{ borderRadius: '4px', border: '2px solid #6493b5' }}>
                <img
                  src="/images/campus-vina-aerea.jpg"
                  alt="Vista aérea del Campus UAI Viña del Mar — Padre Hurtado 750"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
