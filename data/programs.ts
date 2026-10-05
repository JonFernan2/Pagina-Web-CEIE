export interface HorarioEntry {
  turno: string
  dias: string
  hora: string
}

export interface TemarioItem {
  nivel: string
  contenidos: string[]
}

export interface CondicionEntry {
  titulo: string
  descripcion: string
}

export interface CertificadoInfo {
  tipo: string
  emite: string
  reconocimiento: string
}

export interface PrecioInfo {
  valor?: string
  moneda?: string
  notas?: string
  estandar?: string
  inSitu?: string
  largoplazo?: string
}

export interface ProductoCurso {
  nombre: string
  horas: number | string
  precioUSD: number | string
  modalidad?: string
  descripcion?: string
  creditos?: number
  minEstudiantes?: number
  maxEstudiantes?: number
  subcategoria?: string
}

export interface ProgramData {
  slug: string
  nombre: string
  descripcionBreve: string
  descripcionExtendida: string
  objetivo?: string
  niveles: string[]
  sedes?: string[]
  publicoObjetivo?: string
  cursosTabla?: ProductoCurso[]
  noSubPage?: boolean
  horarios: HorarioEntry[]
  temario: TemarioItem[]
  actividades: string[]
  condiciones: CondicionEntry[]
  grupoMaximo: number | string
  duracion: string
  certificado: CertificadoInfo
  precio: PrecioInfo
  modalidades?: string[]
  perfilIdeal?: string
  submodalidades?: string[]
  nota?: string
}

