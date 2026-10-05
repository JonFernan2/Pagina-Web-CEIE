import type { ProgramData } from './programs'

export const PROGRAMS_DATA_ZH: ProgramData[] = [
  {
    slug: 'semester',
    nombre: '学期西班牙语课程',
    descripcionBreve: '按CEFR级别17周系统进阶。语言课程、专题课程及国际核心课程。',
    descripcionExtendida:
      '西班牙语学期课程旨在循序渐进地培养国际非西班牙语学员的语言、学术及文化能力，促进其融入大学学习生活。课程与欧洲语言共同参考框架（CEFR）接轨，遵循塞万提斯学院课程计划（PCIC）标准，提供A1至C1各级别课程，并授予学分。',
    objetivo:
      '循序渐进地培养国际非西班牙语学员的语言、学术及文化能力，促进其融入大学学习生活。',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: '无西班牙语基础的国际本科生。',
    cursosTabla: [
      { nombre: '基础西班牙语语法', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: '基础西班牙语交际', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: '中级西班牙语语法', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: '中级西班牙语交际', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: '高级西班牙语语法', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: '高级西班牙语交际', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: '西班牙语语音学', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE' },
      { nombre: '专题：商务与全球市场专业西班牙语', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: '专题课程' },
      { nombre: '专题：医疗健康与医学交流西班牙语', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: '专题课程' },
      { nombre: '专题：活着讲述——拉丁美洲文学', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: '专题课程' },
      { nombre: '专题：影像无畏——纪录片中的智利', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: '专题课程' },
      { nombre: '国际核心课程（文学、伦理、科学、当代文明、写作与艺术）', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: '国际核心课程' },
    ],
    horarios: [
      { turno: '课程', dias: '周一至周五', hora: '08:30 – 18:55' },
    ],
    temario: [
      {
        nivel: 'A1 — 初学',
        contenidos: [
          '自我介绍与问候语',
          '日常生活词汇',
          '陈述句：规则动词现在时',
          '数字、日期与时间',
          '智利西班牙语基础发音',
        ],
      },
      {
        nivel: 'A2 — 初级',
        contenidos: [
          '叙述过去经历（过去时）',
          '描述人物、地点与物品',
          '表达喜好与偏好',
          '日常场景交流：购物、餐厅、交通',
          '智利惯用语入门',
        ],
      },
      {
        nivel: 'B1 — 中级',
        contenidos: [
          '口头与书面论证',
          '多种时态叙事',
          '新闻类文本理解',
          '时事话题辩论与讨论',
          '正式与非正式语体',
        ],
      },
      {
        nivel: 'B2 — 中高级',
        contenidos: [
          '学术文本与文学作品分析',
          '报告与论文写作',
          '真实语音理解',
          '虚拟式：用法与细微差别',
          '职业场合西班牙语',
        ],
      },
      {
        nivel: 'C1 — 高级',
        contenidos: [
          '语义细微差别与复杂语体表达',
          '智利及拉丁美洲文学分析',
          '高级学术写作',
          '语用学与话语连贯性',
          'DELE C1证书备考',
        ],
      },
    ],
    actividades: [
      '入学迎新导引',
      '比尼亚德尔马、瓦尔帕莱索及圣地亚哥本地游览',
      '城市定向越野活动（Amazing Race）',
      '足球联赛',
      '国际文化博览会',
      '国际文化晚宴',
      '舞蹈课',
    ],
    condiciones: [
      {
        titulo: '入学要求',
        descripcion: '须达到所选课程规定的最低水平（A1除外）。课程开始前须完成诊断测试，费用已包含在学费中。',
      },
      {
        titulo: '出勤率',
        descripcion: '须达到80%以上出勤率方可获得结业证书。',
      },
      {
        titulo: '取消政策',
        descripcion: '提前45天以上取消：不收费。提前15–44天：收取50%费用。提前15天以内：不予退款。不可抗力情况个别评估。请发送书面通知至 caroline.cortes@uai.cl。',
      },
    ],
    grupoMaximo: 24,
    duracion: '17周',
    certificado: {
      tipo: '官方成绩单',
      emite: '阿道夫·伊瓦涅斯大学（通过CEIE）',
      reconocimiento: '课程对接CEFR。通过UAI国际合作协议进行学术等值认定。',
    },
    precio: {
      estandar: 'USD 950 / 每位参与者',
      inSitu: 'USD 1,188 / 专题课程或核心课程',
    },
  },
  {
    slug: 'intensive',
    nombre: '西班牙语强化课程',
    descripcionBreve: '面向国际学员的强化小组培训，无需完整学期，短期内提升西班牙语能力。',
    descripcionExtendida:
      '西班牙语强化课程面向希望在短期内提升西班牙语能力的国际非母语学员，无需在智利停留整整一个学期。课程将强化语言学习与文化沉浸体验相结合，在西班牙语环境中促进实践性、有意义的学习。\n\n课程与欧洲语言共同参考框架（CEFR）接轨，遵循塞万提斯学院课程计划（PCIC）标准，助力学员通过集中式语言与文化学习体验稳步提升西班牙语水平。',
    objetivo:
      '通过适合每位学员水平和目标的强化沉浸式体验，提升西班牙语水平。',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: '寻求短期强化语言培训的国际非西班牙语学员。',
    cursosTabla: [
      { nombre: '语法与交际结构', horas: 22, precioUSD: '900 USD（两门课合计）', creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '2周强化课程', descripcion: '强化课程，专注于培养和巩固与学员水平相符的西班牙语语法与语言资源。通过主动应用的教学法，学员学习在不同场景下实现日益精准、得体的交际。' },
      { nombre: '交际与智利文化', horas: 22, precioUSD: '已含', creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '2周强化课程', descripcion: '强化课程，培养西班牙语交际能力，同时融入智利与拉丁美洲文化学习。包含Viña del Mar和Valparaíso的文化体验活动。' },
      { nombre: '语法与交际结构', horas: 40, precioUSD: '1,800 USD（两门课合计）', creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '4周强化课程', descripcion: '强化课程，专注于培养和巩固西班牙语语法与语言资源。四周制教学安排有助于循序渐进地掌握和巩固相应级别的语法结构。' },
      { nombre: '交际与智利文化', horas: 40, precioUSD: '已含', creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '4周强化课程', descripcion: '强化课程，融合文化学习的西班牙语交际能力培养。四周制安排有助于学员循序渐进地深化交际能力，并进一步整合语言学习与文化体验。' },
    ],
    horarios: [
      { turno: '课程', dias: '周一至周四', hora: '按课程安排' },
      { turno: '文化活动', dias: '周五', hora: '按课程安排' },
    ],
    temario: [
      {
        nivel: 'A1 — 初学',
        contenidos: [
          '自我介绍与问候语',
          '日常生活词汇',
          '陈述句：规则动词现在时',
          '数字、日期与时间',
          '智利西班牙语基础发音',
        ],
      },
      {
        nivel: 'A2 — 初级',
        contenidos: [
          '叙述过去经历（过去时）',
          '描述人物、地点与物品',
          '表达喜好与偏好',
          '日常场景交流：购物、餐厅、交通',
          '智利惯用语入门',
        ],
      },
      {
        nivel: 'B1 — 中级',
        contenidos: [
          '口头与书面论证',
          '多种时态叙事',
          '新闻类文本理解',
          '时事话题辩论与讨论',
          '正式与非正式语体',
        ],
      },
      {
        nivel: 'B2 — 中高级',
        contenidos: [
          '学术文本与文学作品分析',
          '报告与论文写作',
          '真实语音理解',
          '虚拟式：用法与细微差别',
          '职业场合西班牙语',
        ],
      },
      {
        nivel: 'C1 — 高级',
        contenidos: [
          '语义细微差别与复杂语体表达',
          '智利及拉丁美洲文学分析',
          '高级学术写作',
          '语用学与话语连贯性',
        ],
      },
    ],
    actividades: [
      '入学迎新导引',
      '比尼亚德尔马与瓦尔帕莱索本地游览',
      '智利烹饪课',
    ],
    condiciones: [
      {
        titulo: '入学要求',
        descripcion: '须达到所选课程规定的最低水平（A1除外）。课程开始前须完成诊断测试，费用已包含在学费中。',
      },
      {
        titulo: '出勤率',
        descripcion: '须达到80%以上出勤率方可获得结业证书。',
      },
      {
        titulo: '取消政策',
        descripcion: '提前45天以上取消：不收费。提前15–44天：收取50%费用。提前15天以内：不予退款。不可抗力情况个别评估。请发送书面通知至 caroline.cortes@uai.cl。',
      },
    ],
    grupoMaximo: 15,
    duracion: '2至4周',
    certificado: {
      tipo: '官方成绩单',
      emite: '阿道夫·伊瓦涅斯大学（通过CEIE）',
      reconocimiento: '证明已完成课时数及达到的CEFR级别。',
    },
    precio: {
      estandar: 'USD 900（2周强化 · 两门课合计）',
      inSitu: 'USD 1,800（4周强化 · 两门课合计）',
    },
    modalidades: [
      '面授 · Viña del Mar 校区',
    ],
    perfilIdeal: '希望在短期内提升西班牙语水平的国际非母语学员。',
  },
  {
    slug: 'specific-purposes',
    nombre: '专业目的西班牙语课程',
    descripcionBreve: '为个人、群体或机构量身定制的短期西班牙语课程，根据具体需求、兴趣和目标进行设计。',
    descripcionExtendida:
      '专业目的西班牙语课程是根据每位学员、群体或机构的具体需求、兴趣和目标量身定制的短期课程。其目的是通过适合参与者语言水平和专业背景的内容与活动，在学术、职业或专业领域强化西班牙语交际能力。\n\n课程将目标领域专业词汇、交际功能和语言资源的发展与专项实践活动相结合，这些活动聚焦于在各领域特定场景和语境中使用西班牙语。教学方法和内容根据课程目标确定，可包含西班牙语课堂教学、工作坊、实践活动以及文化或职业体验。',
    objetivo:
      '通过根据每人、群体或机构具体需求量身定制的课程，在学术、职业或专业领域强化西班牙语交际能力。',
    niveles: ['根据机构需求'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: '拉美地区学员（本科生、研究生）、高管、企业、国际组织及职业群体。',
    cursosTabla: [
      { nombre: '医疗健康', horas: '30–50', precioUSD: 'USD 900–1,500', modalidad: '1–2周，定制' },
      { nombre: '商务', horas: '30–50', precioUSD: 'USD 900–1,500', modalidad: '定制' },
      { nombre: '天文学', horas: '30–50', precioUSD: 'USD 900–1,500', modalidad: '定制' },
      { nombre: '文学之旅', horas: '30–50', precioUSD: 'USD 900–1,500', modalidad: '定制' },
    ],
    horarios: [
      { turno: '灵活', dias: '与合作机构协商', hora: '按协议安排' },
    ],
    temario: [
      {
        nivel: '商务与行业西班牙语',
        contenidos: [
          '企业沟通与商务谈判',
          '报告与专业邮件写作',
          '商业场合口头演示',
          '行业专项词汇',
        ],
      },
      {
        nivel: '学术西班牙语',
        contenidos: [
          '西班牙语学术阅读与写作',
          '学术格式引用与参考文献',
          '研究成果展示',
          '学术研讨会与论坛参与',
        ],
      },
      {
        nivel: '外交与国际关系西班牙语',
        contenidos: [
          '外交礼仪与外交语言',
          '外交照会与公文写作',
          '国际组织西班牙语',
          '政治分析与立场声明',
        ],
      },
    ],
    actividades: [
      '根据学员水平、背景和学习目标进行课程设计',
      '专业西班牙语教师及（如适用）相关领域专家授课',
      '根据课程内容和目标精选或开发教学材料',
      '课程期间提供全程支持与协调服务',
      '根据课程模式提供文化活动及沉浸式体验',
      '与课程目标相关的学术、职业或文化参观活动',
      '面授课程可提供住宿和交通等后勤支持服务',
      '根据课程特点颁发参与或结业证书',
    ],
    condiciones: [
      {
        titulo: '上门授课模式',
        descripcion: '上门授课模式含按约定地点计算的教师交通费用。',
      },
      {
        titulo: '单次取消',
        descripcion: '须提前至少24小时取消。请发送书面通知至 caroline.cortes@uai.cl。',
      },
      {
        titulo: '课程取消',
        descripcion: '提前45天以上取消：不收费。提前15–44天：收取50%费用。提前15天以内：不予退款。不可抗力情况个别评估。请发送书面通知至 caroline.cortes@uai.cl。',
      },
    ],
    grupoMaximo: '根据机构协议而定',
    duracion: '1至2周（定制）',
    certificado: {
      tipo: 'CEIE-UAI 专业培训证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '证明已完成课时数及在专业领域达到的CEFR级别。',
    },
    precio: {
      estandar: 'USD 900 – 1,500',
      notas: '请发送正式询价至 programascortos@uai.cl',
    },
    submodalidades: [
      '商务与行业西班牙语',
      '学术西班牙语',
      '外交与国际关系西班牙语',
      '行业专项西班牙语（医疗、法律、建筑）',
    ],
    nota: '面向机构：使馆、企业、合作大学、地方政府。',
  },
]
