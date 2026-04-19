const fs = require('fs');
const path = require('path');

const languages = ['en', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar', 'zh'];
const legalSections = ['terms', 'privacy', 'security', 'cookies', 'dpa', 'subprocessors', 'ai', 'developer', 'integrations'];

console.log('Checking docs.legalContent for all languages\n');
console.log('Section'.padEnd(15) + ' | ' + languages.map(l => l.padStart(5)).join(' | '));
console.log('-'.repeat(100));

legalSections.forEach(section => {
  const row = [section.padEnd(15)];

  languages.forEach(lang => {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(__dirname, `${lang}.json`), 'utf8'));
      const content = data.docs?.legalContent?.[section];

      if (!content) {
        row.push('    X');
      } else if (typeof content === 'string' && content.length > 100) {
        row.push('    ✓');
      } else {
        row.push('  ???');
      }
    } catch (e) {
      row.push('  ERR');
    }
  });

  console.log(row.join(' | '));
});

console.log('\n\nChecking if Japanese developer content starts with Japanese:');
const ja = JSON.parse(fs.readFileSync(path.join(__dirname, 'ja.json'), 'utf8'));
const jaContent = ja.docs?.legalContent?.developer || '';
console.log('First 200 chars:', jaContent.substring(0, 200));
