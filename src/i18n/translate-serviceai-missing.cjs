const fs = require('fs');
const path = require('path');

// serviceAI missing translations
const translations = {
  ja: {
    useCases: {
      items: {
        automation: {
          title: "タスク自動化",
          description: "カスタムAIエージェントで繰り返しワークフローを自動化"
        },
        assistant: {
          title: "カスタムアシスタント",
          description: "お客様のデータでトレーニングされた企業固有のAIアシスタント"
        }
      }
    },
    webapp: {
      title: "Webプラットフォームで実現",
      subtitle: "フルプロジェクト管理機能を備えた強力なWebアプリケーションでカスタムAI機能にアクセス",
      features: {
        assistant: {
          title: "AIチャットアシスタント",
          description: "プロジェクトデータをクエリし、インテリジェントな回答を得るための自然言語インターフェース"
        },
        reports: {
          title: "AI生成レポート",
          description: "洞察と推奨事項を含む自動レポート生成"
        },
        workflow: {
          title: "スマートワークフロー",
          description: "AI最適化されたタスク割り当てとプロジェクトスケジューリング"
        }
      },
      cta: "Webプラットフォームを探索"
    }
  },
  ko: {
    useCases: {
      items: {
        automation: {
          title: "작업 자동화",
          description: "맞춤 AI 에이전트로 반복 워크플로우 자동화"
        },
        assistant: {
          title: "맞춤 어시스턴트",
          description: "귀사 데이터로 훈련된 기업 전용 AI 어시스턴트"
        }
      }
    },
    webapp: {
      title: "웹 플랫폼으로 구동",
      subtitle: "전체 프로젝트 관리 기능을 갖춘 강력한 웹 애플리케이션을 통해 맞춤 AI 기능에 액세스",
      features: {
        assistant: {
          title: "AI 채팅 어시스턴트",
          description: "프로젝트 데이터를 쿼리하고 지능형 답변을 얻는 자연어 인터페이스"
        },
        reports: {
          title: "AI 생성 보고서",
          description: "인사이트와 권장 사항을 포함한 자동 보고서 생성"
        },
        workflow: {
          title: "스마트 워크플로우",
          description: "AI 최적화된 작업 할당 및 프로젝트 일정 관리"
        }
      },
      cta: "웹 플랫폼 탐색"
    }
  },
  de: {
    useCases: {
      items: {
        automation: {
          title: "Aufgabenautomatisierung",
          description: "Automatisieren Sie wiederkehrende Workflows mit benutzerdefinierten KI-Agenten"
        },
        assistant: {
          title: "Benutzerdefinierter Assistent",
          description: "Unternehmensspezifischer KI-Assistent, der mit Ihren Daten trainiert wurde"
        }
      }
    },
    webapp: {
      title: "Angetrieben von unserer Web-Plattform",
      subtitle: "Greifen Sie auf Ihre benutzerdefinierten KI-Funktionen über unsere leistungsstarke Webanwendung mit vollständigen Projektmanagement-Funktionen zu",
      features: {
        assistant: {
          title: "KI-Chat-Assistent",
          description: "Natürliche Sprachschnittstelle zur Abfrage von Projektdaten und Erhalt intelligenter Antworten"
        },
        reports: {
          title: "KI-generierte Berichte",
          description: "Automatische Berichtserstellung mit Erkenntnissen und Empfehlungen"
        },
        workflow: {
          title: "Intelligente Workflows",
          description: "KI-optimierte Aufgabenzuweisung und Projektplanung"
        }
      },
      cta: "Web-Plattform erkunden"
    }
  },
  fr: {
    useCases: {
      items: {
        automation: {
          title: "Automatisation des tâches",
          description: "Automatisez les workflows répétitifs avec des agents IA personnalisés"
        },
        assistant: {
          title: "Assistant personnalisé",
          description: "Assistant IA spécifique à l'entreprise entraîné sur vos données"
        }
      }
    },
    webapp: {
      title: "Propulsé par notre plateforme web",
      subtitle: "Accédez à vos fonctionnalités IA personnalisées via notre puissante application web avec des capacités complètes de gestion de projet",
      features: {
        assistant: {
          title: "Assistant chat IA",
          description: "Interface en langage naturel pour interroger les données du projet et obtenir des réponses intelligentes"
        },
        reports: {
          title: "Rapports générés par IA",
          description: "Génération automatique de rapports avec insights et recommandations"
        },
        workflow: {
          title: "Workflows intelligents",
          description: "Attribution de tâches et planification de projet optimisées par IA"
        }
      },
      cta: "Explorer la plateforme web"
    }
  },
  es: {
    useCases: {
      items: {
        automation: {
          title: "Automatización de tareas",
          description: "Automatiza flujos de trabajo repetitivos con agentes de IA personalizados"
        },
        assistant: {
          title: "Asistente personalizado",
          description: "Asistente de IA específico de la empresa entrenado con tus datos"
        }
      }
    },
    webapp: {
      title: "Impulsado por nuestra plataforma web",
      subtitle: "Accede a tus funciones de IA personalizadas a través de nuestra potente aplicación web con capacidades completas de gestión de proyectos",
      features: {
        assistant: {
          title: "Asistente de chat IA",
          description: "Interfaz de lenguaje natural para consultar datos del proyecto y obtener respuestas inteligentes"
        },
        reports: {
          title: "Informes generados por IA",
          description: "Generación automática de informes con insights y recomendaciones"
        },
        workflow: {
          title: "Flujos de trabajo inteligentes",
          description: "Asignación de tareas y programación de proyectos optimizadas por IA"
        }
      },
      cta: "Explorar plataforma web"
    }
  },
  pt: {
    useCases: {
      items: {
        automation: {
          title: "Automação de tarefas",
          description: "Automatize fluxos de trabalho repetitivos com agentes de IA personalizados"
        },
        assistant: {
          title: "Assistente personalizado",
          description: "Assistente de IA específico da empresa treinado com seus dados"
        }
      }
    },
    webapp: {
      title: "Alimentado pela nossa plataforma web",
      subtitle: "Acesse seus recursos de IA personalizados através da nossa poderosa aplicação web com recursos completos de gestão de projetos",
      features: {
        assistant: {
          title: "Assistente de chat IA",
          description: "Interface de linguagem natural para consultar dados do projeto e obter respostas inteligentes"
        },
        reports: {
          title: "Relatórios gerados por IA",
          description: "Geração automática de relatórios com insights e recomendações"
        },
        workflow: {
          title: "Fluxos de trabalho inteligentes",
          description: "Atribuição de tarefas e agendamento de projetos otimizados por IA"
        }
      },
      cta: "Explorar plataforma web"
    }
  },
  ru: {
    useCases: {
      items: {
        automation: {
          title: "Автоматизация задач",
          description: "Автоматизируйте повторяющиеся рабочие процессы с помощью пользовательских ИИ-агентов"
        },
        assistant: {
          title: "Пользовательский ассистент",
          description: "ИИ-ассистент, специфичный для компании, обученный на ваших данных"
        }
      }
    },
    webapp: {
      title: "На базе нашей веб-платформы",
      subtitle: "Получите доступ к вашим пользовательским функциям ИИ через наше мощное веб-приложение с полными возможностями управления проектами",
      features: {
        assistant: {
          title: "ИИ-чат-ассистент",
          description: "Интерфейс естественного языка для запроса данных проекта и получения интеллектуальных ответов"
        },
        reports: {
          title: "Отчёты, созданные ИИ",
          description: "Автоматическая генерация отчётов с аналитикой и рекомендациями"
        },
        workflow: {
          title: "Умные рабочие процессы",
          description: "Оптимизированное ИИ распределение задач и планирование проектов"
        }
      },
      cta: "Изучить веб-платформу"
    }
  },
  ar: {
    useCases: {
      items: {
        automation: {
          title: "أتمتة المهام",
          description: "أتمتة سير العمل المتكرر باستخدام وكلاء ذكاء اصطناعي مخصصين"
        },
        assistant: {
          title: "مساعد مخصص",
          description: "مساعد ذكاء اصطناعي خاص بالشركة مدرب على بياناتك"
        }
      }
    },
    webapp: {
      title: "مدعوم بمنصتنا الإلكترونية",
      subtitle: "الوصول إلى ميزات الذكاء الاصطناعي المخصصة الخاصة بك من خلال تطبيق الويب القوي الخاص بنا مع إمكانيات إدارة المشاريع الكاملة",
      features: {
        assistant: {
          title: "مساعد دردشة الذكاء الاصطناعي",
          description: "واجهة لغة طبيعية للاستعلام عن بيانات المشروع والحصول على إجابات ذكية"
        },
        reports: {
          title: "تقارير مُنشأة بالذكاء الاصطناعي",
          description: "إنشاء تقارير تلقائية مع رؤى وتوصيات"
        },
        workflow: {
          title: "سير عمل ذكي",
          description: "تعيين المهام وجدولة المشاريع المحسّنة بالذكاء الاصطناعي"
        }
      },
      cta: "استكشف منصة الويب"
    }
  }
};

// Apply translations
const languages = ['ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('Applying serviceAI missing translations...\n');

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Ensure paths exist
    if (!data.serviceAI) data.serviceAI = {};
    if (!data.serviceAI.useCases) data.serviceAI.useCases = {};
    if (!data.serviceAI.useCases.items) data.serviceAI.useCases.items = {};

    // Apply translations (merge)
    Object.assign(data.serviceAI.useCases.items, translations[lang].useCases.items);
    data.serviceAI.webapp = translations[lang].webapp;

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`${lang.toUpperCase()}: Applied serviceAI translations`);
  } catch (error) {
    console.error(`${lang.toUpperCase()}: Error - ${error.message}`);
  }
});

console.log('\nserviceAI translations complete!');
