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

// Extended About page content
const aboutExtended = {
  fr: {
    about: {
      bimMeetsAi: {
        title: "Où l'expertise BIM rencontre l'IA",
        subtitle: "Nous combinons des décennies d'expérience en technologie de construction avec des capacités IA de pointe",
        bim: {
          title: "Expertise BIM",
          description: "Nos experts ont des décennies d'expérience en modélisation BIM et gestion de projet",
          items: {
            modeling: "Modélisation BIM 3D/4D",
            coordination: "Coordination MEP et détection de conflits",
            management: "Gestion de projets de construction"
          }
        },
        ai: {
          title: "Technologie IA",
          description: "Apprentissage automatique avancé et traitement du langage naturel"
        }
      },
      mission: {
        details: "Notre équipe combine une expertise approfondie en technologie BIM avec des capacités IA avancées pour créer des solutions qui transforment la gestion de projets de construction."
      }
    }
  },
  de: {
    about: {
      bimMeetsAi: {
        title: "Wo BIM-Expertise auf KI trifft",
        subtitle: "Wir kombinieren Jahrzehnte an Erfahrung in der Bautechnologie mit modernsten KI-Fähigkeiten",
        bim: {
          title: "BIM-Expertise",
          description: "Unsere Experten haben Jahrzehnte an Erfahrung in BIM-Modellierung und Projektmanagement",
          items: {
            modeling: "3D/4D BIM-Modellierung",
            coordination: "MEP-Koordination & Kollisionserkennung",
            management: "Baumanagement"
          }
        },
        ai: {
          title: "KI-Technologie",
          description: "Fortgeschrittenes maschinelles Lernen und natürliche Sprachverarbeitung"
        }
      },
      mission: {
        details: "Unser Team kombiniert tiefgreifende Expertise in BIM-Technologie mit fortgeschrittenen KI-Fähigkeiten, um Lösungen zu schaffen, die das Baumanagement transformieren."
      }
    }
  },
  es: {
    about: {
      bimMeetsAi: {
        title: "Donde la experiencia BIM se encuentra con la IA",
        subtitle: "Combinamos décadas de experiencia en tecnología de construcción con capacidades de IA de vanguardia",
        bim: {
          title: "Experiencia BIM",
          description: "Nuestros expertos tienen décadas de experiencia en modelado BIM y gestión de proyectos",
          items: {
            modeling: "Modelado BIM 3D/4D",
            coordination: "Coordinación MEP y detección de conflictos",
            management: "Gestión de proyectos de construcción"
          }
        },
        ai: {
          title: "Tecnología IA",
          description: "Aprendizaje automático avanzado y procesamiento de lenguaje natural"
        }
      },
      mission: {
        details: "Nuestro equipo combina profunda experiencia en tecnología BIM con capacidades avanzadas de IA para crear soluciones que transforman la gestión de proyectos de construcción."
      }
    }
  },
  pt: {
    about: {
      bimMeetsAi: {
        title: "Onde a experiência BIM encontra a IA",
        subtitle: "Combinamos décadas de experiência em tecnologia de construção com capacidades de IA de ponta",
        bim: {
          title: "Experiência BIM",
          description: "Nossos especialistas têm décadas de experiência em modelagem BIM e gerenciamento de projetos",
          items: {
            modeling: "Modelagem BIM 3D/4D",
            coordination: "Coordenação MEP e detecção de conflitos",
            management: "Gerenciamento de projetos de construção"
          }
        },
        ai: {
          title: "Tecnologia IA",
          description: "Aprendizado de máquina avançado e processamento de linguagem natural"
        }
      },
      mission: {
        details: "Nossa equipe combina profunda experiência em tecnologia BIM com capacidades avançadas de IA para criar soluções que transformam o gerenciamento de projetos de construção."
      }
    }
  },
  ko: {
    about: {
      bimMeetsAi: {
        title: "BIM 전문성과 AI의 만남",
        subtitle: "수십 년간의 건설 기술 경험과 최첨단 AI 역량을 결합합니다",
        bim: {
          title: "BIM 전문성",
          description: "우리 전문가들은 BIM 모델링과 프로젝트 관리에서 수십 년의 경험을 보유하고 있습니다",
          items: {
            modeling: "3D/4D BIM 모델링",
            coordination: "MEP 조정 및 충돌 감지",
            management: "건설 프로젝트 관리"
          }
        },
        ai: {
          title: "AI 기술",
          description: "고급 머신러닝 및 자연어 처리"
        }
      },
      mission: {
        details: "우리 팀은 BIM 기술에 대한 깊은 전문성과 고급 AI 역량을 결합하여 건설 프로젝트 관리를 혁신하는 솔루션을 만듭니다."
      }
    }
  },
  ru: {
    about: {
      bimMeetsAi: {
        title: "Где экспертиза BIM встречается с ИИ",
        subtitle: "Мы объединяем десятилетия опыта в строительных технологиях с передовыми возможностями ИИ",
        bim: {
          title: "Экспертиза BIM",
          description: "Наши эксперты имеют десятилетия опыта в BIM-моделировании и управлении проектами",
          items: {
            modeling: "3D/4D BIM-моделирование",
            coordination: "Координация MEP и обнаружение коллизий",
            management: "Управление строительными проектами"
          }
        },
        ai: {
          title: "Технология ИИ",
          description: "Продвинутое машинное обучение и обработка естественного языка"
        }
      },
      mission: {
        details: "Наша команда сочетает глубокую экспертизу в BIM-технологиях с продвинутыми возможностями ИИ для создания решений, трансформирующих управление строительными проектами."
      }
    }
  },
  ar: {
    about: {
      bimMeetsAi: {
        title: "حيث تلتقي خبرة BIM بالذكاء الاصطناعي",
        subtitle: "نجمع بين عقود من الخبرة في تقنيات البناء وقدرات الذكاء الاصطناعي المتطورة",
        bim: {
          title: "خبرة BIM",
          description: "خبراؤنا لديهم عقود من الخبرة في نمذجة BIM وإدارة المشاريع",
          items: {
            modeling: "نمذجة BIM ثلاثية/رباعية الأبعاد",
            coordination: "تنسيق MEP وكشف التعارضات",
            management: "إدارة مشاريع البناء"
          }
        },
        ai: {
          title: "تقنية الذكاء الاصطناعي",
          description: "تعلم آلي متقدم ومعالجة اللغة الطبيعية"
        }
      },
      mission: {
        details: "يجمع فريقنا بين الخبرة العميقة في تقنية BIM وقدرات الذكاء الاصطناعي المتقدمة لإنشاء حلول تحول إدارة مشاريع البناء."
      }
    }
  }
};

