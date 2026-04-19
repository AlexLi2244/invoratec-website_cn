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

// Part 1: Pricing translations
const pricingTranslations = {
  fr: {
    pricing: {
      hero: {
        title: "Tarification Simple et Transparente",
        subtitle: "Choisissez le plan qui correspond aux besoins de votre équipe"
      },
      monthly: "Mensuel",
      annual: "Annuel",
      save: "Économisez 20%",
      popular: "Le Plus Populaire",
      perMonth: "mois",
      getStarted: "Commencer",
      plans: {
        starter: {
          name: "Starter",
          description: "Pour les professionnels individuels et petites équipes",
          price: "99€",
          features: [
            "1 Licence Utilisateur",
            "Fonctionnalités BIM AI de base",
            "5 Go de Stockage Cloud",
            "Support par Email",
            "Accès Communautaire"
          ]
        },
        professional: {
          name: "Professionnel",
          description: "Pour les équipes en croissance et projets moyens",
          price: "449€",
          features: [
            "5 Licences Utilisateur",
            "BIM AI + Web AI complets",
            "50 Go de Stockage Cloud",
            "Support Prioritaire",
            "Accès API"
          ]
        },
        enterprise: {
          name: "Enterprise",
          description: "Pour les grandes organisations et projets complexes",
          price: "Sur Devis",
          features: [
            "Utilisateurs Illimités",
            "Toutes les Fonctionnalités",
            "Stockage Illimité",
            "Support Dédié 24/7",
            "Intégrations Personnalisées"
          ]
        }
      },
      faq: {
        title: "Questions sur la Tarification",
        subtitle: "Trouvez des réponses aux questions courantes sur nos plans",
        cta: "Contactez les Ventes"
      }
    }
  },
  de: {
    pricing: {
      hero: {
        title: "Einfache, Transparente Preise",
        subtitle: "Wählen Sie den Plan, der zu den Bedürfnissen Ihres Teams passt"
      },
      monthly: "Monatlich",
      annual: "Jährlich",
      save: "20% Sparen",
      popular: "Am Beliebtesten",
      perMonth: "Monat",
      getStarted: "Loslegen",
      plans: {
        starter: {
          name: "Starter",
          description: "Für einzelne Fachleute und kleine Teams",
          price: "99€",
          features: [
            "1 Benutzerlizenz",
            "BIM AI Grundfunktionen",
            "5 GB Cloud-Speicher",
            "E-Mail-Support",
            "Community-Zugang"
          ]
        },
        professional: {
          name: "Professional",
          description: "Für wachsende Teams und mittlere Projekte",
          price: "449€",
          features: [
            "5 Benutzerlizenzen",
            "Vollständiges BIM AI + Web AI",
            "50 GB Cloud-Speicher",
            "Prioritäts-Support",
            "API-Zugang"
          ]
        },
        enterprise: {
          name: "Enterprise",
          description: "Für große Organisationen und komplexe Projekte",
          price: "Auf Anfrage",
          features: [
            "Unbegrenzte Benutzer",
            "Alle Funktionen",
            "Unbegrenzter Speicher",
            "Dedizierter 24/7 Support",
            "Kundenspezifische Integrationen"
          ]
        }
      },
      faq: {
        title: "Preisfragen",
        subtitle: "Antworten auf häufige Fragen zu unseren Plänen",
        cta: "Vertrieb Kontaktieren"
      }
    }
  },
  es: {
    pricing: {
      hero: {
        title: "Precios Simples y Transparentes",
        subtitle: "Elija el plan que se adapte a las necesidades de su equipo"
      },
      monthly: "Mensual",
      annual: "Anual",
      save: "Ahorre 20%",
      popular: "Más Popular",
      perMonth: "mes",
      getStarted: "Comenzar",
      plans: {
        starter: {
          name: "Starter",
          description: "Para profesionales individuales y equipos pequeños",
          price: "$99",
          features: [
            "1 Licencia de Usuario",
            "Funciones BIM AI Básicas",
            "5 GB de Almacenamiento Cloud",
            "Soporte por Email",
            "Acceso a la Comunidad"
          ]
        },
        professional: {
          name: "Profesional",
          description: "Para equipos en crecimiento y proyectos medianos",
          price: "$449",
          features: [
            "5 Licencias de Usuario",
            "BIM AI + Web AI Completo",
            "50 GB de Almacenamiento Cloud",
            "Soporte Prioritario",
            "Acceso API"
          ]
        },
        enterprise: {
          name: "Enterprise",
          description: "Para grandes organizaciones y proyectos complejos",
          price: "Personalizado",
          features: [
            "Usuarios Ilimitados",
            "Todas las Funciones",
            "Almacenamiento Ilimitado",
            "Soporte Dedicado 24/7",
            "Integraciones Personalizadas"
          ]
        }
      },
      faq: {
        title: "Preguntas sobre Precios",
        subtitle: "Encuentre respuestas a preguntas comunes sobre nuestros planes",
        cta: "Contactar Ventas"
      }
    }
  },
  pt: {
    pricing: {
      hero: {
        title: "Preços Simples e Transparentes",
        subtitle: "Escolha o plano que atende às necessidades da sua equipe"
      },
      monthly: "Mensal",
      annual: "Anual",
      save: "Economize 20%",
      popular: "Mais Popular",
      perMonth: "mês",
      getStarted: "Começar",
      plans: {
        starter: {
          name: "Starter",
          description: "Para profissionais individuais e pequenas equipes",
          price: "R$499",
          features: [
            "1 Licença de Usuário",
            "Recursos BIM AI Básicos",
            "5 GB de Armazenamento Cloud",
            "Suporte por Email",
            "Acesso à Comunidade"
          ]
        },
        professional: {
          name: "Profissional",
          description: "Para equipes em crescimento e projetos médios",
          price: "R$2.249",
          features: [
            "5 Licenças de Usuário",
            "BIM AI + Web AI Completo",
            "50 GB de Armazenamento Cloud",
            "Suporte Prioritário",
            "Acesso API"
          ]
        },
        enterprise: {
          name: "Enterprise",
          description: "Para grandes organizações e projetos complexos",
          price: "Personalizado",
          features: [
            "Usuários Ilimitados",
            "Todos os Recursos",
            "Armazenamento Ilimitado",
            "Suporte Dedicado 24/7",
            "Integrações Personalizadas"
          ]
        }
      },
      faq: {
        title: "Perguntas sobre Preços",
        subtitle: "Encontre respostas para perguntas comuns sobre nossos planos",
        cta: "Contatar Vendas"
      }
    }
  },
  ko: {
    pricing: {
      hero: {
        title: "간단하고 투명한 가격",
        subtitle: "팀의 요구에 맞는 플랜을 선택하세요"
      },
      monthly: "월간",
      annual: "연간",
      save: "20% 절약",
      popular: "가장 인기",
      perMonth: "월",
      getStarted: "시작하기",
      plans: {
        starter: {
          name: "스타터",
          description: "개인 전문가 및 소규모 팀용",
          price: "₩129,000",
          features: [
            "1 사용자 라이선스",
            "기본 BIM AI 기능",
            "5GB 클라우드 스토리지",
            "이메일 지원",
            "커뮤니티 액세스"
          ]
        },
        professional: {
          name: "프로페셔널",
          description: "성장하는 팀 및 중규모 프로젝트용",
          price: "₩599,000",
          features: [
            "5 사용자 라이선스",
            "전체 BIM AI + Web AI",
            "50GB 클라우드 스토리지",
            "우선 지원",
            "API 액세스"
          ]
        },
        enterprise: {
          name: "엔터프라이즈",
          description: "대규모 조직 및 복잡한 프로젝트용",
          price: "문의",
          features: [
            "무제한 사용자",
            "모든 기능",
            "무제한 스토리지",
            "전담 24/7 지원",
            "맞춤 통합"
          ]
        }
      },
      faq: {
        title: "가격 관련 질문",
        subtitle: "플랜에 대한 일반적인 질문에 대한 답변",
        cta: "영업팀 문의"
      }
    }
  },
  ru: {
    pricing: {
      hero: {
        title: "Простые и Прозрачные Цены",
        subtitle: "Выберите план, который соответствует потребностям вашей команды"
      },
      monthly: "Ежемесячно",
      annual: "Ежегодно",
      save: "Экономия 20%",
      popular: "Самый Популярный",
      perMonth: "месяц",
      getStarted: "Начать",
      plans: {
        starter: {
          name: "Starter",
          description: "Для индивидуальных профессионалов и небольших команд",
          price: "$99",
          features: [
            "1 Пользовательская Лицензия",
            "Базовые функции BIM AI",
            "5 ГБ Облачного Хранилища",
            "Поддержка по Email",
            "Доступ к Сообществу"
          ]
        },
        professional: {
          name: "Professional",
          description: "Для растущих команд и средних проектов",
          price: "$449",
          features: [
            "5 Пользовательских Лицензий",
            "Полный BIM AI + Web AI",
            "50 ГБ Облачного Хранилища",
            "Приоритетная Поддержка",
            "Доступ к API"
          ]
        },
        enterprise: {
          name: "Enterprise",
          description: "Для крупных организаций и сложных проектов",
          price: "По Запросу",
          features: [
            "Неограниченные Пользователи",
            "Все Функции",
            "Неограниченное Хранилище",
            "Выделенная Поддержка 24/7",
            "Индивидуальные Интеграции"
          ]
        }
      },
      faq: {
        title: "Вопросы о Ценах",
        subtitle: "Ответы на частые вопросы о наших планах",
        cta: "Связаться с Отделом Продаж"
      }
    }
  },
  ar: {
    pricing: {
      hero: {
        title: "أسعار بسيطة وشفافة",
        subtitle: "اختر الخطة التي تناسب احتياجات فريقك"
      },
      monthly: "شهري",
      annual: "سنوي",
      save: "وفر 20%",
      popular: "الأكثر شعبية",
      perMonth: "شهر",
      getStarted: "ابدأ الآن",
      plans: {
        starter: {
          name: "ستارتر",
          description: "للمحترفين الأفراد والفرق الصغيرة",
          price: "$99",
          features: [
            "ترخيص مستخدم واحد",
            "ميزات BIM AI الأساسية",
            "5 جيجابايت تخزين سحابي",
            "دعم عبر البريد الإلكتروني",
            "وصول المجتمع"
          ]
        },
        professional: {
          name: "احترافي",
          description: "للفرق المتنامية والمشاريع المتوسطة",
          price: "$449",
          features: [
            "5 تراخيص مستخدم",
            "BIM AI + Web AI كامل",
            "50 جيجابايت تخزين سحابي",
            "دعم ذو أولوية",
            "وصول API"
          ]
        },
        enterprise: {
          name: "المؤسسات",
          description: "للمؤسسات الكبيرة والمشاريع المعقدة",
          price: "مخصص",
          features: [
            "مستخدمون غير محدودين",
            "جميع الميزات",
            "تخزين غير محدود",
            "دعم مخصص 24/7",
            "تكاملات مخصصة"
          ]
        }
      },
      faq: {
        title: "أسئلة التسعير",
        subtitle: "إجابات على الأسئلة الشائعة حول خططنا",
        cta: "اتصل بالمبيعات"
      }
    }
  }
};

