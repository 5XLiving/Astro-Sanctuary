// /assets/bazi-language-pack/ms.js
window.I18N = window.I18N || {};

window.I18N['ms'] = {
  brand:{ subtitle:'5xLiving · Ringkasan BaZi' },
  nav:{ langLabel:'Bahasa' },
  lang:{ 'zh-CN':'简体中文','zh-TW':'繁體中文','en':'English','ja':'日本語','th':'ไทย','ms':'Bahasa Melayu' },

  app:{ title:'BaZi · Carta Pantas' },

  form:{
    nameLabel:'Nama (pilihan)',
    namePlaceholder:'Nama anda (untuk pemperibadian)',
    genderLabel:'Jantina',
    gender:{ hidden:'Tidak mahu nyatakan', male:'Lelaki', female:'Perempuan' },
    calendarLabel:'Kalendar',
    calendar:{ gregorian:'Gregorian', lunar:'Lunar' },
    birthdateLabel:'Tarikh lahir',
    birthtimeLabel:'Masa lahir',
    timeUnknown:'Masa lahir tidak diketahui'
  },

  btn:{ generate:'Jana BaZi', loading:'Mengira…' },

  result:{ title:'Carta BaZi Anda' },

  pillar:{ year:'Tiang Tahun', month:'Tiang Bulan', day:'Tiang Hari', hour:'Tiang Jam' },

  table:{ row:{ stem:'Batang Langit (Heavenly Stem)', branch:'Cawangan Bumi (Earthly Branch)', fiveElem:'Lima Unsur', nayin:'Na Yin' } },

  energy:{ title:'Analisis Tenaga Lima Unsur' },

  elem:{ wood:'Kayu', fire:'Api', earth:'Tanah', metal:'Logam', water:'Air', month:'Bulan', fiveElements:'Lima Unsur' },

  pro:{
    title:'🧙‍♂️ Xinlian Butler · Laporan Profesional',
    welcome:'Hai! Saya sudah sediakan analisis terperinci. Tanyakan apa jua soalan khusus bila-bila masa.'
  },

  chat:{ send:'Hantar', placeholder:'Tulis soalan anda…', toggle:'Tanya' },

  vip:{
    title:'🌙 Segmen Ahli',
    group:{ astrology:'🗝 Ruang Astro', spiritual:'🌙 Ruang Jiwa' },
    astrology:{
      match:'Perhubungan: ritma cinta & perkahwinan',
      career:'Kerjaya: perkembangan & keusahawanan',
      wealth:'Kekayaan: lokasi rezeki & masa yang baik',
      pet:'Nasib haiwan peliharaan: sifat & ikatan'
    },
    spiritual:{
      record:'Rekod rohani: foto, mimpi, audio, doa',
      courses:'Kursus: BaZi / Tarot / Astrologi / Numerologi',
      family:'Peringatan keluarga: kenangan & legasi',
      practice:'Latihan tenaga mingguan / tugasan ritual'
    },
    login:{ title:'💎 Log masuk VIP' },
    services:{ header:'Perkhidmatan Ahli' },
    upgrade:'💎 Naik taraf ke VIP (bulanan)',
    back:'← Kembali ke Kedai Astro',
    priceNote:'$9.9 / bulan (Astro + Jiwa + Semua kursus)'
  },

  auth:{
    header:'Log Masuk / Daftar',
    login:'Log Masuk',
    reset:'🔑 Tetap Semula Kata Laluan',
    register:'Daftar Akaun',
    freeTrialNote:'Daftar untuk mendapat satu percubaan percuma',
    emailPlaceholder:'Emel',
    passwordPlaceholder:'Kata laluan (8+ aksara, huruf besar/kecil & simbol)'
  },

  footer:{ copy:'© 5XLiving • Astro Sanctuary' },

  err:{
    fillBirthdate:'Sila masukkan tarikh lahir',
    invalidDate:'Format tarikh tidak sah. Guna YYYY-MM-DD',
    generateFail:'Gagal menjana. Cuba lagi nanti'
  },

  ui:{
    unknown:'Tidak diketahui',
    timeUnknown:'Masa tidak diketahui',
    hourSuffix:'{hh}:{mm}',
    birthSummary:'Lahir: {y}-{m}-{d} {timeText}',
    balance:'Paling kuat {strongest}, paling lemah {weakest}.'
  },

  badge:{ noHour:'Tiang jam tidak dimasukkan' },

  chatDyn:{ autoReply:'Diterima: {q}. Poin utama akan muncul di bahagian laporan berkaitan.' },

  // Gunakan kunci aksara Cina untuk serasi dengan output pengira
  elemNames:{ '木':'Kayu', '火':'Api', '土':'Tanah', '金':'Logam', '水':'Air' },

  report:{
    hourUnknownTip:'⚠️ Nota: Masa lahir tidak pasti; sebahagian hasil untuk rujukan.',
    tipTitle:'Nota',
    generating:'Menjana laporan profesional…',
    failed:'Laporan gagal. Cuba lagi kemudian.'
  },

  reportTitles:{
    overview:'📊 Gambaran Keseluruhan',
    fiveElements:'🌿 Lima Unsur',
    tenGods:'⚡ Sepuluh Dewa (Ten Gods)',
    useful:'🔑 Unsur Berguna',
    relationship:'💕 Perhubungan & Perkahwinan',
    career:'💼 Kerjaya',
    wealth:'💰 Kekayaan',
    health:'🌡️ Kesihatan',
    nearTerm:'🔮 Tuah Jangka Dekat',
    actions:'📝 Senarai Tindakan'
  },

  reportLabels:{
    dayMaster:'Tuan Hari (Day Master)',
    strength:'Kekuatan Tuan Hari',
    usefulSpirit:'Unsur Berguna',
    elementCount:'Kiraan Unsur',
    elementStrength:'Keadaan Unsur (旺衰)',
    supportElements:'Unsur Sokongan',
    restrainElements:'Unsur Mengalir/Mengawal',
    missingElements:'Unsur Yang Kurang',
    traits:'Sifat Perhubungan',
    marriageAdvice:'Nasihat Perkahwinan',
    relationshipTips:'Cara Bergaul',
    suitableCareers:'Industri/Peranan Sesuai',
    careerAdvice:'Nasihat Kerjaya',
    favorableDirections:'Arah Menguntungkan',
    wealthCharacteristics:'Ciri Kewangan',
    wealthDirections:'Arah Mencari Rezeki',
    financialAdvice:'Nasihat Kewangan',
    healthCharacteristics:'Ciri Tubuh',
    healthTips:'Perkara Berjaga-jaga',
    wellnessAdvice:'Saranan Kesejahteraan',
    overallFortune:'Tuah Keseluruhan',
    favorableTiming:'Masa Yang Sesuai',
    cautions:'Amaran',
    tenGods:'Sepuluh Dewa'
  },

  wellness:{ default:'Jadual teratur, bersenam sederhana, stabilkan emosi, kurang tidur lewat.' },
  cautions:{ default:'Elak keputusan beremosi; kawal perbelanjaan.' },

  action:{
    weekly:'Sekurang-kurangnya mingguan',
    energy:'“Caj semula” ikut unsur (ruang, makanan, warna, arah).',
    career:'Kerjaya: perincikan tindakan bulan depan (belajar/projek/rangkaian).',
    career2:'Pecahkan kepada kursus, portfolio, dan jangkauan.',
    relationship:'Rancang sesi perbualan berkualiti 30 minit tentang keperluan bersama.',
    wealth:'Tetapkan ambang risiko; ambil untung tegas untuk rezeki mengejut.'
  },

  sameQi:'Qi Sama',
  complement:'Melengkapkan Kekurangan',
  layout:'Susun Atur',

  fortune:{
    steady:'Fasa penstabilan',
    upward:'Momentum menaik; baik untuk promosi/ekspresi',
    focus:'Tumpuan dipersempit; sistem & pelaksanaan',
    study:'Belajar/penyelidikan; kumpul tenaga dahulu',
    foundation:'Bina asas; kekalkan tempo stabil'
  },

  wealth:{
    stable:'Utamakan pendapatan stabil; sesuai pelaburan terkumpul',
    opportunity:'Lebih banyak rezeki terpijak; kawal risiko',
    steady:'Kewangan stabil; pendapatan melalui kemahiran & reputasi'
  },

  'report.dayMaster.jia':'Jia Kayu: proaktif, perintis, bertenaga.',
  'report.dayMaster.yi':'Yi Kayu: lembut, suka membantu, empati.',
  'report.dayMaster.bing':'Bing Api: bersemangat, yakin, ekspresif.',
  'report.dayMaster.ding':'Ding Api: tenang, setia, beramanah.',
  'report.dayMaster.wu':'Wu Tanah: komited, mudah menumpu pada kerja.',
  'report.dayMaster.ji':'Ji Tanah: berhati-hati, mahir kerja tangan.',
  'report.dayMaster.geng':'Geng Logam: tegas, berani, pantas bertindak.',
  'report.dayMaster.xin':'Xin Logam: tenang, jujur, serius.',
  'report.dayMaster.ren':'Ren Air: berpandangan luas, lincah, cintakan kebebasan.',
  'report.dayMaster.gui':'Gui Air: tahan lasak dan tekun.',

  'report.marriage.stable':'Perkahwinan cenderung stabil; sesuai hubungan jangka panjang.',
  'report.marriage.experienced':'Pengalaman mungkin lebih banyak; fokus pada pasangan yang benar-benar serasi.',
  'report.marriage.default':'Perlu dipupuk bersama secara konsisten.',

  'report.career.leadership':'Sesuai pengurusan atau keusahawanan; berpotensi kepimpinan.',
  'report.career.business':'Sesuai perniagaan/kewangan; prestasi rezeki baik.',
  'report.career.creative':'Sesuai bidang kreatif/seni/teknikal.',
  'report.career.steady':'Maju beransur-ansur; dalami kepakaran.',

  'report.health.tips.jia':'Periksa hati secara berkala; lindungi penglihatan.',
  'report.health.tips.yi':'Urus emosi; elak ketegangan mata.',
  'report.health.tips.bing':'Kawal emosi; elak tidur lewat.',
  'report.health.tips.ding':'Cukup tidur; kurangkan tekanan berlebihan.',
  'report.health.tips.wu':'Makan berjadual; elak berlebihan.',
  'report.health.tips.ji':'Jaga kebersihan makanan; elak persekitaran lembap.',
  'report.health.tips.geng':'Kekal hangat; elak kekeringan.',
  'report.health.tips.xin':'Pengudaraan baik; elak asap/habuk.',
  'report.health.tips.ren':'Kekalkan hidrasi; jaga kesihatan buah pinggang.',
  'report.health.tips.gui':'Minum secukupnya; elak keterlaluan bekerja.'
};
