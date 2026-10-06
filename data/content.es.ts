export const NAV_ES = {
  logo: { ceie: 'CEIE', uai: 'Universidad Adolfo Ibáñez' },
  links: [
    { label: 'Sobre Nosotros',      href: '/sobre-nosotros' },
    { label: 'Equipo Docente',      href: '/equipo-docente' },
    { label: 'Programas y Cursos',  href: '/programas-y-cursos' },
    { label: 'Voces del Centro',    href: '/voces-del-centro' },
  ],
  cta: { label: 'Admisión', href: '/admision' },
}

export const FOOTER_ES = {
  col1: {
    description: 'Centro de Enseñanza Integral del Español · Universidad Adolfo Ibáñez.',
    badges: ['CNA Acreditación de Excelencia', 'Triple Crown Recognition'],
  },
  col2: {
    title: 'Navegación',
    links: [
      { label: 'Sobre Nosotros',        href: '/sobre-nosotros' },
      { label: 'Equipo Docente',        href: '/equipo-docente' },
      { label: 'Programas y Cursos',    href: '/programas-y-cursos' },
      { label: 'Voces del Centro',      href: '/voces-del-centro' },
      { label: 'Admisión',              href: '/admision' },
      { label: 'Contacto',              href: '/contacto' },
      { label: 'Convocatorias',         href: 'https://postula.uai.cl/' },
    ],
  },
  col3: {
    title: 'Programas',
    links: [
      { label: 'Programa Semestral de Español',        href: '/programas-y-cursos/semestral' },
      { label: 'Programa Intensivo de Español',         href: '/programas-y-cursos/intensivo' },
      { label: 'Español con Fines Específicos',         href: '/programas-y-cursos/fines-especificos' },
    ],
  },
  col4: {
    title: 'Contacto',
    address: 'Campus Viña del Mar · Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
  },
  legal: {
    links: [
      { label: 'Aviso Legal',                    href: '/aviso-legal' },
      { label: 'Política de Privacidad',         href: '/privacidad' },
      { label: 'Política de Cookies',            href: '/cookies' },
      { label: 'Condiciones de Contratación',    href: '/condiciones-contratacion' },
      { label: 'Derecho de Desistimiento',       href: '/desistimiento' },
    ],
    copyright: '© 2026 Universidad Adolfo Ibáñez — Centro de Enseñanza Integral del Español',
  },
}

