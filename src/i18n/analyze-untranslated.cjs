const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

function getAllKeyValues(obj, prefix) {
  prefix = prefix || '';
  let items = [];
  for (const key in obj) {
    const fullKey = prefix ? prefix + '.' + key : key;
    if (obj[key] !== null && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      items = items.concat(getAllKeyValues(obj[key], fullKey));
    } else if (typeof obj[key] === 'string') {
      items.push({ key: fullKey, value: obj[key] });
    }
  }
  return items;
}

function getValue(obj, keyPath) {
  const parts = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    if (current === undefined || current === null) return undefined;
    current = current[parts[i]];
  }
  return current;
}

const enItems = getAllKeyValues(en);

// Brand names that should stay in English
const allowedEnglish = ['InvoratecAI', 'BIM AI', 'Web AI', 'Revit', 'ACC', 'Autodesk', 'Plugin', 'Cloud', 'API', 'SDK', 'Firebase', 'Anthropic', 'Invoratec Inc.', 'cloud.invoratec.com', 'Windows 10/11', 'app.invoratec.com', '$449', '$99', '$0'];

console.log('=== UNTRANSLATED BY SECTION ===\n');

const results = {};

languages.forEach(function(lang) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  const sectionCounts = {};

  enItems.forEach(function(item) {
    const langValue = getValue(data, item.key);
    if (langValue === item.value && item.value.length > 3) {
      let isAllowed = false;
      for (let i = 0; i < allowedEnglish.length; i++) {
        if (item.value.indexOf(allowedEnglish[i]) !== -1) {
          isAllowed = true;
          break;
        }
      }
      if (!isAllowed) {
        const section = item.key.split('.')[0];
        sectionCounts[section] = (sectionCounts[section] || 0) + 1;
      }
    }
  });

  results[lang] = sectionCounts;
});

// Print summary table
console.log('Section breakdown by language:\n');

const allSections = new Set();
Object.values(results).forEach(function(counts) {
  Object.keys(counts).forEach(function(s) { allSections.add(s); });
});

const sections = Array.from(allSections).sort();

// Header
let header = 'Section'.padEnd(20);
languages.forEach(function(lang) { header += lang.toUpperCase().padStart(6); });
console.log(header);
console.log('-'.repeat(header.length));

// Rows
sections.forEach(function(section) {
  let row = section.padEnd(20);
  languages.forEach(function(lang) {
    const count = results[lang][section] || 0;
    row += String(count).padStart(6);
  });
  console.log(row);
});

// Totals
console.log('-'.repeat(header.length));
let totals = 'TOTAL'.padEnd(20);
languages.forEach(function(lang) {
  const total = Object.values(results[lang]).reduce(function(a, b) { return a + b; }, 0);
  totals += String(total).padStart(6);
});
console.log(totals);

// Calculate percentages
console.log('\n=== TRANSLATION COMPLETENESS ===\n');
const totalEnStrings = enItems.length;
languages.forEach(function(lang) {
  const untranslated = Object.values(results[lang]).reduce(function(a, b) { return a + b; }, 0);
  const translated = totalEnStrings - untranslated;
  const pct = ((translated / totalEnStrings) * 100).toFixed(1);
  console.log(lang.toUpperCase() + ': ' + pct + '% translated (' + untranslated + ' remaining)');
});
