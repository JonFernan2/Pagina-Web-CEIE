import type { ProgramData } from './programs'

export const PROGRAMS_DATA_EN: ProgramData[] = [
  {
    slug: 'semester',
    nombre: 'Semester Program',
    descripcionBreve: 'Structured progression through CEFR levels in 15 to 18 weeks.',
    descripcionExtendida:
      'The Semester Program is designed for students who wish to develop their Spanish systematically over an extended period. Classes follow the Instituto Cervantes Curricular Plan and are conducted in small groups of no more than 12 students, guaranteeing individualized attention and real communicative practice.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    horarios: [
      { turno: 'Morning',   dias: 'Monday, Wednesday and Friday', hora: '09:00 – 12:00' },
      { turno: 'Afternoon', dias: 'Monday, Wednesday and Friday', hora: '14:00 – 17:00' },
    ],
    temario: [
      {
        nivel: 'A1 — Beginner',
        contenidos: [
          'Personal introductions and greetings',
          'Everyday vocabulary',
          'Present tense: regular verbs',
          'Numbers, dates and times',
          'Basic Chilean Spanish pronunciation',
        ],
      },
      {
        nivel: 'A2 — Elementary',
        contenidos: [
          'Narrating past experiences (preterite)',
          'Describing people, places and objects',
          'Expressing likes and preferences',
          'Everyday transactions: shopping, restaurants, transport',
          'Introduction to Chilean idiomatic expressions',
        ],
      },
      {
        nivel: 'B1 — Intermediate',
        contenidos: [
          'Oral and written argumentation',
          'Narration in multiple tenses',
          'Comprehension of journalistic texts',
          'Debate and discussion on current topics',
          'Formal and informal registers',
        ],
      },
      {
        nivel: 'B2 — Upper Intermediate',
        contenidos: [
          'Analysis of academic and literary texts',
          'Writing reports and essays',
          'Comprehension of authentic discourse',
          'Subjunctive: use and nuances',
          'Spanish in professional contexts',
        ],
      },
      {
        nivel: 'C1 — Advanced',
        contenidos: [
          'Expression of nuance and complex registers',
          'Analysis of Chilean and Latin American literature',
          'Advanced academic production',
          'Pragmatics and discursive coherence',
          'Preparation for DELE C1 certification',
        ],
      },
    ],
    actividades: [
      'Guided visit to Valparaíso and Viña del Mar',
      'Chilean literature discussion seminar',
      'Visit to Casablanca Valley vineyards',
      'Activities with the UAI university community',
      'Access to UAI library and digital resources',
    ],
    condiciones: [
      {
        titulo: 'Entry requirement',
        descripcion: 'Level A1 or no prior knowledge. Mandatory diagnostic test before the program starts.',
      },
      {
        titulo: 'Attendance',
        descripcion: 'Minimum 80% attendance required to receive the completion certificate.',
      },
      {
        titulo: 'Cancellation',
        descripcion: '30+ days in advance: 80% refund. 15–29 days: 50%. Less than 15 days: no refund.',
      },
    ],
    grupoMaximo: 12,
    duracion: '15 to 18 weeks (by level)',
    certificado: {
      tipo: 'Certificate of Studies CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'CEFR-aligned program. Academic equivalencies through UAI international agreements.',
    },
    precio: {
      valor: '[PENDING — to be confirmed by UAI]',
      moneda: 'USD',
      notas: 'Includes teaching materials',
    },
  },
  {
    slug: 'intensive',
    nombre: 'Intensive Program',
    descripcionBreve: 'Total immersion in 4 to 8 weeks. Rapid and structured progress.',
    descripcionExtendida:
      'The Intensive Program provides accelerated immersion for students who need to reach a communicative level in a short time. Daily classes of 4 hours, combined with cultural activities, allow for significant progress across two CEFR levels in a single intensive period.',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    horarios: [
      { turno: 'Morning', dias: 'Monday to Friday', hora: '09:00 – 13:00' },
    ],
    temario: [
      {
        nivel: 'A1–A2 — Beginner to Elementary',
        contenidos: [
          'Basic communication in everyday situations',
          'Present, past, and immediate future',
          'Essential vocabulary and pronunciation',
          'Listening comprehension with simple texts',
        ],
      },
      {
        nivel: 'B1–B2 — Intermediate',
        contenidos: [
          'Fluent conversation on familiar topics',
          'Writing structured texts',
          'Comprehension of Chilean media',
          'Expressing opinions and argumentation',
        ],
      },
    ],
    actividades: [
      'Daily cultural conversation sessions',
      'City tour: Valparaíso and Viña del Mar',
      'Chilean gastronomy workshop',
      'Social activities with the UAI international student community',
    ],
    condiciones: [
      {
        titulo: 'Entry requirement',
        descripcion: 'A1 or no prior knowledge. Diagnostic test before the program starts.',
      },
      {
        titulo: 'Attendance',
        descripcion: 'Minimum 85% attendance required due to the intensive nature of the program.',
      },
      {
        titulo: 'Cancellation',
        descripcion: '30+ days in advance: 80% refund. 15–29 days: 50%. Less than 15 days: no refund.',
      },
    ],
    grupoMaximo: 10,
    duracion: '4 to 8 weeks',
    certificado: {
      tipo: 'Certificate of Participation CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Equivalencies according to the student\'s home institution.',
    },
    precio: {
      valor: '[PENDING — to be confirmed by UAI]',
      moneda: 'USD',
    },
  },
  {
    slug: 'specific-purposes',
    nombre: 'Specific Purposes Programs',
    descripcionBreve: 'Spanish designed for professional, diplomatic, and institutional contexts.',
    descripcionExtendida:
      'Specific Purposes Programs (ESP) are designed for organizations — embassies, companies, regional governments, universities — that require structured language training tailored to their professional field. The curriculum is developed collaboratively with the client organization to ensure relevance to real communicative needs.',
    niveles: ['According to institutional requirements'],
    horarios: [
      { turno: 'Variable', dias: 'Coordinated with client organization', hora: 'As per agreement' },
    ],
    temario: [
      {
        nivel: 'Business and Industry Spanish',
        contenidos: [
          'Corporate communication and negotiation',
          'Writing reports and professional emails',
          'Oral presentations in business contexts',
          'Sector-specific vocabulary',
        ],
      },
      {
        nivel: 'Academic Spanish',
        contenidos: [
          'Academic reading and writing in Spanish',
          'Citations and references in academic format',
          'Presenting research findings',
          'Participating in colloquia and conferences',
        ],
      },
      {
        nivel: 'Spanish for Diplomacy and IR',
        contenidos: [
          'Diplomatic protocol and language',
          'Writing diplomatic notes and communiqués',
          'Spanish for international organizations',
          'Political analysis and position statements',
        ],
      },
    ],
    actividades: [
      'Visits to relevant sector institutions',
      'Seminars with field experts',
      'Professional simulations in Spanish',
      'Materials adapted to the client context',
    ],
    condiciones: [
      {
        titulo: 'Modality',
        descripcion: 'Available at UAI Viña del Mar campus or in-situ at the client organization\'s premises.',
      },
      {
        titulo: 'Minimum hours',
        descripcion: 'The program has a minimum duration of 40 hours.',
      },
      {
        titulo: 'Contracting',
        descripcion: 'Requires a sponsoring organization letter and formal proposal from CEIE.',
      },
    ],
    grupoMaximo: 'Variable according to institutional agreement',
    duracion: 'Minimum 40 hours. Duration according to agreed plan.',
    certificado: {
      tipo: 'Certificate of Specialized Training CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifies hours completed and CEFR level attained in the area of specialization.',
    },
    precio: {
      valor: 'Institutional quotation',
      notas: 'Request a formal proposal at programascortos@uai.cl',
    },
    submodalidades: [
      'Business and Industry Spanish',
      'Academic Spanish',
      'Spanish for Diplomacy and International Relations',
      'Sector-specific Spanish (healthcare, law, construction)',
    ],
    nota: 'Designed for organizations: embassies, companies, partner universities, regional governments.',
  },
  {
    slug: 'individual',
    nombre: 'Individual Program — Spanish to Measure',
    descripcionBreve: 'One-on-one classes adapted to your schedule, level, and professional objectives.',
    descripcionExtendida:
      'The Individual Program offers personalized one-on-one instruction with a CEIE specialist. Curriculum, materials, schedule, and pace are fully tailored to the student\'s profile. Available at UAI Viña del Mar campus or in in-situ modality at the student\'s professional location — embassies, corporate offices, or private address.',
    niveles: ['All levels'],
    horarios: [
      { turno: 'Flexible', dias: 'Agreed with the student', hora: 'Including evenings and weekends' },
    ],
    temario: [
      {
        nivel: 'Personalized curricular design',
        contenidos: [
          'Detailed initial diagnostic',
          'Student-specific learning objectives',
          'Materials adapted to the professional field',
          'Measured and periodically reported progress',
        ],
      },
    ],
    actividades: [
      'Fully personalized curricular design',
      'Materials adapted to the student\'s professional field',
      'Flexible scheduling — including evenings and weekends',
      'Progress reports at agreed intervals',
    ],
    condiciones: [
      {
        titulo: 'No minimum hours',
        descripcion: 'No minimum hour requirement. The program is fully flexible.',
      },
      {
        titulo: 'Session cancellation',
        descripcion: 'Cancellation with at least 24 hours\' notice. Sessions not cancelled within the deadline are invoiced.',
      },
      {
        titulo: 'In-situ modality',
        descripcion: 'The in-situ modality includes travel expenses for the teacher according to the agreed location.',
      },
    ],
    grupoMaximo: 1,
    duracion: 'Flexible. No minimum hour requirement established.',
    certificado: {
      tipo: 'Certificate of Studies CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifies hours completed and CEFR level attained.',
    },
    precio: {
      estandar: 'USD 50/hour (UAI campus)',
      inSitu: 'USD 58/hour (in-situ: embassies, companies, professional premises)',
      largoplazo: 'From USD 38/hour (long-term commitment, subject to agreement)',
    },
    modalidades: [
      'In-person · Viña del Mar Campus',
      'In-situ · Client premises',
      'Videoconference [consult availability]',
    ],
    perfilIdeal: 'Professionals, executives, diplomats, researchers, and academics.',
  },
]
