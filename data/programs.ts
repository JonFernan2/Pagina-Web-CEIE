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

export interface ProgramData {
  slug: string
  nombre: string
  descripcionBreve: string
  descripcionExtendida: string
  niveles: string[]
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
    descripcionBreve: 'Progresión estructurada por niveles MCER en 15 a 18 semanas.',
    descripcionExtendida:
      'El Programa Semestral está diseñado para estudiantes que desean desarrollar su español de forma sistemática durante un período extendido. Las clases siguen el Plan Curricular del Instituto Cervantes y se imparten en grupos reducidos de no más de 12 estudiantes, garantizando atención individualizada y práctica comunicativa real.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
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
        titulo: 'Cancelación',
        descripcion: 'Con 30+ días: reembolso 80%. Con 15–29 días: 50%. Con menos de 15 días: sin reembolso.',
      },
    ],
    grupoMaximo: 12,
    duracion: '15 a 18 semanas (según nivel)',
    certificado: {
      tipo: 'Certificado de Estudios CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento:
        'Programa alineado al MCER. Equivalencias académicas según convenios UAI.',
    },
    precio: {
      valor: '[PENDIENTE — confirmar con UAI]',
      moneda: 'USD',
      notas: 'Incluye material didáctico',
    },
  },
  {
    slug: 'intensivo',
    nombre: 'Programa Intensivo de Español',
    descripcionBreve: 'Inmersión total en 4 a 8 semanas. Progreso rápido y estructurado.',
    descripcionExtendida:
      'El Programa Intensivo ofrece una inmersión acelerada para estudiantes que necesitan alcanzar un nivel comunicativo en poco tiempo. Clases diarias de 4 horas, combinadas con actividades culturales, permiten un avance significativo de hasta dos niveles MCER en un solo período intensivo.',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    horarios: [
      { turno: 'Mañana', dias: 'Lunes a viernes', hora: '09:00 – 13:00' },
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
        descripcion: 'Con 30+ días: reembolso 80%. Con 15–29 días: 50%. Con menos de 15 días: sin reembolso.',
      },
    ],
    grupoMaximo: 10,
    duracion: '4 a 8 semanas',
    certificado: {
      tipo: 'Certificado de Participación CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Equivalencias según institución de origen del estudiante.',
    },
    precio: {
      valor: '[PENDIENTE — confirmar con UAI]',
      moneda: 'USD',
    },
  },
  {
    slug: 'fines-especificos',
    nombre: 'Programas con Fines Específicos',
    descripcionBreve: 'Español diseñado para contextos profesionales, diplomáticos e institucionales.',
    descripcionExtendida:
      'Los Programas con Fines Específicos (EFE) están diseñados para organizaciones — embajadas, empresas, gobiernos regionales, universidades — que requieren formación lingüística estructurada adaptada a su campo profesional. El currículo se elabora en colaboración con la organización cliente para garantizar pertinencia con necesidades comunicativas reales.',
    niveles: ['Según requerimiento institucional'],
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
        descripcion: 'El programa tiene una duración mínima de 40 horas.',
      },
      {
        titulo: 'Contratación',
        descripcion: 'Requiere carta de la organización patrocinadora y propuesta formal del CEIE.',
      },
    ],
    grupoMaximo: 'Variable según convenio institucional',
    duracion: 'Mínimo 40 horas. Duración según plan acordado.',
    certificado: {
      tipo: 'Certificado de Formación Especializada CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento:
        'Certifica horas completadas y nivel MCER alcanzado en el área de especialización.',
    },
    precio: {
      valor: 'Cotización institucional',
      notas: 'Solicitar propuesta formal a ceie@uai.cl',
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
    slug: 'individual',
    nombre: 'Programa Individual — ELE a Medida',
    descripcionBreve: 'Clases individuales adaptadas a su horario, nivel y objetivos profesionales.',
    descripcionExtendida:
      'El Programa Individual ofrece instrucción personalizada uno a uno con un especialista CEIE. El currículo, los materiales, el horario y el ritmo se adaptan completamente al perfil del estudiante. Disponible en el campus UAI Viña del Mar o en modalidad in-situ en la sede profesional del estudiante — embajadas, oficinas corporativas o domicilio profesional.',
    niveles: ['Todos los niveles'],
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
    duracion: 'Flexible. Sin mínimo de horas establecido.',
    certificado: {
      tipo: 'Certificado de Estudios CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento:
        'Certifica las horas completadas y el nivel MCER alcanzado.',
    },
    precio: {
      estandar: 'USD 50/hora (campus UAI)',
      inSitu: 'USD 58/hora (modalidad in-situ: embajadas, empresas, domicilio profesional)',
      largoplazo: 'Desde USD 38/hora (compromisos de largo plazo, sujeto a acuerdo)',
    },
    modalidades: [
      'Presencial · Campus Viña del Mar',
      'Presencial in-situ · Sede del cliente',
      'Videoconferencia [consultar disponibilidad]',
    ],
    perfilIdeal: 'Profesionales, ejecutivos, diplomáticos, investigadores y académicos.',
  },
]
