const fs = require('fs');
const path = require('path');

// Part 9: Docs section - comprehensive translations
const translations = {
  // ============= WEB COORDINATION =============
  "docs.content.webCoordination.overview": {
    ko: "개요", de: "Überblick", fr: "Aperçu", es: "Descripción general",
    pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },
  "docs.content.webCoordination.accStep1": {
    ko: "코디네이션 페이지로 이동", de: "Zur Koordinationsseite navigieren", fr: "Naviguer vers la page de coordination", es: "Navegar a la página de coordinación",
    pt: "Navegar para a página de coordenação", ru: "Перейдите на страницу координации", ar: "انتقل إلى صفحة التنسيق"
  },
  "docs.content.webCoordination.accStep3": {
    ko: "충돌이 3D 뷰포인트와 함께 가져옵니다", de: "Konflikte werden mit ihren 3D-Ansichtspunkten importiert", fr: "Les conflits sont importés avec leurs points de vue 3D", es: "Los conflictos se importan con sus puntos de vista 3D",
    pt: "Os conflitos são importados com seus pontos de vista 3D", ru: "Конфликты импортируются с их 3D-точками обзора", ar: "يتم استيراد التضاربات مع نقاط المشاهدة ثلاثية الأبعاد"
  },
  "docs.content.webCoordination.clashReview": {
    ko: "충돌 검토", de: "Konflikte überprüfen", fr: "Examen des conflits", es: "Revisión de conflictos",
    pt: "Revisão de conflitos", ru: "Проверка конфликтов", ar: "مراجعة التضاربات"
  },
  "docs.content.webCoordination.clashReviewDesc": {
    ko: "각 충돌에는 충돌 위치로 확대되는 3D 뷰포인트가 포함됩니다. 전체 모델이 표시된 상태에서 컨텍스트 내에서 충돌을 검토합니다.",
    de: "Jeder Konflikt enthält einen 3D-Ansichtspunkt, der zum Konfliktort zoomt. Überprüfen Sie Konflikte im Kontext mit dem vollständigen sichtbaren Modell.",
    fr: "Chaque conflit comprend un point de vue 3D qui zoome sur l'emplacement du conflit. Examinez les conflits dans leur contexte avec le modèle complet visible.",
    es: "Cada conflicto incluye un punto de vista 3D que hace zoom a la ubicación del conflicto. Revise los conflictos en contexto con el modelo completo visible.",
    pt: "Cada conflito inclui um ponto de vista 3D que amplia a localização do conflito. Revise os conflitos no contexto com o modelo completo visível.",
    ru: "Каждый конфликт включает 3D-точку обзора, которая приближает к месту конфликта. Просматривайте конфликты в контексте с полностью видимой моделью.",
    ar: "يتضمن كل تضارب نقطة مشاهدة ثلاثية الأبعاد تقوم بالتكبير على موقع التضارب. راجع التضاربات في السياق مع النموذج الكامل المرئي."
  },
  "docs.content.webCoordination.issueTrackingDesc": {
    ko: "충돌을 팀원에게 할당하고 우선순위와 마감일을 설정하고 해결 상태를 추적합니다. 해결 과정을 문서화하기 위해 코멘트와 첨부 파일을 추가합니다.",
    de: "Weisen Sie Konflikte Teammitgliedern zu, legen Sie Priorität und Fälligkeitsdatum fest und verfolgen Sie den Lösungsstatus. Fügen Sie Kommentare und Anhänge hinzu, um den Lösungsprozess zu dokumentieren.",
    fr: "Attribuez les conflits aux membres de l'équipe, définissez la priorité et les dates d'échéance, et suivez le statut de résolution. Ajoutez des commentaires et des pièces jointes pour documenter le processus de résolution.",
    es: "Asigne conflictos a miembros del equipo, establezca prioridad y fechas límite, y rastree el estado de resolución. Agregue comentarios y archivos adjuntos para documentar el proceso de resolución.",
    pt: "Atribua conflitos a membros da equipe, defina prioridade e datas de vencimento, e acompanhe o status de resolução. Adicione comentários e anexos para documentar o processo de resolução.",
    ru: "Назначайте конфликты членам команды, устанавливайте приоритет и сроки, отслеживайте статус разрешения. Добавляйте комментарии и вложения для документирования процесса разрешения.",
    ar: "قم بتعيين التضاربات لأعضاء الفريق، وحدد الأولوية وتواريخ الاستحقاق، وتتبع حالة الحل. أضف تعليقات ومرفقات لتوثيق عملية الحل."
  },
  "docs.content.webCoordination.disciplines": {
    ko: "분야 태그", de: "Disziplin-Tags", fr: "Tags de discipline", es: "Etiquetas de disciplina",
    pt: "Tags de disciplina", ru: "Теги дисциплин", ar: "علامات التخصص"
  },
  "docs.content.webCoordination.disciplinesDesc": {
    ko: "필터링 및 보고를 위해 분야별(MEP, 구조, 건축)로 충돌에 태그를 지정합니다. 분야 및 상태별 충돌 수를 보여주는 보고서를 생성합니다.",
    de: "Taggen Sie Konflikte nach Disziplin (MEP, Tragwerk, Architektur) für Filterung und Berichterstellung. Erstellen Sie Berichte, die Konfliktanzahlen nach Disziplin und Status zeigen.",
    fr: "Étiquetez les conflits par discipline (MEP, Structure, Architecture) pour le filtrage et les rapports. Générez des rapports montrant le nombre de conflits par discipline et statut.",
    es: "Etiquete conflictos por disciplina (MEP, Estructural, Arquitectónico) para filtrado e informes. Genere informes que muestren recuentos de conflictos por disciplina y estado.",
    pt: "Marque conflitos por disciplina (MEP, Estrutural, Arquitetônico) para filtragem e relatórios. Gere relatórios mostrando contagens de conflitos por disciplina e status.",
    ru: "Помечайте конфликты по дисциплинам (МЕП, Конструкции, Архитектура) для фильтрации и отчётности. Создавайте отчёты, показывающие количество конфликтов по дисциплинам и статусу.",
    ar: "ضع علامات على التضاربات حسب التخصص (MEP، الهيكلية، المعمارية) للتصفية وإعداد التقارير. أنشئ تقارير تظهر عدد التضاربات حسب التخصص والحالة."
  },

  // ============= WEB SHEETS =============
  "docs.content.webSheets.overview": {
    ko: "개요", de: "Überblick", fr: "Aperçu", es: "Descripción general",
    pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },
  "docs.content.webSheets.viewing": {
    ko: "도면 보기", de: "Zeichnungen anzeigen", fr: "Affichage des dessins", es: "Visualización de dibujos",
    pt: "Visualização de desenhos", ru: "Просмотр чертежей", ar: "عرض الرسومات"
  },
  "docs.content.webSheets.markup": {
    ko: "마크업 도구", de: "Markup-Tools", fr: "Outils d'annotation", es: "Herramientas de marcado",
    pt: "Ferramentas de marcação", ru: "Инструменты разметки", ar: "أدوات التعليق"
  },
  "docs.content.webSheets.markupDesc": {
    ko: "다음 마크업 도구로 도면에 주석을 답니다:", de: "Annotieren Sie Zeichnungen mit diesen Markup-Tools:", fr: "Annotez les dessins avec ces outils d'annotation :", es: "Anote dibujos con estas herramientas de marcado:",
    pt: "Anote desenhos com estas ferramentas de marcação:", ru: "Добавляйте аннотации к чертежам с помощью этих инструментов:", ar: "قم بالتعليق على الرسومات باستخدام أدوات التعليق التالية:"
  },
  "docs.content.webSheets.markupTool1": {
    ko: "자유 그리기용 펜과 하이라이터", de: "Stift und Textmarker für Freihandzeichnung", fr: "Stylo et surligneur pour dessin libre", es: "Pluma y resaltador para dibujo a mano alzada",
    pt: "Caneta e marcador para desenho livre", ru: "Перо и маркер для рисования от руки", ar: "قلم ومحدد للرسم الحر"
  },
  "docs.content.webSheets.markupTool2": {
    ko: "사각형, 원, 화살표를 포함한 도형", de: "Formen einschließlich Rechtecke, Kreise und Pfeile", fr: "Formes incluant rectangles, cercles et flèches", es: "Formas incluyendo rectángulos, círculos y flechas",
    pt: "Formas incluindo retângulos, círculos e setas", ru: "Фигуры, включая прямоугольники, круги и стрелки", ar: "أشكال بما في ذلك المستطيلات والدوائر والأسهم"
  },
  "docs.content.webSheets.markupTool3": {
    ko: "사용자 정의 가능한 스타일의 텍스트 주석", de: "Textanmerkungen mit anpassbaren Stilen", fr: "Annotations textuelles avec styles personnalisables", es: "Anotaciones de texto con estilos personalizables",
    pt: "Anotações de texto com estilos personalizáveis", ru: "Текстовые аннотации с настраиваемыми стилями", ar: "التعليقات النصية بأنماط قابلة للتخصيص"
  },
  "docs.content.webSheets.markupTool4": {
    ko: "승인 마크업용 스탬프 도구", de: "Stempelwerkzeuge für Genehmigungsmarkierungen", fr: "Outils de tampon pour les marques d'approbation", es: "Herramientas de sello para marcas de aprobación",
    pt: "Ferramentas de carimbo para marcações de aprovação", ru: "Инструменты штампов для маркировки утверждения", ar: "أدوات الختم لعلامات الموافقة"
  },
  "docs.content.webSheets.versions": {
    ko: "버전 비교", de: "Versionsvergleich", fr: "Comparaison de versions", es: "Comparación de versiones",
    pt: "Comparação de versões", ru: "Сравнение версий", ar: "مقارنة الإصدارات"
  },
  "docs.content.webSheets.versionsDesc": {
    ko: "변경 사항을 확인하기 위해 동일한 도면의 다른 리비전을 비교합니다. 비교 보기는 추가, 삭제 및 수정 사항을 강조 표시합니다.",
    de: "Vergleichen Sie verschiedene Revisionen derselben Zeichnung, um Änderungen zu identifizieren. Die Vergleichsansicht hebt Hinzufügungen, Löschungen und Änderungen hervor.",
    fr: "Comparez différentes révisions du même dessin pour identifier les modifications. La vue de comparaison met en évidence les ajouts, suppressions et modifications.",
    es: "Compare diferentes revisiones del mismo dibujo para identificar cambios. La vista de comparación resalta adiciones, eliminaciones y modificaciones.",
    pt: "Compare diferentes revisões do mesmo desenho para identificar alterações. A visualização de comparação destaca adições, exclusões e modificações.",
    ru: "Сравнивайте различные ревизии одного чертежа для выявления изменений. Режим сравнения выделяет добавления, удаления и изменения.",
    ar: "قارن بين المراجعات المختلفة لنفس الرسم لتحديد التغييرات. يبرز عرض المقارنة الإضافات والحذف والتعديلات."
  },

  // ============= WEB REPORTS =============
  "docs.content.webReports.overview": {
    ko: "개요", de: "Überblick", fr: "Aperçu", es: "Descripción general",
    pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },
  "docs.content.webReports.overviewDesc": {
    ko: "리포트 및 분석 모듈은 이해관계자에게 정보를 제공하기 위한 프로젝트 대시보드, 팀 성과 지표 및 내보낼 수 있는 보고서를 제공합니다.",
    de: "Das Berichts- und Analysemodul bietet Projekt-Dashboards, Team-Leistungsmetriken und exportierbare Berichte, um Stakeholder zu informieren.",
    fr: "Le module Rapports et analyses fournit des tableaux de bord de projet, des métriques de performance d'équipe et des rapports exportables pour informer les parties prenantes.",
    es: "El módulo de Informes y Análisis proporciona paneles de proyecto, métricas de rendimiento del equipo e informes exportables para mantener informados a los interesados.",
    pt: "O módulo de Relatórios e Análises fornece painéis de projeto, métricas de desempenho da equipe e relatórios exportáveis para manter as partes interessadas informadas.",
    ru: "Модуль отчётов и аналитики предоставляет панели проекта, метрики производительности команды и экспортируемые отчёты для информирования заинтересованных сторон.",
    ar: "توفر وحدة التقارير والتحليلات لوحات معلومات المشروع ومقاييس أداء الفريق والتقارير القابلة للتصدير لإبقاء أصحاب المصلحة على اطلاع."
  },
  "docs.content.webReports.dashboardDesc": {
    ko: "대시보드는 작업 완료율, 다가오는 마감일, 팀 활동 및 마일스톤 상태를 포함한 주요 프로젝트 지표를 한눈에 보여줍니다.",
    de: "Das Dashboard zeigt wichtige Projektmetriken auf einen Blick, einschließlich Aufgabenabschlussraten, anstehender Fristen, Teamaktivität und Meilensteinstatus.",
    fr: "Le tableau de bord affiche les métriques clés du projet en un coup d'œil, y compris les taux d'achèvement des tâches, les échéances à venir, l'activité de l'équipe et le statut des jalons.",
    es: "El panel muestra métricas clave del proyecto de un vistazo, incluyendo tasas de finalización de tareas, próximas fechas límite, actividad del equipo y estado de hitos.",
    pt: "O painel mostra métricas-chave do projeto de relance, incluindo taxas de conclusão de tarefas, prazos próximos, atividade da equipe e status de marcos.",
    ru: "Панель управления показывает ключевые метрики проекта: процент выполнения задач, предстоящие сроки, активность команды и статус вех.",
    ar: "تعرض لوحة المعلومات مقاييس المشروع الرئيسية بنظرة واحدة بما في ذلك معدلات إنجاز المهام والمواعيد النهائية القادمة ونشاط الفريق وحالة المعالم."
  },
  "docs.content.webReports.teamPerformance": {
    ko: "팀 성과", de: "Team-Leistung", fr: "Performance de l'équipe", es: "Rendimiento del equipo",
    pt: "Desempenho da equipe", ru: "Производительность команды", ar: "أداء الفريق"
  },
  "docs.content.webReports.teamPerformanceDesc": {
    ko: "완료된 작업, 기록된 시간, 활용률과 같은 지표로 팀 생산성을 추적합니다. 병목 현상을 식별하고 팀 전체의 작업 부하를 균형 있게 조정합니다.",
    de: "Verfolgen Sie die Teamproduktivität mit Metriken wie abgeschlossenen Aufgaben, erfassten Stunden und Auslastungsraten. Identifizieren Sie Engpässe und balancieren Sie die Arbeitslast im Team aus.",
    fr: "Suivez la productivité de l'équipe avec des métriques comme les tâches terminées, les heures enregistrées et les taux d'utilisation. Identifiez les goulots d'étranglement et équilibrez la charge de travail dans l'équipe.",
    es: "Rastree la productividad del equipo con métricas como tareas completadas, horas registradas y tasas de utilización. Identifique cuellos de botella y equilibre las cargas de trabajo en el equipo.",
    pt: "Acompanhe a produtividade da equipe com métricas como tarefas concluídas, horas registradas e taxas de utilização. Identifique gargalos e equilibre as cargas de trabalho na equipe.",
    ru: "Отслеживайте продуктивность команды с помощью метрик: выполненные задачи, записанные часы, коэффициент загрузки. Выявляйте узкие места и балансируйте нагрузку в команде.",
    ar: "تتبع إنتاجية الفريق بمقاييس مثل المهام المكتملة والساعات المسجلة ومعدلات الاستخدام. حدد الاختناقات ووازن أعباء العمل عبر الفريق."
  },
  "docs.content.webReports.budget": {
    ko: "예산 추적", de: "Budget-Tracking", fr: "Suivi du budget", es: "Seguimiento del presupuesto",
    pt: "Acompanhamento do orçamento", ru: "Отслеживание бюджета", ar: "تتبع الميزانية"
  },
  "docs.content.webReports.budgetDesc": {
    ko: "예산 대비 프로젝트 비용을 모니터링합니다. 팀원, 마일스톤 또는 작업 카테고리별로 지출을 추적합니다. 예산 임계값에 대한 알림을 설정합니다.",
    de: "Überwachen Sie Projektkosten im Vergleich zum Budget. Verfolgen Sie Ausgaben nach Teammitglied, Meilenstein oder Aufgabenkategorie. Legen Sie Warnungen für Budgetschwellen fest.",
    fr: "Surveillez les coûts du projet par rapport au budget. Suivez les dépenses par membre d'équipe, jalon ou catégorie de tâche. Définissez des alertes pour les seuils budgétaires.",
    es: "Monitoree los costos del proyecto contra el presupuesto. Rastree gastos por miembro del equipo, hito o categoría de tarea. Configure alertas para umbrales de presupuesto.",
    pt: "Monitore os custos do projeto em relação ao orçamento. Acompanhe gastos por membro da equipe, marco ou categoria de tarefa. Configure alertas para limites de orçamento.",
    ru: "Отслеживайте затраты проекта в сравнении с бюджетом. Контролируйте расходы по членам команды, вехам или категориям задач. Настройте оповещения о пороговых значениях бюджета.",
    ar: "راقب تكاليف المشروع مقابل الميزانية. تتبع النفقات حسب عضو الفريق أو المعلم أو فئة المهمة. حدد تنبيهات لعتبات الميزانية."
  },
  "docs.content.webReports.export": {
    ko: "리포트 내보내기", de: "Berichte exportieren", fr: "Exporter les rapports", es: "Exportar informes",
    pt: "Exportar relatórios", ru: "Экспорт отчётов", ar: "تصدير التقارير"
  },
  "docs.content.webReports.exportDesc": {
    ko: "이해관계자와 공유하기 위해 여러 형식으로 보고서를 내보냅니다:", de: "Exportieren Sie Berichte in mehreren Formaten zum Teilen mit Stakeholdern:", fr: "Exportez les rapports dans plusieurs formats pour les partager avec les parties prenantes :", es: "Exporte informes en múltiples formatos para compartir con las partes interesadas:",
    pt: "Exporte relatórios em vários formatos para compartilhar com as partes interessadas:", ru: "Экспортируйте отчёты в различных форматах для обмена с заинтересованными сторонами:", ar: "قم بتصدير التقارير بتنسيقات متعددة للمشاركة مع أصحاب المصلحة:"
  },
  "docs.content.webReports.exportExcel": {
    ko: "Excel: 추가 분석을 위한 원시 데이터", de: "Excel: Rohdaten für weitere Analyse", fr: "Excel : Données brutes pour analyse approfondie", es: "Excel: Datos sin procesar para análisis adicional",
    pt: "Excel: Dados brutos para análise adicional", ru: "Excel: исходные данные для дальнейшего анализа", ar: "Excel: بيانات خام لمزيد من التحليل"
  },

  // ============= REVIT ASSISTANT =============
  "docs.content.revitAssistant.overview": {
    ko: "개요", de: "Überblick", fr: "Aperçu", es: "Descripción general",
    pt: "Visão geral", ru: "Обзор", ar: "نظرة عامة"
  },
  "docs.content.revitAssistant.naturalLanguage": {
    ko: "자연어 명령", de: "Natürlichsprachliche Befehle", fr: "Commandes en langage naturel", es: "Comandos en lenguaje natural",
    pt: "Comandos em linguagem natural", ru: "Команды на естественном языке", ar: "أوامر اللغة الطبيعية"
  },
  "docs.content.revitAssistant.naturalLanguageDesc": {
    ko: "대화형 언어로 명령을 입력하거나 말합니다. AI는 컨텍스트를 이해하고 복잡한 요청을 처리할 수 있습니다.",
    de: "Geben Sie Befehle in Umgangssprache ein oder sprechen Sie sie. Die KI versteht den Kontext und kann komplexe Anfragen bearbeiten.",
    fr: "Tapez ou prononcez des commandes en langage conversationnel. L'IA comprend le contexte et peut gérer des demandes complexes.",
    es: "Escriba o hable comandos en lenguaje conversacional. La IA entiende el contexto y puede manejar solicitudes complejas.",
    pt: "Digite ou fale comandos em linguagem conversacional. A IA entende o contexto e pode lidar com solicitações complexas.",
    ru: "Вводите или произносите команды на разговорном языке. ИИ понимает контекст и может обрабатывать сложные запросы.",
    ar: "اكتب أو انطق الأوامر بلغة المحادثة. يفهم الذكاء الاصطناعي السياق ويمكنه التعامل مع الطلبات المعقدة."
  },
  "docs.content.revitAssistant.exampleCommands": {
    ko: "명령 예시", de: "Beispielbefehle", fr: "Exemples de commandes", es: "Comandos de ejemplo",
    pt: "Comandos de exemplo", ru: "Примеры команд", ar: "أوامر نموذجية"
  },
  "docs.content.revitAssistant.example1": {
    ko: "레벨 1의 모든 벽 선택", de: "Alle Wände auf Ebene 1 auswählen", fr: "Sélectionner tous les murs au niveau 1", es: "Seleccionar todas las paredes en el nivel 1",
    pt: "Selecionar todas as paredes no nível 1", ru: "Выбрать все стены на уровне 1", ar: "تحديد جميع الجدران في المستوى 1"
  },
  "docs.content.revitAssistant.example2": {
    ko: "선택한 문의 높이를 2100mm로 변경", de: "Höhe der ausgewählten Türen auf 2100mm ändern", fr: "Changer la hauteur des portes sélectionnées à 2100mm", es: "Cambiar la altura de las puertas seleccionadas a 2100mm",
    pt: "Alterar a altura das portas selecionadas para 2100mm", ru: "Изменить высоту выбранных дверей на 2100 мм", ar: "تغيير ارتفاع الأبواب المحددة إلى 2100 مم"
  },
  "docs.content.revitAssistant.example3": {
    ko: "모든 기계 장비의 일람표 작성", de: "Einen Zeitplan aller mechanischen Geräte erstellen", fr: "Créer un tableau de tous les équipements mécaniques", es: "Crear un cronograma de todo el equipo mecánico",
    pt: "Criar um cronograma de todos os equipamentos mecânicos", ru: "Создать спецификацию всего механического оборудования", ar: "إنشاء جدول لجميع المعدات الميكانيكية"
  },
  "docs.content.revitAssistant.example4": {
    ko: "방화 등급 파라미터가 누락된 모든 요소 찾기", de: "Alle Elemente mit fehlendem Brandschutzparameter finden", fr: "Trouver tous les éléments avec paramètre de résistance au feu manquant", es: "Encontrar todos los elementos con parámetro de resistencia al fuego faltante",
    pt: "Encontrar todos os elementos com parâmetro de classificação de incêndio ausente", ru: "Найти все элементы с отсутствующим параметром огнестойкости", ar: "البحث عن جميع العناصر ذات معامل التصنيف الناري المفقود"
  },
  "docs.content.revitAssistant.voiceControl": {
    ko: "음성 제어", de: "Sprachsteuerung", fr: "Contrôle vocal", es: "Control por voz",
    pt: "Controle por voz", ru: "Голосовое управление", ar: "التحكم الصوتي"
  },
  "docs.content.revitAssistant.voiceControlDesc": {
    ko: "마이크 버튼을 클릭하여 핸즈프리로 명령을 말합니다. 음성 제어는 모델에서 작업하면서 키보드로 전환하고 싶지 않을 때 완벽합니다.",
    de: "Klicken Sie auf die Mikrofontaste, um Befehle freihändig zu sprechen. Die Sprachsteuerung ist perfekt, wenn Sie im Modell arbeiten und nicht zur Tastatur wechseln möchten.",
    fr: "Cliquez sur le bouton du microphone pour prononcer des commandes mains libres. Le contrôle vocal est parfait lorsque vous travaillez dans le modèle et ne voulez pas passer au clavier.",
    es: "Haga clic en el botón del micrófono para hablar comandos manos libres. El control por voz es perfecto cuando está trabajando en el modelo y no quiere cambiar al teclado.",
    pt: "Clique no botão do microfone para falar comandos sem usar as mãos. O controle por voz é perfeito quando você está trabalhando no modelo e não quer mudar para o teclado.",
    ru: "Нажмите кнопку микрофона, чтобы произносить команды без рук. Голосовое управление идеально, когда вы работаете в модели и не хотите переключаться на клавиатуру.",
    ar: "انقر على زر الميكروفون لنطق الأوامر بدون استخدام اليدين. التحكم الصوتي مثالي عندما تعمل في النموذج ولا تريد التبديل إلى لوحة المفاتيح."
  },
  "docs.content.revitAssistant.codeExecution": {
    ko: "코드 실행", de: "Code-Ausführung", fr: "Exécution de code", es: "Ejecución de código",
    pt: "Execução de código", ru: "Выполнение кода", ar: "تنفيذ الكود"
  },
  "docs.content.revitAssistant.codeExecutionDesc": {
    ko: "AI는 복잡한 작업을 수행하기 위해 Python 또는 C# 스크립트를 작성하고 실행할 수 있습니다. 안전을 위해 실행 전에 생성된 코드를 검토하세요.",
    de: "Die KI kann Python- oder C#-Skripte schreiben und ausführen, um komplexe Aufgaben zu erledigen. Überprüfen Sie den generierten Code vor der Ausführung zur Sicherheit.",
    fr: "L'IA peut écrire et exécuter des scripts Python ou C# pour accomplir des tâches complexes. Vérifiez le code généré avant l'exécution pour la sécurité.",
    es: "La IA puede escribir y ejecutar scripts Python o C# para realizar tareas complejas. Revise el código generado antes de la ejecución por seguridad.",
    pt: "A IA pode escrever e executar scripts Python ou C# para realizar tarefas complexas. Revise o código gerado antes da execução por segurança.",
    ru: "ИИ может писать и выполнять скрипты Python или C# для выполнения сложных задач. Проверяйте сгенерированный код перед выполнением для безопасности.",
    ar: "يمكن للذكاء الاصطناعي كتابة وتنفيذ نصوص Python أو C# لإنجاز المهام المعقدة. راجع الكود المُنشأ قبل التنفيذ للأمان."
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
console.log('APPLYING PART 9 TRANSLATIONS (Docs comprehensive)');
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
console.log('PART 9 TRANSLATIONS APPLIED');
console.log('='.repeat(80));
