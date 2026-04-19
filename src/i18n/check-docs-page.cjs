const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

// Terms that should not be translated
const skipTerms = [
  'Windows 10/11', 'Windows', 'Revit', 'Excel', 'Internet', 'BIM/AEC', 'Overview',
  'Autodesk', 'Google', 'Firebase', 'API', 'SDK', 'Person', 'Status', 'Relation',
  'IFC', 'NWD', 'PDF', 'DWG', 'ACC', 'APS', 'MEP', 'HVAC', 'OAuth', 'URL', 'RGB',
  'Kanban', 'Gantt', 'Dashboard', 'JSON', 'CSV', 'XML'
];

function shouldSkip(value) {
  if (!value || typeof value !== 'string') return true;
  if (value.length <= 4) return true;
  for (const term of skipTerms) {
    if (value === term) return true;
  }
  return false;
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

function getValue(obj, keyPath) {
  const parts = keyPath.split('.');
  let val = obj;
  for (const p of parts) {
    if (val === undefined || val === null) return undefined;
    val = val[p];
  }
  return val;
}

console.log('='.repeat(100));
console.log('DOCS PAGE TRANSLATION CHECK');
console.log('='.repeat(100));

const docsData = en.docs;
if (!docsData) {
  console.log('ERROR: No docs section found in English!');
  process.exit(1);
}

const docsKeys = getAllKeys(docsData, 'docs');
console.log(`\nEnglish docs section has ${docsKeys.length} keys\n`);

for (const lang of languages) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));

  let missing = [];
  let untranslated = [];

  for (const key of docsKeys) {
    const enVal = getValue(en, key);
    const langVal = getValue(data, key);

    if (langVal === undefined) {
      missing.push(key);
    } else if (typeof enVal === 'string' && typeof langVal === 'string' && enVal === langVal && !shouldSkip(enVal)) {
      untranslated.push({ key, value: enVal });
    }
  }

  console.log(`\n${lang.toUpperCase()}:`);
  if (missing.length > 0) {
    console.log(`  MISSING (${missing.length}):`);
    missing.slice(0, 10).forEach(k => console.log(`    - ${k}`));
    if (missing.length > 10) console.log(`    ... and ${missing.length - 10} more`);
  } else {
    console.log(`  ✓ All docs keys present`);
  }

  if (untranslated.length > 0) {
    console.log(`  UNTRANSLATED (${untranslated.length}):`);
    untranslated.slice(0, 10).forEach(item => {
      const short = item.value.length > 50 ? item.value.substring(0, 50) + '...' : item.value;
      console.log(`    - ${item.key}: "${short}"`);
    });
    if (untranslated.length > 10) {
      console.log(`    ... and ${untranslated.length - 10} more`);
    }
  } else {
    console.log(`  ✓ All docs content translated`);
  }
}

// Export untranslated keys for fixing
console.log('\n' + '='.repeat(100));
console.log('KEYS REQUIRING TRANSLATION (by language):');
console.log('='.repeat(100));

for (const lang of languages) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  let untranslated = [];

  for (const key of docsKeys) {
    const enVal = getValue(en, key);
    const langVal = getValue(data, key);

    if (typeof enVal === 'string' && typeof langVal === 'string' && enVal === langVal && !shouldSkip(enVal)) {
      untranslated.push(key);
    }
  }

  if (untranslated.length > 0) {
    console.log(`\n${lang.toUpperCase()} needs translation for ${untranslated.length} docs keys`);
  }
}
