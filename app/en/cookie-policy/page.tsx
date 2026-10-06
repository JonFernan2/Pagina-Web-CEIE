import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_EN } from '@/data/content.en'

export const metadata: Metadata = {
  title: 'Cookie Policy | CEIE UAI',
  description: 'Cookie policy of the Spanish Language Teaching Centre at Universidad Adolfo Ibáñez.',
}

export default function CookiePolicyENPage() {
  return (
    <>
      <Navbar lang="en" currentPath="/en/cookie-policy" />
      <main id="contenido">
      <LegalPageTemplate lang="en" title={LEGAL_EN.cookiePolicy.title} sections={LEGAL_EN.cookiePolicy.sections} lastUpdated="October 2026" />
      </main>
      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
