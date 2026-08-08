import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_PT } from '@/data/content.legal.pt'

export const metadata: Metadata = {
  title: 'Aviso Legal | CEIE UAI',
  description: 'Aviso legal do Centro de Ensino Integral do Espanhol na Universidad Adolfo Ibáñez.',
}

export default function AvisoLegalPTPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/aviso-legal" />
      <LegalPageTemplate lang="pt" title={LEGAL_PT.legalNotice.title} sections={LEGAL_PT.legalNotice.sections} lastUpdated="Agosto 2026" />
      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
