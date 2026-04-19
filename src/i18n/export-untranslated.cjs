const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

const skipTerms = new Set([
  'Windows 10/11', 'Windows', 'Revit', 'Excel', 'Internet', 'BIM/AEC', 'Overview',
  'Autodesk', 'Google', 'Firebase', 'API', 'SDK', 'Person', 'Status', 'Relation',
  'IFC', 'NWD', 'PDF', 'DWG', 'ACC', 'APS', 'MEP', 'HVAC', 'OAuth', 'URL', 'RGB',
  'Kanban', 'Gantt', 'Dashboard', 'JSON', 'CSV', 'XML', 'BIM AI', 'Web AI',
  'InvoratecAI', 'Invoratec', 'Claude', 'Anthropic', 'cloud.invoratec.com',
  'Invoratec Inc.', 'Gmail', 'Google Workspace', 'Google Cloud Platform',
  'Autodesk Revit - InvoratecAI', 'Autodesk Construction Cloud', 'BIM AI (Revit)',
  'Web AI (Cloud)', 'Revit Plugin', 'Cloud Platform', 'Firebase / Firestore',
  'Starter', 'Professional', 'Enterprise', 'Standard', 'Documentation',
  'Configuration', 'Installation', 'Coordination', 'Tutorial', 'Format',
  'Innovation', 'Cloud', 'Collaboration', 'Conclusion', 'Client', 'Solution',
  'Commercial', 'Infrastructure', 'Support', 'Terms of Service', 'Cookies',
  'Agenda', 'Highlights', 'Online', 'Event', 'Blog', 'Download', 'Demo',
  'Description', 'Endpoint', 'Contact'
]);

function shouldSkip(value) {
  if (!value || typeof value !== 'string') return true;
  if (value.length <= 4) return true;
  if (skipTerms.has(value)) return true;
  if (value.includes('@') || value.includes('http') || value.includes('.com') || value.includes('.cn')) return true;
  if (/^\d+\.\d+/.test(value) || /^v\d+/.test(value)) return true;
  return false;
}

function getValue(obj, keyPath) {
  const parts = keyPath.split('.');
  let val = obj;
  for (const p of parts) {
    if (val === undefined || val === null) return undefined;
    val = val[p];
  }
  return val;
}

function getAllKeys(obj, prefix) {
  let keys = [];
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? prefix + '.' + key : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const allKeys = getAllKeys(en, '');
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

// Collect all untranslated strings
const untranslatedByLanguage = {};
const uniqueStrings = new Set();

for (const lang of languages) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  untranslatedByLanguage[lang] = [];

  for (const key of allKeys) {
    const enVal = getValue(en, key);
    const langVal = getValue(data, key);

    if (typeof enVal === 'string' && typeof langVal === 'string' && enVal === langVal && !shouldSkip(enVal)) {
      untranslatedByLanguage[lang].push({ key, value: enVal, section: key.split('.')[0] });
      uniqueStrings.add(enVal);
    }
  }
}

// Generate CSV export
console.log('Generating CSV export...');

let csv = 'Key,Section,English,Chinese,Japanese,Korean,German,French,Spanish,Portuguese,Russian,Arabic\n';

// Group by English string to avoid duplication
const stringsByKey = {};
for (const lang of languages) {
  for (const item of untranslatedByLanguage[lang]) {
    if (!stringsByKey[item.key]) {
      stringsByKey[item.key] = { key: item.key, section: item.section, value: item.value };
    }
  }
}

for (const [key, data] of Object.entries(stringsByKey)) {
  const escapedValue = '"' + data.value.replace(/"/g, '""') + '"';
  csv += `"${key}","${data.section}",${escapedValue},,,,,,,,,\n`;
}

fs.writeFileSync(path.join(__dirname, 'untranslated-strings.csv'), csv, 'utf8');
console.log(`✓ CSV exported: untranslated-strings.csv (${Object.keys(stringsByKey).length} unique keys)`);

// Generate JSON export by language
console.log('\nGenerating JSON exports...');

const jsonExport = {
  metadata: {
    generatedDate: new Date().toISOString(),
    totalKeys: Object.keys(stringsByKey).length,
    languages: languages
  },
  byLanguage: {},
  bySection: {},
  uniqueStrings: Array.from(uniqueStrings)
};

for (const lang of languages) {
  jsonExport.byLanguage[lang] = untranslatedByLanguage[lang].map(item => ({
    key: item.key,
    section: item.section,
    english: item.value
  }));
}

// Group by section
const bySection = {};
for (const [key, data] of Object.entries(stringsByKey)) {
  if (!bySection[data.section]) {
    bySection[data.section] = [];
  }
  bySection[data.section].push({
    key: key,
    english: data.value
  });
}
jsonExport.bySection = bySection;

fs.writeFileSync(path.join(__dirname, 'untranslated-strings.json'), JSON.stringify(jsonExport, null, 2), 'utf8');
console.log(`✓ JSON exported: untranslated-strings.json`);

// Generate translation template for easy copy-paste
console.log('\nGenerating translation template...');

const template = {
  instructions: "Fill in translations for each language. Keep the same key structure.",
  strings: {}
};

for (const [key, data] of Object.entries(stringsByKey)) {
  template.strings[key] = {
    english: data.value,
    zh: "",
    ja: "",
    ko: "",
    de: "",
    fr: "",
    es: "",
    pt: "",
    ru: "",
    ar: ""
  };
}

fs.writeFileSync(path.join(__dirname, 'translation-template.json'), JSON.stringify(template, null, 2), 'utf8');
console.log(`✓ Template exported: translation-template.json`);

// Generate summary report
console.log('\n' + '='.repeat(80));
console.log('EXPORT SUMMARY');
console.log('='.repeat(80));

console.log('\nFiles generated:');
console.log('  1. untranslated-strings.csv - For spreadsheet editing');
console.log('  2. untranslated-strings.json - Structured data for translation services');
console.log('  3. translation-template.json - Template for manual translation');

console.log('\nStrings to translate by language:');
for (const lang of languages) {
  console.log(`  ${lang.toUpperCase()}: ${untranslatedByLanguage[lang].length} strings`);
}

console.log('\nStrings to translate by section:');
const sectionCounts = {};
for (const [key, data] of Object.entries(stringsByKey)) {
  sectionCounts[data.section] = (sectionCounts[data.section] || 0) + 1;
}
for (const [section, count] of Object.entries(sectionCounts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${section}: ${count} unique strings`);
}

console.log(`\nTotal unique strings needing translation: ${uniqueStrings.size}`);
console.log(`Total translation keys: ${Object.keys(stringsByKey).length}`);
