import type { ProgramData } from './programs'

export const PROGRAMS_DATA_EN: ProgramData[] = [
  {
    slug: 'semester',
    nombre: 'Spanish Semester Program',
    descripcionBreve: 'Structured progression through CEFR levels over 17 weeks. Language courses, thematic courses, and International Core.',
    descripcionExtendida:
      'The Spanish Language Semester Program is designed to progressively develop the linguistic, academic, and cultural competencies of international students whose native language is not Spanish, facilitating their integration into university life. Courses are aligned with the Common European Framework of Reference for Languages (CEFR) and follow the standards of the Instituto Cervantes Curriculum Plan (PCIC). Courses are offered from levels A1 to C1 and include academic credits.',
    objetivo:
      'Progressively develop linguistic, academic, and cultural competencies in Spanish for international non-Spanish-speaking students, facilitating integration into the university experience.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'International undergraduate students with no Spanish background.',
    cursosTabla: [
      { nombre: 'Basic Spanish Grammar', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Basic Spanish Communication', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Intermediate Spanish Grammar', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Intermediate Spanish Communication', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Advanced Spanish Grammar', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Advanced Spanish Communication', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Spanish Phonetics', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Thematic: Professional Spanish for Business and Global Markets', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Thematic' },
      { nombre: 'Thematic: Spanish for Healthcare and Medical Communication', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Thematic' },
      { nombre: 'Thematic: Living to Tell the Tale — Latin American Literature', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Thematic' },
      { nombre: 'Thematic: Cinematic Audacity — Chile through Documentary', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Thematic' },
      { nombre: 'International Core Courses (Literature, Ethics, Science, Contemporary Civilisation, Writing and Arts)', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'International Core' },
    ],
    horarios: [
      { turno: 'Classes', dias: 'Monday to Friday', hora: '08:30 – 18:55' },
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
      'Welcome orientation',
      'Local tours of Viña del Mar, Valparaíso, and Santiago',
      'Urban Amazing Race',
      'Football tournaments',
      'International fair',
      'International dinner',
      'Dance classes',
    ],
    condiciones: [
      {
        titulo: 'Entry requirement',
        descripcion: 'Minimum level required for the selected course (except for A1). Mandatory placement test before the start of the semester, included in course tuition.',
      },
      {
        titulo: 'Attendance',
        descripcion: 'Minimum 80% attendance required to receive the completion certificate.',
      },
      {
        titulo: 'Cancellation',
        descripcion: '45+ days in advance: no charge. 15–44 days: 50% charge. Less than 15 days: no refund. Force majeure evaluated individually. Written cancellation to caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 24,
    duracion: '17 weeks',
    certificado: {
      tipo: 'Official Academic Transcript',
      emite: 'Universidad Adolfo Ibáñez (through CEIE)',
      reconocimiento: 'CEFR-aligned program. Academic equivalencies through UAI international agreements.',
    },
    precio: {
      estandar: 'USD 950 / per participant',
      inSitu: 'USD 1,188 / thematic or Core course',
    },
  },
  {
    slug: 'intensive',
    nombre: 'Intensive Spanish Program',
    descripcionBreve: 'Intensive group training designed for international students seeking to develop their Spanish proficiency in a short period.',
    descripcionExtendida:
      'The Intensive Spanish Program is designed for international students who are non-native speakers of Spanish and want to build their language skills in a short period of time, without needing to spend a full semester in Chile. The program combines intensive language training with cultural immersion experiences, fostering practical and meaningful learning in a Spanish-speaking environment.\n\nCourses are aligned with the Common European Framework of Reference for Languages (CEFR) and follow the standards of the Instituto Cervantes Curriculum Plan (PCIC). The program allows students to advance their Spanish proficiency through a concentrated language and cultural learning experience.',
    objetivo:
      'Advance Spanish language proficiency through an intensive, immersive experience adapted to each participant\'s level and objectives.',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'International non-Spanish-speaking students seeking short-term intensive language training.',
    cursosTabla: [
      { nombre: 'Grammar and Communicative Structures', horas: 22, precioUSD: '900 USD (both courses)', creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '2-Week Intensive', descripcion: 'An intensive course focused on developing and strengthening the grammatical and linguistic resources of Spanish. Through an active, hands-on methodology, students work with structures and linguistic resources that support increasingly accurate communication.' },
      { nombre: 'Communication and Chilean Culture', horas: 22, precioUSD: 'Included', creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '2-Week Intensive', descripcion: 'An intensive course focused on developing communication skills in Spanish, integrating language learning with an introduction to Chilean and Latin American culture. Includes cultural activities in Viña del Mar and Valparaíso.' },
      { nombre: 'Grammar and Communicative Structures', horas: 40, precioUSD: '1,800 USD (both courses)', creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '4-Week Intensive', descripcion: 'An intensive course focused on developing and strengthening the grammatical and linguistic resources of Spanish. The four-week format allows students to progressively address and consolidate the grammatical and linguistic resources for their level.' },
      { nombre: 'Communication and Chilean Culture', horas: 40, precioUSD: 'Included', creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '4-Week Intensive', descripcion: 'An intensive course focused on developing communication skills in Spanish with cultural integration. The four-week format allows students to progressively deepen communication skills and strengthen the connection between language learning and cultural experience.' },
    ],
    horarios: [
      { turno: 'Classes', dias: 'Monday to Thursday', hora: 'As per program' },
      { turno: 'Cultural activities', dias: 'Friday', hora: 'As per program' },
    ],
    temario: [
      {
        nivel: 'A1 — Beginner',
        contenidos: [
          'Personal introductions and greetings',
          'Everyday vocabulary',
          'Present tense: regular verbs',
          'Numbers, dates and times',
          'Basic pronunciation of Chilean Spanish',
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
          'Narration across multiple verb tenses',
          'Reading comprehension of news articles',
          'Debate and discussion on current issues',
          'Formal and informal registers',
        ],
      },
      {
        nivel: 'B2 — Upper Intermediate',
        contenidos: [
          'Analysis of academic and literary texts',
          'Writing reports and essays',
          'Comprehension of authentic speech',
          'The subjunctive: usage and nuances',
          'Spanish in professional contexts',
        ],
      },
      {
        nivel: 'C1 — Advanced',
        contenidos: [
          'Expressing nuance and complex registers',
          'Analysis of Chilean and Latin American literature',
          'Advanced academic writing',
          'Pragmatics and discourse coherence',
        ],
      },
    ],
    actividades: [
      'Welcome orientation',
      'Local tours of Viña del Mar and Valparaíso',
      'Chilean cooking class',
    ],
    condiciones: [
      {
        titulo: 'Entry requirement',
        descripcion: 'Minimum level required for the selected course (except for A1). Mandatory placement test before the start of the program, included in course tuition.',
      },
      {
        titulo: 'Attendance',
        descripcion: 'Minimum 80% attendance required to receive the completion certificate.',
      },
      {
        titulo: 'Cancellation',
        descripcion: '45+ days in advance: no charge. 15–44 days: 50% charge. Less than 15 days: no refund. Force majeure evaluated individually. Written cancellation to caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 15,
    duracion: '2 to 4 weeks',
    certificado: {
      tipo: 'Official Academic Transcript',
      emite: 'Universidad Adolfo Ibáñez (through CEIE)',
      reconocimiento: 'Certifies hours completed and CEFR level attained.',
    },
    precio: {
      estandar: 'USD 900 (2-Week Intensive · both courses)',
      inSitu: 'USD 1,800 (4-Week Intensive · both courses)',
    },
    modalidades: [
      'In-Person · Campus Viña del Mar',
    ],
    perfilIdeal: 'International non-Spanish-speaking students who want to develop their Spanish proficiency in a short period.',
  },
  {
    slug: 'specific-purposes',
    nombre: 'Spanish for Specific Purposes',
    descripcionBreve: 'Short-term Spanish program custom-designed for individuals, groups, or institutions. Tailored to specific needs, interests, and objectives.',
    descripcionExtendida:
      'Spanish for Specific Purposes is a short-term program custom-designed around the specific needs, interests, and goals of each individual, group, or institution. Its purpose is to strengthen communication skills in Spanish in academic, professional, or discipline-specific settings, through content and activities tailored to the profile and language level of the participants.\n\nThe program combines the development of specialized vocabulary, communicative functions, and linguistic resources relevant to the field of interest with practical activities focused on using Spanish in situations and contexts specific to each field. Methodology and content are defined according to the objectives of the program and may include Spanish classes, workshops, applied activities, and cultural or professional experiences.',
    objetivo:
      'Strengthen communicative competencies in Spanish in academic, professional, or disciplinary contexts, through programs designed to the specific needs of each person, group, or institution.',
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
      'Curriculum design tailored to the level, profile, and learning objectives of participants',
      'Instructors specialized in teaching Spanish and, where applicable, in the subject area',
      'Teaching materials selected or developed according to course content and objectives',
      'Support and coordination throughout the program',
      'Cultural activities and immersion experiences depending on the format',
      'Academic, professional, or cultural visits when relevant to program objectives',
      'Logistical support services (housing and transportation) for in-person programs',
      'Certificate of participation or completion depending on program characteristics',
    ],
    condiciones: [
      {
        titulo: 'On-site modality',
        descripcion: 'On-site programs include instructor travel expenses based on the agreed location.',
      },
      {
        titulo: 'Session cancellation',
        descripcion: 'Sessions must be cancelled at least 24 hours in advance. Cancellations must be submitted in writing to caroline.cortes@uai.cl.',
      },
      {
        titulo: 'Program cancellation',
        descripcion: '45+ days before start date: no charge. 15–44 days: 50% fee. Less than 15 days: no refund. Force majeure evaluated individually. Written cancellation to caroline.cortes@uai.cl.',
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
]
