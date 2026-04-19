const fs = require('fs');
const path = require('path');

// Part 8: More FeaturesPage - BIM Features details, Reports, etc.
const translations = {
  // ============= BIM FEATURES - TASKS (more details) =============
  "featuresPage.bimFeatures.tasks.highlights.elementTracking.label": {
    ko: "요소 추적", de: "Element-Tracking", fr: "Suivi des éléments", es: "Seguimiento de elementos",
    pt: "Rastreamento de elementos", ru: "Отслеживание элементов", ar: "تتبع العناصر"
  },
  "featuresPage.bimFeatures.tasks.highlights.timeTracking.label": {
    ko: "시간 추적", de: "Zeiterfassung", fr: "Suivi du temps", es: "Seguimiento del tiempo",
    pt: "Acompanhamento de tempo", ru: "Учёт времени", ar: "تتبع الوقت"
  },
  "featuresPage.bimFeatures.tasks.highlights.timeTracking.desc": {
    ko: "내장 타이머 및 수동 시간 입력", de: "Eingebauter Timer und manuelle Zeiteingabe", fr: "Minuterie intégrée et saisie manuelle du temps", es: "Temporizador integrado y entrada manual de tiempo",
    pt: "Temporizador integrado e entrada manual de tempo", ru: "Встроенный таймер и ручной ввод времени", ar: "مؤقت مدمج وإدخال الوقت يدوياً"
  },
  "featuresPage.bimFeatures.tasks.highlights.cloudSync.label": {
    ko: "클라우드 동기화", de: "Cloud-Sync", fr: "Sync Cloud", es: "Sincronización en la nube",
    pt: "Sincronização na nuvem", ru: "Облачная синхронизация", ar: "المزامنة السحابية"
  },
  "featuresPage.bimFeatures.tasks.highlights.cloudSync.desc": {
    ko: "웹 플랫폼과 동기화", de: "Mit Web-Plattform synchronisieren", fr: "Synchroniser avec la plateforme web", es: "Sincronizar con plataforma web",
    pt: "Sincronizar com plataforma web", ru: "Синхронизация с веб-платформой", ar: "المزامنة مع منصة الويب"
  },
  "featuresPage.bimFeatures.tasks.properties.trackedTime.name": {
    ko: "추적 시간", de: "Erfasste Zeit", fr: "Temps suivi", es: "Tiempo registrado",
    pt: "Tempo rastreado", ru: "Отслеживаемое время", ar: "الوقت المتتبع"
  },
  "featuresPage.bimFeatures.tasks.properties.trackedTime.type": {
    ko: "시간", de: "Zeit", fr: "Temps", es: "Tiempo",
    pt: "Tempo", ru: "Время", ar: "الوقت"
  },
  "featuresPage.bimFeatures.tasks.properties.trackedTime.desc": {
    ko: "타이머 기반 시간 추적", de: "Timer-basierte Zeiterfassung", fr: "Suivi du temps basé sur minuterie", es: "Seguimiento de tiempo basado en temporizador",
    pt: "Rastreamento de tempo baseado em temporizador", ru: "Отслеживание времени с помощью таймера", ar: "تتبع الوقت القائم على المؤقت"
  },
  "featuresPage.bimFeatures.tasks.properties.manualTime.name": {
    ko: "수동 시간", de: "Manuelle Zeit", fr: "Temps manuel", es: "Tiempo manual",
    pt: "Tempo manual", ru: "Ручное время", ar: "الوقت اليدوي"
  },
  "featuresPage.bimFeatures.tasks.properties.manualTime.type": {
    ko: "시간", de: "Zeit", fr: "Temps", es: "Tiempo",
    pt: "Tempo", ru: "Время", ar: "الوقت"
  },
  "featuresPage.bimFeatures.tasks.properties.manualTime.desc": {
    ko: "수동 시간 항목", de: "Manuelle Zeiteinträge", fr: "Entrées de temps manuelles", es: "Entradas de tiempo manuales",
    pt: "Entradas de tempo manuais", ru: "Ручные записи времени", ar: "إدخالات الوقت اليدوية"
  },
  "featuresPage.bimFeatures.tasks.properties.totalTime.name": {
    ko: "총 시간", de: "Gesamtzeit", fr: "Temps total", es: "Tiempo total",
    pt: "Tempo total", ru: "Общее время", ar: "الوقت الإجمالي"
  },
  "featuresPage.bimFeatures.tasks.properties.totalTime.type": {
    ko: "계산됨", de: "Berechnet", fr: "Calculé", es: "Calculado",
    pt: "Calculado", ru: "Вычисляемое", ar: "محسوب"
  },
  "featuresPage.bimFeatures.tasks.properties.totalTime.desc": {
    ko: "추적 + 수동 시간 합계", de: "Summe aus erfasster + manueller Zeit", fr: "Somme du temps suivi + manuel", es: "Suma de tiempo registrado + manual",
    pt: "Soma de tempo rastreado + manual", ru: "Сумма отслеживаемого + ручного времени", ar: "مجموع الوقت المتتبع + اليدوي"
  },

  // ============= BIM FEATURES - ASSISTANT (more details) =============
  "featuresPage.bimFeatures.assistant.highlights.naturalLanguage.label": {
    ko: "자연어", de: "Natürliche Sprache", fr: "Langage naturel", es: "Lenguaje natural",
    pt: "Linguagem natural", ru: "Естественный язык", ar: "اللغة الطبيعية"
  },
  "featuresPage.bimFeatures.assistant.highlights.naturalLanguage.desc": {
    ko: "일상 언어로 작업 설명", de: "Aufgaben in einfacher Sprache beschreiben", fr: "Décrire les tâches en langage simple", es: "Describir tareas en lenguaje simple",
    pt: "Descrever tarefas em linguagem simples", ru: "Описывайте задачи простым языком", ar: "وصف المهام بلغة بسيطة"
  },
  "featuresPage.bimFeatures.assistant.highlights.voiceControl.label": {
    ko: "음성 제어", de: "Sprachsteuerung", fr: "Contrôle vocal", es: "Control por voz",
    pt: "Controle por voz", ru: "Голосовое управление", ar: "التحكم الصوتي"
  },
  "featuresPage.bimFeatures.assistant.highlights.voiceControl.desc": {
    ko: "핸즈프리 음성 명령", de: "Freihändige Sprachbefehle", fr: "Commandes vocales mains libres", es: "Comandos de voz manos libres",
    pt: "Comandos de voz sem usar as mãos", ru: "Голосовые команды без рук", ar: "أوامر صوتية بدون استخدام اليدين"
  },
  "featuresPage.bimFeatures.assistant.highlights.codeExecution.label": {
    ko: "코드 실행", de: "Code-Ausführung", fr: "Exécution de code", es: "Ejecución de código",
    pt: "Execução de código", ru: "Выполнение кода", ar: "تنفيذ الكود"
  },
  "featuresPage.bimFeatures.assistant.highlights.codeExecution.desc": {
    ko: "Python 및 C# 스크립트 생성 및 실행", de: "Python- und C#-Skripte generieren und ausführen", fr: "Générer et exécuter des scripts Python et C#", es: "Generar y ejecutar scripts Python y C#",
    pt: "Gerar e executar scripts Python e C#", ru: "Генерация и выполнение скриптов Python и C#", ar: "إنشاء وتنفيذ نصوص Python و C#"
  },
  "featuresPage.bimFeatures.assistant.highlights.smartTools.label": {
    ko: "스마트 도구 매칭", de: "Smart Tool-Matching", fr: "Correspondance intelligente des outils", es: "Coincidencia inteligente de herramientas",
    pt: "Correspondência inteligente de ferramentas", ru: "Умный подбор инструментов", ar: "مطابقة الأدوات الذكية"
  },
  "featuresPage.bimFeatures.assistant.highlights.smartTools.desc": {
    ko: "AI가 라이브러리에서 관련 도구 찾기", de: "KI findet relevante Tools aus Ihrer Bibliothek", fr: "L'IA trouve les outils pertinents dans votre bibliothèque", es: "La IA encuentra herramientas relevantes de su biblioteca",
    pt: "A IA encontra ferramentas relevantes da sua biblioteca", ru: "ИИ находит подходящие инструменты из вашей библиотеки", ar: "يجد الذكاء الاصطناعي الأدوات ذات الصلة من مكتبتك"
  },
  "featuresPage.bimFeatures.assistant.properties.prompt.name": {
    ko: "프롬프트", de: "Prompt", fr: "Invite", es: "Prompt",
    pt: "Prompt", ru: "Запрос", ar: "المطالبة"
  },
  "featuresPage.bimFeatures.assistant.properties.prompt.type": {
    ko: "텍스트", de: "Text", fr: "Texte", es: "Texto",
    pt: "Texto", ru: "Текст", ar: "نص"
  },
  "featuresPage.bimFeatures.assistant.properties.prompt.desc": {
    ko: "AI에 대한 사용자 입력", de: "Benutzereingabe an die KI", fr: "Entrée utilisateur vers l'IA", es: "Entrada del usuario a la IA",
    pt: "Entrada do usuário para a IA", ru: "Ввод пользователя для ИИ", ar: "إدخال المستخدم للذكاء الاصطناعي"
  },
  "featuresPage.bimFeatures.assistant.properties.response.name": {
    ko: "응답", de: "Antwort", fr: "Réponse", es: "Respuesta",
    pt: "Resposta", ru: "Ответ", ar: "الاستجابة"
  },
  "featuresPage.bimFeatures.assistant.properties.response.type": {
    ko: "텍스트", de: "Text", fr: "Texte", es: "Texto",
    pt: "Texto", ru: "Текст", ar: "نص"
  },
  "featuresPage.bimFeatures.assistant.properties.response.desc": {
    ko: "AI 생성 응답", de: "KI-generierte Antwort", fr: "Réponse générée par l'IA", es: "Respuesta generada por IA",
    pt: "Resposta gerada por IA", ru: "Ответ, сгенерированный ИИ", ar: "استجابة مُنشأة بواسطة الذكاء الاصطناعي"
  },
  "featuresPage.bimFeatures.assistant.properties.code.name": {
    ko: "생성된 코드", de: "Generierter Code", fr: "Code généré", es: "Código generado",
    pt: "Código gerado", ru: "Сгенерированный код", ar: "الكود المُنشأ"
  },
  "featuresPage.bimFeatures.assistant.properties.code.type": {
    ko: "코드", de: "Code", fr: "Code", es: "Código",
    pt: "Código", ru: "Код", ar: "كود"
  },
  "featuresPage.bimFeatures.assistant.properties.code.desc": {
    ko: "실행 가능한 Python/C# 코드", de: "Ausführbarer Python/C#-Code", fr: "Code Python/C# exécutable", es: "Código Python/C# ejecutable",
    pt: "Código Python/C# executável", ru: "Исполняемый код Python/C#", ar: "كود Python/C# قابل للتنفيذ"
  },

  // ============= WEB FEATURES - REPORTS (more details) =============
  "featuresPage.webFeatures.reports.properties.utilization.desc": {
    ko: "계산된 효율성", de: "Berechnete Effizienz", fr: "Efficacité calculée", es: "Eficiencia calculada",
    pt: "Eficiência calculada", ru: "Рассчитанная эффективность", ar: "الكفاءة المحسوبة"
  },
  "featuresPage.webFeatures.reports.properties.rollup.name": {
    ko: "롤업", de: "Rollup", fr: "Rollup", es: "Rollup",
    pt: "Rollup", ru: "Сводка", ar: "تجميع"
  },
  "featuresPage.webFeatures.reports.properties.rollup.type": {
    ko: "고급", de: "Erweitert", fr: "Avancé", es: "Avanzado",
    pt: "Avançado", ru: "Расширенный", ar: "متقدم"
  },
  "featuresPage.webFeatures.reports.properties.rollup.desc": {
    ko: "집계된 지표", de: "Aggregierte Metriken", fr: "Métriques agrégées", es: "Métricas agregadas",
    pt: "Métricas agregadas", ru: "Агрегированные метрики", ar: "مقاييس مجمعة"
  },

  // ============= BIM FEATURES - TOOLS (more details) =============
  "featuresPage.bimFeatures.tools.highlights.categories.label": {
    ko: "카테고리", de: "Kategorien", fr: "Catégories", es: "Categorías",
    pt: "Categorias", ru: "Категории", ar: "الفئات"
  },
  "featuresPage.bimFeatures.tools.highlights.categories.desc": {
    ko: "도구를 폴더로 정리", de: "Tools in Ordnern organisieren", fr: "Organiser les outils en dossiers", es: "Organizar herramientas en carpetas",
    pt: "Organizar ferramentas em pastas", ru: "Организуйте инструменты в папки", ar: "تنظيم الأدوات في مجلدات"
  },
  "featuresPage.bimFeatures.tools.highlights.sharing.label": {
    ko: "팀 공유", de: "Team-Sharing", fr: "Partage d'équipe", es: "Compartir con equipo",
    pt: "Compartilhamento de equipe", ru: "Общий доступ для команды", ar: "المشاركة مع الفريق"
  },
  "featuresPage.bimFeatures.tools.highlights.sharing.desc": {
    ko: "팀원과 도구 공유", de: "Tools mit Teammitgliedern teilen", fr: "Partager des outils avec les membres de l'équipe", es: "Compartir herramientas con miembros del equipo",
    pt: "Compartilhar ferramentas com membros da equipe", ru: "Делитесь инструментами с членами команды", ar: "مشاركة الأدوات مع أعضاء الفريق"
  },
  "featuresPage.bimFeatures.tools.properties.script.name": {
    ko: "스크립트", de: "Skript", fr: "Script", es: "Script",
    pt: "Script", ru: "Скрипт", ar: "نص برمجي"
  },
  "featuresPage.bimFeatures.tools.properties.script.type": {
    ko: "코드", de: "Code", fr: "Code", es: "Código",
    pt: "Código", ru: "Код", ar: "كود"
  },
  "featuresPage.bimFeatures.tools.properties.script.desc": {
    ko: "Python 또는 C# 소스 코드", de: "Python- oder C#-Quellcode", fr: "Code source Python ou C#", es: "Código fuente Python o C#",
    pt: "Código-fonte Python ou C#", ru: "Исходный код Python или C#", ar: "كود المصدر Python أو C#"
  },
  "featuresPage.bimFeatures.tools.properties.dll.name": {
    ko: "DLL 경로", de: "DLL-Pfad", fr: "Chemin DLL", es: "Ruta DLL",
    pt: "Caminho DLL", ru: "Путь к DLL", ar: "مسار DLL"
  },
  "featuresPage.bimFeatures.tools.properties.dll.type": {
    ko: "파일", de: "Datei", fr: "Fichier", es: "Archivo",
    pt: "Arquivo", ru: "Файл", ar: "ملف"
  },
  "featuresPage.bimFeatures.tools.properties.dll.desc": {
    ko: "컴파일된 플러그인 위치", de: "Speicherort des kompilierten Plugins", fr: "Emplacement du plugin compilé", es: "Ubicación del plugin compilado",
    pt: "Localização do plugin compilado", ru: "Расположение скомпилированного плагина", ar: "موقع الملحق المترجم"
  },

  // ============= BIM FEATURES - PROJECTS (more details) =============
  "featuresPage.bimFeatures.projects.properties.status.name": {
    ko: "상태", de: "Status", fr: "Statut", es: "Estado",
    pt: "Status", ru: "Статус", ar: "الحالة"
  },
  "featuresPage.bimFeatures.projects.properties.status.type": {
    ko: "선택", de: "Auswahl", fr: "Sélection", es: "Selección",
    pt: "Seleção", ru: "Выбор", ar: "اختيار"
  },
  "featuresPage.bimFeatures.projects.properties.status.desc": {
    ko: "활성, 완료, 보관됨", de: "Aktiv, Abgeschlossen, Archiviert", fr: "Actif, Terminé, Archivé", es: "Activo, Completado, Archivado",
    pt: "Ativo, Concluído, Arquivado", ru: "Активный, Завершённый, Архивный", ar: "نشط، مكتمل، مؤرشف"
  },
  "featuresPage.bimFeatures.projects.properties.budget.name": {
    ko: "예산", de: "Budget", fr: "Budget", es: "Presupuesto",
    pt: "Orçamento", ru: "Бюджет", ar: "الميزانية"
  },
  "featuresPage.bimFeatures.projects.properties.budget.type": {
    ko: "숫자", de: "Zahl", fr: "Nombre", es: "Número",
    pt: "Número", ru: "Число", ar: "رقم"
  },
  "featuresPage.bimFeatures.projects.properties.budget.desc": {
    ko: "프로젝트 예산 금액", de: "Projektbudgetbetrag", fr: "Montant du budget du projet", es: "Monto del presupuesto del proyecto",
    pt: "Valor do orçamento do projeto", ru: "Сумма бюджета проекта", ar: "مبلغ ميزانية المشروع"
  },
  "featuresPage.bimFeatures.projects.properties.startDate.name": {
    ko: "시작일", de: "Startdatum", fr: "Date de début", es: "Fecha de inicio",
    pt: "Data de início", ru: "Дата начала", ar: "تاريخ البداية"
  },
  "featuresPage.bimFeatures.projects.properties.startDate.type": {
    ko: "날짜", de: "Datum", fr: "Date", es: "Fecha",
    pt: "Data", ru: "Дата", ar: "تاريخ"
  },
  "featuresPage.bimFeatures.projects.properties.endDate.name": {
    ko: "종료일", de: "Enddatum", fr: "Date de fin", es: "Fecha de fin",
    pt: "Data de término", ru: "Дата окончания", ar: "تاريخ النهاية"
  },
  "featuresPage.bimFeatures.projects.properties.endDate.type": {
    ko: "날짜", de: "Datum", fr: "Date", es: "Fecha",
    pt: "Data", ru: "Дата", ar: "تاريخ"
  },

  // ============= BIM FEATURES - DASHBOARD (more details) =============
  "featuresPage.bimFeatures.dashboard.highlights.widgets.label": {
    ko: "위젯", de: "Widgets", fr: "Widgets", es: "Widgets",
    pt: "Widgets", ru: "Виджеты", ar: "الأدوات"
  },
  "featuresPage.bimFeatures.dashboard.highlights.widgets.desc": {
    ko: "사용자 정의 가능한 대시보드 위젯", de: "Anpassbare Dashboard-Widgets", fr: "Widgets de tableau de bord personnalisables", es: "Widgets de panel personalizables",
    pt: "Widgets de painel personalizáveis", ru: "Настраиваемые виджеты панели управления", ar: "أدوات لوحة المعلومات القابلة للتخصيص"
  },
  "featuresPage.bimFeatures.dashboard.properties.taskStats.name": {
    ko: "작업 통계", de: "Aufgabenstatistiken", fr: "Statistiques des tâches", es: "Estadísticas de tareas",
    pt: "Estatísticas de tarefas", ru: "Статистика задач", ar: "إحصائيات المهام"
  },
  "featuresPage.bimFeatures.dashboard.properties.taskStats.type": {
    ko: "차트", de: "Diagramm", fr: "Graphique", es: "Gráfico",
    pt: "Gráfico", ru: "Диаграмма", ar: "مخطط"
  },
  "featuresPage.bimFeatures.dashboard.properties.taskStats.desc": {
    ko: "작업 완료 차트", de: "Aufgabenabschluss-Diagramm", fr: "Graphique d'achèvement des tâches", es: "Gráfico de finalización de tareas",
    pt: "Gráfico de conclusão de tarefas", ru: "Диаграмма выполнения задач", ar: "مخطط إنجاز المهام"
  },
  "featuresPage.bimFeatures.dashboard.properties.recentActivity.name": {
    ko: "최근 활동", de: "Aktuelle Aktivitäten", fr: "Activité récente", es: "Actividad reciente",
    pt: "Atividade recente", ru: "Недавняя активность", ar: "النشاط الأخير"
  },
  "featuresPage.bimFeatures.dashboard.properties.recentActivity.type": {
    ko: "목록", de: "Liste", fr: "Liste", es: "Lista",
    pt: "Lista", ru: "Список", ar: "قائمة"
  },
  "featuresPage.bimFeatures.dashboard.properties.recentActivity.desc": {
    ko: "최근 팀 업데이트", de: "Aktuelle Team-Updates", fr: "Mises à jour récentes de l'équipe", es: "Actualizaciones recientes del equipo",
    pt: "Atualizações recentes da equipe", ru: "Последние обновления команды", ar: "تحديثات الفريق الأخيرة"
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
console.log('APPLYING PART 8 TRANSLATIONS (BIM Features details)');
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
console.log('PART 8 TRANSLATIONS APPLIED');
console.log('='.repeat(80));
