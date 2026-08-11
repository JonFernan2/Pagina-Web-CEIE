export const FOOTER_ZH = {
  col1: {
    description: '西班牙语综合教学中心。SACIC认证进程中 · 塞万提斯学院',
    badges: ['CNA 卓越认证', 'Triple Crown 国际认证'],
  },
  col2: {
    title: '导航',
    links: [
      { label: '关于我们',        href: '/zh/about-us' },
      { label: '教学团队',        href: '/zh/teaching-team' },
      { label: '课程项目',        href: '/zh/programs' },
      { label: '学生心声',        href: '/zh/testimonials' },
      { label: '申请入学',        href: '/zh/apply' },
      { label: '联系我们',        href: '/zh/contact' },
    ],
  },
  col3: {
    title: '课程',
    links: [
      { label: '学期课程',        href: '/zh/programs/semester' },
      { label: '强化课程',        href: '/zh/programs/intensive' },
      { label: '专业目的课程',    href: '/zh/programs/specific-purposes' },
      { label: '个人定制课程',    href: '/zh/programs/individual' },
    ],
  },
  col4: {
    title: '联系方式',
    address: 'Viña del Mar 校区 · Padre Hurtado 750, Viña del Mar, 智利',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    social: ['@uai.internacional', '@artesliberalesuai'],
  },
  legal: {
    links: [
      { label: '法律声明',        href: '/zh/legal-notice' },
      { label: '隐私政策',        href: '/zh/privacy-policy' },
      { label: 'Cookie 政策',    href: '/zh/cookie-policy' },
      { label: '服务条款',        href: '/zh/terms-and-conditions' },
      { label: '撤销权利',        href: '/zh/withdrawal-rights' },
    ],
    copyright: '© 2026 阿道夫·伊瓦涅斯大学 — 西班牙语综合教学中心',
  },
}

