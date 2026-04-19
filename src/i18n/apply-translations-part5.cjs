const fs = require('fs');
const path = require('path');

// Part 5: Final batch - remaining featuresPage and docs translations
const translations = {
  // ============= FEATURE PAGE - MORE PROPERTY TYPES =============
  "featuresPage.propertySystem.types.status.name": {
    ko: "상태", de: "Status", fr: "Statut", es: "Estado",
    pt: "Status", ru: "Статус", ar: "الحالة"
  },
  "featuresPage.propertySystem.types.status.desc": {
    ko: "작업 상태 추적", de: "Aufgabenstatus verfolgen", fr: "Suivre le statut des tâches", es: "Seguir estado de tareas",
    pt: "Acompanhar status de tarefas", ru: "Отслеживание статуса задач", ar: "تتبع حالة المهمة"
  },
  "featuresPage.propertySystem.types.time.name": {
    ko: "시간", de: "Zeit", fr: "Temps", es: "Tiempo",
    pt: "Tempo", ru: "Время", ar: "الوقت"
  },
  "featuresPage.propertySystem.types.time.desc": {
    ko: "시간 추적", de: "Zeiterfassung", fr: "Suivi du temps", es: "Seguimiento del tiempo",
    pt: "Acompanhamento de tempo", ru: "Учёт времени", ar: "تتبع الوقت"
  },
  "featuresPage.propertySystem.types.createdTime.name": {
    ko: "생성 시간", de: "Erstellungszeit", fr: "Heure de création", es: "Hora de creación",
    pt: "Hora de criação", ru: "Время создания", ar: "وقت الإنشاء"
  },
  "featuresPage.propertySystem.types.createdTime.desc": {
    ko: "자동 생성 타임스탬프", de: "Automatischer Erstellungszeitstempel", fr: "Horodatage de création automatique", es: "Marca de tiempo de creación automática",
    pt: "Carimbo de data/hora de criação automático", ru: "Автоматическая метка времени создания", ar: "الطابع الزمني للإنشاء التلقائي"
  },
  "featuresPage.propertySystem.types.updatedTime.name": {
    ko: "수정 시간", de: "Aktualisierungszeit", fr: "Heure de mise à jour", es: "Hora de actualización",
    pt: "Hora de atualização", ru: "Время обновления", ar: "وقت التحديث"
  },
  "featuresPage.propertySystem.types.updatedTime.desc": {
    ko: "자동 수정 타임스탬프", de: "Automatischer Aktualisierungszeitstempel", fr: "Horodatage de mise à jour automatique", es: "Marca de tiempo de actualización automática",
    pt: "Carimbo de data/hora de atualização automático", ru: "Автоматическая метка времени обновления", ar: "الطابع الزمني للتحديث التلقائي"
  },
  "featuresPage.propertySystem.types.createdBy.name": {
    ko: "생성자", de: "Erstellt von", fr: "Créé par", es: "Creado por",
    pt: "Criado por", ru: "Создано", ar: "أنشأه"
  },
  "featuresPage.propertySystem.types.createdBy.desc": {
    ko: "항목을 만든 사용자", de: "Benutzer, der den Eintrag erstellt hat", fr: "Utilisateur qui a créé l'élément", es: "Usuario que creó el elemento",
    pt: "Usuário que criou o item", ru: "Пользователь, создавший запись", ar: "المستخدم الذي أنشأ العنصر"
  },
  "featuresPage.propertySystem.types.updatedBy.name": {
    ko: "수정자", de: "Aktualisiert von", fr: "Mis à jour par", es: "Actualizado por",
    pt: "Atualizado por", ru: "Обновлено", ar: "حدثه"
  },
  "featuresPage.propertySystem.types.updatedBy.desc": {
    ko: "마지막으로 수정한 사용자", de: "Benutzer, der zuletzt aktualisiert hat", fr: "Utilisateur qui a mis à jour en dernier", es: "Usuario que actualizó por última vez",
    pt: "Usuário que atualizou por último", ru: "Пользователь, последним обновивший", ar: "المستخدم الذي حدث آخر مرة"
  },

  // ============= MORE DOCS CONTENT =============
  "docs.content.webViewer.overview": {
    ja: "概要", ko: "개요", de: "Überblick", fr: "Aperçu",
    es: "Descripción general", pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },
  "docs.content.webViewer.navigation": {
    ja: "ナビゲーション", ko: "탐색", de: "Navigation", fr: "Navigation",
    es: "Navegación", pt: "Navegação", ru: "Навигация", ar: "التنقل"
  },
  "docs.content.webViewer.sections": {
    ja: "セクション", ko: "단면", de: "Schnitte", fr: "Sections",
    es: "Secciones", pt: "Seções", ru: "Сечения", ar: "المقاطع"
  },
  "docs.content.webViewer.properties": {
    ja: "プロパティ", ko: "속성", de: "Eigenschaften", fr: "Propriétés",
    es: "Propiedades", pt: "Propriedades", ru: "Свойства", ar: "الخصائص"
  },
  "docs.content.installation.step1": {
    ja: "インストーラーをダウンロード", ko: "설치 프로그램 다운로드", de: "Installationsprogramm herunterladen", fr: "Télécharger l'installateur",
    es: "Descargar instalador", pt: "Baixar instalador", ru: "Скачать установщик", ar: "تحميل المثبت"
  },
  "docs.content.installation.step2": {
    ja: "インストーラーを実行", ko: "설치 프로그램 실행", de: "Installationsprogramm ausführen", fr: "Exécuter l'installateur",
    es: "Ejecutar instalador", pt: "Executar instalador", ru: "Запустить установщик", ar: "تشغيل المثبت"
  },
  "docs.content.installation.step3": {
    ja: "Revitを再起動", ko: "Revit 재시작", de: "Revit neu starten", fr: "Redémarrer Revit",
    es: "Reiniciar Revit", pt: "Reiniciar Revit", ru: "Перезапустить Revit", ar: "إعادة تشغيل Revit"
  },
  "docs.content.configuration.apiKey": {
    ja: "APIキー", ko: "API 키", de: "API-Schlüssel", fr: "Clé API",
    es: "Clave API", pt: "Chave API", ru: "API-ключ", ar: "مفتاح API"
  },
  "docs.content.configuration.language": {
    ja: "言語", ko: "언어", de: "Sprache", fr: "Langue",
    es: "Idioma", pt: "Idioma", ru: "Язык", ar: "اللغة"
  },
  "docs.content.configuration.theme": {
    ja: "テーマ", ko: "테마", de: "Design", fr: "Thème",
    es: "Tema", pt: "Tema", ru: "Тема", ar: "المظهر"
  },
  "docs.content.troubleshooting.title": {
    ja: "トラブルシューティング", ko: "문제 해결", de: "Fehlerbehebung", fr: "Dépannage",
    es: "Solución de problemas", pt: "Solução de problemas", ru: "Устранение неполадок", ar: "استكشاف الأخطاء وإصلاحها"
  },
  "docs.content.troubleshooting.connection": {
    ja: "接続の問題", ko: "연결 문제", de: "Verbindungsprobleme", fr: "Problèmes de connexion",
    es: "Problemas de conexión", pt: "Problemas de conexão", ru: "Проблемы с подключением", ar: "مشاكل الاتصال"
  },
  "docs.content.troubleshooting.login": {
    ja: "ログインの問題", ko: "로그인 문제", de: "Anmeldeprobleme", fr: "Problèmes de connexion",
    es: "Problemas de inicio de sesión", pt: "Problemas de login", ru: "Проблемы со входом", ar: "مشاكل تسجيل الدخول"
  },
  "docs.content.api.authentication": {
    ja: "認証", ko: "인증", de: "Authentifizierung", fr: "Authentification",
    es: "Autenticación", pt: "Autenticação", ru: "Аутентификация", ar: "المصادقة"
  },
  "docs.content.api.endpoints": {
    ja: "エンドポイント", ko: "엔드포인트", de: "Endpunkte", fr: "Points de terminaison",
    es: "Puntos finales", pt: "Endpoints", ru: "Конечные точки", ar: "نقاط النهاية"
  },
  "docs.content.api.rateLimit": {
    ja: "レート制限", ko: "속도 제한", de: "Ratenbegrenzung", fr: "Limite de débit",
    es: "Límite de velocidad", pt: "Limite de taxa", ru: "Ограничение скорости", ar: "حد المعدل"
  },
  "docs.sections.quickStart.title": {
    ja: "クイックスタート", ko: "빠른 시작", de: "Schnellstart", fr: "Démarrage rapide",
    es: "Inicio rápido", pt: "Início rápido", ru: "Быстрый старт", ar: "البداية السريعة"
  },
  "docs.sections.webPlatform.title": {
    ja: "Webプラットフォーム", ko: "웹 플랫폼", de: "Web-Plattform", fr: "Plateforme Web",
    es: "Plataforma Web", pt: "Plataforma Web", ru: "Веб-платформа", ar: "منصة الويب"
  },
  "docs.sections.revitPlugin.title": {
    ja: "Revitプラグイン", ko: "Revit 플러그인", de: "Revit-Plugin", fr: "Plugin Revit",
    es: "Plugin de Revit", pt: "Plugin Revit", ru: "Плагин Revit", ar: "ملحق Revit"
  },
  "docs.sections.api.title": {
    ja: "API", ko: "API", de: "API", fr: "API",
    es: "API", pt: "API", ru: "API", ar: "API"
  },
  "docs.sections.troubleshooting.title": {
    ja: "トラブルシューティング", ko: "문제 해결", de: "Fehlerbehebung", fr: "Dépannage",
    es: "Solución de problemas", pt: "Solução de problemas", ru: "Устранение неполадок", ar: "استكشاف الأخطاء وإصلاحها"
  },

  // ============= SERVICE AI (JA) =============
  "serviceAI.features.title": {
    ja: "カスタムAI機能"
  },
  "serviceAI.features.subtitle": {
    ja: "お客様のニーズに合わせたAIソリューション"
  },

  // ============= SERVICE SUPPORT (JA) =============
  "serviceSupport.docs.items.guides.title": {
    ja: "ユーザーガイド"
  },
  "serviceSupport.docs.items.guides.description": {
    ja: "詳細な製品ドキュメントとガイド"
  },

  // ============= SERVICES (ALL) =============
  "services.overview.title": {
    ja: "サービス概要", ko: "서비스 개요", de: "Dienstleistungsübersicht", fr: "Aperçu des services",
    es: "Resumen de servicios", pt: "Visão geral dos serviços", ru: "Обзор услуг", ar: "نظرة عامة على الخدمات"
  },
  "services.overview.description": {
    ja: "プロフェッショナルなサービスでプロジェクトを成功に導きます",
    ko: "전문 서비스로 프로젝트 성공을 지원합니다",
    de: "Professionelle Dienstleistungen für Ihren Projekterfolg",
    fr: "Services professionnels pour le succès de votre projet",
    es: "Servicios profesionales para el éxito de su proyecto",
    pt: "Serviços profissionais para o sucesso do seu projeto",
    ru: "Профессиональные услуги для успеха вашего проекта",
    ar: "خدمات احترافية لنجاح مشروعك"
  },
  "services.items.training.title": {
    ja: "トレーニング", ko: "교육", de: "Schulung", fr: "Formation",
    es: "Capacitación", pt: "Treinamento", ru: "Обучение", ar: "التدريب"
  },
  "services.items.training.description": {
    ja: "チームトレーニングとワークショップ",
    ko: "팀 교육 및 워크숍",
    de: "Teamschulungen und Workshops",
    fr: "Formations d'équipe et ateliers",
    es: "Capacitación de equipos y talleres",
    pt: "Treinamentos de equipe e workshops",
    ru: "Обучение команды и воркшопы",
    ar: "تدريب الفريق وورش العمل"
  },

  // ============= ABOUT (REMAINING) =============
  "about.mission.title": {
    ko: "우리의 미션", de: "Unsere Mission", fr: "Notre mission", es: "Nuestra misión",
    pt: "Nossa missão", ru: "Наша миссия", ar: "مهمتنا"
  },
  "about.mission.description": {
    ko: "AI를 통해 건설 산업의 디지털 전환을 가속화합니다",
    de: "Wir beschleunigen die digitale Transformation der Bauindustrie durch KI",
    fr: "Nous accélérons la transformation numérique de l'industrie de la construction grâce à l'IA",
    es: "Aceleramos la transformación digital de la industria de la construcción a través de la IA",
    pt: "Aceleramos a transformação digital da indústria da construção através da IA",
    ru: "Мы ускоряем цифровую трансформацию строительной отрасли с помощью ИИ",
    ar: "نحن نسرع التحول الرقمي لصناعة البناء من خلال الذكاء الاصطناعي"
  },
  "about.values.title": {
    ko: "우리의 가치", de: "Unsere Werte", fr: "Nos valeurs", es: "Nuestros valores",
    pt: "Nossos valores", ru: "Наши ценности", ar: "قيمنا"
  }
};

// Function to set nested property
function setNestedProperty(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

// Apply translations
const languageFiles = ['ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('='.repeat(80));
console.log('APPLYING PART 5 TRANSLATIONS (Final batch)');
console.log('='.repeat(80));

for (const langCode of languageFiles) {
  const filePath = path.join(__dirname, `${langCode}.json`);
  const langData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let appliedCount = 0;

  for (const [key, langValues] of Object.entries(translations)) {
    if (langValues[langCode]) {
      setNestedProperty(langData, key, langValues[langCode]);
      appliedCount++;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(langData, null, 2), 'utf8');
  console.log(`${langCode.toUpperCase()}: Applied ${appliedCount} translations`);
}

console.log('\n' + '='.repeat(80));
console.log('PART 5 TRANSLATIONS APPLIED');
console.log('='.repeat(80));
