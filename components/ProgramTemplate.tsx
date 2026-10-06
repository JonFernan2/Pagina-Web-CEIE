import Link from 'next/link'
import { ChevronRight, Users, Clock, Award, CheckCircle, BookOpen } from 'lucide-react'
import type { ProgramData } from '@/data/programs'
import Linkify from './Linkify'

const UI = {
  es: { classSchedule: 'Horario de clases: ', shift: 'Turno', days: 'Días', time: 'Hora', standard: 'Estándar (campus UAI)', inSitu: 'In situ', longTerm: 'Largo plazo', price: 'Precio', onRequest: 'Consultar', priceNote: 'Valores referenciales en USD, sujetos a cambios. Consulte las condiciones vigentes.' },
  en: { classSchedule: 'Class schedule: ', shift: 'Shift', days: 'Days', time: 'Time', standard: 'Standard (UAI campus)', inSitu: 'In situ', longTerm: 'Long term', price: 'Price', onRequest: 'On request', priceNote: 'Reference prices in USD, subject to change. Please check current conditions.' },
  pt: { classSchedule: 'Horário das aulas: ', shift: 'Turno', days: 'Dias', time: 'Horário', standard: 'Padrão (campus UAI)', inSitu: 'In loco', longTerm: 'Longo prazo', price: 'Preço', onRequest: 'Sob consulta', priceNote: 'Valores de referência em USD, sujeitos a alterações. Consulte as condições vigentes.' },
  zh: { classSchedule: '上课时间：', shift: '时段', days: '日期', time: '时间', standard: '标准（UAI校区）', inSitu: '现场授课', longTerm: '长期', price: '价格', onRequest: '请咨询', priceNote: '以上为美元参考价格，可能调整，请咨询最新条件。' },
}

interface ProgramTemplateProps {
  lang: 'es' | 'en' | 'pt' | 'zh'
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
  const ui = UI[lang]
  const simple = !!data.vistaSimple
  const priceDisplay =
    data.precio.resumen ??
    (data.precio.estandar
      ? data.precio.estandar
      : data.precio.valor ?? ui.onRequest)