export const HOME_ZH = {
  meta: {
    title: 'CEIE UAI — 在智利学习西班牙语 | 阿道夫·伊瓦涅斯大学',
    description: '在南太平洋海岸学习西班牙语。四种对接欧洲语言共同参考框架的课程。SACIC认证进程中 · 塞万提斯学院。',
  },
  hero: {
    badge: 'SACIC 认证进程中 · 塞万提斯学院 2026',
    h1: '在南太平洋\n学习西班牙语',
    subtitle: '西班牙语综合教学中心 · 阿道夫·伊瓦涅斯大学 · 比尼亚德尔马，智利',
    cta1: { label: '查看课程', href: '/zh/programs' },
    cta2: { label: '联系我们', href: '/zh/contact' },
  },
  valueProps: {
    title: '为何选择在UAI学习西班牙语',
    cards: [
      {
        icon: 'GraduationCap',
        title: '学术卓越',
        text: '课程对接欧洲语言共同参考框架（CEFR），涵盖A1–C1各级别，提供学术学分认证，并融入UAI博雅教育理念。',
      },
      {
        icon: 'MapPin',
        title: '文化沉浸',
        text: '在智利真实生活中学习西班牙语：瓦尔帕莱索、比尼亚德尔马、卡萨布兰卡谷地葡萄园。坐落太平洋岸边的校园，课内课外皆可实践语言。',
      },
      {
        icon: 'Laptop',
        title: '主动教学法',
        text: '运用机构数字平台、情境化教学材料，以真实学术和职业环境为导向，推动学习者主动参与。',
      },
      {
        icon: 'Globe',
        title: '国际网络',
        text: '汇聚来自20余个国家的大学生社区。学生社团、文化工作坊及与智利本地及国际学生互动的各类活动。',
      },
    ],
  },
  programs: {
    title: '西班牙语课程',
    subtitle: '四种模式，面向不同学术背景和职业需求',
    items: [
      {
        nombre: '学期课程',
        descripcion: '按CEFR级别分阶段系统学习。从A1到C1结构化进阶，含学术学分、文化活动及博雅教育研讨课。',
        nivel: 'A1至C1',
        duracion: '15–18周',
        horario: '上午班（9:00–12:00）或下午班（14:00–17:00），每周3天',
        grupoMax: '最多12名学员',
        precioReferencial: '起价 USD 950/课程',
        href: '/zh/programs/semester',
      },
      {
        nombre: '强化课程',
        descripcion: '2至3周全面沉浸。适合交换生及时间有限但希望快速提升的职业人士。',
        nivel: 'A1至B2',
        duracion: '2–3周',
        horario: '每周5天，每天4课时',
        grupoMax: '最多10名学员',
        precioReferencial: '起价 USD 300',
        href: '/zh/programs/intensive',
      },
      {
        nombre: '专业目的课程',
        descripcion: '商务、外交、学术研究或特定行业西班牙语。专为机构和团体设计。',
        nivel: '根据机构需求',
        duracion: '1–2周（定制）',
        horario: '与客户机构协商安排',
        grupoMax: '视协议而定',
        precioReferencial: 'USD 900–1,500',
        href: '/zh/programs/specific-purposes',
      },
      {
        nombre: '个人定制课程',
        descripcion: '一对一教学，根据学员目标、水平和时间灵活安排。可在校园授课或赴学员工作/居住地上课。',
        nivel: '各级别均可',
        duracion: '灵活',
        horario: '与学员协商',
        grupoMax: '1名学员',
        precioReferencial: '起价 USD 1,000',
        href: '/zh/programs/individual',
      },
    ],
  },
  payment: {
    title: '报名及付款方式',
    col1: {
      title: '付款方式',
      items: [
        '国际电汇（SWIFT）',
        '信用卡（Visa / Mastercard）',
        '机构协议 / 赞助信',
      ],
    },
    col2: {
      title: '报名条件',
      items: [
        '课程开始前须完成付款',
        '预留名额：报名时支付课程总额的30%',
        '余额：课程开始前5个工作日内结清',
      ],
    },
    col3: {
      title: '取消政策',
      items: [
        '提前30天以上取消：退款80%',
        '提前15–29天取消：退款50%',
        '提前15天以内取消：不予退款',
      ],
      link: { label: '查看完整条款', href: '/zh/terms-and-conditions' },
      disclaimer: '[待定 — 具体金额及条件待UAI法律顾问最终确认]',
    },
  },
  accreditation: {
    title: '认证质量保证',
    p1: 'CEIE正在申请塞万提斯学院SACIC认证，这是全球对外西班牙语教学中心的权威认证标准。',
    p2: 'UAI持有国家认证委员会（CNA）卓越认证及Triple Crown国际认证，为所有课程的学术质量提供有力保障。',
    badges: [
      'SACIC · 塞万提斯学院 · 认证申请中 2026',
      'CNA 卓越认证',
      'Triple Crown 国际认证',
    ],
  },
  testimonials: {
    title: '学生心声',
    items: [
      {
        initials: 'A.M.',
        country: '美国',
        program: '学期课程',
        level: 'B2级',
        text: '[待定 — 真实学员感言]',
      },
      {
        initials: 'K.L.',
        country: '德国',
        program: '强化课程',
        level: 'B1级',
        text: '[待定 — 真实学员感言]',
      },
      {
        initials: 'C.P.',
        country: '加拿大',
        program: '专业目的课程',
        level: 'B2+级',
        text: '[待定 — 真实学员感言]',
      },
    ],
    readMoreLink: { label: '查看更多学员评价', href: '/zh/testimonials' },
  },
  contact: {
    title: '地址与联系方式',
    address: 'Viña del Mar 校区 · Padre Hurtado 750, Viña del Mar, 智利',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    hours: '周一至周五，9:00–18:00',
    mapPlaceholder: '地图：UAI Viña del Mar 校区 — Padre Hurtado 750',
  },
}

