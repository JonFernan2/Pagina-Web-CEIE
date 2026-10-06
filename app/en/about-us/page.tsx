import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import SpacesGallery, { type SpaceImages } from '@/components/SpacesGallery'
import LaunchGallery from '@/components/LaunchGallery'
import { ABOUT_EN } from '@/data/content.en'
import { DIRECTORIO } from '@/data/directorio'

const SPACE_IMAGES: SpaceImages[] = [
  { srcs: ['/images/espacio-seminario-1.jpg', '/images/espacio-aula-2.jpg'], carousel: true, positions: ['center 42%', 'center 38%'] },
  { srcs: ['/images/biblioteca-uai-5.jpg', '/images/galeria-ceie-spanish-corner.jpg', '/images/biblioteca-uai-1.jpg', '/images/biblioteca-uai-2.jpg', '/images/biblioteca-uai-3.jpg', '/images/biblioteca-uai-4.jpg'], carousel: true, positions: ['center 60%', 'center', 'center', 'center', 'center', 'center'] },
  { srcs: ['/images/sala-estudio-2.jpg', '/images/sala-estudio-3.jpg'], carousel: true, positions: ['center', 'center 60%'] },
  { srcs: ['/images/gimnasio-uai.jpg'] },
  { srcs: ['/images/espacio-aula-principal.jpg', '/images/espacio-sala-conferencias.jpg', '/images/actividades-culturales-uai.jpg'], wide: true, carousel: true, positions: ['center', 'center', 'center'] },
  { srcs: ['/images/campus-vina-aerea.jpg'], wide: true, busRoutes: true },
]

const LAUNCH_IMAGES_EN = [
  { src: '/images/galeria-ceie-lanzamiento-grupo.jpg', alt: 'CEIE UAI inauguration — full group in auditorium with UAI letters and international flags', objectPosition: 'center' },
  { src: '/images/galeria-ceie-equipo.jpg', alt: 'CEIE UAI team beside the launch panel Del Desierto a la Patagonia', objectPosition: 'top' },
  { src: '/images/galeria-ceie-lanzamiento-coctel.jpg', alt: 'Kahoot activity winners on stage during the CEIE UAI launch', objectPosition: 'center' },
  { src: '/images/galeria-ceie-lanzamiento-auditorio.jpg', alt: 'International students and faculty at the CEIE UAI inauguration ceremony', objectPosition: 'center' },
  { src: '/images/galeria-ceie-lanzamiento-kahoot-1.jpg', alt: 'Kahoot integration activity during the CEIE UAI launch with international flags on stage', objectPosition: 'center' },
  { src: '/images/espacio-aula-principal.jpg', alt: 'International CEIE students in the UAI campus gardens with Viña del Mar skyline', objectPosition: 'center' },
  { src: '/images/galeria-ceie-equipo-admin.jpg', alt: 'CEIE UAI administrative team at the Viña del Mar campus', objectPosition: 'center' },
]

export const metadata: Metadata = {
  title: ABOUT_EN.meta.title,
  description: ABOUT_EN.meta.description,
}

export default function AboutENPage() {
  const d = ABOUT_EN

  return (
    <>
      <Navbar lang="en" currentPath="/en/about-us" />
      <main id="contenido">

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">{d.hero.h1}</h1>
          <p className="font-body text-base md:text-lg leading-relaxed text-white/80 mt-4 max-w-3xl">
            {d.hero.subtitle}
          </p>
        </div>
      </div>

      {/* Team Directory */}
      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-10">
            Our Team
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
                    alt={member.alt.en}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.fotoPosition ?? 'center center' }}
                  />
                </div>
                <p className="font-body font-semibold text-negro text-base leading-tight mb-1">
                  {member.nombre}
                </p>
                <p className="font-body text-sm font-medium leading-snug mb-2" style={{ color: '#1d1e20' }}>
                  {member.cargo.en}
                </p>
                {member.credenciales && (
                  <ul className="flex flex-col gap-0.5">
                    {member.credenciales.en.map((c) => (
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

      {/* Mission & Vision */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-8">{d.sections.mision.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6" style={{ border: '2px solid #6493b5', borderRadius: '4px', background: '#FFFFFF' }}>
              <h3 className="font-body text-lg font-semibold mb-3" style={{ color: '#1d1e20' }}>Mission</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.mision}</p>
            </div>
            <div className="p-6" style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}>
              <h3 className="font-body text-lg font-semibold mb-3 text-negro">Vision</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.vision}</p>
            </div>
          </div>
          <div className="mt-8 p-6" style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}>
            <h3 className="font-body text-lg font-semibold mb-3 text-negro">Values</h3>
            <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.valores}</p>
          </div>
        </div>
      </section>

      <SpacesGallery
        spaces={d.sections.espacios.spaces}
        title={d.sections.espacios.title}
        spaceImages={SPACE_IMAGES}
        lang="en"
      />

      <LaunchGallery
        title="Image Gallery"
        images={LAUNCH_IMAGES_EN}
        lang="en"
      />

      </main>

      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
