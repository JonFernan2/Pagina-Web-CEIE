import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import SpacesGallery, { type SpaceImages } from '@/components/SpacesGallery'
import LaunchGallery from '@/components/LaunchGallery'
import { ABOUT_ES } from '@/data/content.es'
import { DIRECTORIO } from '@/data/directorio'

const SPACE_IMAGES: SpaceImages[] = [
  { srcs: ['/images/espacio-seminario-1.jpg', '/images/espacio-aula-2.jpg'], carousel: true, positions: ['center 42%', 'center 38%'] },
  { srcs: ['/images/biblioteca-uai-5.jpg', '/images/galeria-ceie-spanish-corner.jpg', '/images/biblioteca-uai-1.jpg', '/images/biblioteca-uai-2.jpg', '/images/biblioteca-uai-3.jpg', '/images/biblioteca-uai-4.jpg'], carousel: true, positions: ['center 60%', 'center', 'center', 'center', 'center', 'center'] },
  { srcs: ['/images/sala-estudio-2.jpg', '/images/sala-estudio-3.jpg'], carousel: true, positions: ['center', 'center 60%'] },
  { srcs: ['/images/gimnasio-uai.jpg'] },
  { srcs: ['/images/espacio-aula-principal.jpg', '/images/espacio-sala-conferencias.jpg', '/images/actividades-culturales-uai.jpg'], wide: true, carousel: true, positions: ['center', 'center', 'center'] },
  { srcs: ['/images/campus-vina-aerea.jpg'], wide: true, busRoutes: true },
]

const LAUNCH_IMAGES_ES = [
  { src: '/images/galeria-ceie-lanzamiento-grupo.jpg', alt: 'Acto de inauguración del CEIE UAI — grupo completo en auditorio con letras UAI y banderas internacionales', objectPosition: 'center' },
  { src: '/images/galeria-ceie-equipo.jpg', alt: 'Equipo CEIE UAI junto al panel del lanzamiento Del Desierto a la Patagonia', objectPosition: 'top' },
  { src: '/images/galeria-ceie-lanzamiento-coctel.jpg', alt: 'Ganadores de la actividad Kahoot en el escenario durante el lanzamiento del CEIE UAI', objectPosition: 'center' },
  { src: '/images/galeria-ceie-lanzamiento-auditorio.jpg', alt: 'Estudiantes internacionales y académicos en la ceremonia de lanzamiento del CEIE UAI', objectPosition: 'center' },
  { src: '/images/galeria-ceie-lanzamiento-kahoot-1.jpg', alt: 'Actividad de integración Kahoot durante el lanzamiento del CEIE UAI con banderas de países', objectPosition: 'center' },
  { src: '/images/espacio-aula-principal.jpg', alt: 'Estudiantes internacionales del CEIE en los jardines del campus UAI con vista a Viña del Mar', objectPosition: 'center' },
  { src: '/images/galeria-ceie-equipo-admin.jpg', alt: 'Equipo administrativo del CEIE UAI en el campus Viña del Mar', objectPosition: 'center' },
  { src: '/images/galeria-ceie-conversatorio-1.jpg', alt: 'Conversatorio del CEIE y la Facultad de Artes Liberales UAI con estudiantes en el campus Viña del Mar', objectPosition: 'center' },
  { src: '/images/galeria-ceie-conversatorio-2.jpg', alt: 'Panel del conversatorio organizado por el CEIE y la Facultad de Artes Liberales UAI', objectPosition: 'center' },
  { src: '/images/galeria-ceie-conversatorio-3.jpg', alt: 'Integrantes del panel junto al pendón del CEIE durante el conversatorio', objectPosition: 'center 28%' },
  { src: '/images/galeria-ceie-conversatorio-4.jpg', alt: 'Intervención del panel durante el conversatorio del CEIE y la Facultad de Artes Liberales UAI', objectPosition: 'center' },
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
      <main id="contenido">

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">
            {d.hero.h1}
          </h1>
          <p className="font-body text-base md:text-lg leading-relaxed text-white/80 mt-4 max-w-3xl">
            {d.hero.subtitle}
          </p>
        </div>
      </div>

      {/* Directorio */}
      <section id="equipo" style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-10">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {DIRECTORIO.map((member) => (
              <div key={member.nombre} className="flex flex-col items-center text-center">
                <div
                  className="w-36 h-36 overflow-hidden mb-4"
                  style={{ borderRadius: '50%', border: '3px solid #6493b5' }}
                >
                  <img
                    src={member.foto}
                    alt={member.alt.es}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.fotoPosition ?? 'center center' }}
                  />
                </div>
                <p className="font-body font-semibold text-negro text-base leading-tight mb-1">
                  {member.nombre}
                </p>
                <p className="font-body text-sm font-medium leading-snug mb-2" style={{ color: '#1d1e20' }}>
                  {member.cargo.es}
                </p>
                {member.credenciales && (
                  <ul className="flex flex-col gap-0.5">
                    {member.credenciales.es.map((c) => (
                      <li key={c} className="font-body text-xs leading-snug" style={{ color: '#6B6B6B' }}>
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section id="mision-vision-valores" style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-8">
            {d.sections.mision.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6" style={{ border: '2px solid #6493b5', borderRadius: '4px', background: '#FFFFFF' }}>
              <h3 className="font-body text-lg font-semibold mb-3" style={{ color: '#1d1e20' }}>Misión</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.mision}</p>
            </div>
            <div className="p-6" style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}>
              <h3 className="font-body text-lg font-semibold mb-3 text-negro">Visión</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.vision}</p>
            </div>
          </div>
          <div className="mt-8 p-6" style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}>
            <h3 className="font-body text-lg font-semibold mb-3 text-negro">Valores</h3>
            <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.valores}</p>
          </div>
        </div>
      </section>

      <SpacesGallery
        id="espacios"
        spaces={d.sections.espacios.spaces}
        title={d.sections.espacios.title}
        spaceImages={SPACE_IMAGES}
        lang="es"
      />

      <LaunchGallery
        id="galeria"
        title="Galería de imágenes"
        images={LAUNCH_IMAGES_ES}
        lang="es"
      />

      </main>

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
