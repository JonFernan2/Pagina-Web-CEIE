'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, MapPin, Users, Clock, ChevronRight } from 'lucide-react'
import type { ProgramData } from '@/data/programs'

interface ProductAccordionProps {
  programs: ProgramData[]
  lang?: 'es' | 'en' | 'pt' | 'zh'
}

function getPaths(lang?: string) {
  switch (lang) {
    case 'en': return { base: '/en/programs-and-courses', admision: '/en/admissions', contacto: '/en/contact' }
    case 'pt': return { base: '/pt/programas-e-cursos', admision: '/pt/admissao', contacto: '/pt/contato' }
    case 'zh': return { base: '/zh/programs', admision: '/zh/apply', contacto: '/zh/contact' }
    default:   return { base: '/programas-y-cursos', admision: '/admision', contacto: '/contacto' }
  }
}

function getLabels(lang?: string) {
  switch (lang) {
    case 'en': return {
      verPrograma: 'View full program', solicitar: 'Apply now', consultar: 'Request proposal',
      objetivo: 'Objective', cursos: 'Courses and fees', duracion: 'Duration',
      sede: 'Location', publico: 'Target audience',
      colCurso: 'Course', colHoras: 'Hrs.', colPrecio: 'Price USD', colModalidad: 'Modality / Duration',
    }
    case 'pt': return {
      verPrograma: 'Ver programa completo', solicitar: 'Solicitar admissão', consultar: 'Solicitar proposta',
      objetivo: 'Objetivo', cursos: 'Cursos e preços', duracion: 'Duração',
      sede: 'Sede', publico: 'Público-alvo',
      colCurso: 'Curso', colHoras: 'Hrs.', colPrecio: 'Preço USD', colModalidad: 'Modalidade / Duração',
    }
    case 'zh': return {
      verPrograma: '查看完整课程', solicitar: '立即申请', consultar: '咨询方案',
      objetivo: '课程目标', cursos: '课程与收费', duracion: '学习时长',
      sede: '校区', publico: '目标学员',
      colCurso: '课程', colHoras: '课时', colPrecio: '价格 USD', colModalidad: '授课方式 / 时长',
    }
    default: return {
      verPrograma: 'Ver programa completo', solicitar: 'Solicitar admisión', consultar: 'Consultar propuesta',
      objetivo: 'Objetivo', cursos: 'Cursos y tarifas', duracion: 'Duración',
      sede: 'Sede', publico: 'Público objetivo',
      colCurso: 'Curso', colHoras: 'N° Hrs.', colPrecio: 'Precio USD', colModalidad: 'Modalidad / Duración',
    }
  }
}

