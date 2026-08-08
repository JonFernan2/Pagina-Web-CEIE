'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { CONTACT_ZH } from '@/data/content.zh'

export default function ContactZHPage() {
  const d = CONTACT_ZH
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar lang="zh" currentPath="/zh/contact" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">{d.hero.h1}</h1>
        </div>
      </div>

      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="max-w-xl">
              <h2 className="font-display font-bold text-negro text-3xl mb-8">{d.form.title}</h2>
              {submitted ? (
                <div className="p-6 text-center" style={{ background: '#FFFFFF', border: '2px solid #6493b5', borderRadius: '4px' }}>
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
                    { id: 'name',         label: d.form.fields.name,         type: 'text',  required: true },
                    { id: 'organization', label: d.form.fields.organization,  type: 'text',  required: false },
                    { id: 'country',      label: d.form.fields.country,       type: 'text',  required: true },
                    { id: 'email',        label: d.form.fields.email,         type: 'email', required: true },
                    { id: 'phone',        label: d.form.fields.phone,         type: 'tel',   required: false },
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
                    <label htmlFor="program" className="text-sm font-medium text-negro">{d.form.fields.program}</label>
                    <select id="program" className="px-3 py-2 text-sm font-body border" style={{ borderColor: '#E5E3DE', borderRadius: '2px' }}>
                      <option value="">请选择...</option>
                      <option value="semester">学期课程</option>
                      <option value="intensive">强化课程</option>
                      <option value="specific-purposes">专业目的课程</option>
                      <option value="individual">个人定制课程</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-sm font-medium text-negro">{d.form.fields.message} *</label>
                    <textarea id="message" rows={4} required className="px-3 py-2 text-sm font-body border resize-none" style={{ borderColor: '#E5E3DE', borderRadius: '2px' }} />
                  </div>
                  <button type="submit" className="py-3 px-8 font-body font-semibold text-sm uppercase tracking-widest" style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}>
                    {d.form.fields.submit}
                  </button>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-negro text-3xl">{d.info.title}</h2>
              <div className="flex flex-col gap-3 text-sm" style={{ color: '#2D2D2D' }}>
                <p className="font-semibold text-base text-negro">{d.info.campus}</p>
                <p>{d.info.address}</p>
                <p>{d.info.phone}</p>
                {d.info.emails.map((em) => (
                  <a key={em} href={`mailto:${em}`} className="transition-colors hover:text-negro" style={{ color: '#6493b5' }}>{em}</a>
                ))}
                <p>{d.info.hours}</p>
                {d.info.social.map((s) => <p key={s} style={{ color: '#6B6B6B' }}>{s}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
