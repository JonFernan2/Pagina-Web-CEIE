'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  lang: 'es' | 'en'
  currentPath: string
}

const navData = {
  es: {
    links: [
      { label: 'Programas y Cursos',  href: '/programas-y-cursos' },
      { label: 'Equipo Docente',      href: '/equipo-docente' },
      { label: 'Sobre Nosotros',      href: '/sobre-nosotros' },
      { label: 'Voces del Centro',    href: '/voces-del-centro' },
    ],
    cta: { label: 'Admisión', href: '/admision' },
  },
  en: {
    links: [
      { label: 'Programs & Courses',    href: '/en/programs-and-courses' },
      { label: 'Teaching Team',         href: '/en/teaching-team' },
      { label: 'About Us',              href: '/en/about-us' },
      { label: 'Voices of the Centre',  href: '/en/voices-of-the-centre' },
    ],
    cta: { label: 'Apply Now', href: '/en/admissions' },
  },
}

function getLangAlternate(currentPath: string, lang: 'es' | 'en'): string {
  const routeMap: Record<string, string> = {
    '/': '/en',
    '/programas-y-cursos': '/en/programs-and-courses',
    '/programas-y-cursos/semestral': '/en/programs-and-courses/semester',
    '/programas-y-cursos/intensivo': '/en/programs-and-courses/intensive',
    '/programas-y-cursos/fines-especificos': '/en/programs-and-courses/specific-purposes',
    '/programas-y-cursos/individual': '/en/programs-and-courses/individual',
    '/equipo-docente': '/en/teaching-team',
    '/sobre-nosotros': '/en/about-us',
    '/admision': '/en/admissions',
    '/voces-del-centro': '/en/voices-of-the-centre',
    '/contacto': '/en/contact',
    '/aviso-legal': '/en/legal-notice',
    '/privacidad': '/en/privacy-policy',
    '/cookies': '/en/cookie-policy',
    '/condiciones-contratacion': '/en/terms-and-conditions',
    '/desistimiento': '/en/withdrawal-rights',
  }

  if (lang === 'es') {
    // Current is ES, find EN alternate
    return routeMap[currentPath] ?? '/en'
  } else {
    // Current is EN, find ES alternate
    const reverseMap = Object.fromEntries(
      Object.entries(routeMap).map(([es, en]) => [en, es])
    )
    return reverseMap[currentPath] ?? '/'
  }
}

export default function Navbar({ lang, currentPath }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = navData[lang]
  const alternateLang = lang === 'es' ? 'en' : 'es'
  const alternatePath = getLangAlternate(currentPath, lang)

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ background: '#1A1A1A' }}
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
                background: '#C5A028',
                color: '#1A1A1A',
                borderRadius: '2px',
              }}
            >
              {nav.cta.label}
            </Link>

            {/* Language toggle */}
            <div className="flex items-center gap-1 font-body text-sm font-medium">
              <Link
                href={lang === 'es' ? currentPath : alternatePath}
                className={`px-2 py-1 transition-colors duration-200 ${
                  lang === 'es' ? 'text-dorado' : 'text-white/50 hover:text-white'
                }`}
              >
                ES
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href={lang === 'en' ? currentPath : alternatePath}
                className={`px-2 py-1 transition-colors duration-200 ${
                  lang === 'en' ? 'text-dorado' : 'text-white/50 hover:text-white'
                }`}
              >
                EN
              </Link>
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
          style={{ background: '#1A1A1A', borderTop: '1px solid #2D2D2D' }}
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
            style={{ background: '#C5A028', color: '#1A1A1A', borderRadius: '2px' }}
            onClick={() => setMobileOpen(false)}
          >
            {nav.cta.label}
          </Link>
          <div className="flex items-center gap-2 font-body text-sm font-medium pt-2 border-t border-white/10">
            <Link
              href={lang === 'es' ? currentPath : alternatePath}
              className={lang === 'es' ? 'text-dorado' : 'text-white/50'}
              onClick={() => setMobileOpen(false)}
            >
              ES
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href={lang === 'en' ? currentPath : alternatePath}
              className={lang === 'en' ? 'text-dorado' : 'text-white/50'}
              onClick={() => setMobileOpen(false)}
            >
              EN
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