  return (
    <div className="font-body">
      {/* Hero */}
      <div
        className="relative flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '280px' }}
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
                style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
              >
                {n}
              </span>
            ))}
          </div>

          {/* Class schedule highlight */}
          {data.horarioClases && (
            <p
              className="inline-flex items-start gap-2.5 mt-5 px-4 py-2.5 text-sm text-white"
              style={{ border: '1px solid rgba(100,147,181,0.6)', background: 'rgba(100,147,181,0.12)', borderRadius: '2px' }}
            >
              <Clock size={18} className="shrink-0 mt-px" style={{ color: '#6493b5' }} aria-hidden="true" />
              <span>
                <strong className="font-semibold">{ui.classSchedule}</strong>{data.horarioClases}
              </span>
            </p>
          )}
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
              <div className="flex flex-col gap-4">
                {data.descripcionExtendida.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{para}</p>
                ))}
              </div>
              {!simple && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <StatBox icon={<Users size={20} />} label={labels.groupSize} value={data.participantes} />
                <StatBox icon={<Clock size={20} />} label={labels.duration} value={data.duracion} />
                <StatBox icon={<BookOpen size={20} />} label={labels.levels} value={data.niveles.join(', ')} />
              </div>
              )}
            </section>

            {data.incluye && (
              <section>
                <SectionTitle>{data.incluye.titulo}</SectionTitle>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#2D2D2D' }}>{data.incluye.intro}</p>
                <ul className="flex flex-col gap-2">
                  {data.incluye.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: '#2D2D2D' }}>
                      <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 2. Horarios */}
            {!simple && (
            <section>
              <SectionTitle>{labels.schedule}</SectionTitle>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#1d1e20' }}>
                      <Th>{ui.shift}</Th>
                      <Th>{ui.days}</Th>
                      <Th>{ui.time}</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.horarios.map((h, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? '#C7C2ba' : '#FFFFFF' }}>
                        <Td>{h.turno}</Td>
                        <Td>{h.dias}</Td>
                        <Td>{h.hora}</Td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            )}

            {/* 3. Temario */}
            <section>
              <SectionTitle>{labels.syllabus}</SectionTitle>
              {data.areasNota && (
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#2D2D2D' }}>{data.areasNota}</p>
              )}
              <div className="flex flex-col gap-4">
                {data.temario.map((t, i) => (
                  <details
                    key={i}
                    className="group"
                    style={{ border: '1px solid #E5E3DE', borderRadius: '4px', overflow: 'hidden' }}
                  >
                    <summary
                      className="flex items-center justify-between px-4 py-3 cursor-pointer font-semibold text-sm"
                      style={{ background: '#C7C2ba', color: '#1d1e20' }}
                    >
                      {t.nivel}
                      <ChevronRight size={16} className="transition-transform group-open:rotate-90" />
                    </summary>
                    {t.descripcion && (
                      <div className="px-6 pt-4 flex flex-col gap-3">
                        {t.descripcion.map((d, j) => (
                          <p key={j} className="text-sm leading-relaxed" style={{ color: '#2D2D2D' }}>{d}</p>
                        ))}
                      </div>
                    )}
                    {t.ficha && (
                      <dl className="mx-6 mt-4 mb-4 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden" style={{ background: '#E5E3DE', border: '1px solid #E5E3DE', borderRadius: '4px' }}>
                        {t.ficha.map((f) => (
                          <div key={f.label} className="px-3 py-2 last:odd:col-span-2 sm:last:odd:col-span-1 sm:[&:nth-child(4n+3):last-child]:col-span-2" style={{ background: '#FFFFFF' }}>
                            <dt className="text-xs uppercase tracking-widest" style={{ color: '#6B6B6B' }}>{f.label}</dt>
                            <dd className="text-sm font-semibold" style={{ color: '#1d1e20' }}>{f.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    {t.contenidos.length > 0 && (
                    <ul className="px-6 py-4 flex flex-col gap-2">
                      {t.contenidos.map((c, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#2D2D2D' }}>
                          <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                    )}
                  </details>
                ))}
              </div>
            </section>

            {!simple && (<>
            {/* 4. Actividades */}
            <section>
              <SectionTitle>{labels.activities}</SectionTitle>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.actividades.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#2D2D2D' }}>
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
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
                    <h3 className="font-semibold text-negro mb-1">{c.titulo}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}><Linkify text={c.descripcion} /></p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Certificado */}
            <section>
              <SectionTitle>{labels.certificate}</SectionTitle>
              <div
                className="flex flex-col gap-3 p-5"
                style={{ border: '2px solid #6493b5', borderRadius: '4px', background: '#C7C2ba' }}
              >
                <div className="flex items-center gap-3">
                  <Award size={24} style={{ color: '#6493b5' }} />
                  <div>
                    <p className="font-semibold text-negro">{data.certificado.tipo}</p>
                    <p className="text-sm" style={{ color: '#2D2D2D' }}>{data.certificado.emite}</p>
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
                  <PriceRow label={data.precio.estandarLabel ?? ui.standard} value={data.precio.estandar} />
                )}
                {data.precio.inSitu && (
                  <PriceRow label={data.precio.inSituLabel ?? ui.inSitu} value={data.precio.inSitu} />
                )}
                {data.precio.largoplazo && (
                  <PriceRow label={ui.longTerm} value={data.precio.largoplazo} />
                )}
                {data.precio.valor && !data.precio.estandar && (
                  <PriceRow label={data.precio.notas ?? ui.price} value={data.precio.valor} />
                )}
              </div>
              <p className="text-xs mt-4" style={{ color: '#6B6B6B' }}>
                {ui.priceNote}
              </p>
            </section>

            </>)}

            {/* CTA final */}
            <div className="pt-4">
              <Link
                href={applyHref}
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm uppercase tracking-widest transition-colors duration-200"
                style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
              >
                {applyLabel} <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* Aside — Quick summary */}
          {!simple && (
          <aside className="lg:w-72 shrink-0">
            <div
              className="sticky top-20 flex flex-col gap-4 p-5"
              style={{ border: '2px solid #6493b5', borderRadius: '4px', background: '#C7C2ba' }}
            >
              <h3
                className="font-body text-sm font-semibold uppercase tracking-widest"
                style={{ color: '#1d1e20' }}
              >
                {asideTitle}
              </h3>
              <div className="flex flex-col gap-3 text-sm">
                <AsideStat label={labels.levels} value={data.niveles.join(', ')} />
                <AsideStat label={labels.duration} value={data.duracion} />
                <AsideStat label={labels.groupSize} value={data.participantes} />
                <AsideStat
                  label={labels.pricing}
                  value={priceDisplay}
                  highlight
                />
              </div>
              <Link
                href={applyHref}
                className="mt-2 flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
                style={{ background: '#1d1e20', color: '#FFFFFF', borderRadius: '2px' }}
              >
                {asideApply}
              </Link>
            </div>
          </aside>
          )}
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-body text-xl font-semibold mb-4 pb-2"
      style={{ borderBottom: '2px solid #6493b5', color: '#1d1e20' }}
    >
      {children}
    </h2>
  )
}

function StatBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div
      className="flex flex-col gap-2 p-4"
      style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#C7C2ba' }}
    >
      <div style={{ color: '#6493b5' }}>{icon}</div>
      <p className="text-xs uppercase tracking-widest" style={{ color: '#2D2D2D' }}>{label}</p>
      <p className="font-semibold text-negro">{value}</p>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      className="text-left text-xs font-medium uppercase tracking-widest px-4 py-3"
      style={{ color: '#6493b5' }}
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
      style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#C7C2ba' }}
    >
      <span className="text-sm" style={{ color: '#2D2D2D' }}>{label}</span>
      <span
        className="text-base font-bold"
        style={{ color: '#1d1e20' }}
      >
        {value}
      </span>
    </div>
  )
}

function AsideStat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{ borderBottom: '1px solid #E5E3DE', paddingBottom: '0.75rem' }}>
      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#2D2D2D' }}>{label}</p>
      <p
        className={`font-semibold ${highlight ? 'text-xl' : 'text-sm'}`}
        style={{ color: '#1d1e20' }}
      >
        {value}
      </p>
    </div>
  )
}
