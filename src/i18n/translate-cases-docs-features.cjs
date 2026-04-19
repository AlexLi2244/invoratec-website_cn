const fs = require('fs');
const path = require('path');

function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Cases translations
const casesTranslations = {
  fr: {
    cases: {
      title: "Études de cas",
      subtitle: "Découvrez comment des équipes réelles utilisent InvoratecAI pour transformer leurs projets de construction",
      viewCase: "Voir l'étude de cas",
      backToCases: "Retour aux études de cas",
      challenge: "Le défi",
      solution: "La solution",
      results: "Les résultats",
      testimonial: "Témoignage",
      industry: "Industrie",
      projectSize: "Taille du projet",
      duration: "Durée",
      empty: "Aucune étude de cas pour le moment. Revenez bientôt!",
      categories: {
        all: "Tout",
        commercial: "Commercial",
        residential: "Résidentiel",
        infrastructure: "Infrastructure",
        industrial: "Industriel"
      },
      metrics: {
        timeSaved: "Temps économisé",
        costReduction: "Réduction des coûts",
        efficiency: "Amélioration de l'efficacité",
        collaboration: "Amélioration de la collaboration"
      }
    }
  },
  de: {
    cases: {
      title: "Fallstudien",
      subtitle: "Erfahren Sie, wie echte Teams InvoratecAI nutzen, um ihre Bauprojekte zu transformieren",
      viewCase: "Fallstudie ansehen",
      backToCases: "Zurück zu Fallstudien",
      challenge: "Die Herausforderung",
      solution: "Die Lösung",
      results: "Die Ergebnisse",
      testimonial: "Testimonial",
      industry: "Branche",
      projectSize: "Projektgröße",
      duration: "Dauer",
      empty: "Noch keine Fallstudien. Schauen Sie bald wieder vorbei!",
      categories: {
        all: "Alle",
        commercial: "Gewerblich",
        residential: "Wohnbau",
        infrastructure: "Infrastruktur",
        industrial: "Industrie"
      },
      metrics: {
        timeSaved: "Zeitersparnis",
        costReduction: "Kostenreduktion",
        efficiency: "Effizienzsteigerung",
        collaboration: "Verbesserte Zusammenarbeit"
      }
    }
  },
  es: {
    cases: {
      title: "Casos de estudio",
      subtitle: "Descubre cómo equipos reales usan InvoratecAI para transformar sus proyectos de construcción",
      viewCase: "Ver caso de estudio",
      backToCases: "Volver a casos de estudio",
      challenge: "El desafío",
      solution: "La solución",
      results: "Los resultados",
      testimonial: "Testimonio",
      industry: "Industria",
      projectSize: "Tamaño del proyecto",
      duration: "Duración",
      empty: "No hay casos de estudio todavía. ¡Vuelve pronto!",
      categories: {
        all: "Todo",
        commercial: "Comercial",
        residential: "Residencial",
        infrastructure: "Infraestructura",
        industrial: "Industrial"
      },
      metrics: {
        timeSaved: "Tiempo ahorrado",
        costReduction: "Reducción de costos",
        efficiency: "Mejora de eficiencia",
        collaboration: "Mejora de colaboración"
      }
    }
  },
  pt: {
    cases: {
      title: "Casos de estudo",
      subtitle: "Descubra como equipes reais usam InvoratecAI para transformar seus projetos de construção",
      viewCase: "Ver caso de estudo",
      backToCases: "Voltar aos casos de estudo",
      challenge: "O desafio",
      solution: "A solução",
      results: "Os resultados",
      testimonial: "Depoimento",
      industry: "Indústria",
      projectSize: "Tamanho do projeto",
      duration: "Duração",
      empty: "Nenhum caso de estudo ainda. Volte em breve!",
      categories: {
        all: "Tudo",
        commercial: "Comercial",
        residential: "Residencial",
        infrastructure: "Infraestrutura",
        industrial: "Industrial"
      },
      metrics: {
        timeSaved: "Tempo economizado",
        costReduction: "Redução de custos",
        efficiency: "Melhoria de eficiência",
        collaboration: "Melhoria de colaboração"
      }
    }
  },
  ko: {
    cases: {
      title: "사례 연구",
      subtitle: "실제 팀들이 InvoratecAI를 사용하여 건설 프로젝트를 어떻게 혁신하는지 알아보세요",
      viewCase: "사례 연구 보기",
      backToCases: "사례 연구로 돌아가기",
      challenge: "도전 과제",
      solution: "솔루션",
      results: "결과",
      testimonial: "추천사",
      industry: "산업",
      projectSize: "프로젝트 규모",
      duration: "기간",
      empty: "아직 사례 연구가 없습니다. 곧 다시 확인해 주세요!",
      categories: {
        all: "전체",
        commercial: "상업",
        residential: "주거",
        infrastructure: "인프라",
        industrial: "산업"
      },
      metrics: {
        timeSaved: "절약된 시간",
        costReduction: "비용 절감",
        efficiency: "효율성 향상",
        collaboration: "협업 개선"
      }
    }
  },
  ru: {
    cases: {
      title: "Кейсы",
      subtitle: "Узнайте, как реальные команды используют InvoratecAI для трансформации строительных проектов",
      viewCase: "Посмотреть кейс",
      backToCases: "Назад к кейсам",
      challenge: "Задача",
      solution: "Решение",
      results: "Результаты",
      testimonial: "Отзыв",
      industry: "Отрасль",
      projectSize: "Размер проекта",
      duration: "Продолжительность",
      empty: "Пока нет кейсов. Заходите позже!",
      categories: {
        all: "Все",
        commercial: "Коммерческое",
        residential: "Жилое",
        infrastructure: "Инфраструктура",
        industrial: "Промышленное"
      },
      metrics: {
        timeSaved: "Сэкономлено времени",
        costReduction: "Сокращение затрат",
        efficiency: "Повышение эффективности",
        collaboration: "Улучшение взаимодействия"
      }
    }
  },
  ar: {
    cases: {
      title: "دراسات الحالة",
      subtitle: "اكتشف كيف تستخدم الفرق الحقيقية InvoratecAI لتحويل مشاريع البناء الخاصة بهم",
      viewCase: "عرض دراسة الحالة",
      backToCases: "العودة إلى دراسات الحالة",
      challenge: "التحدي",
      solution: "الحل",
      results: "النتائج",
      testimonial: "الشهادة",
      industry: "الصناعة",
      projectSize: "حجم المشروع",
      duration: "المدة",
      empty: "لا توجد دراسات حالة بعد. عد قريباً!",
      categories: {
        all: "الكل",
        commercial: "تجاري",
        residential: "سكني",
        infrastructure: "البنية التحتية",
        industrial: "صناعي"
      },
      metrics: {
        timeSaved: "الوقت الموفر",
        costReduction: "تخفيض التكاليف",
        efficiency: "تحسين الكفاءة",
        collaboration: "تحسين التعاون"
      }
    }
  }
};

