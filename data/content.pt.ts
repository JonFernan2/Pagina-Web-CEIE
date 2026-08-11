export const FOOTER_PT = {
  col1: {
    description: 'Centro de Ensino Integral do Espanhol. Processo de acreditação SACIC · Instituto Cervantes.',
    badges: ['CNA Acreditação de Excelência', 'Triple Crown Recognition'],
  },
  col2: {
    title: 'Navegação',
    links: [
      { label: 'Sobre Nós',             href: '/pt/sobre-nos' },
      { label: 'Equipe Docente',        href: '/pt/equipe-docente' },
      { label: 'Programas e Cursos',    href: '/pt/programas-e-cursos' },
      { label: 'Vozes do Centro',       href: '/pt/vozes-do-centro' },
      { label: 'Admissão',              href: '/pt/admissao' },
      { label: 'Contato',               href: '/pt/contato' },
    ],
  },
  col3: {
    title: 'Programas',
    links: [
      { label: 'Programa Semestral',       href: '/pt/programas-e-cursos/semestral' },
      { label: 'Programa Intensivo',       href: '/pt/programas-e-cursos/intensivo' },
      { label: 'Fins Específicos',         href: '/pt/programas-e-cursos/fins-especificos' },
      { label: 'Programa Individual',      href: '/pt/programas-e-cursos/individual' },
    ],
  },
  col4: {
    title: 'Contato',
    address: 'Campus Viña del Mar · Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    social: ['@uai.internacional', '@artesliberalesuai'],
  },
  legal: {
    links: [
      { label: 'Aviso Legal',                     href: '/pt/aviso-legal' },
      { label: 'Política de Privacidade',          href: '/pt/privacidade' },
      { label: 'Política de Cookies',              href: '/pt/politica-de-cookies' },
      { label: 'Condições de Contratação',         href: '/pt/condicoes-contratacao' },
      { label: 'Direito de Desistência',           href: '/pt/direito-de-desistencia' },
    ],
    copyright: '© 2026 Universidad Adolfo Ibáñez — Centro de Ensino Integral do Espanhol',
  },
}

