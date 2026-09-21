import type { ProgramData } from './programs'

export const PROGRAMS_DATA_ZH: ProgramData[] = [
  {
    slug: 'semester',
    nombre: '学期西班牙语课程',
    descripcionBreve: '按CEFR级别4个月系统进阶。语言课程、专题课程及国际核心课程。',
    descripcionExtendida:
      '学期课程面向希望在较长时间内系统学习西班牙语的国际学员。课程遵循塞万提斯学院课程体系，每班最多12名学员，保证个性化辅导和真实交际实践。',
    objetivo:
      '循序渐进地培养国际非西班牙语学员的语言、学术及文化能力，促进其融入大学学习生活。',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: '无西班牙语基础的国际本科生。',
    cursosTabla: [
      { nombre: '基础西班牙语语法', horas: 45, precioUSD: 950 },
      { nombre: '基础西班牙语交际', horas: 45, precioUSD: 950 },
      { nombre: '中级西班牙语语法', horas: 45, precioUSD: 950 },
      { nombre: '中级西班牙语交际', horas: 45, precioUSD: 950 },
      { nombre: '高级西班牙语语法', horas: 45, precioUSD: 950 },
      { nombre: '高级西班牙语交际', horas: 45, precioUSD: 950 },
      { nombre: '西班牙语语音学', horas: 45, precioUSD: 950 },
      { nombre: '专题：商务与全球市场专业西班牙语', horas: 45, precioUSD: 1188 },
      { nombre: '专题：医疗健康与医学交流西班牙语', horas: 45, precioUSD: 1188 },
      { nombre: '专题：活着讲述——拉丁美洲文学', horas: 45, precioUSD: 1188 },
      { nombre: '专题：影像无畏——纪录片中的智利', horas: 45, precioUSD: 1188 },
      { nombre: '国际核心课程（文学、伦理、科学、当代文明、写作与艺术）', horas: 45, precioUSD: 1188 },
    ],
    horarios: [
      { turno: '上午班', dias: '周一、周三、周五', hora: '09:00 – 12:00' },
      { turno: '下午班', dias: '周一、周三、周五', hora: '14:00 – 17:00' },
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
      '瓦尔帕莱索与比尼亚德尔马导览游',
      '智利文学讨论研讨会',
      '卡萨布兰卡谷葡萄园参观',
      'UAI大学生社区互动活动',
      'UAI图书馆及数字资源使用权限',
    ],
    condiciones: [
      {
        titulo: '入学要求',
        descripcion: 'A1级或零基础。课程开始前须完成诊断测试。',
      },
      {
        titulo: '出勤率',
        descripcion: '须达到80%以上出勤率方可获得结业证书。',
      },
      {
        titulo: '课程套餐',
        descripcion: '4门课套餐（3门语言课+1门专题课）：USD 4,038。5门课套餐（3门语言课+2门专题课）：USD 5,226。5门课特惠套餐：USD 4,750。',
      },
      {
        titulo: '取消政策',
        descripcion: '提前30天以上取消：退款80%。提前15–29天：退款50%。提前15天以内：不予退款。',
      },
    ],
    grupoMaximo: 12,
    duracion: '4个月',
    certificado: {
      tipo: 'CEIE-UAI 学业证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '课程对接CEFR。通过UAI国际合作协议进行学术等值认定。',
    },
    precio: {
      estandar: 'USD 950 / 每位参与者',
      inSitu: 'USD 1,188 / 专题课程或核心课程',
      notas: '5门课特惠套餐：USD 4,750',
    },
  },
  {
    slug: 'intensive',
    nombre: '强化与定制西班牙语课程',
    descripcionBreve: '强化小组培训（在线或面授）或一对一个性化授课。根据每位学员的水平、节奏和目标量身定制。',
    descripcionExtendida:
      '强化与定制西班牙语课程将两种互补模式整合于一个灵活的教学体系中：强化小组培训适合需要在集体环境中快速提升的学员；一对一个性化教学则适合需要完全定制课程体系、时间表和学习节奏的学员。两种模式均支持在UAI Viña del Mar校区面授或在线学习。',
    objetivo:
      '通过强化培训——小组或个人——根据每位学员的水平、节奏和学术或职业目标，培养其西班牙语交际能力。',
    niveles: ['A1', 'A2', 'B1', 'B2', '各级别均可'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: '无西班牙语基础的国际学员。职业人士、研究人员、高管、企业及外交官员。',
    cursosTabla: [
      { nombre: '小组 · 初级在线', horas: 30, precioUSD: 300, modalidad: '3周' },
      { nombre: '小组 · 中级在线', horas: 30, precioUSD: 300, modalidad: '3周' },
      { nombre: '小组 · 高级在线', horas: 30, precioUSD: 300, modalidad: '3周' },
      { nombre: '小组 · 初级面授', horas: 40, precioUSD: 800, modalidad: '2周' },
      { nombre: '小组 · 中级面授', horas: 40, precioUSD: 800, modalidad: '2周' },
      { nombre: '小组 · 高级面授', horas: 40, precioUSD: 800, modalidad: '2周' },
      { nombre: '小组 · 对话交流课程（在线）', horas: 8, precioUSD: 100, modalidad: '8次课，每周2次' },
      { nombre: '个人 · 初级', horas: 20, precioUSD: 1000, modalidad: '定制' },
      { nombre: '个人 · 中级', horas: 30, precioUSD: 1500, modalidad: '定制' },
      { nombre: '个人 · 高级', horas: 40, precioUSD: 2000, modalidad: '定制' },
    ],
    horarios: [
      { turno: '小组面授', dias: '周一至周五', hora: '09:00 – 13:00' },
      { turno: '小组在线', dias: '与小组协商', hora: '灵活安排' },
      { turno: '个人', dias: '与学员协商', hora: '含夜间及周末' },
    ],
    temario: [
      {
        nivel: 'A1–A2 — 初学至初级（小组）',
        contenidos: [
          '日常场景基础交流',
          '现在时、过去时与即将发生的将来时',
          '核心词汇与发音',
          '简单语篇听力理解',
        ],
      },
      {
        nivel: 'B1–B2 — 中级（小组）',
        contenidos: [
          '就熟悉话题流畅交谈',
          '结构化文章写作',
          '智利媒体内容理解',
          '表达观点与论证',
        ],
      },
      {
        nivel: '个人 — 个性化课程设计',
        contenidos: [
          '详细初始诊断评估',
          '学员专项学习目标设定',
          '适合学员职业领域的定制教材',
          '定期量化进度报告',
        ],
      },
    ],
    actividades: [
      '每日文化对话课（小组模式）',
      '城市游览：瓦尔帕莱索与比尼亚德尔马',
      '智利美食烹饪工作坊',
      '与UAI国际学生社区互动社交活动',
      '完全个性化课程设计（个人模式）',
      '灵活时间安排——含夜间及周末',
      '按约定间隔提交进度报告',
    ],
    condiciones: [
      {
        titulo: '入学要求',
        descripcion: 'A1级或零基础。课程开始前须完成诊断测试。',
      },
      {
        titulo: '出勤率（小组）',
        descripcion: '因课程强化性质，须达到85%以上出勤率。',
      },
      {
        titulo: '单次取消（个人）',
        descripcion: '须提前至少24小时取消。未在规定时间内取消的课时照常计费。',
      },
      {
        titulo: '课程取消',
        descripcion: '提前45天以上：不收费。提前15–44天：收取50%费用。提前15天以内：不予退款。请发送书面通知至 caroline.cortes@uai.cl。',
      },
      {
        titulo: '上门授课模式（个人）',
        descripcion: '上门授课含按约定地点计算的教师交通费用。',
      },
    ],
    grupoMaximo: '1–10人（视授课模式而定）',
    duracion: '2–3周（小组）· 定制安排（个人）',
    certificado: {
      tipo: 'CEIE-UAI 结业证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '证明已完成课时数及达到的CEFR级别。',
    },
    precio: {
      estandar: '小组在线：USD 300（30课时）· 面授：USD 800（40课时）',
      inSitu: '个人：起价 USD 1,000（20课时）',
      notas: '小组对话交流课程：USD 100（8次课）',
    },
    modalidades: [
      '小组 · 在线',
      '小组 · 面授 Viña del Mar 校区',
      '个人 · Viña del Mar 校区',
      '个人 · 上门授课（合作机构场所）',
      '个人 · 视频会议',
    ],
    perfilIdeal: '职业人士、高管、外交官、研究人员、学者及国际学员。',
  },
  {
    slug: 'specific-purposes',
    nombre: '专业目的西班牙语短期课程',
    descripcionBreve: '面向职业和学科背景开发的西班牙语课程：医疗、商务、天文学、文学之旅。1至2周的定制课程。',
    descripcionExtendida:
      '专业目的西班牙语课程（EFE）面向机构用户——使馆、企业、地方政府、大学——提供结构化且适应其专业领域的语言培训。课程体系与合作机构协同开发，确保与实际交流需求高度匹配。',
    objetivo:
      '通过根据大学、企业或专业群体需求设计的课程，培养应用于特定职业和学科背景的西班牙语交际能力。',
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
      '相关行业机构参观',
      '领域专家研讨会',
      '西班牙语职业情景模拟',
      '适合合作机构背景的定制化教材',
    ],
    condiciones: [
      {
        titulo: '授课模式',
        descripcion: '可在UAI Viña del Mar校区授课，也可赴合作机构所在地上课。',
      },
      {
        titulo: '最低课时',
        descripcion: '课程最少30课时。',
      },
      {
        titulo: '合作方式',
        descripcion: '须提供赞助机构证明信及CEIE正式提案。',
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
