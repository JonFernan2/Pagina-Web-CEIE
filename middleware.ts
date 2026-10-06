import { NextResponse, type NextRequest } from 'next/server'
import { ROUTES, type Lang } from '@/lib/routes'
import { ACTIVE_LANGS } from '@/lib/site'

// Hidden languages: send visitors (and old links) to the Spanish equivalent of the page.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const lang = pathname.split('/')[1] as Lang
  if (ACTIVE_LANGS.includes(lang)) return NextResponse.next()

  const route = ROUTES.find((r) => r[lang] === pathname.replace(/\/$/, '') || (pathname === `/${lang}/` && r[lang] === `/${lang}`))
  const url = request.nextUrl.clone()
  url.pathname = route ? route.es : '/'
  return NextResponse.redirect(url, 307)
}

export const config = {
  matcher: ['/pt', '/pt/:path*', '/zh', '/zh/:path*'],
}
