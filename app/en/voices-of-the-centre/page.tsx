import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import VideoCarousel from '@/components/VideoCarousel'
import { VOICES_EN } from '@/data/content.en'

export const metadata: Metadata = {
  title: VOICES_EN.meta.title,
  description: VOICES_EN.meta.description,
}

const VIDEOS = [
  { id: 'hGd8OBLONvc', title: 'International student experience at UAI — CEIE', caption: 'Credits: Mathias Adolf Harboe Damian' },
  { id: '3YX9koYxJFw', title: 'Student testimonial · CEIE UAI', caption: 'Student testimonial · CEIE UAI' },
  { id: 'HX0w8KHPNy4', title: 'Student testimonial · CEIE UAI', caption: 'Student testimonial · CEIE UAI' },
  { id: 'deSIhGuke28', title: 'Student testimonial · CEIE UAI', caption: 'Student testimonial · CEIE UAI' },
  { id: 'LdjXogITqU8', title: 'Student testimonial · CEIE UAI', caption: 'Student testimonial · CEIE UAI' },
  { id: 'R9STi-TZqK0', title: 'Student testimonial · CEIE UAI', caption: 'Student testimonial · CEIE UAI' },
]

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

      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl text-center mb-4">
            The experience in their own words
          </h2>
          <p className="text-center font-body mb-10 max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
            International students and academics share what it was like to live and learn Spanish at Universidad Adolfo Ibáñez, Viña del Mar.
          </p>
          <VideoCarousel videos={VIDEOS} />
        </div>
      </section>

      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
