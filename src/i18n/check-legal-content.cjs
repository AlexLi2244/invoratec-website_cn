const fs = require('fs');

const en = JSON.parse(fs.readFileSync('en.json', 'utf8'));
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

if (!en.docs || !en.docs.legalContent) {
  console.log('No docs.legalContent in English');
  process.exit(1);
}

const sections = Object.keys(en.docs.legalContent);
console.log('='.repeat(80));
console.log('CHECKING docs.legalContent SECTIONS');
console.log('='.repeat(80));
console.log(`\nSections: ${sections.join(', ')}`);

for (const lang of languages) {
  const langData = JSON.parse(fs.readFileSync(`${lang}.json`, 'utf8'));

  console.log(`\n--- ${lang.toUpperCase()} ---`);

  if (!langData.docs || !langData.docs.legalContent) {
    console.log('  docs.legalContent section MISSING');
    continue;
  }

  for (const section of sections) {
    const enContent = en.docs.legalContent[section];
    const langContent = langData.docs.legalContent[section];

    if (!langContent) {
      console.log(`  ${section}: MISSING`);
    } else if (langContent === enContent) {
      console.log(`  ${section}: NOT TRANSLATED (same as English)`);
    } else if (typeof langContent === 'string' && langContent.includes('InvoratecAI integrates seamlessly')) {
      console.log(`  ${section}: NOT TRANSLATED (contains English)`);
    } else {
      // Check if it contains mostly English
      const englishWords = ['Integration', 'Authentication', 'Security', 'Privacy', 'Terms', 'document', 'access'];
      const hasEnglish = englishWords.some(w => langContent.includes(w));
      if (hasEnglish && typeof langContent === 'string' && langContent.length > 100) {
        console.log(`  ${section}: PARTIALLY TRANSLATED (contains English words)`);
      } else {
        console.log(`  ${section}: OK`);
      }
    }
  }
}
