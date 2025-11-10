<script>
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
</script>

<script>
/* EN pack: registers render() + answer() */
(function(){
  const $ = (id)=>document.getElementById(id);
  const t = (k)=> (window.I18N && window.I18N.en && (k.split('.').reduce((o,kk)=>o&&o[kk], window.I18N.en))) 
                  || (window.I18N && window.I18N['zh-CN'] && (k.split('.').reduce((o,kk)=>o&&o[kk], window.I18N['zh-CN']))) 
                  || k;

  function setText(id, val){ const el=$(id); if(el) el.textContent=val; }
  function show(el){ if(el) el.style.display=''; }
  function setBars(map){
    const keys = ['木','火','土','金','水'];
    keys.forEach(k=>{
      const p = Math.max(0, Math.min(100, Number(map[k]||0)));
      const bar = document.getElementById('bar-'+k);
      const pct = document.getElementById('pct-'+k);
      if (bar) bar.style.width = p + '%';
      if (pct) pct.textContent = p + '%';
    });
    const entries = keys.map(k=>[k, Number(map[k]||0)]).sort((a,b)=>b[1]-a[1]);
    const strongest = entries[0][0], weakest = entries[entries.length-1][0];
    const box = document.getElementById('bazi-elements-balance');
    if (box) box.textContent = (t('ui.balance')||'Strongest {strongest}, weakest {weakest}.')
      .replace('{strongest}', strongest).replace('{weakest}', weakest);
  }

  async function render(payload){
    // Minimal demo: reuse the same deterministic bars as CN for consistency
    const { birthdate, birthtime, timeUnknown } = payload||{};
    const res = document.getElementById('result'); if (res) res.style.display='';
    const wrap = document.getElementById('bazi-pillars');
    if (wrap) {
      wrap.innerHTML = `
        <div class="pillar"><div class="tit">${t('pillar.year')}</div><div class="gz" id="gz-year">--</div></div>
        <div class="pillar"><div class="tit">${t('pillar.month')}</div><div class="gz" id="gz-month">--</div></div>
        <div class="pillar"><div class="tit">${t('pillar.day')}</div><div class="gz" id="gz-day">--</div></div>
        <div class="pillar"><div class="tit">${t('pillar.hour')}</div><div class="gz" id="gz-hour">${timeUnknown?(t('badge.noHour')||'Hour pillar omitted'):'--'}</div></div>
      `;
    }
    const seed = (birthdate + (birthtime||'00:00')).replace(/\D/g,'');
    const nums=[0,0,0,0,0]; for(let i=0;i<seed.length;i++) nums[i%5]+=Number(seed[i]||0);
    const sum = nums.reduce((a,b)=>a+b,0)||1;
    const pct = nums.map(n=> Math.round(n*100/sum));
    let drift = 100 - pct.reduce((a,b)=>a+b,0); while(drift!==0){ pct[drift>0?0:4]+= drift>0?1:-1; drift = 100 - pct.reduce((a,b)=>a+b,0); }
    setBars({ '木':pct[0], '火':pct[1], '土':pct[2], '金':pct[3], '水':pct[4] });

    const bd = document.getElementById('bazi-date');
    if (bd) {
      const timeText = timeUnknown ? (t('ui.timeUnknown')||'Time unknown')
        : (t('ui.hourSuffix')||'{hh}:{mm}')
            .replace('{hh}', String((birthtime||'00:00').split(':')[0]||'00'))
            .replace('{mm}', String((birthtime||'00:00').split(':')[1]||'00'));
      bd.textContent = (t('ui.birthSummary')||'Born: {y}-{m}-{d} {timeText}')
        .replace('{y}', birthdate.slice(0,4))
        .replace('{m}', birthdate.slice(5,7))
        .replace('{d}', birthdate.slice(8,10))
        .replace('{timeText}', timeText);
    }

    const pro = document.getElementById('butlerProfessional'); if (pro) pro.style.display='block';
    const rpt = document.getElementById('professionalReport');
    if (rpt) {
      rpt.innerHTML = `
        <div class="butler-section">
          <h4>${t('reportTitles.overview')||'Overview'}</h4>
          <div class="muted">${t('report.generating')||'Generating professional analysis...'}</div>
          ${timeUnknown ? `<div class="badge-warn">${t('report.hourUnknownTip')||''}</div>` : ``}
        </div>
      `;
    }
  }

  function answer(q){
    return ( (window.I18N && window.I18N.en && window.I18N.en.chatDyn && window.I18N.en.chatDyn.autoReply) 
            || 'Got it: {q}. Check the report sections later.' ).replace('{q}', q||'');
  }

  window.registerBaziPack('en', { render, answer });
})();
</script>