// Extended blog translations
const blogExtended = {
  fr: {
    blog: {
      featured: "À la une",
      latestPosts: "Derniers articles",
      category: "Catégorie",
      tags: "Tags",
      noPostsFound: "Aucun article trouvé",
      loadMore: "Charger plus",
      written_by: "Écrit par",
      share: {
        title: "Partager cet article",
        twitter: "Partager sur Twitter",
        linkedin: "Partager sur LinkedIn",
        facebook: "Partager sur Facebook"
      },
      newsletter: {
        title: "Abonnez-vous à notre newsletter",
        description: "Recevez les dernières nouvelles et mises à jour",
        placeholder: "Votre email",
        subscribe: "S'abonner"
      }
    },
    blogDetail: {
      backToList: "Retour au blog",
      tableOfContents: "Table des matières",
      relatedArticles: "Articles connexes",
      previousArticle: "Article précédent",
      nextArticle: "Article suivant"
    }
  },
  de: {
    blog: {
      featured: "Empfohlen",
      latestPosts: "Neueste Beiträge",
      category: "Kategorie",
      tags: "Tags",
      noPostsFound: "Keine Beiträge gefunden",
      loadMore: "Mehr laden",
      written_by: "Geschrieben von",
      share: {
        title: "Diesen Beitrag teilen",
        twitter: "Auf Twitter teilen",
        linkedin: "Auf LinkedIn teilen",
        facebook: "Auf Facebook teilen"
      },
      newsletter: {
        title: "Newsletter abonnieren",
        description: "Erhalten Sie die neuesten Nachrichten und Updates",
        placeholder: "Ihre E-Mail",
        subscribe: "Abonnieren"
      }
    },
    blogDetail: {
      backToList: "Zurück zum Blog",
      tableOfContents: "Inhaltsverzeichnis",
      relatedArticles: "Verwandte Artikel",
      previousArticle: "Vorheriger Artikel",
      nextArticle: "Nächster Artikel"
    }
  },
  es: {
    blog: {
      featured: "Destacado",
      latestPosts: "Últimas publicaciones",
      category: "Categoría",
      tags: "Etiquetas",
      noPostsFound: "No se encontraron publicaciones",
      loadMore: "Cargar más",
      written_by: "Escrito por",
      share: {
        title: "Compartir este artículo",
        twitter: "Compartir en Twitter",
        linkedin: "Compartir en LinkedIn",
        facebook: "Compartir en Facebook"
      },
      newsletter: {
        title: "Suscríbete a nuestro boletín",
        description: "Recibe las últimas noticias y actualizaciones",
        placeholder: "Tu email",
        subscribe: "Suscribirse"
      }
    },
    blogDetail: {
      backToList: "Volver al blog",
      tableOfContents: "Tabla de contenidos",
      relatedArticles: "Artículos relacionados",
      previousArticle: "Artículo anterior",
      nextArticle: "Siguiente artículo"
    }
  },
  pt: {
    blog: {
      featured: "Destaque",
      latestPosts: "Últimas publicações",
      category: "Categoria",
      tags: "Tags",
      noPostsFound: "Nenhuma publicação encontrada",
      loadMore: "Carregar mais",
      written_by: "Escrito por",
      share: {
        title: "Compartilhar este artigo",
        twitter: "Compartilhar no Twitter",
        linkedin: "Compartilhar no LinkedIn",
        facebook: "Compartilhar no Facebook"
      },
      newsletter: {
        title: "Assine nossa newsletter",
        description: "Receba as últimas notícias e atualizações",
        placeholder: "Seu email",
        subscribe: "Assinar"
      }
    },
    blogDetail: {
      backToList: "Voltar ao blog",
      tableOfContents: "Índice",
      relatedArticles: "Artigos relacionados",
      previousArticle: "Artigo anterior",
      nextArticle: "Próximo artigo"
    }
  },
  ko: {
    blog: {
      featured: "추천",
      latestPosts: "최신 글",
      category: "카테고리",
      tags: "태그",
      noPostsFound: "글을 찾을 수 없습니다",
      loadMore: "더 보기",
      written_by: "작성자",
      share: {
        title: "이 글 공유하기",
        twitter: "트위터에 공유",
        linkedin: "LinkedIn에 공유",
        facebook: "페이스북에 공유"
      },
      newsletter: {
        title: "뉴스레터 구독",
        description: "최신 뉴스와 업데이트를 받아보세요",
        placeholder: "이메일",
        subscribe: "구독"
      }
    },
    blogDetail: {
      backToList: "블로그로 돌아가기",
      tableOfContents: "목차",
      relatedArticles: "관련 글",
      previousArticle: "이전 글",
      nextArticle: "다음 글"
    }
  },
  ru: {
    blog: {
      featured: "Рекомендуемое",
      latestPosts: "Последние публикации",
      category: "Категория",
      tags: "Теги",
      noPostsFound: "Публикации не найдены",
      loadMore: "Загрузить еще",
      written_by: "Автор",
      share: {
        title: "Поделиться статьей",
        twitter: "Поделиться в Twitter",
        linkedin: "Поделиться в LinkedIn",
        facebook: "Поделиться в Facebook"
      },
      newsletter: {
        title: "Подпишитесь на рассылку",
        description: "Получайте последние новости и обновления",
        placeholder: "Ваш email",
        subscribe: "Подписаться"
      }
    },
    blogDetail: {
      backToList: "Назад к блогу",
      tableOfContents: "Содержание",
      relatedArticles: "Похожие статьи",
      previousArticle: "Предыдущая статья",
      nextArticle: "Следующая статья"
    }
  },
  ar: {
    blog: {
      featured: "مميز",
      latestPosts: "آخر المنشورات",
      category: "الفئة",
      tags: "العلامات",
      noPostsFound: "لم يتم العثور على منشورات",
      loadMore: "تحميل المزيد",
      written_by: "بقلم",
      share: {
        title: "مشاركة هذا المقال",
        twitter: "مشاركة على تويتر",
        linkedin: "مشاركة على لينكد إن",
        facebook: "مشاركة على فيسبوك"
      },
      newsletter: {
        title: "اشترك في نشرتنا الإخبارية",
        description: "احصل على آخر الأخبار والتحديثات",
        placeholder: "بريدك الإلكتروني",
        subscribe: "اشترك"
      }
    },
    blogDetail: {
      backToList: "العودة للمدونة",
      tableOfContents: "جدول المحتويات",
      relatedArticles: "مقالات ذات صلة",
      previousArticle: "المقال السابق",
      nextArticle: "المقال التالي"
    }
  }
};

