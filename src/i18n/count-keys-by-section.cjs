const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

function countBySection(obj, prefix) {
  const sections = {};
  
  for (const key in obj) {
    const fullKey = prefix ? prefix + '.' + key : key;
    const val = obj[key];
    
    if (typeof val === 'string') {
      const section = prefix ? prefix : 'root';
      sections[section] = (sections[section] || 0) + 1;
    } else if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      const subSections = countBySection(val, fullKey);
      for (const s in subSections) {
        sections[s] = (sections[s] || 0) + subSections[s];
      }
    }
  }
  
  return sections;
}

const sections = countBySection(en, '');
const sorted = Object.entries(sections).sort((a, b) => b[1] - a[1]);

console.log('Keys by top-level section:');
let total = 0;
sorted.forEach(([section, count]) => {
  console.log('  ' + section + ': ' + count);
  total += count;
});
console.log('Total: ' + total);
