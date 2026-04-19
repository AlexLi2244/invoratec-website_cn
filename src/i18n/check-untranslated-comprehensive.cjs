const fs = require('fs');
const path = require('path');

// Load all language files
const languages = ['en', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];
const data = {};

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);
  data[lang] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
});

const en = data.en;

// Sections to skip
const skipSections = ['brand', 'mockUI'];

// Track untranslated items
const untranslated = {};
languages.filter(l => l !== 'en').forEach(l => untranslated[l] = []);

function isUntranslated(enValue, langValue, lang) {
  if (langValue === undefined || langValue === null) return true;
  if (typeof enValue === 'string' && typeof langValue === 'string') {
    // If the value is identical to English, it might be untranslated
    // But skip very short strings, numbers, or special values
    if (enValue === langValue) {
      // Skip if it's a short string (likely a technical term or number)
      if (enValue.length <= 3) return false;
      // Skip if it looks like a URL or email
      if (enValue.includes('http') || enValue.includes('@') || enValue.includes('.com')) return false;
      // Skip if it's mostly numbers
      if (/^\d+[\d,.\s]*$/.test(enValue)) return false;
      // Skip known brand terms that should stay English
      const brandTerms = ['InvoratecAI', 'BIM', 'Revit', 'API', 'SDK', 'OAuth', 'JWT', 'REST', 'IFC', 'ACC', 'pyRevit', 'C#', 'Python', 'Google', 'Anthropic', 'Claude', 'Autodesk', 'PDF', 'CSV', 'JSON', 'DLL', 'Webhook', 'Enterprise', 'Professional', 'Starter'];
      if (brandTerms.some(term => enValue === term || enValue.includes(term))) return false;
      return true;
    }
  }
  return false;
}

function checkObject(enObj, langObj, lang, path = '') {
  if (!enObj || typeof enObj !== 'object') return;

  for (const key of Object.keys(enObj)) {
    const currentPath = path ? `${path}.${key}` : key;

    // Skip certain sections
    if (skipSections.includes(key) && path === '') continue;

    const enValue = enObj[key];
    const langValue = langObj ? langObj[key] : undefined;

    if (typeof enValue === 'object' && enValue !== null && !Array.isArray(enValue)) {
      // Recurse into nested objects
      checkObject(enValue, langValue, lang, currentPath);
    } else if (typeof enValue === 'string') {
      // Check if this string is untranslated
      if (isUntranslated(enValue, langValue, lang)) {
        untranslated[lang].push({
          path: currentPath,
          enValue: enValue.substring(0, 100) + (enValue.length > 100 ? '...' : ''),
          langValue: langValue ? (langValue.substring(0, 100) + (langValue.length > 100 ? '...' : '')) : '(missing)'
        });
      }
    } else if (Array.isArray(enValue)) {
      // Check array items
      if (!langValue || !Array.isArray(langValue)) {
        untranslated[lang].push({
          path: currentPath,
          enValue: `[Array with ${enValue.length} items]`,
          langValue: '(missing or not array)'
        });
      } else if (langValue.length !== enValue.length) {
        untranslated[lang].push({
          path: currentPath,
          enValue: `[Array with ${enValue.length} items]`,
          langValue: `[Array with ${langValue.length} items - mismatch]`
        });
      }
    }
  }
}

// Check each language
languages.filter(l => l !== 'en').forEach(lang => {
  checkObject(en, data[lang], lang);
});

// Report results
console.log('================================================================================');
console.log('COMPREHENSIVE TRANSLATION CHECK (Skipping: brand, mockUI)');
console.log('================================================================================\n');

let totalIssues = 0;

languages.filter(l => l !== 'en').forEach(lang => {
  const issues = untranslated[lang];
  totalIssues += issues.length;

  console.log(`\n${'='.repeat(40)}`);
  console.log(`${lang.toUpperCase()}: ${issues.length} potential untranslated items`);
  console.log(`${'='.repeat(40)}`);

  if (issues.length > 0) {
    // Group by top-level section
    const bySection = {};
    issues.forEach(issue => {
      const section = issue.path.split('.')[0];
      if (!bySection[section]) bySection[section] = [];
      bySection[section].push(issue);
    });

    Object.keys(bySection).sort().forEach(section => {
      console.log(`\n  ${section} (${bySection[section].length} items):`);
      bySection[section].slice(0, 10).forEach(issue => {
        console.log(`    - ${issue.path}`);
        console.log(`      EN: "${issue.enValue}"`);
        if (issue.langValue !== issue.enValue) {
          console.log(`      ${lang.toUpperCase()}: "${issue.langValue}"`);
        }
      });
      if (bySection[section].length > 10) {
        console.log(`    ... and ${bySection[section].length - 10} more in this section`);
      }
    });
  }
});

console.log('\n================================================================================');
console.log(`SUMMARY: ${totalIssues} total potential untranslated items across all languages`);
console.log('================================================================================');

// Also check for missing top-level keys
console.log('\n\nMISSING TOP-LEVEL SECTIONS:');
console.log('================================================================================');
const enTopKeys = Object.keys(en).filter(k => !skipSections.includes(k));

languages.filter(l => l !== 'en').forEach(lang => {
  const langTopKeys = Object.keys(data[lang]);
  const missing = enTopKeys.filter(k => !langTopKeys.includes(k));
  if (missing.length > 0) {
    console.log(`${lang.toUpperCase()}: Missing sections: ${missing.join(', ')}`);
  }
});
