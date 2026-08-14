export interface TeacherData {
  nombre: string
  rol: { es: string; en: string; pt: string; zh: string }
  titulo: { es: string; en: string; pt: string; zh: string }
  formacionLista: { es: string[]; en: string[]; pt: string[]; zh: string[] }
  bio: { es: string; en: string; pt: string; zh: string }
  email: string
  foto: string | null
  fotoPendiente: boolean
}

export const TEACHERS: TeacherData[] = [
  {
    nombre: 'Manuel Casanueva',
    rol: {
      es: 'Profesor de Español como Lengua Extranjera',
      en: 'Spanish as a Foreign Language Teacher',
      pt: 'Professor de Espanhol como Língua Estrangeira',
      zh: '西班牙语外语教师',
    },
    titulo: {
      es: 'Magíster en Lingüística Hispánica',
      en: "Master's in Hispanic Linguistics",
      pt: 'Mestrado em Linguística Hispânica',
      zh: '西班牙语言学硕士',
    },
    formacionLista: {
      es: [
        'Magíster en Lingüística Hispánica, Universidad de Chile, 2010',
        'Estudios en Filosofía, Pontificia Universidad Católica de Valparaíso, 2004',
      ],
      en: [
        "Master's in Hispanic Linguistics, Universidad de Chile, 2010",
        'Studies in Philosophy, Pontificia Universidad Católica de Valparaíso, 2004',
      ],
      pt: [
        'Mestrado em Linguística Hispânica, Universidad de Chile, 2010',
        'Estudos em Filosofia, Pontificia Universidad Católica de Valparaíso, 2004',
      ],
      zh: [
        '西班牙语言学硕士，智利大学，2010年',
        '哲学研究，瓦尔帕莱索天主教大学，2004年',
      ],
    },
    bio: {
      es: 'Profesor en la Universidad Adolfo Ibáñez desde 2010, con cursos de Español para Negocios, Gramática Avanzada, Expresión Oral, Expresión Escrita, Latin American Identity y Latin American Development. Tutor del Centro de Escritura, Universidad de Los Andes, Santiago, 2022. Docente en la Universidad Técnica Federico Santa María entre 2008 y 2018, con cursos de Español I, II y III, Español Científico, Expresión Oral y Escrita, y Pre-Columbian Civilizations, entre otros.',
      en: 'Professor at Universidad Adolfo Ibáñez since 2010, teaching Business Spanish, Advanced Grammar, Oral Expression, Written Expression, Latin American Identity and Latin American Development. Writing Center Tutor at Universidad de Los Andes, Santiago, 2022. Teacher at Universidad Técnica Federico Santa María from 2008 to 2018, with courses in Spanish I, II and III, Scientific Spanish, Oral and Written Expression, and Pre-Columbian Civilizations, among others.',
      pt: 'Professor na Universidad Adolfo Ibáñez desde 2010, com cursos de Espanhol para Negócios, Gramática Avançada, Expressão Oral, Expressão Escrita, Latin American Identity e Latin American Development. Tutor do Centro de Escrita, Universidad de Los Andes, Santiago, 2022. Docente na Universidad Técnica Federico Santa María entre 2008 e 2018, com cursos de Espanhol I, II e III, Espanhol Científico, Expressão Oral e Escrita e Pre-Columbian Civilizations, entre outros.',
      zh: '自2010年起在阿道夫·伊瓦涅斯大学任教，开设商务西班牙语、高级语法、口语表达、书面表达、拉丁美洲认同与拉丁美洲发展等课程。2022年担任圣地亚哥洛斯安第斯大学写作中心导师。2008年至2018年在费德里科圣玛丽亚技术大学任教，开设西班牙语I、II和III、科学西班牙语、口语和书面表达以及哥伦布前文明等课程。',
    },
    email: 'manuel.casanuevas@edu.uai.cl',
    foto: '/images/docente-manuel-casanueva.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Marisol Reyes',
    rol: {
      es: 'Profesora de Español como Lengua Extranjera · Examinadora Acreditada DELE',
      en: 'Spanish as a Foreign Language Teacher · Accredited DELE Examiner',
      pt: 'Professora de Espanhol como Língua Estrangeira · Examinadora Credenciada DELE',
      zh: '西班牙语外语教师 · DELE认证考官',
    },
    titulo: {
      es: 'Profesora de Inglés / Licenciada en Literatura Inglesa',
      en: "English Teacher / Bachelor's in English Literature",
      pt: 'Professora de Inglês / Licenciada em Literatura Inglesa',
      zh: '英语教师 / 英语文学学士',
    },
    formacionLista: {
      es: [
        'Profesora de Inglés / Licenciada en Literatura Inglesa, Pontificia Universidad Católica de Valparaíso',
        'Diplomado en Enseñanza del Español para la Inclusión Intercultural, Universidad Viña del Mar',
        'Examinadora Acreditada DELE A1/A2, B1/B2 y C1/C2, Instituto Cervantes',
        'Actualización para Examinadores DELE C1/C2 (20 horas), Instituto Cervantes, Río de Janeiro, 2025',
        'Curso De la planificación de la enseñanza a la evaluación del aprendizaje (10 horas), Instituto Cervantes y FEDELE, 2024',
        'Didáctica de la gramática y pragmática en ELE (35 horas), Pontificia Universidad Católica de Valparaíso, 2021',
        'Formación en línea para profesores ELE (60 horas), Universidad de Salamanca, 2020',
      ],
      en: [
        "English Teacher / Bachelor's in English Literature, Pontificia Universidad Católica de Valparaíso",
        'Diploma in Teaching Spanish for Intercultural Inclusion, Universidad Viña del Mar',
        'Accredited DELE Examiner A1/A2, B1/B2 and C1/C2, Instituto Cervantes',
        'Update Course for DELE C1/C2 Examiners (20 hours), Instituto Cervantes, Rio de Janeiro, 2025',
        'From Teaching Planning to Learning Assessment (10 hours), Instituto Cervantes & FEDELE, 2024',
        'Grammar and Pragmatics Didactics in SFL (35 hours), Pontificia Universidad Católica de Valparaíso, 2021',
        'Online Training for SFL Teachers (60 hours), Universidad de Salamanca, 2020',
      ],
      pt: [
        'Professora de Inglês / Licenciada em Literatura Inglesa, Pontificia Universidad Católica de Valparaíso',
        'Diploma em Ensino do Espanhol para a Inclusão Intercultural, Universidad Viña del Mar',
        'Examinadora Credenciada DELE A1/A2, B1/B2 e C1/C2, Instituto Cervantes',
        'Atualização para Examinadores DELE C1/C2 (20 horas), Instituto Cervantes, Rio de Janeiro, 2025',
        'Curso Da planificação do ensino à avaliação da aprendizagem (10 horas), Instituto Cervantes e FEDELE, 2024',
        'Didática da gramática e pragmática em ELE (35 horas), Pontificia Universidad Católica de Valparaíso, 2021',
        'Formação on-line para professores de ELE (60 horas), Universidad de Salamanca, 2020',
      ],
      zh: [
        '英语教师 / 英语文学学士，瓦尔帕莱索天主教大学',
        '跨文化融合西班牙语教学文凭，比尼亚德尔马大学',
        'DELE A1/A2、B1/B2及C1/C2认证考官，塞万提斯学院',
        'DELE C1/C2考官更新培训（20课时），塞万提斯学院，里约热内卢，2025年',
        '从教学规划到学习评估课程（10课时），塞万提斯学院及FEDELE，2024年',
        '西班牙语外语教学中的语法与语用教学法（35课时），瓦尔帕莱索天主教大学，2021年',
        '西班牙语外语教师在线培训（60课时），萨拉曼卡大学，2020年',
      ],
    },
    bio: {
      es: 'Profesora de Español en la Universidad Adolfo Ibáñez desde 2020, donde imparte cursos básicos e intermedios de Comunicación. Docente en la Universidad Viña del Mar, con cursos de Gramática, Comunicación y Cultura Chilena en niveles A1 a B2 y programas especializados de Español para Fines Específicos. Participó en la elaboración del manual de procedimiento académico y los lineamientos metodológicos y curriculares requeridos por el Instituto Cervantes para la acreditación SACIC del Centro de Español de la Universidad Viña del Mar.',
      en: 'Spanish teacher at Universidad Adolfo Ibáñez since 2020, teaching basic and intermediate Communication courses. Teacher at Universidad Viña del Mar, with Grammar, Communication and Chilean Culture courses at levels A1 to B2 and specialized Spanish for Specific Purposes programs. Participated in developing the academic procedure manual and the methodological and curricular guidelines required by Instituto Cervantes for the SACIC accreditation of the Spanish Centre at Universidad Viña del Mar.',
      pt: 'Professora de Espanhol na Universidad Adolfo Ibáñez desde 2020, onde ministra cursos básicos e intermediários de Comunicação. Docente na Universidad Viña del Mar, com cursos de Gramática, Comunicação e Cultura Chilena nos níveis A1 a B2 e programas especializados de Espanhol para Fins Específicos. Participou na elaboração do manual de procedimento académico e das diretrizes metodológicas e curriculares exigidas pelo Instituto Cervantes para a acreditação SACIC do Centro de Espanhol da Universidad Viña del Mar.',
      zh: '自2020年起在阿道夫·伊瓦涅斯大学任西班牙语教师，讲授基础和中级沟通课程。在比尼亚德尔马大学任教，开设A1至B2水平的语法、沟通和智利文化课程及专项西班牙语专业课程。参与制定了塞万提斯学院为比尼亚德尔马大学西班牙语中心SACIC认证所需的学术程序手册及方法论和课程指导方针。',
    },
    email: 'marisol.reyes@edu.uai.cl',
    foto: '/images/docente-marisol-reyes.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Carolina Villalobos',
    rol: {
      es: 'Profesora de Español, Traductora e Intérprete',
      en: 'Spanish Teacher, Translator and Interpreter',
      pt: 'Professora de Espanhol, Tradutora e Intérprete',
      zh: '西班牙语教师、翻译及口译员',
    },
    titulo: {
      es: 'Licenciada en Ciencias de la Comunicación / Traductora e Intérprete Inglés-Español',
      en: "Bachelor's in Communication Sciences / English-Spanish Translator and Interpreter",
      pt: 'Licenciada em Ciências da Comunicação / Tradutora e Intérprete Inglês-Espanhol',
      zh: '传播学学士 / 英西翻译及口译员',
    },
    formacionLista: {
      es: [
        'Licenciada en Ciencias de la Comunicación / Traductora e Intérprete Inglés-Español, Universidad de las Américas, 2009',
        'Examinadora Acreditada DELE C1/C2, Instituto Cervantes, 2024',
        'Certificación en Enseñanza del Español para la Inclusión Intercultural, Universidad Viña del Mar, 2023',
        'Examinadora Acreditada DELE B1/B2, Instituto Cervantes, 2020',
      ],
      en: [
        "Bachelor's in Communication Sciences / English-Spanish Translator and Interpreter, Universidad de las Américas, 2009",
        'Accredited DELE C1/C2 Examiner, Instituto Cervantes, 2024',
        'Certification in Teaching Spanish for Intercultural Inclusion, Universidad Viña del Mar, 2023',
        'Accredited DELE B1/B2 Examiner, Instituto Cervantes, 2020',
      ],
      pt: [
        'Licenciada em Ciências da Comunicação / Tradutora e Intérprete Inglês-Espanhol, Universidad de las Américas, 2009',
        'Examinadora Credenciada DELE C1/C2, Instituto Cervantes, 2024',
        'Certificação em Ensino do Espanhol para a Inclusão Intercultural, Universidad Viña del Mar, 2023',
        'Examinadora Credenciada DELE B1/B2, Instituto Cervantes, 2020',
      ],
      zh: [
        '传播学学士 / 英西翻译及口译员，美洲大学，2009年',
        'DELE C1/C2认证考官，塞万提斯学院，2024年',
        '跨文化融合西班牙语教学认证，比尼亚德尔马大学，2023年',
        'DELE B1/B2认证考官，塞万提斯学院，2020年',
      ],
    },
    bio: {
      es: 'Profesora de Español en la Universidad Adolfo Ibáñez desde 2020, donde imparte cursos básicos e intermedios de Comunicación. Docente en la Universidad Viña del Mar desde 2005, con cursos de Gramática, Comunicación y Cultura Chilena en niveles A1 a B2. Imparte también programas personalizados de Español para Fines Específicos.',
      en: 'Spanish teacher at Universidad Adolfo Ibáñez since 2020, teaching basic and intermediate Communication courses. Teacher at Universidad Viña del Mar since 2005, with Grammar, Communication and Chilean Culture courses at levels A1 to B2. Also teaches personalized Spanish for Specific Purposes programs.',
      pt: 'Professora de Espanhol na Universidad Adolfo Ibáñez desde 2020, onde ministra cursos básicos e intermediários de Comunicação. Docente na Universidad Viña del Mar desde 2005, com cursos de Gramática, Comunicação e Cultura Chilena nos níveis A1 a B2. Ministra também programas personalizados de Espanhol para Fins Específicos.',
      zh: '自2020年起在阿道夫·伊瓦涅斯大学任西班牙语教师，讲授基础和中级沟通课程。自2005年起在比尼亚德尔马大学任教，开设A1至B2水平的语法、沟通和智利文化课程，同时开设个性化专项西班牙语课程。',
    },
    email: 'carolina.villalobos@edu.uai.cl',
    foto: '/images/docente-carolina-villalobos.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Juan Ignacio Salinas',
    rol: {
      es: 'Profesor de Español y Cultura Latinoamericana',
      en: 'Spanish and Latin American Culture Teacher',
      pt: 'Professor de Espanhol e Cultura Latino-americana',
      zh: '西班牙语及拉丁美洲文化教师',
    },
    titulo: {
      es: 'Periodista',
      en: 'Journalist',
      pt: 'Jornalista',
      zh: '记者',
    },
    formacionLista: {
      es: [
        'Licenciado en Humanidades, mención Literatura, Universidad Adolfo Ibáñez, 2007',
        'Licenciado en Comunicación Social / Periodista, Universidad Adolfo Ibáñez, 2009',
      ],
      en: [
        "Bachelor's in Humanities, Literature major, Universidad Adolfo Ibáñez, 2007",
        "Bachelor's in Social Communication / Journalist, Universidad Adolfo Ibáñez, 2009",
      ],
      pt: [
        'Licenciado em Humanidades, especialização em Literatura, Universidad Adolfo Ibáñez, 2007',
        'Licenciado em Comunicação Social / Jornalista, Universidad Adolfo Ibáñez, 2009',
      ],
      zh: [
        '文学方向人文学学士，阿道夫·伊瓦涅斯大学，2007年',
        '社会传播学学士 / 记者，阿道夫·伊瓦涅斯大学，2009年',
      ],
    },
    bio: {
      es: 'Docente en la Universidad Adolfo Ibáñez desde 2010, con cursos como Vivir para contarla: Literatura Latinoamericana y Temeridad cinematográfica: Chile a través del documental. Docente en la Universidad Viña del Mar, donde imparte Culturas en Contacto, Readings in Literary Genres y Latin American Literature, entre otros.',
      en: 'Teacher at Universidad Adolfo Ibáñez since 2010, with courses such as Living to Tell the Tale: Latin American Literature and Cinematic Audacity: Chile Through Documentary Film. Teacher at Universidad Viña del Mar, where he teaches Cultures in Contact, Readings in Literary Genres and Latin American Literature, among others.',
      pt: 'Docente na Universidad Adolfo Ibáñez desde 2010, com cursos como Viver para contar: Literatura Latino-americana e Audácia cinematográfica: Chile através do documentário. Docente na Universidad Viña del Mar, onde ministra Culturas em Contato, Readings in Literary Genres e Latin American Literature, entre outros.',
      zh: '自2010年起在阿道夫·伊瓦涅斯大学任教，开设《活着是为了讲述：拉丁美洲文学》和《电影胆识：纪录片中的智利》等课程。在比尼亚德尔马大学任教，讲授文化接触、文学体裁选读和拉丁美洲文学等课程。',
    },
    email: 'jsalinas@edu.uai.cl',
    foto: '/images/docente-juan-ignacio-salinas.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Pedro Pacheco',
    rol: {
      es: 'Profesor de Fonética y Gramática del Español para Extranjeros',
      en: 'Spanish Phonetics and Grammar for Foreign Students',
      pt: 'Professor de Fonética e Gramática do Espanhol para Estrangeiros',
      zh: '面向外国学生的西班牙语语音及语法教师',
    },
    titulo: {
      es: 'Master Arts, Lettres, Langues',
      en: 'Master Arts, Lettres, Langues',
      pt: 'Master Arts, Lettres, Langues',
      zh: '语言文艺硕士',
    },
    formacionLista: {
      es: [
        'Profesor de Castellano / Licenciado en Educación, Universidad de Playa Ancha',
        'Master Arts, Lettres, Langues, mención Langues, Cultures Étrangères et Régionales (programa cuatrilingüe), Université Rennes 2, Francia',
        'Diplomado en Didáctica de la Historia, Pontificia Universidad Católica de Valparaíso',
      ],
      en: [
        'Spanish Teacher / Bachelor of Education, Universidad de Playa Ancha',
        'Master Arts, Lettres, Langues — Foreign and Regional Languages and Cultures (quadrilingual programme), Université Rennes 2, France',
        'Diploma in History Didactics, Pontificia Universidad Católica de Valparaíso',
      ],
      pt: [
        'Professor de Espanhol / Licenciado em Educação, Universidad de Playa Ancha',
        'Master Arts, Lettres, Langues, especialização Langues, Cultures Étrangères et Régionales (programa quadrilíngue), Université Rennes 2, França',
        'Diploma em Didática da História, Pontificia Universidad Católica de Valparaíso',
      ],
      zh: [
        '西班牙语教师 / 教育学学士，普拉亚安查大学',
        '语言、文学与艺术硕士——外国及地区语言与文化方向（四语种项目），雷恩第二大学，法国',
        '历史教学法文凭，瓦尔帕莱索天主教大学',
      ],
    },
    bio: {
      es: 'Docente en la Universidad Adolfo Ibáñez, donde imparte Fonética del Español y Gramática del Español para estudiantes internacionales.',
      en: 'Teacher at Universidad Adolfo Ibáñez, where he teaches Spanish Phonetics and Spanish Grammar for international students.',
      pt: 'Docente na Universidad Adolfo Ibáñez, onde ministra Fonética do Espanhol e Gramática do Espanhol para estudantes internacionais.',
      zh: '在阿道夫·伊瓦涅斯大学任教，为国际学生讲授西班牙语语音学和西班牙语语法课程。',
    },
    email: 'pedro.pacheco@edu.uai.cl',
    foto: null,
    fotoPendiente: true,
  },
  {
    nombre: 'Christina Haska',
    rol: {
      es: 'Profesora Asistente · Lingüística',
      en: 'Assistant Professor · Linguistics',
      pt: 'Professora Assistente · Linguística',
      zh: '助理教授 · 语言学',
    },
    titulo: {
      es: 'Doctora en Lingüística',
      en: 'PhD in Linguistics',
      pt: 'Doutora em Linguística',
      zh: '语言学博士',
    },
    formacionLista: {
      es: [
        'Doctorado en Lingüística, Pontificia Universidad Católica de Chile, 2018',
        'M.A. in Language and Communication Research, Cardiff University, Wales-U.K., 2004',
        'Licenciatura en Filología Griega, Universidad de Patras, Grecia, 2001',
      ],
      en: [
        'PhD in Linguistics, Pontificia Universidad Católica de Chile, 2018',
        'M.A. in Language and Communication Research, Cardiff University, Wales-U.K., 2004',
        "Bachelor's in Greek Philology, University of Patras, Greece, 2001",
      ],
      pt: [
        'Doutorado em Linguística, Pontificia Universidad Católica de Chile, 2018',
        'M.A. in Language and Communication Research, Cardiff University, País de Gales-R.U., 2004',
        'Licenciatura em Filologia Grega, Universidade de Patras, Grécia, 2001',
      ],
      zh: [
        '语言学博士，智利天主教大学，2018年',
        '语言与传播研究文学硕士，卡迪夫大学，英国威尔士，2004年',
        '希腊语言文学学士，帕特雷大学，希腊，2001年',
      ],
    },
    bio: {
      es: 'Miembro del Núcleo de Lingüística UAI y coordinadora de la línea de investigación Español Chileno e Hispanoamericano del Centro de Estudios Americanos. Forma parte del cuerpo académico del Departamento de Expresión y dicta cursos Core (Literatura y Humanidades, Escritura Argumentativa) y Talleres de Expresión Oral. Premio "Doctor Rodolfo Oroz" de la Academia Chilena de la Lengua, 2019.',
      en: 'Member of the UAI Linguistics Research Group and coordinator of the Chilean and Hispano-American Spanish research line at the Center for American Studies. Part of the academic faculty of the Department of Expression, teaching Core courses (Literature and Humanities, Argumentative Writing) and Oral Expression Workshops. "Doctor Rodolfo Oroz" Award from the Chilean Academy of Language, 2019.',
      pt: 'Membro do Núcleo de Linguística da UAI e coordenadora da linha de investigação Espanhol Chileno e Hispano-americano do Centro de Estudos Americanos. Faz parte do corpo académico do Departamento de Expressão e ministra cursos Core (Literatura e Humanidades, Escrita Argumentativa) e Workshops de Expressão Oral. Prémio "Doctor Rodolfo Oroz" da Academia Chilena da Língua, 2019.',
      zh: '阿道夫·伊瓦涅斯大学语言学研究中心成员，美洲研究中心智利西班牙语及西班牙美洲语言研究方向协调员。隶属于表达系教师团队，讲授核心课程（文学与人文、论证写作）及口语表达工作坊。荣获智利语言学院2019年"鲁道夫·奥罗斯博士"奖。',
    },
    email: 'christina.haska@uai.cl',
    foto: '/images/docente-christina-haska.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'José Alejandro Martínez-Lara',
    rol: {
      es: 'Profesor Docente Asistente · Lingüística',
      en: 'Assistant Teaching Professor · Linguistics',
      pt: 'Professor Docente Assistente · Linguística',
      zh: '助理教学教授 · 语言学',
    },
    titulo: {
      es: 'Doctor en Lingüística',
      en: 'PhD in Linguistics',
      pt: 'Doutor em Linguística',
      zh: '语言学博士',
    },
    formacionLista: {
      es: [
        'Doctor en Lingüística, Pontificia Universidad Católica de Chile, 2023',
        'Magíster en Lingüística, Universidad Central de Venezuela, 2012',
        'Licenciado en Letras, Universidad Central de Venezuela, 2007',
      ],
      en: [
        'PhD in Linguistics, Pontificia Universidad Católica de Chile, 2023',
        "Master's in Linguistics, Universidad Central de Venezuela, 2012",
        "Bachelor's in Letters, Universidad Central de Venezuela, 2007",
      ],
      pt: [
        'Doutorado em Linguística, Pontificia Universidad Católica de Chile, 2023',
        'Mestrado em Linguística, Universidad Central de Venezuela, 2012',
        'Licenciatura em Letras, Universidad Central de Venezuela, 2007',
      ],
      zh: [
        '语言学博士，智利天主教大学，2023年',
        '语言学硕士，委内瑞拉中央大学，2012年',
        '文学学士，委内瑞拉中央大学，2007年',
      ],
    },
    bio: {
      es: 'Forma parte del cuerpo académico del Departamento de Expresión, del Núcleo de Lingüística y de la línea de investigación Español chileno e hispanoamericano del Centro de Estudios Americanos de la Facultad de Artes Liberales. Sus líneas de investigación se centran en léxico-estadística, sociolingüística, dialectología y gramática del español. Miembro fundador y presidente de la Asociación de Jóvenes Lingüistas de Chile.',
      en: 'Part of the academic faculty of the Department of Expression, the Linguistics Research Group and the Chilean and Hispano-American Spanish research line at the Center for American Studies, Faculty of Liberal Arts. Research focuses on lexical statistics, sociolinguistics, dialectology and Spanish grammar. Founding member and president of the Association of Young Linguists of Chile.',
      pt: 'Faz parte do corpo académico do Departamento de Expressão, do Núcleo de Linguística e da linha de investigação Espanhol chileno e hispano-americano do Centro de Estudos Americanos da Faculdade de Artes Liberais. As suas linhas de investigação centram-se em léxico-estatística, sociolinguística, dialectologia e gramática do espanhol. Membro fundador e presidente da Associação de Jovens Linguistas do Chile.',
      zh: '隶属于自由艺术学院美洲研究中心表达系、语言学研究中心及智利西班牙语和西班牙美洲语言研究方向的教师团队。研究方向聚焦于词汇统计学、社会语言学、方言学和西班牙语语法。智利青年语言学家协会创始成员及主席。',
    },
    email: 'jose.martinez.l@uai.cl',
    foto: '/images/docente-jose-martinez-lara.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Carlos Yushimoto',
    rol: {
      es: 'Profesor Asistente · Literatura Hispanoamericana',
      en: 'Assistant Professor · Latin American Literature',
      pt: 'Professor Assistente · Literatura Hispano-americana',
      zh: '助理教授 · 西班牙语美洲文学',
    },
    titulo: {
      es: 'Doctor en Estudios Hispánicos',
      en: 'PhD in Hispanic Studies',
      pt: 'Doutor em Estudos Hispânicos',
      zh: '西班牙语研究博士',
    },
    formacionLista: {
      es: [
        'Doctor en Estudios Hispánicos, Brown University, EE.UU., 2016',
        'Magíster en Estudios Hispánicos, Brown University, EE.UU., 2012',
        'Magíster en Literatura Latinoamericana y Estudios Culturales, Villanova University, EE.UU., 2010',
        'Bachiller en Literatura Peruana e Hispanoamericana, UNMSM, Perú, 2002',
      ],
      en: [
        'PhD in Hispanic Studies, Brown University, USA, 2016',
        "Master's in Hispanic Studies, Brown University, USA, 2012",
        "Master's in Latin American Literature and Cultural Studies, Villanova University, USA, 2010",
        "Bachelor's in Peruvian and Hispano-American Literature, UNMSM, Peru, 2002",
      ],
      pt: [
        'Doutorado em Estudos Hispânicos, Brown University, EUA, 2016',
        'Mestrado em Estudos Hispânicos, Brown University, EUA, 2012',
        'Mestrado em Literatura Latino-americana e Estudos Culturais, Villanova University, EUA, 2010',
        'Bacharelado em Literatura Peruana e Hispano-americana, UNMSM, Peru, 2002',
      ],
      zh: [
        '西班牙语研究博士，布朗大学，美国，2016年',
        '西班牙语研究硕士，布朗大学，美国，2012年',
        '拉丁美洲文学与文化研究硕士，维拉诺瓦大学，美国，2010年',
        '秘鲁及西班牙美洲文学学士，圣马科斯国立大学，秘鲁，2002年',
      ],
    },
    bio: {
      es: 'Se incorporó al cuerpo docente de la UAI en 2019, tras ejercer como profesor en las universidades de Brown, Villanova y California, Riverside. Sus intereses se concentran en la literatura latinoamericana contemporánea, las narrativas migratorias y la estética. Autor de La lectura de los afectos (BNP, 2021) y de los libros de cuentos Las islas (Seix Barral, 2017) y Lecciones para un niño que llega tarde (Seix Barral, 2019).',
      en: 'Joined UAI faculty in 2019, after teaching at Brown, Villanova and University of California, Riverside. His interests focus on contemporary Latin American literature, migration narratives and aesthetics. Author of La lectura de los afectos (BNP, 2021) and the short story collections Las islas (Seix Barral, 2017) and Lecciones para un niño que llega tarde (Seix Barral, 2019).',
      pt: 'Incorporou-se ao corpo docente da UAI em 2019, após lecionar nas universidades de Brown, Villanova e California, Riverside. Os seus interesses concentram-se na literatura latino-americana contemporânea, nas narrativas migratórias e na estética. Autor de La lectura de los afectos (BNP, 2021) e dos livros de contos Las islas (Seix Barral, 2017) e Lecciones para un niño que llega tarde (Seix Barral, 2019).',
      zh: '2019年加入阿道夫·伊瓦涅斯大学教师团队，此前曾在布朗大学、维拉诺瓦大学和加州大学河滨分校任教。研究兴趣集中于当代拉丁美洲文学、移民叙事与美学。著有《情感阅读》（BNP，2021年）及短篇小说集《群岛》（Seix Barral，2017年）和《给迟到孩子的课》（Seix Barral，2019年）。',
    },
    email: 'carlos.yushimoto@uai.cl',
    foto: '/images/docente-carlos-yushimoto.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Fernando Wilson',
    rol: {
      es: 'Profesor Docente Asociado · Historia',
      en: 'Associate Teaching Professor · History',
      pt: 'Professor Docente Associado · História',
      zh: '副教授 · 历史',
    },
    titulo: {
      es: 'Doctor en Historia',
      en: 'PhD in History',
      pt: 'Doutor em História',
      zh: '历史学博士',
    },
    formacionLista: {
      es: [
        'Doctor en Historia, Pontificia Universidad Católica de Valparaíso, Chile, 2017',
        'Magíster en Ciencia Política, mención en Relaciones Internacionales, Pontificia Universidad Católica de Chile',
        'Licenciado en Historia, Universidad Católica de Valparaíso',
        'Diplomado en Formulación de Política de Defensa y Gestión de Recursos, National Defence University, EE.UU.',
        'Diplomado en Pedagogía y Aprendizaje Avanzado, Laspau Center, Harvard University, EE.UU.',
      ],
      en: [
        'PhD in History, Pontificia Universidad Católica de Valparaíso, Chile, 2017',
        "Master's in Political Science, International Relations track, Pontificia Universidad Católica de Chile",
        "Bachelor's in History, Universidad Católica de Valparaíso",
        'Diploma in Defence Policy Formulation and Resource Management, National Defence University, USA',
        'Diploma in Pedagogy and Advanced Learning, Laspau Center, Harvard University, USA',
      ],
      pt: [
        'Doutorado em História, Pontificia Universidad Católica de Valparaíso, Chile, 2017',
        'Mestrado em Ciência Política, especialização em Relações Internacionais, Pontificia Universidad Católica de Chile',
        'Licenciado em História, Universidad Católica de Valparaíso',
        'Diploma em Formulação de Política de Defesa e Gestão de Recursos, National Defence University, EUA',
        'Diploma em Pedagogia e Aprendizagem Avançada, Laspau Center, Harvard University, EUA',
      ],
      zh: [
        '历史学博士，瓦尔帕莱索天主教大学，智利，2017年',
        '政治学硕士（国际关系方向），智利天主教大学',
        '历史学学士，瓦尔帕莱索天主教大学',
        '国防政策制定与资源管理文凭，美国国防大学',
        '教学法与高级学习文凭，哈佛大学Laspau中心，美国',
      ],
    },
    bio: {
      es: 'Miembro de Número de la Academia Chilena de Historia Naval, Director de la Fundación Valparaíso en representación de la Universidad Adolfo Ibáñez y consultor en temas de Seguridad y Defensa de la Editorial IHS/Janes. Profesor del Departamento de Historia y Ciencias Sociales de la Facultad de Artes Liberales y profesor concurrente regular de la Academia de Guerra Naval.',
      en: 'Member of the Chilean Naval History Academy, Director of the Valparaíso Foundation on behalf of Universidad Adolfo Ibáñez, and Defence and Security consultant for IHS/Janes Publishing. Professor in the Department of History and Social Sciences of the Faculty of Liberal Arts and regular concurrent professor at the Naval War Academy.',
      pt: 'Membro de Número da Academia Chilena de História Naval, Diretor da Fundação Valparaíso em representação da Universidad Adolfo Ibáñez e consultor em temas de Segurança e Defesa da Editorial IHS/Janes. Professor do Departamento de História e Ciências Sociais da Faculdade de Artes Liberais e professor concorrente regular da Academia de Guerra Naval.',
      zh: '智利海军历史学院成员，代表阿道夫·伊瓦涅斯大学担任瓦尔帕莱索基金会理事，并担任IHS/Janes出版社安全与防务顾问。任教于自由艺术学院历史与社会科学系，同时担任海军战争学院定期联合教授。',
    },
    email: 'fernando.wilson@uai.cl',
    foto: '/images/docente-fernando-wilson.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Francisco Martinovich',
    rol: {
      es: 'Instructor · Expresión Oral y Literatura',
      en: 'Instructor · Oral Expression and Literature',
      pt: 'Instrutor · Expressão Oral e Literatura',
      zh: '讲师 · 口语表达与文学',
    },
    titulo: {
      es: 'Magíster en Literatura',
      en: "Master's in Literature",
      pt: 'Mestrado em Literatura',
      zh: '文学硕士',
    },
    formacionLista: {
      es: [
        'Magíster en Literatura, Universidad de Chile, 2012',
        'Minor en Estética de la Cultura Latinoamericana, Pontificia Universidad Católica de Chile, 2009',
        'Licenciado en Letras con mención en Lingüística y Literatura Hispánicas, Pontificia Universidad Católica de Chile, 2009',
      ],
      en: [
        "Master's in Literature, Universidad de Chile, 2012",
        'Minor in Aesthetics of Latin American Culture, Pontificia Universidad Católica de Chile, 2009',
        "Bachelor's in Letters, Hispanic Linguistics and Literature major, Pontificia Universidad Católica de Chile, 2009",
      ],
      pt: [
        'Mestrado em Literatura, Universidad de Chile, 2012',
        'Minor em Estética da Cultura Latino-americana, Pontificia Universidad Católica de Chile, 2009',
        'Licenciado em Letras com especialização em Linguística e Literatura Hispânicas, Pontificia Universidad Católica de Chile, 2009',
      ],
      zh: [
        '文学硕士，智利大学，2012年',
        '拉丁美洲文化美学辅修，智利天主教大学，2009年',
        '西班牙语言学与文学方向文学学士，智利天主教大学，2009年',
      ],
    },
    bio: {
      es: 'Desde 2016 forma parte del cuerpo académico del Departamento de Expresión de la Facultad de Artes Liberales. Coordinador del área de Oratoria desde 2022. Imparte cursos de Taller de Expresión Oral I y II, CORE: Escritura Argumentativa y CORE: Literatura y Humanidades. Director literario y editor en Cerrojo Ediciones desde 2015 y director del Taller de Poesía "La Chascona" de la Fundación Pablo Neruda.',
      en: 'Part of the academic faculty of the Department of Expression of the Faculty of Liberal Arts since 2016. Coordinator of the Public Speaking area since 2022. Teaches Oral Expression Workshop I and II, CORE: Argumentative Writing and CORE: Literature and Humanities. Literary director and editor at Cerrojo Ediciones since 2015, and director of the "La Chascona" Poetry Workshop at the Pablo Neruda Foundation.',
      pt: 'Desde 2016 faz parte do corpo académico do Departamento de Expressão da Faculdade de Artes Liberais. Coordenador da área de Oratória desde 2022. Ministra cursos de Workshop de Expressão Oral I e II, CORE: Escrita Argumentativa e CORE: Literatura e Humanidades. Diretor literário e editor na Cerrojo Ediciones desde 2015 e diretor do Workshop de Poesia "La Chascona" da Fundação Pablo Neruda.',
      zh: '自2016年起隶属于自由艺术学院表达系教师团队。自2022年起担任演讲方向协调员。讲授口语表达工作坊I和II、核心课程：论证写作及核心课程：文学与人文。自2015年起担任Cerrojo出版社文学总监及编辑，并担任巴勃罗·聂鲁达基金会"La Chascona"诗歌工作坊主任。',
    },
    email: 'francisco.martinovich@uai.cl',
    foto: '/images/docente-francisco-martinovich.jpg',
    fotoPendiente: false,
  },
  {
    nombre: 'Jorge Cuadra',
    rol: {
      es: 'Profesor Titular · Ciencias',
      en: 'Full Professor · Sciences',
      pt: 'Professor Titular · Ciências',
      zh: '正教授 · 自然科学',
    },
    titulo: {
      es: 'Doctor en Astronomía',
      en: 'PhD in Astronomy',
      pt: 'Doutor em Astronomia',
      zh: '天文学博士',
    },
    formacionLista: {
      es: [
        'Doctor en Ciencias Naturales, Ludwig-Maximilians-Universität München, Alemania, 2006',
        'Licenciado en Astronomía, Pontificia Universidad Católica de Chile, Chile, 2002',
      ],
      en: [
        'PhD in Natural Sciences, Ludwig-Maximilians-Universität München, Germany, 2006',
        "Bachelor's in Astronomy, Pontificia Universidad Católica de Chile, Chile, 2002",
      ],
      pt: [
        'Doutorado em Ciências Naturais, Ludwig-Maximilians-Universität München, Alemanha, 2006',
        'Licenciado em Astronomia, Pontificia Universidad Católica de Chile, Chile, 2002',
      ],
      zh: [
        '自然科学博士，路德维希·马克西米利安慕尼黑大学，德国，2006年',
        '天文学学士，智利天主教大学，智利，2002年',
      ],
    },
    bio: {
      es: 'Su investigación se enfoca en modelar numéricamente sistemas astrofísicos, desde discos protoplanetarios y estrellas binarias hasta agujeros negros súper masivos. Ha trabajado en la Universidad de Colorado, el Observatorio Astronómico de Shanghai, el Instituto Max Planck de Astrofísica y la Universidad Católica de Chile. Director de un Grupo Asociado Max Planck sobre Astrofísica del Centro Galáctico.',
      en: 'His research focuses on numerically modelling astrophysical systems, from protoplanetary discs and binary stars to supermassive black holes. Has worked at the University of Colorado, the Shanghai Astronomical Observatory, the Max Planck Institute for Astrophysics and the Catholic University of Chile. Director of a Max Planck Associated Group on Galactic Centre Astrophysics.',
      pt: 'A sua investigação centra-se na modelação numérica de sistemas astrofísicos, desde discos protoplanetários e estrelas binárias até buracos negros supermassivos. Trabalhou na Universidade do Colorado, no Observatório Astronômico de Xangai, no Instituto Max Planck de Astrofísica e na Universidade Católica do Chile. Diretor de um Grupo Associado Max Planck sobre Astrofísica do Centro Galáctico.',
      zh: '研究方向聚焦于天体物理系统的数值模拟，涵盖原行星盘、双星系统到超大质量黑洞。曾在科罗拉多大学、上海天文台、马克斯·普朗克天体物理研究所和智利天主教大学工作。担任银河系中心天体物理学马克斯·普朗克联合研究组主任。',
    },
    email: 'jorge.cuadra@uai.cl',
    foto: '/images/docente-jorge-cuadra.jpg',
    fotoPendiente: false,
  },
]
