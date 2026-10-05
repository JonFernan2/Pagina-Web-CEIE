import SiteDocument from '@/components/SiteDocument'
import { siteMetadata } from '@/lib/site'
import { HOME_EN } from '@/data/content.en'

export const metadata = siteMetadata('en', HOME_EN.meta.title, HOME_EN.meta.description)

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>
}