// Extended cases translations
const casesExtended = {
  fr: {
    cases: {
      stats: {
        projects: "Projets",
        savings: "Économies",
        efficiency: "Efficacité"
      },
      filter: {
        all: "Tous",
        byIndustry: "Par industrie",
        bySize: "Par taille"
      },
      caseStudy: {
        overview: "Vue d'ensemble",
        challenge: "Le défi",
        solution: "Notre solution",
        implementation: "Mise en œuvre",
        results: "Résultats",
        keyMetrics: "Métriques clés",
        testimonial: "Témoignage client",
        downloadPdf: "Télécharger le PDF"
      }
    },
    caseStudyDetail: {
      backToList: "Retour aux études de cas",
      relatedCases: "Études de cas connexes",
      contactUs: "Contactez-nous pour des résultats similaires"
    }
  },
  de: {
    cases: {
      stats: {
        projects: "Projekte",
        savings: "Einsparungen",
        efficiency: "Effizienz"
      },
      filter: {
        all: "Alle",
        byIndustry: "Nach Branche",
        bySize: "Nach Größe"
      },
      caseStudy: {
        overview: "Überblick",
        challenge: "Die Herausforderung",
        solution: "Unsere Lösung",
        implementation: "Implementierung",
        results: "Ergebnisse",
        keyMetrics: "Wichtige Kennzahlen",
        testimonial: "Kundenstimme",
        downloadPdf: "PDF herunterladen"
      }
    },
    caseStudyDetail: {
      backToList: "Zurück zu Fallstudien",
      relatedCases: "Verwandte Fallstudien",
      contactUs: "Kontaktieren Sie uns für ähnliche Ergebnisse"
    }
  },
  es: {
    cases: {
      stats: {
        projects: "Proyectos",
        savings: "Ahorros",
        efficiency: "Eficiencia"
      },
      filter: {
        all: "Todos",
        byIndustry: "Por industria",
        bySize: "Por tamaño"
      },
      caseStudy: {
        overview: "Resumen",
        challenge: "El desafío",
        solution: "Nuestra solución",
        implementation: "Implementación",
        results: "Resultados",
        keyMetrics: "Métricas clave",
        testimonial: "Testimonio del cliente",
        downloadPdf: "Descargar PDF"
      }
    },
    caseStudyDetail: {
      backToList: "Volver a casos de estudio",
      relatedCases: "Casos de estudio relacionados",
      contactUs: "Contáctenos para resultados similares"
    }
  },
  pt: {
    cases: {
      stats: {
        projects: "Projetos",
        savings: "Economia",
        efficiency: "Eficiência"
      },
      filter: {
        all: "Todos",
        byIndustry: "Por indústria",
        bySize: "Por tamanho"
      },
      caseStudy: {
        overview: "Visão geral",
        challenge: "O desafio",
        solution: "Nossa solução",
        implementation: "Implementação",
        results: "Resultados",
        keyMetrics: "Métricas principais",
        testimonial: "Depoimento do cliente",
        downloadPdf: "Baixar PDF"
      }
    },
    caseStudyDetail: {
      backToList: "Voltar aos casos de estudo",
      relatedCases: "Casos de estudo relacionados",
      contactUs: "Entre em contato para resultados semelhantes"
    }
  },
  ko: {
    cases: {
      stats: {
        projects: "프로젝트",
        savings: "비용 절감",
        efficiency: "효율성"
      },
      filter: {
        all: "전체",
        byIndustry: "산업별",
        bySize: "규모별"
      },
      caseStudy: {
        overview: "개요",
        challenge: "도전 과제",
        solution: "우리의 솔루션",
        implementation: "구현",
        results: "결과",
        keyMetrics: "주요 지표",
        testimonial: "고객 후기",
        downloadPdf: "PDF 다운로드"
      }
    },
    caseStudyDetail: {
      backToList: "사례 연구로 돌아가기",
      relatedCases: "관련 사례 연구",
      contactUs: "비슷한 결과를 원하시면 문의하세요"
    }
  },
  ru: {
    cases: {
      stats: {
        projects: "Проекты",
        savings: "Экономия",
        efficiency: "Эффективность"
      },
      filter: {
        all: "Все",
        byIndustry: "По отрасли",
        bySize: "По размеру"
      },
      caseStudy: {
        overview: "Обзор",
        challenge: "Задача",
        solution: "Наше решение",
        implementation: "Реализация",
        results: "Результаты",
        keyMetrics: "Ключевые показатели",
        testimonial: "Отзыв клиента",
        downloadPdf: "Скачать PDF"
      }
    },
    caseStudyDetail: {
      backToList: "Назад к кейсам",
      relatedCases: "Похожие кейсы",
      contactUs: "Свяжитесь с нами для аналогичных результатов"
    }
  },
  ar: {
    cases: {
      stats: {
        projects: "المشاريع",
        savings: "التوفير",
        efficiency: "الكفاءة"
      },
      filter: {
        all: "الكل",
        byIndustry: "حسب الصناعة",
        bySize: "حسب الحجم"
      },
      caseStudy: {
        overview: "نظرة عامة",
        challenge: "التحدي",
        solution: "حلنا",
        implementation: "التنفيذ",
        results: "النتائج",
        keyMetrics: "المقاييس الرئيسية",
        testimonial: "شهادة العميل",
        downloadPdf: "تحميل PDF"
      }
    },
    caseStudyDetail: {
      backToList: "العودة لدراسات الحالة",
      relatedCases: "دراسات حالة ذات صلة",
      contactUs: "تواصل معنا لنتائج مماثلة"
    }
  }
};

