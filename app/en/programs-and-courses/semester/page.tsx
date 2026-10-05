import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA_EN } from '@/data/programs.en'

const program = PROGRAMS_DATA_EN.find((p) => p.slug === 'semester')!

export const metadata: Metadata = {
  title: 'Spanish Semester Programme | CEIE UAI',
  description: 'Structured Spanish progression A1–C1 in 15–18 weeks. Max 12 students per class. UAI Viña del Mar campus.',
}

export default function SemesterENPage() {
  return (
    <>
      <Navbar lang="en" currentPath="/en/programs-and-courses/semester" />
      <main id="contenido">
      <ProgramTemplate
        lang="en"
        data={program}
        breadcrumbBase={{ label: 'Home', href: '/en' }}
        breadcrumbParent={{ label: 'Programs & Courses', href: '/en/programs-and-courses' }}
        applyHref="/en/admissions"
        applyLabel="Apply now"
        asideTitle="Quick summary"
        asideApply="Start your application"
        labels={{
          overview: 'Overview',
          schedule: 'Schedule',
          syllabus: 'Syllabus by level',
          activities: 'Included activities',
          conditions: 'Conditions',
          certificate: 'Certificate',
          pricing: 'Pricing',
          groupSize: 'Minimum participants',
          duration: 'Duration',
          levels: 'CEFR Levels',
          cerfNote: 'CEFR-aligned',
        }}
      />
      </main>
      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
