import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA } from '@/data/programs'

const program = PROGRAMS_DATA.find((p) => p.slug === 'fines-especificos')!

export const metadata: Metadata = {
  title: 'Programas con Fines Específicos | CEIE UAI',
  description: 'Español para negocios, diplomacia, investigación académica y sectores específicos. Diseñado para organizaciones e instituciones.',
}

export default function FinesEspecificosPage() {
  return (
    <>
      <Navbar lang="es" currentPath="/programas-y-cursos/fines-especificos" />
      <ProgramTemplate
        lang="es"
        data={program}
        breadcrumbBase={{ label: 'Inicio', href: '/' }}
        breadcrumbParent={{ label: 'Programas y Cursos', href: '/programas-y-cursos' }}
        applyHref="/admision"
        applyLabel="Solicitar cotización"
        asideTitle="Resumen rápido"
        asideApply="Solicitar propuesta"
        labels={{
          overview: 'Descripción general',
          schedule: 'Horarios',
          syllabus: 'Áreas de especialización',
          activities: 'Actividades incluidas',
          conditions: 'Condiciones',
          certificate: 'Certificado',
          pricing: 'Precios',
          groupSize: 'Tamaño de grupo',
          duration: 'Duración',
          levels: 'Niveles',
          cerfNote: 'Adaptado al contexto institucional',
        }}
      />
      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
