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

// About page translations
const aboutTranslations = {
  fr: {
    about: {
      hero: {
        title: "Construire l'avenir de la gestion de construction",
        subtitle: "Nous sommes une équipe d'experts en construction, développeurs et passionnés d'IA dédiés à transformer la façon dont les projets de construction sont gérés."
      },
      mission: {
        title: "Notre mission",
        description: "Donner aux professionnels de la construction les moyens d'utiliser des outils intelligents qui simplifient la gestion de projet, améliorent la collaboration et produisent de meilleurs résultats.",
        points: {
          innovation: {
            title: "Innovation",
            description: "Repousser les limites de ce qui est possible dans la technologie de construction"
          },
          reliability: {
            title: "Fiabilité",
            description: "Fournir des outils fiables sur lesquels les équipes peuvent compter au quotidien"
          },
          simplicity: {
            title: "Simplicité",
            description: "Rendre une technologie complexe accessible et facile à utiliser"
          }
        }
      },
      story: {
        title: "Notre histoire",
        content: "Fondée en 2023, InvoratecAI est née d'une simple observation : les projets de construction sont de plus en plus complexes, mais les outils utilisés pour les gérer n'ont pas évolué. Notre équipe de fondateurs, avec des décennies d'expérience combinée dans la construction et la technologie, s'est donné pour mission de changer cela.",
        milestones: {
          founding: {
            year: "2023",
            title: "Fondation de l'entreprise",
            description: "InvoratecAI a été fondée avec une vision pour transformer la gestion de construction"
          },
          launch: {
            year: "2024",
            title: "Lancement du produit",
            description: "Lancement de notre plateforme alimentée par l'IA pour les professionnels de la construction"
          },
          growth: {
            year: "2024",
            title: "Croissance rapide",
            description: "Expansion à des milliers d'utilisateurs dans le monde entier"
          }
        }
      },
      team: {
        title: "Notre équipe",
        subtitle: "Rencontrez les personnes derrière InvoratecAI",
        members: {
          ceo: {
            name: "Alex Johnson",
            role: "PDG et co-fondateur",
            bio: "20+ ans d'expérience dans l'industrie de la construction"
          },
          cto: {
            name: "Sarah Chen",
            role: "Directeur technique",
            bio: "Ancien ingénieur senior chez les principales entreprises technologiques"
          },
          cpo: {
            name: "Michael Park",
            role: "Directeur produit",
            bio: "Expert en solutions logicielles de construction"
          }
        }
      },
      values: {
        title: "Nos valeurs",
        items: {
          customer: {
            title: "Priorité au client",
            description: "Chaque décision commence par les besoins de nos utilisateurs"
          },
          excellence: {
            title: "Excellence",
            description: "Nous nous efforçons d'offrir les meilleurs produits de leur catégorie"
          },
          integrity: {
            title: "Intégrité",
            description: "Nous maintenons des normes éthiques élevées dans tout ce que nous faisons"
          },
          collaboration: {
            title: "Collaboration",
            description: "Nous croyons en la puissance du travail d'équipe"
          }
        }
      },
      cta: {
        title: "Rejoignez notre voyage",
        description: "Prêt à transformer vos projets de construction ?",
        button: "Commencer"
      }
    }
  },
  de: {
    about: {
      hero: {
        title: "Die Zukunft des Baumanagements gestalten",
        subtitle: "Wir sind ein Team von Bauexperten, Entwicklern und KI-Enthusiasten, die sich der Transformation der Bauprojektverwaltung widmen."
      },
      mission: {
        title: "Unsere Mission",
        description: "Bauprofis mit intelligenten Werkzeugen auszustatten, die das Projektmanagement vereinfachen, die Zusammenarbeit verbessern und bessere Ergebnisse liefern.",
        points: {
          innovation: {
            title: "Innovation",
            description: "Die Grenzen des Möglichen in der Bautechnologie verschieben"
          },
          reliability: {
            title: "Zuverlässigkeit",
            description: "Zuverlässige Werkzeuge liefern, auf die Teams jeden Tag zählen können"
          },
          simplicity: {
            title: "Einfachheit",
            description: "Komplexe Technologie zugänglich und einfach zu bedienen machen"
          }
        }
      },
      story: {
        title: "Unsere Geschichte",
        content: "InvoratecAI wurde 2023 aus einer einfachen Beobachtung heraus gegründet: Bauprojekte werden immer komplexer, aber die Werkzeuge zu ihrer Verwaltung haben sich nicht weiterentwickelt. Unser Gründerteam mit Jahrzehnten kombinierter Erfahrung in Bau und Technologie machte es sich zur Aufgabe, dies zu ändern.",
        milestones: {
          founding: {
            year: "2023",
            title: "Unternehmensgründung",
            description: "InvoratecAI wurde mit einer Vision zur Transformation des Baumanagements gegründet"
          },
          launch: {
            year: "2024",
            title: "Produkteinführung",
            description: "Einführung unserer KI-gestützten Plattform für Bauprofis"
          },
          growth: {
            year: "2024",
            title: "Schnelles Wachstum",
            description: "Expansion zu Tausenden von Nutzern weltweit"
          }
        }
      },
      team: {
        title: "Unser Team",
        subtitle: "Lernen Sie die Menschen hinter InvoratecAI kennen",
        members: {
          ceo: {
            name: "Alex Johnson",
            role: "CEO & Mitgründer",
            bio: "20+ Jahre Erfahrung in der Baubranche"
          },
          cto: {
            name: "Sarah Chen",
            role: "CTO",
            bio: "Ehemaliger Senior-Ingenieur bei führenden Technologieunternehmen"
          },
          cpo: {
            name: "Michael Park",
            role: "CPO",
            bio: "Experte für Bausoftwarelösungen"
          }
        }
      },
      values: {
        title: "Unsere Werte",
        items: {
          customer: {
            title: "Kunde zuerst",
            description: "Jede Entscheidung beginnt mit den Bedürfnissen unserer Nutzer"
          },
          excellence: {
            title: "Exzellenz",
            description: "Wir streben danach, erstklassige Produkte zu liefern"
          },
          integrity: {
            title: "Integrität",
            description: "Wir halten hohe ethische Standards in allem, was wir tun"
          },
          collaboration: {
            title: "Zusammenarbeit",
            description: "Wir glauben an die Kraft der Teamarbeit"
          }
        }
      },
      cta: {
        title: "Begleiten Sie uns auf unserer Reise",
        description: "Bereit, Ihre Bauprojekte zu transformieren?",
        button: "Jetzt starten"
      }
    }
  },
  es: {
    about: {
      hero: {
        title: "Construyendo el futuro de la gestión de construcción",
        subtitle: "Somos un equipo de expertos en construcción, desarrolladores y entusiastas de la IA dedicados a transformar cómo se gestionan los proyectos de construcción."
      },
      mission: {
        title: "Nuestra misión",
        description: "Empoderar a los profesionales de la construcción con herramientas inteligentes que simplifican la gestión de proyectos, mejoran la colaboración y entregan mejores resultados.",
        points: {
          innovation: {
            title: "Innovación",
            description: "Empujando los límites de lo posible en tecnología de construcción"
          },
          reliability: {
            title: "Fiabilidad",
            description: "Entregando herramientas confiables en las que los equipos pueden confiar diariamente"
          },
          simplicity: {
            title: "Simplicidad",
            description: "Haciendo que la tecnología compleja sea accesible y fácil de usar"
          }
        }
      },
      story: {
        title: "Nuestra historia",
        content: "Fundada en 2023, InvoratecAI nació de una simple observación: los proyectos de construcción son cada vez más complejos, pero las herramientas utilizadas para gestionarlos no han evolucionado. Nuestro equipo fundador, con décadas de experiencia combinada en construcción y tecnología, se propuso cambiar eso.",
        milestones: {
          founding: {
            year: "2023",
            title: "Fundación de la empresa",
            description: "InvoratecAI fue fundada con una visión para transformar la gestión de construcción"
          },
          launch: {
            year: "2024",
            title: "Lanzamiento del producto",
            description: "Lanzamiento de nuestra plataforma impulsada por IA para profesionales de la construcción"
          },
          growth: {
            year: "2024",
            title: "Crecimiento rápido",
            description: "Expansión a miles de usuarios en todo el mundo"
          }
        }
      },
      team: {
        title: "Nuestro equipo",
        subtitle: "Conoce a las personas detrás de InvoratecAI",
        members: {
          ceo: {
            name: "Alex Johnson",
            role: "CEO y Cofundador",
            bio: "Más de 20 años de experiencia en la industria de la construcción"
          },
          cto: {
            name: "Sarah Chen",
            role: "CTO",
            bio: "Ex ingeniero senior en principales empresas tecnológicas"
          },
          cpo: {
            name: "Michael Park",
            role: "CPO",
            bio: "Experto en soluciones de software de construcción"
          }
        }
      },
      values: {
        title: "Nuestros valores",
        items: {
          customer: {
            title: "Cliente primero",
            description: "Cada decisión comienza con las necesidades de nuestros usuarios"
          },
          excellence: {
            title: "Excelencia",
            description: "Nos esforzamos por entregar productos de primera clase"
          },
          integrity: {
            title: "Integridad",
            description: "Mantenemos altos estándares éticos en todo lo que hacemos"
          },
          collaboration: {
            title: "Colaboración",
            description: "Creemos en el poder del trabajo en equipo"
          }
        }
      },
      cta: {
        title: "Únete a nuestro viaje",
        description: "¿Listo para transformar tus proyectos de construcción?",
        button: "Comenzar"
      }
    }
  },
  pt: {
    about: {
      hero: {
        title: "Construindo o futuro da gestão de construção",
        subtitle: "Somos uma equipe de especialistas em construção, desenvolvedores e entusiastas de IA dedicados a transformar como os projetos de construção são gerenciados."
      },
      mission: {
        title: "Nossa missão",
        description: "Capacitar profissionais da construção com ferramentas inteligentes que simplificam a gestão de projetos, melhoram a colaboração e entregam melhores resultados.",
        points: {
          innovation: {
            title: "Inovação",
            description: "Expandindo os limites do possível em tecnologia de construção"
          },
          reliability: {
            title: "Confiabilidade",
            description: "Entregando ferramentas confiáveis nas quais as equipes podem contar diariamente"
          },
          simplicity: {
            title: "Simplicidade",
            description: "Tornando a tecnologia complexa acessível e fácil de usar"
          }
        }
      },
      story: {
        title: "Nossa história",
        content: "Fundada em 2023, a InvoratecAI nasceu de uma simples observação: os projetos de construção estão se tornando cada vez mais complexos, mas as ferramentas usadas para gerenciá-los não evoluíram. Nossa equipe fundadora, com décadas de experiência combinada em construção e tecnologia, decidiu mudar isso.",
        milestones: {
          founding: {
            year: "2023",
            title: "Fundação da empresa",
            description: "InvoratecAI foi fundada com uma visão para transformar a gestão de construção"
          },
          launch: {
            year: "2024",
            title: "Lançamento do produto",
            description: "Lançamento da nossa plataforma alimentada por IA para profissionais da construção"
          },
          growth: {
            year: "2024",
            title: "Crescimento rápido",
            description: "Expansão para milhares de usuários em todo o mundo"
          }
        }
      },
      team: {
        title: "Nossa equipe",
        subtitle: "Conheça as pessoas por trás da InvoratecAI",
        members: {
          ceo: {
            name: "Alex Johnson",
            role: "CEO e Cofundador",
            bio: "Mais de 20 anos de experiência na indústria da construção"
          },
          cto: {
            name: "Sarah Chen",
            role: "CTO",
            bio: "Ex-engenheiro sênior em principais empresas de tecnologia"
          },
          cpo: {
            name: "Michael Park",
            role: "CPO",
            bio: "Especialista em soluções de software de construção"
          }
        }
      },
      values: {
        title: "Nossos valores",
        items: {
          customer: {
            title: "Cliente primeiro",
            description: "Cada decisão começa com as necessidades dos nossos usuários"
          },
          excellence: {
            title: "Excelência",
            description: "Nos esforçamos para entregar produtos de primeira classe"
          },
          integrity: {
            title: "Integridade",
            description: "Mantemos altos padrões éticos em tudo o que fazemos"
          },
          collaboration: {
            title: "Colaboração",
            description: "Acreditamos no poder do trabalho em equipe"
          }
        }
      },
      cta: {
        title: "Junte-se à nossa jornada",
        description: "Pronto para transformar seus projetos de construção?",
        button: "Começar"
      }
    }
  },
  ko: {
    about: {
      hero: {
        title: "건설 관리의 미래를 구축합니다",
        subtitle: "우리는 건설 프로젝트 관리 방식을 혁신하기 위해 헌신하는 건설 전문가, 개발자 및 AI 열정가 팀입니다."
      },
      mission: {
        title: "우리의 미션",
        description: "프로젝트 관리를 단순화하고 협업을 개선하며 더 나은 결과를 제공하는 스마트 도구로 건설 전문가에게 힘을 실어줍니다.",
        points: {
          innovation: {
            title: "혁신",
            description: "건설 기술에서 가능한 것의 한계를 넓힙니다"
          },
          reliability: {
            title: "신뢰성",
            description: "팀이 매일 의지할 수 있는 신뢰할 수 있는 도구를 제공합니다"
          },
          simplicity: {
            title: "단순함",
            description: "복잡한 기술을 접근하기 쉽고 사용하기 편하게 만듭니다"
          }
        }
      },
      story: {
        title: "우리의 이야기",
        content: "2023년에 설립된 InvoratecAI는 단순한 관찰에서 탄생했습니다: 건설 프로젝트는 점점 더 복잡해지고 있지만, 이를 관리하는 데 사용되는 도구는 발전하지 않았습니다. 건설과 기술 분야에서 수십 년의 경험을 보유한 창립팀은 이를 바꾸기로 했습니다.",
        milestones: {
          founding: {
            year: "2023",
            title: "회사 설립",
            description: "InvoratecAI는 건설 관리를 혁신하겠다는 비전으로 설립되었습니다"
          },
          launch: {
            year: "2024",
            title: "제품 출시",
            description: "건설 전문가를 위한 AI 기반 플랫폼 출시"
          },
          growth: {
            year: "2024",
            title: "빠른 성장",
            description: "전 세계 수천 명의 사용자로 확장"
          }
        }
      },
      team: {
        title: "우리 팀",
        subtitle: "InvoratecAI 뒤의 사람들을 만나보세요",
        members: {
          ceo: {
            name: "Alex Johnson",
            role: "CEO 및 공동 창립자",
            bio: "건설 산업에서 20년 이상의 경험"
          },
          cto: {
            name: "Sarah Chen",
            role: "CTO",
            bio: "주요 기술 기업의 전 시니어 엔지니어"
          },
          cpo: {
            name: "Michael Park",
            role: "CPO",
            bio: "건설 소프트웨어 솔루션 전문가"
          }
        }
      },
      values: {
        title: "우리의 가치",
        items: {
          customer: {
            title: "고객 우선",
            description: "모든 결정은 사용자의 요구에서 시작됩니다"
          },
          excellence: {
            title: "탁월함",
            description: "최고 수준의 제품을 제공하기 위해 노력합니다"
          },
          integrity: {
            title: "진실성",
            description: "우리가 하는 모든 일에서 높은 윤리 기준을 유지합니다"
          },
          collaboration: {
            title: "협업",
            description: "팀워크의 힘을 믿습니다"
          }
        }
      },
      cta: {
        title: "우리의 여정에 함께하세요",
        description: "건설 프로젝트를 혁신할 준비가 되셨나요?",
        button: "시작하기"
      }
    }
  },
  ru: {
    about: {
      hero: {
        title: "Строим будущее управления строительством",
        subtitle: "Мы — команда строительных экспертов, разработчиков и энтузиастов ИИ, посвятивших себя трансформации управления строительными проектами."
      },
      mission: {
        title: "Наша миссия",
        description: "Предоставить профессионалам строительства умные инструменты, которые упрощают управление проектами, улучшают сотрудничество и обеспечивают лучшие результаты.",
        points: {
          innovation: {
            title: "Инновации",
            description: "Расширяем границы возможного в строительных технологиях"
          },
          reliability: {
            title: "Надежность",
            description: "Предоставляем надежные инструменты, на которые команды могут положиться каждый день"
          },
          simplicity: {
            title: "Простота",
            description: "Делаем сложные технологии доступными и простыми в использовании"
          }
        }
      },
      story: {
        title: "Наша история",
        content: "Основанная в 2023 году, InvoratecAI родилась из простого наблюдения: строительные проекты становятся все более сложными, но инструменты для их управления не развивались. Наша команда основателей с десятилетиями совокупного опыта в строительстве и технологиях решила это изменить.",
        milestones: {
          founding: {
            year: "2023",
            title: "Основание компании",
            description: "InvoratecAI была основана с видением трансформации управления строительством"
          },
          launch: {
            year: "2024",
            title: "Запуск продукта",
            description: "Запуск нашей платформы на базе ИИ для профессионалов строительства"
          },
          growth: {
            year: "2024",
            title: "Быстрый рост",
            description: "Расширение до тысяч пользователей по всему миру"
          }
        }
      },
      team: {
        title: "Наша команда",
        subtitle: "Познакомьтесь с людьми за InvoratecAI",
        members: {
          ceo: {
            name: "Алекс Джонсон",
            role: "CEO и сооснователь",
            bio: "Более 20 лет опыта в строительной отрасли"
          },
          cto: {
            name: "Сара Чен",
            role: "CTO",
            bio: "Бывший старший инженер в ведущих технологических компаниях"
          },
          cpo: {
            name: "Майкл Парк",
            role: "CPO",
            bio: "Эксперт в области строительного программного обеспечения"
          }
        }
      },
      values: {
        title: "Наши ценности",
        items: {
          customer: {
            title: "Клиент прежде всего",
            description: "Каждое решение начинается с потребностей наших пользователей"
          },
          excellence: {
            title: "Превосходство",
            description: "Мы стремимся предоставлять продукты высочайшего класса"
          },
          integrity: {
            title: "Честность",
            description: "Мы придерживаемся высоких этических стандартов во всем, что делаем"
          },
          collaboration: {
            title: "Сотрудничество",
            description: "Мы верим в силу командной работы"
          }
        }
      },
      cta: {
        title: "Присоединяйтесь к нашему путешествию",
        description: "Готовы трансформировать ваши строительные проекты?",
        button: "Начать"
      }
    }
  },
  ar: {
    about: {
      hero: {
        title: "بناء مستقبل إدارة البناء",
        subtitle: "نحن فريق من خبراء البناء والمطورين وعشاق الذكاء الاصطناعي المكرسين لتحويل طريقة إدارة مشاريع البناء."
      },
      mission: {
        title: "مهمتنا",
        description: "تمكين محترفي البناء بأدوات ذكية تبسط إدارة المشاريع وتحسن التعاون وتحقق نتائج أفضل.",
        points: {
          innovation: {
            title: "الابتكار",
            description: "دفع حدود الممكن في تقنيات البناء"
          },
          reliability: {
            title: "الموثوقية",
            description: "تقديم أدوات موثوقة يمكن للفرق الاعتماد عليها يومياً"
          },
          simplicity: {
            title: "البساطة",
            description: "جعل التقنيات المعقدة سهلة الوصول والاستخدام"
          }
        }
      },
      story: {
        title: "قصتنا",
        content: "تأسست InvoratecAI في عام 2023 من ملاحظة بسيطة: مشاريع البناء تزداد تعقيداً، لكن الأدوات المستخدمة لإدارتها لم تتطور. قرر فريق المؤسسين لدينا، مع عقود من الخبرة المشتركة في البناء والتكنولوجيا، تغيير ذلك.",
        milestones: {
          founding: {
            year: "2023",
            title: "تأسيس الشركة",
            description: "تأسست InvoratecAI برؤية لتحويل إدارة البناء"
          },
          launch: {
            year: "2024",
            title: "إطلاق المنتج",
            description: "إطلاق منصتنا المدعومة بالذكاء الاصطناعي لمحترفي البناء"
          },
          growth: {
            year: "2024",
            title: "النمو السريع",
            description: "التوسع إلى آلاف المستخدمين حول العالم"
          }
        }
      },
      team: {
        title: "فريقنا",
        subtitle: "تعرف على الأشخاص وراء InvoratecAI",
        members: {
          ceo: {
            name: "أليكس جونسون",
            role: "الرئيس التنفيذي والمؤسس المشارك",
            bio: "أكثر من 20 عاماً من الخبرة في صناعة البناء"
          },
          cto: {
            name: "سارة تشن",
            role: "المدير التقني",
            bio: "مهندس أول سابق في شركات التكنولوجيا الرائدة"
          },
          cpo: {
            name: "مايكل بارك",
            role: "مدير المنتجات",
            bio: "خبير في حلول برمجيات البناء"
          }
        }
      },
      values: {
        title: "قيمنا",
        items: {
          customer: {
            title: "العميل أولاً",
            description: "كل قرار يبدأ باحتياجات مستخدمينا"
          },
          excellence: {
            title: "التميز",
            description: "نسعى لتقديم منتجات من الدرجة الأولى"
          },
          integrity: {
            title: "النزاهة",
            description: "نحافظ على معايير أخلاقية عالية في كل ما نفعله"
          },
          collaboration: {
            title: "التعاون",
            description: "نؤمن بقوة العمل الجماعي"
          }
        }
      },
      cta: {
        title: "انضم إلى رحلتنا",
        description: "مستعد لتحويل مشاريع البناء الخاصة بك؟",
        button: "ابدأ الآن"
      }
    }
  }
};

