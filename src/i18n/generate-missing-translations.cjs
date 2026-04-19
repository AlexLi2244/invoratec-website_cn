const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

// Terms that should not be translated (brand names, technical terms)
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

const allKeys = getAllKeys(en, '');
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

// Language-specific translations for common phrases
const translations = {
  // Common UI terms
  'Project Dashboard': {
    zh: '项目仪表板', ja: 'プロジェクトダッシュボード', ko: '프로젝트 대시보드',
    de: 'Projekt-Dashboard', fr: 'Tableau de bord du projet', es: 'Panel del proyecto',
    pt: 'Painel do projeto', ru: 'Панель проекта', ar: 'لوحة تحكم المشروع'
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
  'BIM Consulting': {
    zh: 'BIM咨询', ja: 'BIMコンサルティング', ko: 'BIM 컨설팅',
    de: 'BIM-Beratung', fr: 'Conseil BIM', es: 'Consultoría BIM',
    pt: 'Consultoria BIM', ru: 'BIM-консалтинг', ar: 'استشارات BIM'
  },
  'AI Empowerment': {
    zh: 'AI赋能', ja: 'AIエンパワーメント', ko: 'AI 역량 강화',
    de: 'KI-Befähigung', fr: 'Autonomisation IA', es: 'Empoderamiento IA',
    pt: 'Capacitação IA', ru: 'Расширение возможностей ИИ', ar: 'تمكين الذكاء الاصطناعي'
  },
  'Technical Support': {
    zh: '技术支持', ja: 'テクニカルサポート', ko: '기술 지원',
    de: 'Technischer Support', fr: 'Support technique', es: 'Soporte técnico',
    pt: 'Suporte técnico', ru: 'Техническая поддержка', ar: 'الدعم الفني'
  },
  'Natural Language Processing': {
    zh: '自然语言处理', ja: '自然言語処理', ko: '자연어 처리',
    de: 'Verarbeitung natürlicher Sprache', fr: 'Traitement du langage naturel', es: 'Procesamiento del lenguaje natural',
    pt: 'Processamento de linguagem natural', ru: 'Обработка естественного языка', ar: 'معالجة اللغة الطبيعية'
  },
  'Intelligent Workflow Automation': {
    zh: '智能工作流自动化', ja: 'インテリジェントワークフロー自動化', ko: '지능형 워크플로우 자동화',
    de: 'Intelligente Workflow-Automatisierung', fr: 'Automatisation intelligente des flux', es: 'Automatización inteligente de flujos',
    pt: 'Automação inteligente de fluxo de trabalho', ru: 'Интеллектуальная автоматизация рабочих процессов', ar: 'أتمتة سير العمل الذكية'
  },
  'Predictive Analytics & Insights': {
    zh: '预测分析与洞察', ja: '予測分析とインサイト', ko: '예측 분석 및 인사이트',
    de: 'Prädiktive Analytik & Erkenntnisse', fr: 'Analytique prédictive et perspectives', es: 'Análisis predictivo y perspectivas',
    pt: 'Análise preditiva e insights', ru: 'Прогнозная аналитика и инсайты', ar: 'التحليلات التنبؤية والرؤى'
  },
  'Multi-discipline clash management': {
    zh: '多专业碰撞管理', ja: '多分野衝突管理', ko: '다분야 충돌 관리',
    de: 'Multidisziplinäres Kollisionsmanagement', fr: 'Gestion des conflits multidisciplinaires', es: 'Gestión de conflictos multidisciplinaria',
    pt: 'Gestão de conflitos multidisciplinar', ru: 'Управление междисциплинарными коллизиями', ar: 'إدارة التعارضات متعددة التخصصات'
  },
  'Clash Detection': {
    zh: '碰撞检测', ja: '衝突検出', ko: '충돌 감지',
    de: 'Kollisionserkennung', fr: 'Détection des conflits', es: 'Detección de conflictos',
    pt: 'Detecção de conflitos', ru: 'Обнаружение коллизий', ar: 'كشف التعارضات'
  },
  'Issue Tracking': {
    zh: '问题跟踪', ja: '問題追跡', ko: '이슈 추적',
    de: 'Problemverfolgung', fr: 'Suivi des problèmes', es: 'Seguimiento de problemas',
    pt: 'Rastreamento de problemas', ru: 'Отслеживание проблем', ar: 'تتبع المشكلات'
  },
  'Track and resolve conflicts': {
    zh: '追踪并解决冲突', ja: '競合の追跡と解決', ko: '충돌 추적 및 해결',
    de: 'Konflikte verfolgen und lösen', fr: 'Suivre et résoudre les conflits', es: 'Rastrear y resolver conflictos',
    pt: 'Rastrear e resolver conflitos', ru: 'Отслеживание и разрешение конфликтов', ar: 'تتبع وحل التعارضات'
  },
  'New Media Resources': {
    zh: '新媒体资源', ja: '新メディアリソース', ko: '뉴미디어 리소스',
    de: 'Neue Medienressourcen', fr: 'Ressources des nouveaux médias', es: 'Recursos de nuevos medios',
    pt: 'Recursos de nova mídia', ru: 'Ресурсы новых медиа', ar: 'موارد الوسائط الجديدة'
  },
  'Case Study': {
    zh: '案例研究', ja: 'ケーススタディ', ko: '사례 연구',
    de: 'Fallstudie', fr: 'Étude de cas', es: 'Caso de estudio',
    pt: 'Estudo de caso', ru: 'Кейс-стади', ar: 'دراسة حالة'
  },
  'Knowledge Base': {
    zh: '知识库', ja: 'ナレッジベース', ko: '지식 베이스',
    de: 'Wissensdatenbank', fr: 'Base de connaissances', es: 'Base de conocimientos',
    pt: 'Base de conhecimento', ru: 'База знаний', ar: 'قاعدة المعرفة'
  },
  'Activity Center': {
    zh: '活动中心', ja: 'アクティビティセンター', ko: '활동 센터',
    de: 'Aktivitätszentrum', fr: 'Centre d\'activités', es: 'Centro de actividades',
    pt: 'Centro de atividades', ru: 'Центр активности', ar: 'مركز الأنشطة'
  },
  'AI Empowerment Solutions': {
    zh: 'AI赋能解决方案', ja: 'AIエンパワーメントソリューション', ko: 'AI 역량 강화 솔루션',
    de: 'KI-Befähigungslösungen', fr: 'Solutions d\'autonomisation IA', es: 'Soluciones de empoderamiento IA',
    pt: 'Soluções de capacitação IA', ru: 'Решения для расширения возможностей ИИ', ar: 'حلول تمكين الذكاء الاصطناعي'
  },
  'Contact Us': {
    zh: '联系我们', ja: 'お問い合わせ', ko: '문의하기',
    de: 'Kontaktieren Sie uns', fr: 'Contactez-nous', es: 'Contáctenos',
    pt: 'Entre em contato', ru: 'Свяжитесь с нами', ar: 'اتصل بنا'
  },
  'Professional BIM Services': {
    zh: '专业BIM服务', ja: 'プロフェッショナルBIMサービス', ko: '전문 BIM 서비스',
    de: 'Professionelle BIM-Dienste', fr: 'Services BIM professionnels', es: 'Servicios BIM profesionales',
    pt: 'Serviços BIM profissionais', ru: 'Профессиональные BIM-услуги', ar: 'خدمات BIM الاحترافية'
  },
  'Enterprise Support': {
    zh: '企业支持', ja: 'エンタープライズサポート', ko: '기업 지원',
    de: 'Unternehmensunterstützung', fr: 'Support entreprise', es: 'Soporte empresarial',
    pt: 'Suporte empresarial', ru: 'Корпоративная поддержка', ar: 'دعم المؤسسات'
  },
  'Contact Support': {
    zh: '联系支持', ja: 'サポートに連絡', ko: '지원팀 문의',
    de: 'Support kontaktieren', fr: 'Contacter le support', es: 'Contactar soporte',
    pt: 'Contatar suporte', ru: 'Связаться с поддержкой', ar: 'التواصل مع الدعم'
  },
  'Gantt Chart View': {
    zh: '甘特图视图', ja: 'ガントチャートビュー', ko: '간트 차트 보기',
    de: 'Gantt-Diagramm-Ansicht', fr: 'Vue diagramme de Gantt', es: 'Vista de diagrama de Gantt',
    pt: 'Visualização de gráfico de Gantt', ru: 'Просмотр диаграммы Ганта', ar: 'عرض مخطط جانت'
  },
  'Scheduling Tasks': {
    zh: '任务调度', ja: 'タスクのスケジューリング', ko: '작업 일정 관리',
    de: 'Aufgaben planen', fr: 'Planification des tâches', es: 'Programación de tareas',
    pt: 'Agendamento de tarefas', ru: 'Планирование задач', ar: 'جدولة المهام'
  },
  'Task Dependencies': {
    zh: '任务依赖关系', ja: 'タスクの依存関係', ko: '작업 종속성',
    de: 'Aufgabenabhängigkeiten', fr: 'Dépendances des tâches', es: 'Dependencias de tareas',
    pt: 'Dependências de tarefas', ru: 'Зависимости задач', ar: 'تبعيات المهام'
  },
  'Excel Import/Export': {
    zh: 'Excel导入/导出', ja: 'Excelインポート/エクスポート', ko: 'Excel 가져오기/내보내기',
    de: 'Excel-Import/Export', fr: 'Import/Export Excel', es: 'Importar/Exportar Excel',
    pt: 'Importar/Exportar Excel', ru: 'Импорт/Экспорт Excel', ar: 'استيراد/تصدير Excel'
  },
  'Links': {
    zh: '链接', ja: 'リンク', ko: '링크',
    de: 'Links', fr: 'Liens', es: 'Enlaces',
    pt: 'Links', ru: 'Ссылки', ar: 'روابط'
  },
  'Gmail / Google Workspace': {
    zh: 'Gmail / Google工作区', ja: 'Gmail / Googleワークスペース', ko: 'Gmail / Google 워크스페이스',
    de: 'Gmail / Google Workspace', fr: 'Gmail / Google Workspace', es: 'Gmail / Google Workspace',
    pt: 'Gmail / Google Workspace', ru: 'Gmail / Google Workspace', ar: 'Gmail / Google Workspace'
  },
  'Autodesk Construction Cloud (ACC)': {
    zh: 'Autodesk Construction Cloud (ACC)', ja: 'Autodesk Construction Cloud (ACC)', ko: 'Autodesk Construction Cloud (ACC)',
    de: 'Autodesk Construction Cloud (ACC)', fr: 'Autodesk Construction Cloud (ACC)', es: 'Autodesk Construction Cloud (ACC)',
    pt: 'Autodesk Construction Cloud (ACC)', ru: 'Autodesk Construction Cloud (ACC)', ar: 'Autodesk Construction Cloud (ACC)'
  },
  'ACC Hub': {
    zh: 'ACC中心', ja: 'ACCハブ', ko: 'ACC 허브',
    de: 'ACC-Hub', fr: 'Hub ACC', es: 'Centro ACC',
    pt: 'Hub ACC', ru: 'ACC-хаб', ar: 'مركز ACC'
  },
  'BIM AI - Revit Add-in': {
    zh: 'BIM AI - Revit插件', ja: 'BIM AI - Revitアドイン', ko: 'BIM AI - Revit 추가 기능',
    de: 'BIM AI - Revit-Add-in', fr: 'BIM AI - Extension Revit', es: 'BIM AI - Complemento de Revit',
    pt: 'BIM AI - Complemento Revit', ru: 'BIM AI - надстройка Revit', ar: 'BIM AI - إضافة Revit'
  }
};

// Export untranslated strings for manual translation
console.log('Generating list of untranslated strings that need manual translation...\n');

for (const lang of languages) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  const untranslated = [];
  let autoTranslated = 0;

  for (const key of allKeys) {
    const enVal = getValue(en, key);
    const langVal = getValue(data, key);

    if (typeof enVal === 'string' && typeof langVal === 'string' && enVal === langVal && !shouldSkip(enVal)) {
      // Check if we have an auto-translation
      if (translations[enVal] && translations[enVal][lang]) {
        setValue(data, key, translations[enVal][lang]);
        autoTranslated++;
      } else {
        untranslated.push({ key, value: enVal });
      }
    }
  }

  // Save updated data
  fs.writeFileSync(path.join(__dirname, lang + '.json'), JSON.stringify(data, null, 2), 'utf8');

  console.log(`${lang.toUpperCase()}: Auto-translated ${autoTranslated} strings, ${untranslated.length} remaining`);

  // Log remaining untranslated for reference
  if (untranslated.length > 0 && untranslated.length < 20) {
    console.log('  Remaining:');
    untranslated.forEach(item => {
      console.log(`    "${item.key}": "${item.value.substring(0, 50)}..."`);
    });
  }
}

console.log('\nDone! Run check-all-translations.cjs again to verify.');