export const HOME_PT = {
  meta: {
    title: 'CEIE UAI — Aprenda espanhol no Chile | Universidad Adolfo Ibáñez',
    description: 'Estude espanhol na costa do Pacífico Sul. Quatro programas alinhados ao Quadro Europeu Comum de Referência. Processo de acreditação SACIC · Instituto Cervantes.',
  },
  hero: {
    badge: 'PROCESSO DE ACREDITAÇÃO SACIC · INSTITUTO CERVANTES 2026',
    h1: 'Aprenda espanhol\nno Pacífico Sul',
    subtitle: 'Centro de Ensino Integral do Espanhol · Universidad Adolfo Ibáñez · Viña del Mar, Chile',
    cta1: { label: 'Ver programas', href: '/pt/programas-e-cursos' },
    cta2: { label: 'Contato', href: '/pt/contato' },
  },
  valueProps: {
    title: 'Por que estudar espanhol na UAI',
    cards: [
      {
        icon: 'GraduationCap',
        title: 'Excelência Acadêmica',
        text: 'Cursos alinhados ao Quadro Europeu Comum de Referência, níveis A1–C1, com créditos acadêmicos reconhecidos e o selo formativo das Artes Liberais da UAI.',
      },
      {
        icon: 'MapPin',
        title: 'Imersão Cultural',
        text: 'Aprenda espanhol vivendo o Chile: Valparaíso, Viña del Mar, os vinhedos do Vale de Casablanca. Um campus de frente para o Pacífico onde o idioma se pratica dentro e fora da sala de aula.',
      },
      {
        icon: 'Laptop',
        title: 'Metodologia Ativa',
        text: 'Plataformas digitais institucionais, materiais contextualizados e aprendizado orientado a ambientes acadêmicos e profissionais reais.',
      },
      {
        icon: 'Globe',
        title: 'Rede Internacional',
        text: 'Uma comunidade universitária com estudantes de mais de 20 países. Organizações estudantis, oficinas culturais e atividades com estudantes chilenos e internacionais.',
      },
    ],
  },
  programs: {
    title: 'Programas de Espanhol',
    subtitle: 'Quatro modalidades projetadas para perfis acadêmicos e profissionais distintos',
    items: [
      {
        nombre: 'Programa Semestral',
        descripcion: 'Cursos regulares por nível QECR. Progressão estruturada de A1 a C1 com créditos acadêmicos, atividades culturais e seminários de Artes Liberais.',
        nivel: 'A1 a C1',
        duracion: '15–18 semanas',
        horario: 'Turno manhã (9:00–12:00) ou tarde (14:00–17:00), 3 dias/semana',
        grupoMax: 'Máx. 12 estudantes',
        precioReferencial: 'A partir de USD 950/curso',
        href: '/pt/programas-e-cursos/semestral',
      },
      {
        nombre: 'Programa Intensivo',
        descripcion: 'Imersão total em 2 a 3 semanas. Ideal para estudantes de intercâmbio e profissionais com tempo limitado que buscam avanço rápido.',
        nivel: 'A1 a B2',
        duracion: '2–3 semanas',
        horario: '5 dias/semana, 4 horas diárias',
        grupoMax: 'Máx. 10 estudantes',
        precioReferencial: 'A partir de USD 300',
        href: '/pt/programas-e-cursos/intensivo',
      },
      {
        nombre: 'Programas com Fins Específicos',
        descripcion: 'Espanhol para negócios, diplomacia, pesquisa acadêmica ou setores específicos. Projetados para organizações e grupos institucionais.',
        nivel: 'Conforme requisito institucional',
        duracion: '1–2 semanas (à medida)',
        horario: 'Coordenado com a organização cliente',
        grupoMax: 'Variável conforme convênio',
        precioReferencial: 'USD 900–1.500',
        href: '/pt/programas-e-cursos/fins-especificos',
      },
      {
        nombre: 'Programa Individual — ELE Personalizado',
        descripcion: 'Aulas individuais projetadas conforme os objetivos, nível e disponibilidade do estudante. Disponível no campus ou modalidade in-loco na sede do cliente.',
        nivel: 'Todos os níveis',
        duracion: 'Flexível',
        horario: 'Acordado com o estudante',
        grupoMax: '1 estudante',
        precioReferencial: 'A partir de USD 1.000',
        href: '/pt/programas-e-cursos/individual',
      },
    ],
  },
  payment: {
    title: 'Matrícula e formas de pagamento',
    col1: {
      title: 'Formas de pagamento',
      items: [
        'Transferência bancária internacional (SWIFT)',
        'Cartão de crédito (Visa / Mastercard)',
        'Convênio institucional / carta de patrocínio',
      ],
    },
    col2: {
      title: 'Condições de matrícula',
      items: [
        'Pagamento anterior ao início do programa',
        'Reserva de vaga: 30% do valor total no momento da inscrição',
        'Saldo: até 5 dias úteis antes do início',
      ],
    },
    col3: {
      title: 'Política de cancelamento',
      items: [
        'Com 45+ dias de antecedência: sem encargos',
        'Com 15–44 dias: encargo de 50% do custo total',
        'Com menos de 15 dias: sem reembolso',
        'Força maior: avaliada individualmente',
      ],
      link: { label: 'Ver condições completas', href: '/pt/condicoes-contratacao' },
      disclaimer: 'Cancelamentos válidos apenas por escrito para caroline.cortes@uai.cl com confirmação de recebimento.',
    },
  },
  accreditation: {
    title: 'Qualidade certificada',
    p1: 'O CEIE encontra-se em processo de obtenção da acreditação SACIC do Instituto Cervantes, o padrão de referência para centros de espanhol como língua estrangeira em nível mundial.',
    p2: 'A UAI possui Acreditação de Excelência da Comissão Nacional de Acreditação (CNA) e reconhecimento Triple Crown, respaldando a qualidade acadêmica de todos os seus programas.',
    badges: [
      'SACIC · Instituto Cervantes · Em processo de acreditação 2026',
      'CNA Acreditação de Excelência',
      'Triple Crown Recognition',
    ],
  },
  testimonials: {
    title: 'Vozes do Centro',
    items: [
      {
        initials: 'A.M.',
        country: 'Estados Unidos',
        program: 'Programa Semestral',
        level: 'Nível B2',
        text: '[PENDENTE — testemunho real de estudante]',
      },
      {
        initials: 'K.L.',
        country: 'Alemanha',
        program: 'Programa Intensivo',
        level: 'Nível B1',
        text: '[PENDENTE — testemunho real de estudante]',
      },
      {
        initials: 'C.P.',
        country: 'Canadá',
        program: 'Programa EFE',
        level: 'Nível B2+',
        text: '[PENDENTE — testemunho real de estudante]',
      },
    ],
    readMoreLink: { label: 'Ler mais depoimentos', href: '/pt/vozes-do-centro' },
  },
  contact: {
    title: 'Localização e contato',
    address: 'Campus Viña del Mar · Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    hours: 'Segunda a sexta, 9:00 às 18:00 hrs.',
    mapPlaceholder: 'Mapa: Campus UAI Viña del Mar — Padre Hurtado 750',
  },
}

