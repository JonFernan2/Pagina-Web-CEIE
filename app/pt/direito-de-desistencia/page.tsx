import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_PT } from '@/data/content.legal.pt'

export const metadata: Metadata = {
  title: 'Direito de Desistência | CEIE UAI',
  description: 'Informações sobre o direito de desistência nos programas de espanhol do CEIE na Universidad Adolfo Ibáñez.',
}

export default function DireitoDesistenciaPTPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/direito-de-desistencia" />
      <LegalPageTemplate lang="pt" title={LEGAL_PT.direitoDesistencia.title} sections={LEGAL_PT.direitoDesistencia.sections} lastUpdated="Agosto 2026" />
      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
