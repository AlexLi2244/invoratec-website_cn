// Script to add blog and case study i18n keys for metadata
const fs = require('fs');
const path = require('path');

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

// Blog and Case Study metadata translations for all languages
const translations = {
  en: {
    blog: {
      categories: {
        technology: "Technology",
        industry: "Industry",
        tutorial: "Tutorial"
      },
      tags: {
        ai: "AI",
        bim: "BIM",
        constructionTechnology: "Construction Technology",
        innovation: "Innovation",
        efficiency: "Efficiency",
        automation: "Automation",
        workflow: "Workflow",
        productivity: "Productivity",
        digitalTwin: "Digital Twin",
        cloudPlatform: "Cloud Platform",
        guide: "Guide",
        revit: "Revit",
        aiAssistant: "AI Assistant",
        voiceControl: "Voice Control",
        mep: "MEP",
        coordination: "Coordination",
        clashDetection: "Clash Detection",
        bestPractices: "Best Practices",
        cloud: "Cloud",
        collaboration: "Collaboration",
        webPlatform: "Web Platform",
        future: "Future"
      },
      authorRoles: {
        productResearch: "Product Research",
        industryInsights: "Industry Insights",
        technicalDocumentation: "Technical Documentation",
        productGuide: "Product Guide",
        mepExpertise: "MEP Expertise",
        cloudTechnology: "Cloud Technology"
      }
    },
    cases: {
      industries: {
        commercial: "Commercial",
        healthcare: "Healthcare",
        infrastructure: "Infrastructure"
      },
      tags: {
        commercial: "Commercial",
        highRise: "High-Rise",
        mepCoordination: "MEP Coordination",
        bim: "BIM",
        healthcare: "Healthcare",
        complexMep: "Complex MEP",
        criticalSystems: "Critical Systems",
        coordination: "Coordination",
        infrastructure: "Infrastructure",
        transit: "Transit",
        multiDiscipline: "Multi-discipline",
        largeScale: "Large Scale"
      }
    }
  },
  zh: {
    blog: {
      categories: {
        technology: "技术",
        industry: "行业",
        tutorial: "教程"
      },
      tags: {
        ai: "人工智能",
        bim: "BIM",
        constructionTechnology: "建筑技术",
        innovation: "创新",
        efficiency: "效率",
        automation: "自动化",
        workflow: "工作流程",
        productivity: "生产力",
        digitalTwin: "数字孪生",
        cloudPlatform: "云平台",
        guide: "指南",
        revit: "Revit",
        aiAssistant: "AI助手",
        voiceControl: "语音控制",
        mep: "MEP",
        coordination: "协调",
        clashDetection: "碰撞检测",
        bestPractices: "最佳实践",
        cloud: "云",
        collaboration: "协作",
        webPlatform: "网页平台",
        future: "未来"
      },
      authorRoles: {
        productResearch: "产品研究",
        industryInsights: "行业洞察",
        technicalDocumentation: "技术文档",
        productGuide: "产品指南",
        mepExpertise: "MEP专业",
        cloudTechnology: "云技术"
      }
    },
    cases: {
      industries: {
        commercial: "商业",
        healthcare: "医疗",
        infrastructure: "基础设施"
      },
      tags: {
        commercial: "商业",
        highRise: "高层建筑",
        mepCoordination: "MEP协调",
        bim: "BIM",
        healthcare: "医疗",
        complexMep: "复杂MEP",
        criticalSystems: "关键系统",
        coordination: "协调",
        infrastructure: "基础设施",
        transit: "交通",
        multiDiscipline: "多专业",
        largeScale: "大规模"
      }
    }
  },
  ja: {
    blog: {
      categories: {
        technology: "テクノロジー",
        industry: "業界",
        tutorial: "チュートリアル"
      },
      tags: {
        ai: "AI",
        bim: "BIM",
        constructionTechnology: "建設テクノロジー",
        innovation: "イノベーション",
        efficiency: "効率",
        automation: "自動化",
        workflow: "ワークフロー",
        productivity: "生産性",
        digitalTwin: "デジタルツイン",
        cloudPlatform: "クラウドプラットフォーム",
        guide: "ガイド",
        revit: "Revit",
        aiAssistant: "AIアシスタント",
        voiceControl: "音声コントロール",
        mep: "MEP",
        coordination: "コーディネーション",
        clashDetection: "干渉チェック",
        bestPractices: "ベストプラクティス",
        cloud: "クラウド",
        collaboration: "コラボレーション",
        webPlatform: "Webプラットフォーム",
        future: "未来"
      },
      authorRoles: {
        productResearch: "製品リサーチ",
        industryInsights: "業界インサイト",
        technicalDocumentation: "技術ドキュメント",
        productGuide: "製品ガイド",
        mepExpertise: "MEP専門",
        cloudTechnology: "クラウドテクノロジー"
      }
    },
    cases: {
      industries: {
        commercial: "商業",
        healthcare: "医療",
        infrastructure: "インフラ"
      },
      tags: {
        commercial: "商業",
        highRise: "高層ビル",
        mepCoordination: "MEPコーディネーション",
        bim: "BIM",
        healthcare: "医療",
        complexMep: "複雑なMEP",
        criticalSystems: "重要システム",
        coordination: "コーディネーション",
        infrastructure: "インフラ",
        transit: "交通",
        multiDiscipline: "多分野",
        largeScale: "大規模"
      }
    }
  }
};

// Update each language file
const languages = ['en', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  try {
    let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Get translations for this language, fallback to English if not available
    const langTranslations = translations[lang] || translations.en;

    // Merge the new translations
    content = deepMerge(content, langTranslations);

    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
  } catch (err) {
    console.error(`Error updating ${lang}.json:`, err.message);
  }
});

console.log('Done adding blog and case study i18n keys!');
