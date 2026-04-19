const fs = require('fs');
const en = JSON.parse(fs.readFileSync('./en.json', 'utf-8'));

function countAllKeys(obj, depth = 0) {
  let count = 0;
  let maxDepth = depth;
  
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return { count: 1, maxDepth: depth };
  }
  
  for (const key in obj) {
    count++;
    const result = countAllKeys(obj[key], depth + 1);
    count += result.count;
    maxDepth = Math.max(maxDepth, result.maxDepth);
  }
  
  return { count, maxDepth };
}

console.log('=== DETAILED SECTION ANALYSIS ===\n');
const sections = Object.keys(en);
let totalStringKeys = 0;

const sectionDetails = [];

sections.forEach(section => {
  const value = en[section];
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const result = countAllKeys(value, 1);
    totalStringKeys += result.count;
    sectionDetails.push({
      section: section,
      directKeys: Object.keys(value).length,
      totalKeys: result.count,
      maxDepth: result.maxDepth
    });
  } else {
    totalStringKeys++;
    sectionDetails.push({
      section: section,
      directKeys: 1,
      totalKeys: 1,
      maxDepth: 0
    });
  }
});

sectionDetails.forEach(d => {
  console.log(d.section + ':');
  console.log('  - Direct keys: ' + d.directKeys);
  console.log('  - Total keys (including nested): ' + d.totalKeys);
  console.log('  - Max nesting depth: ' + d.maxDepth);
  console.log('');
});

console.log('=== SUMMARY ===');
console.log('Total sections: ' + sections.length);
console.log('Total translatable strings: ' + totalStringKeys);
