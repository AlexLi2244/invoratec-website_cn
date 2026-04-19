const fs = require('fs');
const path = require('path');

// Chinese translations for missing keys
const zhTranslations = {
  docs: {
    legalPoliciesTitle: "法律与政策"
  },
  terms: {
    security: {
      content: {
        section7: {
          email: "电子邮件",
          general: "一般支持"
        }
      }
    },
    privacy: {
      content: {
        section4: {
          note: "当您删除账户时，我们将在90天内删除或匿名化您的个人信息，除非法律要求保留。"
        },
        section9: {
          email: "电子邮件",
          general: "一般支持"
        }
      }
    },
    developer: {
      content: {
        section5: {
          subsection3: "API使用限制和配额可能根据您的订阅层级而异。"
        },
        section6: {
          intro: "保护用户数据对于维护信任至关重要。",
          subsection1: {
            items: [
              "在收集任何用户数据之前获得适当的同意",
              "向用户明确解释您的数据使用做法",
              "仅收集应用程序功能所需的数据"
            ]
          },
          subsection2: {
            items: [
              "使用安全存储机制",
              "实施适当的访问控制",
              "遵循数据最小化原则"
            ]
          }
        },
        section8: {
          intro: "我们可能会更新这些条款以反映我们服务的变化。",
          items: [
            "重大变更将提前30天通知",
            "继续使用即表示接受更新后的条款",
            "您可以随时联系我们了解当前条款"
          ],
          note: "我们建议您定期查看这些条款。"
        },
        section9: {
          intro: "本协议受加利福尼亚州法律管辖。",
          items: [
            "法律适用排除冲突法原则",
            "争议应提交至加利福尼亚州法院"
          ],
          note: "如果本协议的任何条款被认定为不可执行，其余条款将继续有效。"
        },
        section10: {
          intro: "如有任何问题，请联系我们的开发者支持团队。",
          developerSupport: "开发者支持",
          documentation: "文档",
          general: "一般问题"
        }
      }
    },
    dpa: {
      content: {
        section12: {
          dpo: "数据保护官",
          legal: "法务部门",
          general: "一般咨询"
        }
      }
    },
    subprocessors: {
      content: {
        whatIsSubprocessor: "子处理者是我们授权代表我们处理个人数据的第三方服务提供商。我们仔细审查每个子处理者以确保符合适用的数据保护标准。",
        ourCommitments: "我们承诺仅与提供足够保证实施适当技术和组织措施以保护您的数据的子处理者合作。所有子处理者均受到符合数据保护法规的合同约束。",
        currentSubprocessors: "当前子处理者列表",
        subprocessorData: {
          gcp: {
            name: "Google Cloud Platform",
            location: "美国"
          },
          firebase: {
            name: "Firebase / Firestore",
            location: "美国"
          },
          anthropic: {
            name: "Anthropic",
            location: "美国"
          },
          gmail: {
            name: "Gmail / Google Workspace",
            location: "美国"
          },
          autodesk: {
            name: "Autodesk",
            location: "美国"
          }
        },
        infrastructureDetails: "我们的主要基础设施托管在美国的Google Cloud Platform上。我们可能会在其他地区使用额外的数据处理设施，以确保最佳性能和冗余。",
        regionalConsiderations: "对于欧盟/欧洲经济区客户，我们维护适当的数据传输机制，包括标准合同条款(SCC)，以确保您的数据在欧洲以外传输时得到保护。",
        notificationOfChanges: "我们将在使用新的子处理者之前至少30天通过电子邮件通知您。如果您对新的子处理者有合理的异议，请在收到通知后14天内与我们联系。",
        stayInformed: "如需接收有关子处理者变更的更新，请确保您的账户设置中的通知偏好是最新的。",
        contact: "如有关于子处理者的任何问题，请联系我们的数据保护团队。"
      }
    },
    tos: {
      content: {
        section14: {
          email: "电子邮件",
          general: "一般咨询"
        }
      }
    }
  }
};

