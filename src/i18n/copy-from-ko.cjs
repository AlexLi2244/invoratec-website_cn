const fs = require('fs');
const path = require('path');

function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Read Korean as source (most complete)
const ko = JSON.parse(fs.readFileSync(path.join(__dirname, 'ko.json'), 'utf8'));

// Extract the sections that need to be copied
const sectionsToKeep = {
  terms: {
    security: {
      content: {
        section1: ko.terms.security.content.section1,
        section2: ko.terms.security.content.section2,
        section3: ko.terms.security.content.section3,
        section4: ko.terms.security.content.section4,
        section5: ko.terms.security.content.section5,
        section6: ko.terms.security.content.section6,
        section7: ko.terms.security.content.section7
      }
    },
    privacy: {
      content: {
        section1: ko.terms.privacy.content.section1,
        section2: ko.terms.privacy.content.section2,
        section3: ko.terms.privacy.content.section3,
        section4: ko.terms.privacy.content.section4,
        section5: ko.terms.privacy.content.section5,
        section6: ko.terms.privacy.content.section6,
        section7: ko.terms.privacy.content.section7,
        section8: ko.terms.privacy.content.section8,
        section9: ko.terms.privacy.content.section9
      }
    },
    cookies: {
      content: {
        section1: ko.terms.cookies.content.section1,
        section2: ko.terms.cookies.content.section2,
        section3: ko.terms.cookies.content.section3,
        section4: ko.terms.cookies.content.section4,
        section5: ko.terms.cookies.content.section5,
        section6: ko.terms.cookies.content.section6,
        section7: ko.terms.cookies.content.section7,
        tableHeaders: ko.terms.cookies.content.tableHeaders
      }
    },
    developer: {
      content: {
        introNote: ko.terms.developer.content.introNote,
        section1: ko.terms.developer.content.section1,
        section2: ko.terms.developer.content.section2,
        section3: ko.terms.developer.content.section3,
        section4: ko.terms.developer.content.section4,
        section5: {
          title: ko.terms.developer.content.section5.title,
          subsection3: ko.terms.developer.content.section5.subsection3
        },
        section6: {
          title: ko.terms.developer.content.section6.title
        },
        section7: {
          title: ko.terms.developer.content.section7.title
        },
        section8: {
          title: ko.terms.developer.content.section8.title
        },
        section9: {
          title: ko.terms.developer.content.section9.title,
          intro: ko.terms.developer.content.section9.intro
        }
      }
    },
    dpa: {
      content: {
        section1: ko.terms.dpa.content.section1,
        section2: {
          title: ko.terms.dpa.content.section2.title
        },
        section3: {
          title: ko.terms.dpa.content.section3.title
        },
        section4: {
          title: ko.terms.dpa.content.section4.title
        },
        section5: {
          title: ko.terms.dpa.content.section5.title
        },
        section6: {
          title: ko.terms.dpa.content.section6.title
        },
        section7: {
          title: ko.terms.dpa.content.section7.title
        },
        section8: {
          title: ko.terms.dpa.content.section8.title,
          intro: ko.terms.dpa.content.section8.intro
        }
      }
    },
    ai: {
      content: {
        section1: {
          title: ko.terms.ai.content.section1.title
        },
        section2: {
          title: ko.terms.ai.content.section2.title
        },
        section3: {
          title: ko.terms.ai.content.section3.title
        },
        section4: {
          title: ko.terms.ai.content.section4.title
        },
        section5: {
          subsection3: ko.terms.ai.content.section5.subsection3
        }
      }
    },
    tos: {
      content: {
        section1: {
          title: ko.terms.tos.content.section1.title
        },
        section2: {
          title: ko.terms.tos.content.section2.title
        },
        section3: {
          title: ko.terms.tos.content.section3.title
        },
        section4: {
          title: ko.terms.tos.content.section4.title
        },
        section5: {
          title: ko.terms.tos.content.section5.title
        },
        section6: {
          title: ko.terms.tos.content.section6.title
        },
        section7: {
          title: ko.terms.tos.content.section7.title
        },
        section8: {
          title: ko.terms.tos.content.section8.title
        },
        section9: {
          title: ko.terms.tos.content.section9.title
        },
        section10: {
          title: ko.terms.tos.content.section10.title,
          intro: ko.terms.tos.content.section10.intro
        },
        section12: ko.terms.tos.content.section12,
        section13: ko.terms.tos.content.section13
      }
    }
  }
};

// Also fix Korean's own remaining issues
const koFixes = {
  terms: {
    developer: {
      content: {
        section5: {
          subsection3: "본 계약 해지 후에도 유효하도록 의도된 조항은 계속 유효합니다."
        }
      }
    },
    ai: {
      content: {
        section5: {
          subsection3: "AI 기능은 어떠한 보증 없이 '있는 그대로' 제공됩니다."
        }
      }
    },
    tos: {
      content: {
        section12: "본 약관은 법률 충돌 원칙에 관계없이 미국 캘리포니아주 법률의 적용을 받습니다. 모든 분쟁은 캘리포니아주 로스앤젤레스 카운티 법원에서 해결됩니다.",
        section13: "당사는 수시로 본 약관을 수정할 수 있습니다. 이메일 또는 서비스를 통해 중요한 변경 사항을 통지합니다. 변경 후 계속 사용하면 새 약관에 동의한 것으로 간주됩니다."
      }
    }
  }
};

// Fix zh and ja
const zhFixes = {
  terms: {
    developer: {
      content: {
        section5: {
          subsection3: "旨在在本协议终止后继续有效的条款将继续有效。"
        }
      }
    }
  }
};

const jaFixes = {
  terms: {
    developer: {
      content: {
        section5: {
          subsection3: "本契約の終了後も存続することを意図した条項は、引き続き有効です。"
        }
      }
    }
  }
};

// Languages that need sections from Korean
const languagesNeedingSections = ['de', 'fr', 'es', 'pt', 'ru', 'ar'];

// Process languages needing full sections
languagesNeedingSections.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = deepMerge(existing, sectionsToKeep);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Updated ' + lang + '.json with sections from ko');
});

// Fix Korean
const koPath = path.join(__dirname, 'ko.json');
const koExisting = JSON.parse(fs.readFileSync(koPath, 'utf8'));
const koMerged = deepMerge(koExisting, koFixes);
fs.writeFileSync(koPath, JSON.stringify(koMerged, null, 2), 'utf8');
console.log('Fixed ko.json');

// Fix Chinese
const zhPath = path.join(__dirname, 'zh.json');
const zhExisting = JSON.parse(fs.readFileSync(zhPath, 'utf8'));
const zhMerged = deepMerge(zhExisting, zhFixes);
fs.writeFileSync(zhPath, JSON.stringify(zhMerged, null, 2), 'utf8');
console.log('Fixed zh.json');

// Fix Japanese
const jaPath = path.join(__dirname, 'ja.json');
const jaExisting = JSON.parse(fs.readFileSync(jaPath, 'utf8'));
const jaMerged = deepMerge(jaExisting, jaFixes);
fs.writeFileSync(jaPath, JSON.stringify(jaMerged, null, 2), 'utf8');
console.log('Fixed ja.json');

console.log('\nAll languages updated!');
