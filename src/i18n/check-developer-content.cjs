const fs = require('fs');
const path = require('path');

const languages = ['en', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar', 'zh'];

languages.forEach(lang => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, `${lang}.json`), 'utf8'));
    const dev = data.terms?.developer?.content;

    if (!dev) {
      console.log(`${lang.toUpperCase()}: NO developer content`);
      return;
    }

    console.log(`${lang.toUpperCase()}:`);
    console.log(`  Section1 title: ${dev.section1?.title || 'MISSING'}`);
    console.log(`  Section1 intro: ${(dev.section1?.intro || 'MISSING').substring(0, 60)}...`);
    console.log(`  Section2 title: ${dev.section2?.title || 'MISSING'}`);
    console.log('');
  } catch (e) {
    console.log(`${lang.toUpperCase()}: ERROR - ${e.message}`);
  }
});
