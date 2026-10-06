'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { ROUTES, type Lang } from '@/lib/routes'
import { ACTIVE_LANGS } from '@/lib/site'

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export interface NavMenu {
  links: NavItem[]
  cta: { label: string; href: string }
}

interface NavbarProps {
  lang: 'es' | 'en' | 'pt' | 'zh'
  currentPath: string
  menu: NavMenu
}


const langMeta: Record<string, { code: string; label: string }> = {
  es: { code: 'es', label: 'Español' },
  en: { code: 'gb', label: 'English' },
  pt: { code: 'br', label: 'Português' },
  zh: { code: 'cn', label: '中文' },
}

function FlagImg({ code, label }: { code: string; label: string }) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={`https://flagcdn.com/24x18/${code}.png`}
      srcSet={`https://flagcdn.com/48x36/${code}.png 2x`}
      width={24}
      height={18}
      alt=""
      style={{ display: 'inline-block', borderRadius: '2px', objectFit: 'cover' }}
    />
  )
}


function getLangPath(currentPath: string, currentLang: Lang, targetLang: Lang): string {
  const defaults: Record<Lang, string> = { es: '/', en: '/en', pt: '/pt', zh: '/zh' }
  const quad = ROUTES.find((r) => r[currentLang] === currentPath)
  return quad ? quad[targetLang] : defaults[targetLang]
}

const NAV_ARIA = {
  es: { main: 'Navegación principal', open: 'Abrir menú', close: 'Cerrar menú', language: 'Idioma', skip: 'Saltar al contenido', sections: 'Secciones de' },
  en: { main: 'Main navigation', open: 'Open menu', close: 'Close menu', language: 'Language', skip: 'Skip to content', sections: 'Sections of' },
  pt: { main: 'Navegação principal', open: 'Abrir menu', close: 'Fechar menu', language: 'Idioma', skip: 'Pular para o conteúdo', sections: 'Seções de' },
  zh: { main: '主导航', open: '打开菜单', close: '关闭菜单', language: '语言', skip: '跳至正文', sections: '栏目：' },
}

