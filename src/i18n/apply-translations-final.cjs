const fs = require('fs');
const path = require('path');

// FINAL BATCH: All remaining missing translations
const translations = {
  // ============= TERMS - DEVELOPER =============
  "terms.developer.content.section5.subsection1.items.3": {
    ko: "기능에 대한 정확한 설명 제공",
    de: "Genaue Funktionsbeschreibungen bereitstellen",
    fr: "Fournir des descriptions précises des fonctionnalités",
    es: "Proporcionar descripciones precisas de la funcionalidad",
    pt: "Fornecer descrições precisas da funcionalidade",
    ru: "Предоставлять точные описания функциональности",
    ar: "تقديم أوصاف دقيقة للوظائف"
  },
  "terms.developer.content.section5.subsection2.items.3": {
    ja: "InvoratecAIへの適切な帰属表示",
    ko: "InvoratecAI에 대한 적절한 귀속 표시",
    de: "Angemessene Zuordnung zu InvoratecAI anzeigen",
    fr: "Afficher une attribution appropriée à InvoratecAI",
    es: "Mostrar la atribución apropiada a InvoratecAI",
    pt: "Exibir atribuição apropriada à InvoratecAI",
    ru: "Отображать соответствующую атрибуцию InvoratecAI",
    ar: "عرض الإسناد المناسب لـ InvoratecAI"
  },
  "terms.developer.content.section6.subsection1.items.3": {
    ja: "Revit操作の適切なエラー処理を実装",
    ko: "Revit 작업에 대한 적절한 오류 처리 구현",
    de: "Ordnungsgemäße Fehlerbehandlung für Revit-Operationen implementieren",
    fr: "Implémenter une gestion appropriée des erreurs pour les opérations Revit",
    es: "Implementar un manejo adecuado de errores para las operaciones de Revit",
    pt: "Implementar tratamento de erros adequado para operações do Revit",
    ru: "Реализовать надлежащую обработку ошибок для операций Revit",
    ar: "تنفيذ معالجة الأخطاء المناسبة لعمليات Revit"
  },
  "terms.developer.content.section9.items.2": {
    ja: "90日前の通知でAPIを廃止する場合があります",
    ko: "90일 전 통지로 API를 중단할 수 있습니다",
    de: "Wir können die API mit einer 90-tägigen Vorankündigung einstellen",
    fr: "Nous pouvons interrompre l'API avec un préavis de 90 jours",
    es: "Podemos descontinuar la API con un aviso de 90 días",
    pt: "Podemos descontinuar a API com aviso prévio de 90 dias",
    ru: "Мы можем прекратить работу API с уведомлением за 90 дней",
    ar: "قد نوقف واجهة برمجة التطبيقات بإشعار مدته 90 يومًا"
  },

  // ============= TERMS - DPA =============
  "terms.dpa.content.section1.items.4": {
    ko: "\"하위 처리자\"는 당사가 개인정보를 처리하도록 위탁한 제3자를 의미합니다",
    de: "\"Unterauftragsverarbeiter\" bezeichnet jeden Dritten, den wir mit der Verarbeitung personenbezogener Daten beauftragt haben",
    fr: "\"Sous-traitant\" désigne tout tiers que nous avons engagé pour traiter les Données personnelles",
    es: "\"Subprocesador\" significa cualquier tercero contratado por nosotros para procesar Datos personales",
    pt: "\"Subprocessador\" significa qualquer terceiro contratado por nós para processar Dados pessoais",
    ru: "\"Субпроцессор\" означает любую третью сторону, привлечённую нами для обработки Персональных данных",
    ar: "\"المعالج الفرعي\" يعني أي طرف ثالث نستعين به لمعالجة البيانات الشخصية"
  },
  "terms.dpa.content.section1.items.5": {
    ko: "\"보안 사고\"는 개인정보에 대한 무단 접근, 취득 또는 공개를 의미합니다",
    de: "\"Sicherheitsvorfall\" bezeichnet jeden unbefugten Zugriff auf, Erwerb von oder Offenlegung von personenbezogenen Daten",
    fr: "\"Incident de sécurité\" désigne tout accès non autorisé, acquisition ou divulgation de Données personnelles",
    es: "\"Incidente de seguridad\" significa cualquier acceso, adquisición o divulgación no autorizada de Datos personales",
    pt: "\"Incidente de segurança\" significa qualquer acesso, aquisição ou divulgação não autorizada de Dados pessoais",
    ru: "\"Инцидент безопасности\" означает любой несанкционированный доступ, приобретение или раскрытие Персональных данных",
    ar: "\"حادث أمني\" يعني أي وصول أو حيازة أو كشف غير مصرح به للبيانات الشخصية"
  },
  "terms.dpa.content.section3.subsection2.items.3": {
    ko: "기술 데이터: IP 주소, 기기 정보, 사용 로그",
    de: "Technische Daten: IP-Adressen, Geräteinformationen, Nutzungsprotokolle",
    fr: "Données techniques : adresses IP, informations sur l'appareil, journaux d'utilisation",
    es: "Datos técnicos: direcciones IP, información del dispositivo, registros de uso",
    pt: "Dados técnicos: endereços IP, informações do dispositivo, registros de uso",
    ru: "Технические данные: IP-адреса, информация об устройстве, журналы использования",
    ar: "البيانات التقنية: عناوين IP، معلومات الجهاز، سجلات الاستخدام"
  },
  "terms.dpa.content.section3.subsection2.items.4": {
    ko: "프로젝트 데이터: 작업 할당, 댓글, 협업 기록",
    de: "Projektdaten: Aufgabenzuweisungen, Kommentare, Kollaborationsverlauf",
    fr: "Données de projet : attributions de tâches, commentaires, historique de collaboration",
    es: "Datos del proyecto: asignaciones de tareas, comentarios, historial de colaboración",
    pt: "Dados do projeto: atribuições de tarefas, comentários, histórico de colaboração",
    ru: "Данные проекта: назначения задач, комментарии, история совместной работы",
    ar: "بيانات المشروع: تعيينات المهام، التعليقات، سجل التعاون"
  },
  "terms.dpa.content.section3.subsection3.items.4": {
    ko: "분석 및 서비스 개선",
    de: "Analyse und Serviceverbesserung",
    fr: "Analyse et amélioration du service",
    es: "Análisis y mejora del servicio",
    pt: "Análise e melhoria do serviço",
    ru: "Аналитика и улучшение сервиса",
    ar: "التحليلات وتحسين الخدمة"
  },
  "terms.dpa.content.section3.subsection3.items.5": {
    ko: "기술 지원 및 문제 해결",
    de: "Technischer Support und Fehlerbehebung",
    fr: "Support technique et dépannage",
    es: "Soporte técnico y solución de problemas",
    pt: "Suporte técnico e solução de problemas",
    ru: "Техническая поддержка и устранение неполадок",
    ar: "الدعم الفني واستكشاف الأخطاء وإصلاحها"
  },
  "terms.dpa.content.section4.subsection3.items.4": {
    ko: "직원 보안 교육 및 인식",
    de: "Sicherheitsschulung und Bewusstseinsbildung für Mitarbeiter",
    fr: "Formation et sensibilisation des employés à la sécurité",
    es: "Capacitación y concientización de seguridad para empleados",
    pt: "Treinamento e conscientização de segurança para funcionários",
    ru: "Обучение и осведомлённость сотрудников в области безопасности",
    ar: "تدريب الموظفين على الأمان والتوعية"
  },
  "terms.dpa.content.section5.subsection2.items.3": {
    ko: "새로운 하위 처리자에 대해 이의를 제기할 수 있도록 허용",
    de: "Ermöglichen, neuen Unterauftragsverarbeitern zu widersprechen",
    fr: "Vous permettre de vous opposer aux nouveaux sous-traitants",
    es: "Permitirle objetar a nuevos subprocesadores",
    pt: "Permitir que você objete a novos subprocessadores",
    ru: "Разрешить вам возражать против новых субпроцессоров",
    ar: "السماح لك بالاعتراض على المعالجين الفرعيين الجدد"
  },
  "terms.dpa.content.section6.items.4": {
    ko: "처리 제한권",
    de: "Recht auf Einschränkung der Verarbeitung",
    fr: "Droit à la limitation du traitement",
    es: "Derecho a la limitación del tratamiento",
    pt: "Direito à limitação do processamento",
    ru: "Право на ограничение обработки",
    ar: "الحق في تقييد المعالجة"
  },
  "terms.dpa.content.section6.items.5": {
    ko: "이의 제기권",
    de: "Widerspruchsrecht",
    fr: "Droit d'opposition",
    es: "Derecho de oposición",
    pt: "Direito de oposição",
    ru: "Право на возражение",
    ar: "الحق في الاعتراض"
  },
  "terms.dpa.content.section7.subsection2.items.3": {
    ko: "사고 해결을 위해 취해졌거나 제안된 조치",
    de: "Ergriffene oder vorgeschlagene Maßnahmen zur Behebung des Vorfalls",
    fr: "Mesures prises ou proposées pour remédier à l'incident",
    es: "Medidas tomadas o propuestas para abordar el incidente",
    pt: "Medidas tomadas ou propostas para resolver o incidente",
    ru: "Принятые или предложенные меры по устранению инцидента",
    ar: "التدابير المتخذة أو المقترحة لمعالجة الحادث"
  },

  // ============= TERMS - AI =============
  "terms.ai.content.section4.subsection1.items.3": {
    ko: "AI 제안을 사용하여 워크플로우 개선",
    de: "Verwendung von KI-Vorschlägen zur Verbesserung Ihrer Arbeitsabläufe",
    fr: "Utiliser les suggestions de l'IA pour améliorer vos flux de travail",
    es: "Usar sugerencias de IA para mejorar sus flujos de trabajo",
    pt: "Usar sugestões de IA para melhorar seus fluxos de trabalho",
    ru: "Использование предложений ИИ для улучшения ваших рабочих процессов",
    ar: "استخدام اقتراحات الذكاء الاصطناعي لتحسين سير العمل"
  },

  // ============= TERMS - TOS =============
  "terms.tos.content.section4.items.3": {
    ko: "소프트웨어의 역공학, 디컴파일 또는 디스어셈블",
    de: "Reverse Engineering, Dekompilierung oder Disassemblierung unserer Software",
    fr: "Effectuer de l'ingénierie inverse, décompiler ou désassembler notre logiciel",
    es: "Realizar ingeniería inversa, descompilar o desensamblar nuestro software",
    pt: "Fazer engenharia reversa, descompilar ou desmontar nosso software",
    ru: "Обратная разработка, декомпиляция или дизассемблирование нашего программного обеспечения",
    ar: "الهندسة العكسية أو فك التجميع أو تفكيك برنامجنا"
  },
  "terms.tos.content.section4.items.4": {
    ko: "자동화된 도구를 사용하여 데이터 스크래핑 또는 추출",
    de: "Verwendung automatisierter Tools zum Scrapen oder Extrahieren von Daten",
    fr: "Utiliser des outils automatisés pour extraire des données",
    es: "Usar herramientas automatizadas para extraer datos",
    pt: "Usar ferramentas automatizadas para extrair dados",
    ru: "Использование автоматизированных инструментов для сбора или извлечения данных",
    ar: "استخدام الأدوات الآلية لاستخراج البيانات"
  },
  "terms.tos.content.section4.items.5": {
    ko: "승인 없이 서비스 재판매 또는 재배포",
    de: "Wiederverkauf oder Weiterverteilung der Dienste ohne Genehmigung",
    fr: "Revendre ou redistribuer les Services sans autorisation",
    es: "Revender o redistribuir los Servicios sin autorización",
    pt: "Revender ou redistribuir os Serviços sem autorização",
    ru: "Перепродажа или распространение Услуг без разрешения",
    ar: "إعادة بيع أو توزيع الخدمات بدون إذن"
  },
  "terms.tos.content.section4.items.6": {
    ko: "보안 또는 접근 제어 우회",
    de: "Umgehung von Sicherheits- oder Zugangskontrollen",
    fr: "Contourner tout contrôle de sécurité ou d'accès",
    es: "Eludir cualquier control de seguridad o acceso",
    pt: "Contornar quaisquer controles de segurança ou acesso",
    ru: "Обход любых мер безопасности или контроля доступа",
    ar: "التحايل على أي ضوابط أمنية أو وصول"
  },
  "terms.tos.content.section4.items.7": {
    ko: "AI 기능을 사용하여 유해하거나 오해의 소지가 있는 콘텐츠 생성",
    de: "Verwendung der KI-Funktionen zur Generierung schädlicher oder irreführender Inhalte",
    fr: "Utiliser les fonctionnalités d'IA pour générer du contenu nuisible ou trompeur",
    es: "Usar las funciones de IA para generar contenido dañino o engañoso",
    pt: "Usar os recursos de IA para gerar conteúdo prejudicial ou enganoso",
    ru: "Использование функций ИИ для создания вредоносного или вводящего в заблуждение контента",
    ar: "استخدام ميزات الذكاء الاصطناعي لإنشاء محتوى ضار أو مضلل"
  },

  // ============= FEATURES PAGE - DATA MODELS - TEAM MEMBER =============
  "featuresPage.dataModels.teamMember.properties.name.name": {
    ko: "이름", de: "Name", fr: "Nom", es: "Nombre",
    pt: "Nome", ru: "Имя", ar: "الاسم"
  },
  "featuresPage.dataModels.teamMember.properties.name.type": {
    ko: "텍스트", de: "Text", fr: "Texte", es: "Texto",
    pt: "Texto", ru: "Текст", ar: "نص"
  },
  "featuresPage.dataModels.teamMember.properties.name.desc": {
    ko: "팀원 이름", de: "Name des Teammitglieds", fr: "Nom du membre de l'équipe", es: "Nombre del miembro del equipo",
    pt: "Nome do membro da equipe", ru: "Имя члена команды", ar: "اسم عضو الفريق"
  },
  "featuresPage.dataModels.teamMember.properties.email.name": {
    ko: "이메일", de: "E-Mail", fr: "E-mail", es: "Correo electrónico",
    pt: "E-mail", ru: "Электронная почта", ar: "البريد الإلكتروني"
  },
  "featuresPage.dataModels.teamMember.properties.email.type": {
    ko: "이메일", de: "E-Mail", fr: "E-mail", es: "Correo electrónico",
    pt: "E-mail", ru: "Электронная почта", ar: "البريد الإلكتروني"
  },
  "featuresPage.dataModels.teamMember.properties.email.desc": {
    ko: "연락처 이메일", de: "Kontakt-E-Mail", fr: "E-mail de contact", es: "Correo de contacto",
    pt: "E-mail de contato", ru: "Контактный email", ar: "البريد الإلكتروني للتواصل"
  },
  "featuresPage.dataModels.teamMember.properties.role.name": {
    ko: "역할", de: "Rolle", fr: "Rôle", es: "Rol",
    pt: "Função", ru: "Роль", ar: "الدور"
  },
  "featuresPage.dataModels.teamMember.properties.role.type": {
    ko: "선택", de: "Auswahl", fr: "Sélection", es: "Selección",
    pt: "Seleção", ru: "Выбор", ar: "اختيار"
  },
  "featuresPage.dataModels.teamMember.properties.role.desc": {
    ko: "모델러, 코디네이터, 리드 등", de: "Modellierer, Koordinator, Leiter usw.", fr: "Modélisateur, Coordinateur, Responsable, etc.", es: "Modelador, Coordinador, Líder, etc.",
    pt: "Modelador, Coordenador, Líder, etc.", ru: "Моделировщик, координатор, руководитель и т.д.", ar: "المصمم، المنسق، القائد، إلخ."
  },

  // ============= FEATURES PAGE - DATA MODELS - MILESTONE =============
  "featuresPage.dataModels.milestone.properties.name.name": {
    ko: "이름", de: "Name", fr: "Nom", es: "Nombre",
    pt: "Nome", ru: "Имя", ar: "الاسم"
  },
  "featuresPage.dataModels.milestone.properties.name.type": {
    ko: "텍스트", de: "Text", fr: "Texte", es: "Texto",
    pt: "Texto", ru: "Текст", ar: "نص"
  },
  "featuresPage.dataModels.milestone.properties.name.desc": {
    ko: "마일스톤 이름", de: "Meilensteinname", fr: "Nom du jalon", es: "Nombre del hito",
    pt: "Nome do marco", ru: "Название вехи", ar: "اسم المعلم"
  },
  "featuresPage.dataModels.milestone.properties.dueDate.name": {
    ko: "마감일", de: "Fälligkeitsdatum", fr: "Date d'échéance", es: "Fecha de vencimiento",
    pt: "Data de vencimento", ru: "Срок выполнения", ar: "تاريخ الاستحقاق"
  },
  "featuresPage.dataModels.milestone.properties.dueDate.type": {
    ko: "날짜", de: "Datum", fr: "Date", es: "Fecha",
    pt: "Data", ru: "Дата", ar: "التاريخ"
  },
  "featuresPage.dataModels.milestone.properties.dueDate.desc": {
    ko: "목표 완료일", de: "Zieltermin für die Fertigstellung", fr: "Date cible d'achèvement", es: "Fecha objetivo de finalización",
    pt: "Data prevista de conclusão", ru: "Целевая дата завершения", ar: "تاريخ الإنجاز المستهدف"
  },
  "featuresPage.dataModels.milestone.properties.status.name": {
    ko: "상태", de: "Status", fr: "Statut", es: "Estado",
    pt: "Status", ru: "Статус", ar: "الحالة"
  },
  "featuresPage.dataModels.milestone.properties.status.type": {
    ko: "선택", de: "Auswahl", fr: "Sélection", es: "Selección",
    pt: "Seleção", ru: "Выбор", ar: "اختيار"
  },
  "featuresPage.dataModels.milestone.properties.status.desc": {
    ko: "시작 전/진행 중/위험/완료/지연", de: "Nicht gestartet/In Bearbeitung/Gefährdet/Abgeschlossen/Verzögert", fr: "Non démarré/En cours/À risque/Terminé/Retardé", es: "No iniciado/En progreso/En riesgo/Completado/Retrasado",
    pt: "Não iniciado/Em andamento/Em risco/Concluído/Atrasado", ru: "Не начато/В процессе/Под угрозой/Завершено/Отложено", ar: "لم يبدأ/قيد التنفيذ/في خطر/مكتمل/متأخر"
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
console.log('APPLYING FINAL TRANSLATIONS (All remaining keys)');
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
console.log('FINAL TRANSLATIONS APPLIED');
console.log('='.repeat(80));
