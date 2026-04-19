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
    product: {
      hero: {
        title: "Plateforme BIM AI Complète",
        subtitle: "Du bureau au cloud, InvoratecAI fournit une suite complète d'outils alimentés par l'IA pour les projets de construction modernes",
        badge: "Plateforme BIM Complète"
      },
      bim: {
        title: "BIM AI - Add-in Revit",
        subtitle: "Boostez votre flux de travail Revit avec une assistance IA intelligente"
      },
      web: {
        title: "Web AI - Plateforme Cloud",
        subtitle: "Collaboration basée sur navigateur pour toute votre équipe de projet"
      },
      features: {
        web: {
          tasks: {
            title: "Gestion des Tâches",
            description: "Système de tâches piloté par base de données avec propriétés personnalisées, niveaux de priorité et suivi des affectations en temps réel"
          },
          viewer: {
            title: "Visionneuse 3D",
            description: "Visionneuse APS Forge basée sur navigateur avec inspection des éléments, coupes et navigation des propriétés"
          },
          timeline: {
            title: "Chronologie et Gantt",
            description: "Planification visuelle de projet avec dépendances, jalons et suivi de progression"
          },
          coordination: {
            title: "Coordination des Conflits",
            description: "Importez et gérez les conflits d'Autodesk Construction Cloud avec attribution et suivi de résolution"
          },
          drawings: {
            title: "Plans d'Exécution",
            description: "Visionneuse PDF et DWG avec outils d'annotation, marquages et workflows d'approbation"
          },
          reports: {
            title: "Rapports et Analyses",
            description: "Tableau de bord des métriques de projet avec achèvement des tâches, statut des conflits et aperçus d'activité de l'équipe"
          }
        },
        bim: {
          assistant: {
            title: "Assistant IA",
            description: "Contrôle en langage naturel pour Revit - sélectionnez des éléments, modifiez des paramètres et obtenez des suggestions de conception par la voix ou le texte"
          },
          dashboard: {
            title: "Tableau de Bord",
            description: "Vue d'ensemble du projet avec statistiques des tâches, suivi de progression et activité de l'équipe en un coup d'œil"
          },
          mytasks: {
            title: "Mes Tâches",
            description: "Liste de tâches personnelle avec filtrage, indicateurs de priorité et navigation en un clic vers les éléments du modèle"
          },
          board: {
            title: "Vue Tableau",
            description: "Tableau de tâches style Kanban avec glisser-déposer, diagramme de Gantt et vues du flux d'activité"
          },
          acc: {
            title: "Hub ACC",
            description: "Intégration Autodesk Construction Cloud pour la synchronisation des modèles, l'importation des conflits et la gestion des fichiers de projet"
          },
          tools: {
            title: "Outils d'Automatisation",
            description: "Édition de paramètres par lots, étiquetage automatique, exportation de nomenclatures et autres outils d'automatisation de la productivité"
          }
        }
      },
      comparison: {
        title: "Plateforme Complète",
        subtitle: "Connectez de manière transparente vos flux de travail Revit avec la gestion de projet basée sur le cloud"
      },
      cta: {
        title: "Voyez InvoratecAI en Action",
        subtitle: "Découvrez la puissance de la gestion BIM pilotée par l'IA avec une démo personnalisée",
        button: "Demander une Démo"
      }
    }
  },
  de: {
    product: {
      hero: {
        title: "Komplette BIM AI Plattform",
        subtitle: "Vom Desktop zur Cloud bietet InvoratecAI eine komplette Suite von KI-gestützten Werkzeugen für moderne Bauprojekte",
        badge: "Komplette BIM-Plattform"
      },
      bim: {
        title: "BIM AI - Revit Add-in",
        subtitle: "Optimieren Sie Ihren Revit-Workflow mit intelligenter KI-Unterstützung"
      },
      web: {
        title: "Web AI - Cloud-Plattform",
        subtitle: "Browserbasierte Zusammenarbeit für Ihr gesamtes Projektteam"
      },
      features: {
        web: {
          tasks: {
            title: "Aufgabenverwaltung",
            description: "Datenbankgesteuertes Aufgabensystem mit benutzerdefinierten Eigenschaften, Prioritätsstufen und Echtzeit-Zuweisungsverfolgung"
          },
          viewer: {
            title: "3D-Modellbetrachter",
            description: "Browserbasierter APS Forge Viewer mit Elementinspektion, Schnittebenen und Eigenschaftsbrowser"
          },
          timeline: {
            title: "Zeitachse & Gantt",
            description: "Visuelle Projektplanung mit Abhängigkeiten, Meilensteinen und Fortschrittsverfolgung"
          },
          coordination: {
            title: "Kollisionskoordination",
            description: "Importieren und verwalten Sie Kollisionen aus Autodesk Construction Cloud mit Zuweisung und Lösungsverfolgung"
          },
          drawings: {
            title: "Werkstattzeichnungen",
            description: "PDF- und DWG-Betrachter mit Markup-Tools, Anmerkungen und Genehmigungsworkflows"
          },
          reports: {
            title: "Berichte & Analysen",
            description: "Projekt-Metriken-Dashboard mit Aufgabenabschluss, Kollisionsstatus und Team-Aktivitätseinblicken"
          }
        },
        bim: {
          assistant: {
            title: "KI-Assistent",
            description: "Natürlichsprachliche Steuerung für Revit - wählen Sie Elemente, ändern Sie Parameter und erhalten Sie Designvorschläge per Sprache oder Text"
          },
          dashboard: {
            title: "Dashboard",
            description: "Projektübersicht mit Aufgabenstatistiken, Fortschrittsverfolgung und Teamaktivität auf einen Blick"
          },
          mytasks: {
            title: "Meine Aufgaben",
            description: "Persönliche Aufgabenliste mit Filterung, Prioritätsindikatoren und Ein-Klick-Navigation zu Modellelementen"
          },
          board: {
            title: "Board-Ansicht",
            description: "Kanban-Stil-Aufgabentafel mit Drag-and-Drop, Gantt-Diagramm und Aktivitäts-Feed-Ansichten"
          },
          acc: {
            title: "ACC Hub",
            description: "Autodesk Construction Cloud Integration für Modellsynchronisation, Kollisionsimport und Projektdateiverwaltung"
          },
          tools: {
            title: "Automatisierungstools",
            description: "Batch-Parameterbearbeitung, Auto-Tagging, Listenexport und andere Produktivitäts-Automatisierungstools"
          }
        }
      },
      comparison: {
        title: "Komplette Plattform",
        subtitle: "Verbinden Sie nahtlos Ihre Revit-Workflows mit cloudbasiertem Projektmanagement"
      },
      cta: {
        title: "Erleben Sie InvoratecAI in Aktion",
        subtitle: "Erfahren Sie die Kraft von KI-gesteuertem BIM-Management mit einer personalisierten Demo",
        button: "Demo Anfordern"
      }
    }
  },
  es: {
    product: {
      hero: {
        title: "Plataforma BIM AI Completa",
        subtitle: "Del escritorio a la nube, InvoratecAI proporciona un conjunto completo de herramientas impulsadas por IA para proyectos de construcción modernos",
        badge: "Plataforma BIM Completa"
      },
      bim: {
        title: "BIM AI - Complemento Revit",
        subtitle: "Potencie su flujo de trabajo de Revit con asistencia IA inteligente"
      },
      web: {
        title: "Web AI - Plataforma Cloud",
        subtitle: "Colaboración basada en navegador para todo su equipo de proyecto"
      },
      features: {
        web: {
          tasks: {
            title: "Gestión de Tareas",
            description: "Sistema de tareas basado en base de datos con propiedades personalizadas, niveles de prioridad y seguimiento de asignaciones en tiempo real"
          },
          viewer: {
            title: "Visor de Modelos 3D",
            description: "Visor APS Forge basado en navegador con inspección de elementos, cortes de sección y navegación de propiedades"
          },
          timeline: {
            title: "Línea de Tiempo y Gantt",
            description: "Programación visual de proyectos con dependencias, hitos y seguimiento de progreso"
          },
          coordination: {
            title: "Coordinación de Conflictos",
            description: "Importe y gestione conflictos de Autodesk Construction Cloud con asignación y seguimiento de resolución"
          },
          drawings: {
            title: "Planos de Taller",
            description: "Visor de PDF y DWG con herramientas de marcado, anotaciones y flujos de trabajo de aprobación"
          },
          reports: {
            title: "Informes y Análisis",
            description: "Panel de métricas del proyecto con finalización de tareas, estado de conflictos e información de actividad del equipo"
          }
        },
        bim: {
          assistant: {
            title: "Asistente IA",
            description: "Control de lenguaje natural para Revit - seleccione elementos, modifique parámetros y obtenga sugerencias de diseño con voz o texto"
          },
          dashboard: {
            title: "Panel de Control",
            description: "Resumen del proyecto con estadísticas de tareas, seguimiento de progreso y actividad del equipo de un vistazo"
          },
          mytasks: {
            title: "Mis Tareas",
            description: "Lista de tareas personal con filtrado, indicadores de prioridad y navegación con un clic a elementos del modelo"
          },
          board: {
            title: "Vista de Tablero",
            description: "Tablero de tareas estilo Kanban con arrastrar y soltar, diagrama de Gantt y vistas de actividad"
          },
          acc: {
            title: "Hub ACC",
            description: "Integración de Autodesk Construction Cloud para sincronización de modelos, importación de conflictos y gestión de archivos de proyecto"
          },
          tools: {
            title: "Herramientas de Automatización",
            description: "Edición de parámetros por lotes, etiquetado automático, exportación de tablas y otras herramientas de automatización de productividad"
          }
        }
      },
      comparison: {
        title: "Plataforma Completa",
        subtitle: "Conecte sin problemas sus flujos de trabajo de Revit con la gestión de proyectos basada en la nube"
      },
      cta: {
        title: "Vea InvoratecAI en Acción",
        subtitle: "Experimente el poder de la gestión BIM impulsada por IA con una demostración personalizada",
        button: "Solicitar Demo"
      }
    }
  },
  pt: {
    product: {
      hero: {
        title: "Plataforma BIM AI Completa",
        subtitle: "Do desktop à nuvem, o InvoratecAI fornece um conjunto completo de ferramentas alimentadas por IA para projetos de construção modernos",
        badge: "Plataforma BIM Completa"
      },
      bim: {
        title: "BIM AI - Add-in Revit",
        subtitle: "Potencialize seu fluxo de trabalho Revit com assistência IA inteligente"
      },
      web: {
        title: "Web AI - Plataforma Cloud",
        subtitle: "Colaboração baseada em navegador para toda a sua equipe de projeto"
      },
      features: {
        web: {
          tasks: {
            title: "Gestão de Tarefas",
            description: "Sistema de tarefas baseado em banco de dados com propriedades personalizadas, níveis de prioridade e rastreamento de atribuições em tempo real"
          },
          viewer: {
            title: "Visualizador de Modelos 3D",
            description: "Visualizador APS Forge baseado em navegador com inspeção de elementos, cortes de seção e navegação de propriedades"
          },
          timeline: {
            title: "Linha do Tempo e Gantt",
            description: "Agendamento visual de projetos com dependências, marcos e rastreamento de progresso"
          },
          coordination: {
            title: "Coordenação de Conflitos",
            description: "Importe e gerencie conflitos do Autodesk Construction Cloud com atribuição e rastreamento de resolução"
          },
          drawings: {
            title: "Desenhos de Fabricação",
            description: "Visualizador de PDF e DWG com ferramentas de marcação, anotações e fluxos de trabalho de aprovação"
          },
          reports: {
            title: "Relatórios e Análises",
            description: "Painel de métricas do projeto com conclusão de tarefas, status de conflitos e insights de atividade da equipe"
          }
        },
        bim: {
          assistant: {
            title: "Assistente IA",
            description: "Controle de linguagem natural para Revit - selecione elementos, modifique parâmetros e obtenha sugestões de design com voz ou texto"
          },
          dashboard: {
            title: "Painel de Controle",
            description: "Visão geral do projeto com estatísticas de tarefas, rastreamento de progresso e atividade da equipe em um relance"
          },
          mytasks: {
            title: "Minhas Tarefas",
            description: "Lista de tarefas pessoal com filtragem, indicadores de prioridade e navegação com um clique para elementos do modelo"
          },
          board: {
            title: "Visualização de Quadro",
            description: "Quadro de tarefas estilo Kanban com arrastar e soltar, gráfico de Gantt e visualizações de feed de atividade"
          },
          acc: {
            title: "Hub ACC",
            description: "Integração Autodesk Construction Cloud para sincronização de modelos, importação de conflitos e gerenciamento de arquivos de projeto"
          },
          tools: {
            title: "Ferramentas de Automação",
            description: "Edição de parâmetros em lote, marcação automática, exportação de tabelas e outras ferramentas de automação de produtividade"
          }
        }
      },
      comparison: {
        title: "Plataforma Completa",
        subtitle: "Conecte perfeitamente seus fluxos de trabalho Revit com o gerenciamento de projetos baseado em nuvem"
      },
      cta: {
        title: "Veja o InvoratecAI em Ação",
        subtitle: "Experimente o poder do gerenciamento BIM orientado por IA com uma demonstração personalizada",
        button: "Solicitar Demo"
      }
    }
  },
  ko: {
    product: {
      hero: {
        title: "완전한 BIM AI 플랫폼",
        subtitle: "데스크톱에서 클라우드까지, InvoratecAI는 현대 건설 프로젝트를 위한 완전한 AI 기반 도구 모음을 제공합니다",
        badge: "완전한 BIM 플랫폼"
      },
      bim: {
        title: "BIM AI - Revit 애드인",
        subtitle: "지능형 AI 지원으로 Revit 워크플로우를 강화하세요"
      },
      web: {
        title: "Web AI - 클라우드 플랫폼",
        subtitle: "전체 프로젝트 팀을 위한 브라우저 기반 협업"
      },
      features: {
        web: {
          tasks: {
            title: "작업 관리",
            description: "사용자 정의 속성, 우선순위 수준 및 실시간 할당 추적이 있는 데이터베이스 기반 작업 시스템"
          },
          viewer: {
            title: "3D 모델 뷰어",
            description: "요소 검사, 단면 절단 및 속성 탐색이 가능한 브라우저 기반 APS Forge 뷰어"
          },
          timeline: {
            title: "타임라인 및 간트",
            description: "종속성, 마일스톤 및 진행 상황 추적이 있는 시각적 프로젝트 스케줄링"
          },
          coordination: {
            title: "충돌 조정",
            description: "할당 및 해결 추적과 함께 Autodesk Construction Cloud에서 충돌을 가져오고 관리"
          },
          drawings: {
            title: "시공 도면",
            description: "마크업 도구, 주석 및 승인 워크플로우가 있는 PDF 및 DWG 뷰어"
          },
          reports: {
            title: "보고서 및 분석",
            description: "작업 완료, 충돌 상태 및 팀 활동 인사이트가 있는 프로젝트 메트릭 대시보드"
          }
        },
        bim: {
          assistant: {
            title: "AI 어시스턴트",
            description: "Revit용 자연어 제어 - 음성 또는 텍스트로 요소 선택, 매개변수 수정 및 설계 제안 받기"
          },
          dashboard: {
            title: "대시보드",
            description: "작업 통계, 진행 상황 추적 및 팀 활동을 한눈에 볼 수 있는 프로젝트 개요"
          },
          mytasks: {
            title: "내 작업",
            description: "필터링, 우선순위 표시기 및 모델 요소로의 원클릭 탐색이 있는 개인 작업 목록"
          },
          board: {
            title: "보드 보기",
            description: "드래그 앤 드롭, 간트 차트 및 활동 피드 보기가 있는 칸반 스타일 작업 보드"
          },
          acc: {
            title: "ACC 허브",
            description: "모델 동기화, 충돌 가져오기 및 프로젝트 파일 관리를 위한 Autodesk Construction Cloud 통합"
          },
          tools: {
            title: "자동화 도구",
            description: "일괄 매개변수 편집, 자동 태깅, 일정 내보내기 및 기타 생산성 자동화 도구"
          }
        }
      },
      comparison: {
        title: "완전한 플랫폼",
        subtitle: "Revit 워크플로우를 클라우드 기반 프로젝트 관리와 원활하게 연결"
      },
      cta: {
        title: "InvoratecAI를 실제로 확인하세요",
        subtitle: "맞춤형 데모로 AI 기반 BIM 관리의 강력함을 경험하세요",
        button: "데모 요청"
      }
    }
  },
  ru: {
    product: {
      hero: {
        title: "Полная BIM AI Платформа",
        subtitle: "От настольного компьютера до облака, InvoratecAI предоставляет полный набор инструментов на базе ИИ для современных строительных проектов",
        badge: "Полная BIM-платформа"
      },
      bim: {
        title: "BIM AI - Надстройка Revit",
        subtitle: "Усильте свой рабочий процесс Revit с помощью интеллектуальной ИИ-поддержки"
      },
      web: {
        title: "Web AI - Облачная Платформа",
        subtitle: "Совместная работа на базе браузера для всей вашей проектной команды"
      },
      features: {
        web: {
          tasks: {
            title: "Управление Задачами",
            description: "Система задач на базе данных с настраиваемыми свойствами, уровнями приоритета и отслеживанием назначений в реальном времени"
          },
          viewer: {
            title: "3D-Просмотрщик Моделей",
            description: "Браузерный APS Forge просмотрщик с инспекцией элементов, секущими плоскостями и навигацией по свойствам"
          },
          timeline: {
            title: "Временная Шкала и Ганта",
            description: "Визуальное планирование проекта с зависимостями, вехами и отслеживанием прогресса"
          },
          coordination: {
            title: "Координация Коллизий",
            description: "Импортируйте и управляйте коллизиями из Autodesk Construction Cloud с назначением и отслеживанием разрешения"
          },
          drawings: {
            title: "Рабочие Чертежи",
            description: "Просмотрщик PDF и DWG с инструментами разметки, аннотациями и workflow-процессами согласования"
          },
          reports: {
            title: "Отчеты и Аналитика",
            description: "Панель метрик проекта с завершением задач, статусом коллизий и данными об активности команды"
          }
        },
        bim: {
          assistant: {
            title: "ИИ-Ассистент",
            description: "Управление Revit на естественном языке - выбирайте элементы, изменяйте параметры и получайте рекомендации по дизайну голосом или текстом"
          },
          dashboard: {
            title: "Панель Управления",
            description: "Обзор проекта со статистикой задач, отслеживанием прогресса и активностью команды одним взглядом"
          },
          mytasks: {
            title: "Мои Задачи",
            description: "Личный список задач с фильтрацией, индикаторами приоритета и навигацией к элементам модели одним кликом"
          },
          board: {
            title: "Вид Доски",
            description: "Доска задач в стиле Kanban с drag-and-drop, диаграммой Ганта и лентой активности"
          },
          acc: {
            title: "ACC Хаб",
            description: "Интеграция Autodesk Construction Cloud для синхронизации моделей, импорта коллизий и управления файлами проекта"
          },
          tools: {
            title: "Инструменты Автоматизации",
            description: "Пакетное редактирование параметров, авто-тегирование, экспорт спецификаций и другие инструменты автоматизации"
          }
        }
      },
      comparison: {
        title: "Полная Платформа",
        subtitle: "Бесшовно соединяйте ваши рабочие процессы Revit с облачным управлением проектами"
      },
      cta: {
        title: "Увидьте InvoratecAI в Действии",
        subtitle: "Испытайте мощь BIM-управления на базе ИИ с персонализированной демонстрацией",
        button: "Запросить Демо"
      }
    }
  },
  ar: {
    product: {
      hero: {
        title: "منصة BIM AI الكاملة",
        subtitle: "من سطح المكتب إلى السحابة، يوفر InvoratecAI مجموعة كاملة من الأدوات المدعومة بالذكاء الاصطناعي لمشاريع البناء الحديثة",
        badge: "منصة BIM كاملة"
      },
      bim: {
        title: "BIM AI - إضافة Revit",
        subtitle: "عزز سير عمل Revit الخاص بك بمساعدة الذكاء الاصطناعي الذكي"
      },
      web: {
        title: "Web AI - منصة السحابة",
        subtitle: "تعاون قائم على المتصفح لفريق مشروعك بالكامل"
      },
      features: {
        web: {
          tasks: {
            title: "إدارة المهام",
            description: "نظام مهام قائم على قاعدة بيانات مع خصائص مخصصة ومستويات أولوية وتتبع التعيينات في الوقت الفعلي"
          },
          viewer: {
            title: "عارض النماذج ثلاثية الأبعاد",
            description: "عارض APS Forge قائم على المتصفح مع فحص العناصر وقطع المقاطع وتصفح الخصائص"
          },
          timeline: {
            title: "الجدول الزمني وغانت",
            description: "جدولة مشروع مرئية مع التبعيات والمعالم الرئيسية وتتبع التقدم"
          },
          coordination: {
            title: "تنسيق التصادمات",
            description: "استيراد وإدارة التصادمات من Autodesk Construction Cloud مع التعيين وتتبع الحل"
          },
          drawings: {
            title: "رسومات الورشة",
            description: "عارض PDF و DWG مع أدوات التوصيف والتعليقات التوضيحية وسير عمل الموافقة"
          },
          reports: {
            title: "التقارير والتحليلات",
            description: "لوحة معلومات مقاييس المشروع مع إتمام المهام وحالة التصادم ورؤى نشاط الفريق"
          }
        },
        bim: {
          assistant: {
            title: "مساعد الذكاء الاصطناعي",
            description: "التحكم باللغة الطبيعية لـ Revit - حدد العناصر وعدل المعلمات واحصل على اقتراحات التصميم بالصوت أو النص"
          },
          dashboard: {
            title: "لوحة التحكم",
            description: "نظرة عامة على المشروع مع إحصائيات المهام وتتبع التقدم ونشاط الفريق في لمحة"
          },
          mytasks: {
            title: "مهامي",
            description: "قائمة المهام الشخصية مع التصفية ومؤشرات الأولوية والتنقل بنقرة واحدة إلى عناصر النموذج"
          },
          board: {
            title: "عرض اللوحة",
            description: "لوحة مهام بأسلوب كانبان مع السحب والإفلات ومخطط غانت وعروض تغذية النشاط"
          },
          acc: {
            title: "مركز ACC",
            description: "تكامل Autodesk Construction Cloud لمزامنة النماذج واستيراد التصادمات وإدارة ملفات المشروع"
          },
          tools: {
            title: "أدوات الأتمتة",
            description: "تحرير المعلمات بالدفعات والوسم التلقائي وتصدير الجداول وأدوات أتمتة الإنتاجية الأخرى"
          }
        }
      },
      comparison: {
        title: "منصة كاملة",
        subtitle: "قم بتوصيل سير عمل Revit الخاص بك بسلاسة مع إدارة المشاريع السحابية"
      },
      cta: {
        title: "شاهد InvoratecAI في العمل",
        subtitle: "اختبر قوة إدارة BIM المدعومة بالذكاء الاصطناعي مع عرض توضيحي مخصص",
        button: "طلب عرض توضيحي"
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
  console.log('Added Product translations to ' + lang + '.json');
});

console.log('\nProduct translations complete!');
