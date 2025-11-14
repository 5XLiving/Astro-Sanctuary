// /assets/bazi-language-pack/en.js
window.I18N = window.I18N || {};

window.I18N['en'] = {
  brand:{ subtitle:'5xLiving · Bazi Brief' },
  nav:{ langLabel:'Language' },
  lang:{ 'zh-CN':'Simplified Chinese','zh-TW':'Traditional Chinese','en':'English','ja':'Japanese','th':'Thai','ms':'Bahasa Melayu' },

  app:{ title:'Bazi · Quick Chart' },

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

  pillar:{ year:'Year', month:'Month', day:'Day', hour:'Hour' },

  table:{ row:{ stem:'Heavenly Stem', branch:'Earthly Branch', fiveElem:'Five Elements', nayin:'Na Yin' } },

  energy:{ title:'Five-Element Energy Analysis' },

  elem:{ wood:'Wood', fire:'Fire', earth:'Earth', metal:'Metal', water:'Water', month:'Month', fiveElements:'Five Elements' },

  pro:{
    title:'🧙‍♂️ Xinlian Butler · Professional Report',
    welcome:'Hi! I’ve prepared a detailed analysis. Ask me anything specific anytime.'
  },

  chat:{ send:'Send', placeholder:'Type your question…', toggle:'Ask' },

  vip:{
    title:'🌙 VIP Segment',
    group:{ astrology:'🗝 Astro Space', spiritual:'🌙 Soul Space' },
    astrology:{
      match:'Relationship: love & marriage timing',
      career:'Career: development & entrepreneurship',
      wealth:'Wealth: wealth spots & timing',
      pet:'Pet destiny: companion’s nature & bond'
    },
    spiritual:{
      record:'Spiritual records: photos, dreams, audio, wishes',
      courses:'Courses: Bazi / Tarot / Astrology / Numerology',
      family:'Family memorial: remembrance & legacy',
      practice:'Weekly energy practice / ritual tasks'
    },
    login:{ title:'💎 Log in to VIP' },
    services:{ header:'Member Services' },
    upgrade:'💎 Upgrade to VIP (monthly)',
    back:'← Back to Astro Shop',
    priceNote:'$9.9 / month (Astro + Soul + Courses)'
  },

  auth:{
    header:'Account Login / Register',
    login:'Log in',
    reset:'🔑 Reset Password',
    register:'Create Account',
    freeTrialNote:'Sign up to receive one free try',
    emailPlaceholder:'Email',
    passwordPlaceholder:'Password (8+ chars, mixed case & symbols)'
  },

  footer:{ copy:'© 5XLiving • Astro Sanctuary' },

  err:{
    fillBirthdate:'Please enter birth date',
    invalidDate:'Invalid date format. Use YYYY-MM-DD',
    generateFail:'Generation failed. Please try again later'
  },

  ui:{
    unknown:'Unknown',
    timeUnknown:'Time unknown',
    hourSuffix:'{hh}:{mm}',
    birthSummary:'Birth: {y}-{m}-{d} {timeText}',
    balance:'Strongest {strongest}, weakest {weakest}.'
  },

  badge:{ noHour:'Hour pillar omitted' },

  chatDyn:{ autoReply:'Got it: {q}. Key points appear in the report sections soon.' },

  elemNames:{ Wood:'Wood', Fire:'Fire', Earth:'Earth', Metal:'Metal', Water:'Water' },

  report:{
    hourUnknownTip:'⚠️ Hour unknown; some parts are reference only.',
    tipTitle:'Note',
    generating:'Generating professional analysis…',
    failed:'Report failed. Please try again later.'
  },

  reportTitles:{
    overview:'📊 Overview',
    fiveElements:'🌿 Five Elements',
    tenGods:'⚡ Ten Gods',
    useful:'🔑 Useful Spirits',
    relationship:'💕 Relationship',
    career:'💼 Career',
    wealth:'💰 Wealth',
    health:'🌡️ Health',
    nearTerm:'🔮 Near-term Fortune',
    actions:'📝 Action List'
  },

  reportLabels:{
    dayMaster:'Day Master',
    strength:'Strength',
    usefulSpirit:'Useful Spirit',
    elementCount:'Element Count',
    elementStrength:'Element Strength',
    supportElements:'Supporting Elements',
    restrainElements:'Restraining Elements',
    missingElements:'Missing Elements',
    traits:'Traits',
    marriageAdvice:'Marriage Advice',
    relationshipTips:'Relationship Tips',
    suitableCareers:'Suitable Careers',
    careerAdvice:'Career Advice',
    favorableDirections:'Favorable Directions',
    wealthCharacteristics:'Wealth Traits',
    wealthDirections:'Wealth Directions',
    financialAdvice:'Financial Advice',
    healthCharacteristics:'Constitution',
    healthTips:'Health Notes',
    wellnessAdvice:'Wellness Advice',
    overallFortune:'Overall Fortune',
    favorableTiming:'Good Timing',
    cautions:'Cautions',
    tenGods:'Ten Gods'
  },

  wellness:{ default:'Regular routine, moderate exercise, steady emotions, avoid staying up late.' },
  cautions:{ default:'Avoid emotional decisions; control spending.' },

  action:{
    weekly:'At least weekly',
    energy:'“Re-charge” with elements (space, food, color, direction).',
    career:'Career: detail next month’s actions (learn/projects/network).',
    career2:'Break down to courses, portfolio, and outreach.',
    relationship:'Plan one quality talk this week (30 min) about needs.',
    wealth:'Set a risk threshold; take strict profit on windfalls.',
    sameQi:'Same Qi',
    complement:'Complement',
    layout:'Layout',
  },

  fortune:{
    steady:'Stabilizing phase',
    upward:'Rising momentum; good for promo/expression',
    focus:'Narrow focus; systems & execution',
    study:'Study/research; store energy first',
    foundation:'Lay foundations; keep tempo steady'
  },

  wealth:{
    stable:'Prioritize stable income; use cumulative investing',
    opportunity:'More windfalls; restrain risk',
    steady:'Steady wealth; income via skills & reputation'
  },

  'report.dayMaster.jia':'Jia Wood: proactive, pioneering, energetic.',
  'report.dayMaster.yi':'Yi Wood: gentle, kind, empathetic.',
  'report.dayMaster.bing':'Bing Fire: passionate, confident, expressive.',
  'report.dayMaster.ding':'Ding Fire: steady, faithful, conscientious.',
  'report.dayMaster.wu':'Wu Earth: engaged, enthusiastic about work.',
  'report.dayMaster.ji':'Ji Earth: careful, skillful with hands.',
  'report.dayMaster.geng':'Geng Metal: decisive, bold, action-oriented.',
  'report.dayMaster.xin':'Xin Metal: calm, sincere, serious.',
  'report.dayMaster.ren':'Ren Water: broad-minded, quick, values freedom.',
  'report.dayMaster.gui':'Gui Water: resilient and persistent.',

  'report.marriage.stable':'Marriage tends to be stable; suited to long-term bonds.',
  'report.marriage.experienced':'More experiences possible; find a truly suitable partner.',
  'report.marriage.default':'Marriage needs joint, consistent care.',

  'report.career.leadership':'Suited for management or entrepreneurship; leadership potential.',
  'report.career.business':'Suited for business/finance; strong wealth performance.',
  'report.career.creative':'Suited for creative/artistic/technical roles.',
  'report.career.steady':'Progress steadily; cultivate a deep specialty.',

  'report.health.tips.jia':'Check liver regularly; protect eyesight.',
  'report.health.tips.yi':'Manage emotions; avoid eye strain.',
  'report.health.tips.bing':'Control emotions; avoid staying up late.',
  'report.health.tips.ding':'Sleep well; avoid excessive tension.',
  'report.health.tips.wu':'Regular diet; avoid overeating.',
  'report.health.tips.ji':'Mind food hygiene; avoid dampness.',
  'report.health.tips.geng':'Keep warm; avoid dryness.',
  'report.health.tips.xin':'Ventilate; avoid smoke/dust.',
  'report.health.tips.ren':'Hydrate; support kidney health.',
  'report.health.tips.gui':'Drink moderately; avoid overwork.'
};
