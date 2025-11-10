<script>
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
  },

  sameQi:'同気',
  complement:'補完',
  layout:'レイアウト',

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
</script>

<script>
// jp.js — Bazi language pack (Japanese)
// Registers: registerBaziPack('ja', { render(payload), answer(q) })
(function () {
  const $ = (id) => document.getElementById(id);

  // i18n helper with fallback to zh-CN
  function t(key) {
    const deepGet = (o, p) => String(p).split('.').reduce((a, k) => (a && a[k] != null ? a[k] : undefined), o);
    const ja = (window.I18N && window.I18N.ja) || {};
    const cn = (window.I18N && window.I18N['zh-CN']) || {};
    let v = deepGet(ja, key);
    if (v != null) return v;
    if (key.startsWith('report.')) {
      const k2 = key.slice(7);
      v = deepGet(ja, k2);
      if (v != null) return v;
      v = deepGet(cn, k2);
      if (v != null) return v;
    }
    v = deepGet(cn, key);
    return v != null ? v : key;
  }

  function setText(id, val) {
    const el = $(id);
    if (el) el.textContent = val;
  }
  function show(el) {
    if (el) el.style.display = '';
  }

  function setBars(percentMap) {
    const keys = ['木', '火', '土', '金', '水'];
    keys.forEach((k) => {
      const p = Math.max(0, Math.min(100, Number(percentMap[k] ?? 0)));
      const bar = document.getElementById('bar-' + k);
      const pct = document.getElementById('pct-' + k);
      if (bar) bar.style.width = p + '%';
      if (pct) pct.textContent = p + '%';
    });
    const entries = keys.map((k) => [k, Number(percentMap[k] || 0)]).sort((a, b) => b[1] - a[1]);
    const strongest = entries[0][0];
    const weakest = entries[entries.length - 1][0];
    const box = document.getElementById('bazi-elements-balance');
    if (box)
      box.textContent = (t('ui.balance') || '最強 {strongest}、最弱 {weakest}。')
        .replace('{strongest}', strongest)
        .replace('{weakest}', weakest);
  }

  function renderBirthLine(birthdate, birthtime, timeUnknown) {
    const timeText = timeUnknown
      ? t('ui.timeUnknown') || '時刻不明'
      : (t('ui.hourSuffix') || '{hh}:{mm}')
          .replace('{hh}', String((birthtime || '00:00').split(':')[0] || '00'))
          .replace('{mm}', String((birthtime || '00:00').split(':')[1] || '00'));
    const line = (t('ui.birthSummary') || '出生：{y}-{m}-{d} {timeText}')
      .replace('{y}', birthdate.slice(0, 4))
      .replace('{m}', birthdate.slice(5, 7))
      .replace('{d}', birthdate.slice(8, 10))
      .replace('{timeText}', timeText);
    const bd = document.getElementById('bazi-date');
    if (bd) bd.textContent = line;
  }

  async function render(payload) {
    const { birthdate, birthtime, timeUnknown } = payload || {};
    const result = document.getElementById('result');
    show(result);

    // Pillars header cards
    const wrap = document.getElementById('bazi-pillars');
    if (wrap) {
      wrap.innerHTML = `
        <div class="pillar"><div class="tit">${t('pillar.year')}</div><div class="gz" id="gz-year">--</div></div>
        <div class="pillar"><div class="tit">${t('pillar.month')}</div><div class="gz" id="gz-month">--</div></div>
        <div class="pillar"><div class="tit">${t('pillar.day')}</div><div class="gz" id="gz-day">--</div></div>
        <div class="pillar"><div class="tit">${t('pillar.hour')}</div><div class="gz" id="gz-hour">${timeUnknown ? (t('badge.noHour') || '時柱なし') : '--'}</div></div>
      `;
    }

    renderBirthLine(birthdate, birthtime, timeUnknown);

    // Deterministic demo bars (until your API fills real values)
    const seed = (birthdate + (birthtime || '00:00')).replace(/\D/g, '');
    const nums = [0, 0, 0, 0, 0];
    for (let i = 0; i < seed.length; i++) nums[i % 5] += Number(seed[i] || 0);
    const sum = nums.reduce((a, b) => a + b, 0) || 1;
    const pct = nums.map((n) => Math.round((n * 100) / sum));
    let drift = 100 - pct.reduce((a, b) => a + b, 0);
    while (drift !== 0) {
      pct[drift > 0 ? 0 : 4] += drift > 0 ? 1 : -1;
      drift = 100 - pct.reduce((a, b) => a + b, 0);
    }
    setBars({ 木: pct[0], 火: pct[1], 土: pct[2], 金: pct[3], 水: pct[4] });

    // Table placeholders (kept as dashes until API integration)
    setText('year-stem', '—'); setText('month-stem', '—'); setText('day-stem', '—'); setText('hour-stem', timeUnknown ? '—' : '—');
    setText('year-branch', '—'); setText('month-branch', '—'); setText('day-branch', '—'); setText('hour-branch', timeUnknown ? '—' : '—');
    setText('year-element', '—'); setText('month-element', '—'); setText('day-element', '—'); setText('hour-element', timeUnknown ? '—' : '—');
    setText('year-nayin', '—'); setText('month-nayin', '—'); setText('day-nayin', '—'); setText('hour-nayin', timeUnknown ? '—' : '—');

    // Butler section (visible; message in Japanese)
    const pro = document.getElementById('butlerProfessional');
    if (pro) pro.style.display = 'block';
    const rpt = document.getElementById('professionalReport');
    if (rpt) {
      rpt.innerHTML = `
        <div class="butler-section">
          <h4>${t('reportTitles.overview') || '総合'}</h4>
          <div class="muted">${t('report.generating') || 'プロ分析レポートを生成中…'}</div>
          ${timeUnknown ? `<div class="badge-warn">${t('report.hourUnknownTip') || ''}</div>` : ``}
        </div>
      `;
    }
  }

  function answer(q) {
    const tmpl =
      (window.I18N &&
        window.I18N.ja &&
        window.I18N.ja.chatDyn &&
        window.I18N.ja.chatDyn.autoReply) ||
      '了解しました：{q}。後ほどレポート各章に要点をまとめます。';
    return tmpl.replace('{q}', q || '');
  }

  window.registerBaziPack('ja', { render, answer });
})();
</scripit>  
