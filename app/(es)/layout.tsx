import SiteDocument from '@/components/SiteDocument'
import { siteMetadata } from '@/lib/site'
import { HOME_ES } from '@/data/content.es'

export const metadata = siteMetadata('es', HOME_ES.meta.title, HOME_ES.meta.description)

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="es">{children}</SiteDocument>
}
