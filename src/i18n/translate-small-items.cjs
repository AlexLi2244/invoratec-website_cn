const fs = require('fs');
const path = require('path');

// Small items translations
const translations = {
  ja: {
    about: { products: { web: { title: "Web AI" } } },
    features: { web_ai: { title: "Web AI" } },
    footer: {
      product: { web_ai: "Web AI（クラウド）" },
      legal: { cookies: "Cookie" }
    },
    nav: { blog: "ブログ", download: "ダウンロード" },
    blog: { hero: { title: "ブログ" }, categories: { tutorial: "チュートリアル" }, tags: { innovation: "イノベーション", bestPractices: "ベストプラクティス", cloud: "クラウド", guide: "ガイド", coordination: "調整", collaboration: "コラボレーション" } },
    serviceSupport: {
      docs: { items: { faq: { title: "FAQ＆トラブルシューティング", description: "よくある質問と解決策" } }, cta: "ドキュメントを閲覧" },
      cta: { title: "開始にお困りですか？" },
      tiers: { items: { standard: { title: "スタンダード" } } }
    },
    serviceBIM: { process: { steps: { plan: { title: "計画" } } } },
    downloadPage: { requirements: { internet: "インターネット接続" } },
    product: { features: { bim: { dashboard: { title: "ダッシュボード" } } } },
    docs: {
      navigation: "ドキュメンテーション",
      sections: { installation: { title: "インストール" }, configuration: { title: "設定" } }
    }
  },
  ko: {
    about: { products: { web: { title: "Web AI" } } },
    features: { web_ai: { title: "Web AI" } },
    footer: {
      product: { web_ai: "Web AI(클라우드)" },
      legal: { cookies: "쿠키" }
    },
    nav: { blog: "블로그", download: "다운로드" },
    blog: { hero: { title: "블로그" }, categories: { tutorial: "튜토리얼" }, tags: { innovation: "혁신", bestPractices: "모범 사례", cloud: "클라우드", guide: "가이드", coordination: "조정", collaboration: "협업" } },
    serviceSupport: {
      docs: { items: { faq: { title: "FAQ 및 문제 해결", description: "일반적인 질문과 해결책" } }, cta: "문서 찾아보기" },
      cta: { title: "시작하는 데 도움이 필요하신가요?" },
      tiers: { items: { standard: { title: "스탠다드" } } }
    },
    serviceBIM: { process: { steps: { plan: { title: "계획" } } } },
    downloadPage: { requirements: { internet: "인터넷 연결" } },
    product: { features: { bim: { dashboard: { title: "대시보드" } } } },
    docs: {
      navigation: "문서",
      sections: { installation: { title: "설치" }, configuration: { title: "구성" } }
    }
  },
  de: {
    about: { products: { web: { title: "Web AI" } }, values: { items: { innovation: { title: "Innovation" } } } },
    features: { web_ai: { title: "Web AI" } },
    footer: {
      product: { web_ai: "Web AI (Cloud)" },
      legal: { cookies: "Cookies" }
    },
    nav: { blog: "Blog", download: "Download" },
    blog: { hero: { title: "Blog" }, categories: { tutorial: "Tutorial" }, tags: { innovation: "Innovation", bestPractices: "Best Practices", cloud: "Cloud", guide: "Leitfaden", coordination: "Koordination", collaboration: "Zusammenarbeit" } },
    serviceSupport: {
      docs: { items: { faq: { title: "FAQ & Fehlerbehebung", description: "Häufige Fragen und Lösungen" } }, cta: "Dokumentation durchsuchen" },
      cta: { title: "Brauchen Sie Hilfe beim Einstieg?" },
      tiers: { items: { standard: { title: "Standard" } } }
    },
    serviceBIM: { process: { steps: { plan: { title: "Planung" } } } },
    downloadPage: { requirements: { internet: "Internetverbindung" } },
    product: { features: { bim: { dashboard: { title: "Dashboard" } } } },
    docs: {
      navigation: "Dokumentation",
      sections: { installation: { title: "Installation" }, configuration: { title: "Konfiguration" } }
    },
    activityDetail: { sections: { agenda: "Agenda", highlights: "Highlights", format: "Format", formatOnline: "Online" } }
  },
  fr: {
    about: { products: { web: { title: "Web AI" } }, values: { items: { innovation: { title: "Innovation" }, collaboration: { title: "Collaboration" }, impact: { title: "Impact" } } } },
    features: { web_ai: { title: "Web AI" } },
    footer: {
      product: { web_ai: "Web AI (Cloud)" },
      resources: { docs: "Documentation" },
      company_links: { contact: "Contact" },
      legal: { cookies: "Cookies" }
    },
    nav: { blog: "Blog", download: "Télécharger" },
    blog: { hero: { title: "Blog" }, categories: { tutorial: "Tutoriel" }, tags: { innovation: "Innovation", bestPractices: "Bonnes Pratiques", cloud: "Cloud", guide: "Guide", coordination: "Coordination", collaboration: "Collaboration" } },
    blogDetail: { conclusion: "Conclusion" },
    caseStudyDetail: { projectInfo: { client: "Client" } },
    cases: { solutionTitle: "Solution", industries: { commercial: "Commercial", infrastructure: "Infrastructure" }, tags: { commercial: "Commercial", coordination: "Coordination", infrastructure: "Infrastructure" } },
    serviceSupport: {
      docs: { items: { faq: { title: "FAQ & Dépannage", description: "Questions courantes et solutions" } }, cta: "Parcourir la documentation" },
      cta: { title: "Besoin d'aide pour démarrer ?" },
      tiers: { items: { standard: { title: "Standard" } } }
    },
    serviceBIM: { services: { items: { coordination: { title: "Coordination" } } }, process: { steps: { plan: { title: "Planification" } } } },
    downloadPage: { requirements: { internet: "Connexion Internet" } },
    product: { features: { bim: { dashboard: { title: "Tableau de bord" } } } },
    docs: {
      navigation: "Documentation",
      sections: { installation: { title: "Installation" }, configuration: { title: "Configuration" }, "web-coordination": { title: "Coordination" } },
      content: { api: { description: "Description" }, webTasks: { propDate: "Date" } }
    },
    activityDetail: { sections: { agenda: "Agenda", date: "Date", format: "Format" } },
    activityRegistration: { success: { date: "Date" } }
  },
  es: {
    about: { products: { web: { title: "Web AI" } } },
    features: { web_ai: { title: "Web AI" } },
    footer: {
      product: { web_ai: "Web AI (Nube)" },
      legal: { cookies: "Cookies" }
    },
    nav: { blog: "Blog", download: "Descargar" },
    blog: { hero: { title: "Blog" }, categories: { tutorial: "Tutorial" }, tags: { innovation: "Innovación", bestPractices: "Mejores Prácticas", cloud: "Nube", guide: "Guía", coordination: "Coordinación", collaboration: "Colaboración" } },
    serviceSupport: {
      docs: { items: { faq: { title: "FAQ y Solución de Problemas", description: "Preguntas comunes y soluciones" } }, cta: "Explorar Documentación" },
      cta: { title: "¿Necesita ayuda para comenzar?" },
      tiers: { items: { standard: { title: "Estándar" } } }
    },
    serviceBIM: { process: { steps: { plan: { title: "Planificación" } } } },
    downloadPage: { requirements: { internet: "Conexión a Internet" } },
    product: { features: { bim: { dashboard: { title: "Panel de Control" } } } },
    docs: {
      navigation: "Documentación",
      sections: { installation: { title: "Instalación" }, configuration: { title: "Configuración" } },
      content: { api: { endpoint: "Punto final" } }
    },
    activityDetail: { sections: { agenda: "Agenda" } }
  },
  pt: {
    about: { products: { web: { title: "Web AI" } } },
    features: { web_ai: { title: "Web AI" } },
    footer: {
      product: { web_ai: "Web AI (Nuvem)", download: "Download" },
      legal: { cookies: "Cookies" }
    },
    nav: { blog: "Blog", download: "Download" },
    blog: { hero: { title: "Blog" }, categories: { tutorial: "Tutorial" }, tags: { innovation: "Inovação", bestPractices: "Melhores Práticas", cloud: "Nuvem", guide: "Guia", coordination: "Coordenação", collaboration: "Colaboração" } },
    serviceSupport: {
      docs: { items: { faq: { title: "FAQ e Solução de Problemas", description: "Perguntas comuns e soluções" } }, cta: "Explorar Documentação" },
      cta: { title: "Precisa de ajuda para começar?" },
      tiers: { items: { standard: { title: "Padrão" } } }
    },
    serviceBIM: { process: { steps: { plan: { title: "Planejamento" } } } },
    downloadPage: { requirements: { internet: "Conexão com a Internet" } },
    product: { features: { bim: { dashboard: { title: "Painel" } } } },
    docs: {
      navigation: "Documentação",
      sections: { installation: { title: "Instalação" }, configuration: { title: "Configuração" } },
      content: { api: { endpoint: "Endpoint" } }
    },
    activityDetail: { sections: { agenda: "Agenda", formatOnline: "Online" } }
  },
  ru: {
    about: { products: { web: { title: "Web AI" } } },
    features: { web_ai: { title: "Web AI" } },
    footer: {
      product: { web_ai: "Web AI (Облако)" },
      legal: { cookies: "Cookies" }
    },
    nav: { blog: "Блог", download: "Скачать" },
    blog: { hero: { title: "Блог" }, categories: { tutorial: "Туториал" }, tags: { innovation: "Инновации", bestPractices: "Лучшие практики", cloud: "Облако", guide: "Руководство", coordination: "Координация", collaboration: "Сотрудничество" } },
    serviceSupport: {
      docs: { items: { faq: { title: "FAQ и Устранение неполадок", description: "Распространённые вопросы и решения" } }, cta: "Просмотреть документацию" },
      cta: { title: "Нужна помощь для начала работы?" },
      tiers: { items: { standard: { title: "Стандарт" } } }
    },
    serviceBIM: { process: { steps: { plan: { title: "Планирование" } } } },
    downloadPage: { requirements: { internet: "Подключение к интернету" } },
    product: { features: { bim: { dashboard: { title: "Панель управления" } } } },
    docs: {
      navigation: "Документация",
      sections: { installation: { title: "Установка" }, configuration: { title: "Настройка" } }
    }
  },
  ar: {
    about: { products: { web: { title: "Web AI" } } },
    features: { web_ai: { title: "Web AI" } },
    footer: {
      product: { web_ai: "Web AI (السحابة)" },
      legal: { cookies: "ملفات تعريف الارتباط" }
    },
    nav: { blog: "المدونة", download: "تحميل" },
    blog: { hero: { title: "المدونة" }, categories: { tutorial: "دروس" }, tags: { innovation: "ابتكار", bestPractices: "أفضل الممارسات", cloud: "السحابة", guide: "دليل", coordination: "التنسيق", collaboration: "التعاون" } },
    serviceSupport: {
      docs: { items: { faq: { title: "الأسئلة الشائعة واستكشاف الأخطاء", description: "الأسئلة الشائعة والحلول" } }, cta: "تصفح الوثائق" },
      cta: { title: "هل تحتاج مساعدة للبدء؟" },
      tiers: { items: { standard: { title: "قياسي" } } }
    },
    serviceBIM: { process: { steps: { plan: { title: "التخطيط" } } } },
    downloadPage: { requirements: { internet: "اتصال بالإنترنت" } },
    product: { features: { bim: { dashboard: { title: "لوحة التحكم" } } } },
    docs: {
      navigation: "التوثيق",
      sections: { installation: { title: "التثبيت" }, configuration: { title: "التكوين" } }
    }
  }
};

// Deep merge function
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Apply translations
const languages = ['ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('Applying small items translations...\n');

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Deep merge translations
    deepMerge(data, translations[lang]);

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`${lang.toUpperCase()}: Applied small items translations`);
  } catch (error) {
    console.error(`${lang.toUpperCase()}: Error - ${error.message}`);
  }
});

console.log('\nSmall items translations complete!');
