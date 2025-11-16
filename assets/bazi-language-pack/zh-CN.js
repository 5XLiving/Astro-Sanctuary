// /assets/bazi-language-pack/zh-CN.js
window.I18N = window.I18N || {};

window.I18N['zh-CN'] = {
  brand:{ subtitle:'5xLiving · 八字简评' },
  nav:{ langLabel:'语言' },
  lang:{ 'zh-CN':'简体中文','zh-TW':'繁體中文','en':'English','ja':'日本語','th':'ไทย','ms':'Bahasa Melayu' },

  app:{ title:'八字命理 · 快速排盘' },

  form:{
    nameLabel:'姓名（可选）',
    namePlaceholder:'你的称呼（用于个性化）',
    genderLabel:'性别',
    gender:{ hidden:'不透露', male:'男性', female:'女性' },
    calendarLabel:'历法',
    calendar:{ gregorian:'阳历', lunar:'农历' },
    birthdateLabel:'出生日期',
    birthtimeLabel:'出生时间',
    timeUnknown:'出生时间不详'
  },

  btn:{ generate:'生成八字', loading:'计算中…' },

  result:{ title:'您的生辰八字命盘' },

  pillar:{ year:'年柱', month:'月柱', day:'日柱', hour:'时柱' },

  table:{ row:{ stem:'天干', branch:'地支', fiveElem:'五行', nayin:'纳音' } },

  energy:{ title:'五行能量分析' },

  elem:{ wood:'木', fire:'火', earth:'土', metal:'金', water:'水', month:'月', fiveElements:'五行' },

  pro:{
    title:'🧙‍♂️ 心怜管家 · 专业命理分析',
    welcome:'你好！我已为你生成详细分析，有任何具体问题随时问我。'
  },

  chat:{ send:'发送', placeholder:'请输入你的问题…', toggle:'问' },

  vip:{
    title:'🌙 会员专区',
    group:{ astrology:'🗝 命理空间', spiritual:'🌙 心怜空间' },
    astrology:{
      match:'姻缘方向：恋爱与婚姻节奏',
      career:'事业方向：职场发展与创业潜力',
      wealth:'财运方向：财位与时机',
      pet:'宠物命理：伙伴性格与缘分'
    },
    spiritual:{
      record:'灵性记录：照片、梦境、音频、愿望',
      courses:'课程：八字 / 塔罗 / 占星 / 灵数',
      family:'家族纪念：追思与延续',
      practice:'每周能量练习 / 仪式任务'
    },
    login:{ title:'💎 登录 VIP 功能' },
    services:{ header:'会员服务' },
    upgrade:'💎 升级为 VIP（月费）',
    back:'← 返回命理商城',
    priceNote:'$9.9 / 月（命理空间 + 心怜空间 + 全部课程）'
  },

  auth:{
    header:'账户登录 / 注册',
    login:'登录',
    reset:'🔑 重设密码',
    register:'注册账户',
    freeTrialNote:'注册即赠一次免费体验',
    emailPlaceholder:'邮箱 Email',
    passwordPlaceholder:'密码（至少8位，含大小写与符号）'
  },

  footer:{ copy:'© 5XLiving • Astro Sanctuary' },

  err:{
    fillBirthdate:'请填写出生日期',
    invalidDate:'无效日期格式，请使用 YYYY-MM-DD',
    generateFail:'生成失败，请稍后重试'
  },

  ui:{
    unknown:'未知',
    timeUnknown:'时间不详',
    hourSuffix:'{hh}:{mm}',
    birthSummary:'出生：{y}-{m}-{d} {timeText}',
    balance:'五行中{strongest}最强，{weakest}最弱。'
  },

  badge:{ noHour:'未纳入时柱' },

  chatDyn:{ autoReply:'收到：{q}。要点会出现在对应报告章节。' },

  elemNames:{ 木:'木', 火:'火', 土:'土', 金:'金', 水:'水' },

  report:{
    hourUnknownTip:'⚠️ 提示：因出生时间不详，部分分析仅供参考。',
    tipTitle:'提示',
    generating:'正在生成专业分析报告…',
    failed:'报告生成失败，请稍后重试。'
  },

  reportTitles:{
    overview:'📊 命盘总览',
    fiveElements:'🌿 五行分析',
    tenGods:'⚡ 十神配置',
    useful:'🔑 喜用神',
    relationship:'💕 感情婚姻',
    career:'💼 事业发展',
    wealth:'💰 财运分析',
    health:'🌡️ 健康养生',
    nearTerm:'🔮 近期运势',
    actions:'📝 行动清单'
  },

  reportLabels:{
    dayMaster:'日主命理',
    strength:'日主强弱',
    usefulSpirit:'喜用神',
    elementCount:'五行个数',
    elementStrength:'五行旺衰',
    supportElements:'帮扶五行',
    restrainElements:'克泄五行',
    missingElements:'所缺五行',
    traits:'感情特质',
    marriageAdvice:'婚姻建议',
    relationshipTips:'相处之道',
    suitableCareers:'适合行业',
    careerAdvice:'发展建议',
    favorableDirections:'有利方位',
    wealthCharacteristics:'财运特点',
    wealthDirections:'求财方向',
    financialAdvice:'理财建议',
    healthCharacteristics:'体质特点',
    healthTips:'注意事项',
    wellnessAdvice:'养生建议',
    overallFortune:'整体运势',
    favorableTiming:'有利时机',
    cautions:'注意事项',
    tenGods:'十神配置'
  },

  wellness:{ default:'规律作息、适度运动、情绪稳定、少熬夜。' },
  cautions:{ default:'避免情绪化决策，控制支出。' },

  action:{
    weekly:'每周至少一次',
    energy:'元素「补能」行动（环境 / 食物 / 颜色 / 方位）。',
    career:'职业：依据定位与目标，细化下月行动清单（学习 / 项目 / 人脉）。',
    career2:'可细化为课程、作品集、人脉拓展。',
    relationship:'感情：本周安排一次高质量沟通（30分钟），聚焦彼此需求。',
    wealth:'财富：设立「风险阈值」，偏财机会严格止盈。'
  },

  sameQi:'同气',
  complement:'补缺',
  layout:'布局',

  fortune:{
    steady:'平稳调整期',
    upward:'势头向上，利推广 / 表达',
    focus:'收敛聚焦，利制度与执行',
    study:'学习调研期，先蓄后发',
    foundation:'打基础、稳节奏为主'
  },

  wealth:{
    stable:'以稳定收入为主，适合累积式理财',
    opportunity:'偏财机会多，注意节制风险',
    steady:'财运平稳，重在技能与口碑带动收入'
  },

  'report.dayMaster.jia':'甲木命：积极进取，具开拓精神，精力旺盛。',
  'report.dayMaster.yi':'乙木命：性格柔顺，乐于行善，富同情心。',
  'report.dayMaster.bing':'丙火命：热情豪爽，自信好胜，善于表达。',
  'report.dayMaster.ding':'丁火命：敦厚朴实，重信守义。',
  'report.dayMaster.wu':'戊土命：主动积极，容易投入热忱。',
  'report.dayMaster.ji':'己土命：和缓谨慎，心灵手巧。',
  'report.dayMaster.geng':'庚金命：果断干练，勇于决断。',
  'report.dayMaster.xin':'辛金命：沉着坦直，处事认真。',
  'report.dayMaster.ren':'壬水命：心胸宽广，机敏灵活，喜自由厌束缚。',
  'report.dayMaster.gui':'癸水命：有韧性也固执，是努力家。',

  'report.marriage.stable':'婚姻较为稳定，适合建立长期关系。',
  'report.marriage.experienced':'感情经历可能较多，需要找到真正适合的伴侣。',
  'report.marriage.default':'婚姻需要双方共同用心经营。',

  'report.career.leadership':'适合管理岗位或自主创业，具领导潜力。',
  'report.career.business':'适合商业 / 金融领域，财运表现佳。',
  'report.career.creative':'适合创意 / 艺术 / 技术类工作。',
  'report.career.steady':'稳扎稳打，在专业领域深耕发展。',

  'report.health.tips.jia':'定期检查肝功能，保护视力。',
  'report.health.tips.yi':'注意情绪调节，避免眼部疲劳。',
  'report.health.tips.bing':'控制情绪，避免熬夜。',
  'report.health.tips.ding':'保证充足睡眠，避免过度紧张。',
  'report.health.tips.wu':'规律饮食，避免暴饮暴食。',
  'report.health.tips.ji':'注意饮食卫生，避免潮湿环境。',
  'report.health.tips.geng':'注意保暖，避免干燥环境。',
  'report.health.tips.xin':'保持空气流通，避免烟尘。',
  'report.health.tips.ren':'保持水分平衡，注意肾脏保养。',
  'report.health.tips.gui':'适量饮水，避免过度劳累。'
};
