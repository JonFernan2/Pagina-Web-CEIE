import NavbarClient, { type NavMenu } from './NavbarClient'
import { SHOW_PLACEMENT_TEST, PLACEMENT_TEST_PATHS } from '@/lib/site'

type Lang = 'es' | 'en' | 'pt' | 'zh'

// Built on the server so the dropdown data stays out of the client bundle.
function aboutLinks(base: string, labels: [string, string, string, string]) {
  const ids = ['equipo', 'mision-vision-valores', 'espacios', 'galeria']
  return labels.map((label, i) => ({ label, href: `${base}#${ids[i]}` }))
}

const MENUS: Record<Lang, NavMenu> = {
  es: {
    links: [
      { label: 'Sobre Nosotros', href: '/sobre-nosotros', children: aboutLinks('/sobre-nosotros', ['Nuestro Equipo', 'Misión, visión y valores', 'Nuestros Espacios', 'Galería de imágenes']) },
      { label: 'Equipo Docente', href: '/equipo-docente' },
      {
        label: 'Programas y Cursos', href: '/programas-y-cursos', children: [
          { label: 'Programa Semestral de Español', href: '/programas-y-cursos/semestral' },
          { label: 'Programa Intensivo de Español', href: '/programas-y-cursos/intensivo' },
          { label: 'Español con Fines Específicos', href: '/programas-y-cursos/fines-especificos' },
        ],
      },
      { label: 'Voces del Centro', href: '/voces-del-centro' },
      { label: 'Test de nivel', href: '/test-de-nivel' },
    ],
    cta: { label: 'Admisión', href: '/admision' },
  },
  en: {
    links: [
      { label: 'About Us', href: '/en/about-us', children: aboutLinks('/en/about-us', ['Our Team', 'Mission, vision and values', 'Our Facilities', 'Image Gallery']) },
      { label: 'Teaching Team', href: '/en/teaching-team' },
      {
        label: 'Programs & Courses', href: '/en/programs-and-courses', children: [
          { label: 'Spanish Semester Programme', href: '/en/programs-and-courses/semester' },
          { label: 'Intensive Spanish Programme', href: '/en/programs-and-courses/intensive' },
          { label: 'Spanish for Specific Purposes Programme', href: '/en/programs-and-courses/specific-purposes' },
        ],
      },
      { label: 'Voices of the Centre', href: '/en/voices-of-the-centre' },
      { label: 'Placement Test', href: '/en/placement-test' },
    ],
    cta: { label: 'Apply Now', href: '/en/admissions' },
  },
  pt: {
    links: [
      { label: 'Sobre Nós', href: '/pt/sobre-nos', children: aboutLinks('/pt/sobre-nos', ['Nossa Equipe', 'Missão, visão e valores', 'Nossas Instalações', 'Galeria de imagens']) },
      { label: 'Equipe Docente', href: '/pt/equipe-docente' },
      {
        label: 'Programas e Cursos', href: '/pt/programas-e-cursos', children: [
          { label: 'Programa Semestral de Espanhol', href: '/pt/programas-e-cursos/semestral' },
          { label: 'Programa Intensivo de Espanhol', href: '/pt/programas-e-cursos/intensivo' },
          { label: 'Espanhol com Fins Específicos', href: '/pt/programas-e-cursos/fins-especificos' },
        ],
      },
      { label: 'Vozes do Centro', href: '/pt/vozes-do-centro' },
      { label: 'Teste de Nível', href: '/pt/teste-de-nivel' },
    ],
    cta: { label: 'Inscrever-se', href: '/pt/admissao' },
  },
  zh: {
    links: [
      { label: '关于我们', href: '/zh/about-us', children: aboutLinks('/zh/about-us', ['我们的团队', '使命、愿景与价值观', '教学设施', '图片集']) },
      { label: '教学团队', href: '/zh/teaching-team' },
      {
        label: '课程项目', href: '/zh/programs', children: [
          { label: '学期西班牙语课程', href: '/zh/programs/semester' },
          { label: '西班牙语强化课程', href: '/zh/programs/intensive' },
          { label: '专业目的西班牙语课程', href: '/zh/programs/specific-purposes' },
        ],
      },
      { label: '学生心声', href: '/zh/testimonials' },
      { label: '水平测试', href: '/zh/placement-test' },
    ],
    cta: { label: '申请入学', href: '/zh/apply' },
  },
}

export default function Navbar({ lang, currentPath }: { lang: Lang; currentPath: string }) {
  const menu = MENUS[lang]
  const visible: NavMenu = {
    ...menu,
    links: menu.links.filter((l) => SHOW_PLACEMENT_TEST || !PLACEMENT_TEST_PATHS.includes(l.href)),
  }
  return <NavbarClient lang={lang} currentPath={currentPath} menu={visible} />
}
