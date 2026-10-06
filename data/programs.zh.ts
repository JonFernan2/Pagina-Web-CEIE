import type { ProgramData } from './programs'

export const PROGRAMS_DATA_ZH: ProgramData[] = [
  {
    slug: 'semester',
    nombre: '学期西班牙语课程',
    descripcionBreve: '西班牙语作为外语课程（A1–C1级别）、专题选修课程及UAI核心课程。',
    descripcionExtendida:
      '西班牙语学期课程旨在循序渐进地培养国际非西班牙语学员的语言、学术及文化能力，促进其融入大学学习生活。课程与欧洲语言共同参考框架（CEFR）接轨，遵循塞万提斯学院课程计划（PCIC）标准，提供A1至C1各级别课程，并授予学分。\n\n与智利其他西班牙语项目不同，UAI学期课程将语言教学与彰显本校特色的博雅教育模式相融合。学生不仅学习西班牙语，更通过借鉴哥伦比亚大学核心课程理念的主动参与式教学法，培养批判性思维、论证能力及对智利与拉丁美洲文化的深刻理解。此外，学生有机会融入UAI社区，与来自20多个国家的智利及国际学生共同参加学生组织、课外工作坊、文化活动和体育赛事。',
    objetivo:
      '循序渐进地培养国际非西班牙语学员的语言、学术及文化能力，促进其融入大学学习生活。',
    niveles: ['A1', 'A2', 'B1', 'B2', 'C1'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: '无西班牙语基础的国际本科生。',
    cursosTabla: [
      { nombre: '西班牙语基础 A1/A2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: '本课程注重在正式与非正式、个人与职业等多种语境中培养西班牙语口头与书面交际能力，通过语境化语言运用实现清晰有效的沟通目标。' },
      { nombre: '西班牙语中级：交际 B1/B2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: '本课程旨在通过正式与非正式语境下的持续互动，巩固西班牙语交际能力，培养口头与书面表达能力，为有效融入社会奠定基础。' },
      { nombre: '西班牙语中级：语法 B1–B2', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: '本课程面向中级学员，旨在巩固和深化西班牙语语法掌握。通过语境化分析与练习，学员系统学习复杂语法结构，在多样化交际场景中实现更精准、规范的表达。' },
      { nombre: '西班牙语高级：智利文化 C1', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: '本课程为高级学员设计，通过研究智利文化深化语言能力。借助文本、视听材料与交际活动，学员分析智利的社会、历史与文化面貌，强化批判性理解与西班牙语表达能力。' },
      { nombre: '西班牙语高级：语法 C1', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: '本课程通过有意识地分析和运用学术、职业及文化语境中的复杂语法结构，深化西班牙语掌握，着力提升精确性、连贯性与话语得体性，使学员在高要求场合实现清晰、细腻的表达。' },
      { nombre: '西班牙语语音学', horas: 45, precioUSD: 950, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'ELE', descripcion: '本课程介绍西班牙语语音与音位体系，重点涵盖发音、语调与节奏。通过语音感知与口头产出练习，学员在不同交际场景中形成更清晰易懂的发音。' },
      { nombre: '商务与全球市场专业西班牙语（B1/B2）', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: '专题课程', descripcion: '本课程面向需要在商务职业场景中使用西班牙语的学员，涵盖会议、演示、谈判等商业交际情景，并提供所需词汇与语言结构。课程通过参与商业讲座、活动和企业参访，推动情境化语言学习。' },
      { nombre: '医疗健康与医学交流西班牙语（B1/B2）', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: '专题课程', descripcion: '本课程面向需要在医疗场景中使用西班牙语的学员或专业人士。通过真实交际情境，培养患者沟通、医疗团队协作及专业文献理解的语言能力，注重清晰、人文关怀与专业性的表达。' },
      { nombre: '活着讲述：拉丁美洲文学', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: '专题课程', descripcion: '本课程探讨记忆、乡愁与身份认同在拉丁美洲文学中的作用。通过研读加西亚·马尔克斯等代表作家的文学作品，学员将发现这一地区的作家如何将个人回忆与经历转化为折射个体历史与集体文化进程的叙事。' },
      { nombre: '影像无畏：纪录片中的智利', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: '专题课程', descripcion: '本课程以智利纪录片电影为切入点，探讨该国历史、记忆与社会进程。通过分析重要导演的代表作品，学员将了解纪录片如何保存集体记忆、反思重大历史事件，并培养对智利社会的批判性视角。' },
      { nombre: '核心课程：艺术与人文', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'UAI核心课程', descripcion: '本课程提出对建筑、绘画和雕塑经典作品的批判性分析与直接观察练习，引导学员从作品的形式结构与创作背景中提取有效信息，从技术描述深入图像与象征解读，并通过参观纪念地与展览丰富学习体验。' },
      { nombre: '核心课程：科学', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'UAI核心课程', descripcion: '本课程探讨当代物理学与生物学的重大问题，以科学为工具强化逻辑推理能力。课程引导学员学会权衡理论价值与现有证据的支撑，培养能够构建严谨、以科学依据为基础论点的批判性思维。' },
      { nombre: '核心课程：论证写作', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'UAI核心课程', descripcion: '秉承"在写作中学会写作"的教学理念，本课程旨在将思想转化为有效的论说文本。通过文献研究与说服技巧训练，要求学员持续修改打磨，最终在任何职业环境中实现自主表达。' },
      { nombre: '核心课程：伦理学', horas: 45, precioUSD: 1188, creditos: 4, minEstudiantes: 5, maxEstudiantes: 24, subcategoria: 'UAI核心课程', descripcion: '本课程深入探讨人类存在的道德维度，聚焦个体的现实责任。通过对行为正义与美好生活的追问，学员学会分析、评价并论证日常与职业决策，以知识自主性和诚信作为职业实践的核心。' },
    ],
    horarioClases: '周一至周五，08:30 – 18:55',
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
        titulo: '开课条件',
        descripcion: '每门课程须每个级别至少有五名学员注册方可开课。',
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
    participantes: '5人',
    duracion: '17周',
    certificado: {
      tipo: '官方成绩单',
      emite: '阿道夫·伊瓦涅斯大学（通过CEIE）',
      reconocimiento: '课程对接CEFR。通过UAI国际合作协议进行学术等值认定。',
    },
    precio: {
      estandarLabel: '西班牙语课程（ELE）',
      estandar: '每门课程 USD 950',
      inSituLabel: '专题课程及核心课程',
      inSitu: '每门课程 USD 1,188',
    },
  },
  {
    slug: 'intensive',
    nombre: '西班牙语强化课程',
    descripcionBreve: '2周或4周西班牙语强化课程。',
    descripcionExtendida:
      '西班牙语强化课程面向希望在短期内提升西班牙语能力的国际非母语学员，无需在智利停留整整一个学期。课程将强化语言学习与文化沉浸体验相结合，在西班牙语环境中促进实践性、有意义的学习。\n\n课程与欧洲语言共同参考框架（CEFR）接轨，遵循塞万提斯学院课程计划（PCIC）标准，助力学员通过集中式语言与文化学习体验稳步提升西班牙语水平。',
    objetivo:
      '通过适合每位学员水平和目标的强化沉浸式体验，提升西班牙语水平。',
    niveles: ['A1', 'A2', 'B1', 'B2'],
    sedes: ['Viña del Mar'],
    publicoObjetivo: '寻求短期强化语言培训的国际非西班牙语学员。',
    cursosTabla: [
      { nombre: '语法与交际结构', horas: 22, precioUSD: 900, creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '2周强化课程', descripcion: '本强化课程着重培养西班牙语的基础语法结构。通过积极、注重实践的教学方法，学员将掌握在日常交际情境中理解和运用该语言主要结构所需的工具。 课程涵盖核心语法内容，融合词汇、理解以及口头和书面表达，并通过实践活动让学员在真实交际情境中运用所学。强化形式有助于逐步巩固学习成果，为继续提升西班牙语水平打下坚实基础。' },
      { nombre: '交际与智利文化', horas: 22, precioUSD: 900, creditos: 2, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '2周强化课程', descripcion: '本强化课程着重培养西班牙语基础交际能力，将语言学习与智利及拉丁美洲文化的认识相结合。学员将掌握在日常情境中以口头和书面形式进行简单交流的工具。 通过实践活动和沉浸式体验，学员有机会在真实情境中使用西班牙语，同时探索智利的日常生活、社会与文化。课程包含在Viña del Mar和瓦尔帕莱索开展的文化活动，促进跨文化反思，帮助学员更深入地了解其学习经历所处的环境。' },
      { nombre: '语法与交际结构', horas: 40, precioUSD: 1800, creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '4周强化课程', descripcion: '本强化课程着重培养西班牙语的基础语法结构。通过积极、注重实践的教学方法，学员将掌握在日常交际情境中理解和运用该语言主要结构所需的工具。 课程涵盖核心语法内容，融合词汇、理解以及口头和书面表达，并通过实践活动让学员在真实交际情境中运用所学。强化形式有助于逐步巩固学习成果，为继续提升西班牙语水平打下坚实基础。' },
      { nombre: '交际与智利文化', horas: 40, precioUSD: 1800, creditos: 4, minEstudiantes: 5, maxEstudiantes: 15, subcategoria: '4周强化课程', descripcion: '本强化课程着重培养西班牙语基础交际能力，将语言学习与智利及拉丁美洲文化的认识相结合。学员将掌握在日常情境中以口头和书面形式进行简单交流的工具。 通过实践活动和沉浸式体验，学员有机会在真实情境中使用西班牙语，同时探索智利的日常生活、社会与文化。课程包含在Viña del Mar和瓦尔帕莱索开展的文化活动，促进跨文化反思，帮助学员更深入地了解其学习经历所处的环境。' },
    ],
    horarioClases: '周一至周四，08:30 – 18:55 · 周五文化活动',
    horarios: [
      { turno: '课程', dias: '周一至周四', hora: '08:30 – 18:55' },
      { turno: '文化活动', dias: '周五', hora: '按课程安排' },
    ],
    temario: [
      {
        nivel: '语法与交际结构',
        descripcion: [
          '本强化课程着重培养西班牙语的基础语法结构。通过积极、注重实践的教学方法，学员将掌握在日常交际情境中理解和运用该语言主要结构所需的工具。',
          '课程涵盖核心语法内容，融合词汇、理解以及口头和书面表达，并通过实践活动让学员在真实交际情境中运用所学。强化形式有助于逐步巩固学习成果，为继续提升西班牙语水平打下坚实基础。',
        ],
        ficha: [{ label: '学时', value: '22学时（2周）· 40学时（4周）' }, { label: '学分', value: '2（2周）· 4（4周）' }, { label: '时长', value: '2周或4周' }, { label: '最少学员人数', value: '5' }, { label: '最多学员人数', value: '15' }, { label: '校区', value: 'Viña del Mar' }, { label: '价格', value: '900美元（2周）· 1,800美元（4周）' }],
        contenidos: [],
      },
      {
        nivel: '交际与智利文化',
        descripcion: [
          '本强化课程着重培养西班牙语基础交际能力，将语言学习与智利及拉丁美洲文化的认识相结合。学员将掌握在日常情境中以口头和书面形式进行简单交流的工具。',
          '通过实践活动和沉浸式体验，学员有机会在真实情境中使用西班牙语，同时探索智利的日常生活、社会与文化。课程包含在Viña del Mar和瓦尔帕莱索开展的文化活动，促进跨文化反思，帮助学员更深入地了解其学习经历所处的环境。',
        ],
        ficha: [{ label: '学时', value: '22学时（2周）· 40学时（4周）' }, { label: '学分', value: '2（2周）· 4（4周）' }, { label: '时长', value: '2周或4周' }, { label: '最少学员人数', value: '5' }, { label: '最多学员人数', value: '15' }, { label: '校区', value: 'Viña del Mar' }, { label: '价格', value: '900美元（2周）· 1,800美元（4周）' }],
        contenidos: [],
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
        titulo: '开课条件',
        descripcion: '每门课程须每个级别至少有五名学员注册方可开课。',
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
    participantes: '5人',
    duracion: '2至4周',
    certificado: {
      tipo: '官方成绩单',
      emite: '阿道夫·伊瓦涅斯大学（通过CEIE）',
      reconocimiento: '证明已完成课时数及达到的CEFR级别。',
    },
    precio: {
      resumen: 'USD 900 起',
      estandarLabel: '2周强化（每门课程）',
      estandar: 'USD 900',
      inSituLabel: '4周强化（每门课程）',
      inSitu: 'USD 1,800',
    },
    modalidades: [
      '面授 · Viña del Mar 校区',
    ],
    perfilIdeal: '希望在短期内提升西班牙语水平的国际非母语学员。',
  },
  {
    slug: 'specific-purposes',
    vistaSimple: true,
    incluye: {
      titulo: '我们的课程包含哪些内容？',
      intro: 'CEIE课程根据每项体验的特点、目标和形式进行设计。根据课程类型（个人、团体或机构）及其具体要求，可包括：',
      items: [
        '根据学员水平、背景和学习目标定制的课程设计。',
        '西班牙语教学专业教师，并视情况配备课程主题领域的专业教师。',
        '根据课程内容和目标精选或编写的教学材料。',
        '课程期间的全程陪伴与协调。',
        '视课程形式和特点安排的文化活动与沉浸式体验。',
        '与课程目标相关的学术、职业或文化参访。',
        '为有需要的线下课程提供住宿、交通等后勤支持服务。',
        '视课程特点颁发的结业或合格证书。',
      ],
    },
    areasNota: '以下领域为示例，可经双方事先协商后选定。',
    nombre: '专业目的西班牙语课程',
    descripcionBreve: '根据每位学员、群体或机构的具体需求、兴趣和目标量身定制的短期课程。',
    descripcionExtendida:
      '专业目的西班牙语课程是一项短期课程，根据每位学员、群体或机构的具体需求、兴趣和目标量身定制。其目的是通过适应学员背景和语言水平的内容与活动，提升学员在学术、职业或专业领域的西班牙语交际能力。\n\n课程将相关领域的专业词汇、交际功能和语言资源的培养，与面向该领域典型情境的西班牙语实践活动相结合。教学方法和内容根据课程目标确定，可包括西班牙语课堂、工作坊、应用活动以及文化或职业体验。',
    objetivo:
      '通过根据每人、群体或机构具体需求量身定制的课程，在学术、职业或专业领域强化西班牙语交际能力。',
    niveles: ['根据机构需求'],
    sedes: ['Viña del Mar', 'Santiago'],
    publicoObjetivo: '拉美地区学员（本科生、研究生）、高管、企业、国际组织及职业群体。',
    cursosTabla: [
      { nombre: '个性化一对一课程', horas: '灵活', precioUSD: '询价', modalidad: '面授或线上', descripcion: '根据每位学员的水平、目标、兴趣和可用时间量身定制的西班牙语课程。学习内容和节奏因人而异，可针对通用语言能力或学术、职业及个人兴趣领域进行深化。课程采用交际式个性化教学法，结合专为每位学员精选的活动与材料。课程时长、强度、形式和内容均可灵活调整。' },
      { nombre: '机构团体课程', horas: '灵活', precioUSD: '询价', modalidad: '面授或线上', descripcion: '面向大学、机构、企业或其他团体量身定制的西班牙语课程，根据学员背景及每次体验确定的学术、职业或文化目标进行设计。课程可将西班牙语教学与专业内容、文化活动、沉浸式体验及学术或职业参观相结合。课程设计、时长、强度和形式由CEIE与申请机构共同确定。' },
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
    participantes: '根据机构协议而定',
    duracion: '1至2周（定制）',
    certificado: {
      tipo: 'CEIE-UAI 专业培训证书',
      emite: '阿道夫·伊瓦涅斯大学',
      reconocimiento: '证明已完成课时数及在专业领域达到的CEFR级别。',
    },
    precio: {
      estandarLabel: '视时长与形式而定',
      estandar: 'USD 900 – 1,500',
      notas: '请发送正式询价至 programascortos@uai.cl',
    },
    submodalidades: [
      '个性化一对一课程',
      '机构团体课程',
    ],
    nota: '面向机构：使馆、企业、合作大学、地方政府。',
  },
]
