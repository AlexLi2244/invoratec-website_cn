const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

// Check specific sections known to have user-visible content
const sectionsToCheck = [
  'features.items',
  'features.bim_ai',
  'features.web_ai',
  'hero',
  'faq.items',
  'cta',
  'nav',
  'footer',
  'pricing',
  'product'
];

function getValue(obj, path) {
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  return current;
}

function findEnglishStrings(enObj, targetObj, prefix, results) {
  for (const key in enObj) {
    const fullKey = prefix ? prefix + '.' + key : key;
    const enVal = enObj[key];
    const targetVal = targetObj ? targetObj[key] : undefined;

    if (typeof enVal === 'string' && enVal.length > 3) {
      // Check if target value equals English value (untranslated)
      if (targetVal === enVal) {
        results.push({
          key: fullKey,
          value: enVal.substring(0, 60) + (enVal.length > 60 ? '...' : '')
        });
      }
    } else if (enVal !== null && typeof enVal === 'object' && !Array.isArray(enVal)) {
      findEnglishStrings(enVal, targetVal || {}, fullKey, results);
    }
  }
}

const languages = ['fr', 'de', 'es', 'pt', 'ko', 'ru', 'ar'];

console.log('Checking for untranslated English content in non-English files...\n');

languages.forEach(function(lang) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
  const results = [];

  sectionsToCheck.forEach(function(section) {
    const enSection = getValue(en, section);
    const langSection = getValue(data, section);
    if (enSection) {
      findEnglishStrings(enSection, langSection, section, results);
    }
  });

  if (results.length > 0) {
    console.log(lang.toUpperCase() + ': ' + results.length + ' untranslated strings found:');
    results.slice(0, 10).forEach(function(r) {
      console.log('  ' + r.key + ': "' + r.value + '"');
    });
    if (results.length > 10) {
      console.log('  ... and ' + (results.length - 10) + ' more');
    }
    console.log('');
  } else {
    console.log(lang.toUpperCase() + ': All checked sections appear translated');
    console.log('');
  }
});
