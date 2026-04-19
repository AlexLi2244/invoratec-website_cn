// Activity content data for Activity Center
export interface Activity {
  slug: string
  eventType: 'Webinar' | 'Conference' | 'Workshop'
  date: string
  time: string
  duration: string
  image: string
  location: string
  isOnline: boolean
  speakers: {
    name: string
    role: string
    avatar: string
  }[]
  tags: string[]
}

export interface ActivityContent {
  en: {
    title: string
    description: string
    overview: string
    agenda: {
      time: string
      topic: string
      description?: string
    }[]
    highlights: string[]
    whoShouldAttend: string[]
    registration: {
      status: 'open' | 'closed' | 'coming-soon'
      price: string
      seats?: number
    }
  }
  zh: {
    title: string
    description: string
    overview: string
    agenda: {
      time: string
      topic: string
      description?: string
    }[]
    highlights: string[]
    whoShouldAttend: string[]
    registration: {
      status: 'open' | 'closed' | 'coming-soon'
      price: string
      seats?: number
    }
  }
}

export const activities: Record<string, Activity> = {
  'webinar-ai-construction': {
    slug: 'webinar-ai-construction',
    eventType: 'Webinar',
    date: '2024-12-20',
    time: '14:00 - 15:30',
    duration: '1.5 hours',
    image: '/images/features/ai-assistant.png',
    location: 'Online (Zoom)',
    isOnline: true,
    speakers: [
      {
        name: 'Dr. James Chen',
        role: 'Chief AI Officer, InvoratecAI',
        avatar: '👨‍💼'
      },
      {
        name: 'Sarah Liu',
        role: 'Senior BIM Consultant',
        avatar: '👩‍💻'
      }
    ],
    tags: ['AI', 'Construction', 'BIM', 'Webinar', 'Free']
  },
  'conference-bim-summit': {
    slug: 'conference-bim-summit',
    eventType: 'Conference',
    date: '2024-12-28',
    time: '09:00 - 18:00',
    duration: 'Full Day',
    image: '/images/features/design.png',
    location: 'Shanghai International Convention Center',
    isOnline: false,
    speakers: [
      {
        name: 'Michael Wang',
        role: 'CEO, InvoratecAI',
        avatar: '👨‍💼'
      },
      {
        name: 'Dr. Emily Zhang',
        role: 'Director of Research',
        avatar: '👩‍🔬'
      },
      {
        name: 'David Li',
        role: 'Head of Product',
        avatar: '👨‍💻'
      }
    ],
    tags: ['BIM', 'Conference', 'Networking', 'Innovation', 'Industry']
  },
  'workshop-revit-ai': {
    slug: 'workshop-revit-ai',
    eventType: 'Workshop',
    date: '2025-01-15',
    time: '10:00 - 16:00',
    duration: '6 hours',
    image: '/images/features/web-dashboard.png',
    location: 'InvoratecAI Training Center, Shenzhen',
    isOnline: false,
    speakers: [
      {
        name: 'Kevin Zhou',
        role: 'Lead Training Specialist',
        avatar: '👨‍🏫'
      },
      {
        name: 'Amy Chen',
        role: 'Senior Revit Expert',
        avatar: '👩‍💻'
      }
    ],
    tags: ['Revit', 'Workshop', 'Hands-on', 'Training', 'AI Assistant']
  }
}

