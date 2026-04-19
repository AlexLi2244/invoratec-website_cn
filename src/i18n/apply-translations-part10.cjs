const fs = require('fs');
const path = require('path');

// Part 10: Final remaining translations - Assistant properties, more docs, etc.
const translations = {
  // ============= BIM FEATURES - ASSISTANT PROPERTIES =============
  "featuresPage.bimFeatures.assistant.highlights.toolMatching.label": {
    ko: "도구 매칭", de: "Tool-Matching", fr: "Correspondance d'outils", es: "Coincidencia de herramientas",
    pt: "Correspondência de ferramentas", ru: "Подбор инструментов", ar: "مطابقة الأدوات"
  },
  "featuresPage.bimFeatures.assistant.highlights.toolMatching.desc": {
    ko: "AI가 요청에 맞는 도구 매칭", de: "KI ordnet Ihre Anfrage Tools zu", fr: "L'IA fait correspondre votre demande aux outils", es: "La IA coincide su solicitud con herramientas",
    pt: "A IA combina sua solicitação com ferramentas", ru: "ИИ подбирает инструменты под ваш запрос", ar: "يطابق الذكاء الاصطناعي طلبك مع الأدوات"
  },
  "featuresPage.bimFeatures.assistant.properties.chat.name": {
    ko: "채팅 인터페이스", de: "Chat-Oberfläche", fr: "Interface de chat", es: "Interfaz de chat",
    pt: "Interface de chat", ru: "Интерфейс чата", ar: "واجهة الدردشة"
  },
  "featuresPage.bimFeatures.assistant.properties.chat.type": {
    ko: "UI", de: "UI", fr: "UI", es: "UI",
    pt: "UI", ru: "UI", ar: "واجهة المستخدم"
  },
  "featuresPage.bimFeatures.assistant.properties.chat.desc": {
    ko: "대화형 AI 상호작용", de: "Konversationelle KI-Interaktion", fr: "Interaction IA conversationnelle", es: "Interacción de IA conversacional",
    pt: "Interação de IA conversacional", ru: "Диалоговое взаимодействие с ИИ", ar: "تفاعل الذكاء الاصطناعي المحادثة"
  },
  "featuresPage.bimFeatures.assistant.properties.script.name": {
    ko: "스크립트 실행", de: "Skript-Ausführung", fr: "Exécution de script", es: "Ejecución de script",
    pt: "Execução de script", ru: "Выполнение скриптов", ar: "تنفيذ النص البرمجي"
  },
  "featuresPage.bimFeatures.assistant.properties.script.type": {
    ko: "기능", de: "Funktion", fr: "Fonctionnalité", es: "Característica",
    pt: "Recurso", ru: "Функция", ar: "ميزة"
  },
  "featuresPage.bimFeatures.assistant.properties.script.desc": {
    ko: "Python/C# 코드 실행", de: "Python/C#-Code ausführen", fr: "Exécuter du code Python/C#", es: "Ejecutar código Python/C#",
    pt: "Executar código Python/C#", ru: "Выполнение кода Python/C#", ar: "تنفيذ كود Python/C#"
  },
  "featuresPage.bimFeatures.assistant.properties.recommendations.name": {
    ko: "도구 추천", de: "Tool-Empfehlungen", fr: "Recommandations d'outils", es: "Recomendaciones de herramientas",
    pt: "Recomendações de ferramentas", ru: "Рекомендации инструментов", ar: "توصيات الأدوات"
  },
  "featuresPage.bimFeatures.assistant.properties.recommendations.type": {
    ko: "AI", de: "KI", fr: "IA", es: "IA",
    pt: "IA", ru: "ИИ", ar: "ذكاء اصطناعي"
  },
  "featuresPage.bimFeatures.assistant.properties.recommendations.desc": {
    ko: "스마트 도구 제안", de: "Intelligente Tool-Vorschläge", fr: "Suggestions d'outils intelligentes", es: "Sugerencias de herramientas inteligentes",
    pt: "Sugestões inteligentes de ferramentas", ru: "Умные предложения инструментов", ar: "اقتراحات أدوات ذكية"
  },
  "featuresPage.bimFeatures.assistant.properties.history.name": {
    ko: "히스토리", de: "Verlauf", fr: "Historique", es: "Historial",
    pt: "Histórico", ru: "История", ar: "السجل"
  },
  "featuresPage.bimFeatures.assistant.properties.history.type": {
    ko: "기능", de: "Funktion", fr: "Fonctionnalité", es: "Característica",
    pt: "Recurso", ru: "Функция", ar: "ميزة"
  },
  "featuresPage.bimFeatures.assistant.properties.history.desc": {
    ko: "대화 히스토리 및 롤백", de: "Konversationsverlauf und Rollback", fr: "Historique de conversation et annulation", es: "Historial de conversación y reversión",
    pt: "Histórico de conversa e reversão", ru: "История разговоров и откат", ar: "سجل المحادثة والتراجع"
  },

  // ============= MORE DOCS - REVIT TASKS =============
  "docs.content.revitTasks.overview": {
    ko: "개요", de: "Überblick", fr: "Aperçu", es: "Descripción general",
    pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },
  "docs.content.revitTasks.overviewDesc": {
    ko: "Revit에서 직접 작업을 관리하고, Revit 요소에 연결하고, 시간을 추적하고, 웹 플랫폼과 동기화합니다.",
    de: "Verwalten Sie Aufgaben direkt in Revit, verknüpfen Sie sie mit Revit-Elementen, erfassen Sie Zeit und synchronisieren Sie mit der Web-Plattform.",
    fr: "Gérez les tâches directement dans Revit, liez-les aux éléments Revit, suivez le temps et synchronisez avec la plateforme web.",
    es: "Gestione tareas directamente en Revit, vincúlelas a elementos de Revit, registre tiempo y sincronice con la plataforma web.",
    pt: "Gerencie tarefas diretamente no Revit, vincule a elementos do Revit, rastreie tempo e sincronize com a plataforma web.",
    ru: "Управляйте задачами прямо в Revit, связывайте их с элементами Revit, отслеживайте время и синхронизируйте с веб-платформой.",
    ar: "قم بإدارة المهام مباشرة في Revit، واربطها بعناصر Revit، وتتبع الوقت، وقم بالمزامنة مع منصة الويب."
  },
  "docs.content.revitTasks.elementTracking": {
    ko: "요소 추적", de: "Element-Tracking", fr: "Suivi des éléments", es: "Seguimiento de elementos",
    pt: "Rastreamento de elementos", ru: "Отслеживание элементов", ar: "تتبع العناصر"
  },
  "docs.content.revitTasks.elementTrackingDesc": {
    ko: "Revit 요소를 작업에 연결하여 모델 컨텍스트를 유지합니다. 요소 링크를 클릭하면 해당 요소로 바로 이동합니다.",
    de: "Verknüpfen Sie Revit-Elemente mit Aufgaben, um den Modellkontext zu erhalten. Klicken Sie auf Element-Links, um direkt zu diesem Element zu navigieren.",
    fr: "Liez les éléments Revit aux tâches pour maintenir le contexte du modèle. Cliquez sur les liens d'éléments pour naviguer directement vers cet élément.",
    es: "Vincule elementos de Revit a tareas para mantener el contexto del modelo. Haga clic en los enlaces de elementos para navegar directamente a ese elemento.",
    pt: "Vincule elementos do Revit a tarefas para manter o contexto do modelo. Clique nos links de elementos para navegar diretamente para esse elemento.",
    ru: "Связывайте элементы Revit с задачами для сохранения контекста модели. Нажмите на ссылку элемента, чтобы перейти прямо к нему.",
    ar: "اربط عناصر Revit بالمهام للحفاظ على سياق النموذج. انقر على روابط العناصر للانتقال مباشرة إلى ذلك العنصر."
  },
  "docs.content.revitTasks.trackStep1": {
    ko: "모델에서 요소 선택", de: "Element im Modell auswählen", fr: "Sélectionner un élément dans le modèle", es: "Seleccionar elemento en el modelo",
    pt: "Selecionar elemento no modelo", ru: "Выберите элемент в модели", ar: "حدد العنصر في النموذج"
  },
  "docs.content.revitTasks.trackStep2": {
    ko: "작업 패널에서 '작업에 연결' 클릭", de: "Auf 'Mit Aufgabe verknüpfen' im Aufgaben-Panel klicken", fr: "Cliquer sur 'Lier à la tâche' dans le panneau des tâches", es: "Hacer clic en 'Vincular a tarea' en el panel de tareas",
    pt: "Clicar em 'Vincular à tarefa' no painel de tarefas", ru: "Нажмите 'Связать с задачей' на панели задач", ar: "انقر على 'ربط بالمهمة' في لوحة المهام"
  },
  "docs.content.revitTasks.trackStep3": {
    ko: "언제든지 해당 요소로 확대하려면 요소 링크 클릭", de: "Auf den Element-Link klicken, um jederzeit zu diesem Element zu zoomen", fr: "Cliquer sur le lien de l'élément pour zoomer vers cet élément à tout moment", es: "Hacer clic en el enlace del elemento para hacer zoom a ese elemento en cualquier momento",
    pt: "Clique no link do elemento para ampliar esse elemento a qualquer momento", ru: "Нажмите на ссылку элемента, чтобы приблизить к нему в любое время", ar: "انقر على رابط العنصر للتكبير على ذلك العنصر في أي وقت"
  },
  "docs.content.revitTasks.timeTracking": {
    ko: "시간 추적", de: "Zeiterfassung", fr: "Suivi du temps", es: "Seguimiento del tiempo",
    pt: "Acompanhamento de tempo", ru: "Учёт времени", ar: "تتبع الوقت"
  },
  "docs.content.revitTasks.timeTrackingDesc": {
    ko: "내장 타이머로 작업에 소요된 시간을 추적합니다. 작업 시작 시 타이머를 시작하면 자동으로 시간이 기록됩니다. 오프라인 작업에 대한 수동 시간 항목도 추가할 수 있습니다.",
    de: "Erfassen Sie die für Aufgaben aufgewendete Zeit mit dem eingebauten Timer. Starten Sie den Timer, wenn Sie mit der Arbeit beginnen, und die Zeit wird automatisch protokolliert. Sie können auch manuelle Zeiteinträge für Offline-Arbeit hinzufügen.",
    fr: "Suivez le temps passé sur les tâches avec la minuterie intégrée. Démarrez la minuterie lorsque vous commencez à travailler et le temps est enregistré automatiquement. Vous pouvez également ajouter des entrées de temps manuelles pour le travail hors ligne.",
    es: "Rastree el tiempo dedicado a las tareas con el temporizador integrado. Inicie el temporizador cuando comience a trabajar y el tiempo se registra automáticamente. También puede agregar entradas de tiempo manuales para trabajo fuera de línea.",
    pt: "Acompanhe o tempo gasto em tarefas com o temporizador integrado. Inicie o temporizador quando começar a trabalhar e o tempo é registrado automaticamente. Você também pode adicionar entradas de tempo manuais para trabalho offline.",
    ru: "Отслеживайте время, потраченное на задачи, с помощью встроенного таймера. Запустите таймер, когда начнёте работу, и время будет записываться автоматически. Вы также можете добавлять ручные записи времени для офлайн-работы.",
    ar: "تتبع الوقت المستغرق في المهام باستخدام المؤقت المدمج. ابدأ المؤقت عند بدء العمل وسيتم تسجيل الوقت تلقائياً. يمكنك أيضاً إضافة إدخالات وقت يدوية للعمل دون اتصال."
  },
  "docs.content.revitTasks.cloudSync": {
    ko: "클라우드 동기화", de: "Cloud-Synchronisierung", fr: "Synchronisation cloud", es: "Sincronización en la nube",
    pt: "Sincronização na nuvem", ru: "Облачная синхронизация", ar: "المزامنة السحابية"
  },
  "docs.content.revitTasks.cloudSyncDesc": {
    ko: "모든 변경 사항이 클라우드와 자동으로 동기화됩니다. 웹 플랫폼의 팀원은 실시간으로 업데이트를 볼 수 있으며, 당신도 그들의 업데이트를 볼 수 있습니다.",
    de: "Alle Änderungen werden automatisch mit der Cloud synchronisiert. Teammitglieder auf der Web-Plattform sehen Ihre Updates in Echtzeit, und Sie sehen deren.",
    fr: "Toutes les modifications sont automatiquement synchronisées avec le cloud. Les membres de l'équipe sur la plateforme web voient vos mises à jour en temps réel, et vous voyez les leurs.",
    es: "Todos los cambios se sincronizan automáticamente con la nube. Los miembros del equipo en la plataforma web ven sus actualizaciones en tiempo real, y usted ve las de ellos.",
    pt: "Todas as alterações são sincronizadas automaticamente com a nuvem. Os membros da equipe na plataforma web veem suas atualizações em tempo real, e você vê as deles.",
    ru: "Все изменения автоматически синхронизируются с облаком. Члены команды на веб-платформе видят ваши обновления в реальном времени, и вы видите их обновления.",
    ar: "تتم مزامنة جميع التغييرات تلقائياً مع السحابة. يرى أعضاء الفريق على منصة الويب تحديثاتك في الوقت الفعلي، وترى تحديثاتهم."
  },
  "docs.content.revitTasks.myTasks": {
    ko: "내 작업 보기", de: "Meine Aufgaben-Ansicht", fr: "Vue Mes tâches", es: "Vista Mis tareas",
    pt: "Visualização Minhas tarefas", ru: "Представление «Мои задачи»", ar: "عرض مهامي"
  },
  "docs.content.revitTasks.myTasksDesc": {
    ko: "내 작업 보기는 당신에게 할당된 작업만 표시합니다. 상태, 우선순위 또는 마감일로 필터링합니다. 작업을 클릭하면 세부 정보와 연결된 요소를 볼 수 있습니다.",
    de: "Die Meine Aufgaben-Ansicht zeigt nur Ihnen zugewiesene Aufgaben. Filtern Sie nach Status, Priorität oder Fälligkeitsdatum. Klicken Sie auf eine Aufgabe, um Details und verknüpfte Elemente anzuzeigen.",
    fr: "La vue Mes tâches n'affiche que les tâches qui vous sont assignées. Filtrez par statut, priorité ou date d'échéance. Cliquez sur une tâche pour voir les détails et les éléments liés.",
    es: "La vista Mis tareas muestra solo las tareas asignadas a usted. Filtre por estado, prioridad o fecha límite. Haga clic en una tarea para ver detalles y elementos vinculados.",
    pt: "A visualização Minhas tarefas mostra apenas tarefas atribuídas a você. Filtre por status, prioridade ou data de vencimento. Clique em uma tarefa para ver detalhes e elementos vinculados.",
    ru: "Представление «Мои задачи» показывает только назначенные вам задачи. Фильтруйте по статусу, приоритету или сроку. Нажмите на задачу, чтобы увидеть детали и связанные элементы.",
    ar: "يعرض عرض مهامي فقط المهام المعينة لك. قم بالتصفية حسب الحالة أو الأولوية أو تاريخ الاستحقاق. انقر على مهمة لرؤية التفاصيل والعناصر المرتبطة."
  },

  // ============= MORE DOCS - REVIT TOOLS =============
  "docs.content.revitTools.overview": {
    ko: "개요", de: "Überblick", fr: "Aperçu", es: "Descripción general",
    pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },
  "docs.content.revitTools.overviewDesc": {
    ko: "도구 라이브러리는 Python 스크립트, C# 스크립트 및 컴파일된 DLL 플러그인을 관리합니다. 단일 인터페이스에서 자동화 도구를 실행하고 팀과 도구를 공유합니다.",
    de: "Die Tool-Bibliothek verwaltet Python-Skripte, C#-Skripte und kompilierte DLL-Plugins. Führen Sie Automatisierungstools über eine einzige Oberfläche aus und teilen Sie Tools mit Ihrem Team.",
    fr: "La bibliothèque d'outils gère les scripts Python, les scripts C# et les plugins DLL compilés. Exécutez des outils d'automatisation depuis une seule interface et partagez des outils avec votre équipe.",
    es: "La biblioteca de herramientas gestiona scripts Python, scripts C# y plugins DLL compilados. Ejecute herramientas de automatización desde una única interfaz y comparta herramientas con su equipo.",
    pt: "A biblioteca de ferramentas gerencia scripts Python, scripts C# e plugins DLL compilados. Execute ferramentas de automação a partir de uma única interface e compartilhe ferramentas com sua equipe.",
    ru: "Библиотека инструментов управляет скриптами Python, скриптами C# и скомпилированными DLL-плагинами. Запускайте инструменты автоматизации из единого интерфейса и делитесь инструментами с командой.",
    ar: "تدير مكتبة الأدوات نصوص Python و C# والملحقات DLL المترجمة. قم بتشغيل أدوات الأتمتة من واجهة واحدة وشارك الأدوات مع فريقك."
  },
  "docs.content.revitTools.dllPlugins": {
    ko: "DLL 플러그인", de: "DLL-Plugins", fr: "Plugins DLL", es: "Plugins DLL",
    pt: "Plugins DLL", ru: "DLL-плагины", ar: "ملحقات DLL"
  },
  "docs.content.revitTools.pythonScripts": {
    ko: "Python 스크립트", de: "Python-Skripte", fr: "Scripts Python", es: "Scripts Python",
    pt: "Scripts Python", ru: "Скрипты Python", ar: "نصوص Python"
  },
  "docs.content.revitTools.pythonExample": {
    ko: "Python 스크립트 예시", de: "Python-Skript-Beispiel", fr: "Exemple de script Python", es: "Ejemplo de script Python",
    pt: "Exemplo de script Python", ru: "Пример скрипта Python", ar: "مثال على نص Python"
  },
  "docs.content.revitTools.csharpScripts": {
    ko: "C# 스크립트", de: "C#-Skripte", fr: "Scripts C#", es: "Scripts C#",
    pt: "Scripts C#", ru: "Скрипты C#", ar: "نصوص C#"
  },
  "docs.content.revitTools.csharpScriptsDesc": {
    ko: "컴파일 없이 C# 코드를 즉석에서 실행합니다. C# 스크립팅 엔진이 코드를 즉시 컴파일하고 실행하여 아이디어를 쉽게 프로토타입하고 테스트할 수 있습니다.",
    de: "Führen Sie C#-Code ohne Kompilierung spontan aus. Die C#-Scripting-Engine kompiliert und führt Ihren Code sofort aus, was das Prototyping und Testen von Ideen erleichtert.",
    fr: "Exécutez du code C# à la volée sans compilation. Le moteur de script C# compile et exécute votre code instantanément, facilitant le prototypage et le test d'idées.",
    es: "Ejecute código C# sobre la marcha sin compilar. El motor de scripts C# compila y ejecuta su código instantáneamente, facilitando la creación de prototipos y prueba de ideas.",
    pt: "Execute código C# instantaneamente sem compilar. O mecanismo de scripts C# compila e executa seu código instantaneamente, facilitando a prototipagem e teste de ideias.",
    ru: "Выполняйте код C# на лету без компиляции. Движок скриптов C# мгновенно компилирует и выполняет ваш код, упрощая прототипирование и тестирование идей.",
    ar: "قم بتشغيل كود C# فوراً بدون ترجمة. يقوم محرك النصوص C# بترجمة وتنفيذ الكود الخاص بك فوراً، مما يسهل إنشاء النماذج الأولية واختبار الأفكار."
  },
  "docs.content.revitTools.organizing": {
    ko: "도구 정리", de: "Tools organisieren", fr: "Organisation des outils", es: "Organización de herramientas",
    pt: "Organização de ferramentas", ru: "Организация инструментов", ar: "تنظيم الأدوات"
  },
  "docs.content.revitTools.organizingDesc": {
    ko: "쉽게 찾을 수 있도록 도구를 카테고리로 정리합니다. AI 어시스턴트가 관련 도구를 찾아 제안할 수 있도록 설명과 키워드를 추가합니다.",
    de: "Organisieren Sie Tools in Kategorien zur einfachen Auffindbarkeit. Fügen Sie Beschreibungen und Schlüsselwörter hinzu, damit der KI-Assistent relevante Tools finden und vorschlagen kann.",
    fr: "Organisez les outils en catégories pour les retrouver facilement. Ajoutez des descriptions et des mots-clés pour que l'assistant IA puisse trouver et suggérer des outils pertinents.",
    es: "Organice herramientas en categorías para encontrarlas fácilmente. Agregue descripciones y palabras clave para que el asistente de IA pueda encontrar y sugerir herramientas relevantes.",
    pt: "Organize ferramentas em categorias para fácil descoberta. Adicione descrições e palavras-chave para que o assistente de IA possa encontrar e sugerir ferramentas relevantes.",
    ru: "Организуйте инструменты по категориям для удобного поиска. Добавляйте описания и ключевые слова, чтобы ИИ-ассистент мог находить и предлагать подходящие инструменты.",
    ar: "نظم الأدوات في فئات لسهولة الاكتشاف. أضف الأوصاف والكلمات المفتاحية حتى يتمكن مساعد الذكاء الاصطناعي من العثور على الأدوات ذات الصلة واقتراحها."
  },

  // ============= MORE DOCS - REVIT PROJECTS =============
  "docs.content.revitProjects.overview": {
    ko: "개요", de: "Überblick", fr: "Aperçu", es: "Descripción general",
    pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },
  "docs.content.revitProjects.creating": {
    ko: "프로젝트 만들기", de: "Projekte erstellen", fr: "Création de projets", es: "Creación de proyectos",
    pt: "Criação de projetos", ru: "Создание проектов", ar: "إنشاء المشاريع"
  },
  "docs.content.revitProjects.team": {
    ko: "팀 관리", de: "Team-Management", fr: "Gestion d'équipe", es: "Gestión de equipo",
    pt: "Gerenciamento de equipe", ru: "Управление командой", ar: "إدارة الفريق"
  },
  "docs.content.revitProjects.teamDesc": {
    ko: "프로젝트에 팀원을 추가하고 역할과 권한을 할당합니다. 팀원은 할당된 작업을 보고 작업 부하를 추적할 수 있습니다.",
    de: "Fügen Sie Teammitglieder zu Projekten hinzu und weisen Sie Rollen und Berechtigungen zu. Teammitglieder können ihre zugewiesenen Aufgaben sehen und ihre Arbeitslast verfolgen.",
    fr: "Ajoutez des membres d'équipe aux projets et attribuez des rôles et permissions. Les membres d'équipe peuvent voir leurs tâches assignées et suivre leur charge de travail.",
    es: "Agregue miembros del equipo a proyectos y asigne roles y permisos. Los miembros del equipo pueden ver sus tareas asignadas y rastrear su carga de trabajo.",
    pt: "Adicione membros da equipe a projetos e atribua funções e permissões. Os membros da equipe podem ver suas tarefas atribuídas e acompanhar sua carga de trabalho.",
    ru: "Добавляйте членов команды в проекты и назначайте роли и разрешения. Члены команды могут видеть свои назначенные задачи и отслеживать свою нагрузку.",
    ar: "أضف أعضاء الفريق إلى المشاريع وعين الأدوار والصلاحيات. يمكن لأعضاء الفريق رؤية مهامهم المعينة وتتبع عبء عملهم."
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
console.log('APPLYING PART 10 TRANSLATIONS (Final remaining)');
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
console.log('PART 10 TRANSLATIONS APPLIED');
console.log('='.repeat(80));
