const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

// Get all top-level sections
const sections = Object.keys(en);

// Count keys recursively
function countKeys(obj) {
  let count = 0;
  let leafCount = 0;
  for (const key in obj) {
    count++;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      const result = countKeys(obj[key]);
      count += result.total;
      leafCount += result.leaves;
    } else {
      leafCount++;
    }
  }
  return { total: count, leaves: leafCount };
}

console.log('='.repeat(80));
console.log('TOP-LEVEL SECTIONS IN en.json (' + sections.length + ' total)');
console.log('='.repeat(80));
console.log('');
console.log('#'.padStart(3) + '  ' + 'Section'.padEnd(25) + ' | ' + 'Total Keys'.padStart(10) + ' | ' + 'Leaf Values'.padStart(12));
console.log('-'.repeat(80));

let totalKeys = 0;
let totalLeaves = 0;

sections.forEach((section, i) => {
  const result = countKeys(en[section]);
  totalKeys += result.total;
  totalLeaves += result.leaves;
  console.log((i+1).toString().padStart(3) + '. ' + section.padEnd(25) + ' | ' + result.total.toString().padStart(10) + ' | ' + result.leaves.toString().padStart(12));
});

console.log('-'.repeat(80));
console.log('TOTAL'.padStart(3) + '  ' + ''.padEnd(25) + ' | ' + totalKeys.toString().padStart(10) + ' | ' + totalLeaves.toString().padStart(12));
console.log('');

// Now check each language for completeness
console.log('='.repeat(80));
console.log('LANGUAGE COMPARISON');
console.log('='.repeat(80));
console.log('');

const languages = ['en', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar', 'zh'];

// For each section, check if it exists in each language
console.log('Section'.padEnd(25) + ' | ' + languages.map(l => l.padStart(4)).join(' | '));
console.log('-'.repeat(80));

sections.forEach(section => {
  const row = [section.padEnd(25)];
  languages.forEach(lang => {
    try {
      const langData = JSON.parse(fs.readFileSync(path.join(__dirname, `${lang}.json`), 'utf8'));
      if (langData[section]) {
        const enCount = countKeys(en[section]).leaves;
        const langCount = countKeys(langData[section]).leaves;
        const pct = Math.round((langCount / enCount) * 100);
        row.push((pct + '%').padStart(4));
      } else {
        row.push('  - ');
      }
    } catch (e) {
      row.push(' ERR');
    }
  });
  console.log(row.join(' | '));
});
