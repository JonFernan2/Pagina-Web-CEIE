import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_ES } from '@/data/content.legal.es'

export const metadata: Metadata = {
  title: 'Aviso Legal | CEIE UAI',
  description: 'Aviso legal del Centro de Enseñanza Integral del Español de la Universidad Adolfo Ibáñez.',
}

export default function AvisoLegalPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/aviso-legal" />
      <LegalPageTemplate
        lang="es"
        title={LEGAL_ES.legalNotice.title}
        sections={LEGAL_ES.legalNotice.sections}
        lastUpdated="Agosto 2026"
      />
      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
