const fs = require('fs');
const path = require('path');

// Load all language files
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
function getValueAtPath(obj, path) {
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  return current;
}

// Get all English paths
const enPaths = getLeafPaths(en);
const sections = Object.keys(en);

console.log('='.repeat(100));
console.log('COMPREHENSIVE LOCALIZATION ANALYSIS REPORT');
console.log('='.repeat(100));
console.log('');
console.log('Generated:', new Date().toISOString());
console.log('Source Language: English (en)');
console.log('Total Sections:', sections.length);
console.log('Total Translatable Strings:', enPaths.length);
console.log('');

// PART 1: Section Summary
console.log('='.repeat(100));
console.log('PART 1: SECTION SUMMARY');
console.log('='.repeat(100));
console.log('');

const sectionStats = {};
sections.forEach(section => {
  const sectionPaths = enPaths.filter(p => p.startsWith(section + '.') || p === section);
  sectionStats[section] = {
    totalStrings: sectionPaths.length,
    paths: sectionPaths
  };
});

// Sort by size
const sortedSections = Object.entries(sectionStats).sort((a, b) => b[1].totalStrings - a[1].totalStrings);

console.log('Section'.padEnd(25) + ' | Strings | Description');
console.log('-'.repeat(100));
sortedSections.forEach(([section, stats]) => {
  let desc = '';
  switch(section) {
    case 'terms': desc = 'Legal documents (ToS, Privacy, DPA, etc.)'; break;
    case 'featuresPage': desc = 'Product features detailed page'; break;
    case 'docs': desc = 'Documentation content'; break;
    case 'mockUI': desc = 'Demo UI mockup content (can skip)'; break;
    case 'about': desc = 'About page content'; break;
    case 'serviceAI': desc = 'AI Empowerment service page'; break;
    case 'serviceSupport': desc = 'Support service page'; break;
    case 'serviceBIM': desc = 'BIM Consulting service page'; break;
    case 'cases': desc = 'Case studies section'; break;
    case 'blog': desc = 'Blog section'; break;
    case 'activityRegistration': desc = 'Event registration forms'; break;
    case 'features': desc = 'Product features overview'; break;
    case 'downloadPage': desc = 'Download page'; break;
    case 'product': desc = 'Product information'; break;
    case 'contact': desc = 'Contact page forms'; break;
    case 'newMedia': desc = 'Media/News section'; break;
    case 'activityDetail': desc = 'Event details page'; break;
    case 'pricing': desc = 'Pricing page'; break;
    case 'demo': desc = 'Demo request page'; break;
    case 'footer': desc = 'Footer navigation'; break;
    case 'faq': desc = 'FAQ section'; break;
    case 'caseStudyDetail': desc = 'Case study detail page'; break;
    case 'hero': desc = 'Homepage hero section'; break;
    case 'services': desc = 'Services overview'; break;
    case 'nav': desc = 'Navigation menu'; break;
    case 'blogDetail': desc = 'Blog post detail page'; break;
    case 'common': desc = 'Common UI elements'; break;
    case 'cta': desc = 'Call-to-action buttons'; break;
  }
  console.log(section.padEnd(25) + ' | ' + stats.totalStrings.toString().padStart(7) + ' | ' + desc);
});
console.log('-'.repeat(100));
console.log('TOTAL'.padEnd(25) + ' | ' + enPaths.length.toString().padStart(7));
console.log('');

// PART 2: Language Completion Matrix
console.log('='.repeat(100));
console.log('PART 2: LANGUAGE COMPLETION MATRIX');
console.log('='.repeat(100));
console.log('');
console.log('Shows which sections are fully translated in each language.');
console.log('✓ = 100% complete, X = Missing section, % = Partial');
console.log('');

const header = 'Section'.padEnd(25) + ' | ' + languages.slice(1).map(l => l.padStart(5)).join(' | ');
console.log(header);
console.log('-'.repeat(100));

const langStats = {};
languages.slice(1).forEach(lang => {
  langStats[lang] = { complete: 0, partial: 0, missing: 0, total: 0 };
});

sections.forEach(section => {
  const sectionPaths = sectionStats[section].paths;
  const row = [section.padEnd(25)];

  languages.slice(1).forEach(lang => {
    const langData = data[lang];
    if (!langData || !langData[section]) {
      row.push('    X');
      langStats[lang].missing++;
    } else {
      // Count matching paths
      let matchCount = 0;
      let identicalCount = 0;
      sectionPaths.forEach(p => {
        const enVal = getValueAtPath(en, p);
        const langVal = getValueAtPath(langData, p);
        if (langVal !== undefined) {
          matchCount++;
          if (langVal === enVal && typeof enVal === 'string' && enVal.length > 3) {
            identicalCount++;
          }
        }
      });

      const pct = Math.round((matchCount / sectionPaths.length) * 100);
      if (pct === 100 && identicalCount === 0) {
        row.push('    ✓');
        langStats[lang].complete++;
      } else if (pct === 100) {
        row.push(pct + '%*'); // Has identical strings
        langStats[lang].partial++;
      } else if (pct >= 100) {
        row.push('    ✓');
        langStats[lang].complete++;
      } else if (pct === 0) {
        row.push('    X');
        langStats[lang].missing++;
      } else {
        row.push((pct + '%').padStart(5));
        langStats[lang].partial++;
      }
    }
  });
  console.log(row.join(' | '));
});