export const HOME_ES = {
  meta: {
    title: 'CEIE UAI — Aprende español en Chile | Universidad Adolfo Ibáñez',
    description: 'Estudia español en la costa del Pacífico Sur. Tres programas alineados al Marco Común Europeo de Referencia.',
  },
  hero: {

    h1: 'Aprende español\nen el Pacífico Sur',
    subtitle: 'Centro de Enseñanza Integral del Español · Universidad Adolfo Ibáñez · Viña del Mar, Chile',
    cta1: { label: 'Ver programas', href: '#programas' },
    cta2: { label: 'Contactar', href: '/contacto' },
  },
  valueProps: {
    title: '¿Por qué estudiar español en la UAI?',
    cards: [
      {
        icon: 'GraduationCap',
        title: 'Excelencia Académica',
        text: 'Cursos alineados al Marco Común Europeo de Referencia, niveles A1–C1, con créditos académicos reconocidos y el sello formativo de las Artes Liberales UAI.',
      },
      {
        icon: 'MapPin',
        title: 'Inmersión Cultural',
        text: 'Aprende español viviendo Chile: Valparaíso, Viña del Mar, los viñedos del Valle de Casablanca. Un campus frente al Pacífico donde el idioma se practica dentro y fuera del aula.',
      },
      {
        icon: 'Laptop',
        title: 'Metodología Activa',
        text: 'Plataformas digitales institucionales, materiales contextualizados y aprendizaje orientado a entornos académicos y profesionales reales.',
      },
      {
        icon: 'Globe',
        title: 'Red Internacional',
        text: 'Una comunidad universitaria con estudiantes de más de 20 países. Organizaciones estudiantiles, talleres culturales y actividades junto a estudiantes chilenos e internacionales.',
      },
    ],
  },
  programs: {
    title: 'Programas de Español',
    subtitle: 'Tres modalidades diseñadas para perfiles académicos y profesionales distintos',
    items: [
      {
        nombre: 'Programa Semestral de Español',
        descripcion: 'Cursos de Español como lengua extranjera (niveles A1–C1), cursos electivos de temáticas específicas y Cursos del Programa CORE UAI.',
        nivel: 'A1 a C1',
        duracion: '17 semanas',
        horario: 'Lunes a viernes, 08:30 – 18:55',
        grupoMax: 'Mín. 5 personas',
        precioReferencial: 'Desde USD 950/curso',
        href: '/programas-y-cursos/semestral',
      },
      {
        nombre: 'Programa Intensivo de Español',
        descripcion: 'Español intensivo de 2 ó 4 semanas.',
        nivel: 'A1 a B2',
        duracion: '2 a 4 semanas',
        horario: 'Clases de lunes a jueves, 08:30 – 18:55 · Actividades culturales los viernes',
        grupoMax: 'Mín. 5 personas',
        precioReferencial: 'USD 900 (2 semanas) · USD 1.800 (4 semanas)',
        href: '/programas-y-cursos/intensivo',
      },
      {
        nombre: 'Español con Fines Específicos',
        descripcion: 'Programa de corta duración diseñado a medida según las necesidades, intereses y objetivos de cada persona, grupo o institución.',
        nivel: 'Según requerimiento',
        duracion: '1 a 2 semanas (a medida)',
        horario: 'Coordinado con el participante o la institución',
        grupoMax: 'Variable según convenio institucional',
        precioReferencial: 'USD 900 – 1.500',
        href: '/programas-y-cursos/fines-especificos',
      },
    ],
  },
  payment: {
    title: 'Matrícula y formas de pago',
    col1: {
      title: 'Formas de pago',
      items: [
        'Transferencia bancaria internacional (SWIFT)',
        'Tarjeta de crédito (Visa / Mastercard)',
        'Convenio institucional / carta de patrocinio',
      ],
    },
    col2: {
      title: 'Condiciones de matrícula',
      items: [
        'Pago previo al inicio del programa',
        'Reserva de cupo: 30% del valor total al momento de la inscripción',
        'Saldo: hasta 5 días hábiles antes del inicio',
      ],
    },
    col3: {
      title: 'Política de cancelación',
      items: [
        'Con 45+ días de anticipación: sin cargo',
        'Con 15–44 días: cargo del 50% del costo total',
        'Con menos de 15 días: sin reembolso',
        'Fuerza mayor: evaluada individualmente',
      ],
      link: { label: 'Ver condiciones completas', href: '/condiciones-contratacion' },
      disclaimer: 'Cancelaciones válidas solo por escrito a caroline.cortes@uai.cl con recepción conforme.',
    },
  },
  accreditation: {
    title: 'Calidad certificada',
    intro: 'La Universidad Adolfo Ibáñez cuenta con acreditaciones internacionales que avalan la calidad de su formación bajo estándares reconocidos en todo el mundo.',
    groups: [
      { faculty: 'Escuela de Negocios', name: 'Triple Corona', text: 'Una de las pocas escuelas de negocios del mundo con las tres acreditaciones internacionales más exigentes del área: AACSB, EQUIS y AMBA.', logos: ['aacsb', 'equis', 'amba'] },
      { faculty: 'Facultad de Ingeniería y Ciencias', name: 'ABET', text: 'Ingeniería Civil Informática, Ingeniería Civil e Ingeniería Civil Industrial están acreditadas por ABET, el estándar internacional para carreras de ingeniería y tecnología. La UAI es la única universidad privada no tradicional de Chile con este reconocimiento, que además facilita la homologación del título en Estados Unidos y otros países.', logos: ['abet'] },
    ],
    badges: [
      'CNA Acreditación de Excelencia',
      'Triple Crown Recognition',
    ],
  },
  testimonials: {
    title: 'Voces del Centro',
    items: [
      {
        initials: 'A.M.',
        country: 'Estados Unidos',
        program: 'Programa Semestral de Español',
        level: 'Nivel B2',
        text: '[PENDIENTE — testimonio real de estudiante]',
      },
      {
        initials: 'K.L.',
        country: 'Alemania',
        program: 'Programa Intensivo de Español',
        level: 'Nivel B1',
        text: '[PENDIENTE — testimonio real de estudiante]',
      },
      {
        initials: 'C.P.',
        country: 'Canadá',
        program: 'Español con Fines Específicos',
        level: 'Nivel B2+',
        text: '[PENDIENTE — testimonio real de estudiante]',
      },
    ],
    readMoreLink: { label: 'Ver más testimonios', href: '/voces-del-centro' },
  },
  contact: {
    title: 'Ubicación y contacto',
    address: 'Campus Viña del Mar · Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    hours: 'Lunes a viernes, 9:00 a 18:00 hrs.',
    mapPlaceholder: 'Mapa: Campus UAI Viña del Mar — Padre Hurtado 750',
  },
}

