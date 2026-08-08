import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProductAccordion from '@/components/ProductAccordion'
import { PROGRAMS_DATA_ZH } from '@/data/programs.zh'
import { PROGRAMS_ZH } from '@/data/content.zh'

export const metadata: Metadata = {
  title: PROGRAMS_ZH.meta.title,
  description: PROGRAMS_ZH.meta.description,
}

export default function ProgramsZHPage() {
  return (
    <>
      <Navbar lang="zh" currentPath="/zh/programs" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">{PROGRAMS_ZH.hero.h1}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{PROGRAMS_ZH.hero.subtitle}</p>
        </div>
      </div>

      <section style={{ background: '#C7C2ba' }} className="py-12">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-base leading-relaxed mb-4" style={{ color: '#2D2D2D' }}>{PROGRAMS_ZH.intro.p1}</p>
          <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{PROGRAMS_ZH.intro.p2}</p>
        </div>
      </section>

      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <ProductAccordion programs={PROGRAMS_DATA_ZH} lang="zh" />
        </div>
      </section>

      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
