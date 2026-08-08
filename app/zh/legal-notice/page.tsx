import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_ZH } from '@/data/content.legal.zh'

export const metadata: Metadata = {
  title: '法律声明 | CEIE UAI',
  description: 'Universidad Adolfo Ibáñez西班牙语教学中心法律声明。',
}

export default function LegalNoticeZHPage() {
  return (
    <>
      <Navbar lang="zh" currentPath="/zh/legal-notice" />
      <LegalPageTemplate lang="zh" title={LEGAL_ZH.legalNotice.title} sections={LEGAL_ZH.legalNotice.sections} lastUpdated="2026年8月" />
      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
