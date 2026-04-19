const fs = require('fs');
const path = require('path');

// featuresPage.bimFeatures translations
const translations = {
  ja: {
    tasks: {
      title: "タスク管理",
      subtitle: "Revit内の動的タスク管理",
      highlights: {
        inRevit: { label: "Revit内タスク", desc: "Revitを離れずにタスクを管理" },
        elementTracking: { label: "要素追跡", desc: "タスクをRevit要素にリンク" },
        timeTracking: { label: "時間追跡", desc: "内蔵タイマーと手動時間入力" },
        cloudSync: { label: "クラウド同期", desc: "Webプラットフォームと同期" }
      },
      properties: {
        elements: { name: "Revit要素", type: "BIM", desc: "UniqueIdでRevit要素を追跡" },
        dateHours: { name: "日付時間", type: "BIM", desc: "日付+時間+担当者エントリー" },
        trackedTime: { name: "追跡時間", type: "時間", desc: "タイマーベースの時間追跡" },
        manualTime: { name: "手動時間", type: "時間", desc: "手動の時間エントリー" },
        totalTime: { name: "合計時間", type: "計算", desc: "追跡時間+手動時間の合計" }
      }
    },
    assistant: {
      title: "AIアシスタント",
      subtitle: "自然言語による自動化",
      highlights: {
        naturalLanguage: { label: "自然言語", desc: "平易な言葉でタスクを説明" },
        voiceControl: { label: "音声制御", desc: "ハンズフリー音声コマンド" },
        codeExecution: { label: "コード実行", desc: "Python/C#スクリプトを直接実行" },
        toolMatching: { label: "ツールマッチング", desc: "AIがリクエストをツールにマッチング" }
      },
      properties: {
        chat: { name: "チャットインターフェース", type: "UI", desc: "会話型AIインタラクション" },
        script: { name: "スクリプト実行", type: "機能", desc: "Python/C#コードを実行" },
        recommendations: { name: "ツール推奨", type: "AI", desc: "スマートなツール提案" },
        history: { name: "履歴", type: "機能", desc: "チャット履歴とコンテキスト" }
      }
    },
    dashboard: {
      title: "プロジェクトダッシュボード",
      subtitle: "リアルタイムプロジェクト概要",
      highlights: {
        stats: { label: "プロジェクト統計", desc: "ページ、タスク、チームを一目で確認" },
        budget: { label: "予算概要", desc: "支出と残高を追跡" },
        teamHours: { label: "チーム時間", desc: "チームの時間配分を確認" },
        milestones: { label: "マイルストーン", desc: "今後の締め切りと成果物" }
      },
      properties: {
        totalBudget: { name: "総予算", type: "通貨", desc: "プロジェクト予算配分" },
        spentBudget: { name: "使用予算", type: "通貨", desc: "実際の支出" },
        teamMembers: { name: "チームメンバー", type: "コレクション", desc: "チームメンバーリスト" },
        milestones: { name: "マイルストーン", type: "コレクション", desc: "プロジェクトマイルストーン" }
      }
    },
    tools: {
      title: "ツールライブラリ",
      subtitle: "プラグインとスクリプト管理",
      highlights: {
        dllPlugins: { label: "DLLプラグイン", desc: "コンパイル済みRevitプラグインをロード" },
        pythonScripts: { label: "Pythonスクリプト", desc: "Python自動化を実行" },
        csharpScripts: { label: "C#スクリプト", desc: "C#コードをオンザフライで実行" },
        multiPlugin: { label: "マルチプラグインDLL", desc: "1つのDLLで複数のプラグインをホスト" }
      },
      properties: {
        name: { name: "名前", type: "メタデータ", desc: "ツール表示名" },
        description: { name: "説明", type: "メタデータ", desc: "ツールの説明" },
        category: { name: "カテゴリ", type: "メタデータ", desc: "ツールカテゴリグループ" },
        keywords: { name: "キーワード", type: "メタデータ", desc: "検索キーワード" },
        author: { name: "作成者", type: "メタデータ", desc: "ツール作成者" },
        version: { name: "バージョン", type: "メタデータ", desc: "バージョン番号" }
      }
    },
    projects: {
      title: "プロジェクト管理",
      subtitle: "チームと予算の追跡",
      highlights: {
        projectCards: { label: "プロジェクトカード", desc: "ビジュアルなプロジェクト概要" },
        teamManagement: { label: "チーム管理", desc: "役割を割り当て時間を追跡" },
        accIntegration: { label: "ACC連携", desc: "Autodeskプロジェクトにリンク" },
        budgetTracking: { label: "予算追跡", desc: "チームメンバーごとのコストを監視" }
      },
      properties: {
        name: { name: "名前", type: "テキスト", desc: "プロジェクト名" },
        client: { name: "クライアント", type: "テキスト", desc: "クライアント名" },
        projectNumber: { name: "プロジェクト番号", type: "テキスト", desc: "プロジェクト識別子" },
        accProjectId: { name: "ACCプロジェクトID", type: "リンク", desc: "ACCプロジェクト接続" },
        linkPath: { name: "Invoratecリンクパス", type: "パス", desc: "モデル公開フォルダ" },
        status: { name: "ステータス", type: "選択", desc: "計画中/進行中/保留中/完了" },
        completion: { name: "完了率", type: "数値", desc: "進捗パーセンテージ" }
      }
    },
    acc: {
      title: "ACC連携",
      subtitle: "Autodesk Construction Cloud",
      highlights: {
        hubBrowser: { label: "ハブブラウザ", desc: "ACCハブとプロジェクトを参照" },
        modelLinking: { label: "モデルリンク", desc: "InvoratecをACCプロジェクトにリンク" },
        auth: { label: "3レッグ認証", desc: "安全なAutodesk認証" },
        fileSync: { label: "ファイル同期", desc: "モデルをInvoratecフォルダに同期" }
      },
      properties: {
        hubId: { name: "ACCハブID", type: "リンク", desc: "接続されたACCハブ" },
        projectId: { name: "ACCプロジェクトID", type: "リンク", desc: "接続されたACCプロジェクト" },
        accountId: { name: "ACCアカウントID", type: "リンク", desc: "ACCアカウント識別子" },
        isAuth: { name: "認証済み", type: "ブール", desc: "認証ステータス" }
      }
    }
  },
  ko: {
    tasks: {
      title: "작업 관리",
      subtitle: "Revit 내 동적 작업 관리",
      highlights: {
        inRevit: { label: "Revit 내 작업", desc: "Revit을 떠나지 않고 작업 관리" },
        elementTracking: { label: "요소 추적", desc: "작업을 Revit 요소에 연결" },
        timeTracking: { label: "시간 추적", desc: "내장 타이머 및 수동 시간 입력" },
        cloudSync: { label: "클라우드 동기화", desc: "웹 플랫폼과 동기화" }
      },
      properties: {
        elements: { name: "Revit 요소", type: "BIM", desc: "UniqueId로 Revit 요소 추적" },
        dateHours: { name: "날짜 시간", type: "BIM", desc: "날짜 + 시간 + 담당자 항목" },
        trackedTime: { name: "추적 시간", type: "시간", desc: "타이머 기반 시간 추적" },
        manualTime: { name: "수동 시간", type: "시간", desc: "수동 시간 입력" },
        totalTime: { name: "총 시간", type: "계산", desc: "추적 + 수동 시간 합계" }
      }
    },
    assistant: {
      title: "AI 어시스턴트",
      subtitle: "자연어 자동화",
      highlights: {
        naturalLanguage: { label: "자연어", desc: "일상 언어로 작업 설명" },
        voiceControl: { label: "음성 제어", desc: "핸즈프리 음성 명령" },
        codeExecution: { label: "코드 실행", desc: "Python/C# 스크립트 직접 실행" },
        toolMatching: { label: "도구 매칭", desc: "AI가 요청을 도구에 매칭" }
      },
      properties: {
        chat: { name: "채팅 인터페이스", type: "UI", desc: "대화형 AI 상호작용" },
        script: { name: "스크립트 실행", type: "기능", desc: "Python/C# 코드 실행" },
        recommendations: { name: "도구 추천", type: "AI", desc: "스마트 도구 제안" },
        history: { name: "기록", type: "기능", desc: "채팅 기록 및 컨텍스트" }
      }
    },
    dashboard: {
      title: "프로젝트 대시보드",
      subtitle: "실시간 프로젝트 개요",
      highlights: {
        stats: { label: "프로젝트 통계", desc: "페이지, 작업, 팀을 한눈에" },
        budget: { label: "예산 개요", desc: "지출 및 잔액 추적" },
        teamHours: { label: "팀 시간", desc: "팀 시간 배분 확인" },
        milestones: { label: "마일스톤", desc: "다가오는 마감일 및 산출물" }
      },
      properties: {
        totalBudget: { name: "총 예산", type: "통화", desc: "프로젝트 예산 배분" },
        spentBudget: { name: "사용 예산", type: "통화", desc: "실제 지출" },
        teamMembers: { name: "팀 멤버", type: "컬렉션", desc: "팀 멤버 목록" },
        milestones: { name: "마일스톤", type: "컬렉션", desc: "프로젝트 마일스톤" }
      }
    },
    tools: {
      title: "도구 라이브러리",
      subtitle: "플러그인 및 스크립트 관리",
      highlights: {
        dllPlugins: { label: "DLL 플러그인", desc: "컴파일된 Revit 플러그인 로드" },
        pythonScripts: { label: "Python 스크립트", desc: "Python 자동화 실행" },
        csharpScripts: { label: "C# 스크립트", desc: "C# 코드 즉시 실행" },
        multiPlugin: { label: "멀티 플러그인 DLL", desc: "하나의 DLL로 여러 플러그인 호스팅" }
      },
      properties: {
        name: { name: "이름", type: "메타데이터", desc: "도구 표시 이름" },
        description: { name: "설명", type: "메타데이터", desc: "도구 설명" },
        category: { name: "카테고리", type: "메타데이터", desc: "도구 카테고리 그룹" },
        keywords: { name: "키워드", type: "메타데이터", desc: "검색 키워드" },
        author: { name: "작성자", type: "메타데이터", desc: "도구 제작자" },
        version: { name: "버전", type: "메타데이터", desc: "버전 번호" }
      }
    },
    projects: {
      title: "프로젝트 관리",
      subtitle: "팀 및 예산 추적",
      highlights: {
        projectCards: { label: "프로젝트 카드", desc: "시각적 프로젝트 개요" },
        teamManagement: { label: "팀 관리", desc: "역할 할당 및 시간 추적" },
        accIntegration: { label: "ACC 통합", desc: "Autodesk 프로젝트에 연결" },
        budgetTracking: { label: "예산 추적", desc: "팀원별 비용 모니터링" }
      },
      properties: {
        name: { name: "이름", type: "텍스트", desc: "프로젝트 이름" },
        client: { name: "클라이언트", type: "텍스트", desc: "클라이언트 이름" },
        projectNumber: { name: "프로젝트 번호", type: "텍스트", desc: "프로젝트 식별자" },
        accProjectId: { name: "ACC 프로젝트 ID", type: "링크", desc: "ACC 프로젝트 연결" },
        linkPath: { name: "Invoratec 링크 경로", type: "경로", desc: "모델 게시 폴더" },
        status: { name: "상태", type: "선택", desc: "계획/진행중/보류/완료" },
        completion: { name: "완료율", type: "숫자", desc: "진행률 퍼센트" }
      }
    },
    acc: {
      title: "ACC 통합",
      subtitle: "Autodesk Construction Cloud",
      highlights: {
        hubBrowser: { label: "허브 브라우저", desc: "ACC 허브 및 프로젝트 탐색" },
        modelLinking: { label: "모델 연결", desc: "Invoratec을 ACC 프로젝트에 연결" },
        auth: { label: "3-Legged 인증", desc: "안전한 Autodesk 인증" },
        fileSync: { label: "파일 동기화", desc: "모델을 Invoratec 폴더에 동기화" }
      },
      properties: {
        hubId: { name: "ACC 허브 ID", type: "링크", desc: "연결된 ACC 허브" },
        projectId: { name: "ACC 프로젝트 ID", type: "링크", desc: "연결된 ACC 프로젝트" },
        accountId: { name: "ACC 계정 ID", type: "링크", desc: "ACC 계정 식별자" },
        isAuth: { name: "인증됨", type: "불린", desc: "인증 상태" }
      }
    }
  },
  de: {
    tasks: {
      title: "Aufgabenverwaltung",
      subtitle: "Dynamische Aufgabenverwaltung in Revit",
      highlights: {
        inRevit: { label: "Aufgaben in Revit", desc: "Aufgaben verwalten ohne Revit zu verlassen" },
        elementTracking: { label: "Element-Tracking", desc: "Aufgaben mit Revit-Elementen verknüpfen" },
        timeTracking: { label: "Zeiterfassung", desc: "Integrierter Timer und manuelle Zeiteingabe" },
        cloudSync: { label: "Cloud-Sync", desc: "Synchronisation mit Web-Plattform" }
      },
      properties: {
        elements: { name: "Revit-Elemente", type: "BIM", desc: "Revit-Elemente per UniqueId verfolgen" },
        dateHours: { name: "Datum-Stunden", type: "BIM", desc: "Datum + Stunden + Person Einträge" },
        trackedTime: { name: "Erfasste Zeit", type: "Zeit", desc: "Timer-basierte Zeiterfassung" },
        manualTime: { name: "Manuelle Zeit", type: "Zeit", desc: "Manuelle Zeiteinträge" },
        totalTime: { name: "Gesamtzeit", type: "Berechnet", desc: "Summe aus erfasst + manuell" }
      }
    },
    assistant: {
      title: "KI-Assistent",
      subtitle: "Automatisierung in natürlicher Sprache",
      highlights: {
        naturalLanguage: { label: "Natürliche Sprache", desc: "Aufgaben in einfacher Sprache beschreiben" },
        voiceControl: { label: "Sprachsteuerung", desc: "Freihändige Sprachbefehle" },
        codeExecution: { label: "Code-Ausführung", desc: "Python/C#-Skripte direkt ausführen" },
        toolMatching: { label: "Tool-Matching", desc: "KI ordnet Anfragen den Tools zu" }
      },
      properties: {
        chat: { name: "Chat-Schnittstelle", type: "UI", desc: "Konversations-KI-Interaktion" },
        script: { name: "Skript-Ausführung", type: "Funktion", desc: "Python/C#-Code ausführen" },
        recommendations: { name: "Tool-Empfehlungen", type: "KI", desc: "Intelligente Tool-Vorschläge" },
        history: { name: "Verlauf", type: "Funktion", desc: "Chat-Verlauf und Kontext" }
      }
    },
    dashboard: {
      title: "Projekt-Dashboard",
      subtitle: "Echtzeit-Projektübersicht",
      highlights: {
        stats: { label: "Projektstatistiken", desc: "Seiten, Aufgaben, Team auf einen Blick" },
        budget: { label: "Budget-Übersicht", desc: "Ausgaben und Restbudget verfolgen" },
        teamHours: { label: "Team-Stunden", desc: "Team-Zeitverteilung anzeigen" },
        milestones: { label: "Meilensteine", desc: "Anstehende Termine und Lieferungen" }
      },
      properties: {
        totalBudget: { name: "Gesamtbudget", type: "Währung", desc: "Projekt-Budgetverteilung" },
        spentBudget: { name: "Verbrauchtes Budget", type: "Währung", desc: "Tatsächliche Ausgaben" },
        teamMembers: { name: "Teammitglieder", type: "Sammlung", desc: "Teammitgliederliste" },
        milestones: { name: "Meilensteine", type: "Sammlung", desc: "Projekt-Meilensteine" }
      }
    },
    tools: {
      title: "Tool-Bibliothek",
      subtitle: "Plugin- und Skript-Verwaltung",
      highlights: {
        dllPlugins: { label: "DLL-Plugins", desc: "Kompilierte Revit-Plugins laden" },
        pythonScripts: { label: "Python-Skripte", desc: "Python-Automatisierung ausführen" },
        csharpScripts: { label: "C#-Skripte", desc: "C#-Code spontan ausführen" },
        multiPlugin: { label: "Multi-Plugin-DLLs", desc: "Eine DLL kann mehrere Plugins hosten" }
      },
      properties: {
        name: { name: "Name", type: "Metadaten", desc: "Tool-Anzeigename" },
        description: { name: "Beschreibung", type: "Metadaten", desc: "Tool-Beschreibung" },
        category: { name: "Kategorie", type: "Metadaten", desc: "Tool-Kategorie-Gruppierung" },
        keywords: { name: "Schlüsselwörter", type: "Metadaten", desc: "Such-Schlüsselwörter" },
        author: { name: "Autor", type: "Metadaten", desc: "Tool-Ersteller" },
        version: { name: "Version", type: "Metadaten", desc: "Versionsnummer" }
      }
    },
    projects: {
      title: "Projektverwaltung",
      subtitle: "Team- und Budget-Tracking",
      highlights: {
        projectCards: { label: "Projektkarten", desc: "Visuelle Projektübersicht" },
        teamManagement: { label: "Team-Verwaltung", desc: "Rollen zuweisen und Stunden verfolgen" },
        accIntegration: { label: "ACC-Integration", desc: "Mit Autodesk-Projekten verknüpfen" },
        budgetTracking: { label: "Budget-Tracking", desc: "Kosten pro Teammitglied überwachen" }
      },
      properties: {
        name: { name: "Name", type: "Text", desc: "Projektname" },
        client: { name: "Kunde", type: "Text", desc: "Kundenname" },
        projectNumber: { name: "Projektnummer", type: "Text", desc: "Projekt-Kennung" },
        accProjectId: { name: "ACC-Projekt-ID", type: "Link", desc: "ACC-Projektverbindung" },
        linkPath: { name: "Invoratec-Link-Pfad", type: "Pfad", desc: "Modell-Veröffentlichungsordner" },
        status: { name: "Status", type: "Auswahl", desc: "Planung/In Bearbeitung/Pausiert/Abgeschlossen" },
        completion: { name: "Fertigstellung %", type: "Zahl", desc: "Fortschritts-Prozentsatz" }
      }
    },
    acc: {
      title: "ACC-Integration",
      subtitle: "Autodesk Construction Cloud",
      highlights: {
        hubBrowser: { label: "Hub-Browser", desc: "ACC-Hubs und Projekte durchsuchen" },
        modelLinking: { label: "Modell-Verknüpfung", desc: "Invoratec mit ACC-Projekten verknüpfen" },
        auth: { label: "3-Bein-Auth", desc: "Sichere Autodesk-Authentifizierung" },
        fileSync: { label: "Datei-Sync", desc: "Modelle in Invoratec-Ordner synchronisieren" }
      },
      properties: {
        hubId: { name: "ACC-Hub-ID", type: "Link", desc: "Verbundener ACC-Hub" },
        projectId: { name: "ACC-Projekt-ID", type: "Link", desc: "Verbundenes ACC-Projekt" },
        accountId: { name: "ACC-Konto-ID", type: "Link", desc: "ACC-Konto-Kennung" },
        isAuth: { name: "Authentifiziert", type: "Boolean", desc: "Auth-Status" }
      }
    }
  },
  fr: {
    tasks: {
      title: "Gestion des tâches",
      subtitle: "Gestion dynamique des tâches dans Revit",
      highlights: {
        inRevit: { label: "Tâches dans Revit", desc: "Gérer les tâches sans quitter Revit" },
        elementTracking: { label: "Suivi des éléments", desc: "Lier les tâches aux éléments Revit" },
        timeTracking: { label: "Suivi du temps", desc: "Minuteur intégré et saisie manuelle" },
        cloudSync: { label: "Sync Cloud", desc: "Synchronisation avec la plateforme web" }
      },
      properties: {
        elements: { name: "Éléments Revit", type: "BIM", desc: "Suivre les éléments Revit par UniqueId" },
        dateHours: { name: "Date Heures", type: "BIM", desc: "Date + heures + entrées personne" },
        trackedTime: { name: "Temps suivi", type: "Temps", desc: "Suivi du temps par minuteur" },
        manualTime: { name: "Temps manuel", type: "Temps", desc: "Entrées de temps manuelles" },
        totalTime: { name: "Temps total", type: "Calculé", desc: "Somme suivi + manuel" }
      }
    },
    assistant: {
      title: "Assistant IA",
      subtitle: "Automatisation en langage naturel",
      highlights: {
        naturalLanguage: { label: "Langage naturel", desc: "Décrivez les tâches simplement" },
        voiceControl: { label: "Contrôle vocal", desc: "Commandes vocales mains libres" },
        codeExecution: { label: "Exécution de code", desc: "Exécuter des scripts Python/C# directement" },
        toolMatching: { label: "Correspondance d'outils", desc: "L'IA fait correspondre vos demandes aux outils" }
      },
      properties: {
        chat: { name: "Interface de chat", type: "UI", desc: "Interaction IA conversationnelle" },
        script: { name: "Exécution de script", type: "Fonction", desc: "Exécuter du code Python/C#" },
        recommendations: { name: "Recommandations d'outils", type: "IA", desc: "Suggestions d'outils intelligentes" },
        history: { name: "Historique", type: "Fonction", desc: "Historique de chat et contexte" }
      }
    },
    dashboard: {
      title: "Tableau de bord projet",
      subtitle: "Vue d'ensemble du projet en temps réel",
      highlights: {
        stats: { label: "Statistiques projet", desc: "Pages, tâches, équipe en un coup d'œil" },
        budget: { label: "Aperçu du budget", desc: "Suivre les dépenses et le reste" },
        teamHours: { label: "Heures d'équipe", desc: "Voir l'allocation du temps de l'équipe" },
        milestones: { label: "Jalons", desc: "Échéances et livrables à venir" }
      },
      properties: {
        totalBudget: { name: "Budget total", type: "Devise", desc: "Allocation du budget projet" },
        spentBudget: { name: "Budget dépensé", type: "Devise", desc: "Dépenses réelles" },
        teamMembers: { name: "Membres de l'équipe", type: "Collection", desc: "Liste des membres de l'équipe" },
        milestones: { name: "Jalons", type: "Collection", desc: "Jalons du projet" }
      }
    },
    tools: {
      title: "Bibliothèque d'outils",
      subtitle: "Gestion des plugins et scripts",
      highlights: {
        dllPlugins: { label: "Plugins DLL", desc: "Charger des plugins Revit compilés" },
        pythonScripts: { label: "Scripts Python", desc: "Exécuter l'automatisation Python" },
        csharpScripts: { label: "Scripts C#", desc: "Exécuter du code C# à la volée" },
        multiPlugin: { label: "DLL multi-plugins", desc: "Une DLL peut héberger plusieurs plugins" }
      },
      properties: {
        name: { name: "Nom", type: "Métadonnées", desc: "Nom d'affichage de l'outil" },
        description: { name: "Description", type: "Métadonnées", desc: "Description de l'outil" },
        category: { name: "Catégorie", type: "Métadonnées", desc: "Groupement par catégorie" },
        keywords: { name: "Mots-clés", type: "Métadonnées", desc: "Mots-clés de recherche" },
        author: { name: "Auteur", type: "Métadonnées", desc: "Créateur de l'outil" },
        version: { name: "Version", type: "Métadonnées", desc: "Numéro de version" }
      }
    },
    projects: {
      title: "Gestion de projet",
      subtitle: "Suivi d'équipe et de budget",
      highlights: {
        projectCards: { label: "Cartes projet", desc: "Vue d'ensemble visuelle du projet" },
        teamManagement: { label: "Gestion d'équipe", desc: "Attribuer des rôles et suivre les heures" },
        accIntegration: { label: "Intégration ACC", desc: "Lier aux projets Autodesk" },
        budgetTracking: { label: "Suivi du budget", desc: "Surveiller les coûts par membre" }
      },
      properties: {
        name: { name: "Nom", type: "Texte", desc: "Nom du projet" },
        client: { name: "Client", type: "Texte", desc: "Nom du client" },
        projectNumber: { name: "Numéro de projet", type: "Texte", desc: "Identifiant du projet" },
        accProjectId: { name: "ID projet ACC", type: "Lien", desc: "Connexion au projet ACC" },
        linkPath: { name: "Chemin lien Invoratec", type: "Chemin", desc: "Dossier de publication du modèle" },
        status: { name: "Statut", type: "Sélection", desc: "Planification/En cours/En pause/Terminé" },
        completion: { name: "Achèvement %", type: "Nombre", desc: "Pourcentage de progression" }
      }
    },
    acc: {
      title: "Intégration ACC",
      subtitle: "Autodesk Construction Cloud",
      highlights: {
        hubBrowser: { label: "Navigateur de hub", desc: "Parcourir les hubs et projets ACC" },
        modelLinking: { label: "Liaison de modèle", desc: "Lier Invoratec aux projets ACC" },
        auth: { label: "Auth 3-pattes", desc: "Authentification Autodesk sécurisée" },
        fileSync: { label: "Sync fichiers", desc: "Synchroniser les modèles vers le dossier Invoratec" }
      },
      properties: {
        hubId: { name: "ID Hub ACC", type: "Lien", desc: "Hub ACC connecté" },
        projectId: { name: "ID Projet ACC", type: "Lien", desc: "Projet ACC connecté" },
        accountId: { name: "ID Compte ACC", type: "Lien", desc: "Identifiant du compte ACC" },
        isAuth: { name: "Authentifié", type: "Booléen", desc: "Statut d'authentification" }
      }
    }
  },
  es: {
    tasks: {
      title: "Gestión de tareas",
      subtitle: "Gestión dinámica de tareas en Revit",
      highlights: {
        inRevit: { label: "Tareas en Revit", desc: "Gestionar tareas sin salir de Revit" },
        elementTracking: { label: "Seguimiento de elementos", desc: "Vincular tareas a elementos de Revit" },
        timeTracking: { label: "Seguimiento de tiempo", desc: "Temporizador integrado y entrada manual" },
        cloudSync: { label: "Sincronización en la nube", desc: "Sincronizar con la plataforma web" }
      },
      properties: {
        elements: { name: "Elementos Revit", type: "BIM", desc: "Rastrear elementos Revit por UniqueId" },
        dateHours: { name: "Fecha Horas", type: "BIM", desc: "Fecha + horas + entradas de persona" },
        trackedTime: { name: "Tiempo registrado", type: "Tiempo", desc: "Seguimiento de tiempo por temporizador" },
        manualTime: { name: "Tiempo manual", type: "Tiempo", desc: "Entradas de tiempo manuales" },
        totalTime: { name: "Tiempo total", type: "Calculado", desc: "Suma de registrado + manual" }
      }
    },
    assistant: {
      title: "Asistente IA",
      subtitle: "Automatización en lenguaje natural",
      highlights: {
        naturalLanguage: { label: "Lenguaje natural", desc: "Describe tareas en lenguaje simple" },
        voiceControl: { label: "Control por voz", desc: "Comandos de voz manos libres" },
        codeExecution: { label: "Ejecución de código", desc: "Ejecutar scripts Python/C# directamente" },
        toolMatching: { label: "Coincidencia de herramientas", desc: "La IA relaciona tu solicitud con herramientas" }
      },
      properties: {
        chat: { name: "Interfaz de chat", type: "UI", desc: "Interacción IA conversacional" },
        script: { name: "Ejecución de script", type: "Función", desc: "Ejecutar código Python/C#" },
        recommendations: { name: "Recomendaciones de herramientas", type: "IA", desc: "Sugerencias inteligentes de herramientas" },
        history: { name: "Historial", type: "Función", desc: "Historial de chat y contexto" }
      }
    },
    dashboard: {
      title: "Panel de proyecto",
      subtitle: "Vista general del proyecto en tiempo real",
      highlights: {
        stats: { label: "Estadísticas del proyecto", desc: "Páginas, tareas, equipo de un vistazo" },
        budget: { label: "Resumen de presupuesto", desc: "Seguimiento de gastos y restante" },
        teamHours: { label: "Horas del equipo", desc: "Ver asignación de tiempo del equipo" },
        milestones: { label: "Hitos", desc: "Próximos plazos y entregables" }
      },
      properties: {
        totalBudget: { name: "Presupuesto total", type: "Moneda", desc: "Asignación de presupuesto del proyecto" },
        spentBudget: { name: "Presupuesto gastado", type: "Moneda", desc: "Gasto real" },
        teamMembers: { name: "Miembros del equipo", type: "Colección", desc: "Lista de miembros del equipo" },
        milestones: { name: "Hitos", type: "Colección", desc: "Hitos del proyecto" }
      }
    },
    tools: {
      title: "Biblioteca de herramientas",
      subtitle: "Gestión de plugins y scripts",
      highlights: {
        dllPlugins: { label: "Plugins DLL", desc: "Cargar plugins Revit compilados" },
        pythonScripts: { label: "Scripts Python", desc: "Ejecutar automatización Python" },
        csharpScripts: { label: "Scripts C#", desc: "Ejecutar código C# al instante" },
        multiPlugin: { label: "DLL multi-plugin", desc: "Una DLL puede alojar múltiples plugins" }
      },
      properties: {
        name: { name: "Nombre", type: "Metadatos", desc: "Nombre de visualización de la herramienta" },
        description: { name: "Descripción", type: "Metadatos", desc: "Descripción de la herramienta" },
        category: { name: "Categoría", type: "Metadatos", desc: "Agrupación por categoría" },
        keywords: { name: "Palabras clave", type: "Metadatos", desc: "Palabras clave de búsqueda" },
        author: { name: "Autor", type: "Metadatos", desc: "Creador de la herramienta" },
        version: { name: "Versión", type: "Metadatos", desc: "Número de versión" }
      }
    },
    projects: {
      title: "Gestión de proyectos",
      subtitle: "Seguimiento de equipo y presupuesto",
      highlights: {
        projectCards: { label: "Tarjetas de proyecto", desc: "Vista general visual del proyecto" },
        teamManagement: { label: "Gestión de equipo", desc: "Asignar roles y seguir horas" },
        accIntegration: { label: "Integración ACC", desc: "Vincular a proyectos Autodesk" },
        budgetTracking: { label: "Seguimiento de presupuesto", desc: "Monitorear costos por miembro" }
      },
      properties: {
        name: { name: "Nombre", type: "Texto", desc: "Nombre del proyecto" },
        client: { name: "Cliente", type: "Texto", desc: "Nombre del cliente" },
        projectNumber: { name: "Número de proyecto", type: "Texto", desc: "Identificador del proyecto" },
        accProjectId: { name: "ID proyecto ACC", type: "Enlace", desc: "Conexión proyecto ACC" },
        linkPath: { name: "Ruta enlace Invoratec", type: "Ruta", desc: "Carpeta de publicación del modelo" },
        status: { name: "Estado", type: "Selección", desc: "Planificación/En progreso/En pausa/Completado" },
        completion: { name: "Completado %", type: "Número", desc: "Porcentaje de progreso" }
      }
    },
    acc: {
      title: "Integración ACC",
      subtitle: "Autodesk Construction Cloud",
      highlights: {
        hubBrowser: { label: "Navegador de hub", desc: "Explorar hubs y proyectos ACC" },
        modelLinking: { label: "Vinculación de modelo", desc: "Vincular Invoratec a proyectos ACC" },
        auth: { label: "Auth 3 patas", desc: "Autenticación segura de Autodesk" },
        fileSync: { label: "Sincronización de archivos", desc: "Sincronizar modelos a carpeta Invoratec" }
      },
      properties: {
        hubId: { name: "ID Hub ACC", type: "Enlace", desc: "Hub ACC conectado" },
        projectId: { name: "ID Proyecto ACC", type: "Enlace", desc: "Proyecto ACC conectado" },
        accountId: { name: "ID Cuenta ACC", type: "Enlace", desc: "Identificador de cuenta ACC" },
        isAuth: { name: "Autenticado", type: "Booleano", desc: "Estado de autenticación" }
      }
    }
  },
  pt: {
    tasks: {
      title: "Gestão de tarefas",
      subtitle: "Gestão dinâmica de tarefas no Revit",
      highlights: {
        inRevit: { label: "Tarefas no Revit", desc: "Gerenciar tarefas sem sair do Revit" },
        elementTracking: { label: "Rastreamento de elementos", desc: "Vincular tarefas a elementos do Revit" },
        timeTracking: { label: "Rastreamento de tempo", desc: "Temporizador integrado e entrada manual" },
        cloudSync: { label: "Sincronização na nuvem", desc: "Sincronizar com a plataforma web" }
      },
      properties: {
        elements: { name: "Elementos Revit", type: "BIM", desc: "Rastrear elementos Revit por UniqueId" },
        dateHours: { name: "Data Horas", type: "BIM", desc: "Data + horas + entradas de pessoa" },
        trackedTime: { name: "Tempo rastreado", type: "Tempo", desc: "Rastreamento de tempo por temporizador" },
        manualTime: { name: "Tempo manual", type: "Tempo", desc: "Entradas de tempo manuais" },
        totalTime: { name: "Tempo total", type: "Calculado", desc: "Soma de rastreado + manual" }
      }
    },
    assistant: {
      title: "Assistente IA",
      subtitle: "Automação em linguagem natural",
      highlights: {
        naturalLanguage: { label: "Linguagem natural", desc: "Descreva tarefas em linguagem simples" },
        voiceControl: { label: "Controle por voz", desc: "Comandos de voz sem as mãos" },
        codeExecution: { label: "Execução de código", desc: "Executar scripts Python/C# diretamente" },
        toolMatching: { label: "Correspondência de ferramentas", desc: "A IA relaciona sua solicitação a ferramentas" }
      },
      properties: {
        chat: { name: "Interface de chat", type: "UI", desc: "Interação IA conversacional" },
        script: { name: "Execução de script", type: "Recurso", desc: "Executar código Python/C#" },
        recommendations: { name: "Recomendações de ferramentas", type: "IA", desc: "Sugestões inteligentes de ferramentas" },
        history: { name: "Histórico", type: "Recurso", desc: "Histórico de chat e contexto" }
      }
    },
    dashboard: {
      title: "Painel do projeto",
      subtitle: "Visão geral do projeto em tempo real",
      highlights: {
        stats: { label: "Estatísticas do projeto", desc: "Páginas, tarefas, equipe em um relance" },
        budget: { label: "Visão geral do orçamento", desc: "Rastrear gastos e restante" },
        teamHours: { label: "Horas da equipe", desc: "Ver alocação de tempo da equipe" },
        milestones: { label: "Marcos", desc: "Próximos prazos e entregas" }
      },
      properties: {
        totalBudget: { name: "Orçamento total", type: "Moeda", desc: "Alocação de orçamento do projeto" },
        spentBudget: { name: "Orçamento gasto", type: "Moeda", desc: "Gastos reais" },
        teamMembers: { name: "Membros da equipe", type: "Coleção", desc: "Lista de membros da equipe" },
        milestones: { name: "Marcos", type: "Coleção", desc: "Marcos do projeto" }
      }
    },
    tools: {
      title: "Biblioteca de ferramentas",
      subtitle: "Gerenciamento de plugins e scripts",
      highlights: {
        dllPlugins: { label: "Plugins DLL", desc: "Carregar plugins Revit compilados" },
        pythonScripts: { label: "Scripts Python", desc: "Executar automação Python" },
        csharpScripts: { label: "Scripts C#", desc: "Executar código C# instantaneamente" },
        multiPlugin: { label: "DLL multi-plugin", desc: "Uma DLL pode hospedar múltiplos plugins" }
      },
      properties: {
        name: { name: "Nome", type: "Metadados", desc: "Nome de exibição da ferramenta" },
        description: { name: "Descrição", type: "Metadados", desc: "Descrição da ferramenta" },
        category: { name: "Categoria", type: "Metadados", desc: "Agrupamento por categoria" },
        keywords: { name: "Palavras-chave", type: "Metadados", desc: "Palavras-chave de busca" },
        author: { name: "Autor", type: "Metadados", desc: "Criador da ferramenta" },
        version: { name: "Versão", type: "Metadados", desc: "Número da versão" }
      }
    },
    projects: {
      title: "Gestão de projetos",
      subtitle: "Rastreamento de equipe e orçamento",
      highlights: {
        projectCards: { label: "Cartões de projeto", desc: "Visão geral visual do projeto" },
        teamManagement: { label: "Gestão de equipe", desc: "Atribuir funções e rastrear horas" },
        accIntegration: { label: "Integração ACC", desc: "Vincular a projetos Autodesk" },
        budgetTracking: { label: "Rastreamento de orçamento", desc: "Monitorar custos por membro" }
      },
      properties: {
        name: { name: "Nome", type: "Texto", desc: "Nome do projeto" },
        client: { name: "Cliente", type: "Texto", desc: "Nome do cliente" },
        projectNumber: { name: "Número do projeto", type: "Texto", desc: "Identificador do projeto" },
        accProjectId: { name: "ID projeto ACC", type: "Link", desc: "Conexão projeto ACC" },
        linkPath: { name: "Caminho link Invoratec", type: "Caminho", desc: "Pasta de publicação do modelo" },
        status: { name: "Status", type: "Seleção", desc: "Planejamento/Em andamento/Em espera/Concluído" },
        completion: { name: "Conclusão %", type: "Número", desc: "Porcentagem de progresso" }
      }
    },
    acc: {
      title: "Integração ACC",
      subtitle: "Autodesk Construction Cloud",
      highlights: {
        hubBrowser: { label: "Navegador de hub", desc: "Navegar hubs e projetos ACC" },
        modelLinking: { label: "Vinculação de modelo", desc: "Vincular Invoratec a projetos ACC" },
        auth: { label: "Auth 3 pernas", desc: "Autenticação segura Autodesk" },
        fileSync: { label: "Sincronização de arquivos", desc: "Sincronizar modelos para pasta Invoratec" }
      },
      properties: {
        hubId: { name: "ID Hub ACC", type: "Link", desc: "Hub ACC conectado" },
        projectId: { name: "ID Projeto ACC", type: "Link", desc: "Projeto ACC conectado" },
        accountId: { name: "ID Conta ACC", type: "Link", desc: "Identificador de conta ACC" },
        isAuth: { name: "Autenticado", type: "Booleano", desc: "Status de autenticação" }
      }
    }
  },
  ru: {
    tasks: {
      title: "Управление задачами",
      subtitle: "Динамическое управление задачами в Revit",
      highlights: {
        inRevit: { label: "Задачи в Revit", desc: "Управлять задачами не выходя из Revit" },
        elementTracking: { label: "Отслеживание элементов", desc: "Связать задачи с элементами Revit" },
        timeTracking: { label: "Учёт времени", desc: "Встроенный таймер и ручной ввод" },
        cloudSync: { label: "Облачная синхронизация", desc: "Синхронизация с веб-платформой" }
      },
      properties: {
        elements: { name: "Элементы Revit", type: "BIM", desc: "Отслеживать элементы Revit по UniqueId" },
        dateHours: { name: "Дата-часы", type: "BIM", desc: "Дата + часы + записи сотрудника" },
        trackedTime: { name: "Отслеженное время", type: "Время", desc: "Учёт времени по таймеру" },
        manualTime: { name: "Ручное время", type: "Время", desc: "Ручные записи времени" },
        totalTime: { name: "Общее время", type: "Расчёт", desc: "Сумма отслеженного + ручного" }
      }
    },
    assistant: {
      title: "ИИ-ассистент",
      subtitle: "Автоматизация на естественном языке",
      highlights: {
        naturalLanguage: { label: "Естественный язык", desc: "Описывайте задачи простым языком" },
        voiceControl: { label: "Голосовое управление", desc: "Голосовые команды без рук" },
        codeExecution: { label: "Выполнение кода", desc: "Запуск скриптов Python/C# напрямую" },
        toolMatching: { label: "Подбор инструментов", desc: "ИИ сопоставляет запросы с инструментами" }
      },
      properties: {
        chat: { name: "Интерфейс чата", type: "UI", desc: "Диалоговое взаимодействие с ИИ" },
        script: { name: "Выполнение скриптов", type: "Функция", desc: "Выполнение кода Python/C#" },
        recommendations: { name: "Рекомендации инструментов", type: "ИИ", desc: "Умные предложения инструментов" },
        history: { name: "История", type: "Функция", desc: "История чата и контекст" }
      }
    },
    dashboard: {
      title: "Панель проекта",
      subtitle: "Обзор проекта в реальном времени",
      highlights: {
        stats: { label: "Статистика проекта", desc: "Страницы, задачи, команда с первого взгляда" },
        budget: { label: "Обзор бюджета", desc: "Отслеживание расходов и остатка" },
        teamHours: { label: "Часы команды", desc: "Распределение времени команды" },
        milestones: { label: "Вехи", desc: "Предстоящие сроки и результаты" }
      },
      properties: {
        totalBudget: { name: "Общий бюджет", type: "Валюта", desc: "Распределение бюджета проекта" },
        spentBudget: { name: "Потраченный бюджет", type: "Валюта", desc: "Фактические расходы" },
        teamMembers: { name: "Члены команды", type: "Коллекция", desc: "Список членов команды" },
        milestones: { name: "Вехи", type: "Коллекция", desc: "Вехи проекта" }
      }
    },
    tools: {
      title: "Библиотека инструментов",
      subtitle: "Управление плагинами и скриптами",
      highlights: {
        dllPlugins: { label: "DLL-плагины", desc: "Загрузка скомпилированных плагинов Revit" },
        pythonScripts: { label: "Скрипты Python", desc: "Выполнение автоматизации Python" },
        csharpScripts: { label: "Скрипты C#", desc: "Выполнение кода C# на лету" },
        multiPlugin: { label: "Мульти-плагин DLL", desc: "Одна DLL может содержать несколько плагинов" }
      },
      properties: {
        name: { name: "Название", type: "Метаданные", desc: "Отображаемое имя инструмента" },
        description: { name: "Описание", type: "Метаданные", desc: "Описание инструмента" },
        category: { name: "Категория", type: "Метаданные", desc: "Группировка по категории" },
        keywords: { name: "Ключевые слова", type: "Метаданные", desc: "Ключевые слова для поиска" },
        author: { name: "Автор", type: "Метаданные", desc: "Создатель инструмента" },
        version: { name: "Версия", type: "Метаданные", desc: "Номер версии" }
      }
    },
    projects: {
      title: "Управление проектами",
      subtitle: "Отслеживание команды и бюджета",
      highlights: {
        projectCards: { label: "Карточки проектов", desc: "Визуальный обзор проекта" },
        teamManagement: { label: "Управление командой", desc: "Назначение ролей и отслеживание часов" },
        accIntegration: { label: "Интеграция ACC", desc: "Связь с проектами Autodesk" },
        budgetTracking: { label: "Отслеживание бюджета", desc: "Мониторинг затрат по участникам" }
      },
      properties: {
        name: { name: "Название", type: "Текст", desc: "Название проекта" },
        client: { name: "Клиент", type: "Текст", desc: "Имя клиента" },
        projectNumber: { name: "Номер проекта", type: "Текст", desc: "Идентификатор проекта" },
        accProjectId: { name: "ID проекта ACC", type: "Ссылка", desc: "Подключение к проекту ACC" },
        linkPath: { name: "Путь ссылки Invoratec", type: "Путь", desc: "Папка публикации модели" },
        status: { name: "Статус", type: "Выбор", desc: "Планирование/В работе/На паузе/Завершён" },
        completion: { name: "Завершение %", type: "Число", desc: "Процент прогресса" }
      }
    },
    acc: {
      title: "Интеграция ACC",
      subtitle: "Autodesk Construction Cloud",
      highlights: {
        hubBrowser: { label: "Браузер хабов", desc: "Просмотр хабов и проектов ACC" },
        modelLinking: { label: "Связывание моделей", desc: "Связать Invoratec с проектами ACC" },
        auth: { label: "3-этапная авторизация", desc: "Безопасная аутентификация Autodesk" },
        fileSync: { label: "Синхронизация файлов", desc: "Синхронизация моделей в папку Invoratec" }
      },
      properties: {
        hubId: { name: "ID хаба ACC", type: "Ссылка", desc: "Подключённый хаб ACC" },
        projectId: { name: "ID проекта ACC", type: "Ссылка", desc: "Подключённый проект ACC" },
        accountId: { name: "ID аккаунта ACC", type: "Ссылка", desc: "Идентификатор аккаунта ACC" },
        isAuth: { name: "Авторизован", type: "Булево", desc: "Статус авторизации" }
      }
    }
  },
  ar: {
    tasks: {
      title: "إدارة المهام",
      subtitle: "إدارة المهام الديناميكية داخل Revit",
      highlights: {
        inRevit: { label: "مهام في Revit", desc: "إدارة المهام دون مغادرة Revit" },
        elementTracking: { label: "تتبع العناصر", desc: "ربط المهام بعناصر Revit" },
        timeTracking: { label: "تتبع الوقت", desc: "مؤقت مدمج وإدخال يدوي للوقت" },
        cloudSync: { label: "مزامنة سحابية", desc: "المزامنة مع المنصة الإلكترونية" }
      },
      properties: {
        elements: { name: "عناصر Revit", type: "BIM", desc: "تتبع عناصر Revit بواسطة UniqueId" },
        dateHours: { name: "تاريخ الساعات", type: "BIM", desc: "تاريخ + ساعات + إدخالات الشخص" },
        trackedTime: { name: "الوقت المتتبع", type: "وقت", desc: "تتبع الوقت بالمؤقت" },
        manualTime: { name: "الوقت اليدوي", type: "وقت", desc: "إدخالات الوقت اليدوية" },
        totalTime: { name: "الوقت الإجمالي", type: "محسوب", desc: "مجموع المتتبع + اليدوي" }
      }
    },
    assistant: {
      title: "مساعد الذكاء الاصطناعي",
      subtitle: "الأتمتة باللغة الطبيعية",
      highlights: {
        naturalLanguage: { label: "لغة طبيعية", desc: "وصف المهام بلغة بسيطة" },
        voiceControl: { label: "التحكم الصوتي", desc: "أوامر صوتية بدون استخدام اليدين" },
        codeExecution: { label: "تنفيذ الكود", desc: "تشغيل نصوص Python/C# مباشرة" },
        toolMatching: { label: "مطابقة الأدوات", desc: "الذكاء الاصطناعي يربط طلبك بالأدوات" }
      },
      properties: {
        chat: { name: "واجهة الدردشة", type: "واجهة", desc: "تفاعل محادثة مع الذكاء الاصطناعي" },
        script: { name: "تنفيذ النص", type: "ميزة", desc: "تنفيذ كود Python/C#" },
        recommendations: { name: "توصيات الأدوات", type: "ذكاء اصطناعي", desc: "اقتراحات أدوات ذكية" },
        history: { name: "السجل", type: "ميزة", desc: "سجل الدردشة والسياق" }
      }
    },
    dashboard: {
      title: "لوحة المشروع",
      subtitle: "نظرة عامة على المشروع في الوقت الفعلي",
      highlights: {
        stats: { label: "إحصائيات المشروع", desc: "الصفحات والمهام والفريق بنظرة واحدة" },
        budget: { label: "نظرة عامة على الميزانية", desc: "تتبع الإنفاق والمتبقي" },
        teamHours: { label: "ساعات الفريق", desc: "عرض توزيع وقت الفريق" },
        milestones: { label: "المعالم", desc: "المواعيد النهائية والتسليمات القادمة" }
      },
      properties: {
        totalBudget: { name: "إجمالي الميزانية", type: "عملة", desc: "تخصيص ميزانية المشروع" },
        spentBudget: { name: "الميزانية المنفقة", type: "عملة", desc: "الإنفاق الفعلي" },
        teamMembers: { name: "أعضاء الفريق", type: "مجموعة", desc: "قائمة أعضاء الفريق" },
        milestones: { name: "المعالم", type: "مجموعة", desc: "معالم المشروع" }
      }
    },
    tools: {
      title: "مكتبة الأدوات",
      subtitle: "إدارة الإضافات والنصوص",
      highlights: {
        dllPlugins: { label: "إضافات DLL", desc: "تحميل إضافات Revit المترجمة" },
        pythonScripts: { label: "نصوص Python", desc: "تنفيذ أتمتة Python" },
        csharpScripts: { label: "نصوص C#", desc: "تشغيل كود C# فوراً" },
        multiPlugin: { label: "DLL متعدد الإضافات", desc: "ملف DLL واحد يستضيف إضافات متعددة" }
      },
      properties: {
        name: { name: "الاسم", type: "بيانات وصفية", desc: "اسم عرض الأداة" },
        description: { name: "الوصف", type: "بيانات وصفية", desc: "وصف الأداة" },
        category: { name: "الفئة", type: "بيانات وصفية", desc: "تجميع الفئات" },
        keywords: { name: "الكلمات المفتاحية", type: "بيانات وصفية", desc: "كلمات البحث المفتاحية" },
        author: { name: "المؤلف", type: "بيانات وصفية", desc: "منشئ الأداة" },
        version: { name: "الإصدار", type: "بيانات وصفية", desc: "رقم الإصدار" }
      }
    },
    projects: {
      title: "إدارة المشاريع",
      subtitle: "تتبع الفريق والميزانية",
      highlights: {
        projectCards: { label: "بطاقات المشروع", desc: "نظرة عامة مرئية للمشروع" },
        teamManagement: { label: "إدارة الفريق", desc: "تعيين الأدوار وتتبع الساعات" },
        accIntegration: { label: "تكامل ACC", desc: "الربط مع مشاريع Autodesk" },
        budgetTracking: { label: "تتبع الميزانية", desc: "مراقبة التكاليف لكل عضو" }
      },
      properties: {
        name: { name: "الاسم", type: "نص", desc: "اسم المشروع" },
        client: { name: "العميل", type: "نص", desc: "اسم العميل" },
        projectNumber: { name: "رقم المشروع", type: "نص", desc: "معرف المشروع" },
        accProjectId: { name: "معرف مشروع ACC", type: "رابط", desc: "اتصال مشروع ACC" },
        linkPath: { name: "مسار رابط Invoratec", type: "مسار", desc: "مجلد نشر النموذج" },
        status: { name: "الحالة", type: "اختيار", desc: "تخطيط/قيد التنفيذ/معلق/مكتمل" },
        completion: { name: "نسبة الإنجاز", type: "رقم", desc: "نسبة التقدم" }
      }
    },
    acc: {
      title: "تكامل ACC",
      subtitle: "Autodesk Construction Cloud",
      highlights: {
        hubBrowser: { label: "متصفح المحاور", desc: "تصفح محاور ومشاريع ACC" },
        modelLinking: { label: "ربط النموذج", desc: "ربط Invoratec بمشاريع ACC" },
        auth: { label: "مصادقة ثلاثية", desc: "مصادقة Autodesk آمنة" },
        fileSync: { label: "مزامنة الملفات", desc: "مزامنة النماذج إلى مجلد Invoratec" }
      },
      properties: {
        hubId: { name: "معرف محور ACC", type: "رابط", desc: "محور ACC المتصل" },
        projectId: { name: "معرف مشروع ACC", type: "رابط", desc: "مشروع ACC المتصل" },
        accountId: { name: "معرف حساب ACC", type: "رابط", desc: "معرف حساب ACC" },
        isAuth: { name: "مصادق", type: "منطقي", desc: "حالة المصادقة" }
      }
    }
  }
};

// Apply translations
const languages = ['ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('================================================================================');
console.log('APPLYING featuresPage.bimFeatures TRANSLATIONS');
console.log('================================================================================\n');

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Ensure the path exists
    if (!data.featuresPage) data.featuresPage = {};
    if (!data.featuresPage.bimFeatures) data.featuresPage.bimFeatures = {};

    // Apply translations
    data.featuresPage.bimFeatures = translations[lang];

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`${lang.toUpperCase()}: Applied bimFeatures translations`);
  } catch (error) {
    console.error(`${lang.toUpperCase()}: Error - ${error.message}`);
  }
});

console.log('\n================================================================================');
console.log('FEATURESPAGE.BIMFEATURES TRANSLATIONS COMPLETE');
console.log('================================================================================');
