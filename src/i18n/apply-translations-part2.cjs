const fs = require('fs');
const path = require('path');

// Part 2: FeaturesPage, Docs, and remaining translations
const translations = {
  // ============= ALL LANGUAGES - FEATURES PAGE =============
  featuresPage: {
    // Web Features - Coordination
    "featuresPage.webFeatures.coordination.title": {
      ko: "코디네이션", de: "Koordination", fr: "Coordination", es: "Coordinación",
      pt: "Coordenação", ru: "Координация", ar: "التنسيق"
    },
    "featuresPage.webFeatures.coordination.highlights.comparison.label": {
      ko: "모델 비교", de: "Modellvergleich", fr: "Comparaison de modèles", es: "Comparación de modelos",
      pt: "Comparação de modelos", ru: "Сравнение моделей", ar: "مقارنة النماذج"
    },
    "featuresPage.webFeatures.coordination.highlights.comparison.desc": {
      ko: "모델 버전 비교", de: "Modellversionen vergleichen", fr: "Comparer les versions de modèles", es: "Comparar versiones de modelos",
      pt: "Comparar versões de modelos", ru: "Сравнение версий моделей", ar: "مقارنة إصدارات النماذج"
    },
    "featuresPage.webFeatures.coordination.properties.viewer.name": {
      ko: "코디네이션 뷰어", de: "Koordinations-Viewer", fr: "Visionneuse de coordination", es: "Visor de coordinación",
      pt: "Visualizador de coordenação", ru: "Просмотрщик координации", ar: "عارض التنسيق"
    },
    "featuresPage.webFeatures.coordination.properties.viewer.desc": {
      ko: "모델 충돌 시각화", de: "Modellkonflikt-Visualisierung", fr: "Visualisation des conflits de modèles", es: "Visualización de conflictos de modelos",
      pt: "Visualização de conflitos de modelos", ru: "Визуализация конфликтов моделей", ar: "تصور تضارب النماذج"
    },
    "featuresPage.webFeatures.coordination.properties.sets.name": {
      ko: "코디네이션 세트", de: "Koordinationssets", fr: "Ensembles de coordination", es: "Conjuntos de coordinación",
      pt: "Conjuntos de coordenação", ru: "Наборы координации", ar: "مجموعات التنسيق"
    },
    "featuresPage.webFeatures.coordination.properties.status.name": {
      ko: "충돌 상태", de: "Konflikt-Status", fr: "Statut de conflit", es: "Estado de conflicto",
      pt: "Status de conflito", ru: "Статус конфликта", ar: "حالة التضارب"
    },
    "featuresPage.webFeatures.coordination.properties.status.type": {
      ko: "상태", de: "Status", fr: "Statut", es: "Estado",
      pt: "Status", ru: "Статус", ar: "الحالة"
    },
    "featuresPage.webFeatures.coordination.properties.status.desc": {
      ko: "해결 추적", de: "Lösungsverfolgung", fr: "Suivi de résolution", es: "Seguimiento de resolución",
      pt: "Rastreamento de resolução", ru: "Отслеживание разрешения", ar: "تتبع الحل"
    },
    "featuresPage.webFeatures.coordination.properties.discipline.name": {
      ko: "분야", de: "Disziplin", fr: "Discipline", es: "Disciplina",
      pt: "Disciplina", ru: "Дисциплина", ar: "التخصص"
    },
    "featuresPage.webFeatures.coordination.properties.discipline.type": {
      ko: "선택", de: "Auswahl", fr: "Sélection", es: "Selección",
      pt: "Seleção", ru: "Выбор", ar: "اختيار"
    },
    "featuresPage.webFeatures.coordination.properties.discipline.desc": {
      ko: "MEP/구조/건축 태그", de: "MEP/Tragwerk/Architektur-Tags", fr: "Tags MEP/Structure/Architecture", es: "Etiquetas MEP/Estructural/Arquitectónico",
      pt: "Tags MEP/Estrutural/Arquitetônico", ru: "Теги МЕП/Конструкция/Архитектура", ar: "علامات MEP/الهيكلية/المعمارية"
    },
    // Web Features - Sheets
    "featuresPage.webFeatures.sheets.title": {
      ko: "시공 도면", de: "Werkstattzeichnungen", fr: "Plans d'exécution", es: "Planos de taller",
      pt: "Desenhos de fabricação", ru: "Рабочие чертежи", ar: "رسومات الورشة"
    },
    "featuresPage.webFeatures.sheets.subtitle": {
      ko: "2D 도면 뷰어 및 마크업", de: "2D-Zeichnungsanzeige und Markierung", fr: "Affichage et annotation de dessins 2D", es: "Visualización y marcado de dibujos 2D",
      pt: "Visualização e marcação de desenhos 2D", ru: "Просмотр и разметка 2D-чертежей", ar: "عرض الرسومات ثنائية الأبعاد والتعليق عليها"
    },
    "featuresPage.webFeatures.sheets.highlights.viewer2d.label": {
      ko: "2D 뷰어", de: "2D-Viewer", fr: "Visionneuse 2D", es: "Visor 2D",
      pt: "Visualizador 2D", ru: "2D-просмотрщик", ar: "عارض ثنائي الأبعاد"
    },
    "featuresPage.webFeatures.sheets.highlights.markup.label": {
      ko: "마크업 도구", de: "Markup-Tools", fr: "Outils d'annotation", es: "Herramientas de marcado",
      pt: "Ferramentas de marcação", ru: "Инструменты разметки", ar: "أدوات التعليق"
    },
    "featuresPage.webFeatures.sheets.highlights.markup.desc": {
      ko: "주석 및 코멘트 추가", de: "Anmerkungen und Kommentare hinzufügen", fr: "Ajouter des annotations et commentaires", es: "Añadir anotaciones y comentarios",
      pt: "Adicionar anotações e comentários", ru: "Добавление аннотаций и комментариев", ar: "إضافة التعليقات التوضيحية والملاحظات"
    },
    "featuresPage.webFeatures.sheets.highlights.versionCompare.label": {
      ko: "버전 비교", de: "Versionsvergleich", fr: "Comparaison de versions", es: "Comparación de versiones",
      pt: "Comparação de versões", ru: "Сравнение версий", ar: "مقارنة الإصدارات"
    },
    "featuresPage.webFeatures.sheets.highlights.versionCompare.desc": {
      ko: "도면 리비전 비교", de: "Zeichnungsrevisionen vergleichen", fr: "Comparer les révisions de dessins", es: "Comparar revisiones de dibujos",
      pt: "Comparar revisões de desenhos", ru: "Сравнение ревизий чертежей", ar: "مقارنة مراجعات الرسومات"
    },
    "featuresPage.webFeatures.sheets.properties.viewer.name": {
      ko: "시트 뷰어", de: "Planansicht", fr: "Visionneuse de plans", es: "Visor de planos",
      pt: "Visualizador de folhas", ru: "Просмотрщик листов", ar: "عارض الأوراق"
    },
    "featuresPage.webFeatures.sheets.properties.viewer.desc": {
      ko: "내장 2D 도면 뷰어", de: "Eingebetteter 2D-Zeichnungsviewer", fr: "Visionneuse de dessins 2D intégrée", es: "Visor de dibujos 2D integrado",
      pt: "Visualizador de desenhos 2D incorporado", ru: "Встроенный просмотрщик 2D-чертежей", ar: "عارض الرسومات ثنائية الأبعاد المدمج"
    },
    "featuresPage.webFeatures.sheets.properties.markup.name": {
      ko: "시트 마크업", de: "Plan-Markup", fr: "Annotation de plan", es: "Marcado de plano",
      pt: "Marcação de folha", ru: "Разметка листа", ar: "تعليق الورقة"
    },
    "featuresPage.webFeatures.sheets.properties.revision.name": {
      ko: "리비전", de: "Revision", fr: "Révision", es: "Revisión",
      pt: "Revisão", ru: "Ревизия", ar: "المراجعة"
    },
    "featuresPage.webFeatures.sheets.properties.revision.type": {
      ko: "선택", de: "Auswahl", fr: "Sélection", es: "Selección",
      pt: "Seleção", ru: "Выбор", ar: "اختيار"
    },
    "featuresPage.webFeatures.sheets.properties.revision.desc": {
      ko: "도면 리비전 추적", de: "Zeichnungsrevisionsverfolgung", fr: "Suivi des révisions de dessins", es: "Seguimiento de revisiones de dibujos",
      pt: "Rastreamento de revisões de desenhos", ru: "Отслеживание ревизий чертежей", ar: "تتبع مراجعات الرسومات"
    },
    "featuresPage.webFeatures.sheets.properties.approval.name": {
      ko: "승인 상태", de: "Genehmigungsstatus", fr: "Statut d'approbation", es: "Estado de aprobación",
      pt: "Status de aprovação", ru: "Статус утверждения", ar: "حالة الموافقة"
    },
    "featuresPage.webFeatures.sheets.properties.approval.type": {
      ko: "상태", de: "Status", fr: "Statut", es: "Estado",
      pt: "Status", ru: "Статус", ar: "الحالة"
    },
    "featuresPage.webFeatures.sheets.properties.approval.desc": {
      ko: "승인 워크플로", de: "Genehmigungsworkflow", fr: "Flux d'approbation", es: "Flujo de aprobación",
      pt: "Fluxo de aprovação", ru: "Процесс утверждения", ar: "سير عمل الموافقة"
    },
    // Web Features - Reports
    "featuresPage.webFeatures.reports.title": {
      ko: "리포트 및 분석", de: "Berichte & Analysen", fr: "Rapports et analyses", es: "Informes y análisis",
      pt: "Relatórios e análises", ru: "Отчёты и аналитика", ar: "التقارير والتحليلات"
    },
    "featuresPage.webFeatures.reports.subtitle": {
      ko: "프로젝트 인사이트 및 지표", de: "Projekteinblicke und Metriken", fr: "Aperçus et métriques du projet", es: "Perspectivas y métricas del proyecto",
      pt: "Insights e métricas do projeto", ru: "Инсайты и метрики проекта", ar: "رؤى ومقاييس المشروع"
    },
    "featuresPage.webFeatures.reports.highlights.dashboard.label": {
      ko: "대시보드", de: "Dashboard", fr: "Tableau de bord", es: "Panel de control",
      pt: "Painel", ru: "Панель управления", ar: "لوحة المعلومات"
    },
    "featuresPage.webFeatures.reports.highlights.dashboard.desc": {
      ko: "실시간 프로젝트 지표", de: "Echtzeit-Projektmetriken", fr: "Métriques de projet en temps réel", es: "Métricas de proyecto en tiempo real",
      pt: "Métricas de projeto em tempo real", ru: "Метрики проекта в реальном времени", ar: "مقاييس المشروع في الوقت الفعلي"
    },
    "featuresPage.webFeatures.reports.highlights.teamPerformance.label": {
      ko: "팀 성과", de: "Team-Leistung", fr: "Performance de l'équipe", es: "Rendimiento del equipo",
      pt: "Desempenho da equipe", ru: "Производительность команды", ar: "أداء الفريق"
    },
    "featuresPage.webFeatures.reports.highlights.teamPerformance.desc": {
      ko: "팀 생산성 추적", de: "Team-Produktivität verfolgen", fr: "Suivre la productivité de l'équipe", es: "Seguir la productividad del equipo",
      pt: "Acompanhar produtividade da equipe", ru: "Отслеживание продуктивности команды", ar: "تتبع إنتاجية الفريق"
    },
    "featuresPage.webFeatures.reports.highlights.budget.label": {
      ko: "예산 추적", de: "Budget-Tracking", fr: "Suivi du budget", es: "Seguimiento del presupuesto",
      pt: "Acompanhamento do orçamento", ru: "Отслеживание бюджета", ar: "تتبع الميزانية"
    },
    "featuresPage.webFeatures.reports.highlights.budget.desc": {
      ko: "비용 및 지출 모니터링", de: "Kosten und Ausgaben überwachen", fr: "Surveiller les coûts et dépenses", es: "Monitorear costos y gastos",
      pt: "Monitorar custos e gastos", ru: "Мониторинг затрат и расходов", ar: "مراقبة التكاليف والنفقات"
    },
    "featuresPage.webFeatures.reports.highlights.export.label": {
      ko: "리포트 내보내기", de: "Berichte exportieren", fr: "Exporter les rapports", es: "Exportar informes",
      pt: "Exportar relatórios", ru: "Экспорт отчётов", ar: "تصدير التقارير"
    },
    "featuresPage.webFeatures.reports.properties.timeTracking.name": {
      ko: "시간 추적", de: "Zeiterfassung", fr: "Suivi du temps", es: "Seguimiento del tiempo",
      pt: "Acompanhamento de tempo", ru: "Учёт времени", ar: "تتبع الوقت"
    },
    "featuresPage.webFeatures.reports.properties.timeTracking.type": {
      ko: "시간", de: "Zeit", fr: "Temps", es: "Tiempo",
      pt: "Tempo", ru: "Время", ar: "الوقت"
    },
    "featuresPage.webFeatures.reports.properties.timeTracking.desc": {
      ko: "추적 및 수동 시간 입력", de: "Erfasste und manuelle Zeit", fr: "Temps suivi et manuel", es: "Tiempo registrado y manual",
      pt: "Tempo rastreado e manual", ru: "Отслеживаемое и ручное время", ar: "الوقت المتتبع واليدوي"
    },
    "featuresPage.webFeatures.reports.properties.budget.name": {
      ko: "예산", de: "Budget", fr: "Budget", es: "Presupuesto",
      pt: "Orçamento", ru: "Бюджет", ar: "الميزانية"
    },
    "featuresPage.webFeatures.reports.properties.budget.type": {
      ko: "숫자", de: "Zahl", fr: "Nombre", es: "Número",
      pt: "Número", ru: "Число", ar: "رقم"
    },
    "featuresPage.webFeatures.reports.properties.budget.desc": {
      ko: "비용 추적 필드", de: "Kostenverfolgungsfelder", fr: "Champs de suivi des coûts", es: "Campos de seguimiento de costos",
      pt: "Campos de rastreamento de custos", ru: "Поля отслеживания затрат", ar: "حقول تتبع التكاليف"
    },
    "featuresPage.webFeatures.reports.properties.utilization.name": {
      ko: "활용률", de: "Auslastung", fr: "Utilisation", es: "Utilización",
      pt: "Utilização", ru: "Загрузка", ar: "الاستخدام"
    },
    "featuresPage.webFeatures.reports.properties.utilization.type": {
      ko: "수식", de: "Formel", fr: "Formule", es: "Fórmula",
      pt: "Fórmula", ru: "Формула", ar: "صيغة"
    },
    // Tasks properties
    "featuresPage.webFeatures.tasks.properties.status.name": {
      ko: "상태", de: "Status", fr: "Statut", es: "Estado",
      pt: "Status", ru: "Статус", ar: "الحالة"
    },
    "featuresPage.webFeatures.tasks.properties.person.name": {
      ko: "담당자", de: "Person", fr: "Personne", es: "Persona",
      pt: "Pessoa", ru: "Исполнитель", ar: "الشخص"
    },
    "featuresPage.webFeatures.tasks.properties.url.type": {
      ko: "링크", de: "Links", fr: "Liens", es: "Enlaces",
      pt: "Links", ru: "Ссылки", ar: "روابط"
    },
    "featuresPage.webFeatures.tasks.properties.relation.name": {
      ko: "관계", de: "Relation", fr: "Relation", es: "Relación",
      pt: "Relação", ru: "Связь", ar: "علاقة"
    },
    "featuresPage.webFeatures.tasks.properties.rollup.name": {
      ko: "롤업", de: "Rollup", fr: "Rollup", es: "Rollup",
      pt: "Rollup", ru: "Сводка", ar: "تجميع"
    },
    // Timeline properties
    "featuresPage.webFeatures.timeline.properties.dependencies.type": {
      ko: "관계", de: "Relation", fr: "Relation", es: "Relación",
      pt: "Relação", ru: "Связь", ar: "علاقة"
    }
  },

  // ============= DOCS SECTION =============
  docs: {
    "docs.content.revitProjects.teamDesc": {
      ja: "チームメンバーをプロジェクトに追加し、ロールと権限を割り当てます。チームメンバーは自分に割り当てられたタスクを見ることができ、自分のワークロードをトラッキングできます。",
      ko: "팀원을 프로젝트에 추가하고 역할과 권한을 할당합니다. 팀원은 자신에게 할당된 작업을 볼 수 있고 자신의 작업량을 추적할 수 있습니다.",
      de: "Fügen Sie Teammitglieder zu Projekten hinzu und weisen Sie Rollen und Berechtigungen zu. Teammitglieder können ihre zugewiesenen Aufgaben sehen und ihre Arbeitslast verfolgen.",
      fr: "Ajoutez des membres d'équipe aux projets et attribuez des rôles et permissions. Les membres peuvent voir leurs tâches assignées et suivre leur charge de travail.",
      es: "Agregue miembros del equipo a proyectos y asigne roles y permisos. Los miembros pueden ver sus tareas asignadas y seguir su carga de trabajo.",
      pt: "Adicione membros da equipe aos projetos e atribua funções e permissões. Os membros podem ver suas tarefas atribuídas e acompanhar sua carga de trabalho.",
      ru: "Добавляйте членов команды в проекты и назначайте роли и разрешения. Члены команды могут видеть свои назначенные задачи и отслеживать свою нагрузку.",
      ar: "أضف أعضاء الفريق إلى المشاريع وقم بتعيين الأدوار والأذونات. يمكن للأعضاء رؤية مهامهم المعينة وتتبع عبء عملهم."
    },
    "docs.content.revitProjects.settings": {
      ja: "プロジェクト設定",
      ko: "프로젝트 설정",
      de: "Projekteinstellungen",
      fr: "Paramètres du projet",
      es: "Configuración del proyecto",
      pt: "Configurações do projeto",
      ru: "Настройки проекта",
      ar: "إعدادات المشروع"
    },
    "docs.content.revitDashboard.overview": {
      ja: "概要",
      ko: "개요",
      de: "Überblick",
      fr: "Aperçu",
      es: "Descripción general",
      pt: "Visão geral",
      ru: "Обзор",
      ar: "نظرة عامة"
    },
    "docs.content.revitDashboard.widgets": {
      ja: "ウィジェット",
      ko: "위젯",
      de: "Widgets",
      fr: "Widgets",
      es: "Widgets",
      pt: "Widgets",
      ru: "Виджеты",
      ar: "الأدوات"
    },
    "docs.sections.installation.title": {
      ko: "설치",
      es: "Instalación",
      pt: "Instalação",
      ru: "Установка",
      ar: "التثبيت"
    }
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
const languageFiles = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('='.repeat(80));
console.log('APPLYING PART 2 TRANSLATIONS (FeaturesPage & Docs)');
console.log('='.repeat(80));

for (const langCode of languageFiles) {
  const filePath = path.join(__dirname, `${langCode}.json`);
  const langData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let appliedCount = 0;

  // Apply featuresPage translations
  for (const [key, langValues] of Object.entries(translations.featuresPage)) {
    if (langValues[langCode]) {
      setNestedProperty(langData, key, langValues[langCode]);
      appliedCount++;
    }
  }

  // Apply docs translations
  for (const [key, langValues] of Object.entries(translations.docs)) {
    if (langValues[langCode]) {
      setNestedProperty(langData, key, langValues[langCode]);
      appliedCount++;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(langData, null, 2), 'utf8');
  console.log(`${langCode.toUpperCase()}: Applied ${appliedCount} translations`);
}

console.log('\n' + '='.repeat(80));
console.log('PART 2 TRANSLATIONS APPLIED');
console.log('='.repeat(80));
