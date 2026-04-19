const fs = require('fs');

const en = JSON.parse(fs.readFileSync('en.json', 'utf8'));

function findKey(obj, target, path = '') {
  for (let k in obj) {
    const newPath = path ? path + '.' + k : k;
    if (k === target) {
      console.log('Found at:', newPath);
      if (typeof obj[k] === 'object') {
        console.log('Keys:', Object.keys(obj[k]).slice(0, 20));
      }
    }
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      findKey(obj[k], target, newPath);
    }
  }
}

console.log('Searching for legalContent...');
findKey(en, 'legalContent');

console.log('\nSearching for integrationManager...');
findKey(en, 'integrationManager');

// Check terms structure
console.log('\nTerms top-level keys:', Object.keys(en.terms));
