import type { Metadata } from 'next'
import SiteDocument from '@/components/SiteDocument'

export const metadata: Metadata = {
  title: 'CEIE UAI — Centro de Enseñanza Integral del Español',
  description: 'Centro de Enseñanza Integral del Español. Universidad Adolfo Ibáñez. Viña del Mar, Chile.',
}

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="es">{children}</SiteDocument>
}
