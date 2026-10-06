const LOGOS: Record<string, { src: string; alt: string; width: number; height: number; h: string }> = {
  aacsb: { src: '/images/logo-aacsb-transparente.webp', alt: 'AACSB Accredited', width: 816, height: 280, h: 'h-9 sm:h-10 xl:h-14' },
  equis: { src: '/images/logo-equis-transparente.webp', alt: 'EFMD EQUIS Accredited', width: 564, height: 404, h: 'h-11 sm:h-12 xl:h-16' },
  amba: { src: '/images/logo-amba-transparente.webp', alt: 'AMBA Accredited', width: 812, height: 242, h: 'h-8 sm:h-9 xl:h-12' },
  abet: { src: '/images/logo-abet-transparente.webp', alt: 'ABET — Engineering Accreditation Commission', width: 730, height: 247, h: 'h-12 xl:h-16' },
}

interface AccreditationData {
  title: string
  intro: string
  groups: { faculty: string; name: string; text: string; logos: string[] }[]
}

export default function AccreditationSection({ data }: { data: AccreditationData }) {
  return (
    <section style={{ background: '#C7C2ba' }} className="py-16">
      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-display font-bold text-negro text-3xl md:text-4xl mb-4">{data.title}</h2>
        <p className="text-base leading-relaxed max-w-3xl mb-10" style={{ color: '#2D2D2D' }}>{data.intro}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
          {data.groups.map((g, i) => (
            <div
              key={g.name}
              className={`flex flex-col ${i > 0 ? 'lg:pl-10 lg:border-l' : 'lg:pr-10'}`}
              style={{ borderColor: 'rgba(29,30,32,0.2)' }}
            >
              <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 xl:gap-x-8 gap-y-4 min-h-[4.5rem] mb-5">
                {g.logos.map((key) => {
                  const logo = LOGOS[key]
                  return (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img key={key} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} loading="lazy" className={`${logo.h} w-auto`} />
                  )
                })}
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#1d1e20' }}>{g.faculty}</p>
              <h3 className="font-display font-bold text-negro text-xl mb-2">{g.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#2D2D2D' }}>{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
