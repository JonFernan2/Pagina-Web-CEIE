import SiteDocument from '@/components/SiteDocument'
import { siteMetadata } from '@/lib/site'
import { HOME_PT } from '@/data/content.pt'

export const metadata = siteMetadata('pt', HOME_PT.meta.title, HOME_PT.meta.description)

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="pt">{children}</SiteDocument>
}
