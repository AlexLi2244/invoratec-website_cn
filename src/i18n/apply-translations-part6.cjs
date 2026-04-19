const fs = require('fs');
const path = require('path');

// Part 6: Docs, Services, About content - comprehensive translations
const translations = {
  // ============= DOCS - REVIT PROJECTS =============
  "docs.content.revitProjects.budget": {
    ja: "予算追跡", ko: "예산 추적", de: "Budget-Tracking", fr: "Suivi du budget",
    es: "Seguimiento del presupuesto", pt: "Acompanhamento do orçamento", ru: "Отслеживание бюджета", ar: "تتبع الميزانية"
  },
  "docs.content.revitProjects.budgetDesc": {
    ja: "プロジェクト予算を設定し、リアルタイムで支出を追跡します",
    ko: "프로젝트 예산을 설정하고 실시간으로 지출을 추적합니다",
    de: "Projektbudget festlegen und Ausgaben in Echtzeit verfolgen",
    fr: "Définir le budget du projet et suivre les dépenses en temps réel",
    es: "Establecer el presupuesto del proyecto y seguir los gastos en tiempo real",
    pt: "Definir orçamento do projeto e acompanhar gastos em tempo real",
    ru: "Установите бюджет проекта и отслеживайте расходы в реальном времени",
    ar: "تحديد ميزانية المشروع وتتبع النفقات في الوقت الفعلي"
  },
  "docs.content.revitProjects.milestones": {
    ja: "マイルストーン計画", ko: "마일스톤 계획", de: "Meilensteinplanung", fr: "Planification des jalons",
    es: "Planificación de hitos", pt: "Planejamento de marcos", ru: "Планирование вех", ar: "تخطيط المعالم"
  },
  "docs.content.revitProjects.milestonesDesc": {
    ja: "期日と予算を含むプロジェクトのマイルストーンを定義します",
    ko: "마감일과 예산이 포함된 프로젝트 마일스톤을 정의합니다",
    de: "Projekt-Meilensteine mit Fälligkeitsdaten und Budgets definieren",
    fr: "Définir les jalons du projet avec dates d'échéance et budgets",
    es: "Definir hitos del proyecto con fechas límite y presupuestos",
    pt: "Definir marcos do projeto com prazos e orçamentos",
    ru: "Определите вехи проекта с датами и бюджетами",
    ar: "تحديد معالم المشروع مع تواريخ الاستحقاق والميزانيات"
  },
  "docs.content.revitProjects.dashboardDesc": {
    ja: "ダッシュボードはプロジェクトの統計、タスクの進捗、チームのパフォーマンスの概要を提供します",
    ko: "대시보드는 프로젝트 통계, 작업 진행 상황, 팀 성과에 대한 한눈에 보기를 제공합니다",
    de: "Das Dashboard bietet einen Überblick über Projektstatistiken, Aufgabenfortschritt und Teamleistung",
    fr: "Le tableau de bord offre une vue d'ensemble des statistiques du projet, de la progression des tâches et des performances de l'équipe",
    es: "El panel proporciona una vista general de estadísticas del proyecto, progreso de tareas y rendimiento del equipo",
    pt: "O painel fornece uma visão geral das estatísticas do projeto, progresso das tarefas e desempenho da equipe",
    ru: "Панель управления показывает статистику проекта, прогресс задач и производительность команды",
    ar: "توفر لوحة المعلومات نظرة عامة على إحصائيات المشروع وتقدم المهام وأداء الفريق"
  },

  // ============= DOCS - REVIT ACC =============
  "docs.content.revitAcc.overview": {
    ja: "概要", ko: "개요", de: "Überblick", fr: "Aperçu",
    es: "Descripción general", pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },
  "docs.content.revitAcc.hubBrowser": {
    ja: "ハブブラウザ", ko: "허브 브라우저", de: "Hub-Browser", fr: "Navigateur Hub",
    es: "Navegador de Hub", pt: "Navegador de Hub", ru: "Обозреватель хаба", ar: "متصفح المحور"
  },
  "docs.content.revitAcc.modelSync": {
    ja: "モデル同期", ko: "모델 동기화", de: "Modellsynchronisierung", fr: "Synchronisation de modèle",
    es: "Sincronización de modelo", pt: "Sincronização de modelo", ru: "Синхронизация модели", ar: "مزامنة النموذج"
  },
  "docs.content.revitAcc.clashImport": {
    ja: "干渉インポート", ko: "충돌 가져오기", de: "Konflikt-Import", fr: "Import de conflits",
    es: "Importación de conflictos", pt: "Importação de conflitos", ru: "Импорт конфликтов", ar: "استيراد التضاربات"
  },

  // ============= DOCS - HELP =============
  "docs.help.title": {
    ja: "ヘルプが必要ですか？", ko: "도움이 필요하신가요?", de: "Brauchen Sie Hilfe?", fr: "Besoin d'aide ?",
    es: "¿Necesita ayuda?", pt: "Precisa de ajuda?", ru: "Нужна помощь?", ar: "هل تحتاج مساعدة؟"
  },
  "docs.help.description": {
    ja: "お探しのものが見つかりませんか？サポートチームがお手伝いします",
    ko: "찾고 있는 것을 찾을 수 없나요? 지원팀이 도와드립니다",
    de: "Können Sie nicht finden, was Sie suchen? Unser Support-Team hilft Ihnen",
    fr: "Vous ne trouvez pas ce que vous cherchez ? Notre équipe de support est là pour vous aider",
    es: "¿No encuentra lo que busca? Nuestro equipo de soporte está aquí para ayudarle",
    pt: "Não encontra o que procura? Nossa equipe de suporte está aqui para ajudar",
    ru: "Не можете найти то, что ищете? Наша служба поддержки готова помочь",
    ar: "لا تجد ما تبحث عنه؟ فريق الدعم لدينا هنا للمساعدة"
  },

  // ============= SERVICES - CONSULTING =============
  "services.items.consulting.title": {
    ja: "コンサルティング", ko: "컨설팅", de: "Beratung", fr: "Conseil",
    es: "Consultoría", pt: "Consultoria", ru: "Консалтинг", ar: "الاستشارات"
  },
  "services.items.consulting.description": {
    ja: "BIM戦略とデジタルトランスフォーメーション支援",
    ko: "BIM 전략 및 디지털 전환 지원",
    de: "BIM-Strategie und digitale Transformation",
    fr: "Stratégie BIM et transformation numérique",
    es: "Estrategia BIM y transformación digital",
    pt: "Estratégia BIM e transformação digital",
    ru: "Стратегия BIM и цифровая трансформация",
    ar: "استراتيجية BIM والتحول الرقمي"
  },
  "services.items.consulting.features.0": {
    ja: "BIM戦略開発", ko: "BIM 전략 개발", de: "BIM-Strategieentwicklung", fr: "Développement de stratégie BIM",
    es: "Desarrollo de estrategia BIM", pt: "Desenvolvimento de estratégia BIM", ru: "Разработка стратегии BIM", ar: "تطوير استراتيجية BIM"
  },
  "services.items.consulting.features.1": {
    ja: "グローバルモデリングリソース", ko: "글로벌 모델링 리소스", de: "Globale Modellierungsressourcen", fr: "Ressources de modélisation globales",
    es: "Recursos de modelado globales", pt: "Recursos globais de modelagem", ru: "Глобальные ресурсы моделирования", ar: "موارد النمذجة العالمية"
  },
  "services.items.consulting.features.2": {
    ja: "標準とテンプレート", ko: "표준 및 템플릿", de: "Standards & Vorlagen", fr: "Standards et modèles",
    es: "Estándares y plantillas", pt: "Padrões e modelos", ru: "Стандарты и шаблоны", ar: "المعايير والقوالب"
  },
  "services.items.ai.features.0": {
    ja: "カスタムAI機能", ko: "맞춤형 AI 기능", de: "Benutzerdefinierte KI-Funktionen", fr: "Fonctionnalités IA personnalisées",
    es: "Funciones de IA personalizadas", pt: "Recursos de IA personalizados", ru: "Пользовательские функции ИИ", ar: "ميزات الذكاء الاصطناعي المخصصة"
  },
  "services.items.ai.features.1": {
    ja: "ローカルサーバー展開", ko: "로컬 서버 배포", de: "Lokale Serverbereitstellung", fr: "Déploiement de serveur local",
    es: "Implementación de servidor local", pt: "Implantação de servidor local", ru: "Развёртывание на локальном сервере", ar: "نشر الخادم المحلي"
  },
  "services.items.ai.features.2": {
    ja: "カスタムトレーニングプログラム", ko: "맞춤형 교육 프로그램", de: "Benutzerdefinierte Trainingsprogramme", fr: "Programmes de formation personnalisés",
    es: "Programas de capacitación personalizados", pt: "Programas de treinamento personalizados", ru: "Индивидуальные программы обучения", ar: "برامج تدريب مخصصة"
  },
  "services.items.support.features.0": {
    ja: "優先サポート", ko: "우선 지원", de: "Prioritäts-Support", fr: "Support prioritaire",
    es: "Soporte prioritario", pt: "Suporte prioritário", ru: "Приоритетная поддержка", ar: "الدعم ذو الأولوية"
  },
  "services.items.support.features.1": {
    ja: "カスタム統合", ko: "맞춤형 통합", de: "Benutzerdefinierte Integrationen", fr: "Intégrations personnalisées",
    es: "Integraciones personalizadas", pt: "Integrações personalizadas", ru: "Пользовательские интеграции", ar: "التكاملات المخصصة"
  },
  "services.items.support.features.2": {
    ja: "専任サクセスマネージャー", ko: "전담 성공 매니저", de: "Dedizierter Erfolgsmanager", fr: "Responsable dédié au succès",
    es: "Gerente de éxito dedicado", pt: "Gerente de sucesso dedicado", ru: "Выделенный менеджер по успеху", ar: "مدير نجاح مخصص"
  },

  // ============= ABOUT - PRODUCTS =============
  "about.products.web.subtitle": {
    ko: "클라우드 플랫폼", de: "Cloud-Plattform", fr: "Plateforme Cloud", es: "Plataforma en la nube",
    pt: "Plataforma em nuvem", ru: "Облачная платформа", ar: "منصة سحابية"
  },
  "about.products.web.description": {
    ko: "전체 프로젝트 팀을 위한 브라우저 기반 협업",
    de: "Browserbasierte Zusammenarbeit für Ihr gesamtes Projektteam",
    fr: "Collaboration basée sur navigateur pour toute votre équipe projet",
    es: "Colaboración basada en navegador para todo su equipo de proyecto",
    pt: "Colaboração baseada em navegador para toda a sua equipe de projeto",
    ru: "Совместная работа в браузере для всей проектной команды",
    ar: "التعاون القائم على المتصفح لفريق المشروع بأكمله"
  },
  "about.products.web.features.viewer": {
    ko: "3D 뷰어", de: "3D-Viewer", fr: "Visionneuse 3D", es: "Visor 3D",
    pt: "Visualizador 3D", ru: "3D-просмотрщик", ar: "عارض ثلاثي الأبعاد"
  },
  "about.products.web.features.tasks": {
    ko: "작업 관리", de: "Aufgabenverwaltung", fr: "Gestion des tâches", es: "Gestión de tareas",
    pt: "Gerenciamento de tarefas", ru: "Управление задачами", ar: "إدارة المهام"
  },
  "about.products.cta": {
    ko: "제품 살펴보기", de: "Produkte erkunden", fr: "Explorer nos produits", es: "Explorar nuestros productos",
    pt: "Explorar nossos produtos", ru: "Изучить продукты", ar: "استكشف منتجاتنا"
  },
  "about.contact.email.label": {
    ko: "이메일", de: "E-Mail", fr: "E-mail", es: "Correo electrónico",
    pt: "E-mail", ru: "Эл. почта", ar: "البريد الإلكتروني"
  },

  // ============= DOCS - WEB COORDINATION =============
  "docs.content.webCoordination.overviewDesc": {
    ja: "コーディネーションモジュールはACC干渉管理と統合し、チームがモデル干渉を追跡し解決できるようにします",
    ko: "코디네이션 모듈은 ACC 충돌 관리와 통합되어 팀이 모델 충돌을 추적하고 해결할 수 있도록 합니다",
    de: "Das Koordinationsmodul integriert sich mit ACC Clash Management und ermöglicht Teams, Modellkonflikte zu verfolgen und zu lösen",
    fr: "Le module de coordination s'intègre à ACC Clash Management, permettant aux équipes de suivre et résoudre les conflits de modèle",
    es: "El módulo de coordinación se integra con ACC Clash Management, permitiendo a los equipos rastrear y resolver conflictos de modelo",
    pt: "O módulo de coordenação se integra ao ACC Clash Management, permitindo que equipes rastreiem e resolvam conflitos de modelo",
    ru: "Модуль координации интегрируется с ACC Clash Management, позволяя командам отслеживать и разрешать конфликты моделей",
    ar: "يتكامل وحدة التنسيق مع ACC Clash Management، مما يتيح للفرق تتبع وحل تضاربات النماذج"
  },
  "docs.content.webCoordination.accIntegration": {
    ja: "ACC統合", ko: "ACC 통합", de: "ACC-Integration", fr: "Intégration ACC",
    es: "Integración ACC", pt: "Integração ACC", ru: "Интеграция с ACC", ar: "تكامل ACC"
  },
  "docs.content.webCoordination.accIntegrationDesc": {
    ja: "Autodesk Construction CloudのClash Managementモジュールに接続して干渉をインポートします",
    ko: "Autodesk Construction Cloud의 Clash Management 모듈에 연결하여 충돌을 가져옵니다",
    de: "Verbinden Sie sich mit dem Clash Management Modul von Autodesk Construction Cloud, um Konflikte zu importieren",
    fr: "Connectez-vous au module Clash Management d'Autodesk Construction Cloud pour importer les conflits",
    es: "Conéctese al módulo Clash Management de Autodesk Construction Cloud para importar conflictos",
    pt: "Conecte-se ao módulo Clash Management do Autodesk Construction Cloud para importar conflitos",
    ru: "Подключитесь к модулю Clash Management в Autodesk Construction Cloud для импорта конфликтов",
    ar: "اتصل بوحدة Clash Management في Autodesk Construction Cloud لاستيراد التضاربات"
  },
  "docs.content.webCoordination.accStep2": {
    ja: "ACCアカウントを接続して干渉レポートを選択", ko: "ACC 계정을 연결하고 충돌 보고서 선택",
    de: "ACC-Konto verbinden und Konfliktberichte auswählen", fr: "Connecter le compte ACC et sélectionner les rapports de conflits",
    es: "Conectar cuenta ACC y seleccionar informes de conflictos", pt: "Conectar conta ACC e selecionar relatórios de conflitos",
    ru: "Подключите учётную запись ACC и выберите отчёты о конфликтах", ar: "ربط حساب ACC واختيار تقارير التضاربات"
  },
  "docs.content.webCoordination.issueTracking": {
    ja: "課題追跡", ko: "이슈 추적", de: "Issue-Tracking", fr: "Suivi des problèmes",
    es: "Seguimiento de problemas", pt: "Rastreamento de problemas", ru: "Отслеживание задач", ar: "تتبع المشكلات"
  },

  // ============= DOCS - WEB SHEETS =============
  "docs.content.webSheets.overviewDesc": {
    ja: "シートモジュールでは2D図面の表示、注釈、バージョン比較が可能です",
    ko: "시트 모듈에서는 2D 도면 보기, 주석 달기, 버전 비교가 가능합니다",
    de: "Das Pläne-Modul ermöglicht das Anzeigen, Annotieren und Vergleichen von 2D-Zeichnungsversionen",
    fr: "Le module Plans permet de visualiser, annoter et comparer les versions de dessins 2D",
    es: "El módulo de Planos permite ver, anotar y comparar versiones de dibujos 2D",
    pt: "O módulo de Folhas permite visualizar, anotar e comparar versões de desenhos 2D",
    ru: "Модуль листов позволяет просматривать, аннотировать и сравнивать версии 2D-чертежей",
    ar: "تتيح وحدة الأوراق عرض الرسومات ثنائية الأبعاد والتعليق عليها ومقارنة الإصدارات"
  },
  "docs.content.webSheets.viewingDesc": {
    ja: "PDF、DWF、画像形式をサポートする高性能2Dビューアで図面を表示します",
    ko: "PDF, DWF 및 이미지 형식을 지원하는 고성능 2D 뷰어로 도면을 봅니다",
    de: "Zeichnungen im hochleistungsfähigen 2D-Viewer anzeigen, der PDF, DWF und Bildformate unterstützt",
    fr: "Visualisez les dessins dans une visionneuse 2D haute performance prenant en charge PDF, DWF et formats d'image",
    es: "Ver dibujos en un visor 2D de alto rendimiento que admite PDF, DWF y formatos de imagen",
    pt: "Visualize desenhos em um visualizador 2D de alto desempenho que suporta PDF, DWF e formatos de imagem",
    ru: "Просматривайте чертежи в высокопроизводительном 2D-просмотрщике с поддержкой PDF, DWF и изображений",
    ar: "عرض الرسومات في عارض ثنائي الأبعاد عالي الأداء يدعم PDF و DWF وتنسيقات الصور"
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
console.log('APPLYING PART 6 TRANSLATIONS (Docs & Services comprehensive)');
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
console.log('PART 6 TRANSLATIONS APPLIED');
console.log('='.repeat(80));
