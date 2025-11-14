// /assets/bazi/language-pack/ja.js
window.I18N = window.I18N || {};

window.I18N['ja'] = {
  brand:{ subtitle:'5xLiving · 四柱推命クイック' },
  nav:{ langLabel:'言語' },
  lang:{ 'zh-CN':'簡体中国語','zh-TW':'繁体中国語','en':'英語','ja':'日本語','th':'タイ語','ms':'マレー語' },

  app:{ title:'四柱推命（八字）· クイック排盤' },

  ensure('ja', {
  reportLabels: {
    symbolise: '象徴的な意味',
    analysis: '実践アドバイス',
  }
});

  form:{
    nameLabel:'名前（任意）',
    namePlaceholder:'お名前（個別表示のため）',
    genderLabel:'性別',
    gender:{ hidden:'未公開', male:'男性', female:'女性' },
    calendarLabel:'暦法',
    calendar:{ gregorian:'グレゴリオ暦', lunar:'旧暦' },
    birthdateLabel:'生年月日',
    birthtimeLabel:'出生時刻',
    timeUnknown:'時刻不明'
  },

  btn:{ generate:'命式を生成', loading:'計算中...' },

  result:{ title:'あなたの命式（八字）' },

  pillar:{ year:'年柱', month:'月柱', day:'日柱', hour:'時柱' },

  table:{ row:{ stem:'天干', branch:'地支', fiveElem:'五行', nayin:'納音' } },

  energy:{ title:'五行エネルギー分析' },

  elem:{ wood:'木', fire:'火', earth:'土', metal:'金', water:'水', month:'月', fiveElements:'五行' },

  pro:{
    title:'🧙‍♂️ 心怜バトラー · 専門鑑定レポート',
    welcome:'こんにちは。詳細レポートを作成しました。気になる点を遠慮なくどうぞ。'
  },

  chat:{ send:'送信', placeholder:'ご質問を入力してください...', toggle:'質問' },

  vip:{
    title:'🌙 VIP セグメント',
    group:{ astrology:'🗝 命理スペース（限定）', spiritual:'🌙 心怜スペース（限定）' },
    astrology:{
      match:'恋愛・結婚の傾向',
      career:'キャリア：発展/起業のポテンシャル',
      wealth:'財運：財位分析とタイミング',
      pet:'ペット命理：性格と相性'
    },
    spiritual:{
      record:'スピリチュアル記録：写真・夢・音声・祈り',
      courses:'講座：八字 / タロット / 占星 / 数秘',
      family:'家族メモリアル：追悼と継承',
      practice:'週間エナジー練習 / 神仏ワーク'
    },
    login:{ title:'💎 VIP にサインイン' },
    services:{ header:'会員サービス' },
    upgrade:'💎 VIP へアップグレード（月額）',
    back:'← ストアへ戻る',
    priceNote:'月額 $9.9（命理+心怜+講座）'
  },

  auth:{
    header:'ログイン / 新規登録',
    login:'ログイン',
    reset:'🔑 パスワード再設定',
    register:'アカウント作成',
    freeTrialNote:'登録で無料体験を1回進呈',
    emailPlaceholder:'メールアドレス',
    passwordPlaceholder:'パスワード（8文字以上・英数記号混在）'
  },

  footer:{ copy:'© 5XLiving • Astro Sanctuary' },

  err:{
    fillBirthdate:'生年月日を入力してください',
    invalidDate:'日付形式が無効です（YYYY-MM-DD）',
    generateFail:'作成に失敗しました。時間をおいて再度お試しください'
  },

  ui:{
    unknown:'不明',
    timeUnknown:'時刻不明',
    hourSuffix:'{hh}:{mm}',
    birthSummary:'生年月日: {y}年{m}月{d}日 {timeText}',
    balance:'五行では{strongest}が最強、{weakest}が最弱。'
  },

  badge:{ noHour:'時柱を含まず' },

  chatDyn:{ autoReply:'了解：{q}。該当セクションに要点をまとめます。' },

  elemNames:{ 木:'木', 火:'火', 土:'土', 金:'金', 水:'水' },

  report:{
    hourUnknownTip:'⚠️ 注意：出生時刻が不明のため、一部は参考値です。',
    tipTitle:'注意',
    generating:'専門レポートを生成中...',
    failed:'レポート生成に失敗しました。'
  },

  reportTitles:{
    overview:'📊 概要',
    fiveElements:'🌿 五行分析',
    tenGods:'⚡ 十神配置',
    useful:'🔑 用神',
    relationship:'💕 恋愛・結婚',
    career:'💼 キャリア',
    wealth:'💰 財運分析',
    health:'🌡️ 健康・養生',
    nearTerm:'🔮 近未来の運勢',
    actions:'📝 行動チェックリスト'
  },

  reportLabels:{
    dayMaster:'日主',
    strength:'日主の強弱',
    usefulSpirit:'用神',
    elementCount:'五行の数',
    elementStrength:'五行の旺衰',
    supportElements:'助ける五行',
    restrainElements:'剋・泄する五行',
    missingElements:'欠ける五行',
    traits:'恋愛傾向',
    marriageAdvice:'結婚アドバイス',
    relationshipTips:'付き合い方',
    suitableCareers:'適職・業界',
    careerAdvice:'キャリア助言',
    favorableDirections:'吉方位',
    wealthCharacteristics:'財運の特徴',
    wealthDirections:'財の方向性',
    financialAdvice:'マネーアドバイス',
    healthCharacteristics:'体質傾向',
    healthTips:'注意点',
    wellnessAdvice:'養生アドバイス',
    overallFortune:'総合運',
    favorableTiming:'好機',
    cautions:'注意事項',
    tenGods:'十神配置'
  },

  wellness:{ default:'規則正しい生活・適度な運動・感情の安定・夜更かしを控える' },
  cautions:{ default:'感情的な判断を避け、支出をコントロール' },

  action:{
    weekly:'週1回以上',
    energy:'五行の「補気」行動（環境・食・色・方位）。',
    career:'キャリア：目標に沿って来月の行動（学習/案件/人脈）を具体化。',
    career2:'（講座・ポートフォリオ・ネットワークに落とし込む）',
    relationship:'恋愛：今週30分の質の高い対話を1回。互いのニーズに集中。',
    wealth:'資産：リスク閾値を設定し、投機は厳格に利確。'
    sameQi:'同気',
    complement:'補完',
    layout:'レイアウト',
  },    

  fortune:{
    steady:'安定調整期',
    upward:'上向き。発信・プロモーションに吉',
    focus:'収斂と集中。制度化と実行に吉',
    study:'学習・調査期。まず蓄えてから発進',
    foundation:'基礎固め・ペース安定が主'
  },

  wealth:{
    stable:'安定収入を優先。積立型の資産形成が適す',
    opportunity:'偏財の機会が多い。リスク節制を',
    steady:'財運は安定。技能と評判で収入を伸ばす'
  },

  'report.dayMaster.jia':'甲木命：開拓精神に富み、エネルギッシュで前向き。',
  'report.dayMaster.yi':'乙木命：柔和で思いやりがあり、慈愛に満ちる。',
  'report.dayMaster.bing':'丙火命：情熱的で快活、自信家で表現力豊か。',
  'report.dayMaster.ding':'丁火命：温厚誠実、信義を重んじる。',
  'report.dayMaster.wu':'戊土命：主体的で、物事に熱中しやすい。',
  'report.dayMaster.ji':'己土命：穏やかで慎重、器用。',
  'report.dayMaster.geng':'庚金命：進取果敢で決断力がある。',
  'report.dayMaster.xin':'辛金命：沈着で率直、丁寧な応対。',
  'report.dayMaster.ren':'壬水命：度量が広く機敏。自由を好み束縛を嫌う。',
  'report.dayMaster.gui':'癸水命：強情だが粘り強い努力家。',

  'report.marriage.stable':'結婚は比較的安定。長期的な関係に向く。',
  'report.marriage.experienced':'恋愛経験が多くなる傾向。相性重視で選ぶこと。',
  'report.marriage.default':'結婚は双方の努力で育つもの。',

  'report.career.leadership':'管理職や起業に適性。リーダー資質あり。',
  'report.career.business':'商業・金融に適性。財運も良好。',
  'report.career.creative':'クリエイティブ/アート/テックに向く。',
  'report.career.steady':'専門性を深めて着実に成長。',

  'report.health.tips.jia':'肝機能の定期チェック。目のケアを。',
  'report.health.tips.yi':'感情のコントロール。眼精疲労に注意。',
  'report.health.tips.bing':'感情の起伏を整え、夜更かしを避ける。',
  'report.health.tips.ding':'十分な睡眠を。過度な緊張を避ける。',
  'report.health.tips.wu':'規則正しい食事。暴飲暴食を避ける。',
  'report.health.tips.ji':'食の衛生に注意。湿気を避ける。',
  'report.health.tips.geng':'保温を心がけ、乾燥しすぎに注意。',
  'report.health.tips.xin':'換気を良くし、煙や粉塵を避ける。',
  'report.health.tips.ren':'水分バランスを保ち、腎のケアを。',
  'report.health.tips.gui':'十分な水分。過労は避ける。'
};

export {};
