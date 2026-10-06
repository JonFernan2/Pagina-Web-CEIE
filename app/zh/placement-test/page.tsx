import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import PlacementTest from '@/components/PlacementTest'

export const metadata: Metadata = {
  title: '西班牙语水平测试 | CEIE UAI',
  description: '参考性测试，依据CEFR（A1–C1）估算你的西班牙语水平，帮你找到合适的CEIE UAI课程。',
}

export default function PlacementTestPage() {
  return (
    <>
      <Navbar lang="zh" currentPath="/zh/placement-test" />
      <main id="contenido">

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">水平测试</h1>
          <p className="text-white/70 text-lg max-w-2xl">约15分钟估算你的西班牙语水平，找到适合你的CEIE课程。</p>
        </div>
      </div>

      <section style={{ background: '#C7C2ba' }} className="py-12 md:py-16 px-4 md:px-6">
        <PlacementTest lang="zh" />
      </section>

      </main>

      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