export const activityContents: Record<string, ActivityContent> = {
  'webinar-ai-construction': {
    en: {
      title: 'Webinar: AI in Construction 2025',
      description: 'Join our experts for a live discussion on the latest AI trends transforming the construction industry.',
      overview: 'The construction industry is undergoing a digital transformation, and AI is at the forefront of this revolution. In this comprehensive webinar, our experts will explore how artificial intelligence is reshaping design workflows, improving coordination, and driving efficiency across construction projects. Whether you\'re a BIM manager, project coordinator, or construction professional, this session will provide actionable insights you can apply immediately.',
      agenda: [
        {
          time: '14:00 - 14:15',
          topic: 'Welcome & Introduction',
          description: 'Overview of the webinar and introduction to speakers'
        },
        {
          time: '14:15 - 14:45',
          topic: 'The State of AI in Construction',
          description: 'Current trends, adoption rates, and industry benchmarks'
        },
        {
          time: '14:45 - 15:00',
          topic: 'Live Demo: AI-Powered BIM Workflows',
          description: 'Hands-on demonstration of InvoratecAI features'
        },
        {
          time: '15:00 - 15:20',
          topic: 'Case Studies & Success Stories',
          description: 'Real-world examples from leading construction firms'
        },
        {
          time: '15:20 - 15:30',
          topic: 'Q&A Session',
          description: 'Live questions from attendees'
        }
      ],
      highlights: [
        'Learn about the latest AI technologies in BIM and construction',
        'See live demonstrations of voice-controlled Revit workflows',
        'Understand ROI metrics from real implementation case studies',
        'Get practical tips for AI adoption in your organization',
        'Network with industry professionals and experts'
      ],
      whoShouldAttend: [
        'BIM Managers and Coordinators',
        'Project Managers and Directors',
        'Construction Technology Leaders',
        'MEP Engineers and Designers',
        'Anyone interested in construction AI innovation'
      ],
      registration: {
        status: 'open',
        price: 'Free',
        seats: 500
      }
    },
    zh: {
      title: '网络研讨会：2025年建筑AI',
      description: '加入我们的专家，参与关于改变建筑行业最新AI趋势的现场讨论。',
      overview: '建筑行业正在经历数字化转型，AI正处于这场革命的最前沿。在这场全面的网络研讨会中，我们的专家将探讨人工智能如何重塑设计工作流程、改善协调并提高建筑项目的效率。无论您是BIM经理、项目协调员还是建筑专业人士，本次会议都将提供您可以立即应用的可行见解。',
      agenda: [
        {
          time: '14:00 - 14:15',
          topic: '欢迎与介绍',
          description: '网络研讨会概述和演讲者介绍'
        },
        {
          time: '14:15 - 14:45',
          topic: '建筑AI现状',
          description: '当前趋势、采用率和行业基准'
        },
        {
          time: '14:45 - 15:00',
          topic: '现场演示：AI驱动的BIM工作流程',
          description: 'InvoratecAI功能实际演示'
        },
        {
          time: '15:00 - 15:20',
          topic: '案例研究和成功故事',
          description: '来自领先建筑公司的真实案例'
        },
        {
          time: '15:20 - 15:30',
          topic: '问答环节',
          description: '参会者现场提问'
        }
      ],
      highlights: [
        '了解BIM和建筑领域最新的AI技术',
        '观看语音控制Revit工作流程的现场演示',
        '了解真实实施案例的投资回报指标',
        '获取在您组织中采用AI的实用技巧',
        '与行业专业人士和专家建立联系'
      ],
      whoShouldAttend: [
        'BIM经理和协调员',
        '项目经理和总监',
        '建筑技术领导者',
        'MEP工程师和设计师',
        '任何对建筑AI创新感兴趣的人'
      ],
      registration: {
        status: 'open',
        price: '免费',
        seats: 500
      }
    }
  },
  'conference-bim-summit': {
    en: {
      title: 'BIM Summit 2025',
      description: 'Annual conference bringing together BIM professionals to share innovations and best practices.',
      overview: 'The BIM Summit 2025 is the premier annual gathering for Building Information Modeling professionals in Asia. This full-day conference brings together industry leaders, technology innovators, and practitioners to share insights, showcase new technologies, and discuss the future of digital construction. Join over 500 attendees for keynote presentations, panel discussions, live demonstrations, and unparalleled networking opportunities.',
      agenda: [
        {
          time: '09:00 - 09:30',
          topic: 'Registration & Networking Breakfast',
          description: 'Check-in and morning refreshments'
        },
        {
          time: '09:30 - 10:15',
          topic: 'Opening Keynote: The Future of Digital Construction',
          description: 'Vision for the next decade of BIM and AI integration'
        },
        {
          time: '10:15 - 11:00',
          topic: 'Panel: AI Adoption in Major Construction Projects',
          description: 'Leaders from top firms share their experiences'
        },
        {
          time: '11:00 - 11:30',
          topic: 'Coffee Break & Exhibition',
          description: 'Explore vendor booths and demos'
        },
        {
          time: '11:30 - 12:15',
          topic: 'Technical Session: Advanced Coordination Workflows',
          description: 'Deep dive into MEP coordination with AI'
        },
        {
          time: '12:15 - 13:30',
          topic: 'Networking Lunch',
          description: 'Connect with peers and speakers'
        },
        {
          time: '13:30 - 14:15',
          topic: 'Innovation Showcase: New Product Announcements',
          description: 'First look at upcoming InvoratecAI features'
        },
        {
          time: '14:15 - 15:00',
          topic: 'Workshop Tracks (Choose One)',
          description: 'Hands-on sessions in multiple tracks'
        },
        {
          time: '15:00 - 15:30',
          topic: 'Afternoon Break',
          description: 'Refreshments and networking'
        },
        {
          time: '15:30 - 16:30',
          topic: 'Customer Success Stories',
          description: 'Case study presentations from clients'
        },
        {
          time: '16:30 - 17:15',
          topic: 'Closing Keynote: Building Tomorrow Together',
          description: 'Roadmap and community vision'
        },
        {
          time: '17:15 - 18:00',
          topic: 'Networking Reception',
          description: 'Evening cocktails and connections'
        }
      ],
      highlights: [
        'Keynote presentations from industry thought leaders',
        'Hands-on workshop sessions with expert instructors',
        'First look at new InvoratecAI product features',
        'Networking with 500+ BIM professionals',
        'Exhibition hall with leading technology vendors',
        'Certificate of attendance for professional development'
      ],
      whoShouldAttend: [
        'BIM Directors and Managers',
        'Digital Construction Leaders',
        'Technology Decision Makers',
        'Design and Engineering Managers',
        'Construction Executives',
        'Software Vendors and Partners'
      ],
      registration: {
        status: 'open',
        price: '$299 Early Bird / $399 Regular',
        seats: 500
      }
    },
    zh: {
      title: 'BIM峰会2025',
      description: '年度会议，汇聚BIM专业人士分享创新和最佳实践。',
      overview: 'BIM峰会2025是亚洲建筑信息模型专业人士的首要年度盛会。这场全天会议汇集了行业领袖、技术创新者和从业者，分享见解、展示新技术并讨论数字建筑的未来。加入500多名与会者，参加主题演讲、小组讨论、现场演示和无与伦比的交流机会。',
      agenda: [
        {
          time: '09:00 - 09:30',
          topic: '签到与交流早餐',
          description: '签到和早间茶点'
        },
        {
          time: '09:30 - 10:15',
          topic: '开幕主题演讲：数字建筑的未来',
          description: 'BIM和AI集成未来十年的愿景'
        },
        {
          time: '10:15 - 11:00',
          topic: '小组讨论：大型建筑项目中的AI采用',
          description: '顶级公司领导分享他们的经验'
        },
        {
          time: '11:00 - 11:30',
          topic: '茶歇与展览',
          description: '探索供应商展位和演示'
        },
        {
          time: '11:30 - 12:15',
          topic: '技术会议：高级协调工作流程',
          description: '深入探讨AI驱动的MEP协调'
        },
        {
          time: '12:15 - 13:30',
          topic: '交流午餐',
          description: '与同行和演讲者建立联系'
        },
        {
          time: '13:30 - 14:15',
          topic: '创新展示：新产品发布',
          description: '抢先了解即将推出的InvoratecAI功能'
        },
        {
          time: '14:15 - 15:00',
          topic: '工作坊分会场（选择其一）',
          description: '多个分会场的实践操作'
        },
        {
          time: '15:00 - 15:30',
          topic: '下午茶歇',
          description: '茶点和交流'
        },
        {
          time: '15:30 - 16:30',
          topic: '客户成功故事',
          description: '客户案例研究演示'
        },
        {
          time: '16:30 - 17:15',
          topic: '闭幕主题演讲：共建明天',
          description: '路线图和社区愿景'
        },
        {
          time: '17:15 - 18:00',
          topic: '交流酒会',
          description: '晚间鸡尾酒和联络'
        }
      ],
      highlights: [
        '行业思想领袖的主题演讲',
        '由专家讲师主持的实践工作坊',
        '抢先了解InvoratecAI新产品功能',
        '与500多名BIM专业人士交流',
        '汇集领先技术供应商的展览厅',
        '专业发展参会证书'
      ],
      whoShouldAttend: [
        'BIM总监和经理',
        '数字建筑领导者',
        '技术决策者',
        '设计和工程经理',
        '建筑高管',
        '软件供应商和合作伙伴'
      ],
      registration: {
        status: 'open',
        price: '早鸟价299美元 / 标准价399美元',
        seats: 500
      }
    }
  },
  'workshop-revit-ai': {
    en: {
      title: 'Revit AI Workshop',
      description: 'Hands-on workshop to master InvoratecAI\'s Revit add-in features and boost your productivity.',
      overview: 'This intensive hands-on workshop is designed for BIM professionals who want to master the InvoratecAI Revit add-in. Over six hours, you\'ll learn everything from basic voice commands to advanced automation scripts. Each participant will work on their own workstation with a licensed copy of Revit and InvoratecAI, guided by our expert trainers through real-world exercises and projects.',
      agenda: [
        {
          time: '10:00 - 10:30',
          topic: 'Setup & Introduction',
          description: 'Workstation setup and add-in installation'
        },
        {
          time: '10:30 - 11:30',
          topic: 'Module 1: Voice Control Fundamentals',
          description: 'Basic commands, element selection, navigation'
        },
        {
          time: '11:30 - 12:30',
          topic: 'Module 2: Parameter Editing & Automation',
          description: 'Batch operations and smart editing workflows'
        },
        {
          time: '12:30 - 13:30',
          topic: 'Lunch Break',
          description: 'Catered lunch provided'
        },
        {
          time: '13:30 - 14:30',
          topic: 'Module 3: Cloud Integration',
          description: 'Task management and team collaboration features'
        },
        {
          time: '14:30 - 15:30',
          topic: 'Module 4: Custom Scripts & Advanced Features',
          description: 'Python scripting and custom command creation'
        },
        {
          time: '15:30 - 15:45',
          topic: 'Break',
          description: 'Refreshments'
        },
        {
          time: '15:45 - 16:00',
          topic: 'Certification & Wrap-up',
          description: 'Certification test and closing remarks'
        }
      ],
      highlights: [
        'Hands-on training with personal workstation',
        'Small class size (max 20 participants) for personalized attention',
        'Real project exercises with immediate feedback',
        'Take-home exercise files and reference materials',
        'InvoratecAI Certified User certificate upon completion',
        'Lunch and refreshments included'
      ],
      whoShouldAttend: [
        'Revit Users seeking productivity improvements',
        'BIM Coordinators managing large projects',
        'MEP Engineers working with complex models',
        'CAD Managers evaluating AI tools',
        'Anyone wanting to learn AI-assisted design'
      ],
      registration: {
        status: 'open',
        price: '$199 per person',
        seats: 20
      }
    },
    zh: {
      title: 'Revit AI工作坊',
      description: '实践工作坊，掌握InvoratecAI的Revit插件功能，提升您的工作效率。',
      overview: '这个密集的实践工作坊专为希望掌握InvoratecAI Revit插件的BIM专业人士设计。在六小时内，您将学习从基本语音命令到高级自动化脚本的所有内容。每位参与者将在自己的工作站上使用授权的Revit和InvoratecAI副本，由我们的专家培训师通过实际练习和项目指导。',
      agenda: [
        {
          time: '10:00 - 10:30',
          topic: '设置与介绍',
          description: '工作站设置和插件安装'
        },
        {
          time: '10:30 - 11:30',
          topic: '模块1：语音控制基础',
          description: '基本命令、元素选择、导航'
        },
        {
          time: '11:30 - 12:30',
          topic: '模块2：参数编辑与自动化',
          description: '批量操作和智能编辑工作流程'
        },
        {
          time: '12:30 - 13:30',
          topic: '午餐休息',
          description: '提供午餐'
        },
        {
          time: '13:30 - 14:30',
          topic: '模块3：云端集成',
          description: '任务管理和团队协作功能'
        },
        {
          time: '14:30 - 15:30',
          topic: '模块4：自定义脚本与高级功能',
          description: 'Python脚本和自定义命令创建'
        },
        {
          time: '15:30 - 15:45',
          topic: '休息',
          description: '茶点'
        },
        {
          time: '15:45 - 16:00',
          topic: '认证与总结',
          description: '认证测试和结束语'
        }
      ],
      highlights: [
        '配备个人工作站的实践培训',
        '小班制（最多20名参与者）提供个性化关注',
        '真实项目练习并即时获得反馈',
        '可带走的练习文件和参考资料',
        '完成后获得InvoratecAI认证用户证书',
        '包含午餐和茶点'
      ],
      whoShouldAttend: [
        '寻求提高效率的Revit用户',
        '管理大型项目的BIM协调员',
        '处理复杂模型的MEP工程师',
        '评估AI工具的CAD经理',
        '任何想学习AI辅助设计的人'
      ],
      registration: {
        status: 'open',
        price: '每人199美元',
        seats: 20
      }
    }
  }
}

export function getActivity(slug: string): Activity | undefined {
  return activities[slug]
}

export function getActivityContent(slug: string): ActivityContent | undefined {
  return activityContents[slug]
}

export function getAllActivities(): Activity[] {
  return Object.values(activities)
}
