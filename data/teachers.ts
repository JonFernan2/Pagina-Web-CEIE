export interface TeacherData {
  nombre: string
  rol: string
  titulo: string
  formacionLista: string[]
  bio: string
  email: string
  foto: string | null
  fotoPendiente: boolean
}

export const TEACHERS: TeacherData[] = [
  {
    nombre: 'Manuel Casanueva',
    rol: 'Profesor de Español como Lengua Extranjera',
    titulo: 'Magíster en Lingüística Hispánica',
    formacionLista: [
      'Magíster en Lingüística Hispánica, Universidad de Chile, 2010',
      'Estudios en Filosofía, Pontificia Universidad Católica de Valparaíso, 2004',
    ],
    bio: 'Profesor en la Universidad Adolfo Ibáñez desde 2010, con cursos de Español para Negocios, Gramática Avanzada, Expresión Oral, Expresión Escrita, Latin American Identity y Latin American Development. Tutor del Centro de Escritura, Universidad de Los Andes, Santiago, 2022. Docente en la Universidad Técnica Federico Santa María entre 2008 y 2018, con cursos de Español I, II y III, Español Científico, Expresión Oral y Escrita, y Pre-Columbian Civilizations, entre otros.',
    email: 'manuel.casanuevas@edu.uai.cl',
    foto: '/images/docente-manuel-casanueva.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Marisol Reyes',
    rol: 'Profesora de Español como Lengua Extranjera · Examinadora Acreditada DELE',
    titulo: 'Profesora de Inglés / Licenciada en Literatura Inglesa',
    formacionLista: [
      'Profesora de Inglés / Licenciada en Literatura Inglesa, Pontificia Universidad Católica de Valparaíso',
      'Diplomado en Enseñanza del Español para la Inclusión Intercultural, Universidad Viña del Mar',
      'Examinadora Acreditada DELE A1/A2, B1/B2 y C1/C2, Instituto Cervantes',
      'Actualización para Examinadores DELE C1/C2 (20 horas), Instituto Cervantes, Río de Janeiro, 2025',
      'Curso De la planificación de la enseñanza a la evaluación del aprendizaje (10 horas), Instituto Cervantes y FEDELE, 2024',
      'Didáctica de la gramática y pragmática en ELE (35 horas), Pontificia Universidad Católica de Valparaíso, 2021',
      'Formación en línea para profesores ELE (60 horas), Universidad de Salamanca, 2020',
    ],
    bio: 'Profesora de Español en la Universidad Adolfo Ibáñez desde 2020, donde imparte cursos básicos e intermedios de Comunicación. Docente en la Universidad Viña del Mar, con cursos de Gramática, Comunicación y Cultura Chilena en niveles A1 a B2 y programas especializados de Español para Fines Específicos. Participó en la elaboración del manual de procedimiento académico y los lineamientos metodológicos y curriculares requeridos por el Instituto Cervantes para la acreditación SACIC del Centro de Español de la Universidad Viña del Mar.',
    email: 'marisol.reyes@edu.uai.cl',
    foto: '/images/docente-marisol-reyes.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Carolina Villalobos',
    rol: 'Profesora de Español, Traductora e Intérprete',
    titulo: 'Licenciada en Ciencias de la Comunicación / Traductora e Intérprete Inglés-Español',
    formacionLista: [
      'Licenciada en Ciencias de la Comunicación / Traductora e Intérprete Inglés-Español, Universidad de las Américas, 2009',
      'Examinadora Acreditada DELE C1/C2, Instituto Cervantes, 2024',
      'Certificación en Enseñanza del Español para la Inclusión Intercultural, Universidad Viña del Mar, 2023',
      'Examinadora Acreditada DELE B1/B2, Instituto Cervantes, 2020',
    ],
    bio: 'Profesora de Español en la Universidad Adolfo Ibáñez desde 2020, donde imparte cursos básicos e intermedios de Comunicación. Docente en la Universidad Viña del Mar desde 2005, con cursos de Gramática, Comunicación y Cultura Chilena en niveles A1 a B2. Imparte también programas personalizados de Español para Fines Específicos.',
    email: 'carolina.villalobos@edu.uai.cl',
    foto: '/images/docente-carolina-villalobos.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Juan Ignacio Salinas',
    rol: 'Profesor de Español y Cultura Latinoamericana',
    titulo: 'Periodista',
    formacionLista: [
      'Licenciado en Humanidades, mención Literatura, Universidad Adolfo Ibáñez, 2007',
      'Licenciado en Comunicación Social / Periodista, Universidad Adolfo Ibáñez, 2009',
    ],
    bio: 'Docente en la Universidad Adolfo Ibáñez desde 2010, con cursos como Vivir para contarla: Literatura Latinoamericana y Temeridad cinematográfica: Chile a través del documental. Docente en la Universidad Viña del Mar, donde imparte Culturas en Contacto, Readings in Literary Genres y Latin American Literature, entre otros.',
    email: 'jsalinas@edu.uai.cl',
    foto: null,
    fotoPendiente: true,
  },
  {
    nombre: 'Pedro Pacheco',
    rol: 'Profesor de Fonética y Gramática del Español para Extranjeros',
    titulo: 'Master Arts, Lettres, Langues',
    formacionLista: [
      'Profesor de Castellano / Licenciado en Educación, Universidad de Playa Ancha',
      'Master Arts, Lettres, Langues, mención Langues, Cultures Étrangères et Régionales (programa cuatrilingüe), Université Rennes 2, Francia',
      'Diplomado en Didáctica de la Historia, Pontificia Universidad Católica de Valparaíso',
    ],
    bio: 'Docente en la Universidad Adolfo Ibáñez, donde imparte Fonética del Español y Gramática del Español para estudiantes internacionales.',
    email: 'pedro.pacheco@edu.uai.cl',
    foto: null,
    fotoPendiente: true,
  },
  {
    nombre: 'Christina Haska',
    rol: 'Profesora Asistente · Lingüística',
    titulo: 'Doctora en Lingüística',
    formacionLista: [
      'Doctorado en Lingüística, Pontificia Universidad Católica de Chile, 2018',
      'M.A. in Language and Communication Research, Cardiff University, Wales-U.K., 2004',
      'Licenciatura en Filología Griega, Universidad de Patras, Grecia, 2001',
    ],
    bio: 'Miembro del Núcleo de Lingüística UAI y coordinadora de la línea de investigación Español Chileno e Hispanoamericano del Centro de Estudios Americanos. Forma parte del cuerpo académico del Departamento de Expresión y dicta cursos Core (Literatura y Humanidades, Escritura Argumentativa) y Talleres de Expresión Oral. Premio "Doctor Rodolfo Oroz" de la Academia Chilena de la Lengua, 2019.',
    email: 'christina.haska@uai.cl',
    foto: '/images/docente-christina-haska.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'José Alejandro Martínez-Lara',
    rol: 'Profesor Docente Asistente · Lingüística',
    titulo: 'Doctor en Lingüística',
    formacionLista: [
      'Doctor en Lingüística, Pontificia Universidad Católica de Chile, 2023',
      'Magíster en Lingüística, Universidad Central de Venezuela, 2012',
      'Licenciado en Letras, Universidad Central de Venezuela, 2007',
    ],
    bio: 'Forma parte del cuerpo académico del Departamento de Expresión, del Núcleo de Lingüística y de la línea de investigación Español chileno e hispanoamericano del Centro de Estudios Americanos de la Facultad de Artes Liberales. Sus líneas de investigación se centran en léxico-estadística, sociolingüística, dialectología y gramática del español. Miembro fundador y presidente de la Asociación de Jóvenes Lingüistas de Chile.',
    email: 'jose.martinez.l@uai.cl',
    foto: '/images/docente-jose-martinez-lara.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Carlos Yushimoto',
    rol: 'Profesor Asistente · Literatura Hispanoamericana',
    titulo: 'Doctor en Estudios Hispánicos',
    formacionLista: [
      'Doctor en Estudios Hispánicos, Brown University, EE.UU., 2016',
      'Magíster en Estudios Hispánicos, Brown University, EE.UU., 2012',
      'Magíster en Literatura Latinoamericana y Estudios Culturales, Villanova University, EE.UU., 2010',
      'Bachiller en Literatura Peruana e Hispanoamericana, UNMSM, Perú, 2002',
    ],
    bio: 'Se incorporó al cuerpo docente de la UAI en 2019, tras ejercer como profesor en las universidades de Brown, Villanova y California, Riverside. Sus intereses se concentran en la literatura latinoamericana contemporánea, las narrativas migratorias y la estética. Autor de La lectura de los afectos (BNP, 2021) y de los libros de cuentos Las islas (Seix Barral, 2017) y Lecciones para un niño que llega tarde (Seix Barral, 2019).',
    email: 'carlos.yushimoto@uai.cl',
    foto: '/images/docente-carlos-yushimoto.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Fernando Wilson',
    rol: 'Profesor Docente Asociado · Historia',
    titulo: 'Doctor en Historia',
    formacionLista: [
      'Doctor en Historia, Pontificia Universidad Católica de Valparaíso, Chile, 2017',
      'Magíster en Ciencia Política, mención en Relaciones Internacionales, Pontificia Universidad Católica de Chile',
      'Licenciado en Historia, Universidad Católica de Valparaíso',
      'Diplomado en Formulación de Política de Defensa y Gestión de Recursos, National Defence University, EE.UU.',
      'Diplomado en Pedagogía y Aprendizaje Avanzado, Laspau Center, Harvard University, EE.UU.',
    ],
    bio: 'Miembro de Número de la Academia Chilena de Historia Naval, Director de la Fundación Valparaíso en representación de la Universidad Adolfo Ibáñez y consultor en temas de Seguridad y Defensa de la Editorial IHS/Janes. Profesor del Departamento de Historia y Ciencias Sociales de la Facultad de Artes Liberales y profesor concurrente regular de la Academia de Guerra Naval.',
    email: 'fernando.wilson@uai.cl',
    foto: '/images/docente-fernando-wilson.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Francisco Martinovich',
    rol: 'Instructor · Expresión Oral y Literatura',
    titulo: 'Magíster en Literatura',
    formacionLista: [
      'Magíster en Literatura, Universidad de Chile, 2012',
      'Minor en Estética de la Cultura Latinoamericana, Pontificia Universidad Católica de Chile, 2009',
      'Licenciado en Letras con mención en Lingüística y Literatura Hispánicas, Pontificia Universidad Católica de Chile, 2009',
    ],
    bio: 'Desde 2016 forma parte del cuerpo académico del Departamento de Expresión de la Facultad de Artes Liberales. Coordinador del área de Oratoria desde 2022. Imparte cursos de Taller de Expresión Oral I y II, CORE: Escritura Argumentativa y CORE: Literatura y Humanidades. Director literario y editor en Cerrojo Ediciones desde 2015 y director del Taller de Poesía "La Chascona" de la Fundación Pablo Neruda.',
    email: 'francisco.martinovich@uai.cl',
    foto: '/images/docente-francisco-martinovich.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Jorge Cuadra',
    rol: 'Profesor Titular · Ciencias',
    titulo: 'Doctor en Astronomía',
    formacionLista: [
      'Doctor en Ciencias Naturales, Ludwig-Maximilians-Universität München, Alemania, 2006',
      'Licenciado en Astronomía, Pontificia Universidad Católica de Chile, Chile, 2002',
    ],
    bio: 'Su investigación se enfoca en modelar numéricamente sistemas astrofísicos, desde discos protoplanetarios y estrellas binarias hasta agujeros negros súper masivos. Ha trabajado en la Universidad de Colorado, el Observatorio Astronómico de Shanghai, el Instituto Max Planck de Astrofísica y la Universidad Católica de Chile. Director de un Grupo Asociado Max Planck sobre Astrofísica del Centro Galáctico.',
    email: 'jorge.cuadra@uai.cl',
    foto: '/images/docente-jorge-cuadra.jpg',
    fotoPendiente: false,
  },
]