// Part 2: Contact/Demo translations
const contactTranslations = {
  fr: {
    contact: {
      hero: {
        title: "Contactez-nous",
        subtitle: "Vous avez des questions sur InvoratecAI ? Nous serions ravis de vous entendre et de vous aider à trouver la solution parfaite."
      },
      info: {
        email: {
          title: "Envoyez-nous un Email",
          description: "Écrivez-nous à tout moment. Nous répondons généralement sous 24 heures."
        },
        phone: {
          title: "Appelez-nous",
          description: "Parlez directement avec notre équipe pendant les heures ouvrables."
        },
        response: {
          title: "Temps de Réponse",
          description: "Nous nous efforçons de répondre à toutes les demandes dans les 24 heures."
        },
        social: {
          title: "Suivez-nous"
        }
      },
      form: {
        title: "Envoyez-nous un Message",
        name: "Nom",
        email: "Email",
        company: "Entreprise",
        subject: "Sujet",
        selectSubject: "Sélectionnez un sujet",
        subjects: {
          general: "Question Générale",
          sales: "Ventes",
          support: "Support Technique",
          partnership: "Partenariat",
          other: "Autre"
        },
        message: "Message",
        messagePlaceholder: "Comment pouvons-nous vous aider ?",
        submit: "Envoyer le Message",
        submitting: "Envoi en cours..."
      },
      success: {
        title: "Message Envoyé !",
        message: "Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais."
      }
    },
    demo: {
      hero: {
        title: "Demander une Démo",
        subtitle: "Découvrez comment InvoratecAI peut transformer votre flux de travail BIM avec une démonstration personnalisée"
      },
      benefits: {
        personalized: {
          title: "Démo Personnalisée",
          description: "Adaptée aux besoins spécifiques de votre projet"
        },
        expert: {
          title: "Conseils d'Experts",
          description: "Apprenez de nos spécialistes BIM et IA"
        },
        quickStart: {
          title: "Démarrage Rapide",
          description: "Soyez opérationnel en quelques minutes"
        }
      },
      contact: {
        title: "Planifier Votre Démo"
      },
      form: {
        name: "Nom Complet",
        email: "Email Professionnel",
        company: "Entreprise",
        phone: "Téléphone (Optionnel)",
        message: "Parlez-nous de votre projet",
        submit: "Demander une Démo",
        submitting: "Envoi en cours..."
      },
      success: {
        title: "Demande Reçue !",
        message: "Merci pour votre intérêt. Notre équipe vous contactera sous 24 heures pour planifier votre démo."
      }
    }
  },
  de: {
    contact: {
      hero: {
        title: "Kontaktieren Sie Uns",
        subtitle: "Haben Sie Fragen zu InvoratecAI? Wir freuen uns, von Ihnen zu hören und Ihnen bei der Suche nach der perfekten Lösung zu helfen."
      },
      info: {
        email: {
          title: "E-Mail Senden",
          description: "Schreiben Sie uns jederzeit. Wir antworten in der Regel innerhalb von 24 Stunden."
        },
        phone: {
          title: "Rufen Sie Uns An",
          description: "Sprechen Sie direkt mit unserem Team während der Geschäftszeiten."
        },
        response: {
          title: "Reaktionszeit",
          description: "Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten."
        },
        social: {
          title: "Folgen Sie Uns"
        }
      },
      form: {
        title: "Senden Sie Uns eine Nachricht",
        name: "Name",
        email: "E-Mail",
        company: "Unternehmen",
        subject: "Betreff",
        selectSubject: "Betreff auswählen",
        subjects: {
          general: "Allgemeine Anfrage",
          sales: "Vertrieb",
          support: "Technischer Support",
          partnership: "Partnerschaft",
          other: "Sonstiges"
        },
        message: "Nachricht",
        messagePlaceholder: "Wie können wir Ihnen helfen?",
        submit: "Nachricht Senden",
        submitting: "Wird gesendet..."
      },
      success: {
        title: "Nachricht Gesendet!",
        message: "Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns so schnell wie möglich bei Ihnen."
      }
    },
    demo: {
      hero: {
        title: "Demo Anfordern",
        subtitle: "Erfahren Sie, wie InvoratecAI Ihren BIM-Workflow mit einer personalisierten Demonstration transformieren kann"
      },
      benefits: {
        personalized: {
          title: "Personalisierte Demo",
          description: "Angepasst an Ihre spezifischen Projektanforderungen"
        },
        expert: {
          title: "Expertenberatung",
          description: "Lernen Sie von unseren BIM- und KI-Spezialisten"
        },
        quickStart: {
          title: "Schneller Start",
          description: "In wenigen Minuten einsatzbereit"
        }
      },
      contact: {
        title: "Ihre Demo Planen"
      },
      form: {
        name: "Vollständiger Name",
        email: "Geschäftliche E-Mail",
        company: "Unternehmen",
        phone: "Telefon (Optional)",
        message: "Erzählen Sie uns von Ihrem Projekt",
        submit: "Demo Anfordern",
        submitting: "Wird gesendet..."
      },
      success: {
        title: "Anfrage Erhalten!",
        message: "Vielen Dank für Ihr Interesse. Unser Team wird Sie innerhalb von 24 Stunden kontaktieren, um Ihre Demo zu planen."
      }
    }
  },
  es: {
    contact: {
      hero: {
        title: "Contáctenos",
        subtitle: "¿Tiene preguntas sobre InvoratecAI? Nos encantaría saber de usted y ayudarle a encontrar la solución perfecta."
      },
      info: {
        email: {
          title: "Envíenos un Email",
          description: "Escríbanos en cualquier momento. Generalmente respondemos en 24 horas."
        },
        phone: {
          title: "Llámenos",
          description: "Hable directamente con nuestro equipo durante el horario laboral."
        },
        response: {
          title: "Tiempo de Respuesta",
          description: "Nos esforzamos por responder a todas las consultas en 24 horas."
        },
        social: {
          title: "Síganos"
        }
      },
      form: {
        title: "Envíenos un Mensaje",
        name: "Nombre",
        email: "Email",
        company: "Empresa",
        subject: "Asunto",
        selectSubject: "Seleccione un asunto",
        subjects: {
          general: "Consulta General",
          sales: "Ventas",
          support: "Soporte Técnico",
          partnership: "Asociación",
          other: "Otro"
        },
        message: "Mensaje",
        messagePlaceholder: "¿Cómo podemos ayudarle?",
        submit: "Enviar Mensaje",
        submitting: "Enviando..."
      },
      success: {
        title: "¡Mensaje Enviado!",
        message: "Gracias por contactarnos. Le responderemos lo antes posible."
      }
    },
    demo: {
      hero: {
        title: "Solicitar Demo",
        subtitle: "Descubra cómo InvoratecAI puede transformar su flujo de trabajo BIM con una demostración personalizada"
      },
      benefits: {
        personalized: {
          title: "Demo Personalizada",
          description: "Adaptada a sus necesidades específicas de proyecto"
        },
        expert: {
          title: "Orientación Experta",
          description: "Aprenda de nuestros especialistas en BIM e IA"
        },
        quickStart: {
          title: "Inicio Rápido",
          description: "Esté operativo en minutos"
        }
      },
      contact: {
        title: "Programe Su Demo"
      },
      form: {
        name: "Nombre Completo",
        email: "Email Empresarial",
        company: "Empresa",
        phone: "Teléfono (Opcional)",
        message: "Cuéntenos sobre su proyecto",
        submit: "Solicitar Demo",
        submitting: "Enviando..."
      },
      success: {
        title: "¡Solicitud Recibida!",
        message: "Gracias por su interés. Nuestro equipo se pondrá en contacto en 24 horas para programar su demo."
      }
    }
  },
  pt: {
    contact: {
      hero: {
        title: "Entre em Contato",
        subtitle: "Tem perguntas sobre o InvoratecAI? Adoraríamos ouvir de você e ajudá-lo a encontrar a solução perfeita."
      },
      info: {
        email: {
          title: "Envie-nos um Email",
          description: "Escreva-nos a qualquer momento. Geralmente respondemos em 24 horas."
        },
        phone: {
          title: "Ligue para Nós",
          description: "Fale diretamente com nossa equipe durante o horário comercial."
        },
        response: {
          title: "Tempo de Resposta",
          description: "Nos esforçamos para responder a todas as consultas em 24 horas."
        },
        social: {
          title: "Siga-nos"
        }
      },
      form: {
        title: "Envie-nos uma Mensagem",
        name: "Nome",
        email: "Email",
        company: "Empresa",
        subject: "Assunto",
        selectSubject: "Selecione um assunto",
        subjects: {
          general: "Consulta Geral",
          sales: "Vendas",
          support: "Suporte Técnico",
          partnership: "Parceria",
          other: "Outro"
        },
        message: "Mensagem",
        messagePlaceholder: "Como podemos ajudá-lo?",
        submit: "Enviar Mensagem",
        submitting: "Enviando..."
      },
      success: {
        title: "Mensagem Enviada!",
        message: "Obrigado por entrar em contato. Responderemos o mais rápido possível."
      }
    },
    demo: {
      hero: {
        title: "Solicitar Demo",
        subtitle: "Descubra como o InvoratecAI pode transformar seu fluxo de trabalho BIM com uma demonstração personalizada"
      },
      benefits: {
        personalized: {
          title: "Demo Personalizada",
          description: "Adaptada às suas necessidades específicas de projeto"
        },
        expert: {
          title: "Orientação Especializada",
          description: "Aprenda com nossos especialistas em BIM e IA"
        },
        quickStart: {
          title: "Início Rápido",
          description: "Esteja operacional em minutos"
        }
      },
      contact: {
        title: "Agende Sua Demo"
      },
      form: {
        name: "Nome Completo",
        email: "Email Empresarial",
        company: "Empresa",
        phone: "Telefone (Opcional)",
        message: "Conte-nos sobre seu projeto",
        submit: "Solicitar Demo",
        submitting: "Enviando..."
      },
      success: {
        title: "Solicitação Recebida!",
        message: "Obrigado pelo seu interesse. Nossa equipe entrará em contato em 24 horas para agendar sua demo."
      }
    }
  },
  ko: {
    contact: {
      hero: {
        title: "문의하기",
        subtitle: "InvoratecAI에 대해 질문이 있으신가요? 연락 주시면 완벽한 솔루션을 찾는 데 도움을 드리겠습니다."
      },
      info: {
        email: {
          title: "이메일 보내기",
          description: "언제든지 연락 주세요. 일반적으로 24시간 이내에 응답합니다."
        },
        phone: {
          title: "전화하기",
          description: "업무 시간 중 팀과 직접 대화하세요."
        },
        response: {
          title: "응답 시간",
          description: "모든 문의에 24시간 이내 응답하도록 노력합니다."
        },
        social: {
          title: "팔로우하기"
        }
      },
      form: {
        title: "메시지 보내기",
        name: "이름",
        email: "이메일",
        company: "회사",
        subject: "제목",
        selectSubject: "제목 선택",
        subjects: {
          general: "일반 문의",
          sales: "영업",
          support: "기술 지원",
          partnership: "파트너십",
          other: "기타"
        },
        message: "메시지",
        messagePlaceholder: "어떻게 도와드릴까요?",
        submit: "메시지 보내기",
        submitting: "전송 중..."
      },
      success: {
        title: "메시지 전송됨!",
        message: "연락해 주셔서 감사합니다. 최대한 빨리 답변드리겠습니다."
      }
    },
    demo: {
      hero: {
        title: "데모 요청",
        subtitle: "InvoratecAI가 맞춤형 데모를 통해 BIM 워크플로우를 어떻게 변환할 수 있는지 알아보세요"
      },
      benefits: {
        personalized: {
          title: "맞춤형 데모",
          description: "귀하의 특정 프로젝트 요구에 맞춤"
        },
        expert: {
          title: "전문가 안내",
          description: "BIM 및 AI 전문가로부터 배우세요"
        },
        quickStart: {
          title: "빠른 시작",
          description: "몇 분 안에 시작하고 실행"
        }
      },
      contact: {
        title: "데모 예약하기"
      },
      form: {
        name: "성명",
        email: "업무용 이메일",
        company: "회사",
        phone: "전화번호 (선택)",
        message: "프로젝트에 대해 알려주세요",
        submit: "데모 요청",
        submitting: "전송 중..."
      },
      success: {
        title: "요청 접수됨!",
        message: "관심 가져주셔서 감사합니다. 24시간 이내에 데모 일정을 잡기 위해 연락드리겠습니다."
      }
    }
  },
  ru: {
    contact: {
      hero: {
        title: "Свяжитесь с Нами",
        subtitle: "Есть вопросы об InvoratecAI? Мы будем рады помочь вам найти идеальное решение."
      },
      info: {
        email: {
          title: "Напишите Нам",
          description: "Пишите в любое время. Обычно мы отвечаем в течение 24 часов."
        },
        phone: {
          title: "Позвоните Нам",
          description: "Поговорите напрямую с нашей командой в рабочее время."
        },
        response: {
          title: "Время Ответа",
          description: "Мы стремимся отвечать на все запросы в течение 24 часов."
        },
        social: {
          title: "Подписывайтесь"
        }
      },
      form: {
        title: "Отправьте Нам Сообщение",
        name: "Имя",
        email: "Email",
        company: "Компания",
        subject: "Тема",
        selectSubject: "Выберите тему",
        subjects: {
          general: "Общий Вопрос",
          sales: "Продажи",
          support: "Техническая Поддержка",
          partnership: "Партнерство",
          other: "Другое"
        },
        message: "Сообщение",
        messagePlaceholder: "Чем мы можем вам помочь?",
        submit: "Отправить Сообщение",
        submitting: "Отправка..."
      },
      success: {
        title: "Сообщение Отправлено!",
        message: "Спасибо за обращение. Мы ответим вам как можно скорее."
      }
    },
    demo: {
      hero: {
        title: "Запросить Демо",
        subtitle: "Узнайте, как InvoratecAI может преобразить ваш рабочий процесс BIM с помощью персонализированной демонстрации"
      },
      benefits: {
        personalized: {
          title: "Персонализированная Демо",
          description: "Адаптирована к вашим конкретным потребностям проекта"
        },
        expert: {
          title: "Экспертное Руководство",
          description: "Учитесь у наших специалистов по BIM и ИИ"
        },
        quickStart: {
          title: "Быстрый Старт",
          description: "Начните работу за считанные минуты"
        }
      },
      contact: {
        title: "Запланировать Демо"
      },
      form: {
        name: "Полное Имя",
        email: "Рабочий Email",
        company: "Компания",
        phone: "Телефон (Необязательно)",
        message: "Расскажите о вашем проекте",
        submit: "Запросить Демо",
        submitting: "Отправка..."
      },
      success: {
        title: "Запрос Получен!",
        message: "Спасибо за ваш интерес. Наша команда свяжется с вами в течение 24 часов для планирования демо."
      }
    }
  },
  ar: {
    contact: {
      hero: {
        title: "اتصل بنا",
        subtitle: "هل لديك أسئلة حول InvoratecAI؟ يسعدنا سماعك ومساعدتك في إيجاد الحل المثالي."
      },
      info: {
        email: {
          title: "راسلنا عبر البريد الإلكتروني",
          description: "راسلنا في أي وقت. نرد عادة خلال 24 ساعة."
        },
        phone: {
          title: "اتصل بنا",
          description: "تحدث مباشرة مع فريقنا خلال ساعات العمل."
        },
        response: {
          title: "وقت الاستجابة",
          description: "نسعى للرد على جميع الاستفسارات خلال 24 ساعة."
        },
        social: {
          title: "تابعنا"
        }
      },
      form: {
        title: "أرسل لنا رسالة",
        name: "الاسم",
        email: "البريد الإلكتروني",
        company: "الشركة",
        subject: "الموضوع",
        selectSubject: "اختر موضوعاً",
        subjects: {
          general: "استفسار عام",
          sales: "المبيعات",
          support: "الدعم الفني",
          partnership: "الشراكة",
          other: "أخرى"
        },
        message: "الرسالة",
        messagePlaceholder: "كيف يمكننا مساعدتك؟",
        submit: "إرسال الرسالة",
        submitting: "جاري الإرسال..."
      },
      success: {
        title: "تم إرسال الرسالة!",
        message: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن."
      }
    },
    demo: {
      hero: {
        title: "طلب عرض توضيحي",
        subtitle: "اكتشف كيف يمكن لـ InvoratecAI تحويل سير عمل BIM الخاص بك من خلال عرض توضيحي مخصص"
      },
      benefits: {
        personalized: {
          title: "عرض مخصص",
          description: "مصمم خصيصاً لاحتياجات مشروعك المحددة"
        },
        expert: {
          title: "إرشاد الخبراء",
          description: "تعلم من متخصصي BIM والذكاء الاصطناعي لدينا"
        },
        quickStart: {
          title: "بداية سريعة",
          description: "ابدأ العمل في دقائق"
        }
      },
      contact: {
        title: "جدولة العرض التوضيحي"
      },
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني للعمل",
        company: "الشركة",
        phone: "الهاتف (اختياري)",
        message: "أخبرنا عن مشروعك",
        submit: "طلب عرض توضيحي",
        submitting: "جاري الإرسال..."
      },
      success: {
        title: "تم استلام الطلب!",
        message: "شكراً لاهتمامك. سيتواصل معك فريقنا خلال 24 ساعة لجدولة العرض التوضيحي."
      }
    }
  }
};

