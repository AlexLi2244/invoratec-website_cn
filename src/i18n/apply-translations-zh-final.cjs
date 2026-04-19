const fs = require('fs');
const path = require('path');

// Final Chinese translations for remaining terms
const translations = {
  "terms.developer.content.section5.subsection2.items.3": {
    zh: "适当显示 InvoratecAI 的归属信息"
  },
  "terms.developer.content.section6.subsection1.items.3": {
    zh: "为 Revit 操作实现适当的错误处理"
  },
  "terms.developer.content.section9.items.2": {
    zh: "我们可能会提前90天通知后停止API服务"
  }
};

// Function to set nested property
function setNestedProperty(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

console.log('='.repeat(80));
console.log('APPLYING FINAL CHINESE TRANSLATIONS');
console.log('='.repeat(80));

const filePath = path.join(__dirname, 'zh.json');
const zhData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
let appliedCount = 0;

for (const [key, langValues] of Object.entries(translations)) {
  if (langValues.zh) {
    setNestedProperty(zhData, key, langValues.zh);
    appliedCount++;
    console.log(`Applied: ${key}`);
  }
}

fs.writeFileSync(filePath, JSON.stringify(zhData, null, 2), 'utf8');
console.log(`\nZH: Applied ${appliedCount} translations`);
console.log('='.repeat(80));
