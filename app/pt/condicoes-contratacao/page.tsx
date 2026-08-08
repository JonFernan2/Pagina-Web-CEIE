import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_PT } from '@/data/content.legal.pt'

export const metadata: Metadata = {
  title: 'Condições de Contratação | CEIE UAI',
  description: 'Condições de contratação dos programas de espanhol do CEIE na Universidad Adolfo Ibáñez.',
}

export default function CondicoesContratacaoPTPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/condicoes-contratacao" />
      <LegalPageTemplate lang="pt" title={LEGAL_PT.condicoesContratacao.title} sections={LEGAL_PT.condicoesContratacao.sections} lastUpdated="Agosto 2026" />
      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
