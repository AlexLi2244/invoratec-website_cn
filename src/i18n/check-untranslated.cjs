const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

function findEnglishStrings(enObj, targetObj, prefix, results) {
  for (const key in enObj) {
    const fullKey = prefix ? prefix + '.' + key : key;
    const enVal = enObj[key];
    const targetVal = targetObj ? targetObj[key] : undefined;

    if (typeof enVal === 'string' && enVal.length > 3) {
      if (targetVal === enVal) {
        results.push(fullKey);
      }
    } else if (enVal !== null && typeof enVal === 'object' && !Array.isArray(enVal)) {
      findEnglishStrings(enVal, targetVal || {}, fullKey, results);
    }
  }
}

const languages = ['es', 'fr', 'de', 'pt', 'ja', 'zh', 'ko', 'ar', 'ru'];

languages.forEach(function(lang) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  const results = [];
  findEnglishStrings(en, data, '', results);
  console.log(lang.toUpperCase() + ': ' + results.length + ' untranslated strings');
});
