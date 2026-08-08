'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import PlaceholderImage from '@/components/PlaceholderImage'
import { CONTACT_EN } from '@/data/content.en'

export default function ContactENPage() {
  const d = CONTACT_EN
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Navbar lang="en" currentPath="/en/contact" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1A1A1A', minHeight: '240px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">{d.hero.h1}</h1>
        </div>
      </div>

      <section style={{ background: '#F7F5F0' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-negro text-2xl mb-6">{d.form.title}</h2>
              {submitted ? (
                <div className="p-6" style={{ background: '#FFFFFF', border: '2px solid #C5A028', borderRadius: '4px' }}>
                  <p className="font-semibold text-negro mb-1">✓</p>
                  <p style={{ color: '#2D2D2D' }}>{d.form.fields.success}</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                  className="flex flex-col gap-4 p-6"
                  style={{ background: '#FFFFFF', border: '1px solid #E5E3DE', borderRadius: '4px' }}
                >
                  {[
                    { id: 'name',    label: d.form.fields.name,         type: 'text',  req: true },
                    { id: 'org',     label: d.form.fields.organization,  type: 'text',  req: false },
                    { id: 'country', label: d.form.fields.country,       type: 'text',  req: true },
                    { id: 'email',   label: d.form.fields.email,         type: 'email', req: true },
                    { id: 'phone',   label: d.form.fields.phone,         type: 'tel',   req: false },
                    { id: 'program', label: d.form.fields.program,       type: 'text',  req: false },
                  ].map((f) => (
                    <div key={f.id} className="flex flex-col gap-1">
                      <label htmlFor={f.id} className="text-sm font-medium text-negro">{f.label} {f.req && '*'}</label>
                      <input type={f.type} id={f.id} required={f.req} className="px-3 py-2 text-sm font-body border" style={{ borderColor: '#E5E3DE', borderRadius: '2px' }} />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-sm font-medium text-negro">{d.form.fields.message} *</label>
                    <textarea id="message" rows={4} required className="px-3 py-2 text-sm font-body border resize-none" style={{ borderColor: '#E5E3DE', borderRadius: '2px' }} />
                  </div>
                  <button type="submit" className="py-3 font-body font-semibold text-sm uppercase tracking-widest" style={{ background: '#C5A028', color: '#1A1A1A', borderRadius: '2px' }}>
                    {d.form.fields.submit}
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-display font-bold text-negro text-2xl mb-6">{d.info.title}</h2>
              <div className="flex flex-col gap-4 mb-6 text-sm" style={{ color: '#2D2D2D' }}>
                <div>
                  <p className="font-semibold text-negro">{d.info.campus}</p>
                  <p style={{ color: '#6B6B6B' }}>{d.info.address}</p>
                </div>
                <p>{d.info.phone}</p>
                {d.info.emails.map((em: string) => (
                  <a key={em} href={`mailto:${em}`} className="hover:underline" style={{ color: '#C5A028' }}>{em}</a>
                ))}
                <p>{d.info.hours}</p>
                {d.info.social.map((s) => <p key={s} style={{ color: '#6B6B6B' }}>{s}</p>)}
              </div>
              <div className="w-full aspect-video overflow-hidden" style={{ borderRadius: '4px', border: '2px solid #C5A028' }}>
                <PlaceholderImage label="Map: UAI Viña del Mar Campus — Padre Hurtado 750" alt="Map of UAI Viña del Mar Campus location, Padre Hurtado 750" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
