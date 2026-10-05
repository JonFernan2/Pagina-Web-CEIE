import type { ProgramData } from './programs'

export const PROGRAMS_DATA_PT: ProgramData[] = [
  {
    slug: 'semestral',
    nombre: 'Programa Semestral de Espanhol',
    descripcionBreve: 'Progressão estruturada por níveis QECR em 17 semanas. Cursos de língua, temáticos e Core Internacional.',
    descripcionExtendida:
      'O Programa Semestral de Espanhol foi concebido para desenvolver progressivamente as competências linguísticas, acadêmicas e culturais em espanhol de estudantes internacionais não falantes de espanhol, facilitando sua integração na experiência universitária. Os cursos estão alinhados ao Quadro Europeu Comum de Referência para as Línguas (QECR) e seguem os padrões do Plano Curricular do Instituto Cervantes (PCIC). São oferecidos do nível A1 ao C1 e incluem créditos acadêmicos.',
    objetivo:
      'Desenvolver progressivamente as competências linguísticas, acadêmicas e culturais em espanhol de estudantes internacionais não falantes de espanhol, facilitando sua integração na experiência universitária.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'Estudantes de graduação internacional sem background em espanhol.',
    cursosTabla: [
      { nombre: 'Gramática Básica de Espanhol', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Comunicação Básica de Espanhol', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Gramática Intermediária de Espanhol', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Comunicação Intermediária de Espanhol', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Gramática Avançada de Espanhol', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Comunicação Avançada de Espanhol', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Fonética do Espanhol', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: 'Temático: Espanhol Profissional para Negócios e Mercados Globais', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticos' },
      { nombre: 'Temático: Espanhol para a Saúde e Comunicação Médica', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticos' },
      { nombre: 'Temático: Vivir para Contarla — Literatura Latino-Americana', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticos' },
      { nombre: 'Temático: Audácia Cinematográfica — Chile através do Documentário', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Temáticos' },
      { nombre: 'Cursos Core Internacionais (Literatura, Ética, Ciências, Civilização Contemporânea, Escrita e Artes)', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'Core Internacional' },
    ],
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
        titulo: 'Presença',
        descripcion: 'Mínimo de 80% de frequência para receber o certificado de conclusão.',
      },
      {
        titulo: 'Cancelamento',
        descripcion: 'Com 45+ dias de antecedência: sem encargos. 15–44 dias: encargo de 50%. Menos de 15 dias: sem reembolso. Força maior avaliada individualmente. Por escrito para caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 24,
    duracion: '17 semanas',
    certificado: {
      tipo: 'Histórico Escolar Oficial',
      emite: 'Universidad Adolfo Ibáñez (por meio do CEIE)',
      reconocimiento: 'Programa alinhado ao QECR. Equivalências acadêmicas por meio dos acordos internacionais da UAI.',
    },
    precio: {
      estandar: 'USD 950 / por participante',
      inSitu: 'USD 1.188 / curso temático ou Core',
    },
  },
  {
    slug: 'intensivo',
    nombre: 'Programa Intensivo de Espanhol',
    descripcionBreve: 'Formação intensiva em grupo para estudantes internacionais que desejam desenvolver o espanhol em um período breve.',
    descripcionExtendida:
      'O Programa Intensivo de Espanhol foi concebido para estudantes internacionais não falantes de espanhol que desejam desenvolver suas competências no idioma em um período breve, sem a necessidade de permanecer um semestre completo no Chile. O programa combina uma formação intensiva no idioma com experiências de imersão cultural, favorecendo um aprendizado prático e significativo em um contexto hispanófono.\n\nOs cursos estão alinhados ao Quadro Europeu Comum de Referência para as Línguas (QECR) e seguem os padrões do Plano Curricular do Instituto Cervantes (PCIC). O programa permite avançar no domínio do espanhol por meio de uma experiência concentrada de aprendizagem linguística e cultural.',
    objetivo:
      'Avançar no domínio do espanhol por meio de uma experiência intensiva e imersiva, adaptada ao nível e objetivos de cada participante.',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'Estudantes internacionais não falantes de espanhol que buscam formação intensiva de curta duração.',
    cursosTabla: [
      { nombre: 'Gramática e Estruturas Comunicativas', horas: 22, precioUSD: '900 USD (ambos os cursos)', creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 2 semanas', descripcion: 'Curso intensivo orientado ao desenvolvimento e fortalecimento dos recursos gramaticais e linguísticos do espanhol. Metodologia ativa e aplicada, com foco em comunicação progressivamente mais precisa em diferentes contextos.' },
      { nombre: 'Comunicação e Cultura Chilena', horas: 22, precioUSD: 'Incluído', creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 2 semanas', descripcion: 'Curso intensivo orientado ao desenvolvimento das competências comunicativas em espanhol, integrando o aprendizado do idioma com uma aproximação à cultura chilena e latino-americana. Inclui atividades culturais em Viña del Mar e Valparaíso.' },
      { nombre: 'Gramática e Estruturas Comunicativas', horas: 40, precioUSD: '1.800 USD (ambos os cursos)', creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 4 semanas', descripcion: 'Curso intensivo orientado ao desenvolvimento e fortalecimento dos recursos gramaticais e linguísticos do espanhol. O formato de quatro semanas permite abordar e consolidar progressivamente os recursos correspondentes ao nível.' },
      { nombre: 'Comunicação e Cultura Chilena', horas: 40, precioUSD: 'Incluído', creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: 'Intensivo 4 semanas', descripcion: 'Curso intensivo orientado ao desenvolvimento das competências comunicativas em espanhol com integração cultural. O formato de quatro semanas permite aprofundar progressivamente as competências comunicativas e fortalecer a integração entre aprendizagem linguística e experiência cultural.' },
    ],
    horarios: [
      { turno: 'Aulas', dias: 'Segunda a quinta-feira', hora: 'Conforme programa' },
      { turno: 'Atividades culturais', dias: 'Sexta-feira', hora: 'Conforme programa' },
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
        ],
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
        titulo: 'Presença',
        descripcion: 'Mínimo de 80% de frequência para receber o certificado de conclusão.',
      },
      {
        titulo: 'Cancelamento',
        descripcion: 'Com 45+ dias de antecedência: sem encargos. 15–44 dias: encargo de 50%. Menos de 15 dias: sem reembolso. Força maior avaliada individualmente. Por escrito para caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 15,
    duracion: '2 a 4 semanas',
    certificado: {
      tipo: 'Histórico Escolar Oficial',
      emite: 'Universidad Adolfo Ibáñez (por meio do CEIE)',
      reconocimiento: 'Certifica as horas concluídas e o nível QECR atingido.',
    },
    precio: {
      estandar: 'USD 900 (Intensivo 2 semanas · ambos os cursos)',
      inSitu: 'USD 1.800 (Intensivo 4 semanas · ambos os cursos)',
    },
    modalidades: [
      'Presencial · Campus Viña del Mar',
    ],
    perfilIdeal: 'Estudantes internacionais não falantes de espanhol que desejam desenvolver o idioma em um período breve.',
  },
  {
    slug: 'fins-especificos',
    nombre: 'Espanhol com Fins Específicos',
    descripcionBreve: 'Programa de curta duração desenvolvido à medida para indivíduos, grupos ou instituições, de acordo com necessidades, interesses e objetivos específicos.',
    descripcionExtendida:
      'O Espanhol com Fins Específicos é um programa de curta duração elaborado à medida de acordo com as necessidades, interesses e objetivos específicos de cada pessoa, grupo ou instituição. Seu propósito é fortalecer as competências comunicativas em espanhol em âmbitos acadêmicos, profissionais ou disciplinares, por meio de conteúdos e atividades adaptados ao perfil e nível linguístico dos participantes.\n\nO programa combina o desenvolvimento de vocabulário especializado, funções comunicativas e recursos linguísticos relevantes para a área de interesse com atividades práticas orientadas ao uso do espanhol em situações e contextos próprios de cada âmbito. A metodologia e os conteúdos são definidos em função dos objetivos do programa, podendo incorporar aulas de espanhol, oficinas, atividades aplicadas e experiências culturais ou profissionais.',
    objetivo:
      'Fortalecer as competências comunicativas em espanhol em âmbitos acadêmicos, profissionais ou disciplinares, por meio de programas elaborados à medida conforme as necessidades de cada pessoa, grupo ou instituição.',
    niveles: ['Conforme requisitos institucionais'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'Estudantes LATAM (graduação, pós-graduação), executivos, empresas, organismos internacionais e grupos profissionais.',
    cursosTabla: [
      { nombre: 'Saúde', horas: '30–50', precioUSD: 'USD 900–1.500', modalidad: '1–2 semanas, à medida' },
      { nombre: 'Negócios', horas: '30–50', precioUSD: 'USD 900–1.500', modalidad: 'À medida' },
      { nombre: 'Astronomia', horas: '30–50', precioUSD: 'USD 900–1.500', modalidad: 'À medida' },
      { nombre: 'Rotas Literárias', horas: '30–50', precioUSD: 'USD 900–1.500', modalidad: 'À medida' },
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
    grupoMaximo: 'Variável conforme acordo institucional',
    duracion: '1 a 2 semanas (à medida)',
    certificado: {
      tipo: 'Certificado de Formação Especializada CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifica as horas concluídas e o nível QECR atingido na área de especialização.',
    },
    precio: {
      estandar: 'USD 900 – 1.500',
      notas: 'Solicite uma proposta formal em programascortos@uai.cl',
    },
    submodalidades: [
      'Espanhol para Negócios e Indústria',
      'Espanhol Acadêmico',
      'Espanhol para Diplomacia e Relações Internacionais',
      'Espanhol por setor (saúde, direito, construção)',
    ],
    nota: 'Destinado a organizações: embaixadas, empresas, universidades parceiras, governos regionais.',
  },
]
