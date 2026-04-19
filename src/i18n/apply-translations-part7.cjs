const fs = require('fs');
const path = require('path');

// Part 7: FeaturesPage - DataModels, BIM Features, Comparison
const translations = {
  // ============= DATA MODELS =============
  "featuresPage.dataModels.title": {
    ko: "데이터 모델", de: "Datenmodelle", fr: "Modèles de données", es: "Modelos de datos",
    pt: "Modelos de dados", ru: "Модели данных", ar: "نماذج البيانات"
  },
  "featuresPage.dataModels.subtitle": {
    ko: "플랫폼의 핵심 데이터 구조", de: "Kerndatenstrukturen der Plattform", fr: "Structures de données principales de la plateforme", es: "Estructuras de datos principales de la plataforma",
    pt: "Estruturas de dados principais da plataforma", ru: "Основные структуры данных платформы", ar: "هياكل البيانات الأساسية للمنصة"
  },
  "featuresPage.dataModels.teamMember.title": {
    ko: "팀 멤버", de: "Teammitglied", fr: "Membre d'équipe", es: "Miembro del equipo",
    pt: "Membro da equipe", ru: "Член команды", ar: "عضو الفريق"
  },
  "featuresPage.dataModels.teamMember.description": {
    ko: "프로젝트 팀원 정보", de: "Projektteammitglieder-Informationen", fr: "Informations sur les membres de l'équipe projet", es: "Información de miembros del equipo del proyecto",
    pt: "Informações dos membros da equipe do projeto", ru: "Информация о членах проектной команды", ar: "معلومات أعضاء فريق المشروع"
  },
  "featuresPage.dataModels.teamMember.properties.name": {
    ko: "이름", de: "Name", fr: "Nom", es: "Nombre",
    pt: "Nome", ru: "Имя", ar: "الاسم"
  },
  "featuresPage.dataModels.teamMember.properties.email": {
    ko: "이메일", de: "E-Mail", fr: "E-mail", es: "Correo electrónico",
    pt: "E-mail", ru: "Эл. почта", ar: "البريد الإلكتروني"
  },
  "featuresPage.dataModels.teamMember.properties.role": {
    ko: "역할", de: "Rolle", fr: "Rôle", es: "Rol",
    pt: "Função", ru: "Роль", ar: "الدور"
  },
  "featuresPage.dataModels.teamMember.properties.department": {
    ko: "부서", de: "Abteilung", fr: "Département", es: "Departamento",
    pt: "Departamento", ru: "Отдел", ar: "القسم"
  },
  "featuresPage.dataModels.teamMember.properties.phone": {
    ko: "전화", de: "Telefon", fr: "Téléphone", es: "Teléfono",
    pt: "Telefone", ru: "Телефон", ar: "الهاتف"
  },
  "featuresPage.dataModels.teamMember.properties.avatar": {
    ko: "아바타", de: "Avatar", fr: "Avatar", es: "Avatar",
    pt: "Avatar", ru: "Аватар", ar: "الصورة الرمزية"
  },
  "featuresPage.dataModels.teamMember.properties.projects": {
    ko: "프로젝트", de: "Projekte", fr: "Projets", es: "Proyectos",
    pt: "Projetos", ru: "Проекты", ar: "المشاريع"
  },
  "featuresPage.dataModels.teamMember.properties.tasks": {
    ko: "작업", de: "Aufgaben", fr: "Tâches", es: "Tareas",
    pt: "Tarefas", ru: "Задачи", ar: "المهام"
  },
  "featuresPage.dataModels.milestone.title": {
    ko: "마일스톤", de: "Meilenstein", fr: "Jalon", es: "Hito",
    pt: "Marco", ru: "Веха", ar: "المعلم"
  },
  "featuresPage.dataModels.milestone.description": {
    ko: "프로젝트 마일스톤 및 산출물", de: "Projektmeilensteine und Deliverables", fr: "Jalons et livrables du projet", es: "Hitos y entregables del proyecto",
    pt: "Marcos e entregas do projeto", ru: "Вехи и результаты проекта", ar: "معالم المشروع والتسليمات"
  },
  "featuresPage.dataModels.milestone.properties.name": {
    ko: "이름", de: "Name", fr: "Nom", es: "Nombre",
    pt: "Nome", ru: "Название", ar: "الاسم"
  },
  "featuresPage.dataModels.milestone.properties.dueDate": {
    ko: "마감일", de: "Fälligkeitsdatum", fr: "Date d'échéance", es: "Fecha límite",
    pt: "Data de vencimento", ru: "Срок", ar: "تاريخ الاستحقاق"
  },
  "featuresPage.dataModels.milestone.properties.status": {
    ko: "상태", de: "Status", fr: "Statut", es: "Estado",
    pt: "Status", ru: "Статус", ar: "الحالة"
  },
  "featuresPage.dataModels.milestone.properties.budget": {
    ko: "예산", de: "Budget", fr: "Budget", es: "Presupuesto",
    pt: "Orçamento", ru: "Бюджет", ar: "الميزانية"
  },
  "featuresPage.dataModels.milestone.properties.tasks": {
    ko: "작업", de: "Aufgaben", fr: "Tâches", es: "Tareas",
    pt: "Tarefas", ru: "Задачи", ar: "المهام"
  },
  "featuresPage.dataModels.milestone.properties.progress": {
    ko: "진행률", de: "Fortschritt", fr: "Progression", es: "Progreso",
    pt: "Progresso", ru: "Прогресс", ar: "التقدم"
  },

  // ============= BIM FEATURES - PROJECTS =============
  "featuresPage.bimFeatures.projects.highlights.cloud.label": {
    ko: "클라우드 연결", de: "Cloud-Anbindung", fr: "Connexion Cloud", es: "Conexión a la nube",
    pt: "Conexão na nuvem", ru: "Облачное подключение", ar: "اتصال سحابي"
  },
  "featuresPage.bimFeatures.projects.highlights.cloud.desc": {
    ko: "웹 플랫폼과 실시간 동기화", de: "Echtzeit-Synchronisierung mit Web-Plattform", fr: "Synchronisation en temps réel avec plateforme web", es: "Sincronización en tiempo real con plataforma web",
    pt: "Sincronização em tempo real com plataforma web", ru: "Синхронизация в реальном времени с веб-платформой", ar: "المزامنة في الوقت الفعلي مع منصة الويب"
  },
  "featuresPage.bimFeatures.projects.highlights.team.label": {
    ko: "팀 관리", de: "Team-Management", fr: "Gestion d'équipe", es: "Gestión de equipo",
    pt: "Gerenciamento de equipe", ru: "Управление командой", ar: "إدارة الفريق"
  },
  "featuresPage.bimFeatures.projects.highlights.team.desc": {
    ko: "팀원 역할 및 권한 관리", de: "Rollen und Berechtigungen verwalten", fr: "Gérer les rôles et permissions", es: "Gestionar roles y permisos",
    pt: "Gerenciar funções e permissões", ru: "Управление ролями и разрешениями", ar: "إدارة الأدوار والصلاحيات"
  },
  "featuresPage.bimFeatures.projects.highlights.milestones.label": {
    ko: "마일스톤", de: "Meilensteine", fr: "Jalons", es: "Hitos",
    pt: "Marcos", ru: "Вехи", ar: "المعالم"
  },
  "featuresPage.bimFeatures.projects.highlights.milestones.desc": {
    ko: "마일스톤 및 예산 추적", de: "Meilensteine und Budgets verfolgen", fr: "Suivre jalons et budgets", es: "Seguir hitos y presupuestos",
    pt: "Acompanhar marcos e orçamentos", ru: "Отслеживание вех и бюджетов", ar: "تتبع المعالم والميزانيات"
  },
  "featuresPage.bimFeatures.projects.properties.name.name": {
    ko: "프로젝트 이름", de: "Projektname", fr: "Nom du projet", es: "Nombre del proyecto",
    pt: "Nome do projeto", ru: "Название проекта", ar: "اسم المشروع"
  },
  "featuresPage.bimFeatures.projects.properties.team.name": {
    ko: "팀 멤버", de: "Teammitglieder", fr: "Membres de l'équipe", es: "Miembros del equipo",
    pt: "Membros da equipe", ru: "Члены команды", ar: "أعضاء الفريق"
  },
  "featuresPage.bimFeatures.projects.properties.milestones.name": {
    ko: "마일스톤", de: "Meilensteine", fr: "Jalons", es: "Hitos",
    pt: "Marcos", ru: "Вехи", ar: "المعالم"
  },

  // ============= BIM FEATURES - TOOLS =============
  "featuresPage.bimFeatures.tools.properties.name.name": {
    ko: "도구 이름", de: "Tool-Name", fr: "Nom de l'outil", es: "Nombre de la herramienta",
    pt: "Nome da ferramenta", ru: "Название инструмента", ar: "اسم الأداة"
  },
  "featuresPage.bimFeatures.tools.properties.category.name": {
    ko: "카테고리", de: "Kategorie", fr: "Catégorie", es: "Categoría",
    pt: "Categoria", ru: "Категория", ar: "الفئة"
  },
  "featuresPage.bimFeatures.tools.properties.type.name": {
    ko: "유형", de: "Typ", fr: "Type", es: "Tipo",
    pt: "Tipo", ru: "Тип", ar: "النوع"
  },
  "featuresPage.bimFeatures.tools.properties.description.name": {
    ko: "설명", de: "Beschreibung", fr: "Description", es: "Descripción",
    pt: "Descrição", ru: "Описание", ar: "الوصف"
  },
  "featuresPage.bimFeatures.tools.properties.keywords.name": {
    ko: "키워드", de: "Schlüsselwörter", fr: "Mots-clés", es: "Palabras clave",
    pt: "Palavras-chave", ru: "Ключевые слова", ar: "الكلمات المفتاحية"
  },

  // ============= BIM FEATURES - DASHBOARD =============
  "featuresPage.bimFeatures.dashboard.highlights.stats.label": {
    ko: "프로젝트 통계", de: "Projektstatistiken", fr: "Statistiques du projet", es: "Estadísticas del proyecto",
    pt: "Estatísticas do projeto", ru: "Статистика проекта", ar: "إحصائيات المشروع"
  },
  "featuresPage.bimFeatures.dashboard.highlights.stats.desc": {
    ko: "작업 완료율 및 진행 상황", de: "Aufgabenabschlussraten und Fortschritt", fr: "Taux d'achèvement des tâches et progression", es: "Tasas de finalización de tareas y progreso",
    pt: "Taxas de conclusão de tarefas e progresso", ru: "Процент выполнения задач и прогресс", ar: "معدلات إنجاز المهام والتقدم"
  },
  "featuresPage.bimFeatures.dashboard.highlights.team.label": {
    ko: "팀 활동", de: "Team-Aktivität", fr: "Activité de l'équipe", es: "Actividad del equipo",
    pt: "Atividade da equipe", ru: "Активность команды", ar: "نشاط الفريق"
  },
  "featuresPage.bimFeatures.dashboard.highlights.team.desc": {
    ko: "최근 활동 및 업데이트", de: "Aktuelle Aktivitäten und Updates", fr: "Activités récentes et mises à jour", es: "Actividades recientes y actualizaciones",
    pt: "Atividades recentes e atualizações", ru: "Недавние действия и обновления", ar: "الأنشطة والتحديثات الأخيرة"
  },
  "featuresPage.bimFeatures.dashboard.highlights.timeline.label": {
    ko: "타임라인 개요", de: "Zeitachsen-Übersicht", fr: "Aperçu de la chronologie", es: "Resumen de línea de tiempo",
    pt: "Visão geral da linha do tempo", ru: "Обзор временной шкалы", ar: "نظرة عامة على الجدول الزمني"
  },
  "featuresPage.bimFeatures.dashboard.highlights.timeline.desc": {
    ko: "다가오는 마감일 및 마일스톤", de: "Anstehende Termine und Meilensteine", fr: "Échéances et jalons à venir", es: "Próximas fechas límite e hitos",
    pt: "Próximos prazos e marcos", ru: "Предстоящие сроки и вехи", ar: "المواعيد النهائية والمعالم القادمة"
  },

  // ============= BIM FEATURES - ACC =============
  "featuresPage.bimFeatures.acc.title": {
    ko: "ACC 통합", de: "ACC-Integration", fr: "Intégration ACC", es: "Integración ACC",
    pt: "Integração ACC", ru: "Интеграция ACC", ar: "تكامل ACC"
  },
  "featuresPage.bimFeatures.acc.subtitle": {
    ko: "Autodesk Construction Cloud 연결", de: "Autodesk Construction Cloud Verbindung", fr: "Connexion Autodesk Construction Cloud", es: "Conexión Autodesk Construction Cloud",
    pt: "Conexão Autodesk Construction Cloud", ru: "Подключение к Autodesk Construction Cloud", ar: "اتصال Autodesk Construction Cloud"
  },
  "featuresPage.bimFeatures.acc.highlights.hub.label": {
    ko: "허브 브라우저", de: "Hub-Browser", fr: "Navigateur Hub", es: "Navegador de Hub",
    pt: "Navegador de Hub", ru: "Обозреватель хаба", ar: "متصفح المحور"
  },
  "featuresPage.bimFeatures.acc.highlights.hub.desc": {
    ko: "ACC 프로젝트 및 모델 탐색", de: "ACC-Projekte und Modelle durchsuchen", fr: "Parcourir les projets et modèles ACC", es: "Explorar proyectos y modelos ACC",
    pt: "Navegar por projetos e modelos ACC", ru: "Просмотр проектов и моделей ACC", ar: "تصفح مشاريع ونماذج ACC"
  },
  "featuresPage.bimFeatures.acc.highlights.sync.label": {
    ko: "모델 동기화", de: "Modell-Sync", fr: "Sync de modèle", es: "Sincronización de modelo",
    pt: "Sincronização de modelo", ru: "Синхронизация моделей", ar: "مزامنة النموذج"
  },
  "featuresPage.bimFeatures.acc.highlights.sync.desc": {
    ko: "ACC에서 모델 다운로드 및 업로드", de: "Modelle von ACC herunterladen und hochladen", fr: "Télécharger et uploader des modèles depuis ACC", es: "Descargar y subir modelos desde ACC",
    pt: "Baixar e enviar modelos do ACC", ru: "Загрузка и выгрузка моделей из ACC", ar: "تحميل ورفع النماذج من ACC"
  },
  "featuresPage.bimFeatures.acc.highlights.clash.label": {
    ko: "충돌 가져오기", de: "Konflikt-Import", fr: "Import de conflits", es: "Importar conflictos",
    pt: "Importar conflitos", ru: "Импорт конфликтов", ar: "استيراد التضاربات"
  },
  "featuresPage.bimFeatures.acc.highlights.clash.desc": {
    ko: "ACC 충돌 관리에서 충돌 가져오기", de: "Konflikte aus ACC Clash Management importieren", fr: "Importer des conflits depuis ACC Clash Management", es: "Importar conflictos desde ACC Clash Management",
    pt: "Importar conflitos do ACC Clash Management", ru: "Импорт конфликтов из ACC Clash Management", ar: "استيراد التضاربات من ACC Clash Management"
  },

  // ============= COMPARISON =============
  "featuresPage.comparison.title": {
    ko: "기능 비교", de: "Funktionsvergleich", fr: "Comparaison des fonctionnalités", es: "Comparación de características",
    pt: "Comparação de recursos", ru: "Сравнение функций", ar: "مقارنة الميزات"
  },
  "featuresPage.comparison.feature": {
    ko: "기능", de: "Funktion", fr: "Fonctionnalité", es: "Característica",
    pt: "Recurso", ru: "Функция", ar: "الميزة"
  },
  "featuresPage.comparison.webPlatform": {
    ko: "웹 플랫폼", de: "Web-Plattform", fr: "Plateforme Web", es: "Plataforma Web",
    pt: "Plataforma Web", ru: "Веб-платформа", ar: "منصة الويب"
  },
  "featuresPage.comparison.bimPlugin": {
    ko: "BIM 플러그인", de: "BIM-Plugin", fr: "Plugin BIM", es: "Plugin BIM",
    pt: "Plugin BIM", ru: "BIM-плагин", ar: "ملحق BIM"
  },
  "featuresPage.comparison.features.tasks": {
    ko: "작업 관리", de: "Aufgabenverwaltung", fr: "Gestion des tâches", es: "Gestión de tareas",
    pt: "Gerenciamento de tarefas", ru: "Управление задачами", ar: "إدارة المهام"
  },
  "featuresPage.comparison.features.viewer": {
    ko: "3D 뷰어", de: "3D-Viewer", fr: "Visionneuse 3D", es: "Visor 3D",
    pt: "Visualizador 3D", ru: "3D-просмотрщик", ar: "عارض ثلاثي الأبعاد"
  },
  "featuresPage.comparison.features.ai": {
    ko: "AI 어시스턴트", de: "KI-Assistent", fr: "Assistant IA", es: "Asistente IA",
    pt: "Assistente IA", ru: "ИИ-ассистент", ar: "مساعد الذكاء الاصطناعي"
  },
  "featuresPage.comparison.features.timeline": {
    ko: "타임라인", de: "Zeitachse", fr: "Chronologie", es: "Línea de tiempo",
    pt: "Linha do tempo", ru: "Временная шкала", ar: "الجدول الزمني"
  },
  "featuresPage.comparison.features.coordination": {
    ko: "코디네이션", de: "Koordination", fr: "Coordination", es: "Coordinación",
    pt: "Coordenação", ru: "Координация", ar: "التنسيق"
  },
  "featuresPage.comparison.features.sheets": {
    ko: "시트/도면", de: "Pläne/Zeichnungen", fr: "Plans/Dessins", es: "Planos/Dibujos",
    pt: "Folhas/Desenhos", ru: "Листы/Чертежи", ar: "الأوراق/الرسومات"
  },
  "featuresPage.comparison.features.reports": {
    ko: "리포트", de: "Berichte", fr: "Rapports", es: "Informes",
    pt: "Relatórios", ru: "Отчёты", ar: "التقارير"
  },
  "featuresPage.comparison.features.tools": {
    ko: "도구 라이브러리", de: "Tool-Bibliothek", fr: "Bibliothèque d'outils", es: "Biblioteca de herramientas",
    pt: "Biblioteca de ferramentas", ru: "Библиотека инструментов", ar: "مكتبة الأدوات"
  },
  "featuresPage.comparison.features.acc": {
    ko: "ACC 통합", de: "ACC-Integration", fr: "Intégration ACC", es: "Integración ACC",
    pt: "Integração ACC", ru: "Интеграция ACC", ar: "تكامل ACC"
  },

  // ============= PROPERTY SYSTEM =============
  "featuresPage.propertySystem.badge": {
    ko: "커스텀", de: "Benutzerdefiniert", fr: "Personnalisé", es: "Personalizado",
    pt: "Personalizado", ru: "Пользовательский", ar: "مخصص"
  },
  "featuresPage.propertySystem.categories.integration": {
    ko: "통합", de: "Integration", fr: "Intégration", es: "Integración",
    pt: "Integração", ru: "Интеграция", ar: "التكامل"
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
const languageFiles = ['ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('='.repeat(80));
console.log('APPLYING PART 7 TRANSLATIONS (DataModels, BIM Features, Comparison)');
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
console.log('PART 7 TRANSLATIONS APPLIED');
console.log('='.repeat(80));