// Blog translations
const blogTranslations = {
  fr: {
    blog: {
      title: "Blog",
      subtitle: "Actualités, mises à jour et insights sur la technologie de construction",
      readMore: "Lire la suite",
      backToBlog: "Retour au blog",
      categories: {
        all: "Tout",
        news: "Actualités",
        tutorials: "Tutoriels",
        updates: "Mises à jour",
        insights: "Perspectives"
      },
      empty: "Aucun article de blog pour le moment. Revenez bientôt!",
      search: "Rechercher des articles...",
      recentPosts: "Articles récents",
      popularTags: "Tags populaires",
      sharePost: "Partager cet article",
      relatedPosts: "Articles connexes",
      author: "Auteur",
      publishedOn: "Publié le",
      minuteRead: "min de lecture"
    }
  },
  de: {
    blog: {
      title: "Blog",
      subtitle: "Neuigkeiten, Updates und Einblicke in die Bautechnologie",
      readMore: "Mehr lesen",
      backToBlog: "Zurück zum Blog",
      categories: {
        all: "Alle",
        news: "Neuigkeiten",
        tutorials: "Tutorials",
        updates: "Updates",
        insights: "Einblicke"
      },
      empty: "Noch keine Blog-Beiträge. Schauen Sie bald wieder vorbei!",
      search: "Artikel suchen...",
      recentPosts: "Aktuelle Beiträge",
      popularTags: "Beliebte Tags",
      sharePost: "Beitrag teilen",
      relatedPosts: "Verwandte Beiträge",
      author: "Autor",
      publishedOn: "Veröffentlicht am",
      minuteRead: "Min. Lesezeit"
    }
  },
  es: {
    blog: {
      title: "Blog",
      subtitle: "Noticias, actualizaciones e insights sobre tecnología de construcción",
      readMore: "Leer más",
      backToBlog: "Volver al blog",
      categories: {
        all: "Todo",
        news: "Noticias",
        tutorials: "Tutoriales",
        updates: "Actualizaciones",
        insights: "Perspectivas"
      },
      empty: "No hay publicaciones de blog todavía. ¡Vuelve pronto!",
      search: "Buscar artículos...",
      recentPosts: "Publicaciones recientes",
      popularTags: "Etiquetas populares",
      sharePost: "Compartir este artículo",
      relatedPosts: "Artículos relacionados",
      author: "Autor",
      publishedOn: "Publicado el",
      minuteRead: "min de lectura"
    }
  },
  pt: {
    blog: {
      title: "Blog",
      subtitle: "Notícias, atualizações e insights sobre tecnologia de construção",
      readMore: "Ler mais",
      backToBlog: "Voltar ao blog",
      categories: {
        all: "Tudo",
        news: "Notícias",
        tutorials: "Tutoriais",
        updates: "Atualizações",
        insights: "Perspectivas"
      },
      empty: "Nenhum post de blog ainda. Volte em breve!",
      search: "Pesquisar artigos...",
      recentPosts: "Posts recentes",
      popularTags: "Tags populares",
      sharePost: "Compartilhar este artigo",
      relatedPosts: "Artigos relacionados",
      author: "Autor",
      publishedOn: "Publicado em",
      minuteRead: "min de leitura"
    }
  },
  ko: {
    blog: {
      title: "블로그",
      subtitle: "건설 기술에 대한 뉴스, 업데이트 및 인사이트",
      readMore: "더 읽기",
      backToBlog: "블로그로 돌아가기",
      categories: {
        all: "전체",
        news: "뉴스",
        tutorials: "튜토리얼",
        updates: "업데이트",
        insights: "인사이트"
      },
      empty: "아직 블로그 글이 없습니다. 곧 다시 확인해 주세요!",
      search: "글 검색...",
      recentPosts: "최근 글",
      popularTags: "인기 태그",
      sharePost: "이 글 공유하기",
      relatedPosts: "관련 글",
      author: "작성자",
      publishedOn: "게시일",
      minuteRead: "분 읽기"
    }
  },
  ru: {
    blog: {
      title: "Блог",
      subtitle: "Новости, обновления и аналитика о строительных технологиях",
      readMore: "Читать далее",
      backToBlog: "Назад к блогу",
      categories: {
        all: "Все",
        news: "Новости",
        tutorials: "Руководства",
        updates: "Обновления",
        insights: "Аналитика"
      },
      empty: "Пока нет записей в блоге. Заходите позже!",
      search: "Поиск статей...",
      recentPosts: "Последние публикации",
      popularTags: "Популярные теги",
      sharePost: "Поделиться статьей",
      relatedPosts: "Похожие статьи",
      author: "Автор",
      publishedOn: "Опубликовано",
      minuteRead: "мин чтения"
    }
  },
  ar: {
    blog: {
      title: "المدونة",
      subtitle: "أخبار وتحديثات ورؤى حول تقنيات البناء",
      readMore: "اقرأ المزيد",
      backToBlog: "العودة إلى المدونة",
      categories: {
        all: "الكل",
        news: "أخبار",
        tutorials: "دروس",
        updates: "تحديثات",
        insights: "رؤى"
      },
      empty: "لا توجد منشورات مدونة بعد. عد قريباً!",
      search: "البحث في المقالات...",
      recentPosts: "المنشورات الأخيرة",
      popularTags: "العلامات الشائعة",
      sharePost: "مشاركة هذا المقال",
      relatedPosts: "مقالات ذات صلة",
      author: "الكاتب",
      publishedOn: "نُشر في",
      minuteRead: "دقيقة قراءة"
    }
  }
};

// Apply translations
const languages = ['fr', 'de', 'es', 'pt', 'ko', 'ru', 'ar'];

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  let merged = existing;
  if (aboutTranslations[lang]) {
    merged = deepMerge(merged, aboutTranslations[lang]);
  }
  if (blogTranslations[lang]) {
    merged = deepMerge(merged, blogTranslations[lang]);
  }

  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Added About and Blog translations to ' + lang + '.json');
});

console.log('\nAbout and Blog translations complete!');
