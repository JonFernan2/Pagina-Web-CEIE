import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA_ZH } from '@/data/programs.zh'

const program = PROGRAMS_DATA_ZH.find((p) => p.slug === 'semester')!

export const metadata: Metadata = {
  title: '学期课程 | CEIE UAI',
  description: '按CEFR级别在15至18周内系统进阶。UAI Viña del Mar 校区。',
}

export default function SemesterZHPage() {
  return (
    <>
      <Navbar lang="zh" currentPath="/zh/programs/semester" />
      <ProgramTemplate
        lang="zh"
        data={program}
        breadcrumbBase={{ label: '首页', href: '/zh' }}
        breadcrumbParent={{ label: '课程项目', href: '/zh/programs' }}
        applyHref="/zh/apply"
        applyLabel="立即申请"
        asideTitle="课程概览"
        asideApply="开始申请"
        labels={{
          overview: '课程简介',
          schedule: '上课时间',
          syllabus: '各级别教学内容',
          activities: '包含活动',
          conditions: '课程条件',
          certificate: '证书',
          pricing: '收费标准',
          groupSize: '每班最大人数',
          duration: '课程时长',
          levels: 'CEFR 级别',
          cerfNote: '对接CEFR',
        }}
      />
      <Footer lang="zh" />
      <CookieBanner lang="zh" />
    </>
  )
}