export const PROGRAMS_DATA: ProgramData[] = [
  {
    slug: 'semestral',
    nombre: 'Programa Semestral de Español',
    descripcionBreve: 'Progresión estructurada por niveles MCER en 4 meses. Cursos de lengua, temáticos y Core Internacional.',
    descripcionExtendida:
      'El Programa Semestral de Español está diseñado para desarrollar progresivamente las competencias lingüísticas, académicas y culturales en español de estudiantes internacionales no hispanohablantes, facilitando su integración a la experiencia universitaria. Los cursos están alineados con el Marco Común Europeo de Referencia para las Lenguas (MCER) y siguen los estándares del Plan Curricular del Instituto Cervantes (PCIC). Se ofrecen desde el nivel A1 hasta el C1 y cuentan con créditos académicos.',
    objetivo:
      'Desarrollar progresivamente las competencias lingüísticas, académicas y culturales en español de estudiantes internacionales no hispanohablantes, facilitando su integración a la experiencia universitaria.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'Alumnos de pregrado internacional no hispanohablante.',
    cursosTabla: [
      { nombre: 'Español Básico Gramática', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Español Básico Comunicación', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Español Intermedio Gramática', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Español Intermedio Comunicación', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Español Avanzado Gramática', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Español Avanzado Comunicación', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Español Fonética', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Temático: Español Profesional para los Negocios y Mercados Globales', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticas' },
      { nombre: 'Temático: Español para la Atención de la Salud y la Comunicación Médica', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticas' },
      { nombre: 'Temático: Vivir para Contarla — Literatura Latinoamericana', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticas' },
      { nombre: 'Temático: Temeridad Cinematográfica — Chile a través del Documental', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticas' },
      { nombre: 'Cursos Core Internacionales (Literatura, Ética, Ciencias, Civilización Contemporánea, Escritura y Artes)', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Core Internacional' },
    ],
    horarios: [
      { turno: 'Clases', dias: 'Lunes a viernes', hora: '08:30 – 18:55' },
    ],
    temario: [
      {
        nivel: 'A1 — Inicial',
        contenidos: [
          'Presentaciones personales y saludos',
          'Vocabulario de la vida cotidiana',
          'Presente de indicativo: verbos regulares',
          'Números, fechas y horarios',
          'Pronunciación básica del español chileno',
        ],
      },
      {
        nivel: 'A2 — Elemental',
        contenidos: [
          'Narración de experiencias pasadas (pretérito)',
          'Descripción de personas, lugares y objetos',
          'Expresión de gustos y preferencias',
          'Transacciones cotidianas: compras, restaurantes, transporte',
          'Introducción a expresiones idiomáticas chilenas',
        ],
      },
      {
        nivel: 'B1 — Intermedio',
        contenidos: [
          'Argumentación oral y escrita',
          'Narración en múltiples tiempos verbales',
          'Comprensión de textos periodísticos',
          'Debate y discusión sobre temas actuales',
          'Registro formal e informal',
        ],
      },
      {
        nivel: 'B2 — Intermedio alto',
        contenidos: [
          'Análisis de textos académicos y literarios',
          'Redacción de informes y ensayos',
          'Comprensión de discursos auténticos',
          'Subjuntivo: uso y matices',
          'Español en contextos profesionales',
        ],
      },
      {
        nivel: 'C1 — Avanzado',
        contenidos: [
          'Expresión de matices y registros complejos',
          'Análisis de literatura chilena e hispanoamericana',
          'Producción académica avanzada',
          'Pragmática y coherencia discursiva',
          'Preparación para certificación DELE C1',
        ],
      },
    ],
    actividades: [
      'Orientación de bienvenida',
      'Tours locales por Viña del Mar, Valparaíso y Santiago',
      '"Amazing Race" urbano',
      'Torneos de fútbol',
      'Feria internacional',
      'Cena internacional',
      'Clases de baile',
    ],
    condiciones: [
      {
        titulo: 'Requisito de ingreso',
        descripcion: 'Nivel mínimo según el curso seleccionado (con excepción del A1). Test de diagnóstico obligatorio antes del inicio del semestre e incluido en la matrícula del curso.',
      },
      {
        titulo: 'Permanencia',
        descripcion: 'Asistencia mínima del 80% para acceder al certificado de finalización.',
      },
      {
        titulo: 'Cancelación',
        descripcion: 'Con 45+ días: sin cargo. Con 15–44 días: cargo del 50%. Menos de 15 días: sin reembolso. Fuerza mayor evaluada individualmente. Por escrito a caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 24,
    duracion: '17 semanas',
    certificado: {
      tipo: 'Certificado de Concentración de Notas',
      emite: 'Universidad Adolfo Ibáñez (a través del CEIE)',
      reconocimiento: 'Programa alineado al MCER. Equivalencias académicas según convenios UAI.',
    },
    precio: {
      estandar: 'USD 950 / por participante',
      inSitu: 'USD 1.188 / curso temático o Core',
      notas: 'Paquete especial 5 cursos: USD 4.750',
    },
  },
  {
    slug: 'intensivo',
    nombre: 'Programa Intensivo de Español',
    descripcionBreve: 'Formación intensiva en grupo (online o presencial) o personalizada uno a uno. Adaptada al nivel, ritmo y objetivos de cada participante.',
    descripcionExtendida:
      'El Programa Intensivo de Español está diseñado para estudiantes internacionales no hispanohablantes que buscan desarrollar sus competencias en español en un período breve, sin necesidad de permanecer un semestre completo en Chile. El programa combina una formación intensiva en el idioma con experiencias de inmersión cultural, favoreciendo un aprendizaje práctico y significativo en un contexto hispanohablante.\n\nLos cursos están alineados con el Marco Común Europeo de Referencia para las Lenguas (MCER) y siguen los estándares del Plan Curricular del Instituto Cervantes (PCIC). El programa permite avanzar en el dominio del español mediante una experiencia concentrada de aprendizaje lingüístico y cultural.',
    objetivo:
      'Fortalecer las competencias comunicativas en español mediante una formación intensiva —grupal o individual— adaptada al nivel, ritmo y objetivos académicos o profesionales de cada participante.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'Todos los niveles'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'Alumnos internacionales no hispanohablante. Profesionales, investigadores, ejecutivos, empresas y funcionarios diplomáticos.',
    cursosTabla: [
      { nombre: 'Gramática y Estructuras Comunicativas', horas: 22, precioUSD: '900 USD (ambos cursos)', creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 2 semanas', descripcion: 'Curso intensivo orientado al desarrollo y fortalecimiento de los recursos gramaticales y lingüísticos del español. A través de una metodología activa y aplicada, los participantes trabajan estructuras y recursos lingüísticos que favorecen una comunicación progresivamente más precisa y adecuada en distintos contextos.' },
      { nombre: 'Comunicación y Cultura Chilena', horas: 22, precioUSD: 'Incluido', creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 2 semanas', descripcion: 'Curso intensivo orientado al desarrollo y fortalecimiento de las competencias comunicativas en español, integrando el aprendizaje del idioma con una aproximación a la cultura chilena y latinoamericana. Incorpora actividades culturales en Viña del Mar y Valparaíso.' },
      { nombre: 'Gramática y Estructuras Comunicativas', horas: 40, precioUSD: '1.800 USD (ambos cursos)', creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 4 semanas', descripcion: 'Curso intensivo orientado al desarrollo y fortalecimiento de los recursos gramaticales y lingüísticos del español. El formato de cuatro semanas permite abordar y consolidar progresivamente los recursos gramaticales y lingüísticos correspondientes al nivel.' },
      { nombre: 'Comunicación y Cultura Chilena', horas: 40, precioUSD: 'Incluido', creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 4 semanas', descripcion: 'Curso intensivo orientado al desarrollo y fortalecimiento de las competencias comunicativas en español, con integración de la cultura chilena. El formato de cuatro semanas permite profundizar progresivamente en las competencias comunicativas e integra más oportunidades de inmersión cultural.' },
    ],
    horarios: [
      { turno: 'Clases', dias: 'Lunes a jueves', hora: 'Según programa' },
      { turno: 'Actividades culturales', dias: 'Viernes', hora: 'Según programa' },
    ],
    temario: [
      {
        nivel: 'A1–A2 — Inicial a Elemental (Grupal)',
        contenidos: [
          'Comunicación básica en situaciones cotidianas',
          'Presente, pasado y futuro inmediato',
          'Vocabulario esencial y pronunciación',
          'Comprensión auditiva de textos sencillos',
        ],
      },
      {
        nivel: 'B1–B2 — Intermedio (Grupal)',
        contenidos: [
          'Conversación fluida en temas conocidos',
          'Redacción de textos estructurados',
          'Comprensión de medios de comunicación chilenos',
          'Expresión de opiniones y argumentación',
        ],
      },
      {
        nivel: 'Individual — Diseño curricular personalizado',
        contenidos: [
          'Diagnóstico inicial detallado',
          'Objetivos de aprendizaje específicos del estudiante',
          'Materiales adaptados al campo profesional',
          'Progreso medido y reportado periódicamente',
        ],
      },
    ],
    actividades: [
      'Orientación de bienvenida',
      'Tours locales por Viña del Mar y Valparaíso',
      'Clase de cocina chilena',
    ],
    condiciones: [
      {
        titulo: 'Requisito de ingreso',
        descripcion: 'Nivel mínimo según el curso seleccionado (con excepción del A1). Test de diagnóstico obligatorio antes del inicio del programa e incluido en la matrícula del curso.',
      },
      {
        titulo: 'Permanencia',
        descripcion: 'Asistencia mínima del 80% para acceder al certificado de finalización.',
      },
      {
        titulo: 'Cancelación',
        descripcion: 'Con 45+ días: sin cargo. Con 15–44 días: cargo del 50%. Menos de 15 días: sin reembolso. Fuerza mayor evaluada individualmente. Por escrito a caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 15,
    duracion: '2 a 4 semanas',
    certificado: {
      tipo: 'Certificado de Concentración de Notas',
      emite: 'Universidad Adolfo Ibáñez (a través del CEIE)',
      reconocimiento: 'Certifica las horas completadas y el nivel MCER alcanzado.',
    },
    precio: {
      estandar: 'USD 900 (Intensivo 2 semanas · ambos cursos)',
      inSitu: 'USD 1.800 (Intensivo 4 semanas · ambos cursos)',
    },
    modalidades: [
      'Presencial · Campus Viña del Mar',
    ],
    perfilIdeal: 'Estudiantes internacionales no hispanohablantes que buscan desarrollar sus competencias en español en un período breve.',
  },
  {
    slug: 'fines-especificos',
    nombre: 'Español con Fines Específicos',
    descripcionBreve: 'Español diseñado para contextos profesionales y disciplinares: salud, negocios, astronomía, rutas literarias. Programa a medida de 1 a 2 semanas.',
    descripcionExtendida:
      'El Español con Fines Específicos es un programa de corta duración diseñado a medida de acuerdo con las necesidades, intereses y objetivos específicos de cada persona, grupo o institución. Su propósito es fortalecer las competencias comunicativas en español en ámbitos académicos, profesionales o disciplinares, mediante contenidos y actividades adaptados al perfil y nivel lingüístico de los participantes.\n\nEl programa combina el desarrollo de vocabulario especializado, funciones comunicativas y recursos lingüísticos relevantes para el área de interés, con actividades prácticas orientadas al uso del español en situaciones y contextos propios de cada ámbito. La metodología y los contenidos se definen en función de los objetivos del programa, pudiendo incorporar clases de español, talleres, actividades aplicadas y experiencias culturales o profesionales.',
    objetivo:
      'Fortalecer las competencias comunicativas en español en ámbitos académicos, profesionales o disciplinares, mediante programas diseñados a medida según las necesidades de cada persona, grupo o institución.',
    niveles: ['Según requerimiento institucional'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'Alumnos LATAM (pregrado, posgrado), ejecutivos, empresas, organismos internacionales y grupos profesionales.',
    cursosTabla: [
      { nombre: 'Salud', horas: '30–50', precioUSD: 'USD 900–1.500', modalidad: '1–2 semanas, a medida' },
      { nombre: 'Negocios', horas: '30–50', precioUSD: 'USD 900–1.500', modalidad: 'A medida' },
      { nombre: 'Astronomía', horas: '30–50', precioUSD: 'USD 900–1.500', modalidad: 'A medida' },
      { nombre: 'Rutas Literarias', horas: '30–50', precioUSD: 'USD 900–1.500', modalidad: 'A medida' },
    ],
    horarios: [
      { turno: 'Variable', dias: 'Coordinado con la organización cliente', hora: 'Según convenio' },
    ],
    temario: [
      {
        nivel: 'Español para Negocios e Industria',
        contenidos: [
          'Comunicación corporativa y negociación',
          'Redacción de informes y correos profesionales',
          'Presentaciones orales en contexto empresarial',
          'Vocabulario sectorial específico',
        ],
      },
      {
        nivel: 'Español Académico',
        contenidos: [
          'Lectura y escritura académica en español',
          'Citas y referencias en formato académico',
          'Presentación de resultados de investigación',
          'Participación en coloquios y conferencias',
        ],
      },
      {
        nivel: 'Español para Diplomacia y RRII',
        contenidos: [
          'Protocolo y lenguaje diplomático',
          'Redacción de notas verbales y comunicados',
          'Español para organismos internacionales',
          'Análisis político y expresión de posiciones',
        ],
      },
    ],
    actividades: [
      'Diseño curricular adaptado al nivel, perfil y objetivos de aprendizaje',
      'Docentes especializados en enseñanza del español y en el área temática',
      'Materiales didácticos seleccionados o desarrollados según los objetivos del curso',
      'Acompañamiento y coordinación durante el desarrollo del programa',
      'Actividades culturales y experiencias de inmersión según modalidad',
      'Visitas académicas, profesionales o culturales pertinentes a los objetivos',
      'Servicios de apoyo logístico (alojamiento y transporte) para programas presenciales',
      'Certificado de participación o aprobación según características del programa',
    ],
    condiciones: [
      {
        titulo: 'Modalidad in situ',
        descripcion: 'La modalidad in situ incluye gastos de desplazamiento del docente según ubicación acordada.',
      },
      {
        titulo: 'Cancelación de sesión',
        descripcion: 'Cancelación con al menos 24 horas de anticipación. Enviar por escrito a caroline.cortes@uai.cl.',
      },
      {
        titulo: 'Cancelación de programa',
        descripcion: 'Con 45+ días: sin cargo. Con 15–44 días: cargo del 50%. Menos de 15 días: sin reembolso. Fuerza mayor evaluada individualmente. Por escrito a caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 'Variable según convenio institucional',
    duracion: '1 a 2 semanas (a medida)',
    certificado: {
      tipo: 'Certificado de Formación Especializada CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifica horas completadas y nivel MCER alcanzado en el área de especialización.',
    },
    precio: {
      estandar: 'USD 900 – 1.500',
      notas: 'Solicitar propuesta formal a programascortos@uai.cl',
    },
    submodalidades: [
      'Español para Negocios e Industria',
      'Español Académico',
      'Español para Diplomacia y Relaciones Internacionales',
      'Español para sectores específicos (salud, derecho, construcción)',
    ],
    nota: 'Diseñados para organizaciones: embajadas, empresas, universidades socias, gobiernos regionales.',
  },
]
