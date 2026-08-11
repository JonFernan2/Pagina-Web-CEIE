import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import TeacherCard from '@/components/TeacherCard'
import { TEACHERS } from '@/data/teachers'

export const metadata: Metadata = {
  title: 'Equipe Docente | CEIE UAI',
  description: 'Conheça a equipe docente especialista do CEIE na Universidad Adolfo Ibáñez.',
}

export default function EquipeDocentePTPage() {
  return (
    <>
      <Navbar lang="pt" currentPath="/pt/equipe-docente" />

      <div className="flex items-end pb-10 pt-24" style={{ background: '#1d1e20', minHeight: '280px' }}>
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">Equipe Docente</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Especialistas em Espanhol como Língua Estrangeira (ELE) com experiência acadêmica e profissional em contextos internacionais.
          </p>
        </div>
      </div>

      <section style={{ background: '#C7C2ba' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div
            className="text-sm px-4 py-3 mb-8 font-body"
            style={{ background: '#FEF9C3', borderLeft: '4px solid #CA8A04', borderRadius: '2px', color: '#78350F' }}
          >
            <span className="font-semibold">Nota:</span> As fotografias e biografias dos professores serão atualizadas após a sessão fotográfica e envio dos dados biográficos pela UAI.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHERS.map((teacher) => (
              <TeacherCard key={teacher.nombre} {...teacher} lang="pt" />
            ))}
          </div>
        </div>
      </section>

      <Footer lang="pt" />
      <CookieBanner lang="pt" />
    </>
  )
}
