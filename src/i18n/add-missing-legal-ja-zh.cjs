const fs = require('fs');
const path = require('path');

// Helper function to deep merge objects
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

// Japanese translations for missing sections
const jaTranslations = {
  terms: {
    cookies: {
      title: "クッキーポリシー",
      content: {
        intro: "このクッキーポリシーは、Invoratec Inc.（以下「InvoratecAI」、「当社」、「私たち」）が当社のウェブサイトおよびアプリケーションでクッキーおよび類似技術をどのように使用するかを説明しています。当社のサービスを使用することにより、このポリシーに記載されているクッキーの使用に同意したものとみなされます。",
        section1: {
          title: "1. クッキーとは？",
          content: "クッキーとは、ウェブサイトにアクセスした際にお使いのデバイス（パソコン、タブレット、またはモバイル）に保存される小さなテキストファイルです。ウェブサイトが設定を記憶し、ブラウジング体験を向上させるのに役立ちます。",
          intro: "類似技術には以下が含まれます：",
          items: [
            "ローカルストレージ：ブラウザにより長期間データを保存します",
            "セッションストレージ：ブラウジングセッション中に一時的にデータを保存します",
            "ピクセル/Webビーコン：ページ訪問やアクションを追跡する小さな画像です"
          ]
        },
        section2: {
          title: "2. 使用するクッキーの種類",
          subsection1: {
            title: "2.1 必須クッキー",
            intro: "これらのクッキーはウェブサイトの機能に必要であり、無効にすることはできません。以下が含まれます：",
            cookies: [
              { name: "invoratec_user", purpose: "ユーザー認証状態を保存します", duration: "セッション" },
              { name: "locale", purpose: "言語設定を保存します", duration: "1年" },
              { name: "region", purpose: "地域設定（米国/中国）を保存します", duration: "1年" },
              { name: "cookie_consent", purpose: "クッキーの設定を記憶します", duration: "1年" }
            ]
          },
          subsection2: {
            title: "2.2 機能クッキー",
            intro: "これらのクッキーは拡張機能とパーソナライゼーションを可能にします：",
            cookies: [
              { name: "theme", purpose: "ライト/ダークモードの設定を記憶します", duration: "1年" },
              { name: "recent_projects", purpose: "最近表示したプロジェクトを保存します", duration: "30日" }
            ]
          },
          subsection3: {
            title: "2.3 分析クッキー",
            intro: "訪問者がウェブサイトをどのように使用しているかを理解するために分析クッキーを使用しています：",
            items: [
              "Google Analytics：ウェブサイトのトラフィックと使用パターンを理解するのに役立ちます",
              "これらのクッキーは、ページビュー、滞在時間、ナビゲーションに関する匿名データを収集します"
            ]
          },
          subsection4: {
            title: "2.4 マーケティングクッキー",
            content: "現在、マーケティングまたは広告クッキーは使用していません。"
          }
        },
        section3: {
          title: "3. クッキーの管理",
          subsection1: {
            title: "3.1 ブラウザ設定",
            content: "ブラウザの設定からクッキーを制御できます。ほとんどのブラウザでは以下のことが可能です：",
            items: [
              "保存されているクッキーを確認し削除する",
              "サードパーティクッキーをブロックする",
              "特定のサイトからのすべてのクッキーをブロックする",
              "すべてのクッキーを完全にブロックする"
            ],
            note: "注意：必須クッキーをブロックすると、ウェブサイトが正常に機能しなくなる可能性があります。"
          },
          subsection2: {
            title: "3.2 クッキー設定",
            content: "初めてサイトを訪問した際に表示されるクッキー同意バナーを使用してクッキー設定を管理できます。または、お問い合わせいただいて設定を更新することも可能です。"
          }
        },
        section4: {
          title: "4. サードパーティクッキー",
          content: "当サイトの一部の機能では、サードパーティからのクッキーが設定される場合があります：",
          items: [
            "Google Analytics（分析）",
            "Autodesk（ACC統合機能用）",
            "YouTube（埋め込み動画がある場合）"
          ],
          note: "これらのサードパーティには、クッキーの使用に関する独自のプライバシーポリシーがあります。"
        },
        section5: {
          title: "5. クッキーの有効期間",
          intro: "クッキーにはさまざまな有効期間があります：",
          items: [
            "セッションクッキー：ブラウザを閉じると削除されます",
            "永続クッキー：有効期限が切れるか、削除するまで残ります"
          ]
        },
        section6: {
          title: "6. ポリシーの更新",
          content: "このクッキーポリシーは随時更新される場合があります。変更は、更新された改訂日とともにこのページに掲載されます。"
        },
        section7: {
          title: "7. お問い合わせ",
          intro: "クッキーの使用に関するご質問は：",
          privacy: "プライバシー",
          general: "一般"
        },
        tableHeaders: {
          cookieName: "クッキー名",
          purpose: "目的",
          duration: "期間"
        }
      }
    },
    developer: {
      title: "開発者規約",
      content: {
        intro: "InvoratecAIの開発者プログラムへようこそ！これらの開発者規約は、Invoratec Inc.と開発者として登録する個人または法人との間の拘束力のある契約です。",
        introNote: "「同意する」をクリックするか、当社のAPI、SDK、または開発者プラットフォームを使用することにより、これらの規約に拘束されることに同意したものとみなされます。",
        section1: {
          title: "1. 定義",
          items: [
            "「API」とは、InvoratecAIのアプリケーションプログラミングインターフェース、SDK、および付随するドキュメントを意味します",
            "「アプリケーション」とは、当社のAPIを使用するソフトウェアアプリケーション、プラグイン、拡張機能、または統合を意味します",
            "「顧客データ」とは、エンドユーザーがInvoratecAIプラットフォームを通じて送信するデータを意味します",
            "「開発者プラットフォーム」とは、当社の開発者ポータル、ドキュメント、および関連ツールを意味します",
            "「エンドユーザー」とは、お客様のアプリケーションを使用する個人を意味します"
          ]
        },
        section2: {
          title: "2. APIライセンス付与",
          subsection1: {
            title: "2.1 ライセンス",
            intro: "当社はお客様に限定的、非独占的、譲渡不可、取消可能なライセンスを付与します：",
            items: [
              "アプリケーションを開発するために当社のAPIにアクセスし使用すること",
              "当社のドキュメントおよび開発者ツールを使用すること",
              "当社のブランドガイドラインに従ってInvoratecAIブランドを表示すること"
            ]
          },
          subsection2: {
            title: "2.2 制限事項",
            intro: "お客様は以下のことを行わないことに同意します：",
            items: [
              "APIへのアクセスをサブライセンス、販売、または再配布すること",
              "競合製品を作成するためにAPIを使用すること",
              "レート制限またはアクセス制御を回避すること",
              "APIの一部をリバースエンジニアリングすること",
              "違法または不正な目的でAPIを使用すること",
              "APIまたはInvoratecAIサービスを妨害または中断すること",
              "アプリケーションに必要な範囲を超えて顧客データにアクセスすること"
            ]
          }
        },
        section3: {
          title: "3. APIアクセスと認証",
          subsection1: {
            title: "3.1 APIキー",
            intro: "APIにアクセスするには：",
            items: [
              "開発者アカウントを登録する",
              "API資格情報を取得する",
              "資格情報を安全かつ機密に保持する",
              "資格情報が侵害された場合は直ちに当社に通知する"
            ]
          },
          subsection2: {
            title: "3.2 レート制限",
            intro: "API使用にはレート制限が適用されます：",
            items: [
              "スタンダードティア：毎分100リクエスト",
              "プロフェッショナルティア：毎分1,000リクエスト",
              "エンタープライズティア：契約に基づくカスタム制限"
            ],
            note: "レート制限を超過すると、APIアクセス停止につながる可能性があります。"
          }
        },
        section4: {
          title: "4. データ取り扱い要件",
          subsection1: {
            title: "4.1 顧客データ保護",
            intro: "アプリケーションが顧客データにアクセスする場合：",
            items: [
              "エンドユーザーが明示的に承認したデータのみにアクセスする",
              "データを保護するための適切なセキュリティ対策を実施する",
              "要求に応じてデータを削除する",
              "データ保護法（GDPR、CCPAなど）を遵守する"
            ]
          },
          subsection2: {
            title: "4.2 プライバシーポリシー",
            intro: "お客様はプライバシーポリシーを維持する必要があります：",
            items: [
              "データ収集および使用方法を正確に記述する",
              "InvoratecAI APIの使用を開示する",
              "エンドユーザーが容易にアクセスできるようにする"
            ]
          },
          subsection3: {
            title: "4.3 BIMモデルデータ",
            intro: "BIMモデルデータには特別な取り扱いが必要です：",
            items: [
              "必要以上に長くBIMモデルを保存しない",
              "機密プロジェクトデータにはアクセス制御を実施する",
              "権限のない第三者とモデルデータを共有しない",
              "設計における知的財産権を尊重する"
            ]
          }
        },
        section5: {
          title: "5. アプリケーション要件",
          subsection1: {
            title: "5.1 品質基準",
            intro: "お客様のアプリケーションは以下を満たす必要があります：",
            items: [
              "安定して設計どおりに動作する",
              "APIとInvoratecAIサービスを適切に使用する",
              "エンドユーザーのセキュリティを損なわない",
              "当社のブランドガイドラインに従う"
            ]
          },
          subsection2: {
            title: "5.2 必須開示",
            intro: "お客様のアプリケーションには以下を含める必要があります：",
            items: [
              "InvoratecAIサービスの使用に関する明確な通知",
              "アクセス可能なプライバシーポリシー",
              "適切な帰属表示とブランディング"
            ]
          }
        },
        section6: {
          title: "6. 知的財産",
          subsection1: {
            title: "6.1 お客様のアプリケーション",
            content: "お客様のアプリケーションに関するすべての権利は、お客様に帰属します。"
          },
          subsection2: {
            title: "6.2 InvoratecAIの権利",
            content: "当社は、API、ドキュメント、およびサービスに関するすべての権利を保持します。"
          },
          subsection3: {
            title: "6.3 フィードバック",
            content: "お客様が提供するフィードバックは、追加の補償なしに当社が使用することができます。"
          }
        },
        section7: {
          title: "7. サポートとアップデート",
          subsection1: {
            title: "7.1 APIアップデート",
            intro: "当社は以下を行う場合があります：",
            items: [
              "定期的にAPIを更新および改善する",
              "新機能を追加する",
              "破壊的変更を事前に通知した上で非推奨にする"
            ]
          },
          subsection2: {
            title: "7.2 サポート",
            intro: "開発者サポートには以下が含まれます：",
            items: [
              "ドキュメントへのアクセス",
              "開発者フォーラム",
              "有料プランでのメールサポート"
            ]
          }
        },
        section8: {
          title: "8. 解除",
          subsection1: {
            title: "8.1 お客様による解除",
            content: "お客様は、APIの使用を中止することにより、いつでもこれらの規約を解除できます。"
          },
          subsection2: {
            title: "8.2 当社による解除",
            intro: "当社は、以下の場合にAPIアクセスを終了することができます：",
            items: [
              "これらの規約への違反",
              "APIまたはサービスの悪用",
              "エンドユーザーへの損害",
              "当社の裁量によるその他の理由"
            ]
          }
        },
        section9: {
          title: "9. 免責事項",
          content: "APIは「現状有姿」で提供されます。当社は、APIの可用性、正確性についていかなる保証も行いません。"
        },
        section10: {
          title: "10. 責任の制限",
          content: "当社は、APIの使用から生じる間接的または結果的損害について責任を負いません。"
        },
        section11: {
          title: "11. お問い合わせ",
          intro: "開発者向けのお問い合わせ：",
          devSupport: "開発者サポート",
          general: "一般"
        }
      }
    },
    ai: {
      title: "AI追加規約",
      content: {
        intro: "これらのAI追加規約は、InvoratecAI利用規約を補足します。BIM AIおよびWeb AIプラットフォーム内のAI搭載機能の使用を規定します。AI機能を使用することにより、これらの追加規約に同意したものとみなされます。",
        section1: {
          title: "1. AI機能の概要",
          subsection1: {
            title: "1.1 BIM AI機能",
            intro: "当社のBIM AIプラットフォームは、Revitおよび建設ワークフローに対するインテリジェントな支援を提供します：",
            items: [
              "自然言語クエリ：BIMモデルについて自然言語で質問できます",
              "要素分析：モデル要素とプロパティのAI搭載分析",
              "スマート提案：モデル改善のためのインテリジェントな推奨",
              "ドキュメント支援：AI生成の説明とレポート",
              "干渉検出インサイト：調整問題のAI分析"
            ]
          },
          subsection2: {
            title: "1.2 Web AI機能",
            intro: "当社のWeb AIプラットフォームはインテリジェントなWebコンテンツインタラクションを可能にします：",
            items: [
              "コンテンツ要約：WebページのAI生成要約",
              "質問応答：Webコンテンツに基づく回答を取得",
              "リサーチ支援：AIを活用したリサーチと情報収集",
              "翻訳サポート：多言語コンテンツの理解"
            ]
          }
        },
        section2: {
          title: "2. AI技術",
          subsection1: {
            title: "2.1 AIプロバイダー",
            content: "InvoratecAIは、AnthropicのClaude AIモデルを使用しています。Anthropicは、AI安全性をリードする企業です。"
          },
          subsection2: {
            title: "2.2 処理アーキテクチャ",
            items: [
              "AIクエリは安全なAPI接続を通じてリアルタイムで処理されます",
              "お客様のデータは業界標準の暗号化を使用して安全に送信されます",
              "AI処理はAnthropicのセキュアインフラストラクチャで実行されます",
              "結果は中間保存なしに直接お客様に返されます"
            ]
          }
        },
        section3: {
          title: "3. データ使用とAI",
          subsection1: {
            title: "3.1 処理されるデータ",
            intro: "AI機能を使用すると、以下のデータが処理される場合があります：",
            items: [
              "クエリコンテンツ：お客様の質問、プロンプト、および指示",
              "コンテキストデータ：クエリに回答するために必要なBIMモデルまたはWebコンテンツの関連部分",
              "会話履歴：コンテキストの継続性のための現在のセッションでの以前のメッセージ"
            ]
          },
          subsection2: {
            title: "3.2 トレーニングにデータを使用しない",
            importantTitle: "重要なプライバシーコミットメント：",
            items: [
              "お客様のデータはAIモデルのトレーニングに使用されません",
              "お客様のクエリは処理後にAnthropicに保存されません",
              "お客様のBIMモデルとプロジェクトデータは機密に保たれます",
              "AIインタラクションはエフェメラルに処理されます"
            ]
          },
          subsection3: {
            title: "3.3 データ保持",
            intro: "AIクエリデータの保持：",
            items: [
              "処理：クエリはリアルタイムで処理され、AIプロバイダーによって永続化されません",
              "ログ記録：請求および品質管理のためにメタデータをログに記録する場合があります",
              "履歴：セッション内の会話履歴は一時的です"
            ]
          }
        },
        section4: {
          title: "4. AI機能の許可される使用",
          subsection1: {
            title: "4.1 許可される使用",
            items: [
              "お客様自身のBIMモデルとデータのクエリおよび分析",
              "プロジェクトのドキュメントとレポートの生成",
              "建設と設計のベストプラクティスに関する質問",
              "ワークフロー改善のためのAI提案の使用"
            ]
          },
          subsection2: {
            title: "4.2 禁止される使用",
            intro: "お客様は、AI機能を以下の目的で使用しないことに同意します：",
            items: [
              "誤解を招く、虚偽の、または欺瞞的なコンテンツを生成する",
              "他者の知的財産権を侵害するコンテンツを作成する",
              "トレーニングデータの抽出またはAIモデルのリバースエンジニアリングを試みる",
              "サービスを悪用する方法でクエリを自動化する",
              "有害、違法、または攻撃的なコンテンツを生成する",
              "他者になりすます、または偽のIDを作成する"
            ]
          }
        },
        section5: {
          title: "5. AI出力の制限",
          subsection1: {
            title: "5.1 正確性の保証なし",
            content: "AI生成コンテンツには、エラー、不正確さ、または古い情報が含まれる場合があります。AI出力は支援およびガイダンスとして使用されるべきです。",
            importantNotice: "重要なお知らせ："
          },
          subsection2: {
            title: "5.2 専門的判断が必要",
            items: [
              "AI出力は専門的なエンジニアリングアドバイスを構成しません",
              "常にAI提案を該当するコードと基準に対して検証してください",
              "AIは専門的判断を支援するツールとして使用してください",
              "重要な決定については資格のある専門家に相談してください"
            ]
          },
          subsection3: {
            title: "5.3 責任の制限",
            content: "InvoratecAIは、AI出力に基づいて行われた決定から生じる損害について責任を負いません。",
            intro: "AI機能は「現状有姿」で提供されます。当社は以下を保証しません：",
            items: [
              "AI出力が正確、完全、または最新であること",
              "AI機能が中断またはエラーなく動作すること",
              "AI提案がお客様の特定の要件を満たすこと",
              "AI分析がすべての問題または機会を特定すること"
            ]
          }
        },
        section6: {
          title: "6. 知的財産",
          subsection1: {
            title: "6.1 お客様のコンテンツ",
            content: "お客様は入力データとコンテンツの所有権を保持します。AI出力はお客様に帰属します。"
          },
          subsection2: {
            title: "6.2 AIモデルの権利",
            content: "AIモデル、アルゴリズム、および基盤技術は、InvoratecAIおよびAnthropicの所有物です。"
          }
        },
        section7: {
          title: "7. お問い合わせ",
          intro: "AI関連のご質問やご懸念については：",
          aiSupport: "AIサポート",
          privacy: "プライバシー",
          general: "一般"
        }
      }
    }
  }
};

