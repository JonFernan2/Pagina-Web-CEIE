import type { ProgramData } from './programs'

export const PROGRAMS_DATA_PT: ProgramData[] = [
  {
    slug: 'semestral',
    nombre: 'Programa Semestral de Espanhol',
    descripcionBreve: 'Cursos de Espanhol como língua estrangeira (níveis A1–C1), cursos eletivos temáticos e Cursos do Programa CORE UAI.',
    descripcionExtendida:
      'O Programa Semestral de Espanhol foi concebido para desenvolver progressivamente as competências linguísticas, acadêmicas e culturais em espanhol de estudantes internacionais, facilitando sua integração na experiência universitária. Os cursos estão alinhados ao Quadro Europeu Comum de Referência para as Línguas (QECR) e seguem os padrões do Plano Curricular do Instituto Cervantes (PCIC). São oferecidos do nível A1 ao C1 e incluem créditos acadêmicos.\n\nAo contrário de outros programas de espanhol no Chile, o Programa Semestral UAI integra o ensino do idioma com o modelo de Artes Liberais que distingue nossa universidade. Os estudantes não apenas aprendem espanhol: desenvolvem pensamento crítico, capacidade argumentativa e uma compreensão profunda da cultura chilena e latino-americana através de uma metodologia ativo-participativa inspirada no Core Curriculum da Universidade de Columbia. Além disso, os estudantes têm a oportunidade de se integrar à comunidade UAI, participando em organizações estudantis, oficinas extracurriculares, eventos culturais e atividades esportivas com estudantes chilenos e internacionais de mais de 20 países.',
    objetivo:
      'Desenvolver progressivamente as competências linguísticas, acadêmicas e culturais em espanhol de estudantes internacionais, facilitando sua integração na experiência universitária.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'Estudantes de graduação internacional.',
    cursosTabla: [
      { nombre: 'Espanhol Básico A1/A2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'Este curso promove o desenvolvimento das competências comunicativas em espanhol tanto na expressão oral como escrita, proporcionando ferramentas para comunicar-se em contextos formais e informais, em âmbitos pessoais e profissionais. O uso da língua em contexto permitirá alcançar uma comunicação clara e eficaz.' },
      { nombre: 'Espanhol Intermediário: Comunicação B1/B2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'Este curso tem como objetivo consolidar os aspectos comunicativos do uso do espanhol através da interação constante em contextos formais e informais. Fomenta a capacidade de expressar-se oralmente e por escrito, habilidades fundamentais para a inserção efetiva na sociedade.' },
      { nombre: 'Espanhol Intermediário: Gramática B1–B2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'Este curso é voltado a estudantes de nível intermediário que buscam consolidar e aprofundar o domínio gramatical do espanhol. Por meio da análise e da prática contextualizada, os estudantes trabalham estruturas complexas que lhes permitem expressar-se com maior precisão e correção em situações comunicativas diversas.' },
      { nombre: 'Espanhol Avançado: Cultura Chilena C1', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'Este curso é desenvolvido para estudantes de nível avançado que desejam aprofundar sua competência linguística por meio do estudo da cultura chilena. Por meio de textos, materiais audiovisuais e atividades comunicativas, os estudantes analisam aspectos sociais, históricos e culturais do Chile.' },
      { nombre: 'Espanhol Avançado: Gramática C1', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'Este curso aprofunda o domínio do espanhol por meio da análise e uso consciente de estruturas gramaticais complexas em contextos acadêmicos, profissionais e culturais. O trabalho orienta-se para melhorar a precisão, a coerência e a adequação discursiva, favorecendo uma comunicação clara e matizada.' },
      { nombre: 'Fonética do Espanhol', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: 'Este curso introduz os estudantes no sistema fonético e fonológico do espanhol, com ênfase na pronúncia, entonação e ritmo. Por meio de exercícios práticos de percepção e produção oral, os participantes desenvolvem uma pronúncia mais clara e compreensível em diferentes contextos comunicativos.' },
      { nombre: 'Espanhol Profissional para Negócios e Mercados Globais (B1/B2)', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticos', descripcion: 'Este curso é voltado a estudantes que precisam utilizar o espanhol em contextos profissionais vinculados ao mundo dos negócios. São trabalhadas situações comunicativas típicas do ambiente empresarial, como reuniões, apresentações e negociações, além do vocabulário e das estruturas necessárias para uma comunicação eficaz.' },
      { nombre: 'Espanhol para a Saúde e Comunicação Médica (B1/B2)', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticos', descripcion: 'Este curso é destinado a estudantes ou profissionais que necessitam do espanhol para interagir em contextos de saúde. Por meio de situações comunicativas reais, são desenvolvidas habilidades linguísticas para o atendimento de pacientes, o trabalho em equipes de saúde e a compreensão de textos especializados.' },
      { nombre: 'Vivir para Contarla: Literatura Latino-Americana', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticos', descripcion: 'Este curso explora o papel da memória, da nostalgia e da identidade na literatura latino-americana. Por meio da leitura e análise de obras representativas de autores como Gabriel García Márquez, os estudantes descobrirão como os escritores da região transformam recordações e experiências pessoais em narrativas que refletem processos culturais coletivos.' },
      { nombre: 'Audácia Cinematográfica: Chile através do Documentário', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticos', descripcion: 'Este curso oferece uma introdução ao cinema documentário chileno como ferramenta para compreender a história, a memória e os processos sociais do país. Por meio da análise de obras fundamentais, os estudantes explorarão como o documentário contribuiu para preservar a memória coletiva e refletir sobre acontecimentos históricos chave.' },
      { nombre: 'Core: Arte e Humanidades', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Core UAI', descripcion: 'Este curso propõe um exercício de análise crítica e observação direta de obras fundamentais de arquitetura, pintura e escultura, desde a descrição técnica até a interpretação iconográfica e simbólica, complementado por visitas a monumentos e exposições.' },
      { nombre: 'Core: Ciências', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Core UAI', descripcion: 'A disciplina aborda as grandes interrogações da física e da biologia contemporânea, utilizando a ciência como ferramenta para potencializar o raciocínio lógico e a capacidade de construir argumentos sólidos fundamentados no rigor científico.' },
      { nombre: 'Core: Escrita Argumentativa', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Core UAI', descripcion: 'Sob a premissa de "aprender a escrever escrevendo", este curso é concebido para transformar o pensamento em textos ensaísticos eficazes, centrando-se na pesquisa bibliográfica e no domínio de recursos persuasivos para alcançar autonomia expressiva.' },
      { nombre: 'Core: Ética', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Core UAI', descripcion: 'Este curso aprofunda a dimensão moral da existência humana, focando na responsabilidade individual. Por meio de reflexões sobre a justiça das ações e a busca de uma vida boa, os estudantes aprendem a analisar, avaliar e justificar suas decisões cotidianas e profissionais.' },
    ],
    horarioClases: 'Segunda a sexta-feira, 08:30 – 18:55',
    horarios: [
      { turno: 'Aulas', dias: 'Segunda a sexta-feira', hora: '08:30 – 18:55' },
    ],
    temario: [
      {
        nivel: 'A1 — Iniciante',
        contenidos: [
          'Apresentações pessoais e cumprimentos',
          'Vocabulário da vida cotidiana',
          'Presente do indicativo: verbos regulares',
          'Números, datas e horários',
          'Pronúncia básica do espanhol chileno',
        ],
      },
      {
        nivel: 'A2 — Elementar',
        contenidos: [
          'Narração de experiências passadas (pretérito)',
          'Descrição de pessoas, lugares e objetos',
          'Expressão de gostos e preferências',
          'Transações cotidianas: compras, restaurantes, transporte',
          'Introdução a expressões idiomáticas chilenas',
        ],
      },
      {
        nivel: 'B1 — Intermediário',
        contenidos: [
          'Argumentação oral e escrita',
          'Narração em vários tempos verbais',
          'Compreensão de textos jornalísticos',
          'Debate e discussão sobre temas atuais',
          'Registros formais e informais',
        ],
      },
      {
        nivel: 'B2 — Intermediário Superior',
        contenidos: [
          'Análise de textos acadêmicos e literários',
          'Redação de relatórios e ensaios',
          'Compreensão de discursos autênticos',
          'Subjuntivo: uso e nuances',
          'Espanhol em contextos profissionais',
        ],
      },
      {
        nivel: 'C1 — Avançado',
        contenidos: [
          'Expressão de nuance e registros complexos',
          'Análise da literatura chilena e latino-americana',
          'Produção acadêmica avançada',
          'Pragmática e coerência discursiva',
          'Preparação para a certificação DELE C1',
        ],
      },
    ],
    actividades: [
      'Orientação de boas-vindas',
      'Passeios locais por Viña del Mar, Valparaíso e Santiago',
      '"Amazing Race" urbano',
      'Torneios de futebol',
      'Feira internacional',
      'Jantar internacional',
      'Aulas de dança',
    ],
    condiciones: [
      {
        titulo: 'Requisito de entrada',
        descripcion: 'Nível mínimo exigido para o curso selecionado (exceto A1). Teste de diagnóstico obrigatório antes do início do semestre, incluído na matrícula do curso.',
      },
      {
        titulo: 'Abertura de cursos',
        descripcion: 'A abertura de cada curso está sujeita a um mínimo de cinco estudantes matriculados por nível.',
      },
      {
        titulo: 'Presença',
        descripcion: 'Mínimo de 80% de frequência para receber o certificado de conclusão.',
      },
      {
        titulo: 'Cancelamento',
        descripcion: 'Com 45+ dias de antecedência: sem encargos. 15–44 dias: encargo de 50%. Menos de 15 dias: sem reembolso. Força maior avaliada individualmente. Por escrito para caroline.cortes@uai.cl.',
      },
    ],
    participantes: '5 pessoas',
    duracion: '17 semanas',
    certificado: {
      tipo: 'Histórico Escolar Oficial',
      emite: 'Universidad Adolfo Ibáñez (por meio do CEIE)',
      reconocimiento: 'Programa alinhado ao QECR. Equivalências acadêmicas por meio dos acordos internacionais da UAI.',
    },
    precio: {
      estandarLabel: 'Cursos de Espanhol (ELE)',
      estandar: 'USD 950 por curso',
      inSituLabel: 'Cursos temáticos e Core',
      inSitu: 'USD 1.188 por curso',
    },
  },
  {
    slug: 'intensivo',
    nombre: 'Programa Intensivo de Espanhol',
    descripcionBreve: 'Espanhol intensivo de 2 ou 4 semanas.',
    descripcionExtendida:
      'O Programa Intensivo de Espanhol foi concebido para estudantes internacionais que desejam desenvolver suas competências no idioma em um período breve, sem a necessidade de permanecer um semestre completo no Chile. O programa combina uma formação intensiva no idioma com experiências de imersão cultural, favorecendo um aprendizado prático e significativo em um contexto hispanófono.\n\nOs cursos estão alinhados ao Quadro Europeu Comum de Referência para as Línguas (QECR) e seguem os padrões do Plano Curricular do Instituto Cervantes (PCIC). O programa permite avançar no domínio do espanhol por meio de uma experiência concentrada de aprendizagem linguística e cultural.',
    objetivo:
      'Avançar no domínio do espanhol por meio de uma experiência intensiva e imersiva, adaptada ao nível e objetivos de cada participante.',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'Estudantes internacionais que buscam formação intensiva de curta duração.',
    cursosTabla: [
      { nombre: 'Gramática e Estruturas Comunicativas', horas: 22, precioUSD: 900, creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 2 semanas', descripcion: 'Curso intensivo voltado ao desenvolvimento das estruturas gramaticais fundamentais do espanhol. Por meio de uma metodologia ativa e aplicada, os estudantes adquirem as ferramentas necessárias para compreender e utilizar as principais estruturas do idioma em situações comunicativas do dia a dia. O curso aborda conteúdos gramaticais essenciais, integrando vocabulário, compreensão e produção oral e escrita, com atividades práticas que permitem aplicar os conteúdos em contextos reais de comunicação. O formato intensivo favorece a consolidação progressiva da aprendizagem e oferece uma base sólida para continuar avançando no domínio do espanhol.' },
      { nombre: 'Comunicação e Cultura Chilena', horas: 22, precioUSD: 900, creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 2 semanas', descripcion: 'Curso intensivo voltado ao desenvolvimento das competências comunicativas básicas em espanhol, integrando a aprendizagem do idioma a uma aproximação à cultura chilena e latino-americana. Os estudantes desenvolvem ferramentas para se comunicar de forma simples em situações do dia a dia, tanto oralmente quanto por escrito. Por meio de atividades práticas e experiências de imersão, os estudantes têm a oportunidade de usar o espanhol em contextos reais, enquanto exploram aspectos da vida cotidiana, da sociedade e da cultura chilena. O curso inclui atividades culturais em Viña del Mar e Valparaíso, promovendo a reflexão intercultural e uma compreensão mais próxima do contexto em que se desenvolve a sua experiência de aprendizagem.' },
      { nombre: 'Gramática e Estruturas Comunicativas', horas: 40, precioUSD: 1800, creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 4 semanas', descripcion: 'Curso intensivo voltado ao desenvolvimento das estruturas gramaticais fundamentais do espanhol. Por meio de uma metodologia ativa e aplicada, os estudantes adquirem as ferramentas necessárias para compreender e utilizar as principais estruturas do idioma em situações comunicativas do dia a dia. O curso aborda conteúdos gramaticais essenciais, integrando vocabulário, compreensão e produção oral e escrita, com atividades práticas que permitem aplicar os conteúdos em contextos reais de comunicação. O formato intensivo favorece a consolidação progressiva da aprendizagem e oferece uma base sólida para continuar avançando no domínio do espanhol.' },
      { nombre: 'Comunicação e Cultura Chilena', horas: 40, precioUSD: 1800, creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 4 semanas', descripcion: 'Curso intensivo voltado ao desenvolvimento das competências comunicativas básicas em espanhol, integrando a aprendizagem do idioma a uma aproximação à cultura chilena e latino-americana. Os estudantes desenvolvem ferramentas para se comunicar de forma simples em situações do dia a dia, tanto oralmente quanto por escrito. Por meio de atividades práticas e experiências de imersão, os estudantes têm a oportunidade de usar o espanhol em contextos reais, enquanto exploram aspectos da vida cotidiana, da sociedade e da cultura chilena. O curso inclui atividades culturais em Viña del Mar e Valparaíso, promovendo a reflexão intercultural e uma compreensão mais próxima do contexto em que se desenvolve a sua experiência de aprendizagem.' },
    ],
    horarioClases: 'Segunda a quinta-feira, 08:30 – 18:55 · Atividades culturais às sextas-feiras',
    horarios: [
      { turno: 'Aulas', dias: 'Segunda a quinta-feira', hora: '08:30 – 18:55' },
      { turno: 'Atividades culturais', dias: 'Sexta-feira', hora: 'Conforme programa' },
    ],
    temario: [
      {
        nivel: 'Gramática e Estruturas Comunicativas',
        descripcion: [
          'Curso intensivo voltado ao desenvolvimento das estruturas gramaticais fundamentais do espanhol. Por meio de uma metodologia ativa e aplicada, os estudantes adquirem as ferramentas necessárias para compreender e utilizar as principais estruturas do idioma em situações comunicativas do dia a dia.',
          'O curso aborda conteúdos gramaticais essenciais, integrando vocabulário, compreensão e produção oral e escrita, com atividades práticas que permitem aplicar os conteúdos em contextos reais de comunicação. O formato intensivo favorece a consolidação progressiva da aprendizagem e oferece uma base sólida para continuar avançando no domínio do espanhol.',
        ],
        ficha: [{ label: 'Horas', value: '22 h (2 semanas) · 40 h (4 semanas)' }, { label: 'Créditos', value: '2 (2 semanas) · 4 (4 semanas)' }, { label: 'Duração', value: '2 ou 4 semanas' }, { label: 'Nº mínimo de estudantes', value: '5' }, { label: 'Nº máximo de estudantes', value: '15' }, { label: 'Campus', value: 'Viña del Mar' }, { label: 'Preço', value: '900 USD (2 semanas) · 1.800 USD (4 semanas)' }],
        contenidos: [],
      },
      {
        nivel: 'Comunicação e Cultura Chilena',
        descripcion: [
          'Curso intensivo voltado ao desenvolvimento das competências comunicativas básicas em espanhol, integrando a aprendizagem do idioma a uma aproximação à cultura chilena e latino-americana. Os estudantes desenvolvem ferramentas para se comunicar de forma simples em situações do dia a dia, tanto oralmente quanto por escrito.',
          'Por meio de atividades práticas e experiências de imersão, os estudantes têm a oportunidade de usar o espanhol em contextos reais, enquanto exploram aspectos da vida cotidiana, da sociedade e da cultura chilena. O curso inclui atividades culturais em Viña del Mar e Valparaíso, promovendo a reflexão intercultural e uma compreensão mais próxima do contexto em que se desenvolve a sua experiência de aprendizagem.',
        ],
        ficha: [{ label: 'Horas', value: '22 h (2 semanas) · 40 h (4 semanas)' }, { label: 'Créditos', value: '2 (2 semanas) · 4 (4 semanas)' }, { label: 'Duração', value: '2 ou 4 semanas' }, { label: 'Nº mínimo de estudantes', value: '5' }, { label: 'Nº máximo de estudantes', value: '15' }, { label: 'Campus', value: 'Viña del Mar' }, { label: 'Preço', value: '900 USD (2 semanas) · 1.800 USD (4 semanas)' }],
        contenidos: [],
      },
    ],
    actividades: [
      'Orientação de boas-vindas',
      'Passeios locais por Viña del Mar e Valparaíso',
      'Aula de culinária chilena',
    ],
    condiciones: [
      {
        titulo: 'Requisito de entrada',
        descripcion: 'Nível mínimo exigido para o curso selecionado (exceto A1). Teste de diagnóstico obrigatório antes do início do programa, incluído na matrícula do curso.',
      },
      {
        titulo: 'Abertura de cursos',
        descripcion: 'A abertura de cada curso está sujeita a um mínimo de cinco estudantes matriculados por nível.',
      },
      {
        titulo: 'Presença',
        descripcion: 'Mínimo de 80% de frequência para receber o certificado de conclusão.',
      },
      {
        titulo: 'Cancelamento',
        descripcion: 'Com 45+ dias de antecedência: sem encargos. 15–44 dias: encargo de 50%. Menos de 15 dias: sem reembolso. Força maior avaliada individualmente. Por escrito para caroline.cortes@uai.cl.',
      },
    ],
    participantes: '5 pessoas',
    duracion: '2 a 4 semanas',
    certificado: {
      tipo: 'Histórico Escolar Oficial',
      emite: 'Universidad Adolfo Ibáñez (por meio do CEIE)',
      reconocimiento: 'Certifica as horas concluídas e o nível QECR atingido.',
    },
    precio: {
      resumen: 'A partir de USD 900',
      estandarLabel: 'Intensivo 2 semanas (por curso)',
      estandar: 'USD 900',
      inSituLabel: 'Intensivo 4 semanas (por curso)',
      inSitu: 'USD 1.800',
    },
    modalidades: [
      'Presencial · Campus Viña del Mar',
    ],
    perfilIdeal: 'Estudantes internacionais que desejam desenvolver o idioma em um período breve.',
  },
  {
    slug: 'fins-especificos',
    vistaSimple: true,
    incluye: {
      titulo: 'O que incluem nossos programas?',
      intro: 'Os programas do CEIE são elaborados de acordo com as características, os objetivos e a modalidade de cada experiência. Dependendo do tipo de programa (individual, grupal ou institucional) e de seus requisitos específicos, podem incluir:',
      items: [
        'Desenho curricular adaptado ao nível, ao perfil e aos objetivos de aprendizagem dos participantes.',
        'Docentes especializados no ensino de espanhol e, quando for o caso, na área temática do programa.',
        'Materiais didáticos selecionados ou desenvolvidos de acordo com os conteúdos e objetivos do curso.',
        'Acompanhamento e coordenação durante o desenvolvimento do programa.',
        'Atividades culturais e experiências de imersão, conforme a modalidade e as características do programa.',
        'Visitas acadêmicas, profissionais ou culturais, quando pertinentes aos objetivos do programa.',
        'Serviços de apoio logístico, como hospedagem e transporte, para programas presenciais que assim o exijam.',
        'Certificado de participação ou aprovação, conforme as características do programa.',
      ],
    },
    areasNota: 'As áreas a seguir são exemplos de especializações que podem ser selecionadas mediante acordo prévio entre ambas as partes.',
    nombre: 'Espanhol com Fins Específicos',
    descripcionBreve: 'Programa de curta duração elaborado à medida conforme as necessidades, interesses e objetivos de cada pessoa, grupo ou instituição.',
    descripcionExtendida:
      'O Espanhol com Fins Específicos é um programa de curta duração elaborado sob medida de acordo com as necessidades, interesses e objetivos específicos de cada pessoa, grupo ou instituição. Seu propósito é fortalecer as competências comunicativas em espanhol em âmbitos acadêmicos, profissionais ou disciplinares, por meio de conteúdos e atividades adaptados ao perfil e ao nível linguístico dos participantes.\n\nO programa combina o desenvolvimento de vocabulário especializado, funções comunicativas e recursos linguísticos relevantes para a área de interesse com atividades práticas voltadas ao uso do espanhol em situações e contextos próprios de cada âmbito. A metodologia e os conteúdos são definidos em função dos objetivos do programa, podendo incorporar aulas de espanhol, oficinas, atividades aplicadas e experiências culturais ou profissionais.',
    objetivo:
      'Fortalecer as competências comunicativas em espanhol em âmbitos acadêmicos, profissionais ou disciplinares, por meio de programas elaborados à medida conforme as necessidades de cada pessoa, grupo ou instituição.',
    niveles: ['Conforme requisitos institucionais'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'Estudantes LATAM (graduação, pós-graduação), executivos, empresas, organismos internacionais e grupos profissionais.',
    cursosTabla: [
      { nombre: 'Cursos individuais personalizados', horas: 'Flexível', precioUSD: 'A consultar', modalidad: 'Presencial ou online', descripcion: 'Programa de espanhol elaborado de acordo com o nível, objetivos, interesses e disponibilidade de cada participante. O conteúdo e o ritmo de aprendizagem se adaptam às suas necessidades específicas, permitindo trabalhar competências gerais do idioma ou aprofundar em âmbitos acadêmicos, profissionais ou de interesse particular. As aulas seguem uma abordagem comunicativa e personalizada, combinando o desenvolvimento de competências linguísticas com atividades e materiais selecionados para cada participante.' },
      { nombre: 'Programas grupais para instituições', horas: 'Flexível', precioUSD: 'A consultar', modalidad: 'Presencial ou online', descripcion: 'Programas de espanhol elaborados à medida para universidades, instituições, empresas ou outros grupos, de acordo com o perfil dos participantes e os objetivos acadêmicos, profissionais ou culturais definidos para cada experiência. Os programas podem combinar aulas de espanhol com conteúdos especializados, atividades culturais, experiências de imersão e visitas acadêmicas ou profissionais. O design curricular, a duração, a intensidade e a modalidade são estabelecidos em conjunto com a instituição solicitante.' },
    ],
    horarios: [
      { turno: 'Variável', dias: 'Coordenado com a organização contratante', hora: 'Conforme acordo' },
    ],
    temario: [
      {
        nivel: 'Espanhol para Negócios e Indústria',
        contenidos: [
          'Comunicação corporativa e negociação',
          'Redação de relatórios e e-mails profissionais',
          'Apresentações orais em contextos empresariais',
          'Vocabulário específico do setor',
        ],
      },
      {
        nivel: 'Espanhol Acadêmico',
        contenidos: [
          'Leitura e escrita acadêmica em espanhol',
          'Citações e referências em formato acadêmico',
          'Apresentação de resultados de pesquisa',
          'Participação em colóquios e conferências',
        ],
      },
      {
        nivel: 'Espanhol para Diplomacia e RI',
        contenidos: [
          'Protocolo e linguagem diplomática',
          'Redação de notas e comunicados diplomáticos',
          'Espanhol para organizações internacionais',
          'Análise política e declarações de posição',
        ],
      },
    ],
    actividades: [
      'Design curricular adaptado ao nível, perfil e objetivos de aprendizagem',
      'Professores especializados em ensino de espanhol e, quando aplicável, na área temática',
      'Materiais didáticos selecionados ou desenvolvidos conforme os objetivos do curso',
      'Acompanhamento e coordenação durante o programa',
      'Atividades culturais e experiências de imersão conforme a modalidade',
      'Visitas acadêmicas, profissionais ou culturais pertinentes aos objetivos',
      'Serviços de apoio logístico (hospedagem e transporte) para programas presenciais',
      'Certificado de participação ou conclusão conforme as características do programa',
    ],
    condiciones: [
      {
        titulo: 'Modalidade in situ',
        descripcion: 'A modalidade in situ inclui despesas de deslocamento do professor conforme o local acordado.',
      },
      {
        titulo: 'Cancelamento de sessão',
        descripcion: 'Cancelamento com pelo menos 24 horas de antecedência. Por escrito para caroline.cortes@uai.cl.',
      },
      {
        titulo: 'Cancelamento de programa',
        descripcion: 'Com 45+ dias de antecedência: sem encargos. 15–44 dias: encargo de 50%. Menos de 15 dias: sem reembolso. Força maior avaliada individualmente. Por escrito para caroline.cortes@uai.cl.',
      },
    ],
    participantes: 'Variável conforme acordo institucional',
    duracion: '1 a 2 semanas (à medida)',
    certificado: {
      tipo: 'Certificado de Formação Especializada CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifica as horas concluídas e o nível QECR atingido na área de especialização.',
    },
    precio: {
      estandarLabel: 'Conforme duração e modalidade',
      estandar: 'USD 900 – 1.500',
      notas: 'Solicite uma proposta formal em programascortos@uai.cl',
    },
    submodalidades: [
      'Cursos individuais personalizados',
      'Programas grupais para instituições',
    ],
    nota: 'Destinado a organizações: embaixadas, empresas, universidades parceiras, governos regionais.',
  },
]
