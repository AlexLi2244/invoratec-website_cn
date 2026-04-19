const fs = require('fs');
const path = require('path');

// DATA MODELS TRANSLATIONS - Full nested structure matching English
const translations = {
  // ============= TEAM MEMBER PROPERTIES =============
  "featuresPage.dataModels.teamMember.properties.name": {
    ko: { name: "이름", type: "텍스트", desc: "팀원 이름" },
    de: { name: "Name", type: "Text", desc: "Name des Teammitglieds" },
    fr: { name: "Nom", type: "Texte", desc: "Nom du membre de l'équipe" },
    es: { name: "Nombre", type: "Texto", desc: "Nombre del miembro del equipo" },
    pt: { name: "Nome", type: "Texto", desc: "Nome do membro da equipe" },
    ru: { name: "Имя", type: "Текст", desc: "Имя члена команды" },
    ar: { name: "الاسم", type: "نص", desc: "اسم عضو الفريق" }
  },
  "featuresPage.dataModels.teamMember.properties.email": {
    ko: { name: "이메일", type: "이메일", desc: "연락처 이메일" },
    de: { name: "E-Mail", type: "E-Mail", desc: "Kontakt-E-Mail" },
    fr: { name: "E-mail", type: "E-mail", desc: "E-mail de contact" },
    es: { name: "Correo electrónico", type: "Correo electrónico", desc: "Correo de contacto" },
    pt: { name: "E-mail", type: "E-mail", desc: "E-mail de contato" },
    ru: { name: "Электронная почта", type: "Электронная почта", desc: "Контактный email" },
    ar: { name: "البريد الإلكتروني", type: "البريد الإلكتروني", desc: "البريد الإلكتروني للتواصل" }
  },
  "featuresPage.dataModels.teamMember.properties.role": {
    ko: { name: "역할", type: "선택", desc: "모델러, 코디네이터, 리드 등" },
    de: { name: "Rolle", type: "Auswahl", desc: "Modellierer, Koordinator, Leiter usw." },
    fr: { name: "Rôle", type: "Sélection", desc: "Modélisateur, Coordinateur, Responsable, etc." },
    es: { name: "Rol", type: "Selección", desc: "Modelador, Coordinador, Líder, etc." },
    pt: { name: "Função", type: "Seleção", desc: "Modelador, Coordenador, Líder, etc." },
    ru: { name: "Роль", type: "Выбор", desc: "Моделировщик, координатор, руководитель и т.д." },
    ar: { name: "الدور", type: "اختيار", desc: "المصمم، المنسق، القائد، إلخ." }
  },
  "featuresPage.dataModels.teamMember.properties.discipline": {
    ko: { name: "분야", type: "선택", desc: "MEP, 구조, 건축 등" },
    de: { name: "Disziplin", type: "Auswahl", desc: "MEP, Tragwerk, Architektur usw." },
    fr: { name: "Discipline", type: "Sélection", desc: "MEP, Structure, Architecture, etc." },
    es: { name: "Disciplina", type: "Selección", desc: "MEP, Estructural, Arquitectónico, etc." },
    pt: { name: "Disciplina", type: "Seleção", desc: "MEP, Estrutural, Arquitetônico, etc." },
    ru: { name: "Дисциплина", type: "Выбор", desc: "MEP, конструктив, архитектура и т.д." },
    ar: { name: "التخصص", type: "اختيار", desc: "MEP، هيكلي، معماري، إلخ." }
  },
  "featuresPage.dataModels.teamMember.properties.hourlyRate": {
    ko: { name: "시간당 요율", type: "통화", desc: "시간당 비용" },
    de: { name: "Stundensatz", type: "Währung", desc: "Kosten pro Stunde" },
    fr: { name: "Taux horaire", type: "Devise", desc: "Coût par heure" },
    es: { name: "Tarifa por hora", type: "Moneda", desc: "Costo por hora" },
    pt: { name: "Taxa horária", type: "Moeda", desc: "Custo por hora" },
    ru: { name: "Почасовая ставка", type: "Валюта", desc: "Стоимость в час" },
    ar: { name: "الأجر بالساعة", type: "العملة", desc: "التكلفة بالساعة" }
  },
  "featuresPage.dataModels.teamMember.properties.hoursSpent": {
    ko: { name: "소요 시간", type: "숫자", desc: "기록된 시간" },
    de: { name: "Verbrachte Stunden", type: "Zahl", desc: "Protokollierte Stunden" },
    fr: { name: "Heures passées", type: "Nombre", desc: "Heures enregistrées" },
    es: { name: "Horas empleadas", type: "Número", desc: "Horas registradas" },
    pt: { name: "Horas gastas", type: "Número", desc: "Horas registradas" },
    ru: { name: "Затраченные часы", type: "Число", desc: "Зарегистрированные часы" },
    ar: { name: "الساعات المستغرقة", type: "رقم", desc: "الساعات المسجلة" }
  },
  "featuresPage.dataModels.teamMember.properties.budgetedHours": {
    ko: { name: "예산 시간", type: "숫자", desc: "할당된 시간" },
    de: { name: "Budgetierte Stunden", type: "Zahl", desc: "Zugewiesene Stunden" },
    fr: { name: "Heures budgétées", type: "Nombre", desc: "Heures allouées" },
    es: { name: "Horas presupuestadas", type: "Número", desc: "Horas asignadas" },
    pt: { name: "Horas orçadas", type: "Número", desc: "Horas alocadas" },
    ru: { name: "Запланированные часы", type: "Число", desc: "Выделенные часы" },
    ar: { name: "الساعات المخططة", type: "رقم", desc: "الساعات المخصصة" }
  },
  "featuresPage.dataModels.teamMember.properties.totalCost": {
    ko: { name: "총 비용", type: "계산됨", desc: "요율 × 시간" },
    de: { name: "Gesamtkosten", type: "Berechnet", desc: "Satz × Stunden" },
    fr: { name: "Coût total", type: "Calculé", desc: "Taux × Heures" },
    es: { name: "Costo total", type: "Calculado", desc: "Tarifa × Horas" },
    pt: { name: "Custo total", type: "Calculado", desc: "Taxa × Horas" },
    ru: { name: "Общая стоимость", type: "Расчётное", desc: "Ставка × Часы" },
    ar: { name: "التكلفة الإجمالية", type: "محسوب", desc: "المعدل × الساعات" }
  },
  "featuresPage.dataModels.teamMember.properties.utilization": {
    ko: { name: "활용률", type: "계산됨", desc: "시간/예산 %" },
    de: { name: "Auslastung", type: "Berechnet", desc: "Stunden/Budget %" },
    fr: { name: "Utilisation", type: "Calculé", desc: "Heures/Budget %" },
    es: { name: "Utilización", type: "Calculado", desc: "Horas/Presupuesto %" },
    pt: { name: "Utilização", type: "Calculado", desc: "Horas/Orçamento %" },
    ru: { name: "Загруженность", type: "Расчётное", desc: "Часы/Бюджет %" },
    ar: { name: "الاستخدام", type: "محسوب", desc: "الساعات/الميزانية %" }
  },

  // ============= MILESTONE PROPERTIES =============
  "featuresPage.dataModels.milestone.properties.name": {
    ko: { name: "이름", type: "텍스트", desc: "마일스톤 이름" },
    de: { name: "Name", type: "Text", desc: "Meilensteinname" },
    fr: { name: "Nom", type: "Texte", desc: "Nom du jalon" },
    es: { name: "Nombre", type: "Texto", desc: "Nombre del hito" },
    pt: { name: "Nome", type: "Texto", desc: "Nome do marco" },
    ru: { name: "Имя", type: "Текст", desc: "Название вехи" },
    ar: { name: "الاسم", type: "نص", desc: "اسم المعلم" }
  },
  "featuresPage.dataModels.milestone.properties.dueDate": {
    ko: { name: "마감일", type: "날짜", desc: "목표 완료일" },
    de: { name: "Fälligkeitsdatum", type: "Datum", desc: "Zieltermin für die Fertigstellung" },
    fr: { name: "Date d'échéance", type: "Date", desc: "Date cible d'achèvement" },
    es: { name: "Fecha de vencimiento", type: "Fecha", desc: "Fecha objetivo de finalización" },
    pt: { name: "Data de vencimento", type: "Data", desc: "Data prevista de conclusão" },
    ru: { name: "Срок выполнения", type: "Дата", desc: "Целевая дата завершения" },
    ar: { name: "تاريخ الاستحقاق", type: "التاريخ", desc: "تاريخ الإنجاز المستهدف" }
  },
  "featuresPage.dataModels.milestone.properties.status": {
    ko: { name: "상태", type: "선택", desc: "시작 전/진행 중/위험/완료/지연" },
    de: { name: "Status", type: "Auswahl", desc: "Nicht gestartet/In Bearbeitung/Gefährdet/Abgeschlossen/Verzögert" },
    fr: { name: "Statut", type: "Sélection", desc: "Non démarré/En cours/À risque/Terminé/Retardé" },
    es: { name: "Estado", type: "Selección", desc: "No iniciado/En progreso/En riesgo/Completado/Retrasado" },
    pt: { name: "Status", type: "Seleção", desc: "Não iniciado/Em andamento/Em risco/Concluído/Atrasado" },
    ru: { name: "Статус", type: "Выбор", desc: "Не начато/В процессе/Под угрозой/Завершено/Отложено" },
    ar: { name: "الحالة", type: "اختيار", desc: "لم يبدأ/قيد التنفيذ/في خطر/مكتمل/متأخر" }
  },
  "featuresPage.dataModels.milestone.properties.linkedTasks": {
    ko: { name: "연결된 작업", type: "관계", desc: "마일스톤에 연결된 작업" },
    de: { name: "Verknüpfte Aufgaben", type: "Relation", desc: "Aufgaben, die mit dem Meilenstein verknüpft sind" },
    fr: { name: "Tâches liées", type: "Relation", desc: "Tâches liées au jalon" },
    es: { name: "Tareas vinculadas", type: "Relación", desc: "Tareas vinculadas al hito" },
    pt: { name: "Tarefas vinculadas", type: "Relação", desc: "Tarefas vinculadas ao marco" },
    ru: { name: "Связанные задачи", type: "Связь", desc: "Задачи, связанные с вехой" },
    ar: { name: "المهام المرتبطة", type: "علاقة", desc: "المهام المرتبطة بالمعلم" }
  },
  "featuresPage.dataModels.milestone.properties.progress": {
    ko: { name: "진행률", type: "계산됨", desc: "자동 계산된 진행률" },
    de: { name: "Fortschritt", type: "Berechnet", desc: "Automatisch berechneter Fortschritt" },
    fr: { name: "Progrès", type: "Calculé", desc: "Progression calculée automatiquement" },
    es: { name: "Progreso", type: "Calculado", desc: "Progreso calculado automáticamente" },
    pt: { name: "Progresso", type: "Calculado", desc: "Progresso calculado automaticamente" },
    ru: { name: "Прогресс", type: "Расчётное", desc: "Автоматически рассчитанный прогресс" },
    ar: { name: "التقدم", type: "محسوب", desc: "التقدم المحسوب تلقائياً" }
  },
  "featuresPage.dataModels.milestone.properties.project": {
    ko: { name: "프로젝트", type: "관계", desc: "상위 프로젝트" },
    de: { name: "Projekt", type: "Relation", desc: "Übergeordnetes Projekt" },
    fr: { name: "Projet", type: "Relation", desc: "Projet parent" },
    es: { name: "Proyecto", type: "Relación", desc: "Proyecto principal" },
    pt: { name: "Projeto", type: "Relação", desc: "Projeto pai" },
    ru: { name: "Проект", type: "Связь", desc: "Родительский проект" },
    ar: { name: "المشروع", type: "علاقة", desc: "المشروع الأصلي" }
  }
};

// Function to set nested property (handles objects)
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
console.log('APPLYING DATA MODELS TRANSLATIONS (Full nested structure)');
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
console.log('DATA MODELS TRANSLATIONS APPLIED');
console.log('='.repeat(80));
