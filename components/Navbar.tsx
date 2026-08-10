'use client'

import { useState, useRef, useEffect, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavbarProps {
  lang: 'es' | 'en' | 'pt' | 'zh'
  currentPath: string
}

const navData = {
  es: {
    links: [
      { label: 'Sobre Nosotros',      href: '/sobre-nosotros' },
      { label: 'Equipo Docente',      href: '/equipo-docente' },
      { label: 'Programas y Cursos',  href: '/programas-y-cursos' },
      { label: 'Voces del Centro',    href: '/voces-del-centro' },
    ],
    cta: { label: 'Admisión', href: '/admision' },
  },
  en: {
    links: [
      { label: 'About Us',              href: '/en/about-us' },
      { label: 'Teaching Team',         href: '/en/teaching-team' },
      { label: 'Programs & Courses',    href: '/en/programs-and-courses' },
      { label: 'Voices of the Centre',  href: '/en/voices-of-the-centre' },
    ],
    cta: { label: 'Apply Now', href: '/en/admissions' },
  },
  pt: {
    links: [
      { label: 'Sobre Nós',            href: '/pt/sobre-nos' },
      { label: 'Equipe Docente',       href: '/pt/equipe-docente' },
      { label: 'Programas e Cursos',   href: '/pt/programas-e-cursos' },
      { label: 'Vozes do Centro',      href: '/pt/vozes-do-centro' },
    ],
    cta: { label: 'Inscrever-se', href: '/pt/admissao' },
  },
  zh: {
    links: [
      { label: '关于我们',    href: '/zh/about-us' },
      { label: '教学团队',    href: '/zh/teaching-team' },
      { label: '课程项目',    href: '/zh/programs' },
      { label: '学生心声',    href: '/zh/testimonials' },
    ],
    cta: { label: '申请入学', href: '/zh/apply' },
  },
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
      alt={label}
      style={{ display: 'inline-block', borderRadius: '2px', objectFit: 'cover' }}
    />
  )
}

const routeQuad: Array<{ es: string; en: string; pt: string; zh: string }> = [
  { es: '/',                                        en: '/en',                                        pt: '/pt',                                 zh: '/zh' },
  { es: '/programas-y-cursos',                      en: '/en/programs-and-courses',                   pt: '/pt/programas-e-cursos',              zh: '/zh/programs' },
  { es: '/programas-y-cursos/semestral',            en: '/en/programs-and-courses/semester',          pt: '/pt/programas-e-cursos/semestral',    zh: '/zh/programs/semester' },
  { es: '/programas-y-cursos/intensivo',            en: '/en/programs-and-courses/intensive',         pt: '/pt/programas-e-cursos/intensivo',    zh: '/zh/programs/intensive' },
  { es: '/programas-y-cursos/fines-especificos',    en: '/en/programs-and-courses/specific-purposes', pt: '/pt/programas-e-cursos/fins-especificos', zh: '/zh/programs/specific-purposes' },
  { es: '/programas-y-cursos/individual',           en: '/en/programs-and-courses/individual',        pt: '/pt/programas-e-cursos/individual',   zh: '/zh/programs/individual' },
  { es: '/equipo-docente',                          en: '/en/teaching-team',                          pt: '/pt/equipe-docente',                  zh: '/zh/teaching-team' },
  { es: '/sobre-nosotros',                          en: '/en/about-us',                               pt: '/pt/sobre-nos',                       zh: '/zh/about-us' },
  { es: '/admision',                                en: '/en/admissions',                             pt: '/pt/admissao',                        zh: '/zh/apply' },
  { es: '/voces-del-centro',                        en: '/en/voices-of-the-centre',                   pt: '/pt/vozes-do-centro',                 zh: '/zh/testimonials' },
  { es: '/contacto',                                en: '/en/contact',                                pt: '/pt/contato',                         zh: '/zh/contact' },
  { es: '/aviso-legal',                             en: '/en/legal-notice',                           pt: '/pt/aviso-legal',                     zh: '/zh/legal-notice' },
  { es: '/privacidad',                              en: '/en/privacy-policy',                         pt: '/pt/privacidade',                     zh: '/zh/privacy-policy' },
  { es: '/cookies',                                 en: '/en/cookie-policy',                          pt: '/pt/politica-de-cookies',             zh: '/zh/cookie-policy' },
  { es: '/condiciones-contratacion',                en: '/en/terms-and-conditions',                   pt: '/pt/condicoes-contratacao',           zh: '/zh/terms-and-conditions' },
  { es: '/desistimiento',                           en: '/en/withdrawal-rights',                      pt: '/pt/direito-de-desistencia',          zh: '/zh/withdrawal-rights' },
]

type Lang = 'es' | 'en' | 'pt' | 'zh'

function getLangPath(currentPath: string, currentLang: Lang, targetLang: Lang): string {
  const defaults: Record<Lang, string> = { es: '/', en: '/en', pt: '/pt', zh: '/zh' }
  const quad = routeQuad.find((r) => r[currentLang] === currentPath)
  return quad ? quad[targetLang] : defaults[targetLang]
}

export default function Navbar({ lang, currentPath }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const nav = navData[lang]

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ background: '#1d1e20' }}
      aria-label="Navegación principal"
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
          <div className="hidden md:flex flex-1 items-center justify-center">
            {nav.links.map((link, i, arr) => (
              <Fragment key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm font-medium text-white/80 uppercase tracking-wider px-5 transition-colors duration-200 hover:text-dorado"
                >
                  {link.label}
                </Link>
                {i < arr.length - 1 && (
                  <span className="text-white/20 select-none" aria-hidden="true">|</span>
                )}
              </Fragment>
            ))}
          </div>

          {/* Right: CTA + lang toggle */}
          <div className="hidden md:flex items-center gap-4">
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
                >
                  {(['es', 'en', 'pt', 'zh'] as const).map((l) => (
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
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          className="md:hidden w-full py-4 px-6 flex flex-col gap-4"
          style={{ background: '#1d1e20', borderTop: '1px solid #2D2D2D' }}
        >
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-white/80 uppercase tracking-widest py-2 transition-colors duration-200 hover:text-dorado"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={nav.cta.href}
            className="font-body text-sm font-medium px-6 py-2 text-center mt-2 transition-colors duration-200"
            style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
            onClick={() => setMobileOpen(false)}
          >
            {nav.cta.label}
          </Link>
          <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
            {(['es', 'en', 'pt', 'zh'] as const).map((l) => (
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
  )
}
