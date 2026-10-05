import type { Metadata } from 'next'
import SiteDocument from '@/components/SiteDocument'

export const metadata: Metadata = {
  title: 'CEIE UAI — 西班牙语综合教学中心',
  description: '西班牙语综合教学中心。阿道夫·伊瓦涅斯大学。智利比尼亚德尔马。',
}

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="zh-CN">{children}</SiteDocument>
}
