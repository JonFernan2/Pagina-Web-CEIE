'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import AdmissionSteps from '@/components/AdmissionSteps'
import { ADMISSIONS_ES } from '@/data/content.es'
import Link from 'next/link'

export default function AdmisionPage() {
  const d = ADMISSIONS_ES
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/mjybwjrn', {
      method: 'POST',
      body: new FormData(e.currentTarget),
      headers: { Accept: 'application/json' },
    })
    if (res.ok) setSubmitted(true)
  }

  return (
    <>
      <Navbar lang="es" currentPath="/admision" />

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">{d.hero.h1}</h1>
          <p className="text-white/70 text-lg">{d.hero.subtitle}</p>
        </div>
      </div>

      {/* Steps */}
      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl mb-10 text-center">
            Proceso de admisión
          </h2>
          <AdmissionSteps steps={d.steps} />
        </div>
      </section>

      {/* Requirements table */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl mb-8">{d.requirements.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#1d1e20' }}>
                  {d.requirements.table.headers.map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest"
                      style={{ color: '#6493b5' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.requirements.table.rows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#C7C2ba' : '#FFFFFF' }}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="px-4 py-3"
                        style={{ color: '#2D2D2D', borderBottom: '1px solid #E5E3DE' }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-negro text-3xl mb-8">{d.form.title}</h2>

            {submitted ? (
              <div
                className="p-6 text-center"
                style={{ background: '#FFFFFF', border: '2px solid #6493b5', borderRadius: '4px' }}
              >
                <p className="text-lg font-semibold text-negro mb-2">✓</p>
                <p className="text-base" style={{ color: '#2D2D2D' }}>{d.form.fields.success}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-6"
                style={{ background: '#FFFFFF', border: '1px solid #E5E3DE', borderRadius: '4px' }}
              >
                <FormField label={d.form.fields.name} id="name" type="text" required />
                <FormField label={d.form.fields.country} id="country" type="text" required />
                <FormField label={d.form.fields.email} id="email" type="email" required />
                <FormField label={d.form.fields.phone} id="phone" type="tel" />
                <div className="flex flex-col gap-1">
                  <label htmlFor="program" className="text-sm font-medium text-negro">
                    {d.form.fields.program} *
                  </label>
                  <select
                    id="program"
                    name="program"
                    required
                    className="px-3 py-2 text-sm font-body border"
                    style={{ borderColor: '#E5E3DE', borderRadius: '2px', color: '#2D2D2D' }}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="semestral">Programa Semestral</option>
                    <option value="intensivo">Programa Intensivo</option>
                    <option value="fines-especificos">Fines Específicos</option>
                    <option value="individual">Programa Individual</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="level" className="text-sm font-medium text-negro">
                    {d.form.fields.level} *
                  </label>
                  <select
                    id="level"
                    name="level"
                    required
                    className="px-3 py-2 text-sm font-body border"
                    style={{ borderColor: '#E5E3DE', borderRadius: '2px', color: '#2D2D2D' }}
                  >
                    <option value="">Seleccionar...</option>
                    {d.form.fields.levelOpts.map((opt) => (
                      <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                    ))}
                  </select>
                </div>
                <FormField label={d.form.fields.startDate} id="startDate" type="date" required />
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-sm font-medium text-negro">
                    {d.form.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="px-3 py-2 text-sm font-body border resize-none"
                    style={{ borderColor: '#E5E3DE', borderRadius: '2px', color: '#2D2D2D' }}
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" required className="mt-0.5" />
                  <label htmlFor="privacy" className="text-sm" style={{ color: '#6B6B6B' }}>
                    {d.form.fields.privacy}{' '}
                    <Link href="/privacidad" className="underline hover:text-negro" style={{ color: '#6493b5' }}>
                      (ver política)
                    </Link>
                  </label>
                </div>
                <button
                  type="submit"
                  className="py-3 px-8 font-body font-semibold text-sm uppercase tracking-widest transition-colors duration-200"
                  style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
                >
                  {d.form.fields.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Upcoming cohorts */}
      <section style={{ background: '#FFFFFF' }} className="py-12">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: '42rem' }}>
          <h2 className="font-display font-bold text-negro text-2xl mb-3">{d.cohorts.title}</h2>
          <p className="text-sm mb-6" style={{ color: '#6B6B6B' }}>{d.cohorts.intro}</p>
          <div className="flex flex-col gap-3">
            {d.cohorts.rows.map((row) => (
              <div key={row.program} className="px-4 py-3" style={{ background: '#F5F4F1', borderLeft: '3px solid #6493b5' }}>
                <p className="text-sm font-semibold text-negro mb-0.5">{row.program}</p>
                <p className="text-sm" style={{ color: '#2D2D2D' }}>{row.schedule}</p>
                {row.detail && <p className="text-xs mt-1" style={{ color: '#6B6B6B' }}>{row.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}

function FormField({
  label,
  id,
  type,
  required,
}: {
  label: string
  id: string
  type: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-negro">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="px-3 py-2 text-sm font-body border"
        style={{ borderColor: '#E5E3DE', borderRadius: '2px', color: '#2D2D2D' }}
      />
    </div>
  )
}
