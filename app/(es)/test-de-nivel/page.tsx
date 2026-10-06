import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SHOW_PLACEMENT_TEST } from '@/lib/site'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import PlacementTest from '@/components/PlacementTest'

export const metadata: Metadata = {
  robots: SHOW_PLACEMENT_TEST ? undefined : { index: false },
  title: 'Test de nivel de español | CEIE UAI',
  description: 'Test orientativo para estimar tu nivel de español según el MCER (A1–C1) y descubrir qué programa del CEIE UAI es para ti.',
}

export default function PlacementTestPage() {
  if (!SHOW_PLACEMENT_TEST) notFound()

  return (
    <>
      <Navbar lang="es" currentPath="/test-de-nivel" />
      <main id="contenido">

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">Test de nivel</h1>
          <p className="text-white/70 text-lg max-w-2xl">Estima tu nivel de español en unos 15 minutos y descubre qué curso del CEIE es para ti.</p>
        </div>
      </div>

      <section style={{ background: '#C7C2ba' }} className="py-12 md:py-16 px-4 md:px-6">
        <PlacementTest lang="es" />
      </section>

      </main>

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
