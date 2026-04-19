const fs = require('fs');
const path = require('path');

// featuresPage.dataModels translations
const translations = {
  ja: {
    title: "プロジェクト管理データモデル",
    subtitle: "チーム管理とマイルストーン追跡のための完全なデータ構造",
    teamMember: {
      title: "チームメンバー",
      subtitle: "チームのパフォーマンスとコストを追跡",
      properties: {
        name: { name: "名前", type: "テキスト", desc: "チームメンバー名" },
        email: { name: "メール", type: "メール", desc: "連絡先メール" },
        role: { name: "役割", type: "選択", desc: "モデラー、コーディネーター、リードなど" },
        discipline: { name: "専門分野", type: "選択", desc: "MEP、構造、建築など" },
        hourlyRate: { name: "時給", type: "通貨", desc: "時間あたりのコスト" },
        hoursSpent: { name: "作業時間", type: "数値", desc: "記録された時間" },
        budgetedHours: { name: "予算時間", type: "数値", desc: "割り当てられた時間" },
        totalCost: { name: "総コスト", type: "計算", desc: "レート × 時間" },
        utilization: { name: "稼働率", type: "計算", desc: "時間/予算 %" }
      }
    },
    milestone: {
      title: "マイルストーン",
      subtitle: "プロジェクトの成果物と期限を追跡",
      properties: {
        name: { name: "名前", type: "テキスト", desc: "マイルストーン名" },
        description: { name: "説明", type: "長文テキスト", desc: "マイルストーンの詳細" },
        dueDate: { name: "期限", type: "日付", desc: "目標完了日" },
        status: { name: "ステータス", type: "選択", desc: "未開始/進行中/リスクあり/完了/遅延" },
        allocatedBudget: { name: "割当予算", type: "通貨", desc: "このマイルストーンの予算" },
        spentBudget: { name: "使用予算", type: "通貨", desc: "使用額" },
        dependencies: { name: "依存関係", type: "リレーション", desc: "他のマイルストーンに依存" },
        deliverables: { name: "成果物", type: "リスト", desc: "期待される成果物" }
      }
    }
  },
  ko: {
    title: "프로젝트 관리 데이터 모델",
    subtitle: "팀 관리 및 마일스톤 추적을 위한 완전한 데이터 구조",
    teamMember: {
      title: "팀 멤버",
      subtitle: "팀 성과 및 비용 추적",
      properties: {
        name: { name: "이름", type: "텍스트", desc: "팀 멤버 이름" },
        email: { name: "이메일", type: "이메일", desc: "연락처 이메일" },
        role: { name: "역할", type: "선택", desc: "모델러, 코디네이터, 리드 등" },
        discipline: { name: "전문 분야", type: "선택", desc: "MEP, 구조, 건축 등" },
        hourlyRate: { name: "시급", type: "통화", desc: "시간당 비용" },
        hoursSpent: { name: "작업 시간", type: "숫자", desc: "기록된 시간" },
        budgetedHours: { name: "예산 시간", type: "숫자", desc: "할당된 시간" },
        totalCost: { name: "총 비용", type: "계산", desc: "요율 × 시간" },
        utilization: { name: "활용률", type: "계산", desc: "시간/예산 %" }
      }
    },
    milestone: {
      title: "마일스톤",
      subtitle: "프로젝트 산출물 및 마감일 추적",
      properties: {
        name: { name: "이름", type: "텍스트", desc: "마일스톤 이름" },
        description: { name: "설명", type: "긴 텍스트", desc: "마일스톤 세부사항" },
        dueDate: { name: "마감일", type: "날짜", desc: "목표 완료일" },
        status: { name: "상태", type: "선택", desc: "시작 안됨/진행 중/위험/완료/지연" },
        allocatedBudget: { name: "할당 예산", type: "통화", desc: "이 마일스톤의 예산" },
        spentBudget: { name: "사용 예산", type: "통화", desc: "사용 금액" },
        dependencies: { name: "종속성", type: "관계", desc: "다른 마일스톤에 종속" },
        deliverables: { name: "산출물", type: "리스트", desc: "예상 산출물" }
      }
    }
  },
  de: {
    title: "Projektmanagement-Datenmodelle",
    subtitle: "Vollständige Datenstrukturen für Teammanagement und Meilensteinverfolgung",
    teamMember: {
      title: "Teammitglied",
      subtitle: "Teamleistung und Kosten verfolgen",
      properties: {
        name: { name: "Name", type: "Text", desc: "Name des Teammitglieds" },
        email: { name: "E-Mail", type: "E-Mail", desc: "Kontakt-E-Mail" },
        role: { name: "Rolle", type: "Auswahl", desc: "Modellierer, Koordinator, Leiter usw." },
        discipline: { name: "Fachgebiet", type: "Auswahl", desc: "TGA, Tragwerk, Architektur usw." },
        hourlyRate: { name: "Stundensatz", type: "Währung", desc: "Kosten pro Stunde" },
        hoursSpent: { name: "Aufgewendete Stunden", type: "Zahl", desc: "Erfasste Stunden" },
        budgetedHours: { name: "Budgetierte Stunden", type: "Zahl", desc: "Zugewiesene Stunden" },
        totalCost: { name: "Gesamtkosten", type: "Berechnet", desc: "Satz × Stunden" },
        utilization: { name: "Auslastung", type: "Berechnet", desc: "Stunden/Budget %" }
      }
    },
    milestone: {
      title: "Meilenstein",
      subtitle: "Projektlieferungen und Termine verfolgen",
      properties: {
        name: { name: "Name", type: "Text", desc: "Meilensteinname" },
        description: { name: "Beschreibung", type: "Langtext", desc: "Meilensteindetails" },
        dueDate: { name: "Fälligkeitsdatum", type: "Datum", desc: "Ziel-Fertigstellungsdatum" },
        status: { name: "Status", type: "Auswahl", desc: "Nicht gestartet/In Bearbeitung/Gefährdet/Abgeschlossen/Verzögert" },
        allocatedBudget: { name: "Zugewiesenes Budget", type: "Währung", desc: "Budget für diesen Meilenstein" },
        spentBudget: { name: "Verbrauchtes Budget", type: "Währung", desc: "Ausgegebener Betrag" },
        dependencies: { name: "Abhängigkeiten", type: "Relation", desc: "Abhängig von anderen Meilensteinen" },
        deliverables: { name: "Liefergegenstände", type: "Liste", desc: "Erwartete Liefergegenstände" }
      }
    }
  },
  fr: {
    title: "Modèles de données de gestion de projet",
    subtitle: "Structures de données complètes pour la gestion d'équipe et le suivi des jalons",
    teamMember: {
      title: "Membre de l'équipe",
      subtitle: "Suivre les performances et les coûts de l'équipe",
      properties: {
        name: { name: "Nom", type: "Texte", desc: "Nom du membre de l'équipe" },
        email: { name: "Email", type: "Email", desc: "Email de contact" },
        role: { name: "Rôle", type: "Sélection", desc: "Modélisateur, Coordinateur, Responsable, etc." },
        discipline: { name: "Discipline", type: "Sélection", desc: "CVC, Structure, Architecture, etc." },
        hourlyRate: { name: "Taux horaire", type: "Devise", desc: "Coût par heure" },
        hoursSpent: { name: "Heures passées", type: "Nombre", desc: "Heures enregistrées" },
        budgetedHours: { name: "Heures budgétées", type: "Nombre", desc: "Heures allouées" },
        totalCost: { name: "Coût total", type: "Calculé", desc: "Taux × Heures" },
        utilization: { name: "Utilisation", type: "Calculé", desc: "Heures/Budget %" }
      }
    },
    milestone: {
      title: "Jalon",
      subtitle: "Suivre les livrables et les échéances du projet",
      properties: {
        name: { name: "Nom", type: "Texte", desc: "Nom du jalon" },
        description: { name: "Description", type: "Texte long", desc: "Détails du jalon" },
        dueDate: { name: "Date d'échéance", type: "Date", desc: "Date de fin cible" },
        status: { name: "Statut", type: "Sélection", desc: "Non commencé/En cours/À risque/Terminé/Retardé" },
        allocatedBudget: { name: "Budget alloué", type: "Devise", desc: "Budget pour ce jalon" },
        spentBudget: { name: "Budget dépensé", type: "Devise", desc: "Montant dépensé" },
        dependencies: { name: "Dépendances", type: "Relation", desc: "Dépend d'autres jalons" },
        deliverables: { name: "Livrables", type: "Liste", desc: "Livrables attendus" }
      }
    }
  },
  es: {
    title: "Modelos de datos de gestión de proyectos",
    subtitle: "Estructuras de datos completas para gestión de equipos y seguimiento de hitos",
    teamMember: {
      title: "Miembro del equipo",
      subtitle: "Seguimiento del rendimiento y costos del equipo",
      properties: {
        name: { name: "Nombre", type: "Texto", desc: "Nombre del miembro del equipo" },
        email: { name: "Email", type: "Email", desc: "Email de contacto" },
        role: { name: "Rol", type: "Selección", desc: "Modelador, Coordinador, Líder, etc." },
        discipline: { name: "Disciplina", type: "Selección", desc: "MEP, Estructural, Arquitectónico, etc." },
        hourlyRate: { name: "Tarifa por hora", type: "Moneda", desc: "Costo por hora" },
        hoursSpent: { name: "Horas trabajadas", type: "Número", desc: "Horas registradas" },
        budgetedHours: { name: "Horas presupuestadas", type: "Número", desc: "Horas asignadas" },
        totalCost: { name: "Costo total", type: "Calculado", desc: "Tarifa × Horas" },
        utilization: { name: "Utilización", type: "Calculado", desc: "Horas/Presupuesto %" }
      }
    },
    milestone: {
      title: "Hito",
      subtitle: "Seguimiento de entregables y plazos del proyecto",
      properties: {
        name: { name: "Nombre", type: "Texto", desc: "Nombre del hito" },
        description: { name: "Descripción", type: "Texto largo", desc: "Detalles del hito" },
        dueDate: { name: "Fecha de vencimiento", type: "Fecha", desc: "Fecha objetivo de finalización" },
        status: { name: "Estado", type: "Selección", desc: "No iniciado/En progreso/En riesgo/Completado/Retrasado" },
        allocatedBudget: { name: "Presupuesto asignado", type: "Moneda", desc: "Presupuesto para este hito" },
        spentBudget: { name: "Presupuesto gastado", type: "Moneda", desc: "Monto gastado" },
        dependencies: { name: "Dependencias", type: "Relación", desc: "Depende de otros hitos" },
        deliverables: { name: "Entregables", type: "Lista", desc: "Entregables esperados" }
      }
    }
  },
  pt: {
    title: "Modelos de dados de gestão de projetos",
    subtitle: "Estruturas de dados completas para gestão de equipe e rastreamento de marcos",
    teamMember: {
      title: "Membro da equipe",
      subtitle: "Rastreamento de desempenho e custos da equipe",
      properties: {
        name: { name: "Nome", type: "Texto", desc: "Nome do membro da equipe" },
        email: { name: "Email", type: "Email", desc: "Email de contato" },
        role: { name: "Função", type: "Seleção", desc: "Modelador, Coordenador, Líder, etc." },
        discipline: { name: "Disciplina", type: "Seleção", desc: "MEP, Estrutural, Arquitetônico, etc." },
        hourlyRate: { name: "Taxa horária", type: "Moeda", desc: "Custo por hora" },
        hoursSpent: { name: "Horas gastas", type: "Número", desc: "Horas registradas" },
        budgetedHours: { name: "Horas orçadas", type: "Número", desc: "Horas alocadas" },
        totalCost: { name: "Custo total", type: "Calculado", desc: "Taxa × Horas" },
        utilization: { name: "Utilização", type: "Calculado", desc: "Horas/Orçamento %" }
      }
    },
    milestone: {
      title: "Marco",
      subtitle: "Rastreamento de entregas e prazos do projeto",
      properties: {
        name: { name: "Nome", type: "Texto", desc: "Nome do marco" },
        description: { name: "Descrição", type: "Texto longo", desc: "Detalhes do marco" },
        dueDate: { name: "Data de vencimento", type: "Data", desc: "Data alvo de conclusão" },
        status: { name: "Status", type: "Seleção", desc: "Não iniciado/Em andamento/Em risco/Concluído/Atrasado" },
        allocatedBudget: { name: "Orçamento alocado", type: "Moeda", desc: "Orçamento para este marco" },
        spentBudget: { name: "Orçamento gasto", type: "Moeda", desc: "Valor gasto" },
        dependencies: { name: "Dependências", type: "Relação", desc: "Depende de outros marcos" },
        deliverables: { name: "Entregas", type: "Lista", desc: "Entregas esperadas" }
      }
    }
  },
  ru: {
    title: "Модели данных управления проектами",
    subtitle: "Полные структуры данных для управления командой и отслеживания вех",
    teamMember: {
      title: "Член команды",
      subtitle: "Отслеживание производительности и затрат команды",
      properties: {
        name: { name: "Имя", type: "Текст", desc: "Имя члена команды" },
        email: { name: "Email", type: "Email", desc: "Контактный email" },
        role: { name: "Роль", type: "Выбор", desc: "Моделировщик, Координатор, Руководитель и т.д." },
        discipline: { name: "Специальность", type: "Выбор", desc: "ОВК, Конструкции, Архитектура и т.д." },
        hourlyRate: { name: "Почасовая ставка", type: "Валюта", desc: "Стоимость в час" },
        hoursSpent: { name: "Затраченные часы", type: "Число", desc: "Зарегистрированные часы" },
        budgetedHours: { name: "Бюджетные часы", type: "Число", desc: "Выделенные часы" },
        totalCost: { name: "Общая стоимость", type: "Расчёт", desc: "Ставка × Часы" },
        utilization: { name: "Загруженность", type: "Расчёт", desc: "Часы/Бюджет %" }
      }
    },
    milestone: {
      title: "Веха",
      subtitle: "Отслеживание результатов и сроков проекта",
      properties: {
        name: { name: "Название", type: "Текст", desc: "Название вехи" },
        description: { name: "Описание", type: "Длинный текст", desc: "Детали вехи" },
        dueDate: { name: "Срок", type: "Дата", desc: "Целевая дата завершения" },
        status: { name: "Статус", type: "Выбор", desc: "Не начато/В работе/Под угрозой/Завершено/Задержано" },
        allocatedBudget: { name: "Выделенный бюджет", type: "Валюта", desc: "Бюджет для этой вехи" },
        spentBudget: { name: "Израсходованный бюджет", type: "Валюта", desc: "Потраченная сумма" },
        dependencies: { name: "Зависимости", type: "Связь", desc: "Зависит от других вех" },
        deliverables: { name: "Результаты", type: "Список", desc: "Ожидаемые результаты" }
      }
    }
  },
  ar: {
    title: "نماذج بيانات إدارة المشاريع",
    subtitle: "هياكل بيانات كاملة لإدارة الفريق وتتبع المعالم",
    teamMember: {
      title: "عضو الفريق",
      subtitle: "تتبع أداء الفريق والتكاليف",
      properties: {
        name: { name: "الاسم", type: "نص", desc: "اسم عضو الفريق" },
        email: { name: "البريد الإلكتروني", type: "بريد إلكتروني", desc: "بريد الاتصال" },
        role: { name: "الدور", type: "اختيار", desc: "مُصمم نماذج، منسق، قائد، إلخ." },
        discipline: { name: "التخصص", type: "اختيار", desc: "MEP، إنشائي، معماري، إلخ." },
        hourlyRate: { name: "السعر بالساعة", type: "عملة", desc: "التكلفة لكل ساعة" },
        hoursSpent: { name: "الساعات المستهلكة", type: "رقم", desc: "الساعات المسجلة" },
        budgetedHours: { name: "الساعات المخططة", type: "رقم", desc: "الساعات المخصصة" },
        totalCost: { name: "التكلفة الإجمالية", type: "محسوب", desc: "السعر × الساعات" },
        utilization: { name: "الاستخدام", type: "محسوب", desc: "الساعات/الميزانية %" }
      }
    },
    milestone: {
      title: "معلم",
      subtitle: "تتبع تسليمات ومواعيد المشروع",
      properties: {
        name: { name: "الاسم", type: "نص", desc: "اسم المعلم" },
        description: { name: "الوصف", type: "نص طويل", desc: "تفاصيل المعلم" },
        dueDate: { name: "تاريخ الاستحقاق", type: "تاريخ", desc: "تاريخ الإنجاز المستهدف" },
        status: { name: "الحالة", type: "اختيار", desc: "لم يبدأ/قيد التنفيذ/في خطر/مكتمل/متأخر" },
        allocatedBudget: { name: "الميزانية المخصصة", type: "عملة", desc: "الميزانية لهذا المعلم" },
        spentBudget: { name: "الميزانية المنفقة", type: "عملة", desc: "المبلغ المنفق" },
        dependencies: { name: "التبعيات", type: "علاقة", desc: "يعتمد على معالم أخرى" },
        deliverables: { name: "التسليمات", type: "قائمة", desc: "التسليمات المتوقعة" }
      }
    }
  }
};

// Apply translations
const languages = ['ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('Applying featuresPage.dataModels translations...\n');

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Ensure the path exists
    if (!data.featuresPage) data.featuresPage = {};

    // Apply translations
    data.featuresPage.dataModels = translations[lang];

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`${lang.toUpperCase()}: Applied dataModels translations`);
  } catch (error) {
    console.error(`${lang.toUpperCase()}: Error - ${error.message}`);
  }
});

console.log('\nfeaturesPage.dataModels translations complete!');