// Docs translations
const docsTranslations = {
  fr: {
    docs: {
      title: "Documentation",
      subtitle: "Tout ce que vous devez savoir pour commencer avec InvoratecAI",
      search: "Rechercher dans la documentation...",
      gettingStarted: "Premiers pas",
      guides: "Guides",
      apiReference: "Référence API",
      tutorials: "Tutoriels",
      faq: "FAQ",
      changelog: "Journal des modifications",
      onThisPage: "Sur cette page",
      previousPage: "Page précédente",
      nextPage: "Page suivante",
      editPage: "Modifier cette page",
      lastUpdated: "Dernière mise à jour",
      tableOfContents: "Table des matières",
      sections: {
        introduction: {
          title: "Introduction",
          description: "Apprenez les bases d'InvoratecAI"
        },
        quickstart: {
          title: "Démarrage rapide",
          description: "Soyez opérationnel en quelques minutes"
        },
        installation: {
          title: "Installation",
          description: "Comment installer et configurer InvoratecAI"
        },
        configuration: {
          title: "Configuration",
          description: "Personnalisez InvoratecAI selon vos besoins"
        },
        features: {
          title: "Fonctionnalités",
          description: "Explorez toutes les fonctionnalités disponibles"
        },
        integrations: {
          title: "Intégrations",
          description: "Connectez-vous à vos outils préférés"
        },
        bestPractices: {
          title: "Meilleures pratiques",
          description: "Conseils pour une utilisation optimale"
        },
        troubleshooting: {
          title: "Dépannage",
          description: "Résolvez les problèmes courants"
        }
      }
    }
  },
  de: {
    docs: {
      title: "Dokumentation",
      subtitle: "Alles, was Sie wissen müssen, um mit InvoratecAI zu beginnen",
      search: "In der Dokumentation suchen...",
      gettingStarted: "Erste Schritte",
      guides: "Anleitungen",
      apiReference: "API-Referenz",
      tutorials: "Tutorials",
      faq: "FAQ",
      changelog: "Änderungsprotokoll",
      onThisPage: "Auf dieser Seite",
      previousPage: "Vorherige Seite",
      nextPage: "Nächste Seite",
      editPage: "Diese Seite bearbeiten",
      lastUpdated: "Zuletzt aktualisiert",
      tableOfContents: "Inhaltsverzeichnis",
      sections: {
        introduction: {
          title: "Einführung",
          description: "Lernen Sie die Grundlagen von InvoratecAI"
        },
        quickstart: {
          title: "Schnellstart",
          description: "In wenigen Minuten einsatzbereit"
        },
        installation: {
          title: "Installation",
          description: "So installieren und konfigurieren Sie InvoratecAI"
        },
        configuration: {
          title: "Konfiguration",
          description: "Passen Sie InvoratecAI an Ihre Bedürfnisse an"
        },
        features: {
          title: "Funktionen",
          description: "Entdecken Sie alle verfügbaren Funktionen"
        },
        integrations: {
          title: "Integrationen",
          description: "Verbinden Sie sich mit Ihren Lieblingstools"
        },
        bestPractices: {
          title: "Best Practices",
          description: "Tipps für optimale Nutzung"
        },
        troubleshooting: {
          title: "Fehlerbehebung",
          description: "Lösen Sie häufige Probleme"
        }
      }
    }
  },
  es: {
    docs: {
      title: "Documentación",
      subtitle: "Todo lo que necesitas saber para comenzar con InvoratecAI",
      search: "Buscar en la documentación...",
      gettingStarted: "Primeros pasos",
      guides: "Guías",
      apiReference: "Referencia API",
      tutorials: "Tutoriales",
      faq: "FAQ",
      changelog: "Registro de cambios",
      onThisPage: "En esta página",
      previousPage: "Página anterior",
      nextPage: "Página siguiente",
      editPage: "Editar esta página",
      lastUpdated: "Última actualización",
      tableOfContents: "Tabla de contenidos",
      sections: {
        introduction: {
          title: "Introducción",
          description: "Aprende los conceptos básicos de InvoratecAI"
        },
        quickstart: {
          title: "Inicio rápido",
          description: "Ponte en marcha en minutos"
        },
        installation: {
          title: "Instalación",
          description: "Cómo instalar y configurar InvoratecAI"
        },
        configuration: {
          title: "Configuración",
          description: "Personaliza InvoratecAI según tus necesidades"
        },
        features: {
          title: "Características",
          description: "Explora todas las características disponibles"
        },
        integrations: {
          title: "Integraciones",
          description: "Conéctate con tus herramientas favoritas"
        },
        bestPractices: {
          title: "Mejores prácticas",
          description: "Consejos para un uso óptimo"
        },
        troubleshooting: {
          title: "Solución de problemas",
          description: "Resuelve problemas comunes"
        }
      }
    }
  },
  pt: {
    docs: {
      title: "Documentação",
      subtitle: "Tudo o que você precisa saber para começar com InvoratecAI",
      search: "Pesquisar na documentação...",
      gettingStarted: "Primeiros passos",
      guides: "Guias",
      apiReference: "Referência API",
      tutorials: "Tutoriais",
      faq: "FAQ",
      changelog: "Registro de alterações",
      onThisPage: "Nesta página",
      previousPage: "Página anterior",
      nextPage: "Próxima página",
      editPage: "Editar esta página",
      lastUpdated: "Última atualização",
      tableOfContents: "Índice",
      sections: {
        introduction: {
          title: "Introdução",
          description: "Aprenda os conceitos básicos do InvoratecAI"
        },
        quickstart: {
          title: "Início rápido",
          description: "Comece a usar em minutos"
        },
        installation: {
          title: "Instalação",
          description: "Como instalar e configurar o InvoratecAI"
        },
        configuration: {
          title: "Configuração",
          description: "Personalize o InvoratecAI de acordo com suas necessidades"
        },
        features: {
          title: "Recursos",
          description: "Explore todos os recursos disponíveis"
        },
        integrations: {
          title: "Integrações",
          description: "Conecte-se com suas ferramentas favoritas"
        },
        bestPractices: {
          title: "Melhores práticas",
          description: "Dicas para uso otimizado"
        },
        troubleshooting: {
          title: "Solução de problemas",
          description: "Resolva problemas comuns"
        }
      }
    }
  },
  ko: {
    docs: {
      title: "문서",
      subtitle: "InvoratecAI를 시작하기 위해 알아야 할 모든 것",
      search: "문서 검색...",
      gettingStarted: "시작하기",
      guides: "가이드",
      apiReference: "API 참조",
      tutorials: "튜토리얼",
      faq: "자주 묻는 질문",
      changelog: "변경 로그",
      onThisPage: "이 페이지에서",
      previousPage: "이전 페이지",
      nextPage: "다음 페이지",
      editPage: "이 페이지 편집",
      lastUpdated: "마지막 업데이트",
      tableOfContents: "목차",
      sections: {
        introduction: {
          title: "소개",
          description: "InvoratecAI의 기본 사항을 배우세요"
        },
        quickstart: {
          title: "빠른 시작",
          description: "몇 분 만에 시작하세요"
        },
        installation: {
          title: "설치",
          description: "InvoratecAI 설치 및 설정 방법"
        },
        configuration: {
          title: "구성",
          description: "필요에 맞게 InvoratecAI를 사용자 지정하세요"
        },
        features: {
          title: "기능",
          description: "사용 가능한 모든 기능을 탐색하세요"
        },
        integrations: {
          title: "통합",
          description: "좋아하는 도구와 연결하세요"
        },
        bestPractices: {
          title: "모범 사례",
          description: "최적의 사용을 위한 팁"
        },
        troubleshooting: {
          title: "문제 해결",
          description: "일반적인 문제 해결"
        }
      }
    }
  },
  ru: {
    docs: {
      title: "Документация",
      subtitle: "Все, что вам нужно знать для начала работы с InvoratecAI",
      search: "Поиск в документации...",
      gettingStarted: "Начало работы",
      guides: "Руководства",
      apiReference: "Справочник API",
      tutorials: "Учебники",
      faq: "FAQ",
      changelog: "Журнал изменений",
      onThisPage: "На этой странице",
      previousPage: "Предыдущая страница",
      nextPage: "Следующая страница",
      editPage: "Редактировать эту страницу",
      lastUpdated: "Последнее обновление",
      tableOfContents: "Содержание",
      sections: {
        introduction: {
          title: "Введение",
          description: "Изучите основы InvoratecAI"
        },
        quickstart: {
          title: "Быстрый старт",
          description: "Начните работу за несколько минут"
        },
        installation: {
          title: "Установка",
          description: "Как установить и настроить InvoratecAI"
        },
        configuration: {
          title: "Конфигурация",
          description: "Настройте InvoratecAI под свои нужды"
        },
        features: {
          title: "Функции",
          description: "Изучите все доступные функции"
        },
        integrations: {
          title: "Интеграции",
          description: "Подключитесь к вашим любимым инструментам"
        },
        bestPractices: {
          title: "Лучшие практики",
          description: "Советы для оптимального использования"
        },
        troubleshooting: {
          title: "Устранение неполадок",
          description: "Решение распространенных проблем"
        }
      }
    }
  },
  ar: {
    docs: {
      title: "الوثائق",
      subtitle: "كل ما تحتاج معرفته للبدء مع InvoratecAI",
      search: "البحث في الوثائق...",
      gettingStarted: "البدء",
      guides: "الأدلة",
      apiReference: "مرجع API",
      tutorials: "الدروس",
      faq: "الأسئلة الشائعة",
      changelog: "سجل التغييرات",
      onThisPage: "في هذه الصفحة",
      previousPage: "الصفحة السابقة",
      nextPage: "الصفحة التالية",
      editPage: "تعديل هذه الصفحة",
      lastUpdated: "آخر تحديث",
      tableOfContents: "جدول المحتويات",
      sections: {
        introduction: {
          title: "المقدمة",
          description: "تعلم أساسيات InvoratecAI"
        },
        quickstart: {
          title: "البدء السريع",
          description: "ابدأ في دقائق"
        },
        installation: {
          title: "التثبيت",
          description: "كيفية تثبيت وإعداد InvoratecAI"
        },
        configuration: {
          title: "الإعدادات",
          description: "خصص InvoratecAI وفقاً لاحتياجاتك"
        },
        features: {
          title: "الميزات",
          description: "استكشف جميع الميزات المتاحة"
        },
        integrations: {
          title: "التكاملات",
          description: "اتصل بأدواتك المفضلة"
        },
        bestPractices: {
          title: "أفضل الممارسات",
          description: "نصائح للاستخدام الأمثل"
        },
        troubleshooting: {
          title: "استكشاف الأخطاء",
          description: "حل المشاكل الشائعة"
        }
      }
    }
  }
};

