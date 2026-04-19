const fs = require('fs');
const path = require('path');

// German legal content translations
const deTranslations = {
  terms: {
    backToDocs: "Zurück zur Dokumentation",
    legalPolicies: "Sicherheit & Richtlinien",
    nav: {
      security: "Sicherheitsrichtlinie",
      privacy: "Datenschutzrichtlinie",
      cookies: "Cookie-Richtlinie",
      developer: "Entwicklervereinbarung",
      dpa: "Datenverarbeitungsvertrag",
      subprocessors: "Unterauftragsverarbeiter",
      ai: "KI-Nutzungsbedingungen",
      integrations: "Integrationsbedingungen",
      tos: "Nutzungsbedingungen"
    },
    security: {
      title: "Sicherheitsrichtlinie",
      lastUpdated: "Zuletzt aktualisiert: 15. Januar 2025",
      content: {
        intro: "Bei InvoratecAI hat Sicherheit höchste Priorität. Diese Richtlinie beschreibt unsere umfassenden Sicherheitsmaßnahmen zum Schutz Ihrer Daten und zur Gewährleistung der Integrität unserer Dienste.",
        principlesTitle: "Sicherheitsprinzipien",
        principles: {
          defenseInDepth: "Defense in Depth: Mehrschichtige Sicherheitskontrollen in unserer gesamten Infrastruktur",
          leastPrivilege: "Prinzip der geringsten Rechte: Zugang nur zu dem, was für die jeweilige Funktion erforderlich ist",
          zeroTrust: "Zero-Trust-Architektur: Verifiziere alles, vertraue nichts standardmäßig",
          continuousMonitoring: "Kontinuierliche Überwachung: Echtzeit-Bedrohungserkennung und -reaktion",
          secureByDesign: "Secure by Design: Sicherheit ist von Anfang an in unsere Entwicklungsprozesse integriert"
        },
        dataProtectionTitle: "Datenschutz",
        dataProtection: {
          encryption: "Verschlüsselung: Alle Daten werden im Ruhezustand mit AES-256 und während der Übertragung mit TLS 1.3 verschlüsselt",
          keyManagement: "Schlüsselverwaltung: Sichere Schlüsselspeicherung und -rotation mit Hardware-Sicherheitsmodulen (HSM)",
          dataIsolation: "Datenisolierung: Strikte Mandantentrennung gewährleistet, dass Ihre Daten von denen anderer Benutzer isoliert bleiben",
          backups: "Backups: Regelmäßige verschlüsselte Backups mit georedundanter Speicherung",
          retention: "Aufbewahrung: Klare Datenaufbewahrungsrichtlinien mit sicherem Löschen bei Ablauf"
        },
        accessControlTitle: "Zugriffskontrolle",
        accessControl: {
          authentication: "Authentifizierung: Multi-Faktor-Authentifizierung (MFA) für alle Konten erforderlich",
          authorization: "Autorisierung: Rollenbasierte Zugriffskontrolle (RBAC) mit granularen Berechtigungen",
          sessionManagement: "Sitzungsverwaltung: Sichere Sitzungsbehandlung mit automatischem Timeout",
          auditLogging: "Audit-Logging: Umfassende Protokolle aller Zugriffe und Änderungen"
        },
        infrastructureTitle: "Infrastruktursicherheit",
        infrastructure: {
          cloudSecurity: "Cloud-Sicherheit: Gehostet in SOC 2 Typ II zertifizierten Rechenzentren",
          networkSecurity: "Netzwerksicherheit: Firewalls, Intrusion Detection und DDoS-Schutz",
          containerSecurity: "Container-Sicherheit: Isolierte Container-Umgebungen mit regelmäßigem Schwachstellen-Scanning",
          patchManagement: "Patch-Management: Regelmäßige Sicherheitsupdates und Schwachstellenbehebung"
        },
        incidentResponseTitle: "Reaktion auf Vorfälle",
        incidentResponse: {
          detection: "Erkennung: Automatisierte Bedrohungserkennung mit manueller Überprüfung",
          response: "Reaktion: Etablierte Verfahren für Vorfallreaktion mit definierten Eskalationspfaden",
          communication: "Kommunikation: Zeitnahe Benachrichtigung betroffener Parteien bei Sicherheitsvorfällen",
          postIncident: "Nach dem Vorfall: Gründliche Analyse und Verbesserungsmaßnahmen"
        },
        complianceTitle: "Compliance",
        compliance: {
          standards: "Standards: Ausrichtung an ISO 27001, SOC 2 und DSGVO-Anforderungen",
          audits: "Audits: Regelmäßige Sicherheitsbewertungen und Penetrationstests durch Dritte",
          certifications: "Zertifizierungen: Aktuelle Sicherheitszertifizierungen werden gepflegt",
          training: "Schulung: Regelmäßige Sicherheitsschulungen für alle Mitarbeiter"
        },
        contactTitle: "Sicherheitskontakt",
        contact: "Wenn Sie einen Sicherheitsvorfall oder eine Schwachstelle melden möchten, kontaktieren Sie bitte unser Sicherheitsteam unter security@invoratec.com. Wir nehmen alle Sicherheitsberichte ernst und werden umgehend antworten."
      }
    },
    privacy: {
      title: "Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert: 15. Januar 2025",
      content: {
        intro: "Diese Datenschutzrichtlinie beschreibt, wie InvoratecAI Ihre persönlichen Daten erfasst, verwendet und schützt, wenn Sie unsere Dienste nutzen.",
        dataCollectionTitle: "Datenerfassung",
        dataCollection: {
          accountInfo: "Kontoinformationen: Name, E-Mail-Adresse und Unternehmensdaten bei der Registrierung",
          usageData: "Nutzungsdaten: Informationen darüber, wie Sie mit unseren Diensten interagieren",
          technicalData: "Technische Daten: IP-Adresse, Browsertyp, Geräteinformationen",
          projectData: "Projektdaten: Revit-Projektdaten und -dateien, die Sie auf unsere Plattform hochladen"
        },
        dataUseTitle: "Wie wir Ihre Daten verwenden",
        dataUse: {
          serviceProvision: "Um unsere Dienste bereitzustellen und zu pflegen",
          improvement: "Um unsere Dienste zu verbessern und weiterzuentwickeln",
          communication: "Um mit Ihnen über Updates, Support und Werbematerialien zu kommunizieren",
          analytics: "Um Nutzungsmuster zu analysieren und die Benutzererfahrung zu optimieren",
          legal: "Um gesetzlichen Verpflichtungen nachzukommen"
        },
        dataSharingTitle: "Datenweitergabe",
        dataSharing: {
          serviceProviders: "Wir geben Daten an vertrauenswürdige Dienstleister weiter, die uns bei der Bereitstellung unserer Dienste unterstützen",
          legalRequirements: "Wir können Daten offenlegen, wenn dies gesetzlich vorgeschrieben ist oder um unsere Rechte zu schützen",
          businessTransfers: "Im Falle einer Fusion oder Übernahme können Daten an die neue Eigentümerschaft übertragen werden"
        },
        dataRetentionTitle: "Datenaufbewahrung",
        dataRetention: "Wir speichern Ihre Daten so lange, wie Ihr Konto aktiv ist oder wie es zur Erbringung unserer Dienste erforderlich ist. Sie können jederzeit die Löschung Ihrer Daten beantragen.",
        userRightsTitle: "Ihre Rechte",
        userRights: {
          access: "Zugang: Fordern Sie eine Kopie Ihrer personenbezogenen Daten an",
          rectification: "Berichtigung: Korrigieren Sie ungenaue oder unvollständige Daten",
          erasure: "Löschung: Beantragen Sie die Löschung Ihrer Daten",
          portability: "Datenübertragbarkeit: Erhalten Sie Ihre Daten in einem portablen Format",
          objection: "Widerspruch: Widersprechen Sie der Verarbeitung Ihrer Daten",
          restriction: "Einschränkung: Beantragen Sie die eingeschränkte Verarbeitung Ihrer Daten"
        },
        cookiesTitle: "Cookies",
        cookies: "Wir verwenden Cookies und ähnliche Technologien, um die Funktionalität bereitzustellen, Ihre Präferenzen zu merken und Nutzungsmuster zu analysieren. Weitere Informationen finden Sie in unserer Cookie-Richtlinie.",
        securityTitle: "Sicherheit",
        security: "Wir setzen branchenübliche Sicherheitsmaßnahmen zum Schutz Ihrer Daten ein, einschließlich Verschlüsselung, Zugriffskontrollen und regelmäßiger Sicherheitsaudits.",
        childrenTitle: "Datenschutz für Kinder",
        children: "Unsere Dienste richten sich nicht an Kinder unter 16 Jahren. Wir erfassen wissentlich keine Daten von Kindern.",
        changesTitle: "Änderungen dieser Richtlinie",
        changes: "Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen.",
        contactTitle: "Kontakt",
        contact: "Bei Fragen zu dieser Datenschutzrichtlinie kontaktieren Sie uns bitte unter privacy@invoratec.com."
      }
    },
    cookies: {
      title: "Cookie-Richtlinie",
      lastUpdated: "Zuletzt aktualisiert: 15. Januar 2025",
      content: {
        intro: "Diese Cookie-Richtlinie erklärt, wie InvoratecAI Cookies und ähnliche Technologien verwendet, wenn Sie unsere Website und Dienste nutzen.",
        whatAreCookiesTitle: "Was sind Cookies?",
        whatAreCookies: "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen uns, die Funktionalität bereitzustellen, Ihre Präferenzen zu merken und zu verstehen, wie Sie unsere Dienste nutzen.",
        typesOfCookiesTitle: "Arten von Cookies, die wir verwenden",
        typesOfCookies: {
          essential: "Unbedingt erforderliche Cookies: Notwendig für die grundlegende Website-Funktionalität wie Authentifizierung und Sicherheit",
          functional: "Funktionale Cookies: Merken Sie Ihre Präferenzen und Einstellungen",
          analytics: "Analyse-Cookies: Helfen uns zu verstehen, wie Benutzer mit unseren Diensten interagieren",
          marketing: "Marketing-Cookies: Werden verwendet, um relevante Werbung und Werbeaktionen zu liefern"
        },
        thirdPartyCookiesTitle: "Cookies von Drittanbietern",
        thirdPartyCookies: "Wir können auch Dienste von Drittanbietern nutzen, die ihre eigenen Cookies setzen, wie z.B. Analysetools und Werbeplattformen. Diese Cookies unterliegen den Datenschutzrichtlinien der jeweiligen Drittanbieter.",
        managingCookiesTitle: "Cookie-Einstellungen verwalten",
        managingCookies: "Sie können Cookies über die Einstellungen Ihres Browsers kontrollieren und löschen. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität unserer Dienste beeinträchtigen kann.",
        changesTitle: "Änderungen dieser Richtlinie",
        changes: "Wir können diese Cookie-Richtlinie aktualisieren, um Änderungen in unserer Praxis oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen widerzuspiegeln.",
        contactTitle: "Kontakt",
        contact: "Wenn Sie Fragen zu unserer Verwendung von Cookies haben, kontaktieren Sie uns bitte unter privacy@invoratec.com."
      }
    },
    developer: {
      title: "Entwicklervereinbarung",
      lastUpdated: "Zuletzt aktualisiert: 15. Januar 2025",
      content: {
        intro: "Diese Entwicklervereinbarung regelt Ihre Nutzung der InvoratecAI-APIs, SDKs und Entwicklertools. Durch den Zugriff auf oder die Nutzung unserer Entwicklerressourcen stimmen Sie diesen Bedingungen zu.",
        licenseTitle: "Lizenzgewährung",
        license: {
          grant: "Wir gewähren Ihnen eine begrenzte, nicht-exklusive, nicht übertragbare Lizenz zur Nutzung unserer Entwicklertools und APIs",
          scope: "Diese Lizenz ermöglicht es Ihnen, Anwendungen zu erstellen, die mit InvoratecAI-Diensten integriert werden",
          restrictions: "Sie dürfen diese Lizenz nicht unterlizenzieren, abtreten oder an Dritte übertragen",
          revocation: "Wir behalten uns das Recht vor, diese Lizenz jederzeit bei Verstoß gegen diese Bedingungen zu widerrufen"
        },
        restrictionsTitle: "Nutzungsbeschränkungen",
        restrictions: {
          noMisuse: "Verwenden Sie unsere APIs nicht für illegale Zwecke oder auf eine Weise, die unseren Diensten schadet",
          rateLimits: "Respektieren Sie die API-Ratenbegrenzungen und Nutzungskontingente",
          noReverseEngineering: "Versuchen Sie nicht, unsere APIs oder Dienste zurückzuentwickeln, zu dekompilieren oder zu disassemblieren",
          noCompetition: "Verwenden Sie unsere Entwicklertools nicht, um einen konkurrierenden Dienst zu erstellen",
          attribution: "Nennen Sie InvoratecAI wie erforderlich in Ihrer Anwendung"
        },
        intellectualPropertyTitle: "Geistiges Eigentum",
        intellectualProperty: {
          ownership: "InvoratecAI behält alle Rechte an unseren APIs, SDKs und der zugehörigen Dokumentation",
          yourContent: "Sie behalten die Eigentumsrechte an Ihren Anwendungen und Inhalten, die Sie mit unseren Tools erstellen",
          feedback: "Jedes Feedback, das Sie zu unseren Entwicklertools geben, kann von uns ohne Verpflichtung Ihnen gegenüber verwendet werden"
        },
        privacyTitle: "Datenschutz & Daten",
        privacy: {
          userConsent: "Holen Sie die entsprechende Einwilligung der Benutzer ein, bevor Sie über unsere APIs auf deren Daten zugreifen",
          dataHandling: "Behandeln Sie alle Benutzerdaten gemäß den geltenden Datenschutzgesetzen",
          security: "Implementieren Sie geeignete Sicherheitsmaßnahmen zum Schutz von Benutzerdaten"
        },
        supportTitle: "Support",
        support: "Wir bieten Support für Entwickler über unsere Dokumentation und Community-Foren. Premium-Support ist für berechtigte Konten verfügbar.",
        terminationTitle: "Kündigung",
        termination: {
          byYou: "Sie können jederzeit aufhören, unsere Entwicklertools zu nutzen",
          byUs: "Wir können Ihren Zugang bei Verstoß gegen diese Bedingungen oder aus einem anderen Grund aussetzen oder kündigen",
          effect: "Nach der Kündigung müssen Sie die Nutzung unserer APIs einstellen und alle InvoratecAI-Materialien löschen"
        },
        liabilityTitle: "Haftungsbeschränkung",
        liability: {
          disclaimer: "Unsere Entwicklertools werden 'wie besehen' ohne Garantien jeglicher Art bereitgestellt",
          limitation: "Wir haften nicht für indirekte, zufällige oder Folgeschäden aus Ihrer Nutzung unserer Entwicklertools"
        },
        generalTitle: "Allgemeine Bestimmungen",
        general: {
          modifications: "Wir können diese Vereinbarung mit Benachrichtigung ändern",
          entireAgreement: "Diese Vereinbarung stellt die gesamte Vereinbarung bezüglich der Nutzung unserer Entwicklertools dar",
          severability: "Wenn ein Teil dieser Vereinbarung nicht durchsetzbar ist, bleiben die übrigen Teile in Kraft",
          governingLaw: "Diese Vereinbarung unterliegt dem Recht des Staates Kalifornien"
        },
        contactTitle: "Kontakt",
        contact: "Bei Fragen zu dieser Entwicklervereinbarung kontaktieren Sie uns bitte unter developers@invoratec.com."
      }
    },
    dpa: {
      title: "Datenverarbeitungsvertrag",
      lastUpdated: "Zuletzt aktualisiert: 15. Januar 2025",
      content: {
        intro: "Dieser Datenverarbeitungsvertrag (DPA) ist Bestandteil der Vereinbarung zwischen Ihnen und InvoratecAI und beschreibt unsere Verpflichtungen bezüglich der Verarbeitung personenbezogener Daten in Ihrem Namen.",
        definitionsTitle: "Definitionen",
        definitions: {
          personalData: "Personenbezogene Daten: Jede Information, die sich auf eine identifizierbare natürliche Person bezieht",
          processing: "Verarbeitung: Jeder Vorgang oder jede Reihe von Vorgängen, die an personenbezogenen Daten durchgeführt werden",
          controller: "Verantwortlicher: Die Stelle, die die Zwecke und Mittel der Verarbeitung personenbezogener Daten bestimmt",
          processor: "Auftragsverarbeiter: Die Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet",
          dataSubject: "Betroffene Person: Die Person, deren personenbezogene Daten verarbeitet werden",
          subprocessor: "Unterauftragsverarbeiter: Ein Dritter, der vom Auftragsverarbeiter beauftragt wird, personenbezogene Daten zu verarbeiten"
        },
        processingTitle: "Datenverarbeitung",
        processing: {
          scope: "Wir verarbeiten personenbezogene Daten nur wie in unserer Dienstleistungsvereinbarung beschrieben und gemäß Ihren Anweisungen",
          purpose: "Die Verarbeitung dient dem Zweck, Ihnen unsere Dienste bereitzustellen",
          duration: "Wir verarbeiten Daten für die Dauer unserer Vereinbarung zuzüglich der für gesetzliche Anforderungen erforderlichen Zeit",
          types: "Arten der verarbeiteten Daten umfassen Kontaktinformationen, Nutzungsdaten und Projektdaten"
        },
        securityTitle: "Sicherheitsmaßnahmen",
        security: {
          measures: "Wir setzen geeignete technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten um",
          encryption: "Daten werden im Ruhezustand und während der Übertragung mit branchenüblichen Methoden verschlüsselt",
          accessControl: "Zugang zu personenbezogenen Daten ist auf autorisiertes Personal beschränkt"
        },
        subprocessorsTitle: "Unterauftragsverarbeiter",
        subprocessors: {
          authorization: "Sie ermächtigen uns, Unterauftragsverarbeiter für die Verarbeitung personenbezogener Daten zu beauftragen",
          list: "Eine Liste unserer aktuellen Unterauftragsverarbeiter finden Sie auf unserer Unterauftragsverarbeiter-Seite",
          notification: "Wir werden Sie über alle Änderungen bei den Unterauftragsverarbeitern informieren"
        },
        dataSubjectRightsTitle: "Rechte betroffener Personen",
        dataSubjectRights: {
          assistance: "Wir unterstützen Sie bei der Beantwortung von Anfragen betroffener Personen",
          notification: "Wir werden Sie umgehend über alle Anfragen betroffener Personen informieren, die wir erhalten"
        },
        dataBreachesTitle: "Datenschutzverletzungen",
        dataBreaches: {
          notification: "Wir werden Sie unverzüglich über jede Datenschutzverletzung informieren, die personenbezogene Daten betrifft",
          cooperation: "Wir kooperieren bei Untersuchungen und bieten notwendige Informationen",
          mitigation: "Wir ergreifen geeignete Maßnahmen zur Eindämmung der Auswirkungen von Datenschutzverletzungen"
        },
        auditsTitle: "Audits",
        audits: "Sie haben das Recht, Audits unserer Datenverarbeitungsaktivitäten durchzuführen oder durchführen zu lassen, vorbehaltlich angemessener Vorankündigung und Vertraulichkeitsvereinbarungen.",
        terminationTitle: "Kündigung",
        termination: "Bei Kündigung werden wir nach Ihrer Wahl alle personenbezogenen Daten, die in Ihrem Namen verarbeitet wurden, entweder löschen oder zurückgeben, sofern nicht gesetzlich eine Aufbewahrung vorgeschrieben ist.",
        contactTitle: "Kontakt",
        contact: "Bei Fragen zu diesem Datenverarbeitungsvertrag kontaktieren Sie uns bitte unter dpa@invoratec.com."
      }
    },
    subprocessors: {
      title: "Unterauftragsverarbeiter",
      lastUpdated: "Zuletzt aktualisiert: 15. Januar 2025",
      content: {
        intro: "InvoratecAI beauftragt die folgenden Unterauftragsverarbeiter zur Unterstützung unserer Dienste. Diese Unterauftragsverarbeiter unterliegen vertraglichen Verpflichtungen zum Schutz Ihrer Daten.",
        listTitle: "Aktuelle Unterauftragsverarbeiter",
        list: [
          {
            name: "Google Cloud Platform",
            purpose: "Cloud-Infrastruktur und Hosting",
            location: "Vereinigte Staaten / EU"
          },
          {
            name: "Amazon Web Services",
            purpose: "Cloud-Speicher und Backup",
            location: "Vereinigte Staaten / EU"
          },
          {
            name: "Stripe",
            purpose: "Zahlungsabwicklung",
            location: "Vereinigte Staaten"
          },
          {
            name: "SendGrid",
            purpose: "E-Mail-Dienste",
            location: "Vereinigte Staaten"
          },
          {
            name: "Intercom",
            purpose: "Kundensupport",
            location: "Vereinigte Staaten"
          },
          {
            name: "OpenAI",
            purpose: "KI-Verarbeitung",
            location: "Vereinigte Staaten"
          },
          {
            name: "Anthropic",
            purpose: "KI-Verarbeitung",
            location: "Vereinigte Staaten"
          }
        ],
        updatesTitle: "Benachrichtigung über Änderungen",
        updates: "Wir werden diese Seite aktualisieren und Kunden über alle Änderungen an unseren Unterauftragsverarbeitern informieren. Kunden werden mindestens 30 Tage vor Beauftragung eines neuen Unterauftragsverarbeiters benachrichtigt.",
        contactTitle: "Kontakt",
        contact: "Wenn Sie Fragen zu unseren Unterauftragsverarbeitern haben, kontaktieren Sie uns bitte unter dpa@invoratec.com."
      }
    },
    ai: {
      title: "KI-Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 15. Januar 2025",
      content: {
        intro: "Diese zusätzlichen Bedingungen regeln Ihre Nutzung von KI-gestützten Funktionen innerhalb der InvoratecAI-Dienste. Diese Bedingungen ergänzen unsere Nutzungsbedingungen.",
        aiFeaturesTitle: "KI-Funktionen",
        aiFeatures: {
          description: "InvoratecAI integriert künstliche Intelligenz zur Verbesserung Ihrer Produktivität und Automatisierungsfähigkeiten",
          nlp: "Natürliche Sprachverarbeitung: Verstehen Sie natürlichsprachliche Befehle und Anfragen",
          codeGeneration: "Code-Generierung: Automatische Generierung von Revit-Automatisierungscode basierend auf Ihren Anweisungen",
          smartSuggestions: "Intelligente Vorschläge: Empfehlungen für Arbeitsabläufe und Aktionen"
        },
        dataUsageTitle: "Datennutzung für KI",
        dataUsage: {
          training: "Ihre Daten können zur Verbesserung unserer KI-Modelle verwendet werden, sofern Sie nicht widersprechen",
          anonymization: "Alle für das Training verwendeten Daten werden anonymisiert und aggregiert",
          optOut: "Sie können der Nutzung Ihrer Daten für das KI-Training in Ihren Kontoeinstellungen widersprechen",
          retention: "KI-Verarbeitungsdaten werden gemäß unserer Datenaufbewahrungsrichtlinie gespeichert"
        },
        limitationsTitle: "Einschränkungen",
        limitations: {
          accuracy: "KI-generierte Inhalte sind möglicherweise nicht immer genau und sollten überprüft werden",
          noGuarantee: "Wir garantieren nicht die Richtigkeit oder Eignung von KI-Ausgaben",
          humanReview: "Kritische Entscheidungen sollten nicht allein auf KI-Empfehlungen basieren",
          availability: "KI-Funktionen können Verfügbarkeitsbeschränkungen und Ratenbegrenzungen unterliegen"
        },
        userResponsibilitiesTitle: "Benutzerverantwortlichkeiten",
        userResponsibilities: {
          review: "Überprüfen Sie alle KI-generierten Inhalte vor der Verwendung in der Produktion",
          compliance: "Stellen Sie sicher, dass Ihre Nutzung von KI-Funktionen den geltenden Vorschriften entspricht",
          feedback: "Geben Sie Feedback zu KI-Ausgaben, um die Genauigkeit zu verbessern",
          restrictions: "Verwenden Sie KI-Funktionen nicht für verbotene Inhalte oder Aktivitäten"
        },
        updatesTitle: "Updates der KI-Funktionen",
        updates: "Wir können unsere KI-Funktionen regelmäßig aktualisieren und verbessern. Diese Updates können beeinflussen, wie Funktionen arbeiten oder welche Ausgaben sie erzeugen.",
        contactTitle: "Kontakt",
        contact: "Bei Fragen zu unseren KI-Funktionen kontaktieren Sie uns bitte unter support@invoratec.com."
      }
    },
    integrations: {
      title: "Integrationsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 15. Januar 2025",
      content: {
        intro: "Diese Bedingungen regeln die Nutzung von Drittanbieter-Integrationen innerhalb der InvoratecAI-Dienste, einschließlich der Autodesk Construction Cloud (ACC) und anderer verbundener Plattformen.",
        supportedIntegrationsTitle: "Unterstützte Integrationen",
        supportedIntegrations: {
          acc: "Autodesk Construction Cloud (ACC): Verbinden Sie sich mit ACC-Projekten und -Dateien",
          revit: "Revit: Direkte Integration mit Autodesk Revit für Modellautomatisierung",
          bim360: "BIM 360: Zugriff auf BIM 360-Projektdaten und Zusammenarbeitsfunktionen",
          thirdParty: "Drittanbieter-Tools: Integration mit genehmigten Tools und Diensten von Drittanbietern"
        },
        dataFlowTitle: "Datenfluss",
        dataFlow: {
          access: "Wenn Sie eine Integration verbinden, kann InvoratecAI gemäß Ihren Berechtigungen auf Daten dieser Plattform zugreifen",
          sync: "Daten können zwischen InvoratecAI und verbundenen Plattformen synchronisiert werden",
          storage: "Einige Integrationsdaten können auf InvoratecAI-Servern gemäß unserer Datenschutzrichtlinie gespeichert werden"
        },
        securityTitle: "Integrationssicherheit",
        security: {
          oauth: "Wir verwenden branchenübliche OAuth-Authentifizierung für Integrationen",
          permissions: "Sie kontrollieren, welche Berechtigungen jeder Integration gewährt werden",
          revocation: "Sie können den Integrationszugriff jederzeit in Ihren Kontoeinstellungen widerrufen"
        },
        responsibilitiesTitle: "Verantwortlichkeiten",
        responsibilities: {
          thirdPartyTerms: "Sie sind verantwortlich für die Einhaltung der Nutzungsbedingungen von Drittanbieter-Plattformen",
          credentials: "Halten Sie Integrations-Anmeldedaten sicher und teilen Sie sie nicht mit Unbefugten",
          monitoring: "Überwachen Sie integrierte Konten auf unbefugten Zugriff",
          updates: "Halten Sie Integrations-Anmeldedaten aktuell, um Dienstunterbrechungen zu vermeiden"
        },
        contactTitle: "Kontakt",
        contact: "Bei Fragen zu Integrationen kontaktieren Sie uns bitte unter support@invoratec.com."
      }
    },
    tos: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 15. Januar 2025",
      content: {
        intro: "Willkommen bei InvoratecAI. Diese Nutzungsbedingungen regeln Ihre Nutzung unserer Dienste. Durch die Nutzung von InvoratecAI stimmen Sie diesen Bedingungen zu.",
        acceptanceTitle: "Annahme der Bedingungen",
        acceptance: "Durch den Zugriff auf oder die Nutzung unserer Dienste stimmen Sie zu, an diese Bedingungen gebunden zu sein. Wenn Sie nicht zustimmen, nutzen Sie unsere Dienste nicht.",
        servicesTitle: "Unsere Dienste",
        services: {
          description: "InvoratecAI bietet KI-gestützte Automatisierungstools für Revit und BIM-Arbeitsabläufe",
          availability: "Wir bemühen uns, eine hohe Dienstverfügbarkeit aufrechtzuerhalten, können jedoch keine 100%ige Verfügbarkeit garantieren",
          modifications: "Wir können unsere Dienste jederzeit ohne Vorankündigung ändern, aussetzen oder einstellen"
        },
        accountsTitle: "Benutzerkonten",
        accounts: {
          registration: "Sie müssen genaue und vollständige Informationen bei der Kontoerstellung angeben",
          security: "Sie sind für die Aufrechterhaltung der Sicherheit Ihres Kontos verantwortlich",
          responsibility: "Sie sind für alle Aktivitäten unter Ihrem Konto verantwortlich",
          notification: "Benachrichtigen Sie uns sofort, wenn Sie einen unbefugten Zugriff vermuten"
        },
        paymentTitle: "Zahlung",
        payment: {
          pricing: "Die Preise für unsere Dienste sind auf unserer Website beschrieben",
          billing: "Sie stimmen zu, alle Gebühren gemäß den Bedingungen Ihres Abonnements zu zahlen",
          taxes: "Sie sind für alle anfallenden Steuern verantwortlich",
          refunds: "Rückerstattungen werden gemäß unserer Rückerstattungsrichtlinie gehandhabt"
        },
        intellectualPropertyTitle: "Geistiges Eigentum",
        intellectualProperty: {
          ownership: "InvoratecAI behält alle Rechte an unseren Diensten, einschließlich Software und Inhalten",
          license: "Wir gewähren Ihnen eine begrenzte Lizenz zur Nutzung unserer Dienste gemäß diesen Bedingungen",
          restrictions: "Sie dürfen unsere Dienste nicht kopieren, modifizieren oder zurückentwickeln"
        },
        userContentTitle: "Benutzerinhalte",
        userContent: {
          ownership: "Sie behalten die Eigentumsrechte an Inhalten, die Sie auf unsere Plattform hochladen",
          license: "Sie gewähren uns eine Lizenz zur Nutzung Ihrer Inhalte, um unsere Dienste bereitzustellen",
          responsibility: "Sie sind für die Inhalte, die Sie hochladen, verantwortlich"
        },
        prohibitedUseTitle: "Verbotene Nutzung",
        prohibitedUse: {
          illegal: "Verwenden Sie unsere Dienste nicht für illegale Aktivitäten",
          harmful: "Versuchen Sie nicht, unsere Dienste zu beschädigen oder zu stören",
          unauthorized: "Greifen Sie nicht unbefugt auf andere Konten oder Systeme zu",
          malware: "Laden Sie keine Schadsoftware oder schädlichen Code hoch",
          spam: "Verwenden Sie unsere Dienste nicht zum Versenden von Spam oder unaufgeforderten Nachrichten"
        },
        terminationTitle: "Kündigung",
        termination: {
          byYou: "Sie können Ihr Konto jederzeit kündigen",
          byUs: "Wir können Ihr Konto bei Verstoß gegen diese Bedingungen aussetzen oder kündigen",
          effect: "Nach der Kündigung endet Ihr Zugang zu unseren Diensten"
        },
        liabilityTitle: "Haftungsbeschränkung",
        liability: {
          disclaimer: "Unsere Dienste werden 'wie besehen' ohne Garantien bereitgestellt",
          limitation: "Wir haften nicht für indirekte Schäden oder Gewinnausfälle",
          cap: "Unsere Gesamthaftung ist auf den Betrag begrenzt, den Sie in den letzten 12 Monaten an uns gezahlt haben"
        },
        indemnificationTitle: "Freistellung",
        indemnification: "Sie stimmen zu, InvoratecAI von allen Ansprüchen freizustellen, die sich aus Ihrer Nutzung unserer Dienste oder Ihrem Verstoß gegen diese Bedingungen ergeben.",
        changesTitle: "Änderungen der Bedingungen",
        changes: "Wir können diese Bedingungen jederzeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, indem wir die neuen Bedingungen auf unserer Website veröffentlichen.",
        governingTitle: "Anwendbares Recht",
        governing: "Diese Bedingungen unterliegen dem Recht des Staates Kalifornien ohne Rücksicht auf Kollisionsnormen.",
        contactTitle: "Kontakt",
        contact: "Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte unter legal@invoratec.com."
      }
    }
  }
};

// Deep merge function
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target && target[key] instanceof Object) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Read existing de.json
const dePath = path.join(__dirname, 'de.json');
const existingDe = JSON.parse(fs.readFileSync(dePath, 'utf8'));

// Merge translations
const updatedDe = deepMerge(existingDe, deTranslations);

// Write back
fs.writeFileSync(dePath, JSON.stringify(updatedDe, null, 2), 'utf8');

console.log('Updated de.json with legal content translations');
