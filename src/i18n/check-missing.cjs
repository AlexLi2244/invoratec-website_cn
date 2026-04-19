const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

function countKeys(obj) {
  let count = 0;
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      count += countKeys(val);
    } else {
      count++;
    }
  }
  return count;
}

function getMissingKeysCount(source, target, prefix) {
  prefix = prefix || '';
  let missing = 0;
  for (const key of Object.keys(source)) {
    const fullKey = prefix ? prefix + '.' + key : key;
    if (target[key] === undefined) {
      missing++;
    } else {
      const sourceVal = source[key];
      const targetVal = target[key];
      if (sourceVal !== null && typeof sourceVal === 'object' && !Array.isArray(sourceVal)) {
        if (typeof targetVal !== 'object') {
          missing++;
        } else {
          missing += getMissingKeysCount(sourceVal, targetVal, fullKey);
        }
      }
    }
  }
  return missing;
}

const enKeyCount = countKeys(en);
console.log('English (en): ' + enKeyCount + ' keys (reference)');
console.log('');

languages.forEach(function(lang) {
  const langData = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  const langKeyCount = countKeys(langData);
  const missingCount = getMissingKeysCount(en, langData);
  const pct = (((enKeyCount - missingCount) / enKeyCount) * 100).toFixed(1);
  console.log(lang.toUpperCase() + ': ' + langKeyCount + ' keys, ' + missingCount + ' missing (' + pct + '% complete)');
});
