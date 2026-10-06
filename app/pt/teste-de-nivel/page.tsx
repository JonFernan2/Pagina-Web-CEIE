import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import PlacementTest from '@/components/PlacementTest'

export const metadata: Metadata = {
  title: 'Teste de nível de espanhol | CEIE UAI',
  description: 'Teste orientativo para estimar seu nível de espanhol segundo o QECR (A1–C1) e descobrir qual programa do CEIE UAI é ideal para você.',
}

export default function PlacementTestPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/teste-de-nivel" />
      <main id="contenido">

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">Teste de nível</h1>
          <p className="text-white/70 text-lg max-w-2xl">Estime seu nível de espanhol em cerca de 15 minutos e descubra qual curso do CEIE é ideal para você.</p>
        </div>
      </div>

      <section style={{ background: '#C7C2ba' }} className="py-12 md:py-16 px-4 md:px-6">
        <PlacementTest lang="pt" />
      </section>

      </main>

      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
