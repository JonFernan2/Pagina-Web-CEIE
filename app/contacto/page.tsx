'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import PlaceholderImage from '@/components/PlaceholderImage'
import { CONTACT_ES } from '@/data/content.es'

export default function ContactoPage() {
  const d = CONTACT_ES
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar lang="es" currentPath="/contacto" />

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1A1A1A', minHeight: '240px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">
            {d.hero.h1}
          </h1>
        </div>
      </div>

      {/* Content */}
      <section style={{ background: '#F7F5F0' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <div>
              <h2 className="font-display font-bold text-negro text-2xl mb-6">{d.form.title}</h2>
              {submitted ? (
                <div
                  className="p-6"
                  style={{ background: '#FFFFFF', border: '2px solid #C5A028', borderRadius: '4px' }}
                >
                  <p className="font-semibold text-negro mb-1">✓</p>
                  <p style={{ color: '#2D2D2D' }}>{d.form.fields.success}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 p-6"
                  style={{ background: '#FFFFFF', border: '1px solid #E5E3DE', borderRadius: '4px' }}
                >
                  {[
                    { id: 'name',         label: d.form.fields.name,         type: 'text',  required: true },
                    { id: 'organization', label: d.form.fields.organization,  type: 'text',  required: false },
                    { id: 'country',      label: d.form.fields.country,       type: 'text',  required: true },
                    { id: 'email',        label: d.form.fields.email,         type: 'email', required: true },
                    { id: 'phone',        label: d.form.fields.phone,         type: 'tel',   required: false },
                    { id: 'program',      label: d.form.fields.program,       type: 'text',  required: false },
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
                    <label htmlFor="message" className="text-sm font-medium text-negro">
                      {d.form.fields.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="px-3 py-2 text-sm font-body border resize-none"
                      style={{ borderColor: '#E5E3DE', borderRadius: '2px' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-3 font-body font-semibold text-sm uppercase tracking-widest transition-colors"
                    style={{ background: '#C5A028', color: '#1A1A1A', borderRadius: '2px' }}
                  >
                    {d.form.fields.submit}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
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
                {d.info.social.map((s) => (
                  <p key={s} style={{ color: '#6B6B6B' }}>{s}</p>
                ))}
              </div>

              <div className="w-full aspect-video overflow-hidden" style={{ borderRadius: '4px', border: '2px solid #C5A028' }}>
                <PlaceholderImage
                  label="Mapa: Campus UAI Viña del Mar — Padre Hurtado 750"
                  alt="Mapa de ubicación del Campus UAI Viña del Mar, Padre Hurtado 750"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
