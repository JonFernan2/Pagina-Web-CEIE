export interface DirectorioMember {
  nombre: string
  cargo: { es: string; en: string; pt: string; zh: string }
  foto: string
  alt: { es: string; en: string; pt: string; zh: string }
}

export const DIRECTORIO: DirectorioMember[] = [
  {
    nombre: 'Carlos Ramírez',
    cargo: {
      es: 'Dirección Ejecutiva',
      en: 'Executive Director',
      pt: 'Diretor Executivo',
      zh: '执行主任',
    },
    foto: '/images/directorio-carlos-ramirez.jpg',
    alt: {
      es: 'Carlos Ramírez — Director Ejecutivo del CEIE UAI',
      en: 'Carlos Ramírez — Executive Director of CEIE UAI',
      pt: 'Carlos Ramírez — Diretor Executivo do CEIE UAI',
      zh: 'Carlos Ramírez — CEIE UAI 执行主任',
    },
  },
  {
    nombre: 'Ilse Capona',
    cargo: {
      es: 'Dirección Académica',
      en: 'Academic Director',
      pt: 'Diretora Acadêmica',
      zh: '学术主任',
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
      es: 'Coordinación RRII — Área Ventas',
      en: 'International Relations — Commercial',
      pt: 'Relações Internacionais — Área Comercial',
      zh: '国际关系协调 — 商务部',
    },
    foto: '/images/directorio-caroline-cortes.jpg',
    alt: {
      es: 'Caroline Cortés — Coordinadora RRII del CEIE UAI',
      en: 'Caroline Cortés — International Relations Coordinator, CEIE UAI',
      pt: 'Caroline Cortés — Coordenadora de Relações Internacionais, CEIE UAI',
      zh: 'Caroline Cortés — CEIE UAI 国际关系协调员',
    },
  },
  {
    nombre: 'Lorena León',
    cargo: {
      es: 'Coordinación RRII — Administración y Finanzas',
      en: 'International Relations — Administration & Finance',
      pt: 'Relações Internacionais — Administração e Finanças',
      zh: '国际关系协调 — 行政与财务',
    },
    foto: '/images/directorio-lorena-leon.jpg',
    alt: {
      es: 'Lorena León — Coordinadora Administración del CEIE UAI',
      en: 'Lorena León — Administration Coordinator, CEIE UAI',
      pt: 'Lorena León — Coordenadora de Administração, CEIE UAI',
      zh: 'Lorena León — CEIE UAI 行政协调员',
    },
  },
]