// MockUI translations
const mockUITranslations = {
  fr: {
    mockUI: {
      common: {
        search: "Rechercher...",
        filter: "Filtrer",
        sort: "Trier",
        add: "Ajouter",
        edit: "Modifier",
        delete: "Supprimer",
        save: "Sauvegarder",
        cancel: "Annuler",
        close: "Fermer",
        loading: "Chargement...",
        noData: "Aucune donnée",
        selectAll: "Tout sélectionner",
        actions: "Actions"
      },
      sidebar: {
        home: "Accueil",
        tasks: "Tâches",
        projects: "Projets",
        calendar: "Calendrier",
        reports: "Rapports",
        settings: "Paramètres",
        help: "Aide"
      },
      tasks: {
        newTask: "Nouvelle tâche",
        assignee: "Responsable",
        dueDate: "Date d'échéance",
        priority: "Priorité",
        status: "Statut",
        description: "Description",
        attachments: "Pièces jointes",
        comments: "Commentaires"
      },
      viewer: {
        isolate: "Isoler",
        hide: "Masquer",
        showAll: "Tout afficher",
        properties: "Propriétés",
        measure: "Mesurer",
        section: "Section",
        explode: "Éclater"
      }
    }
  },
  de: {
    mockUI: {
      common: {
        search: "Suchen...",
        filter: "Filtern",
        sort: "Sortieren",
        add: "Hinzufügen",
        edit: "Bearbeiten",
        delete: "Löschen",
        save: "Speichern",
        cancel: "Abbrechen",
        close: "Schließen",
        loading: "Laden...",
        noData: "Keine Daten",
        selectAll: "Alle auswählen",
        actions: "Aktionen"
      },
      sidebar: {
        home: "Start",
        tasks: "Aufgaben",
        projects: "Projekte",
        calendar: "Kalender",
        reports: "Berichte",
        settings: "Einstellungen",
        help: "Hilfe"
      },
      tasks: {
        newTask: "Neue Aufgabe",
        assignee: "Zuständig",
        dueDate: "Fälligkeitsdatum",
        priority: "Priorität",
        status: "Status",
        description: "Beschreibung",
        attachments: "Anhänge",
        comments: "Kommentare"
      },
      viewer: {
        isolate: "Isolieren",
        hide: "Ausblenden",
        showAll: "Alle anzeigen",
        properties: "Eigenschaften",
        measure: "Messen",
        section: "Schnitt",
        explode: "Explodieren"
      }
    }
  },
  es: {
    mockUI: {
      common: {
        search: "Buscar...",
        filter: "Filtrar",
        sort: "Ordenar",
        add: "Añadir",
        edit: "Editar",
        delete: "Eliminar",
        save: "Guardar",
        cancel: "Cancelar",
        close: "Cerrar",
        loading: "Cargando...",
        noData: "Sin datos",
        selectAll: "Seleccionar todo",
        actions: "Acciones"
      },
      sidebar: {
        home: "Inicio",
        tasks: "Tareas",
        projects: "Proyectos",
        calendar: "Calendario",
        reports: "Informes",
        settings: "Configuración",
        help: "Ayuda"
      },
      tasks: {
        newTask: "Nueva tarea",
        assignee: "Asignado",
        dueDate: "Fecha límite",
        priority: "Prioridad",
        status: "Estado",
        description: "Descripción",
        attachments: "Adjuntos",
        comments: "Comentarios"
      },
      viewer: {
        isolate: "Aislar",
        hide: "Ocultar",
        showAll: "Mostrar todo",
        properties: "Propiedades",
        measure: "Medir",
        section: "Sección",
        explode: "Explotar"
      }
    }
  },
  pt: {
    mockUI: {
      common: {
        search: "Pesquisar...",
        filter: "Filtrar",
        sort: "Ordenar",
        add: "Adicionar",
        edit: "Editar",
        delete: "Excluir",
        save: "Salvar",
        cancel: "Cancelar",
        close: "Fechar",
        loading: "Carregando...",
        noData: "Sem dados",
        selectAll: "Selecionar tudo",
        actions: "Ações"
      },
      sidebar: {
        home: "Início",
        tasks: "Tarefas",
        projects: "Projetos",
        calendar: "Calendário",
        reports: "Relatórios",
        settings: "Configurações",
        help: "Ajuda"
      },
      tasks: {
        newTask: "Nova tarefa",
        assignee: "Responsável",
        dueDate: "Data de vencimento",
        priority: "Prioridade",
        status: "Status",
        description: "Descrição",
        attachments: "Anexos",
        comments: "Comentários"
      },
      viewer: {
        isolate: "Isolar",
        hide: "Ocultar",
        showAll: "Mostrar tudo",
        properties: "Propriedades",
        measure: "Medir",
        section: "Seção",
        explode: "Explodir"
      }
    }
  },
  ko: {
    mockUI: {
      common: {
        search: "검색...",
        filter: "필터",
        sort: "정렬",
        add: "추가",
        edit: "편집",
        delete: "삭제",
        save: "저장",
        cancel: "취소",
        close: "닫기",
        loading: "로딩 중...",
        noData: "데이터 없음",
        selectAll: "전체 선택",
        actions: "작업"
      },
      sidebar: {
        home: "홈",
        tasks: "작업",
        projects: "프로젝트",
        calendar: "캘린더",
        reports: "보고서",
        settings: "설정",
        help: "도움말"
      },
      tasks: {
        newTask: "새 작업",
        assignee: "담당자",
        dueDate: "마감일",
        priority: "우선순위",
        status: "상태",
        description: "설명",
        attachments: "첨부파일",
        comments: "댓글"
      },
      viewer: {
        isolate: "분리",
        hide: "숨기기",
        showAll: "모두 표시",
        properties: "속성",
        measure: "측정",
        section: "단면",
        explode: "분해"
      }
    }
  },
  ru: {
    mockUI: {
      common: {
        search: "Поиск...",
        filter: "Фильтр",
        sort: "Сортировка",
        add: "Добавить",
        edit: "Редактировать",
        delete: "Удалить",
        save: "Сохранить",
        cancel: "Отмена",
        close: "Закрыть",
        loading: "Загрузка...",
        noData: "Нет данных",
        selectAll: "Выбрать все",
        actions: "Действия"
      },
      sidebar: {
        home: "Главная",
        tasks: "Задачи",
        projects: "Проекты",
        calendar: "Календарь",
        reports: "Отчеты",
        settings: "Настройки",
        help: "Помощь"
      },
      tasks: {
        newTask: "Новая задача",
        assignee: "Исполнитель",
        dueDate: "Срок",
        priority: "Приоритет",
        status: "Статус",
        description: "Описание",
        attachments: "Вложения",
        comments: "Комментарии"
      },
      viewer: {
        isolate: "Изолировать",
        hide: "Скрыть",
        showAll: "Показать все",
        properties: "Свойства",
        measure: "Измерить",
        section: "Разрез",
        explode: "Разнести"
      }
    }
  },
  ar: {
    mockUI: {
      common: {
        search: "بحث...",
        filter: "تصفية",
        sort: "ترتيب",
        add: "إضافة",
        edit: "تعديل",
        delete: "حذف",
        save: "حفظ",
        cancel: "إلغاء",
        close: "إغلاق",
        loading: "جارٍ التحميل...",
        noData: "لا توجد بيانات",
        selectAll: "تحديد الكل",
        actions: "إجراءات"
      },
      sidebar: {
        home: "الرئيسية",
        tasks: "المهام",
        projects: "المشاريع",
        calendar: "التقويم",
        reports: "التقارير",
        settings: "الإعدادات",
        help: "المساعدة"
      },
      tasks: {
        newTask: "مهمة جديدة",
        assignee: "المسؤول",
        dueDate: "تاريخ الاستحقاق",
        priority: "الأولوية",
        status: "الحالة",
        description: "الوصف",
        attachments: "المرفقات",
        comments: "التعليقات"
      },
      viewer: {
        isolate: "عزل",
        hide: "إخفاء",
        showAll: "إظهار الكل",
        properties: "الخصائص",
        measure: "قياس",
        section: "مقطع",
        explode: "تفجير"
      }
    }
  }
};

