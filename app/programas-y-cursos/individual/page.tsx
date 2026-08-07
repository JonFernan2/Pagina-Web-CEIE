import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA } from '@/data/programs'

const program = PROGRAMS_DATA.find((p) => p.slug === 'individual')!

export const metadata: Metadata = {
  title: 'Programa Individual — ELE a Medida | CEIE UAI',
  description: 'Clases individuales de español adaptadas a su horario, nivel y objetivos. Desde USD 38/hora. Campus UAI o modalidad in-situ.',
}

export default function IndividualPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/programas-y-cursos/individual" />
      <ProgramTemplate
        lang="es"
        data={program}
        breadcrumbBase={{ label: 'Inicio', href: '/' }}
        breadcrumbParent={{ label: 'Programas y Cursos', href: '/programas-y-cursos' }}
        applyHref="/admision"
        applyLabel="Solicitar admisión"
        asideTitle="Resumen rápido"
        asideApply="Iniciar postulación"
        labels={{
          overview: 'Descripción general',
          schedule: 'Horarios',
          syllabus: 'Diseño curricular',
          activities: 'Actividades incluidas',
          conditions: 'Condiciones',
          certificate: 'Certificado',
          pricing: 'Precios',
          groupSize: 'Formato',
          duration: 'Duración',
          levels: 'Niveles',
          cerfNote: 'Personalizado',
        }}
      />
      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
