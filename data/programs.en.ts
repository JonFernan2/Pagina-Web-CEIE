import type { ProgramData } from './programs'

export const PROGRAMS_DATA_EN: ProgramData[] = [
  {
    slug: 'semester',
    nombre: 'Spanish Semester Programme',
    descripcionBreve: 'Courses in Spanish as a Foreign Language (levels A1–C1), thematic elective courses, and UAI Core Programme courses.',
    descripcionExtendida:
      'The Spanish Language Semester Program is designed to progressively develop the linguistic, academic, and cultural competencies of international students whose native language is not Spanish, facilitating their integration into university life. Courses are aligned with the Common European Framework of Reference for Languages (CEFR) and follow the standards of the Instituto Cervantes Curriculum Plan (PCIC). Courses are offered from levels A1 to C1 and include academic credits.\n\nUnlike other Spanish programs in Chile, the UAI Semester Program integrates language instruction with the Liberal Arts model that distinguishes our university. Students do not only learn Spanish: they develop critical thinking, argumentative skills, and a deep understanding of Chilean and Latin American culture through an active, participatory methodology inspired by Columbia University\'s Core Curriculum. Students also have the opportunity to integrate into the UAI community, participating in student organizations, extracurricular workshops, cultural events, and sports activities alongside Chilean and international students from more than 20 countries.',
    objetivo:
      'Progressively develop linguistic, academic, and cultural competencies in Spanish for international non-Spanish-speaking students, facilitating integration into the university experience.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'International undergraduate students with no Spanish background.',
    cursosTabla: [
      { nombre: 'Basic Spanish A1/A2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'This course promotes the development of communicative competencies in Spanish in both oral and written expression, providing tools to communicate in formal and informal contexts, in personal and professional settings. Language use in context enables clear and effective communication.' },
      { nombre: 'Intermediate Spanish: Communication B1/B2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'This course aims to consolidate the communicative aspects of Spanish through constant interaction in formal and informal contexts. It fosters the ability to express oneself orally and in writing, key skills for effective participation in society.' },
      { nombre: 'Intermediate Spanish: Grammar B1–B2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'This course is designed for intermediate-level students seeking to consolidate and deepen their grammatical command of Spanish. Through contextual analysis and practice, students work with complex structures that allow them to express themselves with greater precision and accuracy in diverse communicative situations.' },
      { nombre: 'Advanced Spanish: Chilean Culture C1', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'This course is designed for advanced-level students who wish to deepen their linguistic competence through the study of Chilean culture. Using texts, audiovisual materials, and communicative activities, students analyse social, historical, and cultural aspects of Chile, strengthening their critical understanding and expression in Spanish.' },
      { nombre: 'Advanced Spanish: Grammar C1', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'This course deepens mastery of Spanish through the conscious analysis and use of complex grammatical structures in academic, professional, and cultural contexts. The work focuses on improving precision, coherence, and discursive appropriateness, enabling clear and nuanced communication in high-demand situations.' },
      { nombre: 'Spanish Phonetics', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'This course introduces students to the phonetic and phonological system of Spanish, with emphasis on pronunciation, intonation, and rhythm. Through practical perception and oral production exercises, participants develop clearer and more intelligible pronunciation across different communicative contexts.' },
      { nombre: 'Professional Spanish for Business and Global Markets (B1/B2)', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Thematic', descripcion: 'This course is aimed at students who need to use Spanish in professional contexts linked to the business world. It covers communicative situations typical of the corporate environment — meetings, presentations, and negotiations — along with the vocabulary and linguistic structures needed for effective communication. Learning is promoted through attendance at talks, events, and companies focused on the business world.' },
      { nombre: 'Spanish for Healthcare and Medical Communication (B1/B2)', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Thematic', descripcion: 'This course is aimed at students or professionals who require Spanish to interact in healthcare settings. Through real communicative situations, it develops linguistic skills for patient care, working in health teams, and understanding specialised texts, promoting clear, empathetic, and relevant communication.' },
      { nombre: 'Living to Tell the Tale: Latin American Literature', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Thematic', descripcion: 'This course explores the role of memory, nostalgia, and identity in Latin American literature. Through reading and analysis of representative works by authors such as Gabriel García Márquez, students will discover how writers transform personal memories and experiences into narratives that reflect both individual stories and collective cultural processes.' },
      { nombre: 'Cinematic Audacity: Chile through Documentary', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Thematic', descripcion: 'This course offers an introduction to Chilean documentary cinema as a tool for understanding the history, memory, and social processes of the country. Through analysis of key works by outstanding filmmakers, students will explore how documentary has helped preserve collective memory and reflect on pivotal historical events.' },
      { nombre: 'Core: Arts and Humanities', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'UAI Core', descripcion: 'This course proposes an exercise in critical analysis and direct observation of fundamental works in architecture, painting, and sculpture. Students engage with these pieces to extract relevant information from formal structure and context of creation — from technical description to iconographic and symbolic interpretation — complemented by visits to monuments and exhibitions.' },
      { nombre: 'Core: Sciences', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'UAI Core', descripcion: 'This course addresses the great questions of contemporary physics and biology, using science as a tool to strengthen logical reasoning. Rather than memorising facts, students learn to weigh the value of theories and the support of available evidence, cultivating a critical dimension capable of building solid, scientifically grounded arguments.' },
      { nombre: 'Core: Argumentative Writing', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'UAI Core', descripcion: 'Under the premise of "learning to write by writing", this course is designed to transform thinking into effective essay texts. Work focuses on bibliographic research and the mastery of persuasive techniques, requiring students to continuously edit and refine their writing to achieve expressive autonomy in any professional environment.' },
      { nombre: 'Core: Ethics', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'UAI Core', descripcion: 'This course deepens the moral dimension of human existence, focusing on individual responsibility in the face of reality. Through reflection on the justice of actions and the search for a good life, students learn to analyse, evaluate, and justify their daily and professional decisions, promoting intellectual autonomy and integrity as pillars of professional practice.' },
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
    participantes: '5 people',
    duracion: '17 weeks',
    certificado: {
      tipo: 'Official Academic Transcript',
      emite: 'Universidad Adolfo Ibáñez (through CEIE)',
      reconocimiento: 'CEFR-aligned program. Academic equivalencies through UAI international agreements.',
    },
    precio: {
      estandarLabel: 'Spanish courses (ELE)',
      estandar: 'USD 950 per course',
      inSituLabel: 'Thematic and Core courses',
      inSitu: 'USD 1,188 per course',
    },
  },
  {
    slug: 'intensive',
    nombre: 'Intensive Spanish Programme',
    descripcionBreve: 'Intensive Spanish for 2 or 4 weeks.',
    descripcionExtendida:
      'The Intensive Spanish Program is designed for international students who are non-native speakers of Spanish and want to build their language skills in a short period of time, without needing to spend a full semester in Chile. The program combines intensive language training with cultural immersion experiences, fostering practical and meaningful learning in a Spanish-speaking environment.\n\nCourses are aligned with the Common European Framework of Reference for Languages (CEFR) and follow the standards of the Instituto Cervantes Curriculum Plan (PCIC). The program allows students to advance their Spanish proficiency through a concentrated language and cultural learning experience.',
    objetivo:
      'Advance Spanish language proficiency through an intensive, immersive experience adapted to each participant\'s level and objectives.',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'International non-Spanish-speaking students seeking to develop their Spanish proficiency in a short period.',
    cursosTabla: [
      { nombre: 'Grammar and Communicative Structures', horas: 22, precioUSD: 900, creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '2-Week Intensive', descripcion: 'An intensive course focused on developing the fundamental grammatical structures of Spanish. Through an active, applied methodology, students acquire the tools they need to understand and use the language\'s main structures in everyday communicative situations. The course covers essential grammar content, integrating vocabulary, comprehension, and oral and written production, with practical activities that apply the content in real communicative contexts. The intensive format supports the progressive consolidation of learning and provides a solid foundation for continuing to advance in Spanish.' },
      { nombre: 'Communication and Chilean Culture', horas: 22, precioUSD: 900, creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '2-Week Intensive', descripcion: 'An intensive course focused on developing basic communicative skills in Spanish, combining language learning with an introduction to Chilean and Latin American culture. Students develop tools to communicate simply in everyday situations, both orally and in writing. Through practical activities and immersion experiences, students have the opportunity to use Spanish in real contexts while exploring aspects of everyday life, society, and culture in Chile. The course includes cultural activities in Viña del Mar and Valparaíso, encouraging intercultural reflection and a closer understanding of the context in which their learning experience takes place.' },
      { nombre: 'Grammar and Communicative Structures', horas: 40, precioUSD: 1800, creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '4-Week Intensive', descripcion: 'An intensive course focused on developing the fundamental grammatical structures of Spanish. Through an active, applied methodology, students acquire the tools they need to understand and use the language\'s main structures in everyday communicative situations. The course covers essential grammar content, integrating vocabulary, comprehension, and oral and written production, with practical activities that apply the content in real communicative contexts. The intensive format supports the progressive consolidation of learning and provides a solid foundation for continuing to advance in Spanish.' },
      { nombre: 'Communication and Chilean Culture', horas: 40, precioUSD: 1800, creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '4-Week Intensive', descripcion: 'An intensive course focused on developing basic communicative skills in Spanish, combining language learning with an introduction to Chilean and Latin American culture. Students develop tools to communicate simply in everyday situations, both orally and in writing. Through practical activities and immersion experiences, students have the opportunity to use Spanish in real contexts while exploring aspects of everyday life, society, and culture in Chile. The course includes cultural activities in Viña del Mar and Valparaíso, encouraging intercultural reflection and a closer understanding of the context in which their learning experience takes place.' },
    ],
    horarios: [
      { turno: 'Classes', dias: 'Monday to Thursday', hora: 'As per program' },
      { turno: 'Cultural activities', dias: 'Friday', hora: 'As per program' },
    ],
    temario: [
      {
        nivel: 'Grammar and Communicative Structures',
        descripcion: [
          'An intensive course focused on developing the fundamental grammatical structures of Spanish. Through an active, applied methodology, students acquire the tools they need to understand and use the language\'s main structures in everyday communicative situations.',
          'The course covers essential grammar content, integrating vocabulary, comprehension, and oral and written production, with practical activities that apply the content in real communicative contexts. The intensive format supports the progressive consolidation of learning and provides a solid foundation for continuing to advance in Spanish.',
        ],
        ficha: [{ label: 'Hours', value: '22 h (2 weeks) · 40 h (4 weeks)' }, { label: 'Credits', value: '2 (2 weeks) · 4 (4 weeks)' }, { label: 'Duration', value: '2 or 4 weeks' }, { label: 'Minimum students', value: '5' }, { label: 'Maximum students', value: '15' }, { label: 'Campus', value: 'Viña del Mar' }, { label: 'Price', value: 'USD 900 (2 weeks) · USD 1,800 (4 weeks)' }],
        contenidos: [],
      },
      {
        nivel: 'Communication and Chilean Culture',
        descripcion: [
          'An intensive course focused on developing basic communicative skills in Spanish, combining language learning with an introduction to Chilean and Latin American culture. Students develop tools to communicate simply in everyday situations, both orally and in writing.',
          'Through practical activities and immersion experiences, students have the opportunity to use Spanish in real contexts while exploring aspects of everyday life, society, and culture in Chile. The course includes cultural activities in Viña del Mar and Valparaíso, encouraging intercultural reflection and a closer understanding of the context in which their learning experience takes place.',
        ],
        ficha: [{ label: 'Hours', value: '22 h (2 weeks) · 40 h (4 weeks)' }, { label: 'Credits', value: '2 (2 weeks) · 4 (4 weeks)' }, { label: 'Duration', value: '2 or 4 weeks' }, { label: 'Minimum students', value: '5' }, { label: 'Maximum students', value: '15' }, { label: 'Campus', value: 'Viña del Mar' }, { label: 'Price', value: 'USD 900 (2 weeks) · USD 1,800 (4 weeks)' }],
        contenidos: [],
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
    participantes: '5 people',
    duracion: '2 to 4 weeks',
    certificado: {
      tipo: 'Official Academic Transcript',
      emite: 'Universidad Adolfo Ibáñez (through CEIE)',
      reconocimiento: 'Certifies hours completed and CEFR level attained.',
    },
    precio: {
      resumen: 'From USD 900',
      estandarLabel: '2-week Intensive (per course)',
      estandar: 'USD 900',
      inSituLabel: '4-week Intensive (per course)',
      inSitu: 'USD 1,800',
    },
    modalidades: [
      'In-Person · Campus Viña del Mar',
    ],
    perfilIdeal: 'International non-Spanish-speaking students who want to develop their Spanish proficiency in a short period.',
  },
  {
    slug: 'specific-purposes',
    vistaSimple: true,
    incluye: {
      titulo: 'What do our programmes include?',
      intro: 'CEIE programmes are designed according to the characteristics, objectives and format of each experience. Depending on the type of programme (individual, group or institutional) and its specific requirements, they may include:',
      items: [
        'Curriculum design adapted to the participants\' level, profile and learning objectives.',
        'Teachers specialised in teaching Spanish and, where relevant, in the programme\'s subject area.',
        'Teaching materials selected or developed according to the course content and objectives.',
        'Support and coordination throughout the programme.',
        'Cultural activities and immersion experiences, depending on the programme\'s format and characteristics.',
        'Academic, professional or cultural visits, when relevant to the programme\'s objectives.',
        'Logistical support services, such as accommodation and transport, for on-site programmes that require them.',
        'Certificate of participation or completion, depending on the programme\'s characteristics.',
      ],
    },
    areasNota: 'The following areas are examples of specialisations that can be selected by prior agreement between both parties.',
    nombre: 'Spanish for Specific Purposes Programme',
    descripcionBreve: 'Short-term program custom-designed to the specific needs, interests, and objectives of each individual, group, or institution.',
    descripcionExtendida:
      'Spanish for Specific Purposes is a short programme custom-designed to the specific needs, interests and objectives of each individual, group or institution. Its purpose is to strengthen communicative skills in Spanish in academic, professional or disciplinary fields, through content and activities adapted to the participants\' profile and language level.\n\nThe programme combines the development of specialised vocabulary, communicative functions and linguistic resources relevant to the area of interest with practical activities focused on using Spanish in situations and contexts typical of each field. The methodology and content are defined according to the programme\'s objectives and may include Spanish classes, workshops, applied activities and cultural or professional experiences.',
    objetivo:
      'Strengthen communicative competencies in Spanish in academic, professional, or disciplinary contexts, through programs designed to the specific needs of each person, group, or institution.',
    niveles: ['According to institutional requirements'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'LATAM students (undergraduate, postgraduate), executives, companies, international organizations, and professional groups.',
    cursosTabla: [
      { nombre: 'Individual personalised courses', horas: 'Flexible', precioUSD: 'On request', modalidad: 'In-person or online', descripcion: 'A Spanish programme designed around each participant\'s level, objectives, interests, and availability. Content and learning pace are adapted to their specific needs, whether working on general language competencies or deepening knowledge in academic, professional, or personal areas of interest. Classes follow a communicative, personalised approach combining linguistic development with activities and materials selected for each participant. Duration, intensity, format, and content are fully flexible.' },
      { nombre: 'Group programmes for institutions', horas: 'Flexible', precioUSD: 'On request', modalidad: 'In-person or online', descripcion: 'Spanish programmes tailored for universities, institutions, companies, or other groups, designed around the participants\' profile and the academic, professional, or cultural objectives defined for each experience. Programmes may combine Spanish classes with specialised content, cultural activities, immersion experiences, and academic or professional visits. Curriculum design, duration, intensity, and format are established together with the requesting institution.' },
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
    participantes: 'Variable according to institutional agreement',
    duracion: '1 to 2 weeks (tailored)',
    certificado: {
      tipo: 'Certificate of Specialized Training CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifies hours completed and CEFR level attained in the area of specialization.',
    },
    precio: {
      estandarLabel: 'Depending on length and format',
      estandar: 'USD 900 – 1,500',
      notas: 'Request a formal proposal at programascortos@uai.cl',
    },
    submodalidades: [
      'Individual personalised courses',
      'Group programmes for institutions',
    ],
    nota: 'Designed for organizations: embassies, companies, partner universities, regional governments.',
  },
]