export const PROGRAMS_ES = {
  meta: {
    title: 'Programas y Cursos | CEIE UAI',
    description: 'Tres programas de español: Programa Semestral de Español, Programa Intensivo de Español y Español con Fines Específicos. Niveles MCER A1–C1. UAI Viña del Mar.',
  },
  hero: {
    h1: 'Nuestros Programas de Español',
    subtitle: 'Tres modalidades alineadas al Marco Común Europeo de Referencia (MCER) y al Plan Curricular del Instituto Cervantes.',
  },
  intro: {
    p1: 'Todos los programas del CEIE están diseñados bajo el enfoque comunicativo establecido por el Instituto Cervantes. Cada nivel corresponde a un descriptor del MCER, desde A1 (inicial) hasta C1 (avanzado).',
    p2: 'Los estudiantes reciben un certificado emitido por la Universidad Adolfo Ibáñez al completar cada programa. Las equivalencias académicas se establecen mediante los convenios de cooperación internacional de la UAI.',
  },
}

export const ABOUT_ES = {
  meta: {
    title: 'Sobre Nosotros | CEIE UAI',
    description: 'Conozca el CEIE: misión, visión, valores, equipo e instalaciones en el campus Viña del Mar de la UAI.',
  },
  hero: {
    h1: 'Sobre el CEIE',
    subtitle: 'El Centro de Enseñanza Integral del Español UAI es una unidad académica de la Universidad Adolfo Ibáñez, articulada entre la Facultad de Artes Liberales y la Dirección de Relaciones Internacionales. Se concibe como un espacio de enseñanza del español como lengua extranjera, de vinculación con la comunidad y de proyección internacional, fundado en la excelencia académica y en el sello distintivo de las Artes Liberales.',
  },
  sections: {
    mision: {
      title: 'Misión, visión y valores',
      mision: 'Proporcionar a nuestros estudiantes los conocimientos lingüísticos e interculturales esenciales para una formación personal, académica y profesional de calidad, combinando la enseñanza del español con la experiencia formativa de las Artes Liberales. Creamos un entorno académico multilingüe que fomenta el desarrollo de los estudiantes como agentes sociales, aprendientes autónomos y hablantes interculturales.',
      vision: 'Consolidarnos como un centro competitivo en la enseñanza del español, comprometido con la excelencia académica y la calidad en el servicio. Aspiramos a destacar por nuestra mejora continua y por nuestro rol relevante dentro de una comunidad universitaria referente a nivel nacional e internacional, con un enfoque diferenciador en las Artes Liberales.',
      valores: 'Los valores institucionales que guían al Centro incluyen el sentido de pertenencia, la ética profesional y el respeto, la tolerancia a la diversidad, una actitud abierta a la innovación educativa, y el liderazgo, la iniciativa y la profesionalidad en todas sus actividades.',
    },
    espacios: {
      title: 'Nuestros Espacios',
      spaces: [
        {
          nombre: 'Aulas de español',
          descripcion: 'Salas equipadas con tecnología audiovisual, distribución flexible y capacidad para hasta 24 estudiantes. Diseñadas para metodología activo-participativa.',
          alt: 'Aula del Centro de Enseñanza Integral del Español de la UAI en Viña del Mar, con sillas móviles, pizarrón y proyector, capacidad para 24 estudiantes.',
        },
        {
          nombre: 'Biblioteca UAI',
          descripcion: 'Colección en español e inglés con acceso para estudiantes internacionales. Recursos de literatura, humanidades y ciencias sociales. Salas de lectura silenciosa también están disponibles.',
          alt: 'Biblioteca Universidad Adolfo Ibáñez campus Viña del Mar, con estanterías de libros y zona de lectura individual.',
        },
        {
          nombre: 'Salas de estudio',
          descripcion: 'Espacios de trabajo grupal e individual en el edificio B del campus. Acceso previa reserva a través de WebC.',
          alt: 'Estudiantes trabajando frente a una pizarra en una sala de estudio del campus UAI Viña del Mar.',
        },
        {
          nombre: 'Gimnasio y actividades deportivas',
          descripcion: 'Acceso a las instalaciones deportivas del Campus Viña del Mar, que incluyen gimnasio, sala de musculación, espacios para entrenamiento y actividades recreativas. Los estudiantes también pueden participar en talleres y actividades deportivas, sujetos a disponibilidad.',
          alt: 'Instalaciones deportivas del campus UAI Viña del Mar, incluyendo gimnasio y espacios de entrenamiento.',
        },
        {
          nombre: 'Actividades culturales',
          descripcion: 'Recorridos por el patrimonio de Valparaíso y conversatorios con académicos UAI, incluidos en todos los programas. Las excursiones opcionales, como visitas a viñas del Valle de Casablanca, pueden tener un costo adicional.',
          alt: 'Estudiantes internacionales del CEIE en actividades culturales y académicas en el campus UAI Viña del Mar.',
        },
        {
          nombre: 'Entorno — Viña del Mar',
          descripcion: 'El campus de la Universidad Adolfo Ibáñez se encuentra en un entorno privilegiado, rodeado de naturaleza y con vistas al océano Pacífico. Está ubicado a 15 minutos de Valparaíso y a aproximadamente 1,5 horas de Santiago, ofreciendo a los estudiantes un entorno universitario tranquilo y conectado con algunos de los principales atractivos culturales y turísticos de la región.',
          alt: 'Vista del campus UAI Viña del Mar con acceso al Pacífico, ciudad de Viña del Mar de fondo.',
        },
      ],
    },
  },
}

