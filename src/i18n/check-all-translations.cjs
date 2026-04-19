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

// Also check for English content that wasn't translated
function findUntranslatedContent(source, target, prefix) {
  prefix = prefix || '';
  let untranslated = [];
  for (const key of Object.keys(source)) {
    const fullKey = prefix ? prefix + '.' + key : key;
    const sourceVal = source[key];
    const targetVal = target[key];

    if (targetVal === undefined) continue;

    if (typeof sourceVal === 'string' && typeof targetVal === 'string') {
      // Check if the target is the same as source (might be untranslated)
      if (sourceVal === targetVal && sourceVal.length > 3) {
        untranslated.push({ key: fullKey, value: sourceVal });
      }
    } else if (sourceVal !== null && typeof sourceVal === 'object' && !Array.isArray(sourceVal)) {
      if (typeof targetVal === 'object') {
        untranslated = untranslated.concat(findUntranslatedContent(sourceVal, targetVal, fullKey));
      }
    }
  }
  return untranslated;
}

const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('='.repeat(80));
console.log('TRANSLATION COMPLETENESS CHECK');
console.log('='.repeat(80));

let totalMissing = 0;
let totalUntranslated = 0;

languages.forEach(function(lang) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  const missing = getMissingKeys(en, data);
  const untranslated = findUntranslatedContent(en, data);

  console.log('\n' + '-'.repeat(80));
  console.log(lang.toUpperCase() + ':');

  if (missing.length > 0) {
    totalMissing += missing.length;
    console.log('  MISSING KEYS (' + missing.length + '):');
    missing.slice(0, 20).forEach(function(k) {
      console.log('    - ' + k);
    });
    if (missing.length > 20) {
      console.log('    ... and ' + (missing.length - 20) + ' more');
    }
  } else {
    console.log('  ✓ All keys present');
  }

  if (untranslated.length > 0) {
    totalUntranslated += untranslated.length;
    console.log('  UNTRANSLATED CONTENT (' + untranslated.length + '):');
    untranslated.slice(0, 10).forEach(function(item) {
      console.log('    - ' + item.key + ': "' + item.value.substring(0, 50) + (item.value.length > 50 ? '...' : '') + '"');
    });
    if (untranslated.length > 10) {
      console.log('    ... and ' + (untranslated.length - 10) + ' more');
    }
  }
});

console.log('\n' + '='.repeat(80));
console.log('SUMMARY:');
console.log('  Total missing keys across all languages: ' + totalMissing);
console.log('  Total potentially untranslated strings: ' + totalUntranslated);
console.log('='.repeat(80));
