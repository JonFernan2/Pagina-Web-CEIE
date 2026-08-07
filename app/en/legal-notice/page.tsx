import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_EN } from '@/data/content.en'

export const metadata: Metadata = {
  title: 'Legal Notice | CEIE UAI',
  description: 'Legal notice of the Spanish Language Teaching Centre at Universidad Adolfo Ibáñez.',
}

export default function LegalNoticeENPage() {
  return (
    <>
      <Navbar lang="en" currentPath="/en/legal-notice" />
      <LegalPageTemplate lang="en" title={LEGAL_EN.legalNotice.title} sections={LEGAL_EN.legalNotice.sections} lastUpdated="August 2026" />
      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
