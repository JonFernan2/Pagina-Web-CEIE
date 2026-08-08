import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, MapPin, Laptop, Globe, Check } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import PlaceholderImage from '@/components/PlaceholderImage'
import ProgramCard from '@/components/ProgramCard'
import TestimonialCard from '@/components/TestimonialCard'
import { HOME_PT } from '@/data/content.pt'

export const metadata: Metadata = {
  title: HOME_PT.meta.title,
  description: HOME_PT.meta.description,
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={32} style={{ color: '#6493b5' }} />,
  MapPin:        <MapPin size={32} style={{ color: '#6493b5' }} />,
  Laptop:        <Laptop size={32} style={{ color: '#6493b5' }} />,
  Globe:         <Globe size={32} style={{ color: '#6493b5' }} />,
}

export default function HomePTPage() {
  const d = HOME_PT

  return (
    <>
      <Navbar lang="pt" currentPath="/pt" />

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center text-center" style={{ minHeight: '90vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero-campus-vina-del-mar.png"
            alt="Campus da Universidad Adolfo Ibáñez em Viña del Mar, vista para o Oceano Pacífico"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 py-20">
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#6493b5' }}>
            {d.hero.badge}
          </p>
          <h1 className="font-display font-bold text-white text-4xl md:text-6xl leading-tight mb-6 whitespace-pre-line">
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
              className="font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 border text-white hover:bg-white/10 transition-colors duration-200"
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

      {/* ── PROGRAMS ── */}
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

      {/* ── PAYMENT ── */}
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
                className="inline-block mt-4 text-sm underline transition-colors hover:text-white"
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
              {d.accreditation.badges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-4 p-4"
                  style={{ border: '2px solid #6493b5', borderRadius: '4px', background: '#FFFFFF' }}
                >
                  <div
                    className="w-10 h-10 shrink-0 flex items-center justify-center"
                    style={{ background: '#6493b5', borderRadius: '2px' }}
                  >
                    <span className="text-negro font-bold text-sm">✓</span>
                  </div>
                  <p className="font-body font-medium text-negro text-sm">{badge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#FFFFFF' }} className="py-20">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl text-center mb-12">
            {d.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.testimonials.items.map((t) => (
              <TestimonialCard
                key={t.initials}
                initials={t.initials}
                nombre={t.initials}
                pais={t.country}
                programa={t.program}
                nivelAlcanzado={t.level}
                texto={t.text}
                compact
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={d.testimonials.readMoreLink.href}
              className="inline-flex items-center gap-2 font-body font-medium text-sm uppercase tracking-widest transition-colors hover:text-dorado"
              style={{ color: '#1d1e20' }}
            >
              {d.testimonials.readMoreLink.label} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
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
              <PlaceholderImage
                label={d.contact.mapPlaceholder}
                alt="Mapa do campus UAI Viña del Mar, Padre Hurtado 750"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer lang="pt" />
      <CookieBanner lang="pt" />
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