export default function NavbarClient({ lang, currentPath, menu: nav }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const desktopRef = useRef<HTMLDivElement>(null)

  const isActive = (href: string) => currentPath === href

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
      if (desktopRef.current && !desktopRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') { setOpenMenu(null); setLangOpen(false) }
    }
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <a
      href="#contenido"
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-2 focus-visible:left-2 focus-visible:z-[100] focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-semibold"
      style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
    >
      {NAV_ARIA[lang].skip}
    </a>
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        background: '#1d1e20',
        borderBottom: '1px solid #6493b5',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.45)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
      aria-label={NAV_ARIA[lang].main}
    >
      <div className="w-full px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={lang === 'es' ? '/' : lang === 'pt' ? '/pt' : lang === 'zh' ? '/zh' : '/en'} className="flex items-center shrink-0">
            <Image
              src="/images/logo-ceie.png"
              alt="CEIE — Centro de Enseñanza Integral del Español · Universidad Adolfo Ibáñez"
              width={200}
              height={45}
              priority
              style={{ height: '45px', width: 'auto' }}
            />
          </Link>

          {/* Desktop nav */}
          <div ref={desktopRef} className="hidden xl:flex flex-1 items-center justify-center gap-1">
            {nav.links.map((link) => {
              const active = isActive(link.href)
              const hasChildren = !!link.children?.length
              const isOpen = openMenu === link.href
              return (
                <div
                  key={link.href}
                  className="relative flex items-center"
                  onMouseEnter={() => hasChildren && setOpenMenu(link.href)}
                  onMouseLeave={() => hasChildren && setOpenMenu((m) => (m === link.href ? null : m))}
                >
                  <Link
                    href={link.href}
                    className={`relative group font-body text-sm font-medium uppercase tracking-wider py-1 transition-colors duration-200 ${hasChildren ? 'pl-4 pr-1' : 'px-4'} ${active ? 'text-dorado' : 'text-white/80 hover:text-dorado'}`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 h-0.5 bg-dorado transition-all duration-300 ${
                        active ? (hasChildren ? 'w-[calc(100%-20px)]' : 'w-[calc(100%-32px)]') : 'w-0 group-hover:w-[calc(100%-32px)]'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      // Mouse clicks always open (hover already did); keyboard (detail 0) toggles.
                      onClick={(e) => setOpenMenu(isOpen && e.detail === 0 ? null : link.href)}
                      className="p-1 mr-2 text-white/70 hover:text-dorado focus:outline-none focus-visible:ring-2 rounded"
                      aria-expanded={isOpen}
                      aria-label={`${NAV_ARIA[lang].sections} ${link.label}`}
                    >
                      <ChevronDown size={14} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                  )}
                  {hasChildren && isOpen && (
                    <div className="absolute left-0 top-full pt-2 z-50">
                      <ul
                        className={`py-2 ${link.children!.length > 6 ? 'grid grid-cols-2 w-[30rem]' : 'w-72'}`}
                        style={{ background: '#1d1e20', border: '1px solid #2D2D2D', borderTop: '2px solid #6493b5', borderRadius: '0 0 4px 4px', boxShadow: '0 8px 24px rgba(0,0,0,0.45)' }}
                      >
                        {link.children!.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpenMenu(null)}
                              className="block px-4 py-2 font-body text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-150"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right: CTA + lang toggle */}
          <div className="hidden xl:flex items-center gap-4">
            <Link
              href={nav.cta.href}
              className="font-body text-sm font-medium px-6 py-2 transition-colors duration-200"
              style={{
                background: '#6493b5',
                color: '#1d1e20',
                borderRadius: '2px',
              }}
            >
              {nav.cta.label}
            </Link>

            {/* Language dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-2 font-body text-sm font-medium text-white/80 hover:text-white px-3 py-1.5 transition-colors duration-200"
                style={{ borderRadius: '2px', border: '1px solid rgba(255,255,255,0.15)' }}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <FlagImg code={langMeta[lang].code} label={langMeta[lang].label} />
                <span>{langMeta[lang].label}</span>
                <ChevronDown
                  size={13}
                  style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                />
              </button>

              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-1 w-40 py-1 z-50"
                  style={{ background: '#1d1e20', border: '1px solid #2D2D2D', borderRadius: '4px', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
                  role="listbox"
                  aria-label={NAV_ARIA[lang].language}
                >
                  {ACTIVE_LANGS.map((l) => (
                    <Link
                      key={l}
                      href={lang === l ? currentPath : getLangPath(currentPath, lang, l)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-body transition-colors duration-150 hover:bg-white/10"
                      style={{ color: lang === l ? '#6493b5' : 'rgba(255,255,255,0.75)' }}
                      onClick={() => setLangOpen(false)}
                      role="option"
                      aria-selected={lang === l}
                    >
                      <FlagImg code={langMeta[l].code} label={langMeta[l].label} />
                      <span>{langMeta[l].label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? NAV_ARIA[lang].close : NAV_ARIA[lang].open}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          className="xl:hidden w-full py-4 px-6 flex flex-col gap-4 max-h-[calc(100vh-4rem)] overflow-y-auto"
          style={{ background: '#1d1e20', borderTop: '1px solid #2D2D2D' }}
        >
          {nav.links.map((link) => {
            const expanded = mobileExpanded === link.href
            return (
              <div key={link.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="font-body text-sm font-medium text-white/80 uppercase tracking-widest py-2 transition-colors duration-200 hover:text-dorado"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {!!link.children?.length && (
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(expanded ? null : link.href)}
                      className="p-2 text-white/70 focus:outline-none focus-visible:ring-2 rounded"
                      aria-expanded={expanded}
                      aria-label={`${NAV_ARIA[lang].sections} ${link.label}`}
                    >
                      <ChevronDown size={18} style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                  )}
                </div>
                {expanded && link.children && (
                  <ul className="flex flex-col pl-4 pb-2" style={{ borderLeft: '2px solid #6493b5' }}>
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1.5 font-body text-sm text-white/70 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
          <Link
            href={nav.cta.href}
            className="font-body text-sm font-medium px-6 py-2 text-center mt-2 transition-colors duration-200"
            style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
            onClick={() => setMobileOpen(false)}
          >
            {nav.cta.label}
          </Link>
          <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
            {ACTIVE_LANGS.map((l) => (
              <Link
                key={l}
                href={lang === l ? currentPath : getLangPath(currentPath, lang, l)}
                className="flex items-center gap-3 px-2 py-2 text-sm font-body rounded transition-colors hover:bg-white/10"
                style={{ color: lang === l ? '#6493b5' : 'rgba(255,255,255,0.7)' }}
                onClick={() => setMobileOpen(false)}
              >
                <FlagImg code={langMeta[l].code} label={langMeta[l].label} />
                <span>{langMeta[l].label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
    </>
  )
}
