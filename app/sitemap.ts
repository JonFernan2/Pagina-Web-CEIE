import type { MetadataRoute } from 'next'
import { ROUTES, type Lang } from '@/lib/routes'
import { SITE_URL, HREFLANG } from '@/lib/site'

const LANGS: Lang[] = ['es', 'en', 'pt', 'zh']

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) => {
    const languages: Record<string, string> = { 'x-default': SITE_URL + route.es }
    for (const l of LANGS) languages[HREFLANG[l]] = SITE_URL + route[l]
    return LANGS.map((l) => ({
      url: SITE_URL + route[l],
      changeFrequency: 'monthly' as const,
      priority: route.es === '/' ? 1 : 0.7,
      alternates: { languages },
    }))
  })
}
