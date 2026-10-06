export const FOOTER_PT = {
  col1: {
    description: 'Centro de Ensino Integral do Espanhol · Universidad Adolfo Ibáñez.',
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
      { label: 'Convocatórias',         href: 'https://postula.uai.cl/' },
    ],
  },
  col3: {
    title: 'Programas',
    links: [
      { label: 'Programa Semestral de Espanhol',       href: '/pt/programas-e-cursos/semestral' },
      { label: 'Programa Intensivo de Espanhol',        href: '/pt/programas-e-cursos/intensivo' },
      { label: 'Espanhol com Fins Específicos',         href: '/pt/programas-e-cursos/fins-especificos' },
    ],
  },
  col4: {
    title: 'Contato',
    address: 'Campus Viña del Mar · Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
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
    description: 'Estude espanhol na costa do Pacífico Sul. Três programas alinhados ao Quadro Europeu Comum de Referência.',
  },
  hero: {

    h1: 'Aprenda espanhol\nno Pacífico Sul',
    subtitle: 'Centro de Ensino Integral do Espanhol · Universidad Adolfo Ibáñez · Viña del Mar, Chile',
    cta1: { label: 'Ver programas', href: '#programas' },
    cta2: { label: 'Contato', href: '/pt/contato' },
  },
  valueProps: {
    title: 'Por que estudar espanhol na UAI?',
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
    subtitle: 'Três modalidades projetadas para perfis acadêmicos e profissionais distintos',
    items: [
      {
        nombre: 'Programa Semestral de Espanhol',
        descripcion: 'Cursos de Espanhol como língua estrangeira (níveis A1–C1), cursos eletivos temáticos e Cursos do Programa CORE UAI.',
        nivel: 'A1 a C1',
        duracion: '17 semanas',
        horario: 'Segunda a sexta-feira, 08:30 – 18:55',
        grupoMax: 'Mín. 5 pessoas',
        precioReferencial: 'A partir de USD 950/curso',
        precioDesde: 'A partir de USD 950 por curso',
        imagen: '/images/card-programa-semestral.jpg',
        href: '/pt/programas-e-cursos/semestral',
      },
      {
        nombre: 'Programa Intensivo de Espanhol',
        descripcion: 'Espanhol intensivo de 2 ou 4 semanas.',
        nivel: 'A1 a B2',
        duracion: '2 a 4 semanas',
        horario: 'Aulas de segunda a quinta-feira, 08:30 – 18:55 · Atividades culturais às sextas-feiras',
        grupoMax: 'Mín. 5 pessoas',
        precioReferencial: 'USD 900 (2 semanas) · USD 1.800 (4 semanas)',
        precioDesde: 'A partir de USD 900 por curso',
        imagen: '/images/card-programa-intensivo.jpg',
        href: '/pt/programas-e-cursos/intensivo',
      },
      {
        nombre: 'Espanhol com Fins Específicos',
        descripcion: 'Programa de curta duração elaborado à medida conforme as necessidades, interesses e objetivos de cada pessoa, grupo ou instituição.',
        nivel: 'Conforme requisito',
        duracion: '1 a 2 semanas (à medida)',
        horario: 'Coordenado com o participante ou a instituição',
        grupoMax: 'Variável conforme acordo institucional',
        precioReferencial: 'USD 900 – 1.500',
        precioDesde: 'A partir de USD 900',
        imagen: '/images/card-programa-fines-especificos.jpg',
        imagenPos: 'center top',
        href: '/pt/programas-e-cursos/fins-especificos',
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
    intro: 'A Universidad Adolfo Ibáñez possui acreditações internacionais que atestam a qualidade de sua formação segundo padrões reconhecidos no mundo todo.',
    groups: [
      { faculty: 'Escola de Negócios', name: 'Tríplice Coroa', text: 'Uma das poucas escolas de negócios do mundo com as três acreditações internacionais mais exigentes da área: AACSB, EQUIS e AMBA.', logos: ['aacsb', 'equis', 'amba'] },
      { faculty: 'Faculdade de Engenharia e Ciências', name: 'ABET', text: 'Engenharia Civil de Computação, Engenharia Civil e Engenharia Civil Industrial são acreditadas pela ABET, o padrão internacional para cursos de engenharia e tecnologia. A UAI é a única universidade privada não tradicional do Chile com esse reconhecimento, que também facilita a revalidação do diploma nos Estados Unidos e em outros países.', logos: ['abet'] },
    ],
    badges: [
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
        program: 'Programa Semestral de Espanhol',
        level: 'Nível B2',
        text: '[PENDENTE — testemunho real de estudante]',
      },
      {
        initials: 'K.L.',
        country: 'Alemanha',
        program: 'Programa Intensivo de Espanhol',
        level: 'Nível B1',
        text: '[PENDENTE — testemunho real de estudante]',
      },
      {
        initials: 'C.P.',
        country: 'Canadá',
        program: 'Espanhol com Fins Específicos',
        level: 'Nível B2+',
        text: '[PENDENTE — testemunho real de estudante]',
      },
    ],
    readMoreLink: { label: 'Ver mais depoimentos', href: '/pt/vozes-do-centro' },
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
    description: 'Três programas de espanhol: Programa Semestral de Espanhol, Programa Intensivo de Espanhol e Espanhol com Fins Específicos. Níveis QECR A1–C1. UAI Viña del Mar.',
  },
  hero: {
    h1: 'Nossos Programas de Espanhol',
    subtitle: 'Três modalidades alinhadas ao Quadro Europeu Comum de Referência (QECR) e ao Plano Curricular do Instituto Cervantes.',
  },
  intro: {
    p1: 'Todos os programas do CEIE são elaborados sob a abordagem comunicativa estabelecida pelo Instituto Cervantes. Cada nível corresponde a um descritor do QECR, do A1 (inicial) ao C1 (avançado).',
    p2: 'Os estudantes recebem um certificado emitido pela Universidad Adolfo Ibáñez ao concluir cada programa. As equivalências acadêmicas são estabelecidas por meio dos convênios de cooperação internacional da UAI.',
  },
}

