const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

// Check ALL sections
function findEnglishStrings(enObj, targetObj, prefix, results) {
  for (const key in enObj) {
    const fullKey = prefix ? prefix + '.' + key : key;
    const enVal = enObj[key];
    const targetVal = targetObj ? targetObj[key] : undefined;

    if (typeof enVal === 'string' && enVal.length > 3) {
      // Check if target value equals English value (untranslated)
      if (targetVal === enVal) {
        results.push(fullKey);
      }
    } else if (enVal !== null && typeof enVal === 'object' && !Array.isArray(enVal)) {
      findEnglishStrings(enVal, targetVal || {}, fullKey, results);
    }
  }
}

// Check French as representative
const fr = JSON.parse(fs.readFileSync(path.join(__dirname, 'fr.json'), 'utf8'));
const results = [];
findEnglishStrings(en, fr, '', results);

console.log('All untranslated keys in FR (' + results.length + '):');
results.forEach(function(k) {
  console.log(k);
});
