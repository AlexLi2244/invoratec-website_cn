const fs = require('fs');

const en = JSON.parse(fs.readFileSync('en.json', 'utf8'));
const ja = JSON.parse(fs.readFileSync('ja.json', 'utf8'));

function getKeys(obj, prefix = '') {
  let results = [];
  for (let key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      results.push(...getKeys(obj[key], fullKey));
    } else {
      results.push(fullKey);
    }
  }
  return results;
}

function getValue(obj, path) {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current === null) return undefined;
    current = current[key];
  }
  return current;
}

const enKeys = getKeys(en);
const jaKeys = getKeys(ja);

const skipPatterns = ['mockUI', 'brand', 'logo'];
const missing = enKeys.filter(k => {
  if (skipPatterns.some(p => k.includes(p))) return false;
  return !jaKeys.includes(k);
});

console.log('Missing JA keys with English values:\n');
missing.forEach(k => {
  const val = getValue(en, k);
  console.log(`"${k}": "${val}"`);
});
