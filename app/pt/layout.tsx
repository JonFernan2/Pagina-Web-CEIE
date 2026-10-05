import type { Metadata } from 'next'
import SiteDocument from '@/components/SiteDocument'

export const metadata: Metadata = {
  title: 'CEIE UAI — Centro de Ensino Integral do Espanhol',
  description: 'Centro de Ensino Integral do Espanhol. Universidad Adolfo Ibáñez. Viña del Mar, Chile.',
}

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="pt">{children}</SiteDocument>
}
