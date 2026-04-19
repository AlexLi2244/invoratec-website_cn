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

const featuresPageTranslations = {
  pt: {
    featuresPage: {
      hero: {
        badge: "45+ tipos de propriedades • Integração BIM completa",
        title: "Visão geral completa dos recursos",
        subtitle: "Descubra todas as capacidades do InvoratecAI - desde gerenciamento flexível de tarefas baseado em banco de dados até automação Revit alimentada por IA"
      },
      webPlatform: {
        title: "Plataforma Web",
        subtitle: "Colaboração baseada em navegador",
        freeTrial: "Teste grátis de 7 dias",
        signupNow: "Cadastrar agora"
      },
      revitAddin: {
        title: "Add-in Revit",
        subtitle: "Plugin de desktop • Revit 2019-2026 suportado",
        freeTrial: "Teste grátis de 7 dias",
        downloadNow: "Baixar agora"
      },
      webFeatures: {
        tasks: {
          title: "Gerenciamento de tarefas",
          subtitle: "Sistema de tarefas flexível baseado em banco de dados",
          highlights: {
            customPages: { label: "Páginas personalizadas", desc: "Crie páginas de tarefas ilimitadas com propriedades personalizadas" },
            smartFiltering: { label: "Filtragem inteligente", desc: "Filtre por propriedade, responsável, status ou data" },
            excelImport: { label: "Importar/Exportar Excel", desc: "Importação em massa do Excel, exporte relatórios a qualquer momento" },
            subTasks: { label: "Subtarefas", desc: "Estrutura hierárquica de tarefas com relações pai-filho" }
          },
          properties: {
            text: { name: "Texto", type: "Básico", desc: "Campos de texto simples/multilinha" },
            number: { name: "Número", type: "Básico", desc: "Valores numéricos com formatação" },
            date: { name: "Data/Hora", type: "Básico", desc: "Seletores de data com suporte a hora" },
            select: { name: "Seleção/Multi-seleção", type: "Seleção", desc: "Opções suspensas com etiquetas coloridas" },
            status: { name: "Status", type: "Seleção", desc: "Rastreamento de status do fluxo de trabalho" },
            priority: { name: "Prioridade", type: "Seleção", desc: "Níveis de prioridade de tarefas" },
            person: { name: "Pessoa", type: "Pessoas", desc: "Atribuir membros da equipe" },
            checkbox: { name: "Caixa de seleção", type: "Básico", desc: "Interruptores booleanos" },
            url: { name: "URL/Email/Telefone", type: "Links", desc: "Links de contato clicáveis" },
            files: { name: "Arquivos", type: "Mídia", desc: "Anexos de arquivos" },
            relation: { name: "Relação", type: "Avançado", desc: "Vincular tarefas entre si" },
            rollup: { name: "Agregação", type: "Avançado", desc: "Agregar dados de relações" },
            formula: { name: "Fórmula", type: "Avançado", desc: "Campos calculados" },
            createdTime: { name: "Data de criação", type: "Auto", desc: "Carimbos de data automáticos" },
            createdBy: { name: "Criado por", type: "Auto", desc: "Usuário automático" }
          }
        },
        viewer: {
          title: "Visualizador 3D",
          subtitle: "Visualização interativa de modelos com APS",
          highlights: {
            isolation: { label: "Isolamento de elementos", desc: "Clique para isolar e inspecionar elementos" },
            properties: { label: "Inspetor de propriedades", desc: "Ver todos os parâmetros e propriedades dos elementos" },
            measurement: { label: "Ferramentas de medição", desc: "Medições de distância, área e ângulo" },
            section: { label: "Planos de corte", desc: "Criar cortes dinâmicos" }
          },
          properties: {
            viewer: { name: "Visualizador de modelo padrão", type: "BIM", desc: "Propriedade de visualizador 3D incorporado" },
            selection: { name: "Seleção de modelo", type: "Recurso", desc: "Selecionar modelos da pasta Invoratec" },
            linking: { name: "Vinculação de elementos", type: "Recurso", desc: "Vincular tarefas a elementos do modelo" },
            viewStates: { name: "Estados de vista", type: "Recurso", desc: "Salvar e restaurar posições de câmera" }
          }
        },
        timeline: {
          title: "Cronograma e Gantt",
          subtitle: "Planejamento visual de projetos",
          highlights: {
            gantt: { label: "Gráfico de Gantt", desc: "Cronograma visual com dependências" },
            dragDrop: { label: "Arrastar e soltar", desc: "Reagendar tarefas facilmente" },
            milestones: { label: "Marcos", desc: "Rastrear marcos-chave do projeto" },
            criticalPath: { label: "Caminho crítico", desc: "Identificar gargalos no cronograma" }
          },
          properties: {
            startDate: { name: "Data de início", type: "Data", desc: "Início da tarefa Gantt" },
            endDate: { name: "Data de término", type: "Data", desc: "Fim da tarefa Gantt" },
            dependencies: { name: "Dependências", type: "Relação", desc: "Links de dependência de tarefas" },
            progress: { name: "Progresso", type: "Número", desc: "Porcentagem de conclusão" }
          }
        },
        acc: {
          title: "Integração ACC",
          subtitle: "Sincronização com Autodesk Construction Cloud",
          highlights: {
            projects: { label: "Sincronização de projetos", desc: "Conectar projetos ACC diretamente" },
            issues: { label: "Sincronização de problemas", desc: "Importar e gerenciar problemas ACC" },
            models: { label: "Acesso a modelos", desc: "Navegar e visualizar modelos ACC" },
            bidirectional: { label: "Sincronização bidirecional", desc: "Atualizações refletidas em ambas as direções" }
          },
          properties: {
            accProject: { name: "Projeto ACC", type: "Integração", desc: "Link para projeto ACC" },
            accIssue: { name: "Problema ACC", type: "Integração", desc: "Problema ACC sincronizado" },
            syncStatus: { name: "Status de sincronização", type: "Auto", desc: "Status de sincronização ACC" }
          }
        },
        ai: {
          title: "Assistente IA",
          subtitle: "Produtividade alimentada por IA",
          highlights: {
            chat: { label: "Chat IA", desc: "Faça perguntas sobre suas tarefas e projetos" },
            automation: { label: "Automação", desc: "Automatizar fluxos de trabalho repetitivos" },
            insights: { label: "Insights", desc: "Obter sugestões inteligentes" },
            natural: { label: "Linguagem natural", desc: "Interagir em linguagem cotidiana" }
          }
        }
      },
      revitFeatures: {
        aiCommands: {
          title: "Comandos IA",
          subtitle: "Automação Revit alimentada por IA",
          highlights: {
            natural: { label: "Linguagem natural", desc: "Descreva o que você quer em português" },
            suggestions: { label: "Sugestões inteligentes", desc: "A IA sugere comandos relevantes" },
            batch: { label: "Operações em lote", desc: "Modificar múltiplos elementos de uma vez" },
            history: { label: "Histórico de comandos", desc: "Reutilizar comandos anteriores" }
          },
          commands: {
            select: { name: "Seleção inteligente", desc: "Selecionar elementos por critérios" },
            modify: { name: "Modificação em lote", desc: "Modificar parâmetros em massa" },
            create: { name: "Criação de elementos", desc: "Gerar novos elementos" },
            analyze: { name: "Análise", desc: "Analisar modelo em busca de problemas" }
          }
        },
        clash: {
          title: "Detecção de conflitos",
          subtitle: "Encontrar e resolver conflitos",
          highlights: {
            detect: { label: "Detecção automática", desc: "Encontrar conflitos automaticamente" },
            categorize: { label: "Categorização", desc: "Agrupar conflitos por tipo" },
            navigate: { label: "Navegação", desc: "Ir diretamente aos conflitos" },
            report: { label: "Relatórios", desc: "Exportar relatórios de conflitos" }
          }
        },
        design: {
          title: "Ferramentas de design",
          subtitle: "Melhorar o fluxo de trabalho de design",
          highlights: {
            templates: { label: "Modelos", desc: "Começar com modelos pré-projetados" },
            standards: { label: "Padrões", desc: "Aplicar padrões da empresa" },
            validation: { label: "Validação", desc: "Verificar conformidade do design" },
            documentation: { label: "Documentação", desc: "Gerar documentação automaticamente" }
          }
        },
        qaqc: {
          title: "Controle de qualidade",
          subtitle: "Garantia de qualidade do modelo",
          highlights: {
            rules: { label: "Regras personalizadas", desc: "Definir regras de validação personalizadas" },
            automated: { label: "Verificações automatizadas", desc: "Executar verificações automaticamente" },
            reports: { label: "Relatórios detalhados", desc: "Gerar relatórios de qualidade" },
            tracking: { label: "Rastreamento de problemas", desc: "Rastrear resolução de problemas" }
          }
        },
        sync: {
          title: "Sincronização Web",
          subtitle: "Conectar Revit à plataforma web",
          highlights: {
            realtime: { label: "Tempo real", desc: "Sincronização instantânea de mudanças" },
            selective: { label: "Sync seletiva", desc: "Escolher o que sincronizar" },
            conflict: { label: "Resolução de conflitos", desc: "Gerenciar mudanças conflitantes" },
            offline: { label: "Modo offline", desc: "Trabalhar sem conexão" }
          }
        }
      },
      propertySystem: {
        title: "Sistema de propriedades",
        subtitle: "Mais de 45 tipos de propriedades para modelar tudo",
        categories: {
          basic: "Básico",
          selection: "Seleção",
          people: "Pessoas",
          dateTime: "Data/Hora",
          media: "Mídia",
          advanced: "Avançado",
          bimAec: "BIM/AEC",
          auto: "Auto"
        },
        properties: {
          text: { name: "Texto", desc: "Campos de texto simples ou multilinha" },
          number: { name: "Número", desc: "Valores numéricos com formatação" },
          checkbox: { name: "Caixa de seleção", desc: "Valores verdadeiro/falso" },
          select: { name: "Seleção", desc: "Escolha única das opções" },
          multiSelect: { name: "Multi-seleção", desc: "Escolha múltipla das opções" },
          status: { name: "Status", desc: "Rastreamento de status do fluxo de trabalho" },
          priority: { name: "Prioridade", desc: "Níveis de prioridade de tarefas" },
          person: { name: "Pessoa", desc: "Atribuir membros da equipe" },
          date: { name: "Data", desc: "Seletor de data" },
          dateTime: { name: "Data/Hora", desc: "Data com hora" },
          dateRange: { name: "Intervalo de datas", desc: "Datas de início e término" },
          files: { name: "Arquivos", desc: "Anexos de arquivos" },
          images: { name: "Imagens", desc: "Galeria de imagens" },
          url: { name: "URL", desc: "Links da web" },
          email: { name: "Email", desc: "Endereços de email" },
          phone: { name: "Telefone", desc: "Números de telefone" },
          relation: { name: "Relação", desc: "Vincular a outras tarefas" },
          rollup: { name: "Agregação", desc: "Agregar dados de relações" },
          formula: { name: "Fórmula", desc: "Campos calculados" },
          viewer: { name: "Visualizador 3D", desc: "Visualizador de modelo incorporado" },
          modelElement: { name: "Elemento de modelo", desc: "Link para elementos BIM" },
          location: { name: "Localização", desc: "Coordenadas geográficas" },
          createdTime: { name: "Data de criação", desc: "Criação automática" },
          createdBy: { name: "Criado por", desc: "Criador automático" },
          lastEdited: { name: "Última edição", desc: "Última edição automática" },
          lastEditedBy: { name: "Editado por", desc: "Último editor automático" }
        }
      },
      cta: {
        title: "Pronto para começar?",
        subtitle: "Experimente o InvoratecAI gratuitamente por 7 dias",
        webButton: "Iniciar teste Web",
        revitButton: "Baixar add-in Revit"
      }
    }
  },
  ko: {
    featuresPage: {
      hero: {
        badge: "45개 이상의 속성 유형 • 완전한 BIM 통합",
        title: "전체 기능 개요",
        subtitle: "InvoratecAI의 모든 기능을 알아보세요 - 유연한 데이터베이스 기반 작업 관리부터 AI 기반 Revit 자동화까지"
      },
      webPlatform: {
        title: "웹 플랫폼",
        subtitle: "브라우저 기반 협업",
        freeTrial: "7일 무료 체험",
        signupNow: "지금 가입하기"
      },
      revitAddin: {
        title: "Revit 애드인",
        subtitle: "데스크톱 플러그인 • Revit 2019-2026 지원",
        freeTrial: "7일 무료 체험",
        downloadNow: "지금 다운로드"
      },
      webFeatures: {
        tasks: {
          title: "작업 관리",
          subtitle: "유연한 데이터베이스 기반 작업 시스템",
          highlights: {
            customPages: { label: "커스텀 페이지", desc: "사용자 정의 속성으로 무제한 작업 페이지 생성" },
            smartFiltering: { label: "스마트 필터링", desc: "속성, 담당자, 상태 또는 날짜로 필터링" },
            excelImport: { label: "Excel 가져오기/내보내기", desc: "Excel에서 대량 가져오기, 언제든지 보고서 내보내기" },
            subTasks: { label: "하위 작업", desc: "부모-자식 관계가 있는 계층적 작업 구조" }
          },
          properties: {
            text: { name: "텍스트", type: "기본", desc: "단일/다중 줄 텍스트 필드" },
            number: { name: "숫자", type: "기본", desc: "서식이 있는 숫자 값" },
            date: { name: "날짜/시간", type: "기본", desc: "시간 지원이 있는 날짜 선택기" },
            select: { name: "선택/다중 선택", type: "선택", desc: "색상 태그가 있는 드롭다운 옵션" },
            status: { name: "상태", type: "선택", desc: "워크플로 상태 추적" },
            priority: { name: "우선순위", type: "선택", desc: "작업 우선순위 레벨" },
            person: { name: "담당자", type: "사람", desc: "팀 멤버 할당" },
            checkbox: { name: "체크박스", type: "기본", desc: "부울 토글" },
            url: { name: "URL/이메일/전화", type: "링크", desc: "클릭 가능한 연락처 링크" },
            files: { name: "파일", type: "미디어", desc: "파일 첨부" },
            relation: { name: "관계", type: "고급", desc: "작업을 서로 연결" },
            rollup: { name: "롤업", type: "고급", desc: "관계에서 데이터 집계" },
            formula: { name: "수식", type: "고급", desc: "계산된 필드" },
            createdTime: { name: "생성 시간", type: "자동", desc: "자동 타임스탬프" },
            createdBy: { name: "생성자", type: "자동", desc: "자동 사용자" }
          }
        },
        viewer: {
          title: "3D 모델 뷰어",
          subtitle: "APS 기반 인터랙티브 모델 보기",
          highlights: {
            isolation: { label: "요소 분리", desc: "클릭하여 요소 분리 및 검사" },
            properties: { label: "속성 검사기", desc: "모든 요소 매개변수 및 속성 보기" },
            measurement: { label: "측정 도구", desc: "거리, 면적 및 각도 측정" },
            section: { label: "단면 평면", desc: "동적 단면 절단 생성" }
          },
          properties: {
            viewer: { name: "기본 모델 뷰어", type: "BIM", desc: "내장된 3D 모델 뷰어 속성" },
            selection: { name: "모델 선택", type: "기능", desc: "Invoratec 폴더에서 모델 선택" },
            linking: { name: "요소 연결", type: "기능", desc: "작업을 모델 요소에 연결" },
            viewStates: { name: "뷰 상태", type: "기능", desc: "카메라 위치 저장 및 복원" }
          }
        },
        timeline: {
          title: "타임라인 및 간트",
          subtitle: "시각적 프로젝트 일정 관리",
          highlights: {
            gantt: { label: "간트 차트", desc: "의존성이 있는 시각적 타임라인" },
            dragDrop: { label: "드래그 앤 드롭", desc: "작업을 쉽게 재일정" },
            milestones: { label: "마일스톤", desc: "주요 프로젝트 마일스톤 추적" },
            criticalPath: { label: "크리티컬 패스", desc: "일정 병목 현상 식별" }
          },
          properties: {
            startDate: { name: "시작일", type: "날짜", desc: "간트 작업 시작" },
            endDate: { name: "종료일", type: "날짜", desc: "간트 작업 종료" },
            dependencies: { name: "의존성", type: "관계", desc: "작업 의존성 링크" },
            progress: { name: "진행률", type: "숫자", desc: "완료 백분율" }
          }
        },
        acc: {
          title: "ACC 통합",
          subtitle: "Autodesk Construction Cloud 동기화",
          highlights: {
            projects: { label: "프로젝트 동기화", desc: "ACC 프로젝트에 직접 연결" },
            issues: { label: "이슈 동기화", desc: "ACC 이슈 가져오기 및 관리" },
            models: { label: "모델 접근", desc: "ACC 모델 탐색 및 보기" },
            bidirectional: { label: "양방향 동기화", desc: "업데이트가 양쪽에 반영" }
          },
          properties: {
            accProject: { name: "ACC 프로젝트", type: "통합", desc: "ACC 프로젝트 링크" },
            accIssue: { name: "ACC 이슈", type: "통합", desc: "동기화된 ACC 이슈" },
            syncStatus: { name: "동기화 상태", type: "자동", desc: "ACC 동기화 상태" }
          }
        },
        ai: {
          title: "AI 어시스턴트",
          subtitle: "AI 기반 생산성",
          highlights: {
            chat: { label: "AI 채팅", desc: "작업과 프로젝트에 대해 질문하기" },
            automation: { label: "자동화", desc: "반복적인 워크플로 자동화" },
            insights: { label: "인사이트", desc: "스마트 제안 받기" },
            natural: { label: "자연어", desc: "일상적인 언어로 상호작용" }
          }
        }
      },
      revitFeatures: {
        aiCommands: {
          title: "AI 명령",
          subtitle: "AI 기반 Revit 자동화",
          highlights: {
            natural: { label: "자연어", desc: "원하는 것을 한국어로 설명" },
            suggestions: { label: "스마트 제안", desc: "AI가 관련 명령 제안" },
            batch: { label: "일괄 작업", desc: "한 번에 여러 요소 수정" },
            history: { label: "명령 기록", desc: "이전 명령 재사용" }
          },
          commands: {
            select: { name: "스마트 선택", desc: "기준에 따라 요소 선택" },
            modify: { name: "일괄 수정", desc: "매개변수 대량 수정" },
            create: { name: "요소 생성", desc: "새 요소 생성" },
            analyze: { name: "분석", desc: "문제에 대해 모델 분석" }
          }
        },
        clash: {
          title: "충돌 감지",
          subtitle: "충돌 찾기 및 해결",
          highlights: {
            detect: { label: "자동 감지", desc: "자동으로 충돌 찾기" },
            categorize: { label: "분류", desc: "유형별로 충돌 그룹화" },
            navigate: { label: "탐색", desc: "충돌로 직접 이동" },
            report: { label: "보고서", desc: "충돌 보고서 내보내기" }
          }
        },
        design: {
          title: "디자인 도구",
          subtitle: "디자인 워크플로 향상",
          highlights: {
            templates: { label: "템플릿", desc: "미리 만들어진 템플릿으로 시작" },
            standards: { label: "표준", desc: "회사 표준 적용" },
            validation: { label: "검증", desc: "디자인 준수 확인" },
            documentation: { label: "문서화", desc: "자동으로 문서 생성" }
          }
        },
        qaqc: {
          title: "품질 관리",
          subtitle: "모델 품질 보증",
          highlights: {
            rules: { label: "커스텀 규칙", desc: "사용자 정의 검증 규칙 정의" },
            automated: { label: "자동화된 검사", desc: "자동으로 검사 실행" },
            reports: { label: "상세 보고서", desc: "품질 보고서 생성" },
            tracking: { label: "이슈 추적", desc: "이슈 해결 추적" }
          }
        },
        sync: {
          title: "웹 동기화",
          subtitle: "Revit을 웹 플랫폼에 연결",
          highlights: {
            realtime: { label: "실시간", desc: "변경 사항 즉시 동기화" },
            selective: { label: "선택적 동기화", desc: "동기화할 항목 선택" },
            conflict: { label: "충돌 해결", desc: "충돌하는 변경 사항 처리" },
            offline: { label: "오프라인 모드", desc: "연결 없이 작업" }
          }
        }
      },
      propertySystem: {
        title: "속성 시스템",
        subtitle: "모든 것을 모델링하기 위한 45개 이상의 속성 유형",
        categories: {
          basic: "기본",
          selection: "선택",
          people: "사람",
          dateTime: "날짜/시간",
          media: "미디어",
          advanced: "고급",
          bimAec: "BIM/AEC",
          auto: "자동"
        },
        properties: {
          text: { name: "텍스트", desc: "단일 또는 다중 줄 텍스트 필드" },
          number: { name: "숫자", desc: "서식이 있는 숫자 값" },
          checkbox: { name: "체크박스", desc: "참/거짓 값" },
          select: { name: "선택", desc: "옵션에서 단일 선택" },
          multiSelect: { name: "다중 선택", desc: "옵션에서 다중 선택" },
          status: { name: "상태", desc: "워크플로 상태 추적" },
          priority: { name: "우선순위", desc: "작업 우선순위 레벨" },
          person: { name: "담당자", desc: "팀 멤버 할당" },
          date: { name: "날짜", desc: "날짜 선택기" },
          dateTime: { name: "날짜/시간", desc: "시간이 있는 날짜" },
          dateRange: { name: "날짜 범위", desc: "시작 및 종료 날짜" },
          files: { name: "파일", desc: "파일 첨부" },
          images: { name: "이미지", desc: "이미지 갤러리" },
          url: { name: "URL", desc: "웹 링크" },
          email: { name: "이메일", desc: "이메일 주소" },
          phone: { name: "전화", desc: "전화번호" },
          relation: { name: "관계", desc: "다른 작업에 연결" },
          rollup: { name: "롤업", desc: "관계에서 데이터 집계" },
          formula: { name: "수식", desc: "계산된 필드" },
          viewer: { name: "3D 뷰어", desc: "내장된 모델 뷰어" },
          modelElement: { name: "모델 요소", desc: "BIM 요소 링크" },
          location: { name: "위치", desc: "지리적 좌표" },
          createdTime: { name: "생성 시간", desc: "자동 생성" },
          createdBy: { name: "생성자", desc: "자동 생성자" },
          lastEdited: { name: "최근 수정", desc: "자동 최근 수정" },
          lastEditedBy: { name: "수정자", desc: "자동 최근 수정자" }
        }
      },
      cta: {
        title: "시작할 준비가 되셨나요?",
        subtitle: "InvoratecAI를 7일간 무료로 체험하세요",
        webButton: "웹 체험 시작",
        revitButton: "Revit 애드인 다운로드"
      }
    }
  },
  ru: {
    featuresPage: {
      hero: {
        badge: "45+ типов свойств • Полная интеграция BIM",
        title: "Полный обзор функций",
        subtitle: "Откройте для себя все возможности InvoratecAI - от гибкого управления задачами на базе данных до автоматизации Revit на основе ИИ"
      },
      webPlatform: {
        title: "Веб-платформа",
        subtitle: "Совместная работа в браузере",
        freeTrial: "7 дней бесплатно",
        signupNow: "Зарегистрироваться"
      },
      revitAddin: {
        title: "Дополнение Revit",
        subtitle: "Плагин для ПК • Поддержка Revit 2019-2026",
        freeTrial: "7 дней бесплатно",
        downloadNow: "Скачать сейчас"
      },
      webFeatures: {
        tasks: {
          title: "Управление задачами",
          subtitle: "Гибкая система задач на базе данных",
          highlights: {
            customPages: { label: "Пользовательские страницы", desc: "Создавайте неограниченное количество страниц задач с настраиваемыми свойствами" },
            smartFiltering: { label: "Умная фильтрация", desc: "Фильтрация по свойству, исполнителю, статусу или дате" },
            excelImport: { label: "Импорт/Экспорт Excel", desc: "Массовый импорт из Excel, экспорт отчетов в любое время" },
            subTasks: { label: "Подзадачи", desc: "Иерархическая структура задач с родительско-дочерними связями" }
          },
          properties: {
            text: { name: "Текст", type: "Базовый", desc: "Однострочные/многострочные текстовые поля" },
            number: { name: "Число", type: "Базовый", desc: "Числовые значения с форматированием" },
            date: { name: "Дата/Время", type: "Базовый", desc: "Выбор даты с поддержкой времени" },
            select: { name: "Выбор/Множественный выбор", type: "Выбор", desc: "Выпадающие опции с цветными тегами" },
            status: { name: "Статус", type: "Выбор", desc: "Отслеживание статуса рабочего процесса" },
            priority: { name: "Приоритет", type: "Выбор", desc: "Уровни приоритета задач" },
            person: { name: "Человек", type: "Люди", desc: "Назначение членов команды" },
            checkbox: { name: "Чекбокс", type: "Базовый", desc: "Логические переключатели" },
            url: { name: "URL/Email/Телефон", type: "Ссылки", desc: "Кликабельные контактные ссылки" },
            files: { name: "Файлы", type: "Медиа", desc: "Вложения файлов" },
            relation: { name: "Связь", type: "Расширенный", desc: "Связывание задач между собой" },
            rollup: { name: "Свертка", type: "Расширенный", desc: "Агрегация данных из связей" },
            formula: { name: "Формула", type: "Расширенный", desc: "Вычисляемые поля" },
            createdTime: { name: "Время создания", type: "Авто", desc: "Автоматические метки времени" },
            createdBy: { name: "Создано", type: "Авто", desc: "Автоматический пользователь" }
          }
        },
        viewer: {
          title: "3D Просмотрщик",
          subtitle: "Интерактивный просмотр моделей на базе APS",
          highlights: {
            isolation: { label: "Изоляция элементов", desc: "Нажмите для изоляции и проверки элементов" },
            properties: { label: "Инспектор свойств", desc: "Просмотр всех параметров и свойств элементов" },
            measurement: { label: "Инструменты измерения", desc: "Измерения расстояния, площади и угла" },
            section: { label: "Секущие плоскости", desc: "Создание динамических разрезов" }
          },
          properties: {
            viewer: { name: "Просмотрщик по умолчанию", type: "BIM", desc: "Встроенное свойство 3D просмотрщика" },
            selection: { name: "Выбор модели", type: "Функция", desc: "Выбор моделей из папки Invoratec" },
            linking: { name: "Связывание элементов", type: "Функция", desc: "Связывание задач с элементами модели" },
            viewStates: { name: "Состояния вида", type: "Функция", desc: "Сохранение и восстановление позиций камеры" }
          }
        },
        timeline: {
          title: "Временная шкала и Гантт",
          subtitle: "Визуальное планирование проекта",
          highlights: {
            gantt: { label: "Диаграмма Гантта", desc: "Визуальная временная шкала с зависимостями" },
            dragDrop: { label: "Перетаскивание", desc: "Легко перепланируйте задачи" },
            milestones: { label: "Вехи", desc: "Отслеживание ключевых вех проекта" },
            criticalPath: { label: "Критический путь", desc: "Выявление узких мест в расписании" }
          },
          properties: {
            startDate: { name: "Дата начала", type: "Дата", desc: "Начало задачи Гантта" },
            endDate: { name: "Дата окончания", type: "Дата", desc: "Окончание задачи Гантта" },
            dependencies: { name: "Зависимости", type: "Связь", desc: "Ссылки зависимостей задач" },
            progress: { name: "Прогресс", type: "Число", desc: "Процент выполнения" }
          }
        },
        acc: {
          title: "Интеграция ACC",
          subtitle: "Синхронизация с Autodesk Construction Cloud",
          highlights: {
            projects: { label: "Синхронизация проектов", desc: "Прямое подключение проектов ACC" },
            issues: { label: "Синхронизация проблем", desc: "Импорт и управление проблемами ACC" },
            models: { label: "Доступ к моделям", desc: "Просмотр и обзор моделей ACC" },
            bidirectional: { label: "Двусторонняя синхронизация", desc: "Обновления отражаются в обе стороны" }
          },
          properties: {
            accProject: { name: "Проект ACC", type: "Интеграция", desc: "Ссылка на проект ACC" },
            accIssue: { name: "Проблема ACC", type: "Интеграция", desc: "Синхронизированная проблема ACC" },
            syncStatus: { name: "Статус синхронизации", type: "Авто", desc: "Статус синхронизации ACC" }
          }
        },
        ai: {
          title: "ИИ-ассистент",
          subtitle: "Продуктивность на основе ИИ",
          highlights: {
            chat: { label: "ИИ-чат", desc: "Задавайте вопросы о своих задачах и проектах" },
            automation: { label: "Автоматизация", desc: "Автоматизируйте повторяющиеся рабочие процессы" },
            insights: { label: "Аналитика", desc: "Получайте умные предложения" },
            natural: { label: "Естественный язык", desc: "Общайтесь на повседневном языке" }
          }
        }
      },
      revitFeatures: {
        aiCommands: {
          title: "ИИ-команды",
          subtitle: "Автоматизация Revit на основе ИИ",
          highlights: {
            natural: { label: "Естественный язык", desc: "Опишите на русском, что вы хотите" },
            suggestions: { label: "Умные предложения", desc: "ИИ предлагает релевантные команды" },
            batch: { label: "Пакетные операции", desc: "Изменение нескольких элементов сразу" },
            history: { label: "История команд", desc: "Повторное использование предыдущих команд" }
          },
          commands: {
            select: { name: "Умный выбор", desc: "Выбор элементов по критериям" },
            modify: { name: "Пакетное изменение", desc: "Массовое изменение параметров" },
            create: { name: "Создание элементов", desc: "Генерация новых элементов" },
            analyze: { name: "Анализ", desc: "Анализ модели на проблемы" }
          }
        },
        clash: {
          title: "Обнаружение коллизий",
          subtitle: "Поиск и разрешение коллизий",
          highlights: {
            detect: { label: "Автообнаружение", desc: "Автоматический поиск коллизий" },
            categorize: { label: "Категоризация", desc: "Группировка коллизий по типу" },
            navigate: { label: "Навигация", desc: "Переход непосредственно к коллизиям" },
            report: { label: "Отчеты", desc: "Экспорт отчетов о коллизиях" }
          }
        },
        design: {
          title: "Инструменты проектирования",
          subtitle: "Улучшение рабочего процесса проектирования",
          highlights: {
            templates: { label: "Шаблоны", desc: "Начало с готовых шаблонов" },
            standards: { label: "Стандарты", desc: "Применение стандартов компании" },
            validation: { label: "Валидация", desc: "Проверка соответствия дизайна" },
            documentation: { label: "Документация", desc: "Автоматическая генерация документации" }
          }
        },
        qaqc: {
          title: "Контроль качества",
          subtitle: "Обеспечение качества модели",
          highlights: {
            rules: { label: "Пользовательские правила", desc: "Определение пользовательских правил валидации" },
            automated: { label: "Автоматические проверки", desc: "Автоматический запуск проверок" },
            reports: { label: "Детальные отчеты", desc: "Генерация отчетов о качестве" },
            tracking: { label: "Отслеживание проблем", desc: "Отслеживание решения проблем" }
          }
        },
        sync: {
          title: "Веб-синхронизация",
          subtitle: "Подключение Revit к веб-платформе",
          highlights: {
            realtime: { label: "Реальное время", desc: "Мгновенная синхронизация изменений" },
            selective: { label: "Выборочная синхронизация", desc: "Выбор того, что синхронизировать" },
            conflict: { label: "Разрешение конфликтов", desc: "Обработка конфликтующих изменений" },
            offline: { label: "Офлайн-режим", desc: "Работа без подключения" }
          }
        }
      },
      propertySystem: {
        title: "Система свойств",
        subtitle: "Более 45 типов свойств для моделирования всего",
        categories: {
          basic: "Базовый",
          selection: "Выбор",
          people: "Люди",
          dateTime: "Дата/Время",
          media: "Медиа",
          advanced: "Расширенный",
          bimAec: "BIM/AEC",
          auto: "Авто"
        },
        properties: {
          text: { name: "Текст", desc: "Однострочные или многострочные текстовые поля" },
          number: { name: "Число", desc: "Числовые значения с форматированием" },
          checkbox: { name: "Чекбокс", desc: "Значения истина/ложь" },
          select: { name: "Выбор", desc: "Единственный выбор из опций" },
          multiSelect: { name: "Множественный выбор", desc: "Множественный выбор из опций" },
          status: { name: "Статус", desc: "Отслеживание статуса рабочего процесса" },
          priority: { name: "Приоритет", desc: "Уровни приоритета задач" },
          person: { name: "Человек", desc: "Назначение членов команды" },
          date: { name: "Дата", desc: "Выбор даты" },
          dateTime: { name: "Дата/Время", desc: "Дата с временем" },
          dateRange: { name: "Диапазон дат", desc: "Даты начала и окончания" },
          files: { name: "Файлы", desc: "Вложения файлов" },
          images: { name: "Изображения", desc: "Галерея изображений" },
          url: { name: "URL", desc: "Веб-ссылки" },
          email: { name: "Email", desc: "Адреса электронной почты" },
          phone: { name: "Телефон", desc: "Номера телефонов" },
          relation: { name: "Связь", desc: "Связь с другими задачами" },
          rollup: { name: "Свертка", desc: "Агрегация данных из связей" },
          formula: { name: "Формула", desc: "Вычисляемые поля" },
          viewer: { name: "3D Просмотрщик", desc: "Встроенный просмотрщик модели" },
          modelElement: { name: "Элемент модели", desc: "Ссылка на элементы BIM" },
          location: { name: "Местоположение", desc: "Географические координаты" },
          createdTime: { name: "Время создания", desc: "Автоматическое создание" },
          createdBy: { name: "Создано", desc: "Автоматический создатель" },
          lastEdited: { name: "Последнее редактирование", desc: "Автоматическое последнее редактирование" },
          lastEditedBy: { name: "Редактор", desc: "Автоматический последний редактор" }
        }
      },
      cta: {
        title: "Готовы начать?",
        subtitle: "Попробуйте InvoratecAI бесплатно в течение 7 дней",
        webButton: "Начать веб-версию",
        revitButton: "Скачать дополнение Revit"
      }
    }
  },
  ar: {
    featuresPage: {
      hero: {
        badge: "أكثر من 45 نوع خاصية • تكامل BIM كامل",
        title: "نظرة شاملة على الميزات",
        subtitle: "اكتشف جميع إمكانيات InvoratecAI - من إدارة المهام المرنة القائمة على قاعدة البيانات إلى أتمتة Revit المدعومة بالذكاء الاصطناعي"
      },
      webPlatform: {
        title: "منصة الويب",
        subtitle: "تعاون قائم على المتصفح",
        freeTrial: "تجربة مجانية لمدة 7 أيام",
        signupNow: "سجل الآن"
      },
      revitAddin: {
        title: "إضافة Revit",
        subtitle: "مكون إضافي لسطح المكتب • دعم Revit 2019-2026",
        freeTrial: "تجربة مجانية لمدة 7 أيام",
        downloadNow: "تنزيل الآن"
      },
      webFeatures: {
        tasks: {
          title: "إدارة المهام",
          subtitle: "نظام مهام مرن قائم على قاعدة البيانات",
          highlights: {
            customPages: { label: "صفحات مخصصة", desc: "إنشاء صفحات مهام غير محدودة بخصائص مخصصة" },
            smartFiltering: { label: "تصفية ذكية", desc: "تصفية حسب الخاصية أو المسؤول أو الحالة أو التاريخ" },
            excelImport: { label: "استيراد/تصدير Excel", desc: "استيراد جماعي من Excel، تصدير التقارير في أي وقت" },
            subTasks: { label: "المهام الفرعية", desc: "هيكل مهام هرمي مع علاقات الأب والابن" }
          },
          properties: {
            text: { name: "نص", type: "أساسي", desc: "حقول نصية مفردة/متعددة الأسطر" },
            number: { name: "رقم", type: "أساسي", desc: "قيم رقمية مع التنسيق" },
            date: { name: "تاريخ/وقت", type: "أساسي", desc: "منتقي التاريخ مع دعم الوقت" },
            select: { name: "اختيار/اختيار متعدد", type: "اختيار", desc: "خيارات منسدلة مع علامات ملونة" },
            status: { name: "الحالة", type: "اختيار", desc: "تتبع حالة سير العمل" },
            priority: { name: "الأولوية", type: "اختيار", desc: "مستويات أولوية المهام" },
            person: { name: "شخص", type: "الأشخاص", desc: "تعيين أعضاء الفريق" },
            checkbox: { name: "مربع اختيار", type: "أساسي", desc: "مفاتيح منطقية" },
            url: { name: "رابط/بريد/هاتف", type: "روابط", desc: "روابط اتصال قابلة للنقر" },
            files: { name: "ملفات", type: "وسائط", desc: "مرفقات الملفات" },
            relation: { name: "علاقة", type: "متقدم", desc: "ربط المهام ببعضها" },
            rollup: { name: "تجميع", type: "متقدم", desc: "تجميع البيانات من العلاقات" },
            formula: { name: "صيغة", type: "متقدم", desc: "حقول محسوبة" },
            createdTime: { name: "وقت الإنشاء", type: "تلقائي", desc: "طوابع زمنية تلقائية" },
            createdBy: { name: "أنشئ بواسطة", type: "تلقائي", desc: "مستخدم تلقائي" }
          }
        },
        viewer: {
          title: "عارض 3D",
          subtitle: "عرض نموذج تفاعلي مدعوم بـ APS",
          highlights: {
            isolation: { label: "عزل العناصر", desc: "انقر لعزل وفحص العناصر" },
            properties: { label: "مفتش الخصائص", desc: "عرض جميع معلمات وخصائص العناصر" },
            measurement: { label: "أدوات القياس", desc: "قياسات المسافة والمساحة والزاوية" },
            section: { label: "مستويات المقطع", desc: "إنشاء مقاطع ديناميكية" }
          },
          properties: {
            viewer: { name: "عارض النموذج الافتراضي", type: "BIM", desc: "خاصية عارض 3D مضمنة" },
            selection: { name: "اختيار النموذج", type: "ميزة", desc: "اختيار النماذج من مجلد Invoratec" },
            linking: { name: "ربط العناصر", type: "ميزة", desc: "ربط المهام بعناصر النموذج" },
            viewStates: { name: "حالات العرض", type: "ميزة", desc: "حفظ واستعادة مواضع الكاميرا" }
          }
        },
        timeline: {
          title: "الجدول الزمني وغانت",
          subtitle: "جدولة مشروع مرئية",
          highlights: {
            gantt: { label: "مخطط غانت", desc: "جدول زمني مرئي مع التبعيات" },
            dragDrop: { label: "السحب والإفلات", desc: "إعادة جدولة المهام بسهولة" },
            milestones: { label: "المعالم", desc: "تتبع معالم المشروع الرئيسية" },
            criticalPath: { label: "المسار الحرج", desc: "تحديد اختناقات الجدول" }
          },
          properties: {
            startDate: { name: "تاريخ البدء", type: "تاريخ", desc: "بداية مهمة غانت" },
            endDate: { name: "تاريخ الانتهاء", type: "تاريخ", desc: "نهاية مهمة غانت" },
            dependencies: { name: "التبعيات", type: "علاقة", desc: "روابط تبعية المهام" },
            progress: { name: "التقدم", type: "رقم", desc: "نسبة الإنجاز" }
          }
        },
        acc: {
          title: "تكامل ACC",
          subtitle: "مزامنة Autodesk Construction Cloud",
          highlights: {
            projects: { label: "مزامنة المشاريع", desc: "توصيل مشاريع ACC مباشرة" },
            issues: { label: "مزامنة المشكلات", desc: "استيراد وإدارة مشكلات ACC" },
            models: { label: "الوصول للنماذج", desc: "تصفح وعرض نماذج ACC" },
            bidirectional: { label: "مزامنة ثنائية", desc: "التحديثات تنعكس في كلا الاتجاهين" }
          },
          properties: {
            accProject: { name: "مشروع ACC", type: "تكامل", desc: "رابط لمشروع ACC" },
            accIssue: { name: "مشكلة ACC", type: "تكامل", desc: "مشكلة ACC متزامنة" },
            syncStatus: { name: "حالة المزامنة", type: "تلقائي", desc: "حالة مزامنة ACC" }
          }
        },
        ai: {
          title: "مساعد الذكاء الاصطناعي",
          subtitle: "إنتاجية مدعومة بالذكاء الاصطناعي",
          highlights: {
            chat: { label: "دردشة AI", desc: "اسأل عن مهامك ومشاريعك" },
            automation: { label: "الأتمتة", desc: "أتمتة سير العمل المتكرر" },
            insights: { label: "الرؤى", desc: "احصل على اقتراحات ذكية" },
            natural: { label: "لغة طبيعية", desc: "تفاعل باللغة اليومية" }
          }
        }
      },
      revitFeatures: {
        aiCommands: {
          title: "أوامر الذكاء الاصطناعي",
          subtitle: "أتمتة Revit المدعومة بالذكاء الاصطناعي",
          highlights: {
            natural: { label: "لغة طبيعية", desc: "صف ما تريد بالعربية" },
            suggestions: { label: "اقتراحات ذكية", desc: "AI يقترح أوامر ذات صلة" },
            batch: { label: "عمليات دفعية", desc: "تعديل عناصر متعددة مرة واحدة" },
            history: { label: "سجل الأوامر", desc: "إعادة استخدام الأوامر السابقة" }
          },
          commands: {
            select: { name: "اختيار ذكي", desc: "اختيار العناصر حسب المعايير" },
            modify: { name: "تعديل دفعي", desc: "تعديل المعلمات بالجملة" },
            create: { name: "إنشاء العناصر", desc: "توليد عناصر جديدة" },
            analyze: { name: "تحليل", desc: "تحليل النموذج للمشاكل" }
          }
        },
        clash: {
          title: "كشف التعارضات",
          subtitle: "إيجاد وحل التعارضات",
          highlights: {
            detect: { label: "كشف تلقائي", desc: "العثور على التعارضات تلقائياً" },
            categorize: { label: "تصنيف", desc: "تجميع التعارضات حسب النوع" },
            navigate: { label: "تنقل", desc: "الانتقال مباشرة للتعارضات" },
            report: { label: "تقارير", desc: "تصدير تقارير التعارضات" }
          }
        },
        design: {
          title: "أدوات التصميم",
          subtitle: "تحسين سير عمل التصميم",
          highlights: {
            templates: { label: "قوالب", desc: "البدء بقوالب جاهزة" },
            standards: { label: "المعايير", desc: "تطبيق معايير الشركة" },
            validation: { label: "التحقق", desc: "التحقق من مطابقة التصميم" },
            documentation: { label: "التوثيق", desc: "توليد الوثائق تلقائياً" }
          }
        },
        qaqc: {
          title: "ضبط الجودة",
          subtitle: "ضمان جودة النموذج",
          highlights: {
            rules: { label: "قواعد مخصصة", desc: "تعريف قواعد تحقق مخصصة" },
            automated: { label: "فحوصات تلقائية", desc: "تشغيل الفحوصات تلقائياً" },
            reports: { label: "تقارير مفصلة", desc: "توليد تقارير الجودة" },
            tracking: { label: "تتبع المشكلات", desc: "تتبع حل المشكلات" }
          }
        },
        sync: {
          title: "مزامنة الويب",
          subtitle: "توصيل Revit بمنصة الويب",
          highlights: {
            realtime: { label: "الوقت الفعلي", desc: "مزامنة فورية للتغييرات" },
            selective: { label: "مزامنة انتقائية", desc: "اختيار ما يتم مزامنته" },
            conflict: { label: "حل التعارضات", desc: "معالجة التغييرات المتعارضة" },
            offline: { label: "وضع عدم الاتصال", desc: "العمل بدون اتصال" }
          }
        }
      },
      propertySystem: {
        title: "نظام الخصائص",
        subtitle: "أكثر من 45 نوع خاصية لنمذجة كل شيء",
        categories: {
          basic: "أساسي",
          selection: "اختيار",
          people: "الأشخاص",
          dateTime: "تاريخ/وقت",
          media: "وسائط",
          advanced: "متقدم",
          bimAec: "BIM/AEC",
          auto: "تلقائي"
        },
        properties: {
          text: { name: "نص", desc: "حقول نصية مفردة أو متعددة الأسطر" },
          number: { name: "رقم", desc: "قيم رقمية مع التنسيق" },
          checkbox: { name: "مربع اختيار", desc: "قيم صح/خطأ" },
          select: { name: "اختيار", desc: "اختيار واحد من الخيارات" },
          multiSelect: { name: "اختيار متعدد", desc: "اختيار متعدد من الخيارات" },
          status: { name: "الحالة", desc: "تتبع حالة سير العمل" },
          priority: { name: "الأولوية", desc: "مستويات أولوية المهام" },
          person: { name: "شخص", desc: "تعيين أعضاء الفريق" },
          date: { name: "تاريخ", desc: "منتقي التاريخ" },
          dateTime: { name: "تاريخ/وقت", desc: "تاريخ مع الوقت" },
          dateRange: { name: "نطاق التاريخ", desc: "تواريخ البداية والنهاية" },
          files: { name: "ملفات", desc: "مرفقات الملفات" },
          images: { name: "صور", desc: "معرض الصور" },
          url: { name: "رابط", desc: "روابط الويب" },
          email: { name: "بريد إلكتروني", desc: "عناوين البريد الإلكتروني" },
          phone: { name: "هاتف", desc: "أرقام الهاتف" },
          relation: { name: "علاقة", desc: "ربط بمهام أخرى" },
          rollup: { name: "تجميع", desc: "تجميع البيانات من العلاقات" },
          formula: { name: "صيغة", desc: "حقول محسوبة" },
          viewer: { name: "عارض 3D", desc: "عارض نموذج مضمن" },
          modelElement: { name: "عنصر النموذج", desc: "رابط لعناصر BIM" },
          location: { name: "الموقع", desc: "إحداثيات جغرافية" },
          createdTime: { name: "وقت الإنشاء", desc: "إنشاء تلقائي" },
          createdBy: { name: "أنشئ بواسطة", desc: "منشئ تلقائي" },
          lastEdited: { name: "آخر تعديل", desc: "آخر تعديل تلقائي" },
          lastEditedBy: { name: "عدل بواسطة", desc: "آخر محرر تلقائي" }
        }
      },
      cta: {
        title: "مستعد للبدء؟",
        subtitle: "جرب InvoratecAI مجاناً لمدة 7 أيام",
        webButton: "بدء تجربة الويب",
        revitButton: "تنزيل إضافة Revit"
      }
    }
  }
};

// Apply translations
const languages = Object.keys(featuresPageTranslations);

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = deepMerge(existing, featuresPageTranslations[lang]);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Added featuresPage translations to ' + lang + '.json');
});

console.log('\nFeaturesPage translations complete for PT, KO, RU, AR!');
