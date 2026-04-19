const fs = require('fs');

const en = JSON.parse(fs.readFileSync('en.json', 'utf8'));

const sections = Object.keys(en.docs.legalContent);

console.log('='.repeat(80));
console.log('docs.legalContent SECTION SIZES');
console.log('='.repeat(80));

let totalChars = 0;
for (const section of sections) {
  const content = en.docs.legalContent[section];
  const size = typeof content === 'string' ? content.length : JSON.stringify(content).length;
  totalChars += size;
  console.log(`${section}: ${size} characters`);
}

console.log(`\nTotal: ${totalChars} characters`);
console.log(`\nThese are HTML strings that need translation for 8 languages (ja, ko, de, fr, es, pt, ru, ar)`);
