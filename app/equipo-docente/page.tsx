import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import TeacherCard from '@/components/TeacherCard'
import { TEACHERS } from '@/data/teachers'

export const metadata: Metadata = {
  title: 'Equipo Docente | CEIE UAI',
  description: 'Conozca el equipo docente especialista del CEIE en la Universidad Adolfo Ibáñez.',
}

export default function EquipoDocentePage() {
  return (
    <>
      <Navbar lang="es" currentPath="/equipo-docente" />

      {/* Hero */}
      <div
        className="flex items-end pb-10 pt-24"
        style={{ background: '#1A1A1A', minHeight: '280px' }}
      >
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            Equipo Docente
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Especialistas en enseñanza de español como lengua extranjera con experiencia académica y profesional en contextos internacionales.
          </p>
        </div>
      </div>

      {/* Teachers grid */}
      <section style={{ background: '#F7F5F0' }} className="py-16">
        <div className="max-w-ceie mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHERS.map((teacher) => (
              <TeacherCard key={teacher.nombre} {...teacher} />
            ))}
          </div>
        </div>
      </section>

      <Footer lang="es" />
      <CookieBanner lang="es" />
    </>
  )
}