// Features page translations
const featuresPageTranslations = {
  fr: {
    featuresPage: {
      hero: {
        title: "Fonctionnalités puissantes pour les équipes de construction modernes",
        subtitle: "Découvrez comment InvoratecAI transforme la gestion de projet avec des outils alimentés par l'IA"
      },
      categories: {
        all: "Toutes les fonctionnalités",
        ai: "Alimenté par l'IA",
        collaboration: "Collaboration",
        visualization: "Visualisation",
        management: "Gestion"
      },
      cta: {
        title: "Prêt à transformer vos projets ?",
        description: "Commencez avec InvoratecAI dès aujourd'hui et découvrez la différence",
        button: "Commencer gratuitement"
      }
    }
  },
  de: {
    featuresPage: {
      hero: {
        title: "Leistungsstarke Funktionen für moderne Bauteams",
        subtitle: "Entdecken Sie, wie InvoratecAI das Projektmanagement mit KI-gestützten Tools transformiert"
      },
      categories: {
        all: "Alle Funktionen",
        ai: "KI-gestützt",
        collaboration: "Zusammenarbeit",
        visualization: "Visualisierung",
        management: "Verwaltung"
      },
      cta: {
        title: "Bereit, Ihre Projekte zu transformieren?",
        description: "Starten Sie noch heute mit InvoratecAI und erleben Sie den Unterschied",
        button: "Kostenlos starten"
      }
    }
  },
  es: {
    featuresPage: {
      hero: {
        title: "Funciones potentes para equipos de construcción modernos",
        subtitle: "Descubre cómo InvoratecAI transforma la gestión de proyectos con herramientas impulsadas por IA"
      },
      categories: {
        all: "Todas las funciones",
        ai: "Impulsado por IA",
        collaboration: "Colaboración",
        visualization: "Visualización",
        management: "Gestión"
      },
      cta: {
        title: "¿Listo para transformar tus proyectos?",
        description: "Comienza con InvoratecAI hoy y experimenta la diferencia",
        button: "Comenzar gratis"
      }
    }
  },
  pt: {
    featuresPage: {
      hero: {
        title: "Recursos poderosos para equipes de construção modernas",
        subtitle: "Descubra como InvoratecAI transforma a gestão de projetos com ferramentas alimentadas por IA"
      },
      categories: {
        all: "Todos os recursos",
        ai: "Alimentado por IA",
        collaboration: "Colaboração",
        visualization: "Visualização",
        management: "Gestão"
      },
      cta: {
        title: "Pronto para transformar seus projetos?",
        description: "Comece com InvoratecAI hoje e experimente a diferença",
        button: "Começar gratuitamente"
      }
    }
  },
  ko: {
    featuresPage: {
      hero: {
        title: "현대 건설 팀을 위한 강력한 기능",
        subtitle: "InvoratecAI가 AI 기반 도구로 프로젝트 관리를 어떻게 혁신하는지 알아보세요"
      },
      categories: {
        all: "모든 기능",
        ai: "AI 기반",
        collaboration: "협업",
        visualization: "시각화",
        management: "관리"
      },
      cta: {
        title: "프로젝트를 혁신할 준비가 되셨나요?",
        description: "오늘 InvoratecAI를 시작하고 차이를 경험하세요",
        button: "무료로 시작하기"
      }
    }
  },
  ru: {
    featuresPage: {
      hero: {
        title: "Мощные функции для современных строительных команд",
        subtitle: "Узнайте, как InvoratecAI трансформирует управление проектами с помощью инструментов на базе ИИ"
      },
      categories: {
        all: "Все функции",
        ai: "На базе ИИ",
        collaboration: "Сотрудничество",
        visualization: "Визуализация",
        management: "Управление"
      },
      cta: {
        title: "Готовы трансформировать свои проекты?",
        description: "Начните с InvoratecAI сегодня и почувствуйте разницу",
        button: "Начать бесплатно"
      }
    }
  },
  ar: {
    featuresPage: {
      hero: {
        title: "ميزات قوية لفرق البناء الحديثة",
        subtitle: "اكتشف كيف يحول InvoratecAI إدارة المشاريع بأدوات مدعومة بالذكاء الاصطناعي"
      },
      categories: {
        all: "جميع الميزات",
        ai: "مدعوم بالذكاء الاصطناعي",
        collaboration: "التعاون",
        visualization: "التصور",
        management: "الإدارة"
      },
      cta: {
        title: "مستعد لتحويل مشاريعك؟",
        description: "ابدأ مع InvoratecAI اليوم واختبر الفرق",
        button: "ابدأ مجاناً"
      }
    }
  }
};

// Apply translations
const languages = ['fr', 'de', 'es', 'pt', 'ko', 'ru', 'ar'];

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  let merged = existing;
  if (casesTranslations[lang]) {
    merged = deepMerge(merged, casesTranslations[lang]);
  }
  if (docsTranslations[lang]) {
    merged = deepMerge(merged, docsTranslations[lang]);
  }
  if (featuresPageTranslations[lang]) {
    merged = deepMerge(merged, featuresPageTranslations[lang]);
  }

  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Added Cases, Docs, and Features translations to ' + lang + '.json');
});

console.log('\nCases, Docs, and Features translations complete!');
