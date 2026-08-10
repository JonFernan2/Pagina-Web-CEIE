import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import VideoCarousel from '@/components/VideoCarousel'
import { VOICES_PT } from '@/data/content.pt'

export const metadata: Metadata = {
  title: VOICES_PT.meta.title,
  description: VOICES_PT.meta.description,
}

const VIDEOS = [
  { id: 'hGd8OBLONvc', title: 'Experiência de estudante internacional na UAI — CEIE', caption: 'Créditos: Mathias Adolf Harboe Damian' },
  { id: '3YX9koYxJFw', title: 'Depoimento · CEIE UAI', caption: 'Depoimento · CEIE UAI' },
  { id: 'HX0w8KHPNy4', title: 'Depoimento · CEIE UAI', caption: 'Depoimento · CEIE UAI' },
  { id: 'deSIhGuke28', title: 'Depoimento · CEIE UAI', caption: 'Depoimento · CEIE UAI' },
  { id: 'LdjXogITqU8', title: 'Depoimento · CEIE UAI', caption: 'Depoimento · CEIE UAI' },
  { id: 'R9STi-TZqK0', title: 'Depoimento · CEIE UAI', caption: 'Depoimento · CEIE UAI' },
]

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

      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl text-center mb-4">
            A experiência com suas próprias palavras
          </h2>
          <p className="text-center font-body mb-10 max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
            Estudantes e Acadêmicos internacionais compartilham como foi viver e aprender espanhol na Universidad Adolfo Ibáñez, Viña del Mar.
          </p>
          <VideoCarousel videos={VIDEOS} />
        </div>
      </section>

      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
