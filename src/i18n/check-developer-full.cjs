const fs = require('fs');
const path = require('path');

const languages = ['en', 'ja'];

languages.forEach(lang => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, `${lang}.json`), 'utf8'));
    const dev = data.terms?.developer?.content;

    console.log(`\n${'='.repeat(50)}`);
    console.log(`${lang.toUpperCase()} - terms.developer.content`);
    console.log('='.repeat(50));

    console.log(`intro: ${(dev?.intro || 'MISSING').substring(0, 80)}...`);
    console.log(`introNote: ${(dev?.introNote || 'MISSING').substring(0, 80)}...`);
    console.log(`section1.title: ${dev?.section1?.title || 'MISSING'}`);
    console.log(`section1.items: ${dev?.section1?.items ? `[${dev.section1.items.length} items]` : 'MISSING'}`);
    if (dev?.section1?.items) {
      console.log(`  First item: ${dev.section1.items[0].substring(0, 60)}...`);
    }
    console.log(`section2.title: ${dev?.section2?.title || 'MISSING'}`);
    console.log(`section2.subsection1.title: ${dev?.section2?.subsection1?.title || 'MISSING'}`);
    console.log(`section2.subsection1.intro: ${(dev?.section2?.subsection1?.intro || 'MISSING').substring(0, 60)}...`);
  } catch (e) {
    console.log(`${lang.toUpperCase()}: ERROR - ${e.message}`);
  }
});
