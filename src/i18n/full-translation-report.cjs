const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

// Terms that should not be translated (brand names, technical terms)
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
  // Skip URLs and emails
  if (value.includes('@') || value.includes('http') || value.includes('.com') || value.includes('.cn')) return true;
  // Skip version numbers
  if (/^\d+\.\d+/.test(value) || /^v\d+/.test(value)) return true;
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

const allKeys = getAllKeys(en, '');
console.log(`Total keys in English: ${allKeys.length}\n`);

const report = {};

for (const lang of languages) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  report[lang] = { missing: [], untranslated: [], sections: {} };

  for (const key of allKeys) {
    const enVal = getValue(en, key);
    const langVal = getValue(data, key);

    const section = key.split('.')[0];
    if (!report[lang].sections[section]) {
      report[lang].sections[section] = { missing: 0, untranslated: 0, keys: [] };
    }

    if (langVal === undefined) {
      report[lang].missing.push(key);
      report[lang].sections[section].missing++;
    } else if (typeof enVal === 'string' && typeof langVal === 'string' && enVal === langVal && !shouldSkip(enVal)) {
      report[lang].untranslated.push({ key, value: enVal });
      report[lang].sections[section].untranslated++;
      report[lang].sections[section].keys.push(key);
    }
  }
}

console.log('='.repeat(120));
console.log('FULL TRANSLATION REPORT');
console.log('='.repeat(120));

for (const lang of languages) {
  const r = report[lang];
  console.log(`\n${'='.repeat(120)}`);
  console.log(`${lang.toUpperCase()}: ${r.missing.length} missing keys, ${r.untranslated.length} untranslated strings`);
  console.log('='.repeat(120));

  const sections = Object.entries(r.sections)
    .filter(([_, data]) => data.missing > 0 || data.untranslated > 0)
    .sort((a, b) => (b[1].missing + b[1].untranslated) - (a[1].missing + a[1].untranslated));

  for (const [section, data] of sections) {
    console.log(`\n  [${section}] - ${data.missing} missing, ${data.untranslated} untranslated`);
    if (data.keys.length > 0) {
      data.keys.slice(0, 3).forEach(k => console.log(`    - ${k}`));
      if (data.keys.length > 3) {
        console.log(`    ... and ${data.keys.length - 3} more`);
      }
    }
  }
}

// Generate fix priority list
console.log('\n\n' + '='.repeat(120));
console.log('TRANSLATION PRIORITY (sections needing most work):');
console.log('='.repeat(120));

const sectionTotals = {};
for (const lang of languages) {
  for (const [section, data] of Object.entries(report[lang].sections)) {
    if (!sectionTotals[section]) sectionTotals[section] = 0;
    sectionTotals[section] += data.untranslated;
  }
}

const sortedSections = Object.entries(sectionTotals)
  .filter(([_, count]) => count > 0)
  .sort((a, b) => b[1] - a[1]);

console.log('\nSections by total untranslated strings across all languages:');
for (const [section, count] of sortedSections) {
  console.log(`  ${section}: ${count} total untranslated strings`);
}

// Output untranslated keys by section for each language
console.log('\n\n' + '='.repeat(120));
console.log('DETAILED UNTRANSLATED KEYS BY LANGUAGE');
console.log('='.repeat(120));

for (const lang of languages) {
  const r = report[lang];
  if (r.untranslated.length === 0) {
    console.log(`\n${lang.toUpperCase()}: ✓ All content translated`);
    continue;
  }

  console.log(`\n${lang.toUpperCase()} (${r.untranslated.length} untranslated):`);

  // Group by section
  const bySection = {};
  for (const item of r.untranslated) {
    const section = item.key.split('.')[0];
    if (!bySection[section]) bySection[section] = [];
    bySection[section].push(item);
  }

  for (const [section, items] of Object.entries(bySection).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`  [${section}] (${items.length}):`);
    items.slice(0, 2).forEach(item => {
      const short = item.value.length > 40 ? item.value.substring(0, 40) + '...' : item.value;
      console.log(`    ${item.key} = "${short}"`);
    });
    if (items.length > 2) console.log(`    ... and ${items.length - 2} more`);
  }
}
