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
    description: 'Centro de Enseñanza Integral del Español. Proceso de acreditación SACIC · Instituto Cervantes.',
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
    ],
  },
  col3: {
    title: 'Programas',
    links: [
      { label: 'Programa Semestral',        href: '/programas-y-cursos/semestral' },
      { label: 'Programa Intensivo',        href: '/programas-y-cursos/intensivo' },
      { label: 'Fines Específicos',         href: '/programas-y-cursos/fines-especificos' },
      { label: 'Programa Individual',       href: '/programas-y-cursos/individual' },
    ],
  },
  col4: {
    title: 'Contacto',
    address: 'Campus Viña del Mar · Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    social: ['@uai.internacional', '@artesliberalesuai'],
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
    description: 'Estudia español en la costa del Pacífico Sur. Cuatro programas alineados al Marco Común Europeo de Referencia. Proceso de acreditación SACIC · Instituto Cervantes.',
  },
  hero: {
    badge: 'PROCESO DE ACREDITACIÓN SACIC · INSTITUTO CERVANTES 2026',
    h1: 'Aprende español\nen el Pacífico Sur',
    subtitle: 'Centro de Enseñanza Integral del Español · Universidad Adolfo Ibáñez · Viña del Mar, Chile',
    cta1: { label: 'Ver programas', href: '/programas-y-cursos' },
    cta2: { label: 'Contactar', href: '/contacto' },
  },
  valueProps: {
    title: 'Por qué estudiar español en la UAI',
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
    subtitle: 'Cuatro modalidades diseñadas para perfiles académicos y profesionales distintos',
    items: [
      {
        nombre: 'Programa Español Semestral',
        descripcion: 'Cursos regulares por nivel MCER. Progresión estructurada de A1 a C1 con créditos académicos, actividades culturales y seminarios de Artes Liberales.',
        nivel: 'A1 a C1',
        duracion: '4 meses',
        horario: 'Turno mañana (9:00–12:00) o tarde (14:00–17:00), 3 días/semana',
        grupoMax: 'Máx. 12 estudiantes',
        precioReferencial: 'Desde USD 950/curso',
        href: '/programas-y-cursos/semestral',
      },
      {
        nombre: 'Cursos ELE Intensivo (Grupal)',
        descripcion: 'Formación intensiva presencial u online. Ideal para estudiantes de intercambio y profesionales que buscan avanzar rápidamente en 2 a 3 semanas.',
        nivel: 'A1 a B2',
        duracion: '2–3 semanas',
        horario: 'Lunes a viernes · presencial o online',
        grupoMax: 'Máx. 10 estudiantes',
        precioReferencial: 'Desde USD 300',
        href: '/programas-y-cursos/intensivo',
      },
      {
        nombre: 'Programa Corto con Fines Específicos',
        descripcion: 'Español para negocios, salud, diplomacia o sectores específicos. Programas a medida de 1 a 2 semanas para organizaciones y grupos institucionales.',
        nivel: 'Según requerimiento institucional',
        duracion: '1–2 semanas (a medida)',
        horario: 'Coordinado con la organización cliente',
        grupoMax: 'Variable según convenio',
        precioReferencial: 'USD 900 – 1.500',
        href: '/programas-y-cursos/fines-especificos',
      },
      {
        nombre: 'Curso ELE a Medida (Individual)',
        descripcion: 'Formación personalizada uno a uno según objetivos, nivel y disponibilidad. Disponible en campus o en modalidad in-situ en la sede del cliente.',
        nivel: 'Todos los niveles',
        duracion: 'A medida',
        horario: 'Acordado con el estudiante',
        grupoMax: '1 estudiante',
        precioReferencial: 'Desde USD 1.000',
        href: '/programas-y-cursos/individual',
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
    p1: 'El CEIE se encuentra en proceso de obtención de la acreditación SACIC del Instituto Cervantes, el estándar de referencia para centros de español como lengua extranjera a nivel mundial.',
    p2: 'La UAI cuenta con Acreditación de Excelencia de la Comisión Nacional de Acreditación (CNA) y reconocimiento Triple Crown, respaldando la calidad académica de todos sus programas.',
    badges: [
      'SACIC · Instituto Cervantes · En proceso de acreditación 2026',
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
        program: 'Programa Semestral',
        level: 'Nivel B2',
        text: '[PENDIENTE — testimonio real de estudiante]',
      },
      {
        initials: 'K.L.',
        country: 'Alemania',
        program: 'Programa Intensivo',
        level: 'Nivel B1',
        text: '[PENDIENTE — testimonio real de estudiante]',
      },
      {
        initials: 'C.P.',
        country: 'Canadá',
        program: 'Programa EFE',
        level: 'Nivel B2+',
        text: '[PENDIENTE — testimonio real de estudiante]',
      },
    ],
    readMoreLink: { label: 'Leer más testimonios', href: '/voces-del-centro' },
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
    description: 'Cuatro programas de español: Semestral, Intensivo, Fines Específicos e Individual. Niveles MCER A1–C1. UAI Viña del Mar.',
  },
  hero: {
    h1: 'Nuestros Programas de Español',
    subtitle: 'Cuatro modalidades alineadas al Marco Común Europeo de Referencia (MCER) y al Plan Curricular del Instituto Cervantes.',
  },
  intro: {
    p1: 'Todos los programas del CEIE están diseñados bajo el enfoque comunicativo establecido por el Instituto Cervantes. Cada nivel corresponde a un descriptor del MCER, desde A1 (inicial) hasta C1 (avanzado).',
    p2: 'Los estudiantes reciben un certificado emitido por la Universidad Adolfo Ibáñez al completar cada programa. Las equivalencias académicas se establecen mediante los convenios de cooperación internacional de la UAI.',
  },
}

