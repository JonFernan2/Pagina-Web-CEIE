import Link from 'next/link'
import { ClipboardCheck } from 'lucide-react'
import { SHOW_PLACEMENT_TEST } from '@/lib/site'

type Lang = 'es' | 'en' | 'pt' | 'zh'

const T: Record<Lang, { title: string; text: string; cta: string; href: string }> = {
  es: { title: '¿No sabes cuál es tu nivel?', text: 'Haz nuestro test de nivel orientativo en unos 15 minutos y descubre qué curso es para ti.', cta: 'Hacer el test de nivel', href: '/test-de-nivel' },
  en: { title: 'Not sure what your level is?', text: 'Take our orientative placement test in about 15 minutes and find the right course for you.', cta: 'Take the placement test', href: '/en/placement-test' },
  pt: { title: 'Não sabe qual é o seu nível?', text: 'Faça nosso teste de nível orientativo em cerca de 15 minutos e descubra qual curso é ideal para você.', cta: 'Fazer o teste de nível', href: '/pt/teste-de-nivel' },
  zh: { title: '不确定自己的水平？', text: '花约15分钟完成我们的参考性水平测试，找到适合你的课程。', cta: '开始水平测试', href: '/zh/placement-test' },
}

export default function PlacementTestCta({ lang = 'es' }: { lang?: Lang }) {
  if (!SHOW_PLACEMENT_TEST) return null
  const t = T[lang]
  return (
    <section style={{ background: '#C7C2ba' }} className="py-12">
      <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <ClipboardCheck size={36} className="shrink-0" style={{ color: '#1d1e20' }} aria-hidden="true" />
          <div>
            <h2 className="font-display font-bold text-negro text-2xl mb-1">{t.title}</h2>
            <p className="text-base" style={{ color: '#2D2D2D' }}>{t.text}</p>
          </div>
        </div>
        <Link
          href={t.href}
          className="self-start md:self-auto shrink-0 inline-flex items-center gap-2 px-6 py-3 font-body font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-90"
          style={{ background: '#1d1e20', color: '#FFFFFF', borderRadius: '2px' }}
        >
          {t.cta} →
        </Link>
      </div>
    </section>
  )
}
