import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA } from '@/data/programs'

const program = PROGRAMS_DATA.find((p) => p.slug === 'intensivo')!

export const metadata: Metadata = {
  title: 'Programa Intensivo de Español | CEIE UAI',
  description: 'Inmersión total de 4 a 8 semanas. Niveles A1–B2. Grupos máximo 10 estudiantes. Campus Viña del Mar.',
}

export default function IntensivoPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/programas-y-cursos/intensivo" />
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
