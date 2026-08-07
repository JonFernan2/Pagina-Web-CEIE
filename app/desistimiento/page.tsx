import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_ES } from '@/data/content.legal.es'

export const metadata: Metadata = {
  title: 'Derecho de Desistimiento | CEIE UAI',
  description: 'Información sobre el derecho de desistimiento de programas del CEIE, Universidad Adolfo Ibáñez.',
}

export default function DesistimientoPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/desistimiento" />
      <LegalPageTemplate
        lang="es"
        title={LEGAL_ES.desistimiento.title}
        sections={LEGAL_ES.desistimiento.sections}
        lastUpdated="Agosto 2026"
      />
      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
