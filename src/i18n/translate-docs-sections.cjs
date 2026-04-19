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

// Docs sections and navigation translations
const docsTranslations = {
  ko: {
    docs: {
      navigation: "문서",
      legalTitle: "보안 및 정책",
      legalLastUpdated: "2024년 12월 24일",
      legalPoliciesTitle: "법적 고지 및 정책",
      categories: {
        webPlatform: "웹 플랫폼",
        revitAddin: "Revit 애드인",
        developer: "개발자"
      },
      sections: {
        "getting-started": {
          title: "시작하기",
          description: "InvoratecAI를 시작하는 데 필요한 모든 것"
        },
        "installation": {
          title: "설치",
          description: "BIM AI 및 Web AI 단계별 설치 가이드"
        },
        "configuration": {
          title: "구성",
          description: "워크플로에 맞게 InvoratecAI 사용자 지정"
        },
        "web-tasks": {
          title: "작업 관리",
          description: "45개 이상의 속성 유형으로 유연한 프로젝트 추적을 위한 커스텀 작업 페이지 생성"
        },
        "web-viewer": {
          title: "3D 모델 뷰어",
          description: "요소 검사 및 측정 기능이 있는 APS 기반 인터랙티브 모델 보기"
        },
        "web-timeline": {
          title: "타임라인 및 간트",
          description: "의존성 및 마일스톤 추적이 포함된 시각적 프로젝트 일정"
        },
        "web-coordination": {
          title: "조정",
          description: "Autodesk Construction Cloud와 동기화된 다분야 충돌 관리"
        },
        "web-sheets": {
          title: "시공 도면",
          description: "마크업 도구 및 ACC Build 통합이 포함된 2D 도면 보기"
        },
        "web-reports": {
          title: "보고서 및 분석",
          description: "프로젝트 대시보드, 팀 성과 지표 및 내보내기 가능한 보고서"
        },
        "revit-assistant": {
          title: "AI 어시스턴트",
          description: "Revit 자동화를 위한 자연어 및 음성 제어"
        },
        "revit-tasks": {
          title: "작업 관리",
          description: "요소 추적 및 시간 기록이 포함된 Revit 내 작업 관리"
        },
        "revit-tools": {
          title: "도구 라이브러리",
          description: "Revit 자동화를 위한 Python 스크립트, C# 스크립트 및 DLL 플러그인"
        },
        "revit-projects": {
          title: "프로젝트 관리",
          description: "팀 관리, 예산 추적 및 마일스톤 계획"
        },
        "revit-acc": {
          title: "ACC 통합",
          description: "모델 동기화 및 조정을 위한 Autodesk Construction Cloud 연결"
        },
        "api-reference": {
          title: "API 참조",
          description: "개발자 및 통합을 위한 기술 문서"
        }
      },
      legal: {
        terms: "이용 약관",
        privacy: "개인정보 처리방침",
        cookies: "쿠키 정책",
        dpa: "데이터 처리 계약",
        subprocessors: "하위 처리자",
        ai: "AI 추가 약관",
        developer: "개발자 약관",
        integrations: "통합 관리자",
        security: "보안 정책"
      },
      content: {
        quickStart: {
          title: "빠른 시작 가이드",
          intro: "InvoratecAI 문서에 오신 것을 환영합니다. 이 가이드는 플랫폼을 시작하는 데 도움이 됩니다.",
          prerequisites: "사전 요구 사항",
          prereq1: "Autodesk Revit 2019 이상",
          prereq3: "InvoratecAI 계정",
          installSteps: "설치 단계",
          step1: "계정 대시보드에서 InvoratecAI 애드인 다운로드",
          step2: "설치 프로그램을 실행하고 안내를 따르세요",
          step3: "애드인을 활성화하려면 Revit을 다시 시작하세요",
          step4: "InvoratecAI 자격 증명으로 로그인"
        },
        installation: {
          title: "설치 가이드",
          intro: "시스템에 InvoratecAI를 설치하려면 다음 단계를 따르세요.",
          bimAi: "BIM AI (Revit 애드인)",
          bimStep1: "다운로드 페이지에서 설치 프로그램 다운로드",
          bimStep2: "모든 Revit 인스턴스 닫기",
          bimStep3: "관리자 권한으로 설치 프로그램 실행",
          bimStep4: "Revit을 시작하고 Add-ins 탭에서 InvoratecAI 찾기",
          webAi: "Web AI (클라우드 플랫폼)",
          webStep1: "app.invoratec.com 방문",
          webStep2: "계정으로 로그인하거나 새 계정 만들기",
          webStep3: "바로 Web AI 사용 시작 - 설치 필요 없음"
        },
        configuration: {
          title: "구성 가이드",
          intro: "워크플로에 맞게 InvoratecAI를 구성하는 방법을 알아보세요.",
          account: "계정 설정",
          accountDesc: "계정 설정 패널에서 프로필, 구독 및 알림 기본 설정을 관리하세요.",
          project: "프로젝트 설정",
          projectDesc: "팀 멤버, 마일스톤 및 예산 추적을 포함한 프로젝트별 설정을 구성하세요.",
          acc: "ACC 통합",
          accDesc: "Autodesk Construction Cloud 계정을 연결하여 프로젝트, 모델 및 조정 데이터를 동기화하세요."
        },
        api: {
          title: "API 참조",
          intro: "InvoratecAI는 기존 도구 및 워크플로와 통합하기 위한 REST API를 제공합니다.",
          auth: "인증",
          authDesc: "모든 API 요청은 API 키를 사용한 인증이 필요합니다. 계정 설정에서 API 키를 생성하세요.",
          headerExample: "요청 헤더 예시",
          endpoints: "사용 가능한 엔드포인트",
          endpointsDesc: "API에는 프로젝트, 작업, 사용자 및 AI 쿼리를 위한 엔드포인트가 포함됩니다.",
          method: "메소드",
          endpoint: "엔드포인트",
          description: "설명",
          endpointProjects: "모든 프로젝트 나열",
          endpointTasks: "프로젝트의 작업 나열",
          endpointAi: "AI 쿼리 전송",
          rateLimit: "속도 제한",
          rateLimitDesc: "API 요청은 API 키당 분당 100개로 제한됩니다. Enterprise 플랜은 더 높은 제한을 포함합니다."
        }
      }
    }
  },
  ja: {
    docs: {
      navigation: "ドキュメント",
      legalTitle: "セキュリティとポリシー",
      legalLastUpdated: "2024年12月24日",
      legalPoliciesTitle: "法的事項とポリシー",
      categories: {
        webPlatform: "ウェブプラットフォーム",
        revitAddin: "Revitアドイン",
        developer: "開発者"
      },
      sections: {
        "getting-started": {
          title: "はじめに",
          description: "InvoratecAIを始めるために必要なすべて"
        },
        "installation": {
          title: "インストール",
          description: "BIM AIとWeb AIのステップバイステップインストールガイド"
        },
        "configuration": {
          title: "設定",
          description: "ワークフローに合わせてInvoratecAIをカスタマイズ"
        },
        "web-tasks": {
          title: "タスク管理",
          description: "45以上のプロパティタイプでカスタムタスクページを作成し、柔軟なプロジェクト追跡"
        },
        "web-viewer": {
          title: "3Dモデルビューア",
          description: "要素検査と測定機能を備えたAPS搭載のインタラクティブなモデル表示"
        },
        "web-timeline": {
          title: "タイムラインとガント",
          description: "依存関係とマイルストーン追跡を含む視覚的なプロジェクトスケジューリング"
        },
        "web-coordination": {
          title: "調整",
          description: "Autodesk Construction Cloudと同期した多分野干渉管理"
        },
        "web-sheets": {
          title: "施工図面",
          description: "マークアップツールとACC Build統合を備えた2D図面表示"
        },
        "web-reports": {
          title: "レポートと分析",
          description: "プロジェクトダッシュボード、チームパフォーマンス指標、エクスポート可能なレポート"
        },
        "revit-assistant": {
          title: "AIアシスタント",
          description: "Revit自動化のための自然言語と音声制御"
        },
        "revit-tasks": {
          title: "タスク管理",
          description: "要素追跡と時間記録を備えたRevit内でのタスク管理"
        },
        "revit-tools": {
          title: "ツールライブラリ",
          description: "Revit自動化のためのPythonスクリプト、C#スクリプト、DLLプラグイン"
        },
        "revit-projects": {
          title: "プロジェクト管理",
          description: "チーム管理、予算追跡、マイルストーン計画"
        },
        "revit-acc": {
          title: "ACC統合",
          description: "モデル同期と調整のためのAutodesk Construction Cloud接続"
        },
        "api-reference": {
          title: "APIリファレンス",
          description: "開発者と統合のための技術文書"
        }
      },
      legal: {
        terms: "利用規約",
        privacy: "プライバシーポリシー",
        cookies: "クッキーポリシー",
        dpa: "データ処理契約",
        subprocessors: "サブプロセッサー",
        ai: "AI追加条項",
        developer: "開発者規約",
        integrations: "統合マネージャー",
        security: "セキュリティポリシー"
      }
    }
  },
  fr: {
    docs: {
      navigation: "Documentation",
      legalTitle: "Sécurité et Politiques",
      legalLastUpdated: "24 décembre 2024",
      legalPoliciesTitle: "Mentions légales et politiques",
      categories: {
        webPlatform: "Plateforme Web",
        revitAddin: "Extension Revit",
        developer: "Développeur"
      },
      sections: {
        "getting-started": {
          title: "Premiers pas",
          description: "Tout ce dont vous avez besoin pour démarrer avec InvoratecAI"
        },
        "installation": {
          title: "Installation",
          description: "Guides d'installation étape par étape pour BIM AI et Web AI"
        },
        "configuration": {
          title: "Configuration",
          description: "Personnalisez InvoratecAI selon votre flux de travail"
        },
        "web-tasks": {
          title: "Gestion des tâches",
          description: "Créez des pages de tâches personnalisées avec plus de 45 types de propriétés"
        },
        "web-viewer": {
          title: "Visionneuse 3D",
          description: "Visualisation interactive des modèles avec APS, inspection et mesures"
        },
        "web-timeline": {
          title: "Chronologie et Gantt",
          description: "Planification visuelle de projet avec dépendances et jalons"
        },
        "web-coordination": {
          title: "Coordination",
          description: "Gestion des conflits multi-disciplines synchronisée avec ACC"
        },
        "web-sheets": {
          title: "Plans d'exécution",
          description: "Visualisation 2D avec outils d'annotation et intégration ACC Build"
        },
        "web-reports": {
          title: "Rapports et analyses",
          description: "Tableaux de bord projet, métriques d'équipe et rapports exportables"
        },
        "revit-assistant": {
          title: "Assistant IA",
          description: "Commandes en langage naturel et vocales pour l'automatisation Revit"
        },
        "revit-tasks": {
          title: "Gestion des tâches",
          description: "Gérez les tâches dans Revit avec suivi des éléments et du temps"
        },
        "revit-tools": {
          title: "Bibliothèque d'outils",
          description: "Scripts Python, C# et plugins DLL pour l'automatisation Revit"
        },
        "revit-projects": {
          title: "Gestion de projet",
          description: "Gestion d'équipe, suivi budgétaire et planification des jalons"
        },
        "revit-acc": {
          title: "Intégration ACC",
          description: "Connexion à Autodesk Construction Cloud pour sync et coordination"
        },
        "api-reference": {
          title: "Référence API",
          description: "Documentation technique pour développeurs et intégrations"
        }
      },
      legal: {
        terms: "Conditions d'utilisation",
        privacy: "Politique de confidentialité",
        cookies: "Politique de cookies",
        dpa: "Accord de traitement des données",
        subprocessors: "Sous-traitants",
        ai: "Conditions IA supplémentaires",
        developer: "Conditions développeur",
        integrations: "Gestionnaire d'intégrations",
        security: "Politique de sécurité"
      }
    }
  },
  de: {
    docs: {
      navigation: "Dokumentation",
      legalTitle: "Sicherheit & Richtlinien",
      legalLastUpdated: "24. Dezember 2024",
      legalPoliciesTitle: "Rechtliches & Richtlinien",
      categories: {
        webPlatform: "Web-Plattform",
        revitAddin: "Revit-Add-in",
        developer: "Entwickler"
      },
      sections: {
        "getting-started": {
          title: "Erste Schritte",
          description: "Alles, was Sie für den Einstieg mit InvoratecAI benötigen"
        },
        "installation": {
          title: "Installation",
          description: "Schritt-für-Schritt-Installationsanleitungen für BIM AI und Web AI"
        },
        "configuration": {
          title: "Konfiguration",
          description: "Passen Sie InvoratecAI an Ihren Workflow an"
        },
        "web-tasks": {
          title: "Aufgabenverwaltung",
          description: "Erstellen Sie benutzerdefinierte Aufgabenseiten mit über 45 Eigenschaftstypen"
        },
        "web-viewer": {
          title: "3D-Modell-Viewer",
          description: "Interaktive APS-gestützte Modellansicht mit Elementinspektion und Messungen"
        },
        "web-timeline": {
          title: "Zeitachse & Gantt",
          description: "Visuelle Projektplanung mit Abhängigkeiten und Meilensteinverfolgung"
        },
        "web-coordination": {
          title: "Koordination",
          description: "Multi-Disziplin-Kollisionsmanagement synchronisiert mit ACC"
        },
        "web-sheets": {
          title: "Werkstattzeichnungen",
          description: "2D-Zeichnungsansicht mit Markierungstools und ACC Build-Integration"
        },
        "web-reports": {
          title: "Berichte & Analysen",
          description: "Projekt-Dashboards, Team-Performance-Metriken und exportierbare Berichte"
        },
        "revit-assistant": {
          title: "KI-Assistent",
          description: "Natürliche Sprache und Sprachsteuerung für Revit-Automatisierung"
        },
        "revit-tasks": {
          title: "Aufgabenverwaltung",
          description: "Verwalten Sie Aufgaben in Revit mit Elementverfolgung und Zeiterfassung"
        },
        "revit-tools": {
          title: "Tool-Bibliothek",
          description: "Python-Skripte, C#-Skripte und DLL-Plugins für Revit-Automatisierung"
        },
        "revit-projects": {
          title: "Projektmanagement",
          description: "Teamverwaltung, Budgetverfolgung und Meilensteinplanung"
        },
        "revit-acc": {
          title: "ACC-Integration",
          description: "Verbindung zu Autodesk Construction Cloud für Modellsync und Koordination"
        },
        "api-reference": {
          title: "API-Referenz",
          description: "Technische Dokumentation für Entwickler und Integrationen"
        }
      },
      legal: {
        terms: "Nutzungsbedingungen",
        privacy: "Datenschutzrichtlinie",
        cookies: "Cookie-Richtlinie",
        dpa: "Datenverarbeitungsvereinbarung",
        subprocessors: "Unterauftragsverarbeiter",
        ai: "KI-Zusatzbedingungen",
        developer: "Entwicklerbedingungen",
        integrations: "Integrationsmanager",
        security: "Sicherheitsrichtlinie"
      }
    }
  },
  es: {
    docs: {
      navigation: "Documentación",
      legalTitle: "Seguridad y Políticas",
      legalLastUpdated: "24 de diciembre de 2024",
      legalPoliciesTitle: "Legal y Políticas",
      categories: {
        webPlatform: "Plataforma Web",
        revitAddin: "Add-in de Revit",
        developer: "Desarrollador"
      },
      sections: {
        "getting-started": {
          title: "Primeros pasos",
          description: "Todo lo que necesitas para empezar con InvoratecAI"
        },
        "installation": {
          title: "Instalación",
          description: "Guías de instalación paso a paso para BIM AI y Web AI"
        },
        "configuration": {
          title: "Configuración",
          description: "Personaliza InvoratecAI según tu flujo de trabajo"
        },
        "web-tasks": {
          title: "Gestión de tareas",
          description: "Crea páginas de tareas personalizadas con más de 45 tipos de propiedades"
        },
        "web-viewer": {
          title: "Visor 3D",
          description: "Visualización interactiva de modelos con APS, inspección y mediciones"
        },
        "web-timeline": {
          title: "Cronología y Gantt",
          description: "Programación visual de proyectos con dependencias y seguimiento de hitos"
        },
        "web-coordination": {
          title: "Coordinación",
          description: "Gestión de conflictos multi-disciplina sincronizada con ACC"
        },
        "web-sheets": {
          title: "Planos de taller",
          description: "Visualización 2D con herramientas de marcado e integración ACC Build"
        },
        "web-reports": {
          title: "Informes y análisis",
          description: "Paneles de proyecto, métricas de equipo e informes exportables"
        },
        "revit-assistant": {
          title: "Asistente IA",
          description: "Control por lenguaje natural y voz para automatización de Revit"
        },
        "revit-tasks": {
          title: "Gestión de tareas",
          description: "Gestiona tareas en Revit con seguimiento de elementos y registro de tiempo"
        },
        "revit-tools": {
          title: "Biblioteca de herramientas",
          description: "Scripts Python, C# y plugins DLL para automatización de Revit"
        },
        "revit-projects": {
          title: "Gestión de proyectos",
          description: "Gestión de equipos, seguimiento de presupuesto y planificación de hitos"
        },
        "revit-acc": {
          title: "Integración ACC",
          description: "Conexión a Autodesk Construction Cloud para sync y coordinación"
        },
        "api-reference": {
          title: "Referencia API",
          description: "Documentación técnica para desarrolladores e integraciones"
        }
      },
      legal: {
        terms: "Términos de servicio",
        privacy: "Política de privacidad",
        cookies: "Política de cookies",
        dpa: "Acuerdo de procesamiento de datos",
        subprocessors: "Subprocesadores",
        ai: "Términos adicionales de IA",
        developer: "Términos de desarrollador",
        integrations: "Gestor de integraciones",
        security: "Política de seguridad"
      }
    }
  },
  pt: {
    docs: {
      navigation: "Documentação",
      legalTitle: "Segurança e Políticas",
      legalLastUpdated: "24 de dezembro de 2024",
      legalPoliciesTitle: "Legal e Políticas",
      categories: {
        webPlatform: "Plataforma Web",
        revitAddin: "Add-in do Revit",
        developer: "Desenvolvedor"
      },
      sections: {
        "getting-started": {
          title: "Primeiros passos",
          description: "Tudo o que você precisa para começar com InvoratecAI"
        },
        "installation": {
          title: "Instalação",
          description: "Guias de instalação passo a passo para BIM AI e Web AI"
        },
        "configuration": {
          title: "Configuração",
          description: "Personalize o InvoratecAI de acordo com seu fluxo de trabalho"
        },
        "web-tasks": {
          title: "Gerenciamento de tarefas",
          description: "Crie páginas de tarefas personalizadas com mais de 45 tipos de propriedades"
        },
        "web-viewer": {
          title: "Visualizador 3D",
          description: "Visualização interativa de modelos com APS, inspeção e medições"
        },
        "web-timeline": {
          title: "Cronograma e Gantt",
          description: "Programação visual de projetos com dependências e marcos"
        },
        "web-coordination": {
          title: "Coordenação",
          description: "Gerenciamento de conflitos multi-disciplina sincronizado com ACC"
        },
        "web-sheets": {
          title: "Desenhos de execução",
          description: "Visualização 2D com ferramentas de marcação e integração ACC Build"
        },
        "web-reports": {
          title: "Relatórios e análises",
          description: "Painéis de projeto, métricas de equipe e relatórios exportáveis"
        },
        "revit-assistant": {
          title: "Assistente IA",
          description: "Controle por linguagem natural e voz para automação do Revit"
        },
        "revit-tasks": {
          title: "Gerenciamento de tarefas",
          description: "Gerencie tarefas no Revit com rastreamento de elementos e registro de tempo"
        },
        "revit-tools": {
          title: "Biblioteca de ferramentas",
          description: "Scripts Python, C# e plugins DLL para automação do Revit"
        },
        "revit-projects": {
          title: "Gerenciamento de projetos",
          description: "Gestão de equipe, rastreamento de orçamento e planejamento de marcos"
        },
        "revit-acc": {
          title: "Integração ACC",
          description: "Conexão com Autodesk Construction Cloud para sync e coordenação"
        },
        "api-reference": {
          title: "Referência API",
          description: "Documentação técnica para desenvolvedores e integrações"
        }
      },
      legal: {
        terms: "Termos de serviço",
        privacy: "Política de privacidade",
        cookies: "Política de cookies",
        dpa: "Acordo de processamento de dados",
        subprocessors: "Subprocessadores",
        ai: "Termos adicionais de IA",
        developer: "Termos de desenvolvedor",
        integrations: "Gerenciador de integrações",
        security: "Política de segurança"
      }
    }
  },
  ru: {
    docs: {
      navigation: "Документация",
      legalTitle: "Безопасность и политики",
      legalLastUpdated: "24 декабря 2024",
      legalPoliciesTitle: "Правовая информация",
      categories: {
        webPlatform: "Веб-платформа",
        revitAddin: "Дополнение Revit",
        developer: "Разработчик"
      },
      sections: {
        "getting-started": {
          title: "Начало работы",
          description: "Всё необходимое для начала работы с InvoratecAI"
        },
        "installation": {
          title: "Установка",
          description: "Пошаговые руководства по установке BIM AI и Web AI"
        },
        "configuration": {
          title: "Настройка",
          description: "Настройте InvoratecAI под ваш рабочий процесс"
        },
        "web-tasks": {
          title: "Управление задачами",
          description: "Создавайте пользовательские страницы задач с более чем 45 типами свойств"
        },
        "web-viewer": {
          title: "3D-просмотрщик",
          description: "Интерактивный просмотр моделей на базе APS с инспекцией и измерениями"
        },
        "web-timeline": {
          title: "Временная шкала и Гантт",
          description: "Визуальное планирование проекта с зависимостями и вехами"
        },
        "web-coordination": {
          title: "Координация",
          description: "Мультидисциплинарное управление коллизиями с синхронизацией ACC"
        },
        "web-sheets": {
          title: "Рабочие чертежи",
          description: "Просмотр 2D-чертежей с инструментами разметки и интеграцией ACC Build"
        },
        "web-reports": {
          title: "Отчёты и аналитика",
          description: "Панели проекта, метрики команды и экспортируемые отчёты"
        },
        "revit-assistant": {
          title: "ИИ-ассистент",
          description: "Управление естественным языком и голосом для автоматизации Revit"
        },
        "revit-tasks": {
          title: "Управление задачами",
          description: "Управляйте задачами в Revit с отслеживанием элементов и времени"
        },
        "revit-tools": {
          title: "Библиотека инструментов",
          description: "Python-скрипты, C#-скрипты и DLL-плагины для автоматизации Revit"
        },
        "revit-projects": {
          title: "Управление проектами",
          description: "Управление командой, отслеживание бюджета и планирование вех"
        },
        "revit-acc": {
          title: "Интеграция ACC",
          description: "Подключение к Autodesk Construction Cloud для синхронизации и координации"
        },
        "api-reference": {
          title: "Справочник API",
          description: "Техническая документация для разработчиков и интеграций"
        }
      },
      legal: {
        terms: "Условия использования",
        privacy: "Политика конфиденциальности",
        cookies: "Политика файлов cookie",
        dpa: "Соглашение об обработке данных",
        subprocessors: "Субпроцессоры",
        ai: "Дополнительные условия ИИ",
        developer: "Условия для разработчиков",
        integrations: "Менеджер интеграций",
        security: "Политика безопасности"
      }
    }
  },
  ar: {
    docs: {
      navigation: "الوثائق",
      legalTitle: "الأمان والسياسات",
      legalLastUpdated: "24 ديسمبر 2024",
      legalPoliciesTitle: "القانونية والسياسات",
      categories: {
        webPlatform: "منصة الويب",
        revitAddin: "إضافة Revit",
        developer: "المطور"
      },
      sections: {
        "getting-started": {
          title: "البدء",
          description: "كل ما تحتاجه للبدء مع InvoratecAI"
        },
        "installation": {
          title: "التثبيت",
          description: "أدلة تثبيت خطوة بخطوة لـ BIM AI و Web AI"
        },
        "configuration": {
          title: "الإعدادات",
          description: "خصص InvoratecAI ليناسب سير عملك"
        },
        "web-tasks": {
          title: "إدارة المهام",
          description: "أنشئ صفحات مهام مخصصة مع أكثر من 45 نوع خاصية"
        },
        "web-viewer": {
          title: "عارض 3D",
          description: "عرض تفاعلي للنماذج مع APS والفحص والقياسات"
        },
        "web-timeline": {
          title: "الجدول الزمني وغانت",
          description: "جدولة مرئية للمشروع مع التبعيات والمعالم"
        },
        "web-coordination": {
          title: "التنسيق",
          description: "إدارة التعارضات متعددة التخصصات متزامنة مع ACC"
        },
        "web-sheets": {
          title: "رسومات الورشة",
          description: "عرض 2D مع أدوات التعليق وتكامل ACC Build"
        },
        "web-reports": {
          title: "التقارير والتحليلات",
          description: "لوحات المشروع ومقاييس الفريق والتقارير القابلة للتصدير"
        },
        "revit-assistant": {
          title: "مساعد AI",
          description: "التحكم باللغة الطبيعية والصوت لأتمتة Revit"
        },
        "revit-tasks": {
          title: "إدارة المهام",
          description: "إدارة المهام في Revit مع تتبع العناصر والوقت"
        },
        "revit-tools": {
          title: "مكتبة الأدوات",
          description: "سكريبتات Python و C# وإضافات DLL لأتمتة Revit"
        },
        "revit-projects": {
          title: "إدارة المشاريع",
          description: "إدارة الفريق وتتبع الميزانية وتخطيط المعالم"
        },
        "revit-acc": {
          title: "تكامل ACC",
          description: "الاتصال بـ Autodesk Construction Cloud للمزامنة والتنسيق"
        },
        "api-reference": {
          title: "مرجع API",
          description: "وثائق تقنية للمطورين والتكاملات"
        }
      },
      legal: {
        terms: "شروط الخدمة",
        privacy: "سياسة الخصوصية",
        cookies: "سياسة ملفات تعريف الارتباط",
        dpa: "اتفاقية معالجة البيانات",
        subprocessors: "المعالجون الفرعيون",
        ai: "شروط AI الإضافية",
        developer: "شروط المطور",
        integrations: "مدير التكاملات",
        security: "سياسة الأمان"
      }
    }
  }
};

// Apply translations
const languages = Object.keys(docsTranslations);

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = deepMerge(existing, docsTranslations[lang]);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Added docs sections translations to ' + lang + '.json');
});

console.log('\nDocs sections translations complete!');