export const PROGRAMS_ZH = {
  meta: {
    title: '课程项目 | CEIE UAI',
    description: '四种西班牙语课程：学期课程、强化课程、专业目的课程及个人定制课程。CEFR A1–C1级别。UAI Viña del Mar。',
  },
  hero: {
    h1: '我们的西班牙语课程',
    subtitle: '四种模式，均对接欧洲语言共同参考框架（CEFR）及塞万提斯学院课程体系。',
  },
  intro: {
    p1: 'CEIE所有课程均采用塞万提斯学院确立的交际教学法。每个级别对应CEFR的一个描述层次，从A1（初学）至C1（高级）。',
    p2: '学员完成每个课程后将获得阿道夫·伊瓦涅斯大学颁发的结业证书。学术等值认定通过UAI的国际合作协议进行。',
  },
}

export const ABOUT_ZH = {
  meta: {
    title: '关于我们 | CEIE UAI',
    description: '了解CEIE：使命愿景、认证进程、教学设施及UAI机构背景。',
  },
  hero: { h1: '关于CEIE' },
  sections: {
    mision: {
      title: '使命与愿景',
      mision: '以塞万提斯学院交际教学法和阿道夫·伊瓦涅斯大学博雅教育价值观为基础，提供高质量的对外西班牙语教学课程。',
      vision: '成为南太平洋地区西班牙语教学的标杆中心，以学术严谨、国际认证及智利文化联结著称。',
    },
    contexto: {
      title: '机构背景',
      p1: 'CEIE隶属于UAI国际关系处，并与博雅教育学院开展学术合作。成立于2026年，致力于服务国际学生、职业人士、外交使团及合作机构。',
      p2: 'UAI持有CNA卓越认证及Triple Crown国际认证，跻身同时获得AACSB、AMBA和EQUIS认证的拉丁美洲大学之列。中心设于Viña del Mar校区，在圣地亚哥设有业务。',
      kpis: [
        { value: '2026', label: '成立年份' },
        { value: '4', label: '西班牙语课程' },
        { value: '20+', label: '学员国籍数量' },
        { value: 'A1–C1', label: 'CEFR级别' },
      ],
    },
    sacic: {
      title: 'SACIC 认证',
      p1: 'CEIE正在申请塞万提斯学院SACIC认证，这是全球对外西班牙语教学中心的国际质量标准。SACIC评估内容包括教学质量、课程设计、实体与数字设施以及机构透明度。',
      p2: '塞万提斯学院评估员的第二阶段课堂评估定于2026年10–11月进行。认证是一项持续承诺：一旦获得，需定期更新。',
      status: '当前状态：申请中 · 第二阶段评估定于2026年10–11月',
    },
    espacios: {
      title: '教学设施',
      spaces: [
        {
          nombre: '西班牙语教室',
          descripcion: '配备视听技术设备、灵活布局，最多可容纳12名学员。专为主动参与式教学法设计。',
          alt: 'UAI Viña del Mar西班牙语综合教学中心教室，配有移动座椅、黑板及投影仪，可容纳12名学员。',
        },
        {
          nombre: 'UAI 图书馆',
          descripcion: '西班牙语和英语馆藏，国际学生可借阅。涵盖文学、人文及社会科学书目。设有安静阅览室。',
          alt: 'UAI Viña del Mar校区图书馆，设有书架和个人阅览区。',
        },
        {
          nombre: '自习室',
          descripcion: '校园内分布有团体及个人学习空间，持CEIE学生证即可使用。',
          alt: 'UAI Viña del Mar校区团体自习室，设有工作桌并提供无线网络。',
        },
        {
          nombre: '周边环境 — 比尼亚德尔马',
          descripcion: '校园面朝太平洋，坐落于比尼亚德尔马，距瓦尔帕莱索15分钟、距圣地亚哥1.5小时。南美洲独具特色的语言文化沉浸环境。',
          alt: 'UAI Viña del Mar校园景观，背景为太平洋与比尼亚德尔马城市风光。',
        },
        {
          nombre: '文化活动',
          descripcion: '卡萨布兰卡谷葡萄园参观、瓦尔帕莱索文化遗址游览及UAI学者研讨会。已纳入所有课程。',
          alt: 'CEIE国际学员在智利瓦尔帕莱索参加文化活动。',
        },
      ],
    },
  },
}

