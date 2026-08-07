import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA_EN } from '@/data/programs.en'

const program = PROGRAMS_DATA_EN.find((p) => p.slug === 'individual')!

export const metadata: Metadata = {
  title: 'Individual Program — Spanish to Measure | CEIE UAI',
  description: 'Personalized one-on-one Spanish classes. From USD 38/hour. UAI campus or in-situ modality.',
}

export default function IndividualENPage() {
  return (
    <>
      <Navbar lang="en" currentPath="/en/programs-and-courses/individual" />
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
          syllabus: 'Curricular design',
          activities: 'Included activities',
          conditions: 'Conditions',
          certificate: 'Certificate',
          pricing: 'Pricing',
          groupSize: 'Format',
          duration: 'Duration',
          levels: 'Levels',
          cerfNote: 'Personalized',
        }}
      />
      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
