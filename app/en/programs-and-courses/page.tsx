import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramCard from '@/components/ProgramCard'
import { PROGRAMS_EN, HOME_EN } from '@/data/content.en'

export const metadata: Metadata = {
  title: PROGRAMS_EN.meta.title,
  description: PROGRAMS_EN.meta.description,
}

export default function ProgramsENPage() {
  return (
    <>
      <Navbar lang="en" currentPath="/en/programs-and-courses" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1A1A1A', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">{PROGRAMS_EN.hero.h1}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{PROGRAMS_EN.hero.subtitle}</p>
        </div>
      </div>

      <section style={{ background: '#F7F5F0' }} className="py-12">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <p className="text-base leading-relaxed mb-4" style={{ color: '#2D2D2D' }}>{PROGRAMS_EN.intro.p1}</p>
          <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{PROGRAMS_EN.intro.p2}</p>
        </div>
      </section>

      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOME_EN.programs.items.map((p) => (
              <ProgramCard key={p.href} {...p} />
            ))}
          </div>
        </div>
      </section>

      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