// Japanese translations for missing keys
const jaTranslations = {
  terms: {
    security: {
      content: {
        section7: {
          email: "メール",
          general: "一般サポート"
        }
      }
    },
    privacy: {
      content: {
        section4: {
          note: "アカウントを削除すると、法律で保持が義務付けられている場合を除き、90日以内に個人情報を削除または匿名化します。"
        },
        section9: {
          email: "メール",
          general: "一般サポート"
        }
      }
    },
    developer: {
      content: {
        section5: {
          subsection3: "APIの使用制限とクォータはサブスクリプションレベルによって異なる場合があります。"
        },
        section6: {
          intro: "ユーザーデータの保護は信頼を維持するために不可欠です。",
          subsection1: {
            items: [
              "ユーザーデータを収集する前に適切な同意を取得する",
              "データの使用方法をユーザーに明確に説明する",
              "アプリケーションの機能に必要なデータのみを収集する"
            ]
          },
          subsection2: {
            items: [
              "安全なストレージメカニズムを使用する",
              "適切なアクセス制御を実装する",
              "データ最小化の原則に従う"
            ]
          }
        },
        section8: {
          intro: "サービスの変更を反映するためにこれらの規約を更新する場合があります。",
          items: [
            "重要な変更については30日前に通知します",
            "継続使用は更新された規約への同意とみなされます",
            "現在の規約についていつでもお問い合わせいただけます"
          ],
          note: "これらの規約を定期的に確認することをお勧めします。"
        },
        section9: {
          intro: "本契約はカリフォルニア州法に準拠します。",
          items: [
            "法の抵触に関する原則を除外して法律が適用されます",
            "紛争はカリフォルニア州の裁判所に提出されます"
          ],
          note: "本契約のいずれかの条項が執行不能と判断された場合でも、残りの条項は有効であり続けます。"
        },
        section10: {
          intro: "ご質問がございましたら、開発者サポートチームにお問い合わせください。",
          developerSupport: "開発者サポート",
          documentation: "ドキュメント",
          general: "一般的なお問い合わせ"
        }
      }
    },
    dpa: {
      content: {
        section12: {
          dpo: "データ保護責任者",
          legal: "法務部門",
          general: "一般的なお問い合わせ"
        }
      }
    },
    subprocessors: {
      content: {
        whatIsSubprocessor: "副処理者とは、当社に代わって個人データを処理することを承認した第三者のサービスプロバイダーです。各副処理者が適用されるデータ保護基準に準拠していることを確認するために、慎重に審査しています。",
        ourCommitments: "当社は、お客様のデータを保護するための適切な技術的および組織的措置を実施するための十分な保証を提供する副処理者とのみ協力することを約束します。すべての副処理者は、データ保護規制に準拠した契約条項に拘束されます。",
        currentSubprocessors: "現在の副処理者リスト",
        subprocessorData: {
          gcp: {
            name: "Google Cloud Platform",
            location: "アメリカ合衆国"
          },
          firebase: {
            name: "Firebase / Firestore",
            location: "アメリカ合衆国"
          },
          anthropic: {
            name: "Anthropic",
            location: "アメリカ合衆国"
          },
          gmail: {
            name: "Gmail / Google Workspace",
            location: "アメリカ合衆国"
          },
          autodesk: {
            name: "Autodesk",
            location: "アメリカ合衆国"
          }
        },
        infrastructureDetails: "当社の主要なインフラストラクチャは、アメリカ合衆国のGoogle Cloud Platformでホストされています。最適なパフォーマンスと冗長性を確保するために、他の地域で追加のデータ処理施設を使用する場合があります。",
        regionalConsiderations: "EU/EEAのお客様については、標準契約条項(SCC)を含む適切なデータ転送メカニズムを維持し、ヨーロッパ外に転送される際にデータが保護されることを確保しています。",
        notificationOfChanges: "新しい副処理者を使用する少なくとも30日前にメールでお知らせします。新しい副処理者について合理的な異議がある場合は、通知受領後14日以内にご連絡ください。",
        stayInformed: "副処理者の変更に関する更新を受け取るには、アカウント設定の通知設定が最新であることを確認してください。",
        contact: "副処理者についてご質問がございましたら、データ保護チームにお問い合わせください。"
      }
    },
    tos: {
      content: {
        section14: {
          email: "メール",
          general: "一般的なお問い合わせ"
        }
      }
    }
  }
};

// Deep merge function
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target && target[key] instanceof Object && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Update Chinese
const zhPath = path.join(__dirname, 'zh.json');
const existingZh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));
const updatedZh = deepMerge(existingZh, zhTranslations);
fs.writeFileSync(zhPath, JSON.stringify(updatedZh, null, 2), 'utf8');
console.log('Updated zh.json with missing translations');

// Update Japanese
const jaPath = path.join(__dirname, 'ja.json');
const existingJa = JSON.parse(fs.readFileSync(jaPath, 'utf8'));
const updatedJa = deepMerge(existingJa, jaTranslations);
fs.writeFileSync(jaPath, JSON.stringify(updatedJa, null, 2), 'utf8');
console.log('Updated ja.json with missing translations');
