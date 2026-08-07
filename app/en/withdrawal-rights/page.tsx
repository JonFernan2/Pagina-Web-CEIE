import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_EN } from '@/data/content.en'

export const metadata: Metadata = {
  title: 'Withdrawal Rights | CEIE UAI',
  description: 'Information on withdrawal rights for CEIE programs at Universidad Adolfo Ibáñez.',
}

export default function WithdrawalENPage() {
  return (
    <>
      <Navbar lang="en" currentPath="/en/withdrawal-rights" />
      <LegalPageTemplate lang="en" title={LEGAL_EN.withdrawalRights.title} sections={LEGAL_EN.withdrawalRights.sections} lastUpdated="August 2026" />
      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
