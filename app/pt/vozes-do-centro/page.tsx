import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import TestimonialCard from '@/components/TestimonialCard'
import { VOICES_PT } from '@/data/content.pt'
import { TESTIMONIALS } from '@/data/testimonials'

export const metadata: Metadata = {
  title: VOICES_PT.meta.title,
  description: VOICES_PT.meta.description,
}

export default function VozesDocentroPTPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/vozes-do-centro" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">{VOICES_PT.hero.h1}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{VOICES_PT.hero.subtitle}</p>
        </div>
      </div>

      {/* Video */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl text-center mb-4">
            A experiência com suas próprias palavras
          </h2>
          <p className="text-center font-body mb-10 max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
            Estudantes internacionais compartilham como foi viver e aprender espanhol na Universidad Adolfo Ibáñez, Viña del Mar.
          </p>
          <div
            className="mx-auto overflow-hidden"
            style={{ maxWidth: '800px', borderRadius: '4px', border: '1px solid #E5E3DE', position: 'relative' }}
          >
            <div style={{ position: 'relative', paddingBottom: '49%', overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed/hGd8OBLONvc?rel=0&modestbranding=1"
                title="Experiência de estudante internacional na UAI — CEIE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: '-15%', left: 0, width: '100%', height: '115%', border: 'none', display: 'block' }}
              />
            </div>
          </div>
          <p className="text-xs text-center mt-3 font-body" style={{ color: '#6B6B6B' }}>
            Créditos: Mathias Adolf Harboe Damian
          </p>
        </div>
      </section>

      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div
            className="text-sm px-4 py-3 mb-8 font-body"
            style={{ background: '#FEF9C3', borderLeft: '4px solid #CA8A04', borderRadius: '2px', color: '#78350F' }}
          >
            <span className="font-semibold">Nota:</span> Depoimentos reais de estudantes serão adicionados assim que o CEIE autorizar sua publicação. As entradas atuais são placeholders estruturais.
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

      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
