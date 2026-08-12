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
    nombre: '强化西班牙语课程（小组）',
    descripcionBreve: '强化面授或在线小组培训。初级、中级与高级模式，以及对话交流课程。',
    descripcionExtendida:
      '强化课程为需要在短时间内达到交际水平的学员提供加速沉浸式体验。每日课程结合文化活动，在2至3周内即可取得显著进步。',
    objetivo:
      '通过强化面授或在线培训，帮助需要在短期内提升西班牙语水平的学员增强交际能力。',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: '无西班牙语基础的国际学员。职业人士、研究人员、高管、企业及外交官员。',
    cursosTabla: [
      { nombre: '初级在线课程', horas: 30, precioUSD: 300, modalidad: '3周' },
      { nombre: '中级在线课程', horas: 30, precioUSD: 300, modalidad: '3周' },
      { nombre: '高级在线课程', horas: 30, precioUSD: 300, modalidad: '3周' },
      { nombre: '初级面授课程', horas: 40, precioUSD: 800, modalidad: '2周' },
      { nombre: '中级面授课程', horas: 40, precioUSD: 800, modalidad: '2周' },
      { nombre: '高级面授课程', horas: 40, precioUSD: 800, modalidad: '2周' },
      { nombre: '对话交流课程：休息一下 / 我们说西班牙语（在线）', horas: 8, precioUSD: 100, modalidad: '8次课，每周2次' },
    ],
    horarios: [
      { turno: '上午班（面授）', dias: '周一至周五', hora: '09:00 – 13:00' },
      { turno: '在线', dias: '与小组协商', hora: '灵活安排' },
    ],
    temario: [
      {
        nivel: 'A1–A2 — 初学至初级',
        contenidos: [
          '日常场景基础交流',
          '现在时、过去时与即将发生的将来时',
          '核心词汇与发音',
          '简单语篇听力理解',
        ],
      },
      {
        nivel: 'B1–B2 — 中级',
        contenidos: [
          '就熟悉话题流畅交谈',
          '结构化文章写作',
          '智利媒体内容理解',
          '表达观点与论证',
        ],
      },
    ],
    actividades: [
      '每日文化对话课',
      '城市游览：瓦尔帕莱索与比尼亚德尔马',
      '智利美食烹饪工作坊',
      '与UAI国际学生社区互动社交活动',
    ],
    condiciones: [
      {
        titulo: '入学要求',
        descripcion: 'A1级或零基础。课程开始前须完成诊断测试。',
      },
      {
        titulo: '出勤率',
        descripcion: '因课程强化性质，须达到85%以上出勤率。',
      },
      {
        titulo: '取消政策',
        descripcion: '提前30天以上取消：退款80%。提前15–29天：退款50%。提前15天以内：不予退款。',
      },
    ],
    grupoMaximo: 10,
    duracion: '2–3周（视授课方式而定）',
    certificado: {
      tipo: 'CEIE-UAI 结业证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '等值认定视学员所在机构而定。',
    },
    precio: {
      estandar: 'USD 300（在线 · 30课时）',
      inSitu: 'USD 800（面授 · 40课时）',
      notas: '对话交流课程：USD 100（8次课）',
    },
  },
  {
    slug: 'individual',
    nombre: '个人定制西班牙语课程',
    descripcionBreve: '根据每位学员的水平、节奏和目标量身定制的个人培训。可在校园授课或上门服务。',
    descripcionExtendida:
      '个人定制课程提供与CEIE专家一对一的个性化教学。课程体系、教材、时间表和学习节奏完全根据学员个人情况定制。可在UAI Viña del Mar校区授课，也可赴学员职业工作地上课——使馆、企业办公室或私人住所。',
    objetivo:
      '通过个性化培训，根据每位学员的水平、学习节奏及学术或职业目标，培养其西班牙语交际能力。',
    niveles: ['各级别均可'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: '无西班牙语基础的国际学员。职业人士、研究人员、高管、企业及外交官员。',
    cursosTabla: [
      { nombre: '初级', horas: 20, precioUSD: 1000 },
      { nombre: '中级', horas: 30, precioUSD: 1500 },
      { nombre: '高级', horas: 40, precioUSD: 2000 },
    ],
    horarios: [
      { turno: '灵活', dias: '与学员协商', hora: '含夜间及周末' },
    ],
    temario: [
      {
        nivel: '个性化课程设计',
        contenidos: [
          '详细初始诊断评估',
          '学员专项学习目标设定',
          '适合学员职业领域的定制教材',
          '定期量化进度报告',
        ],
      },
    ],
    actividades: [
      '完全个性化课程设计',
      '适合学员职业领域的定制教材',
      '灵活时间安排——含夜间及周末',
      '按约定间隔提交进度报告',
    ],
    condiciones: [
      {
        titulo: '无最低课时要求',
        descripcion: '课程完全灵活，无最低课时限制。',
      },
      {
        titulo: '单次取消',
        descripcion: '须提前至少24小时取消。未在规定时间内取消的课时照常计费。',
      },
      {
        titulo: '上门授课模式',
        descripcion: '上门授课含按约定地点计算的教师交通费用。',
      },
    ],
    grupoMaximo: 1,
    duracion: '灵活安排',
    certificado: {
      tipo: 'CEIE-UAI 学业证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '证明已完成课时数及达到的CEFR级别。',
    },
    precio: {
      estandar: 'USD 1,000（初级 · 20课时）',
      inSitu: 'USD 1,500（中级 · 30课时）',
      largoplazo: 'USD 2,000（高级 · 40课时）',
    },
    modalidades: [
      '面授 · Viña del Mar 校区',
      '上门授课 · 合作机构场所',
      '视频会议 [请咨询可用情况]',
    ],
    perfilIdeal: '职业人士、高管、外交官、研究人员及学者。',
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
  {
    slug: 'projects',
    nombre: '项目与招标',
    descripcionBreve: '面向企业、国际组织和职业群体的定制企业培训项目，按行业和机构目标进行课程设计。',
    descripcionExtendida:
      '为参与招标流程、国际项目或需要大规模培训的机构设计和实施完全定制化的西班牙语教学项目。课程体系、时长、费用和授课地点均根据客户需求确定。',
    objetivo:
      '根据每个机构或职业群体的具体需求，按行业、级别和机构目标进行定制化课程设计，培养其西班牙语交际能力。',
    niveles: ['视项目而定'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: '企业、国际组织及职业群体。',
    cursosTabla: [
      { nombre: '定制课程（按项目）', horas: '视项目而定', precioUSD: '视项目而定', modalidad: '视项目而定' },
    ],
    horarios: [
      { turno: '灵活', dias: '与客户协商', hora: '按项目安排' },
    ],
    temario: [
      {
        nivel: '定制化设计',
        contenidos: [
          '机构需求调研',
          '按行业和级别进行课程设计',
          '专业教学团队实施',
          '评估与进度报告',
        ],
      },
    ],
    actividades: [
      '个性化机构课程设计',
      '与客户人力资源或培训部门协调',
      '进度报告与效果评估',
      '支持面授或远程实施',
    ],
    condiciones: [
      {
        titulo: '流程',
        descripcion: '须提交CEIE正式提案，经客户机构批准。按项目签订专项合同。',
      },
      {
        titulo: '费用',
        descripcion: '根据课时量、参与人数及课程设计复杂程度报价。',
      },
    ],
    grupoMaximo: '视项目而定',
    duracion: '视项目而定',
    certificado: {
      tipo: 'CEIE-UAI 机构证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '证明已完成课时数及按项目目标达到的语言级别。',
    },
    precio: {
      valor: '定制报价',
      notas: '请联系 programascortos@uai.cl 申请提案。',
    },
    nota: '适用于企业项目、公开招标及大规模培训项目。',
    noSubPage: true,
  },
]
