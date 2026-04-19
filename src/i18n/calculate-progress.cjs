const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

function countKeys(obj) {
  let count = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      count += countKeys(obj[key]);
    } else if (typeof obj[key] === 'string') {
      count++;
    }
  }
  return count;
}

function countUntranslated(enObj, langObj) {
  let count = 0;
  for (const key in enObj) {
    if (typeof enObj[key] === 'object' && enObj[key] !== null) {
      count += countUntranslated(enObj[key], langObj?.[key] || {});
    } else if (typeof enObj[key] === 'string' && langObj?.[key] === enObj[key]) {
      count++;
    }
  }
  return count;
}

const totalKeys = countKeys(en);
console.log('='.repeat(60));
console.log('TRANSLATION PROGRESS REPORT');
console.log('='.repeat(60));
console.log('Total translation keys:', totalKeys);
console.log('');

const langs = [
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'de', name: 'German' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ar', name: 'Arabic' }
];

for (const lang of langs) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang.code + '.json'), 'utf8'));
  const untranslated = countUntranslated(en, data);
  const translated = totalKeys - untranslated;
  const percent = ((translated / totalKeys) * 100).toFixed(1);
  const bar = '█'.repeat(Math.floor(percent / 5)) + '░'.repeat(20 - Math.floor(percent / 5));
  console.log(`${lang.name.padEnd(12)} [${bar}] ${percent}% (${translated}/${totalKeys})`);
}

console.log('');
console.log('='.repeat(60));
