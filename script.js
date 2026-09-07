// ==========================================================================
// Linko Landing Page — Material You Interactive Controller & i18n
// ==========================================================================

const i18nDictionary = {
  en: {
    nav_downloads: "Downloads",
    nav_features: "Features",
    nav_how_it_works: "How It Works",
    nav_faq: "FAQ",
    nav_download_btn: "Download",
    
    hero_h1: "A modern, ultra-fast, and secure<br><span class=\"accent\">cross-platform file sharing solution.</span>",
    hero_subtitle: "Linko allows you to securely share files and messages with nearby devices over your local network without needing an internet connection. Free, open source, and built with Material Design 3.",
    
    mockup_title: "Nearby Devices",
    mockup_status: "Ready to receive",
    mockup_dev1: "Quick Galaxy (Android)",
    mockup_dev1_sub: "192.168.1.104 • Local Wi-Fi",
    mockup_dev2: "Quiet Laptop (Windows)",
    mockup_dev2_sub: "192.168.1.120 • Local Wi-Fi",
    mockup_dev3: "Sending 3 files (142.8 MB)",
    mockup_dev3_sub: "To Quiet Laptop • 48.2 MB/s",
    mockup_ready: "Ready",
    
    stat_foss: "Free & Open Source",
    stat_data: "Internet Data Used",
    stat_speed: "Local Wi-Fi Throughput",
    stat_ads: "Ads or Trackers",
    
    features_tag: "Features",
    features_title: "Designed for simplicity and speed",
    features_subtitle: "Everything you need to share files peer-to-peer across your devices.",
    feat1_title: "Cross-platform",
    feat1_desc: "Seamless file transfer between Android and Windows with smooth protocol interoperability.",
    feat2_title: "End-to-End Secure",
    feat2_desc: "Direct peer-to-peer transmission secured with local TLS certificates. Zero cloud relays.",
    feat3_title: "No Internet Required",
    feat3_desc: "Works completely offline over Wi-Fi or portable hotspot without consuming cellular quota.",
    feat4_title: "Blazingly Fast",
    feat4_desc: "Transfer files at the maximum throughput of your local router with zero compression loss.",
    
    workflow_tag: "Workflow",
    workflow_title: "How it works",
    workflow_subtitle: "No accounts, no registration, no cloud servers.",
    step1_title: "Install & Open",
    step1_desc: "Open Linko on both devices connected to the same Wi-Fi network.",
    step2_title: "Select Files",
    step2_desc: "Choose photos, high-res videos, folders, documents, or APK apps.",
    step3_title: "Tap to Send",
    step3_desc: "Select the nearby device from the radar. Files transfer instantly.",
    
    dl_tag: "Download",
    dl_title: "Get Linko for your platform",
    dl_subtitle: "Official release builds for Windows and Android.",
    dl_tab_win: "Windows",
    dl_tab_and: "Android",
    dl_win_title: "Windows (64-bit)",
    dl_win_desc: "Desktop installer with system tray background support.",
    dl_win_btn: "EXE (Installer)",
    dl_and_title: "Android",
    dl_and_desc: "Direct install packages for Android 5.0 and newer.",
    dl_and_btn1: "APK",
    dl_and_btn2: "APK (ARMv7)",
    dl_and_btn3: "APK (x86_64)",
    dl_and_btn4: "APK (FOSS)",
    
    faq_tag: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Common questions about Linko and local sharing.",
    faq1_q: "Is Linko free and open-source?",
    faq1_a: "Yes, Linko is 100% free and open source under Apache 2.0. There are zero advertisements, trackers, or hidden fees.",
    faq2_q: "Does it use my cellular data?",
    faq2_a: "No. Linko strictly communicates over your local area network (LAN/Wi-Fi or mobile hotspot). Internet bandwidth is never touched.",
    faq3_q: "Is my data transfer secure?",
    faq3_a: "Yes. All transmissions use peer-to-peer TLS encryption certificates directly between the two devices.",
    faq4_q: "Where are received files stored?",
    faq4_a: "By default, files are saved to your system's default Downloads folder. You can configure the destination in Settings.",
    
    footer_desc: "Linko is a modern, ultra-fast, and secure cross-platform file sharing solution.",
    footer_product: "Product",
    footer_platform: "Platform",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_credits: "Built with Google Material Design 3 (Material You)"
  },
  id: {
    nav_downloads: "Unduhan",
    nav_features: "Fitur",
    nav_how_it_works: "Cara Kerja",
    nav_faq: "Tanya Jawab",
    nav_download_btn: "Unduh",
    
    hero_h1: "Solusi berbagi berkas lintas platform<br><span class=\"accent\">yang modern, super cepat, dan aman.</span>",
    hero_subtitle: "Linko memungkinkan Anda berbagi berkas dan pesan secara aman dengan perangkat sekitar melalui jaringan lokal tanpa memerlukan koneksi internet. Gratis, bersumber terbuka, dan dirancang dengan Material Design 3.",
    
    mockup_title: "Perangkat Sekitar",
    mockup_status: "Siap menerima",
    mockup_dev1: "Quick Galaxy (Android)",
    mockup_dev1_sub: "192.168.1.104 • Wi-Fi Lokal",
    mockup_dev2: "Quiet Laptop (Windows)",
    mockup_dev2_sub: "192.168.1.120 • Wi-Fi Lokal",
    mockup_dev3: "Mengirim 3 berkas (142.8 MB)",
    mockup_dev3_sub: "Ke Quiet Laptop • 48.2 MB/s",
    mockup_ready: "Siap",
    
    stat_foss: "Gratis & Sumber Terbuka",
    stat_data: "Kuota Internet Digunakan",
    stat_speed: "Kecepatan Wi-Fi Lokal",
    stat_ads: "Iklan & Pelacak",
    
    features_tag: "Fitur",
    features_title: "Dirancang untuk kemudahan dan kecepatan",
    features_subtitle: "Semua yang Anda butuhkan untuk berbagi berkas peer-to-peer antar perangkat.",
    feat1_title: "Lintas Platform",
    feat1_desc: "Transfer berkas mulus antara Android dan Windows dengan interoperabilitas protokol yang lancar.",
    feat2_title: "Aman Ujung-ke-Ujung",
    feat2_desc: "Transmisi peer-to-peer langsung yang diamankan dengan sertifikat TLS lokal tanpa server perantara.",
    feat3_title: "Tanpa Perlu Internet",
    feat3_desc: "Bekerja sepenuhnya luring lewat Wi-Fi atau hotspot seluler tanpa menghabiskan kuota data.",
    feat4_title: "Sangat Cepat",
    feat4_desc: "Transfer berkas dengan kecepatan maksimal jaringan router lokal Anda tanpa kompresi kualitas.",
    
    workflow_tag: "Alur Kerja",
    workflow_title: "Cara kerja Linko",
    workflow_subtitle: "Tanpa akun, tanpa registrasi, tanpa server cloud.",
    step1_title: "Pasang & Buka",
    step1_desc: "Buka Linko di kedua perangkat yang terhubung ke jaringan Wi-Fi yang sama.",
    step2_title: "Pilih Berkas",
    step2_desc: "Pilih foto, video resolusi tinggi, folder, dokumen, atau aplikasi APK.",
    step3_title: "Ketuk untuk Kirim",
    step3_desc: "Pilih perangkat sekitar dari radar deteksi. Berkas akan terkirim seketika.",
    
    dl_tag: "Unduh",
    dl_title: "Dapatkan Linko untuk perangkat Anda",
    dl_subtitle: "Rilis resmi untuk platform Windows dan Android.",
    dl_tab_win: "Windows",
    dl_tab_and: "Android",
    dl_win_title: "Windows (64-bit)",
    dl_win_desc: "Paket penginstal desktop resmi dengan dukungan baki sistem latar belakang.",
    dl_win_btn: "EXE (Installer)",
    dl_and_title: "Android",
    dl_and_desc: "Paket instalasi APK langsung untuk Android 5.0 atau yang lebih baru.",
    dl_and_btn1: "APK",
    dl_and_btn2: "APK (ARMv7)",
    dl_and_btn3: "APK (x86_64)",
    dl_and_btn4: "APK (FOSS)",
    
    faq_tag: "Tanya Jawab",
    faq_title: "Pertanyaan yang Sering Diajukan",
    faq_subtitle: "Jawaban atas pertanyaan umum seputar Linko dan berbagi berkas lokal.",
    faq1_q: "Apakah Linko gratis dan bersumber terbuka?",
    faq1_a: "Ya, Linko 100% gratis dan bersumber terbuka di bawah lisensi Apache 2.0. Tanpa iklan, pelacak, atau biaya tersembunyi apa pun.",
    faq2_q: "Apakah Linko menggunakan kuota internet saya?",
    faq2_a: "Tidak. Linko hanya berkomunikasi melalui jaringan area lokal (LAN/Wi-Fi atau hotspot seluler). Kuota internet Anda tidak akan tersentuh sama sekali.",
    faq3_q: "Apakah transfer data saya aman?",
    faq3_a: "Ya. Semua transmisi menggunakan enkripsi sertifikat TLS peer-to-peer langsung di antara kedua perangkat.",
    faq4_q: "Di mana berkas yang diterima disimpan?",
    faq4_a: "Secara default, berkas disimpan di folder Unduhan (Downloads) perangkat Anda. Lokasi ini dapat diatur di menu Pengaturan.",
    
    footer_desc: "Linko adalah solusi berbagi berkas lintas platform yang modern, super cepat, dan aman.",
    footer_product: "Produk",
    footer_platform: "Platform",
    footer_legal: "Legal",
    footer_privacy: "Kebijakan Privasi",
    footer_credits: "Dibuat dengan Google Material Design 3 (Material You)"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Material 3 Theme Management (Dark / Light Mode)
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    htmlElement.classList.add('dark');
    updateThemeIcon('dark');
  } else {
    htmlElement.classList.remove('dark');
    updateThemeIcon('light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = htmlElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark ? 'dark' : 'light');
    });
  }

  function updateThemeIcon(mode) {
    if (themeIcon) {
      themeIcon.innerText = mode === 'dark' ? 'light_mode' : 'dark_mode';
    }
  }

  // 2. Smart OS Detection for Segmented Tabs
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isAndroid = /android/i.test(userAgent);

  // 3. Material 3 Segmented Button Tab Switcher
  const segmentBtns = document.querySelectorAll('.m3-segment-btn');
  const tabPanes = document.querySelectorAll('.download-tab-pane');

  segmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPlatform = btn.getAttribute('data-target');

      segmentBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const activePane = document.getElementById(targetPlatform);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });

  // Auto-switch to user's OS tab on load
  if (isAndroid) {
    const androidBtn = document.querySelector('.m3-segment-btn[data-target="tab-android"]');
    if (androidBtn) androidBtn.click();
  }

  // 4. Language Selector & Real-Time i18n Engine
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const currentLangText = document.getElementById('current-lang-text');
  const langItems = document.querySelectorAll('.lang-item');

  function setLanguage(lang) {
    const dict = i18nDictionary[lang] || i18nDictionary.en;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update active dropdown item state
    langItems.forEach(i => {
      if (i.getAttribute('data-lang') === lang) {
        i.classList.add('active');
      } else {
        i.classList.remove('active');
      }
    });

    if (currentLangText) {
      currentLangText.innerText = lang === 'id' ? 'Bahasa Indonesia' : 'English';
    }

    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }

  // Initialize saved language or default to English
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
      langBtn.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('show');
        langBtn.classList.remove('active');
      }
    });

    langItems.forEach(item => {
      item.addEventListener('click', () => {
        const lang = item.getAttribute('data-lang');
        setLanguage(lang);
        langDropdown.classList.remove('show');
        langBtn.classList.remove('active');
      });
    });
  }
});
