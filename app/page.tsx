import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, MapPin, Laptop, Globe, Check } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramCard from '@/components/ProgramCard'
import { HOME_ES } from '@/data/content.es'

export const metadata: Metadata = {
  title: HOME_ES.meta.title,
  description: HOME_ES.meta.description,
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={32} style={{ color: '#6493b5' }} />,
  MapPin:        <MapPin size={32} style={{ color: '#6493b5' }} />,
  Laptop:        <Laptop size={32} style={{ color: '#6493b5' }} />,
  Globe:         <Globe size={32} style={{ color: '#6493b5' }} />,
}

export default function HomePage() {
  const d = HOME_ES

  return (
    <>
      <Navbar lang="es" currentPath="/" />

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center text-center" style={{ minHeight: '90vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero-campus-vina-del-mar.png"
            alt="Campus Universidad Adolfo Ibáñez en Viña del Mar, vista al Pacífico"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 py-20">
          <h1
            className="font-display font-bold text-white text-4xl md:text-6xl leading-tight mb-6 whitespace-pre-line"
          >
            {d.hero.h1}
          </h1>
          <p className="font-body text-base md:text-lg mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {d.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={d.hero.cta1.href}
              className="font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-colors duration-200"
              style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
            >
              {d.hero.cta1.label} →
            </Link>
            <Link
              href={d.hero.cta2.href}
              className="font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-colors duration-200 border text-white hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.5)', borderRadius: '2px' }}
            >
              {d.hero.cta2.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section style={{ background: '#C7C2ba' }} className="py-20">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl text-center mb-12">
            {d.valueProps.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.valueProps.cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-3 p-6"
                style={{ background: '#FFFFFF', border: '1px solid #E5E3DE', borderRadius: '4px' }}
              >
                <div>{iconMap[card.icon]}</div>
                <h3 className="font-body text-xl font-semibold text-negro">{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO PROMOCIONAL ── */}
      <section style={{ background: '#1d1e20' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-3">
              Conoce el CEIE
            </h2>
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Descubre cómo es estudiar español en la Universidad Adolfo Ibáñez, Viña del Mar.
            </p>
          </div>
          <div className="mx-auto w-full max-w-3xl" style={{ borderRadius: '4px', border: '2px solid #6493b5', overflow: 'hidden' }}>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/PwjXWu6HtsQ"
                title="Video promocional CEIE — Universidad Adolfo Ibáñez"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </div>
          </div>
          <p className="text-xs text-center mt-3 font-body" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Créditos: Mathias Adolf Harboe Damian
          </p>
        </div>
      </section>

      {/* ── PROGRAMS (D1) ── */}
      <section style={{ background: '#FFFFFF' }} className="py-20">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-3">
              {d.programs.title}
            </h2>
            <p className="text-base" style={{ color: '#6B6B6B' }}>{d.programs.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {d.programs.items.map((p) => (
              <ProgramCard key={p.href} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PAYMENT CONDITIONS (D1) ── */}
      <section style={{ background: '#1d1e20' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl text-center mb-12">
            {d.payment.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PaymentColumn title={d.payment.col1.title} items={d.payment.col1.items} />
            <PaymentColumn title={d.payment.col2.title} items={d.payment.col2.items} />
            <div>
              <h3 className="font-body text-base font-semibold uppercase tracking-widest mb-4" style={{ color: '#6493b5' }}>
                {d.payment.col3.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {d.payment.col3.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <Check size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={d.payment.col3.link.href}
                className="inline-block mt-4 text-sm underline transition-colors duration-200 hover:text-white"
                style={{ color: '#6493b5' }}
              >
                {d.payment.col3.link.label} →
              </Link>
              <p className="mt-4 text-xs px-3 py-2" style={{ background: '#2D2D2D', color: '#9CA3AF', borderRadius: '2px' }}>
                {d.payment.col3.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCREDITATION ── */}
      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-6">
                {d.accreditation.title}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#2D2D2D' }}>
                {d.accreditation.p1}
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>
                {d.accreditation.p2}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {/* CNA-Chile */}
              <div style={{ background: '#FFFFFF', borderRadius: '4px', padding: '20px 24px' }}>
                <div className="flex items-center gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo-cna-chile.png"
                    alt="Comisión Nacional de Acreditación CNA-Chile"
                    style={{ height: '72px', width: 'auto', filter: 'invert(1)' }}
                  />
                  <div style={{ borderLeft: '1px solid #D1CFC9', paddingLeft: '20px' }}>
                    <p className="font-body font-semibold text-negro text-sm leading-snug">Universidad Adolfo Ibáñez</p>
                    <p className="font-body font-semibold text-negro text-sm">Acreditada 6 años</p>
                    <p className="font-body text-xs leading-relaxed mt-1" style={{ color: '#4a4a4a' }}>
                      Áreas: Gestión institucional, Docencia de pregrado, Docencia de postgrado, Investigación y Vinculación con el medio. Hasta octubre 2027.
                    </p>
                  </div>
                </div>
              </div>

              {/* Triple Crown: EQUIS · AACSB · AMBA */}
              <div className="flex items-center justify-center" style={{ background: '#FFFFFF', borderRadius: '4px', padding: '20px 24px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logos-triple-crown.png"
                  alt="Triple Crown: EQUIS · AACSB Accredited · Association of MBAs"
                  style={{ maxHeight: '56px', width: '100%', objectFit: 'contain', filter: 'grayscale(1) opacity(0.75)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#FFFFFF' }} className="py-20">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl text-center mb-10">
            {d.testimonials.title}
          </h2>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: '4px', border: '1px solid #E5E3DE', overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed/hGd8OBLONvc?rel=0&modestbranding=1"
                title={d.testimonials.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
              />
            </div>
            <p className="text-xs mt-2 font-body text-center" style={{ color: '#6B6B6B' }}>
              Créditos: Mathias Adolf Harboe Damian
            </p>
          </div>
          <div className="text-center mt-8">
            <Link
              href={d.testimonials.readMoreLink.href}
              className="inline-flex items-center gap-2 font-body font-medium text-sm uppercase tracking-widest transition-colors duration-200 hover:text-dorado"
              style={{ color: '#1d1e20' }}
            >
              {d.testimonials.readMoreLink.label} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT/LOCATION ── */}
      <section style={{ background: '#1d1e20' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl text-center mb-12">
            {d.contact.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-4 text-white/70 text-sm">
              <p className="text-base text-white font-medium">{d.contact.address}</p>
              <p>{d.contact.phone}</p>
              {d.contact.emails.map((em: string) => (
                <a key={em} href={`mailto:${em}`} className="hover:text-white transition-colors">{em}</a>
              ))}
              <p>{d.contact.hours}</p>
            </div>
            <div className="w-full aspect-video overflow-hidden" style={{ borderRadius: '4px', border: '2px solid #6493b5' }}>
              <img
                src="/images/campus-vina-aerea.jpg"
                alt="Vista aérea del Campus UAI Viña del Mar — Padre Hurtado 750"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── NOTICIAS ── */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl text-center mb-12">
            Noticias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a href="https://www.uai.cl/semana-de-la-migracion" target="_blank" rel="noopener noreferrer"
              className="flex flex-col overflow-hidden group"
              style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}>
              <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://uai.cdn7pm.net/media/21006/foto-semana-migracion-uai-2026.jpg?fit=crop&crop=center,center"
                  alt="Semana de la Migración UAI 2026"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: '#6493b5' }}>Agosto 2026</p>
                <h3 className="font-display font-bold text-negro text-lg leading-tight">Semana de la migración — 4° versión</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#6B6B6B' }}>
                  La cuarta edición de la Semana de la Migración UAI se realizará entre el 17 y 21 de agosto con actividades orientadas a memoria, identidad, territorio y desplazamiento en Santiago y Viña del Mar.
                </p>
                <span className="text-sm font-medium" style={{ color: '#6493b5' }}>Leer más →</span>
              </div>
            </a>
            <a href="https://www.uai.cl/artesliberales/prisma" target="_blank" rel="noopener noreferrer"
              className="flex flex-col overflow-hidden group"
              style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}>
              <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://uai.cdn7pm.net/seo/images/SBJRDubhm1sxg9zg7hmeCSVGSGMuIG-metaaW1hZ2VuLXByaXNtYS0yMDI2LmpwZw==-.jpg"
                  alt="Congreso Internacional PRISMA 2026"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: '#6493b5' }}>2026</p>
                <h3 className="font-display font-bold text-negro text-lg leading-tight">Congreso Internacional PRISMA</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#6B6B6B' }}>
                  VI Congreso Internacional PRISMA. El español hoy: Perspectivas, transformaciones y alcances de una lengua global.
                </p>
                <span className="text-sm font-medium" style={{ color: '#6493b5' }}>Leer más →</span>
              </div>
            </a>
          </div>
          <div className="text-center">
            <a href="https://www.uai.cl" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-body font-semibold text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ background: '#1d1e20', color: '#FFFFFF', borderRadius: '2px' }}>
              Visitar Universidad Adolfo Ibáñez →
            </a>
          </div>
        </div>
      </section>

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}

function PaymentColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-body text-base font-semibold uppercase tracking-widest mb-4" style={{ color: '#6493b5' }}>
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-white/70">
            <Check size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
