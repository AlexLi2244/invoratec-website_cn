const fs = require('fs');

const en = JSON.parse(fs.readFileSync('en.json', 'utf8'));

// Get all keys with their values
function getKeysWithValues(obj, prefix = '') {
  let results = [];
  for (let key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      results.push(...getKeysWithValues(obj[key], fullKey));
    } else {
      results.push({ key: fullKey, value: obj[key] });
    }
  }
  return results;
}

function getValue(obj, path) {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current === null) return undefined;
    current = current[key];
  }
  return current;
}

const enKeys = getKeysWithValues(en);
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

// Skip patterns
const skipPatterns = ['mockUI'];
const brandTerms = ['InvoratecAI', 'Revit', 'BIM', 'Autodesk', 'API', 'Notion', 'Firebase', 'Google', 'Microsoft', 'Azure', 'AWS', 'GitHub', 'Claude', 'GPT', 'OpenAI', 'Anthropic'];

// Check if a value is likely a brand/technical term that shouldn't be translated
function isBrandOrTechnical(value) {
  if (typeof value !== 'string') return false;
  // Check if the value is exactly a brand term or very short
  if (brandTerms.some(b => value === b)) return true;
  // Check if it's a URL, email, or technical identifier
  if (value.match(/^https?:\/\//) || value.match(/@/) || value.match(/^\d+$/)) return true;
  return false;
}

console.log('='.repeat(80));
console.log('COMPREHENSIVE TRANSLATION CHECK - ALL SECTIONS');
console.log('='.repeat(80));

// Get all top-level sections
const sections = [...new Set(enKeys.map(k => k.key.split('.')[0]))];

for (const lang of languages) {
  const langData = JSON.parse(fs.readFileSync(`${lang}.json`, 'utf8'));
  const langKeys = getKeysWithValues(langData);
  const langKeySet = new Set(langKeys.map(k => k.key));

  console.log(`\n${'='.repeat(40)}`);
  console.log(`${lang.toUpperCase()} - Checking all sections`);
  console.log('='.repeat(40));

  let totalMissing = 0;
  let sectionStats = {};

  for (const section of sections) {
    if (skipPatterns.some(p => section.includes(p))) continue;

    const sectionKeys = enKeys.filter(k => k.key.startsWith(section + '.') || k.key === section);
    const missing = sectionKeys.filter(k => {
      if (skipPatterns.some(p => k.key.includes(p))) return false;
      if (isBrandOrTechnical(k.value)) return false;
      return !langKeySet.has(k.key);
    });

    if (missing.length > 0) {
      sectionStats[section] = missing;
      totalMissing += missing.length;
    }
  }

  if (totalMissing === 0) {
    console.log('✓ All sections complete!');
  } else {
    console.log(`Total missing: ${totalMissing} keys\n`);
    for (const [section, missing] of Object.entries(sectionStats)) {
      console.log(`\n[${section}] - ${missing.length} missing:`);
      missing.slice(0, 10).forEach(k => {
        const val = String(k.value).substring(0, 50);
        console.log(`  - ${k.key}`);
        console.log(`    EN: "${val}${k.value.length > 50 ? '...' : ''}"`);
      });
      if (missing.length > 10) {
        console.log(`  ... and ${missing.length - 10} more`);
      }
    }
  }
}

// Summary
console.log('\n' + '='.repeat(80));
console.log('SECTION OVERVIEW (excluding mockUI and brands)');
console.log('='.repeat(80));

const sectionsToCheck = sections.filter(s => !skipPatterns.some(p => s.includes(p)));
console.log(`\nSections found: ${sectionsToCheck.join(', ')}`);
console.log(`Total sections: ${sectionsToCheck.length}`);
