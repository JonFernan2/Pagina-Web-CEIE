import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { NEWS_ZH } from '@/data/news'

export const metadata: Metadata = {
  title: '新闻 | CEIE UAI',
  description: 'CEIE UAI最新动态与新闻。',
}

export default function NewsPage() {
  return (
    <>
      <Navbar lang="zh" currentPath="/zh/news" />
      <main id="contenido">

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1d1e20', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            新闻
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            CEIE与Universidad Adolfo Ibáñez关于西班牙语、智利文化及国际社区的最新动态。
          </p>
        </div>
      </div>

      {/* Articles */}
      <section style={{ background: '#F7F6F3' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {NEWS_ZH.map((article) => (
              <article
                key={article.slug}
                id={article.slug}
                className="overflow-hidden"
                style={{ background: '#FFFFFF', border: '1px solid #E5E3DE', borderRadius: '4px' }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '16/6', maxHeight: '360px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#1d1e20' }}>
                    {article.date}
                  </p>
                  <h2 className="font-display font-bold text-negro text-2xl md:text-3xl mb-6 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-4 font-medium" style={{ color: '#2D2D2D' }}>
                    {article.summary}
                  </p>
                  {article.body.map((paragraph, i) => (
                    <p key={i} className="text-base leading-relaxed mb-4" style={{ color: '#6B6B6B' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      </main>

      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
