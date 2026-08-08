import type { ProgramData } from './programs'

export const PROGRAMS_DATA_ZH: ProgramData[] = [
  {
    slug: 'semester',
    nombre: '学期西班牙语课程',
    descripcionBreve: '按CEFR级别15至18周系统进阶。',
    descripcionExtendida:
      '学期课程面向希望在较长时间内系统学习西班牙语的学员。课程遵循塞万提斯学院课程体系，每班最多12名学员，保证个性化辅导和真实交际实践。',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
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
        titulo: '取消政策',
        descripcion: '提前30天以上取消：退款80%。提前15–29天：退款50%。提前15天以内：不予退款。',
      },
    ],
    grupoMaximo: 12,
    duracion: '每级别15至18周',
    certificado: {
      tipo: 'CEIE-UAI 学业证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '课程对接CEFR。通过UAI国际合作协议进行学术等值认定。',
    },
    precio: {
      valor: '[待定 — 待UAI确认]',
      moneda: 'USD',
      notas: '含教学材料',
    },
  },
  {
    slug: 'intensive',
    nombre: '强化西班牙语课程',
    descripcionBreve: '4至8周全面沉浸。快速、系统地提升语言能力。',
    descripcionExtendida:
      '强化课程为需要在短时间内达到交际水平的学员提供加速沉浸式体验。每日4课时结合文化活动，在单一强化学期内即可完成两个CEFR级别的显著进步。',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    horarios: [
      { turno: '上午班', dias: '周一至周五', hora: '09:00 – 13:00' },
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
    duracion: '4至8周',
    certificado: {
      tipo: 'CEIE-UAI 结业证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '等值认定视学员所在机构而定。',
    },
    precio: {
      valor: '[待定 — 待UAI确认]',
      moneda: 'USD',
    },
  },
  {
    slug: 'specific-purposes',
    nombre: '专业目的课程',
    descripcionBreve: '面向职业、外交及机构背景开发的西班牙语课程。',
    descripcionExtendida:
      '专业目的西班牙语课程（EFE）面向机构用户——使馆、企业、地方政府、大学——提供结构化且适应其专业领域的语言培训。课程体系与合作机构协同开发，确保与实际交流需求高度匹配。',
    niveles: ['根据机构需求'],
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
        descripcion: '课程最少40课时。',
      },
      {
        titulo: '合作方式',
        descripcion: '须提供赞助机构证明信及CEIE正式提案。',
      },
    ],
    grupoMaximo: '根据机构协议而定',
    duracion: '最少40课时。具体时长按协议执行。',
    certificado: {
      tipo: 'CEIE-UAI 专业培训证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '证明已完成课时数及在专业领域达到的CEFR级别。',
    },
    precio: {
      valor: '机构报价',
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
    slug: 'individual',
    nombre: '个人定制西班牙语课程',
    descripcionBreve: '根据您的时间、水平和职业目标量身定制的一对一课程。',
    descripcionExtendida:
      '个人定制课程提供与CEIE专家一对一的个性化教学。课程体系、教材、时间表和学习节奏完全根据学员个人情况定制。可在UAI Viña del Mar校区授课，也可赴学员职业工作地上课——使馆、企业办公室或私人住所。',
    niveles: ['各级别均可'],
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
    duracion: '灵活。无最低课时限制。',
    certificado: {
      tipo: 'CEIE-UAI 学业证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '证明已完成课时数及达到的CEFR级别。',
    },
    precio: {
      estandar: 'USD 50/小时（UAI校区）',
      inSitu: 'USD 58/小时（上门授课：使馆、企业、专业场所）',
      largoplazo: '起价 USD 38/小时（长期承诺，视协议而定）',
    },
    modalidades: [
      '面授 · Viña del Mar 校区',
      '上门授课 · 合作机构场所',
      '视频会议 [请咨询可用情况]',
    ],
    perfilIdeal: '职业人士、高管、外交官、研究人员及学者。',
  },
]
