import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA_EN } from '@/data/programs.en'

const program = PROGRAMS_DATA_EN.find((p) => p.slug === 'specific-purposes')!

export const metadata: Metadata = {
  title: 'Spanish for Specific Purposes Programme | CEIE UAI',
  description: 'Spanish for business, diplomacy, academic research, and specific sectors. Designed for organizations and institutional groups.',
}

export default function SpecificPurposesENPage() {
  return (
    <>
      <Navbar lang="en" currentPath="/en/programs-and-courses/specific-purposes" />
      <main id="contenido">
      <ProgramTemplate
        lang="en"
        data={program}
        breadcrumbBase={{ label: 'Home', href: '/en' }}
        breadcrumbParent={{ label: 'Programs & Courses', href: '/en/programs-and-courses' }}
        applyHref="/en/admissions"
        applyLabel="Request a quote"
        asideTitle="Quick summary"
        asideApply="Request a proposal"
        labels={{
          overview: 'What is the Spanish for Specific Purposes programme?',
          schedule: 'Schedule',
          syllabus: 'Areas of specialisation (examples)',
          activities: 'Included activities',
          conditions: 'Conditions',
          certificate: 'Certificate',
          pricing: 'Pricing',
          groupSize: 'Participants',
          duration: 'Duration',
          levels: 'Levels',
          cerfNote: 'Adapted to institutional context',
        }}
      />
      </main>
      <Footer lang="en" />
      <CookieBanner lang="en" />
    </>
  )
}
