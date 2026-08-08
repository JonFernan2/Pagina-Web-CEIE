import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ProgramTemplate from '@/components/ProgramTemplate'
import { PROGRAMS_DATA_PT } from '@/data/programs.pt'

const program = PROGRAMS_DATA_PT.find((p) => p.slug === 'intensivo')!

export const metadata: Metadata = {
  title: 'Programa Intensivo | CEIE UAI',
  description: 'Imersão total de espanhol em 4 a 8 semanas. Progresso rápido e estruturado. Campus UAI Viña del Mar.',
}

export default function IntensivoPTPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/programas-e-cursos/intensivo" />
      <ProgramTemplate
        lang="pt"
        data={program}
        breadcrumbBase={{ label: 'Início', href: '/pt' }}
        breadcrumbParent={{ label: 'Programas e Cursos', href: '/pt/programas-e-cursos' }}
        applyHref="/pt/admissao"
        applyLabel="Inscrever-se agora"
        asideTitle="Resumo rápido"
        asideApply="Iniciar inscrição"
        labels={{
          overview: 'Visão geral',
          schedule: 'Horários',
          syllabus: 'Conteúdo por nível',
          activities: 'Atividades incluídas',
          conditions: 'Condições',
          certificate: 'Certificado',
          pricing: 'Preços',
          groupSize: 'Máximo de alunos por turma',
          duration: 'Duração',
          levels: 'Níveis QECR',
          cerfNote: 'Alinhado ao QECR',
        }}
      />
      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
