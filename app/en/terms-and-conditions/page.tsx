import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_EN } from '@/data/content.en'

export const metadata: Metadata = {
  title: 'Terms and Conditions | CEIE UAI',
  description: 'Terms and conditions for enrolling in CEIE programs at Universidad Adolfo Ibáñez.',
}

export default function TermsENPage() {
  return (
    <>
      <Navbar lang="en" currentPath="/en/terms-and-conditions" />
      <LegalPageTemplate lang="en" title={LEGAL_EN.termsAndConditions.title} sections={LEGAL_EN.termsAndConditions.sections} lastUpdated="August 2026" />
      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
