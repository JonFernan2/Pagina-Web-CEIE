import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import LegalPageTemplate from '@/components/LegalPageTemplate'
import { LEGAL_ZH } from '@/data/content.legal.zh'

export const metadata: Metadata = {
  title: '撤销权利 | CEIE UAI',
  description: 'Universidad Adolfo Ibáñez西班牙语教学中心撤销权利说明。',
}

export default function WithdrawalRightsZHPage() {
  return (
    <>
      <Navbar lang="zh" currentPath="/zh/withdrawal-rights" />
      <LegalPageTemplate lang="zh" title={LEGAL_ZH.direitoDesistencia.title} sections={LEGAL_ZH.direitoDesistencia.sections} lastUpdated="2026年8月" />
      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
