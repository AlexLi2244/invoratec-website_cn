const fs = require('fs');
const path = require('path');

// New translations for all languages
const newTranslations = {
  en: {
    downloadPage: {
      hero: {
        latestVersion: "Latest Version v2.1.0",
        title: "Download InvoratecAI",
        subtitle: "Get the AI-powered BIM add-in for Autodesk Revit",
        trialTitle: "7-Day Free Trial",
        trialSubtitle: "No credit card required, full access"
      },
      cards: {
        recommended: "Recommended",
        supportedVersions: "Supported Revit Versions",
        downloadInstaller: "Download Installer",
        updated: "Updated"
      },
      trial: {
        title: "7-Day Free Trial Period",
        description: "Get 7 days of full access automatically after installation. No credit card required. Experience all premium features including AI Assistant, Clash Detection, Cloud Sync and more. Choose a subscription plan after your trial ends.",
        allFeatures: "All Features",
        noCreditCard: "No Credit Card",
        autoActivation: "Auto Activation"
      },
      olderVersions: {
        title: "Need an older version?",
        link: "View all releases"
      },
      requirements: {
        title: "System Requirements",
        os: "Operating System",
        revitVersion: "Revit Version",
        ram: "RAM",
        diskSpace: "Disk Space",
        internet: "Internet",
        internetRequired: "Required for activation and cloud features"
      },
      guide: {
        title: "Installation Guide",
        step1: { title: "Download the installer", description: "Choose the installer that matches your Revit version and download it" },
        step2: { title: "Close Revit", description: "Make sure all Revit instances are closed before installation" },
        step3: { title: "Run the installer", description: "Double-click the downloaded file and follow the installation wizard" },
        step4: { title: "Launch Revit and sign in", description: "Open Revit and sign in with your account in the InvoratecAI panel" }
      },
      help: {
        title: "Need Help?",
        subtitle: "Check our documentation or contact our support team",
        viewDocs: "View Documentation",
        requestDemo: "Request Demo"
      }
    },
    activityRegistration: {
      breadcrumb: { newMedia: "New Media", register: "Register" },
      hero: { title: "Event Registration" },
      success: {
        title: "Registration Successful!",
        message: "Thank you for registering! A confirmation email has been sent to your inbox.",
        eventDetails: "Event Details",
        event: "Event",
        date: "Date",
        time: "Time",
        location: "Location",
        backToEvent: "Back to Event",
        browseMore: "Browse More Events"
      },
      form: {
        title: "Registration Information",
        fullName: "Full Name",
        fullNamePlaceholder: "Enter your full name",
        email: "Email Address",
        emailPlaceholder: "Enter your email",
        phone: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        company: "Company Name",
        companyPlaceholder: "Company name",
        jobTitle: "Job Title",
        jobTitlePlaceholder: "Job title",
        attendees: "Number of Attendees",
        dietary: "Dietary Restrictions/Allergies",
        dietaryPlaceholder: "Please specify if any",
        howDidYouHear: "How did you hear about this event?",
        howDidYouHearOptions: {
          select: "Please select",
          search: "Search engine",
          social: "Social media",
          colleague: "Colleague referral",
          email: "Email newsletter",
          event: "Other event",
          other: "Other"
        },
        termsAgreement: "I agree to receive event-related email notifications and accept InvoratecAI's Privacy Policy and Terms of Service.",
        termsError: "Please agree to the terms and conditions",
        submitting: "Submitting...",
        submit: "Complete Registration",
        backToEvent: "Back to event details"
      },
      sidebar: { speakers: "Speakers", seatsAvailable: "seats available" },
      help: { title: "Need Help?", description: "Contact our events team if you have any questions." },
      notFound: { title: "Event Not Found", description: "Sorry, we couldn't find the event you're looking for.", backToNewMedia: "Back to New Media" }
    },
    activityDetail: {
      registration: { open: "Open", closed: "Closed", comingSoon: "Coming Soon" },
      sections: {
        overview: "Overview",
        agenda: "Agenda",
        highlights: "Highlights",
        whoShouldAttend: "Who Should Attend",
        speakers: "Speakers",
        registration: "Registration",
        date: "Date",
        time: "Time",
        duration: "Duration",
        format: "Format",
        formatOnline: "Online",
        formatInPerson: "In-Person",
        price: "Price",
        seats: "Seats",
        registerNow: "Register Now",
        confirmationEmail: "Confirmation email will be sent after registration",
        shareEvent: "Share this event",
        moreEvents: "More Events"
      },
      cta: { title: "Have Questions?", subtitle: "Contact us for more event information or partnership opportunities" },
      notFound: { title: "Event Not Found", description: "Sorry, we couldn't find the event you're looking for.", backToNewMedia: "Back to New Media" }
    },
    caseStudyDetail: {
      read: "read",
      projectInfo: { client: "Client", location: "Location", duration: "Duration" },
      stats: { timeSaved: "Time Saved", costReduction: "Cost Reduction", errorReduction: "Error Reduction" },
      share: { title: "Found this helpful? Share this case study" },
      related: { title: "Related Case Studies", timeSaved: "time saved" },
      cta: { title: "Ready to Start Your Success Story?", subtitle: "Learn how InvoratecAI can help your project achieve similar results" },
      notFound: { title: "Case Study Not Found", description: "Sorry, we couldn't find the case study you're looking for.", backToNewMedia: "Back to New Media" }
    },
    blogDetail: {
      read: "read",
      conclusion: "Conclusion",
      share: { title: "Found this helpful? Share this article" },
      related: { title: "Related Articles" },
      notFound: { title: "Article Not Found", description: "Sorry, we couldn't find the article you're looking for.", backToNewMedia: "Back to New Media" }
    },
    common: { backToNewMedia: "Back to New Media" }
  },
  ja: {
    downloadPage: {
      hero: {
        latestVersion: "最新バージョン v2.1.0",
        title: "InvoratecAIをダウンロード",
        subtitle: "Autodesk Revit用のAI搭載BIMアドインを入手",
        trialTitle: "7日間無料トライアル",
        trialSubtitle: "クレジットカード不要、全機能利用可能"
      },
      cards: {
        recommended: "推奨",
        supportedVersions: "対応Revitバージョン",
        downloadInstaller: "インストーラーをダウンロード",
        updated: "更新日"
      },
      trial: {
        title: "7日間無料トライアル期間",
        description: "インストール後、自動的に7日間の全機能アクセスが可能です。クレジットカード不要。AIアシスタント、干渉検出、クラウド同期など、すべてのプレミアム機能をお試しいただけます。トライアル終了後、サブスクリプションプランをお選びください。",
        allFeatures: "全機能",
        noCreditCard: "クレジットカード不要",
        autoActivation: "自動アクティベーション"
      },
      olderVersions: {
        title: "旧バージョンが必要ですか？",
        link: "全リリースを表示"
      },
      requirements: {
        title: "システム要件",
        os: "オペレーティングシステム",
        revitVersion: "Revitバージョン",
        ram: "メモリ",
        diskSpace: "ディスク容量",
        internet: "インターネット",
        internetRequired: "アクティベーションとクラウド機能に必要"
      },
      guide: {
        title: "インストールガイド",
        step1: { title: "インストーラーをダウンロード", description: "お使いのRevitバージョンに合ったインストーラーを選択してダウンロード" },
        step2: { title: "Revitを閉じる", description: "インストール前にすべてのRevitインスタンスを閉じてください" },
        step3: { title: "インストーラーを実行", description: "ダウンロードしたファイルをダブルクリックし、インストールウィザードに従ってください" },
        step4: { title: "Revitを起動してサインイン", description: "Revitを開き、InvoratecAIパネルでアカウントにサインイン" }
      },
      help: {
        title: "ヘルプが必要ですか？",
        subtitle: "ドキュメントを確認するか、サポートチームにお問い合わせください",
        viewDocs: "ドキュメントを見る",
        requestDemo: "デモを依頼"
      }
    },
    activityRegistration: {
      breadcrumb: { newMedia: "ニュースメディア", register: "登録" },
      hero: { title: "イベント登録" },
      success: {
        title: "登録完了！",
        message: "ご登録ありがとうございます！確認メールを送信しました。",
        eventDetails: "イベント詳細",
        event: "イベント",
        date: "日付",
        time: "時間",
        location: "場所",
        backToEvent: "イベントに戻る",
        browseMore: "他のイベントを見る"
      },
      form: {
        title: "登録情報",
        fullName: "氏名",
        fullNamePlaceholder: "氏名を入力",
        email: "メールアドレス",
        emailPlaceholder: "メールアドレスを入力",
        phone: "電話番号",
        phonePlaceholder: "電話番号を入力",
        company: "会社名",
        companyPlaceholder: "会社名",
        jobTitle: "役職",
        jobTitlePlaceholder: "役職",
        attendees: "参加人数",
        dietary: "食事制限・アレルギー",
        dietaryPlaceholder: "ある場合は記入してください",
        howDidYouHear: "このイベントをどのように知りましたか？",
        howDidYouHearOptions: {
          select: "選択してください",
          search: "検索エンジン",
          social: "ソーシャルメディア",
          colleague: "同僚からの紹介",
          email: "メールマガジン",
          event: "他のイベント",
          other: "その他"
        },
        termsAgreement: "イベント関連のメール通知を受け取ること、およびInvoratecAIのプライバシーポリシーと利用規約に同意します。",
        termsError: "利用規約に同意してください",
        submitting: "送信中...",
        submit: "登録を完了",
        backToEvent: "イベント詳細に戻る"
      },
      sidebar: { speakers: "スピーカー", seatsAvailable: "席空き" },
      help: { title: "ヘルプが必要ですか？", description: "ご質問がある場合は、イベントチームにお問い合わせください。" },
      notFound: { title: "イベントが見つかりません", description: "お探しのイベントが見つかりませんでした。", backToNewMedia: "ニュースメディアに戻る" }
    },
    activityDetail: {
      registration: { open: "受付中", closed: "終了", comingSoon: "近日公開" },
      sections: {
        overview: "概要",
        agenda: "アジェンダ",
        highlights: "ハイライト",
        whoShouldAttend: "対象者",
        speakers: "スピーカー",
        registration: "登録",
        date: "日付",
        time: "時間",
        duration: "所要時間",
        format: "形式",
        formatOnline: "オンライン",
        formatInPerson: "対面",
        price: "料金",
        seats: "定員",
        registerNow: "今すぐ登録",
        confirmationEmail: "登録後に確認メールが送信されます",
        shareEvent: "このイベントを共有",
        moreEvents: "他のイベント"
      },
      cta: { title: "ご質問はありますか？", subtitle: "イベント情報やパートナーシップについてお問い合わせください" },
      notFound: { title: "イベントが見つかりません", description: "お探しのイベントが見つかりませんでした。", backToNewMedia: "ニュースメディアに戻る" }
    },
    caseStudyDetail: {
      read: "で読む",
      projectInfo: { client: "クライアント", location: "場所", duration: "期間" },
      stats: { timeSaved: "時間削減", costReduction: "コスト削減", errorReduction: "エラー削減" },
      share: { title: "役に立ちましたか？この事例を共有" },
      related: { title: "関連事例", timeSaved: "時間削減" },
      cta: { title: "あなたの成功事例を始める準備はできていますか？", subtitle: "InvoratecAIがあなたのプロジェクトで同様の成果を達成する方法をご紹介します" },
      notFound: { title: "事例が見つかりません", description: "お探しの事例が見つかりませんでした。", backToNewMedia: "ニュースメディアに戻る" }
    },
    blogDetail: {
      read: "で読む",
      conclusion: "まとめ",
      share: { title: "役に立ちましたか？この記事を共有" },
      related: { title: "関連記事" },
      notFound: { title: "記事が見つかりません", description: "お探しの記事が見つかりませんでした。", backToNewMedia: "ニュースメディアに戻る" }
    },
    common: { backToNewMedia: "ニュースメディアに戻る" }
  },
  zh: {
    downloadPage: {
      hero: {
        latestVersion: "最新版本 v2.1.0",
        title: "下载 InvoratecAI",
        subtitle: "获取适用于 Autodesk Revit 的 AI 驱动 BIM 插件",
        trialTitle: "7天免费试用",
        trialSubtitle: "无需信用卡，全功能体验"
      },
      cards: {
        recommended: "推荐",
        supportedVersions: "支持的Revit版本",
        downloadInstaller: "下载安装包",
        updated: "更新于"
      },
      trial: {
        title: "7天免费试用期",
        description: "下载安装后自动获得7天完整功能试用期，无需绑定信用卡。试用期间可体验所有高级功能，包括AI助手、碰撞检测、云同步等。试用结束后选择适合您的订阅计划继续使用。",
        allFeatures: "全部功能",
        noCreditCard: "无需信用卡",
        autoActivation: "自动激活"
      },
      olderVersions: {
        title: "需要旧版本？",
        link: "查看所有版本"
      },
      requirements: {
        title: "系统要求",
        os: "操作系统",
        revitVersion: "Revit版本",
        ram: "内存",
        diskSpace: "硬盘空间",
        internet: "网络",
        internetRequired: "激活和云功能需要"
      },
      guide: {
        title: "安装指南",
        step1: { title: "下载安装包", description: "选择适合您Revit版本的安装包并下载" },
        step2: { title: "关闭Revit", description: "安装前请确保关闭所有Revit实例" },
        step3: { title: "运行安装程序", description: "双击下载的文件并按照安装向导操作" },
        step4: { title: "启动Revit并登录", description: "打开Revit，在InvoratecAI面板中使用您的账户登录" }
      },
      help: {
        title: "需要帮助？",
        subtitle: "查看我们的文档或联系支持团队",
        viewDocs: "查看文档",
        requestDemo: "申请演示"
      }
    },
    activityRegistration: {
      breadcrumb: { newMedia: "新媒体", register: "报名" },
      hero: { title: "活动报名" },
      success: {
        title: "报名成功！",
        message: "感谢您的报名！我们已向您的邮箱发送了确认邮件，请查收。",
        eventDetails: "活动详情",
        event: "活动",
        date: "日期",
        time: "时间",
        location: "地点",
        backToEvent: "返回活动详情",
        browseMore: "浏览更多活动"
      },
      form: {
        title: "报名信息",
        fullName: "姓名",
        fullNamePlaceholder: "请输入您的姓名",
        email: "电子邮箱",
        emailPlaceholder: "请输入您的邮箱",
        phone: "电话号码",
        phonePlaceholder: "请输入您的电话",
        company: "公司名称",
        companyPlaceholder: "公司名称",
        jobTitle: "职位",
        jobTitlePlaceholder: "职位名称",
        attendees: "参会人数",
        dietary: "饮食限制/过敏",
        dietaryPlaceholder: "如有，请说明",
        howDidYouHear: "您是如何得知本活动的？",
        howDidYouHearOptions: {
          select: "请选择",
          search: "搜索引擎",
          social: "社交媒体",
          colleague: "同事推荐",
          email: "电子邮件",
          event: "其他活动",
          other: "其他"
        },
        termsAgreement: "我同意接收活动相关邮件通知，并同意InvoratecAI的隐私政策和服务条款。",
        termsError: "请同意条款和条件",
        submitting: "提交中...",
        submit: "确认报名",
        backToEvent: "返回活动详情"
      },
      sidebar: { speakers: "演讲嘉宾", seatsAvailable: "名额" },
      help: { title: "需要帮助？", description: "如有任何问题，请联系我们的活动团队。" },
      notFound: { title: "活动未找到", description: "抱歉，我们找不到您要查找的活动。", backToNewMedia: "返回新媒体" }
    },
    activityDetail: {
      registration: { open: "报名中", closed: "已结束", comingSoon: "即将开放" },
      sections: {
        overview: "活动概述",
        agenda: "议程",
        highlights: "活动亮点",
        whoShouldAttend: "适合人群",
        speakers: "演讲嘉宾",
        registration: "报名信息",
        date: "日期",
        time: "时间",
        duration: "时长",
        format: "形式",
        formatOnline: "线上",
        formatInPerson: "线下",
        price: "费用",
        seats: "名额",
        registerNow: "立即报名",
        confirmationEmail: "报名后将收到确认邮件",
        shareEvent: "分享这个活动",
        moreEvents: "更多活动"
      },
      cta: { title: "还有疑问？", subtitle: "联系我们获取更多活动信息或咨询合作机会" },
      notFound: { title: "活动未找到", description: "抱歉，我们找不到您要查找的活动。", backToNewMedia: "返回新媒体" }
    },
    caseStudyDetail: {
      read: "阅读",
      projectInfo: { client: "客户", location: "地点", duration: "工期" },
      stats: { timeSaved: "时间节省", costReduction: "成本节省", errorReduction: "错误减少" },
      share: { title: "觉得有帮助？分享这个案例" },
      related: { title: "相关案例", timeSaved: "时间节省" },
      cta: { title: "准备好开始您的成功故事了吗？", subtitle: "了解InvoratecAI如何帮助您的项目实现类似的成果" },
      notFound: { title: "案例未找到", description: "抱歉，我们找不到您要查找的案例。", backToNewMedia: "返回新媒体" }
    },
    blogDetail: {
      read: "阅读",
      conclusion: "总结",
      share: { title: "觉得有帮助？分享这篇文章" },
      related: { title: "相关文章" },
      notFound: { title: "文章未找到", description: "抱歉，我们找不到您要查找的文章。", backToNewMedia: "返回新媒体" }
    },
    common: { backToNewMedia: "返回新媒体" }
  },
  es: {
    downloadPage: {
      hero: {
        latestVersion: "Última Versión v2.1.0",
        title: "Descargar InvoratecAI",
        subtitle: "Obtén el complemento BIM con IA para Autodesk Revit",
        trialTitle: "Prueba Gratuita de 7 Días",
        trialSubtitle: "Sin tarjeta de crédito, acceso completo"
      },
      cards: {
        recommended: "Recomendado",
        supportedVersions: "Versiones de Revit Compatibles",
        downloadInstaller: "Descargar Instalador",
        updated: "Actualizado"
      },
      trial: {
        title: "Período de Prueba de 7 Días",
        description: "Obtén 7 días de acceso completo automáticamente después de la instalación. Sin tarjeta de crédito. Experimenta todas las funciones premium incluyendo Asistente IA, Detección de Colisiones, Sincronización en la Nube y más.",
        allFeatures: "Todas las Funciones",
        noCreditCard: "Sin Tarjeta de Crédito",
        autoActivation: "Activación Automática"
      },
      olderVersions: { title: "¿Necesitas una versión anterior?", link: "Ver todas las versiones" },
      requirements: {
        title: "Requisitos del Sistema",
        os: "Sistema Operativo",
        revitVersion: "Versión de Revit",
        ram: "RAM",
        diskSpace: "Espacio en Disco",
        internet: "Internet",
        internetRequired: "Requerido para activación y funciones en la nube"
      },
      guide: {
        title: "Guía de Instalación",
        step1: { title: "Descargar el instalador", description: "Elige el instalador que coincida con tu versión de Revit y descárgalo" },
        step2: { title: "Cerrar Revit", description: "Asegúrate de cerrar todas las instancias de Revit antes de la instalación" },
        step3: { title: "Ejecutar el instalador", description: "Haz doble clic en el archivo descargado y sigue el asistente de instalación" },
        step4: { title: "Iniciar Revit e iniciar sesión", description: "Abre Revit e inicia sesión con tu cuenta en el panel de InvoratecAI" }
      },
      help: {
        title: "¿Necesitas Ayuda?",
        subtitle: "Consulta nuestra documentación o contacta a nuestro equipo de soporte",
        viewDocs: "Ver Documentación",
        requestDemo: "Solicitar Demo"
      }
    },
    activityRegistration: {
      breadcrumb: { newMedia: "Nuevos Medios", register: "Registrar" },
      hero: { title: "Registro de Evento" },
      success: {
        title: "¡Registro Exitoso!",
        message: "¡Gracias por registrarte! Se ha enviado un correo de confirmación a tu bandeja de entrada.",
        eventDetails: "Detalles del Evento",
        event: "Evento",
        date: "Fecha",
        time: "Hora",
        location: "Ubicación",
        backToEvent: "Volver al Evento",
        browseMore: "Ver Más Eventos"
      },
      form: {
        title: "Información de Registro",
        fullName: "Nombre Completo",
        fullNamePlaceholder: "Ingresa tu nombre completo",
        email: "Correo Electrónico",
        emailPlaceholder: "Ingresa tu correo",
        phone: "Número de Teléfono",
        phonePlaceholder: "Ingresa tu teléfono",
        company: "Nombre de la Empresa",
        companyPlaceholder: "Nombre de la empresa",
        jobTitle: "Cargo",
        jobTitlePlaceholder: "Cargo",
        attendees: "Número de Asistentes",
        dietary: "Restricciones Dietéticas/Alergias",
        dietaryPlaceholder: "Por favor especifica si hay alguna",
        howDidYouHear: "¿Cómo te enteraste de este evento?",
        howDidYouHearOptions: {
          select: "Por favor selecciona",
          search: "Motor de búsqueda",
          social: "Redes sociales",
          colleague: "Referencia de colega",
          email: "Boletín de correo",
          event: "Otro evento",
          other: "Otro"
        },
        termsAgreement: "Acepto recibir notificaciones por correo relacionadas con el evento y acepto la Política de Privacidad y Términos de Servicio de InvoratecAI.",
        termsError: "Por favor acepta los términos y condiciones",
        submitting: "Enviando...",
        submit: "Completar Registro",
        backToEvent: "Volver a detalles del evento"
      },
      sidebar: { speakers: "Ponentes", seatsAvailable: "lugares disponibles" },
      help: { title: "¿Necesitas Ayuda?", description: "Contacta a nuestro equipo de eventos si tienes alguna pregunta." },
      notFound: { title: "Evento No Encontrado", description: "Lo sentimos, no pudimos encontrar el evento que buscas.", backToNewMedia: "Volver a Nuevos Medios" }
    },
    activityDetail: {
      registration: { open: "Abierto", closed: "Cerrado", comingSoon: "Próximamente" },
      sections: {
        overview: "Resumen",
        agenda: "Agenda",
        highlights: "Destacados",
        whoShouldAttend: "Quién Debería Asistir",
        speakers: "Ponentes",
        registration: "Registro",
        date: "Fecha",
        time: "Hora",
        duration: "Duración",
        format: "Formato",
        formatOnline: "En Línea",
        formatInPerson: "Presencial",
        price: "Precio",
        seats: "Lugares",
        registerNow: "Registrarse Ahora",
        confirmationEmail: "Se enviará correo de confirmación después del registro",
        shareEvent: "Compartir este evento",
        moreEvents: "Más Eventos"
      },
      cta: { title: "¿Tienes Preguntas?", subtitle: "Contáctanos para más información del evento o oportunidades de colaboración" },
      notFound: { title: "Evento No Encontrado", description: "Lo sentimos, no pudimos encontrar el evento que buscas.", backToNewMedia: "Volver a Nuevos Medios" }
    },
    caseStudyDetail: {
      read: "lectura",
      projectInfo: { client: "Cliente", location: "Ubicación", duration: "Duración" },
      stats: { timeSaved: "Tiempo Ahorrado", costReduction: "Reducción de Costos", errorReduction: "Reducción de Errores" },
      share: { title: "¿Te resultó útil? Comparte este caso de estudio" },
      related: { title: "Casos de Estudio Relacionados", timeSaved: "tiempo ahorrado" },
      cta: { title: "¿Listo para Comenzar tu Historia de Éxito?", subtitle: "Descubre cómo InvoratecAI puede ayudar a tu proyecto a lograr resultados similares" },
      notFound: { title: "Caso de Estudio No Encontrado", description: "Lo sentimos, no pudimos encontrar el caso de estudio que buscas.", backToNewMedia: "Volver a Nuevos Medios" }
    },
    blogDetail: {
      read: "lectura",
      conclusion: "Conclusión",
      share: { title: "¿Te resultó útil? Comparte este artículo" },
      related: { title: "Artículos Relacionados" },
      notFound: { title: "Artículo No Encontrado", description: "Lo sentimos, no pudimos encontrar el artículo que buscas.", backToNewMedia: "Volver a Nuevos Medios" }
    },
    common: { backToNewMedia: "Volver a Nuevos Medios" }
  },
  fr: {
    downloadPage: {
      hero: {
        latestVersion: "Dernière Version v2.1.0",
        title: "Télécharger InvoratecAI",
        subtitle: "Obtenez le complément BIM alimenté par l'IA pour Autodesk Revit",
        trialTitle: "Essai Gratuit de 7 Jours",
        trialSubtitle: "Sans carte de crédit, accès complet"
      },
      cards: {
        recommended: "Recommandé",
        supportedVersions: "Versions Revit Prises en Charge",
        downloadInstaller: "Télécharger l'Installateur",
        updated: "Mis à jour"
      },
      trial: {
        title: "Période d'Essai de 7 Jours",
        description: "Obtenez 7 jours d'accès complet automatiquement après l'installation. Sans carte de crédit. Découvrez toutes les fonctionnalités premium incluant l'Assistant IA, la Détection de Collisions, la Synchronisation Cloud et plus encore.",
        allFeatures: "Toutes les Fonctionnalités",
        noCreditCard: "Sans Carte de Crédit",
        autoActivation: "Activation Automatique"
      },
      olderVersions: { title: "Besoin d'une version antérieure ?", link: "Voir toutes les versions" },
      requirements: {
        title: "Configuration Requise",
        os: "Système d'Exploitation",
        revitVersion: "Version Revit",
        ram: "RAM",
        diskSpace: "Espace Disque",
        internet: "Internet",
        internetRequired: "Requis pour l'activation et les fonctionnalités cloud"
      },
      guide: {
        title: "Guide d'Installation",
        step1: { title: "Télécharger l'installateur", description: "Choisissez l'installateur correspondant à votre version de Revit et téléchargez-le" },
        step2: { title: "Fermer Revit", description: "Assurez-vous de fermer toutes les instances de Revit avant l'installation" },
        step3: { title: "Exécuter l'installateur", description: "Double-cliquez sur le fichier téléchargé et suivez l'assistant d'installation" },
        step4: { title: "Lancer Revit et se connecter", description: "Ouvrez Revit et connectez-vous avec votre compte dans le panneau InvoratecAI" }
      },
      help: {
        title: "Besoin d'Aide ?",
        subtitle: "Consultez notre documentation ou contactez notre équipe de support",
        viewDocs: "Voir la Documentation",
        requestDemo: "Demander une Démo"
      }
    },
    activityRegistration: {
      breadcrumb: { newMedia: "Nouveaux Médias", register: "S'inscrire" },
      hero: { title: "Inscription à l'Événement" },
      success: {
        title: "Inscription Réussie !",
        message: "Merci pour votre inscription ! Un email de confirmation a été envoyé.",
        eventDetails: "Détails de l'Événement",
        event: "Événement",
        date: "Date",
        time: "Heure",
        location: "Lieu",
        backToEvent: "Retour à l'Événement",
        browseMore: "Voir Plus d'Événements"
      },
      form: {
        title: "Informations d'Inscription",
        fullName: "Nom Complet",
        fullNamePlaceholder: "Entrez votre nom complet",
        email: "Adresse Email",
        emailPlaceholder: "Entrez votre email",
        phone: "Numéro de Téléphone",
        phonePlaceholder: "Entrez votre numéro",
        company: "Nom de l'Entreprise",
        companyPlaceholder: "Nom de l'entreprise",
        jobTitle: "Titre du Poste",
        jobTitlePlaceholder: "Titre du poste",
        attendees: "Nombre de Participants",
        dietary: "Restrictions Alimentaires/Allergies",
        dietaryPlaceholder: "Veuillez préciser le cas échéant",
        howDidYouHear: "Comment avez-vous entendu parler de cet événement ?",
        howDidYouHearOptions: {
          select: "Veuillez sélectionner",
          search: "Moteur de recherche",
          social: "Réseaux sociaux",
          colleague: "Recommandation d'un collègue",
          email: "Newsletter",
          event: "Autre événement",
          other: "Autre"
        },
        termsAgreement: "J'accepte de recevoir des notifications par email relatives à l'événement et j'accepte la Politique de Confidentialité et les Conditions d'Utilisation d'InvoratecAI.",
        termsError: "Veuillez accepter les termes et conditions",
        submitting: "Envoi en cours...",
        submit: "Terminer l'Inscription",
        backToEvent: "Retour aux détails de l'événement"
      },
      sidebar: { speakers: "Intervenants", seatsAvailable: "places disponibles" },
      help: { title: "Besoin d'Aide ?", description: "Contactez notre équipe événementielle si vous avez des questions." },
      notFound: { title: "Événement Non Trouvé", description: "Désolé, nous n'avons pas pu trouver l'événement que vous recherchez.", backToNewMedia: "Retour aux Nouveaux Médias" }
    },
    activityDetail: {
      registration: { open: "Ouvert", closed: "Fermé", comingSoon: "Bientôt" },
      sections: {
        overview: "Aperçu",
        agenda: "Programme",
        highlights: "Points Forts",
        whoShouldAttend: "Public Cible",
        speakers: "Intervenants",
        registration: "Inscription",
        date: "Date",
        time: "Heure",
        duration: "Durée",
        format: "Format",
        formatOnline: "En Ligne",
        formatInPerson: "En Personne",
        price: "Prix",
        seats: "Places",
        registerNow: "S'inscrire Maintenant",
        confirmationEmail: "Un email de confirmation sera envoyé après l'inscription",
        shareEvent: "Partager cet événement",
        moreEvents: "Plus d'Événements"
      },
      cta: { title: "Des Questions ?", subtitle: "Contactez-nous pour plus d'informations sur l'événement ou les opportunités de partenariat" },
      notFound: { title: "Événement Non Trouvé", description: "Désolé, nous n'avons pas pu trouver l'événement que vous recherchez.", backToNewMedia: "Retour aux Nouveaux Médias" }
    },
    caseStudyDetail: {
      read: "lecture",
      projectInfo: { client: "Client", location: "Emplacement", duration: "Durée" },
      stats: { timeSaved: "Temps Économisé", costReduction: "Réduction des Coûts", errorReduction: "Réduction des Erreurs" },
      share: { title: "Utile ? Partagez cette étude de cas" },
      related: { title: "Études de Cas Connexes", timeSaved: "temps économisé" },
      cta: { title: "Prêt à Commencer Votre Succès ?", subtitle: "Découvrez comment InvoratecAI peut aider votre projet à obtenir des résultats similaires" },
      notFound: { title: "Étude de Cas Non Trouvée", description: "Désolé, nous n'avons pas pu trouver l'étude de cas que vous recherchez.", backToNewMedia: "Retour aux Nouveaux Médias" }
    },
    blogDetail: {
      read: "lecture",
      conclusion: "Conclusion",
      share: { title: "Utile ? Partagez cet article" },
      related: { title: "Articles Connexes" },
      notFound: { title: "Article Non Trouvé", description: "Désolé, nous n'avons pas pu trouver l'article que vous recherchez.", backToNewMedia: "Retour aux Nouveaux Médias" }
    },
    common: { backToNewMedia: "Retour aux Nouveaux Médias" }
  },
  de: {
    downloadPage: {
      hero: {
        latestVersion: "Neueste Version v2.1.0",
        title: "InvoratecAI Herunterladen",
        subtitle: "Holen Sie sich das KI-gestützte BIM-Add-in für Autodesk Revit",
        trialTitle: "7-Tage Kostenlose Testversion",
        trialSubtitle: "Keine Kreditkarte erforderlich, voller Zugang"
      },
      cards: {
        recommended: "Empfohlen",
        supportedVersions: "Unterstützte Revit-Versionen",
        downloadInstaller: "Installer Herunterladen",
        updated: "Aktualisiert"
      },
      trial: {
        title: "7-Tage Kostenlose Testphase",
        description: "Erhalten Sie nach der Installation automatisch 7 Tage vollen Zugang. Keine Kreditkarte erforderlich. Erleben Sie alle Premium-Funktionen einschließlich KI-Assistent, Kollisionserkennung, Cloud-Synchronisation und mehr.",
        allFeatures: "Alle Funktionen",
        noCreditCard: "Keine Kreditkarte",
        autoActivation: "Automatische Aktivierung"
      },
      olderVersions: { title: "Ältere Version benötigt?", link: "Alle Versionen anzeigen" },
      requirements: {
        title: "Systemanforderungen",
        os: "Betriebssystem",
        revitVersion: "Revit-Version",
        ram: "RAM",
        diskSpace: "Festplattenspeicher",
        internet: "Internet",
        internetRequired: "Erforderlich für Aktivierung und Cloud-Funktionen"
      },
      guide: {
        title: "Installationsanleitung",
        step1: { title: "Installer herunterladen", description: "Wählen Sie den Installer für Ihre Revit-Version und laden Sie ihn herunter" },
        step2: { title: "Revit schließen", description: "Stellen Sie sicher, dass alle Revit-Instanzen vor der Installation geschlossen sind" },
        step3: { title: "Installer ausführen", description: "Doppelklicken Sie auf die heruntergeladene Datei und folgen Sie dem Installationsassistenten" },
        step4: { title: "Revit starten und anmelden", description: "Öffnen Sie Revit und melden Sie sich im InvoratecAI-Panel mit Ihrem Konto an" }
      },
      help: {
        title: "Hilfe benötigt?",
        subtitle: "Sehen Sie sich unsere Dokumentation an oder kontaktieren Sie unser Support-Team",
        viewDocs: "Dokumentation Anzeigen",
        requestDemo: "Demo Anfordern"
      }
    },
    activityRegistration: {
      breadcrumb: { newMedia: "Neue Medien", register: "Registrieren" },
      hero: { title: "Event-Registrierung" },
      success: {
        title: "Registrierung Erfolgreich!",
        message: "Vielen Dank für Ihre Registrierung! Eine Bestätigungs-E-Mail wurde gesendet.",
        eventDetails: "Event-Details",
        event: "Event",
        date: "Datum",
        time: "Uhrzeit",
        location: "Ort",
        backToEvent: "Zurück zum Event",
        browseMore: "Weitere Events Ansehen"
      },
      form: {
        title: "Registrierungsinformationen",
        fullName: "Vollständiger Name",
        fullNamePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
        email: "E-Mail-Adresse",
        emailPlaceholder: "Geben Sie Ihre E-Mail ein",
        phone: "Telefonnummer",
        phonePlaceholder: "Geben Sie Ihre Telefonnummer ein",
        company: "Firmenname",
        companyPlaceholder: "Firmenname",
        jobTitle: "Berufsbezeichnung",
        jobTitlePlaceholder: "Berufsbezeichnung",
        attendees: "Anzahl der Teilnehmer",
        dietary: "Ernährungseinschränkungen/Allergien",
        dietaryPlaceholder: "Bitte angeben, falls vorhanden",
        howDidYouHear: "Wie haben Sie von diesem Event erfahren?",
        howDidYouHearOptions: {
          select: "Bitte auswählen",
          search: "Suchmaschine",
          social: "Soziale Medien",
          colleague: "Kollegenempfehlung",
          email: "E-Mail-Newsletter",
          event: "Anderes Event",
          other: "Sonstiges"
        },
        termsAgreement: "Ich stimme zu, event-bezogene E-Mail-Benachrichtigungen zu erhalten und akzeptiere die Datenschutzrichtlinie und Nutzungsbedingungen von InvoratecAI.",
        termsError: "Bitte akzeptieren Sie die Geschäftsbedingungen",
        submitting: "Wird gesendet...",
        submit: "Registrierung Abschließen",
        backToEvent: "Zurück zu Event-Details"
      },
      sidebar: { speakers: "Referenten", seatsAvailable: "Plätze verfügbar" },
      help: { title: "Hilfe benötigt?", description: "Kontaktieren Sie unser Event-Team bei Fragen." },
      notFound: { title: "Event Nicht Gefunden", description: "Entschuldigung, wir konnten das gesuchte Event nicht finden.", backToNewMedia: "Zurück zu Neue Medien" }
    },
    activityDetail: {
      registration: { open: "Offen", closed: "Geschlossen", comingSoon: "Demnächst" },
      sections: {
        overview: "Übersicht",
        agenda: "Agenda",
        highlights: "Highlights",
        whoShouldAttend: "Zielgruppe",
        speakers: "Referenten",
        registration: "Registrierung",
        date: "Datum",
        time: "Uhrzeit",
        duration: "Dauer",
        format: "Format",
        formatOnline: "Online",
        formatInPerson: "Vor Ort",
        price: "Preis",
        seats: "Plätze",
        registerNow: "Jetzt Registrieren",
        confirmationEmail: "Bestätigungs-E-Mail wird nach der Registrierung gesendet",
        shareEvent: "Dieses Event teilen",
        moreEvents: "Weitere Events"
      },
      cta: { title: "Fragen?", subtitle: "Kontaktieren Sie uns für weitere Event-Informationen oder Partnerschaftsmöglichkeiten" },
      notFound: { title: "Event Nicht Gefunden", description: "Entschuldigung, wir konnten das gesuchte Event nicht finden.", backToNewMedia: "Zurück zu Neue Medien" }
    },
    caseStudyDetail: {
      read: "lesen",
      projectInfo: { client: "Kunde", location: "Standort", duration: "Dauer" },
      stats: { timeSaved: "Zeitersparnis", costReduction: "Kostenreduzierung", errorReduction: "Fehlerreduzierung" },
      share: { title: "Hilfreich? Teilen Sie diese Fallstudie" },
      related: { title: "Verwandte Fallstudien", timeSaved: "Zeitersparnis" },
      cta: { title: "Bereit für Ihre Erfolgsgeschichte?", subtitle: "Erfahren Sie, wie InvoratecAI Ihrem Projekt zu ähnlichen Ergebnissen verhelfen kann" },
      notFound: { title: "Fallstudie Nicht Gefunden", description: "Entschuldigung, wir konnten die gesuchte Fallstudie nicht finden.", backToNewMedia: "Zurück zu Neue Medien" }
    },
    blogDetail: {
      read: "lesen",
      conclusion: "Fazit",
      share: { title: "Hilfreich? Teilen Sie diesen Artikel" },
      related: { title: "Verwandte Artikel" },
      notFound: { title: "Artikel Nicht Gefunden", description: "Entschuldigung, wir konnten den gesuchten Artikel nicht finden.", backToNewMedia: "Zurück zu Neue Medien" }
    },
    common: { backToNewMedia: "Zurück zu Neue Medien" }
  },
  ko: {
    downloadPage: {
      hero: {
        latestVersion: "최신 버전 v2.1.0",
        title: "InvoratecAI 다운로드",
        subtitle: "Autodesk Revit용 AI 기반 BIM 애드인을 받으세요",
        trialTitle: "7일 무료 체험",
        trialSubtitle: "신용카드 불필요, 전체 기능 이용"
      },
      cards: {
        recommended: "추천",
        supportedVersions: "지원되는 Revit 버전",
        downloadInstaller: "설치 프로그램 다운로드",
        updated: "업데이트됨"
      },
      trial: {
        title: "7일 무료 체험 기간",
        description: "설치 후 자동으로 7일간 전체 기능을 이용할 수 있습니다. 신용카드가 필요 없습니다. AI 어시스턴트, 충돌 감지, 클라우드 동기화 등 모든 프리미엄 기능을 경험하세요.",
        allFeatures: "모든 기능",
        noCreditCard: "신용카드 불필요",
        autoActivation: "자동 활성화"
      },
      olderVersions: { title: "이전 버전이 필요하신가요?", link: "모든 릴리스 보기" },
      requirements: {
        title: "시스템 요구 사항",
        os: "운영 체제",
        revitVersion: "Revit 버전",
        ram: "RAM",
        diskSpace: "디스크 공간",
        internet: "인터넷",
        internetRequired: "활성화 및 클라우드 기능에 필요"
      },
      guide: {
        title: "설치 가이드",
        step1: { title: "설치 프로그램 다운로드", description: "Revit 버전에 맞는 설치 프로그램을 선택하고 다운로드하세요" },
        step2: { title: "Revit 닫기", description: "설치 전 모든 Revit 인스턴스를 닫으세요" },
        step3: { title: "설치 프로그램 실행", description: "다운로드한 파일을 더블클릭하고 설치 마법사를 따르세요" },
        step4: { title: "Revit 시작 및 로그인", description: "Revit을 열고 InvoratecAI 패널에서 계정으로 로그인하세요" }
      },
      help: {
        title: "도움이 필요하신가요?",
        subtitle: "문서를 확인하거나 지원팀에 문의하세요",
        viewDocs: "문서 보기",
        requestDemo: "데모 요청"
      }
    },
    activityRegistration: {
      breadcrumb: { newMedia: "뉴미디어", register: "등록" },
      hero: { title: "이벤트 등록" },
      success: {
        title: "등록 완료!",
        message: "등록해 주셔서 감사합니다! 확인 이메일이 발송되었습니다.",
        eventDetails: "이벤트 세부 정보",
        event: "이벤트",
        date: "날짜",
        time: "시간",
        location: "장소",
        backToEvent: "이벤트로 돌아가기",
        browseMore: "더 많은 이벤트 보기"
      },
      form: {
        title: "등록 정보",
        fullName: "성명",
        fullNamePlaceholder: "성명을 입력하세요",
        email: "이메일 주소",
        emailPlaceholder: "이메일을 입력하세요",
        phone: "전화번호",
        phonePlaceholder: "전화번호를 입력하세요",
        company: "회사명",
        companyPlaceholder: "회사명",
        jobTitle: "직책",
        jobTitlePlaceholder: "직책",
        attendees: "참석자 수",
        dietary: "식이 제한/알레르기",
        dietaryPlaceholder: "해당 사항이 있으면 명시해 주세요",
        howDidYouHear: "이 이벤트를 어떻게 알게 되셨나요?",
        howDidYouHearOptions: {
          select: "선택해 주세요",
          search: "검색 엔진",
          social: "소셜 미디어",
          colleague: "동료 추천",
          email: "이메일 뉴스레터",
          event: "다른 이벤트",
          other: "기타"
        },
        termsAgreement: "이벤트 관련 이메일 알림 수신에 동의하며, InvoratecAI의 개인정보 보호정책 및 서비스 약관에 동의합니다.",
        termsError: "약관에 동의해 주세요",
        submitting: "제출 중...",
        submit: "등록 완료",
        backToEvent: "이벤트 세부 정보로 돌아가기"
      },
      sidebar: { speakers: "발표자", seatsAvailable: "석 남음" },
      help: { title: "도움이 필요하신가요?", description: "질문이 있으시면 이벤트팀에 문의하세요." },
      notFound: { title: "이벤트를 찾을 수 없음", description: "죄송합니다. 찾으시는 이벤트를 찾을 수 없습니다.", backToNewMedia: "뉴미디어로 돌아가기" }
    },
    activityDetail: {
      registration: { open: "오픈", closed: "마감", comingSoon: "곧 오픈" },
      sections: {
        overview: "개요",
        agenda: "일정",
        highlights: "하이라이트",
        whoShouldAttend: "참석 대상",
        speakers: "발표자",
        registration: "등록",
        date: "날짜",
        time: "시간",
        duration: "소요 시간",
        format: "형식",
        formatOnline: "온라인",
        formatInPerson: "오프라인",
        price: "가격",
        seats: "좌석",
        registerNow: "지금 등록",
        confirmationEmail: "등록 후 확인 이메일이 발송됩니다",
        shareEvent: "이 이벤트 공유",
        moreEvents: "더 많은 이벤트"
      },
      cta: { title: "질문이 있으신가요?", subtitle: "이벤트 정보나 파트너십 기회에 대해 문의하세요" },
      notFound: { title: "이벤트를 찾을 수 없음", description: "죄송합니다. 찾으시는 이벤트를 찾을 수 없습니다.", backToNewMedia: "뉴미디어로 돌아가기" }
    },
    caseStudyDetail: {
      read: "읽기",
      projectInfo: { client: "고객", location: "위치", duration: "기간" },
      stats: { timeSaved: "시간 절감", costReduction: "비용 절감", errorReduction: "오류 감소" },
      share: { title: "도움이 되셨나요? 이 사례 연구를 공유하세요" },
      related: { title: "관련 사례 연구", timeSaved: "시간 절감" },
      cta: { title: "성공 스토리를 시작할 준비가 되셨나요?", subtitle: "InvoratecAI가 프로젝트에서 유사한 결과를 달성하는 데 어떻게 도움이 되는지 알아보세요" },
      notFound: { title: "사례 연구를 찾을 수 없음", description: "죄송합니다. 찾으시는 사례 연구를 찾을 수 없습니다.", backToNewMedia: "뉴미디어로 돌아가기" }
    },
    blogDetail: {
      read: "읽기",
      conclusion: "결론",
      share: { title: "도움이 되셨나요? 이 글을 공유하세요" },
      related: { title: "관련 글" },
      notFound: { title: "글을 찾을 수 없음", description: "죄송합니다. 찾으시는 글을 찾을 수 없습니다.", backToNewMedia: "뉴미디어로 돌아가기" }
    },
    common: { backToNewMedia: "뉴미디어로 돌아가기" }
  },
  pt: {
    downloadPage: {
      hero: {
        latestVersion: "Versão Mais Recente v2.1.0",
        title: "Baixar InvoratecAI",
        subtitle: "Obtenha o complemento BIM com IA para Autodesk Revit",
        trialTitle: "Teste Gratuito de 7 Dias",
        trialSubtitle: "Sem cartão de crédito, acesso completo"
      },
      cards: {
        recommended: "Recomendado",
        supportedVersions: "Versões do Revit Suportadas",
        downloadInstaller: "Baixar Instalador",
        updated: "Atualizado"
      },
      trial: {
        title: "Período de Teste de 7 Dias",
        description: "Obtenha 7 dias de acesso completo automaticamente após a instalação. Sem cartão de crédito. Experimente todos os recursos premium, incluindo Assistente IA, Detecção de Colisões, Sincronização em Nuvem e mais.",
        allFeatures: "Todos os Recursos",
        noCreditCard: "Sem Cartão de Crédito",
        autoActivation: "Ativação Automática"
      },
      olderVersions: { title: "Precisa de uma versão anterior?", link: "Ver todas as versões" },
      requirements: {
        title: "Requisitos do Sistema",
        os: "Sistema Operacional",
        revitVersion: "Versão do Revit",
        ram: "RAM",
        diskSpace: "Espaço em Disco",
        internet: "Internet",
        internetRequired: "Necessário para ativação e recursos em nuvem"
      },
      guide: {
        title: "Guia de Instalação",
        step1: { title: "Baixar o instalador", description: "Escolha o instalador correspondente à sua versão do Revit e baixe-o" },
        step2: { title: "Fechar o Revit", description: "Certifique-se de fechar todas as instâncias do Revit antes da instalação" },
        step3: { title: "Executar o instalador", description: "Clique duas vezes no arquivo baixado e siga o assistente de instalação" },
        step4: { title: "Iniciar o Revit e fazer login", description: "Abra o Revit e faça login com sua conta no painel InvoratecAI" }
      },
      help: {
        title: "Precisa de Ajuda?",
        subtitle: "Consulte nossa documentação ou entre em contato com nossa equipe de suporte",
        viewDocs: "Ver Documentação",
        requestDemo: "Solicitar Demo"
      }
    },
    activityRegistration: {
      breadcrumb: { newMedia: "Novas Mídias", register: "Registrar" },
      hero: { title: "Registro de Evento" },
      success: {
        title: "Registro Bem-sucedido!",
        message: "Obrigado por se registrar! Um email de confirmação foi enviado.",
        eventDetails: "Detalhes do Evento",
        event: "Evento",
        date: "Data",
        time: "Hora",
        location: "Local",
        backToEvent: "Voltar ao Evento",
        browseMore: "Ver Mais Eventos"
      },
      form: {
        title: "Informações de Registro",
        fullName: "Nome Completo",
        fullNamePlaceholder: "Digite seu nome completo",
        email: "Endereço de Email",
        emailPlaceholder: "Digite seu email",
        phone: "Número de Telefone",
        phonePlaceholder: "Digite seu telefone",
        company: "Nome da Empresa",
        companyPlaceholder: "Nome da empresa",
        jobTitle: "Cargo",
        jobTitlePlaceholder: "Cargo",
        attendees: "Número de Participantes",
        dietary: "Restrições Alimentares/Alergias",
        dietaryPlaceholder: "Por favor especifique se houver",
        howDidYouHear: "Como você soube deste evento?",
        howDidYouHearOptions: {
          select: "Por favor selecione",
          search: "Motor de busca",
          social: "Redes sociais",
          colleague: "Indicação de colega",
          email: "Newsletter",
          event: "Outro evento",
          other: "Outro"
        },
        termsAgreement: "Concordo em receber notificações por email relacionadas ao evento e aceito a Política de Privacidade e Termos de Serviço da InvoratecAI.",
        termsError: "Por favor aceite os termos e condições",
        submitting: "Enviando...",
        submit: "Completar Registro",
        backToEvent: "Voltar aos detalhes do evento"
      },
      sidebar: { speakers: "Palestrantes", seatsAvailable: "vagas disponíveis" },
      help: { title: "Precisa de Ajuda?", description: "Entre em contato com nossa equipe de eventos se tiver dúvidas." },
      notFound: { title: "Evento Não Encontrado", description: "Desculpe, não conseguimos encontrar o evento que você está procurando.", backToNewMedia: "Voltar às Novas Mídias" }
    },
    activityDetail: {
      registration: { open: "Aberto", closed: "Fechado", comingSoon: "Em Breve" },
      sections: {
        overview: "Visão Geral",
        agenda: "Agenda",
        highlights: "Destaques",
        whoShouldAttend: "Público-alvo",
        speakers: "Palestrantes",
        registration: "Registro",
        date: "Data",
        time: "Hora",
        duration: "Duração",
        format: "Formato",
        formatOnline: "Online",
        formatInPerson: "Presencial",
        price: "Preço",
        seats: "Vagas",
        registerNow: "Registrar Agora",
        confirmationEmail: "Email de confirmação será enviado após o registro",
        shareEvent: "Compartilhar este evento",
        moreEvents: "Mais Eventos"
      },
      cta: { title: "Tem Perguntas?", subtitle: "Entre em contato para mais informações sobre o evento ou oportunidades de parceria" },
      notFound: { title: "Evento Não Encontrado", description: "Desculpe, não conseguimos encontrar o evento que você está procurando.", backToNewMedia: "Voltar às Novas Mídias" }
    },
    caseStudyDetail: {
      read: "leitura",
      projectInfo: { client: "Cliente", location: "Local", duration: "Duração" },
      stats: { timeSaved: "Tempo Economizado", costReduction: "Redução de Custos", errorReduction: "Redução de Erros" },
      share: { title: "Achou útil? Compartilhe este estudo de caso" },
      related: { title: "Estudos de Caso Relacionados", timeSaved: "tempo economizado" },
      cta: { title: "Pronto para Começar Sua História de Sucesso?", subtitle: "Saiba como a InvoratecAI pode ajudar seu projeto a alcançar resultados semelhantes" },
      notFound: { title: "Estudo de Caso Não Encontrado", description: "Desculpe, não conseguimos encontrar o estudo de caso que você está procurando.", backToNewMedia: "Voltar às Novas Mídias" }
    },
    blogDetail: {
      read: "leitura",
      conclusion: "Conclusão",
      share: { title: "Achou útil? Compartilhe este artigo" },
      related: { title: "Artigos Relacionados" },
      notFound: { title: "Artigo Não Encontrado", description: "Desculpe, não conseguimos encontrar o artigo que você está procurando.", backToNewMedia: "Voltar às Novas Mídias" }
    },
    common: { backToNewMedia: "Voltar às Novas Mídias" }
  },
  ar: {
    downloadPage: {
      hero: {
        latestVersion: "أحدث إصدار v2.1.0",
        title: "تحميل InvoratecAI",
        subtitle: "احصل على إضافة BIM المدعومة بالذكاء الاصطناعي لـ Autodesk Revit",
        trialTitle: "تجربة مجانية لمدة 7 أيام",
        trialSubtitle: "بدون بطاقة ائتمان، وصول كامل"
      },
      cards: {
        recommended: "موصى به",
        supportedVersions: "إصدارات Revit المدعومة",
        downloadInstaller: "تحميل المثبت",
        updated: "محدث"
      },
      trial: {
        title: "فترة تجريبية مجانية لمدة 7 أيام",
        description: "احصل على 7 أيام من الوصول الكامل تلقائيًا بعد التثبيت. بدون بطاقة ائتمان. جرب جميع الميزات المميزة بما في ذلك مساعد الذكاء الاصطناعي، كشف التصادم، المزامنة السحابية والمزيد.",
        allFeatures: "جميع الميزات",
        noCreditCard: "بدون بطاقة ائتمان",
        autoActivation: "تفعيل تلقائي"
      },
      olderVersions: { title: "هل تحتاج إلى إصدار أقدم؟", link: "عرض جميع الإصدارات" },
      requirements: {
        title: "متطلبات النظام",
        os: "نظام التشغيل",
        revitVersion: "إصدار Revit",
        ram: "الذاكرة",
        diskSpace: "مساحة القرص",
        internet: "الإنترنت",
        internetRequired: "مطلوب للتفعيل والميزات السحابية"
      },
      guide: {
        title: "دليل التثبيت",
        step1: { title: "تحميل المثبت", description: "اختر المثبت المناسب لإصدار Revit الخاص بك وقم بتحميله" },
        step2: { title: "إغلاق Revit", description: "تأكد من إغلاق جميع نسخ Revit قبل التثبيت" },
        step3: { title: "تشغيل المثبت", description: "انقر نقرًا مزدوجًا على الملف المحمل واتبع معالج التثبيت" },
        step4: { title: "تشغيل Revit وتسجيل الدخول", description: "افتح Revit وسجل الدخول بحسابك في لوحة InvoratecAI" }
      },
      help: {
        title: "هل تحتاج مساعدة؟",
        subtitle: "راجع وثائقنا أو اتصل بفريق الدعم",
        viewDocs: "عرض الوثائق",
        requestDemo: "طلب عرض توضيحي"
      }
    },
    activityRegistration: {
      breadcrumb: { newMedia: "الوسائط الجديدة", register: "التسجيل" },
      hero: { title: "تسجيل الحدث" },
      success: {
        title: "تم التسجيل بنجاح!",
        message: "شكراً لتسجيلك! تم إرسال بريد تأكيد إلى صندوق الوارد الخاص بك.",
        eventDetails: "تفاصيل الحدث",
        event: "الحدث",
        date: "التاريخ",
        time: "الوقت",
        location: "الموقع",
        backToEvent: "العودة إلى الحدث",
        browseMore: "تصفح المزيد من الأحداث"
      },
      form: {
        title: "معلومات التسجيل",
        fullName: "الاسم الكامل",
        fullNamePlaceholder: "أدخل اسمك الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phone: "رقم الهاتف",
        phonePlaceholder: "أدخل رقم هاتفك",
        company: "اسم الشركة",
        companyPlaceholder: "اسم الشركة",
        jobTitle: "المسمى الوظيفي",
        jobTitlePlaceholder: "المسمى الوظيفي",
        attendees: "عدد الحضور",
        dietary: "القيود الغذائية/الحساسية",
        dietaryPlaceholder: "يرجى التحديد إن وجد",
        howDidYouHear: "كيف سمعت عن هذا الحدث؟",
        howDidYouHearOptions: {
          select: "يرجى الاختيار",
          search: "محرك البحث",
          social: "وسائل التواصل الاجتماعي",
          colleague: "إحالة زميل",
          email: "النشرة البريدية",
          event: "حدث آخر",
          other: "أخرى"
        },
        termsAgreement: "أوافق على تلقي إشعارات البريد الإلكتروني المتعلقة بالحدث وأقبل سياسة الخصوصية وشروط الخدمة الخاصة بـ InvoratecAI.",
        termsError: "يرجى الموافقة على الشروط والأحكام",
        submitting: "جاري الإرسال...",
        submit: "إكمال التسجيل",
        backToEvent: "العودة إلى تفاصيل الحدث"
      },
      sidebar: { speakers: "المتحدثون", seatsAvailable: "مقاعد متاحة" },
      help: { title: "هل تحتاج مساعدة؟", description: "اتصل بفريق الأحداث إذا كان لديك أي أسئلة." },
      notFound: { title: "الحدث غير موجود", description: "عذراً، لم نتمكن من العثور على الحدث الذي تبحث عنه.", backToNewMedia: "العودة إلى الوسائط الجديدة" }
    },
    activityDetail: {
      registration: { open: "مفتوح", closed: "مغلق", comingSoon: "قريباً" },
      sections: {
        overview: "نظرة عامة",
        agenda: "جدول الأعمال",
        highlights: "أبرز النقاط",
        whoShouldAttend: "من يجب أن يحضر",
        speakers: "المتحدثون",
        registration: "التسجيل",
        date: "التاريخ",
        time: "الوقت",
        duration: "المدة",
        format: "الشكل",
        formatOnline: "عبر الإنترنت",
        formatInPerson: "حضوري",
        price: "السعر",
        seats: "المقاعد",
        registerNow: "سجل الآن",
        confirmationEmail: "سيتم إرسال بريد تأكيد بعد التسجيل",
        shareEvent: "مشاركة هذا الحدث",
        moreEvents: "المزيد من الأحداث"
      },
      cta: { title: "هل لديك أسئلة؟", subtitle: "اتصل بنا للحصول على مزيد من معلومات الحدث أو فرص الشراكة" },
      notFound: { title: "الحدث غير موجود", description: "عذراً، لم نتمكن من العثور على الحدث الذي تبحث عنه.", backToNewMedia: "العودة إلى الوسائط الجديدة" }
    },
    caseStudyDetail: {
      read: "قراءة",
      projectInfo: { client: "العميل", location: "الموقع", duration: "المدة" },
      stats: { timeSaved: "توفير الوقت", costReduction: "خفض التكلفة", errorReduction: "تقليل الأخطاء" },
      share: { title: "وجدت هذا مفيداً؟ شارك دراسة الحالة هذه" },
      related: { title: "دراسات حالة ذات صلة", timeSaved: "توفير الوقت" },
      cta: { title: "مستعد لبدء قصة نجاحك؟", subtitle: "تعرف على كيف يمكن لـ InvoratecAI مساعدة مشروعك في تحقيق نتائج مماثلة" },
      notFound: { title: "دراسة الحالة غير موجودة", description: "عذراً، لم نتمكن من العثور على دراسة الحالة التي تبحث عنها.", backToNewMedia: "العودة إلى الوسائط الجديدة" }
    },
    blogDetail: {
      read: "قراءة",
      conclusion: "الخلاصة",
      share: { title: "وجدت هذا مفيداً؟ شارك هذه المقالة" },
      related: { title: "مقالات ذات صلة" },
      notFound: { title: "المقالة غير موجودة", description: "عذراً، لم نتمكن من العثور على المقالة التي تبحث عنها.", backToNewMedia: "العودة إلى الوسائط الجديدة" }
    },
    common: { backToNewMedia: "العودة إلى الوسائط الجديدة" }
  },
  ru: {
    downloadPage: {
      hero: {
        latestVersion: "Последняя версия v2.1.0",
        title: "Скачать InvoratecAI",
        subtitle: "Получите BIM-дополнение на базе ИИ для Autodesk Revit",
        trialTitle: "7-дневная бесплатная пробная версия",
        trialSubtitle: "Без кредитной карты, полный доступ"
      },
      cards: {
        recommended: "Рекомендуется",
        supportedVersions: "Поддерживаемые версии Revit",
        downloadInstaller: "Скачать установщик",
        updated: "Обновлено"
      },
      trial: {
        title: "7-дневный пробный период",
        description: "Получите 7 дней полного доступа автоматически после установки. Кредитная карта не требуется. Испытайте все премиум-функции, включая ИИ-ассистент, обнаружение коллизий, облачную синхронизацию и многое другое.",
        allFeatures: "Все функции",
        noCreditCard: "Без кредитной карты",
        autoActivation: "Автоматическая активация"
      },
      olderVersions: { title: "Нужна более старая версия?", link: "Посмотреть все релизы" },
      requirements: {
        title: "Системные требования",
        os: "Операционная система",
        revitVersion: "Версия Revit",
        ram: "Оперативная память",
        diskSpace: "Место на диске",
        internet: "Интернет",
        internetRequired: "Требуется для активации и облачных функций"
      },
      guide: {
        title: "Руководство по установке",
        step1: { title: "Скачайте установщик", description: "Выберите установщик, соответствующий вашей версии Revit, и скачайте его" },
        step2: { title: "Закройте Revit", description: "Убедитесь, что все экземпляры Revit закрыты перед установкой" },
        step3: { title: "Запустите установщик", description: "Дважды щелкните по загруженному файлу и следуйте мастеру установки" },
        step4: { title: "Запустите Revit и войдите", description: "Откройте Revit и войдите в свою учетную запись на панели InvoratecAI" }
      },
      help: {
        title: "Нужна помощь?",
        subtitle: "Ознакомьтесь с нашей документацией или свяжитесь с нашей службой поддержки",
        viewDocs: "Посмотреть документацию",
        requestDemo: "Запросить демо"
      }
    },
    activityRegistration: {
      breadcrumb: { newMedia: "Новые медиа", register: "Регистрация" },
      hero: { title: "Регистрация на мероприятие" },
      success: {
        title: "Регистрация успешна!",
        message: "Спасибо за регистрацию! Письмо с подтверждением отправлено на вашу почту.",
        eventDetails: "Детали мероприятия",
        event: "Мероприятие",
        date: "Дата",
        time: "Время",
        location: "Место",
        backToEvent: "Вернуться к мероприятию",
        browseMore: "Смотреть другие мероприятия"
      },
      form: {
        title: "Информация для регистрации",
        fullName: "Полное имя",
        fullNamePlaceholder: "Введите ваше полное имя",
        email: "Email адрес",
        emailPlaceholder: "Введите ваш email",
        phone: "Номер телефона",
        phonePlaceholder: "Введите ваш номер телефона",
        company: "Название компании",
        companyPlaceholder: "Название компании",
        jobTitle: "Должность",
        jobTitlePlaceholder: "Должность",
        attendees: "Количество участников",
        dietary: "Диетические ограничения/Аллергии",
        dietaryPlaceholder: "Укажите при наличии",
        howDidYouHear: "Как вы узнали об этом мероприятии?",
        howDidYouHearOptions: {
          select: "Выберите",
          search: "Поисковая система",
          social: "Социальные сети",
          colleague: "Рекомендация коллеги",
          email: "Email рассылка",
          event: "Другое мероприятие",
          other: "Другое"
        },
        termsAgreement: "Я согласен получать email-уведомления о мероприятиях и принимаю Политику конфиденциальности и Условия использования InvoratecAI.",
        termsError: "Пожалуйста, примите условия",
        submitting: "Отправка...",
        submit: "Завершить регистрацию",
        backToEvent: "Вернуться к деталям мероприятия"
      },
      sidebar: { speakers: "Спикеры", seatsAvailable: "мест доступно" },
      help: { title: "Нужна помощь?", description: "Свяжитесь с нашей командой мероприятий, если у вас есть вопросы." },
      notFound: { title: "Мероприятие не найдено", description: "Извините, мы не смогли найти мероприятие, которое вы ищете.", backToNewMedia: "Вернуться к Новым медиа" }
    },
    activityDetail: {
      registration: { open: "Открыта", closed: "Закрыта", comingSoon: "Скоро" },
      sections: {
        overview: "Обзор",
        agenda: "Программа",
        highlights: "Основные моменты",
        whoShouldAttend: "Для кого",
        speakers: "Спикеры",
        registration: "Регистрация",
        date: "Дата",
        time: "Время",
        duration: "Продолжительность",
        format: "Формат",
        formatOnline: "Онлайн",
        formatInPerson: "Очно",
        price: "Цена",
        seats: "Места",
        registerNow: "Зарегистрироваться",
        confirmationEmail: "Письмо с подтверждением будет отправлено после регистрации",
        shareEvent: "Поделиться мероприятием",
        moreEvents: "Другие мероприятия"
      },
      cta: { title: "Есть вопросы?", subtitle: "Свяжитесь с нами для получения дополнительной информации о мероприятии или возможностях партнерства" },
      notFound: { title: "Мероприятие не найдено", description: "Извините, мы не смогли найти мероприятие, которое вы ищете.", backToNewMedia: "Вернуться к Новым медиа" }
    },
    caseStudyDetail: {
      read: "чтение",
      projectInfo: { client: "Клиент", location: "Местоположение", duration: "Длительность" },
      stats: { timeSaved: "Сэкономлено времени", costReduction: "Сокращение затрат", errorReduction: "Сокращение ошибок" },
      share: { title: "Было полезно? Поделитесь этим кейсом" },
      related: { title: "Связанные кейсы", timeSaved: "сэкономлено времени" },
      cta: { title: "Готовы начать свою историю успеха?", subtitle: "Узнайте, как InvoratecAI может помочь вашему проекту достичь аналогичных результатов" },
      notFound: { title: "Кейс не найден", description: "Извините, мы не смогли найти кейс, который вы ищете.", backToNewMedia: "Вернуться к Новым медиа" }
    },
    blogDetail: {
      read: "чтение",
      conclusion: "Заключение",
      share: { title: "Было полезно? Поделитесь этой статьей" },
      related: { title: "Связанные статьи" },
      notFound: { title: "Статья не найдена", description: "Извините, мы не смогли найти статью, которую вы ищете.", backToNewMedia: "Вернуться к Новым медиа" }
    },
    common: { backToNewMedia: "Вернуться к Новым медиа" }
  }
};

// Function to deep merge objects
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Process each language file
const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'ko', 'pt', 'ar', 'ru'];
const i18nDir = path.join(__dirname);

for (const lang of languages) {
  const filePath = path.join(i18nDir, `${lang}.json`);

  try {
    // Read existing file
    const existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Merge with new translations
    const mergedContent = deepMerge(existingContent, newTranslations[lang]);

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(mergedContent, null, 2), 'utf8');

    console.log(`✓ Updated ${lang}.json`);
  } catch (error) {
    console.error(`✗ Error processing ${lang}.json:`, error.message);
  }
}

console.log('\n✓ All language files updated successfully!');
