

// /assets/bazi/language-pack/en.js
window.I18N = window.I18N || {};

window.I18N['en'] = {
  brand:{ subtitle:'5xLiving · Bazi Brief' },
  nav:{ langLabel:'Language' },
  lang:{ 'zh-CN':'Simplified Chinese','zh-TW':'Traditional Chinese','en':'English','ja':'Japanese','th':'Thai','ms':'Bahasa Melayu' },

  app:{ title:'Bazi · Quick Chart' },

  ensure('en', {
  reportLabels: {
    symbolise: 'Symbolism',
    analysis: 'Actionable Advice',
  }
});

ensure('en', {
  action:{
    weekly:'Weekly',
    energy:'Energy practice',
    career:'Career strategy: steady progress & focused output',
    career2:'Consistent output & review (plan → do → review → improve)',
    relationship:'Relationship: honest talk, boundaries, timely response',
    wealth:'Wealth: budgeting, cashflow, skill monetization, risk control'
  }
});

  form:{
    nameLabel:'Name (optional)',
    namePlaceholder:'Your name (for personalization)',
    genderLabel:'Gender',
    gender:{ hidden:'Prefer not to say', male:'Male', female:'Female' },
    calendarLabel:'Calendar',
    calendar:{ gregorian:'Gregorian', lunar:'Lunar' },
    birthdateLabel:'Birth date',
    birthtimeLabel:'Birth time',
    timeUnknown:'Time unknown'
  },

  btn:{ generate:'Generate Bazi', loading:'Calculating...' },

  result:{ title:'Your Bazi Chart' },

  pillar:{ year:'Year Pillar', month:'Month Pillar', day:'Day Pillar', hour:'Hour Pillar' },

  table:{ row:{ stem:'Heavenly Stem', branch:'Earthly Branch', fiveElem:'Five Elements', nayin:'Na Yin' } },

  energy:{ title:'Five-Element Energy Analysis' },

  elem:{ wood:'Wood', fire:'Fire', earth:'Earth', metal:'Metal', water:'Water', month:'Month', fiveElements:'Five Elements' },

  pro:{
    title:'🧙‍♂️ Xinlian Butler · Professional Destiny Analysis',
    welcome:'Hi! I’m your professional consultant. A detailed report has been generated—ask me anything specific.'
  },

  chat:{ send:'Send', placeholder:'Type your question...', toggle:'Ask' },

  vip:{
    title:'🌙 VIP Segment',
    group:{ astrology:'🗝 Mingli Space · Exclusive', spiritual:'🌙 Xinlian Space · Exclusive' },
    astrology:{
      match:'Relationships: love affinity & marriage trend',
      career:'Career: development & entrepreneurship potential',
      wealth:'Wealth: wealth spot analysis & timing',
      pet:'Pet destiny: companion’s temperament & affinity'
    },
    spiritual:{
      record:'Spiritual records: photos, dreams, voice, prayers',
      courses:'Courses: Bazi / Tarot / Astrology / Numerology',
      family:'Family Memorial: remembrance & legacy',
      practice:'Weekly energy practice / deity-ritual tasks'
    },
    login:{ title:'💎 Sign in to VIP' },
    services:{ header:'Member Services' },
    upgrade:'💎 Upgrade to VIP (monthly)',
    back:'← Back to Store',
    priceNote:'$9.9 / month (Mingli + Xinlian + Spiritual courses)'
  },

  auth:{
    header:'Account Login / Register',
    login:'Log in',
    reset:'🔑 Reset Password',
    register:'Create Account',
    freeTrialNote:'Sign up to get one free trial',
    emailPlaceholder:'Email',
    passwordPlaceholder:'Password (≥8 chars incl. cases, numbers, symbols)'
  },

  footer:{ copy:'© 5XLiving • Astro Sanctuary' },

  err:{
    fillBirthdate:'Please enter your birth date',
    invalidDate:'Invalid date format. Use YYYY-MM-DD',
    generateFail:'Generation failed. Please try again later'
  },

  ui:{
    unknown:'Unknown',
    timeUnknown:'Time unknown',
    hourSuffix:'{hh}:{mm}',
    birthSummary:'Birth date: {y}-{m}-{d} {timeText}',
    balance:'Among the Five Elements, {strongest} is strongest; {weakest} is weakest.'
  },

  badge:{ noHour:'Hour pillar omitted' },

  chatDyn:{ autoReply:'Got it: {q}. Key points will appear in the corresponding report section.' },

  elemNames:{ 木:'Wood', 火:'Fire', 土:'Earth', 金:'Metal', 水:'Water' },

  report:{
    hourUnknownTip:'⚠️ Note: Birth time unknown—some parts are reference-only.',
    tipTitle:'Note',
    generating:'Generating professional analysis...',
    failed:'Report generation failed. Please try again later.'
  },

  reportTitles:{
    overview:'📊 Overview',
    fiveElements:'🌿 Five-Element Analysis',
    tenGods:'⚡ Ten Gods',
    useful:'🔑 Useful Spirit',
    relationship:'💕 Relationships & Marriage',
    career:'💼 Career Development',
    wealth:'💰 Wealth Analysis',
    health:'🌡️ Health & Wellness',
    nearTerm:'🔮 Near-Term Fortune',
    actions:'📝 Action Checklist'
  },

  tenGodsNames: {
  biJian: "Friend (Bi-Jian)",
  jieCai: "Rob Wealth (Jie-Cai)",
  shiShen: "Eating God (Shi-Shen)",
  shangGuan: "Hurting Officer (Shang-Guan)",
  zhengCai: "Direct Wealth",
  pianCai: "Indirect Wealth",
  zhengGuan: "Direct Officer",
  qiSha: "Seven Killings",
  zhengYin: "Direct Resource",
  pianYin: "Indirect Resource"
},

  tenGodsHints: {
  biJian: "Peer / Ally; same element as Day Master, same polarity.",
  jieCai: "Rival / Competitor; same element, opposite polarity.",
  shiShen: "Creative output, enjoyment, softer expression.",
  shangGuan: "Sharp output, critique, breakthroughs.",
  zhengCai: "Earned income, budgeting, pragmatism.",
  pianCai: "Windfall, sales, opportunity-driven wealth.",
  zhengGuan: "Rules, responsibility, reputation.",
  qiSha: "Drive, pressure, risk, decisive action.",
  zhengYin: "Learning, credentials, support.",
  pianYin: "Intuition, alternative knowledge, adaptability."
},

  reportLabels:{
    dayMaster:'Day Master',
    strength:'Day Master Strength',
    usefulSpirit:'Useful Spirit',
    elementCount:'Element Counts',
    elementStrength:'Element Strengths',
    supportElements:'Supporting Elements',
    restrainElements:'Draining/Controlling Elements',
    missingElements:'Missing Elements',
    traits:'Relationship Traits',
    marriageAdvice:'Marriage Advice',
    relationshipTips:'How to Get Along',
    suitableCareers:'Suitable Industries',
    careerAdvice:'Career Advice',
    favorableDirections:'Favorable Directions',
    wealthCharacteristics:'Wealth Traits',
    wealthDirections:'Wealth Directions',
    financialAdvice:'Financial Advice',
    healthCharacteristics:'Constitution Traits',
    healthTips:'Cautions',
    wellnessAdvice:'Wellness Advice',
    overallFortune:'Overall Fortune',
    favorableTiming:'Favorable Timing',
    cautions:'Cautions',
    tenGods:'Ten Gods'
  },

  wellness:{ default:'Regular routine, moderate exercise, emotional stability, less late nights' },
  cautions:{ default:'Avoid emotional decisions; control spending' },

  action:{
    weekly:'At least once weekly',
    energy:'“Re-charging” via elements (environment, food, colors, directions).',
    career:'Career: refine next-month actions by your positioning (learning/projects/network).',
    career2:'(Detail into courses, portfolio, networking.)',
    relationship:'Relationship: schedule one 30-min quality talk this week; focus on needs.',
    wealth:'Wealth: set a risk threshold; take profit strictly on speculative gains.'
  },

  sameQi:'Same Qi',
  complement:'Complement',
  layout:'Layout',

  fortune:{
    steady:'Stabilization phase',
    upward:'Uptrend; good for promotion/expression',
    focus:'Converge & focus; good for systems and execution',
    study:'Research/learning phase; store before launch',
    foundation:'Lay foundations; keep steady rhythm'
  },

  wealth:{
    stable:'Prioritize stable income; suited to accumulative investing',
    opportunity:'More windfall chances—tame the risk',
    steady:'Stable wealth; grow income via skills & reputation'
  },

  'report.dayMaster.jia':'Jia Wood: pioneering, energetic, proactive.',
  'report.dayMaster.yi':'Yi Wood: gentle, benevolent, compassionate.',
  'report.dayMaster.bing':'Bing Fire: passionate, confident, expressive.',
  'report.dayMaster.ding':'Ding Fire: sincere, steady, trustworthy.',
  'report.dayMaster.wu':'Wu Earth: proactive; easily devoted to chosen work.',
  'report.dayMaster.ji':'Ji Earth: mild, cautious, skillful.',
  'report.dayMaster.geng':'Geng Metal: enterprising, brave, decisive.',
  'report.dayMaster.xin':'Xin Metal: calm, upright, meticulous.',
  'report.dayMaster.ren':'Ren Water: broad-minded, agile, loves freedom, dislikes restraint.',
  'report.dayMaster.gui':'Gui Water: headstrong yet diligent; persevering.',

  'report.marriage.stable':'Marriage is relatively stable—good for long-term bonds.',
  'report.marriage.experienced':'May have more experiences; focus on a truly suitable partner.',
  'report.marriage.default':'Marriage thrives on joint effort from both sides.',

  'report.career.leadership':'Fits management or entrepreneurship; leadership potential.',
  'report.career.business':'Good for business/finance; solid wealth potential.',
  'report.career.creative':'Suited to creative, art, or tech roles.',
  'report.career.steady':'Steady growth by deepening expertise.',

  'report.health.tips.jia':'Check liver regularly; protect eyesight.',
  'report.health.tips.yi':'Regulate emotions; avoid eye fatigue.',
  'report.health.tips.bing':'Manage emotions; avoid staying up late.',
  'report.health.tips.ding':'Sleep well; avoid excessive tension.',
  'report.health.tips.wu':'Regular meals; avoid binging.',
  'report.health.tips.ji':'Mind food hygiene; avoid dampness.',
  'report.health.tips.geng':'Keep warm; avoid overly dry air.',
  'report.health.tips.xin':'Airy rooms; avoid smoke/dust.',
  'report.health.tips.ren':'Stay hydrated; mind kidney health.',
  'report.health.tips.gui':'Drink adequately; avoid overwork.'
};

export {};
