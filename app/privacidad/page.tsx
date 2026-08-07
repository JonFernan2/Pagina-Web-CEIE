import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_ES } from '@/data/content.legal.es'

export const metadata: Metadata = {
  title: 'Política de Privacidad | CEIE UAI',
  description: 'Política de privacidad del Centro de Enseñanza Integral del Español de la Universidad Adolfo Ibáñez.',
}

export default function PrivacidadPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/privacidad" />
      <LegalPageTemplate
        lang="es"
        title={LEGAL_ES.privacidad.title}
        sections={LEGAL_ES.privacidad.sections}
        lastUpdated="Agosto 2026"
      />
      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
