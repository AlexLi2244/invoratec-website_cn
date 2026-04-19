const fs = require('fs');
const path = require('path');

// Get section from command line
const section = process.argv[2] || 'nav';

const languages = ['en', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar', 'zh'];
const data = {};

languages.forEach(lang => {
  try {
    data[lang] = JSON.parse(fs.readFileSync(path.join(__dirname, `${lang}.json`), 'utf8'));
  } catch (e) {
    console.error(`Error loading ${lang}.json:`, e.message);
  }
});

const en = data.en;

// Get all leaf paths from an object
function getLeafPaths(obj, prefix = '') {
  const paths = [];
  for (const key in obj) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      paths.push(...getLeafPaths(obj[key], fullPath));
    } else {
      paths.push(fullPath);
    }
  }
  return paths;
}

// Get value at path
function getValueAtPath(obj, pathStr) {
  const parts = pathStr.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  return current;
}

// Get section data
const sectionData = en[section];
if (!sectionData) {
  console.log(`Section "${section}" not found in en.json`);
  process.exit(1);
}

const sectionPaths = getLeafPaths(sectionData, section);

console.log('='.repeat(100));
console.log(`SECTION ANALYSIS: ${section.toUpperCase()}`);
console.log('='.repeat(100));
console.log(`Total strings: ${sectionPaths.length}`);
console.log('');

// Skip terms for brand/technical
const skipTerms = ['InvoratecAI', 'BIM', 'Revit', 'API', 'SDK', 'OAuth', 'JWT', 'REST', 'IFC', 'ACC', 'Google', 'Anthropic', 'Claude', 'Autodesk', 'PDF', 'CSV', 'JSON', 'DLL', 'Webhook', 'Windows', 'Firebase', 'Web AI'];

// Check each language
languages.slice(1).forEach(lang => {
  const langData = data[lang];
  const issues = [];

  sectionPaths.forEach(p => {
    const enVal = getValueAtPath(en, p);
    const langVal = getValueAtPath(langData, p);

    if (langVal === undefined) {
      issues.push({ path: p, issue: 'MISSING', enVal: enVal });
    } else if (langVal === enVal && typeof enVal === 'string' && enVal.length > 3) {
      // Check if it's a skip term
      const isSkipTerm = skipTerms.some(term => enVal.includes(term));
      if (!isSkipTerm) {
        issues.push({ path: p, issue: 'IDENTICAL', enVal: enVal });
      }
    }
  });

  if (issues.length > 0) {
    console.log(`${lang.toUpperCase()} - ${issues.length} issues:`);
    issues.forEach(i => {
      const shortPath = i.path.replace(section + '.', '');
      const preview = typeof i.enVal === 'string' ? i.enVal.substring(0, 50) : JSON.stringify(i.enVal).substring(0, 50);
      console.log(`  [${i.issue}] ${shortPath}: "${preview}${i.enVal && i.enVal.length > 50 ? '...' : ''}"`);
    });
    console.log('');
  } else {
    console.log(`${lang.toUpperCase()} - ✓ All translated`);
    console.log('');
  }
});
