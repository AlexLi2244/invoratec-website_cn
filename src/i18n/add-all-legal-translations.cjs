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

// =====================================================
// ENGLISH TRANSLATIONS
// =====================================================
const enTranslations = {
  "terms": {
    "developer": {
      "title": "Developer Terms",
      "content": {
        "intro": "Welcome to InvoratecAI's developer program! These Developer Terms (\"Terms\"), along with any other terms and policies incorporated by reference, are a binding agreement between Invoratec Inc. (\"InvoratecAI,\" \"we,\" or \"us\") and the individual or entity registering as a developer (\"you\" or \"Developer\").",
        "introNote": "By clicking \"I agree\" or by using our APIs, SDKs, or Developer Platform, you agree to be bound by these Terms.",
        "section1": {
          "title": "1. Definitions",
          "items": [
            "\"API\" means InvoratecAI's application programming interfaces, SDKs, and accompanying documentation",
            "\"Application\" means software applications, plugins, extensions, or integrations that use our API",
            "\"Customer Data\" means any data, content, or information that end users submit through the InvoratecAI platform",
            "\"Developer Platform\" means our developer portal, documentation, and related tools",
            "\"End Users\" means individuals who use your Application"
          ]
        },
        "section2": {
          "title": "2. API License Grant",
          "subsection1": {
            "title": "2.1 License",
            "intro": "Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:",
            "items": [
              "Access and use our API to develop Applications",
              "Use our documentation and developer tools",
              "Display InvoratecAI branding in accordance with our Brand Guidelines"
            ]
          },
          "subsection2": {
            "title": "2.2 Restrictions",
            "intro": "You agree NOT to:",
            "items": [
              "Sublicense, sell, or redistribute access to the API",
              "Use the API to create a competing product",
              "Circumvent any rate limits or access controls",
              "Reverse engineer, decompile, or disassemble any part of the API",
              "Use the API for any illegal or unauthorized purpose",
              "Interfere with or disrupt the API or InvoratecAI services",
              "Access Customer Data beyond what is necessary for your Application"
            ]
          }
        },
        "section3": {
          "title": "3. API Access and Authentication",
          "subsection1": {
            "title": "3.1 API Keys",
            "intro": "To access the API, you must:",
            "items": [
              "Register for a developer account",
              "Obtain API credentials (API keys or OAuth tokens)",
              "Keep credentials secure and confidential",
              "Immediately notify us if credentials are compromised"
            ]
          },
          "subsection2": {
            "title": "3.2 Rate Limits",
            "intro": "API usage is subject to rate limits:",
            "items": [
              "Standard Tier: 100 requests per minute",
              "Professional Tier: 1,000 requests per minute",
              "Enterprise Tier: Custom limits based on agreement"
            ],
            "note": "Exceeding rate limits may result in temporary or permanent API access suspension."
          }
        },
        "section4": {
          "title": "4. Data Handling Requirements",
          "subsection1": {
            "title": "4.1 Customer Data Protection",
            "intro": "When your Application accesses Customer Data, you must:",
            "items": [
              "Only access data that End Users have explicitly authorized",
              "Implement appropriate security measures to protect data",
              "Delete data upon End User request or when no longer needed",
              "Comply with all applicable data protection laws (GDPR, CCPA, etc.)"
            ]
          },
          "subsection2": {
            "title": "4.2 Privacy Policy",
            "intro": "You must maintain a privacy policy that:",
            "items": [
              "Accurately describes your data collection and use practices",
              "Discloses your use of InvoratecAI API and services",
              "Is easily accessible to End Users"
            ]
          },
          "subsection3": {
            "title": "4.3 BIM Model Data",
            "intro": "Special handling is required for BIM model data:",
            "items": [
              "Do not store BIM models longer than necessary",
              "Implement access controls for sensitive project data",
              "Do not share model data with unauthorized third parties",
              "Respect intellectual property rights in designs"
            ]
          }
        },
        "section5": {
          "title": "5. Application Requirements",
          "subsection1": {
            "title": "5.1 Quality Standards",
            "intro": "Your Application must:",
            "items": [
              "Be stable, functional, and free of major bugs",
              "Not contain malware, spyware, or malicious code",
              "Handle API errors gracefully",
              "Provide accurate descriptions of functionality"
            ]
          },
          "subsection2": {
            "title": "5.2 User Experience",
            "items": [
              "Obtain clear user consent before accessing InvoratecAI data",
              "Provide clear instructions for using the integration",
              "Allow users to disconnect the integration",
              "Display appropriate attribution to InvoratecAI"
            ]
          },
          "subsection3": {
            "title": "5.3 Security Requirements",
            "items": [
              "Use HTTPS for all API communications",
              "Store API credentials securely (never in client-side code)",
              "Implement proper authentication for End Users",
              "Follow secure coding practices"
            ]
          }
        },
        "section6": {
          "title": "6. Revit Add-in Development",
          "intro": "If your Application integrates with our BIM AI Revit Add-in:",
          "subsection1": {
            "title": "6.1 Technical Requirements",
            "items": [
              "Target supported Revit versions (2019 and later)",
              "Use .NET Framework 4.8 for compatibility",
              "Follow Autodesk Revit API guidelines",
              "Implement proper error handling for Revit operations"
            ]
          },
          "subsection2": {
            "title": "6.2 Distribution",
            "items": [
              "Code sign your add-in with a valid certificate",
              "Provide clear installation instructions",
              "Do not bundle InvoratecAI software without permission"
            ]
          }
        },
        "section7": {
          "title": "7. Support and Maintenance",
          "subsection1": {
            "title": "7.1 API Changes",
            "intro": "We may update the API from time to time:",
            "items": [
              "We will provide reasonable notice for breaking changes",
              "Deprecated endpoints will remain available for 6 months",
              "Emergency security updates may be deployed immediately"
            ]
          },
          "subsection2": {
            "title": "7.2 Developer Support",
            "items": [
              "Documentation available at docs.invoratec.com",
              "Developer support via developer@invoratec.com",
              "Community forums for peer support"
            ]
          }
        },
        "section8": {
          "title": "8. Fees",
          "intro": "API access may be subject to fees depending on usage tier:",
          "items": [
            "Free Tier: Limited requests for development and testing",
            "Paid Tiers: Higher limits with usage-based pricing",
            "Enterprise: Custom pricing for high-volume usage"
          ],
          "note": "Current pricing is available on our Developer Portal."
        },
        "section9": {
          "title": "9. Termination",
          "intro": "Either party may terminate this agreement:",
          "items": [
            "You may stop using the API at any time",
            "We may suspend or terminate access for violation of these Terms",
            "We may discontinue the API with 90 days' notice"
          ],
          "note": "Upon termination, you must cease using the API and delete any cached Customer Data."
        },
        "section10": {
          "title": "10. Contact",
          "intro": "For developer-related questions:",
          "developerSupport": "Developer Support",
          "documentation": "Documentation",
          "general": "General"
        }
      }
    },
    "ai": {
      "title": "AI Additional Terms",
      "content": {
        "intro": "These AI Additional Terms (\"AI Terms\") supplement and are incorporated into the InvoratecAI Terms of Service. They govern your use of AI-powered features within our BIM AI and Web AI platforms. By using our AI features, you agree to these additional terms.",
        "section1": {
          "title": "1. AI Features Overview",
          "subsection1": {
            "title": "1.1 BIM AI Features",
            "intro": "Our BIM AI platform provides intelligent assistance for Revit and construction workflows:",
            "items": [
              "Natural Language Queries: Ask questions about your BIM models in plain language",
              "Element Analysis: AI-powered analysis of model elements and properties",
              "Smart Suggestions: Intelligent recommendations for model improvements",
              "Documentation Assistance: AI-generated descriptions and reports",
              "Clash Detection Insights: AI analysis of coordination issues"
            ]
          },
          "subsection2": {
            "title": "1.2 Web AI Features",
            "intro": "Our Web AI platform enables intelligent web content interaction:",
            "items": [
              "Content Summarization: AI-generated summaries of web pages",
              "Question Answering: Get answers based on web content",
              "Research Assistance: AI-powered research and information gathering",
              "Translation Support: Multi-language content understanding"
            ]
          }
        },
        "section2": {
          "title": "2. AI Technology",
          "subsection1": {
            "title": "2.1 AI Provider",
            "content": "InvoratecAI utilizes Anthropic's Claude AI models to power our intelligent features. Anthropic is a leading AI safety company committed to building reliable, interpretable, and steerable AI systems."
          },
          "subsection2": {
            "title": "2.2 Processing Architecture",
            "items": [
              "AI queries are processed in real-time through secure API connections",
              "Your data is transmitted securely using industry-standard encryption",
              "AI processing occurs in Anthropic's secure infrastructure",
              "Results are returned directly to you without intermediate storage"
            ]
          }
        },
        "section3": {
          "title": "3. Data Usage and AI",
          "subsection1": {
            "title": "3.1 What Data is Processed",
            "intro": "When you use AI features, the following data may be processed:",
            "items": [
              "Query Content: Your questions, prompts, and instructions",
              "Context Data: Relevant portions of BIM models or web content needed to answer your query",
              "Conversation History: Previous messages in the current session for context continuity"
            ]
          },
          "subsection2": {
            "title": "3.2 Data NOT Used for Training",
            "importantTitle": "Important Privacy Commitment:",
            "items": [
              "Your data is NOT used to train AI models",
              "Your queries are NOT stored by Anthropic after processing",
              "Your BIM models and project data remain confidential",
              "AI interactions are processed ephemerally"
            ]
          },
          "subsection3": {
            "title": "3.3 Data Retention",
            "intro": "AI query data retention:",
            "items": [
              "Processing: Queries are processed in real-time and not persisted by the AI provider",
              "Logging: We may log metadata (timestamps, token counts) for billing and quality purposes",
              "History: Conversation history within a session is temporary and cleared when you start a new session"
            ]
          }
        },
        "section4": {
          "title": "4. Acceptable Use of AI Features",
          "subsection1": {
            "title": "4.1 Permitted Uses",
            "items": [
              "Querying and analyzing your own BIM models and data",
              "Generating documentation and reports for your projects",
              "Asking questions about construction and design best practices",
              "Using AI suggestions to improve your workflows"
            ]
          },
          "subsection2": {
            "title": "4.2 Prohibited Uses",
            "intro": "You agree NOT to use AI features to:",
            "items": [
              "Generate misleading, false, or deceptive content",
              "Create content that violates others' intellectual property rights",
              "Attempt to extract training data or reverse engineer AI models",
              "Automate queries in a way that abuses the service",
              "Generate harmful, illegal, or offensive content",
              "Impersonate others or create fake identities"
            ]
          }
        },
        "section5": {
          "title": "5. AI Output Limitations",
          "subsection1": {
            "title": "5.1 No Guarantee of Accuracy",
            "content": "AI-generated outputs are provided as-is and may contain errors or inaccuracies. You are responsible for reviewing and verifying all AI outputs before relying on them for professional decisions."
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
            "content": "InvoratecAI is not liable for any decisions made based on AI outputs or any damages resulting from reliance on AI-generated content."
          }
        },
        "section6": {
          "title": "6. Intellectual Property",
          "subsection1": {
            "title": "6.1 Your Content",
            "content": "You retain ownership of your input data and content. AI-generated outputs based on your inputs belong to you, subject to these Terms."
          },
          "subsection2": {
            "title": "6.2 AI Model Rights",
            "content": "The AI models, algorithms, and underlying technology remain the property of InvoratecAI and our technology partners (including Anthropic)."
          }
        },
        "section7": {
          "title": "7. Contact",
          "intro": "For AI-related questions or concerns:",
          "aiSupport": "AI Support",
          "privacy": "Privacy",
          "general": "General"
        }
      }
    },
    "cookies": {
      "title": "Cookie Policy",
      "content": {
        "intro": "This Cookie Policy explains how Invoratec Inc. (\"InvoratecAI,\" \"we,\" \"us,\" or \"our\") uses cookies and similar technologies on our websites and applications. By using our Services, you consent to the use of cookies as described in this policy.",
        "section1": {
          "title": "1. What Are Cookies?",
          "content": "Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences and improve your browsing experience.",
          "intro": "Similar technologies include:",
          "items": [
            "Local Storage: Stores data in your browser for longer periods",
            "Session Storage: Stores data temporarily during a browsing session",
            "Pixels/Web Beacons: Small images that track page visits and actions"
          ]
        },
        "section2": {
          "title": "2. Types of Cookies We Use",
          "subsection1": {
            "title": "2.1 Essential Cookies",
            "intro": "These cookies are necessary for the website to function and cannot be disabled. They include:",
            "cookies": [
              { "name": "invoratec_user", "purpose": "Stores user authentication state", "duration": "Session" },
              { "name": "locale", "purpose": "Stores language preference", "duration": "1 year" },
              { "name": "region", "purpose": "Stores regional preference (US/China)", "duration": "1 year" },
              { "name": "cookie_consent", "purpose": "Remembers your cookie preferences", "duration": "1 year" }
            ]
          },
          "subsection2": {
            "title": "2.2 Functional Cookies",
            "intro": "These cookies enable enhanced functionality and personalization:",
            "cookies": [
              { "name": "theme", "purpose": "Remembers light/dark mode preference", "duration": "1 year" },
              { "name": "recent_projects", "purpose": "Stores recently viewed projects", "duration": "30 days" }
            ]
          },
          "subsection3": {
            "title": "2.3 Analytics Cookies",
            "intro": "We use analytics cookies to understand how visitors use our website:",
            "items": [
              "Google Analytics: Helps us understand website traffic and usage patterns",
              "These cookies collect anonymous data about page views, time spent, and navigation"
            ]
          },
          "subsection4": {
            "title": "2.4 Marketing Cookies",
            "content": "We currently do not use marketing or advertising cookies."
          }
        },
        "section3": {
          "title": "3. Managing Cookies",
          "subsection1": {
            "title": "3.1 Browser Settings",
            "content": "You can control cookies through your browser settings. Most browsers allow you to:",
            "items": [
              "See what cookies are stored and delete them",
              "Block third-party cookies",
              "Block all cookies from specific sites",
              "Block all cookies entirely"
            ],
            "note": "Note: Blocking essential cookies may prevent the website from functioning properly."
          },
          "subsection2": {
            "title": "3.2 Our Cookie Preferences",
            "content": "You can manage your cookie preferences using our cookie consent banner when you first visit our site, or contact us to update your preferences."
          }
        },
        "section4": {
          "title": "4. Third-Party Cookies",
          "content": "Some features on our site may set cookies from third parties:",
          "items": [
            "Google Analytics (analytics)",
            "Autodesk (for ACC integration features)",
            "YouTube (if embedded videos are present)"
          ],
          "note": "These third parties have their own privacy policies governing cookie use."
        },
        "section5": {
          "title": "5. Cookie Duration",
          "intro": "Cookies have different lifespans:",
          "items": [
            "Session Cookies: Deleted when you close your browser",
            "Persistent Cookies: Remain until they expire or you delete them"
          ]
        },
        "section6": {
          "title": "6. Updates to This Policy",
          "content": "We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date."
        },
        "section7": {
          "title": "7. Contact",
          "intro": "For questions about our use of cookies:",
          "privacy": "Privacy",
          "general": "General"
        },
        "tableHeaders": {
          "cookieName": "Cookie Name",
          "purpose": "Purpose",
          "duration": "Duration"
        }
      }
    },
    "privacy": {
      "content": {
        "intro": "This Privacy Policy describes how Invoratec Inc. (\"InvoratecAI,\" \"we,\" \"us,\" or \"our\") collects, uses, and shares information about you when you use our BIM AI (Revit Add-in), Web AI (Cloud Platform), and related services (collectively, the \"Services\").",
        "section1": {
          "title": "1. Information We Collect",
          "subsection1": {
            "title": "1.1 Information You Provide",
            "items": [
              "Account Information: Name, email address, company name, password, and role when you create an account",
              "Project Data: BIM models, drawings, project information, tasks, and collaboration content you upload or create",
              "Communications: Messages you send to us, including support requests and feedback",
              "Payment Information: Billing details processed through our payment providers (we do not store full payment card numbers)"
            ]
          },
          "subsection2": {
            "title": "1.2 Information Collected Automatically",
            "items": [
              "Usage Data: Features used, actions taken, time spent, and interaction patterns",
              "Device Information: Operating system, Revit version, browser type, and device identifiers",
              "Log Data: IP address, access times, pages viewed, and referring URLs",
              "Location Data: General geographic region based on IP address for service optimization"
            ]
          },
          "subsection3": {
            "title": "1.3 Information from Third Parties",
            "items": [
              "Autodesk Integration: When you connect to Autodesk Construction Cloud (ACC), we receive project data you authorize",
              "AI Services: AI queries are processed through Anthropic's Claude API without retaining your data"
            ]
          }
        },
        "section2": {
          "title": "2. How We Use Your Information",
          "intro": "We use the information we collect to:",
          "items": [
            "Provide Services: Operate and maintain the BIM AI and Web AI platforms",
            "Process AI Queries: Power AI assistant features for BIM model analysis and design assistance",
            "Enable Collaboration: Facilitate team collaboration, task management, and model sharing",
            "Improve Services: Analyze usage patterns to enhance features and user experience",
            "Communicate: Send service updates, security alerts, and support messages",
            "Ensure Security: Detect and prevent fraud, abuse, and security incidents",
            "Comply with Law: Meet legal obligations and respond to lawful requests"
          ]
        },
        "section3": {
          "title": "3. How We Share Information",
          "subsection1": {
            "title": "3.1 Service Providers",
            "intro": "We share information with third-party service providers who assist in operating our Services:",
            "items": [
              "Google Cloud Platform: Cloud infrastructure and data storage",
              "Anthropic: AI processing for intelligent features",
              "Email Services: Transactional email delivery",
              "Analytics Providers: Usage analytics and performance monitoring"
            ]
          },
          "subsection2": {
            "title": "3.2 Within Your Organization",
            "intro": "When you use InvoratecAI as part of an organization:",
            "items": [
              "Organization administrators can view member activity and manage access",
              "Team members can see shared projects and collaboration content",
              "Usage reports may be available to organization administrators"
            ]
          },
          "subsection3": {
            "title": "3.3 Legal Requirements",
            "content": "We may disclose information if required by law or in response to valid legal process."
          },
          "subsection4": {
            "title": "3.4 Business Transfers",
            "content": "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
          }
        },
        "section4": {
          "title": "4. Data Retention",
          "intro": "We retain your information for as long as necessary to:",
          "items": [
            "Provide the Services you have requested",
            "Comply with legal obligations",
            "Resolve disputes and enforce agreements",
            "Maintain business records for audit purposes"
          ],
          "note": "When you delete your account, we will delete or anonymize your personal information within 90 days, except where retention is required by law."
        },
        "section5": {
          "title": "5. Your Rights and Choices",
          "subsection1": {
            "title": "5.1 Access and Portability",
            "content": "You can access your data through the InvoratecAI platform and export your projects and information."
          },
          "subsection2": {
            "title": "5.2 Correction",
            "content": "You can update your account information and project data at any time through the Settings."
          },
          "subsection3": {
            "title": "5.3 Deletion",
            "content": "You can request deletion of your account and personal data by contacting us at privacy@invoratec.com."
          },
          "subsection4": {
            "title": "5.4 Opt-Out",
            "items": [
              "Marketing Emails: Unsubscribe using the link in any marketing email",
              "Analytics: Adjust browser settings to limit tracking",
              "Cookies: Manage preferences through our Cookie Policy"
            ]
          },
          "subsection5": {
            "title": "5.5 Regional Rights",
            "content": "If you are in the European Economic Area (EEA) or California, you have additional rights under GDPR or CCPA respectively, including the right to lodge a complaint with a supervisory authority."
          }
        },
        "section6": {
          "title": "6. International Data Transfers",
          "intro": "Your information may be transferred to and processed in countries other than your country of residence, including the United States. We implement appropriate safeguards for such transfers, including:",
          "items": [
            "Standard Contractual Clauses approved by the European Commission",
            "Compliance with applicable data protection frameworks"
          ]
        },
        "section7": {
          "title": "7. Children's Privacy",
          "content": "Our Services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If we learn that we have collected personal information from a child under 16, we will delete that information."
        },
        "section8": {
          "title": "8. Changes to This Policy",
          "content": "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the \"Last Updated\" date. We encourage you to review this policy periodically."
        },
        "section9": {
          "title": "9. Contact Us",
          "intro": "For questions about this Privacy Policy or our data practices, please contact us:",
          "company": "Invoratec Inc.",
          "email": "Email",
          "general": "General"
        }
      }
    },
    "security": {
      "content": {
        "intro": "At InvoratecAI, we take the security of your data seriously. This Security Policy outlines the measures we implement to protect your information across our BIM AI (Revit Add-in) and Web AI (Cloud Platform) products.",
        "section1": {
          "title": "1. Infrastructure Security",
          "subsection1": {
            "title": "1.1 Cloud Infrastructure",
            "intro": "InvoratecAI is hosted on Google Cloud Platform (GCP), leveraging enterprise-grade security features:",
            "items": [
              "Data Centers: Google's world-class data centers with SOC 1, SOC 2, and SOC 3 certifications",
              "Network Security: Google Cloud's global network with built-in DDoS protection",
              "Cloud Functions: Serverless architecture with automatic scaling and isolation",
              "Firebase/Firestore: Real-time database with enterprise security and encryption"
            ]
          },
          "subsection2": {
            "title": "1.2 Data Storage",
            "intro": "Your BIM models, project data, and user information are stored with multiple layers of protection:",
            "items": [
              "Encryption at Rest: All data encrypted using AES-256 encryption",
              "Encryption in Transit: TLS 1.3 for all data transmission",
              "Isolated Storage: Company data segregated by organization ID",
              "Backup & Recovery: Automated daily backups with point-in-time recovery"
            ]
          }
        },
        "section2": {
          "title": "2. Application Security",
          "subsection1": {
            "title": "2.1 Authentication & Access Control",
            "items": [
              "Password Security: SHA-256 password hashing with secure key derivation",
              "Session Management: Secure session handling with automatic timeout",
              "Role-Based Access: Admin, Manager, and User role permissions",
              "User Approval Workflow: New users require admin approval before access"
            ]
          },
          "subsection2": {
            "title": "2.2 Revit Add-in Security",
            "intro": "Our BIM AI Revit plugin implements additional security measures:",
            "items": [
              "Code Signing: Digitally signed installer and DLL files",
              "Local Data Protection: Encrypted local cache with secure storage",
              "API Communication: All API calls use HTTPS with certificate pinning",
              "Offline Security: Credentials never stored in plain text"
            ]
          },
          "subsection3": {
            "title": "2.3 Web Platform Security",
            "items": [
              "CORS Protection: Strict cross-origin resource sharing policies",
              "XSS Prevention: Content Security Policy headers and input sanitization",
              "CSRF Protection: Token-based request validation",
              "Secure Headers: HSTS, X-Content-Type-Options, X-Frame-Options"
            ]
          }
        },
        "section3": {
          "title": "3. AI & Data Processing Security",
          "subsection1": {
            "title": "3.1 AI Model Security",
            "intro": "Our AI features (powered by Claude/Anthropic) follow strict data handling practices:",
            "items": [
              "No Training on Your Data: Your project data is never used to train AI models",
              "Ephemeral Processing: AI queries are processed in real-time and not retained",
              "Prompt Filtering: Input validation to prevent prompt injection attacks",
              "Response Sanitization: AI outputs are validated before display"
            ]
          },
          "subsection2": {
            "title": "3.2 Third-Party Integrations",
            "items": [
              "Autodesk Integration: OAuth 2.0 with scoped permissions for ACC access",
              "Email Services: TLS-encrypted email transmission via Gmail SMTP",
              "API Keys: Securely stored in environment variables, never exposed to clients"
            ]
          }
        },
        "section4": {
          "title": "4. Operational Security",
          "subsection1": {
            "title": "4.1 Monitoring & Logging",
            "items": [
              "Access Logs: All API access logged with timestamps and user identification",
              "Error Tracking: Real-time error monitoring and alerting",
              "Performance Monitoring: Cloud Function metrics and latency tracking",
              "Audit Trail: Activity logs for user actions and data modifications"
            ]
          },
          "subsection2": {
            "title": "4.2 Incident Response",
            "intro": "We maintain a comprehensive incident response plan:",
            "items": [
              "Detection: Automated alerts for suspicious activity",
              "Response: Defined escalation procedures and response team",
              "Communication: Customer notification within 72 hours of confirmed breach",
              "Recovery: Documented recovery procedures and post-incident review"
            ]
          }
        },
        "section5": {
          "title": "5. Compliance & Certifications",
          "items": [
            "GDPR: Compliant with European data protection requirements",
            "CCPA: Compliant with California Consumer Privacy Act",
            "Cloud Provider Certifications: Inherits GCP's SOC 2 Type II, ISO 27001, and ISO 27017 certifications"
          ]
        },
        "section6": {
          "title": "6. Security Best Practices for Users",
          "intro": "We recommend the following security practices:",
          "items": [
            "Use strong, unique passwords (minimum 8 characters with mixed case and numbers)",
            "Keep your Revit add-in updated to the latest version",
            "Review user access permissions regularly",
            "Report suspicious activity to our security team immediately",
            "Use the web platform over HTTPS only"
          ]
        },
        "section7": {
          "title": "7. Security Contact",
          "intro": "For security concerns or to report vulnerabilities, please contact us:",
          "email": "Email",
          "general": "General Support"
        }
      }
    },
    "tos": {
      "content": {
        "intro": "Welcome to InvoratecAI! These Terms of Service (\"Terms\") govern your access to and use of InvoratecAI's products, services, and websites (collectively, the \"Services\"), including our BIM AI Revit Add-in and Web AI Cloud Platform.",
        "introNote": "By using our Services, you agree to these Terms. If you are using the Services on behalf of an organization, you agree to these Terms on behalf of that organization.",
        "section1": {
          "title": "1. Account Registration",
          "intro": "To access the Services, you must create an account. You agree to:",
          "items": [
            "Provide accurate, current, and complete information during registration",
            "Maintain and update your account information",
            "Keep your password secure and confidential",
            "Be responsible for all activities under your account",
            "Notify us immediately of any unauthorized access"
          ],
          "note": "We reserve the right to suspend or terminate accounts that violate these Terms or are inactive for extended periods."
        },
        "section2": {
          "title": "2. Description of Services",
          "subsection1": {
            "title": "2.1 BIM AI (Revit Add-in)",
            "intro": "Our Revit Add-in provides:",
            "items": [
              "AI-powered design assistance and voice control",
              "Project and task management integration",
              "Cloud synchronization with the Web Platform",
              "Autodesk Construction Cloud integration"
            ]
          },
          "subsection2": {
            "title": "2.2 Web AI (Cloud Platform)",
            "intro": "Our web platform provides:",
            "items": [
              "3D model viewing and collaboration",
              "Project management and Kanban boards",
              "Team collaboration and user management",
              "AI assistant for BIM queries",
              "Timeline and reporting features"
            ]
          }
        },
        "section3": {
          "title": "3. User Content",
          "subsection1": {
            "title": "3.1 Your Content",
            "content": "You retain ownership of all content you upload to the Services (\"User Content\"), including BIM models, drawings, project data, and documents. By uploading User Content, you grant us a limited license to host, store, and display your content as necessary to provide the Services."
          },
          "subsection2": {
            "title": "3.2 Content Responsibilities",
            "intro": "You are responsible for your User Content and agree not to upload content that:",
            "items": [
              "Infringes on intellectual property rights of others",
              "Contains malware, viruses, or harmful code",
              "Violates any applicable laws or regulations",
              "Contains confidential information you are not authorized to share"
            ]
          },
          "subsection3": {
            "title": "3.3 Content Removal",
            "content": "We may remove User Content that violates these Terms or applicable law. We will notify you of such removal when legally permitted."
          }
        },
        "section4": {
          "title": "4. Acceptable Use",
          "intro": "You agree not to:",
          "items": [
            "Use the Services for any illegal purpose",
            "Attempt to gain unauthorized access to our systems",
            "Interfere with or disrupt the Services",
            "Reverse engineer, decompile, or disassemble our software",
            "Use automated tools to scrape or extract data",
            "Resell or redistribute the Services without authorization",
            "Circumvent any security or access controls",
            "Use the AI features to generate harmful or misleading content"
          ]
        },
        "section5": {
          "title": "5. Pricing and Payment",
          "subsection1": {
            "title": "5.1 Subscription Plans",
            "content": "Some Services require a paid subscription. Current pricing is available on our website. We may change pricing with 30 days' notice."
          },
          "subsection2": {
            "title": "5.2 Payment Terms",
            "items": [
              "Subscriptions are billed in advance on a monthly or annual basis",
              "All fees are non-refundable except as required by law",
              "You are responsible for all applicable taxes",
              "We may suspend access for overdue payments"
            ]
          },
          "subsection3": {
            "title": "5.3 Trial Period",
            "content": "We may offer free trial periods. At the end of the trial, you will be charged for the applicable subscription unless you cancel."
          }
        },
        "section6": {
          "title": "6. Intellectual Property",
          "subsection1": {
            "title": "6.1 Our Rights",
            "content": "The Services, including all software, features, content, and trademarks, are owned by Invoratec Inc. and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use the Services in accordance with these Terms."
          },
          "subsection2": {
            "title": "6.2 Feedback",
            "content": "If you provide feedback, suggestions, or ideas about our Services, we may use them without any obligation to you."
          }
        },
        "section7": {
          "title": "7. Third-Party Services",
          "intro": "Our Services integrate with third-party services including:",
          "items": [
            "Autodesk: Revit and Construction Cloud integration",
            "AI Providers: Anthropic Claude for AI features",
            "Cloud Services: Google Cloud Platform infrastructure"
          ],
          "note": "Your use of third-party services is subject to their respective terms and policies. We are not responsible for third-party services."
        },
        "section8": {
          "title": "8. Disclaimers",
          "disclaimer": "THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.",
          "intro": "We do not warrant that:",
          "items": [
            "The Services will be uninterrupted or error-free",
            "Defects will be corrected",
            "The Services will meet your specific requirements",
            "AI-generated outputs will be accurate or suitable for your purposes"
          ],
          "note": "AI features are tools to assist, not replace, professional judgment. You are responsible for verifying AI outputs and making final decisions about your projects."
        },
        "section9": {
          "title": "9. Limitation of Liability",
          "content1": "TO THE MAXIMUM EXTENT PERMITTED BY LAW, INVORATEC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION.",
          "content2": "Our total liability for any claims shall not exceed the amount you paid us in the 12 months preceding the claim."
        },
        "section10": {
          "title": "10. Indemnification",
          "intro": "You agree to indemnify and hold harmless Invoratec Inc. from any claims, damages, or expenses arising from:",
          "items": [
            "Your use of the Services",
            "Your User Content",
            "Your violation of these Terms",
            "Your violation of any third-party rights"
          ]
        },
        "section11": {
          "title": "11. Termination",
          "intro": "Either party may terminate this agreement at any time:",
          "items": [
            "You may cancel your account through the Settings",
            "We may terminate for breach of these Terms with notice",
            "We may suspend access immediately for serious violations"
          ],
          "note": "Upon termination, your right to use the Services ceases. You may export your User Content before termination."
        },
        "section12": {
          "title": "12. Governing Law",
          "content": "These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Los Angeles County, California."
        },
        "section13": {
          "title": "13. Changes to Terms",
          "content": "We may modify these Terms from time to time. We will notify you of material changes by email or through the Services. Continued use after changes constitutes acceptance of the new Terms."
        },
        "section14": {
          "title": "14. Contact",
          "intro": "For questions about these Terms, please contact us:",
          "company": "Invoratec Inc.",
          "email": "Email",
          "general": "General"
        }
      }
    },
    "dpa": {
      "content": {
        "intro": "This Data Processing Agreement (\"DPA\") forms part of the Terms of Service between Invoratec Inc. (\"InvoratecAI,\" \"Processor,\" \"we,\" or \"us\") and the customer (\"Controller,\" \"you\"). This DPA sets forth the terms and conditions under which we will process Personal Data on your behalf.",
        "section1": {
          "title": "1. Definitions",
          "items": [
            "\"Data Protection Laws\" means GDPR, CCPA, and other applicable data protection legislation",
            "\"Personal Data\" means any information relating to an identified or identifiable natural person",
            "\"Processing\" means any operation performed on Personal Data",
            "\"Data Subject\" means the individual to whom Personal Data relates",
            "\"Sub-processor\" means any third party engaged by us to process Personal Data",
            "\"Security Incident\" means any unauthorized access, acquisition, or disclosure of Personal Data"
          ]
        },
        "section2": {
          "title": "2. Scope and Roles",
          "subsection1": {
            "title": "2.1 Controller and Processor",
            "intro": "For the purposes of this DPA:",
            "items": [
              "You (the customer) are the Controller of Personal Data submitted to the Services",
              "InvoratecAI is the Processor acting on your behalf"
            ]
          },
          "subsection2": {
            "title": "2.2 Subject Matter",
            "intro": "This DPA applies to the processing of Personal Data in connection with:",
            "items": [
              "BIM AI (Revit Add-in) services",
              "Web AI (Cloud Platform) services",
              "Related support and consulting services"
            ]
          }
        },
        "section3": {
          "title": "3. Details of Data Processing",
          "subsection1": {
            "title": "3.1 Categories of Data Subjects",
            "items": [
              "Customer employees and contractors",
              "Project stakeholders and collaborators",
              "End users of your BIM projects"
            ]
          },
          "subsection2": {
            "title": "3.2 Types of Personal Data",
            "items": [
              "Identity data: Names, usernames, job titles",
              "Contact data: Email addresses, phone numbers",
              "Professional data: Company affiliation, role, department",
              "Technical data: IP addresses, device information, usage logs",
              "Project data: Task assignments, comments, collaboration history"
            ]
          },
          "subsection3": {
            "title": "3.3 Processing Activities",
            "items": [
              "User account management and authentication",
              "Project data storage and synchronization",
              "Collaboration and communication features",
              "AI-powered analysis and assistance",
              "Analytics and service improvement",
              "Technical support and troubleshooting"
            ]
          }
        },
        "section4": {
          "title": "4. Processor Obligations",
          "intro": "InvoratecAI agrees to:",
          "subsection1": {
            "title": "4.1 Processing Instructions",
            "items": [
              "Process Personal Data only on your documented instructions",
              "Inform you if we believe an instruction violates Data Protection Laws",
              "Not process Personal Data for any purpose other than providing the Services"
            ]
          },
          "subsection2": {
            "title": "4.2 Confidentiality",
            "items": [
              "Ensure personnel processing Personal Data are bound by confidentiality obligations",
              "Limit access to Personal Data to those who need it to perform their duties"
            ]
          },
          "subsection3": {
            "title": "4.3 Security Measures",
            "intro": "Implement appropriate technical and organizational measures including:",
            "items": [
              "Encryption of Personal Data at rest and in transit",
              "Access controls and authentication mechanisms",
              "Regular security assessments and penetration testing",
              "Incident response and disaster recovery procedures",
              "Employee security training and awareness"
            ]
          }
        },
        "section5": {
          "title": "5. Sub-processors",
          "subsection1": {
            "title": "5.1 Authorization",
            "content": "You authorize us to engage Sub-processors to process Personal Data. A list of current Sub-processors is available at /terms/subprocessors."
          },
          "subsection2": {
            "title": "5.2 Sub-processor Requirements",
            "intro": "We will:",
            "items": [
              "Enter into written agreements with Sub-processors imposing equivalent data protection obligations",
              "Remain liable for Sub-processor compliance",
              "Notify you of new Sub-processors with at least 30 days' notice",
              "Allow you to object to new Sub-processors"
            ]
          }
        },
        "section6": {
          "title": "6. Data Subject Rights",
          "intro": "We will assist you in responding to Data Subject requests including:",
          "items": [
            "Right of access",
            "Right to rectification",
            "Right to erasure (\"right to be forgotten\")",
            "Right to data portability",
            "Right to restriction of processing",
            "Right to object"
          ],
          "note": "We will forward any Data Subject requests we receive to you promptly."
        },
        "section7": {
          "title": "7. Security Incidents",
          "subsection1": {
            "title": "7.1 Notification",
            "content": "We will notify you of any Security Incident without undue delay (and in any event within 72 hours) after becoming aware of it."
          },
          "subsection2": {
            "title": "7.2 Incident Details",
            "intro": "Notification will include:",
            "items": [
              "Description of the nature of the Security Incident",
              "Categories and approximate number of Data Subjects affected",
              "Likely consequences of the incident",
              "Measures taken or proposed to address the incident"
            ]
          },
          "subsection3": {
            "title": "7.3 Cooperation",
            "content": "We will cooperate with you and take reasonable steps to assist in the investigation, mitigation, and remediation of Security Incidents."
          }
        },
        "section8": {
          "title": "8. International Data Transfers",
          "intro": "Personal Data may be transferred to countries outside the EEA. We ensure appropriate safeguards through:",
          "items": [
            "Standard Contractual Clauses (SCCs) approved by the European Commission",
            "Transfers to countries with adequate data protection (as determined by the EC)",
            "Other valid transfer mechanisms under Data Protection Laws"
          ]
        },
        "section9": {
          "title": "9. Audit Rights",
          "intro": "Upon reasonable request, we will:",
          "items": [
            "Make available information necessary to demonstrate compliance with this DPA",
            "Allow for and contribute to audits, including inspections, conducted by you or an auditor mandated by you",
            "Provide copies of relevant certifications (e.g., SOC 2 reports)"
          ],
          "note": "Audits shall be conducted with reasonable notice, during normal business hours, and shall not unreasonably disrupt our operations."
        },
        "section10": {
          "title": "10. Data Deletion and Return",
          "intro": "Upon termination of the Services or upon your request:",
          "items": [
            "We will delete or return all Personal Data within 90 days",
            "Delete existing copies unless retention is required by law",
            "Provide certification of deletion upon request"
          ]
        },
        "section11": {
          "title": "11. Liability",
          "content": "Each party's liability under this DPA is subject to the limitations of liability set forth in the Terms of Service. Each party shall be liable for any damages caused by its own breach of this DPA."
        },
        "section12": {
          "title": "12. Contact",
          "intro": "For DPA-related inquiries:",
          "dpo": "Data Protection Officer",
          "legal": "Legal",
          "general": "General"
        }
      }
    },
    "subprocessors": {
      "content": {
        "intro": "This page lists the sub-processors that InvoratecAI uses to process customer data as part of our Services. Sub-processors are third-party service providers who assist us in delivering our BIM AI and Web AI platforms.",
        "whatIsSubprocessor": {
          "title": "What is a Sub-processor?",
          "content": "A sub-processor is a third-party data processor engaged by InvoratecAI who has or may have access to or process customer data (which may include personal data). InvoratecAI engages sub-processors to perform various functions as explained in this document."
        },
        "ourCommitments": {
          "title": "Our Commitments",
          "intro": "Before engaging any sub-processor, InvoratecAI:",
          "items": [
            "Conducts due diligence to evaluate their security and privacy practices",
            "Enters into written agreements imposing data protection obligations",
            "Ensures they provide sufficient guarantees regarding their technical and organizational measures",
            "Remains fully liable for the sub-processor's compliance with our DPA"
          ]
        },
        "currentSubprocessors": {
          "title": "Current Sub-processors"
        },
        "tableHeaders": {
          "subprocessor": "Sub-processor",
          "purpose": "Purpose",
          "location": "Location",
          "dataTypes": "Data Types"
        },
        "subprocessorData": {
          "gcp": {
            "name": "Google Cloud Platform",
            "purpose": "Cloud infrastructure, data storage, and computing",
            "location": "United States",
            "dataTypes": "All customer data, user accounts, project data, BIM models"
          },
          "firebase": {
            "name": "Firebase / Firestore",
            "purpose": "Real-time database and file storage",
            "location": "United States",
            "dataTypes": "User accounts, project data, file attachments"
          },
          "anthropic": {
            "name": "Anthropic",
            "purpose": "AI language model processing (Claude)",
            "location": "United States",
            "dataTypes": "AI query content (ephemeral processing only)"
          },
          "gmail": {
            "name": "Gmail / Google Workspace",
            "purpose": "Transactional email delivery",
            "location": "United States",
            "dataTypes": "Email addresses, notification content"
          },
          "autodesk": {
            "name": "Autodesk",
            "purpose": "Construction Cloud integration (optional)",
            "location": "United States",
            "dataTypes": "Project files, model data (when ACC integration enabled)"
          }
        },
        "infrastructureDetails": {
          "title": "Infrastructure Details",
          "gcp": {
            "title": "Google Cloud Platform",
            "intro": "Our primary infrastructure provider. Services used include:",
            "items": [
              "Cloud Functions: Serverless compute for backend APIs",
              "Firestore: NoSQL database for user and project data",
              "Cloud Storage: File storage for BIM models and attachments",
              "Cloud Run: Container hosting for web services"
            ],
            "note": "Data is stored in the US-Central1 region by default. Enterprise customers may request specific region deployment."
          },
          "ai": {
            "title": "AI Processing",
            "intro": "Our AI features are powered by Anthropic's Claude model. Important notes:",
            "items": [
              "AI queries are processed in real-time and not stored by Anthropic",
              "Your data is not used to train AI models",
              "AI responses are generated based on your query context only"
            ]
          }
        },
        "regionalConsiderations": {
          "title": "Regional Considerations",
          "china": {
            "title": "China Region",
            "intro": "For customers using our China region service (invoratec.cn):",
            "items": [
              "Data is stored on servers located in mainland China",
              "Different sub-processors may be used for compliance purposes",
              "Please contact us for China-specific sub-processor list"
            ]
          },
          "dataResidency": {
            "title": "Data Residency",
            "content": "Enterprise customers may negotiate specific data residency requirements. Please contact our sales team for options."
          }
        },
        "notificationOfChanges": {
          "title": "Notification of Changes",
          "intro": "We will notify you of any changes to our sub-processors:",
          "items": [
            "New Sub-processors: 30 days advance notice via email",
            "Removed Sub-processors: Updated on this page",
            "Material Changes: Direct notification to organization administrators"
          ],
          "note": "You may object to new sub-processors within the notice period. If we cannot accommodate your objection, you may terminate the affected Services."
        },
        "stayInformed": {
          "title": "Stay Informed",
          "intro": "To receive notifications about sub-processor changes:",
          "items": [
            "Ensure your organization administrator email is current in your account settings",
            "Check this page periodically for updates",
            "Contact us if you have specific notification requirements"
          ]
        },
        "contact": {
          "title": "Contact",
          "intro": "For questions about our sub-processors:",
          "dataProtection": "Data Protection",
          "legal": "Legal",
          "general": "General"
        }
      }
    }
  }
};

// Read and update en.json
const enPath = path.join(__dirname, 'en.json');
let enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
enJson = deepMerge(enJson, enTranslations);
fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2), 'utf8');
console.log('✓ Updated en.json with all legal page translations');

console.log('\nEnglish translations completed! Run the Japanese and Chinese script next.');
