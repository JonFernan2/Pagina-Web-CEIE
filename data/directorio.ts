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
      es: 'Director de Relaciones Internacionales UAI',
      en: 'Director of International Relations, UAI',
      pt: 'Diretor de Relações Internacionais, UAI',
      zh: '国际关系处主任，UAI',
    },
    foto: '/images/directorio-carlos-ramirez.jpg',
    alt: {
      es: 'Carlos Ramírez — Director de Relaciones Internacionales UAI y Director Ejecutivo del CEIE',
      en: 'Carlos Ramírez — Director of International Relations UAI and Executive Director of CEIE',
      pt: 'Carlos Ramírez — Diretor de Relações Internacionais UAI e Diretor Executivo do CEIE',
      zh: 'Carlos Ramírez — UAI 国际关系处主任暨 CEIE 执行主任',
    },
    credenciales: {
      es: [
        'Máster en Innovación, UAI',
        'Máster en Relaciones Internacionales, UVM',
        'Máster en Educación, PUCV',
        'Profesor de Historia y Geografía, PUCV',
        'Experto Alta Dirección Pública · Evaluador CNA',
      ],
      en: [
        'Master in Innovation, UAI',
        'Master in International Relations, UVM',
        'Master in Education, PUCV',
        'Teacher of History and Geography, PUCV',
        'Expert in Senior Public Service · CNA Evaluator',
      ],
      pt: [
        'Mestre em Inovação, UAI',
        'Mestre em Relações Internacionais, UVM',
        'Mestre em Educação, PUCV',
        'Professor de História e Geografia, PUCV',
        'Especialista em Alta Direção Pública · Avaliador CNA',
      ],
      zh: [
        '创新硕士，UAI',
        '国际关系硕士，UVM',
        '教育硕士，PUCV',
        '历史与地理学教师，PUCV',
        '高级公职专家 · CNA 评估员',
      ],
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
    credenciales: {
      es: [
        'Magíster en Comprensión Lectora y Producción de Textos, UNAB 2021',
        'Magíster en Currículum y Proyectos Educativos, UNAB 2018',
        'Profesora de Inglés, PUCV 2002',
        'Licenciada en Literatura Inglesa, PUCV 2002',
        'Miembro Núcleo de Lingüística UAI',
      ],
      en: [
        'Master in Reading Comprehension & Text Production, UNAB 2021',
        'Master in Curriculum & Educational Projects, UNAB 2018',
        'English Teacher, PUCV 2002',
        'Bachelor in English Literature, PUCV 2002',
        'Member, UAI Linguistics Research Group',
      ],
      pt: [
        'Mestre em Compreensão Leitora e Produção de Textos, UNAB 2021',
        'Mestre em Currículo e Projetos Educativos, UNAB 2018',
        'Professora de Inglês, PUCV 2002',
        'Licenciada em Literatura Inglesa, PUCV 2002',
        'Membro do Núcleo de Linguística UAI',
      ],
      zh: [
        '阅读理解与文本写作硕士，UNAB 2021',
        '课程与教育项目硕士，UNAB 2018',
        '英语教师，PUCV 2002',
        '英国文学学士，PUCV 2002',
        'UAI 语言学研究核心成员',
      ],
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
    fotoPosition: 'left top',
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