// Part 3: New Media translations
const newMediaTranslations = {
  fr: {
    newMedia: {
      hero: {
        title: "Ressources Médias",
        subtitle: "Restez informé des dernières actualités, études de cas et insights de l'équipe InvoratecAI"
      },
      tabs: {
        all: "Tout",
        "case-study": "Études de Cas",
        knowledge: "Base de Connaissances",
        activity: "Centre d'Activités"
      },
      categories: {
        caseStudy: "Étude de Cas",
        knowledge: "Connaissances",
        activity: "Activité"
      },
      activities: {
        "webinar-ai-construction": {
          title: "Webinaire : L'IA dans la Construction 2025",
          description: "Rejoignez nos experts pour une discussion en direct sur les dernières tendances de l'IA transformant l'industrie de la construction."
        },
        "conference-bim-summit": {
          title: "Sommet BIM 2025",
          description: "Conférence annuelle réunissant les professionnels du BIM pour partager innovations et meilleures pratiques."
        },
        "workshop-revit-ai": {
          title: "Atelier Revit AI",
          description: "Atelier pratique pour maîtriser les fonctionnalités de l'add-in Revit InvoratecAI et booster votre productivité."
        }
      },
      readMore: "Lire Plus",
      empty: {
        title: "Aucun élément trouvé",
        description: "Revenez bientôt pour du nouveau contenu dans cette catégorie."
      },
      cta: {
        title: "Prêt à Transformer Votre Flux de Travail ?",
        subtitle: "Découvrez comment InvoratecAI peut aider votre équipe à obtenir de meilleurs résultats",
        button: "Demander une Démo"
      }
    }
  },
  de: {
    newMedia: {
      hero: {
        title: "Medienressourcen",
        subtitle: "Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, Fallstudien und Einblicken vom InvoratecAI-Team"
      },
      tabs: {
        all: "Alle",
        "case-study": "Fallstudien",
        knowledge: "Wissensdatenbank",
        activity: "Aktivitätszentrum"
      },
      categories: {
        caseStudy: "Fallstudie",
        knowledge: "Wissen",
        activity: "Aktivität"
      },
      activities: {
        "webinar-ai-construction": {
          title: "Webinar: KI im Bauwesen 2025",
          description: "Begleiten Sie unsere Experten zu einer Live-Diskussion über die neuesten KI-Trends, die die Baubranche transformieren."
        },
        "conference-bim-summit": {
          title: "BIM Summit 2025",
          description: "Jährliche Konferenz, die BIM-Fachleute zusammenbringt, um Innovationen und Best Practices auszutauschen."
        },
        "workshop-revit-ai": {
          title: "Revit AI Workshop",
          description: "Praktischer Workshop zur Beherrschung der Funktionen des InvoratecAI Revit-Add-ins und zur Steigerung Ihrer Produktivität."
        }
      },
      readMore: "Mehr Lesen",
      empty: {
        title: "Keine Elemente gefunden",
        description: "Schauen Sie bald wieder vorbei für neue Inhalte in dieser Kategorie."
      },
      cta: {
        title: "Bereit, Ihren Workflow zu Transformieren?",
        subtitle: "Sehen Sie, wie InvoratecAI Ihrem Team helfen kann, bessere Ergebnisse zu erzielen",
        button: "Demo Anfordern"
      }
    }
  },
  es: {
    newMedia: {
      hero: {
        title: "Recursos de Medios",
        subtitle: "Manténgase actualizado con las últimas noticias, casos de estudio e insights del equipo InvoratecAI"
      },
      tabs: {
        all: "Todo",
        "case-study": "Casos de Estudio",
        knowledge: "Base de Conocimientos",
        activity: "Centro de Actividades"
      },
      categories: {
        caseStudy: "Caso de Estudio",
        knowledge: "Conocimiento",
        activity: "Actividad"
      },
      activities: {
        "webinar-ai-construction": {
          title: "Webinar: IA en la Construcción 2025",
          description: "Únase a nuestros expertos para una discusión en vivo sobre las últimas tendencias de IA que transforman la industria de la construcción."
        },
        "conference-bim-summit": {
          title: "Cumbre BIM 2025",
          description: "Conferencia anual que reúne a profesionales de BIM para compartir innovaciones y mejores prácticas."
        },
        "workshop-revit-ai": {
          title: "Taller Revit AI",
          description: "Taller práctico para dominar las funciones del complemento Revit de InvoratecAI y aumentar su productividad."
        }
      },
      readMore: "Leer Más",
      empty: {
        title: "No se encontraron elementos",
        description: "Vuelva pronto para nuevo contenido en esta categoría."
      },
      cta: {
        title: "¿Listo para Transformar Su Flujo de Trabajo?",
        subtitle: "Vea cómo InvoratecAI puede ayudar a su equipo a lograr mejores resultados",
        button: "Solicitar Demo"
      }
    }
  },
  pt: {
    newMedia: {
      hero: {
        title: "Recursos de Mídia",
        subtitle: "Fique atualizado com as últimas notícias, estudos de caso e insights da equipe InvoratecAI"
      },
      tabs: {
        all: "Tudo",
        "case-study": "Estudos de Caso",
        knowledge: "Base de Conhecimento",
        activity: "Centro de Atividades"
      },
      categories: {
        caseStudy: "Estudo de Caso",
        knowledge: "Conhecimento",
        activity: "Atividade"
      },
      activities: {
        "webinar-ai-construction": {
          title: "Webinar: IA na Construção 2025",
          description: "Junte-se aos nossos especialistas para uma discussão ao vivo sobre as últimas tendências de IA que transformam a indústria da construção."
        },
        "conference-bim-summit": {
          title: "Summit BIM 2025",
          description: "Conferência anual que reúne profissionais de BIM para compartilhar inovações e melhores práticas."
        },
        "workshop-revit-ai": {
          title: "Workshop Revit AI",
          description: "Workshop prático para dominar os recursos do add-in Revit da InvoratecAI e aumentar sua produtividade."
        }
      },
      readMore: "Leia Mais",
      empty: {
        title: "Nenhum item encontrado",
        description: "Volte em breve para novos conteúdos nesta categoria."
      },
      cta: {
        title: "Pronto para Transformar Seu Fluxo de Trabalho?",
        subtitle: "Veja como o InvoratecAI pode ajudar sua equipe a alcançar melhores resultados",
        button: "Solicitar Demo"
      }
    }
  },
  ko: {
    newMedia: {
      hero: {
        title: "미디어 리소스",
        subtitle: "InvoratecAI 팀의 최신 뉴스, 사례 연구 및 인사이트를 확인하세요"
      },
      tabs: {
        all: "전체",
        "case-study": "사례 연구",
        knowledge: "지식 베이스",
        activity: "활동 센터"
      },
      categories: {
        caseStudy: "사례 연구",
        knowledge: "지식",
        activity: "활동"
      },
      activities: {
        "webinar-ai-construction": {
          title: "웨비나: 2025년 건설 분야 AI",
          description: "건설 산업을 변화시키는 최신 AI 트렌드에 대한 전문가들의 라이브 토론에 참여하세요."
        },
        "conference-bim-summit": {
          title: "BIM 서밋 2025",
          description: "혁신과 모범 사례를 공유하기 위해 BIM 전문가들이 모이는 연례 컨퍼런스."
        },
        "workshop-revit-ai": {
          title: "Revit AI 워크샵",
          description: "InvoratecAI의 Revit 애드인 기능을 마스터하고 생산성을 높이는 실습 워크샵."
        }
      },
      readMore: "더 읽기",
      empty: {
        title: "항목을 찾을 수 없음",
        description: "이 카테고리의 새 콘텐츠를 곧 확인하세요."
      },
      cta: {
        title: "워크플로우를 혁신할 준비가 되셨나요?",
        subtitle: "InvoratecAI가 팀이 더 나은 결과를 달성하는 데 어떻게 도움이 되는지 확인하세요",
        button: "데모 요청"
      }
    }
  },
  ru: {
    newMedia: {
      hero: {
        title: "Медиаресурсы",
        subtitle: "Следите за последними новостями, кейсами и инсайтами от команды InvoratecAI"
      },
      tabs: {
        all: "Все",
        "case-study": "Кейсы",
        knowledge: "База Знаний",
        activity: "Центр Активности"
      },
      categories: {
        caseStudy: "Кейс",
        knowledge: "Знания",
        activity: "Активность"
      },
      activities: {
        "webinar-ai-construction": {
          title: "Вебинар: ИИ в Строительстве 2025",
          description: "Присоединяйтесь к нашим экспертам для живой дискуссии о последних трендах ИИ, трансформирующих строительную отрасль."
        },
        "conference-bim-summit": {
          title: "BIM Саммит 2025",
          description: "Ежегодная конференция, объединяющая BIM-профессионалов для обмена инновациями и лучшими практиками."
        },
        "workshop-revit-ai": {
          title: "Мастер-класс Revit AI",
          description: "Практический мастер-класс по освоению функций надстройки InvoratecAI для Revit и повышению производительности."
        }
      },
      readMore: "Читать Далее",
      empty: {
        title: "Элементы не найдены",
        description: "Загляните позже для нового контента в этой категории."
      },
      cta: {
        title: "Готовы Трансформировать Рабочий Процесс?",
        subtitle: "Узнайте, как InvoratecAI может помочь вашей команде достичь лучших результатов",
        button: "Запросить Демо"
      }
    }
  },
  ar: {
    newMedia: {
      hero: {
        title: "موارد الإعلام",
        subtitle: "ابق على اطلاع بأحدث الأخبار ودراسات الحالة والرؤى من فريق InvoratecAI"
      },
      tabs: {
        all: "الكل",
        "case-study": "دراسات الحالة",
        knowledge: "قاعدة المعرفة",
        activity: "مركز النشاط"
      },
      categories: {
        caseStudy: "دراسة حالة",
        knowledge: "المعرفة",
        activity: "النشاط"
      },
      activities: {
        "webinar-ai-construction": {
          title: "ندوة عبر الإنترنت: الذكاء الاصطناعي في البناء 2025",
          description: "انضم إلى خبرائنا لمناقشة مباشرة حول أحدث اتجاهات الذكاء الاصطناعي التي تحول صناعة البناء."
        },
        "conference-bim-summit": {
          title: "قمة BIM 2025",
          description: "مؤتمر سنوي يجمع محترفي BIM لمشاركة الابتكارات وأفضل الممارسات."
        },
        "workshop-revit-ai": {
          title: "ورشة عمل Revit AI",
          description: "ورشة عمل عملية لإتقان ميزات إضافة Revit من InvoratecAI وتعزيز إنتاجيتك."
        }
      },
      readMore: "اقرأ المزيد",
      empty: {
        title: "لم يتم العثور على عناصر",
        description: "تحقق قريباً من المحتوى الجديد في هذه الفئة."
      },
      cta: {
        title: "هل أنت مستعد لتحويل سير عملك؟",
        subtitle: "اكتشف كيف يمكن لـ InvoratecAI مساعدة فريقك على تحقيق نتائج أفضل",
        button: "طلب عرض توضيحي"
      }
    }
  }
};

// Merge all translations
const allTranslations = {};
const languages = ['fr', 'de', 'es', 'pt', 'ko', 'ru', 'ar'];

languages.forEach(function(lang) {
  allTranslations[lang] = deepMerge(
    deepMerge(pricingTranslations[lang], contactTranslations[lang]),
    newMediaTranslations[lang]
  );
});

// Apply to files
languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = deepMerge(existing, allTranslations[lang]);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Added Pricing, Contact, Demo, NewMedia translations to ' + lang + '.json');
});

console.log('\nPart 1 translations complete!');
