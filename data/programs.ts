export interface HorarioEntry {
  turno: string
  dias: string
  hora: string
}

export interface TemarioItem {
  nivel: string
  contenidos: string[]
  descripcion?: string[]
  ficha?: { label: string; value: string }[]
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
  estandarLabel?: string
  inSitu?: string
  inSituLabel?: string
  resumen?: string
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
  vistaSimple?: boolean
  // Course group (subcategoria) under which the level syllabus is shown; enables the grouped study plan.
  temarioGrupo?: string
  horarioClases?: string
  incluye?: { titulo: string; intro: string; items: string[] }
  areasNota?: string
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
  participantes: string
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
    descripcionBreve: 'Cursos de Español como lengua extranjera (niveles A1–C1), cursos electivos de temáticas específicas y Cursos del Programa CORE UAI.',
    descripcionExtendida:
      'El Programa Semestral de Español está diseñado para desarrollar progresivamente las competencias lingüísticas, académicas y culturales en español de estudiantes internacionales, facilitando su integración a la experiencia universitaria. Los cursos están alineados con el Marco Común Europeo de Referencia para las Lenguas (MCER) y siguen los estándares del Plan Curricular del Instituto Cervantes (PCIC). Se ofrecen desde el nivel A1 hasta el C1 y cuentan con créditos académicos.\n\nA diferencia de otros programas de español en Chile, el Programa Semestral UAI integra la enseñanza del idioma con el modelo de Artes Liberales que distingue a nuestra universidad. Los estudiantes no solo aprenden español: desarrollan pensamiento crítico, capacidad argumentativa y una comprensión profunda de la cultura chilena y latinoamericana a través de una metodología activo-participativa inspirada en el Core Curriculum de Columbia University. Además, los estudiantes tienen la oportunidad de integrarse a la comunidad UAI, participando en organizaciones estudiantiles, talleres extraprogramáticos, eventos culturales y actividades deportivas junto a estudiantes chilenos e internacionales de más de 20 países.',
    objetivo:
      'Desarrollar progresivamente las competencias lingüísticas, académicas y culturales en español de estudiantes internacionales, facilitando su integración a la experiencia universitaria.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'Alumnos de pregrado internacional.',
    cursosTabla: [
      { nombre: 'Español Básico A1/A2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Español como lengua extranjera (ELE)', descripcion: 'A través de este curso, se fomenta el desarrollo de las competencias comunicativas en español tanto en la expresión oral como escrita considerando el uso de herramientas necesarias para comunicarse en contextos formales e informales, en ámbitos personales como profesionales. El uso del lenguaje en contexto permitirá el logro de una comunicación clara y efectiva.' },
      { nombre: 'Español Intermedio: Comunicación B1/B2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Español como lengua extranjera (ELE)', descripcion: 'Consolidar los aspectos comunicativos del uso de español es el objetivo de este curso que, a través de la interacción constante en contextos formales como informales, fomenta la capacidad de expresarse en el uso de este idioma en términos orales como escritos, claves para insertarse de manera efectiva en la sociedad.' },
      { nombre: 'Español Intermedio: Gramática B1–B2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Español como lengua extranjera (ELE)', descripcion: 'Este curso está dirigido a estudiantes de nivel intermedio que buscan consolidar y profundizar su dominio gramatical del español. A través del análisis y la práctica en contexto, los estudiantes trabajan estructuras complejas que les permiten expresarse con mayor precisión y corrección en situaciones comunicativas diversas, tanto orales como escritas.' },
      { nombre: 'Español Avanzado: Cultura Chilena C1', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Español como lengua extranjera (ELE)', descripcion: 'Este curso está diseñado para estudiantes de nivel avanzado que desean profundizar su competencia lingüística a través del estudio de la cultura chilena. Mediante textos, materiales audiovisuales y actividades comunicativas, los estudiantes analizan aspectos sociales, históricos y culturales de Chile, fortaleciendo su comprensión crítica y su capacidad de expresión en español.' },
      { nombre: 'Español Avanzado: Gramática C1', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Español como lengua extranjera (ELE)', descripcion: 'A través de este curso, se profundiza el dominio del español mediante el análisis y uso consciente de estructuras gramaticales complejas, propias de contextos académicos, profesionales y culturales. El trabajo con la lengua se orienta a mejorar la precisión, la coherencia y la adecuación discursiva, favoreciendo una comunicación clara, matizada y eficaz en situaciones de alta exigencia comunicativa.' },
      { nombre: 'Fonética del Idioma Español', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Español como lengua extranjera (ELE)', descripcion: 'Este curso introduce a los estudiantes en el sistema fonético y fonológico del español, con énfasis en la pronunciación, la entonación y el ritmo. A través de ejercicios prácticos de percepción y producción oral, los participantes desarrollan una pronunciación más clara y comprensible en distintos contextos comunicativos.' },
      { nombre: 'Español Profesional para Negocios y Mercados Globales (B1/B2)', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticas específicas', descripcion: 'Este curso está orientado a estudiantes que necesitan utilizar el español en contextos profesionales vinculados al ámbito de los negocios. Se trabajan situaciones comunicativas propias del mundo empresarial, como reuniones, presentaciones y negociaciones, junto con el vocabulario y las estructuras lingüísticas necesarias para una comunicación eficaz y adecuada. Se promueve el aprendizaje del español en instancias comunicativas situadas a través de la asistencia a charlas, eventos y empresas centradas en el mundo de los negocios.' },
      { nombre: 'Español para la Salud y Comunicación Médica (B1/B2)', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticas específicas', descripcion: 'Este curso está dirigido a estudiantes o profesionales que requieren el español para interactuar en contextos del ámbito de la salud. A través de situaciones comunicativas reales, se desarrollan habilidades lingüísticas para la atención de pacientes, el trabajo en equipos de salud y la comprensión de textos especializados, promoviendo una comunicación clara, empática y pertinente.' },
      { nombre: 'Vivir para Contarla: Literatura Latinoamericana', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticas específicas', descripcion: 'Este curso explora el papel de la memoria, la nostalgia y la identidad en la literatura latinoamericana. A través de la lectura y análisis de obras representativas de autores como Gabriel García Márquez, los estudiantes descubrirán cómo los escritores de la región transforman los recuerdos y las experiencias personales en relatos que reflejan historias individuales y procesos culturales colectivos.' },
      { nombre: 'Temeridad Cinematográfica: Chile a través del Documental', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticas específicas', descripcion: 'Este curso ofrece una introducción al cine documental chileno como herramienta para comprender la historia, la memoria y los procesos sociales del país. A través del análisis de obras fundamentales y de destacados realizadores, los estudiantes explorarán cómo el documental ha contribuido a preservar la memoria colectiva y reflexionar sobre acontecimientos históricos clave.' },
      { nombre: 'Core: Arte y Humanidades', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Cursos Core UAI', descripcion: 'Este curso propone un ejercicio de análisis crítico y observación directa de obras fundamentales de arquitectura, pintura y escultura. Los estudiantes se enfrentan a estas piezas para extraer información relevante a partir de la estructura formal y el contexto de creación, desde la descripción técnica hasta la interpretación iconográfica y simbólica, complementando la experiencia con visitas a monumentos y exposiciones.' },
      { nombre: 'Core: Ciencias', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Cursos Core UAI', descripcion: 'La asignatura aborda las grandes interrogantes de la física y la biología contemporánea, utilizando la ciencia como herramienta para potenciar el razonamiento lógico. El curso busca que el alumno aprenda a discernir el peso de las teorías y el respaldo de las pruebas disponibles, cultivando una dimensión crítica capaz de construir argumentos sólidos y fundamentados en el rigor científico.' },
      { nombre: 'Core: Escritura Argumentativa', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Cursos Core UAI', descripcion: 'Bajo la premisa de "aprender a escribir escribiendo", este curso está diseñado para transformar el pensamiento en textos ensayísticos eficaces. El trabajo se centra en la investigación bibliográfica y el dominio de recursos persuasivos, exigiendo al estudiante un proceso constante de edición y refinamiento para lograr autonomía expresiva en cualquier entorno profesional.' },
      { nombre: 'Core: Ética', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Cursos Core UAI', descripcion: 'Este curso profundiza en la dimensión moral de la existencia humana, enfocándose en la responsabilidad individual frente a la realidad. A través de cuestionamientos sobre la justicia de las acciones y la búsqueda de una vida buena, los estudiantes aprenden a analizar, evaluar y justificar sus decisiones cotidianas y profesionales, promoviendo la autonomía intelectual y la integridad como ejes del ejercicio profesional.' },
    ],
    horarioClases: 'Lunes a viernes, 08:30 – 18:55',
    horarios: [
      { turno: 'Clases', dias: 'Lunes a viernes', hora: '08:30 – 18:55' },
    ],
    temarioGrupo: 'Español como lengua extranjera (ELE)',
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
        titulo: 'Apertura de cursos',
        descripcion: 'La apertura de cada curso está sujeta a un mínimo de cinco estudiantes matriculados por nivel.',
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
    participantes: '5 personas',
    duracion: '17 semanas',
    certificado: {
      tipo: 'Certificado de Concentración de Notas',
      emite: 'Universidad Adolfo Ibáñez (a través del CEIE)',
      reconocimiento: 'Programa alineado al MCER. Equivalencias académicas según convenios UAI.',
    },
    precio: {
      estandarLabel: 'Cursos de Español (ELE)',
      estandar: 'USD 950 por curso',
      inSituLabel: 'Cursos temáticos y Core',
      inSitu: 'USD 1.188 por curso',
      notas: 'Paquete especial 5 cursos: USD 4.750',
    },
  },
  {
    slug: 'intensivo',
    nombre: 'Programa Intensivo de Español',
    descripcionBreve: 'Español intensivo de 2 ó 4 semanas.',
    descripcionExtendida:
      'El Programa Intensivo de Español está diseñado para estudiantes internacionales que buscan desarrollar sus competencias en español en un período breve, sin necesidad de permanecer un semestre completo en Chile. El programa combina una formación intensiva en el idioma con experiencias de inmersión cultural, favoreciendo un aprendizaje práctico y significativo en un contexto hispanohablante.\n\nLos cursos están alineados con el Marco Común Europeo de Referencia para las Lenguas (MCER) y siguen los estándares del Plan Curricular del Instituto Cervantes (PCIC). El programa permite avanzar en el dominio del español mediante una experiencia concentrada de aprendizaje lingüístico y cultural.',
    objetivo:
      'Desarrollar las competencias en español mediante una experiencia intensiva combinada de formación lingüística e inmersión cultural, adaptada al nivel y objetivos de cada participante.',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'Estudiantes internacionales que buscan desarrollar sus competencias en español en un período breve.',
    cursosTabla: [
      { nombre: 'Gramática y Estructuras Comunicativas', horas: 22, precioUSD: 900, creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 2 semanas', descripcion: 'Curso intensivo orientado al desarrollo de las estructuras gramaticales fundamentales del español. A través de una metodología activa y aplicada, los estudiantes adquieren las herramientas necesarias para comprender y utilizar las principales estructuras del idioma en situaciones comunicativas cotidianas. El curso aborda contenidos gramaticales esenciales, integrando vocabulario, comprensión y producción oral y escrita, con actividades prácticas que permiten aplicar los contenidos en contextos reales de comunicación. El formato intensivo favorece la consolidación progresiva de los aprendizajes y proporciona una base sólida para continuar avanzando en el dominio del español.' },
      { nombre: 'Comunicación y Cultura Chilena', horas: 22, precioUSD: 900, creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 2 semanas', descripcion: 'Curso intensivo orientado al desarrollo de las competencias comunicativas básicas en español, integrando el aprendizaje del idioma con una aproximación a la cultura chilena y latinoamericana. Los estudiantes desarrollan herramientas para comunicarse de manera simple en situaciones cotidianas, tanto de forma oral como escrita. A través de actividades prácticas y experiencias de inmersión, los estudiantes tienen la oportunidad de utilizar el español en contextos reales, mientras exploran aspectos de la vida cotidiana, la sociedad y la cultura chilena. El curso incorpora actividades culturales en Viña del Mar y Valparaíso, promoviendo la reflexión intercultural y una comprensión más cercana del contexto en el que se desarrolla su experiencia de aprendizaje.' },
      { nombre: 'Gramática y Estructuras Comunicativas', horas: 40, precioUSD: 1800, creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 4 semanas', descripcion: 'Curso intensivo orientado al desarrollo de las estructuras gramaticales fundamentales del español. A través de una metodología activa y aplicada, los estudiantes adquieren las herramientas necesarias para comprender y utilizar las principales estructuras del idioma en situaciones comunicativas cotidianas. El curso aborda contenidos gramaticales esenciales, integrando vocabulario, comprensión y producción oral y escrita, con actividades prácticas que permiten aplicar los contenidos en contextos reales de comunicación. El formato intensivo favorece la consolidación progresiva de los aprendizajes y proporciona una base sólida para continuar avanzando en el dominio del español.' },
      { nombre: 'Comunicación y Cultura Chilena', horas: 40, precioUSD: 1800, creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 4 semanas', descripcion: 'Curso intensivo orientado al desarrollo de las competencias comunicativas básicas en español, integrando el aprendizaje del idioma con una aproximación a la cultura chilena y latinoamericana. Los estudiantes desarrollan herramientas para comunicarse de manera simple en situaciones cotidianas, tanto de forma oral como escrita. A través de actividades prácticas y experiencias de inmersión, los estudiantes tienen la oportunidad de utilizar el español en contextos reales, mientras exploran aspectos de la vida cotidiana, la sociedad y la cultura chilena. El curso incorpora actividades culturales en Viña del Mar y Valparaíso, promoviendo la reflexión intercultural y una comprensión más cercana del contexto en el que se desarrolla su experiencia de aprendizaje.' },
    ],
    horarioClases: 'Lunes a jueves, 08:30 – 18:55 · Actividades culturales los viernes',
    horarios: [
      { turno: 'Clases', dias: 'Lunes a jueves', hora: '08:30 – 18:55' },
      { turno: 'Actividades culturales', dias: 'Viernes', hora: 'Según programa' },
    ],
    temario: [
      {
        nivel: 'Gramática y Estructuras Comunicativas',
        descripcion: [
          'Curso intensivo orientado al desarrollo de las estructuras gramaticales fundamentales del español. A través de una metodología activa y aplicada, los estudiantes adquieren las herramientas necesarias para comprender y utilizar las principales estructuras del idioma en situaciones comunicativas cotidianas.',
          'El curso aborda contenidos gramaticales esenciales, integrando vocabulario, comprensión y producción oral y escrita, con actividades prácticas que permiten aplicar los contenidos en contextos reales de comunicación. El formato intensivo favorece la consolidación progresiva de los aprendizajes y proporciona una base sólida para continuar avanzando en el dominio del español.',
        ],
        ficha: [{ label: 'Horas', value: '22 h (2 semanas) · 40 h (4 semanas)' }, { label: 'Créditos', value: '2 (2 semanas) · 4 (4 semanas)' }, { label: 'Duración', value: '2 o 4 semanas' }, { label: 'N° mínimo de estudiantes', value: '5' }, { label: 'N° máximo de estudiantes', value: '15' }, { label: 'Campus', value: 'Viña del Mar' }, { label: 'Precio', value: '900 USD (2 semanas) · 1.800 USD (4 semanas)' }],
        contenidos: [],
      },
      {
        nivel: 'Comunicación y Cultura Chilena',
        descripcion: [
          'Curso intensivo orientado al desarrollo de las competencias comunicativas básicas en español, integrando el aprendizaje del idioma con una aproximación a la cultura chilena y latinoamericana. Los estudiantes desarrollan herramientas para comunicarse de manera simple en situaciones cotidianas, tanto de forma oral como escrita.',
          'A través de actividades prácticas y experiencias de inmersión, los estudiantes tienen la oportunidad de utilizar el español en contextos reales, mientras exploran aspectos de la vida cotidiana, la sociedad y la cultura chilena. El curso incorpora actividades culturales en Viña del Mar y Valparaíso, promoviendo la reflexión intercultural y una comprensión más cercana del contexto en el que se desarrolla su experiencia de aprendizaje.',
        ],
        ficha: [{ label: 'Horas', value: '22 h (2 semanas) · 40 h (4 semanas)' }, { label: 'Créditos', value: '2 (2 semanas) · 4 (4 semanas)' }, { label: 'Duración', value: '2 o 4 semanas' }, { label: 'N° mínimo de estudiantes', value: '5' }, { label: 'N° máximo de estudiantes', value: '15' }, { label: 'Campus', value: 'Viña del Mar' }, { label: 'Precio', value: '900 USD (2 semanas) · 1.800 USD (4 semanas)' }],
        contenidos: [],
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
        titulo: 'Apertura de cursos',
        descripcion: 'La apertura de cada curso está sujeta a un mínimo de cinco estudiantes matriculados por nivel.',
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
    participantes: '5 personas',
    duracion: '2 a 4 semanas',
    certificado: {
      tipo: 'Certificado de Concentración de Notas',
      emite: 'Universidad Adolfo Ibáñez (a través del CEIE)',
      reconocimiento: 'Certifica las horas completadas y el nivel MCER alcanzado.',
    },
    precio: {
      resumen: 'Desde USD 900',
      estandarLabel: 'Intensivo 2 semanas (por curso)',
      estandar: 'USD 900',
      inSituLabel: 'Intensivo 4 semanas (por curso)',
      inSitu: 'USD 1.800',
    },
    modalidades: [
      'Presencial · Campus Viña del Mar',
    ],
    perfilIdeal: 'Estudiantes internacionales que buscan desarrollar sus competencias en español en un período breve.',
  },
  {
    slug: 'fines-especificos',
    vistaSimple: true,
    incluye: {
      titulo: '¿Qué incluyen nuestros programas?',
      intro: 'Los programas del CEIE se diseñan de acuerdo con las características, objetivos y modalidad de cada experiencia. Dependiendo del tipo de programa, individual, grupal o institucional y de sus requerimientos específicos, pueden incluir:',
      items: [
        'Diseño curricular adaptado al nivel, perfil y objetivos de aprendizaje de los participantes.',
        'Docentes especializados en la enseñanza del español y, cuando corresponda, en el área temática del programa.',
        'Materiales didácticos seleccionados o desarrollados de acuerdo con los contenidos y objetivos del curso.',
        'Acompañamiento y coordinación durante el desarrollo del programa.',
        'Actividades culturales y experiencias de inmersión, según la modalidad y características del programa.',
        'Visitas académicas, profesionales o culturales, cuando sean pertinentes a los objetivos del programa.',
        'Servicios de apoyo logístico, como alojamiento y transporte, para programas presenciales que así lo requieran.',
        'Certificado de participación o aprobación, según las características del programa.',
      ],
    },
    areasNota: 'Las siguientes áreas son ejemplos de especializaciones que pueden seleccionarse previo acuerdo entre ambas partes.',
    nombre: 'Español con Fines Específicos',
    descripcionBreve: 'Programa de corta duración diseñado a medida según las necesidades, intereses y objetivos de cada persona, grupo o institución.',
    descripcionExtendida:
      'El Español con Fines Específicos es un programa de corta duración diseñado a medida de acuerdo con las necesidades, intereses y objetivos específicos de cada persona, grupo o institución. Su propósito es fortalecer las competencias comunicativas en español en ámbitos académicos, profesionales o disciplinares, mediante contenidos y actividades adaptados al perfil y nivel lingüístico de los participantes.\n\nEl programa combina el desarrollo de vocabulario especializado, funciones comunicativas y recursos lingüísticos relevantes para el área de interés, con actividades prácticas orientadas al uso del español en situaciones y contextos propios de cada ámbito. La metodología y los contenidos se definen en función de los objetivos del programa, pudiendo incorporar clases de español, talleres, actividades aplicadas y experiencias culturales o profesionales.',
    objetivo:
      'Fortalecer las competencias comunicativas en español en ámbitos académicos, profesionales o disciplinares, mediante programas diseñados a medida según las necesidades de cada persona, grupo o institución.',
    niveles: ['Según requerimiento institucional'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'Alumnos LATAM (pregrado, posgrado), ejecutivos, empresas, organismos internacionales y grupos profesionales.',
    cursosTabla: [
      { nombre: 'Cursos individuales personalizados', horas: 'Flexible', precioUSD: 'A consultar', modalidad: 'Presencial u online', descripcion: 'Programa de español diseñado de acuerdo con el nivel, objetivos, intereses y disponibilidad de cada participante. El contenido y ritmo de aprendizaje se adaptan a sus necesidades específicas, permitiendo trabajar competencias generales del idioma o profundizar en ámbitos académicos, profesionales o de interés particular. Las clases se desarrollan con un enfoque comunicativo y personalizado, combinando el desarrollo de las competencias lingüísticas con actividades y materiales seleccionados especialmente para cada participante. El programa puede adaptarse en duración, intensidad, modalidad y contenidos.' },
      { nombre: 'Programas grupales para instituciones', horas: 'Flexible', precioUSD: 'A consultar', modalidad: 'Presencial u online', descripcion: 'Programas de español diseñados a medida para universidades, instituciones, empresas u otros grupos, de acuerdo con el perfil de los participantes y los objetivos académicos, profesionales o culturales definidos para cada experiencia. Los programas pueden combinar clases de español con contenidos especializados, actividades culturales, experiencias de inmersión y visitas académicas o profesionales. El diseño curricular, la duración, intensidad y modalidad se establecen en conjunto con la institución solicitante.' },
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
    participantes: 'Variable según convenio institucional',
    duracion: '1 a 2 semanas (a medida)',
    certificado: {
      tipo: 'Certificado de Formación Especializada CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifica horas completadas y nivel MCER alcanzado en el área de especialización.',
    },
    precio: {
      estandarLabel: 'Según duración y modalidad',
      estandar: 'USD 900 – 1.500',
      notas: 'Solicitar propuesta formal a programascortos@uai.cl',
    },
    submodalidades: [
      'Cursos individuales personalizados',
      'Programas grupales para instituciones',
    ],
    nota: 'Diseñados para organizaciones: embajadas, empresas, universidades socias, gobiernos regionales.',
  },
]
