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

// Feature translations for all 7 languages missing them
const translations = {
  fr: {
    features: {
      bim_ai: {
        description: "Extension Revit alimentée par l'IA pour une assistance intelligente à la conception"
      },
      web_ai: {
        description: "Collaboration 3D basée sur navigateur avec coordination IA"
      },
      items: {
        web_assistant: {
          title: "Assistant IA",
          description: "Conversation en langage naturel pour explorer les modèles BIM, interroger les données du projet et obtenir des réponses intelligentes sur votre projet de construction"
        },
        web_viewer: {
          title: "Visionneuse 3D",
          description: "Visualisation de modèles IFC et NWD dans le navigateur avec navigation en temps réel - aucune installation Revit requise"
        },
        web_taskboard: {
          title: "Tableau Kanban",
          description: "Gestion visuelle des tâches intégrée au modèle 3D - glissez les tâches sur les composants et suivez la progression en temps réel"
        },
        web_timeline: {
          title: "Chronologie et Gantt",
          description: "Planification interactive de projet avec jalons, suivi de progression et visualisation chronologique"
        },
        web_acc: {
          title: "Intégration ACC",
          description: "Synchronisation transparente avec Autodesk Construction Cloud - accédez à vos projets, modèles et données ACC directement dans InvoratecAI"
        },
        bim_assistant: {
          title: "Assistant IA Vocal",
          description: "Contrôlez Revit en langage naturel - parlez ou tapez des commandes pour naviguer dans les modèles, modifier les éléments et obtenir des suggestions de conception"
        },
        bim_collision: {
          title: "Détection Intelligente des Conflits",
          description: "L'IA prédit les collisions 3 semaines à l'avance, priorise par niveau d'impact, économisant plus de 70% du temps d'inspection"
        },
        bim_design: {
          title: "Recommandations de Conception IA",
          description: "Suggestions intelligentes basées sur plus de 1000 projets historiques - optimisez vos conceptions avec des informations basées sur les données"
        },
        bim_qaqc: {
          title: "Contrôles Qualité Automatisés",
          description: "Vérification QAQC en temps réel qui détecte les erreurs avant la construction, réduisant les reprises de 50%"
        },
        bim_sync: {
          title: "Synchronisation Cloud",
          description: "Téléchargement en un clic pour synchroniser vos modèles Revit avec la plateforme cloud pour une collaboration d'équipe"
        }
      }
    }
  },
  de: {
    features: {
      bim_ai: {
        description: "KI-gestütztes Revit-Add-in für intelligente Designunterstützung"
      },
      web_ai: {
        description: "Browserbasierte 3D-Zusammenarbeit mit KI-Koordination"
      },
      items: {
        web_assistant: {
          title: "KI-Assistent",
          description: "Natürliche Sprachkonversation zum Erkunden von BIM-Modellen, Abfragen von Projektdaten und intelligenten Antworten zu Ihrem Bauprojekt"
        },
        web_viewer: {
          title: "3D-Modellbetrachter",
          description: "Browserbasierte IFC- und NWD-Modellansicht mit Echtzeit-Navigation - keine Revit-Installation erforderlich"
        },
        web_taskboard: {
          title: "Kanban-Aufgabentafel",
          description: "Visuelle Aufgabenverwaltung integriert mit 3D-Modell - ziehen Sie Aufgaben auf Komponenten und verfolgen Sie den Fortschritt in Echtzeit"
        },
        web_timeline: {
          title: "Zeitachse & Gantt-Diagramm",
          description: "Interaktive Projektplanung mit Meilensteinen, Fortschrittsverfolgung und visueller Zeitachsendarstellung"
        },
        web_acc: {
          title: "ACC-Integration",
          description: "Nahtlose Autodesk Construction Cloud-Synchronisation - greifen Sie direkt in InvoratecAI auf Ihre ACC-Projekte, -Modelle und -Daten zu"
        },
        bim_assistant: {
          title: "Sprach-KI-Assistent",
          description: "Steuern Sie Revit mit natürlicher Sprache - sprechen oder tippen Sie Befehle, um Modelle zu navigieren, Elemente zu ändern und Designvorschläge zu erhalten"
        },
        bim_collision: {
          title: "Intelligente Kollisionserkennung",
          description: "KI prognostiziert Kollisionen 3 Wochen im Voraus, priorisiert nach Auswirkungsgrad und spart über 70% der Inspektionszeit"
        },
        bim_design: {
          title: "KI-Designempfehlungen",
          description: "Intelligente Vorschläge basierend auf über 1.000 historischen Projekten - optimieren Sie Ihre Designs mit datengestützten Erkenntnissen"
        },
        bim_qaqc: {
          title: "Automatisierte Qualitätsprüfungen",
          description: "Echtzeit-QAQC-Verifizierung, die Fehler vor dem Bau erkennt und Nacharbeiten um 50% reduziert"
        },
        bim_sync: {
          title: "Cloud-Modell-Synchronisation",
          description: "Ein-Klick-Upload zur Synchronisierung Ihrer Revit-Modelle mit der Cloud-Plattform für teamweite Zusammenarbeit"
        }
      }
    }
  },
  es: {
    features: {
      bim_ai: {
        description: "Complemento de Revit impulsado por IA para asistencia inteligente en diseño"
      },
      web_ai: {
        description: "Colaboración 3D basada en navegador con coordinación de IA"
      },
      items: {
        web_assistant: {
          title: "Asistente IA",
          description: "Conversación en lenguaje natural para explorar modelos BIM, consultar datos del proyecto y obtener respuestas inteligentes sobre su proyecto de construcción"
        },
        web_viewer: {
          title: "Visor de Modelos 3D",
          description: "Visualización de modelos IFC y NWD basada en navegador con navegación en tiempo real - no requiere instalación de Revit"
        },
        web_taskboard: {
          title: "Tablero Kanban",
          description: "Gestión visual de tareas integrada con modelo 3D - arrastre tareas a componentes y siga el progreso en tiempo real"
        },
        web_timeline: {
          title: "Línea de Tiempo y Gantt",
          description: "Programación interactiva de proyectos con hitos, seguimiento del progreso y visualización de línea temporal"
        },
        web_acc: {
          title: "Integración ACC",
          description: "Sincronización perfecta con Autodesk Construction Cloud - acceda a sus proyectos, modelos y datos de ACC directamente en InvoratecAI"
        },
        bim_assistant: {
          title: "Asistente de Voz IA",
          description: "Controle Revit con lenguaje natural - hable o escriba comandos para navegar modelos, modificar elementos y obtener sugerencias de diseño"
        },
        bim_collision: {
          title: "Detección Inteligente de Conflictos",
          description: "La IA predice colisiones con 3 semanas de anticipación, prioriza por nivel de impacto, ahorrando más del 70% del tiempo de inspección"
        },
        bim_design: {
          title: "Recomendaciones de Diseño IA",
          description: "Sugerencias inteligentes basadas en más de 1,000 proyectos históricos - optimice sus diseños con información basada en datos"
        },
        bim_qaqc: {
          title: "Controles de Calidad Automatizados",
          description: "Verificación QAQC en tiempo real que detecta errores antes de la construcción, reduciendo el retrabajo en un 50%"
        },
        bim_sync: {
          title: "Sincronización en la Nube",
          description: "Carga con un clic para sincronizar sus modelos Revit con la plataforma en la nube para colaboración en equipo"
        }
      }
    }
  },
  pt: {
    features: {
      bim_ai: {
        description: "Add-in Revit alimentado por IA para assistência inteligente ao design"
      },
      web_ai: {
        description: "Colaboração 3D baseada em navegador com coordenação de IA"
      },
      items: {
        web_assistant: {
          title: "Assistente IA",
          description: "Conversação em linguagem natural para explorar modelos BIM, consultar dados do projeto e obter respostas inteligentes sobre seu projeto de construção"
        },
        web_viewer: {
          title: "Visualizador 3D",
          description: "Visualização de modelos IFC e NWD baseada em navegador com navegação em tempo real - sem necessidade de instalação do Revit"
        },
        web_taskboard: {
          title: "Quadro Kanban",
          description: "Gestão visual de tarefas integrada com modelo 3D - arraste tarefas para componentes e acompanhe o progresso em tempo real"
        },
        web_timeline: {
          title: "Linha do Tempo e Gantt",
          description: "Agendamento interativo de projetos com marcos, acompanhamento de progresso e visualização de linha do tempo"
        },
        web_acc: {
          title: "Integração ACC",
          description: "Sincronização perfeita com Autodesk Construction Cloud - acesse seus projetos, modelos e dados ACC diretamente no InvoratecAI"
        },
        bim_assistant: {
          title: "Assistente de Voz IA",
          description: "Controle o Revit com linguagem natural - fale ou digite comandos para navegar em modelos, modificar elementos e obter sugestões de design"
        },
        bim_collision: {
          title: "Detecção Inteligente de Conflitos",
          description: "A IA prevê colisões com 3 semanas de antecedência, prioriza por nível de impacto, economizando mais de 70% do tempo de inspeção"
        },
        bim_design: {
          title: "Recomendações de Design IA",
          description: "Sugestões inteligentes baseadas em mais de 1.000 projetos históricos - otimize seus designs com insights baseados em dados"
        },
        bim_qaqc: {
          title: "Verificações de Qualidade Automatizadas",
          description: "Verificação QAQC em tempo real que detecta erros antes da construção, reduzindo o retrabalho em 50%"
        },
        bim_sync: {
          title: "Sincronização na Nuvem",
          description: "Upload com um clique para sincronizar seus modelos Revit com a plataforma na nuvem para colaboração em equipe"
        }
      }
    }
  },
  ko: {
    features: {
      bim_ai: {
        description: "지능형 설계 지원을 위한 AI 기반 Revit 애드인"
      },
      web_ai: {
        description: "AI 조정을 통한 브라우저 기반 3D 협업"
      },
      items: {
        web_assistant: {
          title: "AI 어시스턴트",
          description: "자연어 대화로 BIM 모델 탐색, 프로젝트 데이터 쿼리 및 건설 프로젝트에 대한 지능적인 답변 제공"
        },
        web_viewer: {
          title: "3D 모델 뷰어",
          description: "실시간 탐색이 가능한 브라우저 기반 IFC 및 NWD 모델 보기 - Revit 설치 불필요"
        },
        web_taskboard: {
          title: "칸반 작업 보드",
          description: "3D 모델과 통합된 시각적 작업 관리 - 작업을 컴포넌트에 드래그하고 실시간으로 진행 상황 추적"
        },
        web_timeline: {
          title: "타임라인 및 간트 차트",
          description: "마일스톤, 진행 상황 추적 및 시각적 타임라인 시각화가 포함된 대화형 프로젝트 일정 관리"
        },
        web_acc: {
          title: "ACC 통합",
          description: "Autodesk Construction Cloud와의 원활한 동기화 - InvoratecAI에서 직접 ACC 프로젝트, 모델 및 데이터에 액세스"
        },
        bim_assistant: {
          title: "음성 AI 어시스턴트",
          description: "자연어로 Revit 제어 - 음성 또는 텍스트 명령으로 모델 탐색, 요소 수정 및 설계 제안 받기"
        },
        bim_collision: {
          title: "지능형 충돌 감지",
          description: "AI가 3주 전에 충돌을 예측하고 영향 수준별로 우선순위를 지정하여 검사 시간의 70% 이상 절약"
        },
        bim_design: {
          title: "AI 설계 추천",
          description: "1,000개 이상의 과거 프로젝트를 기반으로 한 스마트 제안 - 데이터 기반 인사이트로 설계 최적화"
        },
        bim_qaqc: {
          title: "자동화된 품질 검사",
          description: "시공 전 오류를 포착하는 실시간 QAQC 검증으로 재작업 50% 감소"
        },
        bim_sync: {
          title: "클라우드 모델 동기화",
          description: "원클릭 업로드로 Revit 모델을 클라우드 플랫폼에 동기화하여 팀 전체 협업 지원"
        }
      }
    }
  },
  ru: {
    features: {
      bim_ai: {
        description: "Надстройка Revit на базе ИИ для интеллектуальной помощи в проектировании"
      },
      web_ai: {
        description: "3D-совместная работа на базе браузера с координацией ИИ"
      },
      items: {
        web_assistant: {
          title: "ИИ-ассистент",
          description: "Диалог на естественном языке для изучения BIM-моделей, запроса данных проекта и получения интеллектуальных ответов о вашем строительном проекте"
        },
        web_viewer: {
          title: "3D-просмотрщик моделей",
          description: "Просмотр моделей IFC и NWD в браузере с навигацией в реальном времени - установка Revit не требуется"
        },
        web_taskboard: {
          title: "Канбан-доска задач",
          description: "Визуальное управление задачами, интегрированное с 3D-моделью - перетаскивайте задачи на компоненты и отслеживайте прогресс в реальном времени"
        },
        web_timeline: {
          title: "Временная шкала и диаграмма Ганта",
          description: "Интерактивное планирование проекта с вехами, отслеживанием прогресса и визуализацией временной шкалы"
        },
        web_acc: {
          title: "Интеграция ACC",
          description: "Бесшовная синхронизация с Autodesk Construction Cloud - доступ к вашим проектам, моделям и данным ACC прямо в InvoratecAI"
        },
        bim_assistant: {
          title: "Голосовой ИИ-ассистент",
          description: "Управляйте Revit на естественном языке - говорите или вводите команды для навигации по моделям, изменения элементов и получения рекомендаций по проектированию"
        },
        bim_collision: {
          title: "Интеллектуальное обнаружение коллизий",
          description: "ИИ прогнозирует коллизии за 3 недели, приоритизирует по уровню воздействия, экономя более 70% времени проверки"
        },
        bim_design: {
          title: "ИИ-рекомендации по проектированию",
          description: "Умные предложения на основе более 1000 исторических проектов - оптимизируйте свои проекты с помощью данных"
        },
        bim_qaqc: {
          title: "Автоматизированные проверки качества",
          description: "Проверка QAQC в реальном времени, которая выявляет ошибки до строительства, сокращая переделки на 50%"
        },
        bim_sync: {
          title: "Облачная синхронизация моделей",
          description: "Загрузка одним щелчком для синхронизации моделей Revit с облачной платформой для совместной работы команды"
        }
      }
    }
  },
  ar: {
    features: {
      bim_ai: {
        description: "إضافة Revit مدعومة بالذكاء الاصطناعي للمساعدة الذكية في التصميم"
      },
      web_ai: {
        description: "تعاون ثلاثي الأبعاد قائم على المتصفح مع تنسيق الذكاء الاصطناعي"
      },
      items: {
        web_assistant: {
          title: "مساعد الذكاء الاصطناعي",
          description: "محادثة بلغة طبيعية لاستكشاف نماذج BIM والاستعلام عن بيانات المشروع والحصول على إجابات ذكية حول مشروع البناء الخاص بك"
        },
        web_viewer: {
          title: "عارض النماذج ثلاثية الأبعاد",
          description: "عرض نماذج IFC و NWD في المتصفح مع التنقل في الوقت الفعلي - لا حاجة لتثبيت Revit"
        },
        web_taskboard: {
          title: "لوحة كانبان للمهام",
          description: "إدارة المهام المرئية المتكاملة مع النموذج ثلاثي الأبعاد - اسحب المهام إلى المكونات وتتبع التقدم في الوقت الفعلي"
        },
        web_timeline: {
          title: "الجدول الزمني ومخطط جانت",
          description: "جدولة تفاعلية للمشروع مع المعالم الرئيسية وتتبع التقدم والتصور الزمني"
        },
        web_acc: {
          title: "تكامل ACC",
          description: "مزامنة سلسة مع Autodesk Construction Cloud - الوصول إلى مشاريع ACC والنماذج والبيانات مباشرة في InvoratecAI"
        },
        bim_assistant: {
          title: "مساعد الذكاء الاصطناعي الصوتي",
          description: "تحكم في Revit باللغة الطبيعية - تحدث أو اكتب الأوامر للتنقل في النماذج وتعديل العناصر والحصول على اقتراحات التصميم"
        },
        bim_collision: {
          title: "الكشف الذكي عن التصادمات",
          description: "يتنبأ الذكاء الاصطناعي بالتصادمات قبل 3 أسابيع ويحدد الأولويات حسب مستوى التأثير مما يوفر أكثر من 70% من وقت الفحص"
        },
        bim_design: {
          title: "توصيات التصميم بالذكاء الاصطناعي",
          description: "اقتراحات ذكية بناءً على أكثر من 1000 مشروع تاريخي - حسّن تصميماتك برؤى قائمة على البيانات"
        },
        bim_qaqc: {
          title: "فحوصات الجودة الآلية",
          description: "التحقق من QAQC في الوقت الفعلي الذي يكتشف الأخطاء قبل البناء مما يقلل إعادة العمل بنسبة 50%"
        },
        bim_sync: {
          title: "مزامنة النماذج السحابية",
          description: "تحميل بنقرة واحدة لمزامنة نماذج Revit الخاصة بك مع المنصة السحابية للتعاون على مستوى الفريق"
        }
      }
    }
  }
};

// Process each language
const languages = ['fr', 'de', 'es', 'pt', 'ko', 'ru', 'ar'];

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = deepMerge(existing, translations[lang]);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Added feature translations to ' + lang + '.json');
});

console.log('\nFeature translations added to all 7 languages!');
