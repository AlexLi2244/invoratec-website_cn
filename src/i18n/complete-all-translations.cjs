const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

const skipTerms = new Set([
  'Windows 10/11', 'Windows', 'Revit', 'Excel', 'Internet', 'BIM/AEC', 'Overview',
  'Autodesk', 'Google', 'Firebase', 'API', 'SDK', 'Person', 'Status', 'Relation',
  'IFC', 'NWD', 'PDF', 'DWG', 'ACC', 'APS', 'MEP', 'HVAC', 'OAuth', 'URL', 'RGB',
  'Kanban', 'Gantt', 'Dashboard', 'JSON', 'CSV', 'XML', 'BIM AI', 'Web AI',
  'InvoratecAI', 'Invoratec', 'Claude', 'Anthropic', 'cloud.invoratec.com',
  'Invoratec Inc.', 'Gmail', 'Google Workspace', 'Google Cloud Platform',
  'Autodesk Revit - InvoratecAI', 'Autodesk Construction Cloud', 'BIM AI (Revit)',
  'Web AI (Cloud)', 'Revit Plugin', 'Cloud Platform', 'Firebase / Firestore',
  'Starter', 'Professional', 'Enterprise', 'Standard', 'Documentation',
  'Configuration', 'Installation', 'Coordination', 'Tutorial', 'Format',
  'Innovation', 'Cloud', 'Collaboration', 'Conclusion', 'Client', 'Solution',
  'Commercial', 'Infrastructure', 'Support', 'Terms of Service', 'Cookies',
  'Agenda', 'Highlights', 'Online', 'Event', 'Blog', 'Download', 'Demo',
  'Description', 'Endpoint', 'Contact'
]);

function shouldSkip(value) {
  if (!value || typeof value !== 'string') return true;
  if (value.length <= 4) return true;
  if (skipTerms.has(value)) return true;
  if (value.includes('@') || value.includes('http') || value.includes('.com') || value.includes('.cn')) return true;
  if (/^\d+\.\d+/.test(value) || /^v\d+/.test(value)) return true;
  return false;
}

function getValue(obj, keyPath) {
  const parts = keyPath.split('.');
  let val = obj;
  for (const p of parts) {
    if (val === undefined || val === null) return undefined;
    val = val[p];
  }
  return val;
}

