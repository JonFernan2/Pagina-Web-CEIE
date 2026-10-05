import type { Metadata } from 'next'
import SiteDocument from '@/components/SiteDocument'

export const metadata: Metadata = {
  title: 'CEIE UAI — Centro de Enseñanza Integral del Español',
  description: 'Spanish Language Teaching Centre. Universidad Adolfo Ibáñez. Viña del Mar, Chile.',
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>
}