export const ADMISSIONS_ZH = {
  meta: {
    title: '申请入学 | CEIE UAI',
    description: '申请CEIE西班牙语课程。流程简便，开课日期灵活。',
  },
  hero: {
    h1: '申请入学',
    subtitle: '几分钟即可完成申请。我们的团队将在48个工作小时内与您联系。',
  },
  steps: [
    { number: 1, title: '在线申请',    desc: '填写本页表格，提供您的个人信息及意向课程。' },
    { number: 2, title: '水平测试',    desc: '我们将通过电子邮件发送水平诊断测试，约需20分钟完成。' },
    { number: 3, title: '确认录取',    desc: '我们将通过电子邮件确认您的报名、分班及开课日期。' },
    { number: 4, title: '支付报名费',  desc: '支付课程总额的30%即可锁定名额。' },
    { number: 5, title: '开课',        desc: '课程第一天举行欢迎仪式和入学指导。' },
  ],
  requirements: {
    title: '入学要求',
    table: {
      headers: ['课程', '所需水平', '所需材料'],
      rows: [
        ['学期课程',        'A1（无需西班牙语基础）', '护照/身份证件。3×4证件照。'],
        ['强化课程',        'A1（无需西班牙语基础）', '护照/身份证件。3×4证件照。'],
        ['专业目的课程',    '根据课程而定',           '赞助机构证明信。'],
        ['个人定制课程',    '无要求',                 '护照/身份证件。学习目标说明。'],
      ],
    },
  },
  form: {
    title: '申请表',
    fields: {
      name:       '姓名',
      country:    '所在国家',
      email:      '电子邮箱',
      phone:      '电话（选填）',
      program:    '意向课程',
      level:      '西班牙语估计水平',
      levelOpts:  ['零基础', 'A1', 'A2', 'B1', 'B2', 'C1', '不确定'],
      startDate:  '期望开课日期',
      message:    '留言/补充说明',
      privacy:    '我已阅读并同意隐私政策',
      submit:     '提交申请',
      success:    '感谢您的申请，我们已收到！将在48个工作小时内与您联系。',
    },
  },
  cohorts: {
    title: '近期开课时间',
    intro: '各类型课程的开课时间如下：',
    rows: [
      {
        program: '学期课程 / 强化课程',
        schedule: '按照智利学年日历',
        detail: '南半球 — 第一学期：3月 – 7月 · 第二学期：8月 – 12月',
      },
      {
        program: '专业目的课程',
        schedule: '日期由双方协商确定',
        detail: '',
      },
      {
        program: '个人定制课程',
        schedule: '持续招生',
        detail: '确认后可即时开课',
      },
    ] as { program: string; schedule: string; detail: string }[],
  },
}

export const VOICES_ZH = {
  meta: {
    title: '学生心声 | CEIE UAI',
    description: '阅读曾在CEIE UAI学习西班牙语的学员心得体会。',
  },
  hero: {
    h1: '学生心声',
    subtitle: '曾在阿道夫·伊瓦涅斯大学CEIE学习西班牙语的学员经历分享。',
  },
}

export const CONTACT_ZH = {
  meta: {
    title: '联系我们 | CEIE UAI',
    description: '联系CEIE团队，咨询UAI西班牙语课程相关信息。',
  },
  hero: { h1: '联系我们' },
  form: {
    title: '发送消息',
    fields: {
      name:         '姓名',
      organization: '所在机构（选填）',
      country:      '国家',
      email:        '电子邮箱',
      phone:        '电话（选填）',
      program:      '意向课程',
      message:      '留言',
      submit:       '发送消息',
      success:      '消息已收到，我们将在2个工作日内回复。',
    },
  },
  info: {
    title: '联系方式',
    campus: 'Viña del Mar 校区',
    address: 'Padre Hurtado 750, Viña del Mar, 智利',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    hours: '周一至周五 · 9:00 – 18:00',
    social: ['Instagram: @uai.internacional'],
  },
}
