const fs = require('fs');

const en = JSON.parse(fs.readFileSync('en.json', 'utf8'));
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

function getKeys(obj, prefix = '') {
  let results = [];
  for (let key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      results.push(...getKeys(obj[key], fullKey));
    } else {
      results.push(fullKey);
    }
  }
  return results;
}

const enKeys = getKeys(en);
const enKeySet = new Set(enKeys);

// Filter out mockUI
const enKeysNoMockUI = enKeys.filter(k => !k.startsWith('mockUI'));

console.log('='.repeat(80));
console.log('FINAL TRANSLATION STATUS');
console.log('='.repeat(80));
console.log(`\nEnglish total keys: ${enKeys.length}`);
console.log(`English keys (excluding mockUI): ${enKeysNoMockUI.length}`);
console.log('');

for (const lang of languages) {
  const langData = JSON.parse(fs.readFileSync(`${lang}.json`, 'utf8'));
  const langKeys = getKeys(langData);
  const langKeySet = new Set(langKeys);

  // Keys in English but not in this language (excluding mockUI)
  const missingFromLang = enKeysNoMockUI.filter(k => !langKeySet.has(k));

  // Keys in this language that match English (excluding mockUI)
  const translated = enKeysNoMockUI.filter(k => langKeySet.has(k));

  const pct = ((translated.length / enKeysNoMockUI.length) * 100).toFixed(1);

  console.log(`${lang.toUpperCase()}: ${translated.length}/${enKeysNoMockUI.length} (${pct}%) - Missing: ${missingFromLang.length}`);

  if (missingFromLang.length > 0 && missingFromLang.length <= 10) {
    missingFromLang.forEach(k => console.log(`  - ${k}`));
  }
}

console.log('\n' + '='.repeat(80));
console.log('COMPLETION STATUS');
console.log('='.repeat(80));