export const ABOUT_PT = {
  meta: {
    title: 'Sobre Nós | CEIE UAI',
    description: 'Conheça o CEIE: missão, visão, valores, equipe e instalações no campus Viña del Mar da UAI.',
  },
  hero: {
    h1: 'Sobre o CEIE',
    subtitle: 'O Centro de Ensino Integral do Espanhol UAI é uma unidade acadêmica da Universidad Adolfo Ibáñez, articulada entre a Faculdade de Artes Liberais e a Direção de Relações Internacionais. Concebe-se como um espaço de ensino do espanhol como língua estrangeira, de vinculação com a comunidade e de projeção internacional, fundado na excelência acadêmica e no selo distintivo das Artes Liberais.',
  },
  sections: {
    mision: {
      title: 'Missão, visão e valores',
      mision: 'Proporcionar aos nossos estudantes os conhecimentos linguísticos e interculturais essenciais para uma formação pessoal, acadêmica e profissional de qualidade, combinando o ensino do espanhol com a experiência formativa das Artes Liberais. Criamos um ambiente acadêmico multilíngue que promove o desenvolvimento dos estudantes como agentes sociais, aprendentes autônomos e falantes interculturais.',
      vision: 'Consolidar-nos como um centro competitivo no ensino do espanhol, comprometido com a excelência acadêmica e a qualidade no serviço. Aspiramos a destacar-nos pela nossa melhoria contínua e pelo nosso papel relevante dentro de uma comunidade universitária de referência em nível nacional e internacional, com um enfoque diferenciador nas Artes Liberais.',
      valores: 'Os valores institucionais que orientam o Centro incluem o sentido de pertencimento, a ética profissional e o respeito, a tolerância à diversidade, uma atitude aberta à inovação educativa, e a liderança, a iniciativa e o profissionalismo em todas as suas atividades.',
    },
    espacios: {
      title: 'Nossas Instalações',
      spaces: [
        {
          nombre: 'Salas de espanhol',
          descripcion: 'Salas equipadas com tecnologia audiovisual, distribuição flexível e capacidade para até 24 estudantes. Projetadas para metodologia ativa e participativa.',
          alt: 'Sala do Centro de Ensino Integral do Espanhol da UAI em Viña del Mar, com cadeiras móveis, lousa e projetor, capacidade para 24 estudantes.',
        },
        {
          nombre: 'Biblioteca UAI',
          descripcion: 'Acervo em espanhol e inglês com acesso para estudantes internacionais. Recursos de literatura, humanidades e ciências sociais. Salas de leitura silenciosa também estão disponíveis.',
          alt: 'Biblioteca da Universidad Adolfo Ibáñez campus Viña del Mar, com estantes de livros e área de leitura individual.',
        },
        {
          nombre: 'Salas de estudo',
          descripcion: 'Espaços de trabalho grupal e individual no Edifício B do campus. Acesso mediante reserva prévia pelo WebC.',
          alt: 'Estudantes trabalhando diante de uma lousa em uma sala de estudo do campus UAI Viña del Mar.',
        },
        {
          nombre: 'Ginásio e atividades esportivas',
          descripcion: 'Acesso às instalações esportivas do Campus Viña del Mar, incluindo ginásio, sala de musculação, espaços de treinamento e atividades recreativas. Os estudantes também podem participar de oficinas e atividades esportivas, sujeitas à disponibilidade.',
          alt: 'Instalações esportivas do campus UAI Viña del Mar, incluindo ginásio e espaços de treinamento.',
        },
        {
          nombre: 'Atividades culturais',
          descripcion: 'Roteiros pelo patrimônio de Valparaíso e conversas com acadêmicos da UAI, incluídos em todos os programas. As excursões opcionais, como visitas às vinícolas do Vale de Casablanca, podem ter custo adicional.',
          alt: 'Estudantes internacionais do CEIE em atividades culturais e acadêmicas no campus UAI Viña del Mar.',
        },
        {
          nombre: 'Entorno — Viña del Mar',
          descripcion: 'O campus da Universidad Adolfo Ibáñez está situado em um ambiente privilegiado, cercado pela natureza e com vista para o oceano Pacífico. Localizado a 15 minutos de Valparaíso e a aproximadamente 1,5 hora de Santiago, oferece aos estudantes um ambiente universitário tranquilo e conectado a alguns dos principais atrativos culturais e turísticos da região.',
          alt: 'Vista do campus UAI Viña del Mar com acesso ao Pacífico, cidade de Viña del Mar ao fundo.',
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
        ['Programa Semestral de Espanhol',        'A1 (sem conhecimento prévio exigido)', 'Passaporte / documento de identidade. Foto 3×4.'],
        ['Programa Intensivo de Espanhol',        'A1 (sem conhecimento prévio exigido)', 'Passaporte / documento de identidade. Foto 3×4.'],
        ['Espanhol com Fins Específicos: programas grupais para instituições', 'Conforme programa', 'Carta da organização patrocinadora.'],
        ['Espanhol com Fins Específicos: cursos individuais personalizados', 'Sem requisito', 'Passaporte / documento de identidade. Objetivos de aprendizagem.'],
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
        program: 'Programa Semestral de Espanhol / Programa Intensivo de Espanhol',
        schedule: 'Segue o calendário acadêmico chileno',
        detail: 'Hemisfério Sul — 1.º semestre: março – julho · 2.º semestre: agosto – dezembro',
      },
      {
        program: 'Espanhol com Fins Específicos: grupal',
        schedule: 'Data a coordenar entre as partes',
        detail: '',
      },
      {
        program: 'Espanhol com Fins Específicos: individual',
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
  },
}