export const ABOUT_ES = {
  meta: {
    title: 'Sobre Nosotros | CEIE UAI',
    description: 'Conozca el CEIE: misión, proceso de acreditación, instalaciones y marco institucional de la UAI.',
  },
  hero: { h1: 'Sobre el CEIE' },
  sections: {
    mision: {
      title: 'Misión y visión',
      mision: 'Ofrecer programas de enseñanza de español como lengua extranjera de alta calidad, sustentados en el enfoque comunicativo del Instituto Cervantes y en los valores formativos de las Artes Liberales de la Universidad Adolfo Ibáñez.',
      vision: 'Ser el centro de referencia en enseñanza de español en el Pacífico Sur, reconocido por su rigor académico, acreditación internacional y vinculación cultural con Chile.',
    },
    contexto: {
      title: 'Contexto institucional',
      p1: 'El CEIE opera dentro de la Dirección de Relaciones Internacionales de la UAI, en colaboración académica con la Facultad de Artes Liberales. Fue fundado en 2026 con la misión de atender a estudiantes internacionales, profesionales, misiones diplomáticas e instituciones socias.',
      p2: 'La UAI cuenta con Acreditación de Excelencia CNA y reconocimiento Triple Crown, situándola entre las universidades latinoamericanas con acreditación simultánea de AACSB, AMBA y EQUIS. El centro opera desde el campus de Viña del Mar, con presencia en Santiago.',
      kpis: [
        { value: '2026', label: 'Año de fundación' },
        { value: '4', label: 'Programas de español' },
        { value: '20+', label: 'Países representados' },
        { value: 'A1–C1', label: 'Niveles MCER' },
      ],
    },
    sacic: {
      title: 'Acreditación SACIC',
      p1: 'El CEIE se encuentra en proceso de obtención de la acreditación SACIC del Instituto Cervantes, el estándar internacional de calidad para centros de enseñanza de español como lengua extranjera. SACIC evalúa la calidad docente, el diseño curricular, las instalaciones físicas y digitales, y la transparencia institucional.',
      p2: 'La fase 2 de evaluación en aula por parte de evaluadores del Instituto Cervantes está programada para octubre-noviembre de 2026. La acreditación es un compromiso continuo: una vez obtenida, requiere renovación periódica.',
      status: 'Estado actual: En proceso · Fase 2 de evaluación programada para octubre-noviembre 2026',
    },
    espacios: {
      title: 'Nuestros Espacios',
      spaces: [
        {
          nombre: 'Aulas de español',
          descripcion: 'Salas equipadas con tecnología audiovisual, distribución flexible y capacidad para hasta 12 estudiantes. Diseñadas para metodología activo-participativa.',
          alt: 'Aula del Centro de Enseñanza Integral del Español de la UAI en Viña del Mar, con sillas móviles, pizarrón y proyector, capacidad para 12 estudiantes.',
        },
        {
          nombre: 'Biblioteca UAI',
          descripcion: 'Colección en español e inglés con acceso para estudiantes internacionales. Fondos de literatura, humanidades y ciencias sociales. Salas de lectura silenciosa.',
          alt: 'Biblioteca Universidad Adolfo Ibáñez campus Viña del Mar, con estanterías de libros y zona de lectura individual.',
        },
        {
          nombre: 'Salas de estudio',
          descripcion: 'Espacios de trabajo grupal e individual distribuidos en el campus. Acceso con credencial de estudiante CEIE.',
          alt: 'Sala de estudio grupal en campus UAI Viña del Mar, con mesas de trabajo y acceso a wifi.',
        },
        {
          nombre: 'Entorno — Viña del Mar',
          descripcion: 'El campus se emplaza frente al Pacífico en Viña del Mar, a 15 minutos de Valparaíso y a 1,5 horas de Santiago. Un entorno de inmersión lingüística y cultural único en Sudamérica.',
          alt: 'Vista del campus UAI Viña del Mar con acceso al Pacífico, ciudad de Viña del Mar de fondo.',
        },
        {
          nombre: 'Actividades culturales',
          descripcion: 'Excursiones a bodegas del Valle de Casablanca, recorridos por el patrimonio de Valparaíso y conversatorios con académicos UAI. Parte integrada de todos los programas.',
          alt: 'Estudiantes internacionales del CEIE participando en actividad cultural en Valparaíso, Chile.',
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
        ['Programa Semestral',       'A1 (sin conocimiento previo requerido)', 'Pasaporte / cédula. Foto carnet.'],
        ['Programa Intensivo',       'A1 (sin conocimiento previo requerido)', 'Pasaporte / cédula. Foto carnet.'],
        ['Fines Específicos',        'Según programa',                         'Carta de la organización patrocinadora.'],
        ['Programa Individual',      'Sin requisito',                          'Pasaporte / cédula. Objetivos de aprendizaje.'],
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
    note: '[PENDIENTE — fechas a confirmar por UAI]',
    individual: 'Programa Individual: matrícula continua — inicio inmediato disponible previa confirmación.',
  },
}

export const VOICES_ES = {
  meta: {
    title: 'Voces del Centro | CEIE UAI',
    description: 'Lee las experiencias de estudiantes que han estudiado español en el CEIE UAI.',
  },
  hero: {
    h1: 'Voces del Centro',
    subtitle: 'Experiencias de estudiantes que han estudiado español en el CEIE, Universidad Adolfo Ibáñez.',
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
    social: ['Instagram: @uai.internacional', 'Instagram: @artesliberalesuai'],
  },
}
