const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

const skipTerms = new Set([
  'Windows 10/11', 'Windows', 'Revit', 'Excel', 'Internet', 'BIM/AEC', 'Overview',
  'Autodesk', 'Google', 'Firebase', 'API', 'SDK', 'Person', 'Status', 'Relation',
  'IFC', 'NWD', 'PDF', 'DWG', 'ACC', 'APS', 'MEP', 'HVAC', 'OAuth', 'URL', 'RGB',
  'Kanban', 'Gantt', 'Dashboard', 'JSON', 'CSV', 'XML', 'BIM AI', 'Web AI',
  'InvoratecAI', 'Invoratec', 'Claude', 'Anthropic', 'cloud.invoratec.com',
  'Invoratec Inc.', 'Gmail', 'Google Workspace', 'Google Cloud Platform',
  'Autodesk Revit - InvoratecAI', 'Autodesk Construction Cloud', 'BIM AI (Revit)',
  'Web AI (Cloud)', 'Revit Plugin', 'Cloud Platform', 'Firebase / Firestore',
  'Starter', 'Professional', 'Enterprise', 'Standard', 'Documentation',
  'Configuration', 'Installation', 'Coordination', 'Tutorial', 'Format',
  'Innovation', 'Cloud', 'Collaboration', 'Conclusion', 'Client', 'Solution',
  'Commercial', 'Infrastructure', 'Support', 'Terms of Service', 'Cookies',
  'Agenda', 'Highlights', 'Online', 'Event', 'Blog', 'Download', 'Demo',
  'Description', 'Endpoint', 'Contact'
]);

function shouldSkip(value) {
  if (!value || typeof value !== 'string') return true;
  if (value.length <= 4) return true;
  if (skipTerms.has(value)) return true;
  if (value.includes('@') || value.includes('http') || value.includes('.com') || value.includes('.cn')) return true;
  if (/^\d+\.\d+/.test(value) || /^v\d+/.test(value)) return true;
  return false;
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

const allKeys = getAllKeys(en, '');

// Take Japanese as sample to see what strings need translation
const ja = JSON.parse(fs.readFileSync(path.join(__dirname, 'ja.json'), 'utf8'));

const untranslated = {};
for (const key of allKeys) {
  const enVal = getValue(en, key);
  const jaVal = getValue(ja, key);

  if (typeof enVal === 'string' && typeof jaVal === 'string' && enVal === jaVal && !shouldSkip(enVal)) {
    const section = key.split('.')[0];
    if (!untranslated[section]) untranslated[section] = [];
    untranslated[section].push({ key, value: enVal });
  }
}

// Output unique strings per section
console.log('Unique strings needing translation by section:\n');

for (const [section, items] of Object.entries(untranslated).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n=== ${section} (${items.length} strings) ===\n`);

  // Get unique values
  const uniqueValues = [...new Set(items.map(i => i.value))];
  uniqueValues.slice(0, 30).forEach(v => {
    console.log(`"${v}"`);
  });
  if (uniqueValues.length > 30) {
    console.log(`... and ${uniqueValues.length - 30} more unique values`);
  }
}
