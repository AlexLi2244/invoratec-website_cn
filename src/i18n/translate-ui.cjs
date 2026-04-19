const fs = require('fs');
const path = require('path');

// UI translations for each language
const translations = {
  es: {
    nav: {
      home: "Inicio",
      product: "Producto",
      pricing: "Precios",
      about: "Acerca de",
      newMedia: "Noticias",
      blog: "Blog",
      cases: "Casos",
      docs: "Documentación",
      download: "Descargar",
      demo: "Solicitar Demo",
      language: "ES"
    },
    hero: {
      badge: "Plataforma BIM con IA Nativa",
      title: "Gestión de BIM y Construcción con IA",
      title_line1: "Tu Socio de Diseño con IA",
      title_line2: "para BIM y Nube",
      subtitle: "Conectando personas, procesos y activos en la gestión de construcción y arquitectura, permitiendo operaciones eficientes, unificadas y controladas con tecnología de IA.",
      cta_primary: "Solicitar Demo",
      cta_secondary: "Saber Más",
      features: {
        smart_data: "Convierte planos y modelos en datos inteligentes y buscables",
        automate_tasks: "Automatiza tareas repetitivas de BIM y coordinación",
        ai_assistant: "Dale a cada diseñador y constructor un asistente de IA en sus herramientas diarias"
      },
      video: {
        title: "Demo de InvoratecAI",
        subtitle: "Mira BIM con IA en acción"
      },
      stats: {
        time: "Tiempo Ahorrado",
        projects: "Proyectos",
        errors: "Reducción de Errores"
      }
    },
    features: {
      title: "Características del Producto",
      subtitle: "Descubre cómo InvoratecAI transforma tu flujo de trabajo BIM"
    },
    cta: {
      badge: "Oferta por Tiempo Limitado",
      title: "¿Listo para Transformar tu Flujo de Trabajo BIM?",
      subtitle: "Únete a las empresas líderes que usan InvoratecAI para revolucionar sus procesos de diseño y construcción",
      primary: "Solicitar Demo",
      secondary: "Ver Precios",
      trust: "Confiado por líderes de la industria"
    },
    footer: {
      tagline: "Gestión de BIM y Construcción con IA",
      product: { title: "Producto", download: "Descargar", pricing: "Precios" },
      resources: { title: "Recursos", docs: "Documentación", newMedia: "Noticias", demo: "Solicitar Demo", legal: "Seguridad y Políticas" },
      company_links: { title: "Empresa", about: "Acerca de", contact: "Contacto" },
      legal: { privacy: "Privacidad", terms: "Términos", cookies: "Cookies" },
      copyright: "Todos los derechos reservados."
    },
    pricing: {
      hero: { title: "Precios Simples y Transparentes", subtitle: "Elige el plan que se ajuste a las necesidades de tu equipo" },
      monthly: "Mensual",
      annual: "Anual",
      save: "Ahorra 20%",
      popular: "Más Popular",
      perMonth: "mes",
      getStarted: "Comenzar"
    },
    about: {
      hero: { title: "Construyendo el Futuro de la Construcción", subtitle: "Estamos en una misión para transformar la industria AEC a través de la automatización inteligente y la colaboración fluida" },
      mission: { title: "Nuestra Misión", tagline: "Haciendo BIM Más Inteligente" },
      values: { title: "Nuestros Valores", subtitle: "Los principios que guían todo lo que hacemos" },
      team: { title: "Únete a Nuestro Equipo", cta: "Ver Posiciones Abiertas" },
      contact: { title: "Contáctanos", subtitle: "¿Tienes preguntas sobre InvoratecAI? Nos encantaría saber de ti." }
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Obtén respuestas a preguntas comunes sobre InvoratecAI",
      contact: { title: "¿Aún tienes preguntas?", description: "Nuestro equipo está aquí para ayudarte a encontrar la solución perfecta.", cta: "Contáctanos" }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      product: "Produit",
      pricing: "Tarifs",
      about: "À propos",
      newMedia: "Actualités",
      blog: "Blog",
      cases: "Cas",
      docs: "Documentation",
      download: "Télécharger",
      demo: "Demander une Démo",
      language: "FR"
    },
    hero: {
      badge: "Plateforme BIM Native IA",
      title: "Gestion BIM et Construction Propulsée par l'IA",
      title_line1: "Votre Partenaire de Conception IA",
      title_line2: "pour BIM et Cloud",
      subtitle: "Connecter les personnes, les processus et les actifs dans la gestion de la construction et de l'architecture, permettant des opérations efficaces, unifiées et contrôlées avec la technologie IA.",
      cta_primary: "Demander une Démo",
      cta_secondary: "En Savoir Plus",
      features: {
        smart_data: "Transformez les dessins et modèles en données intelligentes et consultables",
        automate_tasks: "Automatisez les tâches BIM et de coordination répétitives",
        ai_assistant: "Donnez à chaque concepteur et constructeur un assistant IA dans leurs outils quotidiens"
      },
      video: {
        title: "Démo InvoratecAI",
        subtitle: "Découvrez le BIM propulsé par l'IA en action"
      },
      stats: {
        time: "Temps Économisé",
        projects: "Projets",
        errors: "Réduction des Erreurs"
      }
    },
    features: {
      title: "Fonctionnalités du Produit",
      subtitle: "Découvrez comment InvoratecAI transforme votre flux de travail BIM"
    },
    cta: {
      badge: "Offre Limitée",
      title: "Prêt à Transformer Votre Flux de Travail BIM?",
      subtitle: "Rejoignez les entreprises leaders qui utilisent InvoratecAI pour révolutionner leurs processus de conception et construction",
      primary: "Demander une Démo",
      secondary: "Voir les Tarifs",
      trust: "Fait confiance par les leaders de l'industrie"
    },
    footer: {
      tagline: "Gestion BIM et Construction Propulsée par l'IA",
      product: { title: "Produit", download: "Télécharger", pricing: "Tarifs" },
      resources: { title: "Ressources", docs: "Documentation", newMedia: "Actualités", demo: "Demander une Démo", legal: "Sécurité et Politiques" },
      company_links: { title: "Entreprise", about: "À propos", contact: "Contact" },
      legal: { privacy: "Confidentialité", terms: "Conditions", cookies: "Cookies" },
      copyright: "Tous droits réservés."
    },
    pricing: {
      hero: { title: "Tarification Simple et Transparente", subtitle: "Choisissez le plan adapté aux besoins de votre équipe" },
      monthly: "Mensuel",
      annual: "Annuel",
      save: "Économisez 20%",
      popular: "Le Plus Populaire",
      perMonth: "mois",
      getStarted: "Commencer"
    },
    about: {
      hero: { title: "Construire l'Avenir de la Construction", subtitle: "Notre mission est de transformer l'industrie AEC grâce à l'automatisation intelligente et la collaboration fluide" },
      mission: { title: "Notre Mission", tagline: "Rendre le BIM Plus Intelligent" },
      values: { title: "Nos Valeurs", subtitle: "Les principes qui guident tout ce que nous faisons" },
      team: { title: "Rejoignez Notre Équipe", cta: "Voir les Postes Ouverts" },
      contact: { title: "Contactez-nous", subtitle: "Des questions sur InvoratecAI? Nous serions ravis d'avoir de vos nouvelles." }
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Obtenez des réponses aux questions courantes sur InvoratecAI",
      contact: { title: "Vous avez encore des questions?", description: "Notre équipe est là pour vous aider à trouver la solution parfaite.", cta: "Contactez-nous" }
    }
  },
  de: {
    nav: {
      home: "Startseite",
      product: "Produkt",
      pricing: "Preise",
      about: "Über uns",
      newMedia: "Neuigkeiten",
      blog: "Blog",
      cases: "Fallstudien",
      docs: "Dokumentation",
      download: "Herunterladen",
      demo: "Demo Anfordern",
      language: "DE"
    },
    hero: {
      badge: "KI-Native BIM-Plattform",
      title: "KI-gestützte BIM- und Bauverwaltung",
      title_line1: "Ihr KI-Design-Partner",
      title_line2: "für BIM und Cloud",
      subtitle: "Verbindung von Menschen, Prozessen und Vermögenswerten im Bau- und Architekturmanagement, ermöglicht effiziente, einheitliche und kontrollierte Abläufe mit KI-Technologie.",
      cta_primary: "Demo Anfordern",
      cta_secondary: "Mehr Erfahren",
      features: {
        smart_data: "Verwandeln Sie Zeichnungen und Modelle in intelligente, durchsuchbare Daten",
        automate_tasks: "Automatisieren Sie wiederkehrende BIM- und Koordinationsaufgaben",
        ai_assistant: "Geben Sie jedem Designer und Bauarbeiter einen KI-Assistenten in ihren täglichen Werkzeugen"
      },
      video: {
        title: "InvoratecAI Demo",
        subtitle: "Erleben Sie KI-gestütztes BIM in Aktion"
      },
      stats: {
        time: "Zeitersparnis",
        projects: "Projekte",
        errors: "Fehlerreduzierung"
      }
    },
    features: {
      title: "Produktfunktionen",
      subtitle: "Entdecken Sie, wie InvoratecAI Ihren BIM-Workflow transformiert"
    },
    cta: {
      badge: "Zeitlich Begrenztes Angebot",
      title: "Bereit, Ihren BIM-Workflow zu Transformieren?",
      subtitle: "Schließen Sie sich führenden Unternehmen an, die InvoratecAI nutzen, um ihre Design- und Bauprozesse zu revolutionieren",
      primary: "Demo Anfordern",
      secondary: "Preise Ansehen",
      trust: "Vertraut von Branchenführern"
    },
    footer: {
      tagline: "KI-gestützte BIM- und Bauverwaltung",
      product: { title: "Produkt", download: "Herunterladen", pricing: "Preise" },
      resources: { title: "Ressourcen", docs: "Dokumentation", newMedia: "Neuigkeiten", demo: "Demo Anfordern", legal: "Sicherheit & Richtlinien" },
      company_links: { title: "Unternehmen", about: "Über uns", contact: "Kontakt" },
      legal: { privacy: "Datenschutz", terms: "AGB", cookies: "Cookies" },
      copyright: "Alle Rechte vorbehalten."
    },
    pricing: {
      hero: { title: "Einfache, Transparente Preise", subtitle: "Wählen Sie den Plan, der zu den Bedürfnissen Ihres Teams passt" },
      monthly: "Monatlich",
      annual: "Jährlich",
      save: "Sparen Sie 20%",
      popular: "Am Beliebtesten",
      perMonth: "Monat",
      getStarted: "Loslegen"
    },
    about: {
      hero: { title: "Die Zukunft des Bauens Gestalten", subtitle: "Unsere Mission ist es, die AEC-Branche durch intelligente Automatisierung und nahtlose Zusammenarbeit zu transformieren" },
      mission: { title: "Unsere Mission", tagline: "BIM Intelligenter Machen" },
      values: { title: "Unsere Werte", subtitle: "Die Prinzipien, die alles leiten, was wir tun" },
      team: { title: "Werden Sie Teil Unseres Teams", cta: "Offene Stellen Ansehen" },
      contact: { title: "Kontaktieren Sie Uns", subtitle: "Haben Sie Fragen zu InvoratecAI? Wir freuen uns von Ihnen zu hören." }
    },
    faq: {
      title: "Häufig Gestellte Fragen",
      subtitle: "Erhalten Sie Antworten auf häufige Fragen zu InvoratecAI",
      contact: { title: "Noch Fragen?", description: "Unser Team ist hier, um Ihnen bei der Suche nach der perfekten Lösung zu helfen.", cta: "Kontaktieren Sie Uns" }
    }
  },
  ja: {
    nav: {
      home: "ホーム",
      product: "製品",
      pricing: "料金",
      about: "会社概要",
      newMedia: "ニュース",
      blog: "ブログ",
      cases: "事例",
      docs: "ドキュメント",
      download: "ダウンロード",
      demo: "デモを依頼",
      language: "JP"
    },
    hero: {
      badge: "AI ネイティブ BIM プラットフォーム",
      title: "AI搭載のBIM・建設管理",
      title_line1: "あなたのAIデザインパートナー",
      title_line2: "BIMとクラウドのための",
      subtitle: "AI技術により、建設・建築管理における人、プロセス、資産を接続し、効率的で統一された制御可能な運用を実現します。",
      cta_primary: "デモを依頼",
      cta_secondary: "詳しく見る",
      features: {
        smart_data: "図面とモデルをスマートで検索可能なデータに変換",
        automate_tasks: "繰り返しのBIMおよび調整タスクを自動化",
        ai_assistant: "すべてのデザイナーとビルダーに日常ツールでAIアシスタントを提供"
      },
      video: {
        title: "InvoratecAI デモ",
        subtitle: "AI搭載BIMを実際に見る"
      },
      stats: {
        time: "時間削減",
        projects: "プロジェクト",
        errors: "エラー削減"
      }
    },
    features: {
      title: "製品機能",
      subtitle: "InvoratecAIがBIMワークフローをどのように変革するかをご覧ください"
    },
    cta: {
      badge: "期間限定オファー",
      title: "BIMワークフローを変革する準備はできていますか？",
      subtitle: "InvoratecAIを使用して設計・建設プロセスを革新している一流企業に参加しましょう",
      primary: "デモを依頼",
      secondary: "料金を見る",
      trust: "業界リーダーに信頼されています"
    },
    footer: {
      tagline: "AI搭載のBIM・建設管理",
      product: { title: "製品", download: "ダウンロード", pricing: "料金" },
      resources: { title: "リソース", docs: "ドキュメント", newMedia: "ニュース", demo: "デモを依頼", legal: "セキュリティとポリシー" },
      company_links: { title: "会社", about: "会社概要", contact: "お問い合わせ" },
      legal: { privacy: "プライバシー", terms: "利用規約", cookies: "クッキー" },
      copyright: "全著作権所有。"
    },
    pricing: {
      hero: { title: "シンプルで透明な料金", subtitle: "チームのニーズに合ったプランをお選びください" },
      monthly: "月額",
      annual: "年額",
      save: "20%お得",
      popular: "最も人気",
      perMonth: "月",
      getStarted: "始める"
    },
    about: {
      hero: { title: "建設の未来を築く", subtitle: "インテリジェントな自動化とシームレスなコラボレーションを通じてAEC業界を変革することが私たちの使命です" },
      mission: { title: "私たちの使命", tagline: "BIMをよりスマートに" },
      values: { title: "私たちの価値観", subtitle: "私たちのすべての行動を導く原則" },
      team: { title: "チームに参加", cta: "募集中のポジションを見る" },
      contact: { title: "お問い合わせ", subtitle: "InvoratecAIについてご質問がありますか？ぜひご連絡ください。" }
    },
    faq: {
      title: "よくある質問",
      subtitle: "InvoratecAIに関するよくある質問への回答をご覧ください",
      contact: { title: "まだ質問がありますか？", description: "私たちのチームが最適なソリューションを見つけるお手伝いをします。", cta: "お問い合わせ" }
    }
  },
  ko: {
    nav: {
      home: "홈",
      product: "제품",
      pricing: "가격",
      about: "회사 소개",
      newMedia: "뉴스",
      blog: "블로그",
      cases: "사례",
      docs: "문서",
      download: "다운로드",
      demo: "데모 요청",
      language: "KO"
    },
    hero: {
      badge: "AI 네이티브 BIM 플랫폼",
      title: "AI 기반 BIM 및 건설 관리",
      title_line1: "당신의 AI 디자인 파트너",
      title_line2: "BIM과 클라우드를 위한",
      subtitle: "AI 기술로 건설 및 건축 관리에서 사람, 프로세스, 자산을 연결하여 효율적이고 통합된 제어 가능한 운영을 가능하게 합니다.",
      cta_primary: "데모 요청",
      cta_secondary: "자세히 알아보기",
      features: {
        smart_data: "도면과 모델을 스마트하고 검색 가능한 데이터로 변환",
        automate_tasks: "반복적인 BIM 및 조정 작업 자동화",
        ai_assistant: "모든 디자이너와 빌더에게 일상 도구에서 AI 어시스턴트 제공"
      },
      video: {
        title: "InvoratecAI 데모",
        subtitle: "AI 기반 BIM을 실제로 확인하세요"
      },
      stats: {
        time: "시간 절약",
        projects: "프로젝트",
        errors: "오류 감소"
      }
    },
    features: {
      title: "제품 기능",
      subtitle: "InvoratecAI가 BIM 워크플로우를 어떻게 변화시키는지 알아보세요"
    },
    cta: {
      badge: "한정 기간 제안",
      title: "BIM 워크플로우를 변화시킬 준비가 되셨나요?",
      subtitle: "InvoratecAI를 사용하여 설계 및 건설 프로세스를 혁신하는 선도 기업에 합류하세요",
      primary: "데모 요청",
      secondary: "가격 보기",
      trust: "업계 리더들의 신뢰"
    },
    footer: {
      tagline: "AI 기반 BIM 및 건설 관리",
      product: { title: "제품", download: "다운로드", pricing: "가격" },
      resources: { title: "리소스", docs: "문서", newMedia: "뉴스", demo: "데모 요청", legal: "보안 및 정책" },
      company_links: { title: "회사", about: "회사 소개", contact: "문의" },
      legal: { privacy: "개인정보", terms: "이용약관", cookies: "쿠키" },
      copyright: "모든 권리 보유."
    },
    pricing: {
      hero: { title: "간단하고 투명한 가격", subtitle: "팀의 요구에 맞는 플랜을 선택하세요" },
      monthly: "월간",
      annual: "연간",
      save: "20% 절약",
      popular: "가장 인기",
      perMonth: "월",
      getStarted: "시작하기"
    },
    about: {
      hero: { title: "건설의 미래를 만들다", subtitle: "지능형 자동화와 원활한 협업을 통해 AEC 산업을 변화시키는 것이 우리의 사명입니다" },
      mission: { title: "우리의 사명", tagline: "BIM을 더 스마트하게" },
      values: { title: "우리의 가치", subtitle: "우리가 하는 모든 일을 이끄는 원칙" },
      team: { title: "팀에 합류하세요", cta: "채용 공고 보기" },
      contact: { title: "문의하기", subtitle: "InvoratecAI에 대한 질문이 있으신가요? 연락해 주세요." }
    },
    faq: {
      title: "자주 묻는 질문",
      subtitle: "InvoratecAI에 대한 일반적인 질문에 대한 답변을 받아보세요",
      contact: { title: "아직 질문이 있으신가요?", description: "저희 팀이 완벽한 솔루션을 찾는 데 도움을 드립니다.", cta: "문의하기" }
    }
  },
  pt: {
    nav: {
      home: "Início",
      product: "Produto",
      pricing: "Preços",
      about: "Sobre",
      newMedia: "Notícias",
      blog: "Blog",
      cases: "Casos",
      docs: "Documentação",
      download: "Download",
      demo: "Solicitar Demo",
      language: "PT"
    },
    hero: {
      badge: "Plataforma BIM com IA Nativa",
      title: "Gestão de BIM e Construção com IA",
      title_line1: "Seu Parceiro de Design com IA",
      title_line2: "para BIM e Nuvem",
      subtitle: "Conectando pessoas, processos e ativos na gestão de construção e arquitetura, permitindo operações eficientes, unificadas e controladas com tecnologia de IA.",
      cta_primary: "Solicitar Demo",
      cta_secondary: "Saiba Mais",
      features: {
        smart_data: "Transforme desenhos e modelos em dados inteligentes e pesquisáveis",
        automate_tasks: "Automatize tarefas repetitivas de BIM e coordenação",
        ai_assistant: "Dê a cada designer e construtor um assistente de IA em suas ferramentas diárias"
      },
      video: {
        title: "Demo InvoratecAI",
        subtitle: "Veja BIM com IA em ação"
      },
      stats: {
        time: "Tempo Economizado",
        projects: "Projetos",
        errors: "Redução de Erros"
      }
    },
    features: {
      title: "Recursos do Produto",
      subtitle: "Descubra como a InvoratecAI transforma seu fluxo de trabalho BIM"
    },
    cta: {
      badge: "Oferta por Tempo Limitado",
      title: "Pronto para Transformar seu Fluxo de Trabalho BIM?",
      subtitle: "Junte-se às empresas líderes que usam InvoratecAI para revolucionar seus processos de design e construção",
      primary: "Solicitar Demo",
      secondary: "Ver Preços",
      trust: "Confiado por líderes da indústria"
    },
    footer: {
      tagline: "Gestão de BIM e Construção com IA",
      product: { title: "Produto", download: "Download", pricing: "Preços" },
      resources: { title: "Recursos", docs: "Documentação", newMedia: "Notícias", demo: "Solicitar Demo", legal: "Segurança e Políticas" },
      company_links: { title: "Empresa", about: "Sobre", contact: "Contato" },
      legal: { privacy: "Privacidade", terms: "Termos", cookies: "Cookies" },
      copyright: "Todos os direitos reservados."
    },
    pricing: {
      hero: { title: "Preços Simples e Transparentes", subtitle: "Escolha o plano que se adapta às necessidades da sua equipe" },
      monthly: "Mensal",
      annual: "Anual",
      save: "Economize 20%",
      popular: "Mais Popular",
      perMonth: "mês",
      getStarted: "Começar"
    },
    about: {
      hero: { title: "Construindo o Futuro da Construção", subtitle: "Nossa missão é transformar a indústria AEC através da automação inteligente e colaboração perfeita" },
      mission: { title: "Nossa Missão", tagline: "Tornando o BIM Mais Inteligente" },
      values: { title: "Nossos Valores", subtitle: "Os princípios que guiam tudo o que fazemos" },
      team: { title: "Junte-se à Nossa Equipe", cta: "Ver Vagas Abertas" },
      contact: { title: "Entre em Contato", subtitle: "Tem perguntas sobre a InvoratecAI? Adoraríamos ouvir de você." }
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Obtenha respostas para perguntas comuns sobre a InvoratecAI",
      contact: { title: "Ainda tem perguntas?", description: "Nossa equipe está aqui para ajudá-lo a encontrar a solução perfeita.", cta: "Entre em Contato" }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      product: "المنتج",
      pricing: "الأسعار",
      about: "حول",
      newMedia: "الأخبار",
      blog: "المدونة",
      cases: "الحالات",
      docs: "التوثيق",
      download: "تحميل",
      demo: "طلب عرض تجريبي",
      language: "AR"
    },
    hero: {
      badge: "منصة BIM بالذكاء الاصطناعي",
      title: "إدارة BIM والبناء بالذكاء الاصطناعي",
      title_line1: "شريكك في التصميم بالذكاء الاصطناعي",
      title_line2: "لـ BIM والسحابة",
      subtitle: "ربط الأشخاص والعمليات والأصول في إدارة البناء والهندسة المعمارية، مما يتيح عمليات فعالة وموحدة ومتحكم بها بتقنية الذكاء الاصطناعي.",
      cta_primary: "طلب عرض تجريبي",
      cta_secondary: "معرفة المزيد",
      features: {
        smart_data: "حول الرسومات والنماذج إلى بيانات ذكية قابلة للبحث",
        automate_tasks: "أتمتة مهام BIM والتنسيق المتكررة",
        ai_assistant: "امنح كل مصمم وباني مساعد ذكاء اصطناعي في أدواتهم اليومية"
      },
      video: {
        title: "عرض InvoratecAI",
        subtitle: "شاهد BIM بالذكاء الاصطناعي في العمل"
      },
      stats: {
        time: "الوقت الموفر",
        projects: "المشاريع",
        errors: "تقليل الأخطاء"
      }
    },
    features: {
      title: "ميزات المنتج",
      subtitle: "اكتشف كيف تحول InvoratecAI سير عمل BIM الخاص بك"
    },
    cta: {
      badge: "عرض لفترة محدودة",
      title: "هل أنت مستعد لتحويل سير عمل BIM الخاص بك؟",
      subtitle: "انضم إلى الشركات الرائدة التي تستخدم InvoratecAI لإحداث ثورة في عمليات التصميم والبناء",
      primary: "طلب عرض تجريبي",
      secondary: "عرض الأسعار",
      trust: "موثوق من قادة الصناعة"
    },
    footer: {
      tagline: "إدارة BIM والبناء بالذكاء الاصطناعي",
      product: { title: "المنتج", download: "تحميل", pricing: "الأسعار" },
      resources: { title: "الموارد", docs: "التوثيق", newMedia: "الأخبار", demo: "طلب عرض تجريبي", legal: "الأمان والسياسات" },
      company_links: { title: "الشركة", about: "حول", contact: "اتصل بنا" },
      legal: { privacy: "الخصوصية", terms: "الشروط", cookies: "ملفات تعريف الارتباط" },
      copyright: "جميع الحقوق محفوظة."
    },
    pricing: {
      hero: { title: "أسعار بسيطة وشفافة", subtitle: "اختر الخطة التي تناسب احتياجات فريقك" },
      monthly: "شهري",
      annual: "سنوي",
      save: "وفر 20%",
      popular: "الأكثر شعبية",
      perMonth: "شهر",
      getStarted: "ابدأ الآن"
    },
    about: {
      hero: { title: "بناء مستقبل البناء", subtitle: "مهمتنا هي تحويل صناعة AEC من خلال الأتمتة الذكية والتعاون السلس" },
      mission: { title: "مهمتنا", tagline: "جعل BIM أكثر ذكاءً" },
      values: { title: "قيمنا", subtitle: "المبادئ التي توجه كل ما نفعله" },
      team: { title: "انضم إلى فريقنا", cta: "عرض الوظائف المتاحة" },
      contact: { title: "اتصل بنا", subtitle: "هل لديك أسئلة حول InvoratecAI؟ يسعدنا أن نسمع منك." }
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "احصل على إجابات للأسئلة الشائعة حول InvoratecAI",
      contact: { title: "لا تزال لديك أسئلة؟", description: "فريقنا هنا لمساعدتك في العثور على الحل الأمثل.", cta: "اتصل بنا" }
    }
  },
  ru: {
    nav: {
      home: "Главная",
      product: "Продукт",
      pricing: "Цены",
      about: "О нас",
      newMedia: "Новости",
      blog: "Блог",
      cases: "Кейсы",
      docs: "Документация",
      download: "Скачать",
      demo: "Запросить демо",
      language: "RU"
    },
    hero: {
      badge: "AI-нативная BIM платформа",
      title: "BIM и управление строительством на базе ИИ",
      title_line1: "Ваш AI-партнер в проектировании",
      title_line2: "для BIM и облака",
      subtitle: "Связывание людей, процессов и активов в управлении строительством и архитектурой, обеспечивая эффективные, унифицированные и контролируемые операции с технологией ИИ.",
      cta_primary: "Запросить демо",
      cta_secondary: "Узнать больше",
      features: {
        smart_data: "Превращайте чертежи и модели в умные, доступные для поиска данные",
        automate_tasks: "Автоматизируйте повторяющиеся задачи BIM и координации",
        ai_assistant: "Дайте каждому дизайнеру и строителю AI-помощника в их повседневных инструментах"
      },
      video: {
        title: "Демо InvoratecAI",
        subtitle: "Смотрите BIM с ИИ в действии"
      },
      stats: {
        time: "Экономия времени",
        projects: "Проекты",
        errors: "Снижение ошибок"
      }
    },
    features: {
      title: "Функции продукта",
      subtitle: "Узнайте, как InvoratecAI трансформирует ваш рабочий процесс BIM"
    },
    cta: {
      badge: "Ограниченное предложение",
      title: "Готовы трансформировать свой рабочий процесс BIM?",
      subtitle: "Присоединяйтесь к ведущим компаниям, использующим InvoratecAI для революции в процессах проектирования и строительства",
      primary: "Запросить демо",
      secondary: "Посмотреть цены",
      trust: "Доверие лидеров отрасли"
    },
    footer: {
      tagline: "BIM и управление строительством на базе ИИ",
      product: { title: "Продукт", download: "Скачать", pricing: "Цены" },
      resources: { title: "Ресурсы", docs: "Документация", newMedia: "Новости", demo: "Запросить демо", legal: "Безопасность и политики" },
      company_links: { title: "Компания", about: "О нас", contact: "Контакты" },
      legal: { privacy: "Конфиденциальность", terms: "Условия", cookies: "Cookies" },
      copyright: "Все права защищены."
    },
    pricing: {
      hero: { title: "Простые и прозрачные цены", subtitle: "Выберите план, который соответствует потребностям вашей команды" },
      monthly: "Ежемесячно",
      annual: "Ежегодно",
      save: "Экономия 20%",
      popular: "Самый популярный",
      perMonth: "месяц",
      getStarted: "Начать"
    },
    about: {
      hero: { title: "Строим будущее строительства", subtitle: "Наша миссия — трансформировать отрасль AEC через интеллектуальную автоматизацию и бесшовное сотрудничество" },
      mission: { title: "Наша миссия", tagline: "Делаем BIM умнее" },
      values: { title: "Наши ценности", subtitle: "Принципы, которые направляют все, что мы делаем" },
      team: { title: "Присоединяйтесь к нашей команде", cta: "Посмотреть вакансии" },
      contact: { title: "Свяжитесь с нами", subtitle: "Есть вопросы об InvoratecAI? Будем рады услышать вас." }
    },
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Получите ответы на распространенные вопросы об InvoratecAI",
      contact: { title: "Остались вопросы?", description: "Наша команда поможет вам найти идеальное решение.", cta: "Связаться с нами" }
    }
  }
};

// Deep merge function
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Process each language
Object.keys(translations).forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const merged = deepMerge(content, translations[lang]);
    fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
  }
});

console.log('All translations updated!');
