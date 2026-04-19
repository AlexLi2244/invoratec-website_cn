const fs = require('fs');
const path = require('path');

const languages = ['en', 'ja'];

languages.forEach(lang => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, `${lang}.json`), 'utf8'));
    const dev = data.docs?.legalContent?.developer;

    console.log(`\n${lang.toUpperCase()} - docs.legalContent.developer:`);
    if (dev) {
      console.log(`Content length: ${dev.length} chars`);
      console.log(`Preview: ${dev.substring(0, 300)}...`);
    } else {
      console.log('NOT FOUND');
    }
  } catch (e) {
    console.log(`${lang.toUpperCase()}: ERROR - ${e.message}`);
  }
});
