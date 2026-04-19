const fs = require('fs');
const path = require('path');

// Deep merge utility
function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Extended AI terms translations
const extendedAiTerms = {
  "terms": {
    "ai": {
      "content": {
        "section5": {
          "title": "5. AI Output Limitations",
          "subsection1": {
            "title": "5.1 No Guarantee of Accuracy",
            "importantNotice": "Important Notice:",
            "content": "AI-generated content may contain errors, inaccuracies, or outdated information. AI outputs should be used as assistance and guidance, not as the sole basis for important decisions, especially in construction and engineering contexts where safety is paramount."
          },
          "subsection2": {
            "title": "5.2 Professional Judgment Required",
            "items": [
              "AI outputs do not constitute professional engineering or architectural advice",
              "Always verify AI suggestions against applicable codes and standards",
              "Use AI as a tool to assist, not replace, professional judgment",
              "Consult qualified professionals for critical decisions"
            ]
          },
          "subsection3": {
            "title": "5.3 Liability Limitation",
            "intro": "AI features are provided \"AS IS\" without warranties of any kind. We do not warrant that:",
            "items": [
              "AI outputs will be accurate, complete, or current",
              "AI features will be uninterrupted or error-free",
              "AI suggestions will meet your specific requirements",
              "AI analysis will identify all issues or opportunities"
            ]
          }
        },
        "section2": {
          "subsection2": {
            "title": "2.2 Processing Architecture"
          }
        }
      }
    }
  }
};

// Read and update en.json
const enPath = path.join(__dirname, 'en.json');
let enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
enJson = deepMerge(enJson, extendedAiTerms);
fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2), 'utf8');
console.log('✓ Updated en.json with extended AI terms translations');

console.log('\nExtended AI translations completed!');
