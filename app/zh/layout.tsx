import SiteDocument from '@/components/SiteDocument'
import { siteMetadata } from '@/lib/site'
import { HOME_ZH } from '@/data/content.zh'

export const metadata = siteMetadata('zh', HOME_ZH.meta.title, HOME_ZH.meta.description)

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="zh-CN">{children}</SiteDocument>
}
