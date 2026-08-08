import Link from 'next/link'
import { ChevronRight, Users, Clock, Award, CheckCircle, BookOpen } from 'lucide-react'
import type { ProgramData } from '@/data/programs'

interface ProgramTemplateProps {
  lang: 'es' | 'en' | 'pt'
  data: ProgramData
  breadcrumbBase: { label: string; href: string }
  breadcrumbParent: { label: string; href: string }
  applyHref: string
  applyLabel: string
  asideTitle: string
  asideApply: string
  labels: {
    overview: string
    schedule: string
    syllabus: string
    activities: string
    conditions: string
    certificate: string
    pricing: string
    groupSize: string
    duration: string
    levels: string
    cerfNote: string
  }
}

export default function ProgramTemplate({
  lang,
  data,
  breadcrumbBase,
  breadcrumbParent,
  applyHref,
  applyLabel,
  asideTitle,
  asideApply,
  labels,
}: ProgramTemplateProps) {
  const priceDisplay =
    data.precio.estandar
      ? data.precio.estandar
      : data.precio.valor ?? 'Consultar'

  return (
    <div className="font-body">
      {/* Hero */}
      <div
        className="relative flex items-end pb-10 pt-24"
        style={{ background: '#1A1A1A', minHeight: '280px' }}
      >
        <div className="relative z-10 max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-4" aria-label="breadcrumb">
            <Link href={breadcrumbBase.href} className="text-white/50 hover:text-white transition-colors">
              {breadcrumbBase.label}
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <Link href={breadcrumbParent.href} className="text-white/50 hover:text-white transition-colors">
              {breadcrumbParent.label}
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/70">{data.nombre}</span>
          </nav>

          <h1 className="font-display font-bold text-white text-3xl md:text-5xl">
            {data.nombre}
          </h1>
          <p className="mt-3 text-white/70 text-lg max-w-2xl">{data.descripcionBreve}</p>

          {/* Level badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {data.niveles.map((n) => (
              <span
                key={n}
                className="text-xs font-medium px-3 py-1 uppercase tracking-wide"
                style={{ background: '#C5A028', color: '#1A1A1A', borderRadius: '2px' }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Content area */}
          <div className="flex-1 min-w-0 flex flex-col gap-12">

            {/* 1. Descripción */}
            <section>
              <SectionTitle>{labels.overview}</SectionTitle>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>
                {data.descripcionExtendida}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <StatBox icon={<Users size={20} />} label={labels.groupSize} value={String(data.grupoMaximo)} />
                <StatBox icon={<Clock size={20} />} label={labels.duration} value={data.duracion} />
                <StatBox icon={<BookOpen size={20} />} label={labels.levels} value={data.niveles.join(', ')} />
              </div>
            </section>

            {/* 2. Horarios */}
            <section>
              <SectionTitle>{labels.schedule}</SectionTitle>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#1A1A1A' }}>
                      <Th>Turno / Shift</Th>
                      <Th>Días / Days</Th>
                      <Th>Hora / Time</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.horarios.map((h, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? '#F7F5F0' : '#FFFFFF' }}>
                        <Td>{h.turno}</Td>
                        <Td>{h.dias}</Td>
                        <Td>{h.hora}</Td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Temario */}
            <section>
              <SectionTitle>{labels.syllabus}</SectionTitle>
              <div className="flex flex-col gap-4">
                {data.temario.map((t, i) => (
                  <details
                    key={i}
                    className="group"
                    style={{ border: '1px solid #E5E3DE', borderRadius: '4px', overflow: 'hidden' }}
                  >
                    <summary
                      className="flex items-center justify-between px-4 py-3 cursor-pointer font-semibold text-sm"
                      style={{ background: '#F7F5F0', color: '#1A1A1A' }}
                    >
                      {t.nivel}
                      <ChevronRight size={16} className="transition-transform group-open:rotate-90" />
                    </summary>
                    <ul className="px-6 py-4 flex flex-col gap-2">
                      {t.contenidos.map((c, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#2D2D2D' }}>
                          <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: '#C5A028' }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </section>

            {/* 4. Actividades */}
            <section>
              <SectionTitle>{labels.activities}</SectionTitle>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.actividades.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#2D2D2D' }}>
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: '#C5A028' }} />
                    {a}
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Condiciones */}
            <section>
              <SectionTitle>{labels.conditions}</SectionTitle>
              <div className="flex flex-col gap-4">
                {data.condiciones.map((c, i) => (
                  <div key={i} className="p-4" style={{ border: '1px solid #E5E3DE', borderRadius: '4px' }}>
                    <h4 className="font-semibold text-negro mb-1">{c.titulo}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{c.descripcion}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Certificado */}
            <section>
              <SectionTitle>{labels.certificate}</SectionTitle>
              <div
                className="flex flex-col gap-3 p-5"
                style={{ border: '2px solid #C5A028', borderRadius: '4px', background: '#F7F5F0' }}
              >
                <div className="flex items-center gap-3">
                  <Award size={24} style={{ color: '#C5A028' }} />
                  <div>
                    <p className="font-semibold text-negro">{data.certificado.tipo}</p>
                    <p className="text-sm" style={{ color: '#6B6B6B' }}>{data.certificado.emite}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#2D2D2D' }}>
                  {data.certificado.reconocimiento}
                </p>
              </div>
            </section>

            {/* 7. Precios */}
            <section>
              <SectionTitle>{labels.pricing}</SectionTitle>
              <div className="flex flex-col gap-3">
                {data.precio.estandar && (
                  <PriceRow label="Estándar (campus UAI)" value={data.precio.estandar} />
                )}
                {data.precio.inSitu && (
                  <PriceRow label="In-situ" value={data.precio.inSitu} />
                )}
                {data.precio.largoplazo && (
                  <PriceRow label="Largo plazo" value={data.precio.largoplazo} />
                )}
                {data.precio.valor && !data.precio.estandar && (
                  <PriceRow label={data.precio.notas ?? 'Precio'} value={data.precio.valor} />
                )}
              </div>
              <p className="text-xs mt-4" style={{ color: '#6B6B6B' }}>
                [PENDIENTE — Cifras sujetas a confirmación por UAI]
              </p>
            </section>

            {/* CTA final */}
            <div className="pt-4">
              <Link
                href={applyHref}
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm uppercase tracking-widest transition-colors duration-200"
                style={{ background: '#C5A028', color: '#1A1A1A', borderRadius: '2px' }}
              >
                {applyLabel} <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* Aside — Quick summary */}
          <aside className="lg:w-72 shrink-0">
            <div
              className="sticky top-20 flex flex-col gap-4 p-5"
              style={{ border: '2px solid #C5A028', borderRadius: '4px', background: '#F7F5F0' }}
            >
              <h3
                className="font-body text-sm font-semibold uppercase tracking-widest"
                style={{ color: '#C5A028' }}
              >
                {asideTitle}
              </h3>
              <div className="flex flex-col gap-3 text-sm">
                <AsideStat label={labels.levels} value={data.niveles.join(', ')} />
                <AsideStat label={labels.duration} value={data.duracion} />
                <AsideStat label={labels.groupSize} value={String(data.grupoMaximo)} />
                <AsideStat
                  label={labels.pricing}
                  value={priceDisplay}
                  highlight
                />
              </div>
              <Link
                href={applyHref}
                className="mt-2 flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
                style={{ background: '#1A1A1A', color: '#FFFFFF', borderRadius: '2px' }}
              >
                {asideApply}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-body text-xl font-semibold mb-4 pb-2"
      style={{ borderBottom: '2px solid #C5A028', color: '#1A1A1A' }}
    >
      {children}
    </h2>
  )
}

function StatBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div
      className="flex flex-col gap-2 p-4"
      style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#F7F5F0' }}
    >
      <div style={{ color: '#C5A028' }}>{icon}</div>
      <p className="text-xs uppercase tracking-widest" style={{ color: '#6B6B6B' }}>{label}</p>
      <p className="font-semibold text-negro">{value}</p>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      className="text-left text-xs font-medium uppercase tracking-widest px-4 py-3"
      style={{ color: '#C5A028' }}
    >
      {children}
    </th>
  )
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-4 py-3 text-sm" style={{ color: '#2D2D2D', borderBottom: '1px solid #E5E3DE' }}>
      {children}
    </td>
  )
}

function PriceRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3"
      style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#F7F5F0' }}
    >
      <span className="text-sm" style={{ color: '#6B6B6B' }}>{label}</span>
      <span
        className="text-base font-bold"
        style={{ color: highlight ? '#C5A028' : '#1A1A1A' }}
      >
        {value}
      </span>
    </div>
  )
}

function AsideStat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{ borderBottom: '1px solid #E5E3DE', paddingBottom: '0.75rem' }}>
      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#6B6B6B' }}>{label}</p>
      <p
        className={`font-semibold ${highlight ? 'text-xl' : 'text-sm'}`}
        style={{ color: highlight ? '#C5A028' : '#1A1A1A' }}
      >
        {value}
      </p>
    </div>
  )
}
