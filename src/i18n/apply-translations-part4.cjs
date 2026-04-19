const fs = require('fs');
const path = require('path');

// Part 4: Remaining FeaturesPage, Docs, and MockUI translations
const translations = {
  // ============= DOCS CONTENT =============
  "docs.content.webTasks.propPerson": {
    ko: "담당자", de: "Person", fr: "Personne", es: "Persona",
    pt: "Pessoa", ru: "Исполнитель", ar: "الشخص"
  },
  "docs.content.revitDashboard.customizing": {
    ja: "カスタマイズ", ko: "사용자 정의", de: "Anpassen", fr: "Personnalisation",
    es: "Personalización", pt: "Personalização", ru: "Настройка", ar: "التخصيص"
  },
  "docs.content.revitSync.overview": {
    ja: "概要", ko: "개요", de: "Überblick", fr: "Aperçu",
    es: "Descripción general", pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },
  "docs.content.revitACC.overview": {
    ja: "概要", ko: "개요", de: "Überblick", fr: "Aperçu",
    es: "Descripción general", pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },

  // ============= REMAINING MOCKUI =============
  "mockUI.coordination.title": {
    ko: "코디네이션", de: "Koordination", fr: "Coordination", es: "Coordinación",
    pt: "Coordenação", ru: "Координация", ar: "التنسيق"
  },
  "mockUI.coordination.clashes": {
    ko: "충돌", de: "Konflikte", fr: "Conflits", es: "Conflictos",
    pt: "Conflitos", ru: "Конфликты", ar: "التضاربات"
  },
  "mockUI.coordination.resolved": {
    ko: "해결됨", de: "Gelöst", fr: "Résolu", es: "Resuelto",
    pt: "Resolvido", ru: "Разрешено", ar: "تم الحل"
  },
  "mockUI.coordination.pending": {
    ko: "보류 중", de: "Ausstehend", fr: "En attente", es: "Pendiente",
    pt: "Pendente", ru: "Ожидает", ar: "قيد الانتظار"
  },
  "mockUI.sheets.title": {
    ko: "시트", de: "Pläne", fr: "Plans", es: "Planos",
    pt: "Folhas", ru: "Листы", ar: "الأوراق"
  },
  "mockUI.sheets.upload": {
    ko: "업로드", de: "Hochladen", fr: "Télécharger", es: "Subir",
    pt: "Enviar", ru: "Загрузить", ar: "رفع"
  },
  "mockUI.reports.title": {
    ko: "리포트", de: "Berichte", fr: "Rapports", es: "Informes",
    pt: "Relatórios", ru: "Отчёты", ar: "التقارير"
  },
  "mockUI.reports.generate": {
    ko: "생성", de: "Generieren", fr: "Générer", es: "Generar",
    pt: "Gerar", ru: "Создать", ar: "إنشاء"
  },
  "mockUI.reports.export": {
    ko: "내보내기", de: "Exportieren", fr: "Exporter", es: "Exportar",
    pt: "Exportar", ru: "Экспорт", ar: "تصدير"
  },
  "mockUI.projects.title": {
    ko: "프로젝트", de: "Projekte", fr: "Projets", es: "Proyectos",
    pt: "Projetos", ru: "Проекты", ar: "المشاريع"
  },
  "mockUI.projects.new": {
    ko: "새 프로젝트", de: "Neues Projekt", fr: "Nouveau projet", es: "Nuevo proyecto",
    pt: "Novo projeto", ru: "Новый проект", ar: "مشروع جديد"
  },
  "mockUI.projects.active": {
    ko: "활성", de: "Aktiv", fr: "Actif", es: "Activo",
    pt: "Ativo", ru: "Активный", ar: "نشط"
  },
  "mockUI.projects.archived": {
    ko: "보관됨", de: "Archiviert", fr: "Archivé", es: "Archivado",
    pt: "Arquivado", ru: "Архив", ar: "مؤرشف"
  },
  "mockUI.sidebar.home": {
    ko: "홈", de: "Startseite", fr: "Accueil", es: "Inicio",
    pt: "Início", ru: "Главная", ar: "الرئيسية"
  },
  "mockUI.sidebar.tasks": {
    ko: "작업", de: "Aufgaben", fr: "Tâches", es: "Tareas",
    pt: "Tarefas", ru: "Задачи", ar: "المهام"
  },
  "mockUI.sidebar.timeline": {
    ko: "타임라인", de: "Zeitachse", fr: "Chronologie", es: "Línea de tiempo",
    pt: "Linha do tempo", ru: "Временная шкала", ar: "الجدول الزمني"
  },
  "mockUI.sidebar.viewer": {
    ko: "뷰어", de: "Viewer", fr: "Visionneuse", es: "Visor",
    pt: "Visualizador", ru: "Просмотрщик", ar: "العارض"
  },
  "mockUI.sidebar.sheets": {
    ko: "시트", de: "Pläne", fr: "Plans", es: "Planos",
    pt: "Folhas", ru: "Листы", ar: "الأوراق"
  },
  "mockUI.sidebar.coordination": {
    ko: "코디네이션", de: "Koordination", fr: "Coordination", es: "Coordinación",
    pt: "Coordenação", ru: "Координация", ar: "التنسيق"
  },
  "mockUI.sidebar.reports": {
    ko: "리포트", de: "Berichte", fr: "Rapports", es: "Informes",
    pt: "Relatórios", ru: "Отчёты", ar: "التقارير"
  },
  "mockUI.sidebar.settings": {
    ko: "설정", de: "Einstellungen", fr: "Paramètres", es: "Configuración",
    pt: "Configurações", ru: "Настройки", ar: "الإعدادات"
  },

  // ============= SERVICES =============
  "services.hero.cta.contact": {
    ja: "お問い合わせ", ko: "문의하기", de: "Kontakt", fr: "Contact",
    es: "Contacto", pt: "Contato", ru: "Связаться", ar: "اتصل بنا"
  },

  // ============= ABOUT =============
  "about.story.paragraph1": {
    ko: "InvoratecAI는 BIM 및 건설 전문가들이 AI 기술을 쉽게 활용할 수 있도록 설립되었습니다.",
    de: "InvoratecAI wurde gegründet, um BIM- und Bauprofis den einfachen Zugang zu KI-Technologie zu ermöglichen.",
    fr: "InvoratecAI a été fondée pour permettre aux professionnels du BIM et de la construction d'accéder facilement à la technologie IA.",
    es: "InvoratecAI fue fundada para permitir a los profesionales de BIM y construcción acceder fácilmente a la tecnología de IA.",
    pt: "A InvoratecAI foi fundada para permitir que profissionais de BIM e construção acessem facilmente a tecnologia de IA.",
    ru: "InvoratecAI была основана, чтобы помочь специалистам BIM и строительства легко использовать технологии ИИ.",
    ar: "تأسست InvoratecAI لتمكين محترفي BIM والبناء من الوصول بسهولة إلى تقنية الذكاء الاصطناعي."
  },

  // ============= CASES =============
  "cases.items.shanghai-xintiandi.title": {
    ko: "상하이 신천지", de: "Shanghai Xintiandi", fr: "Shanghai Xintiandi", es: "Shanghai Xintiandi",
    pt: "Shanghai Xintiandi", ru: "Шанхай Синьтяньди", ar: "شنغهاي شينتياندي"
  },
  "cases.items.ordos-smart-scenic.title": {
    ko: "오르도스 스마트 관광지", de: "Ordos Smart Scenic", fr: "Ordos Smart Scenic", es: "Ordos Smart Scenic",
    pt: "Ordos Smart Scenic", ru: "Ордос Смарт Сценик", ar: "أوردوس سمارت سينيك"
  },
  "cases.items.daxing-airport.title": {
    ko: "다싱 국제공항", de: "Daxing International Airport", fr: "Aéroport international de Daxing", es: "Aeropuerto Internacional de Daxing",
    pt: "Aeroporto Internacional de Daxing", ru: "Международный аэропорт Дасин", ar: "مطار داشينغ الدولي"
  },

  // ============= REMAINING FEATURESPAGE =============
  "featuresPage.hero.title": {
    ko: "플랫폼 기능", de: "Plattform-Funktionen", fr: "Fonctionnalités de la plateforme", es: "Características de la plataforma",
    pt: "Recursos da plataforma", ru: "Возможности платформы", ar: "ميزات المنصة"
  },
  "featuresPage.hero.subtitle": {
    ko: "데스크톱과 클라우드의 완벽한 통합", de: "Nahtlose Integration von Desktop und Cloud", fr: "Intégration transparente bureau et cloud", es: "Integración perfecta de escritorio y nube",
    pt: "Integração perfeita de desktop e nuvem", ru: "Бесшовная интеграция десктопа и облака", ar: "التكامل السلس بين سطح المكتب والسحابة"
  },
  "featuresPage.tabs.web": {
    ko: "웹 플랫폼", de: "Web-Plattform", fr: "Plateforme Web", es: "Plataforma Web",
    pt: "Plataforma Web", ru: "Веб-платформа", ar: "منصة الويب"
  },
  "featuresPage.tabs.bim": {
    ko: "BIM 플러그인", de: "BIM-Plugin", fr: "Plugin BIM", es: "Plugin BIM",
    pt: "Plugin BIM", ru: "BIM-плагин", ar: "ملحق BIM"
  },
  "featuresPage.tabs.properties": {
    ko: "속성 시스템", de: "Eigenschaftssystem", fr: "Système de propriétés", es: "Sistema de propiedades",
    pt: "Sistema de propriedades", ru: "Система свойств", ar: "نظام الخصائص"
  },

  // ============= DOWNLOAD PAGE =============
  "downloadPage.requirements.ram": {
    ko: "RAM", de: "RAM", fr: "RAM", es: "RAM",
    pt: "RAM", ru: "ОЗУ", ar: "ذاكرة الوصول العشوائي"
  },
  "downloadPage.requirements.disk": {
    ko: "디스크 공간", de: "Festplattenspeicher", fr: "Espace disque", es: "Espacio en disco",
    pt: "Espaço em disco", ru: "Дисковое пространство", ar: "مساحة القرص"
  },

  // ============= ACTIVITY =============
  "activityDetail.sections.speakers": {
    ko: "연사", de: "Referenten", fr: "Intervenants", es: "Ponentes",
    pt: "Palestrantes", ru: "Спикеры", ar: "المتحدثون"
  },
  "activityDetail.sections.requirements": {
    ko: "요구사항", de: "Anforderungen", fr: "Exigences", es: "Requisitos",
    pt: "Requisitos", ru: "Требования", ar: "المتطلبات"
  },

  // ============= BLOG =============
  "blog.categories.announcement": {
    ko: "공지사항", de: "Ankündigung", fr: "Annonce", es: "Anuncio",
    pt: "Anúncio", ru: "Объявление", ar: "إعلان"
  },
  "blog.categories.update": {
    ko: "업데이트", de: "Update", fr: "Mise à jour", es: "Actualización",
    pt: "Atualização", ru: "Обновление", ar: "تحديث"
  },
  "blog.categories.caseStudy": {
    ko: "사례 연구", de: "Fallstudie", fr: "Étude de cas", es: "Caso de estudio",
    pt: "Estudo de caso", ru: "Кейс", ar: "دراسة حالة"
  },
  "blog.tags.revit": {
    ko: "Revit", de: "Revit", fr: "Revit", es: "Revit",
    pt: "Revit", ru: "Revit", ar: "Revit"
  },
  "blog.tags.automation": {
    ko: "자동화", de: "Automatisierung", fr: "Automatisation", es: "Automatización",
    pt: "Automação", ru: "Автоматизация", ar: "الأتمتة"
  },
  "blog.tags.productivity": {
    ko: "생산성", de: "Produktivität", fr: "Productivité", es: "Productividad",
    pt: "Produtividade", ru: "Продуктивность", ar: "الإنتاجية"
  },

  // ============= TERMS =============
  "terms.integrations.title": {
    ko: "통합", de: "Integrationen", fr: "Intégrations", es: "Integraciones",
    pt: "Integrações", ru: "Интеграции", ar: "التكاملات"
  },

  // ============= PRICING =============
  "pricing.title": {
    ko: "요금제", de: "Preise", fr: "Tarifs", es: "Precios",
    pt: "Preços", ru: "Цены", ar: "الأسعار"
  },
  "pricing.subtitle": {
    ko: "팀에 맞는 요금제를 선택하세요", de: "Wählen Sie den richtigen Plan für Ihr Team", fr: "Choisissez le bon plan pour votre équipe", es: "Elija el plan adecuado para su equipo",
    pt: "Escolha o plano certo para sua equipe", ru: "Выберите подходящий план для вашей команды", ar: "اختر الخطة المناسبة لفريقك"
  },
  "pricing.cta.start": {
    ko: "시작하기", de: "Loslegen", fr: "Commencer", es: "Comenzar",
    pt: "Começar", ru: "Начать", ar: "ابدأ"
  },
  "pricing.cta.contact": {
    ko: "문의하기", de: "Kontaktieren", fr: "Contacter", es: "Contactar",
    pt: "Contatar", ru: "Связаться", ar: "اتصل"
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
console.log('APPLYING PART 4 TRANSLATIONS (Remaining sections)');
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
console.log('PART 4 TRANSLATIONS APPLIED');
console.log('='.repeat(80));