// Japanese contact/demo translations
const jaContactDemo = {
  ja: {
    contact: {
      hero: {
        title: "お問い合わせ",
        subtitle: "ご質問やご要望がございましたらお気軽にご連絡ください"
      },
      form: {
        name: "お名前",
        email: "メールアドレス",
        company: "会社名",
        phone: "電話番号",
        subject: "件名",
        message: "メッセージ",
        submit: "送信",
        sending: "送信中...",
        success: "送信完了しました",
        error: "送信に失敗しました"
      },
      info: {
        title: "連絡先情報",
        email: "メール",
        phone: "電話",
        address: "住所",
        hours: "営業時間"
      }
    },
    demo: {
      hero: {
        title: "デモを予約",
        subtitle: "InvoratecAIの機能をご覧ください"
      },
      form: {
        name: "お名前",
        email: "メールアドレス",
        company: "会社名",
        role: "役職",
        teamSize: "チームサイズ",
        preferredDate: "ご希望日時",
        interests: "ご興味のある機能",
        message: "追加コメント",
        submit: "デモを予約",
        success: "予約が完了しました"
      },
      benefits: {
        title: "デモでわかること",
        item1: "プラットフォームの完全なウォークスルー",
        item2: "ご質問への回答",
        item3: "カスタムソリューションの相談"
      }
    },
    newMedia: {
      title: "メディア",
      subtitle: "InvoratecAIの最新ニュースとメディア報道",
      pressKit: "プレスキット",
      downloadLogo: "ロゴをダウンロード",
      mediaContact: "メディアお問い合わせ"
    }
  }
};

// Apply all translations
const languages = ['fr', 'de', 'es', 'pt', 'ko', 'ru', 'ar'];

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  let merged = existing;
  if (aboutExtended[lang]) merged = deepMerge(merged, aboutExtended[lang]);
  if (blogExtended[lang]) merged = deepMerge(merged, blogExtended[lang]);
  if (casesExtended[lang]) merged = deepMerge(merged, casesExtended[lang]);
  if (mockUITranslations[lang]) merged = deepMerge(merged, mockUITranslations[lang]);

  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Added extended translations to ' + lang + '.json');
});

// Apply Japanese translations
const jaPath = path.join(__dirname, 'ja.json');
const jaExisting = JSON.parse(fs.readFileSync(jaPath, 'utf8'));
const jaMerged = deepMerge(jaExisting, jaContactDemo.ja);
fs.writeFileSync(jaPath, JSON.stringify(jaMerged, null, 2), 'utf8');
console.log('Added contact/demo translations to ja.json');

console.log('\nAll remaining translations complete!');
