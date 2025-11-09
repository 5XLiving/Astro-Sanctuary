<script>
// ms.js — Bazi language pack (Bahasa Melayu)
// Registers: registerBaziPack('ms', { render(payload), answer(q) })
(function () {
  const $ = (id) => document.getElementById(id);

  // i18n helper with fallback to zh-CN
  function t(key) {
    const deepGet = (o, p) => String(p).split('.').reduce((a, k) => (a && a[k] != null ? a[k] : undefined), o);
    const ms = (window.I18N && window.I18N.ms) || {};
    const cn = (window.I18N && window.I18N['zh-CN']) || {};
    let v = deepGet(ms, key);
    if (v != null) return v;
    if (key.startsWith('report.')) {
      const k2 = key.slice(7);
      v = deepGet(ms, k2);
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
      box.textContent = (t('ui.balance') || 'Terkuat {strongest}, terlemah {weakest}.')
        .replace('{strongest}', strongest)
        .replace('{weakest}', weakest);
  }

  function renderBirthLine(birthdate, birthtime, timeUnknown) {
    const timeText = timeUnknown
      ? t('ui.timeUnknown') || 'Masa tidak pasti'
      : (t('ui.hourSuffix') || '{hh}:{mm}')
          .replace('{hh}', String((birthtime || '00:00').split(':')[0] || '00'))
          .replace('{mm}', String((birthtime || '00:00').split(':')[1] || '00'));
    const line = (t('ui.birthSummary') || 'Lahir: {y}-{m}-{d} {timeText}')
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
        <div class="pillar"><div class="tit">${t('pillar.hour')}</div><div class="gz" id="gz-hour">${timeUnknown ? (t('badge.noHour') || 'Tiang jam tidak digunakan') : '--'}</div></div>
      `;
    }

    renderBirthLine(birthdate, birthtime, timeUnknown);

    // Deterministic demo bars (replace with real API values when wired)
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

    // Table placeholders (until API integration)
    setText('year-stem', '—'); setText('month-stem', '—'); setText('day-stem', '—'); setText('hour-stem', timeUnknown ? '—' : '—');
    setText('year-branch', '—'); setText('month-branch', '—'); setText('day-branch', '—'); setText('hour-branch', timeUnknown ? '—' : '—');
    setText('year-element', '—'); setText('month-element', '—'); setText('day-element', '—'); setText('hour-element', timeUnknown ? '—' : '—');
    setText('year-nayin', '—'); setText('month-nayin', '—'); setText('day-nayin', '—'); setText('hour-nayin', timeUnknown ? '—' : '—');

    // Butler section
    const pro = document.getElementById('butlerProfessional');
    if (pro) pro.style.display = 'block';
    const rpt = document.getElementById('professionalReport');
    if (rpt) {
      rpt.innerHTML = `
        <div class="butler-section">
          <h4>${t('reportTitles.overview') || 'Gambaran Umum'}</h4>
          <div class="muted">${t('report.generating') || 'Menjana laporan terperinci…'}</div>
          ${timeUnknown ? `<div class="badge-warn">${t('report.hourUnknownTip') || ''}</div>` : ``}
        </div>
      `;
    }
  }

  function answer(q) {
    const tmpl =
      (window.I18N &&
        window.I18N.ms &&
        window.I18N.ms.chatDyn &&
        window.I18N.ms.chatDyn.autoReply) ||
      'Soalan diterima: {q}. Saya akan ringkaskan jawapannya dalam bahagian laporan berkaitan.';
    return tmpl.replace('{q}', q || '');
  }

  window.registerBaziPack('ms', { render, answer });
})();
</script>  