export default function ProductAccordion({ programs, lang }: ProductAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const paths = getPaths(lang)
  const lbl = getLabels(lang)

  return (
    <div className="flex flex-col gap-3">
      {programs.map((program) => {
        const isOpen = openId === program.slug
        return (
          <div
            key={program.slug}
            style={{ border: '1px solid #E5E3DE', borderRadius: '4px', overflow: 'hidden' }}
          >
            {/* Header / trigger */}
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : program.slug)}
              className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
              style={{
                background: isOpen ? '#1d1e20' : '#C7C2ba',
                color: isOpen ? '#FFFFFF' : '#1d1e20',
              }}
              aria-expanded={isOpen}
            >
              <div className="flex flex-col gap-1 pr-4">
                <span className="font-body font-semibold text-lg leading-tight">
                  {program.nombre}
                </span>
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: isOpen ? 'rgba(255,255,255,0.65)' : '#6B6B6B' }}
                >
                  {program.descripcionBreve}
                </span>
              </div>
              <ChevronDown
                size={20}
                className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                style={{ color: '#6493b5' }}
              />
            </button>

            {/* Expanded content */}
            {isOpen && (
              <div
                className="px-6 py-6 flex flex-col gap-6"
                style={{ background: '#FFFFFF', borderTop: '2px solid #6493b5' }}
              >
                {/* Objective */}
                {program.objetivo && (
                  <div>
                    <h4
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: '#6493b5' }}
                    >
                      {lbl.objetivo}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#2D2D2D' }}>
                      {program.objetivo}
                    </p>
                  </div>
                )}

                {/* Courses table */}
                {program.cursosTabla && program.cursosTabla.length > 0 && (
                  <div>
                    <h4
                      className="text-xs font-semibold uppercase tracking-widest mb-3"
                      style={{ color: '#6493b5' }}
                    >
                      {lbl.cursos}
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                          <tr style={{ background: '#1d1e20' }}>
                            <th
                              className="text-left text-xs font-medium uppercase tracking-widest px-4 py-3"
                              style={{ color: '#6493b5' }}
                            >
                              {lbl.colCurso}
                            </th>
                            <th
                              className="text-left text-xs font-medium uppercase tracking-widest px-4 py-3 whitespace-nowrap"
                              style={{ color: '#6493b5' }}
                            >
                              {lbl.colHoras}
                            </th>
                            <th
                              className="text-left text-xs font-medium uppercase tracking-widest px-4 py-3 whitespace-nowrap"
                              style={{ color: '#6493b5' }}
                            >
                              {lbl.colPrecio}
                            </th>
                            {program.cursosTabla.some((c) => c.modalidad) && (
                              <th
                                className="text-left text-xs font-medium uppercase tracking-widest px-4 py-3"
                                style={{ color: '#6493b5' }}
                              >
                                {lbl.colModalidad}
                              </th>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {program.cursosTabla.map((curso, i) => (
                            <tr
                              key={i}
                              style={{ background: i % 2 === 0 ? '#F9F8F7' : '#FFFFFF' }}
                            >
                              <td
                                className="px-4 py-3 text-sm"
                                style={{ color: '#2D2D2D', borderBottom: '1px solid #E5E3DE' }}
                              >
                                {curso.nombre}
                              </td>
                              <td
                                className="px-4 py-3 text-sm whitespace-nowrap"
                                style={{ color: '#6B6B6B', borderBottom: '1px solid #E5E3DE' }}
                              >
                                {curso.horas}
                              </td>
                              <td
                                className="px-4 py-3 text-sm font-semibold whitespace-nowrap"
                                style={{ color: '#1d1e20', borderBottom: '1px solid #E5E3DE' }}
                              >
                                {typeof curso.precioUSD === 'number'
                                  ? `USD ${curso.precioUSD.toLocaleString('es-CL')}`
                                  : curso.precioUSD}
                              </td>
                              {program.cursosTabla!.some((c) => c.modalidad) && (
                                <td
                                  className="px-4 py-3 text-sm"
                                  style={{ color: '#6B6B6B', borderBottom: '1px solid #E5E3DE' }}
                                >
                                  {curso.modalidad ?? '—'}
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Meta details */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4"
                  style={{ borderTop: '1px solid #E5E3DE', borderBottom: '1px solid #E5E3DE' }}
                >
                  <div className="flex items-start gap-2">
                    <Clock size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest mb-1"
                        style={{ color: '#6B6B6B' }}
                      >
                        {lbl.duracion}
                      </p>
                      <p className="text-sm font-semibold" style={{ color: '#1d1e20' }}>
                        {program.duracion}
                      </p>
                    </div>
                  </div>

                  {program.sedes && (
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
                      <div>
                        <p
                          className="text-xs uppercase tracking-widest mb-1"
                          style={{ color: '#6B6B6B' }}
                        >
                          {lbl.sede}
                        </p>
                        <p className="text-sm font-semibold" style={{ color: '#1d1e20' }}>
                          {program.sedes.join(' · ')}
                        </p>
                      </div>
                    </div>
                  )}

                  {program.publicoObjetivo && (
                    <div className="flex items-start gap-2">
                      <Users size={14} className="mt-0.5 shrink-0" style={{ color: '#6493b5' }} />
                      <div>
                        <p
                          className="text-xs uppercase tracking-widest mb-1"
                          style={{ color: '#6B6B6B' }}
                        >
                          {lbl.publico}
                        </p>
                        <p className="text-sm" style={{ color: '#1d1e20' }}>
                          {program.publicoObjetivo}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  {!program.noSubPage ? (
                    <>
                      <Link
                        href={`${paths.base}/${program.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors"
                        style={{ background: '#1d1e20', color: '#FFFFFF', borderRadius: '2px' }}
                      >
                        {lbl.verPrograma} <ChevronRight size={16} />
                      </Link>
                      <Link
                        href={paths.admision}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors"
                        style={{
                          border: '1px solid #1d1e20',
                          color: '#1d1e20',
                          borderRadius: '2px',
                          background: 'transparent',
                        }}
                      >
                        {lbl.solicitar}
                      </Link>
                    </>
                  ) : (
                    <Link
                      href={paths.contacto}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors"
                      style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
                    >
                      {lbl.consultar} <ChevronRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
