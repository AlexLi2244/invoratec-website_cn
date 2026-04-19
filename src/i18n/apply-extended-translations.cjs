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

// Extended translations including all mockUI and about section strings
const translations = {
  // MockUI - Additional strings
  'Budget Used': {
    zh: '已用预算', ja: '使用済み予算', ko: '사용된 예산',
    de: 'Genutztes Budget', fr: 'Budget utilisé', es: 'Presupuesto utilizado',
    pt: 'Orçamento utilizado', ru: 'Использованный бюджет', ar: 'الميزانية المستخدمة'
  },
  'Upcoming Deadlines': {
    zh: '即将到期', ja: '今後の期限', ko: '다가오는 마감일',
    de: 'Bevorstehende Fristen', fr: 'Échéances à venir', es: 'Plazos próximos',
    pt: 'Prazos próximos', ru: 'Предстоящие сроки', ar: 'المواعيد النهائية القادمة'
  },
  'Overdue Tasks': {
    zh: '逾期任务', ja: '期限超過タスク', ko: '기한 초과 작업',
    de: 'Überfällige Aufgaben', fr: 'Tâches en retard', es: 'Tareas vencidas',
    pt: 'Tarefas atrasadas', ru: 'Просроченные задачи', ar: 'المهام المتأخرة'
  },
  'Team Members': {
    zh: '团队成员', ja: 'チームメンバー', ko: '팀 구성원',
    de: 'Teammitglieder', fr: 'Membres de l\'équipe', es: 'Miembros del equipo',
    pt: 'Membros da equipe', ru: 'Члены команды', ar: 'أعضاء الفريق'
  },
  'Active Projects': {
    zh: '活动项目', ja: 'アクティブプロジェクト', ko: '활성 프로젝트',
    de: 'Aktive Projekte', fr: 'Projets actifs', es: 'Proyectos activos',
    pt: 'Projetos ativos', ru: 'Активные проекты', ar: 'المشاريع النشطة'
  },
  'Last 7 Days': {
    zh: '最近7天', ja: '過去7日間', ko: '최근 7일',
    de: 'Letzte 7 Tage', fr: '7 derniers jours', es: 'Últimos 7 días',
    pt: 'Últimos 7 dias', ru: 'Последние 7 дней', ar: 'آخر 7 أيام'
  },
  'Last 30 Days': {
    zh: '最近30天', ja: '過去30日間', ko: '최근 30일',
    de: 'Letzte 30 Tage', fr: '30 derniers jours', es: 'Últimos 30 días',
    pt: 'Últimos 30 dias', ru: 'Последние 30 дней', ar: 'آخر 30 يومًا'
  },
  'Quick Actions': {
    zh: '快速操作', ja: 'クイックアクション', ko: '빠른 작업',
    de: 'Schnellaktionen', fr: 'Actions rapides', es: 'Acciones rápidas',
    pt: 'Ações rápidas', ru: 'Быстрые действия', ar: 'إجراءات سريعة'
  },
  'Create New': {
    zh: '新建', ja: '新規作成', ko: '새로 만들기',
    de: 'Neu erstellen', fr: 'Créer nouveau', es: 'Crear nuevo',
    pt: 'Criar novo', ru: 'Создать новый', ar: 'إنشاء جديد'
  },
  'Import Model': {
    zh: '导入模型', ja: 'モデルをインポート', ko: '모델 가져오기',
    de: 'Modell importieren', fr: 'Importer un modèle', es: 'Importar modelo',
    pt: 'Importar modelo', ru: 'Импортировать модель', ar: 'استيراد نموذج'
  },
  'Notifications': {
    zh: '通知', ja: '通知', ko: '알림',
    de: 'Benachrichtigungen', fr: 'Notifications', es: 'Notificaciones',
    pt: 'Notificações', ru: 'Уведомления', ar: 'الإشعارات'
  },
  'Mark as Read': {
    zh: '标记为已读', ja: '既読にする', ko: '읽음으로 표시',
    de: 'Als gelesen markieren', fr: 'Marquer comme lu', es: 'Marcar como leído',
    pt: 'Marcar como lido', ru: 'Отметить как прочитанное', ar: 'وضع علامة كمقروء'
  },
  'Clear All': {
    zh: '全部清除', ja: 'すべてクリア', ko: '모두 지우기',
    de: 'Alles löschen', fr: 'Tout effacer', es: 'Borrar todo',
    pt: 'Limpar tudo', ru: 'Очистить все', ar: 'مسح الكل'
  },
  'Profile': {
    zh: '个人资料', ja: 'プロフィール', ko: '프로필',
    de: 'Profil', fr: 'Profil', es: 'Perfil',
    pt: 'Perfil', ru: 'Профиль', ar: 'الملف الشخصي'
  },
  'Logout': {
    zh: '登出', ja: 'ログアウト', ko: '로그아웃',
    de: 'Abmelden', fr: 'Déconnexion', es: 'Cerrar sesión',
    pt: 'Sair', ru: 'Выйти', ar: 'تسجيل الخروج'
  },
  'Dark Mode': {
    zh: '暗色模式', ja: 'ダークモード', ko: '다크 모드',
    de: 'Dunkler Modus', fr: 'Mode sombre', es: 'Modo oscuro',
    pt: 'Modo escuro', ru: 'Темный режим', ar: 'الوضع الداكن'
  },
  'Light Mode': {
    zh: '亮色模式', ja: 'ライトモード', ko: '라이트 모드',
    de: 'Heller Modus', fr: 'Mode clair', es: 'Modo claro',
    pt: 'Modo claro', ru: 'Светлый режим', ar: 'الوضع الفاتح'
  },
  'Language': {
    zh: '语言', ja: '言語', ko: '언어',
    de: 'Sprache', fr: 'Langue', es: 'Idioma',
    pt: 'Idioma', ru: 'Язык', ar: 'اللغة'
  },
  'Preferences': {
    zh: '偏好设置', ja: '環境設定', ko: '환경 설정',
    de: 'Einstellungen', fr: 'Préférences', es: 'Preferencias',
    pt: 'Preferências', ru: 'Настройки', ar: 'التفضيلات'
  },
  'Account': {
    zh: '账户', ja: 'アカウント', ko: '계정',
    de: 'Konto', fr: 'Compte', es: 'Cuenta',
    pt: 'Conta', ru: 'Аккаунт', ar: 'الحساب'
  },
  'Security': {
    zh: '安全', ja: 'セキュリティ', ko: '보안',
    de: 'Sicherheit', fr: 'Sécurité', es: 'Seguridad',
    pt: 'Segurança', ru: 'Безопасность', ar: 'الأمان'
  },
  'Billing': {
    zh: '账单', ja: '請求', ko: '결제',
    de: 'Abrechnung', fr: 'Facturation', es: 'Facturación',
    pt: 'Faturamento', ru: 'Оплата', ar: 'الفواتير'
  },
  'Subscription': {
    zh: '订阅', ja: 'サブスクリプション', ko: '구독',
    de: 'Abonnement', fr: 'Abonnement', es: 'Suscripción',
    pt: 'Assinatura', ru: 'Подписка', ar: 'الاشتراك'
  },

  // About section phrases
  'The InvoratecAI Platform': {
    zh: 'InvoratecAI平台',
    ja: 'InvoratecAIプラットフォーム',
    ko: 'InvoratecAI 플랫폼',
    de: 'Die InvoratecAI-Plattform',
    fr: 'La plateforme InvoratecAI',
    es: 'La plataforma InvoratecAI',
    pt: 'A plataforma InvoratecAI',
    ru: 'Платформа InvoratecAI',
    ar: 'منصة InvoratecAI'
  },
  'A unified twin-platform solution that brings AI directly into your daily design and construction tools.': {
    zh: '统一的双平台解决方案，将AI直接集成到您的日常设计和施工工具中。',
    ja: '日常の設計・施工ツールにAIを直接統合した統合ツインプラットフォームソリューション。',
    ko: 'AI를 일상적인 설계 및 시공 도구에 직접 통합하는 통합 트윈 플랫폼 솔루션.',
    de: 'Eine einheitliche Twin-Plattform-Lösung, die KI direkt in Ihre täglichen Design- und Konstruktionswerkzeuge integriert.',
    fr: 'Une solution de plateforme jumelle unifiée qui intègre l\'IA directement dans vos outils de conception et de construction quotidiens.',
    es: 'Una solución de plataforma gemela unificada que integra la IA directamente en sus herramientas diarias de diseño y construcción.',
    pt: 'Uma solução de plataforma gêmea unificada que traz IA diretamente para suas ferramentas diárias de design e construção.',
    ru: 'Единое решение на базе двух платформ, которое интегрирует ИИ непосредственно в ваши ежедневные инструменты проектирования и строительства.',
    ar: 'حل منصة مزدوجة موحدة يجلب الذكاء الاصطناعي مباشرة إلى أدوات التصميم والبناء اليومية الخاصة بك.'
  },
  '70%+ Time Savings': {
    zh: '节省70%以上时间',
    ja: '70%以上の時間削減',
    ko: '70% 이상 시간 절약',
    de: 'Über 70% Zeitersparnis',
    fr: 'Plus de 70% de gain de temps',
    es: 'Más del 70% de ahorro de tiempo',
    pt: 'Mais de 70% de economia de tempo',
    ru: 'Более 70% экономии времени',
    ar: 'توفير أكثر من 70% من الوقت'
  },
  '50% Error Reduction': {
    zh: '减少50%错误',
    ja: '50%のエラー削減',
    ko: '50% 오류 감소',
    de: '50% Fehlerreduktion',
    fr: '50% de réduction des erreurs',
    es: '50% de reducción de errores',
    pt: '50% de redução de erros',
    ru: '50% снижение ошибок',
    ar: 'تقليل الأخطاء بنسبة 50%'
  },
  'Seamless Team Collaboration': {
    zh: '无缝团队协作',
    ja: 'シームレスなチームコラボレーション',
    ko: '원활한 팀 협업',
    de: 'Nahtlose Teamzusammenarbeit',
    fr: 'Collaboration d\'équipe transparente',
    es: 'Colaboración de equipo sin problemas',
    pt: 'Colaboração de equipe perfeita',
    ru: 'Бесшовная командная работа',
    ar: 'تعاون فريق سلس'
  },
  'BIM Expertise': {
    zh: 'BIM专业知识',
    ja: 'BIM専門知識',
    ko: 'BIM 전문 지식',
    de: 'BIM-Expertise',
    fr: 'Expertise BIM',
    es: 'Experiencia en BIM',
    pt: 'Expertise em BIM',
    ru: 'Экспертиза BIM',
    ar: 'خبرة BIM'
  },
  'Deep understanding of Revit workflows, MEP coordination, and construction documentation processes.': {
    zh: '深入了解Revit工作流程、MEP协调和施工文档流程。',
    ja: 'Revitワークフロー、MEP調整、施工文書プロセスの深い理解。',
    ko: 'Revit 워크플로우, MEP 조정 및 시공 문서 프로세스에 대한 깊은 이해.',
    de: 'Tiefes Verständnis von Revit-Workflows, MEP-Koordination und Bauabwicklungsprozessen.',
    fr: 'Compréhension approfondie des flux de travail Revit, de la coordination MEP et des processus de documentation de construction.',
    es: 'Profundo conocimiento de los flujos de trabajo de Revit, coordinación MEP y procesos de documentación de construcción.',
    pt: 'Profundo entendimento dos fluxos de trabalho do Revit, coordenação MEP e processos de documentação de construção.',
    ru: 'Глубокое понимание рабочих процессов Revit, координации MEP и процессов строительной документации.',
    ar: 'فهم عميق لسير عمل Revit وتنسيق MEP وعمليات توثيق البناء.'
  },
  '3D/4D BIM Modeling': {
    zh: '3D/4D BIM建模',
    ja: '3D/4D BIMモデリング',
    ko: '3D/4D BIM 모델링',
    de: '3D/4D BIM-Modellierung',
    fr: 'Modélisation BIM 3D/4D',
    es: 'Modelado BIM 3D/4D',
    pt: 'Modelagem BIM 3D/4D',
    ru: '3D/4D BIM-моделирование',
    ar: 'نمذجة BIM ثلاثية/رباعية الأبعاد'
  },
  'MEP Coordination & Clash Detection': {
    zh: 'MEP协调与碰撞检测',
    ja: 'MEP調整と衝突検出',
    ko: 'MEP 조정 및 충돌 감지',
    de: 'MEP-Koordination und Kollisionserkennung',
    fr: 'Coordination MEP et détection des conflits',
    es: 'Coordinación MEP y detección de conflictos',
    pt: 'Coordenação MEP e detecção de conflitos',
    ru: 'Координация MEP и обнаружение коллизий',
    ar: 'تنسيق MEP وكشف التعارضات'
  },
  'Construction Project Management': {
    zh: '施工项目管理',
    ja: '建設プロジェクト管理',
    ko: '건설 프로젝트 관리',
    de: 'Bauprojektmanagement',
    fr: 'Gestion de projet de construction',
    es: 'Gestión de proyectos de construcción',
    pt: 'Gerenciamento de projetos de construção',
    ru: 'Управление строительными проектами',
    ar: 'إدارة مشاريع البناء'
  },
  'AI Technology': {
    zh: 'AI技术',
    ja: 'AI技術',
    ko: 'AI 기술',
    de: 'KI-Technologie',
    fr: 'Technologie IA',
    es: 'Tecnología IA',
    pt: 'Tecnologia IA',
    ru: 'Технология ИИ',
    ar: 'تقنية الذكاء الاصطناعي'
  },
  'Advanced machine learning and natural language processing tailored for the construction industry.': {
    zh: '为建筑行业量身定制的先进机器学习和自然语言处理。',
    ja: '建設業界向けにカスタマイズされた高度な機械学習と自然言語処理。',
    ko: '건설 산업에 맞춤화된 고급 머신 러닝 및 자연어 처리.',
    de: 'Fortgeschrittenes maschinelles Lernen und natürliche Sprachverarbeitung für die Bauindustrie.',
    fr: 'Apprentissage automatique avancé et traitement du langage naturel adaptés à l\'industrie de la construction.',
    es: 'Aprendizaje automático avanzado y procesamiento de lenguaje natural adaptados para la industria de la construcción.',
    pt: 'Aprendizado de máquina avançado e processamento de linguagem natural adaptados para a indústria da construção.',
    ru: 'Передовое машинное обучение и обработка естественного языка, адаптированные для строительной отрасли.',
    ar: 'التعلم الآلي المتقدم ومعالجة اللغة الطبيعية المصممة خصيصًا لصناعة البناء.'
  },
  'Intelligent Workflow Automation': {
    zh: '智能工作流自动化',
    ja: 'インテリジェントワークフロー自動化',
    ko: '지능형 워크플로우 자동화',
    de: 'Intelligente Workflow-Automatisierung',
    fr: 'Automatisation intelligente des flux de travail',
    es: 'Automatización inteligente de flujos de trabajo',
    pt: 'Automação inteligente de fluxo de trabalho',
    ru: 'Интеллектуальная автоматизация рабочих процессов',
    ar: 'أتمتة سير العمل الذكية'
  },
  'Predictive Analytics & Insights': {
    zh: '预测分析与洞察',
    ja: '予測分析とインサイト',
    ko: '예측 분석 및 인사이트',
    de: 'Prädiktive Analytik & Erkenntnisse',
    fr: 'Analytique prédictive et perspectives',
    es: 'Análisis predictivo y perspectivas',
    pt: 'Análise preditiva e insights',
    ru: 'Прогнозная аналитика и инсайты',
    ar: 'التحليلات التنبؤية والرؤى'
  },

  // ServiceBIM section
  'Our BIM Services': {
    zh: '我们的BIM服务',
    ja: '私たちのBIMサービス',
    ko: '우리의 BIM 서비스',
    de: 'Unsere BIM-Dienste',
    fr: 'Nos services BIM',
    es: 'Nuestros servicios BIM',
    pt: 'Nossos serviços BIM',
    ru: 'Наши BIM-услуги',
    ar: 'خدمات BIM لدينا'
  },
  'Comprehensive BIM consulting services from strategy development to production modeling': {
    zh: '从战略开发到生产建模的全面BIM咨询服务',
    ja: '戦略策定から生産モデリングまでの包括的なBIMコンサルティングサービス',
    ko: '전략 개발부터 생산 모델링까지 포괄적인 BIM 컨설팅 서비스',
    de: 'Umfassende BIM-Beratungsdienste von der Strategieentwicklung bis zur Produktionsmodellierung',
    fr: 'Services de conseil BIM complets, du développement de stratégie à la modélisation de production',
    es: 'Servicios integrales de consultoría BIM desde el desarrollo de estrategias hasta el modelado de producción',
    pt: 'Serviços abrangentes de consultoria BIM desde o desenvolvimento de estratégia até a modelagem de produção',
    ru: 'Комплексные BIM-консалтинговые услуги от разработки стратегии до производственного моделирования',
    ar: 'خدمات استشارات BIM شاملة من تطوير الاستراتيجية إلى النمذجة الإنتاجية'
  },
  'BIM Strategy': {
    zh: 'BIM战略',
    ja: 'BIM戦略',
    ko: 'BIM 전략',
    de: 'BIM-Strategie',
    fr: 'Stratégie BIM',
    es: 'Estrategia BIM',
    pt: 'Estratégia BIM',
    ru: 'BIM-стратегия',
    ar: 'استراتيجية BIM'
  },
  'Develop comprehensive BIM execution plans tailored to your organization\'s needs and project requirements': {
    zh: '制定适合您组织需求和项目要求的全面BIM执行计划',
    ja: '組織のニーズとプロジェクト要件に合わせた包括的なBIM実行計画を策定',
    ko: '조직의 요구 사항 및 프로젝트 요구 사항에 맞춘 포괄적인 BIM 실행 계획 개발',
    de: 'Entwicklung umfassender BIM-Ausführungspläne, die auf die Bedürfnisse und Projektanforderungen Ihrer Organisation zugeschnitten sind',
    fr: 'Élaboration de plans d\'exécution BIM complets adaptés aux besoins de votre organisation et aux exigences du projet',
    es: 'Desarrollo de planes de ejecución BIM integrales adaptados a las necesidades de su organización y requisitos del proyecto',
    pt: 'Desenvolvimento de planos de execução BIM abrangentes adaptados às necessidades da sua organização e requisitos do projeto',
    ru: 'Разработка комплексных планов выполнения BIM, адаптированных к потребностям вашей организации и требованиям проекта',
    ar: 'تطوير خطط تنفيذ BIM شاملة مصممة خصيصًا لاحتياجات مؤسستك ومتطلبات المشروع'
  },
  'BIM Modeling': {
    zh: 'BIM建模',
    ja: 'BIMモデリング',
    ko: 'BIM 모델링',
    de: 'BIM-Modellierung',
    fr: 'Modélisation BIM',
    es: 'Modelado BIM',
    pt: 'Modelagem BIM',
    ru: 'BIM-моделирование',
    ar: 'نمذجة BIM'
  },
  'Professional 3D modeling services for architectural, structural, and MEP disciplines': {
    zh: '为建筑、结构和MEP专业提供专业3D建模服务',
    ja: '建築、構造、MEP分野向けのプロフェッショナル3Dモデリングサービス',
    ko: '건축, 구조 및 MEP 분야를 위한 전문 3D 모델링 서비스',
    de: 'Professionelle 3D-Modellierungsdienstleistungen für Architektur-, Struktur- und MEP-Disziplinen',
    fr: 'Services de modélisation 3D professionnels pour les disciplines architecturales, structurelles et MEP',
    es: 'Servicios profesionales de modelado 3D para disciplinas arquitectónicas, estructurales y MEP',
    pt: 'Serviços profissionais de modelagem 3D para disciplinas arquitetônicas, estruturais e MEP',
    ru: 'Профессиональные услуги 3D-моделирования для архитектурных, конструктивных и MEP-дисциплин',
    ar: 'خدمات نمذجة ثلاثية الأبعاد احترافية للتخصصات المعمارية والهيكلية وMEP'
  },
  'Multi-discipline coordination and clash detection services to prevent costly on-site conflicts': {
    zh: '多专业协调和碰撞检测服务，防止现场昂贵的冲突',
    ja: '高コストな現場の競合を防ぐための多分野調整と衝突検出サービス',
    ko: '비용이 많이 드는 현장 충돌을 방지하기 위한 다분야 조정 및 충돌 감지 서비스',
    de: 'Multidisziplinäre Koordinations- und Kollisionserkennungsdienste zur Vermeidung kostspieliger Konflikte vor Ort',
    fr: 'Services de coordination multidisciplinaire et de détection des conflits pour éviter les conflits coûteux sur site',
    es: 'Servicios de coordinación multidisciplinaria y detección de conflictos para prevenir conflictos costosos en el sitio',
    pt: 'Serviços de coordenação multidisciplinar e detecção de conflitos para evitar conflitos caros no local',
    ru: 'Многодисциплинарная координация и услуги обнаружения коллизий для предотвращения дорогостоящих конфликтов на объекте',
    ar: 'خدمات التنسيق متعدد التخصصات وكشف التعارضات لمنع النزاعات المكلفة في الموقع'
  },
  'Standards & Templates': {
    zh: '标准与模板',
    ja: '標準とテンプレート',
    ko: '표준 및 템플릿',
    de: 'Standards & Vorlagen',
    fr: 'Normes et modèles',
    es: 'Estándares y plantillas',
    pt: 'Padrões e modelos',
    ru: 'Стандарты и шаблоны',
    ar: 'المعايير والقوالب'
  },
  'Custom Revit templates, families, and BIM standards development for consistent project delivery': {
    zh: '定制Revit模板、族和BIM标准开发，实现一致的项目交付',
    ja: '一貫したプロジェクト提供のためのカスタムRevitテンプレート、ファミリ、BIM標準の開発',
    ko: '일관된 프로젝트 제공을 위한 맞춤형 Revit 템플릿, 패밀리 및 BIM 표준 개발',
    de: 'Entwicklung kundenspezifischer Revit-Vorlagen, Familien und BIM-Standards für konsistente Projektabwicklung',
    fr: 'Développement de modèles Revit personnalisés, de familles et de normes BIM pour une livraison de projet cohérente',
    es: 'Desarrollo de plantillas Revit personalizadas, familias y estándares BIM para una entrega de proyectos consistente',
    pt: 'Desenvolvimento de modelos Revit personalizados, famílias e padrões BIM para entrega consistente de projetos',
    ru: 'Разработка пользовательских шаблонов Revit, семейств и BIM-стандартов для последовательной реализации проектов',
    ar: 'تطوير قوالب Revit المخصصة والعائلات ومعايير BIM لتسليم المشروع المتسق'
  },
  'Global Modeling Resources': {
    zh: '全球建模资源',
    ja: 'グローバルモデリングリソース',
    ko: '글로벌 모델링 리소스',
    de: 'Globale Modellierungsressourcen',
    fr: 'Ressources de modélisation mondiales',
    es: 'Recursos de modelado global',
    pt: 'Recursos de modelagem global',
    ru: 'Глобальные ресурсы моделирования',
    ar: 'موارد النمذجة العالمية'
  },
  'Access experienced BIM modelers worldwide to scale your production capacity on demand': {
    zh: '访问全球经验丰富的BIM建模师，按需扩展您的生产能力',
    ja: '世界中の経験豊富なBIMモデラーにアクセスし、オンデマンドで生産能力を拡大',
    ko: '전 세계의 숙련된 BIM 모델러에게 액세스하여 필요에 따라 생산 용량 확장',
    de: 'Zugriff auf erfahrene BIM-Modellierer weltweit, um Ihre Produktionskapazität bei Bedarf zu skalieren',
    fr: 'Accédez à des modélisateurs BIM expérimentés dans le monde entier pour augmenter votre capacité de production à la demande',
    es: 'Acceda a modeladores BIM experimentados en todo el mundo para escalar su capacidad de producción según demanda',
    pt: 'Acesse modeladores BIM experientes em todo o mundo para escalar sua capacidade de produção sob demanda',
    ru: 'Получите доступ к опытным BIM-моделировщикам по всему миру для масштабирования производственных мощностей по требованию',
    ar: 'الوصول إلى مصممي BIM ذوي الخبرة في جميع أنحاء العالم لتوسيع قدرتك الإنتاجية حسب الطلب'
  },
  'Global Network': {
    zh: '全球网络',
    ja: 'グローバルネットワーク',
    ko: '글로벌 네트워크',
    de: 'Globales Netzwerk',
    fr: 'Réseau mondial',
    es: 'Red global',
    pt: 'Rede global',
    ru: 'Глобальная сеть',
    ar: 'الشبكة العالمية'
  },
  'Modelers across multiple time zones for 24/7 production': {
    zh: '跨多个时区的建模师，实现全天候生产',
    ja: '24時間365日の生産のための複数のタイムゾーンにわたるモデラー',
    ko: '연중무휴 생산을 위한 여러 시간대의 모델러',
    de: 'Modellierer in mehreren Zeitzonen für 24/7-Produktion',
    fr: 'Modélisateurs dans plusieurs fuseaux horaires pour une production 24h/24 et 7j/7',
    es: 'Modeladores en múltiples zonas horarias para producción 24/7',
    pt: 'Modeladores em vários fusos horários para produção 24/7',
    ru: 'Моделировщики в нескольких часовых поясах для круглосуточного производства',
    ar: 'مصممون في مناطق زمنية متعددة للإنتاج على مدار الساعة'
  },
  'Experienced Team': {
    zh: '经验丰富的团队',
    ja: '経験豊富なチーム',
    ko: '경험 많은 팀',
    de: 'Erfahrenes Team',
    fr: 'Équipe expérimentée',
    es: 'Equipo experimentado',
    pt: 'Equipe experiente',
    ru: 'Опытная команда',
    ar: 'فريق ذو خبرة'
  },
  'Certified professionals with 5+ years average experience': {
    zh: '拥有平均5年以上经验的认证专业人员',
    ja: '平均5年以上の経験を持つ認定プロフェッショナル',
    ko: '평균 5년 이상의 경험을 가진 인증 전문가',
    de: 'Zertifizierte Fachleute mit durchschnittlich über 5 Jahren Erfahrung',
    fr: 'Professionnels certifiés avec plus de 5 ans d\'expérience en moyenne',
    es: 'Profesionales certificados con más de 5 años de experiencia promedio',
    pt: 'Profissionais certificados com mais de 5 anos de experiência média',
    ru: 'Сертифицированные специалисты со средним опытом работы более 5 лет',
    ar: 'محترفون معتمدون بخبرة متوسطة تزيد عن 5 سنوات'
  },
  'Scalable Capacity': {
    zh: '可扩展能力',
    ja: 'スケーラブルなキャパシティ',
    ko: '확장 가능한 용량',
    de: 'Skalierbare Kapazität',
    fr: 'Capacité évolutive',
    es: 'Capacidad escalable',
    pt: 'Capacidade escalável',
    ru: 'Масштабируемая мощность',
    ar: 'قدرة قابلة للتوسع'
  },
  'Scale up or down based on project demands': {
    zh: '根据项目需求扩大或缩小规模',
    ja: 'プロジェクトの需要に基づいてスケールアップまたはダウン',
    ko: '프로젝트 요구 사항에 따라 확장 또는 축소',
    de: 'Je nach Projektanforderungen vergrößern oder verkleinern',
    fr: 'Augmenter ou réduire en fonction des besoins du projet',
    es: 'Escale hacia arriba o hacia abajo según las demandas del proyecto',
    pt: 'Amplie ou reduza com base nas demandas do projeto',
    ru: 'Масштабируйте вверх или вниз в зависимости от требований проекта',
    ar: 'التوسع أو التقليص بناءً على متطلبات المشروع'
  },
  'Quality Assured': {
    zh: '质量保证',
    ja: '品質保証',
    ko: '품질 보증',
    de: 'Qualitätsgesichert',
    fr: 'Qualité assurée',
    es: 'Calidad asegurada',
    pt: 'Qualidade garantida',
    ru: 'Гарантия качества',
    ar: 'ضمان الجودة'
  },
  'Rigorous QA/QC processes for consistent output': {
    zh: '严格的QA/QC流程，确保一致的输出',
    ja: '一貫した出力のための厳格なQA/QCプロセス',
    ko: '일관된 출력을 위한 엄격한 QA/QC 프로세스',
    de: 'Strenge QA/QC-Prozesse für konsistente Ausgabe',
    fr: 'Processus QA/QC rigoureux pour une production cohérente',
    es: 'Procesos rigurosos de QA/QC para salida consistente',
    pt: 'Processos rigorosos de QA/QC para saída consistente',
    ru: 'Строгие процессы QA/QC для стабильного результата',
    ar: 'عمليات صارمة لضمان الجودة ومراقبة الجودة للإنتاج المتسق'
  },
  'Expert Modelers': {
    zh: '专家建模师',
    ja: 'エキスパートモデラー',
    ko: '전문 모델러',
    de: 'Experten-Modellierer',
    fr: 'Modélisateurs experts',
    es: 'Modeladores expertos',
    pt: 'Modeladores especialistas',
    ru: 'Эксперты-моделировщики',
    ar: 'مصممون خبراء'
  },
  'Global Coverage': {
    zh: '全球覆盖',
    ja: 'グローバルカバレッジ',
    ko: '글로벌 커버리지',
    de: 'Globale Abdeckung',
    fr: 'Couverture mondiale',
    es: 'Cobertura global',
    pt: 'Cobertura global',
    ru: 'Глобальное покрытие',
    ar: 'تغطية عالمية'
  },
  'A proven methodology for successful BIM implementation': {
    zh: '成功实施BIM的成熟方法论',
    ja: 'BIM実装成功のための実証済みの方法論',
    ko: '성공적인 BIM 구현을 위한 검증된 방법론',
    de: 'Eine bewährte Methodik für erfolgreiche BIM-Implementierung',
    fr: 'Une méthodologie éprouvée pour une mise en œuvre BIM réussie',
    es: 'Una metodología probada para una implementación BIM exitosa',
    pt: 'Uma metodologia comprovada para implementação BIM bem-sucedida',
    ru: 'Проверенная методология успешного внедрения BIM',
    ar: 'منهجية مثبتة للتنفيذ الناجح لـ BIM'
  },
  'Assess': {
    zh: '评估',
    ja: '評価',
    ko: '평가',
    de: 'Bewerten',
    fr: 'Évaluer',
    es: 'Evaluar',
    pt: 'Avaliar',
    ru: 'Оценить',
    ar: 'تقييم'
  },
  'Evaluate your current BIM maturity and identify improvement opportunities': {
    zh: '评估您当前的BIM成熟度并识别改进机会',
    ja: '現在のBIM成熟度を評価し、改善の機会を特定',
    ko: '현재 BIM 성숙도를 평가하고 개선 기회 식별',
    de: 'Bewerten Sie Ihre aktuelle BIM-Reife und identifizieren Sie Verbesserungsmöglichkeiten',
    fr: 'Évaluez votre maturité BIM actuelle et identifiez les opportunités d\'amélioration',
    es: 'Evalúe su madurez BIM actual e identifique oportunidades de mejora',
    pt: 'Avalie sua maturidade BIM atual e identifique oportunidades de melhoria',
    ru: 'Оцените текущую зрелость BIM и определите возможности для улучшения',
    ar: 'قيم نضج BIM الحالي وحدد فرص التحسين'
  },
  'Develop a customized BIM implementation roadmap aligned with your goals': {
    zh: '制定与您目标一致的定制BIM实施路线图',
    ja: '目標に合わせたカスタマイズされたBIM実装ロードマップを開発',
    ko: '목표에 맞춘 맞춤형 BIM 구현 로드맵 개발',
    de: 'Entwickeln Sie eine maßgeschneiderte BIM-Implementierungs-Roadmap, die auf Ihre Ziele abgestimmt ist',
    fr: 'Élaborez une feuille de route de mise en œuvre BIM personnalisée alignée sur vos objectifs',
    es: 'Desarrolle una hoja de ruta de implementación BIM personalizada alineada con sus objetivos',
    pt: 'Desenvolva um roteiro de implementação BIM personalizado alinhado com seus objetivos',
    ru: 'Разработайте индивидуальную дорожную карту внедрения BIM в соответствии с вашими целями',
    ar: 'قم بتطوير خارطة طريق مخصصة لتنفيذ BIM تتماشى مع أهدافك'
  },
  'Execute': {
    zh: '执行',
    ja: '実行',
    ko: '실행',
    de: 'Ausführen',
    fr: 'Exécuter',
    es: 'Ejecutar',
    pt: 'Executar',
    ru: 'Выполнить',
    ar: 'تنفيذ'
  },
  'Deploy resources and implement solutions with hands-on support': {
    zh: '部署资源并通过实践支持实施解决方案',
    ja: 'リソースを展開し、ハンズオンサポートでソリューションを実装',
    ko: '리소스를 배포하고 실습 지원으로 솔루션 구현',
    de: 'Ressourcen einsetzen und Lösungen mit praktischer Unterstützung implementieren',
    fr: 'Déployer des ressources et mettre en œuvre des solutions avec un support pratique',
    es: 'Despliegue recursos e implemente soluciones con soporte práctico',
    pt: 'Implante recursos e implemente soluções com suporte prático',
    ru: 'Разверните ресурсы и внедрите решения с практической поддержкой',
    ar: 'نشر الموارد وتنفيذ الحلول مع الدعم العملي'
  },
  'Optimize': {
    zh: '优化',
    ja: '最適化',
    ko: '최적화',
    de: 'Optimieren',
    fr: 'Optimiser',
    es: 'Optimizar',
    pt: 'Otimizar',
    ru: 'Оптимизировать',
    ar: 'تحسين'
  },
  'Continuously improve processes and measure ROI': {
    zh: '持续改进流程并衡量投资回报率',
    ja: 'プロセスを継続的に改善し、ROIを測定',
    ko: '프로세스를 지속적으로 개선하고 ROI 측정',
    de: 'Prozesse kontinuierlich verbessern und ROI messen',
    fr: 'Améliorer continuellement les processus et mesurer le ROI',
    es: 'Mejore continuamente los procesos y mida el ROI',
    pt: 'Melhore continuamente os processos e meça o ROI',
    ru: 'Постоянно улучшайте процессы и измеряйте ROI',
    ar: 'تحسين العمليات باستمرار وقياس عائد الاستثمار'
  },
  'Ready to Transform Your BIM Workflow?': {
    zh: '准备好改变您的BIM工作流程了吗？',
    ja: 'BIMワークフローを変革する準備はできていますか？',
    ko: 'BIM 워크플로우를 변환할 준비가 되셨나요?',
    de: 'Bereit, Ihren BIM-Workflow zu transformieren?',
    fr: 'Prêt à transformer votre flux de travail BIM ?',
    es: '¿Listo para transformar su flujo de trabajo BIM?',
    pt: 'Pronto para transformar seu fluxo de trabalho BIM?',
    ru: 'Готовы преобразовать свой BIM-рабочий процесс?',
    ar: 'هل أنت مستعد لتحويل سير عمل BIM الخاص بك؟'
  },

  // ServiceSupport section
  'Support Plans': {
    zh: '支持计划',
    ja: 'サポートプラン',
    ko: '지원 계획',
    de: 'Support-Pläne',
    fr: 'Plans de support',
    es: 'Planes de soporte',
    pt: 'Planos de suporte',
    ru: 'Планы поддержки',
    ar: 'خطط الدعم'
  },
  'Choose the support level that matches your organization\'s needs': {
    zh: '选择符合您组织需求的支持级别',
    ja: '組織のニーズに合ったサポートレベルを選択',
    ko: '조직의 요구 사항에 맞는 지원 수준 선택',
    de: 'Wählen Sie das Support-Level, das den Anforderungen Ihrer Organisation entspricht',
    fr: 'Choisissez le niveau de support qui correspond aux besoins de votre organisation',
    es: 'Elija el nivel de soporte que coincida con las necesidades de su organización',
    pt: 'Escolha o nível de suporte que corresponde às necessidades da sua organização',
    ru: 'Выберите уровень поддержки, который соответствует потребностям вашей организации',
    ar: 'اختر مستوى الدعم الذي يتناسب مع احتياجات مؤسستك'
  },
  'Essential support for small teams getting started': {
    zh: '为入门小型团队提供基本支持',
    ja: '始めたばかりの小規模チーム向けの基本的なサポート',
    ko: '시작하는 소규모 팀을 위한 필수 지원',
    de: 'Wesentliche Unterstützung für kleine Teams, die gerade anfangen',
    fr: 'Support essentiel pour les petites équipes qui démarrent',
    es: 'Soporte esencial para pequeños equipos que comienzan',
    pt: 'Suporte essencial para pequenas equipes que estão começando',
    ru: 'Основная поддержка для небольших команд, которые только начинают',
    ar: 'دعم أساسي للفرق الصغيرة التي تبدأ'
  },
  'Priority support for growing teams': {
    zh: '为成长型团队提供优先支持',
    ja: '成長中のチーム向けの優先サポート',
    ko: '성장하는 팀을 위한 우선 지원',
    de: 'Prioritäts-Support für wachsende Teams',
    fr: 'Support prioritaire pour les équipes en croissance',
    es: 'Soporte prioritario para equipos en crecimiento',
    pt: 'Suporte prioritário para equipes em crescimento',
    ru: 'Приоритетная поддержка для растущих команд',
    ar: 'دعم ذو أولوية للفرق المتنامية'
  },
  'Dedicated support for large organizations': {
    zh: '为大型组织提供专属支持',
    ja: '大規模組織向けの専任サポート',
    ko: '대규모 조직을 위한 전담 지원',
    de: 'Dedizierter Support für große Organisationen',
    fr: 'Support dédié pour les grandes organisations',
    es: 'Soporte dedicado para grandes organizaciones',
    pt: 'Suporte dedicado para grandes organizações',
    ru: 'Выделенная поддержка для крупных организаций',
    ar: 'دعم مخصص للمؤسسات الكبيرة'
  },
  '24/7 Global Support': {
    zh: '全天候全球支持',
    ja: '24時間365日のグローバルサポート',
    ko: '연중무휴 글로벌 지원',
    de: '24/7 Globaler Support',
    fr: 'Support mondial 24h/24 et 7j/7',
    es: 'Soporte global 24/7',
    pt: 'Suporte global 24/7',
    ru: 'Глобальная поддержка 24/7',
    ar: 'دعم عالمي على مدار الساعة'
  },
  'Our support team spans multiple time zones to ensure you always have access to expert help when you need it': {
    zh: '我们的支持团队遍布多个时区，确保您在需要时始终能够获得专家帮助',
    ja: 'サポートチームは複数のタイムゾーンにまたがっており、必要なときにいつでも専門家のヘルプにアクセスできます',
    ko: '지원 팀은 여러 시간대에 걸쳐 있어 필요할 때 언제든지 전문가 도움을 받을 수 있습니다',
    de: 'Unser Support-Team erstreckt sich über mehrere Zeitzonen, um sicherzustellen, dass Sie immer Zugang zu professioneller Hilfe haben, wenn Sie diese benötigen',
    fr: 'Notre équipe de support s\'étend sur plusieurs fuseaux horaires pour vous garantir un accès permanent à l\'aide d\'experts quand vous en avez besoin',
    es: 'Nuestro equipo de soporte abarca múltiples zonas horarias para garantizar que siempre tenga acceso a ayuda experta cuando la necesite',
    pt: 'Nossa equipe de suporte abrange vários fusos horários para garantir que você sempre tenha acesso à ajuda de especialistas quando precisar',
    ru: 'Наша команда поддержки работает в нескольких часовых поясах, чтобы вы всегда имели доступ к экспертной помощи, когда она вам нужна',
    ar: 'يمتد فريق الدعم لدينا عبر مناطق زمنية متعددة لضمان حصولك دائمًا على المساعدة الخبيرة عندما تحتاج إليها'
  },
  'Always Available': {
    zh: '随时可用',
    ja: '常に利用可能',
    ko: '항상 이용 가능',
    de: 'Immer verfügbar',
    fr: 'Toujours disponible',
    es: 'Siempre disponible',
    pt: 'Sempre disponível',
    ru: 'Всегда доступно',
    ar: 'متاح دائمًا'
  },
  'Priority Response': {
    zh: '优先响应',
    ja: '優先対応',
    ko: '우선 응답',
    de: 'Prioritäts-Antwort',
    fr: 'Réponse prioritaire',
    es: 'Respuesta prioritaria',
    pt: 'Resposta prioritária',
    ru: 'Приоритетный ответ',
    ar: 'استجابة ذات أولوية'
  },
  'Critical issues addressed within 1 hour': {
    zh: '1小时内解决关键问题',
    ja: '重要な問題は1時間以内に対応',
    ko: '중요한 문제는 1시간 이내에 해결',
    de: 'Kritische Probleme innerhalb von 1 Stunde behoben',
    fr: 'Problèmes critiques traités en moins d\'1 heure',
    es: 'Problemas críticos abordados en 1 hora',
    pt: 'Problemas críticos resolvidos em 1 hora',
    ru: 'Критические проблемы решаются в течение 1 часа',
    ar: 'معالجة المشكلات الحرجة في غضون ساعة واحدة'
  },
  'Custom Integrations': {
    zh: '定制集成',
    ja: 'カスタム統合',
    ko: '맞춤형 통합',
    de: 'Benutzerdefinierte Integrationen',
    fr: 'Intégrations personnalisées',
    es: 'Integraciones personalizadas',
    pt: 'Integrações personalizadas',
    ru: 'Пользовательские интеграции',
    ar: 'التكاملات المخصصة'
  },
  'Help with API and system integrations': {
    zh: 'API和系统集成帮助',
    ja: 'APIとシステム統合のサポート',
    ko: 'API 및 시스템 통합 지원',
    de: 'Hilfe bei API- und Systemintegrationen',
    fr: 'Aide pour les intégrations d\'API et de système',
    es: 'Ayuda con integraciones de API y sistemas',
    pt: 'Ajuda com integrações de API e sistema',
    ru: 'Помощь с интеграциями API и системы',
    ar: 'مساعدة في تكاملات واجهة برمجة التطبيقات والنظام'
  },
  'Success Manager': {
    zh: '成功经理',
    ja: 'サクセスマネージャー',
    ko: '성공 관리자',
    de: 'Erfolgsmanager',
    fr: 'Gestionnaire de succès',
    es: 'Gerente de éxito',
    pt: 'Gerente de sucesso',
    ru: 'Менеджер по успеху',
    ar: 'مدير النجاح'
  },
  'Dedicated point of contact for your account': {
    zh: '您账户的专属联系人',
    ja: 'アカウント専任の連絡窓口',
    ko: '계정 전담 연락처',
    de: 'Dedizierter Ansprechpartner für Ihr Konto',
    fr: 'Point de contact dédié pour votre compte',
    es: 'Punto de contacto dedicado para su cuenta',
    pt: 'Ponto de contato dedicado para sua conta',
    ru: 'Выделенная точка контакта для вашего аккаунта',
    ar: 'نقطة اتصال مخصصة لحسابك'
  },
  'Ongoing Training': {
    zh: '持续培训',
    ja: '継続的なトレーニング',
    ko: '지속적인 교육',
    de: 'Laufende Schulung',
    fr: 'Formation continue',
    es: 'Capacitación continua',
    pt: 'Treinamento contínuo',
    ru: 'Постоянное обучение',
    ar: 'التدريب المستمر'
  },
  'Regular training sessions for new features': {
    zh: '新功能的定期培训课程',
    ja: '新機能の定期的なトレーニングセッション',
    ko: '새로운 기능에 대한 정기 교육 세션',
    de: 'Regelmäßige Schulungen für neue Funktionen',
    fr: 'Sessions de formation régulières pour les nouvelles fonctionnalités',
    es: 'Sesiones de capacitación regulares para nuevas funciones',
    pt: 'Sessões regulares de treinamento para novos recursos',
    ru: 'Регулярные обучающие сессии для новых функций',
    ar: 'جلسات تدريب منتظمة على الميزات الجديدة'
  },
  'Get in Touch': {
    zh: '联系我们',
    ja: 'お問い合わせ',
    ko: '연락하기',
    de: 'Kontakt aufnehmen',
    fr: 'Nous contacter',
    es: 'Ponerse en contacto',
    pt: 'Entre em contato',
    ru: 'Связаться',
    ar: 'ابق على تواصل'
  },
  'Email Support': {
    zh: '电子邮件支持',
    ja: 'Eメールサポート',
    ko: '이메일 지원',
    de: 'E-Mail-Support',
    fr: 'Support par e-mail',
    es: 'Soporte por correo electrónico',
    pt: 'Suporte por e-mail',
    ru: 'Поддержка по электронной почте',
    ar: 'دعم البريد الإلكتروني'
  },
  'Send us your questions anytime': {
    zh: '随时向我们发送您的问题',
    ja: 'いつでも質問をお送りください',
    ko: '언제든지 질문을 보내주세요',
    de: 'Senden Sie uns jederzeit Ihre Fragen',
    fr: 'Envoyez-nous vos questions à tout moment',
    es: 'Envíenos sus preguntas en cualquier momento',
    pt: 'Envie-nos suas perguntas a qualquer momento',
    ru: 'Отправляйте нам свои вопросы в любое время',
    ar: 'أرسل لنا أسئلتك في أي وقت'
  },
  'Live Chat': {
    zh: '在线聊天',
    ja: 'ライブチャット',
    ko: '실시간 채팅',
    de: 'Live-Chat',
    fr: 'Chat en direct',
    es: 'Chat en vivo',
    pt: 'Chat ao vivo',
    ru: 'Онлайн-чат',
    ar: 'الدردشة المباشرة'
  },
  'Chat with our team in real-time': {
    zh: '与我们的团队实时聊天',
    ja: 'チームとリアルタイムでチャット',
    ko: '팀과 실시간으로 채팅',
    de: 'Chatten Sie in Echtzeit mit unserem Team',
    fr: 'Discutez avec notre équipe en temps réel',
    es: 'Chatee con nuestro equipo en tiempo real',
    pt: 'Converse com nossa equipe em tempo real',
    ru: 'Общайтесь с нашей командой в режиме реального времени',
    ar: 'دردش مع فريقنا في الوقت الفعلي'
  },
  'Available in Web App': {
    zh: '在Web应用中可用',
    ja: 'Webアプリで利用可能',
    ko: '웹 앱에서 사용 가능',
    de: 'Verfügbar in der Web-App',
    fr: 'Disponible dans l\'application Web',
    es: 'Disponible en la aplicación web',
    pt: 'Disponível no aplicativo Web',
    ru: 'Доступно в веб-приложении',
    ar: 'متاح في تطبيق الويب'
  },
  'Phone Support': {
    zh: '电话支持',
    ja: '電話サポート',
    ko: '전화 지원',
    de: 'Telefon-Support',
    fr: 'Support téléphonique',
    es: 'Soporte telefónico',
    pt: 'Suporte telefônico',
    ru: 'Телефонная поддержка',
    ar: 'الدعم الهاتفي'
  },
  'Enterprise plans include phone support': {
    zh: '企业计划包括电话支持',
    ja: 'エンタープライズプランには電話サポートが含まれます',
    ko: '엔터프라이즈 플랜에는 전화 지원이 포함됩니다',
    de: 'Enterprise-Pläne beinhalten Telefonsupport',
    fr: 'Les plans entreprise incluent le support téléphonique',
    es: 'Los planes empresariales incluyen soporte telefónico',
    pt: 'Planos empresariais incluem suporte telefônico',
    ru: 'Корпоративные планы включают телефонную поддержку',
    ar: 'تتضمن خطط المؤسسات الدعم الهاتفي'
  },
  'Schedule a Call': {
    zh: '安排通话',
    ja: '通話をスケジュール',
    ko: '전화 일정 잡기',
    de: 'Anruf planen',
    fr: 'Planifier un appel',
    es: 'Programar una llamada',
    pt: 'Agendar uma chamada',
    ru: 'Запланировать звонок',
    ar: 'جدولة مكالمة'
  },
  'Self-Service Resources': {
    zh: '自助服务资源',
    ja: 'セルフサービスリソース',
    ko: '셀프 서비스 리소스',
    de: 'Self-Service-Ressourcen',
    fr: 'Ressources en libre-service',
    es: 'Recursos de autoservicio',
    pt: 'Recursos de autoatendimento',
    ru: 'Ресурсы самообслуживания',
    ar: 'موارد الخدمة الذاتية'
  },
  'Access comprehensive documentation, tutorials, and FAQs to find answers quickly': {
    zh: '访问全面的文档、教程和常见问题解答，快速找到答案',
    ja: '包括的なドキュメント、チュートリアル、FAQにアクセスして、素早く答えを見つけましょう',
    ko: '포괄적인 문서, 튜토리얼 및 FAQ에 액세스하여 빠르게 답변 찾기',
    de: 'Greifen Sie auf umfassende Dokumentation, Tutorials und FAQs zu, um schnell Antworten zu finden',
    fr: 'Accédez à une documentation complète, à des tutoriels et à des FAQ pour trouver rapidement des réponses',
    es: 'Acceda a documentación completa, tutoriales y preguntas frecuentes para encontrar respuestas rápidamente',
    pt: 'Acesse documentação abrangente, tutoriais e FAQs para encontrar respostas rapidamente',
    ru: 'Получите доступ к исчерпывающей документации, учебникам и часто задаваемым вопросам для быстрого поиска ответов',
    ar: 'الوصول إلى الوثائق الشاملة والبرامج التعليمية والأسئلة الشائعة للعثور على الإجابات بسرعة'
  },
  'User Guides': {
    zh: '用户指南',
    ja: 'ユーザーガイド',
    ko: '사용자 가이드',
    de: 'Benutzerhandbücher',
    fr: 'Guides d\'utilisation',
    es: 'Guías de usuario',
    pt: 'Guias do usuário',
    ru: 'Руководства пользователя',
    ar: 'أدلة المستخدم'
  },
  'Step-by-step guides for all features': {
    zh: '所有功能的分步指南',
    ja: 'すべての機能のステップバイステップガイド',
    ko: '모든 기능에 대한 단계별 가이드',
    de: 'Schritt-für-Schritt-Anleitungen für alle Funktionen',
    fr: 'Guides étape par étape pour toutes les fonctionnalités',
    es: 'Guías paso a paso para todas las funciones',
    pt: 'Guias passo a passo para todos os recursos',
    ru: 'Пошаговые руководства для всех функций',
    ar: 'أدلة خطوة بخطوة لجميع الميزات'
  }
};

const allKeys = getAllKeys(en, '');
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('Applying extended translations...\n');

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

console.log('\n✓ Extended translations applied successfully!');
