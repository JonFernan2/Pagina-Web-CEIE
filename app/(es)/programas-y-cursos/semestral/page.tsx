import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA } from '@/data/programs'

const program = PROGRAMS_DATA.find((p) => p.slug === 'semestral')!

export const metadata: Metadata = {
  title: 'Programa Semestral de Español | CEIE UAI',
  description: 'Progresión estructurada por niveles MCER (A1–C1) en 15 a 18 semanas. Grupos máximo 12 estudiantes. Campus Viña del Mar.',
}

export default function SemestralPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/programas-y-cursos/semestral" />
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
          syllabus: 'Temario por nivel',
          activities: 'Actividades incluidas',
          conditions: 'Condiciones',
          certificate: 'Certificado',
          pricing: 'Precios',
          groupSize: 'Máximo de estudiantes',
          duration: 'Duración',
          levels: 'Niveles MCER',
          cerfNote: 'Alineado al MCER',
        }}
      />
      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
