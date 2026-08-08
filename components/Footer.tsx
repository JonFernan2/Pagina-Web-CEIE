import Link from 'next/link'
import { FOOTER_ES } from '@/data/content.es'
import { FOOTER_EN } from '@/data/content.en'

interface FooterProps {
  lang: 'es' | 'en'
}

export default function Footer({ lang }: FooterProps) {
  const f = lang === 'es' ? FOOTER_ES : FOOTER_EN

  return (
    <footer style={{ background: '#1A1A1A' }} className="font-body">
      {/* Top separator */}
      <div style={{ height: '1px', background: '#C5A028' }} />

      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Col 1 — Identidad */}
          <div>
            <div className="mb-4">
              <span
                className="font-display font-bold text-white text-2xl"
                style={{ letterSpacing: '0.05em' }}
              >
                CEIE
              </span>
              <div
                className="w-12 mt-1"
                style={{ height: '2px', background: '#C5A028' }}
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {f.col1.description}
            </p>
            <div className="flex flex-col gap-2">
              {f.col1.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-block text-xs px-3 py-1 font-medium"
                  style={{
                    border: '1px solid #C5A028',
                    color: '#C5A028',
                    borderRadius: '2px',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 — Navegación */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#C5A028' }}
            >
              {f.col2.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {f.col2.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programas */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#C5A028' }}
            >
              {f.col3.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {f.col3.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#C5A028' }}
            >
              {f.col4.title}
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <p>{f.col4.address}</p>
              <p>{f.col4.phone}</p>
              <a
                href={`mailto:${f.col4.email}`}
                className="hover:text-white transition-colors duration-200"
              >
                {f.col4.email}
              </a>
              {f.col4.social.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legal row */}
      <div style={{ borderTop: '1px solid #2D2D2D' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
            {f.legal.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-white/30 text-center md:text-right">
            {f.legal.copyright}
          </p>
          <p className="text-xs text-white/20 text-center md:text-right mt-1">
            Diseñado y desarrollado por Jonathan Fernando Muñoz Alvarez
          </p>
        </div>
      </div>
    </footer>
  )
}
