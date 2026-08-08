import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProductAccordion from '@/components/ProductAccordion'
import { PROGRAMS_DATA } from '@/data/programs'
import { PROGRAMS_ES } from '@/data/content.es'

export const metadata: Metadata = {
  title: PROGRAMS_ES.meta.title,
  description: PROGRAMS_ES.meta.description,
}

export default function ProgramasPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/programas-y-cursos" />

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            {PROGRAMS_ES.hero.h1}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">{PROGRAMS_ES.hero.subtitle}</p>
        </div>
      </div>

      {/* Intro */}
      <section style={{ background: '#C7C2ba' }} className="py-12">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-base leading-relaxed mb-4" style={{ color: '#2D2D2D' }}>
            {PROGRAMS_ES.intro.p1}
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>
            {PROGRAMS_ES.intro.p2}
          </p>
        </div>
      </section>

      {/* Products accordion */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <ProductAccordion programs={PROGRAMS_DATA} />
        </div>
      </section>

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
