import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_PT } from '@/data/content.legal.pt'

export const metadata: Metadata = {
  title: 'Política de Privacidade | CEIE UAI',
  description: 'Política de privacidade do Centro de Ensino Integral do Espanhol na Universidad Adolfo Ibáñez.',
}

export default function PrivacidadePTPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/privacidade" />
      <LegalPageTemplate lang="pt" title={LEGAL_PT.privacidade.title} sections={LEGAL_PT.privacidade.sections} lastUpdated="Agosto 2026" />
      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
