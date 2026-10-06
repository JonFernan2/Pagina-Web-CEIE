import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA_PT } from '@/data/programs.pt'

const program = PROGRAMS_DATA_PT.find((p) => p.slug === 'fins-especificos')!

export const metadata: Metadata = {
  title: 'Espanhol com Fins Específicos | CEIE UAI',
  description: 'Espanhol para contextos profissionais, diplomáticos e institucionais. UAI Viña del Mar.',
}

export default function FinsEspecificosPTPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/programas-e-cursos/fins-especificos" />
      <main id="contenido">
      <ProgramTemplate
        lang="pt"
        data={program}
        breadcrumbBase={{ label: 'Início', href: '/pt' }}
        breadcrumbParent={{ label: 'Programas e Cursos', href: '/pt/programas-e-cursos' }}
        applyHref="/pt/admissao"
        applyLabel="Solicitar proposta"
        asideTitle="Resumo rápido"
        asideApply="Solicitar proposta"
        labels={{
          overview: 'O que é o programa de Espanhol com Fins Específicos?',
          schedule: 'Horários',
          syllabus: 'Áreas de especialização (exemplos)',
          activities: 'Atividades incluídas',
          conditions: 'Condições',
          certificate: 'Certificado',
          pricing: 'Preços',
          groupSize: 'Participantes',
          duration: 'Duração',
          levels: 'Níveis',
          cerfNote: 'Alinhado ao QECR',
        }}
      />
      </main>
      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
