export type Lang = 'es' | 'en' | 'pt' | 'zh'

export const ROUTES: Array<Record<Lang, string>> = [
  { es: '/',                                        en: '/en',                                        pt: '/pt',                                 zh: '/zh' },
  { es: '/programas-y-cursos',                      en: '/en/programs-and-courses',                   pt: '/pt/programas-e-cursos',              zh: '/zh/programs' },
  { es: '/programas-y-cursos/semestral',            en: '/en/programs-and-courses/semester',          pt: '/pt/programas-e-cursos/semestral',    zh: '/zh/programs/semester' },
  { es: '/programas-y-cursos/intensivo',            en: '/en/programs-and-courses/intensive',         pt: '/pt/programas-e-cursos/intensivo',    zh: '/zh/programs/intensive' },
  { es: '/programas-y-cursos/fines-especificos',    en: '/en/programs-and-courses/specific-purposes', pt: '/pt/programas-e-cursos/fins-especificos', zh: '/zh/programs/specific-purposes' },
  { es: '/equipo-docente',                          en: '/en/teaching-team',                          pt: '/pt/equipe-docente',                  zh: '/zh/teaching-team' },
  { es: '/sobre-nosotros',                          en: '/en/about-us',                               pt: '/pt/sobre-nos',                       zh: '/zh/about-us' },
  { es: '/admision',                                en: '/en/admissions',                             pt: '/pt/admissao',                        zh: '/zh/apply' },
  { es: '/voces-del-centro',                        en: '/en/voices-of-the-centre',                   pt: '/pt/vozes-do-centro',                 zh: '/zh/testimonials' },
  { es: '/noticias',                                en: '/en/news',                                   pt: '/pt/noticias',                        zh: '/zh/news' },
  { es: '/contacto',                                en: '/en/contact',                                pt: '/pt/contato',                         zh: '/zh/contact' },
  { es: '/aviso-legal',                             en: '/en/legal-notice',                           pt: '/pt/aviso-legal',                     zh: '/zh/legal-notice' },
  { es: '/privacidad',                              en: '/en/privacy-policy',                         pt: '/pt/privacidade',                     zh: '/zh/privacy-policy' },
  { es: '/cookies',                                 en: '/en/cookie-policy',                          pt: '/pt/politica-de-cookies',             zh: '/zh/cookie-policy' },
  { es: '/condiciones-contratacion',                en: '/en/terms-and-conditions',                   pt: '/pt/condicoes-contratacao',           zh: '/zh/terms-and-conditions' },
  { es: '/desistimiento',                           en: '/en/withdrawal-rights',                      pt: '/pt/direito-de-desistencia',          zh: '/zh/withdrawal-rights' },
]
