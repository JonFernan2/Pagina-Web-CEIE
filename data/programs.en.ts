import type { ProgramData } from './programs'

export const PROGRAMS_DATA_EN: ProgramData[] = [
  {
    slug: 'semester',
    nombre: 'Spanish Semester Program',
    descripcionBreve: 'Structured progression through CEFR levels over 4 months. Language courses, thematic courses, and International Core.',
    descripcionExtendida:
      'The Semester Program is designed for international students who wish to develop their Spanish systematically over an extended period. Classes follow the Instituto Cervantes Curricular Plan and are conducted in small groups of no more than 12 students, guaranteeing individualized attention and real communicative practice.',
    objetivo:
      'Progressively develop linguistic, academic, and cultural competencies in Spanish for international non-Spanish-speaking students, facilitating integration into the university experience.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'International undergraduate students with no Spanish background.',
    cursosTabla: [
      { nombre: 'Basic Spanish Grammar', horas: 45, precioUSD: 950 },
      { nombre: 'Basic Spanish Communication', horas: 45, precioUSD: 950 },
      { nombre: 'Intermediate Spanish Grammar', horas: 45, precioUSD: 950 },
      { nombre: 'Intermediate Spanish Communication', horas: 45, precioUSD: 950 },
      { nombre: 'Advanced Spanish Grammar', horas: 45, precioUSD: 950 },
      { nombre: 'Advanced Spanish Communication', horas: 45, precioUSD: 950 },
      { nombre: 'Spanish Phonetics', horas: 45, precioUSD: 950 },
      { nombre: 'Thematic: Professional Spanish for Business and Global Markets', horas: 45, precioUSD: 1188 },
      { nombre: 'Thematic: Spanish for Healthcare and Medical Communication', horas: 45, precioUSD: 1188 },
      { nombre: 'Thematic: Living to Tell the Tale — Latin American Literature', horas: 45, precioUSD: 1188 },
      { nombre: 'Thematic: Cinematic Audacity — Chile through Documentary', horas: 45, precioUSD: 1188 },
      { nombre: 'International Core Courses (Literature, Ethics, Science, Contemporary Civilisation, Writing and Arts)', horas: 45, precioUSD: 1188 },
    ],
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
        titulo: 'Course packages',
        descripcion: '4-course package (3 language + 1 thematic): USD 4,038. 5-course package (3 language + 2 thematic): USD 5,226. Special price 5-course package: USD 4,750.',
      },
      {
        titulo: 'Cancellation',
        descripcion: '45+ days in advance: no charge. 15–44 days: 50% charge. Less than 15 days: no refund. Force majeure evaluated individually. Written cancellation to caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 12,
    duracion: '4 months',
    certificado: {
      tipo: 'Certificate of Studies CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'CEFR-aligned program. Academic equivalencies through UAI international agreements.',
    },
    precio: {
      estandar: 'USD 950 / per participant',
      inSitu: 'USD 1,188 / thematic or Core course',
      notas: 'Special 5-course package: USD 4,750',
    },
  },
  {
    slug: 'intensive',
    nombre: 'Intensive ELE Courses (Group)',
    descripcionBreve: 'Intensive in-person or online group training. Basic, Intermediate, and Advanced modalities, plus conversational cycles.',
    descripcionExtendida:
      'The Intensive Program provides accelerated immersion for students who need to reach a communicative level in a short time. Daily classes combined with cultural activities allow for significant progress in 2 to 3 weeks.',
    objetivo:
      'Strengthen communicative competencies in Spanish through intensive in-person or online training, aimed at students who need to advance their language proficiency in a short period.',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'International non-Spanish-speaking students. Professionals, researchers, executives, companies, and diplomatic officials.',
    cursosTabla: [
      { nombre: 'Basic Online', horas: 30, precioUSD: 300, modalidad: '3 weeks' },
      { nombre: 'Intermediate Online', horas: 30, precioUSD: 300, modalidad: '3 weeks' },
      { nombre: 'Advanced Online', horas: 30, precioUSD: 300, modalidad: '3 weeks' },
      { nombre: 'Basic In-Person', horas: 40, precioUSD: 800, modalidad: '2 weeks' },
      { nombre: 'Intermediate In-Person', horas: 40, precioUSD: 800, modalidad: '2 weeks' },
      { nombre: 'Advanced In-Person', horas: 40, precioUSD: 800, modalidad: '2 weeks' },
      { nombre: "Conversational Cycle: Take a Break / Let's Speak Spanish (Online)", horas: 8, precioUSD: 100, modalidad: '8 sessions, 2×/week' },
    ],
    horarios: [
      { turno: 'Morning (in-person)', dias: 'Monday to Friday', hora: '09:00 – 13:00' },
      { turno: 'Online', dias: 'Coordinated with the group', hora: 'Flexible' },
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
        descripcion: '45+ days in advance: no charge. 15–44 days: 50% charge. Less than 15 days: no refund. Force majeure evaluated individually. Written cancellation to caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 10,
    duracion: '2–3 weeks depending on modality',
    certificado: {
      tipo: 'Certificate of Participation CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Equivalencies according to the student\'s home institution.',
    },
    precio: {
      estandar: 'USD 300 (online · 30 hrs)',
      inSitu: 'USD 800 (in-person · 40 hrs)',
      notas: 'Conversational cycle: USD 100 (8 sessions)',
    },
  },
  {
    slug: 'individual',
    nombre: 'Tailored ELE Course (Individual)',
    descripcionBreve: 'Personalized one-on-one training, adapted to each participant\'s level, pace, and objectives. Available on campus or in-situ.',
    descripcionExtendida:
      'The Individual Program offers personalized one-on-one instruction with a CEIE specialist. Curriculum, materials, schedule, and pace are fully tailored to the student\'s profile. Available at UAI Viña del Mar campus or in in-situ modality at the student\'s professional location — embassies, corporate offices, or private address.',
    objetivo:
      'Develop communicative competencies in Spanish through personalized training, adapted to each participant\'s level, learning pace, and academic or professional objectives.',
    niveles: ['All levels'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'International non-Spanish-speaking students. Professionals, researchers, executives, companies, and diplomatic officials.',
    cursosTabla: [
      { nombre: 'Basic', horas: 20, precioUSD: 1000 },
      { nombre: 'Intermediate', horas: 30, precioUSD: 1500 },
      { nombre: 'Advanced', horas: 40, precioUSD: 2000 },
    ],
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
    duracion: 'Flexible',
    certificado: {
      tipo: 'Certificate of Studies CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifies hours completed and CEFR level attained.',
    },
    precio: {
      estandar: 'USD 1,000 (Basic · 20 hrs)',
      inSitu: 'USD 1,500 (Intermediate · 30 hrs)',
      largoplazo: 'USD 2,000 (Advanced · 40 hrs)',
    },
    modalidades: [
      'In-person · Viña del Mar Campus',
      'In-situ · Client premises',
      'Videoconference [consult availability]',
    ],
    perfilIdeal: 'Professionals, executives, diplomats, researchers, and academics.',
  },
  {
    slug: 'specific-purposes',
    nombre: 'Short Spanish for Specific Purposes Program',
    descripcionBreve: 'Spanish designed for professional and disciplinary contexts: healthcare, business, astronomy, literary routes. Tailor-made program of 1 to 2 weeks.',
    descripcionExtendida:
      'Specific Purposes Programs (ESP) are designed for organizations — embassies, companies, regional governments, universities — that require structured language training tailored to their professional field. The curriculum is developed collaboratively with the client organization to ensure relevance to real communicative needs.',
    objetivo:
      'Develop communicative competencies in Spanish applied to specific professional and disciplinary contexts, through programs designed according to the needs of universities, companies, or specialized groups.',
    niveles: ['According to institutional requirements'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'LATAM students (undergraduate, postgraduate), executives, companies, international organizations, and professional groups.',
    cursosTabla: [
      { nombre: 'Healthcare', horas: '30–50', precioUSD: 'USD 900–1,500', modalidad: '1–2 weeks, tailored' },
      { nombre: 'Business', horas: '30–50', precioUSD: 'USD 900–1,500', modalidad: 'Tailored' },
      { nombre: 'Astronomy', horas: '30–50', precioUSD: 'USD 900–1,500', modalidad: 'Tailored' },
      { nombre: 'Literary Routes', horas: '30–50', precioUSD: 'USD 900–1,500', modalidad: 'Tailored' },
    ],
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
        descripcion: 'The program has a minimum duration of 30 hours.',
      },
      {
        titulo: 'Contracting',
        descripcion: 'Requires a sponsoring organization letter and formal proposal from CEIE.',
      },
    ],
    grupoMaximo: 'Variable according to institutional agreement',
    duracion: '1 to 2 weeks (tailored)',
    certificado: {
      tipo: 'Certificate of Specialized Training CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifies hours completed and CEFR level attained in the area of specialization.',
    },
    precio: {
      estandar: 'USD 900 – 1,500',
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
    slug: 'projects',
    nombre: 'Projects and Tenders',
    descripcionBreve: 'Tailored corporate programs for companies, international organizations, and professional groups, with curriculum design by sector and institutional objectives.',
    descripcionExtendida:
      'Design and delivery of fully customized Spanish teaching programs for organizations participating in tendering processes, international projects, or requiring large-scale training. Curriculum, duration, price, and location are defined according to client requirements.',
    objetivo:
      'Develop communicative competencies in Spanish adapted to the specific requirements of each organization or professional group, with tailored curriculum design by sector, level, and institutional objectives.',
    niveles: ['Variable'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'Companies, international organizations, and professional groups.',
    cursosTabla: [
      { nombre: 'Tailored program (by project)', horas: 'Variable', precioUSD: 'Variable', modalidad: 'Variable' },
    ],
    horarios: [
      { turno: 'Variable', dias: 'Coordinated with the client', hora: 'By project' },
    ],
    temario: [
      {
        nivel: 'Tailored design',
        contenidos: [
          'Institutional needs assessment',
          'Curriculum design by sector and level',
          'Delivery with specialized teaching team',
          'Evaluation and progress reporting',
        ],
      },
    ],
    actividades: [
      'Customized institutional curriculum design',
      'Coordination with client HR or training department',
      'Progress reports and impact assessment',
      'In-person or remote delivery options',
    ],
    condiciones: [
      {
        titulo: 'Process',
        descripcion: 'Requires a formal proposal from CEIE, approved by the client organization. Specific contract by project.',
      },
      {
        titulo: 'Pricing',
        descripcion: 'Quotation based on volume of hours, number of participants, and complexity of curriculum design.',
      },
    ],
    grupoMaximo: 'Variable',
    duracion: 'Variable',
    certificado: {
      tipo: 'Institutional Certificate CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifies hours completed and level attained according to project objectives.',
    },
    precio: {
      valor: 'Tailored quotation',
      notas: 'Contact programascortos@uai.cl to request a proposal.',
    },
    nota: 'For corporate projects, public tenders, and large-scale training programs.',
    noSubPage: true,
  },
]
