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

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1A1A1A', minHeight: '280px' }}>
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
          <div
            className="mx-auto overflow-hidden"
            style={{ maxWidth: '800px', borderRadius: '4px', border: '1px solid #E5E3DE', aspectRatio: '16/9' }}
          >
            <iframe
              src="https://www.youtube.com/embed/hGd8OBLONvc?rel=0&modestbranding=1"
              title="International student experience at UAI — CEIE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ border: 'none', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <section style={{ background: '#F7F5F0' }} className="py-16">
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