export const PROGRAMS_PT = {
  meta: {
    title: 'Programas e Cursos | CEIE UAI',
    description: 'Quatro programas de espanhol: Semestral, Intensivo, Fins Específicos e Individual. Níveis QECR A1–C1. UAI Viña del Mar.',
  },
  hero: {
    h1: 'Nossos Programas de Espanhol',
    subtitle: 'Quatro modalidades alinhadas ao Quadro Europeu Comum de Referência (QECR) e ao Plano Curricular do Instituto Cervantes.',
  },
  intro: {
    p1: 'Todos os programas do CEIE são elaborados sob a abordagem comunicativa estabelecida pelo Instituto Cervantes. Cada nível corresponde a um descritor do QECR, do A1 (inicial) ao C1 (avançado).',
    p2: 'Os estudantes recebem um certificado emitido pela Universidad Adolfo Ibáñez ao concluir cada programa. As equivalências acadêmicas são estabelecidas por meio dos convênios de cooperação internacional da UAI.',
  },
}

export const ABOUT_PT = {
  meta: {
    title: 'Sobre Nós | CEIE UAI',
    description: 'Conheça o CEIE: missão, processo de acreditação, instalações e contexto institucional da UAI.',
  },
  hero: { h1: 'Sobre o CEIE' },
  sections: {
    mision: {
      title: 'Missão e visão',
      mision: 'Oferecer programas de ensino de espanhol como língua estrangeira de alta qualidade, sustentados na abordagem comunicativa do Instituto Cervantes e nos valores formativos das Artes Liberais da Universidad Adolfo Ibáñez.',
      vision: 'Ser o centro de referência no ensino de espanhol no Pacífico Sul, reconhecido pelo seu rigor acadêmico, acreditação internacional e vinculação cultural com o Chile.',
    },
    contexto: {
      title: 'Contexto institucional',
      p1: 'O CEIE opera dentro da Direção de Relações Internacionais da UAI, em colaboração acadêmica com a Faculdade de Artes Liberais. Foi fundado em 2026 com a missão de atender estudantes internacionais, profissionais, missões diplomáticas e instituições parceiras.',
      p2: 'A UAI possui Acreditação de Excelência CNA e reconhecimento Triple Crown, situando-a entre as universidades latino-americanas com acreditação simultânea de AACSB, AMBA e EQUIS. O centro opera a partir do campus de Viña del Mar, com presença em Santiago.',
      kpis: [
        { value: '2026', label: 'Ano de fundação' },
        { value: '4', label: 'Programas de espanhol' },
        { value: '20+', label: 'Países representados' },
        { value: 'A1–C1', label: 'Níveis QECR' },
      ],
    },
    sacic: {
      title: 'Acreditação SACIC',
      p1: 'O CEIE encontra-se em processo de obtenção da acreditação SACIC do Instituto Cervantes, o padrão internacional de qualidade para centros de ensino de espanhol como língua estrangeira. O SACIC avalia a qualidade docente, o desenho curricular, as instalações físicas e digitais, e a transparência institucional.',
      p2: 'A fase 2 de avaliação em sala de aula por avaliadores do Instituto Cervantes está programada para outubro-novembro de 2026. A acreditação é um compromisso contínuo: uma vez obtida, requer renovação periódica.',
      status: 'Estado atual: Em processo · Fase 2 de avaliação programada para outubro-novembro de 2026',
    },
    espacios: {
      title: 'Nossas Instalações',
      spaces: [
        {
          nombre: 'Salas de espanhol',
          descripcion: 'Salas equipadas com tecnologia audiovisual, distribuição flexível e capacidade para até 12 estudantes. Projetadas para metodologia ativa e participativa.',
          alt: 'Sala do Centro de Ensino Integral do Espanhol da UAI em Viña del Mar, com cadeiras móveis, lousa e projetor, capacidade para 12 estudantes.',
        },
        {
          nombre: 'Biblioteca UAI',
          descripcion: 'Acervo em espanhol e inglês com acesso para estudantes internacionais. Fundos de literatura, humanidades e ciências sociais. Salas de leitura silenciosa.',
          alt: 'Biblioteca da Universidad Adolfo Ibáñez campus Viña del Mar, com estantes de livros e área de leitura individual.',
        },
        {
          nombre: 'Salas de estudo',
          descripcion: 'Espaços de trabalho grupal e individual distribuídos pelo campus. Acesso com credencial de estudante CEIE.',
          alt: 'Sala de estudo grupal no campus UAI Viña del Mar, com mesas de trabalho e acesso a wi-fi.',
        },
        {
          nombre: 'Entorno — Viña del Mar',
          descripcion: 'O campus está situado de frente ao Pacífico em Viña del Mar, a 15 minutos de Valparaíso e a 1,5 hora de Santiago. Um ambiente de imersão linguística e cultural único na América do Sul.',
          alt: 'Vista do campus UAI Viña del Mar com acesso ao Pacífico, cidade de Viña del Mar ao fundo.',
        },
        {
          nombre: 'Atividades culturais',
          descripcion: 'Excursões às vinícolas do Vale de Casablanca, roteiros pelo patrimônio de Valparaíso e conversatórios com acadêmicos da UAI. Parte integrada de todos os programas.',
          alt: 'Estudantes internacionais do CEIE participando de atividade cultural em Valparaíso, Chile.',
        },
      ],
    },
  },
}

