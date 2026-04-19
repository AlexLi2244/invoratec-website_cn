const fs = require('fs');
const path = require('path');

// Load all language files
const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));
const zh = JSON.parse(fs.readFileSync(path.join(__dirname, 'zh.json'), 'utf8'));
const ja = JSON.parse(fs.readFileSync(path.join(__dirname, 'ja.json'), 'utf8'));
const ko = JSON.parse(fs.readFileSync(path.join(__dirname, 'ko.json'), 'utf8'));
const de = JSON.parse(fs.readFileSync(path.join(__dirname, 'de.json'), 'utf8'));
const fr = JSON.parse(fs.readFileSync(path.join(__dirname, 'fr.json'), 'utf8'));
const es = JSON.parse(fs.readFileSync(path.join(__dirname, 'es.json'), 'utf8'));
const pt = JSON.parse(fs.readFileSync(path.join(__dirname, 'pt.json'), 'utf8'));
const ru = JSON.parse(fs.readFileSync(path.join(__dirname, 'ru.json'), 'utf8'));
const ar = JSON.parse(fs.readFileSync(path.join(__dirname, 'ar.json'), 'utf8'));

// Brand names that should NOT be translated
const brandNames = [
  'InvoratecAI', 'BIM AI', 'Web AI', 'Autodesk', 'Revit',
  'Google Cloud Platform', 'Firebase', 'Firestore', 'Anthropic',
  'Invoratec Inc.', 'Windows 10/11', 'BIM/AEC', 'ACC', 'Forge',
  'cloud.invoratec.com', 'API', 'SDK', 'OAuth', 'JWT', 'JSON', 'CSV', 'PDF'
];

function isBrandName(value) {
  return brandNames.some(b => value === b || value.includes(b));
}

// Find all untranslated strings for a language
function findUntranslated(enObj, langObj, path = '') {
  const results = [];
  for (const key in enObj) {
    const newPath = path ? `${path}.${key}` : key;
    if (typeof enObj[key] === 'object' && enObj[key] !== null) {
      results.push(...findUntranslated(enObj[key], langObj?.[key] || {}, newPath));
    } else if (typeof enObj[key] === 'string') {
      const enValue = enObj[key];
      const langValue = langObj?.[key];
      // Check if untranslated (same as English) and not a brand name
      if (langValue === enValue && !isBrandName(enValue)) {
        results.push({ path: newPath, en: enValue });
      }
    }
  }
  return results;
}

// Get untranslated for each language
const languages = {
  zh: { name: 'Chinese', data: zh },
  ja: { name: 'Japanese', data: ja },
  ko: { name: 'Korean', data: ko },
  de: { name: 'German', data: de },
  fr: { name: 'French', data: fr },
  es: { name: 'Spanish', data: es },
  pt: { name: 'Portuguese', data: pt },
  ru: { name: 'Russian', data: ru },
  ar: { name: 'Arabic', data: ar }
};

console.log('='.repeat(80));
console.log('UNTRANSLATED STRINGS BY LANGUAGE (excluding brand names)');
console.log('='.repeat(80));

for (const [code, lang] of Object.entries(languages)) {
  const untranslated = findUntranslated(en, lang.data);
  console.log(`\n${lang.name} (${code}): ${untranslated.length} strings`);

  // Group by section
  const sections = {};
  untranslated.forEach(item => {
    const section = item.path.split('.')[0];
    if (!sections[section]) sections[section] = [];
    sections[section].push(item);
  });

  for (const [section, items] of Object.entries(sections)) {
    console.log(`  [${section}]: ${items.length} strings`);
  }
}

// Export for translation
const exportData = {};
for (const [code, lang] of Object.entries(languages)) {
  exportData[code] = findUntranslated(en, lang.data);
}

fs.writeFileSync(
  path.join(__dirname, 'pending-translations.json'),
  JSON.stringify(exportData, null, 2)
);

console.log('\n' + '='.repeat(80));
console.log('Exported to pending-translations.json');
