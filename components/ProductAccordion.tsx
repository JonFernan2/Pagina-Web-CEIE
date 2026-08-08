'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, MapPin, Users, Clock, ChevronRight } from 'lucide-react'
import type { ProgramData } from '@/data/programs'

interface ProductAccordionProps {
  programs: ProgramData[]
}

export default function ProductAccordion({ programs }: ProductAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

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
                      Objetivo
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
                      Cursos y tarifas
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                          <tr style={{ background: '#1d1e20' }}>
                            <th
                              className="text-left text-xs font-medium uppercase tracking-widest px-4 py-3"
                              style={{ color: '#6493b5' }}
                            >
                              Curso
                            </th>
                            <th
                              className="text-left text-xs font-medium uppercase tracking-widest px-4 py-3 whitespace-nowrap"
                              style={{ color: '#6493b5' }}
                            >
                              N° Hrs.
                            </th>
                            <th
                              className="text-left text-xs font-medium uppercase tracking-widest px-4 py-3 whitespace-nowrap"
                              style={{ color: '#6493b5' }}
                            >
                              Precio USD
                            </th>
                            {program.cursosTabla.some((c) => c.modalidad) && (
                              <th
                                className="text-left text-xs font-medium uppercase tracking-widest px-4 py-3"
                                style={{ color: '#6493b5' }}
                              >
                                Modalidad / Duración
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
                        Duración
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
                          Sede
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
                          Público objetivo
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
                  {program.slug !== 'proyectos' ? (
                    <>
                      <Link
                        href={`/programas-y-cursos/${program.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors"
                        style={{ background: '#1d1e20', color: '#FFFFFF', borderRadius: '2px' }}
                      >
                        Ver programa completo <ChevronRight size={16} />
                      </Link>
                      <Link
                        href="/admision"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors"
                        style={{
                          border: '1px solid #1d1e20',
                          color: '#1d1e20',
                          borderRadius: '2px',
                          background: 'transparent',
                        }}
                      >
                        Solicitar admisión
                      </Link>
                    </>
                  ) : (
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors"
                      style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
                    >
                      Consultar propuesta <ChevronRight size={16} />
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
