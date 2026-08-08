import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA_PT } from '@/data/programs.pt'

const program = PROGRAMS_DATA_PT.find((p) => p.slug === 'fins-especificos')!

export const metadata: Metadata = {
  title: 'Programas de Fins Específicos | CEIE UAI',
  description: 'Espanhol para contextos profissionais, diplomáticos e institucionais. UAI Viña del Mar.',
}

export default function FinsEspecificosPTPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/programas-e-cursos/fins-especificos" />
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
          overview: 'Visão geral',
          schedule: 'Horários',
          syllabus: 'Conteúdo por módulo',
          activities: 'Atividades incluídas',
          conditions: 'Condições',
          certificate: 'Certificado',
          pricing: 'Preços',
          groupSize: 'Tamanho do grupo',
          duration: 'Duração',
          levels: 'Níveis',
          cerfNote: 'Alinhado ao QECR',
        }}
      />
      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
