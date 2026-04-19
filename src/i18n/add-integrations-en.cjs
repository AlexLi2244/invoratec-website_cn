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

// English translations for integrations content
const enIntegrationsContent = {
  "terms": {
    "integrations": {
      "content": {
        "intro": "InvoratecAI integrates with various third-party services to enhance your BIM workflows and construction management processes. This page provides information about our integrations, how they work, and how to manage them.",
        "howIntegrationsWork": "How Integrations Work",
        "authentication": "Authentication",
        "authDescription": "Our integrations use industry-standard OAuth 2.0 authentication:",
        "authItems": [
          "You authorize InvoratecAI to access your third-party accounts",
          "We never store your third-party passwords",
          "Access tokens are securely encrypted",
          "You can revoke access at any time"
        ],
        "dataFlow": "Data Flow",
        "dataFlowItems": [
          "Data flows directly between InvoratecAI and the integrated service",
          "We only access data necessary for the features you use",
          "Your permissions in the third-party service are respected",
          "Data synchronization happens in real-time or on-demand"
        ],
        "availableIntegrations": "Available Integrations",
        "autodeskIntegration": "Autodesk Integration",
        "accTitle": "Autodesk Construction Cloud (ACC)",
        "accDescription": "Connect your ACC projects to InvoratecAI for enhanced collaboration and AI-powered insights:",
        "accFeatures": [
          "Project Sync: Automatically sync project files and folders",
          "Model Viewer: View and analyze BIM models directly in InvoratecAI",
          "Issue Tracking: Create and manage issues with AI assistance",
          "Document Management: Access and organize project documents"
        ],
        "revitAddin": "Revit Add-in",
        "revitDescription": "Our Revit add-in provides deep integration with your BIM authoring workflow:",
        "revitFeatures": [
          "Direct Model Access: Query your model without leaving Revit",
          "Element Selection: Ask AI about selected elements",
          "Smart Search: Find elements using natural language",
          "Export Tools: Export schedules and data for AI analysis"
        ],
        "supportedVersions": "Supported Revit Versions:",
        "managingIntegrations": "Managing Your Integrations",
        "connecting": "Connecting an Integration",
        "connectSteps": [
          "Navigate to Settings → Integrations in your InvoratecAI dashboard",
          "Click \"Connect\" next to the desired integration",
          "Sign in to your third-party account when prompted",
          "Review and approve the requested permissions",
          "Configure integration-specific settings as needed"
        ],
        "disconnecting": "Disconnecting an Integration",
        "disconnectSteps": [
          "Go to Settings → Integrations",
          "Find the integration you want to disconnect",
          "Click \"Disconnect\" and confirm your choice",
          "Optionally, revoke access in the third-party service's settings"
        ],
        "dataAfterDisconnection": "Data After Disconnection",
        "dataAfterItems": [
          "We immediately stop accessing your third-party data",
          "Cached data may be retained according to our data retention policy",
          "Your data in the third-party service is not affected",
          "You can reconnect at any time to resume synchronization"
        ],
        "permissions": "Understanding Permissions",
        "minimumPermissions": "Minimum Permissions Principle",
        "permissionsDescription": "InvoratecAI requests only the permissions necessary for our features to work. We follow the principle of least privilege:",
        "permissionsItems": [
          "Read access is requested for browsing and analysis features",
          "Write access is only requested when you enable features that modify data",
          "We never request admin-level access to your accounts"
        ],
        "autodeskPermissions": "Autodesk Permissions",
        "requestedScopes": "Requested Scopes:",
        "security": "Integration Security",
        "tokenSecurity": "Token Security",
        "tokenSecurityItems": [
          "OAuth tokens are encrypted at rest using AES-256",
          "Tokens are transmitted only over HTTPS",
          "Refresh tokens are stored securely and rotated regularly",
          "Access tokens have limited lifespans"
        ],
        "auditLogging": "Audit Logging",
        "auditLoggingDescription": "All integration activities are logged for security purposes:",
        "auditLoggingItems": [
          "Connection and disconnection events",
          "Data access and synchronization activities",
          "Permission changes",
          "Error events"
        ],
        "enterpriseAudit": "Enterprise customers can access detailed audit logs through the admin dashboard.",
        "thirdPartySecurity": "Third-Party Security",
        "thirdPartyDescription": "We only integrate with services that meet our security standards:",
        "thirdPartyItems": [
          "SOC 2 Type II certified or equivalent",
          "Industry-standard authentication protocols",
          "Encryption for data in transit and at rest",
          "Regular security assessments"
        ],
        "troubleshooting": "Troubleshooting",
        "commonIssues": "Common Issues",
        "issue1Title": "Integration shows \"Disconnected\"",
        "issue1Description": "Your access token may have expired or been revoked. Try reconnecting the integration.",
        "issue2Title": "Can't see certain projects",
        "issue2Description": "Check your permissions in the third-party service. InvoratecAI can only access projects you have permission to view.",
        "issue3Title": "Sync errors",
        "issue3Description": "Temporary network issues may cause sync failures. The system will automatically retry. If issues persist, try disconnecting and reconnecting.",
        "upcomingIntegrations": "Upcoming Integrations",
        "upcomingDescription": "We're continuously expanding our integration ecosystem. Planned integrations include:",
        "upcomingItems": [
          "Procore - Construction management",
          "PlanGrid - Field collaboration",
          "Bluebeam - PDF markup and collaboration",
          "Microsoft Teams - Communication and notifications"
        ],
        "requestIntegration": "Want to request an integration? Contact us at",
        "support": "Support",
        "supportDescription": "For integration-related questions or issues:",
        "integrationSupport": "Integration Support",
        "generalSupport": "General Support",
        "documentation": "Documentation",
        "tableHeaders": {
          "integration": "Integration",
          "category": "Category",
          "dataAccess": "Data Access",
          "status": "Status"
        },
        "categories": {
          "bimConstruction": "BIM / Construction",
          "bimAuthoring": "BIM Authoring"
        },
        "statuses": {
          "available": "Available"
        }
      }
    }
  }
};

// Read and update en.json
const enPath = path.join(__dirname, 'en.json');
let enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
enJson = deepMerge(enJson, enIntegrationsContent);
fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2), 'utf8');
console.log('✓ Updated en.json with integrations content translations');

console.log('\nIntegrations English translations completed!');
