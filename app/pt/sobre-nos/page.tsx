import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { ABOUT_PT } from '@/data/content.pt'
import { DIRECTORIO } from '@/data/directorio'

const SPACE_IMAGES = [
  '/images/espacio-aula-principal.jpg',
  '/images/galeria-ceie-spanish-corner.jpg',
  '/images/espacio-seminario-1.jpg',
  '/images/actividad-exterior-vina.jpg',
  '/images/espacio-sala-conferencias.jpg',
]

export const metadata: Metadata = {
  title: ABOUT_PT.meta.title,
  description: ABOUT_PT.meta.description,
}

export default function SobreNosPTPage() {
  const d = ABOUT_PT

  return (
    <>
      <Navbar lang="pt" currentPath="/pt/sobre-nos" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">{d.hero.h1}</h1>
        </div>
      </div>

      {/* Team Directory */}
      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-10">
            Nossa Equipe
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
                    alt={member.alt.pt}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.fotoPosition ?? 'center center' }}
                  />
                </div>
                <p className="font-body font-semibold text-negro text-base leading-tight mb-1">
                  {member.nombre}
                </p>
                <p className="font-body text-sm leading-snug mb-2" style={{ color: '#6493b5' }}>
                  {member.cargo.pt}
                </p>
                {member.credenciales && (
                  <ul className="flex flex-col gap-0.5">
                    {member.credenciales.pt.map((c) => (
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
              <h3 className="font-body text-lg font-semibold mb-3" style={{ color: '#6493b5' }}>Missão</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D' }}>{d.sections.mision.mision}</p>
            </div>
            <div className="p-6" style={{ border: '1px solid #E5E3DE', borderRadius: '4px', background: '#FFFFFF' }}>
              <h3 className="font-body text-lg font-semibold mb-3 text-negro">Visão</h3>
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

      {/* Facilities */}
      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-8">{d.sections.espacios.title}</h2>
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

      {/* Launch Gallery */}
      <section style={{ background: '#FFFFFF' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-3">
            Galeria do Lançamento
          </h2>
          <p className="font-body text-sm mb-8" style={{ color: '#6B6B6B' }}>
            Imagens do ato oficial de inauguração do CEIE na Universidad Adolfo Ibáñez, Viña del Mar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 overflow-hidden" style={{ height: '320px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-lanzamiento-auditorio.jpg"
                alt="Inauguração do CEIE UAI — grupo completo no auditório com letras UAI e bandeiras internacionais"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden" style={{ height: '320px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-equipo.jpg"
                alt="Equipe CEIE UAI ao lado do painel do lançamento Del Desierto a la Patagonia"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="overflow-hidden" style={{ height: '220px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-lanzamiento-coctel.jpg"
                alt="Coquetel de boas-vindas do lançamento CEIE no lobby da UAI Viña del Mar"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden" style={{ height: '220px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-lanzamiento-grupo.jpg"
                alt="Estudantes internacionais e acadêmicos na cerimônia de lançamento do CEIE UAI"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="overflow-hidden" style={{ height: '220px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-lanzamiento-kahoot-1.jpg"
                alt="Atividade de integração Kahoot durante o lançamento do CEIE UAI com bandeiras de países"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="md:col-span-2 overflow-hidden" style={{ height: '220px', borderRadius: '4px' }}>
              <img
                src="/images/actividad-exterior-vina.jpg"
                alt="Estudantes internacionais do CEIE nos jardins do campus UAI com vista para Viña del Mar"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden" style={{ height: '220px', borderRadius: '4px' }}>
              <img
                src="/images/galeria-ceie-equipo-admin.jpg"
                alt="Equipe administrativa do CEIE UAI no campus Viña del Mar"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
