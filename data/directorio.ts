export interface DirectorioMember {
  nombre: string
  cargo: { es: string; en: string; pt: string; zh: string }
  foto: string
  fotoPosition?: string
  alt: { es: string; en: string; pt: string; zh: string }
  credenciales?: { es: string[]; en: string[]; pt: string[]; zh: string[] }
}

export const DIRECTORIO: DirectorioMember[] = [
  {
    nombre: 'Carlos Ramírez',
    cargo: {
      es: 'Director Ejecutivo CEIE · Director de Relaciones Internacionales UAI',
      en: 'Executive Director CEIE · Director of International Relations UAI',
      pt: 'Diretor Executivo CEIE · Diretor de Relações Internacionais UAI',
      zh: 'CEIE执行主任 · UAI国际关系处主任',
    },
    foto: '/images/directorio-carlos-ramirez.jpg',
    alt: {
      es: 'Carlos Ramírez — Director Ejecutivo del CEIE y Director de Relaciones Internacionales UAI',
      en: 'Carlos Ramírez — Executive Director of CEIE and Director of International Relations UAI',
      pt: 'Carlos Ramírez — Diretor Executivo do CEIE e Diretor de Relações Internacionais UAI',
      zh: 'Carlos Ramírez — CEIE执行主任暨UAI国际关系处主任',
    },
  },
  {
    nombre: 'Ilse Capona',
    cargo: {
      es: 'Directora Académica · CEIE',
      en: 'Academic Director · CEIE',
      pt: 'Diretora Acadêmica · CEIE',
      zh: '学术主任 · CEIE',
    },
    foto: '/images/directorio-ilse-capona.jpg',
    alt: {
      es: 'Ilse Capona — Directora Académica del CEIE UAI',
      en: 'Ilse Capona — Academic Director of CEIE UAI',
      pt: 'Ilse Capona — Diretora Acadêmica do CEIE UAI',
      zh: 'Ilse Capona — CEIE UAI 学术主任',
    },
  },
  {
    nombre: 'Caroline Cortés',
    cargo: {
      es: 'Coordinadora Programas Internacionales CEIE / RR.II',
      en: 'Global Program Coordinator CEIE / Int\'l Relations',
      pt: 'Coordenadora de Programas Internacionais CEIE / RR.II',
      zh: 'CEIE全球项目协调员 / 国际关系',
    },
    foto: '/images/directorio-caroline-cortes.jpg',
    fotoPosition: 'center top',
    alt: {
      es: 'Caroline Cortés — Coordinadora Programas Internacionales CEIE / RR.II',
      en: 'Caroline Cortés — Global Program Coordinator CEIE / Int\'l Relations',
      pt: 'Caroline Cortés — Coordenadora de Programas Internacionais CEIE / RR.II',
      zh: 'Caroline Cortés — CEIE全球项目协调员 / 国际关系',
    },
  },
  {
    nombre: 'Lorena León',
    cargo: {
      es: 'Control y Gestión presupuestario CEIE / RR.II',
      en: 'Budgetary Control & Management Int\'l Relations / CEIE',
      pt: 'Controle e Gestão Orçamentária CEIE / RR.II',
      zh: '国际关系/CEIE预算控制与管理',
    },
    foto: '/images/directorio-lorena-leon.jpg',
    alt: {
      es: 'Lorena León — Control y Gestión presupuestario CEIE / RR.II',
      en: 'Lorena León — Budgetary Control & Management Int\'l Relations / CEIE',
      pt: 'Lorena León — Controle e Gestão Orçamentária CEIE / RR.II',
      zh: 'Lorena León — 国际关系/CEIE预算控制与管理',
    },
  },
]
