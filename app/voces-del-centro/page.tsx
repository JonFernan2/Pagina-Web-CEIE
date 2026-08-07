import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import TestimonialCard from '@/components/TestimonialCard'
import { VOICES_ES } from '@/data/content.es'
import { TESTIMONIALS } from '@/data/testimonials'

export const metadata: Metadata = {
  title: VOICES_ES.meta.title,
  description: VOICES_ES.meta.description,
}

export default function VocesDelCentroPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/voces-del-centro" />

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1A1A1A', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            {VOICES_ES.hero.h1}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">{VOICES_ES.hero.subtitle}</p>
        </div>
      </div>

      {/* Testimonials */}
      <section style={{ background: '#F7F5F0' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div
            className="text-sm px-4 py-3 mb-8 font-body"
            style={{
              background: '#FEF9C3',
              borderLeft: '4px solid #CA8A04',
              borderRadius: '2px',
              color: '#78350F',
            }}
          >
            <span className="font-semibold">Nota:</span> Los testimonios reales de estudiantes se incorporarán una vez que el CEIE autorice su publicación. Las fichas actuales son placeholders estructurales.
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

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
