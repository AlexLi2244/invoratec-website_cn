// Script to add extra Mock UI i18n keys for all languages
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

// Additional Mock UI translations
const translations = {
  en: {
    mockUI: {
      tools: {
        searchTools: "Search tools..."
      },
      projects: {
        search: "Search projects..."
      },
      common: {
        viewAll: "View All"
      }
    }
  },
  zh: {
    mockUI: {
      tools: {
        searchTools: "搜索工具..."
      },
      projects: {
        search: "搜索项目..."
      },
      common: {
        viewAll: "查看全部"
      }
    }
  },
  ja: {
    mockUI: {
      tools: {
        searchTools: "ツールを検索..."
      },
      projects: {
        search: "プロジェクトを検索..."
      },
      common: {
        viewAll: "すべて表示"
      }
    }
  },
  ko: {
    mockUI: {
      tools: {
        searchTools: "도구 검색..."
      },
      projects: {
        search: "프로젝트 검색..."
      },
      common: {
        viewAll: "모두 보기"
      }
    }
  },
  de: {
    mockUI: {
      tools: {
        searchTools: "Tools durchsuchen..."
      },
      projects: {
        search: "Projekte durchsuchen..."
      },
      common: {
        viewAll: "Alle anzeigen"
      }
    }
  },
  fr: {
    mockUI: {
      tools: {
        searchTools: "Rechercher des outils..."
      },
      projects: {
        search: "Rechercher des projets..."
      },
      common: {
        viewAll: "Voir tout"
      }
    }
  },
  es: {
    mockUI: {
      tools: {
        searchTools: "Buscar herramientas..."
      },
      projects: {
        search: "Buscar proyectos..."
      },
      common: {
        viewAll: "Ver todo"
      }
    }
  },
  pt: {
    mockUI: {
      tools: {
        searchTools: "Pesquisar ferramentas..."
      },
      projects: {
        search: "Pesquisar projetos..."
      },
      common: {
        viewAll: "Ver tudo"
      }
    }
  },
  ru: {
    mockUI: {
      tools: {
        searchTools: "Поиск инструментов..."
      },
      projects: {
        search: "Поиск проектов..."
      },
      common: {
        viewAll: "Смотреть все"
      }
    }
  },
  ar: {
    mockUI: {
      tools: {
        searchTools: "البحث عن الأدوات..."
      },
      projects: {
        search: "البحث عن المشاريع..."
      },
      common: {
        viewAll: "عرض الكل"
      }
    }
  }
};

// Languages to update
const languages = ['en', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  try {
    let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    // Use language-specific translation or fallback to English
    const langTranslations = translations[lang] || translations.en;
    content = deepMerge(content, langTranslations);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
  } catch (err) {
    console.error(`Error updating ${lang}.json:`, err.message);
  }
});

console.log('Done adding extra Mock UI i18n keys!');