export const ADMISSIONS_ES = {
  meta: {
    title: 'Admisión | CEIE UAI',
    description: 'Postula a un programa de español del CEIE. Proceso simple, fechas de inicio flexibles.',
  },
  hero: {
    h1: 'Admisión',
    subtitle: 'Postula en minutos. Nuestro equipo se pondrá en contacto en un plazo de 48 horas hábiles.',
  },
  steps: [
    { number: 1, title: 'Solicitud online',      desc: 'Completa el formulario en esta página con tus datos y el programa de interés.' },
    { number: 2, title: 'Evaluación de nivel',   desc: 'Te enviamos un test diagnóstico por email. Tiene una duración aproximada de 20 minutos.' },
    { number: 3, title: 'Confirmación de cupo',  desc: 'Confirmamos tu inscripción, grupo de nivel y fecha de inicio por email.' },
    { number: 4, title: 'Pago de matrícula',     desc: '30% del valor total del programa reserva tu cupo.' },
    { number: 5, title: 'Inicio del programa',   desc: 'Sesión de bienvenida y orientación el primer día.' },
  ],
  requirements: {
    title: 'Requisitos de admisión',
    table: {
      headers: ['Programa', 'Nivel requerido', 'Documentos'],
      rows: [
        ['Programa Semestral de Español',       'A1 (sin conocimiento previo requerido)', 'Pasaporte / cédula. Foto carnet.'],
        ['Programa Intensivo de Español',       'A1 (sin conocimiento previo requerido)', 'Pasaporte / cédula. Foto carnet.'],
        ['Español con Fines Específicos: programas grupales para instituciones', 'Según programa', 'Carta de la organización patrocinadora.'],
        ['Español con Fines Específicos: cursos individuales personalizados', 'Sin requisito', 'Pasaporte / cédula. Objetivos de aprendizaje.'],
      ],
    },
  },
  form: {
    title: 'Formulario de solicitud',
    fields: {
      name:       'Nombre completo',
      country:    'País de residencia',
      email:      'Correo electrónico',
      phone:      'Teléfono (opcional)',
      program:    'Programa de interés',
      level:      'Nivel aproximado de español',
      levelOpts:  ['Ninguno', 'A1', 'A2', 'B1', 'B2', 'C1', 'No sé'],
      startDate:  'Fecha de inicio deseada',
      message:    'Mensaje / contexto adicional',
      privacy:    'Acepto la política de privacidad',
      submit:     'Enviar solicitud',
      success:    'Gracias — su solicitud ha sido recibida. Nos pondremos en contacto en un plazo de 48 horas hábiles.',
    },
  },
  cohorts: {
    title: 'Próximas cohortes',
    intro: 'Los inicios de cada programa siguen la siguiente estructura:',
    rows: [
      {
        program: 'Programa Semestral de Español / Programa Intensivo de Español',
        schedule: 'Según el calendario académico de Chile',
        detail: 'Hemisferio Sur — 1.er semestre: marzo – julio · 2.o semestre: agosto – diciembre',
      },
      {
        program: 'Español con Fines Específicos: grupal',
        schedule: 'Fecha a coordinar entre las partes',
        detail: '',
      },
      {
        program: 'Español con Fines Específicos: individual',
        schedule: 'Matrícula continua',
        detail: 'Inicio inmediato disponible previa confirmación',
      },
    ] as { program: string; schedule: string; detail: string }[],
  },
}

