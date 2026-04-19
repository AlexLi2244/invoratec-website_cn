const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));
const languages = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

console.log('='.repeat(100));
console.log('SECURITY PAGE TRANSLATION CHECK');
console.log('='.repeat(100));

// Check terms.security section
const securityKeys = en.terms && en.terms.security;
if (!securityKeys) {
  console.log('ERROR: No terms.security section found in English!');
  process.exit(1);
}

function getAllKeys(obj, prefix) {
  let keys = [];
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? prefix + '.' + key : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

function getValue(obj, keyPath) {
  const parts = keyPath.split('.');
  let val = obj;
  for (const p of parts) {
    if (val === undefined || val === null) return undefined;
    val = val[p];
  }
  return val;
}

const securityKeysList = getAllKeys(securityKeys, 'terms.security');
console.log(`\nEnglish security section has ${securityKeysList.length} keys\n`);

for (const lang of languages) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));

  let missing = [];
  let untranslated = [];

  for (const key of securityKeysList) {
    const enVal = getValue(en, key);
    const langVal = getValue(data, key);

    if (langVal === undefined) {
      missing.push(key);
    } else if (typeof enVal === 'string' && typeof langVal === 'string' && enVal === langVal && enVal.length > 5) {
      untranslated.push({ key, value: enVal });
    }
  }

  console.log(`\n${lang.toUpperCase()}:`);
  if (missing.length > 0) {
    console.log(`  MISSING (${missing.length}):`);
    missing.forEach(k => console.log(`    - ${k}`));
  } else {
    console.log(`  ✓ All security keys present`);
  }

  if (untranslated.length > 0) {
    console.log(`  UNTRANSLATED (${untranslated.length}):`);
    untranslated.slice(0, 5).forEach(item => {
      const short = item.value.length > 50 ? item.value.substring(0, 50) + '...' : item.value;
      console.log(`    - ${item.key}: "${short}"`);
    });
    if (untranslated.length > 5) {
      console.log(`    ... and ${untranslated.length - 5} more`);
    }
  } else {
    console.log(`  ✓ All security content translated`);
  }
}

// Also check other legal pages: privacy, cookies, terms, developer, dpa, subprocessors, ai, integrations
console.log('\n' + '='.repeat(100));
console.log('OTHER LEGAL PAGES CHECK');
console.log('='.repeat(100));

const legalSections = ['privacy', 'cookies', 'developer', 'dpa', 'subprocessors', 'ai', 'integrations', 'tos'];

for (const section of legalSections) {
  const sectionData = en.terms && en.terms[section];
  if (!sectionData) {
    console.log(`\n⚠️  terms.${section} - NOT FOUND in English`);
    continue;
  }

  const sectionKeys = getAllKeys(sectionData, `terms.${section}`);
  console.log(`\nterms.${section} (${sectionKeys.length} keys):`);

  for (const lang of languages) {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, lang + '.json'), 'utf8'));
    let missingCount = 0;
    let untranslatedCount = 0;

    for (const key of sectionKeys) {
      const enVal = getValue(en, key);
      const langVal = getValue(data, key);

      if (langVal === undefined) {
        missingCount++;
      } else if (typeof enVal === 'string' && typeof langVal === 'string' && enVal === langVal && enVal.length > 5) {
        untranslatedCount++;
      }
    }

    if (missingCount > 0 || untranslatedCount > 0) {
      console.log(`  ${lang.toUpperCase()}: ${missingCount} missing, ${untranslatedCount} untranslated`);
    } else {
      console.log(`  ${lang.toUpperCase()}: ✓ Complete`);
    }
  }
}