console.log('-'.repeat(100));
console.log('');
console.log('* = Section exists but may have untranslated strings (identical to English)');
console.log('');

// PART 3: Summary per language
console.log('='.repeat(100));
console.log('PART 3: LANGUAGE SUMMARY');
console.log('='.repeat(100));
console.log('');

languages.slice(1).forEach(lang => {
  const langData = data[lang];
  const langPaths = langData ? getLeafPaths(langData) : [];

  // Count untranslated (identical to English)
  let untranslatedCount = 0;
  let missingCount = 0;

  enPaths.forEach(p => {
    const enVal = getValueAtPath(en, p);
    const langVal = getValueAtPath(langData, p);

    // Skip mockUI and brand
    if (p.startsWith('mockUI.') || p.startsWith('brand.')) return;

    if (langVal === undefined) {
      missingCount++;
    } else if (langVal === enVal && typeof enVal === 'string' && enVal.length > 5) {
      // Check if it's a technical term or brand name
      const skipTerms = ['InvoratecAI', 'BIM', 'Revit', 'API', 'SDK', 'OAuth', 'JWT', 'REST', 'IFC', 'ACC', 'Google', 'Anthropic', 'Claude', 'Autodesk', 'PDF', 'CSV', 'JSON', 'DLL', 'Webhook', 'Windows', 'Firebase'];
      const isSkipTerm = skipTerms.some(term => enVal.includes(term));
      if (!isSkipTerm) {
        untranslatedCount++;
      }
    }
  });

  const coverage = Math.round(((enPaths.length - missingCount - untranslatedCount) / enPaths.length) * 100);

  console.log(`${lang.toUpperCase()}:`);
  console.log(`  - Total strings in file: ${langPaths.length}`);
  console.log(`  - Missing from English: ${missingCount}`);
  console.log(`  - Potentially untranslated: ${untranslatedCount}`);
  console.log(`  - Estimated coverage: ${coverage}%`);
  console.log('');
});

// PART 4: Priority sections to fix
console.log('='.repeat(100));
console.log('PART 4: PRIORITY SECTIONS FOR TRANSLATION WORK');
console.log('='.repeat(100));
console.log('');
console.log('Sections ordered by importance and size:');
console.log('');

const priority = [
  { section: 'nav', priority: 'CRITICAL', reason: 'Visible on every page' },
  { section: 'footer', priority: 'CRITICAL', reason: 'Visible on every page' },
  { section: 'hero', priority: 'HIGH', reason: 'First thing users see' },
  { section: 'cta', priority: 'HIGH', reason: 'Conversion critical' },
  { section: 'pricing', priority: 'HIGH', reason: 'Revenue critical' },
  { section: 'features', priority: 'HIGH', reason: 'Core product info' },
  { section: 'product', priority: 'HIGH', reason: 'Core product info' },
  { section: 'faq', priority: 'MEDIUM', reason: 'Support & conversion' },
  { section: 'about', priority: 'MEDIUM', reason: 'Trust building' },
  { section: 'contact', priority: 'MEDIUM', reason: 'Lead generation' },
  { section: 'demo', priority: 'MEDIUM', reason: 'Lead generation' },
  { section: 'downloadPage', priority: 'MEDIUM', reason: 'Conversion' },
  { section: 'featuresPage', priority: 'MEDIUM', reason: 'Detailed product info' },
  { section: 'serviceBIM', priority: 'MEDIUM', reason: 'Service page' },
  { section: 'serviceAI', priority: 'MEDIUM', reason: 'Service page' },
  { section: 'serviceSupport', priority: 'MEDIUM', reason: 'Service page' },
  { section: 'services', priority: 'MEDIUM', reason: 'Service overview' },
  { section: 'docs', priority: 'LOW', reason: 'Technical documentation' },
  { section: 'terms', priority: 'LOW', reason: 'Legal (may need legal review)' },
  { section: 'blog', priority: 'LOW', reason: 'Content marketing' },
  { section: 'cases', priority: 'LOW', reason: 'Content marketing' },
  { section: 'newMedia', priority: 'LOW', reason: 'Content' },
  { section: 'activityRegistration', priority: 'LOW', reason: 'Events' },
  { section: 'activityDetail', priority: 'LOW', reason: 'Events' },
  { section: 'caseStudyDetail', priority: 'LOW', reason: 'Content detail' },
  { section: 'blogDetail', priority: 'LOW', reason: 'Content detail' },
  { section: 'common', priority: 'LOW', reason: 'UI elements' },
  { section: 'mockUI', priority: 'SKIP', reason: 'Demo content only' },
];

console.log('Priority | Section'.padEnd(30) + ' | Strings | Reason');
console.log('-'.repeat(100));
priority.forEach(p => {
  const stats = sectionStats[p.section];
  if (stats) {
    console.log(p.priority.padEnd(8) + ' | ' + p.section.padEnd(20) + ' | ' + stats.totalStrings.toString().padStart(7) + ' | ' + p.reason);
  }
});

console.log('');
console.log('='.repeat(100));
console.log('END OF REPORT');
console.log('='.repeat(100));
