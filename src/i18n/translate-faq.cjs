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

const translations = {
  fr: {
    faq: {
      title: "Questions Fréquemment Posées",
      subtitle: "Obtenez des réponses aux questions courantes sur InvoratecAI",
      contact: {
        title: "Vous avez encore des questions ?",
        description: "Notre équipe est là pour vous aider à trouver la solution parfaite.",
        cta: "Contactez-nous"
      },
      items: {
        what: {
          question: "Qu'est-ce qu'InvoratecAI ?",
          answer: "InvoratecAI est une plateforme BIM alimentée par l'IA qui combine un add-in Revit (BIM AI) avec une plateforme de collaboration cloud (Web AI). Elle aide les équipes d'architecture, d'ingénierie et de construction à travailler plus efficacement grâce à l'automatisation intelligente et à la collaboration en temps réel."
        },
        integration: {
          question: "S'intègre-t-il aux outils existants ?",
          answer: "Oui, InvoratecAI s'intègre parfaitement avec Autodesk Revit (2019+), et notre plateforme Web AI fonctionne dans n'importe quel navigateur moderne. Nous prenons également en charge les connexions aux outils de gestion de projet, au stockage cloud et à d'autres logiciels BIM via notre API."
        },
        training: {
          question: "Combien de temps faut-il pour apprendre ?",
          answer: "La plupart des utilisateurs deviennent productifs en quelques heures grâce à notre interface intuitive et nos commandes en langage naturel. Nous fournissons une intégration complète, des tutoriels vidéo et des sessions de formation en direct pour assurer le succès de votre équipe."
        },
        pricing: {
          question: "Comment InvoratecAI est-il tarifé ?",
          answer: "Nous proposons des plans tarifaires flexibles basés sur la taille de l'équipe et les fonctionnalités nécessaires. Contactez-nous pour un devis personnalisé qui correspond aux besoins de votre organisation. Les plans Enterprise incluent un support dédié et des intégrations personnalisées."
        },
        support: {
          question: "Quel support est disponible ?",
          answer: "Tous les plans incluent l'accès à notre documentation et à notre forum communautaire. Les plans Professional et Enterprise incluent le support par email, le chat en direct et une gestion de compte dédiée avec des temps de réponse prioritaires."
        }
      }
    }
  },
  de: {
    faq: {
      title: "Häufig Gestellte Fragen",
      subtitle: "Erhalten Sie Antworten auf häufige Fragen zu InvoratecAI",
      contact: {
        title: "Haben Sie noch Fragen?",
        description: "Unser Team hilft Ihnen gerne, die perfekte Lösung zu finden.",
        cta: "Kontaktieren Sie uns"
      },
      items: {
        what: {
          question: "Was ist InvoratecAI?",
          answer: "InvoratecAI ist eine KI-gestützte BIM-Plattform, die ein Revit-Add-in (BIM AI) mit einer Cloud-basierten Kollaborationsplattform (Web AI) kombiniert. Sie hilft Teams aus Architektur, Ingenieurwesen und Bauwesen, effizienter durch intelligente Automatisierung und Echtzeit-Zusammenarbeit zu arbeiten."
        },
        integration: {
          question: "Lässt es sich in vorhandene Tools integrieren?",
          answer: "Ja, InvoratecAI integriert sich nahtlos mit Autodesk Revit (2019+), und unsere Web AI-Plattform funktioniert in jedem modernen Browser. Wir unterstützen auch Verbindungen zu Projektmanagement-Tools, Cloud-Speicher und anderer BIM-Software über unsere API."
        },
        training: {
          question: "Wie lange dauert es, es zu lernen?",
          answer: "Die meisten Benutzer werden innerhalb weniger Stunden produktiv, dank unserer intuitiven Oberfläche und natürlichsprachlichen Befehle. Wir bieten umfassende Einarbeitung, Video-Tutorials und Live-Schulungen, um den Erfolg Ihres Teams sicherzustellen."
        },
        pricing: {
          question: "Wie wird InvoratecAI bepreist?",
          answer: "Wir bieten flexible Preispläne basierend auf Teamgröße und benötigten Funktionen. Kontaktieren Sie uns für ein individuelles Angebot, das den Anforderungen Ihrer Organisation entspricht. Enterprise-Pläne beinhalten dedizierten Support und kundenspezifische Integrationen."
        },
        support: {
          question: "Welcher Support ist verfügbar?",
          answer: "Alle Pläne beinhalten Zugang zu unserer Dokumentation und unserem Community-Forum. Professional- und Enterprise-Pläne beinhalten E-Mail-Support, Live-Chat und dediziertes Account-Management mit priorisierten Reaktionszeiten."
        }
      }
    }
  },
  es: {
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Obtenga respuestas a preguntas comunes sobre InvoratecAI",
      contact: {
        title: "¿Todavía tiene preguntas?",
        description: "Nuestro equipo está aquí para ayudarle a encontrar la solución perfecta.",
        cta: "Contáctenos"
      },
      items: {
        what: {
          question: "¿Qué es InvoratecAI?",
          answer: "InvoratecAI es una plataforma BIM impulsada por IA que combina un complemento de Revit (BIM AI) con una plataforma de colaboración en la nube (Web AI). Ayuda a los equipos de arquitectura, ingeniería y construcción a trabajar de manera más eficiente mediante la automatización inteligente y la colaboración en tiempo real."
        },
        integration: {
          question: "¿Se integra con herramientas existentes?",
          answer: "Sí, InvoratecAI se integra perfectamente con Autodesk Revit (2019+), y nuestra plataforma Web AI funciona en cualquier navegador moderno. También admitimos conexiones con herramientas de gestión de proyectos, almacenamiento en la nube y otro software BIM a través de nuestra API."
        },
        training: {
          question: "¿Cuánto tiempo se tarda en aprender?",
          answer: "La mayoría de los usuarios se vuelven productivos en pocas horas gracias a nuestra interfaz intuitiva y comandos en lenguaje natural. Proporcionamos incorporación completa, tutoriales en video y sesiones de capacitación en vivo para asegurar el éxito de su equipo."
        },
        pricing: {
          question: "¿Cómo se fija el precio de InvoratecAI?",
          answer: "Ofrecemos planes de precios flexibles basados en el tamaño del equipo y las características necesarias. Contáctenos para una cotización personalizada que se ajuste a los requisitos de su organización. Los planes Enterprise incluyen soporte dedicado e integraciones personalizadas."
        },
        support: {
          question: "¿Qué soporte está disponible?",
          answer: "Todos los planes incluyen acceso a nuestra documentación y foro comunitario. Los planes Professional y Enterprise incluyen soporte por correo electrónico, chat en vivo y gestión de cuenta dedicada con tiempos de respuesta prioritarios."
        }
      }
    }
  },
  pt: {
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Obtenha respostas para perguntas comuns sobre o InvoratecAI",
      contact: {
        title: "Ainda tem perguntas?",
        description: "Nossa equipe está aqui para ajudá-lo a encontrar a solução perfeita.",
        cta: "Entre em Contato"
      },
      items: {
        what: {
          question: "O que é o InvoratecAI?",
          answer: "O InvoratecAI é uma plataforma BIM alimentada por IA que combina um add-in Revit (BIM AI) com uma plataforma de colaboração em nuvem (Web AI). Ajuda equipes de arquitetura, engenharia e construção a trabalhar de forma mais eficiente através de automação inteligente e colaboração em tempo real."
        },
        integration: {
          question: "Integra-se com ferramentas existentes?",
          answer: "Sim, o InvoratecAI integra-se perfeitamente com o Autodesk Revit (2019+), e nossa plataforma Web AI funciona em qualquer navegador moderno. Também suportamos conexões com ferramentas de gerenciamento de projetos, armazenamento em nuvem e outros softwares BIM através de nossa API."
        },
        training: {
          question: "Quanto tempo leva para aprender?",
          answer: "A maioria dos usuários se torna produtiva em poucas horas graças à nossa interface intuitiva e comandos em linguagem natural. Fornecemos integração completa, tutoriais em vídeo e sessões de treinamento ao vivo para garantir o sucesso de sua equipe."
        },
        pricing: {
          question: "Como o InvoratecAI é precificado?",
          answer: "Oferecemos planos de preços flexíveis baseados no tamanho da equipe e recursos necessários. Entre em contato conosco para uma cotação personalizada que atenda aos requisitos de sua organização. Os planos Enterprise incluem suporte dedicado e integrações personalizadas."
        },
        support: {
          question: "Que suporte está disponível?",
          answer: "Todos os planos incluem acesso à nossa documentação e fórum comunitário. Os planos Professional e Enterprise incluem suporte por e-mail, chat ao vivo e gerenciamento de conta dedicado com tempos de resposta prioritários."
        }
      }
    }
  },
  ko: {
    faq: {
      title: "자주 묻는 질문",
      subtitle: "InvoratecAI에 대한 일반적인 질문에 대한 답변을 얻으세요",
      contact: {
        title: "아직 질문이 있으신가요?",
        description: "저희 팀이 완벽한 솔루션을 찾는 데 도움을 드리겠습니다.",
        cta: "문의하기"
      },
      items: {
        what: {
          question: "InvoratecAI란 무엇인가요?",
          answer: "InvoratecAI는 Revit 애드인(BIM AI)과 클라우드 기반 협업 플랫폼(Web AI)을 결합한 AI 기반 BIM 플랫폼입니다. 지능형 자동화와 실시간 협업을 통해 건축, 엔지니어링, 건설 팀이 더 효율적으로 작업할 수 있도록 도와줍니다."
        },
        integration: {
          question: "기존 도구와 통합되나요?",
          answer: "네, InvoratecAI는 Autodesk Revit(2019+)과 완벽하게 통합되며, Web AI 플랫폼은 모든 최신 브라우저에서 작동합니다. 또한 API를 통해 프로젝트 관리 도구, 클라우드 스토리지 및 기타 BIM 소프트웨어와의 연결을 지원합니다."
        },
        training: {
          question: "배우는 데 얼마나 걸리나요?",
          answer: "직관적인 인터페이스와 자연어 명령 덕분에 대부분의 사용자는 몇 시간 안에 생산성을 발휘합니다. 팀의 성공을 보장하기 위해 종합적인 온보딩, 비디오 튜토리얼 및 라이브 교육 세션을 제공합니다."
        },
        pricing: {
          question: "InvoratecAI 가격은 어떻게 책정되나요?",
          answer: "팀 규모와 필요한 기능에 따라 유연한 가격 플랜을 제공합니다. 조직의 요구 사항에 맞는 맞춤 견적을 위해 문의해 주세요. 엔터프라이즈 플랜에는 전담 지원 및 맞춤 통합이 포함됩니다."
        },
        support: {
          question: "어떤 지원이 제공되나요?",
          answer: "모든 플랜에는 문서 및 커뮤니티 포럼 액세스가 포함됩니다. Professional 및 Enterprise 플랜에는 이메일 지원, 라이브 채팅 및 우선 응답 시간이 포함된 전담 계정 관리가 포함됩니다."
        }
      }
    }
  },
  ru: {
    faq: {
      title: "Часто Задаваемые Вопросы",
      subtitle: "Получите ответы на распространенные вопросы об InvoratecAI",
      contact: {
        title: "Остались вопросы?",
        description: "Наша команда готова помочь вам найти идеальное решение.",
        cta: "Свяжитесь с нами"
      },
      items: {
        what: {
          question: "Что такое InvoratecAI?",
          answer: "InvoratecAI — это BIM-платформа на базе ИИ, которая сочетает надстройку Revit (BIM AI) с облачной платформой для совместной работы (Web AI). Она помогает командам архитектуры, инженерии и строительства работать более эффективно благодаря интеллектуальной автоматизации и совместной работе в реальном времени."
        },
        integration: {
          question: "Интегрируется ли он с существующими инструментами?",
          answer: "Да, InvoratecAI легко интегрируется с Autodesk Revit (2019+), а наша платформа Web AI работает в любом современном браузере. Мы также поддерживаем подключения к инструментам управления проектами, облачному хранилищу и другому программному обеспечению BIM через наш API."
        },
        training: {
          question: "Сколько времени нужно на обучение?",
          answer: "Большинство пользователей становятся продуктивными в течение нескольких часов благодаря нашему интуитивному интерфейсу и командам на естественном языке. Мы предоставляем комплексное обучение, видеоуроки и живые тренинги для обеспечения успеха вашей команды."
        },
        pricing: {
          question: "Как формируется цена InvoratecAI?",
          answer: "Мы предлагаем гибкие тарифные планы в зависимости от размера команды и необходимых функций. Свяжитесь с нами для получения индивидуального предложения, соответствующего требованиям вашей организации. Корпоративные планы включают выделенную поддержку и пользовательские интеграции."
        },
        support: {
          question: "Какая поддержка доступна?",
          answer: "Все планы включают доступ к нашей документации и форуму сообщества. Планы Professional и Enterprise включают поддержку по электронной почте, живой чат и персонального менеджера с приоритетным временем отклика."
        }
      }
    }
  },
  ar: {
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "احصل على إجابات للأسئلة الشائعة حول InvoratecAI",
      contact: {
        title: "لا تزال لديك أسئلة؟",
        description: "فريقنا هنا لمساعدتك في إيجاد الحل المثالي.",
        cta: "اتصل بنا"
      },
      items: {
        what: {
          question: "ما هو InvoratecAI؟",
          answer: "InvoratecAI هو منصة BIM مدعومة بالذكاء الاصطناعي تجمع بين إضافة Revit (BIM AI) ومنصة التعاون السحابية (Web AI). تساعد فرق الهندسة المعمارية والهندسة والبناء على العمل بكفاءة أكبر من خلال الأتمتة الذكية والتعاون في الوقت الفعلي."
        },
        integration: {
          question: "هل يتكامل مع الأدوات الموجودة؟",
          answer: "نعم، يتكامل InvoratecAI بسلاسة مع Autodesk Revit (2019+)، وتعمل منصة Web AI الخاصة بنا في أي متصفح حديث. كما ندعم الاتصالات بأدوات إدارة المشاريع والتخزين السحابي وبرامج BIM الأخرى من خلال واجهة برمجة التطبيقات الخاصة بنا."
        },
        training: {
          question: "كم من الوقت يستغرق التعلم؟",
          answer: "يصبح معظم المستخدمين منتجين في غضون ساعات قليلة بفضل واجهتنا البديهية وأوامر اللغة الطبيعية. نحن نقدم تدريباً شاملاً ودروساً تعليمية بالفيديو وجلسات تدريب مباشرة لضمان نجاح فريقك."
        },
        pricing: {
          question: "كيف يتم تسعير InvoratecAI؟",
          answer: "نقدم خطط أسعار مرنة بناءً على حجم الفريق والميزات المطلوبة. اتصل بنا للحصول على عرض أسعار مخصص يناسب متطلبات مؤسستك. تتضمن خطط Enterprise دعماً مخصصاً وتكاملات مخصصة."
        },
        support: {
          question: "ما الدعم المتاح؟",
          answer: "تتضمن جميع الخطط الوصول إلى وثائقنا ومنتدى المجتمع. تتضمن خطط Professional و Enterprise دعماً عبر البريد الإلكتروني والدردشة المباشرة وإدارة حساب مخصصة مع أوقات استجابة ذات أولوية."
        }
      }
    }
  }
};

const languages = Object.keys(translations);

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = deepMerge(existing, translations[lang]);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Added FAQ translations to ' + lang + '.json');
});

console.log('\nFAQ translations complete!');
