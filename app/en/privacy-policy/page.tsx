import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_EN } from '@/data/content.en'

export const metadata: Metadata = {
  title: 'Privacy Policy | CEIE UAI',
  description: 'Privacy policy of the Spanish Language Teaching Centre at Universidad Adolfo Ibáñez.',
}

export default function PrivacyPolicyENPage() {
  return (
    <>
      <Navbar lang="en" currentPath="/en/privacy-policy" />
      <LegalPageTemplate lang="en" title={LEGAL_EN.privacyPolicy.title} sections={LEGAL_EN.privacyPolicy.sections} lastUpdated="August 2026" />
      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
