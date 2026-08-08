import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_ZH } from '@/data/content.legal.zh'

export const metadata: Metadata = {
  title: '服务条款 | CEIE UAI',
  description: 'Universidad Adolfo Ibáñez西班牙语教学中心服务条款。',
}

export default function TermsAndConditionsZHPage() {
  return (
    <>
      <Navbar lang="zh" currentPath="/zh/terms-and-conditions" />
      <LegalPageTemplate lang="zh" title={LEGAL_ZH.condicoesContratacao.title} sections={LEGAL_ZH.condicoesContratacao.sections} lastUpdated="2026年8月" />
      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
