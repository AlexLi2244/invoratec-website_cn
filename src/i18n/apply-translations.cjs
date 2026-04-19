const fs = require('fs');
const path = require('path');

// Comprehensive translations for all languages
const translations = {
  // ============= CHINESE (ZH) =============
  zh: {
    // Footer
    "footer.legal.dpa": "数据处理协议",

    // These should stay as-is (technical terms)
    "terms.cookies.content.section2.subsection1.cookies.0.name": "invoratec_user",
    "terms.cookies.content.section2.subsection1.cookies.1.name": "locale",
    "terms.cookies.content.section2.subsection1.cookies.2.name": "region",
    "terms.cookies.content.section2.subsection1.cookies.3.name": "cookie_consent",
    "terms.cookies.content.section2.subsection2.cookies.0.name": "theme",
    "terms.cookies.content.section2.subsection2.cookies.1.name": "recent_projects",

    // Blog tags - keep as technical terms
    "blog.tags.bim": "BIM",
    "blog.tags.mep": "MEP",

    // Cases stats - keep percentages
    "cases.items.shanghai-xintiandi.stats.timeSaved": "40%",
    "cases.items.shanghai-xintiandi.stats.costReduction": "25%",
    "cases.items.shanghai-xintiandi.stats.errorReduction": "35%",
    "cases.items.ordos-smart-scenic.stats.timeSaved": "35%",
    "cases.items.ordos-smart-scenic.stats.costReduction": "20%",
    "cases.items.ordos-smart-scenic.stats.errorReduction": "30%",
    "cases.items.daxing-airport.stats.timeSaved": "45%",
    "cases.items.daxing-airport.stats.costReduction": "30%",
    "cases.items.daxing-airport.stats.errorReduction": "50%",
    "cases.tags.bim": "BIM",

    // Features page - keep BIM
    "featuresPage.webFeatures.viewer.properties.viewer.type": "BIM",
    "featuresPage.webFeatures.coordination.properties.viewer.type": "BIM",
    "featuresPage.webFeatures.coordination.properties.sets.type": "BIM",
    "featuresPage.webFeatures.sheets.properties.viewer.type": "BIM",
    "featuresPage.webFeatures.sheets.properties.markup.type": "BIM",
    "featuresPage.bimFeatures.tasks.properties.elements.type": "BIM",
    "featuresPage.bimFeatures.tasks.properties.dateHours.type": "BIM"
  },

  // ============= JAPANESE (JA) =============
  ja: {
    // Footer
    "footer.legal.dpa": "データ処理契約",

    // Technical terms - keep as-is
    "terms.cookies.content.section2.subsection1.cookies.0.name": "invoratec_user",
    "terms.cookies.content.section2.subsection1.cookies.1.name": "locale",
    "terms.cookies.content.section2.subsection1.cookies.2.name": "region",
    "terms.cookies.content.section2.subsection1.cookies.3.name": "cookie_consent",
    "terms.cookies.content.section2.subsection2.cookies.0.name": "theme",
    "terms.cookies.content.section2.subsection2.cookies.1.name": "recent_projects",

    // Pricing - keep as-is
    "pricing.plans.starter.price": "$99",
    "pricing.plans.professional.price": "$449",

    // Blog tags
    "blog.tags.ai": "AI",
    "blog.tags.bim": "BIM",
    "blog.tags.mep": "MEP",

    // Stats - keep percentages
    "cases.items.shanghai-xintiandi.stats.timeSaved": "40%",
    "cases.items.shanghai-xintiandi.stats.costReduction": "25%",
    "cases.items.shanghai-xintiandi.stats.errorReduction": "35%",
    "cases.items.ordos-smart-scenic.stats.timeSaved": "35%",
    "cases.items.ordos-smart-scenic.stats.costReduction": "20%",
    "cases.items.ordos-smart-scenic.stats.errorReduction": "30%",
    "cases.items.daxing-airport.stats.timeSaved": "45%",
    "cases.items.daxing-airport.stats.costReduction": "30%",
    "cases.items.daxing-airport.stats.errorReduction": "50%",
    "cases.tags.bim": "BIM",

    // Documentation
    "docs.content.webTimeline.overview": "概要",
    "docs.content.webTimeline.overviewDesc": "タイムライン＆ガントビューは、タスクの依存関係、マイルストーン、進捗追跡を備えたビジュアルなプロジェクトスケジューリングを提供します。プロジェクトのタイムラインを計画し、リアルタイムで進捗を監視できます。",
    "docs.content.webTimeline.ganttViewDesc": "ガントチャートは、タイムライン上でタスクを水平バーとして表示します。各バーの長さはタスクの期間を表します。タスクはステータスによって色分けされています。",
    "docs.content.webTimeline.schedulingDesc": "以下の方法でタスクをスケジュールします：",
    "docs.content.webTimeline.schedStep1": "タスクバーを水平にドラッグして開始日を変更",
    "docs.content.webTimeline.schedStep2": "タスクバーの端をドラッグして期間を調整",
    "docs.content.webTimeline.schedStep3": "タスクプロパティパネルで直接日付を設定",
    "docs.content.webTimeline.dependenciesDesc": "タスクをリンクして依存関係を作成します。先行タスクが移動すると、依存タスクも自動的に調整されます。タスクをリンクするにはリレーションプロパティを使用します。",
    "docs.content.webTimeline.milestones": "マイルストーン",
    "docs.content.webTimeline.milestonesDesc": "重要なプロジェクト日程をマイルストーンとしてマークします。マイルストーンはタイムライン上でひし形として表示され、タスクや成果物にリンクできます。",
    "docs.content.webTimeline.progress": "進捗追跡",
    "docs.content.webTimeline.progressDesc": "各タスクの完了率を追跡します。ガントチャートは進捗をタスクバーの塗りつぶし部分として表示し、どのタスクが順調かを簡単に確認できます。",
    "docs.content.webCoordination.overview": "概要",
    "docs.content.webCoordination.accStep1": "コーディネーションページに移動",
    "docs.content.webCoordination.accStep3": "干渉は3Dビューポイントとともにインポートされます",
    "docs.content.webCoordination.clashReview": "干渉のレビュー",
    "docs.content.webCoordination.clashReviewDesc": "各干渉には、競合箇所にズームする3Dビューポイントが含まれています。フルモデルを表示しながら、コンテキスト内で干渉をレビューします。",
    "docs.content.webCoordination.issueTrackingDesc": "干渉をチームメンバーに割り当て、優先度と期日を設定し、解決状況を追跡します。解決プロセスを文書化するためにコメントと添付ファイルを追加します。",
    "docs.content.webCoordination.disciplines": "分野タグ",
    "docs.content.webCoordination.disciplinesDesc": "フィルタリングとレポート用に分野（MEP、構造、建築）で干渉にタグを付けます。分野とステータスごとの干渉数を示すレポートを生成します。",
    "docs.content.webSheets.overview": "概要",
    "docs.content.webSheets.viewing": "図面の表示",
    "docs.content.webSheets.markup": "マークアップツール",
    "docs.content.webSheets.markupDesc": "以下のマークアップツールで図面に注釈を付けます：",
    "docs.content.webSheets.markupTool1": "フリーハンド描画用のペンとハイライター",
    "docs.content.webSheets.markupTool2": "矩形、円、矢印などの図形",
    "docs.content.webSheets.markupTool3": "カスタマイズ可能なスタイルのテキスト注釈",
    "docs.content.webSheets.markupTool4": "承認マークアップ用のスタンプツール",
    "docs.content.webSheets.versions": "バージョン比較",
    "docs.content.webSheets.versionsDesc": "同じ図面の異なるリビジョンを比較して変更を特定します。比較ビューは追加、削除、変更を強調表示します。",
    "docs.content.webReports.overview": "概要",
    "docs.content.webReports.overviewDesc": "レポート＆分析モジュールは、プロジェクトダッシュボード、チームパフォーマンス指標、関係者に情報を提供するエクスポート可能なレポートを提供します。",
    "docs.content.webReports.dashboardDesc": "ダッシュボードは、タスク完了率、今後の締め切り、チームアクティビティ、マイルストーンステータスなど、主要なプロジェクト指標を一目で表示します。",
    "docs.content.webReports.teamPerformance": "チームパフォーマンス",
    "docs.content.webReports.teamPerformanceDesc": "完了したタスク、記録された時間、稼働率などの指標でチームの生産性を追跡します。ボトルネックを特定し、チーム全体でワークロードのバランスを取ります。",
    "docs.content.webReports.budget": "予算追跡",
    "docs.content.webReports.budgetDesc": "予算に対するプロジェクトコストを監視します。チームメンバー、マイルストーン、またはタスクカテゴリ別に支出を追跡します。予算しきい値のアラートを設定します。",
    "docs.content.webReports.export": "レポートのエクスポート",
    "docs.content.webReports.exportDesc": "関係者と共有するために複数の形式でレポートをエクスポートします：",
    "docs.content.webReports.exportExcel": "Excel：さらなる分析用の生データ",
    "docs.content.revitAssistant.overview": "概要",
    "docs.content.revitAssistant.naturalLanguage": "自然言語コマンド",
    "docs.content.revitAssistant.naturalLanguageDesc": "会話形式の言語でコマンドを入力または発話します。AIはコンテキストを理解し、複雑なリクエストを処理できます。",
    "docs.content.revitAssistant.exampleCommands": "コマンド例",
    "docs.content.revitAssistant.example1": "レベル1のすべての壁を選択",
    "docs.content.revitAssistant.example2": "選択したドアの高さを2100mmに変更",
    "docs.content.revitAssistant.example3": "すべての機械設備のスケジュールを作成",
    "docs.content.revitAssistant.example4": "耐火等級パラメータが欠落しているすべての要素を検索",
    "docs.content.revitAssistant.voiceControl": "音声コントロール",
    "docs.content.revitAssistant.voiceControlDesc": "マイクボタンをクリックしてハンズフリーでコマンドを発話します。音声コントロールは、モデルで作業中にキーボードに切り替えたくない場合に最適です。",
    "docs.content.revitAssistant.codeExecution": "コード実行",
    "docs.content.revitAssistant.codeExecutionDesc": "AIはPythonまたはC#スクリプトを作成して実行し、複雑なタスクを達成できます。安全のため、実行前に生成されたコードを確認してください。",
    "docs.content.revitAssistant.toolMatching": "スマートツールマッチング",
    "docs.content.revitAssistant.toolMatchingDesc": "AIはリクエストをライブラリ内の利用可能なツールに自動的にマッチングします。適切なツールが存在する場合、新しいコードを書く代わりにそれを使用することを提案します。",
    "docs.content.revitTasks.overview": "概要",
    "docs.content.revitTasks.elementTracking": "要素追跡",
    "docs.content.revitTasks.trackStep2": "タスクパネルで「タスクにリンク」をクリック",
    "docs.content.revitTasks.trackStep3": "要素リンクをクリックしていつでもその要素にズーム",
    "docs.content.revitTasks.timeTracking": "時間追跡",
    "docs.content.revitTasks.timeTrackingDesc": "内蔵タイマーでタスクに費やした時間を追跡します。作業開始時にタイマーを開始すると、自動的に時間が記録されます。オフラインで行った作業の手動時間入力も追加できます。",
    "docs.content.revitTasks.cloudSync": "クラウド同期",
    "docs.content.revitTasks.cloudSyncDesc": "すべての変更はクラウドと自動的に同期されます。Webプラットフォームのチームメンバーはあなたの更新をリアルタイムで確認でき、あなたも彼らの更新を確認できます。",
    "docs.content.revitTasks.myTasks": "マイタスクビュー",
    "docs.content.revitTasks.myTasksDesc": "マイタスクビューには、あなたに割り当てられたタスクのみが表示されます。ステータス、優先度、または期日でフィルタリングします。タスクをクリックして詳細とリンクされた要素を表示します。",
    "docs.content.revitTools.overview": "概要",
    "docs.content.revitTools.overviewDesc": "ツールライブラリは、Pythonスクリプト、C#スクリプト、およびコンパイル済みDLLプラグインを管理します。単一のインターフェースから自動化ツールを実行し、チームとツールを共有します。",
    "docs.content.revitTools.dllPlugins": "DLLプラグイン",
    "docs.content.revitTools.pythonScripts": "Pythonスクリプト",
    "docs.content.revitTools.pythonExample": "Pythonスクリプト例",
    "docs.content.revitTools.csharpScripts": "C#スクリプト",
    "docs.content.revitTools.csharpScriptsDesc": "コンパイルなしでC#コードをオンザフライで実行します。C#スクリプトエンジンはコードを即座にコンパイルして実行し、アイデアのプロトタイプとテストを容易にします。",
    "docs.content.revitTools.organizing": "ツールの整理",
    "docs.content.revitTools.organizingDesc": "発見しやすいようにツールをカテゴリに整理します。AIアシスタントが関連するツールを見つけて提案できるように、説明とキーワードを追加します。",
    "docs.content.revitProjects.overview": "概要",
    "docs.content.revitProjects.creating": "プロジェクトの作成",
    "docs.content.revitProjects.team": "チーム管理",

    // Features page - keep BIM
    "newMedia.label": "メディア",
    "featuresPage.webFeatures.viewer.properties.viewer.type": "BIM",
    "featuresPage.webFeatures.coordination.properties.viewer.type": "BIM",
    "featuresPage.webFeatures.coordination.properties.sets.type": "BIM",
    "featuresPage.webFeatures.sheets.properties.viewer.type": "BIM",
    "featuresPage.webFeatures.sheets.properties.markup.type": "BIM",
    "featuresPage.bimFeatures.tasks.properties.elements.type": "BIM",
    "featuresPage.bimFeatures.tasks.properties.dateHours.type": "BIM",

    // Service BIM
    "serviceBIM.services.items.coordination.title": "コーディネーション",
    "serviceBIM.cta.subtitle": "専門家がBIM投資の価値を最大化するお手伝いをします",
    "serviceBIM.cta.demo": "コンサルティングを予約",
    "serviceBIM.cta.contact": "メールでお問い合わせ",
    "serviceBIM.services.items.training.title": "トレーニング",

    // Service AI
    "serviceAI.useCases.subtitle": "カスタムAIを活用してワークフローを変革している組織の事例をご覧ください",
    "serviceAI.useCases.items.design.title": "AI設計アシスタント",
    "serviceAI.useCases.items.design.description": "設計基準に基づいたインテリジェントな提案を受け取ります",
    "serviceAI.useCases.items.review.title": "自動レビュー",
    "serviceAI.useCases.items.review.description": "基準に対するAI搭載の品質チェック",
    "serviceAI.useCases.items.validation.title": "設計検証",
    "serviceAI.useCases.items.validation.description": "設計を基準と規制に照らして自動的にチェック",
    "serviceAI.useCases.items.documentation.title": "自動ドキュメント作成",
    "serviceAI.useCases.items.documentation.description": "AIがプロジェクトドキュメントの生成と更新を支援",
    "serviceAI.useCases.items.estimation.title": "スマート見積",
    "serviceAI.useCases.items.estimation.description": "履歴データと現在のモデルに基づくAI支援のコスト見積",
    "serviceAI.useCases.items.scheduling.title": "スケジュール最適化",
    "serviceAI.useCases.items.scheduling.description": "リソースとタスクの依存関係に基づくインテリジェントなスケジューリング",
    "serviceAI.useCases.items.rfi.title": "RFI管理",
    "serviceAI.useCases.items.rfi.description": "RFIへのAI支援による回答と追跡",
    "serviceAI.hero.title": "カスタムAIソリューション",
    "serviceAI.hero.subtitle": "お客様固有のワークフローとプロセスに合わせて構築されたAI",
    "serviceAI.hero.cta.demo": "相談を予約",
    "serviceAI.hero.cta.contact": "お問い合わせ",
    "serviceAI.overview.title": "AIを活用したワークフロー",
    "serviceAI.overview.description": "お客様の設計・建設プロセスの特定のニーズに対応するカスタムAIソリューション",
    "serviceAI.features.items.custom.title": "カスタムトレーニング",
    "serviceAI.features.items.custom.description": "お客様のプロジェクトデータと基準でトレーニングされたAIモデル",
    "serviceAI.features.items.integration.title": "シームレスな統合",
    "serviceAI.features.items.integration.description": "既存のツールやワークフローとのネイティブ統合",
    "serviceAI.features.items.automation.title": "タスクの自動化",
    "serviceAI.features.items.automation.description": "繰り返しタスクを自動化し、創造的な作業に集中",
    "serviceAI.features.items.insights.title": "データインサイト",
    "serviceAI.features.items.insights.description": "AI搭載のプロジェクトデータ分析と可視化",
    "serviceAI.cta.title": "AIでワークフローを変革",
    "serviceAI.cta.subtitle": "チームがカスタムAIソリューションからどのように利益を得られるかご相談ください",
    "serviceAI.cta.demo": "相談を予約",
    "serviceAI.cta.contact": "お問い合わせ",

    // Service Support
    "serviceSupport.tiers.items.standard.title": "スタンダード",
    "serviceSupport.tiers.items.professional.title": "プロフェッショナル",
    "serviceSupport.tiers.items.enterprise.title": "エンタープライズ",
    "serviceSupport.contact.subtitle": "サポートチームへの複数の連絡方法",
    "serviceSupport.docs.items.videos.title": "ビデオチュートリアル",
    "serviceSupport.docs.items.videos.description": "ステップバイステップのビデオガイドとウォークスルー",
    "serviceSupport.docs.items.api.title": "APIドキュメント",
    "serviceSupport.docs.items.api.description": "開発者向けのAPI統合ドキュメント",
    "serviceSupport.hero.title": "サポート＆成功",
    "serviceSupport.hero.subtitle": "成功に必要なサポートを受けましょう",
    "serviceSupport.tiers.title": "サポートプラン",
    "serviceSupport.tiers.subtitle": "ニーズに合った適切なサポートレベルを選択",
    "serviceSupport.tiers.items.standard.description": "メールサポート、ナレッジベースアクセス、コミュニティフォーラム",
    "serviceSupport.tiers.items.professional.description": "優先メールとチャットサポート、リモートセッション、専任アカウントマネージャー",
    "serviceSupport.tiers.items.enterprise.description": "24時間サポート、専任テクニカルアドバイザー、オンサイトトレーニング、カスタム統合支援",
    "serviceSupport.contact.title": "お問い合わせ",
    "serviceSupport.contact.items.email.title": "メールサポート",
    "serviceSupport.contact.items.email.description": "support@invoratec.com までメールをお送りください",
    "serviceSupport.contact.items.chat.title": "ライブチャット",
    "serviceSupport.contact.items.chat.description": "プロフェッショナルおよびエンタープライズプラン対象",
    "serviceSupport.docs.title": "ドキュメントとリソース",
    "serviceSupport.docs.subtitle": "製品ドキュメント、チュートリアル、学習リソースにアクセス",

    // Services
    "services.hero.title": "サービス＆ソリューション",
    "services.hero.subtitle": "専門家のサポートで成功を加速",
    "services.items.ai.title": "カスタムAIソリューション",
    "services.items.ai.description": "お客様のワークフローに合わせて構築されたAIソリューション",
    "services.items.bim.title": "BIMサービス",
    "services.items.bim.description": "包括的なBIMコンサルティングと実装サービス",
    "services.items.support.title": "テクニカルサポート",
    "services.items.support.description": "成功を確実にする専門家のサポート",
    "services.cta.title": "始める準備はできましたか？",
    "services.cta.subtitle": "私たちのサービスがプロジェクトにどのように役立つかご相談ください",
    "services.cta.demo": "相談を予約"
  },

  // ============= KOREAN (KO) =============
  ko: {
    // Features
    "features.web_ai.subtitle": "클라우드 플랫폼",

    // Footer
    "footer.legal.dpa": "데이터 처리 계약",

    // Terms
    "terms.terms.title": "이용약관",
    "terms.cookies.content.section2.subsection1.cookies.0.name": "invoratec_user",
    "terms.cookies.content.section2.subsection1.cookies.1.name": "locale",
    "terms.cookies.content.section2.subsection1.cookies.2.name": "region",
    "terms.cookies.content.section2.subsection1.cookies.3.name": "cookie_consent",
    "terms.cookies.content.section2.subsection2.cookies.0.name": "theme",
    "terms.cookies.content.section2.subsection2.cookies.1.name": "recent_projects",

    // About
    "about.products.title": "트윈 플랫폼",
    "about.products.subtitle": "데스크톱에서 클라우드까지 - 건축 전문가를 위한 완전한 AI 기반 에코시스템",
    "about.products.bim.features.voice": "음성 제어",
    "about.products.bim.features.automation": "자동화 도구",
    "about.products.bim.features.sync": "클라우드 동기화",
    "about.products.web.features.timeline": "타임라인",
    "about.products.web.features.coordination": "코디네이션",
    "about.products.web.features.reports": "리포트",
    "about.products.web.features.sheets": "시트",
    "about.story.title": "우리의 스토리",
    "about.story.description": "InvoratecAI는 건축 및 엔지니어링 전문가가 AI의 힘을 쉽게 활용할 수 있도록 설립되었습니다.",
    "about.team.title": "우리 팀",
    "about.team.subtitle": "건축, 소프트웨어 공학 및 인공지능의 경험을 결합한 팀",

    // Blog
    "blog.tags.ai": "AI",
    "blog.tags.bim": "BIM",
    "blog.tags.mep": "MEP",

    // Cases - keep percentages
    "cases.items.shanghai-xintiandi.stats.timeSaved": "40%",
    "cases.items.shanghai-xintiandi.stats.costReduction": "25%",
    "cases.items.shanghai-xintiandi.stats.errorReduction": "35%",
    "cases.items.ordos-smart-scenic.stats.timeSaved": "35%",
    "cases.items.ordos-smart-scenic.stats.costReduction": "20%",
    "cases.items.ordos-smart-scenic.stats.errorReduction": "30%",
    "cases.items.daxing-airport.stats.timeSaved": "45%",
    "cases.items.daxing-airport.stats.costReduction": "30%",
    "cases.items.daxing-airport.stats.errorReduction": "50%",
    "cases.tags.bim": "BIM",

    // Docs
    "docs.content.webTimeline.overview": "개요",
    "docs.content.webTimeline.overviewDesc": "타임라인 & 간트 뷰는 작업 의존성, 마일스톤 및 진행 상황 추적이 포함된 시각적 프로젝트 일정을 제공합니다. 프로젝트 타임라인을 계획하고 실시간으로 진행 상황을 모니터링하세요.",
    "docs.content.webTimeline.ganttViewDesc": "간트 차트는 타임라인에서 작업을 수평 막대로 표시합니다. 각 막대의 길이는 작업 기간을 나타냅니다. 작업은 상태에 따라 색상으로 구분됩니다.",
    "docs.content.webTimeline.schedulingDesc": "다음 방법으로 작업을 예약합니다:",
    "docs.content.webTimeline.schedStep1": "작업 막대를 가로로 드래그하여 시작 날짜 변경",
    "docs.content.webTimeline.schedStep2": "작업 막대의 가장자리를 드래그하여 기간 조정",
    "docs.content.webTimeline.schedStep3": "작업 속성 패널에서 직접 날짜 설정",
    "docs.content.webTimeline.dependenciesDesc": "작업을 연결하여 의존성을 만듭니다. 선행 작업이 이동하면 의존 작업이 자동으로 조정됩니다. 관계 속성을 사용하여 작업을 연결합니다.",
    "docs.content.webTimeline.milestones": "마일스톤",
    "docs.content.webTimeline.milestonesDesc": "중요한 프로젝트 날짜를 마일스톤으로 표시합니다. 마일스톤은 타임라인에서 다이아몬드 모양으로 나타나며 작업 및 산출물에 연결할 수 있습니다.",
    "docs.content.webTimeline.progress": "진행 상황 추적",
    "docs.content.webTimeline.progressDesc": "각 작업의 완료율을 추적합니다. 간트 차트는 진행 상황을 작업 막대의 채워진 부분으로 표시하여 어떤 작업이 순조롭게 진행되고 있는지 쉽게 확인할 수 있습니다.",

    // Services
    "services.hero.title": "서비스 & 솔루션",
    "services.hero.subtitle": "전문가 지원으로 성공을 가속화하세요",
    "services.items.ai.title": "맞춤형 AI 솔루션",
    "services.items.ai.description": "워크플로에 맞게 구축된 AI 솔루션",
    "services.items.bim.title": "BIM 서비스",
    "services.items.bim.description": "종합적인 BIM 컨설팅 및 구현 서비스",
    "services.items.support.title": "기술 지원",
    "services.items.support.description": "성공을 보장하는 전문가 지원",
    "services.cta.title": "시작할 준비가 되셨나요?",
    "services.cta.subtitle": "저희 서비스가 프로젝트에 어떻게 도움이 될 수 있는지 상담하세요",
    "services.cta.demo": "상담 예약",

    // Download
    "downloadPage.requirements.internet": "인터넷",

    // MockUI
    "mockUI.tasks.title": "작업",
    "mockUI.tasks.allTasks": "모든 작업",
    "mockUI.tasks.review": "검토",
    "mockUI.tasks.filter": "필터",
    "mockUI.tasks.status": "상태",
    "mockUI.tasks.priority": "우선순위",
    "mockUI.tasks.dueDate": "마감일",
    "mockUI.tasks.assignee": "담당자",
    "mockUI.tasks.search": "작업 검색...",
    "mockUI.tasks.newTask": "새 작업",
    "mockUI.tasks.complete": "완료",
    "mockUI.tasks.inProgress": "진행 중",
    "mockUI.tasks.todo": "할 일",
    "mockUI.tasks.high": "높음",
    "mockUI.tasks.medium": "보통",
    "mockUI.tasks.low": "낮음",
    "mockUI.viewer.title": "3D 뷰어",
    "mockUI.viewer.loading": "모델 로딩 중...",
    "mockUI.viewer.zoomIn": "확대",
    "mockUI.viewer.zoomOut": "축소",
    "mockUI.viewer.rotate": "회전",
    "mockUI.viewer.pan": "이동",
    "mockUI.viewer.reset": "뷰 초기화",
    "mockUI.viewer.fullscreen": "전체 화면",
    "mockUI.viewer.measure": "측정",
    "mockUI.viewer.section": "단면",
    "mockUI.viewer.layers": "레이어",
    "mockUI.viewer.properties": "속성",
    "mockUI.chat.title": "AI 어시스턴트",
    "mockUI.chat.placeholder": "메시지 입력...",
    "mockUI.chat.send": "보내기",
    "mockUI.chat.thinking": "생각 중...",
    "mockUI.chat.welcome": "안녕하세요! BIM 프로젝트를 어떻게 도와드릴까요?",
    "mockUI.timeline.title": "타임라인",
    "mockUI.timeline.today": "오늘",
    "mockUI.timeline.week": "주",
    "mockUI.timeline.month": "월",
    "mockUI.timeline.quarter": "분기",
    "mockUI.timeline.year": "년",
    "mockUI.timeline.milestone": "마일스톤",
    "mockUI.timeline.addMilestone": "마일스톤 추가",
    "mockUI.dashboard.title": "대시보드",
    "mockUI.dashboard.overview": "개요",
    "mockUI.dashboard.analytics": "분석",
    "mockUI.dashboard.team": "팀",
    "mockUI.dashboard.settings": "설정"
  },

  // ============= GERMAN (DE) =============
  de: {
    // Nav
    "nav.blog": "Blog",

    // Features
    "features.web_ai.subtitle": "Cloud-Plattform",

    // Footer
    "footer.legal.dpa": "AVV",
    "footer.legal.cookies": "Cookies",

    // Terms
    "terms.nav.terms": "Nutzungsbedingungen",
    "terms.terms.title": "Nutzungsbedingungen",
    "terms.integrations.content.support": "Support",
    "terms.cookies.content.section2.subsection1.cookies.0.name": "invoratec_user",
    "terms.cookies.content.section2.subsection1.cookies.1.name": "locale",
    "terms.cookies.content.section2.subsection1.cookies.2.name": "region",
    "terms.cookies.content.section2.subsection1.cookies.3.name": "cookie_consent",
    "terms.cookies.content.section2.subsection2.cookies.0.name": "theme",
    "terms.cookies.content.section2.subsection2.cookies.1.name": "recent_projects",

    // Product
    "product.features.bim.dashboard.title": "Dashboard",

    // Pricing
    "pricing.plans.starter.name": "Starter",
    "pricing.plans.professional.name": "Professional",
    "pricing.plans.enterprise.name": "Enterprise",

    // About
    "about.products.title": "Unsere Twin-Plattform",
    "about.products.subtitle": "Vom Desktop zur Cloud - ein vollständiges KI-gestütztes Ökosystem für Bauprofis",
    "about.products.bim.features.voice": "Sprachsteuerung",
    "about.products.bim.features.automation": "Automatisierungswerkzeuge",
    "about.products.bim.features.sync": "Cloud-Synchronisation",
    "about.products.web.features.timeline": "Zeitachse",
    "about.products.web.features.coordination": "Koordination",
    "about.products.web.features.reports": "Berichte",
    "about.products.web.features.sheets": "Pläne",
    "about.story.title": "Unsere Geschichte",
    "about.story.description": "InvoratecAI wurde gegründet, um Architektur- und Ingenieurprofis die einfache Nutzung von KI zu ermöglichen.",
    "about.team.title": "Unser Team",
    "about.team.subtitle": "Ein Team, das Erfahrung aus Architektur, Software-Engineering und künstlicher Intelligenz vereint",

    // Blog
    "blog.categories.tutorial": "Tutorial",
    "blog.tags.innovation": "Innovation",
    "blog.tags.bestPractices": "Best Practices",
    "blog.tags.cloud": "Cloud",
    "blog.tags.ai": "KI",
    "blog.tags.bim": "BIM",

    // Cases - keep percentages
    "cases.items.shanghai-xintiandi.stats.timeSaved": "40%",
    "cases.items.shanghai-xintiandi.stats.costReduction": "25%",
    "cases.items.shanghai-xintiandi.stats.errorReduction": "35%",
    "cases.items.ordos-smart-scenic.stats.timeSaved": "35%",
    "cases.items.ordos-smart-scenic.stats.costReduction": "20%",
    "cases.items.ordos-smart-scenic.stats.errorReduction": "30%",
    "cases.items.daxing-airport.stats.timeSaved": "45%",
    "cases.items.daxing-airport.stats.costReduction": "30%",
    "cases.items.daxing-airport.stats.errorReduction": "50%",
    "cases.tags.bim": "BIM",

    // Docs
    "docs.sections.installation.title": "Installation",
    "docs.content.webTimeline.overview": "Überblick",
    "docs.content.webTimeline.overviewDesc": "Die Zeitachsen- & Gantt-Ansicht bietet visuelle Projektplanung mit Aufgabenabhängigkeiten, Meilensteinen und Fortschrittsverfolgung. Planen Sie Ihre Projekt-Zeitachse und überwachen Sie den Fortschritt in Echtzeit.",
    "docs.content.webTimeline.ganttViewDesc": "Das Gantt-Diagramm zeigt Aufgaben als horizontale Balken auf einer Zeitachse an. Die Länge jedes Balkens repräsentiert die Aufgabendauer. Aufgaben sind nach Status farbcodiert.",
    "docs.content.webTimeline.schedulingDesc": "Planen Sie Aufgaben mit diesen Methoden:",
    "docs.content.webTimeline.schedStep1": "Ziehen Sie Aufgabenbalken horizontal, um Startdaten zu ändern",
    "docs.content.webTimeline.schedStep2": "Ziehen Sie die Kanten von Aufgabenbalken, um die Dauer anzupassen",
    "docs.content.webTimeline.schedStep3": "Setzen Sie Daten direkt im Aufgabeneigenschaften-Panel",
    "docs.content.webTimeline.milestones": "Meilensteine",
    "docs.content.webTimeline.progress": "Fortschrittsverfolgung",

    // Download
    "downloadPage.requirements.internet": "Internet",
    "downloadPage.requirements.disk": "Festplattenspeicher",

    // Activity
    "activityRegistration.success.event": "Veranstaltung",
    "activityDetail.sections.agenda": "Agenda",
    "activityDetail.sections.highlights": "Highlights",
    "activityDetail.sections.format": "Format",
    "activityDetail.sections.formatOnline": "Online",

    // Service Support
    "serviceSupport.tiers.items.standard.title": "Standard",
    "serviceSupport.tiers.items.professional.title": "Professional",
    "serviceSupport.tiers.items.enterprise.title": "Enterprise",

    // Services
    "services.hero.title": "Dienstleistungen & Lösungen",
    "services.hero.subtitle": "Beschleunigen Sie Ihren Erfolg mit Expertenunterstützung",
    "services.items.ai.title": "Maßgeschneiderte KI-Lösungen",
    "services.items.ai.description": "KI-Lösungen für Ihre Arbeitsabläufe",
    "services.items.bim.title": "BIM-Dienstleistungen",
    "services.items.bim.description": "Umfassende BIM-Beratung und Implementierungsdienste",
    "services.items.support.title": "Technischer Support",
    "services.items.support.description": "Expertenunterstützung für Ihren Erfolg",
    "services.cta.title": "Bereit loszulegen?",
    "services.cta.subtitle": "Besprechen Sie, wie unsere Dienstleistungen Ihrem Projekt helfen können",
    "services.cta.demo": "Beratung buchen",

    // MockUI
    "mockUI.tasks.title": "Aufgaben",
    "mockUI.tasks.allTasks": "Alle Aufgaben",
    "mockUI.tasks.filter": "Filter",
    "mockUI.tasks.status": "Status",
    "mockUI.tasks.review": "Überprüfung",
    "mockUI.tasks.priority": "Priorität",
    "mockUI.tasks.dueDate": "Fälligkeitsdatum",
    "mockUI.tasks.assignee": "Zugewiesen an",
    "mockUI.tasks.search": "Aufgaben suchen...",
    "mockUI.tasks.newTask": "Neue Aufgabe",
    "mockUI.tasks.complete": "Abgeschlossen",
    "mockUI.tasks.inProgress": "In Bearbeitung",
    "mockUI.tasks.todo": "Zu erledigen",
    "mockUI.tasks.high": "Hoch",
    "mockUI.tasks.medium": "Mittel",
    "mockUI.tasks.low": "Niedrig",
    "mockUI.viewer.title": "3D-Betrachter",
    "mockUI.viewer.loading": "Modell wird geladen...",
    "mockUI.viewer.zoomIn": "Vergrößern",
    "mockUI.viewer.zoomOut": "Verkleinern",
    "mockUI.viewer.rotate": "Drehen",
    "mockUI.viewer.pan": "Verschieben",
    "mockUI.viewer.reset": "Ansicht zurücksetzen",
    "mockUI.viewer.fullscreen": "Vollbild",
    "mockUI.viewer.measure": "Messen",
    "mockUI.viewer.section": "Schnitt",
    "mockUI.viewer.layers": "Ebenen",
    "mockUI.viewer.properties": "Eigenschaften",
    "mockUI.chat.title": "KI-Assistent",
    "mockUI.chat.placeholder": "Nachricht eingeben...",
    "mockUI.chat.send": "Senden",
    "mockUI.chat.thinking": "Denkt nach...",
    "mockUI.chat.welcome": "Hallo! Wie kann ich Ihnen bei Ihrem BIM-Projekt helfen?",
    "mockUI.timeline.title": "Zeitachse",
    "mockUI.timeline.today": "Heute",
    "mockUI.timeline.week": "Woche",
    "mockUI.timeline.month": "Monat",
    "mockUI.timeline.quarter": "Quartal",
    "mockUI.timeline.year": "Jahr",
    "mockUI.timeline.milestone": "Meilenstein",
    "mockUI.timeline.addMilestone": "Meilenstein hinzufügen",
    "mockUI.dashboard.title": "Dashboard",
    "mockUI.dashboard.overview": "Überblick",
    "mockUI.dashboard.analytics": "Analyse",
    "mockUI.dashboard.team": "Team",
    "mockUI.dashboard.settings": "Einstellungen"
  },

  // ============= FRENCH (FR) =============
  fr: {
    // Nav
    "nav.blog": "Blog",

    // Features
    "features.web_ai.subtitle": "Plateforme Cloud",

    // Footer
    "footer.resources.docs": "Documentation",
    "footer.company_links.contact": "Contact",
    "footer.legal.cookies": "Cookies",
    "footer.legal.dpa": "DPA",

    // Terms
    "terms.nav.terms": "Conditions d'utilisation",
    "terms.terms.title": "Conditions d'utilisation",
    "terms.integrations.content.support": "Support",
    "terms.cookies.content.section2.subsection1.cookies.0.name": "invoratec_user",
    "terms.cookies.content.section2.subsection1.cookies.1.name": "locale",
    "terms.cookies.content.section2.subsection1.cookies.2.name": "region",
    "terms.cookies.content.section2.subsection1.cookies.3.name": "cookie_consent",
    "terms.cookies.content.section2.subsection2.cookies.0.name": "theme",
    "terms.cookies.content.section2.subsection2.cookies.1.name": "recent_projects",

    // Pricing
    "pricing.plans.starter.name": "Starter",
    "pricing.plans.enterprise.name": "Enterprise",

    // About
    "about.products.title": "Notre Plateforme Twin",
    "about.products.subtitle": "Du bureau au cloud - un écosystème complet alimenté par l'IA pour les professionnels de la construction",
    "about.products.bim.features.voice": "Contrôle vocal",
    "about.products.bim.features.automation": "Outils d'automatisation",
    "about.products.bim.features.sync": "Synchronisation cloud",
    "about.products.web.features.timeline": "Chronologie",
    "about.products.web.features.coordination": "Coordination",
    "about.products.web.features.reports": "Rapports",
    "about.products.web.features.sheets": "Plans",
    "about.story.title": "Notre histoire",
    "about.story.description": "InvoratecAI a été fondée pour permettre aux professionnels de l'architecture et de l'ingénierie d'exploiter facilement la puissance de l'IA.",
    "about.team.title": "Notre équipe",
    "about.team.subtitle": "Une équipe combinant l'expérience de l'architecture, du génie logiciel et de l'intelligence artificielle",

    // Blog
    "blog.tags.innovation": "Innovation",
    "blog.tags.guide": "Guide",
    "blog.tags.coordination": "Coordination",
    "blog.tags.cloud": "Cloud",
    "blog.tags.collaboration": "Collaboration",
    "blog.tags.ai": "IA",
    "blog.tags.bim": "BIM",
    "blog.categories.tutorial": "Tutoriel",

    // Blog detail
    "blogDetail.conclusion": "Conclusion",

    // Case study
    "caseStudyDetail.projectInfo.client": "Client",

    // Cases
    "cases.solutionTitle": "Solution",
    "cases.industries.commercial": "Commercial",
    "cases.industries.infrastructure": "Infrastructure",
    "cases.tags.commercial": "Commercial",
    "cases.tags.coordination": "Coordination",
    "cases.tags.bim": "BIM",
    "cases.items.shanghai-xintiandi.stats.timeSaved": "40%",
    "cases.items.shanghai-xintiandi.stats.costReduction": "25%",
    "cases.items.shanghai-xintiandi.stats.errorReduction": "35%",
    "cases.items.ordos-smart-scenic.stats.timeSaved": "35%",
    "cases.items.ordos-smart-scenic.stats.costReduction": "20%",
    "cases.items.ordos-smart-scenic.stats.errorReduction": "30%",
    "cases.items.daxing-airport.stats.timeSaved": "45%",
    "cases.items.daxing-airport.stats.costReduction": "30%",
    "cases.items.daxing-airport.stats.errorReduction": "50%",

    // Docs
    "docs.navigation": "Documentation",
    "docs.sections.installation.title": "Installation",
    "docs.sections.configuration.title": "Configuration",
    "docs.sections.web-coordination.title": "Coordination",
    "docs.content.webTimeline.overview": "Aperçu",
    "docs.content.webTimeline.overviewDesc": "La vue Chronologie & Gantt fournit une planification visuelle du projet avec les dépendances des tâches, les jalons et le suivi de la progression. Planifiez votre chronologie de projet et surveillez la progression en temps réel.",
    "docs.content.webTimeline.schedulingDesc": "Planifiez les tâches avec ces méthodes :",
    "docs.content.webTimeline.milestones": "Jalons",
    "docs.content.webTimeline.progress": "Suivi de la progression",

    // Download
    "downloadPage.requirements.internet": "Internet",
    "downloadPage.requirements.disk": "Espace disque",

    // Activity
    "activityRegistration.success.event": "Événement",
    "activityDetail.sections.format": "Format",
    "activityDetail.sections.agenda": "Agenda",

    // Service BIM
    "serviceBIM.services.items.coordination.title": "Coordination",

    // Service Support
    "serviceSupport.tiers.items.standard.title": "Standard",

    // Services
    "services.hero.title": "Services & Solutions",
    "services.hero.subtitle": "Accélérez votre succès avec un support expert",
    "services.items.ai.title": "Solutions IA personnalisées",
    "services.items.ai.description": "Solutions IA construites pour vos flux de travail",
    "services.items.bim.title": "Services BIM",
    "services.items.bim.description": "Services complets de conseil et d'implémentation BIM",
    "services.items.support.title": "Support technique",
    "services.items.support.description": "Support expert pour assurer votre succès",
    "services.cta.title": "Prêt à commencer ?",
    "services.cta.subtitle": "Discutez de la façon dont nos services peuvent aider votre projet",
    "services.cta.demo": "Réserver une consultation",

    // MockUI
    "mockUI.tasks.title": "Tâches",
    "mockUI.tasks.allTasks": "Toutes les tâches",
    "mockUI.tasks.review": "Révision",
    "mockUI.tasks.filter": "Filtre",
    "mockUI.tasks.status": "Statut",
    "mockUI.tasks.priority": "Priorité",
    "mockUI.tasks.dueDate": "Date d'échéance",
    "mockUI.tasks.assignee": "Assigné à",
    "mockUI.tasks.search": "Rechercher des tâches...",
    "mockUI.tasks.newTask": "Nouvelle tâche",
    "mockUI.tasks.complete": "Terminé",
    "mockUI.tasks.inProgress": "En cours",
    "mockUI.tasks.todo": "À faire",
    "mockUI.tasks.high": "Haute",
    "mockUI.tasks.medium": "Moyenne",
    "mockUI.tasks.low": "Basse",
    "mockUI.viewer.title": "Visionneuse 3D",
    "mockUI.viewer.loading": "Chargement du modèle...",
    "mockUI.viewer.zoomIn": "Zoom avant",
    "mockUI.viewer.zoomOut": "Zoom arrière",
    "mockUI.viewer.rotate": "Rotation",
    "mockUI.viewer.pan": "Déplacement",
    "mockUI.viewer.reset": "Réinitialiser la vue",
    "mockUI.viewer.fullscreen": "Plein écran",
    "mockUI.viewer.measure": "Mesurer",
    "mockUI.viewer.section": "Section",
    "mockUI.viewer.layers": "Calques",
    "mockUI.viewer.properties": "Propriétés",
    "mockUI.chat.title": "Assistant IA",
    "mockUI.chat.placeholder": "Tapez un message...",
    "mockUI.chat.send": "Envoyer",
    "mockUI.chat.thinking": "Réflexion en cours...",
    "mockUI.chat.welcome": "Bonjour ! Comment puis-je vous aider avec votre projet BIM ?",
    "mockUI.timeline.title": "Chronologie",
    "mockUI.timeline.today": "Aujourd'hui",
    "mockUI.timeline.week": "Semaine",
    "mockUI.timeline.month": "Mois",
    "mockUI.timeline.quarter": "Trimestre",
    "mockUI.timeline.year": "Année",
    "mockUI.timeline.milestone": "Jalon",
    "mockUI.timeline.addMilestone": "Ajouter un jalon",
    "mockUI.dashboard.title": "Tableau de bord",
    "mockUI.dashboard.overview": "Aperçu",
    "mockUI.dashboard.analytics": "Analyse",
    "mockUI.dashboard.team": "Équipe",
    "mockUI.dashboard.settings": "Paramètres"
  },

  // ============= SPANISH (ES) =============
  es: {
    // Nav
    "nav.blog": "Blog",

    // Features
    "features.web_ai.subtitle": "Plataforma en la nube",

    // Footer
    "footer.legal.cookies": "Cookies",
    "footer.legal.dpa": "DPA",

    // Terms
    "terms.nav.terms": "Términos de servicio",
    "terms.terms.title": "Términos de servicio",
    "terms.ai.content.section7.general": "General",
    "terms.cookies.content.section2.subsection1.cookies.0.name": "invoratec_user",
    "terms.cookies.content.section2.subsection1.cookies.1.name": "locale",
    "terms.cookies.content.section2.subsection1.cookies.2.name": "region",
    "terms.cookies.content.section2.subsection1.cookies.3.name": "cookie_consent",
    "terms.cookies.content.section2.subsection2.cookies.0.name": "theme",
    "terms.cookies.content.section2.subsection2.cookies.1.name": "recent_projects",

    // Pricing
    "pricing.plans.starter.name": "Starter",
    "pricing.plans.professional.name": "Profesional",
    "pricing.plans.enterprise.name": "Enterprise",
    "pricing.plans.starter.price": "$99",

    // About
    "about.products.title": "Nuestra Plataforma Twin",
    "about.products.subtitle": "Del escritorio a la nube: un ecosistema completo impulsado por IA para profesionales de la construcción",
    "about.products.bim.features.voice": "Control por voz",
    "about.products.bim.features.automation": "Herramientas de automatización",
    "about.products.bim.features.sync": "Sincronización en la nube",
    "about.products.web.features.timeline": "Línea de tiempo",
    "about.products.web.features.coordination": "Coordinación",
    "about.products.web.features.reports": "Informes",

    // Blog
    "blog.categories.tutorial": "Tutorial",
    "blog.tags.ai": "IA",
    "blog.tags.bim": "BIM",
    "blog.tags.mep": "MEP",

    // Cases - keep percentages
    "cases.items.shanghai-xintiandi.stats.timeSaved": "40%",
    "cases.items.shanghai-xintiandi.stats.costReduction": "25%",
    "cases.items.shanghai-xintiandi.stats.errorReduction": "35%",
    "cases.items.ordos-smart-scenic.stats.timeSaved": "35%",
    "cases.items.ordos-smart-scenic.stats.costReduction": "20%",
    "cases.items.ordos-smart-scenic.stats.errorReduction": "30%",
    "cases.items.daxing-airport.stats.timeSaved": "45%",
    "cases.items.daxing-airport.stats.costReduction": "30%",
    "cases.items.daxing-airport.stats.errorReduction": "50%",
    "cases.tags.bim": "BIM",

    // Docs
    "docs.content.api.endpoint": "Endpoint",
    "docs.content.webTimeline.overview": "Descripción general",
    "docs.content.webTimeline.overviewDesc": "La vista de Línea de tiempo y Gantt proporciona programación visual del proyecto con dependencias de tareas, hitos y seguimiento del progreso. Planifique su línea de tiempo del proyecto y monitoree el progreso en tiempo real.",
    "docs.content.webTimeline.schedulingDesc": "Programe tareas usando estos métodos:",
    "docs.content.webTimeline.milestones": "Hitos",
    "docs.content.webTimeline.progress": "Seguimiento del progreso",

    // Download
    "downloadPage.requirements.internet": "Internet",
    "downloadPage.requirements.disk": "Espacio en disco",

    // Activity
    "activityDetail.sections.agenda": "Agenda",

    // Services
    "services.hero.title": "Servicios y Soluciones",
    "services.hero.subtitle": "Acelere su éxito con soporte experto",
    "services.items.ai.title": "Soluciones de IA personalizadas",
    "services.items.ai.description": "Soluciones de IA construidas para sus flujos de trabajo",
    "services.items.bim.title": "Servicios BIM",
    "services.items.bim.description": "Servicios integrales de consultoría e implementación BIM",
    "services.items.support.title": "Soporte técnico",
    "services.items.support.description": "Soporte experto para garantizar su éxito",
    "services.cta.title": "¿Listo para comenzar?",
    "services.cta.subtitle": "Discuta cómo nuestros servicios pueden ayudar a su proyecto",
    "services.cta.demo": "Reservar consulta",

    // MockUI
    "mockUI.tasks.title": "Tareas",
    "mockUI.tasks.allTasks": "Todas las tareas",
    "mockUI.tasks.review": "Revisión",
    "mockUI.tasks.filter": "Filtro",
    "mockUI.tasks.status": "Estado",
    "mockUI.tasks.priority": "Prioridad",
    "mockUI.tasks.dueDate": "Fecha de vencimiento",
    "mockUI.tasks.assignee": "Asignado a",
    "mockUI.tasks.search": "Buscar tareas...",
    "mockUI.tasks.newTask": "Nueva tarea",
    "mockUI.tasks.complete": "Completado",
    "mockUI.tasks.inProgress": "En progreso",
    "mockUI.tasks.todo": "Por hacer",
    "mockUI.tasks.high": "Alta",
    "mockUI.tasks.medium": "Media",
    "mockUI.tasks.low": "Baja",
    "mockUI.viewer.title": "Visor 3D",
    "mockUI.viewer.loading": "Cargando modelo...",
    "mockUI.viewer.zoomIn": "Acercar",
    "mockUI.viewer.zoomOut": "Alejar",
    "mockUI.viewer.rotate": "Rotar",
    "mockUI.viewer.pan": "Desplazar",
    "mockUI.viewer.reset": "Restablecer vista",
    "mockUI.viewer.fullscreen": "Pantalla completa",
    "mockUI.viewer.measure": "Medir",
    "mockUI.viewer.section": "Sección",
    "mockUI.viewer.layers": "Capas",
    "mockUI.viewer.properties": "Propiedades",
    "mockUI.chat.title": "Asistente IA",
    "mockUI.chat.placeholder": "Escriba un mensaje...",
    "mockUI.chat.send": "Enviar",
    "mockUI.chat.thinking": "Pensando...",
    "mockUI.chat.welcome": "¡Hola! ¿Cómo puedo ayudarle con su proyecto BIM?",
    "mockUI.timeline.title": "Línea de tiempo",
    "mockUI.timeline.today": "Hoy",
    "mockUI.timeline.week": "Semana",
    "mockUI.timeline.month": "Mes",
    "mockUI.timeline.quarter": "Trimestre",
    "mockUI.timeline.year": "Año"
  },

  // ============= PORTUGUESE (PT) =============
  pt: {
    // Nav
    "nav.blog": "Blog",
    "nav.download": "Download",

    // Features
    "features.web_ai.subtitle": "Plataforma em Nuvem",

    // Footer
    "footer.legal.cookies": "Cookies",
    "footer.legal.dpa": "DPA",
    "footer.resources.docs": "Documentação",

    // Terms
    "terms.nav.terms": "Termos de Serviço",
    "terms.terms.title": "Termos de Serviço",
    "terms.cookies.content.section2.subsection1.cookies.0.name": "invoratec_user",
    "terms.cookies.content.section2.subsection1.cookies.1.name": "locale",
    "terms.cookies.content.section2.subsection1.cookies.2.name": "region",
    "terms.cookies.content.section2.subsection1.cookies.3.name": "cookie_consent",
    "terms.cookies.content.section2.subsection2.cookies.0.name": "theme",
    "terms.cookies.content.section2.subsection2.cookies.1.name": "recent_projects",

    // Pricing
    "pricing.plans.starter.name": "Starter",
    "pricing.plans.enterprise.name": "Enterprise",

    // About
    "about.products.title": "Nossa Plataforma Twin",
    "about.products.subtitle": "Do desktop à nuvem - um ecossistema completo alimentado por IA para profissionais da construção",
    "about.products.bim.features.voice": "Controle por voz",
    "about.products.bim.features.automation": "Ferramentas de automação",
    "about.products.bim.features.sync": "Sincronização em nuvem",
    "about.products.web.features.timeline": "Linha do tempo",
    "about.products.web.features.coordination": "Coordenação",
    "about.products.web.features.reports": "Relatórios",
    "about.products.web.features.sheets": "Pranchas",
    "about.story.title": "Nossa história",
    "about.story.description": "A InvoratecAI foi fundada para permitir que profissionais de arquitetura e engenharia aproveitem facilmente o poder da IA.",
    "about.team.title": "Nossa equipe",
    "about.team.subtitle": "Uma equipe que combina experiência em arquitetura, engenharia de software e inteligência artificial",

    // Blog
    "blog.categories.tutorial": "Tutorial",
    "blog.tags.ai": "IA",
    "blog.tags.bim": "BIM",
    "blog.tags.mep": "MEP",

    // Cases - keep percentages
    "cases.items.shanghai-xintiandi.stats.timeSaved": "40%",
    "cases.items.shanghai-xintiandi.stats.costReduction": "25%",
    "cases.items.shanghai-xintiandi.stats.errorReduction": "35%",
    "cases.items.ordos-smart-scenic.stats.timeSaved": "35%",
    "cases.items.ordos-smart-scenic.stats.costReduction": "20%",
    "cases.items.ordos-smart-scenic.stats.errorReduction": "30%",
    "cases.items.daxing-airport.stats.timeSaved": "45%",
    "cases.items.daxing-airport.stats.costReduction": "30%",
    "cases.items.daxing-airport.stats.errorReduction": "50%",
    "cases.tags.bim": "BIM",

    // Docs
    "docs.content.api.endpoint": "Endpoint",
    "docs.content.webTimeline.overview": "Visão geral",
    "docs.content.webTimeline.overviewDesc": "A visualização de Linha do tempo & Gantt fornece agendamento visual do projeto com dependências de tarefas, marcos e rastreamento de progresso. Planeje a linha do tempo do seu projeto e monitore o progresso em tempo real.",
    "docs.content.webTimeline.schedulingDesc": "Agende tarefas usando estes métodos:",
    "docs.content.webTimeline.milestones": "Marcos",
    "docs.content.webTimeline.progress": "Rastreamento de progresso",

    // Download
    "downloadPage.requirements.internet": "Internet",
    "downloadPage.requirements.disk": "Espaço em disco",

    // Activity
    "activityDetail.sections.agenda": "Agenda",
    "activityDetail.sections.formatOnline": "Online",

    // Services
    "services.hero.title": "Serviços e Soluções",
    "services.hero.subtitle": "Acelere seu sucesso com suporte especializado",
    "services.items.ai.title": "Soluções de IA personalizadas",
    "services.items.ai.description": "Soluções de IA construídas para seus fluxos de trabalho",
    "services.items.bim.title": "Serviços BIM",
    "services.items.bim.description": "Serviços abrangentes de consultoria e implementação BIM",
    "services.items.support.title": "Suporte técnico",
    "services.items.support.description": "Suporte especializado para garantir seu sucesso",
    "services.cta.title": "Pronto para começar?",
    "services.cta.subtitle": "Discuta como nossos serviços podem ajudar seu projeto",
    "services.cta.demo": "Agendar consulta",

    // MockUI
    "mockUI.tasks.title": "Tarefas",
    "mockUI.tasks.allTasks": "Todas as tarefas",
    "mockUI.tasks.status": "Status",
    "mockUI.tasks.review": "Revisão",
    "mockUI.tasks.filter": "Filtro",
    "mockUI.tasks.priority": "Prioridade",
    "mockUI.tasks.dueDate": "Data de vencimento",
    "mockUI.tasks.assignee": "Atribuído a",
    "mockUI.tasks.search": "Pesquisar tarefas...",
    "mockUI.tasks.newTask": "Nova tarefa",
    "mockUI.tasks.complete": "Concluído",
    "mockUI.tasks.inProgress": "Em andamento",
    "mockUI.tasks.todo": "A fazer",
    "mockUI.tasks.high": "Alta",
    "mockUI.tasks.medium": "Média",
    "mockUI.tasks.low": "Baixa",
    "mockUI.viewer.title": "Visualizador 3D",
    "mockUI.viewer.loading": "Carregando modelo...",
    "mockUI.viewer.zoomIn": "Ampliar",
    "mockUI.viewer.zoomOut": "Reduzir",
    "mockUI.viewer.rotate": "Rotacionar",
    "mockUI.viewer.pan": "Mover",
    "mockUI.viewer.reset": "Redefinir vista",
    "mockUI.viewer.fullscreen": "Tela cheia",
    "mockUI.viewer.measure": "Medir",
    "mockUI.viewer.section": "Seção",
    "mockUI.viewer.layers": "Camadas",
    "mockUI.viewer.properties": "Propriedades",
    "mockUI.chat.title": "Assistente IA",
    "mockUI.chat.placeholder": "Digite uma mensagem...",
    "mockUI.chat.send": "Enviar",
    "mockUI.chat.thinking": "Pensando...",
    "mockUI.chat.welcome": "Olá! Como posso ajudá-lo com seu projeto BIM?",
    "mockUI.timeline.title": "Linha do tempo",
    "mockUI.timeline.today": "Hoje",
    "mockUI.timeline.week": "Semana",
    "mockUI.timeline.month": "Mês",
    "mockUI.timeline.quarter": "Trimestre",
    "mockUI.timeline.year": "Ano"
  },

  // ============= RUSSIAN (RU) =============
  ru: {
    // Features
    "features.web_ai.subtitle": "Облачная платформа",

    // Footer
    "footer.legal.cookies": "Cookies",
    "footer.legal.dpa": "DPA",

    // Terms
    "terms.nav.terms": "Условия использования",
    "terms.terms.title": "Условия использования",
    "terms.cookies.content.section2.subsection1.cookies.0.name": "invoratec_user",
    "terms.cookies.content.section2.subsection1.cookies.1.name": "locale",
    "terms.cookies.content.section2.subsection1.cookies.2.name": "region",
    "terms.cookies.content.section2.subsection1.cookies.3.name": "cookie_consent",
    "terms.cookies.content.section2.subsection2.cookies.0.name": "theme",
    "terms.cookies.content.section2.subsection2.cookies.1.name": "recent_projects",

    // Pricing
    "pricing.plans.starter.name": "Starter",
    "pricing.plans.professional.name": "Professional",
    "pricing.plans.enterprise.name": "Enterprise",
    "pricing.plans.starter.price": "$99",
    "pricing.plans.professional.price": "$449",

    // About
    "about.products.title": "Наша Twin Платформа",
    "about.products.subtitle": "От рабочего стола до облака — полноценная экосистема на базе ИИ для профессионалов строительства",
    "about.products.bim.features.voice": "Голосовое управление",
    "about.products.bim.features.automation": "Инструменты автоматизации",
    "about.products.bim.features.sync": "Облачная синхронизация",
    "about.products.web.features.timeline": "Временная шкала",
    "about.products.web.features.coordination": "Координация",
    "about.products.web.features.reports": "Отчёты",
    "about.products.web.features.sheets": "Чертежи",
    "about.story.title": "Наша история",
    "about.story.description": "InvoratecAI была основана, чтобы позволить профессионалам в области архитектуры и инженерии легко использовать возможности ИИ.",
    "about.team.title": "Наша команда",
    "about.team.subtitle": "Команда, объединяющая опыт в архитектуре, программной инженерии и искусственном интеллекте",

    // Blog
    "blog.tags.ai": "ИИ",
    "blog.tags.bim": "BIM",

    // Cases - keep percentages
    "cases.items.shanghai-xintiandi.stats.timeSaved": "40%",
    "cases.items.shanghai-xintiandi.stats.costReduction": "25%",
    "cases.items.shanghai-xintiandi.stats.errorReduction": "35%",
    "cases.items.ordos-smart-scenic.stats.timeSaved": "35%",
    "cases.items.ordos-smart-scenic.stats.costReduction": "20%",
    "cases.items.ordos-smart-scenic.stats.errorReduction": "30%",
    "cases.items.daxing-airport.stats.timeSaved": "45%",
    "cases.items.daxing-airport.stats.costReduction": "30%",
    "cases.items.daxing-airport.stats.errorReduction": "50%",
    "cases.tags.bim": "BIM",

    // Docs
    "docs.content.webTimeline.overview": "Обзор",
    "docs.content.webTimeline.overviewDesc": "Представление «Временная шкала и диаграмма Ганта» обеспечивает визуальное планирование проекта с зависимостями задач, вехами и отслеживанием прогресса. Планируйте временную шкалу проекта и отслеживайте прогресс в реальном времени.",
    "docs.content.webTimeline.schedulingDesc": "Планируйте задачи с помощью следующих методов:",
    "docs.content.webTimeline.milestones": "Вехи",
    "docs.content.webTimeline.progress": "Отслеживание прогресса",

    // Services
    "services.hero.title": "Услуги и решения",
    "services.hero.subtitle": "Ускорьте свой успех с экспертной поддержкой",
    "services.items.ai.title": "Индивидуальные решения ИИ",
    "services.items.ai.description": "Решения ИИ, созданные для ваших рабочих процессов",
    "services.items.bim.title": "BIM-услуги",
    "services.items.bim.description": "Комплексные услуги по консалтингу и внедрению BIM",
    "services.items.support.title": "Техническая поддержка",
    "services.items.support.description": "Экспертная поддержка для обеспечения вашего успеха",
    "services.cta.title": "Готовы начать?",
    "services.cta.subtitle": "Обсудите, как наши услуги могут помочь вашему проекту",
    "services.cta.demo": "Забронировать консультацию",

    // MockUI
    "mockUI.tasks.title": "Задачи",
    "mockUI.tasks.allTasks": "Все задачи",
    "mockUI.tasks.review": "Проверка",
    "mockUI.tasks.filter": "Фильтр",
    "mockUI.tasks.status": "Статус",
    "mockUI.tasks.priority": "Приоритет",
    "mockUI.tasks.dueDate": "Срок",
    "mockUI.tasks.assignee": "Исполнитель",
    "mockUI.tasks.search": "Поиск задач...",
    "mockUI.tasks.newTask": "Новая задача",
    "mockUI.tasks.complete": "Завершено",
    "mockUI.tasks.inProgress": "В работе",
    "mockUI.tasks.todo": "К выполнению",
    "mockUI.tasks.high": "Высокий",
    "mockUI.tasks.medium": "Средний",
    "mockUI.tasks.low": "Низкий",
    "mockUI.viewer.title": "3D Просмотрщик",
    "mockUI.viewer.loading": "Загрузка модели...",
    "mockUI.viewer.zoomIn": "Приблизить",
    "mockUI.viewer.zoomOut": "Отдалить",
    "mockUI.viewer.rotate": "Повернуть",
    "mockUI.viewer.pan": "Переместить",
    "mockUI.viewer.reset": "Сбросить вид",
    "mockUI.viewer.fullscreen": "Полный экран",
    "mockUI.viewer.measure": "Измерить",
    "mockUI.viewer.section": "Сечение",
    "mockUI.viewer.layers": "Слои",
    "mockUI.viewer.properties": "Свойства",
    "mockUI.chat.title": "ИИ-ассистент",
    "mockUI.chat.placeholder": "Введите сообщение...",
    "mockUI.chat.send": "Отправить",
    "mockUI.chat.thinking": "Думаю...",
    "mockUI.chat.welcome": "Здравствуйте! Как я могу помочь вам с вашим BIM-проектом?",
    "mockUI.timeline.title": "Временная шкала",
    "mockUI.timeline.today": "Сегодня",
    "mockUI.timeline.week": "Неделя",
    "mockUI.timeline.month": "Месяц",
    "mockUI.timeline.quarter": "Квартал",
    "mockUI.timeline.year": "Год"
  },

  // ============= ARABIC (AR) =============
  ar: {
    // Features
    "features.web_ai.subtitle": "منصة سحابية",

    // Footer
    "footer.legal.dpa": "اتفاقية معالجة البيانات",

    // Terms
    "terms.nav.terms": "شروط الخدمة",
    "terms.terms.title": "شروط الخدمة",
    "terms.cookies.content.section2.subsection1.cookies.0.name": "invoratec_user",
    "terms.cookies.content.section2.subsection1.cookies.1.name": "locale",
    "terms.cookies.content.section2.subsection1.cookies.2.name": "region",
    "terms.cookies.content.section2.subsection1.cookies.3.name": "cookie_consent",
    "terms.cookies.content.section2.subsection2.cookies.0.name": "theme",
    "terms.cookies.content.section2.subsection2.cookies.1.name": "recent_projects",

    // Pricing
    "pricing.plans.starter.price": "$99",
    "pricing.plans.professional.price": "$449",

    // Blog
    "blog.tags.ai": "الذكاء الاصطناعي",
    "blog.tags.bim": "BIM",

    // Cases - keep percentages
    "cases.items.shanghai-xintiandi.stats.timeSaved": "40%",
    "cases.items.shanghai-xintiandi.stats.costReduction": "25%",
    "cases.items.shanghai-xintiandi.stats.errorReduction": "35%",
    "cases.items.ordos-smart-scenic.stats.timeSaved": "35%",
    "cases.items.ordos-smart-scenic.stats.costReduction": "20%",
    "cases.items.ordos-smart-scenic.stats.errorReduction": "30%",
    "cases.items.daxing-airport.stats.timeSaved": "45%",
    "cases.items.daxing-airport.stats.costReduction": "30%",
    "cases.items.daxing-airport.stats.errorReduction": "50%",
    "cases.tags.bim": "BIM",

    // Docs
    "docs.content.webTimeline.overview": "نظرة عامة",
    "docs.content.webTimeline.overviewDesc": "توفر عرض الجدول الزمني ومخطط جانت جدولة مرئية للمشروع مع تبعيات المهام والمعالم وتتبع التقدم. خطط جدولك الزمني للمشروع وراقب التقدم في الوقت الفعلي.",
    "docs.content.webTimeline.schedulingDesc": "جدولة المهام باستخدام هذه الطرق:",
    "docs.content.webTimeline.milestones": "المعالم",
    "docs.content.webTimeline.progress": "تتبع التقدم",

    // Services
    "services.hero.title": "الخدمات والحلول",
    "services.hero.subtitle": "سرّع نجاحك مع الدعم المتخصص",
    "services.items.ai.title": "حلول الذكاء الاصطناعي المخصصة",
    "services.items.ai.description": "حلول الذكاء الاصطناعي المصممة لسير عملك",
    "services.items.bim.title": "خدمات BIM",
    "services.items.bim.description": "خدمات استشارية وتنفيذ BIM شاملة",
    "services.items.support.title": "الدعم الفني",
    "services.items.support.description": "دعم متخصص لضمان نجاحك",
    "services.cta.title": "هل أنت مستعد للبدء؟",
    "services.cta.subtitle": "ناقش كيف يمكن لخدماتنا مساعدة مشروعك",
    "services.cta.demo": "احجز استشارة",

    // MockUI
    "mockUI.tasks.title": "المهام",
    "mockUI.tasks.allTasks": "جميع المهام",
    "mockUI.tasks.review": "مراجعة",
    "mockUI.tasks.filter": "تصفية",
    "mockUI.tasks.status": "الحالة",
    "mockUI.tasks.priority": "الأولوية",
    "mockUI.tasks.dueDate": "تاريخ الاستحقاق",
    "mockUI.tasks.assignee": "المسؤول",
    "mockUI.tasks.search": "البحث عن المهام...",
    "mockUI.tasks.newTask": "مهمة جديدة",
    "mockUI.tasks.complete": "مكتمل",
    "mockUI.tasks.inProgress": "قيد التنفيذ",
    "mockUI.tasks.todo": "للقيام به",
    "mockUI.tasks.high": "عالي",
    "mockUI.tasks.medium": "متوسط",
    "mockUI.tasks.low": "منخفض",
    "mockUI.viewer.title": "عارض ثلاثي الأبعاد",
    "mockUI.viewer.loading": "جاري تحميل النموذج...",
    "mockUI.viewer.zoomIn": "تكبير",
    "mockUI.viewer.zoomOut": "تصغير",
    "mockUI.viewer.rotate": "تدوير",
    "mockUI.viewer.pan": "تحريك",
    "mockUI.viewer.reset": "إعادة تعيين العرض",
    "mockUI.viewer.fullscreen": "ملء الشاشة",
    "mockUI.viewer.measure": "قياس",
    "mockUI.viewer.section": "مقطع",
    "mockUI.viewer.layers": "الطبقات",
    "mockUI.viewer.properties": "الخصائص",
    "mockUI.chat.title": "مساعد الذكاء الاصطناعي",
    "mockUI.chat.placeholder": "اكتب رسالة...",
    "mockUI.chat.send": "إرسال",
    "mockUI.chat.thinking": "جاري التفكير...",
    "mockUI.chat.welcome": "مرحباً! كيف يمكنني مساعدتك في مشروع BIM الخاص بك؟",
    "mockUI.timeline.title": "الجدول الزمني",
    "mockUI.timeline.today": "اليوم",
    "mockUI.timeline.week": "أسبوع",
    "mockUI.timeline.month": "شهر",
    "mockUI.timeline.quarter": "ربع سنة",
    "mockUI.timeline.year": "سنة"
  }
};

// Function to set nested property
function setNestedProperty(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

// Apply translations to each language file
const languageFiles = {
  zh: 'zh.json',
  ja: 'ja.json',
  ko: 'ko.json',
  de: 'de.json',
  fr: 'fr.json',
  es: 'es.json',
  pt: 'pt.json',
  ru: 'ru.json',
  ar: 'ar.json'
};

console.log('='.repeat(80));
console.log('APPLYING TRANSLATIONS');
console.log('='.repeat(80));

for (const [langCode, fileName] of Object.entries(languageFiles)) {
  const filePath = path.join(__dirname, fileName);
  const langData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const langTranslations = translations[langCode] || {};
  let appliedCount = 0;

  for (const [key, value] of Object.entries(langTranslations)) {
    setNestedProperty(langData, key, value);
    appliedCount++;
  }

  fs.writeFileSync(filePath, JSON.stringify(langData, null, 2), 'utf8');
  console.log(`${langCode.toUpperCase()}: Applied ${appliedCount} translations`);
}

console.log('\n' + '='.repeat(80));
console.log('TRANSLATIONS APPLIED SUCCESSFULLY');
console.log('='.repeat(80));
