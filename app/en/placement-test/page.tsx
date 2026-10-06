import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SHOW_PLACEMENT_TEST } from '@/lib/site'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import PlacementTest from '@/components/PlacementTest'

export const metadata: Metadata = {
  robots: SHOW_PLACEMENT_TEST ? undefined : { index: false },
  title: 'Spanish placement test | CEIE UAI',
  description: 'Orientative test to estimate your Spanish level according to the CEFR (A1–C1) and find the right CEIE UAI programme for you.',
}

export default function PlacementTestPage() {
  if (!SHOW_PLACEMENT_TEST) notFound()

  return (
    <>
      <Navbar lang="en" currentPath="/en/placement-test" />
      <main id="contenido">

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">Placement test</h1>
          <p className="text-white/70 text-lg max-w-2xl">Estimate your Spanish level in about 15 minutes and find the right CEIE course for you.</p>
        </div>
      </div>

      <section style={{ background: '#C7C2ba' }} className="py-12 md:py-16 px-4 md:px-6">
        <PlacementTest lang="en" />
      </section>

      </main>

      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
