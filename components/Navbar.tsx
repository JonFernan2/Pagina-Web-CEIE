'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  lang: 'es' | 'en' | 'pt'
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
}

const routeTriple: Array<{ es: string; en: string; pt: string }> = [
  { es: '/',                                        en: '/en',                                        pt: '/pt' },
  { es: '/programas-y-cursos',                      en: '/en/programs-and-courses',                   pt: '/pt/programas-e-cursos' },
  { es: '/programas-y-cursos/semestral',            en: '/en/programs-and-courses/semester',          pt: '/pt/programas-e-cursos/semestral' },
  { es: '/programas-y-cursos/intensivo',            en: '/en/programs-and-courses/intensive',         pt: '/pt/programas-e-cursos/intensivo' },
  { es: '/programas-y-cursos/fines-especificos',    en: '/en/programs-and-courses/specific-purposes', pt: '/pt/programas-e-cursos/fins-especificos' },
  { es: '/programas-y-cursos/individual',           en: '/en/programs-and-courses/individual',        pt: '/pt/programas-e-cursos/individual' },
  { es: '/equipo-docente',                          en: '/en/teaching-team',                          pt: '/pt/equipe-docente' },
  { es: '/sobre-nosotros',                          en: '/en/about-us',                               pt: '/pt/sobre-nos' },
  { es: '/admision',                                en: '/en/admissions',                             pt: '/pt/admissao' },
  { es: '/voces-del-centro',                        en: '/en/voices-of-the-centre',                   pt: '/pt/vozes-do-centro' },
  { es: '/contacto',                                en: '/en/contact',                                pt: '/pt/contato' },
  { es: '/aviso-legal',                             en: '/en/legal-notice',                           pt: '/pt/aviso-legal' },
  { es: '/privacidad',                              en: '/en/privacy-policy',                         pt: '/pt/privacidade' },
  { es: '/cookies',                                 en: '/en/cookie-policy',                          pt: '/pt/politica-de-cookies' },
  { es: '/condiciones-contratacion',                en: '/en/terms-and-conditions',                   pt: '/pt/condicoes-contratacao' },
  { es: '/desistimiento',                           en: '/en/withdrawal-rights',                      pt: '/pt/direito-de-desistencia' },
]

function getLangPath(currentPath: string, currentLang: 'es' | 'en' | 'pt', targetLang: 'es' | 'en' | 'pt'): string {
  const defaults: Record<'es' | 'en' | 'pt', string> = { es: '/', en: '/en', pt: '/pt' }
  const triple = routeTriple.find((r) => r[currentLang] === currentPath)
  return triple ? triple[targetLang] : defaults[targetLang]
}

export default function Navbar({ lang, currentPath }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = navData[lang]

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ background: '#1d1e20' }}
      aria-label="Navegación principal"
    >
      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={lang === 'es' ? '/' : '/en'} className="flex items-center shrink-0">
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
          <div className="hidden md:flex items-center gap-6">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-white/80 uppercase tracking-widest transition-colors duration-200 hover:text-dorado"
                style={{ letterSpacing: '0.08em' }}
              >
                {link.label}
              </Link>
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

            {/* Language toggle */}
            <div className="flex items-center gap-1 font-body text-sm font-medium">
              {(['es', 'en', 'pt'] as const).map((l, i, arr) => (
                <>
                  <Link
                    key={l}
                    href={lang === l ? currentPath : getLangPath(currentPath, lang, l)}
                    className={`px-2 py-1 transition-colors duration-200 ${
                      lang === l ? 'text-dorado' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {l.toUpperCase()}
                  </Link>
                  {i < arr.length - 1 && <span className="text-white/30">|</span>}
                </>
              ))}
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
          <div className="flex items-center gap-2 font-body text-sm font-medium pt-2 border-t border-white/10">
            {(['es', 'en', 'pt'] as const).map((l, i, arr) => (
              <>
                <Link
                  key={l}
                  href={lang === l ? currentPath : getLangPath(currentPath, lang, l)}
                  className={lang === l ? 'text-dorado' : 'text-white/50'}
                  onClick={() => setMobileOpen(false)}
                >
                  {l.toUpperCase()}
                </Link>
                {i < arr.length - 1 && <span className="text-white/30">|</span>}
              </>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
