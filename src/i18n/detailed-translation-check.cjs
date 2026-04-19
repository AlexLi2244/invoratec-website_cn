const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

// Brand names and technical terms that should NOT be translated
const doNotTranslate = [
  'InvoratecAI',
  'Invoratec Inc.',
  'Invoratec',
  'BIM AI',
  'Web AI',
  'Revit',
  'Autodesk',
  'Google Cloud Platform',
  'Firebase',
  'Firestore',
  'Anthropic',
  'Claude',
  'Gmail',
  'Google Workspace',
  'OAuth',
  'OAuth 2.0',
  'cloud.invoratec.com',
  'docs.invoratec.com',
  'invoratec.cn',
  'Autodesk Revit - InvoratecAI',
  'Autodesk Construction Cloud',
  'ACC',
  'APS',
  'Procore',
  'PlanGrid',
  'Bluebeam',
  'Microsoft Teams',
  'YouTube',
  'GDPR',
  'CCPA',
  'SOC 2',
  'ISO 27001',
  'ISO 27017',
  'AES-256',
  'TLS 1.3',
  'SHA-256',
  'HTTPS',
  'DDoS',
  'XSS',
  'CSRF',
  'CORS',
  'HSTS',
  'API',
  'SDK',
  'PDF',
  'DWG',
  'IFC',
  'NWD',
  'MEP',
  'HVAC',
  'QAQC',
  'QA/QC',
  '.NET Framework 4.8',
  'Blog',
  'Download',
  'Demo'
];

function shouldSkip(value) {
  // Skip if it's a brand name or technical term
  for (const term of doNotTranslate) {
    if (value === term || value.includes(term)) {
      return true;
    }
  }
  // Skip email addresses
  if (value.includes('@invoratec.com') || value.includes('@anthropic.com')) {
    return true;
  }
  // Skip URLs
  if (value.startsWith('http') || value.includes('.com') || value.includes('.cn')) {
    return true;
  }
  // Skip version numbers
  if (/^\d{4}/.test(value) || /^v?\d+\.\d+/.test(value)) {
    return true;
  }
  // Skip very short strings (likely abbreviations or numbers)
  if (value.length <= 4) {
    return true;
  }
  return false;
}

function findUntranslatedContent(source, target, prefix) {
  prefix = prefix || '';
  let untranslated = [];
  for (const key of Object.keys(source)) {
    const fullKey = prefix ? prefix + '.' + key : key;
    const sourceVal = source[key];
    const targetVal = target[key];

    if (targetVal === undefined) continue;

    if (typeof sourceVal === 'string' && typeof targetVal === 'string') {
      if (sourceVal === targetVal && !shouldSkip(sourceVal)) {
        untranslated.push({ key: fullKey, value: sourceVal });
      }
    } else if (sourceVal !== null && typeof sourceVal === 'object' && !Array.isArray(sourceVal)) {
      if (typeof targetVal === 'object') {
        untranslated = untranslated.concat(findUntranslatedContent(sourceVal, targetVal, fullKey));
      }
    }
  }
  return untranslated;
}

// Group by section
function groupBySection(items) {
  const groups = {};
  for (const item of items) {
    const section = item.key.split('.')[0];
    if (!groups[section]) {
      groups[section] = [];
    }
    groups[section].push(item);
  }
  return groups;
}

const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('='.repeat(100));
console.log('DETAILED TRANSLATION ANALYSIS (excluding brand names and technical terms)');
console.log('='.repeat(100));

for (const lang of languages) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  const untranslated = findUntranslatedContent(en, data);
  const grouped = groupBySection(untranslated);

  console.log('\n' + '='.repeat(100));
  console.log(`${lang.toUpperCase()} - ${untranslated.length} untranslated strings`);
  console.log('='.repeat(100));

  for (const section of Object.keys(grouped).sort()) {
    const items = grouped[section];
    console.log(`\n[${section}] (${items.length} items):`);
    items.slice(0, 5).forEach(item => {
      const shortValue = item.value.length > 60 ? item.value.substring(0, 60) + '...' : item.value;
      console.log(`  - ${item.key}: "${shortValue}"`);
    });
    if (items.length > 5) {
      console.log(`  ... and ${items.length - 5} more`);
    }
  }
}

console.log('\n' + '='.repeat(100));
console.log('SUMMARY BY LANGUAGE:');
console.log('='.repeat(100));

for (const lang of languages) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  const untranslated = findUntranslatedContent(en, data);
  const grouped = groupBySection(untranslated);

  console.log(`\n${lang.toUpperCase()}: ${untranslated.length} total untranslated`);
  for (const section of Object.keys(grouped).sort()) {
    console.log(`  - ${section}: ${grouped[section].length}`);
  }
}
