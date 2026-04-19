// Case study content data
export interface CaseStudy {
  slug: string
  industry: string
  date: string
  readTime: string
  image: string
  icon: string
  stats: {
    timeSaved: string
    costReduction: string
    errorReduction?: string
  }
  tags: string[]
}

export interface CaseStudyLocalizedContent {
  title: string
  summary: string
  client: string
  location: string
  duration: string
  sections: {
    heading: string
    content: string
    list?: string[]
    image?: string
    imageCaption?: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export interface CaseStudyContent {
  en: CaseStudyLocalizedContent
  zh: CaseStudyLocalizedContent
  ja?: CaseStudyLocalizedContent
}

export const caseStudies: Record<string, CaseStudy> = {
  'aecom-tower': {
    slug: 'aecom-tower',
    industry: 'Commercial',
    date: '2024-12-15',
    readTime: '5 min',
    image: '/images/case1.webp',
    icon: '🏢',
    stats: {
      timeSaved: '40%',
      costReduction: '25%',
      errorReduction: '60%'
    },
    tags: ['Commercial', 'High-Rise', 'MEP Coordination', 'BIM']
  },
  'hospital-project': {
    slug: 'hospital-project',
    industry: 'Healthcare',
    date: '2024-12-10',
    readTime: '6 min',
    image: '/images/case2.webp',
    icon: '🏥',
    stats: {
      timeSaved: '35%',
      costReduction: '20%',
      errorReduction: '55%'
    },
    tags: ['Healthcare', 'Complex MEP', 'Critical Systems', 'Coordination']
  },
  'metro-station': {
    slug: 'metro-station',
    industry: 'Infrastructure',
    date: '2024-12-05',
    readTime: '5 min',
    image: '/images/case3.png',
    icon: '🚇',
    stats: {
      timeSaved: '45%',
      costReduction: '30%',
      errorReduction: '70%'
    },
    tags: ['Infrastructure', 'Transit', 'Multi-discipline', 'Large Scale']
  }
}

export const caseStudyContents: Record<string, CaseStudyContent> = {
  'aecom-tower': {
    en: {
      title: 'AECOM Tower Project',
      summary: 'How a major commercial tower project reduced coordination time by 40% using InvoratecAI',
      client: 'AECOM Construction Group',
      location: 'Shanghai, China',
      duration: '18 months',
      sections: [
        {
          heading: 'Project Overview',
          content: 'The AECOM Tower is a 52-story mixed-use commercial development featuring office spaces, retail areas, and premium amenities. With over 200,000 square meters of built area, the project required coordination across 12 different subcontractors and multiple engineering disciplines.'
        },
        {
          heading: 'The Challenge',
          content: 'The project team faced significant coordination challenges due to the complexity of the MEP systems and the tight construction schedule. Traditional coordination methods were consuming excessive time and resources.',
          list: [
            'Complex mechanical systems with multiple zones and air handling units',
            'High-density electrical distribution across 52 floors',
            'Intricate plumbing systems for office and retail use',
            'Tight floor-to-floor heights requiring precise routing',
            'Multiple subcontractors working simultaneously with conflicting schedules'
          ]
        },
        {
          heading: 'The Solution',
          content: 'The project team implemented InvoratecAI\'s twin platform approach, combining the Revit add-in for desktop work with the cloud platform for team coordination.',
          list: [
            'AI-powered clash detection with severity ranking',
            'Real-time cloud synchronization across all teams',
            'Voice-controlled element selection and modification in Revit',
            'Automated task assignment based on clash discipline',
            'Centralized dashboard for progress tracking and reporting'
          ]
        },
        {
          heading: 'Implementation Process',
          content: 'The implementation was completed in three phases over six weeks. First, all team members were onboarded to the cloud platform and trained on the web-based tools. Next, the BIM team integrated the Revit add-in into their workflow. Finally, automated coordination workflows were established with clear escalation procedures.'
        },
        {
          heading: 'Results and Impact',
          content: 'The implementation of InvoratecAI transformed the project\'s coordination process and delivered measurable improvements across all key metrics.',
          list: [
            '40% reduction in coordination meeting time',
            '25% cost savings on coordination-related activities',
            '60% fewer clashes discovered during construction',
            '90% reduction in coordination-related RFIs',
            'Improved team satisfaction and collaboration'
          ]
        }
      ],
      testimonial: {
        quote: 'InvoratecAI completely changed how we approach MEP coordination. The AI-powered clash detection alone saved us countless hours, but the real value was in having a single platform where everyone could collaborate effectively.',
        author: 'Michael Chen',
        role: 'BIM Manager, AECOM Construction Group'
      }
    },
    zh: {
      title: 'AECOM大厦项目',
      summary: '一个大型商业塔楼项目如何使用InvoratecAI将协调时间减少40%',
      client: 'AECOM建设集团',
      location: '中国上海',
      duration: '18个月',
      sections: [
        {
          heading: '项目概述',
          content: 'AECOM大厦是一座52层的混合用途商业开发项目，包括办公空间、零售区域和高端配套设施。该项目建筑面积超过20万平方米，需要协调12个不同的分包商和多个工程专业。'
        },
        {
          heading: '面临的挑战',
          content: '由于MEP系统的复杂性和紧张的施工进度，项目团队面临着重大的协调挑战。传统的协调方法消耗了过多的时间和资源。',
          list: [
            '复杂的机械系统，包含多个区域和空气处理机组',
            '跨52层的高密度电气配电',
            '用于办公和零售的复杂管道系统',
            '紧凑的层高要求精确的管线布置',
            '多个分包商同时工作，进度冲突'
          ]
        },
        {
          heading: '解决方案',
          content: '项目团队实施了InvoratecAI的双平台方法，将Revit插件用于桌面工作，同时使用云平台进行团队协调。',
          list: [
            '带严重程度排名的AI驱动碰撞检测',
            '所有团队的实时云同步',
            'Revit中的语音控制元素选择和修改',
            '基于碰撞专业的自动任务分配',
            '用于进度跟踪和报告的集中仪表板'
          ]
        },
        {
          heading: '实施过程',
          content: '实施分三个阶段在六周内完成。首先，所有团队成员都接入云平台并接受基于网络工具的培训。接下来，BIM团队将Revit插件集成到他们的工作流程中。最后，建立了具有明确升级程序的自动化协调工作流程。'
        },
        {
          heading: '成果与影响',
          content: 'InvoratecAI的实施改变了项目的协调过程，并在所有关键指标上实现了可衡量的改进。',
          list: [
            '协调会议时间减少40%',
            '协调相关活动成本节省25%',
            '施工期间发现的碰撞减少60%',
            '协调相关RFI减少90%',
            '团队满意度和协作改善'
          ]
        }
      ],
      testimonial: {
        quote: 'InvoratecAI完全改变了我们进行MEP协调的方式。仅AI驱动的碰撞检测就为我们节省了无数小时，但真正的价值在于拥有一个每个人都可以有效协作的单一平台。',
        author: '陈明',
        role: 'AECOM建设集团BIM经理'
      }
    },
    ja: {
      title: 'AECOMタワープロジェクト',
      summary: '大規模商業タワープロジェクトがInvoratecAIを使用して調整時間を40%削減した方法',
      client: 'AECOM建設グループ',
      location: '中国・上海',
      duration: '18ヶ月',
      sections: [
        {
          heading: 'プロジェクト概要',
          content: 'AECOMタワーは、オフィススペース、小売エリア、プレミアムアメニティを備えた52階建ての複合用途商業開発です。20万平方メートル以上の建築面積を持つこのプロジェクトは、12の異なるサブコントラクターと複数のエンジニアリング専門分野間の調整を必要としました。'
        },
        {
          heading: '課題',
          content: 'プロジェクトチームは、MEPシステムの複雑さと厳しい建設スケジュールにより、大きな調整課題に直面しました。',
          list: [
            '複数のゾーンと空調機を持つ複雑な機械システム',
            '52フロアにわたる高密度電気配電',
            'オフィスと小売用の複雑な配管システム',
            '正確なルーティングを必要とする狭い階高',
            'スケジュールが競合する複数のサブコントラクター'
          ]
        },
        {
          heading: 'ソリューション',
          content: 'プロジェクトチームは、デスクトップ作業用のRevitアドインとチーム調整用のクラウドプラットフォームを組み合わせた、InvoratecAIのツインプラットフォームアプローチを実装しました。',
          list: [
            '重大度ランキング付きAI駆動干渉検出',
            '全チームのリアルタイムクラウド同期',
            'Revitでの音声制御要素選択と変更',
            '干渉専門分野に基づく自動タスク割り当て',
            '進捗追跡とレポートのための集中ダッシュボード'
          ]
        },
        {
          heading: '実装プロセス',
          content: '実装は6週間で3つのフェーズで完了しました。まず、全チームメンバーがクラウドプラットフォームにオンボーディングされ、Webベースのツールのトレーニングを受けました。次に、BIMチームがRevitアドインをワークフローに統合しました。最後に、明確なエスカレーション手順を持つ自動化された調整ワークフローが確立されました。'
        },
        {
          heading: '結果と影響',
          content: 'InvoratecAIの実装は、プロジェクトの調整プロセスを変革し、すべての主要指標で測定可能な改善をもたらしました。',
          list: [
            '調整会議時間40%削減',
            '調整関連活動のコスト25%削減',
            '建設中に発見された干渉60%減少',
            '調整関連RFI 90%削減',
            'チーム満足度とコラボレーションの向上'
          ]
        }
      ],
      testimonial: {
        quote: 'InvoratecAIは、MEP調整へのアプローチを完全に変えました。AI駆動の干渉検出だけでも数え切れない時間を節約しましたが、真の価値は全員が効果的にコラボレーションできる単一のプラットフォームを持つことでした。',
        author: 'マイケル・チェン',
        role: 'AECOM建設グループBIMマネージャー'
      }
    }
  },
  'hospital-project': {
    en: {
      title: 'Metro General Hospital',
      summary: 'Delivering a complex healthcare facility on time with AI-powered coordination',
      client: 'Metro Healthcare Development',
      location: 'Guangzhou, China',
      duration: '24 months',
      sections: [
        {
          heading: 'Project Overview',
          content: 'Metro General Hospital is a state-of-the-art 800-bed healthcare facility featuring advanced medical equipment, surgical suites, and specialized treatment areas. The project required exceptional precision in MEP coordination to meet strict healthcare regulations and equipment requirements.'
        },
        {
          heading: 'The Challenge',
          content: 'Healthcare facilities present unique coordination challenges due to the critical nature of building systems and strict regulatory requirements.',
          list: [
            'Medical gas systems requiring precise routing and accessibility',
            'Specialized HVAC with strict air quality and pressure requirements',
            'Redundant power systems for life-critical areas',
            'Complex nurse call and patient monitoring infrastructure',
            'Strict infection control zones with isolated air handling'
          ]
        },
        {
          heading: 'The Solution',
          content: 'InvoratecAI was deployed to manage the complex coordination requirements while maintaining compliance with healthcare standards.',
          list: [
            'AI analysis of routing conflicts for medical gas systems',
            'Automated compliance checking against healthcare standards',
            'Real-time collaboration between 8 specialty contractors',
            'Voice-controlled navigation for rapid design reviews',
            'Cloud-based document management with version control'
          ]
        },
        {
          heading: 'Critical System Coordination',
          content: 'The most challenging aspect was coordinating the critical systems that directly impact patient care. InvoratecAI\'s priority-based clash detection ensured that life-safety and medical systems were always given proper clearance and accessibility for future maintenance.'
        },
        {
          heading: 'Results and Impact',
          content: 'The project was delivered on schedule with zero critical system conflicts discovered during commissioning.',
          list: [
            '35% faster coordination cycles compared to similar projects',
            '20% reduction in coordination-related costs',
            'Zero critical clashes in medical gas and HVAC systems',
            '100% compliance with healthcare regulatory requirements',
            'Successful first-time commissioning of all critical systems'
          ]
        }
      ],
      testimonial: {
        quote: 'In healthcare construction, there\'s no room for error in critical systems. InvoratecAI gave us the confidence that our coordination was thorough and that we weren\'t going to discover problems during commissioning.',
        author: 'Dr. Sarah Wong',
        role: 'Project Director, Metro Healthcare Development'
      }
    },
    zh: {
      title: '都会综合医院',
      summary: '通过AI驱动的协调按时交付复杂的医疗设施',
      client: '都会医疗发展集团',
      location: '中国广州',
      duration: '24个月',
      sections: [
        {
          heading: '项目概述',
          content: '都会综合医院是一座拥有800张床位的先进医疗设施，配备先进的医疗设备、手术室和专科治疗区域。该项目需要在MEP协调方面达到卓越的精度，以满足严格的医疗法规和设备要求。'
        },
        {
          heading: '面临的挑战',
          content: '由于建筑系统的关键性质和严格的法规要求，医疗设施面临独特的协调挑战。',
          list: [
            '需要精确布线和可达性的医用气体系统',
            '具有严格空气质量和压力要求的专业暖通空调',
            '生命关键区域的冗余电力系统',
            '复杂的护士呼叫和患者监护基础设施',
            '具有独立空气处理的严格感染控制区域'
          ]
        },
        {
          heading: '解决方案',
          content: 'InvoratecAI被部署用于管理复杂的协调要求，同时保持对医疗标准的合规性。',
          list: [
            '医用气体系统路由冲突的AI分析',
            '针对医疗标准的自动合规性检查',
            '8个专业承包商之间的实时协作',
            '用于快速设计审查的语音控制导航',
            '带版本控制的云端文档管理'
          ]
        },
        {
          heading: '关键系统协调',
          content: '最具挑战性的方面是协调直接影响患者护理的关键系统。InvoratecAI的基于优先级的碰撞检测确保生命安全和医疗系统始终获得适当的间隙和未来维护的可达性。'
        },
        {
          heading: '成果与影响',
          content: '项目按计划交付，调试期间未发现任何关键系统冲突。',
          list: [
            '与类似项目相比，协调周期加快35%',
            '协调相关成本降低20%',
            '医用气体和暖通空调系统零关键碰撞',
            '100%符合医疗法规要求',
            '所有关键系统一次调试成功'
          ]
        }
      ],
      testimonial: {
        quote: '在医疗建筑中，关键系统不容许有任何错误。InvoratecAI让我们相信我们的协调是彻底的，我们不会在调试期间发现问题。',
        author: '黄莎拉博士',
        role: '都会医疗发展集团项目总监'
      }
    },
    ja: {
      title: 'メトロ総合病院',
      summary: 'AI駆動の調整により複雑な医療施設を予定通りに納品',
      client: 'メトロヘルスケア開発',
      location: '中国・広州',
      duration: '24ヶ月',
      sections: [
        {
          heading: 'プロジェクト概要',
          content: 'メトロ総合病院は、先進的な医療機器、手術室、専門治療エリアを備えた最先端の800床の医療施設です。このプロジェクトは、厳格な医療規制と機器要件を満たすために、MEP調整において卓越した精度を必要としました。'
        },
        {
          heading: '課題',
          content: '医療施設は、建物システムの重要性と厳格な規制要件により、独自の調整課題を提示します。',
          list: [
            '正確なルーティングとアクセシビリティを必要とする医療ガスシステム',
            '厳格な空気品質と圧力要件を持つ専門HVAC',
            '生命維持エリアの冗長電源システム',
            '複雑なナースコールと患者モニタリングインフラ',
            '独立した空調を持つ厳格な感染制御ゾーン'
          ]
        },
        {
          heading: 'ソリューション',
          content: 'InvoratecAIは、医療基準へのコンプライアンスを維持しながら、複雑な調整要件を管理するために展開されました。',
          list: [
            '医療ガスシステムのルーティング競合のAI分析',
            '医療基準に対する自動コンプライアンスチェック',
            '8つの専門業者間のリアルタイムコラボレーション',
            '迅速な設計レビューのための音声制御ナビゲーション',
            'バージョン管理付きクラウドベースのドキュメント管理'
          ]
        },
        {
          heading: 'クリティカルシステム調整',
          content: '最も困難な側面は、患者ケアに直接影響するクリティカルシステムの調整でした。InvoratecAIの優先度ベースの干渉検出により、生命安全および医療システムに適切なクリアランスと将来のメンテナンスのためのアクセシビリティが常に確保されました。'
        },
        {
          heading: '結果と影響',
          content: 'プロジェクトは予定通りに納品され、コミッショニング中にクリティカルシステムの競合はゼロでした。',
          list: [
            '類似プロジェクトと比較して調整サイクル35%高速化',
            '調整関連コスト20%削減',
            '医療ガスとHVACシステムでクリティカル干渉ゼロ',
            '医療規制要件100%準拠',
            '全クリティカルシステムの初回コミッショニング成功'
          ]
        }
      ],
      testimonial: {
        quote: '医療建設では、クリティカルシステムにエラーの余地はありません。InvoratecAIは、調整が徹底しており、コミッショニング中に問題を発見することはないという確信を与えてくれました。',
        author: 'サラ・ウォン博士',
        role: 'メトロヘルスケア開発プロジェクトディレクター'
      }
    }
  },
  'metro-station': {
    en: {
      title: 'Downtown Metro Station',
      summary: 'Managing 20+ subcontractors seamlessly with InvoratecAI\'s collaboration platform',
      client: 'City Metro Authority',
      location: 'Shenzhen, China',
      duration: '30 months',
      sections: [
        {
          heading: 'Project Overview',
          content: 'The Downtown Metro Station is a major transit hub serving four metro lines with daily capacity for 500,000 passengers. The underground station spans five levels and integrates with surrounding commercial developments, creating one of the most complex coordination challenges in the region.'
        },
        {
          heading: 'The Challenge',
          content: 'The scale and complexity of the project required coordination across an unprecedented number of stakeholders and systems.',
          list: [
            '20+ subcontractors working in confined underground spaces',
            'Four independent metro line systems with different requirements',
            'Integration with existing infrastructure and utilities',
            'Strict safety requirements for underground construction',
            'Multiple government agencies with approval authority'
          ]
        },
        {
          heading: 'The Solution',
          content: 'InvoratecAI provided a centralized platform that could handle the scale and complexity of the coordination requirements.',
          list: [
            'Enterprise-scale cloud platform supporting 200+ users',
            'Multi-model federation and cross-discipline coordination',
            'Automated workflow routing based on geographic zones',
            'Real-time progress dashboards for all stakeholders',
            'Mobile app access for field coordination'
          ]
        },
        {
          heading: 'Managing Complexity at Scale',
          content: 'The key to success was implementing a zone-based coordination system where each underground level was treated as a separate coordination zone with its own model federation and responsible parties. InvoratecAI\'s automated assignment system ensured that issues were routed to the correct teams without manual intervention.'
        },
        {
          heading: 'Results and Impact',
          content: 'Despite the unprecedented complexity, the project maintained schedule and achieved remarkable coordination efficiency.',
          list: [
            '45% reduction in coordination time vs. comparable projects',
            '30% cost savings on coordination activities',
            '70% fewer field conflicts requiring rework',
            '200+ team members collaborating on single platform',
            'Zero safety incidents related to coordination failures'
          ]
        }
      ],
      testimonial: {
        quote: 'We\'ve built metro stations before, but never with this level of coordination efficiency. InvoratecAI allowed us to manage complexity that would have been impossible with traditional methods.',
        author: 'James Liu',
        role: 'Program Manager, City Metro Authority'
      }
    },
    zh: {
      title: '市中心地铁站',
      summary: '使用InvoratecAI的协作平台无缝管理20多个分包商',
      client: '城市地铁管理局',
      location: '中国深圳',
      duration: '30个月',
      sections: [
        {
          heading: '项目概述',
          content: '市中心地铁站是一个服务四条地铁线路的主要交通枢纽，日容量50万乘客。这座地下车站跨越五层，并与周围的商业开发项目整合，创造了该地区最复杂的协调挑战之一。'
        },
        {
          heading: '面临的挑战',
          content: '项目的规模和复杂性需要在前所未有的利益相关者和系统之间进行协调。',
          list: [
            '20多个分包商在狭小的地下空间工作',
            '四条独立的地铁线路系统，各有不同要求',
            '与现有基础设施和公用设施的整合',
            '地下施工的严格安全要求',
            '多个具有审批权的政府机构'
          ]
        },
        {
          heading: '解决方案',
          content: 'InvoratecAI提供了一个可以处理协调要求的规模和复杂性的集中平台。',
          list: [
            '支持200多用户的企业级云平台',
            '多模型联合和跨专业协调',
            '基于地理区域的自动工作流程路由',
            '所有利益相关者的实时进度仪表板',
            '用于现场协调的移动应用访问'
          ]
        },
        {
          heading: '大规模管理复杂性',
          content: '成功的关键是实施基于区域的协调系统，其中每个地下层都被视为一个单独的协调区域，拥有自己的模型联合和负责方。InvoratecAI的自动分配系统确保问题被路由到正确的团队，无需人工干预。'
        },
        {
          heading: '成果与影响',
          content: '尽管复杂性前所未有，项目保持了进度并实现了卓越的协调效率。',
          list: [
            '与可比项目相比，协调时间减少45%',
            '协调活动成本节省30%',
            '需要返工的现场冲突减少70%',
            '200多名团队成员在单一平台上协作',
            '零协调失败相关的安全事故'
          ]
        }
      ],
      testimonial: {
        quote: '我们以前也建过地铁站，但从未达到这样的协调效率水平。InvoratecAI让我们能够管理用传统方法不可能处理的复杂性。',
        author: '刘建明',
        role: '城市地铁管理局项目经理'
      }
    },
    ja: {
      title: 'ダウンタウン地下鉄駅',
      summary: 'InvoratecAIのコラボレーションプラットフォームで20以上のサブコントラクターをシームレスに管理',
      client: '市地下鉄公社',
      location: '中国・深圳',
      duration: '30ヶ月',
      sections: [
        {
          heading: 'プロジェクト概要',
          content: 'ダウンタウン地下鉄駅は、4つの地下鉄路線を結ぶ主要交通ハブで、1日50万人の乗客を収容できます。この地下駅は5階建てで、周辺の商業開発と統合されており、地域で最も複雑な調整課題の一つとなっています。'
        },
        {
          heading: '課題',
          content: 'プロジェクトの規模と複雑さにより、前例のない数のステークホルダーとシステム間の調整が必要でした。',
          list: [
            '狭い地下空間で作業する20以上のサブコントラクター',
            '異なる要件を持つ4つの独立した地下鉄路線システム',
            '既存のインフラとユーティリティとの統合',
            '地下建設の厳格な安全要件',
            '承認権限を持つ複数の政府機関'
          ]
        },
        {
          heading: 'ソリューション',
          content: 'InvoratecAIは、調整要件の規模と複雑さを処理できる集中プラットフォームを提供しました。',
          list: [
            '200以上のユーザーをサポートするエンタープライズスケールのクラウドプラットフォーム',
            'マルチモデル統合と分野横断調整',
            '地理的ゾーンに基づく自動ワークフロールーティング',
            '全ステークホルダー向けリアルタイム進捗ダッシュボード',
            '現場調整のためのモバイルアプリアクセス'
          ]
        },
        {
          heading: '大規模な複雑性の管理',
          content: '成功の鍵は、各地下階を独自のモデル統合と責任者を持つ個別の調整ゾーンとして扱うゾーンベースの調整システムの実装でした。InvoratecAIの自動割り当てシステムにより、手動介入なしで問題が正しいチームにルーティングされました。'
        },
        {
          heading: '結果と影響',
          content: '前例のない複雑さにもかかわらず、プロジェクトはスケジュールを維持し、驚くべき調整効率を達成しました。',
          list: [
            '同等プロジェクトと比較して調整時間45%削減',
            '調整活動のコスト30%削減',
            '再作業を必要とする現場競合70%減少',
            '200以上のチームメンバーが単一プラットフォームでコラボレーション',
            '調整失敗に関連する安全事故ゼロ'
          ]
        }
      ],
      testimonial: {
        quote: '以前にも地下鉄駅を建設したことはありますが、このレベルの調整効率は初めてです。InvoratecAIにより、従来の方法では不可能だった複雑さを管理できました。',
        author: 'ジェームズ・リュウ',
        role: '市地下鉄公社プログラムマネージャー'
      }
    }
  }
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug]
}

export function getCaseStudyContent(slug: string): CaseStudyContent | undefined {
  return caseStudyContents[slug]
}

export function getAllCaseStudies(): CaseStudy[] {
  return Object.values(caseStudies)
}
