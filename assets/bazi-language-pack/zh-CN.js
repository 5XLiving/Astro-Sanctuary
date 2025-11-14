// /assets/bazi/language-pack/zh-CN.js
(function () {
  if (typeof window === 'undefined') return;
  window.I18N = window.I18N || {};

  window.I18N['zh-CN'] = {
    brand:{ subtitle:'5xLiving · 八字简评' },
    nav:{ langLabel:'语言' },
    lang:{ 'zh-CN':'简体中文','zh-TW':'繁體中文','en':'English','ja':'日本語','th':'ไทย','ms':'Bahasa Melayu' },

    app:{ title:'八字命理 · 快速排盘' },
    reportLabels: {
    symbolise: '象征意义',
    analysis: '对策建议',
  }
});

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

    btn:{ generate:'生成八字', loading:'计算中...' },

    result:{ title:'您的生辰八字命盘' },
    pillar:{ year:'年柱', month:'月柱', day:'日柱', hour:'时柱' },

    table:{ row:{ stem:'天干', branch:'地支', fiveElem:'五行', nayin:'纳音' } },
    energy:{ title:'五行能量分析' },

    elem:{ wood:'木', fire:'火', earth:'土', metal:'金', water:'水', month:'月', fiveElements:'五行' },

    pro:{
      title:'🧙‍♂️ 心怜管家 · 专业命理分析',
      welcome:'您好！我是您的专业命理顾问，已为您生成详细分析报告。有什么具体问题可以随时问我。'
    },

    chat:{ send:'发送', placeholder:'请输入您的问题...', toggle:'问' },

    vip:{
      title:'🌙 会员区域 VIP Segment',
      group:{ astrology:'🗝 命理空间专属内容', spiritual:'🌙 心怜空间专属内容' },
      astrology:{
        match:'姻缘方向：恋爱缘分、婚姻走势',
        career:'事业方向：职场发展、创业潜力',
        wealth:'财运方向：财位分析、理财时机',
        pet:'宠物命理：伴侣动物的性格与缘分'
      },
      spiritual:{
        record:'灵性记录：照片、梦境、声音、愿望祈祷',
        courses:'命理课程：八字 / 塔罗 / 占星 / 灵数',
        family:'家族纪念系统：亲人灵性纪念 & 延续',
        practice:'每周能量练习 / 神明仪式任务'
      },
      login:{ title:'💎 登入 VIP 功能' },
      services:{ header:'会员服务' },
      upgrade:'💎 升级为 VIP（月费）',
      back:'← 返回命理商城',
      priceNote:'$9.9 / 月费 VIP（命理空间 + 心怜空间 + 灵性课程）'
    },

    auth:{
      header:'账户登录 / 注册',
      login:'登入账户',
      reset:'🔑 重设密码',
      register:'注册账户',
      freeTrialNote:'注册账号赠送一次免费体验',
      emailPlaceholder:'邮箱 Email',
      passwordPlaceholder:'密码 Password（至少8位，含大小写数字符号）'
    },

    footer:{ copy:'© 5XLiving • Astro Sanctuary' },

    err:{
      fillBirthdate:'请填写出生日期',
      invalidDate:'无效的日期格式，请用 YYYY-MM-DD',
      generateFail:'生成失败，请稍后重试'
    },

    ui:{
      unknown:'未知',
      timeUnknown:'时间不详',
      hourSuffix:'{hh}:{mm}',
      birthSummary:'出生日期: {y}年{m}月{d}日 {timeText}',
      balance:'五行中{strongest}最强，{weakest}最弱。'
    },

    badge:{ noHour:'未纳入时柱' },
    chatDyn:{ autoReply:'收到：{q}。稍后可在专业报告相应章节找到要点。' },

    elemNames:{ 木:'木', 火:'火', 土:'土', 金:'金', 水:'水' },

    report:{
      hourUnknownTip:'⚠️ 提示：因出生时间不详，部分分析仅供参考。',
      tipTitle:'提示',
      generating:'正在生成专业分析报告...',
      failed:'报告生成失败，请稍后重试'
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

    tenGodsNames:{
      biJian:'比肩', jieCai:'劫财', shiShen:'食神', shangGuan:'伤官',
      zhengCai:'正财', pianCai:'偏财', zhengGuan:'正官', qiSha:'七杀',
      zhengYin:'正印', pianYin:'偏印'
    },

    tenGodsHints:{
      biJian:'同类之助与竞争，偏向自力与并肩之人',
      jieCai:'同类分夺资源，宜合作忌争抢',
      shiShen:'输出/创造/享受，利表达与产出',
      shangGuan:'突破/规则外之才，利创新但忌犯上',
      zhengCai:'正业之财，稳健收入、现金流',
      pianCai:'偏门之财，机会/短打，需控风险',
      zhengGuan:'秩序与规则，职位与名誉',
      qiSha:'压力与挑战，执行力强，需制衡',
      zhengYin:'正统资源/学历/长辈助力',
      pianYin:'灵感/偏门资源/学习力，易想多'
    },

    reportLabels:{
      dayMaster:'日主命理',
      strength:'日主强弱',
      usefulSpirit:'喜用神',
      elementCount:'五行个数',
      elementStrength:'五行旺衰',
      supportElements:'帮扶五行',
      restrainElements:'克泄五行',
      missingElements:'五行所缺',
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

    wellness:{ default:'规律作息、适量运动、情绪稳定、少熬夜' },
    cautions:{ default:'避开情绪决策，控制支出' },

    action:{
      weekly:'每周至少一次',
      energy:'元素的“补能”行动（环境、食物、颜色、方向）。',
      career:'职业：依据定位与目标，细化下月行动清单（学习/项目/人脉）。',
      career2:'（可细化为课程、作品集、人脉拓展）',
      relationship:'感情：本周安排一次高质量沟通（30分钟），聚焦彼此需求。',
      wealth:'财富：设立“风险阈值”，偏财机会严格止盈。'
    },

    sameQi:'同气',
    complement:'补缺',
    layout:'布局',

    fortune:{
      steady:'平稳调整期',
      upward:'势头向上，利推广/表达',
      focus:'收敛聚焦，利制度与执行',
      study:'学习调研期，先蓄后发',
      foundation:'打基础、稳节奏为主'
    },

    wealth:{
      stable:'以稳定收入为主，适合积累式理财',
      opportunity:'偏财机会多，注意节制风险',
      steady:'财运平稳，重在技能与口碑带动收入'
    },

    'report.dayMaster.jia':'甲木命：有积极性的开拓精神，精力旺盛',
    'report.dayMaster.yi':'乙木命：性格柔顺，喜行善事，有同情心',
    'report.dayMaster.bing':'丙火命：热情豪爽，自信好胜，善言健谈',
    'report.dayMaster.ding':'丁火命：敦厚朴实，重信守义',
    'report.dayMaster.wu':'戊土命：有积极性，干一行易于对事物热衷',
    'report.dayMaster.ji':'己土命：和缓，谨慎，心灵手巧',
    'report.dayMaster.geng':'庚金命：积极进取，勇敢果决',
    'report.dayMaster.xin':'辛金命：沉着坦直无私，待人接物认真',
    'report.dayMaster.ren':'壬水命：心胸宽广，机智灵敏，喜欢自由，讨厌束缚',
    'report.dayMaster.gui':'癸水命：逞强顽固，是努力家',

    'report.marriage.stable':'婚姻较为稳定，适合建立长期关系',
    'report.marriage.experienced':'感情经历可能较多，需要找到真正适合的伴侣',
    'report.marriage.default':'婚姻需要双方共同努力经营',

    'report.career.leadership':'适合管理岗位或自主创业，有领导潜力',
    'report.career.business':'适合商业、金融领域，财运较好',
    'report.career.creative':'适合创意、艺术、技术类工作',
    'report.career.steady':'稳扎稳打，在专业领域深耕发展',

    'report.health.tips.jia':'定期检查肝功能，保护视力',
    'report.health.tips.yi':'注意情绪调节，避免眼部疲劳',
    'report.health.tips.bing':'控制情绪，避免熬夜',
    'report.health.tips.ding':'保证充足睡眠，避免过度紧张',
    'report.health.tips.wu':'规律饮食，避免暴饮暴食',
    'report.health.tips.ji':'注意饮食卫生，避免潮湿环境',
    'report.health.tips.geng':'注意保暖，避免干燥环境',
    'report.health.tips.xin':'保持空气流通，避免烟尘',
    'report.health.tips.ren':'保持水分平衡，避免受凉，注意肾脏保养',
    'report.health.tips.gui':'适量饮水，避免过度劳累'
  };

  // If you have an ensure() helper, call it OUTSIDE the object:
  if (typeof window.ensure === 'function') {
    window.ensure('zh-CN', {
      reportLabels: { symbolise: '象征意义', analysis: '对策建议' }
    });
  }
})();
