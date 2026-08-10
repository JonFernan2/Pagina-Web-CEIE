import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import TestimonialCard from '@/components/TestimonialCard'
import { VOICES_EN } from '@/data/content.en'
import { TESTIMONIALS } from '@/data/testimonials'

export const metadata: Metadata = {
  title: VOICES_EN.meta.title,
  description: VOICES_EN.meta.description,
}

export default function VoicesENPage() {
  return (
    <>
      <Navbar lang="en" currentPath="/en/voices-of-the-centre" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">{VOICES_EN.hero.h1}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{VOICES_EN.hero.subtitle}</p>
        </div>
      </div>

      {/* Video — international student experience */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl text-center mb-4">
            The experience in their own words
          </h2>
          <p className="text-center font-body mb-10 max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
            International students share what it was like to live and learn Spanish at Universidad Adolfo Ibáñez, Viña del Mar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'hGd8OBLONvc', title: 'International student experience at UAI — CEIE', caption: 'Credits: Mathias Adolf Harboe Damian' },
              { id: '3YX9koYxJFw', title: 'Student testimonial · CEIE UAI', caption: 'Student testimonial · CEIE UAI' },
              { id: 'HX0w8KHPNy4', title: 'Student testimonial · CEIE UAI', caption: 'Student testimonial · CEIE UAI' },
              { id: 'deSIhGuke28', title: 'Student testimonial · CEIE UAI', caption: 'Student testimonial · CEIE UAI' },
              { id: 'LdjXogITqU8', title: 'Student testimonial · CEIE UAI', caption: 'Student testimonial · CEIE UAI' },
              { id: 'R9STi-TZqK0', title: 'Student testimonial · CEIE UAI', caption: 'Student testimonial · CEIE UAI' },
            ].map((v) => (
              <div key={v.id}>
                <div className="overflow-hidden" style={{ borderRadius: '4px', border: '1px solid #E5E3DE' }}>
                  <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
                    />
                  </div>
                </div>
                <p className="text-xs mt-2 font-body" style={{ color: '#6B6B6B' }}>{v.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div
            className="text-sm px-4 py-3 mb-8 font-body"
            style={{ background: '#FEF9C3', borderLeft: '4px solid #CA8A04', borderRadius: '2px', color: '#78350F' }}
          >
            <span className="font-semibold">Note:</span> Real student testimonials will be added once CEIE authorizes their publication. Current entries are structural placeholders.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard
                key={t.initials}
                initials={t.initials}
                nombre={t.nombre}
                pais={t.pais}
                bandera={t.bandera}
                programa={t.programa}
                nivelAlcanzado={t.nivelAlcanzado}
                texto={t.texto}
                fecha={t.fecha}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
