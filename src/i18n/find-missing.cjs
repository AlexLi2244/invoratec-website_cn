const fs = require('fs');

const en = JSON.parse(fs.readFileSync('en.json', 'utf8'));

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
const languages = ['ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

// Skip mockUI and brand-related keys
const skipPatterns = ['mockUI', 'brand', 'logo'];

for (const lang of languages) {
  const langData = JSON.parse(fs.readFileSync(`${lang}.json`, 'utf8'));
  const langKeys = getKeys(langData);

  const missing = enKeys.filter(k => {
    if (skipPatterns.some(p => k.includes(p))) return false;
    return !langKeys.includes(k);
  });

  if (missing.length > 0) {
    console.log(`\n=== ${lang.toUpperCase()} - ${missing.length} missing keys ===`);
    // Group by top-level section
    const sections = {};
    missing.forEach(k => {
      const section = k.split('.')[0];
      if (!sections[section]) sections[section] = [];
      sections[section].push(k);
    });

    for (const [section, keys] of Object.entries(sections)) {
      console.log(`  ${section}: ${keys.length} keys`);
      keys.slice(0, 5).forEach(k => console.log(`    - ${k}`));
      if (keys.length > 5) console.log(`    ... and ${keys.length - 5} more`);
    }
  }
}
