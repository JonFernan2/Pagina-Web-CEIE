import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import SpacesGallery from '@/components/SpacesGallery'
import LaunchGallery from '@/components/LaunchGallery'
import { ABOUT_ZH } from '@/data/content.zh'
import { DIRECTORIO } from '@/data/directorio'

const SPACE_IMAGES = [
  '/images/actividad-exterior-vina.jpg',
  '/images/galeria-ceie-spanish-corner.jpg',
  '/images/espacio-seminario-1.jpg',
  '/images/campus-vina-aerea.jpg',
  '/images/espacio-aula-principal.jpg',
]

const ACTIVIDADES_IMG2 = '/images/espacio-sala-conferencias.jpg'

const LAUNCH_IMAGES_ZH = [
  { src: '/images/galeria-ceie-lanzamiento-auditorio.jpg', alt: 'CEIE UAI成立典礼——礼堂全体合影，背景为UAI字样与各国国旗', colSpan: 2, height: 320, objectPosition: 'center' },
  { src: '/images/galeria-ceie-equipo.jpg', alt: 'CEIE UAI团队于开幕展板前合影', height: 320, objectPosition: 'top' },
  { src: '/images/galeria-ceie-lanzamiento-coctel.jpg', alt: 'CEIE成立典礼欢迎招待会，UAI Viña del Mar大厅', height: 220, objectPosition: 'center' },
  { src: '/images/galeria-ceie-lanzamiento-grupo.jpg', alt: 'CEIE UAI成立典礼上的国际学员与师资合影', height: 220, objectPosition: 'top' },
  { src: '/images/galeria-ceie-lanzamiento-kahoot-1.jpg', alt: 'CEIE UAI开幕Kahoot互动游戏，舞台背景展示各国国旗', height: 220, objectPosition: 'center' },
  { src: '/images/actividad-exterior-vina.jpg', alt: 'CEIE国际学员在UAI校园花园，背景为Viña del Mar城市风光', colSpan: 2, height: 220, objectPosition: 'center' },
  { src: '/images/galeria-ceie-equipo-admin.jpg', alt: 'CEIE UAI行政团队在Viña del Mar校区', height: 220, objectPosition: 'center' },
]

export const metadata: Metadata = {
  title: ABOUT_ZH.meta.title,
  description: ABOUT_ZH.meta.description,
}

export default function AboutZHPage() {
  const d = ABOUT_ZH

  return (
    <>
      <Navbar lang="zh" currentPath="/zh/about-us" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">{d.hero.h1}</h1>
        </div>
      </div>

      {/* Team Directory */}
      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-10">
            我们的团队
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
                    alt={member.alt.zh}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.fotoPosition ?? 'center center' }}
                  />
                </div>
                <p className="font-body font-semibold text-negro text-base leading-tight mb-1">
                  {member.nombre}
                </p>
                <p className="font-body text-sm leading-snug mb-2" style={{ color: '#6493b5' }}>
                  {member.cargo.zh}
                </p>
                {member.credenciales && (
                  <ul className="flex flex-col gap-0.5">
                    {member.credenciales.zh.map((c) => (
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
              <h3 className="font-body text-lg font-semibold mb-3" style={{ color: '#6493b5' }}>使命</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.mision}</p>
            </div>
            <div className="p-6" style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}>
              <h3 className="font-body text-lg font-semibold mb-3 text-negro">愿景</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional context */}
      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-8">{d.sections.contexto.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#2D2D2D' }}>{d.sections.contexto.p1}</p>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.contexto.p2}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {d.sections.contexto.kpis.map((kpi) => (
                <div key={kpi.label} className="text-center p-5" style={{ background: '#1d1e20', borderRadius: '4px' }}>
                  <p className="font-display font-bold text-3xl mb-1" style={{ color: '#6493b5' }}>{kpi.value}</p>
                  <p className="text-sm text-white/70">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SACIC */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-6">{d.sections.sacic.title}</h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#2D2D2D' }}>{d.sections.sacic.p1}</p>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#2D2D2D' }}>{d.sections.sacic.p2}</p>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium"
            style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}
          >
            <span>●</span> {d.sections.sacic.status}
          </div>
        </div>
      </section>

      <SpacesGallery
        spaces={d.sections.espacios.spaces}
        title={d.sections.espacios.title}
        spaceImages={SPACE_IMAGES}
        activitiesImg2={ACTIVIDADES_IMG2}
      />

      <LaunchGallery
        title="开幕活动图集"
        subtitle="CEIE在阿道夫·伊瓦涅斯大学Viña del Mar校区正式成立典礼的影像记录。"
        images={LAUNCH_IMAGES_ZH}
      />

      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
