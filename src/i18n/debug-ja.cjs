const fs = require('fs');
const path = require('path');

const ja = JSON.parse(fs.readFileSync(path.join(__dirname, 'ja.json'), 'utf8'));
const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

console.log('=== STRUCTURE CHECK ===');
console.log('ja.docs exists:', !!ja.docs);
console.log('ja.docs.legalContent exists:', !!ja.docs?.legalContent);
console.log('ja.docs.legalContent.dpa exists:', !!ja.docs?.legalContent?.dpa);
console.log('ja.docs.legalContent.dpa type:', typeof ja.docs?.legalContent?.dpa);
console.log('ja.docs.legalContent.dpa length:', (ja.docs?.legalContent?.dpa || '').length);

console.log('\n=== CONTENT COMPARISON ===');
const jaDpa = ja.docs?.legalContent?.dpa || '';
const enDpa = en.docs?.legalContent?.dpa || '';

console.log('EN DPA first 100 chars:', enDpa.substring(0, 100));
console.log('JA DPA first 100 chars:', jaDpa.substring(0, 100));

console.log('\n=== ARE THEY IDENTICAL? ===');
console.log('Identical:', jaDpa === enDpa);

// Check if JA has Japanese characters
console.log('\n=== JAPANESE CHARACTER CHECK ===');
const hasJapanese = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(jaDpa);
console.log('JA DPA contains Japanese characters:', hasJapanese);
