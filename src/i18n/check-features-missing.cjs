const en = require('./en.json');
const ko = require('./ko.json');

function findUntranslated(enObj, koObj, prefix) {
  const missing = [];
  for (const key of Object.keys(enObj)) {
    const value = enObj[key];
    const koValue = koObj ? koObj[key] : undefined;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      missing.push(...findUntranslated(value, koValue, prefix + key + '.'));
    } else {
      if (!koValue || koValue === value) {
        missing.push(prefix + key);
      }
    }
  }
  return missing;
}

const fp = en.featuresPage;
const koFp = ko.featuresPage || {};
const missing = findUntranslated(fp, koFp, '');
console.log('Missing featuresPage keys in Korean:', missing.length);

const sections = {};
for (const key of missing) {
  const section = key.split('.')[0];
  if (!sections[section]) sections[section] = 0;
  sections[section]++;
}
console.log('\nBy section:');
for (const [section, count] of Object.entries(sections).sort((a,b) => b[1] - a[1])) {
  console.log('  ' + section + ':', count);
}

console.log('\nSample missing keys:');
missing.slice(0, 30).forEach(k => console.log('  ' + k));
