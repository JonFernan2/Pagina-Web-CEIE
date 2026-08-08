import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import TeacherCard from '@/components/TeacherCard'
import { TEACHERS } from '@/data/teachers'

export const metadata: Metadata = {
  title: '教学团队 | CEIE UAI',
  description: '认识阿道夫·伊瓦涅斯大学CEIE专业教学团队。',
}

export default function TeachingTeamZHPage() {
  return (
    <>
      <Navbar lang="zh" currentPath="/zh/teaching-team" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">教学团队</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            具备丰富学术背景与国际教学经验的对外西班牙语专业教师团队。
          </p>
        </div>
      </div>

      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div
            className="text-sm px-4 py-3 mb-8 font-body"
            style={{ background: '#FEF9C3', borderLeft: '4px solid #CA8A04', borderRadius: '2px', color: '#78350F' }}
          >
            <span className="font-semibold">注：</span>教师照片及简介将在UAI完成摄影拍摄及提交个人资料后更新。
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHERS.map((teacher) => (
              <TeacherCard key={teacher.nombre} {...teacher} />
            ))}
          </div>
        </div>
      </section>

      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