function setValue(obj, keyPath, value) {
  const parts = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

function getAllKeys(obj, prefix) {
  let keys = [];
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? prefix + '.' + key : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

// Comprehensive translations for all remaining strings
const translations = {
  // Services section
  'Expert guidance for BIM implementation and global modeling resources to scale your capacity': {
    zh: '专业的BIM实施指导和全球建模资源，帮助您扩展产能',
    ja: 'BIM導入の専門ガイダンスとキャパシティ拡大のためのグローバルモデリングリソース',
    ko: 'BIM 구현을 위한 전문 지침 및 용량 확장을 위한 글로벌 모델링 리소스',
    de: 'Fachkundige Beratung für BIM-Implementierung und globale Modellierungsressourcen zur Kapazitätssteigerung',
    fr: 'Conseils experts pour l\'implémentation BIM et ressources de modélisation mondiales pour augmenter votre capacité',
    es: 'Orientación experta para la implementación de BIM y recursos de modelado global para escalar su capacidad',
    pt: 'Orientação especializada para implementação BIM e recursos de modelagem global para escalar sua capacidade',
    ru: 'Экспертное руководство по внедрению BIM и глобальные ресурсы моделирования для увеличения мощностей',
    ar: 'توجيه خبير لتنفيذ BIM وموارد النمذجة العالمية لتوسيع قدرتك'
  },
  'Customize AI features for your company with local server deployment for data security': {
    zh: '为您的公司定制AI功能，通过本地服务器部署确保数据安全',
    ja: 'データセキュリティのためのローカルサーバー展開で、貴社向けにAI機能をカスタマイズ',
    ko: '데이터 보안을 위한 로컬 서버 배포로 회사에 맞는 AI 기능 맞춤화',
    de: 'Passen Sie KI-Funktionen für Ihr Unternehmen mit lokaler Serverbereitstellung für Datensicherheit an',
    fr: 'Personnalisez les fonctionnalités IA pour votre entreprise avec déploiement sur serveur local pour la sécurité des données',
    es: 'Personalice las funciones de IA para su empresa con implementación de servidor local para seguridad de datos',
    pt: 'Personalize recursos de IA para sua empresa com implantação de servidor local para segurança de dados',
    ru: 'Настройте функции ИИ для вашей компании с локальным развертыванием сервера для безопасности данных',
    ar: 'تخصيص ميزات الذكاء الاصطناعي لشركتك مع نشر الخادم المحلي لأمان البيانات'
  },
  '24/7 technical support and dedicated account management for enterprise clients': {
    zh: '为企业客户提供全天候技术支持和专属客户管理',
    ja: '企業クライアント向けの24時間365日技術サポートと専任アカウント管理',
    ko: '기업 고객을 위한 연중무휴 기술 지원 및 전담 계정 관리',
    de: '24/7 technischer Support und dedizierte Kontoverwaltung für Unternehmenskunden',
    fr: 'Support technique 24h/24 et 7j/7 et gestion de compte dédiée pour les clients entreprise',
    es: 'Soporte técnico 24/7 y gestión de cuentas dedicada para clientes empresariales',
    pt: 'Suporte técnico 24/7 e gerenciamento de conta dedicado para clientes empresariais',
    ru: 'Круглосуточная техническая поддержка и выделенное управление аккаунтом для корпоративных клиентов',
    ar: 'دعم فني على مدار الساعة وإدارة حسابات مخصصة للعملاء المؤسسيين'
  },

  // newMedia section
  'Stay updated with the latest news, case studies, and insights from the InvoratecAI team': {
    zh: '获取InvoratecAI团队的最新新闻、案例研究和见解',
    ja: 'InvoratecAIチームからの最新ニュース、ケーススタディ、インサイトを入手',
    ko: 'InvoratecAI 팀의 최신 뉴스, 사례 연구 및 인사이트 업데이트',
    de: 'Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, Fallstudien und Einblicken vom InvoratecAI-Team',
    fr: 'Restez informé des dernières nouvelles, études de cas et analyses de l\'équipe InvoratecAI',
    es: 'Manténgase actualizado con las últimas noticias, estudios de caso e información del equipo de InvoratecAI',
    pt: 'Fique atualizado com as últimas notícias, estudos de caso e insights da equipe InvoratecAI',
    ru: 'Будьте в курсе последних новостей, кейсов и аналитики от команды InvoratecAI',
    ar: 'ابق على اطلاع بآخر الأخبار ودراسات الحالة والرؤى من فريق InvoratecAI'
  },
  'Knowledge': {
    zh: '知识', ja: 'ナレッジ', ko: '지식',
    de: 'Wissen', fr: 'Connaissances', es: 'Conocimiento',
    pt: 'Conhecimento', ru: 'Знания', ar: 'معرفة'
  },
  'Activity': {
    zh: '活动', ja: 'アクティビティ', ko: '활동',
    de: 'Aktivität', fr: 'Activité', es: 'Actividad',
    pt: 'Atividade', ru: 'Активность', ar: 'نشاط'
  },
  'Webinar: AI in Construction 2025': {
    zh: '网络研讨会：2025年建筑行业中的AI',
    ja: 'ウェビナー：建設におけるAI 2025',
    ko: '웨비나: 건설 분야의 AI 2025',
    de: 'Webinar: KI im Bauwesen 2025',
    fr: 'Webinaire : L\'IA dans la construction 2025',
    es: 'Webinar: IA en la construcción 2025',
    pt: 'Webinar: IA na Construção 2025',
    ru: 'Вебинар: ИИ в строительстве 2025',
    ar: 'ندوة عبر الإنترنت: الذكاء الاصطناعي في البناء 2025'
  },
  'Join our experts for a live discussion on the latest AI trends transforming the construction industry.': {
    zh: '加入我们的专家，参与关于改变建筑行业的最新AI趋势的现场讨论。',
    ja: '建設業界を変革する最新のAIトレンドについて、専門家とのライブディスカッションにご参加ください。',
    ko: '건설 산업을 변화시키는 최신 AI 트렌드에 대한 전문가와의 실시간 토론에 참여하세요.',
    de: 'Nehmen Sie an einer Live-Diskussion mit unseren Experten über die neuesten KI-Trends teil, die die Baubranche transformieren.',
    fr: 'Rejoignez nos experts pour une discussion en direct sur les dernières tendances IA qui transforment l\'industrie de la construction.',
    es: 'Únase a nuestros expertos para una discusión en vivo sobre las últimas tendencias de IA que transforman la industria de la construcción.',
    pt: 'Junte-se aos nossos especialistas para uma discussão ao vivo sobre as últimas tendências de IA que estão transformando a indústria da construção.',
    ru: 'Присоединяйтесь к нашим экспертам для живого обсуждения последних трендов ИИ, трансформирующих строительную отрасль.',
    ar: 'انضم إلى خبرائنا لمناقشة مباشرة حول أحدث اتجاهات الذكاء الاصطناعي التي تحول صناعة البناء.'
  },
  'BIM Summit 2025': {
    zh: 'BIM峰会2025',
    ja: 'BIMサミット2025',
    ko: 'BIM 서밋 2025',
    de: 'BIM-Gipfel 2025',
    fr: 'Sommet BIM 2025',
    es: 'Cumbre BIM 2025',
    pt: 'Cúpula BIM 2025',
    ru: 'Саммит BIM 2025',
    ar: 'قمة BIM 2025'
  },
  'Annual conference bringing together BIM professionals to share innovations and best practices.': {
    zh: '年度会议汇集BIM专业人士，分享创新和最佳实践。',
    ja: 'BIM専門家が革新とベストプラクティスを共有する年次カンファレンス。',
    ko: 'BIM 전문가들이 혁신과 모범 사례를 공유하는 연례 컨퍼런스.',
    de: 'Jährliche Konferenz, die BIM-Fachleute zusammenbringt, um Innovationen und Best Practices auszutauschen.',
    fr: 'Conférence annuelle réunissant les professionnels BIM pour partager innovations et meilleures pratiques.',
    es: 'Conferencia anual que reúne a profesionales BIM para compartir innovaciones y mejores prácticas.',
    pt: 'Conferência anual reunindo profissionais BIM para compartilhar inovações e melhores práticas.',
    ru: 'Ежегодная конференция, объединяющая профессионалов BIM для обмена инновациями и лучшими практиками.',
    ar: 'مؤتمر سنوي يجمع متخصصي BIM لمشاركة الابتكارات وأفضل الممارسات.'
  },
  'Revit AI Workshop': {
    zh: 'Revit AI工作坊',
    ja: 'Revit AIワークショップ',
    ko: 'Revit AI 워크샵',
    de: 'Revit KI-Workshop',
    fr: 'Atelier Revit IA',
    es: 'Taller de IA de Revit',
    pt: 'Workshop de IA do Revit',
    ru: 'Воркшоп по Revit AI',
    ar: 'ورشة عمل Revit AI'
  },
  'Hands-on workshop to master InvoratecAI\'s Revit add-in features and boost your productivity.': {
    zh: '实践工作坊，掌握InvoratecAI的Revit插件功能，提升您的生产力。',
    ja: 'InvoratecAIのRevitアドイン機能を習得し、生産性を向上させる実践的なワークショップ。',
    ko: 'InvoratecAI의 Revit 애드인 기능을 마스터하고 생산성을 높이는 실습 워크샵.',
    de: 'Praktischer Workshop zur Beherrschung der InvoratecAI Revit-Add-in-Funktionen und Steigerung Ihrer Produktivität.',
    fr: 'Atelier pratique pour maîtriser les fonctionnalités de l\'extension Revit d\'InvoratecAI et booster votre productivité.',
    es: 'Taller práctico para dominar las funciones del complemento Revit de InvoratecAI y aumentar su productividad.',
    pt: 'Workshop prático para dominar os recursos do complemento Revit da InvoratecAI e aumentar sua produtividade.',
    ru: 'Практический воркшоп для освоения функций надстройки InvoratecAI для Revit и повышения вашей производительности.',
    ar: 'ورشة عمل عملية لإتقان ميزات إضافة InvoratecAI لـ Revit وتعزيز إنتاجيتك.'
  },
  'Read More': {
    zh: '阅读更多', ja: '続きを読む', ko: '더 읽기',
    de: 'Mehr lesen', fr: 'Lire la suite', es: 'Leer más',
    pt: 'Leia mais', ru: 'Читать далее', ar: 'اقرأ المزيد'
  },
  'No items found': {
    zh: '未找到项目', ja: '項目が見つかりません', ko: '항목을 찾을 수 없음',
    de: 'Keine Einträge gefunden', fr: 'Aucun élément trouvé', es: 'No se encontraron elementos',
    pt: 'Nenhum item encontrado', ru: 'Элементы не найдены', ar: 'لم يتم العثور على عناصر'
  },
  'Check back soon for new content in this category.': {
    zh: '请稍后回来查看此类别中的新内容。',
    ja: 'このカテゴリの新しいコンテンツは近日公開予定です。',
    ko: '이 카테고리의 새로운 콘텐츠를 곧 확인하세요.',
    de: 'Schauen Sie bald wieder vorbei für neue Inhalte in dieser Kategorie.',
    fr: 'Revenez bientôt pour du nouveau contenu dans cette catégorie.',
    es: 'Vuelva pronto para ver nuevo contenido en esta categoría.',
    pt: 'Volte em breve para novo conteúdo nesta categoria.',
    ru: 'Скоро здесь появится новый контент в этой категории.',
    ar: 'تحقق قريبًا من المحتوى الجديد في هذه الفئة.'
  },
  'Ready to Transform Your Workflow?': {
    zh: '准备好改变您的工作流程了吗？',
    ja: 'ワークフローを変革する準備はできていますか？',
    ko: '워크플로우를 변환할 준비가 되셨나요?',
    de: 'Bereit, Ihren Workflow zu transformieren?',
    fr: 'Prêt à transformer votre flux de travail ?',
    es: '¿Listo para transformar su flujo de trabajo?',
    pt: 'Pronto para transformar seu fluxo de trabalho?',
    ru: 'Готовы преобразовать свой рабочий процесс?',
    ar: 'هل أنت مستعد لتحويل سير عملك؟'
  },
  'See how InvoratecAI can help your team achieve better results': {
    zh: '了解InvoratecAI如何帮助您的团队取得更好的成果',
    ja: 'InvoratecAIがチームの成果向上にどう役立つかをご覧ください',
    ko: 'InvoratecAI가 팀이 더 나은 결과를 달성하는 데 어떻게 도움이 되는지 확인하세요',
    de: 'Sehen Sie, wie InvoratecAI Ihrem Team helfen kann, bessere Ergebnisse zu erzielen',
    fr: 'Découvrez comment InvoratecAI peut aider votre équipe à obtenir de meilleurs résultats',
    es: 'Vea cómo InvoratecAI puede ayudar a su equipo a lograr mejores resultados',
    pt: 'Veja como a InvoratecAI pode ajudar sua equipe a alcançar melhores resultados',
    ru: 'Узнайте, как InvoratecAI может помочь вашей команде достичь лучших результатов',
    ar: 'اكتشف كيف يمكن لـ InvoratecAI مساعدة فريقك على تحقيق نتائج أفضل'
  },
  'Request Demo': {
    zh: '请求演示', ja: 'デモをリクエスト', ko: '데모 요청',
    de: 'Demo anfordern', fr: 'Demander une démo', es: 'Solicitar demo',
    pt: 'Solicitar demonstração', ru: 'Запросить демо', ar: 'طلب عرض توضيحي'
  },

  // ServiceAI section
  'Comprehensive AI solutions tailored to your organization\'s unique needs and security requirements': {
    zh: '根据您组织独特需求和安全要求量身定制的全面AI解决方案',
    ja: '組織固有のニーズとセキュリティ要件に合わせた包括的なAIソリューション',
    ko: '조직의 고유한 요구 사항과 보안 요구 사항에 맞춤화된 포괄적인 AI 솔루션',
    de: 'Umfassende KI-Lösungen, maßgeschneidert auf die einzigartigen Bedürfnisse und Sicherheitsanforderungen Ihrer Organisation',
    fr: 'Solutions IA complètes adaptées aux besoins uniques et aux exigences de sécurité de votre organisation',
    es: 'Soluciones de IA integrales adaptadas a las necesidades únicas y requisitos de seguridad de su organización',
    pt: 'Soluções de IA abrangentes adaptadas às necessidades exclusivas e requisitos de segurança da sua organização',
    ru: 'Комплексные решения ИИ, адаптированные к уникальным потребностям и требованиям безопасности вашей организации',
    ar: 'حلول ذكاء اصطناعي شاملة مصممة خصيصًا لاحتياجات مؤسستك الفريدة ومتطلبات الأمان'
  },
  'Custom AI Features': {
    zh: '定制AI功能', ja: 'カスタムAI機能', ko: '맞춤형 AI 기능',
    de: 'Benutzerdefinierte KI-Funktionen', fr: 'Fonctionnalités IA personnalisées', es: 'Funciones de IA personalizadas',
    pt: 'Recursos de IA personalizados', ru: 'Пользовательские функции ИИ', ar: 'ميزات الذكاء الاصطناعي المخصصة'
  },
  'Build AI capabilities specific to your workflows, terminology, and business processes': {
    zh: '构建针对您的工作流程、术语和业务流程的特定AI功能',
    ja: 'ワークフロー、用語、ビジネスプロセスに特化したAI機能を構築',
    ko: '워크플로우, 용어 및 비즈니스 프로세스에 특화된 AI 기능 구축',
    de: 'Entwickeln Sie KI-Funktionen speziell für Ihre Workflows, Terminologie und Geschäftsprozesse',
    fr: 'Développez des capacités IA spécifiques à vos flux de travail, terminologie et processus métier',
    es: 'Desarrolle capacidades de IA específicas para sus flujos de trabajo, terminología y procesos comerciales',
    pt: 'Desenvolva capacidades de IA específicas para seus fluxos de trabalho, terminologia e processos de negócios',
    ru: 'Создавайте возможности ИИ, специфичные для ваших рабочих процессов, терминологии и бизнес-процессов',
    ar: 'بناء قدرات الذكاء الاصطناعي الخاصة بسير العمل والمصطلحات والعمليات التجارية الخاصة بك'
  },
  'Local Server Deployment': {
    zh: '本地服务器部署', ja: 'ローカルサーバー展開', ko: '로컬 서버 배포',
    de: 'Lokale Server-Bereitstellung', fr: 'Déploiement sur serveur local', es: 'Implementación en servidor local',
    pt: 'Implantação de servidor local', ru: 'Локальное развертывание сервера', ar: 'نشر الخادم المحلي'
  },
  'Deploy AI models on your own infrastructure for maximum data security and compliance': {
    zh: '在您自己的基础设施上部署AI模型，以实现最大的数据安全性和合规性',
    ja: '最大限のデータセキュリティとコンプライアンスのために、自社インフラにAIモデルを展開',
    ko: '최대 데이터 보안 및 규정 준수를 위해 자체 인프라에 AI 모델 배포',
    de: 'Stellen Sie KI-Modelle auf Ihrer eigenen Infrastruktur bereit für maximale Datensicherheit und Compliance',
    fr: 'Déployez des modèles IA sur votre propre infrastructure pour une sécurité et conformité maximales des données',
    es: 'Implemente modelos de IA en su propia infraestructura para máxima seguridad de datos y cumplimiento',
    pt: 'Implante modelos de IA em sua própria infraestrutura para máxima segurança de dados e conformidade',
    ru: 'Разверните модели ИИ на собственной инфраструктуре для максимальной безопасности данных и соответствия требованиям',
    ar: 'نشر نماذج الذكاء الاصطناعي على البنية التحتية الخاصة بك لتحقيق أقصى قدر من أمان البيانات والامتثال'
  },
  'Custom Training Programs': {
    zh: '定制培训计划', ja: 'カスタムトレーニングプログラム', ko: '맞춤형 교육 프로그램',
    de: 'Maßgeschneiderte Schulungsprogramme', fr: 'Programmes de formation personnalisés', es: 'Programas de capacitación personalizados',
    pt: 'Programas de treinamento personalizados', ru: 'Индивидуальные программы обучения', ar: 'برامج تدريب مخصصة'
  },
  'Comprehensive training programs to ensure your team maximizes AI tool effectiveness': {
    zh: '全面的培训计划，确保您的团队最大化AI工具的效果',
    ja: 'チームがAIツールの効果を最大化するための包括的なトレーニングプログラム',
    ko: '팀이 AI 도구 효과를 극대화할 수 있도록 하는 포괄적인 교육 프로그램',
    de: 'Umfassende Schulungsprogramme, um sicherzustellen, dass Ihr Team die Effektivität der KI-Tools maximiert',
    fr: 'Programmes de formation complets pour garantir que votre équipe maximise l\'efficacité des outils IA',
    es: 'Programas de capacitación integrales para garantizar que su equipo maximice la efectividad de las herramientas de IA',
    pt: 'Programas de treinamento abrangentes para garantir que sua equipe maximize a eficácia das ferramentas de IA',
    ru: 'Комплексные программы обучения, чтобы ваша команда максимально эффективно использовала инструменты ИИ',
    ar: 'برامج تدريبية شاملة لضمان تعظيم فريقك لفعالية أدوات الذكاء الاصطناعي'
  },
  'System Integration': {
    zh: '系统集成', ja: 'システム統合', ko: '시스템 통합',
    de: 'Systemintegration', fr: 'Intégration système', es: 'Integración de sistemas',
    pt: 'Integração de sistemas', ru: 'Системная интеграция', ar: 'تكامل النظام'
  },
  'Seamlessly integrate AI capabilities with your existing tools and workflows': {
    zh: '将AI功能与您现有的工具和工作流程无缝集成',
    ja: 'AI機能を既存のツールやワークフローとシームレスに統合',
    ko: 'AI 기능을 기존 도구 및 워크플로우와 원활하게 통합',
    de: 'Integrieren Sie KI-Funktionen nahtlos in Ihre bestehenden Tools und Workflows',
    fr: 'Intégrez les capacités IA de manière transparente avec vos outils et flux de travail existants',
    es: 'Integre sin problemas las capacidades de IA con sus herramientas y flujos de trabajo existentes',
    pt: 'Integre perfeitamente os recursos de IA com suas ferramentas e fluxos de trabalho existentes',
    ru: 'Бесшовно интегрируйте возможности ИИ с вашими существующими инструментами и рабочими процессами',
    ar: 'دمج قدرات الذكاء الاصطناعي بسلاسة مع أدواتك وسير العمل الحالية'
  },
  'Enterprise-Grade Security': {
    zh: '企业级安全', ja: 'エンタープライズグレードのセキュリティ', ko: '엔터프라이즈급 보안',
    de: 'Sicherheit auf Unternehmensniveau', fr: 'Sécurité de niveau entreprise', es: 'Seguridad de nivel empresarial',
    pt: 'Segurança de nível empresarial', ru: 'Безопасность корпоративного уровня', ar: 'أمان على مستوى المؤسسات'
  },
  'Your data never leaves your control. Deploy AI with confidence knowing your sensitive project data stays secure.': {
    zh: '您的数据永远不会脱离您的控制。放心部署AI，知道您的敏感项目数据保持安全。',
    ja: 'データは常にお客様の管理下にあります。機密性の高いプロジェクトデータが安全に保護されることを確信して、AIを展開してください。',
    ko: '데이터가 절대 통제에서 벗어나지 않습니다. 민감한 프로젝트 데이터가 안전하게 유지된다는 확신을 가지고 AI를 배포하세요.',
    de: 'Ihre Daten verlassen nie Ihre Kontrolle. Stellen Sie KI mit dem Vertrauen bereit, dass Ihre sensiblen Projektdaten sicher bleiben.',
    fr: 'Vos données ne quittent jamais votre contrôle. Déployez l\'IA en toute confiance sachant que vos données de projet sensibles restent sécurisées.',
    es: 'Sus datos nunca salen de su control. Implemente IA con confianza sabiendo que sus datos de proyecto sensibles permanecen seguros.',
    pt: 'Seus dados nunca saem do seu controle. Implante IA com confiança sabendo que seus dados de projeto confidenciais permanecem seguros.',
    ru: 'Ваши данные никогда не покидают вашего контроля. Развертывайте ИИ с уверенностью, зная, что ваши конфиденциальные данные проекта остаются в безопасности.',
    ar: 'بياناتك لا تغادر سيطرتك أبدًا. انشر الذكاء الاصطناعي بثقة مع العلم أن بيانات مشروعك الحساسة تظل آمنة.'
  },
  'Data Secure': {
    zh: '数据安全', ja: 'データセキュア', ko: '데이터 보안',
    de: 'Datensicher', fr: 'Données sécurisées', es: 'Datos seguros',
    pt: 'Dados seguros', ru: 'Безопасность данных', ar: 'البيانات آمنة'
  },
  'On-Premise Deployment': {
    zh: '本地部署', ja: 'オンプレミス展開', ko: '온프레미스 배포',
    de: 'On-Premise-Bereitstellung', fr: 'Déploiement sur site', es: 'Implementación local',
    pt: 'Implantação local', ru: 'Локальное развертывание', ar: 'النشر المحلي'
  },
  'Run AI models entirely within your network perimeter': {
    zh: '完全在您的网络边界内运行AI模型',
    ja: 'ネットワーク境界内で完全にAIモデルを実行',
    ko: '네트워크 경계 내에서 완전히 AI 모델 실행',
    de: 'Führen Sie KI-Modelle vollständig innerhalb Ihres Netzwerkperimeters aus',
    fr: 'Exécutez des modèles IA entièrement dans votre périmètre réseau',
    es: 'Ejecute modelos de IA completamente dentro del perímetro de su red',
    pt: 'Execute modelos de IA inteiramente dentro do perímetro da sua rede',
    ru: 'Запускайте модели ИИ полностью в пределах периметра вашей сети',
    ar: 'تشغيل نماذج الذكاء الاصطناعي بالكامل داخل محيط شبكتك'
  },
  'End-to-End Encryption': {
    zh: '端到端加密', ja: 'エンドツーエンドの暗号化', ko: '종단 간 암호화',
    de: 'Ende-zu-Ende-Verschlüsselung', fr: 'Chiffrement de bout en bout', es: 'Cifrado de extremo a extremo',
    pt: 'Criptografia de ponta a ponta', ru: 'Сквозное шифрование', ar: 'التشفير من طرف إلى طرف'
  },
  'All data encrypted at rest and in transit': {
    zh: '所有数据在静态和传输中均加密',
    ja: '保存時および転送時にすべてのデータを暗号化',
    ko: '저장 및 전송 중 모든 데이터 암호화',
    de: 'Alle Daten sind im Ruhezustand und während der Übertragung verschlüsselt',
    fr: 'Toutes les données chiffrées au repos et en transit',
    es: 'Todos los datos cifrados en reposo y en tránsito',
    pt: 'Todos os dados criptografados em repouso e em trânsito',
    ru: 'Все данные зашифрованы при хранении и передаче',
    ar: 'جميع البيانات مشفرة أثناء السكون والنقل'
  },
  'Compliance Ready': {
    zh: '符合合规要求', ja: 'コンプライアンス対応', ko: '규정 준수 준비',
    de: 'Compliance-bereit', fr: 'Prêt pour la conformité', es: 'Preparado para cumplimiento',
    pt: 'Pronto para conformidade', ru: 'Готов к соответствию', ar: 'جاهز للامتثال'
  },
  'SOC 2, GDPR, and industry-specific compliance support': {
    zh: 'SOC 2、GDPR和行业特定合规支持',
    ja: 'SOC 2、GDPR、業界固有のコンプライアンスサポート',
    ko: 'SOC 2, GDPR 및 산업별 규정 준수 지원',
    de: 'SOC 2, DSGVO und branchenspezifische Compliance-Unterstützung',
    fr: 'Support de conformité SOC 2, RGPD et spécifique à l\'industrie',
    es: 'Soporte de cumplimiento SOC 2, GDPR y específico de la industria',
    pt: 'Suporte de conformidade SOC 2, GDPR e específico do setor',
    ru: 'Поддержка соответствия SOC 2, GDPR и отраслевым стандартам',
    ar: 'دعم الامتثال لـ SOC 2 و GDPR والصناعات المحددة'
  },

  // MockUI section
  'Project Dashboard': {
    zh: '项目仪表板', ja: 'プロジェクトダッシュボード', ko: '프로젝트 대시보드',
    de: 'Projekt-Dashboard', fr: 'Tableau de bord du projet', es: 'Panel del proyecto',
    pt: 'Painel do projeto', ru: 'Панель проекта', ar: 'لوحة تحكم المشروع'
  },
  'Tower-A MEP Project': {
    zh: 'Tower-A 机电项目', ja: 'Tower-A MEPプロジェクト', ko: 'Tower-A MEP 프로젝트',
    de: 'Tower-A MEP-Projekt', fr: 'Projet MEP Tour-A', es: 'Proyecto MEP Torre-A',
    pt: 'Projeto MEP Torre-A', ru: 'Проект MEP Tower-A', ar: 'مشروع Tower-A MEP'
  },
  'Total Tasks': {
    zh: '总任务数', ja: '総タスク数', ko: '전체 작업',
    de: 'Gesamte Aufgaben', fr: 'Total des tâches', es: 'Total de tareas',
    pt: 'Total de tarefas', ru: 'Всего задач', ar: 'إجمالي المهام'
  },
  'In Progress': {
    zh: '进行中', ja: '進行中', ko: '진행 중',
    de: 'In Bearbeitung', fr: 'En cours', es: 'En progreso',
    pt: 'Em andamento', ru: 'В процессе', ar: 'قيد التنفيذ'
  },
  'Completed': {
    zh: '已完成', ja: '完了', ko: '완료됨',
    de: 'Abgeschlossen', fr: 'Terminé', es: 'Completado',
    pt: 'Concluído', ru: 'Завершено', ar: 'مكتمل'
  },
  'Period': {
    zh: '周期', ja: '期間', ko: '기간',
    de: 'Zeitraum', fr: 'Période', es: 'Período',
    pt: 'Período', ru: 'Период', ar: 'الفترة'
  },
  'Refresh': {
    zh: '刷新', ja: '更新', ko: '새로고침',
    de: 'Aktualisieren', fr: 'Actualiser', es: 'Actualizar',
    pt: 'Atualizar', ru: 'Обновить', ar: 'تحديث'
  },
  'Task Progress': {
    zh: '任务进度', ja: 'タスク進捗', ko: '작업 진행률',
    de: 'Aufgabenfortschritt', fr: 'Progression des tâches', es: 'Progreso de tareas',
    pt: 'Progresso de tarefas', ru: 'Прогресс задач', ar: 'تقدم المهام'
  },
  'Team Activity': {
    zh: '团队活动', ja: 'チームアクティビティ', ko: '팀 활동',
    de: 'Teamaktivität', fr: 'Activité de l\'équipe', es: 'Actividad del equipo',
    pt: 'Atividade da equipe', ru: 'Активность команды', ar: 'نشاط الفريق'
  },
  'Recent Updates': {
    zh: '最近更新', ja: '最近の更新', ko: '최근 업데이트',
    de: 'Aktuelle Updates', fr: 'Mises à jour récentes', es: 'Actualizaciones recientes',
    pt: 'Atualizações recentes', ru: 'Последние обновления', ar: 'التحديثات الأخيرة'
  },
  'View All': {
    zh: '查看全部', ja: 'すべて表示', ko: '모두 보기',
    de: 'Alle anzeigen', fr: 'Voir tout', es: 'Ver todo',
    pt: 'Ver tudo', ru: 'Показать все', ar: 'عرض الكل'
  },
  'My Tasks': {
    zh: '我的任务', ja: 'マイタスク', ko: '내 작업',
    de: 'Meine Aufgaben', fr: 'Mes tâches', es: 'Mis tareas',
    pt: 'Minhas tarefas', ru: 'Мои задачи', ar: 'مهامي'
  },
  'Filter': {
    zh: '筛选', ja: 'フィルター', ko: '필터',
    de: 'Filter', fr: 'Filtrer', es: 'Filtrar',
    pt: 'Filtrar', ru: 'Фильтр', ar: 'تصفية'
  },
  'Priority': {
    zh: '优先级', ja: '優先度', ko: '우선순위',
    de: 'Priorität', fr: 'Priorité', es: 'Prioridad',
    pt: 'Prioridade', ru: 'Приоритет', ar: 'الأولوية'
  },
  'High': {
    zh: '高', ja: '高', ko: '높음',
    de: 'Hoch', fr: 'Haute', es: 'Alta',
    pt: 'Alta', ru: 'Высокий', ar: 'عالي'
  },
  'Medium': {
    zh: '中', ja: '中', ko: '중간',
    de: 'Mittel', fr: 'Moyenne', es: 'Media',
    pt: 'Média', ru: 'Средний', ar: 'متوسط'
  },
  'Urgent': {
    zh: '紧急', ja: '緊急', ko: '긴급',
    de: 'Dringend', fr: 'Urgent', es: 'Urgente',
    pt: 'Urgente', ru: 'Срочно', ar: 'عاجل'
  },
  'Due Date': {
    zh: '截止日期', ja: '期限', ko: '마감일',
    de: 'Fälligkeitsdatum', fr: 'Date d\'échéance', es: 'Fecha de vencimiento',
    pt: 'Data de vencimento', ru: 'Срок выполнения', ar: 'تاريخ الاستحقاق'
  },
  'Assignee': {
    zh: '负责人', ja: '担当者', ko: '담당자',
    de: 'Zugewiesene Person', fr: 'Assigné à', es: 'Asignado a',
    pt: 'Responsável', ru: 'Исполнитель', ar: 'المُعيَّن'
  },
  'Add Task': {
    zh: '添加任务', ja: 'タスクを追加', ko: '작업 추가',
    de: 'Aufgabe hinzufügen', fr: 'Ajouter une tâche', es: 'Agregar tarea',
    pt: 'Adicionar tarefa', ru: 'Добавить задачу', ar: 'إضافة مهمة'
  },
  'Search tasks...': {
    zh: '搜索任务...', ja: 'タスクを検索...', ko: '작업 검색...',
    de: 'Aufgaben suchen...', fr: 'Rechercher des tâches...', es: 'Buscar tareas...',
    pt: 'Pesquisar tarefas...', ru: 'Поиск задач...', ar: 'البحث عن المهام...'
  },
  'Board View': {
    zh: '看板视图', ja: 'ボードビュー', ko: '보드 보기',
    de: 'Board-Ansicht', fr: 'Vue tableau', es: 'Vista de tablero',
    pt: 'Visualização de quadro', ru: 'Представление доски', ar: 'عرض اللوحة'
  },
  'Timeline View': {
    zh: '时间线视图', ja: 'タイムラインビュー', ko: '타임라인 보기',
    de: 'Zeitachsen-Ansicht', fr: 'Vue chronologique', es: 'Vista de línea de tiempo',
    pt: 'Visualização de linha do tempo', ru: 'Представление хронологии', ar: 'عرض الجدول الزمني'
  },
  'List View': {
    zh: '列表视图', ja: 'リストビュー', ko: '목록 보기',
    de: 'Listenansicht', fr: 'Vue liste', es: 'Vista de lista',
    pt: 'Visualização de lista', ru: 'Представление списка', ar: 'عرض القائمة'
  },
  'To Do': {
    zh: '待办', ja: 'To Do', ko: '할 일',
    de: 'Zu erledigen', fr: 'À faire', es: 'Por hacer',
    pt: 'A fazer', ru: 'К выполнению', ar: 'للتنفيذ'
  },
  'Done': {
    zh: '完成', ja: '完了', ko: '완료',
    de: 'Erledigt', fr: 'Terminé', es: 'Hecho',
    pt: 'Feito', ru: 'Выполнено', ar: 'تم'
  },
  'Review HVAC layout for Level 3': {
    zh: '审查3层暖通布局', ja: 'レベル3のHVACレイアウトを確認', ko: '레벨 3 HVAC 레이아웃 검토',
    de: 'HVAC-Layout für Ebene 3 überprüfen', fr: 'Examiner la disposition HVAC du niveau 3', es: 'Revisar diseño HVAC del nivel 3',
    pt: 'Revisar layout HVAC do nível 3', ru: 'Проверить планировку ОВК для уровня 3', ar: 'مراجعة تخطيط HVAC للمستوى 3'
  },
  'Resolve pipe routing conflicts': {
    zh: '解决管道路由冲突', ja: '配管ルーティングの競合を解決', ko: '배관 라우팅 충돌 해결',
    de: 'Konflikte bei der Rohrleitungsführung lösen', fr: 'Résoudre les conflits de routage des tuyaux', es: 'Resolver conflictos de enrutamiento de tuberías',
    pt: 'Resolver conflitos de roteamento de tubulações', ru: 'Устранить конфликты маршрутизации труб', ar: 'حل تعارضات توجيه الأنابيب'
  },
  'Update electrical panel schedule': {
    zh: '更新电气面板时间表', ja: '電気パネルスケジュールを更新', ko: '전기 패널 일정 업데이트',
    de: 'Elektrische Schalttafelplanung aktualisieren', fr: 'Mettre à jour le calendrier du panneau électrique', es: 'Actualizar cronograma del panel eléctrico',
    pt: 'Atualizar cronograma do painel elétrico', ru: 'Обновить график электрической панели', ar: 'تحديث جدول اللوحة الكهربائية'
  },
  'Coordinate with structural team': {
    zh: '与结构团队协调', ja: '構造チームと調整', ko: '구조팀과 조율',
    de: 'Mit Strukturteam koordinieren', fr: 'Coordonner avec l\'équipe structure', es: 'Coordinar con el equipo estructural',
    pt: 'Coordenar com equipe estrutural', ru: 'Координация со структурной командой', ar: 'التنسيق مع فريق الهيكل'
  },
  'AI Assistant': {
    zh: 'AI助手', ja: 'AIアシスタント', ko: 'AI 어시스턴트',
    de: 'KI-Assistent', fr: 'Assistant IA', es: 'Asistente IA',
    pt: 'Assistente IA', ru: 'ИИ-ассистент', ar: 'مساعد الذكاء الاصطناعي'
  },
  'Ask me anything about your BIM model...': {
    zh: '问我任何关于您BIM模型的问题...', ja: 'BIMモデルについて何でも聞いてください...', ko: 'BIM 모델에 대해 무엇이든 물어보세요...',
    de: 'Fragen Sie mich alles über Ihr BIM-Modell...', fr: 'Posez-moi des questions sur votre modèle BIM...', es: 'Pregúnteme cualquier cosa sobre su modelo BIM...',
    pt: 'Pergunte-me qualquer coisa sobre seu modelo BIM...', ru: 'Спросите меня что угодно о вашей BIM-модели...', ar: 'اسألني أي شيء عن نموذج BIM الخاص بك...'
  },
  'Send': {
    zh: '发送', ja: '送信', ko: '전송',
    de: 'Senden', fr: 'Envoyer', es: 'Enviar',
    pt: 'Enviar', ru: 'Отправить', ar: 'إرسال'
  },
  'Voice': {
    zh: '语音', ja: '音声', ko: '음성',
    de: 'Sprache', fr: 'Voix', es: 'Voz',
    pt: 'Voz', ru: 'Голос', ar: 'صوت'
  },
  'Clash Detection': {
    zh: '碰撞检测', ja: '衝突検出', ko: '충돌 감지',
    de: 'Kollisionserkennung', fr: 'Détection des conflits', es: 'Detección de conflictos',
    pt: 'Detecção de conflitos', ru: 'Обнаружение коллизий', ar: 'كشف التعارضات'
  },
  'Active Clashes': {
    zh: '活动碰撞', ja: 'アクティブな衝突', ko: '활성 충돌',
    de: 'Aktive Kollisionen', fr: 'Conflits actifs', es: 'Conflictos activos',
    pt: 'Conflitos ativos', ru: 'Активные коллизии', ar: 'التعارضات النشطة'
  },
  'Resolved': {
    zh: '已解决', ja: '解決済み', ko: '해결됨',
    de: 'Gelöst', fr: 'Résolu', es: 'Resuelto',
    pt: 'Resolvido', ru: 'Решено', ar: 'تم الحل'
  },
  'Under Review': {
    zh: '审核中', ja: 'レビュー中', ko: '검토 중',
    de: 'In Prüfung', fr: 'En cours d\'examen', es: 'En revisión',
    pt: 'Em análise', ru: 'На рассмотрении', ar: 'قيد المراجعة'
  },
  'Model Viewer': {
    zh: '模型查看器', ja: 'モデルビューア', ko: '모델 뷰어',
    de: 'Modell-Viewer', fr: 'Visionneuse de modèle', es: 'Visor de modelo',
    pt: 'Visualizador de modelo', ru: 'Просмотрщик модели', ar: 'عارض النموذج'
  },
  'Properties': {
    zh: '属性', ja: 'プロパティ', ko: '속성',
    de: 'Eigenschaften', fr: 'Propriétés', es: 'Propiedades',
    pt: 'Propriedades', ru: 'Свойства', ar: 'الخصائص'
  },
  'Selected Element': {
    zh: '选中的元素', ja: '選択した要素', ko: '선택된 요소',
    de: 'Ausgewähltes Element', fr: 'Élément sélectionné', es: 'Elemento seleccionado',
    pt: 'Elemento selecionado', ru: 'Выбранный элемент', ar: 'العنصر المحدد'
  },
  'Category': {
    zh: '类别', ja: 'カテゴリ', ko: '카테고리',
    de: 'Kategorie', fr: 'Catégorie', es: 'Categoría',
    pt: 'Categoria', ru: 'Категория', ar: 'الفئة'
  },
  'Family': {
    zh: '族', ja: 'ファミリ', ko: '패밀리',
    de: 'Familie', fr: 'Famille', es: 'Familia',
    pt: 'Família', ru: 'Семейство', ar: 'العائلة'
  },
  'Level': {
    zh: '楼层', ja: 'レベル', ko: '레벨',
    de: 'Ebene', fr: 'Niveau', es: 'Nivel',
    pt: 'Nível', ru: 'Уровень', ar: 'المستوى'
  },
  'Zoom': {
    zh: '缩放', ja: 'ズーム', ko: '확대/축소',
    de: 'Zoom', fr: 'Zoom', es: 'Zoom',
    pt: 'Zoom', ru: 'Масштаб', ar: 'تكبير'
  },
  'Section': {
    zh: '剖面', ja: 'セクション', ko: '단면',
    de: 'Schnitt', fr: 'Section', es: 'Sección',
    pt: 'Seção', ru: 'Разрез', ar: 'قسم'
  },
  'Measure': {
    zh: '测量', ja: '測定', ko: '측정',
    de: 'Messen', fr: 'Mesurer', es: 'Medir',
    pt: 'Medir', ru: 'Измерить', ar: 'قياس'
  },
  'Isolate': {
    zh: '隔离', ja: '分離', ko: '격리',
    de: 'Isolieren', fr: 'Isoler', es: 'Aislar',
    pt: 'Isolar', ru: 'Изолировать', ar: 'عزل'
  },
  'Element ID': {
    zh: '元素ID', ja: '要素ID', ko: '요소 ID',
    de: 'Element-ID', fr: 'ID de l\'élément', es: 'ID del elemento',
    pt: 'ID do elemento', ru: 'ID элемента', ar: 'معرف العنصر'
  },
  'System Type': {
    zh: '系统类型', ja: 'システムタイプ', ko: '시스템 유형',
    de: 'Systemtyp', fr: 'Type de système', es: 'Tipo de sistema',
    pt: 'Tipo de sistema', ru: 'Тип системы', ar: 'نوع النظام'
  },
  'Project Timeline': {
    zh: '项目时间线', ja: 'プロジェクトタイムライン', ko: '프로젝트 타임라인',
    de: 'Projektzeitplan', fr: 'Chronologie du projet', es: 'Línea de tiempo del proyecto',
    pt: 'Cronograma do projeto', ru: 'Хронология проекта', ar: 'الجدول الزمني للمشروع'
  },
  'This Week': {
    zh: '本周', ja: '今週', ko: '이번 주',
    de: 'Diese Woche', fr: 'Cette semaine', es: 'Esta semana',
    pt: 'Esta semana', ru: 'На этой неделе', ar: 'هذا الأسبوع'
  },
  'This Month': {
    zh: '本月', ja: '今月', ko: '이번 달',
    de: 'Dieser Monat', fr: 'Ce mois', es: 'Este mes',
    pt: 'Este mês', ru: 'В этом месяце', ar: 'هذا الشهر'
  },
  'Add Milestone': {
    zh: '添加里程碑', ja: 'マイルストーンを追加', ko: '마일스톤 추가',
    de: 'Meilenstein hinzufügen', fr: 'Ajouter un jalon', es: 'Agregar hito',
    pt: 'Adicionar marco', ru: 'Добавить веху', ar: 'إضافة مرحلة رئيسية'
  },
  'Phase': {
    zh: '阶段', ja: 'フェーズ', ko: '단계',
    de: 'Phase', fr: 'Phase', es: 'Fase',
    pt: 'Fase', ru: 'Фаза', ar: 'المرحلة'
  },
  'Design Phase': {
    zh: '设计阶段', ja: '設計フェーズ', ko: '설계 단계',
    de: 'Entwurfsphase', fr: 'Phase de conception', es: 'Fase de diseño',
    pt: 'Fase de design', ru: 'Фаза проектирования', ar: 'مرحلة التصميم'
  },
  'Construction Phase': {
    zh: '施工阶段', ja: '建設フェーズ', ko: '시공 단계',
    de: 'Bauphase', fr: 'Phase de construction', es: 'Fase de construcción',
    pt: 'Fase de construção', ru: 'Фаза строительства', ar: 'مرحلة البناء'
  },
  'Milestone': {
    zh: '里程碑', ja: 'マイルストーン', ko: '마일스톤',
    de: 'Meilenstein', fr: 'Jalon', es: 'Hito',
    pt: 'Marco', ru: 'Веха', ar: 'مرحلة رئيسية'
  },
  'Design Complete': {
    zh: '设计完成', ja: '設計完了', ko: '설계 완료',
    de: 'Design abgeschlossen', fr: 'Conception terminée', es: 'Diseño completo',
    pt: 'Design completo', ru: 'Проектирование завершено', ar: 'اكتمال التصميم'
  },
  'Coordination Complete': {
    zh: '协调完成', ja: 'コーディネーション完了', ko: '조정 완료',
    de: 'Koordination abgeschlossen', fr: 'Coordination terminée', es: 'Coordinación completa',
    pt: 'Coordenação completa', ru: 'Координация завершена', ar: 'اكتمال التنسيق'
  },
  'Project Start': {
    zh: '项目开始', ja: 'プロジェクト開始', ko: '프로젝트 시작',
    de: 'Projektstart', fr: 'Début du projet', es: 'Inicio del proyecto',
    pt: 'Início do projeto', ru: 'Начало проекта', ar: 'بداية المشروع'
  },
  'Reports': {
    zh: '报告', ja: 'レポート', ko: '보고서',
    de: 'Berichte', fr: 'Rapports', es: 'Informes',
    pt: 'Relatórios', ru: 'Отчеты', ar: 'التقارير'
  },
  'Generate Report': {
    zh: '生成报告', ja: 'レポートを生成', ko: '보고서 생성',
    de: 'Bericht erstellen', fr: 'Générer un rapport', es: 'Generar informe',
    pt: 'Gerar relatório', ru: 'Создать отчет', ar: 'إنشاء تقرير'
  },
  'Export': {
    zh: '导出', ja: 'エクスポート', ko: '내보내기',
    de: 'Exportieren', fr: 'Exporter', es: 'Exportar',
    pt: 'Exportar', ru: 'Экспорт', ar: 'تصدير'
  },
  'Task Completion Rate': {
    zh: '任务完成率', ja: 'タスク完了率', ko: '작업 완료율',
    de: 'Aufgabenabschlussrate', fr: 'Taux d\'achèvement des tâches', es: 'Tasa de finalización de tareas',
    pt: 'Taxa de conclusão de tarefas', ru: 'Уровень завершения задач', ar: 'معدل إكمال المهام'
  },
  'Clash Resolution Rate': {
    zh: '碰撞解决率', ja: '衝突解決率', ko: '충돌 해결률',
    de: 'Kollisionslösungsrate', fr: 'Taux de résolution des conflits', es: 'Tasa de resolución de conflictos',
    pt: 'Taxa de resolução de conflitos', ru: 'Уровень разрешения коллизий', ar: 'معدل حل التعارضات'
  },
  'On Track': {
    zh: '按计划进行', ja: '順調', ko: '순조로움',
    de: 'Im Zeitplan', fr: 'Dans les temps', es: 'En tiempo',
    pt: 'No prazo', ru: 'По плану', ar: 'في الموعد'
  },
  'At Risk': {
    zh: '有风险', ja: 'リスクあり', ko: '위험',
    de: 'Gefährdet', fr: 'À risque', es: 'En riesgo',
    pt: 'Em risco', ru: 'Под угрозой', ar: 'في خطر'
  },
  'Delayed': {
    zh: '延迟', ja: '遅延', ko: '지연됨',
    de: 'Verzögert', fr: 'Retardé', es: 'Retrasado',
    pt: 'Atrasado', ru: 'С задержкой', ar: 'متأخر'
  },
  'Actions': {
    zh: '操作', ja: 'アクション', ko: '작업',
    de: 'Aktionen', fr: 'Actions', es: 'Acciones',
    pt: 'Ações', ru: 'Действия', ar: 'الإجراءات'
  },
  'Edit': {
    zh: '编辑', ja: '編集', ko: '편집',
    de: 'Bearbeiten', fr: 'Modifier', es: 'Editar',
    pt: 'Editar', ru: 'Редактировать', ar: 'تحرير'
  },
  'Delete': {
    zh: '删除', ja: '削除', ko: '삭제',
    de: 'Löschen', fr: 'Supprimer', es: 'Eliminar',
    pt: 'Excluir', ru: 'Удалить', ar: 'حذف'
  },
  'Settings': {
    zh: '设置', ja: '設定', ko: '설정',
    de: 'Einstellungen', fr: 'Paramètres', es: 'Configuración',
    pt: 'Configurações', ru: 'Настройки', ar: 'الإعدادات'
  },
  'Help': {
    zh: '帮助', ja: 'ヘルプ', ko: '도움말',
    de: 'Hilfe', fr: 'Aide', es: 'Ayuda',
    pt: 'Ajuda', ru: 'Помощь', ar: 'مساعدة'
  },
  'Sync': {
    zh: '同步', ja: '同期', ko: '동기화',
    de: 'Synchronisieren', fr: 'Synchroniser', es: 'Sincronizar',
    pt: 'Sincronizar', ru: 'Синхронизировать', ar: 'مزامنة'
  },
  'Upload': {
    zh: '上传', ja: 'アップロード', ko: '업로드',
    de: 'Hochladen', fr: 'Télécharger', es: 'Subir',
    pt: 'Enviar', ru: 'Загрузить', ar: 'رفع'
  },
  'Type': {
    zh: '类型', ja: 'タイプ', ko: '유형',
    de: 'Typ', fr: 'Type', es: 'Tipo',
    pt: 'Tipo', ru: 'Тип', ar: 'النوع'
  },
  'Name': {
    zh: '名称', ja: '名前', ko: '이름',
    de: 'Name', fr: 'Nom', es: 'Nombre',
    pt: 'Nome', ru: 'Имя', ar: 'الاسم'
  },
  'Select All': {
    zh: '全选', ja: 'すべて選択', ko: '모두 선택',
    de: 'Alle auswählen', fr: 'Tout sélectionner', es: 'Seleccionar todo',
    pt: 'Selecionar tudo', ru: 'Выбрать все', ar: 'تحديد الكل'
  },
  'Clear': {
    zh: '清除', ja: 'クリア', ko: '지우기',
    de: 'Löschen', fr: 'Effacer', es: 'Borrar',
    pt: 'Limpar', ru: 'Очистить', ar: 'مسح'
  },
  'Apply': {
    zh: '应用', ja: '適用', ko: '적용',
    de: 'Anwenden', fr: 'Appliquer', es: 'Aplicar',
    pt: 'Aplicar', ru: 'Применить', ar: 'تطبيق'
  },
  'Cancel': {
    zh: '取消', ja: 'キャンセル', ko: '취소',
    de: 'Abbrechen', fr: 'Annuler', es: 'Cancelar',
    pt: 'Cancelar', ru: 'Отмена', ar: 'إلغاء'
  },
  'Save': {
    zh: '保存', ja: '保存', ko: '저장',
    de: 'Speichern', fr: 'Enregistrer', es: 'Guardar',
    pt: 'Salvar', ru: 'Сохранить', ar: 'حفظ'
  },
  'Close': {
    zh: '关闭', ja: '閉じる', ko: '닫기',
    de: 'Schließen', fr: 'Fermer', es: 'Cerrar',
    pt: 'Fechar', ru: 'Закрыть', ar: 'إغلاق'
  },
  'Back': {
    zh: '返回', ja: '戻る', ko: '뒤로',
    de: 'Zurück', fr: 'Retour', es: 'Atrás',
    pt: 'Voltar', ru: 'Назад', ar: 'رجوع'
  },
  'Next': {
    zh: '下一步', ja: '次へ', ko: '다음',
    de: 'Weiter', fr: 'Suivant', es: 'Siguiente',
    pt: 'Próximo', ru: 'Далее', ar: 'التالي'
  },
  'Loading...': {
    zh: '加载中...', ja: '読み込み中...', ko: '로딩 중...',
    de: 'Wird geladen...', fr: 'Chargement...', es: 'Cargando...',
    pt: 'Carregando...', ru: 'Загрузка...', ar: 'جاري التحميل...'
  },
  'No data': {
    zh: '暂无数据', ja: 'データがありません', ko: '데이터 없음',
    de: 'Keine Daten', fr: 'Pas de données', es: 'Sin datos',
    pt: 'Sem dados', ru: 'Нет данных', ar: 'لا توجد بيانات'
  },
  'Error': {
    zh: '错误', ja: 'エラー', ko: '오류',
    de: 'Fehler', fr: 'Erreur', es: 'Error',
    pt: 'Erro', ru: 'Ошибка', ar: 'خطأ'
  },
  'Success': {
    zh: '成功', ja: '成功', ko: '성공',
    de: 'Erfolg', fr: 'Succès', es: 'Éxito',
    pt: 'Sucesso', ru: 'Успех', ar: 'نجاح'
  },
  'Warning': {
    zh: '警告', ja: '警告', ko: '경고',
    de: 'Warnung', fr: 'Avertissement', es: 'Advertencia',
    pt: 'Aviso', ru: 'Предупреждение', ar: 'تحذير'
  },
  'Info': {
    zh: '信息', ja: '情報', ko: '정보',
    de: 'Info', fr: 'Info', es: 'Información',
    pt: 'Informação', ru: 'Информация', ar: 'معلومات'
  }
};

const allKeys = getAllKeys(en, '');
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('Applying translations...\n');

for (const lang of languages) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  let autoTranslated = 0;

  for (const key of allKeys) {
    const enVal = getValue(en, key);
    const langVal = getValue(data, key);

    if (typeof enVal === 'string' && typeof langVal === 'string' && enVal === langVal && !shouldSkip(enVal)) {
      if (translations[enVal] && translations[enVal][lang]) {
        setValue(data, key, translations[enVal][lang]);
        autoTranslated++;
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, lang + '.json'), JSON.stringify(data, null, 2), 'utf8');
  console.log(`${lang.toUpperCase()}: Applied ${autoTranslated} translations`);
}

console.log('\nDone!');
