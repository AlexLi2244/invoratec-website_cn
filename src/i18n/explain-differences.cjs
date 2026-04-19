const fs = require('fs');

const en = JSON.parse(fs.readFileSync('en.json', 'utf8'));

function countKeys(obj) {
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      count += countKeys(obj[key]);
    } else {
      count++;
    }
  }
  return count;
}

function getTopLevelCounts(obj) {
  const counts = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      counts[key] = countKeys(obj[key]);
    } else {
      counts[key] = 1;
    }
  }
  return counts;
}

console.log('='.repeat(80));
console.log('BREAKDOWN OF KEY COUNTS BY SECTION');
console.log('='.repeat(80));

const enCounts = getTopLevelCounts(en);
const sortedSections = Object.entries(enCounts).sort((a, b) => b[1] - a[1]);

let mockUICount = 0;
let otherCount = 0;

for (const [section, count] of sortedSections) {
  if (section === 'mockUI') {
    mockUICount = count;
    console.log(`${section}: ${count} keys (EXCLUDED from translation)`);
  } else {
    otherCount += count;
    console.log(`${section}: ${count} keys`);
  }
}

console.log('\n' + '='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));
console.log(`Total keys in English: ${countKeys(en)}`);
console.log(`mockUI section: ${mockUICount} keys (excluded)`);
console.log(`Other sections: ${otherCount} keys (translated)`);
console.log(`\nExpected completion: ${((otherCount / countKeys(en)) * 100).toFixed(1)}% when mockUI is excluded`);