export const VOICES_ES = {
  meta: {
    title: 'Voces del Centro | CEIE UAI',
    description: 'Lee las experiencias de estudiantes que han estudiado español en el CEIE UAI.',
  },
  hero: {
    h1: 'Voces del Centro',
    subtitle: 'Detrás de cada programa hay personas: docentes que enseñan español como una experiencia de vida y estudiantes que llegan desde distintos rincones del mundo para vivir la cultura chilena. Estas son sus voces.',
  },
}

export const CONTACT_ES = {
  meta: {
    title: 'Contacto | CEIE UAI',
    description: 'Contacte al equipo del CEIE para información sobre los programas de español en la UAI.',
  },
  hero: { h1: 'Contacto' },
  form: {
    title: 'Envíenos un mensaje',
    fields: {
      name:         'Nombre completo',
      organization: 'Organización (opcional)',
      country:      'País',
      email:        'Correo electrónico',
      phone:        'Teléfono (opcional)',
      program:      'Programa de interés',
      message:      'Mensaje',
      submit:       'Enviar mensaje',
      success:      'Mensaje recibido. Responderemos en un plazo de 2 días hábiles.',
    },
  },
  info: {
    title: 'Información de contacto',
    campus: 'Campus Viña del Mar',
    address: 'Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    hours: 'Lunes a viernes · 9:00 – 18:00 hrs.',
  },
}
