const fs = require('fs');
const path = require('path');

// Part 3: More FeaturesPage translations - BIM Features and more Web Features
const translations = {
  // ============= BIM FEATURES =============
  "featuresPage.bimFeatures.assistant.title": {
    ko: "AI 어시스턴트", de: "KI-Assistent", fr: "Assistant IA", es: "Asistente IA",
    pt: "Assistente IA", ru: "ИИ-ассистент", ar: "مساعد الذكاء الاصطناعي"
  },
  "featuresPage.bimFeatures.assistant.subtitle": {
    ko: "자연어 Revit 자동화", de: "Natürlichsprachliche Revit-Automatisierung", fr: "Automatisation Revit en langage naturel", es: "Automatización de Revit en lenguaje natural",
    pt: "Automação Revit em linguagem natural", ru: "Автоматизация Revit на естественном языке", ar: "أتمتة Revit باللغة الطبيعية"
  },
  "featuresPage.bimFeatures.assistant.highlights.voice.label": {
    ko: "음성 제어", de: "Sprachsteuerung", fr: "Contrôle vocal", es: "Control por voz",
    pt: "Controle por voz", ru: "Голосовое управление", ar: "التحكم الصوتي"
  },
  "featuresPage.bimFeatures.assistant.highlights.voice.desc": {
    ko: "Revit 핸즈프리 제어", de: "Freihändige Revit-Steuerung", fr: "Contrôle mains libres de Revit", es: "Control de Revit manos libres",
    pt: "Controle de Revit sem usar as mãos", ru: "Управление Revit без рук", ar: "التحكم في Revit بدون استخدام اليدين"
  },
  "featuresPage.bimFeatures.assistant.highlights.code.label": {
    ko: "코드 실행", de: "Code-Ausführung", fr: "Exécution de code", es: "Ejecución de código",
    pt: "Execução de código", ru: "Выполнение кода", ar: "تنفيذ الكود"
  },
  "featuresPage.bimFeatures.assistant.highlights.code.desc": {
    ko: "Python 및 C# 스크립트 생성 및 실행", de: "Python- und C#-Skripte generieren und ausführen", fr: "Générer et exécuter des scripts Python et C#", es: "Generar y ejecutar scripts Python y C#",
    pt: "Gerar e executar scripts Python e C#", ru: "Генерация и выполнение скриптов Python и C#", ar: "إنشاء وتنفيذ نصوص Python و C#"
  },
  "featuresPage.bimFeatures.assistant.highlights.tools.label": {
    ko: "스마트 도구 매칭", de: "Smart Tool-Matching", fr: "Correspondance intelligente des outils", es: "Coincidencia inteligente de herramientas",
    pt: "Correspondência inteligente de ferramentas", ru: "Умный подбор инструментов", ar: "مطابقة الأدوات الذكية"
  },
  "featuresPage.bimFeatures.assistant.highlights.tools.desc": {
    ko: "AI가 라이브러리에서 관련 도구를 찾습니다", de: "KI findet relevante Tools aus Ihrer Bibliothek", fr: "L'IA trouve les outils pertinents dans votre bibliothèque", es: "La IA encuentra herramientas relevantes de su biblioteca",
    pt: "A IA encontra ferramentas relevantes da sua biblioteca", ru: "ИИ находит подходящие инструменты из вашей библиотеки", ar: "يجد الذكاء الاصطناعي الأدوات ذات الصلة من مكتبتك"
  },
  "featuresPage.bimFeatures.tasks.title": {
    ko: "작업 관리", de: "Aufgabenverwaltung", fr: "Gestion des tâches", es: "Gestión de tareas",
    pt: "Gerenciamento de tarefas", ru: "Управление задачами", ar: "إدارة المهام"
  },
  "featuresPage.bimFeatures.tasks.subtitle": {
    ko: "Revit 요소와 연결된 작업", de: "Aufgaben verknüpft mit Revit-Elementen", fr: "Tâches liées aux éléments Revit", es: "Tareas vinculadas a elementos de Revit",
    pt: "Tarefas vinculadas a elementos do Revit", ru: "Задачи, связанные с элементами Revit", ar: "المهام المرتبطة بعناصر Revit"
  },
  "featuresPage.bimFeatures.tasks.highlights.elements.label": {
    ko: "요소 링크", de: "Element-Links", fr: "Liens d'éléments", es: "Enlaces de elementos",
    pt: "Links de elementos", ru: "Ссылки на элементы", ar: "روابط العناصر"
  },
  "featuresPage.bimFeatures.tasks.highlights.elements.desc": {
    ko: "Revit 요소를 작업에 연결", de: "Revit-Elemente mit Aufgaben verknüpfen", fr: "Lier les éléments Revit aux tâches", es: "Vincular elementos de Revit a tareas",
    pt: "Vincular elementos do Revit a tarefas", ru: "Связывание элементов Revit с задачами", ar: "ربط عناصر Revit بالمهام"
  },
  "featuresPage.bimFeatures.tasks.highlights.sync.label": {
    ko: "클라우드 동기화", de: "Cloud-Sync", fr: "Synchronisation cloud", es: "Sincronización en la nube",
    pt: "Sincronização na nuvem", ru: "Облачная синхронизация", ar: "المزامنة السحابية"
  },
  "featuresPage.bimFeatures.tasks.highlights.sync.desc": {
    ko: "웹 플랫폼과 실시간 동기화", de: "Echtzeit-Synchronisierung mit Web-Plattform", fr: "Synchronisation en temps réel avec la plateforme web", es: "Sincronización en tiempo real con plataforma web",
    pt: "Sincronização em tempo real com plataforma web", ru: "Синхронизация в реальном времени с веб-платформой", ar: "المزامنة في الوقت الفعلي مع منصة الويب"
  },
  "featuresPage.bimFeatures.tasks.highlights.time.label": {
    ko: "시간 추적", de: "Zeiterfassung", fr: "Suivi du temps", es: "Seguimiento del tiempo",
    pt: "Acompanhamento de tempo", ru: "Учёт времени", ar: "تتبع الوقت"
  },
  "featuresPage.bimFeatures.tasks.highlights.time.desc": {
    ko: "Revit에서 직접 시간 기록", de: "Zeit direkt in Revit erfassen", fr: "Enregistrer le temps directement dans Revit", es: "Registrar tiempo directamente en Revit",
    pt: "Registrar tempo diretamente no Revit", ru: "Записывать время прямо в Revit", ar: "تسجيل الوقت مباشرة في Revit"
  },
  "featuresPage.bimFeatures.tasks.properties.elements.name": {
    ko: "요소", de: "Elemente", fr: "Éléments", es: "Elementos",
    pt: "Elementos", ru: "Элементы", ar: "العناصر"
  },
  "featuresPage.bimFeatures.tasks.properties.elements.desc": {
    ko: "연결된 Revit 요소", de: "Verknüpfte Revit-Elemente", fr: "Éléments Revit liés", es: "Elementos de Revit vinculados",
    pt: "Elementos do Revit vinculados", ru: "Связанные элементы Revit", ar: "عناصر Revit المرتبطة"
  },
  "featuresPage.bimFeatures.tasks.properties.dateHours.name": {
    ko: "날짜 시간", de: "Datumsstunden", fr: "Heures par date", es: "Horas por fecha",
    pt: "Horas por data", ru: "Часы по датам", ar: "ساعات التاريخ"
  },
  "featuresPage.bimFeatures.tasks.properties.dateHours.desc": {
    ko: "날짜별 시간 항목", de: "Zeiteinträge nach Datum", fr: "Entrées de temps par date", es: "Entradas de tiempo por fecha",
    pt: "Entradas de tempo por data", ru: "Записи времени по дате", ar: "إدخالات الوقت حسب التاريخ"
  },
  "featuresPage.bimFeatures.tools.title": {
    ko: "도구 라이브러리", de: "Tool-Bibliothek", fr: "Bibliothèque d'outils", es: "Biblioteca de herramientas",
    pt: "Biblioteca de ferramentas", ru: "Библиотека инструментов", ar: "مكتبة الأدوات"
  },
  "featuresPage.bimFeatures.tools.subtitle": {
    ko: "Python, C#, DLL 자동화 도구", de: "Python-, C#-, DLL-Automatisierungstools", fr: "Outils d'automatisation Python, C#, DLL", es: "Herramientas de automatización Python, C#, DLL",
    pt: "Ferramentas de automação Python, C#, DLL", ru: "Инструменты автоматизации Python, C#, DLL", ar: "أدوات أتمتة Python و C# و DLL"
  },
  "featuresPage.bimFeatures.tools.highlights.python.label": {
    ko: "Python 스크립트", de: "Python-Skripte", fr: "Scripts Python", es: "Scripts Python",
    pt: "Scripts Python", ru: "Скрипты Python", ar: "نصوص Python"
  },
  "featuresPage.bimFeatures.tools.highlights.python.desc": {
    ko: "Python 자동화 스크립트 실행", de: "Python-Automatisierungsskripte ausführen", fr: "Exécuter des scripts d'automatisation Python", es: "Ejecutar scripts de automatización Python",
    pt: "Executar scripts de automação Python", ru: "Запуск скриптов автоматизации Python", ar: "تشغيل نصوص أتمتة Python"
  },
  "featuresPage.bimFeatures.tools.highlights.csharp.label": {
    ko: "C# 스크립트", de: "C#-Skripte", fr: "Scripts C#", es: "Scripts C#",
    pt: "Scripts C#", ru: "Скрипты C#", ar: "نصوص C#"
  },
  "featuresPage.bimFeatures.tools.highlights.csharp.desc": {
    ko: "컴파일 없이 C# 코드 실행", de: "C#-Code ohne Kompilierung ausführen", fr: "Exécuter du code C# sans compilation", es: "Ejecutar código C# sin compilar",
    pt: "Executar código C# sem compilar", ru: "Выполнение кода C# без компиляции", ar: "تشغيل كود C# بدون ترجمة"
  },
  "featuresPage.bimFeatures.tools.highlights.dll.label": {
    ko: "DLL 플러그인", de: "DLL-Plugins", fr: "Plugins DLL", es: "Plugins DLL",
    pt: "Plugins DLL", ru: "Плагины DLL", ar: "ملحقات DLL"
  },
  "featuresPage.bimFeatures.tools.highlights.dll.desc": {
    ko: "컴파일된 플러그인 로드 및 실행", de: "Kompilierte Plugins laden und ausführen", fr: "Charger et exécuter des plugins compilés", es: "Cargar y ejecutar plugins compilados",
    pt: "Carregar e executar plugins compilados", ru: "Загрузка и запуск скомпилированных плагинов", ar: "تحميل وتشغيل الملحقات المترجمة"
  },
  "featuresPage.bimFeatures.projects.title": {
    ko: "프로젝트 관리", de: "Projektverwaltung", fr: "Gestion de projet", es: "Gestión de proyectos",
    pt: "Gerenciamento de projetos", ru: "Управление проектами", ar: "إدارة المشاريع"
  },
  "featuresPage.bimFeatures.projects.subtitle": {
    ko: "프로젝트 및 팀 관리", de: "Projekt- und Team-Management", fr: "Gestion de projet et d'équipe", es: "Gestión de proyectos y equipos",
    pt: "Gerenciamento de projeto e equipe", ru: "Управление проектами и командой", ar: "إدارة المشاريع والفريق"
  },
  "featuresPage.bimFeatures.dashboard.title": {
    ko: "대시보드", de: "Dashboard", fr: "Tableau de bord", es: "Panel de control",
    pt: "Painel", ru: "Панель управления", ar: "لوحة المعلومات"
  },
  "featuresPage.bimFeatures.dashboard.subtitle": {
    ko: "프로젝트 인사이트 및 통계", de: "Projekteinblicke und Statistiken", fr: "Aperçus et statistiques du projet", es: "Perspectivas y estadísticas del proyecto",
    pt: "Insights e estatísticas do projeto", ru: "Инсайты и статистика проекта", ar: "رؤى وإحصائيات المشروع"
  },
  // Web Features - Tasks
  "featuresPage.webFeatures.tasks.title": {
    ko: "작업 관리", de: "Aufgabenverwaltung", fr: "Gestion des tâches", es: "Gestión de tareas",
    pt: "Gerenciamento de tarefas", ru: "Управление задачами", ar: "إدارة المهام"
  },
  "featuresPage.webFeatures.tasks.subtitle": {
    ko: "유연한 프로젝트 작업 관리", de: "Flexible Projektaufgabenverwaltung", fr: "Gestion flexible des tâches de projet", es: "Gestión flexible de tareas de proyecto",
    pt: "Gerenciamento flexível de tarefas de projeto", ru: "Гибкое управление задачами проекта", ar: "إدارة مهام المشروع المرنة"
  },
  "featuresPage.webFeatures.tasks.highlights.views.label": {
    ko: "다중 뷰", de: "Mehrere Ansichten", fr: "Vues multiples", es: "Vistas múltiples",
    pt: "Múltiplas visualizações", ru: "Несколько представлений", ar: "عروض متعددة"
  },
  "featuresPage.webFeatures.tasks.highlights.views.desc": {
    ko: "테이블, 보드, 캘린더 뷰", de: "Tabellen-, Board-, Kalenderansicht", fr: "Vue tableau, board, calendrier", es: "Vista de tabla, tablero, calendario",
    pt: "Vista de tabela, quadro, calendário", ru: "Представления таблицы, доски, календаря", ar: "عرض الجدول واللوحة والتقويم"
  },
  "featuresPage.webFeatures.tasks.highlights.properties.label": {
    ko: "사용자 정의 속성", de: "Benutzerdefinierte Eigenschaften", fr: "Propriétés personnalisées", es: "Propiedades personalizadas",
    pt: "Propriedades personalizadas", ru: "Пользовательские свойства", ar: "خصائص مخصصة"
  },
  "featuresPage.webFeatures.tasks.highlights.properties.desc": {
    ko: "필요한 데이터 필드 추가", de: "Benötigte Datenfelder hinzufügen", fr: "Ajouter les champs de données nécessaires", es: "Agregar campos de datos necesarios",
    pt: "Adicionar campos de dados necessários", ru: "Добавление нужных полей данных", ar: "إضافة حقول البيانات المطلوبة"
  },
  "featuresPage.webFeatures.tasks.highlights.filters.label": {
    ko: "필터 및 정렬", de: "Filter & Sortierung", fr: "Filtres et tri", es: "Filtros y ordenación",
    pt: "Filtros e ordenação", ru: "Фильтры и сортировка", ar: "التصفية والفرز"
  },
  "featuresPage.webFeatures.tasks.highlights.filters.desc": {
    ko: "고급 필터 및 정렬 옵션", de: "Erweiterte Filter- und Sortieroptionen", fr: "Options avancées de filtrage et tri", es: "Opciones avanzadas de filtrado y ordenación",
    pt: "Opções avançadas de filtro e ordenação", ru: "Расширенные параметры фильтрации и сортировки", ar: "خيارات التصفية والفرز المتقدمة"
  },
  // Web Features - Timeline
  "featuresPage.webFeatures.timeline.title": {
    ko: "타임라인 및 간트", de: "Zeitachse & Gantt", fr: "Chronologie & Gantt", es: "Línea de tiempo y Gantt",
    pt: "Linha do tempo e Gantt", ru: "Временная шкала и Гант", ar: "الجدول الزمني وجانت"
  },
  "featuresPage.webFeatures.timeline.subtitle": {
    ko: "시각적 프로젝트 일정", de: "Visuelle Projektplanung", fr: "Planification visuelle du projet", es: "Programación visual del proyecto",
    pt: "Programação visual do projeto", ru: "Визуальное планирование проекта", ar: "الجدولة المرئية للمشروع"
  },
  "featuresPage.webFeatures.timeline.highlights.gantt.label": {
    ko: "간트 차트", de: "Gantt-Diagramm", fr: "Diagramme de Gantt", es: "Diagrama de Gantt",
    pt: "Gráfico de Gantt", ru: "Диаграмма Ганта", ar: "مخطط جانت"
  },
  "featuresPage.webFeatures.timeline.highlights.gantt.desc": {
    ko: "시각적 작업 일정", de: "Visuelle Aufgabenplanung", fr: "Planification visuelle des tâches", es: "Programación visual de tareas",
    pt: "Programação visual de tarefas", ru: "Визуальное планирование задач", ar: "الجدولة المرئية للمهام"
  },
  "featuresPage.webFeatures.timeline.highlights.dependencies.label": {
    ko: "의존성", de: "Abhängigkeiten", fr: "Dépendances", es: "Dependencias",
    pt: "Dependências", ru: "Зависимости", ar: "التبعيات"
  },
  "featuresPage.webFeatures.timeline.highlights.dependencies.desc": {
    ko: "작업 의존성 및 연결", de: "Aufgabenabhängigkeiten und Verknüpfungen", fr: "Dépendances et liens entre tâches", es: "Dependencias y enlaces de tareas",
    pt: "Dependências e links de tarefas", ru: "Зависимости и связи задач", ar: "تبعيات المهام والروابط"
  },
  "featuresPage.webFeatures.timeline.highlights.milestones.label": {
    ko: "마일스톤", de: "Meilensteine", fr: "Jalons", es: "Hitos",
    pt: "Marcos", ru: "Вехи", ar: "المعالم"
  },
  "featuresPage.webFeatures.timeline.highlights.milestones.desc": {
    ko: "주요 프로젝트 날짜 추적", de: "Wichtige Projektdaten verfolgen", fr: "Suivre les dates clés du projet", es: "Seguir fechas clave del proyecto",
    pt: "Acompanhar datas importantes do projeto", ru: "Отслеживание ключевых дат проекта", ar: "تتبع تواريخ المشروع الرئيسية"
  },
  // Web Features - Viewer
  "featuresPage.webFeatures.viewer.title": {
    ko: "3D 모델 뷰어", de: "3D-Modell-Viewer", fr: "Visionneuse de modèle 3D", es: "Visor de modelos 3D",
    pt: "Visualizador de modelos 3D", ru: "Просмотрщик 3D-моделей", ar: "عارض النماذج ثلاثية الأبعاد"
  },
  "featuresPage.webFeatures.viewer.subtitle": {
    ko: "브라우저에서 IFC 모델 보기", de: "IFC-Modelle im Browser anzeigen", fr: "Afficher les modèles IFC dans le navigateur", es: "Ver modelos IFC en el navegador",
    pt: "Visualizar modelos IFC no navegador", ru: "Просмотр моделей IFC в браузере", ar: "عرض نماذج IFC في المتصفح"
  },
  "featuresPage.webFeatures.viewer.highlights.ifc.label": {
    ko: "IFC 지원", de: "IFC-Unterstützung", fr: "Support IFC", es: "Soporte IFC",
    pt: "Suporte IFC", ru: "Поддержка IFC", ar: "دعم IFC"
  },
  "featuresPage.webFeatures.viewer.highlights.ifc.desc": {
    ko: "산업 표준 IFC 형식 로드", de: "Industriestandard IFC-Format laden", fr: "Charger le format IFC standard", es: "Cargar formato IFC estándar",
    pt: "Carregar formato IFC padrão", ru: "Загрузка стандарта IFC", ar: "تحميل تنسيق IFC القياسي"
  },
  "featuresPage.webFeatures.viewer.highlights.navigation.label": {
    ko: "3D 탐색", de: "3D-Navigation", fr: "Navigation 3D", es: "Navegación 3D",
    pt: "Navegação 3D", ru: "3D-навигация", ar: "التنقل ثلاثي الأبعاد"
  },
  "featuresPage.webFeatures.viewer.highlights.navigation.desc": {
    ko: "패닝, 줌, 궤도 컨트롤", de: "Pan-, Zoom-, Orbit-Steuerung", fr: "Contrôles de panoramique, zoom, orbite", es: "Controles de panorámica, zoom, órbita",
    pt: "Controles de panorâmica, zoom, órbita", ru: "Управление панорамированием, масштабированием, орбитой", ar: "التحكم في التحريك والتكبير والدوران"
  },
  "featuresPage.webFeatures.viewer.highlights.sections.label": {
    ko: "단면 평면", de: "Schnittebenen", fr: "Plans de coupe", es: "Planos de sección",
    pt: "Planos de corte", ru: "Секущие плоскости", ar: "مستويات القطع"
  },
  "featuresPage.webFeatures.viewer.highlights.sections.desc": {
    ko: "동적 단면 도구", de: "Dynamische Schnittwerkzeuge", fr: "Outils de coupe dynamiques", es: "Herramientas de sección dinámicas",
    pt: "Ferramentas de corte dinâmicas", ru: "Динамические инструменты сечения", ar: "أدوات القطع الديناميكية"
  },
  "featuresPage.webFeatures.viewer.properties.viewer.name": {
    ko: "모델 뷰어", de: "Modell-Viewer", fr: "Visionneuse de modèle", es: "Visor de modelos",
    pt: "Visualizador de modelos", ru: "Просмотрщик моделей", ar: "عارض النماذج"
  },
  "featuresPage.webFeatures.viewer.properties.viewer.desc": {
    ko: "내장 IFC 뷰어", de: "Eingebetteter IFC-Viewer", fr: "Visionneuse IFC intégrée", es: "Visor IFC integrado",
    pt: "Visualizador IFC incorporado", ru: "Встроенный IFC-просмотрщик", ar: "عارض IFC المدمج"
  },
  // Property System
  "featuresPage.propertySystem.title": {
    ko: "속성 시스템", de: "Eigenschaftssystem", fr: "Système de propriétés", es: "Sistema de propiedades",
    pt: "Sistema de propriedades", ru: "Система свойств", ar: "نظام الخصائص"
  },
  "featuresPage.propertySystem.subtitle": {
    ko: "유연한 사용자 정의 데이터 필드", de: "Flexible benutzerdefinierte Datenfelder", fr: "Champs de données personnalisés flexibles", es: "Campos de datos personalizados flexibles",
    pt: "Campos de dados personalizados flexíveis", ru: "Гибкие пользовательские поля данных", ar: "حقول بيانات مخصصة مرنة"
  },
  "featuresPage.propertySystem.categories.basic": {
    ko: "기본", de: "Basis", fr: "Base", es: "Básico",
    pt: "Básico", ru: "Базовые", ar: "أساسي"
  },
  "featuresPage.propertySystem.categories.advanced": {
    ko: "고급", de: "Erweitert", fr: "Avancé", es: "Avanzado",
    pt: "Avançado", ru: "Расширенные", ar: "متقدم"
  },
  "featuresPage.propertySystem.types.text.name": {
    ko: "텍스트", de: "Text", fr: "Texte", es: "Texto",
    pt: "Texto", ru: "Текст", ar: "نص"
  },
  "featuresPage.propertySystem.types.text.desc": {
    ko: "한 줄 텍스트 필드", de: "Einzeiliges Textfeld", fr: "Champ de texte sur une ligne", es: "Campo de texto de una línea",
    pt: "Campo de texto de uma linha", ru: "Однострочное текстовое поле", ar: "حقل نص من سطر واحد"
  },
  "featuresPage.propertySystem.types.number.name": {
    ko: "숫자", de: "Zahl", fr: "Nombre", es: "Número",
    pt: "Número", ru: "Число", ar: "رقم"
  },
  "featuresPage.propertySystem.types.number.desc": {
    ko: "숫자 값", de: "Numerische Werte", fr: "Valeurs numériques", es: "Valores numéricos",
    pt: "Valores numéricos", ru: "Числовые значения", ar: "قيم رقمية"
  },
  "featuresPage.propertySystem.types.select.name": {
    ko: "선택", de: "Auswahl", fr: "Sélection", es: "Selección",
    pt: "Seleção", ru: "Выбор", ar: "اختيار"
  },
  "featuresPage.propertySystem.types.select.desc": {
    ko: "옵션 목록에서 선택", de: "Aus Optionsliste auswählen", fr: "Choisir dans une liste d'options", es: "Elegir de lista de opciones",
    pt: "Escolher da lista de opções", ru: "Выбор из списка вариантов", ar: "اختيار من قائمة الخيارات"
  },
  "featuresPage.propertySystem.types.multiSelect.name": {
    ko: "다중 선택", de: "Mehrfachauswahl", fr: "Sélection multiple", es: "Selección múltiple",
    pt: "Seleção múltipla", ru: "Множественный выбор", ar: "اختيار متعدد"
  },
  "featuresPage.propertySystem.types.multiSelect.desc": {
    ko: "여러 옵션 선택", de: "Mehrere Optionen auswählen", fr: "Sélectionner plusieurs options", es: "Seleccionar múltiples opciones",
    pt: "Selecionar múltiplas opções", ru: "Выбор нескольких вариантов", ar: "تحديد خيارات متعددة"
  },
  "featuresPage.propertySystem.types.date.name": {
    ko: "날짜", de: "Datum", fr: "Date", es: "Fecha",
    pt: "Data", ru: "Дата", ar: "تاريخ"
  },
  "featuresPage.propertySystem.types.date.desc": {
    ko: "날짜 선택", de: "Datumsauswahl", fr: "Sélection de date", es: "Selección de fecha",
    pt: "Seleção de data", ru: "Выбор даты", ar: "اختيار التاريخ"
  },
  "featuresPage.propertySystem.types.person.name": {
    ko: "담당자", de: "Person", fr: "Personne", es: "Persona",
    pt: "Pessoa", ru: "Исполнитель", ar: "الشخص"
  },
  "featuresPage.propertySystem.types.person.desc": {
    ko: "팀원 할당", de: "Teammitglieder zuweisen", fr: "Assigner des membres d'équipe", es: "Asignar miembros del equipo",
    pt: "Atribuir membros da equipe", ru: "Назначение членов команды", ar: "تعيين أعضاء الفريق"
  },
  "featuresPage.propertySystem.types.checkbox.name": {
    ko: "체크박스", de: "Kontrollkästchen", fr: "Case à cocher", es: "Casilla de verificación",
    pt: "Caixa de seleção", ru: "Флажок", ar: "خانة اختيار"
  },
  "featuresPage.propertySystem.types.checkbox.desc": {
    ko: "참/거짓 값", de: "Wahr/Falsch-Wert", fr: "Valeur vrai/faux", es: "Valor verdadero/falso",
    pt: "Valor verdadeiro/falso", ru: "Логическое значение", ar: "قيمة صحيحة/خاطئة"
  },
  "featuresPage.propertySystem.types.url.name": {
    ko: "URL", de: "URL", fr: "URL", es: "URL",
    pt: "URL", ru: "URL", ar: "رابط"
  },
  "featuresPage.propertySystem.types.url.desc": {
    ko: "웹 링크", de: "Web-Links", fr: "Liens web", es: "Enlaces web",
    pt: "Links da web", ru: "Веб-ссылки", ar: "روابط الويب"
  },
  "featuresPage.propertySystem.types.email.name": {
    ko: "이메일", de: "E-Mail", fr: "E-mail", es: "Correo electrónico",
    pt: "E-mail", ru: "Эл. почта", ar: "البريد الإلكتروني"
  },
  "featuresPage.propertySystem.types.email.desc": {
    ko: "이메일 주소", de: "E-Mail-Adressen", fr: "Adresses e-mail", es: "Direcciones de correo electrónico",
    pt: "Endereços de e-mail", ru: "Адреса эл. почты", ar: "عناوين البريد الإلكتروني"
  },
  "featuresPage.propertySystem.types.phone.name": {
    ko: "전화", de: "Telefon", fr: "Téléphone", es: "Teléfono",
    pt: "Telefone", ru: "Телефон", ar: "هاتف"
  },
  "featuresPage.propertySystem.types.phone.desc": {
    ko: "전화번호", de: "Telefonnummern", fr: "Numéros de téléphone", es: "Números de teléfono",
    pt: "Números de telefone", ru: "Номера телефонов", ar: "أرقام الهاتف"
  },
  "featuresPage.propertySystem.types.files.name": {
    ko: "파일", de: "Dateien", fr: "Fichiers", es: "Archivos",
    pt: "Arquivos", ru: "Файлы", ar: "ملفات"
  },
  "featuresPage.propertySystem.types.files.desc": {
    ko: "파일 첨부", de: "Dateianhänge", fr: "Pièces jointes", es: "Archivos adjuntos",
    pt: "Anexos de arquivos", ru: "Вложения файлов", ar: "مرفقات الملفات"
  },
  "featuresPage.propertySystem.types.relation.name": {
    ko: "관계", de: "Relation", fr: "Relation", es: "Relación",
    pt: "Relação", ru: "Связь", ar: "علاقة"
  },
  "featuresPage.propertySystem.types.relation.desc": {
    ko: "다른 페이지 연결", de: "Mit anderen Seiten verknüpfen", fr: "Lier à d'autres pages", es: "Vincular a otras páginas",
    pt: "Vincular a outras páginas", ru: "Связь с другими страницами", ar: "ربط بصفحات أخرى"
  },
  "featuresPage.propertySystem.types.rollup.name": {
    ko: "롤업", de: "Rollup", fr: "Rollup", es: "Rollup",
    pt: "Rollup", ru: "Сводка", ar: "تجميع"
  },
  "featuresPage.propertySystem.types.rollup.desc": {
    ko: "연결된 데이터 집계", de: "Verknüpfte Daten aggregieren", fr: "Agréger les données liées", es: "Agregar datos vinculados",
    pt: "Agregar dados vinculados", ru: "Агрегирование связанных данных", ar: "تجميع البيانات المرتبطة"
  },
  "featuresPage.propertySystem.types.formula.name": {
    ko: "수식", de: "Formel", fr: "Formule", es: "Fórmula",
    pt: "Fórmula", ru: "Формула", ar: "صيغة"
  },
  "featuresPage.propertySystem.types.formula.desc": {
    ko: "계산된 값", de: "Berechnete Werte", fr: "Valeurs calculées", es: "Valores calculados",
    pt: "Valores calculados", ru: "Вычисляемые значения", ar: "قيم محسوبة"
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
console.log('APPLYING PART 3 TRANSLATIONS (BIM Features & Property System)');
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
console.log('PART 3 TRANSLATIONS APPLIED');
console.log('='.repeat(80));
