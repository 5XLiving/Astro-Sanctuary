(function(){
  function onLangSelect(e){
    const lang = (e.target?.value) || 'zh-CN';
    try { localStorage.setItem('5x_lang', lang); } catch {}

    const LANG_PAGES = {
      'zh-CN': 'bazi.html',
      'en':    'assets/bazi-language-pack/bazi-en.html',
      'zh-TW': 'assets/bazi-language-pack/bazi-zh-TW.html',
      'ja':    'assets/bazi-language-pack/bazi-ja.html',
      'th':    'assets/bazi-language-pack/bazi-th.html',
      'ms':    'assets/bazi-language-pack/bazi-ms.html'
    };

    const target = LANG_PAGES[lang] || LANG_PAGES['zh-CN'];
    const targetUrl = new URL(target, window.location.href);

    const curPath = window.location.pathname.replace(/\/+$/, '');
    const tgtPath = targetUrl.pathname.replace(/\/+$/, '');

    if (curPath !== tgtPath) window.location.href = targetUrl.href;
  }

  // expose for your existing boot() to use
  window.onLangSelect = onLangSelect;
})();
