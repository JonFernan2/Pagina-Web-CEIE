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
    nombre: 'Programa Español Semestral',
    descripcionBreve: 'Progresión estructurada por niveles MCER en 4 meses. Cursos de lengua, temáticos y Core Internacional.',
    descripcionExtendida:
      'El Programa Semestral está diseñado para estudiantes internacionales que desean desarrollar su español de forma sistemática durante un período extendido. Las clases siguen el Plan Curricular del Instituto Cervantes y se imparten en grupos reducidos de no más de 12 estudiantes, garantizando atención individualizada y práctica comunicativa real.',
    objetivo:
      'Desarrollar progresivamente las competencias lingüísticas, académicas y culturales en español de estudiantes internacionales no hispanohablantes, facilitando su integración a la experiencia universitaria.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'Alumnos de pregrado internacional no hispanohablante.',
    cursosTabla: [
      { nombre: 'Español Básico Gramática', horas: 45, precioUSD: 950 },
      { nombre: 'Español Básico Comunicación', horas: 45, precioUSD: 950 },
      { nombre: 'Español Intermedio Gramática', horas: 45, precioUSD: 950 },
      { nombre: 'Español Intermedio Comunicación', horas: 45, precioUSD: 950 },
      { nombre: 'Español Avanzado Gramática', horas: 45, precioUSD: 950 },
      { nombre: 'Español Avanzado Comunicación', horas: 45, precioUSD: 950 },
      { nombre: 'Español Fonética', horas: 45, precioUSD: 950 },
      { nombre: 'Temático: Español Profesional para los Negocios y Mercados Globales', horas: 45, precioUSD: 1188 },
      { nombre: 'Temático: Español para la Atención de la Salud y la Comunicación Médica', horas: 45, precioUSD: 1188 },
      { nombre: 'Temático: Vivir para Contarla — Literatura Latinoamericana', horas: 45, precioUSD: 1188 },
      { nombre: 'Temático: Temeridad Cinematográfica — Chile a través del Documental', horas: 45, precioUSD: 1188 },
      { nombre: 'Cursos Core Internacionales (Literatura, Ética, Ciencias, Civilización Contemporánea, Escritura y Artes)', horas: 45, precioUSD: 1188 },
    ],
    horarios: [
      { turno: 'Mañana', dias: 'Lunes, miércoles y viernes', hora: '09:00 – 12:00' },
      { turno: 'Tarde',  dias: 'Lunes, miércoles y viernes', hora: '14:00 – 17:00' },
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
      'Visita guiada a Valparaíso y Viña del Mar',
      'Conversatorio sobre literatura chilena',
      'Visita a viñedos del Valle de Casablanca',
      'Actividades con comunidad universitaria UAI',
      'Acceso a biblioteca y recursos digitales UAI',
    ],
    condiciones: [
      {
        titulo: 'Requisito de ingreso',
        descripcion: 'Nivel A1 o sin conocimiento previo. Test diagnóstico obligatorio antes del inicio.',
      },
      {
        titulo: 'Permanencia',
        descripcion: 'Asistencia mínima del 80% para acceder al certificado de finalización.',
      },
      {
        titulo: 'Paquetes',
        descripcion: 'Paquete 4 cursos (3 lengua + 1 temático): USD 4.038. Paquete 5 cursos (3 lengua + 2 temáticos): USD 5.226. Precio especial paquete 5 cursos: USD 4.750.',
      },
      {
        titulo: 'Cancelación',
        descripcion: 'Con 45+ días: sin cargo. Con 15–44 días: cargo del 50%. Menos de 15 días: sin reembolso. Fuerza mayor evaluada individualmente. Por escrito a caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 12,
    duracion: '4 meses',
    certificado: {
      tipo: 'Certificado de Estudios CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
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
    nombre: 'Cursos ELE Intensivo (Grupal)',
    descripcionBreve: 'Formación intensiva presencial u online en grupos. Modalidades Básico, Intermedio y Avanzado, y ciclos conversacionales.',
    descripcionExtendida:
      'El Programa Intensivo ofrece una inmersión acelerada para estudiantes que necesitan alcanzar un nivel comunicativo en poco tiempo. Las clases diarias combinadas con actividades culturales permiten un avance significativo en 2 a 3 semanas.',
    objetivo:
      'Fortalecer las competencias comunicativas en español mediante una formación intensiva presencial u online, orientada a estudiantes que requieren avanzar en su dominio del idioma en un período breve.',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'Alumnos internacionales no hispanohablante. Profesionales, investigadores, ejecutivos, empresas y funcionarios diplomáticos.',
    cursosTabla: [
      { nombre: 'Básico Online', horas: 30, precioUSD: 300, modalidad: '3 semanas' },
      { nombre: 'Intermedio Online', horas: 30, precioUSD: 300, modalidad: '3 semanas' },
      { nombre: 'Avanzado Online', horas: 30, precioUSD: 300, modalidad: '3 semanas' },
      { nombre: 'Básico Presencial', horas: 40, precioUSD: 800, modalidad: '2 semanas' },
      { nombre: 'Intermedio Presencial', horas: 40, precioUSD: 800, modalidad: '2 semanas' },
      { nombre: 'Avanzado Presencial', horas: 40, precioUSD: 800, modalidad: '2 semanas' },
      { nombre: 'Ciclo Conversacional: Take a Break / Hablemos Español (Online)', horas: 8, precioUSD: 100, modalidad: '8 sesiones, 2×/semana' },
    ],
    horarios: [
      { turno: 'Mañana (presencial)', dias: 'Lunes a viernes', hora: '09:00 – 13:00' },
      { turno: 'Online', dias: 'Coordinado con el grupo', hora: 'Flexible' },
    ],
    temario: [
      {
        nivel: 'A1–A2 — Inicial a Elemental',
        contenidos: [
          'Comunicación básica en situaciones cotidianas',
          'Presente, pasado y futuro inmediato',
          'Vocabulario esencial y pronunciación',
          'Comprensión auditiva de textos sencillos',
        ],
      },
      {
        nivel: 'B1–B2 — Intermedio',
        contenidos: [
          'Conversación fluida en temas conocidos',
          'Redacción de textos estructurados',
          'Comprensión de medios de comunicación chilenos',
          'Expresión de opiniones y argumentación',
        ],
      },
    ],
    actividades: [
      'Sesiones diarias de conversación cultural',
      'City tour: Valparaíso y Viña del Mar',
      'Taller de gastronomía chilena',
      'Actividades sociales con comunidad estudiantil internacional UAI',
    ],
    condiciones: [
      {
        titulo: 'Requisito de ingreso',
        descripcion: 'A1 o sin conocimiento previo. Test diagnóstico antes del inicio.',
      },
      {
        titulo: 'Asistencia',
        descripcion: 'Asistencia mínima del 85% requerida por la naturaleza intensiva del programa.',
      },
      {
        titulo: 'Cancelación',
        descripcion: 'Con 45+ días: sin cargo. Con 15–44 días: cargo del 50%. Menos de 15 días: sin reembolso. Fuerza mayor evaluada individualmente. Por escrito a caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 10,
    duracion: '2–3 semanas según modalidad',
    certificado: {
      tipo: 'Certificado de Participación CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Equivalencias según institución de origen del estudiante.',
    },
    precio: {
      estandar: 'USD 300 (online · 30 hrs)',
      inSitu: 'USD 800 (presencial · 40 hrs)',
      notas: 'Ciclo conversacional: USD 100 (8 sesiones)',
    },
  },
  {
    slug: 'individual',
    nombre: 'Curso ELE a Medida (Individual)',
    descripcionBreve: 'Formación personalizada uno a uno, adaptada al nivel, ritmo y objetivos de cada participante. Disponible en campus o in-situ.',
    descripcionExtendida:
      'El Programa Individual ofrece instrucción personalizada uno a uno con un especialista CEIE. El currículo, los materiales, el horario y el ritmo se adaptan completamente al perfil del estudiante. Disponible en el campus UAI Viña del Mar o en modalidad in-situ en la sede profesional del estudiante — embajadas, oficinas corporativas o domicilio profesional.',
    objetivo:
      'Desarrollar competencias comunicativas en español a través de una formación personalizada, adaptada al nivel, ritmo de aprendizaje y objetivos académicos o profesionales de cada participante.',
    niveles: ['Todos los niveles'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'Alumnos internacionales no hispanohablante. Profesionales, investigadores, ejecutivos, empresas y funcionarios diplomáticos.',
    cursosTabla: [
      { nombre: 'Básico', horas: 20, precioUSD: 1000 },
      { nombre: 'Intermedio', horas: 30, precioUSD: 1500 },
      { nombre: 'Avanzado', horas: 40, precioUSD: 2000 },
    ],
    horarios: [
      { turno: 'Flexible', dias: 'Acordado con el estudiante', hora: 'Incluye tardes y fines de semana' },
    ],
    temario: [
      {
        nivel: 'Diseño curricular personalizado',
        contenidos: [
          'Diagnóstico inicial detallado',
          'Objetivos de aprendizaje específicos del estudiante',
          'Materiales adaptados al campo profesional',
          'Progreso medido y reportado periódicamente',
        ],
      },
    ],
    actividades: [
      'Diseño curricular completamente personalizado',
      'Materiales adaptados al campo profesional del estudiante',
      'Horario flexible — incluye tardes y fines de semana',
      'Informes de progreso en intervalos acordados',
    ],
    condiciones: [
      {
        titulo: 'Sin mínimo de horas',
        descripcion: 'No se exige un número mínimo de horas. El programa es completamente flexible.',
      },
      {
        titulo: 'Cancelación de sesión',
        descripcion: 'Cancelación con al menos 24 horas de anticipación. Sesiones no canceladas en plazo se facturan.',
      },
      {
        titulo: 'Modalidad in-situ',
        descripcion: 'La modalidad in-situ incluye gastos de desplazamiento del docente según ubicación acordada.',
      },
    ],
    grupoMaximo: 1,
    duracion: 'A medida',
    certificado: {
      tipo: 'Certificado de Estudios CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifica las horas completadas y el nivel MCER alcanzado.',
    },
    precio: {
      estandar: 'USD 1.000 (Básico · 20 hrs)',
      inSitu: 'USD 1.500 (Intermedio · 30 hrs)',
      largoplazo: 'USD 2.000 (Avanzado · 40 hrs)',
    },
    modalidades: [
      'Presencial · Campus Viña del Mar',
      'Presencial in-situ · Sede del cliente',
      'Videoconferencia [consultar disponibilidad]',
    ],
    perfilIdeal: 'Profesionales, ejecutivos, diplomáticos, investigadores y académicos.',
  },
  {
    slug: 'fines-especificos',
    nombre: 'Programa Corto Español con Fines Específicos',
    descripcionBreve: 'Español diseñado para contextos profesionales y disciplinares: salud, negocios, astronomía, rutas literarias. Programa a medida de 1 a 2 semanas.',
    descripcionExtendida:
      'Los Programas con Fines Específicos (EFE) están diseñados para organizaciones — embajadas, empresas, gobiernos regionales, universidades — que requieren formación lingüística estructurada adaptada a su campo profesional. El currículo se elabora en colaboración con la organización cliente para garantizar pertinencia con necesidades comunicativas reales.',
    objetivo:
      'Desarrollar competencias comunicativas en español aplicadas a contextos profesionales y disciplinares específicos, mediante programas diseñados según las necesidades de universidades, empresas o grupos especializados.',
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
      'Visitas a instituciones del sector relevante',
      'Conversatorios con expertos del área',
      'Simulaciones profesionales en español',
      'Materiales adaptados al contexto del cliente',
    ],
    condiciones: [
      {
        titulo: 'Modalidad',
        descripcion: 'Disponible en campus UAI Viña del Mar o in-situ en la sede de la organización cliente.',
      },
      {
        titulo: 'Mínimo de horas',
        descripcion: 'El programa tiene una duración mínima de 30 horas.',
      },
      {
        titulo: 'Contratación',
        descripcion: 'Requiere carta de la organización patrocinadora y propuesta formal del CEIE.',
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
  {
    slug: 'proyectos',
    nombre: 'Proyectos y Licitaciones',
    descripcionBreve: 'Programas corporativos a medida para empresas, organismos internacionales y grupos profesionales con diseño curricular según sector y objetivos institucionales.',
    descripcionExtendida:
      'Diseño y ejecución de programas de enseñanza de español completamente personalizados para organizaciones que participan en procesos de licitación, proyectos internacionales o requieren formación masiva. El currículo, la duración, el precio y la sede se definen en función de los requerimientos del cliente.',
    objetivo:
      'Desarrollar competencias comunicativas en español adaptadas a los requerimientos específicos de cada organización o grupo profesional, con diseño curricular a medida según sector, nivel y objetivos institucionales.',
    niveles: ['Variable'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'Empresas, organismos internacionales y grupos profesionales.',
    cursosTabla: [
      { nombre: 'Programa a medida (según proyecto)', horas: 'Variable', precioUSD: 'Variable', modalidad: 'Variable' },
    ],
    horarios: [
      { turno: 'Variable', dias: 'Coordinado con el cliente', hora: 'Según proyecto' },
    ],
    temario: [
      {
        nivel: 'Diseño a medida',
        contenidos: [
          'Levantamiento de necesidades institucionales',
          'Diseño curricular por sector y nivel',
          'Implementación con equipo docente especializado',
          'Evaluación y entrega de informes de avance',
        ],
      },
    ],
    actividades: [
      'Diseño curricular institucional personalizado',
      'Coordinación con área de RR.HH. o capacitación del cliente',
      'Informes de progreso y evaluación de impacto',
      'Posibilidad de implementación presencial o remota',
    ],
    condiciones: [
      {
        titulo: 'Proceso',
        descripcion: 'Requiere propuesta formal del CEIE, aprobada por la organización cliente. Contrato específico según proyecto.',
      },
      {
        titulo: 'Precio',
        descripcion: 'Cotización según volumen de horas, número de participantes y complejidad del diseño curricular.',
      },
    ],
    grupoMaximo: 'Variable',
    duracion: 'Variable',
    certificado: {
      tipo: 'Certificado institucional CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifica horas completadas y nivel alcanzado según objetivos del proyecto.',
    },
    precio: {
      valor: 'Cotización a medida',
      notas: 'Contactar a programascortos@uai.cl para solicitar propuesta.',
    },
    nota: 'Para proyectos corporativos, licitaciones públicas y programas de formación masiva.',
    noSubPage: true,
  },
]
