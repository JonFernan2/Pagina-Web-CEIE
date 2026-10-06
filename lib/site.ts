import type { Metadata } from 'next'
import type { Lang } from './routes'

// Vercel exposes the production domain at build time, so this follows a future custom domain automatically.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://pagina-web-ceie.vercel.app')

export const HREFLANG: Record<Lang, string> = { es: 'es', en: 'en', pt: 'pt', zh: 'zh-CN' }

const OG_LOCALE: Record<Lang, string> = { es: 'es_CL', en: 'en_US', pt: 'pt_BR', zh: 'zh_CN' }

export function siteMetadata(lang: Lang, title: string, description: string): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      ],
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      type: 'website',
      siteName: 'CEIE UAI',
      locale: OG_LOCALE[lang],
      title,
      description,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CEIE · Universidad Adolfo Ibáñez' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  }
}

// "Convocatorias" (home section + footer link to postula.uai.cl). Hidden while there are no open calls; set to true to show again.
export const SHOW_CALLS = false
export const CALLS_URL = 'https://postula.uai.cl/'

// Placement test (/test-de-nivel and its translations): pages, menu link, Programs CTA and sitemap entry.
// Hidden for now; set to true to show it again.
export const SHOW_PLACEMENT_TEST = false
export const PLACEMENT_TEST_PATHS = ['/test-de-nivel', '/en/placement-test', '/pt/teste-de-nivel', '/zh/placement-test']