// Chinese translations for missing sections
const zhTranslations = {
  terms: {
    cookies: {
      title: "Cookie政策",
      content: {
        intro: "本Cookie政策说明了Invoratec Inc.（InvoratecAI）如何在我们的网站和应用程序上使用Cookie及类似技术。使用我们的服务即表示您同意按照本政策所述使用Cookie。",
        section1: {
          title: "1. 什么是Cookie？",
          content: "Cookie是当您访问网站时存储在您设备上的小型文本文件。它们帮助网站记住您的偏好并改善您的浏览体验。",
          intro: "类似技术包括：",
          items: [
            "本地存储：在浏览器中长期存储数据",
            "会话存储：在浏览会话期间临时存储数据",
            "像素/网络信标：跟踪页面访问和操作的小图像"
          ]
        },
        section2: {
          title: "2. 我们使用的Cookie类型",
          subsection1: {
            title: "2.1 必要Cookie",
            intro: "这些Cookie是网站运行所必需的，无法禁用。包括：",
            cookies: [
              { name: "invoratec_user", purpose: "存储用户身份验证状态", duration: "会话" },
              { name: "locale", purpose: "存储语言偏好", duration: "1年" },
              { name: "region", purpose: "存储地区偏好", duration: "1年" },
              { name: "cookie_consent", purpose: "记住您的Cookie偏好", duration: "1年" }
            ]
          },
          subsection2: {
            title: "2.2 功能Cookie",
            intro: "这些Cookie启用增强功能和个性化：",
            cookies: [
              { name: "theme", purpose: "记住浅色/深色模式偏好", duration: "1年" },
              { name: "recent_projects", purpose: "存储最近查看的项目", duration: "30天" }
            ]
          },
          subsection3: {
            title: "2.3 分析Cookie",
            intro: "我们使用分析Cookie来了解访问者如何使用我们的网站：",
            items: [
              "Google Analytics：帮助我们了解网站流量和使用模式",
              "这些Cookie收集关于页面浏览、停留时间和导航的匿名数据"
            ]
          },
          subsection4: {
            title: "2.4 营销Cookie",
            content: "我们目前不使用营销或广告Cookie。"
          }
        },
        section3: {
          title: "3. 管理Cookie",
          subsection1: {
            title: "3.1 浏览器设置",
            content: "您可以通过浏览器设置控制Cookie。大多数浏览器允许您：",
            items: [
              "查看已存储的Cookie并删除它们",
              "阻止第三方Cookie",
              "阻止特定网站的所有Cookie",
              "完全阻止所有Cookie"
            ],
            note: "注意：阻止必要Cookie可能会导致网站无法正常运行。"
          },
          subsection2: {
            title: "3.2 Cookie偏好设置",
            content: "您可以在首次访问我们的网站时使用Cookie同意横幅管理您的Cookie偏好。"
          }
        },
        section4: {
          title: "4. 第三方Cookie",
          content: "我们网站上的某些功能可能会设置第三方Cookie：",
          items: [
            "Google Analytics（分析）",
            "Autodesk（用于ACC集成功能）",
            "YouTube（如果存在嵌入视频）"
          ],
          note: "这些第三方有其自己的Cookie使用隐私政策。"
        },
        section5: {
          title: "5. Cookie期限",
          intro: "Cookie有不同的生命周期：",
          items: [
            "会话Cookie：关闭浏览器时删除",
            "持久Cookie：直到过期或您删除它们"
          ]
        },
        section6: {
          title: "6. 政策更新",
          content: "我们可能会不时更新本Cookie政策。更改将发布在本页面上。"
        },
        section7: {
          title: "7. 联系方式",
          intro: "如有关于Cookie使用的问题：",
          privacy: "隐私",
          general: "一般"
        },
        tableHeaders: {
          cookieName: "Cookie名称",
          purpose: "目的",
          duration: "期限"
        }
      }
    },
    developer: {
      title: "开发者条款",
      content: {
        intro: "欢迎加入InvoratecAI开发者计划！这些开发者条款构成Invoratec Inc.与注册为开发者的个人或实体之间的具有约束力的协议。",
        introNote: "点击同意或使用我们的API、SDK或开发者平台，即表示您同意受这些条款的约束。",
        section1: {
          title: "1. 定义",
          items: [
            "API指InvoratecAI的应用程序编程接口、SDK和随附文档",
            "应用程序指使用我们API的软件应用程序、插件、扩展或集成",
            "客户数据指最终用户通过InvoratecAI平台提交的任何数据",
            "开发者平台指我们的开发者门户、文档和相关工具",
            "最终用户指使用您的应用程序的个人"
          ]
        },
        section2: {
          title: "2. API许可授予",
          subsection1: {
            title: "2.1 许可",
            intro: "我们授予您有限的、非独占的、不可转让的、可撤销的许可：",
            items: [
              "访问和使用我们的API开发应用程序",
              "使用我们的文档和开发者工具",
              "根据我们的品牌指南展示InvoratecAI品牌"
            ]
          },
          subsection2: {
            title: "2.2 限制",
            intro: "您同意不：",
            items: [
              "转授权、出售或重新分发API访问权限",
              "使用API创建竞争产品",
              "规避任何速率限制或访问控制",
              "对API进行逆向工程",
              "将API用于任何非法目的",
              "干扰或中断API或InvoratecAI服务",
              "超出必要范围访问客户数据"
            ]
          }
        },
        section3: {
          title: "3. API访问和身份验证",
          subsection1: {
            title: "3.1 API密钥",
            intro: "要访问API，您必须：",
            items: [
              "注册开发者账户",
              "获取API凭证",
              "保持凭证安全和保密",
              "如果凭证被泄露，立即通知我们"
            ]
          },
          subsection2: {
            title: "3.2 速率限制",
            intro: "API使用受速率限制约束：",
            items: [
              "标准层：每分钟100个请求",
              "专业层：每分钟1,000个请求",
              "企业层：根据协议定制限制"
            ],
            note: "超过速率限制可能导致API访问被暂停。"
          }
        },
        section4: {
          title: "4. 数据处理要求",
          subsection1: {
            title: "4.1 客户数据保护",
            intro: "当您的应用程序访问客户数据时，您必须：",
            items: [
              "仅访问最终用户明确授权的数据",
              "实施适当的安全措施保护数据",
              "应要求删除数据",
              "遵守所有适用的数据保护法律"
            ]
          },
          subsection2: {
            title: "4.2 隐私政策",
            intro: "您必须维护一项隐私政策：",
            items: [
              "准确描述您的数据收集和使用做法",
              "披露您对InvoratecAI API的使用",
              "最终用户可以轻松访问"
            ]
          },
          subsection3: {
            title: "4.3 BIM模型数据",
            intro: "BIM模型数据需要特殊处理：",
            items: [
              "不要存储BIM模型超过必要时间",
              "对敏感项目数据实施访问控制",
              "不与未经授权的第三方共享模型数据",
              "尊重设计中的知识产权"
            ]
          }
        },
        section5: {
          title: "5. 应用程序要求",
          subsection1: {
            title: "5.1 质量标准",
            intro: "您的应用程序必须：",
            items: [
              "稳定并按设计运行",
              "正确使用API和InvoratecAI服务",
              "不损害最终用户的安全",
              "遵循我们的品牌指南"
            ]
          },
          subsection2: {
            title: "5.2 必要披露",
            intro: "您的应用程序必须包括：",
            items: [
              "关于使用InvoratecAI服务的清晰通知",
              "可访问的隐私政策",
              "适当的归属和品牌"
            ]
          }
        },
        section6: {
          title: "6. 知识产权",
          subsection1: {
            title: "6.1 您的应用程序",
            content: "您保留对您的应用程序的所有权利。"
          },
          subsection2: {
            title: "6.2 InvoratecAI的权利",
            content: "我们保留API、文档和服务的所有权利。"
          },
          subsection3: {
            title: "6.3 反馈",
            content: "您提供的反馈可由我们使用，无需额外补偿。"
          }
        },
        section7: {
          title: "7. 支持和更新",
          subsection1: {
            title: "7.1 API更新",
            intro: "我们可能会：",
            items: [
              "定期更新和改进API",
              "添加新功能和增强",
              "在事先通知的情况下弃用重大更改"
            ]
          },
          subsection2: {
            title: "7.2 支持",
            intro: "开发者支持包括：",
            items: [
              "访问文档和资源",
              "开发者论坛和社区",
              "付费计划的电子邮件支持"
            ]
          }
        },
        section8: {
          title: "8. 终止",
          subsection1: {
            title: "8.1 您的终止",
            content: "您可以随时通过停止使用API来终止这些条款。"
          },
          subsection2: {
            title: "8.2 我们的终止",
            intro: "我们可能会暂停或终止您的API访问：",
            items: [
              "违反这些条款",
              "滥用API或服务",
              "对最终用户造成损害",
              "我们自行决定的任何其他原因"
            ]
          }
        },
        section9: {
          title: "9. 免责声明",
          content: "API按原样提供。我们不做任何保证。"
        },
        section10: {
          title: "10. 责任限制",
          content: "我们不对使用API产生的任何损害承担责任。"
        },
        section11: {
          title: "11. 联系方式",
          intro: "开发者咨询：",
          devSupport: "开发者支持",
          general: "一般"
        }
      }
    },
    ai: {
      title: "AI附加条款",
      content: {
        intro: "这些AI附加条款补充并纳入InvoratecAI服务条款。它们管理您在BIM AI和Web AI平台中使用AI驱动功能。使用我们的AI功能即表示您同意这些附加条款。",
        section1: {
          title: "1. AI功能概述",
          subsection1: {
            title: "1.1 BIM AI功能",
            intro: "我们的BIM AI平台为Revit和施工工作流程提供智能辅助：",
            items: [
              "自然语言查询：用自然语言询问关于BIM模型的问题",
              "元素分析：AI驱动的模型元素和属性分析",
              "智能建议：模型改进的智能推荐",
              "文档辅助：AI生成的描述和报告",
              "碰撞检测洞察：协调问题的AI分析"
            ]
          },
          subsection2: {
            title: "1.2 Web AI功能",
            intro: "我们的Web AI平台实现智能网页内容交互：",
            items: [
              "内容摘要：AI生成的网页摘要",
              "问答：基于网页内容获取答案",
              "研究辅助：AI驱动的研究和信息收集",
              "翻译支持：多语言内容理解"
            ]
          }
        },
        section2: {
          title: "2. AI技术",
          subsection1: {
            title: "2.1 AI提供商",
            content: "InvoratecAI使用Anthropic的Claude AI模型来驱动我们的智能功能。Anthropic是一家领先的AI安全公司。"
          },
          subsection2: {
            title: "2.2 处理架构",
            items: [
              "AI查询通过安全的API连接实时处理",
              "您的数据使用行业标准加密安全传输",
              "AI处理在Anthropic的安全基础设施中进行",
              "结果直接返回给您，无需中间存储"
            ]
          }
        },
        section3: {
          title: "3. 数据使用和AI",
          subsection1: {
            title: "3.1 处理的数据",
            intro: "使用AI功能时，可能会处理以下数据：",
            items: [
              "查询内容：您的问题、提示和指令",
              "上下文数据：回答查询所需的BIM模型或网页内容的相关部分",
              "对话历史：当前会话中的先前消息"
            ]
          },
          subsection2: {
            title: "3.2 数据不用于训练",
            importantTitle: "重要隐私承诺：",
            items: [
              "您的数据不会用于训练AI模型",
              "您的查询在处理后不会被Anthropic存储",
              "您的BIM模型和项目数据保持机密",
              "AI交互以临时方式处理"
            ]
          },
          subsection3: {
            title: "3.3 数据保留",
            intro: "AI查询数据保留：",
            items: [
              "处理：查询实时处理，不由AI提供商持久化",
              "日志：我们可能会记录元数据用于计费和质量目的",
              "历史：会话内的对话历史是临时的"
            ]
          }
        },
        section4: {
          title: "4. AI功能的可接受使用",
          subsection1: {
            title: "4.1 允许的使用",
            items: [
              "查询和分析您自己的BIM模型和数据",
              "为您的项目生成文档和报告",
              "询问关于施工和设计最佳实践的问题",
              "使用AI建议改进您的工作流程"
            ]
          },
          subsection2: {
            title: "4.2 禁止的使用",
            intro: "您同意不使用AI功能：",
            items: [
              "生成误导性、虚假或欺骗性内容",
              "创建侵犯他人知识产权的内容",
              "尝试提取训练数据或逆向工程AI模型",
              "以滥用服务的方式自动化查询",
              "生成有害、非法或冒犯性内容",
              "冒充他人或创建虚假身份"
            ]
          }
        },
        section5: {
          title: "5. AI输出限制",
          subsection1: {
            title: "5.1 不保证准确性",
            content: "AI生成的内容可能包含错误、不准确或过时的信息。AI输出应作为辅助和指导使用。",
            importantNotice: "重要提示："
          },
          subsection2: {
            title: "5.2 需要专业判断",
            items: [
              "AI输出不构成专业工程或建筑建议",
              "始终根据适用的规范和标准验证AI建议",
              "将AI用作辅助专业判断的工具",
              "就关键决策咨询合格的专业人士"
            ]
          },
          subsection3: {
            title: "5.3 责任限制",
            content: "InvoratecAI不对基于AI输出做出的任何决定承担责任。",
            intro: "AI功能按原样提供。我们不保证：",
            items: [
              "AI输出将准确、完整或最新",
              "AI功能将不间断或无错误",
              "AI建议将满足您的特定要求",
              "AI分析将识别所有问题或机会"
            ]
          }
        },
        section6: {
          title: "6. 知识产权",
          subsection1: {
            title: "6.1 您的内容",
            content: "您保留对输入数据和内容的所有权。AI输出属于您。"
          },
          subsection2: {
            title: "6.2 AI模型权利",
            content: "AI模型、算法和底层技术是InvoratecAI和Anthropic的财产。"
          }
        },
        section7: {
          title: "7. 联系方式",
          intro: "如有AI相关问题或疑虑：",
          aiSupport: "AI支持",
          privacy: "隐私",
          general: "一般"
        }
      }
    }
  }
};

// Read and update Japanese translations
const jaPath = path.join(__dirname, 'ja.json');
let ja = JSON.parse(fs.readFileSync(jaPath, 'utf8'));
ja = deepMerge(ja, jaTranslations);
fs.writeFileSync(jaPath, JSON.stringify(ja, null, 2), 'utf8');
console.log('Updated ja.json with missing legal translations');

// Read and update Chinese translations
const zhPath = path.join(__dirname, 'zh.json');
let zh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));
zh = deepMerge(zh, zhTranslations);
fs.writeFileSync(zhPath, JSON.stringify(zh, null, 2), 'utf8');
console.log('Updated zh.json with missing legal translations');

console.log('Done!');
