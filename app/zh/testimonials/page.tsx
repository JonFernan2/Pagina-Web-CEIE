import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import VideoCarousel from '@/components/VideoCarousel'
import { VOICES_ZH } from '@/data/content.zh'

export const metadata: Metadata = {
  title: VOICES_ZH.meta.title,
  description: VOICES_ZH.meta.description,
}

const VIDEOS = [
  { id: 'hGd8OBLONvc', title: '国际学员在UAI的学习体验 — CEIE', caption: '鸣谢：Mathias Adolf Harboe Damian' },
  { id: '3YX9koYxJFw', title: '学员心声 · CEIE UAI', caption: '学员心声 · CEIE UAI' },
  { id: 'HX0w8KHPNy4', title: '学员心声 · CEIE UAI', caption: '学员心声 · CEIE UAI' },
  { id: 'deSIhGuke28', title: '学员心声 · CEIE UAI', caption: '学员心声 · CEIE UAI' },
  { id: 'LdjXogITqU8', title: '学员心声 · CEIE UAI', caption: '学员心声 · CEIE UAI' },
  { id: 'R9STi-TZqK0', title: '学员心声 · CEIE UAI', caption: '学员心声 · CEIE UAI' },
]

export default function TestimonialsZHPage() {
  return (
    <>
      <Navbar lang="zh" currentPath="/zh/testimonials" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">{VOICES_ZH.hero.h1}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{VOICES_ZH.hero.subtitle}</p>
        </div>
      </div>

      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl text-center mb-4">
            用他们自己的话说
          </h2>
          <p className="text-center font-body mb-10 max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
            国际学员与学者分享在阿道夫·伊瓦涅斯大学Viña del Mar生活并学习西班牙语的真实体验。
          </p>
          <VideoCarousel videos={VIDEOS} />
        </div>
      </section>

      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
