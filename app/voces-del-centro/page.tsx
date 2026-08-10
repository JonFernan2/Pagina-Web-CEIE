import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import VideoCarousel from '@/components/VideoCarousel'
import { VOICES_ES } from '@/data/content.es'

export const metadata: Metadata = {
  title: VOICES_ES.meta.title,
  description: VOICES_ES.meta.description,
}

const VIDEOS = [
  { id: 'hGd8OBLONvc', title: 'Experiencia de estudiantes internacionales en la UAI — CEIE', caption: 'Créditos: Mathias Adolf Harboe Damian' },
  { id: '3YX9koYxJFw', title: 'Testimonio · CEIE UAI', caption: 'Testimonio · CEIE UAI' },
  { id: 'HX0w8KHPNy4', title: 'Testimonio · CEIE UAI', caption: 'Testimonio · CEIE UAI' },
  { id: 'deSIhGuke28', title: 'Testimonio · CEIE UAI', caption: 'Testimonio · CEIE UAI' },
  { id: 'LdjXogITqU8', title: 'Testimonio · CEIE UAI', caption: 'Testimonio · CEIE UAI' },
  { id: 'R9STi-TZqK0', title: 'Testimonio · CEIE UAI', caption: 'Testimonio · CEIE UAI' },
]

export default function VocesDelCentroPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/voces-del-centro" />

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            {VOICES_ES.hero.h1}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">{VOICES_ES.hero.subtitle}</p>
        </div>
      </div>

      {/* Carrusel de videos */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl text-center mb-4">
            La experiencia en primera persona
          </h2>
          <p className="text-center font-body mb-10 max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
            Estudiantes y Académicos internacionales comparten cómo fue vivir y aprender español en la Universidad Adolfo Ibáñez, Viña del Mar.
          </p>
          <VideoCarousel videos={VIDEOS} />
        </div>
      </section>

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
