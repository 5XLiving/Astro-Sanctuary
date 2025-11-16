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

  btn:{ generate:'Generate Bazi', loading:'Calculating…' },

  result:{ title:'Your Bazi Chart' },

  pillar:{ year:'Year', month:'Month', day:'Day', hour:'Hour' },

  table:{ row:{ stem:'Heavenly Stem', branch:'Earthly Branch', fiveElem:'Five Elements', nayin:'Na Yin' } },

  energy:{ title:'Five-Element Energy Analysis' },

  elem:{ wood:'Wood', fire:'Fire', earth:'Earth', metal:'Metal', water:'Water', month:'Month', fiveElements:'Five Elements' },

  pro:{
    title:'🧙‍♂️ Xinlian Butler · Professional Analysis',
    welcome:'Hi! I’ve prepared a detailed analysis. Ask me anything specific anytime.'
  },

  chat:{ send:'Send', placeholder:'Type your question…', toggle:'Ask' },

  vip:{
    title:'🌙 VIP Zone',
    group:{ astrology:'🗝 Astro Space', spiritual:'🌙 Soul Space' },
    astrology:{
      match:'Relationships: love & marriage rhythm',
      career:'Career: development & entrepreneurship potential',
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
    priceNote:'$9.9 / month (Astro Space + Soul Space + all courses)'
  },

  auth:{
    header:'Account Login / Register',
    login:'Log in',
    reset:'🔑 Reset Password',
    register:'Create Account',
    freeTrialNote:'Sign up to receive one free trial',
    emailPlaceholder:'Email',
    passwordPlaceholder:'Password (8+ chars, with upper/lowercase & symbols)'
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
    birthSummary:'Birth: {y}-{m}-{d} {timeText}',
    balance:'Among the five elements, {strongest} is strongest and {weakest} is weakest.'
  },

  badge:{ noHour:'Hour pillar not included' },

  chatDyn:{ autoReply:'Got it: {q}. Key points will appear in the corresponding report sections.' },

  /* Use Chinese ideograms as keys because your engine outputs stems/branches in zh.
     Values are English labels for display. */
  elemNames:{ '木':'Wood', '火':'Fire', '土':'Earth', '金':'Metal', '水':'Water' },

  report:{
    hourUnknownTip:'⚠️ Note: Birth hour unknown — some parts are reference only.',
    tipTitle:'Note',
    generating:'Generating professional analysis…',
    failed:'Report generation failed. Please try again later.'
  },

  reportTitles:{
    overview:'📊 Overview',
    fiveElements:'🌿 Five Elements',
    tenGods:'⚡ Ten Gods',
    useful:'🔑 Useful Spirits',
    relationship:'💕 Relationships & Marriage',
    career:'💼 Career Development',
    wealth:'💰 Wealth Analysis',
    health:'🌡️ Health & Wellness',
    nearTerm:'🔮 Near-term Fortune',
    actions:'📝 Action List'
  },

  reportLabels:{
    dayMaster:'Day Master',
    strength:'Day Master Strength',
    usefulSpirit:'Useful Spirit',
    elementCount:'Element Count',
    elementStrength:'Element Strength',
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

  wellness:{ default:'Regular routine, moderate exercise, emotional stability, less late nights.' },
  cautions:{ default:'Avoid emotional decisions; control spending.' },

  action:{
    weekly:'At least once per week',
    energy:'Element “recharge” actions (space / food / color / direction).',
    career:'Career: based on positioning & goals, detail next month’s actions (learning / projects / networking).',
    career2:'Can be broken down into courses, portfolio, and outreach.',
    relationship:'Relationships: schedule one quality talk this week (30 min) focused on both sides’ needs.',
    wealth:'Wealth: set a risk threshold; take strict profit on windfalls.'
  },

  sameQi:'Same Qi',
  complement:'Complement',
  layout:'Layout',

  fortune:{
    steady:'Stabilizing phase',
    upward:'Momentum rising — good for promotion/expression',
    focus:'Narrow focus — good for systems & execution',
    study:'Study/research first — store energy, then act',
    foundation:'Lay foundations and keep a steady tempo'
  },

  wealth:{
    stable:'Prioritize stable income; suitable for accumulative investing',
    opportunity:'More windfall opportunities — restrain risk',
    steady:'Steady wealth; income driven by skills & reputation'
  },

  // inside reportLabels:
  symbolise:'Symbolism',
  analysis:'Actionable Advice',

  'report.dayMaster.jia':'Jia Wood: proactive, pioneering, energetic.',
  'report.dayMaster.yi':'Yi Wood: gentle, charitable, empathetic.',
  'report.dayMaster.bing':'Bing Fire: passionate, confident, expressive.',
  'report.dayMaster.ding':'Ding Fire: steady, faithful, conscientious.',
  'report.dayMaster.wu':'Wu Earth: proactive and easily devoted to work.',
  'report.dayMaster.ji':'Ji Earth: calm and cautious; skillful with hands.',
  'report.dayMaster.geng':'Geng Metal: decisive, bold, action-oriented.',
  'report.dayMaster.xin':'Xin Metal: composed, sincere, serious.',
  'report.dayMaster.ren':'Ren Water: broad-minded, quick, values freedom.',
  'report.dayMaster.gui':'Gui Water: resilient and persistent.',

  'report.marriage.stable':'Marriage tends to be stable; suitable for long-term bonds.',
  'report.marriage.experienced':'Possibly more relationship experiences; find a truly suitable partner.',
  'report.marriage.default':'Marriage needs joint, consistent effort from both parties.',

  'report.career.leadership':'Suited for management or entrepreneurship; leadership potential.',
  'report.career.business':'Suited for business/finance; strong wealth performance.',
  'report.career.creative':'Suited for creative/artistic/technical roles.',
  'report.career.steady':'Progress steadily; cultivate depth in your specialty.',

  'report.health.tips.jia':'Regular liver checks; protect eyesight.',
  'report.health.tips.yi':'Regulate emotions; avoid eye strain.',
  'report.health.tips.bing':'Control emotions; avoid staying up late.',
  'report.health.tips.ding':'Ensure enough sleep; avoid excessive tension.',
  'report.health.tips.wu':'Regular diet; avoid overeating.',
  'report.health.tips.ji':'Mind food hygiene; avoid damp environments.',
  'report.health.tips.geng':'Keep warm; avoid overly dry environments.',
  'report.health.tips.xin':'Keep air flowing; avoid smoke and dust.',
  'report.health.tips.ren':'Maintain hydration; support kidney health.',
  'report.health.tips.gui':'Drink appropriately; avoid overwork.'
};
