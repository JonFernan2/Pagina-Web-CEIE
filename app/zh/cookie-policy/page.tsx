import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_ZH } from '@/data/content.legal.zh'

export const metadata: Metadata = {
  title: 'Cookie 政策 | CEIE UAI',
  description: 'Universidad Adolfo Ibáñez西班牙语教学中心Cookie政策。',
}

export default function CookiePolicyZHPage() {
  return (
    <>
      <Navbar lang="zh" currentPath="/zh/cookie-policy" />
      <LegalPageTemplate lang="zh" title={LEGAL_ZH.cookies.title} sections={LEGAL_ZH.cookies.sections} lastUpdated="2026年8月" />
      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