export const ADMISSIONS_PT = {
  meta: {
    title: 'Admissão | CEIE UAI',
    description: 'Inscreva-se em um programa de espanhol do CEIE. Processo simples, datas de início flexíveis.',
  },
  hero: {
    h1: 'Admissão',
    subtitle: 'Inscreva-se em minutos. Nossa equipe entrará em contato em até 48 horas úteis.',
  },
  steps: [
    { number: 1, title: 'Solicitação online',        desc: 'Preencha o formulário nesta página com seus dados e o programa de interesse.' },
    { number: 2, title: 'Avaliação de nível',        desc: 'Enviaremos um teste diagnóstico por e-mail. Duração aproximada de 20 minutos.' },
    { number: 3, title: 'Confirmação de vaga',       desc: 'Confirmamos sua inscrição, grupo de nível e data de início por e-mail.' },
    { number: 4, title: 'Pagamento da matrícula',    desc: '30% do valor total do programa reserva sua vaga.' },
    { number: 5, title: 'Início do programa',        desc: 'Sessão de boas-vindas e orientação no primeiro dia.' },
  ],
  requirements: {
    title: 'Requisitos de admissão',
    table: {
      headers: ['Programa', 'Nível requerido', 'Documentos'],
      rows: [
        ['Programa Semestral',        'A1 (sem conhecimento prévio exigido)', 'Passaporte / documento de identidade. Foto 3×4.'],
        ['Programa Intensivo',        'A1 (sem conhecimento prévio exigido)', 'Passaporte / documento de identidade. Foto 3×4.'],
        ['Fins Específicos',          'Conforme programa',                    'Carta da organização patrocinadora.'],
        ['Programa Individual',       'Sem requisito',                        'Passaporte / documento de identidade. Objetivos de aprendizagem.'],
      ],
    },
  },
  form: {
    title: 'Formulário de inscrição',
    fields: {
      name:       'Nome completo',
      country:    'País de residência',
      email:      'E-mail',
      phone:      'Telefone (opcional)',
      program:    'Programa de interesse',
      level:      'Nível aproximado de espanhol',
      levelOpts:  ['Nenhum', 'A1', 'A2', 'B1', 'B2', 'C1', 'Não sei'],
      startDate:  'Data de início desejada',
      message:    'Mensagem / contexto adicional',
      privacy:    'Aceito a política de privacidade',
      submit:     'Enviar inscrição',
      success:    'Obrigado — sua inscrição foi recebida. Entraremos em contato em até 48 horas úteis.',
    },
  },
  cohorts: {
    title: 'Próximas turmas',
    intro: 'As datas de início seguem a seguinte estrutura por tipo de programa:',
    rows: [
      {
        program: 'Semestral / Intensivo',
        schedule: 'Segue o calendário acadêmico chileno',
        detail: 'Hemisfério Sul — 1.º semestre: março – julho · 2.º semestre: agosto – dezembro',
      },
      {
        program: 'Fins Específicos',
        schedule: 'Data a coordenar entre as partes',
        detail: '',
      },
      {
        program: 'Individual',
        schedule: 'Matrícula contínua',
        detail: 'Início imediato disponível mediante confirmação',
      },
    ] as { program: string; schedule: string; detail: string }[],
  },
}

export const VOICES_PT = {
  meta: {
    title: 'Vozes do Centro | CEIE UAI',
    description: 'Leia as experiências de estudantes que estudaram espanhol no CEIE UAI.',
  },
  hero: {
    h1: 'Vozes do Centro',
    subtitle: 'Experiências de estudantes que estudaram espanhol no CEIE, Universidad Adolfo Ibáñez.',
  },
}

export const CONTACT_PT = {
  meta: {
    title: 'Contato | CEIE UAI',
    description: 'Entre em contato com a equipe do CEIE para informações sobre os programas de espanhol na UAI.',
  },
  hero: { h1: 'Contato' },
  form: {
    title: 'Envie-nos uma mensagem',
    fields: {
      name:         'Nome completo',
      organization: 'Organização (opcional)',
      country:      'País',
      email:        'E-mail',
      phone:        'Telefone (opcional)',
      program:      'Programa de interesse',
      message:      'Mensagem',
      submit:       'Enviar mensagem',
      success:      'Mensagem recebida. Responderemos em até 2 dias úteis.',
    },
  },
  info: {
    title: 'Informações de contato',
    campus: 'Campus Viña del Mar',
    address: 'Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    hours: 'Segunda a sexta · 9:00 – 18:00 hrs.',
    social: ['Instagram: @uai.internacional', 'Instagram: @artesliberalesuai'],
  },
}
