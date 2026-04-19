const fs = require('fs');
const path = require('path');

const languages = ['en', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar', 'zh'];

console.log('='.repeat(80));
console.log('TRANSLATION VERIFICATION REPORT');
console.log('='.repeat(80));
console.log('');

// Check docs.legalContent (HTML content)
console.log('1. docs.legalContent (HTML legal documents)');
console.log('-'.repeat(80));

const legalSections = ['terms', 'privacy', 'security', 'cookies', 'dpa', 'subprocessors', 'ai', 'developer', 'integrations'];
const legalResults = {};

languages.forEach(lang => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, `${lang}.json`), 'utf8'));
  legalResults[lang] = {};

  legalSections.forEach(section => {
    const content = data.docs?.legalContent?.[section];
    if (!content) {
      legalResults[lang][section] = 'MISSING';
    } else if (lang === 'en') {
      legalResults[lang][section] = 'OK';
    } else {
      // Check if content has non-ASCII characters (indicating translation)
      const hasNonAscii = /[^\x00-\x7F]/.test(content);
      const enData = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));
      const enContent = enData.docs?.legalContent?.[section];
      const isIdentical = content === enContent;

      if (isIdentical) {
        legalResults[lang][section] = 'ENGLISH';
      } else if (hasNonAscii) {
        legalResults[lang][section] = 'TRANSLATED';
      } else {
        legalResults[lang][section] = 'UNKNOWN';
      }
    }
  });
});

// Print legal content status
console.log('Section'.padEnd(15) + ' | ' + languages.map(l => l.padStart(10)).join(' | '));
console.log('-'.repeat(15 + 13 * languages.length));

legalSections.forEach(section => {
  const row = [section.padEnd(15)];
  languages.forEach(lang => {
    const status = legalResults[lang][section];
    let display = status;
    if (status === 'TRANSLATED') display = '✓ TRANS';
    if (status === 'ENGLISH') display = '✗ ENG';
    if (status === 'OK') display = '✓ SRC';
    if (status === 'MISSING') display = '✗ MISS';
    row.push(display.padStart(10));
  });
  console.log(row.join(' | '));
});

console.log('');
console.log('Legend: ✓ TRANS = Translated, ✓ SRC = Source (English), ✗ ENG = Not translated, ✗ MISS = Missing');
console.log('');

// Summary
console.log('='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));

languages.slice(1).forEach(lang => {
  const translated = Object.values(legalResults[lang]).filter(v => v === 'TRANSLATED').length;
  const english = Object.values(legalResults[lang]).filter(v => v === 'ENGLISH').length;
  const missing = Object.values(legalResults[lang]).filter(v => v === 'MISSING').length;
  const total = legalSections.length;

  console.log(`${lang.toUpperCase()}: ${translated}/${total} translated, ${english} still in English, ${missing} missing`);
});
