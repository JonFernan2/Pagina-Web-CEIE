import type { ProgramData } from './programs'

export const PROGRAMS_DATA_PT: ProgramData[] = [
  {
    slug: 'semestral',
    nombre: 'Programa Semestral de Espanhol',
    descripcionBreve: 'Progressão estruturada por níveis QECR em 4 meses. Cursos de língua, temáticos e Core Internacional.',
    descripcionExtendida:
      'O Programa Semestral é destinado a estudantes internacionais que desejam desenvolver o espanhol de forma sistemática ao longo de um período prolongado. As aulas seguem o Plano Curricular do Instituto Cervantes e são ministradas em turmas reduzidas de no máximo 12 alunos, garantindo atenção individualizada e prática comunicativa real.',
    objetivo:
      'Desenvolver progressivamente as competências linguísticas, acadêmicas e culturais em espanhol de estudantes internacionais não falantes de espanhol, facilitando sua integração na experiência universitária.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: 'Estudantes de graduação internacional sem background em espanhol.',
    cursosTabla: [
      { nombre: 'Gramática Básica de Espanhol', horas: 45, precioUSD: 950 },
      { nombre: 'Comunicação Básica de Espanhol', horas: 45, precioUSD: 950 },
      { nombre: 'Gramática Intermediária de Espanhol', horas: 45, precioUSD: 950 },
      { nombre: 'Comunicação Intermediária de Espanhol', horas: 45, precioUSD: 950 },
      { nombre: 'Gramática Avançada de Espanhol', horas: 45, precioUSD: 950 },
      { nombre: 'Comunicação Avançada de Espanhol', horas: 45, precioUSD: 950 },
      { nombre: 'Fonética do Espanhol', horas: 45, precioUSD: 950 },
      { nombre: 'Temático: Espanhol Profissional para Negócios e Mercados Globais', horas: 45, precioUSD: 1188 },
      { nombre: 'Temático: Espanhol para a Saúde e Comunicação Médica', horas: 45, precioUSD: 1188 },
      { nombre: 'Temático: Vivir para Contarla — Literatura Latino-Americana', horas: 45, precioUSD: 1188 },
      { nombre: 'Temático: Audácia Cinematográfica — Chile através do Documentário', horas: 45, precioUSD: 1188 },
      { nombre: 'Cursos Core Internacionais (Literatura, Ética, Ciências, Civilização Contemporânea, Escrita e Artes)', horas: 45, precioUSD: 1188 },
    ],
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
        titulo: 'Pacotes de cursos',
        descripcion: 'Pacote de 4 cursos (3 língua + 1 temático): USD 4.038. Pacote de 5 cursos (3 língua + 2 temáticos): USD 5.226. Preço especial pacote 5 cursos: USD 4.750.',
      },
      {
        titulo: 'Cancelamento',
        descripcion: 'Com 45+ dias de antecedência: sem encargos. 15–44 dias: encargo de 50%. Menos de 15 dias: sem reembolso. Força maior avaliada individualmente. Por escrito para caroline.cortes@uai.cl.',
      },
    ],
    grupoMaximo: 12,
    duracion: '4 meses',
    certificado: {
      tipo: 'Certificado de Estudos CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Programa alinhado ao QECR. Equivalências acadêmicas por meio dos acordos internacionais da UAI.',
    },
    precio: {
      estandar: 'USD 950 / por participante',
      inSitu: 'USD 1.188 / curso temático ou Core',
      notas: 'Pacote especial 5 cursos: USD 4.750',
    },
  },
  {
    slug: 'intensivo',
    nombre: 'Cursos ELE Intensivos e à Medida',
    descripcionBreve: 'Formação intensiva em grupo (online ou presencial) ou personalizada um a um. Adaptada ao nível, ritmo e objetivos de cada participante.',
    descripcionExtendida:
      'O Curso ELE Intensivo e à Medida reúne duas modalidades complementares em uma oferta flexível: formação intensiva em grupos reduzidos para quem precisa avançar rapidamente em um contexto coletivo, e formação individualizada um a um para quem requer currículo, horário e ritmo completamente personalizados. Ambas as modalidades estão disponíveis de forma presencial no campus UAI Viña del Mar ou na modalidade online.',
    objetivo:
      'Fortalecer as competências comunicativas em espanhol por meio de formação intensiva — grupal ou individual — adaptada ao nível, ritmo e objetivos acadêmicos ou profissionais de cada participante.',
    niveles: ['A1', 'A2', 'B1', 'B2', 'Todos os níveis'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: 'Estudantes internacionais não falantes de espanhol. Profissionais, pesquisadores, executivos, empresas e funcionários diplomáticos.',
    cursosTabla: [
      { nombre: 'Grupal · Básico Online', horas: 30, precioUSD: 300, modalidad: '3 semanas' },
      { nombre: 'Grupal · Intermediário Online', horas: 30, precioUSD: 300, modalidad: '3 semanas' },
      { nombre: 'Grupal · Avançado Online', horas: 30, precioUSD: 300, modalidad: '3 semanas' },
      { nombre: 'Grupal · Básico Presencial', horas: 40, precioUSD: 800, modalidad: '2 semanas' },
      { nombre: 'Grupal · Intermediário Presencial', horas: 40, precioUSD: 800, modalidad: '2 semanas' },
      { nombre: 'Grupal · Avançado Presencial', horas: 40, precioUSD: 800, modalidad: '2 semanas' },
      { nombre: 'Grupal · Ciclo Conversacional (Online)', horas: 8, precioUSD: 100, modalidad: '8 sessões, 2×/semana' },
      { nombre: 'Individual · Básico', horas: 20, precioUSD: 1000, modalidad: 'À medida' },
      { nombre: 'Individual · Intermediário', horas: 30, precioUSD: 1500, modalidad: 'À medida' },
      { nombre: 'Individual · Avançado', horas: 40, precioUSD: 2000, modalidad: 'À medida' },
    ],
    horarios: [
      { turno: 'Grupal presencial', dias: 'Segunda a sexta-feira', hora: '09:00 – 13:00' },
      { turno: 'Grupal online', dias: 'Coordenado com o grupo', hora: 'Flexível' },
      { turno: 'Individual', dias: 'Acordado com o estudante', hora: 'Incluindo noturno e fins de semana' },
    ],
    temario: [
      {
        nivel: 'A1–A2 — Iniciante a Elementar (Grupal)',
        contenidos: [
          'Comunicação básica em situações cotidianas',
          'Presente, passado e futuro imediato',
          'Vocabulário essencial e pronúncia',
          'Compreensão auditiva com textos simples',
        ],
      },
      {
        nivel: 'B1–B2 — Intermediário (Grupal)',
        contenidos: [
          'Conversação fluente sobre temas familiares',
          'Redação de textos estruturados',
          'Compreensão da mídia chilena',
          'Expressão de opiniões e argumentação',
        ],
      },
      {
        nivel: 'Individual — Desenho curricular personalizado',
        contenidos: [
          'Diagnóstico inicial detalhado',
          'Objetivos de aprendizagem específicos do estudante',
          'Materiais adaptados à área profissional',
          'Progresso medido e reportado periodicamente',
        ],
      },
    ],
    actividades: [
      'Sessões diárias de conversação cultural (modalidade grupal)',
      'City tour: Valparaíso e Viña del Mar',
      'Workshop de gastronomia chilena',
      'Atividades sociais com a comunidade de estudantes internacionais da UAI',
      'Desenho curricular totalmente personalizado (modalidade individual)',
      'Horários flexíveis — incluindo noturno e fins de semana',
      'Relatórios de progresso em intervalos acordados',
    ],
    condiciones: [
      {
        titulo: 'Requisito de entrada',
        descripcion: 'A1 ou sem conhecimentos prévios. Teste de diagnóstico antes do início do programa.',
      },
      {
        titulo: 'Presença (grupal)',
        descripcion: 'Mínimo de 85% de frequência exigido pela natureza intensiva do programa.',
      },
      {
        titulo: 'Cancelamento de sessão (individual)',
        descripcion: 'Cancelamento com pelo menos 24 horas de antecedência. Sessões não canceladas no prazo são cobradas.',
      },
      {
        titulo: 'Cancelamento de programa',
        descripcion: 'Com 45+ dias de antecedência: sem encargos. 15–44 dias: encargo de 50%. Menos de 15 dias: sem reembolso. Por escrito para caroline.cortes@uai.cl.',
      },
      {
        titulo: 'Modalidade in situ (individual)',
        descripcion: 'Inclui despesas de deslocamento do professor conforme o local acordado.',
      },
    ],
    grupoMaximo: '1–10 conforme modalidade',
    duracion: '2–3 semanas (grupal) · À medida (individual)',
    certificado: {
      tipo: 'Certificado de Participação CEIE-UAI',
      emite: 'Universidad Adolfo Ibáñez',
      reconocimiento: 'Certifica as horas concluídas e o nível QECR atingido.',
    },
    precio: {
      estandar: 'Grupal online: USD 300 (30 hrs) · Presencial: USD 800 (40 hrs)',
      inSitu: 'Individual: a partir de USD 1.000 (20 hrs)',
      notas: 'Ciclo conversacional grupal: USD 100 (8 sessões)',
    },
    modalidades: [
      'Grupal · Online',
      'Grupal · Presencial Campus Viña del Mar',
      'Individual · Campus Viña del Mar',
      'Individual · In situ (instalações do contratante)',
      'Individual · Videoconferência',
    ],
    perfilIdeal: 'Profissionais, executivos, diplomatas, pesquisadores, acadêmicos e estudantes internacionais.',
  },
  {
    slug: 'fins-especificos',
    nombre: 'Programa Curto de Espanhol com Fins Específicos',
    descripcionBreve: 'Espanhol desenvolvido para contextos profissionais e disciplinares: saúde, negócios, astronomia, rotas literárias. Programa à medida de 1 a 2 semanas.',
    descripcionExtendida:
      'Os Programas com Fins Específicos (EFE) são destinados a organizações — embaixadas, empresas, governos regionais, universidades — que requerem formação linguística estruturada e adaptada à sua área profissional. O currículo é desenvolvido em colaboração com a organização contratante para garantir relevância para necessidades comunicativas reais.',
    objetivo:
      'Desenvolver competências comunicativas em espanhol aplicadas a contextos profissionais e disciplinares específicos, mediante programas elaborados conforme as necessidades de universidades, empresas ou grupos especializados.',
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
        descripcion: 'O programa tem duração mínima de 30 horas.',
      },
      {
        titulo: 'Contratação',
        descripcion: 'Exige carta de uma organização patrocinadora e proposta formal do CEIE.',
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
