const fs = require('fs');
const path = require('path');

// docs.content.webTimeline translations
const translations = {
  ja: {
    overview: "概要",
    overviewDesc: "タイムライン＆ガントビューは、タスク依存関係、マイルストーン、進捗追跡を備えたビジュアルプロジェクトスケジューリングを提供します。プロジェクトタイムラインを計画し、リアルタイムで進捗を監視できます。",
    ganttView: "ガントチャートビュー",
    ganttViewDesc: "ガントチャートは、タイムライン上にタスクを水平バーとして表示します。各バーの長さはタスクの期間を表します。タスクはステータスによって色分けされます。",
    scheduling: "タスクのスケジューリング",
    schedulingDesc: "以下の方法でタスクをスケジュールします：",
    schedStep1: "タスクバーを水平にドラッグして開始日を変更",
    schedStep2: "タスクバーの端をドラッグして期間を調整",
    schedStep3: "タスクプロパティパネルで日付を直接設定",
    dependencies: "タスク依存関係",
    dependenciesDesc: "タスクをリンクして依存関係を作成します。先行タスクが移動すると、依存タスクが自動的に調整されます。リレーションプロパティを使用してタスクをリンクします。",
    milestones: "マイルストーン",
    milestonesDesc: "重要なプロジェクト日付をマイルストーンとしてマークします。マイルストーンはタイムライン上にダイヤモンド形状で表示され、タスクや成果物にリンクできます。",
    progress: "進捗追跡",
    progressDesc: "各タスクの完了率を追跡します。ガントチャートは進捗をタスクバーの塗りつぶし部分として表示し、どのタスクが順調かを簡単に確認できます。"
  },
  ko: {
    overview: "개요",
    overviewDesc: "타임라인 및 간트 뷰는 작업 종속성, 마일스톤 및 진행 상황 추적을 통한 시각적 프로젝트 일정 관리를 제공합니다. 프로젝트 타임라인을 계획하고 실시간으로 진행 상황을 모니터링하세요.",
    ganttView: "간트 차트 뷰",
    ganttViewDesc: "간트 차트는 타임라인에 작업을 수평 막대로 표시합니다. 각 막대의 길이는 작업 기간을 나타냅니다. 작업은 상태에 따라 색상으로 구분됩니다.",
    scheduling: "작업 일정 관리",
    schedulingDesc: "다음 방법으로 작업을 예약합니다:",
    schedStep1: "작업 막대를 수평으로 드래그하여 시작 날짜 변경",
    schedStep2: "작업 막대의 가장자리를 드래그하여 기간 조정",
    schedStep3: "작업 속성 패널에서 날짜를 직접 설정",
    dependencies: "작업 종속성",
    dependenciesDesc: "작업을 연결하여 종속성을 만듭니다. 선행 작업이 이동하면 종속 작업이 자동으로 조정됩니다. 관계 속성을 사용하여 작업을 연결합니다.",
    milestones: "마일스톤",
    milestonesDesc: "중요한 프로젝트 날짜를 마일스톤으로 표시합니다. 마일스톤은 타임라인에 다이아몬드 모양으로 나타나며 작업 및 산출물에 연결할 수 있습니다.",
    progress: "진행 상황 추적",
    progressDesc: "각 작업의 완료율을 추적합니다. 간트 차트는 진행 상황을 작업 막대의 채워진 부분으로 표시하여 어떤 작업이 순조로운지 쉽게 확인할 수 있습니다."
  },
  de: {
    overview: "Übersicht",
    overviewDesc: "Die Timeline- & Gantt-Ansicht bietet visuelle Projektplanung mit Aufgabenabhängigkeiten, Meilensteinen und Fortschrittsverfolgung. Planen Sie Ihre Projekt-Timeline und überwachen Sie den Fortschritt in Echtzeit.",
    ganttView: "Gantt-Diagramm-Ansicht",
    ganttViewDesc: "Das Gantt-Diagramm zeigt Aufgaben als horizontale Balken auf einer Zeitleiste an. Die Länge jedes Balkens repräsentiert die Aufgabendauer. Aufgaben sind nach Status farbcodiert.",
    scheduling: "Aufgaben planen",
    schedulingDesc: "Planen Sie Aufgaben mit diesen Methoden:",
    schedStep1: "Ziehen Sie Aufgabenbalken horizontal, um Startdaten zu ändern",
    schedStep2: "Ziehen Sie die Ränder der Aufgabenbalken, um die Dauer anzupassen",
    schedStep3: "Setzen Sie Daten direkt im Aufgaben-Eigenschaftenpanel",
    dependencies: "Aufgabenabhängigkeiten",
    dependenciesDesc: "Verknüpfen Sie Aufgaben miteinander, um Abhängigkeiten zu erstellen. Wenn sich eine Vorgängeraufgabe verschiebt, passen sich abhängige Aufgaben automatisch an. Verwenden Sie die Relation-Eigenschaft, um Aufgaben zu verknüpfen.",
    milestones: "Meilensteine",
    milestonesDesc: "Markieren Sie wichtige Projekttermine als Meilensteine. Meilensteine erscheinen als Rautenformen auf der Zeitleiste und können mit Aufgaben und Liefergegenständen verknüpft werden.",
    progress: "Fortschrittsverfolgung",
    progressDesc: "Verfolgen Sie den Fertigstellungsprozentsatz für jede Aufgabe. Das Gantt-Diagramm zeigt den Fortschritt als gefüllten Teil des Aufgabenbalkens, sodass Sie leicht sehen können, welche Aufgaben auf Kurs sind."
  },
  fr: {
    overview: "Vue d'ensemble",
    overviewDesc: "La vue Timeline & Gantt offre une planification visuelle de projet avec dépendances de tâches, jalons et suivi de progression. Planifiez votre calendrier de projet et surveillez la progression en temps réel.",
    ganttView: "Vue diagramme de Gantt",
    ganttViewDesc: "Le diagramme de Gantt affiche les tâches sous forme de barres horizontales sur une chronologie. La longueur de chaque barre représente la durée de la tâche. Les tâches sont codées par couleur selon leur statut.",
    scheduling: "Planification des tâches",
    schedulingDesc: "Planifiez les tâches en utilisant ces méthodes :",
    schedStep1: "Faites glisser les barres de tâches horizontalement pour modifier les dates de début",
    schedStep2: "Faites glisser les bords des barres de tâches pour ajuster la durée",
    schedStep3: "Définissez les dates directement dans le panneau de propriétés de la tâche",
    dependencies: "Dépendances des tâches",
    dependenciesDesc: "Liez les tâches ensemble pour créer des dépendances. Lorsqu'une tâche prédécesseur se déplace, les tâches dépendantes s'ajustent automatiquement. Utilisez la propriété Relation pour lier les tâches.",
    milestones: "Jalons",
    milestonesDesc: "Marquez les dates importantes du projet comme jalons. Les jalons apparaissent sous forme de losanges sur la chronologie et peuvent être liés aux tâches et livrables.",
    progress: "Suivi de progression",
    progressDesc: "Suivez le pourcentage d'achèvement pour chaque tâche. Le diagramme de Gantt affiche la progression sous forme de partie remplie de la barre de tâche, facilitant la visualisation des tâches en bonne voie."
  },
  es: {
    overview: "Descripción general",
    overviewDesc: "La vista de Línea de tiempo y Gantt proporciona programación visual de proyectos con dependencias de tareas, hitos y seguimiento de progreso. Planifique su línea de tiempo del proyecto y monitoree el progreso en tiempo real.",
    ganttView: "Vista de diagrama de Gantt",
    ganttViewDesc: "El diagrama de Gantt muestra las tareas como barras horizontales en una línea de tiempo. La longitud de cada barra representa la duración de la tarea. Las tareas están codificadas por color según su estado.",
    scheduling: "Programación de tareas",
    schedulingDesc: "Programe tareas usando estos métodos:",
    schedStep1: "Arrastre las barras de tareas horizontalmente para cambiar las fechas de inicio",
    schedStep2: "Arrastre los bordes de las barras de tareas para ajustar la duración",
    schedStep3: "Establezca fechas directamente en el panel de propiedades de la tarea",
    dependencies: "Dependencias de tareas",
    dependenciesDesc: "Vincule tareas para crear dependencias. Cuando una tarea predecesora se mueve, las tareas dependientes se ajustan automáticamente. Use la propiedad Relación para vincular tareas.",
    milestones: "Hitos",
    milestonesDesc: "Marque fechas importantes del proyecto como hitos. Los hitos aparecen como formas de diamante en la línea de tiempo y pueden vincularse a tareas y entregables.",
    progress: "Seguimiento de progreso",
    progressDesc: "Rastree el porcentaje de finalización de cada tarea. El diagrama de Gantt muestra el progreso como una porción llena de la barra de tarea, facilitando ver qué tareas van según lo previsto."
  },
  pt: {
    overview: "Visão geral",
    overviewDesc: "A visualização de Linha do tempo e Gantt fornece agendamento visual de projetos com dependências de tarefas, marcos e rastreamento de progresso. Planeje a linha do tempo do seu projeto e monitore o progresso em tempo real.",
    ganttView: "Visualização do gráfico de Gantt",
    ganttViewDesc: "O gráfico de Gantt exibe tarefas como barras horizontais em uma linha do tempo. O comprimento de cada barra representa a duração da tarefa. As tarefas são codificadas por cores de acordo com o status.",
    scheduling: "Agendamento de tarefas",
    schedulingDesc: "Agende tarefas usando estes métodos:",
    schedStep1: "Arraste as barras de tarefas horizontalmente para alterar as datas de início",
    schedStep2: "Arraste as bordas das barras de tarefas para ajustar a duração",
    schedStep3: "Defina datas diretamente no painel de propriedades da tarefa",
    dependencies: "Dependências de tarefas",
    dependenciesDesc: "Vincule tarefas para criar dependências. Quando uma tarefa predecessora se move, as tarefas dependentes se ajustam automaticamente. Use a propriedade Relação para vincular tarefas.",
    milestones: "Marcos",
    milestonesDesc: "Marque datas importantes do projeto como marcos. Os marcos aparecem como formas de diamante na linha do tempo e podem ser vinculados a tarefas e entregas.",
    progress: "Rastreamento de progresso",
    progressDesc: "Rastreie a porcentagem de conclusão de cada tarefa. O gráfico de Gantt mostra o progresso como uma porção preenchida da barra de tarefa, facilitando ver quais tarefas estão no caminho certo."
  },
  ru: {
    overview: "Обзор",
    overviewDesc: "Представление Timeline и Gantt обеспечивает визуальное планирование проекта с зависимостями задач, вехами и отслеживанием прогресса. Планируйте временную шкалу проекта и отслеживайте прогресс в реальном времени.",
    ganttView: "Представление диаграммы Ганта",
    ganttViewDesc: "Диаграмма Ганта отображает задачи в виде горизонтальных полос на временной шкале. Длина каждой полосы представляет продолжительность задачи. Задачи имеют цветовую кодировку по статусу.",
    scheduling: "Планирование задач",
    schedulingDesc: "Планируйте задачи следующими способами:",
    schedStep1: "Перетаскивайте полосы задач горизонтально для изменения дат начала",
    schedStep2: "Перетаскивайте края полос задач для настройки продолжительности",
    schedStep3: "Устанавливайте даты напрямую в панели свойств задачи",
    dependencies: "Зависимости задач",
    dependenciesDesc: "Связывайте задачи для создания зависимостей. Когда задача-предшественник перемещается, зависимые задачи автоматически корректируются. Используйте свойство Relation для связывания задач.",
    milestones: "Вехи",
    milestonesDesc: "Отмечайте важные даты проекта как вехи. Вехи отображаются как ромбы на временной шкале и могут быть связаны с задачами и результатами.",
    progress: "Отслеживание прогресса",
    progressDesc: "Отслеживайте процент выполнения каждой задачи. Диаграмма Ганта показывает прогресс как заполненную часть полосы задачи, что позволяет легко видеть, какие задачи выполняются по графику."
  },
  ar: {
    overview: "نظرة عامة",
    overviewDesc: "توفر عرض الجدول الزمني وجانت جدولة مرئية للمشروع مع تبعيات المهام والمعالم وتتبع التقدم. خطط الجدول الزمني لمشروعك وراقب التقدم في الوقت الفعلي.",
    ganttView: "عرض مخطط جانت",
    ganttViewDesc: "يعرض مخطط جانت المهام كأشرطة أفقية على الجدول الزمني. يمثل طول كل شريط مدة المهمة. يتم ترميز المهام بالألوان حسب الحالة.",
    scheduling: "جدولة المهام",
    schedulingDesc: "جدول المهام باستخدام هذه الطرق:",
    schedStep1: "اسحب أشرطة المهام أفقياً لتغيير تواريخ البدء",
    schedStep2: "اسحب حواف أشرطة المهام لضبط المدة",
    schedStep3: "حدد التواريخ مباشرة في لوحة خصائص المهمة",
    dependencies: "تبعيات المهام",
    dependenciesDesc: "اربط المهام معاً لإنشاء التبعيات. عندما تتحرك مهمة سابقة، تتكيف المهام التابعة تلقائياً. استخدم خاصية العلاقة لربط المهام.",
    milestones: "المعالم",
    milestonesDesc: "ضع علامة على تواريخ المشروع المهمة كمعالم. تظهر المعالم كأشكال ماسية على الجدول الزمني ويمكن ربطها بالمهام والتسليمات.",
    progress: "تتبع التقدم",
    progressDesc: "تتبع نسبة الإنجاز لكل مهمة. يعرض مخطط جانت التقدم كجزء ممتلئ من شريط المهمة، مما يسهل رؤية المهام التي تسير على المسار الصحيح."
  }
};

// Apply translations
const languages = ['ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('Applying docs.content.webTimeline translations...\n');

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Ensure the path exists
    if (!data.docs) data.docs = {};
    if (!data.docs.content) data.docs.content = {};
    if (!data.docs.content.webTimeline) data.docs.content.webTimeline = {};

    // Apply translations
    Object.assign(data.docs.content.webTimeline, translations[lang]);

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`${lang.toUpperCase()}: Applied webTimeline translations`);
  } catch (error) {
    console.error(`${lang.toUpperCase()}: Error - ${error.message}`);
  }
});

console.log('\nDocs webTimeline translations complete!');
