import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_ES } from '@/data/content.legal.es'

export const metadata: Metadata = {
  title: 'Condiciones de Contratación | CEIE UAI',
  description: 'Condiciones de contratación de programas de español del CEIE, Universidad Adolfo Ibáñez.',
}

export default function CondicionesContratacionPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/condiciones-contratacion" />
      <LegalPageTemplate
        lang="es"
        title={LEGAL_ES.condicionesContratacion.title}
        sections={LEGAL_ES.condicionesContratacion.sections}
        lastUpdated="Agosto 2026"
      />
      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
