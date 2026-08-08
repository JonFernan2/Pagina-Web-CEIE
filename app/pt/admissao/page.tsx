'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import AdmissionSteps from '@/components/AdmissionSteps'
import { ADMISSIONS_PT } from '@/data/content.pt'
import Link from 'next/link'

export default function AdmissaoPTPage() {
  const d = ADMISSIONS_PT
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar lang="pt" currentPath="/pt/admissao" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1A1A1A', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">{d.hero.h1}</h1>
          <p className="text-white/70 text-lg">{d.hero.subtitle}</p>
        </div>
      </div>

      <section style={{ background: '#F7F5F0' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl mb-10 text-center">Processo de admissão</h2>
          <AdmissionSteps steps={d.steps} />
        </div>
      </section>

      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl mb-8">{d.requirements.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#1A1A1A' }}>
                  {d.requirements.table.headers.map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest" style={{ color: '#C5A028' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.requirements.table.rows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#F7F5F0' : '#FFFFFF' }}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3" style={{ color: '#2D2D2D', borderBottom: '1px solid #E5E3DE' }}>
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

      <section style={{ background: '#F7F5F0' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-negro text-3xl mb-8">{d.form.title}</h2>
            {submitted ? (
              <div className="p-6 text-center" style={{ background: '#FFFFFF', border: '2px solid #C5A028', borderRadius: '4px' }}>
                <p className="text-lg font-semibold text-negro mb-2">✓</p>
                <p style={{ color: '#2D2D2D' }}>{d.form.fields.success}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-6"
                style={{ background: '#FFFFFF', border: '1px solid #E5E3DE', borderRadius: '4px' }}
              >
                {[
                  { id: 'name',    label: d.form.fields.name,    type: 'text',  required: true },
                  { id: 'country', label: d.form.fields.country, type: 'text',  required: true },
                  { id: 'email',   label: d.form.fields.email,   type: 'email', required: true },
                  { id: 'phone',   label: d.form.fields.phone,   type: 'tel',   required: false },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-1">
                    <label htmlFor={f.id} className="text-sm font-medium text-negro">
                      {f.label} {f.required && '*'}
                    </label>
                    <input
                      type={f.type}
                      id={f.id}
                      name={f.id}
                      required={f.required}
                      className="px-3 py-2 text-sm font-body border"
                      style={{ borderColor: '#E5E3DE', borderRadius: '2px' }}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <label htmlFor="program" className="text-sm font-medium text-negro">{d.form.fields.program} *</label>
                  <select id="program" required className="px-3 py-2 text-sm font-body border" style={{ borderColor: '#E5E3DE', borderRadius: '2px' }}>
                    <option value="">Selecionar...</option>
                    <option value="semestral">Programa Semestral</option>
                    <option value="intensivo">Programa Intensivo</option>
                    <option value="fins-especificos">Fins Específicos</option>
                    <option value="individual">Programa Individual</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="level" className="text-sm font-medium text-negro">{d.form.fields.level} *</label>
                  <select id="level" required className="px-3 py-2 text-sm font-body border" style={{ borderColor: '#E5E3DE', borderRadius: '2px' }}>
                    <option value="">Selecionar...</option>
                    {d.form.fields.levelOpts.map((opt) => <option key={opt} value={opt.toLowerCase()}>{opt}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="startDate" className="text-sm font-medium text-negro">{d.form.fields.startDate} *</label>
                  <input type="date" id="startDate" required className="px-3 py-2 text-sm font-body border" style={{ borderColor: '#E5E3DE', borderRadius: '2px' }} />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-sm font-medium text-negro">{d.form.fields.message}</label>
                  <textarea id="message" rows={4} className="px-3 py-2 text-sm font-body border resize-none" style={{ borderColor: '#E5E3DE', borderRadius: '2px' }} />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" required className="mt-0.5" />
                  <label htmlFor="privacy" className="text-sm" style={{ color: '#6B6B6B' }}>
                    {d.form.fields.privacy}{' '}
                    <Link href="/pt/privacidade" className="underline" style={{ color: '#C5A028' }}>(ver política)</Link>
                  </label>
                </div>
                <button type="submit" className="py-3 px-8 font-body font-semibold text-sm uppercase tracking-widest" style={{ background: '#C5A028', color: '#1A1A1A', borderRadius: '2px' }}>
                  {d.form.fields.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
