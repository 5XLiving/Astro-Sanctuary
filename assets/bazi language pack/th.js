<script>
  elemNames:{ 木:'ไม้', 火:'ไฟ', 土:'ดิน', 金:'โลหะ', 水:'น้ำ' },

  report:{
    hourUnknownTip:'⚠️ หมายเหตุ: ไม่ทราบเวลาเกิด บางส่วนเป็นข้อมูลอ้างอิง',
    tipTitle:'หมายเหตุ',
    generating:'กำลังสร้างรายงานเชิงลึก...',
    failed:'สร้างรายงานล้มเหลว โปรดลองใหม่'
  },

  reportTitles:{
    overview:'📊 ภาพรวม',
    fiveElements:'🌿 วิเคราะห์ธาตุ',
    tenGods:'⚡ สิบเทพ (Ten Gods)',
    useful:'🔑 用神 (Useful Spirit)',
    relationship:'💕 ความรัก & การสมรส',
    career:'💼 การงาน',
    wealth:'💰 การเงิน/โชคลาภ',
    health:'🌡️ สุขภาพ & การดูแล',
    nearTerm:'🔮 ดวงระยะใกล้',
    actions:'📝 เช็กลิสต์การลงมือทำ'
  },

  reportLabels:{
    dayMaster:'วันหลัก (Day Master)',
    strength:'ความแข็งแรงของวันหลัก',
    usefulSpirit:'用神 (Useful Spirit)',
    elementCount:'จำนวนธาตุ',
    elementStrength:'ความเด่นของธาตุ',
    supportElements:'ธาตุที่ช่วยเสริม',
    restrainElements:'ธาตุที่ถ่ายเทพลัง/คุม',
    missingElements:'ธาตุที่ขาด',
    traits:'ลักษณะความรัก',
    marriageAdvice:'คำแนะนำการแต่งงาน',
    relationshipTips:'แนวทางอยู่ร่วมกัน',
    suitableCareers:'สายงานที่เหมาะ',
    careerAdvice:'คำแนะนำอาชีพ',
    favorableDirections:'ทิศที่เป็นมงคล',
    wealthCharacteristics:'ลักษณะโชคลาภ',
    wealthDirections:'ทิศทางการหาเงิน',
    financialAdvice:'คำแนะนำการเงิน',
    healthCharacteristics:'ลักษณะร่างกาย/ธาตุ',
    healthTips:'ข้อควรระวัง',
    wellnessAdvice:'คำแนะนำการดูแล',
    overallFortune:'ภาพรวมดวง',
    favorableTiming:'จังหวะที่ดี',
    cautions:'ข้อควรระวัง',
    tenGods:'สิบเทพ (Ten Gods)'
  },

  wellness:{ default:'นอนหลับเป็นเวลา ออกกำลังกายพอเหมาะ อารมณ์มั่นคง ลดการนอนดึก' },
  cautions:{ default:'หลีกเลี่ยงการตัดสินใจตามอารมณ์ ควบคุมค่าใช้จ่าย' },

  action:{
    weekly:'อย่างน้อยสัปดาห์ละ 1 ครั้ง',
    energy:'การ “เติมพลัง” ตามธาตุ (สภาพแวดล้อม อาหาร สี ทิศทาง)',
    career:'งาน: แตกแผนการทำงานเดือนหน้า (เรียน/โปรเจ็กต์/คอนเนกชัน)',
    career2:'(แปลงเป็นคอร์ส ผลงาน เครือข่าย)',
    relationship:'ความรัก: นัดคุยคุณภาพ 30 นาทีสัปดาห์นี้ โฟกัสความต้องการกันและกัน',
    wealth:'การเงิน: กำหนดกรอบความเสี่ยง เก็งกำไรต้องล็อกกำไรอย่างเข้มงวด'
  },

  sameQi:'พลังเดียวกัน',
  complement:'เสริมช่องว่าง',
  layout:'การจัดวาง',

  fortune:{
    steady:'ช่วงปรับตัวให้เสถียร',
    upward:'แนวโน้มขาขึ้น เหมาะกับการโปรโมต/สื่อสาร',
    focus:'โฟกัสและบังคับใช้ระบบ',
    study:'ช่วงศึกษา/วิจัย เก็บแรงก่อนปล่อยของ',
    foundation:'วางรากฐาน รักษาจังหวะให้คงที่'
  },

  wealth:{
    stable:'เน้นรายได้มั่นคง เหมาะกับการสะสมระยะยาว',
    opportunity:'โอกาสลาภลอยมากขึ้น แต่ต้องคุมความเสี่ยง',
    steady:'การเงินนิ่ง ใช้ทักษะและชื่อเสียงผลักดันรายได้'
  },

  'report.dayMaster.jia':'甲木命: กล้าเริ่มต้น ชอบบุกเบิก มีพลังล้นเหลือ',
  'report.dayMaster.yi':'乙木命: อ่อนโยน เมตตา รักการช่วยเหลือ',
  'report.dayMaster.bing':'丙火命: ร้อนแรง มั่นใจ ชอบแสดงออก',
  'report.dayMaster.ding':'丁火命: สุภาพจริงใจ เชื่อถือได้',
  'report.dayMaster.wu':'戊土命: กระตือรือร้น ทุ่มเทกับสิ่งที่ทำ',
  'report.dayMaster.ji':'己土命: สุขุม รอบคอบ มือเป็นไม้เป็น',
  'report.dayMaster.geng':'庚金命: มุ่งมั่น กล้าหาญ ตัดสินใจเด็ดขาด',
  'report.dayMaster.xin':'辛金命: สุขุม ซื่อตรง ใส่ใจรายละเอียด',
  'report.dayMaster.ren':'壬水命: ใจกว้าง คล่องแคล่ว รักเสรี เกลียดข้อจำกัด',
  'report.dayMaster.gui':'癸水命: มุ่งมั่นดื้อรั้น แต่ขยันอดทน',

  'report.marriage.stable':'แนวโน้มชีวิตคู่ค่อนข้างมั่นคง เหมาะสร้างความสัมพันธ์ระยะยาว',
  'report.marriage.experienced':'อาจมีประสบการณ์ความรักมาก ควรเลือกคู่ที่ “ใช่” จริง ๆ',
  'report.marriage.default':'ชีวิตคู่ต้องร่วมกันดูแลและพัฒนา',

  'report.career.leadership':'เหมาะบทบาทผู้นำ/ผู้ประกอบการ มีภาวะผู้นำ',
  'report.career.business':'เหมาะสายธุรกิจ/การเงิน โอกาสการเงินดี',
  'report.career.creative':'เหมาะงานสร้างสรรค์ ศิลปะ เทคโนโลยี',
  'report.career.steady':'เติบโตแบบมั่นคงด้วยความเชี่ยวชาญ',

  'report.health.tips.jia':'ตรวจตับสม่ำเสมอ ดูแลสายตา',
  'report.health.tips.yi':'จัดอารมณ์ให้ดี เลี่ยงล้าตา',
  'report.health.tips.bing':'ควบคุมอารมณ์ เลี่ยงการนอนดึก',
  'report.health.tips.ding':'นอนพอ ลดความตึงเครียด',
  'report.health.tips.wu':'กินเป็นเวลา เลี่ยงกินมากเกิน',
  'report.health.tips.ji':'ระวังสุขอนามัยอาหาร เลี่ยงความชื้น',
  'report.health.tips.geng':'รักษาความอบอุ่น เลี่ยงอากาศแห้ง',
  'report.health.tips.xin':'อากาศถ่ายเทดี เลี่ยงควันและฝุ่น',
  'report.health.tips.ren':'รักษาสมดุลน้ำ ดูแลไต',
  'report.health.tips.gui':'ดื่มน้ำพอเพียง เลี่ยงงานหักโหม'
};
</script>
<script>
// th.js — Bazi language pack (Thai)
// Registers: registerBaziPack('th', { render(payload), answer(q) })
(function () {
  const $ = (id) => document.getElementById(id);

  // i18n helper with fallback to zh-CN
  function t(key) {
    const deepGet = (o, p) => String(p).split('.').reduce((a, k) => (a && a[k] != null ? a[k] : undefined), o);
    const th = (window.I18N && window.I18N.th) || {};
    const cn = (window.I18N && window.I18N['zh-CN']) || {};
    let v = deepGet(th, key);
    if (v != null) return v;
    if (key.startsWith('report.')) {
      const k2 = key.slice(7);
      v = deepGet(th, k2);
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
      box.textContent = (t('ui.balance') || 'เด่นสุด {strongest}, อ่อนสุด {weakest}')
        .replace('{strongest}', strongest)
        .replace('{weakest}', weakest);
  }

  function renderBirthLine(birthdate, birthtime, timeUnknown) {
    const timeText = timeUnknown
      ? t('ui.timeUnknown') || 'ไม่ทราบเวลาเกิด'
      : (t('ui.hourSuffix') || '{hh}:{mm}')
          .replace('{hh}', String((birthtime || '00:00').split(':')[0] || '00'))
          .replace('{mm}', String((birthtime || '00:00').split(':')[1] || '00'));
    const line = (t('ui.birthSummary') || 'เกิด: {y}-{m}-{d} {timeText}')
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
        <div class="pillar"><div class="tit">${t('pillar.hour')}</div><div class="gz" id="gz-hour">${timeUnknown ? (t('badge.noHour') || 'ไม่มีเสาหลักเวลา') : '--'}</div></div>
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

    // Table placeholders (dashes until API integration)
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
          <h4>${t('reportTitles.overview') || 'ภาพรวม'}</h4>
          <div class="muted">${t('report.generating') || 'กำลังสร้างรายงานเชิงลึก…'}</div>
          ${timeUnknown ? `<div class="badge-warn">${t('report.hourUnknownTip') || ''}</div>` : ``}
        </div>
      `;
    }
  }

  function answer(q) {
    const tmpl =
      (window.I18N &&
        window.I18N.th &&
        window.I18N.th.chatDyn &&
        window.I18N.th.chatDyn.autoReply) ||
      'ได้รับคำถาม: {q} เดี๋ยวฉันจะสรุปคำตอบไว้ในหมวดรายงานให้ภายหลัง';
    return tmpl.replace('{q}', q || '');
  }

  window.registerBaziPack('th', { render, answer });
})();
</script>  
