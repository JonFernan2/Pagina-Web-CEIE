import type { ProgramData } from './programs'

export const PROGRAMS_DATA_PT: ProgramData[] = [
  {
    slug: 'semestral',
    nombre: 'Programa Semestral de Espanhol',
    descripcionBreve: 'Progressão estruturada por níveis QECR em 15 a 18 semanas.',
    descripcionExtendida:
      'O Programa Semestral é destinado a estudantes que desejam desenvolver o espanhol de forma sistemática ao longo de um período prolongado. As aulas seguem o Plano Curricular do Instituto Cervantes e são ministradas em turmas reduzidas de no máximo 12 alunos, garantindo atenção individualizada e prática comunicativa real.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    horarios: [
      { turno: 'Manhã',  dias: 'Segunda, quarta e sexta-feira', hora: '09:00 – 12:00' },
      { turno: 'Tarde',  dias: 'Segunda, quarta e sexta-feira', hora: '14:00 – 17:00' },
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
      'Visita guiada a Valparaíso e Viña del Mar',
      'Seminário de discussão de literatura chilena',
      'Visita a vinícolas do Vale de Casablanca',
      'Atividades com a comunidade universitária da UAI',
      'Acesso à biblioteca e recursos digitais da UAI',
    ],
    condiciones: [
      {
        titulo: 'Requisito de entrada',
        descripcion: 'Nível A1 ou sem conhecimentos prévios. Teste de diagnóstico obrigatório antes do início do programa.',
      },
      {
        titulo: 'Presença',
        descripcion: 'Mínimo de 80% de frequência para receber o certificado de conclusão.',
      },
      {
        titulo: 'Cancelamento',
        descripcion: 'Com 30+ dias de antecedência: reembolso de 80%. 15–29 dias: 50%. Menos de 15 dias: sem reembolso.',
      },
    ],
    grupoMaximo: 12,
    duracion: '15 a 18 semanas (por nível)',
    certificado: {
      tipo: 'Certificado de Estudos CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Programa alinhado ao QECR. Equivalências acadêmicas por meio dos acordos internacionais da UAI.',
    },
    precio: {
      valor: '[PENDENTE — a confirmar pela UAI]',
      moneda: 'USD',
      notas: 'Inclui material didático',
    },
  },
  {
    slug: 'intensivo',
    nombre: 'Programa Intensivo',
    descripcionBreve: 'Imersão total em 4 a 8 semanas. Progresso rápido e estruturado.',
    descripcionExtendida:
      'O Programa Intensivo oferece imersão acelerada para estudantes que precisam atingir um nível comunicativo em pouco tempo. Aulas diárias de 4 horas, combinadas com atividades culturais, permitem progresso significativo ao longo de dois níveis QECR em um único período intensivo.',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    horarios: [
      { turno: 'Manhã', dias: 'Segunda a sexta-feira', hora: '09:00 – 13:00' },
    ],
    temario: [
      {
        nivel: 'A1–A2 — Iniciante a Elementar',
        contenidos: [
          'Comunicação básica em situações cotidianas',
          'Presente, passado e futuro imediato',
          'Vocabulário essencial e pronúncia',
          'Compreensão auditiva com textos simples',
        ],
      },
      {
        nivel: 'B1–B2 — Intermediário',
        contenidos: [
          'Conversação fluente sobre temas familiares',
          'Redação de textos estruturados',
          'Compreensão da mídia chilena',
          'Expressão de opiniões e argumentação',
        ],
      },
    ],
    actividades: [
      'Sessões diárias de conversação cultural',
      'City tour: Valparaíso e Viña del Mar',
      'Workshop de gastronomia chilena',
      'Atividades sociais com a comunidade de estudantes internacionais da UAI',
    ],
    condiciones: [
      {
        titulo: 'Requisito de entrada',
        descripcion: 'A1 ou sem conhecimentos prévios. Teste de diagnóstico antes do início do programa.',
      },
      {
        titulo: 'Presença',
        descripcion: 'Mínimo de 85% de frequência exigido pela natureza intensiva do programa.',
      },
      {
        titulo: 'Cancelamento',
        descripcion: 'Com 30+ dias de antecedência: reembolso de 80%. 15–29 dias: 50%. Menos de 15 dias: sem reembolso.',
      },
    ],
    grupoMaximo: 10,
    duracion: '4 a 8 semanas',
    certificado: {
      tipo: 'Certificado de Participação CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Equivalências conforme a instituição de origem do estudante.',
    },
    precio: {
      valor: '[PENDENTE — a confirmar pela UAI]',
      moneda: 'USD',
    },
  },
  {
    slug: 'fins-especificos',
    nombre: 'Programas de Fins Específicos',
    descripcionBreve: 'Espanhol desenvolvido para contextos profissionais, diplomáticos e institucionais.',
    descripcionExtendida:
      'Os Programas de Fins Específicos (EFE) são destinados a organizações — embaixadas, empresas, governos regionais, universidades — que requerem formação linguística estruturada e adaptada à sua área profissional. O currículo é desenvolvido em colaboração com a organização contratante para garantir relevância para necessidades comunicativas reais.',
    niveles: ['Conforme requisitos institucionais'],
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
      'Visitas a instituições do setor relevante',
      'Seminários com especialistas da área',
      'Simulações profissionais em espanhol',
      'Materiais adaptados ao contexto do contratante',
    ],
    condiciones: [
      {
        titulo: 'Modalidade',
        descripcion: 'Disponível no campus UAI Viña del Mar ou in situ nas instalações da organização contratante.',
      },
      {
        titulo: 'Mínimo de horas',
        descripcion: 'O programa tem duração mínima de 40 horas.',
      },
      {
        titulo: 'Contratação',
        descripcion: 'Exige carta de uma organização patrocinadora e proposta formal do CEIE.',
      },
    ],
    grupoMaximo: 'Variável conforme acordo institucional',
    duracion: 'Mínimo 40 horas. Duração conforme plano acordado.',
    certificado: {
      tipo: 'Certificado de Formação Especializada CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifica as horas concluídas e o nível QECR atingido na área de especialização.',
    },
    precio: {
      valor: 'Orçamento institucional',
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
  {
    slug: 'individual',
    nombre: 'Programa Individual — Espanhol à Medida',
    descripcionBreve: 'Aulas individuais adaptadas ao seu horário, nível e objetivos profissionais.',
    descripcionExtendida:
      'O Programa Individual oferece instrução personalizada um a um com um especialista do CEIE. Currículo, materiais, horário e ritmo são totalmente adaptados ao perfil do estudante. Disponível no campus UAI Viña del Mar ou na modalidade in situ no local profissional do estudante — embaixadas, escritórios corporativos ou residência particular.',
    niveles: ['Todos os níveis'],
    horarios: [
      { turno: 'Flexível', dias: 'Acordado com o estudante', hora: 'Incluindo noturno e fins de semana' },
    ],
    temario: [
      {
        nivel: 'Desenho curricular personalizado',
        contenidos: [
          'Diagnóstico inicial detalhado',
          'Objetivos de aprendizagem específicos do estudante',
          'Materiais adaptados à área profissional',
          'Progresso medido e reportado periodicamente',
        ],
      },
    ],
    actividades: [
      'Desenho curricular totalmente personalizado',
      'Materiais adaptados à área profissional do estudante',
      'Horários flexíveis — incluindo noturno e fins de semana',
      'Relatórios de progresso em intervalos acordados',
    ],
    condiciones: [
      {
        titulo: 'Sem mínimo de horas',
        descripcion: 'Sem requisito mínimo de horas. O programa é totalmente flexível.',
      },
      {
        titulo: 'Cancelamento de sessão',
        descripcion: 'Cancelamento com pelo menos 24 horas de antecedência. Sessões não canceladas no prazo são cobradas.',
      },
      {
        titulo: 'Modalidade in situ',
        descripcion: 'A modalidade in situ inclui despesas de deslocamento do professor conforme o local acordado.',
      },
    ],
    grupoMaximo: 1,
    duracion: 'Flexível. Sem mínimo de horas estabelecido.',
    certificado: {
      tipo: 'Certificado de Estudos CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifica as horas concluídas e o nível QECR atingido.',
    },
    precio: {
      estandar: 'USD 50/hora (campus UAI)',
      inSitu: 'USD 58/hora (in situ: embaixadas, empresas, instalações profissionais)',
      largoplazo: 'A partir de USD 38/hora (compromisso de longo prazo, sujeito a acordo)',
    },
    modalidades: [
      'Presencial · Campus Viña del Mar',
      'In situ · Instalações do contratante',
      'Videoconferência [consulte disponibilidade]',
    ],
    perfilIdeal: 'Profissionais, executivos, diplomatas, pesquisadores e acadêmicos.',
  },
]
