const fs = require('fs');
const path = require('path');

// docs.content.revitAssistant translations
const translations = {
  ja: {
    overview: "概要",
    overviewDesc: "AIアシスタントを使用すると、自然言語でRevitを制御できます。やりたいことを平易な言葉で説明すると、AIが適切なコマンドやスクリプトを実行します。",
    naturalLanguage: "自然言語コマンド",
    naturalLanguageDesc: "会話形式でコマンドを入力または話します。AIはコンテキストを理解し、複雑なリクエストを処理できます。",
    exampleCommands: "コマンド例",
    example1: "レベル1のすべての壁を選択",
    example2: "選択したドアの高さを2100mmに変更",
    example3: "すべての機械設備の集計表を作成",
    example4: "防火等級パラメータが欠落しているすべての要素を検索",
    voiceControl: "音声制御",
    voiceControlDesc: "マイクボタンをクリックしてハンズフリーでコマンドを話します。音声制御は、モデルで作業中にキーボードに切り替えたくない場合に最適です。",
    codeExecution: "コード実行",
    codeExecutionDesc: "AIはPythonまたはC#スクリプトを書いて複雑なタスクを実行できます。安全のため、実行前に生成されたコードを確認してください。",
    toolMatching: "スマートツールマッチング",
    toolMatchingDesc: "AIはリクエストをライブラリ内の利用可能なツールに自動的にマッチングします。適切なツールが存在する場合、新しいコードを書く代わりにそれを使用することを提案します。"
  },
  ko: {
    overview: "개요",
    overviewDesc: "AI 어시스턴트를 사용하면 자연어로 Revit을 제어할 수 있습니다. 원하는 작업을 일반 언어로 설명하면 AI가 적절한 명령이나 스크립트를 실행합니다.",
    naturalLanguage: "자연어 명령",
    naturalLanguageDesc: "대화 형식으로 명령을 입력하거나 말하세요. AI는 문맥을 이해하고 복잡한 요청을 처리할 수 있습니다.",
    exampleCommands: "명령 예시",
    example1: "레벨 1의 모든 벽 선택",
    example2: "선택한 문 높이를 2100mm로 변경",
    example3: "모든 기계 장비의 일정표 생성",
    example4: "방화 등급 매개변수가 누락된 모든 요소 찾기",
    voiceControl: "음성 제어",
    voiceControlDesc: "마이크 버튼을 클릭하여 핸즈프리로 명령을 말하세요. 음성 제어는 모델 작업 중 키보드로 전환하고 싶지 않을 때 완벽합니다.",
    codeExecution: "코드 실행",
    codeExecutionDesc: "AI는 복잡한 작업을 수행하기 위해 Python 또는 C# 스크립트를 작성하고 실행할 수 있습니다. 안전을 위해 실행 전에 생성된 코드를 검토하세요.",
    toolMatching: "스마트 도구 매칭",
    toolMatchingDesc: "AI는 라이브러리에서 사용 가능한 도구에 요청을 자동으로 매칭합니다. 적합한 도구가 있으면 새 코드를 작성하는 대신 해당 도구 사용을 제안합니다."
  },
  de: {
    overview: "Übersicht",
    overviewDesc: "Der KI-Assistent ermöglicht die Steuerung von Revit mit natürlicher Sprache. Beschreiben Sie, was Sie tun möchten, und die KI führt die entsprechenden Befehle oder Skripte aus.",
    naturalLanguage: "Natürliche Sprachbefehle",
    naturalLanguageDesc: "Geben Sie Befehle in Umgangssprache ein oder sprechen Sie sie. Die KI versteht den Kontext und kann komplexe Anfragen verarbeiten.",
    exampleCommands: "Beispielbefehle",
    example1: "Wähle alle Wände auf Ebene 1",
    example2: "Ändere die Höhe der ausgewählten Türen auf 2100mm",
    example3: "Erstelle eine Tabelle aller technischen Ausrüstung",
    example4: "Finde alle Elemente mit fehlendem Brandschutz-Parameter",
    voiceControl: "Sprachsteuerung",
    voiceControlDesc: "Klicken Sie auf die Mikrofontaste, um Befehle freihändig zu sprechen. Sprachsteuerung ist ideal, wenn Sie im Modell arbeiten und nicht zur Tastatur wechseln möchten.",
    codeExecution: "Code-Ausführung",
    codeExecutionDesc: "Die KI kann Python- oder C#-Skripte schreiben und ausführen, um komplexe Aufgaben zu erledigen. Überprüfen Sie generierten Code vor der Ausführung aus Sicherheitsgründen.",
    toolMatching: "Intelligentes Tool-Matching",
    toolMatchingDesc: "Die KI ordnet Ihre Anfrage automatisch verfügbaren Tools in Ihrer Bibliothek zu. Wenn ein passendes Tool existiert, schlägt sie vor, es zu verwenden, anstatt neuen Code zu schreiben."
  },
  fr: {
    overview: "Vue d'ensemble",
    overviewDesc: "L'Assistant IA vous permet de contrôler Revit en utilisant le langage naturel. Décrivez ce que vous voulez faire en langage simple, et l'IA exécutera les commandes ou scripts appropriés.",
    naturalLanguage: "Commandes en langage naturel",
    naturalLanguageDesc: "Tapez ou parlez des commandes en langage conversationnel. L'IA comprend le contexte et peut gérer des demandes complexes.",
    exampleCommands: "Exemples de commandes",
    example1: "Sélectionner tous les murs du Niveau 1",
    example2: "Changer la hauteur des portes sélectionnées à 2100mm",
    example3: "Créer une nomenclature de tous les équipements mécaniques",
    example4: "Trouver tous les éléments sans paramètre de résistance au feu",
    voiceControl: "Contrôle vocal",
    voiceControlDesc: "Cliquez sur le bouton microphone pour parler des commandes mains libres. Le contrôle vocal est parfait lorsque vous travaillez dans le modèle et ne voulez pas passer au clavier.",
    codeExecution: "Exécution de code",
    codeExecutionDesc: "L'IA peut écrire et exécuter des scripts Python ou C# pour accomplir des tâches complexes. Vérifiez le code généré avant l'exécution pour des raisons de sécurité.",
    toolMatching: "Correspondance intelligente d'outils",
    toolMatchingDesc: "L'IA fait automatiquement correspondre votre demande aux outils disponibles dans votre bibliothèque. Si un outil approprié existe, elle suggérera de l'utiliser plutôt que d'écrire du nouveau code."
  },
  es: {
    overview: "Descripción general",
    overviewDesc: "El Asistente IA te permite controlar Revit usando lenguaje natural. Describe lo que quieres hacer en lenguaje simple, y la IA ejecutará los comandos o scripts apropiados.",
    naturalLanguage: "Comandos en lenguaje natural",
    naturalLanguageDesc: "Escribe o habla comandos en lenguaje conversacional. La IA entiende el contexto y puede manejar solicitudes complejas.",
    exampleCommands: "Comandos de ejemplo",
    example1: "Seleccionar todas las paredes del Nivel 1",
    example2: "Cambiar la altura de las puertas seleccionadas a 2100mm",
    example3: "Crear una tabla de todos los equipos mecánicos",
    example4: "Encontrar todos los elementos sin parámetro de clasificación de fuego",
    voiceControl: "Control por voz",
    voiceControlDesc: "Haz clic en el botón del micrófono para hablar comandos sin manos. El control por voz es perfecto cuando estás trabajando en el modelo y no quieres cambiar al teclado.",
    codeExecution: "Ejecución de código",
    codeExecutionDesc: "La IA puede escribir y ejecutar scripts de Python o C# para realizar tareas complejas. Revisa el código generado antes de ejecutarlo por seguridad.",
    toolMatching: "Coincidencia inteligente de herramientas",
    toolMatchingDesc: "La IA hace coincidir automáticamente tu solicitud con las herramientas disponibles en tu biblioteca. Si existe una herramienta adecuada, sugerirá usarla en lugar de escribir código nuevo."
  },
  pt: {
    overview: "Visão geral",
    overviewDesc: "O Assistente IA permite controlar o Revit usando linguagem natural. Descreva o que você quer fazer em linguagem simples, e a IA executará os comandos ou scripts apropriados.",
    naturalLanguage: "Comandos em linguagem natural",
    naturalLanguageDesc: "Digite ou fale comandos em linguagem conversacional. A IA entende o contexto e pode lidar com solicitações complexas.",
    exampleCommands: "Comandos de exemplo",
    example1: "Selecionar todas as paredes do Nível 1",
    example2: "Alterar a altura das portas selecionadas para 2100mm",
    example3: "Criar uma tabela de todos os equipamentos mecânicos",
    example4: "Encontrar todos os elementos sem parâmetro de classificação de incêndio",
    voiceControl: "Controle por voz",
    voiceControlDesc: "Clique no botão do microfone para falar comandos sem as mãos. O controle por voz é perfeito quando você está trabalhando no modelo e não quer mudar para o teclado.",
    codeExecution: "Execução de código",
    codeExecutionDesc: "A IA pode escrever e executar scripts Python ou C# para realizar tarefas complexas. Revise o código gerado antes da execução por segurança.",
    toolMatching: "Correspondência inteligente de ferramentas",
    toolMatchingDesc: "A IA faz a correspondência automática da sua solicitação com as ferramentas disponíveis na sua biblioteca. Se existir uma ferramenta adequada, ela sugerirá usá-la em vez de escrever novo código."
  },
  ru: {
    overview: "Обзор",
    overviewDesc: "ИИ-ассистент позволяет управлять Revit с помощью естественного языка. Опишите, что вы хотите сделать, простым языком, и ИИ выполнит соответствующие команды или скрипты.",
    naturalLanguage: "Команды на естественном языке",
    naturalLanguageDesc: "Вводите или произносите команды разговорным языком. ИИ понимает контекст и может обрабатывать сложные запросы.",
    exampleCommands: "Примеры команд",
    example1: "Выбрать все стены на Уровне 1",
    example2: "Изменить высоту выбранных дверей на 2100мм",
    example3: "Создать спецификацию всего механического оборудования",
    example4: "Найти все элементы с отсутствующим параметром огнестойкости",
    voiceControl: "Голосовое управление",
    voiceControlDesc: "Нажмите кнопку микрофона, чтобы произносить команды без рук. Голосовое управление идеально, когда вы работаете в модели и не хотите переключаться на клавиатуру.",
    codeExecution: "Выполнение кода",
    codeExecutionDesc: "ИИ может писать и выполнять скрипты Python или C# для выполнения сложных задач. Проверяйте сгенерированный код перед выполнением для безопасности.",
    toolMatching: "Умный подбор инструментов",
    toolMatchingDesc: "ИИ автоматически сопоставляет ваш запрос с доступными инструментами в вашей библиотеке. Если подходящий инструмент существует, он предложит использовать его вместо написания нового кода."
  },
  ar: {
    overview: "نظرة عامة",
    overviewDesc: "يتيح لك مساعد الذكاء الاصطناعي التحكم في Revit باستخدام اللغة الطبيعية. صف ما تريد القيام به بلغة بسيطة، وسيقوم الذكاء الاصطناعي بتنفيذ الأوامر أو النصوص المناسبة.",
    naturalLanguage: "أوامر اللغة الطبيعية",
    naturalLanguageDesc: "اكتب أو انطق الأوامر بلغة المحادثة. يفهم الذكاء الاصطناعي السياق ويمكنه التعامل مع الطلبات المعقدة.",
    exampleCommands: "أمثلة على الأوامر",
    example1: "تحديد جميع الجدران في المستوى 1",
    example2: "تغيير ارتفاع الأبواب المحددة إلى 2100 مم",
    example3: "إنشاء جدول لجميع المعدات الميكانيكية",
    example4: "العثور على جميع العناصر التي تفتقر إلى معامل تصنيف الحريق",
    voiceControl: "التحكم الصوتي",
    voiceControlDesc: "انقر على زر الميكروفون للتحدث بالأوامر بدون استخدام اليدين. التحكم الصوتي مثالي عندما تعمل في النموذج ولا تريد التبديل إلى لوحة المفاتيح.",
    codeExecution: "تنفيذ الكود",
    codeExecutionDesc: "يمكن للذكاء الاصطناعي كتابة وتنفيذ نصوص Python أو C# لإنجاز المهام المعقدة. راجع الكود المُنشأ قبل التنفيذ للسلامة.",
    toolMatching: "المطابقة الذكية للأدوات",
    toolMatchingDesc: "يقوم الذكاء الاصطناعي تلقائياً بمطابقة طلبك مع الأدوات المتاحة في مكتبتك. إذا وجدت أداة مناسبة، سيقترح استخدامها بدلاً من كتابة كود جديد."
  }
};

// Apply translations
const languages = ['ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('Applying docs.content.revitAssistant translations...\n');

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Ensure the path exists
    if (!data.docs) data.docs = {};
    if (!data.docs.content) data.docs.content = {};
    if (!data.docs.content.revitAssistant) data.docs.content.revitAssistant = {};

    // Apply translations
    Object.assign(data.docs.content.revitAssistant, translations[lang]);

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`${lang.toUpperCase()}: Applied revitAssistant translations`);
  } catch (error) {
    console.error(`${lang.toUpperCase()}: Error - ${error.message}`);
  }
});

console.log('\nDocs revitAssistant translations complete!');
