/**
 * Script to add featuresPage translations for all languages
 * This script updates the featuresPage section with proper translations
 */

const fs = require('fs');
const path = require('path');

const i18nDir = __dirname;

// Complete featuresPage translations for all languages
const featuresPageTranslations = {
  ja: {
    "hero": {
      "badge": "45種類以上のプロパティタイプ • 完全なBIM統合",
      "title": "機能の完全な概要",
      "subtitle": "InvoratecAIのすべての機能をご覧ください - 柔軟なデータベース駆動のタスク管理からAI搭載のRevit自動化まで"
    },
    "webPlatform": {
      "title": "Webプラットフォーム",
      "subtitle": "ブラウザベースのコラボレーション",
      "freeTrial": "7日間無料トライアル",
      "signupNow": "今すぐ登録"
    },
    "revitAddin": {
      "title": "Revitアドイン",
      "subtitle": "デスクトッププラグイン • Revit 2019-2026対応",
      "freeTrial": "7日間無料トライアル",
      "downloadNow": "今すぐダウンロード"
    },
    "availableProperties": "利用可能なプロパティ",
    "webFeatures": {
      "tasks": {
        "title": "タスク管理",
        "subtitle": "柔軟なデータベース駆動のタスクシステム",
        "highlights": {
          "customPages": { "label": "カスタムページ", "desc": "カスタムプロパティを持つ無制限のタスクページを作成" },
          "smartFiltering": { "label": "スマートフィルタリング", "desc": "任意のプロパティ、担当者、ステータス、日付でフィルタ" },
          "excelImport": { "label": "Excelインポート/エクスポート", "desc": "Excelから一括インポート、いつでもレポートをエクスポート" },
          "subTasks": { "label": "サブタスク", "desc": "親子関係を持つ階層的なタスク構造" }
        },
        "properties": {
          "text": { "name": "テキスト", "type": "基本", "desc": "単一/複数行テキストフィールド" },
          "number": { "name": "数値", "type": "基本", "desc": "フォーマット付きの数値" },
          "date": { "name": "日付/日時", "type": "基本", "desc": "時間サポート付きの日付ピッカー" },
          "select": { "name": "セレクト/マルチセレクト", "type": "選択", "desc": "カラータグ付きのドロップダウンオプション" },
          "status": { "name": "ステータス", "type": "選択", "desc": "ワークフローステータス追跡" },
          "priority": { "name": "優先度", "type": "選択", "desc": "タスクの優先度レベル" },
          "person": { "name": "担当者", "type": "人", "desc": "チームメンバーを割り当て" },
          "checkbox": { "name": "チェックボックス", "type": "基本", "desc": "ブールトグル" },
          "url": { "name": "URL/メール/電話", "type": "リンク", "desc": "クリック可能な連絡先リンク" },
          "files": { "name": "ファイル", "type": "メディア", "desc": "ファイル添付" },
          "relation": { "name": "リレーション", "type": "高度", "desc": "タスクをリンク" },
          "rollup": { "name": "ロールアップ", "type": "高度", "desc": "リレーションからのデータ集計" },
          "formula": { "name": "数式", "type": "高度", "desc": "計算フィールド" },
          "createdTime": { "name": "作成日時", "type": "自動", "desc": "自動追跡タイムスタンプ" },
          "createdBy": { "name": "作成者", "type": "自動", "desc": "自動追跡ユーザー" }
        }
      },
      "viewer": {
        "title": "3Dモデルビューア",
        "subtitle": "APS搭載のインタラクティブモデル表示",
        "highlights": {
          "isolation": { "label": "要素の分離", "desc": "クリックして要素を分離・検査" },
          "properties": { "label": "プロパティインスペクター", "desc": "すべての要素パラメータとプロパティを表示" },
          "measurement": { "label": "測定ツール", "desc": "距離、面積、角度の測定" },
          "section": { "label": "断面", "desc": "動的な断面切断を作成" }
        },
        "properties": {
          "viewer": { "name": "デフォルトモデルビューア", "type": "BIM", "desc": "埋め込み3Dモデルビューアプロパティ" },
          "selection": { "name": "モデル選択", "type": "機能", "desc": "Invoratecフォルダからモデルを選択" },
          "linking": { "name": "要素リンク", "type": "機能", "desc": "タスクをモデル要素にリンク" },
          "viewStates": { "name": "ビューステート", "type": "機能", "desc": "カメラ位置の保存と復元" }
        }
      },
      "timeline": {
        "title": "タイムライン＆ガント",
        "subtitle": "ビジュアルプロジェクトスケジューリング",
        "highlights": {
          "gantt": { "label": "ガントチャート", "desc": "依存関係付きのビジュアルタイムライン" },
          "dragDrop": { "label": "ドラッグ＆ドロップ", "desc": "タスクを簡単にスケジュール変更" },
          "milestones": { "label": "マイルストーン", "desc": "主要なプロジェクトマイルストーンを追跡" },
          "criticalPath": { "label": "クリティカルパス", "desc": "スケジュールのボトルネックを特定" }
        },
        "properties": {
          "startDate": { "name": "開始日", "type": "日付", "desc": "ガントタスク開始" },
          "endDate": { "name": "終了日", "type": "日付", "desc": "ガントタスク終了" },
          "dependencies": { "name": "依存関係", "type": "リレーション", "desc": "タスク依存関係リンク" },
          "progress": { "name": "進捗", "type": "数値", "desc": "完了率" }
        }
      },
      "coordination": {
        "title": "コーディネーション",
        "subtitle": "マルチ分野の干渉管理",
        "highlights": {
          "clashDetection": { "label": "干渉検出", "desc": "ACCコーディネーション干渉を表示" },
          "issueTracking": { "label": "課題追跡", "desc": "コンフリクトを追跡・解決" },
          "comparison": { "label": "モデル比較", "desc": "モデルバージョンを比較" },
          "accSync": { "label": "ACC同期", "desc": "Autodesk Construction Cloudと同期" }
        },
        "properties": {
          "viewer": { "name": "コーディネーションビューア", "type": "BIM", "desc": "モデル干渉の可視化" },
          "sets": { "name": "コーディネーションセット", "type": "BIM", "desc": "ACC干渉セット" },
          "status": { "name": "干渉ステータス", "type": "ステータス", "desc": "解決追跡" },
          "discipline": { "name": "分野", "type": "セレクト", "desc": "MEP/構造/建築タグ" }
        }
      },
      "sheets": {
        "title": "施工図",
        "subtitle": "2D図面の表示とマークアップ",
        "highlights": {
          "viewer2d": { "label": "2Dビューア", "desc": "PDFとDWG図面を表示" },
          "markup": { "label": "マークアップツール", "desc": "注釈とコメントを追加" },
          "accSync": { "label": "ACC Build同期", "desc": "ACC Buildとマークアップを同期" },
          "versionCompare": { "label": "バージョン比較", "desc": "図面リビジョンを比較" }
        },
        "properties": {
          "viewer": { "name": "シートビューア", "type": "BIM", "desc": "埋め込み2D図面ビューア" },
          "markup": { "name": "シートマークアップ", "type": "BIM", "desc": "ACC Buildマークアップ同期" },
          "revision": { "name": "リビジョン", "type": "セレクト", "desc": "図面リビジョン追跡" },
          "approval": { "name": "承認ステータス", "type": "ステータス", "desc": "承認ワークフロー" }
        }
      },
      "reports": {
        "title": "レポート＆分析",
        "subtitle": "プロジェクトインサイトとメトリクス",
        "highlights": {
          "dashboard": { "label": "ダッシュボード", "desc": "リアルタイムのプロジェクトメトリクス" },
          "teamPerformance": { "label": "チームパフォーマンス", "desc": "チームの生産性を追跡" },
          "budget": { "label": "予算追跡", "desc": "コストと支出を監視" },
          "export": { "label": "レポートエクスポート", "desc": "PDF/Excelレポートを生成" }
        },
        "properties": {
          "timeTracking": { "name": "時間追跡", "type": "時間", "desc": "追跡時間と手動時間" },
          "budget": { "name": "予算", "type": "数値", "desc": "コスト追跡フィールド" },
          "utilization": { "name": "稼働率", "type": "数式", "desc": "計算された効率" },
          "rollup": { "name": "ロールアップ", "type": "高度", "desc": "集計メトリクス" }
        }
      }
    },
    "bimFeatures": {
      "tasks": {
        "title": "タスク管理",
        "subtitle": "Revit内での動的タスク管理",
        "highlights": {
          "inRevit": { "label": "Revit内タスク", "desc": "Revitを離れずにタスクを管理" },
          "elementTracking": { "label": "要素追跡", "desc": "タスクをRevit要素にリンク" },
          "timeTracking": { "label": "時間追跡", "desc": "内蔵タイマーと手動時間入力" },
          "cloudSync": { "label": "クラウド同期", "desc": "Webプラットフォームと同期" }
        },
        "properties": {
          "elements": { "name": "Revit要素", "type": "BIM", "desc": "UniqueIdでRevit要素を追跡" },
          "dateHours": { "name": "日付時間", "type": "BIM", "desc": "日付+時間+担当者エントリー" },
          "trackedTime": { "name": "追跡時間", "type": "時間", "desc": "タイマーベースの時間追跡" },
          "manualTime": { "name": "手動時間", "type": "時間", "desc": "手動時間入力" },
          "totalTime": { "name": "合計時間", "type": "計算", "desc": "追跡+手動の合計" }
        }
      },
      "assistant": {
        "title": "AIアシスタント",
        "subtitle": "自然言語自動化",
        "highlights": {
          "naturalLanguage": { "label": "自然言語", "desc": "平易な言葉でタスクを説明" },
          "voiceControl": { "label": "音声制御", "desc": "AIとの音声操作" },
          "codeExecution": { "label": "コード実行", "desc": "Python/C#スクリプトを実行" },
          "toolMatching": { "label": "ツールマッチング", "desc": "AIがツールとパラメータを提案" }
        },
        "properties": {
          "chat": { "name": "チャット", "type": "機能", "desc": "AIアシスタントと会話" },
          "script": { "name": "スクリプト", "type": "機能", "desc": "AIがスクリプトを生成・実行" },
          "recommendations": { "name": "レコメンデーション", "type": "機能", "desc": "AIがツールを提案" },
          "history": { "name": "履歴", "type": "機能", "desc": "会話履歴を保存" }
        }
      },
      "dashboard": {
        "title": "ダッシュボード",
        "subtitle": "包括的なプロジェクト概要",
        "highlights": {
          "stats": { "label": "プロジェクト統計", "desc": "リアルタイムのプロジェクトメトリクス" },
          "budget": { "label": "予算概要", "desc": "予算配分と支出を追跡" },
          "teamHours": { "label": "チーム時間", "desc": "メンバー別の時間内訳" },
          "milestones": { "label": "マイルストーン", "desc": "今後の期限を表示" }
        },
        "properties": {
          "totalBudget": { "name": "総予算", "type": "数値", "desc": "プロジェクトの総予算" },
          "spentBudget": { "name": "使用予算", "type": "計算", "desc": "これまでに使用した予算" },
          "teamMembers": { "name": "チームメンバー", "type": "リレーション", "desc": "プロジェクトチームメンバー" },
          "milestones": { "name": "マイルストーン", "type": "リレーション", "desc": "プロジェクトマイルストーン" }
        }
      },
      "tools": {
        "title": "ツールライブラリ",
        "subtitle": "拡張可能なプラグインシステム",
        "highlights": {
          "dllPlugins": { "label": "DLLプラグイン", "desc": "コンパイルされたDLLアドインを実行" },
          "pythonScripts": { "label": "Pythonスクリプト", "desc": "Pythonスクリプトを実行" },
          "csharpScripts": { "label": "C#スクリプト", "desc": "C#スクリプトを実行" },
          "multiPlugin": { "label": "マルチプラグイン", "desc": "1つのウィンドウから複数のプラグインを実行" }
        },
        "properties": {
          "name": { "name": "ツール名", "type": "テキスト", "desc": "ツールの表示名" },
          "description": { "name": "説明", "type": "テキスト", "desc": "ツールの説明" },
          "category": { "name": "カテゴリ", "type": "セレクト", "desc": "ツールのカテゴリ分類" },
          "keywords": { "name": "キーワード", "type": "テキスト", "desc": "AI検索用のキーワード" },
          "author": { "name": "作成者", "type": "テキスト", "desc": "ツールの作成者" },
          "version": { "name": "バージョン", "type": "テキスト", "desc": "ツールのバージョン" }
        }
      },
      "projects": {
        "title": "プロジェクト",
        "subtitle": "プロジェクト管理とチーム編成",
        "highlights": {
          "projectCards": { "label": "プロジェクトカード", "desc": "一目でプロジェクト状況を確認" },
          "teamManagement": { "label": "チーム管理", "desc": "チームメンバーを追加・管理" },
          "accIntegration": { "label": "ACC統合", "desc": "ACCプロジェクトにリンク" },
          "budgetTracking": { "label": "予算追跡", "desc": "プロジェクト予算を監視" }
        },
        "properties": {
          "name": { "name": "プロジェクト名", "type": "テキスト", "desc": "プロジェクトの表示名" },
          "client": { "name": "クライアント", "type": "テキスト", "desc": "クライアント名" },
          "projectNumber": { "name": "プロジェクト番号", "type": "テキスト", "desc": "内部プロジェクト番号" },
          "accProjectId": { "name": "ACCプロジェクトID", "type": "テキスト", "desc": "リンクされたACCプロジェクト" },
          "linkPath": { "name": "リンクパス", "type": "テキスト", "desc": "ローカルモデルパス" },
          "status": { "name": "ステータス", "type": "ステータス", "desc": "プロジェクトステータス" },
          "completion": { "name": "完了率", "type": "数値", "desc": "プロジェクト完了パーセンテージ" }
        }
      },
      "acc": {
        "title": "ACC統合",
        "subtitle": "Autodesk Construction Cloud接続",
        "highlights": {
          "hubBrowser": { "label": "ハブブラウザ", "desc": "ACCハブとプロジェクトを参照" },
          "modelLinking": { "label": "モデルリンク", "desc": "クラウドモデルにリンク" },
          "auth": { "label": "認証", "desc": "安全なOAuth認証" },
          "fileSync": { "label": "ファイル同期", "desc": "ファイルの同期とダウンロード" }
        },
        "properties": {
          "hubId": { "name": "ハブID", "type": "テキスト", "desc": "ACCハブ識別子" },
          "projectId": { "name": "プロジェクトID", "type": "テキスト", "desc": "ACCプロジェクト識別子" },
          "accountId": { "name": "アカウントID", "type": "テキスト", "desc": "ACCアカウント識別子" },
          "isAuth": { "name": "認証済み", "type": "ブール", "desc": "認証ステータス" }
        }
      }
    },
    "dataModels": {
      "title": "データモデル",
      "subtitle": "組み込みデータ構造",
      "teamMember": {
        "title": "チームメンバー",
        "subtitle": "チームメンバーのプロパティ",
        "properties": {
          "name": { "name": "名前", "type": "テキスト", "desc": "メンバー名" },
          "email": { "name": "メール", "type": "メール", "desc": "連絡先メール" },
          "role": { "name": "役割", "type": "セレクト", "desc": "チームでの役割" },
          "discipline": { "name": "分野", "type": "セレクト", "desc": "専門分野" },
          "hourlyRate": { "name": "時給", "type": "数値", "desc": "時給レート" },
          "hoursSpent": { "name": "使用時間", "type": "計算", "desc": "合計使用時間" },
          "budgetedHours": { "name": "予算時間", "type": "数値", "desc": "割り当て時間" },
          "totalCost": { "name": "総コスト", "type": "計算", "desc": "計算されたコスト" },
          "utilization": { "name": "稼働率", "type": "計算", "desc": "稼働率パーセンテージ" }
        }
      },
      "milestone": {
        "title": "マイルストーン",
        "subtitle": "プロジェクトマイルストーン追跡",
        "properties": {
          "name": { "name": "名前", "type": "テキスト", "desc": "マイルストーン名" },
          "description": { "name": "説明", "type": "テキスト", "desc": "マイルストーンの説明" },
          "dueDate": { "name": "期限", "type": "日付", "desc": "マイルストーン期限" },
          "status": { "name": "ステータス", "type": "ステータス", "desc": "完了ステータス" },
          "allocatedBudget": { "name": "割当予算", "type": "数値", "desc": "マイルストーン予算" },
          "spentBudget": { "name": "使用予算", "type": "計算", "desc": "これまでに使用した予算" },
          "dependencies": { "name": "依存関係", "type": "リレーション", "desc": "マイルストーン依存関係" },
          "deliverables": { "name": "成果物", "type": "テキスト", "desc": "必要な成果物" }
        }
      }
    },
    "propertySystem": {
      "badge": "45種類以上のプロパティタイプ",
      "title": "完全なプロパティシステム",
      "subtitle": "データを完璧に整理するための包括的なプロパティタイプセット",
      "categories": {
        "basic": "基本",
        "dateTime": "日付/時間",
        "selection": "選択",
        "links": "リンク",
        "people": "人",
        "relations": "リレーション",
        "autoGenerated": "自動生成",
        "bimAec": "BIM/AEC",
        "advanced": "高度"
      }
    },
    "comparison": {
      "title": "機能比較",
      "subtitle": "Webプラットフォームとデスクトップアドインの機能を比較",
      "feature": "機能",
      "webPlatform": "Web",
      "revitAddin": "Revit",
      "features": {
        "taskManagement": "タスク管理",
        "modelViewer": "3Dモデルビューア",
        "gantt": "ガントチャート",
        "kanban": "かんばん",
        "aiAssistant": "AIアシスタント",
        "revitTracking": "Revit要素追跡",
        "toolLibrary": "ツールライブラリ",
        "accIntegration": "ACC統合",
        "shopDrawing": "施工図",
        "coordination": "コーディネーション",
        "dashboard": "ダッシュボード",
        "teamBudget": "チーム＆予算追跡",
        "languages": "多言語対応"
      }
    },
    "cta": {
      "title": "InvoratecAIを始めましょう",
      "subtitle": "7日間の無料トライアルを今すぐ開始。クレジットカード不要。",
      "requestDemo": "デモを依頼",
      "downloadAddin": "アドインをダウンロード"
    }
  },
  zh: {
    "hero": {
      "badge": "45+属性类型 • 完整BIM集成",
      "title": "完整功能概览",
      "subtitle": "探索InvoratecAI的所有功能 - 从灵活的数据库驱动任务管理到AI驱动的Revit自动化"
    },
    "webPlatform": {
      "title": "Web平台",
      "subtitle": "基于浏览器的协作",
      "freeTrial": "7天免费试用",
      "signupNow": "立即注册"
    },
    "revitAddin": {
      "title": "Revit插件",
      "subtitle": "桌面插件 • 支持Revit 2019-2026",
      "freeTrial": "7天免费试用",
      "downloadNow": "立即下载"
    },
    "availableProperties": "可用属性",
    "webFeatures": {
      "tasks": {
        "title": "任务管理",
        "subtitle": "灵活的数据库驱动任务系统",
        "highlights": {
          "customPages": { "label": "自定义页面", "desc": "创建无限的任务页面与自定义属性" },
          "smartFiltering": { "label": "智能筛选", "desc": "按任何属性、负责人、状态或日期筛选" },
          "excelImport": { "label": "Excel导入/导出", "desc": "从Excel批量导入，随时导出报告" },
          "subTasks": { "label": "子任务", "desc": "具有父子关系的层级任务结构" }
        },
        "properties": {
          "text": { "name": "文本", "type": "基础", "desc": "单行/多行文本字段" },
          "number": { "name": "数字", "type": "基础", "desc": "带格式的数值" },
          "date": { "name": "日期/日期时间", "type": "基础", "desc": "支持时间的日期选择器" },
          "select": { "name": "单选/多选", "type": "选择", "desc": "带颜色标签的下拉选项" },
          "status": { "name": "状态", "type": "选择", "desc": "工作流状态跟踪" },
          "priority": { "name": "优先级", "type": "选择", "desc": "任务优先级" },
          "person": { "name": "人员", "type": "人员", "desc": "分配团队成员" },
          "checkbox": { "name": "复选框", "type": "基础", "desc": "布尔开关" },
          "url": { "name": "URL/邮箱/电话", "type": "链接", "desc": "可点击的联系链接" },
          "files": { "name": "文件", "type": "媒体", "desc": "文件附件" },
          "relation": { "name": "关联", "type": "高级", "desc": "链接任务" },
          "rollup": { "name": "汇总", "type": "高级", "desc": "从关联中聚合数据" },
          "formula": { "name": "公式", "type": "高级", "desc": "计算字段" },
          "createdTime": { "name": "创建时间", "type": "自动", "desc": "自动跟踪时间戳" },
          "createdBy": { "name": "创建者", "type": "自动", "desc": "自动跟踪用户" }
        }
      },
      "viewer": {
        "title": "3D模型查看器",
        "subtitle": "APS驱动的交互式模型查看",
        "highlights": {
          "isolation": { "label": "元素隔离", "desc": "点击隔离和检查元素" },
          "properties": { "label": "属性检查器", "desc": "查看所有元素参数和属性" },
          "measurement": { "label": "测量工具", "desc": "距离、面积和角度测量" },
          "section": { "label": "剖面", "desc": "创建动态剖面切割" }
        },
        "properties": {
          "viewer": { "name": "默认模型查看器", "type": "BIM", "desc": "嵌入式3D模型查看器属性" },
          "selection": { "name": "模型选择", "type": "功能", "desc": "从Invoratec文件夹选择模型" },
          "linking": { "name": "元素链接", "type": "功能", "desc": "将任务链接到模型元素" },
          "viewStates": { "name": "视图状态", "type": "功能", "desc": "保存和恢复相机位置" }
        }
      },
      "timeline": {
        "title": "时间线和甘特图",
        "subtitle": "可视化项目调度",
        "highlights": {
          "gantt": { "label": "甘特图", "desc": "带依赖关系的可视化时间线" },
          "dragDrop": { "label": "拖放", "desc": "轻松重新安排任务" },
          "milestones": { "label": "里程碑", "desc": "跟踪关键项目里程碑" },
          "criticalPath": { "label": "关键路径", "desc": "识别进度瓶颈" }
        },
        "properties": {
          "startDate": { "name": "开始日期", "type": "日期", "desc": "甘特任务开始" },
          "endDate": { "name": "结束日期", "type": "日期", "desc": "甘特任务结束" },
          "dependencies": { "name": "依赖关系", "type": "关联", "desc": "任务依赖链接" },
          "progress": { "name": "进度", "type": "数字", "desc": "完成百分比" }
        }
      },
      "coordination": {
        "title": "协调",
        "subtitle": "多专业碰撞管理",
        "highlights": {
          "clashDetection": { "label": "碰撞检测", "desc": "查看ACC协调碰撞" },
          "issueTracking": { "label": "问题跟踪", "desc": "跟踪和解决冲突" },
          "comparison": { "label": "模型对比", "desc": "对比模型版本" },
          "accSync": { "label": "ACC同步", "desc": "与Autodesk Construction Cloud同步" }
        },
        "properties": {
          "viewer": { "name": "协调查看器", "type": "BIM", "desc": "模型碰撞可视化" },
          "sets": { "name": "协调集", "type": "BIM", "desc": "ACC碰撞集" },
          "status": { "name": "碰撞状态", "type": "状态", "desc": "解决跟踪" },
          "discipline": { "name": "专业", "type": "选择", "desc": "MEP/结构/建筑标签" }
        }
      },
      "sheets": {
        "title": "施工图",
        "subtitle": "2D图纸查看和标注",
        "highlights": {
          "viewer2d": { "label": "2D查看器", "desc": "查看PDF和DWG图纸" },
          "markup": { "label": "标注工具", "desc": "添加注释和评论" },
          "accSync": { "label": "ACC Build同步", "desc": "与ACC Build同步标注" },
          "versionCompare": { "label": "版本对比", "desc": "对比图纸修订" }
        },
        "properties": {
          "viewer": { "name": "图纸查看器", "type": "BIM", "desc": "嵌入式2D图纸查看器" },
          "markup": { "name": "图纸标注", "type": "BIM", "desc": "ACC Build标注同步" },
          "revision": { "name": "修订", "type": "选择", "desc": "图纸修订跟踪" },
          "approval": { "name": "审批状态", "type": "状态", "desc": "审批工作流" }
        }
      },
      "reports": {
        "title": "报告与分析",
        "subtitle": "项目洞察和指标",
        "highlights": {
          "dashboard": { "label": "仪表板", "desc": "实时项目指标" },
          "teamPerformance": { "label": "团队绩效", "desc": "跟踪团队生产力" },
          "budget": { "label": "预算跟踪", "desc": "监控成本和支出" },
          "export": { "label": "导出报告", "desc": "生成PDF/Excel报告" }
        },
        "properties": {
          "timeTracking": { "name": "时间跟踪", "type": "时间", "desc": "跟踪和手动时间" },
          "budget": { "name": "预算", "type": "数字", "desc": "成本跟踪字段" },
          "utilization": { "name": "利用率", "type": "公式", "desc": "计算效率" },
          "rollup": { "name": "汇总", "type": "高级", "desc": "聚合指标" }
        }
      }
    },
    "bimFeatures": {
      "tasks": {
        "title": "任务管理",
        "subtitle": "Revit内的动态任务管理",
        "highlights": {
          "inRevit": { "label": "Revit内任务", "desc": "无需离开Revit即可管理任务" },
          "elementTracking": { "label": "元素跟踪", "desc": "将任务链接到Revit元素" },
          "timeTracking": { "label": "时间跟踪", "desc": "内置计时器和手动时间输入" },
          "cloudSync": { "label": "云同步", "desc": "与Web平台同步" }
        },
        "properties": {
          "elements": { "name": "Revit元素", "type": "BIM", "desc": "按UniqueId跟踪Revit元素" },
          "dateHours": { "name": "日期时间", "type": "BIM", "desc": "日期+时间+人员条目" },
          "trackedTime": { "name": "跟踪时间", "type": "时间", "desc": "基于计时器的时间跟踪" },
          "manualTime": { "name": "手动时间", "type": "时间", "desc": "手动时间输入" },
          "totalTime": { "name": "总时间", "type": "计算", "desc": "跟踪+手动总和" }
        }
      },
      "assistant": {
        "title": "AI助手",
        "subtitle": "自然语言自动化",
        "highlights": {
          "naturalLanguage": { "label": "自然语言", "desc": "用简单的语言描述任务" },
          "voiceControl": { "label": "语音控制", "desc": "与AI语音交互" },
          "codeExecution": { "label": "代码执行", "desc": "执行Python/C#脚本" },
          "toolMatching": { "label": "工具匹配", "desc": "AI建议工具和参数" }
        },
        "properties": {
          "chat": { "name": "聊天", "type": "功能", "desc": "与AI助手对话" },
          "script": { "name": "脚本", "type": "功能", "desc": "AI生成并执行脚本" },
          "recommendations": { "name": "推荐", "type": "功能", "desc": "AI推荐工具" },
          "history": { "name": "历史", "type": "功能", "desc": "保存对话历史" }
        }
      },
      "dashboard": {
        "title": "仪表板",
        "subtitle": "全面的项目概览",
        "highlights": {
          "stats": { "label": "项目统计", "desc": "实时项目指标" },
          "budget": { "label": "预算概览", "desc": "跟踪预算分配和支出" },
          "teamHours": { "label": "团队时间", "desc": "按成员的时间明细" },
          "milestones": { "label": "里程碑", "desc": "查看即将到来的截止日期" }
        },
        "properties": {
          "totalBudget": { "name": "总预算", "type": "数字", "desc": "项目总预算" },
          "spentBudget": { "name": "已用预算", "type": "计算", "desc": "已花费的预算" },
          "teamMembers": { "name": "团队成员", "type": "关联", "desc": "项目团队成员" },
          "milestones": { "name": "里程碑", "type": "关联", "desc": "项目里程碑" }
        }
      },
      "tools": {
        "title": "工具库",
        "subtitle": "可扩展的插件系统",
        "highlights": {
          "dllPlugins": { "label": "DLL插件", "desc": "运行编译的DLL插件" },
          "pythonScripts": { "label": "Python脚本", "desc": "执行Python脚本" },
          "csharpScripts": { "label": "C#脚本", "desc": "执行C#脚本" },
          "multiPlugin": { "label": "多插件", "desc": "从一个窗口运行多个插件" }
        },
        "properties": {
          "name": { "name": "工具名称", "type": "文本", "desc": "工具显示名称" },
          "description": { "name": "描述", "type": "文本", "desc": "工具描述" },
          "category": { "name": "类别", "type": "选择", "desc": "工具分类" },
          "keywords": { "name": "关键词", "type": "文本", "desc": "AI搜索关键词" },
          "author": { "name": "作者", "type": "文本", "desc": "工具作者" },
          "version": { "name": "版本", "type": "文本", "desc": "工具版本" }
        }
      },
      "projects": {
        "title": "项目",
        "subtitle": "项目管理和团队组织",
        "highlights": {
          "projectCards": { "label": "项目卡片", "desc": "一目了然的项目状态" },
          "teamManagement": { "label": "团队管理", "desc": "添加和管理团队成员" },
          "accIntegration": { "label": "ACC集成", "desc": "链接到ACC项目" },
          "budgetTracking": { "label": "预算跟踪", "desc": "监控项目预算" }
        },
        "properties": {
          "name": { "name": "项目名称", "type": "文本", "desc": "项目显示名称" },
          "client": { "name": "客户", "type": "文本", "desc": "客户名称" },
          "projectNumber": { "name": "项目编号", "type": "文本", "desc": "内部项目编号" },
          "accProjectId": { "name": "ACC项目ID", "type": "文本", "desc": "链接的ACC项目" },
          "linkPath": { "name": "链接路径", "type": "文本", "desc": "本地模型路径" },
          "status": { "name": "状态", "type": "状态", "desc": "项目状态" },
          "completion": { "name": "完成度", "type": "数字", "desc": "项目完成百分比" }
        }
      },
      "acc": {
        "title": "ACC集成",
        "subtitle": "Autodesk Construction Cloud连接",
        "highlights": {
          "hubBrowser": { "label": "Hub浏览器", "desc": "浏览ACC Hub和项目" },
          "modelLinking": { "label": "模型链接", "desc": "链接到云端模型" },
          "auth": { "label": "认证", "desc": "安全的OAuth认证" },
          "fileSync": { "label": "文件同步", "desc": "同步和下载文件" }
        },
        "properties": {
          "hubId": { "name": "Hub ID", "type": "文本", "desc": "ACC Hub标识符" },
          "projectId": { "name": "项目ID", "type": "文本", "desc": "ACC项目标识符" },
          "accountId": { "name": "账户ID", "type": "文本", "desc": "ACC账户标识符" },
          "isAuth": { "name": "已认证", "type": "布尔", "desc": "认证状态" }
        }
      }
    },
    "dataModels": {
      "title": "数据模型",
      "subtitle": "内置数据结构",
      "teamMember": {
        "title": "团队成员",
        "subtitle": "团队成员属性",
        "properties": {
          "name": { "name": "姓名", "type": "文本", "desc": "成员姓名" },
          "email": { "name": "邮箱", "type": "邮箱", "desc": "联系邮箱" },
          "role": { "name": "角色", "type": "选择", "desc": "团队角色" },
          "discipline": { "name": "专业", "type": "选择", "desc": "专业领域" },
          "hourlyRate": { "name": "时薪", "type": "数字", "desc": "时薪费率" },
          "hoursSpent": { "name": "已用时间", "type": "计算", "desc": "总使用时间" },
          "budgetedHours": { "name": "预算时间", "type": "数字", "desc": "分配时间" },
          "totalCost": { "name": "总成本", "type": "计算", "desc": "计算成本" },
          "utilization": { "name": "利用率", "type": "计算", "desc": "利用率百分比" }
        }
      },
      "milestone": {
        "title": "里程碑",
        "subtitle": "项目里程碑跟踪",
        "properties": {
          "name": { "name": "名称", "type": "文本", "desc": "里程碑名称" },
          "description": { "name": "描述", "type": "文本", "desc": "里程碑描述" },
          "dueDate": { "name": "截止日期", "type": "日期", "desc": "里程碑截止日期" },
          "status": { "name": "状态", "type": "状态", "desc": "完成状态" },
          "allocatedBudget": { "name": "分配预算", "type": "数字", "desc": "里程碑预算" },
          "spentBudget": { "name": "已用预算", "type": "计算", "desc": "已花费预算" },
          "dependencies": { "name": "依赖关系", "type": "关联", "desc": "里程碑依赖" },
          "deliverables": { "name": "交付物", "type": "文本", "desc": "所需交付物" }
        }
      }
    },
    "propertySystem": {
      "badge": "45+属性类型",
      "title": "完整属性系统",
      "subtitle": "全面的属性类型集合，完美组织您的数据",
      "categories": {
        "basic": "基础",
        "dateTime": "日期/时间",
        "selection": "选择",
        "links": "链接",
        "people": "人员",
        "relations": "关联",
        "autoGenerated": "自动生成",
        "bimAec": "BIM/AEC",
        "advanced": "高级"
      }
    },
    "comparison": {
      "title": "功能对比",
      "subtitle": "对比Web平台和桌面插件功能",
      "feature": "功能",
      "webPlatform": "Web",
      "revitAddin": "Revit",
      "features": {
        "taskManagement": "任务管理",
        "modelViewer": "3D模型查看器",
        "gantt": "甘特图",
        "kanban": "看板",
        "aiAssistant": "AI助手",
        "revitTracking": "Revit元素跟踪",
        "toolLibrary": "工具库",
        "accIntegration": "ACC集成",
        "shopDrawing": "施工图",
        "coordination": "协调",
        "dashboard": "仪表板",
        "teamBudget": "团队和预算跟踪",
        "languages": "多语言支持"
      }
    },
    "cta": {
      "title": "开始使用InvoratecAI",
      "subtitle": "立即开始7天免费试用。无需信用卡。",
      "requestDemo": "申请演示",
      "downloadAddin": "下载插件"
    }
  }
};

// Deep merge function
function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Process each language
const languages = ['ja', 'zh'];

languages.forEach(lang => {
  const filePath = path.join(i18nDir, `${lang}.json`);

  if (fs.existsSync(filePath)) {
    try {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      // Update featuresPage
      if (featuresPageTranslations[lang]) {
        content.featuresPage = featuresPageTranslations[lang];
      }

      // Write back
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
      console.log(`✓ Updated ${lang}.json with featuresPage translations`);
    } catch (err) {
      console.error(`✗ Error processing ${lang}.json:`, err.message);
    }
  } else {
    console.log(`✗ File not found: ${lang}.json`);
  }
});

console.log('\nFeaturesPage translations completed!');
