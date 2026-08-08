import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_PT } from '@/data/content.legal.pt'

export const metadata: Metadata = {
  title: 'Política de Cookies | CEIE UAI',
  description: 'Política de cookies do Centro de Ensino Integral do Espanhol na Universidad Adolfo Ibáñez.',
}

export default function PoliticaDeCookiesPTPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/politica-de-cookies" />
      <LegalPageTemplate lang="pt" title={LEGAL_PT.cookies.title} sections={LEGAL_PT.cookies.sections} lastUpdated="Agosto 2026" />
      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
