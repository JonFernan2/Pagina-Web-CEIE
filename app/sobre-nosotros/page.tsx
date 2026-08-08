import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { ABOUT_ES } from '@/data/content.es'

const SPACE_IMAGES = [
  '/images/espacio-aula-principal.jpg',
  '/images/galeria-ceie-spanish-corner.jpg',
  '/images/espacio-seminario-1.jpg',
  '/images/actividad-exterior-vina.jpg',
  '/images/espacio-sala-conferencias.jpg',
]

export const metadata: Metadata = {
  title: ABOUT_ES.meta.title,
  description: ABOUT_ES.meta.description,
}

export default function SobreNosotrosPage() {
  const d = ABOUT_ES

  return (
    <>
      <Navbar lang="es" currentPath="/sobre-nosotros" />

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1A1A1A', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">
            {d.hero.h1}
          </h1>
        </div>
      </div>

      {/* Misión y Visión */}
      <section style={{ background: '#F7F5F0' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-8">
            {d.sections.mision.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6" style={{ border: '2px solid #C5A028', borderRadius: '4px', background: '#FFFFFF' }}>
              <h3 className="font-body text-lg font-semibold mb-3" style={{ color: '#C5A028' }}>Misión</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.mision}</p>
            </div>
            <div className="p-6" style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}>
              <h3 className="font-body text-lg font-semibold mb-3 text-negro">Visión</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contexto institucional */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-8">
            {d.sections.contexto.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#2D2D2D' }}>
                {d.sections.contexto.p1}
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>
                {d.sections.contexto.p2}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {d.sections.contexto.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="text-center p-5"
                  style={{ background: '#1A1A1A', borderRadius: '4px' }}
                >
                  <p className="font-display font-bold text-3xl mb-1" style={{ color: '#C5A028' }}>
                    {kpi.value}
                  </p>
                  <p className="text-sm text-white/70">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Acreditación SACIC */}
      <section style={{ background: '#F7F5F0' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-6">
            {d.sections.sacic.title}
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#2D2D2D' }}>
            {d.sections.sacic.p1}
          </p>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#2D2D2D' }}>
            {d.sections.sacic.p2}
          </p>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium"
            style={{
              background: '#C5A028',
              color: '#1A1A1A',
              borderRadius: '2px',
            }}
          >
            <span>●</span> {d.sections.sacic.status}
          </div>
        </div>
      </section>

      {/* Espacios (V2) */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-8">
            {d.sections.espacios.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {d.sections.espacios.spaces.map((space, i) => (
              <div
                key={space.nombre}
                className={`flex flex-col overflow-hidden ${i === 4 ? 'md:col-span-2' : ''}`}
                style={{ border: '1px solid #E5E3DE', borderRadius: '4px' }}
              >
                <div className="w-full overflow-hidden" style={{ height: i === 4 ? '280px' : '220px' }}>
                  <img
                    src={SPACE_IMAGES[i]}
                    alt={space.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-body text-lg font-semibold text-negro mb-2">{space.nombre}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{space.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería del lanzamiento */}
      <section style={{ background: '#F7F5F0' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-3">
            Galería del Lanzamiento
          </h2>
          <p className="font-body text-sm mb-8" style={{ color: '#6B6B6B' }}>
            Imágenes del acto oficial de inauguración del CEIE en la Universidad Adolfo Ibáñez, Viña del Mar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 overflow-hidden" style={{ height: '320px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-lanzamiento-auditorio.jpg"
                alt="Acto de inauguración del CEIE UAI — grupo completo en auditorio con letras UAI y banderas internacionales"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden" style={{ height: '320px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-equipo.jpg"
                alt="Equipo CEIE UAI junto al panel del lanzamiento Del Desierto a la Patagonia"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="overflow-hidden" style={{ height: '220px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-lanzamiento-coctel.jpg"
                alt="Cóctel de bienvenida del lanzamiento CEIE en el lobby de la UAI Viña del Mar"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden" style={{ height: '220px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-lanzamiento-grupo.jpg"
                alt="Estudiantes internacionales y académicos en la ceremonia de lanzamiento del CEIE UAI"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="overflow-hidden" style={{ height: '220px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-lanzamiento-kahoot-1.jpg"
                alt="Actividad de integración Kahoot durante el lanzamiento del CEIE UAI con banderas de países"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="md:col-span-2 overflow-hidden" style={{ height: '220px', borderRadius: '4px' }}>
              <img
                src="/images/actividad-exterior-vina.jpg"
                alt="Estudiantes internacionales del CEIE en los jardines del campus UAI con vista a Viña del Mar"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden" style={{ height: '220px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-equipo-admin.jpg"
                alt="Equipo administrativo del CEIE UAI en el campus Viña del Mar"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
