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

// Service pages translations (serviceAI, serviceBIM, serviceSupport, services)
const serviceTranslations = {
  fr: {
    services: {
      title: "Nos Services",
      subtitle: "Solutions complètes pour les professionnels de la construction",
      explore: "Explorer",
      learnMore: "En savoir plus"
    },
    serviceAI: {
      hero: {
        title: "Assistance IA pour la Construction",
        subtitle: "Automatisation intelligente pour vos projets de construction",
        cta: "Commencer"
      },
      features: {
        natural: { title: "Langage Naturel", desc: "Communiquez avec l'IA en français" },
        automation: { title: "Automatisation", desc: "Automatisez les tâches répétitives" },
        learning: { title: "Apprentissage", desc: "L'IA apprend de vos préférences" },
        integration: { title: "Intégration", desc: "S'intègre à vos outils existants" }
      },
      useCases: {
        title: "Cas d'utilisation",
        design: { title: "Révision de conception", desc: "Vérifiez automatiquement les normes de conception" },
        docs: { title: "Documentation", desc: "Générez des rapports et de la documentation" },
        analysis: { title: "Analyse", desc: "Analysez les modèles pour les problèmes" }
      }
    },
    serviceBIM: {
      hero: {
        title: "Services BIM",
        subtitle: "Modélisation et coordination BIM professionnelles",
        cta: "Découvrir"
      },
      features: {
        modeling: { title: "Modélisation 3D", desc: "Modélisation BIM de haute qualité" },
        coordination: { title: "Coordination", desc: "Coordination multi-discipline" },
        clash: { title: "Détection de conflits", desc: "Identification et résolution des conflits" },
        documentation: { title: "Documentation", desc: "Plans et documents de construction" }
      },
      process: {
        title: "Notre processus",
        step1: { title: "Consultation", desc: "Comprendre vos besoins" },
        step2: { title: "Modélisation", desc: "Créer le modèle BIM" },
        step3: { title: "Coordination", desc: "Résoudre les conflits" },
        step4: { title: "Livraison", desc: "Documentation finale" }
      }
    },
    serviceSupport: {
      hero: {
        title: "Support et Formation",
        subtitle: "Accompagnement personnalisé pour votre équipe",
        cta: "Contacter"
      },
      features: {
        training: { title: "Formation", desc: "Sessions de formation personnalisées" },
        support: { title: "Support technique", desc: "Assistance par email et chat" },
        consulting: { title: "Conseil", desc: "Conseils d'experts BIM" },
        implementation: { title: "Implémentation", desc: "Aide au déploiement" }
      },
      packages: {
        title: "Forfaits de support",
        basic: { title: "Basique", desc: "Support par email" },
        standard: { title: "Standard", desc: "Email + chat en direct" },
        premium: { title: "Premium", desc: "Support prioritaire 24/7" }
      }
    }
  },
  de: {
    services: {
      title: "Unsere Dienste",
      subtitle: "Umfassende Lösungen für Bauprofis",
      explore: "Entdecken",
      learnMore: "Mehr erfahren"
    },
    serviceAI: {
      hero: {
        title: "KI-Unterstützung für Bauwesen",
        subtitle: "Intelligente Automatisierung für Ihre Bauprojekte",
        cta: "Loslegen"
      },
      features: {
        natural: { title: "Natürliche Sprache", desc: "Kommunizieren Sie mit der KI auf Deutsch" },
        automation: { title: "Automatisierung", desc: "Automatisieren Sie wiederkehrende Aufgaben" },
        learning: { title: "Lernen", desc: "Die KI lernt aus Ihren Präferenzen" },
        integration: { title: "Integration", desc: "Integriert sich in Ihre bestehenden Tools" }
      },
      useCases: {
        title: "Anwendungsfälle",
        design: { title: "Design-Review", desc: "Automatische Überprüfung von Designstandards" },
        docs: { title: "Dokumentation", desc: "Berichte und Dokumentation erstellen" },
        analysis: { title: "Analyse", desc: "Modelle auf Probleme analysieren" }
      }
    },
    serviceBIM: {
      hero: {
        title: "BIM-Dienste",
        subtitle: "Professionelle BIM-Modellierung und Koordination",
        cta: "Entdecken"
      },
      features: {
        modeling: { title: "3D-Modellierung", desc: "Hochwertige BIM-Modellierung" },
        coordination: { title: "Koordination", desc: "Multi-Disziplin-Koordination" },
        clash: { title: "Kollisionserkennung", desc: "Kollisionen identifizieren und lösen" },
        documentation: { title: "Dokumentation", desc: "Baupläne und Dokumente" }
      },
      process: {
        title: "Unser Prozess",
        step1: { title: "Beratung", desc: "Ihre Bedürfnisse verstehen" },
        step2: { title: "Modellierung", desc: "BIM-Modell erstellen" },
        step3: { title: "Koordination", desc: "Kollisionen lösen" },
        step4: { title: "Lieferung", desc: "Finale Dokumentation" }
      }
    },
    serviceSupport: {
      hero: {
        title: "Support und Schulung",
        subtitle: "Personalisierte Begleitung für Ihr Team",
        cta: "Kontaktieren"
      },
      features: {
        training: { title: "Schulung", desc: "Maßgeschneiderte Schulungen" },
        support: { title: "Technischer Support", desc: "E-Mail- und Chat-Unterstützung" },
        consulting: { title: "Beratung", desc: "BIM-Expertenberatung" },
        implementation: { title: "Implementierung", desc: "Unterstützung bei der Einführung" }
      },
      packages: {
        title: "Support-Pakete",
        basic: { title: "Basis", desc: "E-Mail-Support" },
        standard: { title: "Standard", desc: "E-Mail + Live-Chat" },
        premium: { title: "Premium", desc: "24/7 Priority-Support" }
      }
    }
  },
  es: {
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones completas para profesionales de la construcción",
      explore: "Explorar",
      learnMore: "Saber más"
    },
    serviceAI: {
      hero: {
        title: "Asistencia IA para Construcción",
        subtitle: "Automatización inteligente para tus proyectos de construcción",
        cta: "Comenzar"
      },
      features: {
        natural: { title: "Lenguaje Natural", desc: "Comunícate con la IA en español" },
        automation: { title: "Automatización", desc: "Automatiza tareas repetitivas" },
        learning: { title: "Aprendizaje", desc: "La IA aprende de tus preferencias" },
        integration: { title: "Integración", desc: "Se integra con tus herramientas existentes" }
      },
      useCases: {
        title: "Casos de uso",
        design: { title: "Revisión de diseño", desc: "Verifica automáticamente los estándares de diseño" },
        docs: { title: "Documentación", desc: "Genera informes y documentación" },
        analysis: { title: "Análisis", desc: "Analiza modelos en busca de problemas" }
      }
    },
    serviceBIM: {
      hero: {
        title: "Servicios BIM",
        subtitle: "Modelado y coordinación BIM profesional",
        cta: "Descubrir"
      },
      features: {
        modeling: { title: "Modelado 3D", desc: "Modelado BIM de alta calidad" },
        coordination: { title: "Coordinación", desc: "Coordinación multi-disciplina" },
        clash: { title: "Detección de conflictos", desc: "Identificar y resolver conflictos" },
        documentation: { title: "Documentación", desc: "Planos y documentos de construcción" }
      },
      process: {
        title: "Nuestro proceso",
        step1: { title: "Consulta", desc: "Entender tus necesidades" },
        step2: { title: "Modelado", desc: "Crear el modelo BIM" },
        step3: { title: "Coordinación", desc: "Resolver conflictos" },
        step4: { title: "Entrega", desc: "Documentación final" }
      }
    },
    serviceSupport: {
      hero: {
        title: "Soporte y Capacitación",
        subtitle: "Acompañamiento personalizado para tu equipo",
        cta: "Contactar"
      },
      features: {
        training: { title: "Capacitación", desc: "Sesiones de capacitación personalizadas" },
        support: { title: "Soporte técnico", desc: "Asistencia por email y chat" },
        consulting: { title: "Consultoría", desc: "Asesoramiento de expertos BIM" },
        implementation: { title: "Implementación", desc: "Ayuda en el despliegue" }
      },
      packages: {
        title: "Paquetes de soporte",
        basic: { title: "Básico", desc: "Soporte por email" },
        standard: { title: "Estándar", desc: "Email + chat en vivo" },
        premium: { title: "Premium", desc: "Soporte prioritario 24/7" }
      }
    }
  },
  pt: {
    services: {
      title: "Nossos Serviços",
      subtitle: "Soluções completas para profissionais da construção",
      explore: "Explorar",
      learnMore: "Saiba mais"
    },
    serviceAI: {
      hero: {
        title: "Assistência IA para Construção",
        subtitle: "Automação inteligente para seus projetos de construção",
        cta: "Começar"
      },
      features: {
        natural: { title: "Linguagem Natural", desc: "Comunique-se com a IA em português" },
        automation: { title: "Automação", desc: "Automatize tarefas repetitivas" },
        learning: { title: "Aprendizado", desc: "A IA aprende com suas preferências" },
        integration: { title: "Integração", desc: "Integra-se às suas ferramentas existentes" }
      },
      useCases: {
        title: "Casos de uso",
        design: { title: "Revisão de design", desc: "Verifique automaticamente os padrões de design" },
        docs: { title: "Documentação", desc: "Gere relatórios e documentação" },
        analysis: { title: "Análise", desc: "Analise modelos em busca de problemas" }
      }
    },
    serviceBIM: {
      hero: {
        title: "Serviços BIM",
        subtitle: "Modelagem e coordenação BIM profissional",
        cta: "Descobrir"
      },
      features: {
        modeling: { title: "Modelagem 3D", desc: "Modelagem BIM de alta qualidade" },
        coordination: { title: "Coordenação", desc: "Coordenação multi-disciplina" },
        clash: { title: "Detecção de conflitos", desc: "Identificar e resolver conflitos" },
        documentation: { title: "Documentação", desc: "Plantas e documentos de construção" }
      },
      process: {
        title: "Nosso processo",
        step1: { title: "Consulta", desc: "Entender suas necessidades" },
        step2: { title: "Modelagem", desc: "Criar o modelo BIM" },
        step3: { title: "Coordenação", desc: "Resolver conflitos" },
        step4: { title: "Entrega", desc: "Documentação final" }
      }
    },
    serviceSupport: {
      hero: {
        title: "Suporte e Treinamento",
        subtitle: "Acompanhamento personalizado para sua equipe",
        cta: "Contatar"
      },
      features: {
        training: { title: "Treinamento", desc: "Sessões de treinamento personalizadas" },
        support: { title: "Suporte técnico", desc: "Assistência por email e chat" },
        consulting: { title: "Consultoria", desc: "Aconselhamento de especialistas BIM" },
        implementation: { title: "Implementação", desc: "Ajuda na implantação" }
      },
      packages: {
        title: "Pacotes de suporte",
        basic: { title: "Básico", desc: "Suporte por email" },
        standard: { title: "Padrão", desc: "Email + chat ao vivo" },
        premium: { title: "Premium", desc: "Suporte prioritário 24/7" }
      }
    }
  },
  ko: {
    services: {
      title: "서비스",
      subtitle: "건설 전문가를 위한 종합 솔루션",
      explore: "탐색",
      learnMore: "자세히 보기"
    },
    serviceAI: {
      hero: {
        title: "건설을 위한 AI 지원",
        subtitle: "건설 프로젝트를 위한 지능형 자동화",
        cta: "시작하기"
      },
      features: {
        natural: { title: "자연어", desc: "한국어로 AI와 대화하세요" },
        automation: { title: "자동화", desc: "반복 작업 자동화" },
        learning: { title: "학습", desc: "AI가 선호도를 학습합니다" },
        integration: { title: "통합", desc: "기존 도구와 통합" }
      },
      useCases: {
        title: "사용 사례",
        design: { title: "디자인 검토", desc: "디자인 표준 자동 검증" },
        docs: { title: "문서화", desc: "보고서 및 문서 생성" },
        analysis: { title: "분석", desc: "문제에 대한 모델 분석" }
      }
    },
    serviceBIM: {
      hero: {
        title: "BIM 서비스",
        subtitle: "전문 BIM 모델링 및 조정",
        cta: "알아보기"
      },
      features: {
        modeling: { title: "3D 모델링", desc: "고품질 BIM 모델링" },
        coordination: { title: "조정", desc: "다분야 조정" },
        clash: { title: "충돌 감지", desc: "충돌 식별 및 해결" },
        documentation: { title: "문서화", desc: "시공 도면 및 문서" }
      },
      process: {
        title: "진행 과정",
        step1: { title: "상담", desc: "요구사항 파악" },
        step2: { title: "모델링", desc: "BIM 모델 생성" },
        step3: { title: "조정", desc: "충돌 해결" },
        step4: { title: "납품", desc: "최종 문서" }
      }
    },
    serviceSupport: {
      hero: {
        title: "지원 및 교육",
        subtitle: "팀을 위한 맞춤형 지원",
        cta: "문의하기"
      },
      features: {
        training: { title: "교육", desc: "맞춤형 교육 세션" },
        support: { title: "기술 지원", desc: "이메일 및 채팅 지원" },
        consulting: { title: "컨설팅", desc: "BIM 전문가 상담" },
        implementation: { title: "구현", desc: "배포 지원" }
      },
      packages: {
        title: "지원 패키지",
        basic: { title: "기본", desc: "이메일 지원" },
        standard: { title: "표준", desc: "이메일 + 실시간 채팅" },
        premium: { title: "프리미엄", desc: "24/7 우선 지원" }
      }
    }
  },
  ru: {
    services: {
      title: "Наши услуги",
      subtitle: "Комплексные решения для профессионалов строительства",
      explore: "Исследовать",
      learnMore: "Узнать больше"
    },
    serviceAI: {
      hero: {
        title: "ИИ-помощь для строительства",
        subtitle: "Интеллектуальная автоматизация для ваших строительных проектов",
        cta: "Начать"
      },
      features: {
        natural: { title: "Естественный язык", desc: "Общайтесь с ИИ на русском" },
        automation: { title: "Автоматизация", desc: "Автоматизируйте повторяющиеся задачи" },
        learning: { title: "Обучение", desc: "ИИ учится на ваших предпочтениях" },
        integration: { title: "Интеграция", desc: "Интегрируется с вашими инструментами" }
      },
      useCases: {
        title: "Варианты использования",
        design: { title: "Проверка дизайна", desc: "Автоматическая проверка стандартов дизайна" },
        docs: { title: "Документация", desc: "Создание отчетов и документации" },
        analysis: { title: "Анализ", desc: "Анализ моделей на проблемы" }
      }
    },
    serviceBIM: {
      hero: {
        title: "BIM услуги",
        subtitle: "Профессиональное BIM-моделирование и координация",
        cta: "Узнать"
      },
      features: {
        modeling: { title: "3D моделирование", desc: "Высококачественное BIM-моделирование" },
        coordination: { title: "Координация", desc: "Мультидисциплинарная координация" },
        clash: { title: "Обнаружение коллизий", desc: "Выявление и устранение коллизий" },
        documentation: { title: "Документация", desc: "Чертежи и строительные документы" }
      },
      process: {
        title: "Наш процесс",
        step1: { title: "Консультация", desc: "Понимание ваших потребностей" },
        step2: { title: "Моделирование", desc: "Создание BIM-модели" },
        step3: { title: "Координация", desc: "Устранение коллизий" },
        step4: { title: "Поставка", desc: "Финальная документация" }
      }
    },
    serviceSupport: {
      hero: {
        title: "Поддержка и обучение",
        subtitle: "Персонализированное сопровождение для вашей команды",
        cta: "Связаться"
      },
      features: {
        training: { title: "Обучение", desc: "Индивидуальные обучающие сессии" },
        support: { title: "Техподдержка", desc: "Помощь по email и в чате" },
        consulting: { title: "Консалтинг", desc: "Консультации BIM-экспертов" },
        implementation: { title: "Внедрение", desc: "Помощь в развертывании" }
      },
      packages: {
        title: "Пакеты поддержки",
        basic: { title: "Базовый", desc: "Поддержка по email" },
        standard: { title: "Стандартный", desc: "Email + онлайн-чат" },
        premium: { title: "Премиум", desc: "Приоритетная поддержка 24/7" }
      }
    }
  },
  ar: {
    services: {
      title: "خدماتنا",
      subtitle: "حلول شاملة لمحترفي البناء",
      explore: "استكشاف",
      learnMore: "معرفة المزيد"
    },
    serviceAI: {
      hero: {
        title: "مساعدة الذكاء الاصطناعي للبناء",
        subtitle: "أتمتة ذكية لمشاريع البناء الخاصة بك",
        cta: "ابدأ"
      },
      features: {
        natural: { title: "لغة طبيعية", desc: "تواصل مع الذكاء الاصطناعي بالعربية" },
        automation: { title: "الأتمتة", desc: "أتمتة المهام المتكررة" },
        learning: { title: "التعلم", desc: "الذكاء الاصطناعي يتعلم من تفضيلاتك" },
        integration: { title: "التكامل", desc: "يتكامل مع أدواتك الحالية" }
      },
      useCases: {
        title: "حالات الاستخدام",
        design: { title: "مراجعة التصميم", desc: "التحقق التلقائي من معايير التصميم" },
        docs: { title: "التوثيق", desc: "إنشاء التقارير والوثائق" },
        analysis: { title: "التحليل", desc: "تحليل النماذج للمشاكل" }
      }
    },
    serviceBIM: {
      hero: {
        title: "خدمات BIM",
        subtitle: "نمذجة وتنسيق BIM احترافية",
        cta: "اكتشف"
      },
      features: {
        modeling: { title: "النمذجة ثلاثية الأبعاد", desc: "نمذجة BIM عالية الجودة" },
        coordination: { title: "التنسيق", desc: "تنسيق متعدد التخصصات" },
        clash: { title: "كشف التعارضات", desc: "تحديد وحل التعارضات" },
        documentation: { title: "التوثيق", desc: "مخططات ووثائق البناء" }
      },
      process: {
        title: "عمليتنا",
        step1: { title: "استشارة", desc: "فهم احتياجاتك" },
        step2: { title: "النمذجة", desc: "إنشاء نموذج BIM" },
        step3: { title: "التنسيق", desc: "حل التعارضات" },
        step4: { title: "التسليم", desc: "الوثائق النهائية" }
      }
    },
    serviceSupport: {
      hero: {
        title: "الدعم والتدريب",
        subtitle: "مرافقة مخصصة لفريقك",
        cta: "تواصل"
      },
      features: {
        training: { title: "التدريب", desc: "جلسات تدريب مخصصة" },
        support: { title: "الدعم الفني", desc: "مساعدة عبر البريد والدردشة" },
        consulting: { title: "الاستشارات", desc: "نصائح خبراء BIM" },
        implementation: { title: "التنفيذ", desc: "مساعدة في النشر" }
      },
      packages: {
        title: "حزم الدعم",
        basic: { title: "أساسي", desc: "دعم بالبريد الإلكتروني" },
        standard: { title: "قياسي", desc: "بريد + دردشة مباشرة" },
        premium: { title: "متميز", desc: "دعم أولوية 24/7" }
      }
    }
  },
  ja: {
    services: {
      title: "サービス",
      subtitle: "建設専門家のための総合ソリューション",
      explore: "探索",
      learnMore: "詳細を見る"
    },
    serviceAI: {
      hero: {
        title: "建設向けAIアシスタンス",
        subtitle: "建設プロジェクトのためのインテリジェントな自動化",
        cta: "始める"
      },
      features: {
        natural: { title: "自然言語", desc: "日本語でAIと会話" },
        automation: { title: "自動化", desc: "繰り返し作業の自動化" },
        learning: { title: "学習", desc: "AIがあなたの好みを学習" },
        integration: { title: "統合", desc: "既存ツールとの統合" }
      },
      useCases: {
        title: "ユースケース",
        design: { title: "設計レビュー", desc: "設計基準の自動検証" },
        docs: { title: "ドキュメント", desc: "レポートとドキュメントの生成" },
        analysis: { title: "分析", desc: "問題のモデル分析" }
      }
    },
    serviceBIM: {
      hero: {
        title: "BIMサービス",
        subtitle: "プロフェッショナルなBIMモデリングと調整",
        cta: "詳細"
      },
      features: {
        modeling: { title: "3Dモデリング", desc: "高品質BIMモデリング" },
        coordination: { title: "調整", desc: "多分野調整" },
        clash: { title: "干渉検出", desc: "干渉の特定と解決" },
        documentation: { title: "ドキュメント", desc: "施工図面と文書" }
      },
      process: {
        title: "プロセス",
        step1: { title: "相談", desc: "ニーズの理解" },
        step2: { title: "モデリング", desc: "BIMモデル作成" },
        step3: { title: "調整", desc: "干渉解決" },
        step4: { title: "納品", desc: "最終ドキュメント" }
      }
    },
    serviceSupport: {
      hero: {
        title: "サポートとトレーニング",
        subtitle: "チームのためのパーソナライズされたサポート",
        cta: "お問い合わせ"
      },
      features: {
        training: { title: "トレーニング", desc: "カスタマイズされたトレーニングセッション" },
        support: { title: "技術サポート", desc: "メールとチャットサポート" },
        consulting: { title: "コンサルティング", desc: "BIM専門家によるアドバイス" },
        implementation: { title: "実装", desc: "導入支援" }
      },
      packages: {
        title: "サポートパッケージ",
        basic: { title: "ベーシック", desc: "メールサポート" },
        standard: { title: "スタンダード", desc: "メール + ライブチャット" },
        premium: { title: "プレミアム", desc: "24/7優先サポート" }
      }
    }
  }
};

// Apply translations
const languages = Object.keys(serviceTranslations);

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = deepMerge(existing, serviceTranslations[lang]);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Added service translations to ' + lang + '.json');
});

console.log('\nService page translations complete!');
