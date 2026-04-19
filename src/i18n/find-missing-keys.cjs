const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

function getMissingKeys(source, target, prefix) {
  prefix = prefix || '';
  let missing = [];
  for (const key of Object.keys(source)) {
    const fullKey = prefix ? prefix + '.' + key : key;
    if (target[key] === undefined) {
      missing.push(fullKey);
    } else {
      const sourceVal = source[key];
      const targetVal = target[key];
      if (sourceVal !== null && typeof sourceVal === 'object' && !Array.isArray(sourceVal)) {
        if (typeof targetVal !== 'object') {
          missing.push(fullKey);
        } else {
          missing = missing.concat(getMissingKeys(sourceVal, targetVal, fullKey));
        }
      }
    }
  }
  return missing;
}

const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

languages.forEach(function(lang) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  const missing = getMissingKeys(en, data);

  if (missing.length > 0) {
    console.log('\nMissing keys in ' + lang.toUpperCase() + ' (' + missing.length + '):');
    missing.forEach(function(k) {
      console.log('  ' + k);
    });
  }
});
