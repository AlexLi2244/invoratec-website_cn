const fs = require('fs');
const path = require('path');

function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

const featuresPageTranslations = {
  fr: {
    featuresPage: {
      hero: {
        badge: "45+ types de propriétés • Intégration BIM complète",
        title: "Vue d'ensemble complète des fonctionnalités",
        subtitle: "Découvrez toutes les capacités d'InvoratecAI - de la gestion flexible de tâches basée sur une base de données à l'automatisation Revit alimentée par l'IA"
      },
      webPlatform: {
        title: "Plateforme Web",
        subtitle: "Collaboration basée sur navigateur",
        freeTrial: "Essai gratuit de 7 jours",
        signupNow: "S'inscrire maintenant"
      },
      revitAddin: {
        title: "Extension Revit",
        subtitle: "Plugin de bureau • Revit 2019-2026 supporté",
        freeTrial: "Essai gratuit de 7 jours",
        downloadNow: "Télécharger maintenant"
      },
      webFeatures: {
        tasks: {
          title: "Gestion des tâches",
          subtitle: "Système de tâches flexible basé sur une base de données",
          highlights: {
            customPages: { label: "Pages personnalisées", desc: "Créez des pages de tâches illimitées avec des propriétés personnalisées" },
            smartFiltering: { label: "Filtrage intelligent", desc: "Filtrez par propriété, assigné, statut ou date" },
            excelImport: { label: "Import/Export Excel", desc: "Importation en masse depuis Excel, export de rapports à tout moment" },
            subTasks: { label: "Sous-tâches", desc: "Structure hiérarchique des tâches avec relations parent-enfant" }
          },
          properties: {
            text: { name: "Texte", type: "Base", desc: "Champs texte simple/multiligne" },
            number: { name: "Nombre", type: "Base", desc: "Valeurs numériques avec formatage" },
            date: { name: "Date/Heure", type: "Base", desc: "Sélecteurs de date avec support horaire" },
            select: { name: "Sélection/Multi-sélection", type: "Sélection", desc: "Options déroulantes avec étiquettes de couleur" },
            status: { name: "Statut", type: "Sélection", desc: "Suivi du statut du flux de travail" },
            priority: { name: "Priorité", type: "Sélection", desc: "Niveaux de priorité des tâches" },
            person: { name: "Personne", type: "Personnes", desc: "Assigner des membres de l'équipe" },
            checkbox: { name: "Case à cocher", type: "Base", desc: "Interrupteurs booléens" },
            url: { name: "URL/Email/Téléphone", type: "Liens", desc: "Liens de contact cliquables" },
            files: { name: "Fichiers", type: "Média", desc: "Pièces jointes" },
            relation: { name: "Relation", type: "Avancé", desc: "Lier les tâches entre elles" },
            rollup: { name: "Agrégation", type: "Avancé", desc: "Agréger les données des relations" },
            formula: { name: "Formule", type: "Avancé", desc: "Champs calculés" },
            createdTime: { name: "Date de création", type: "Auto", desc: "Horodatages automatiques" },
            createdBy: { name: "Créé par", type: "Auto", desc: "Utilisateur automatique" }
          }
        },
        viewer: {
          title: "Visionneuse 3D",
          subtitle: "Visualisation interactive des modèles avec APS",
          highlights: {
            isolation: { label: "Isolation d'éléments", desc: "Cliquez pour isoler et inspecter les éléments" },
            properties: { label: "Inspecteur de propriétés", desc: "Voir tous les paramètres et propriétés des éléments" },
            measurement: { label: "Outils de mesure", desc: "Mesures de distance, surface et angle" },
            section: { label: "Plans de coupe", desc: "Créer des coupes dynamiques" }
          },
          properties: {
            viewer: { name: "Visionneuse par défaut", type: "BIM", desc: "Propriété de visionneuse 3D intégrée" },
            selection: { name: "Sélection de modèle", type: "Fonctionnalité", desc: "Sélectionner des modèles du dossier Invoratec" },
            linking: { name: "Liaison d'éléments", type: "Fonctionnalité", desc: "Lier les tâches aux éléments du modèle" },
            viewStates: { name: "États de vue", type: "Fonctionnalité", desc: "Sauvegarder et restaurer les positions de caméra" }
          }
        },
        timeline: {
          title: "Chronologie et Gantt",
          subtitle: "Planification visuelle de projet",
          highlights: {
            gantt: { label: "Diagramme de Gantt", desc: "Chronologie visuelle avec dépendances" },
            dragDrop: { label: "Glisser-déposer", desc: "Replanifiez facilement les tâches" },
            milestones: { label: "Jalons", desc: "Suivre les jalons clés du projet" },
            criticalPath: { label: "Chemin critique", desc: "Identifier les goulots d'étranglement du calendrier" }
          },
          properties: {
            startDate: { name: "Date de début", type: "Date", desc: "Début de la tâche Gantt" },
            endDate: { name: "Date de fin", type: "Date", desc: "Fin de la tâche Gantt" },
            dependencies: { name: "Dépendances", type: "Relation", desc: "Liens de dépendance des tâches" },
            progress: { name: "Progression", type: "Nombre", desc: "Pourcentage d'achèvement" }
          }
        },
        acc: {
          title: "Intégration ACC",
          subtitle: "Synchronisation Autodesk Construction Cloud",
          highlights: {
            projects: { label: "Synchronisation de projets", desc: "Connectez les projets ACC directement" },
            issues: { label: "Synchronisation des problèmes", desc: "Importez et gérez les problèmes ACC" },
            models: { label: "Accès aux modèles", desc: "Parcourez et visualisez les modèles ACC" },
            bidirectional: { label: "Synchronisation bidirectionnelle", desc: "Les mises à jour se reflètent dans les deux sens" }
          },
          properties: {
            accProject: { name: "Projet ACC", type: "Intégration", desc: "Lien vers le projet ACC" },
            accIssue: { name: "Problème ACC", type: "Intégration", desc: "Problème ACC synchronisé" },
            syncStatus: { name: "Statut de sync", type: "Auto", desc: "Statut de synchronisation ACC" }
          }
        },
        ai: {
          title: "Assistant IA",
          subtitle: "Productivité alimentée par l'IA",
          highlights: {
            chat: { label: "Chat IA", desc: "Posez des questions sur vos tâches et projets" },
            automation: { label: "Automatisation", desc: "Automatisez les flux de travail répétitifs" },
            insights: { label: "Informations", desc: "Obtenez des suggestions intelligentes" },
            natural: { label: "Langage naturel", desc: "Interagissez en langage courant" }
          }
        }
      },
      revitFeatures: {
        aiCommands: {
          title: "Commandes IA",
          subtitle: "Automatisation Revit alimentée par l'IA",
          highlights: {
            natural: { label: "Langage naturel", desc: "Décrivez ce que vous voulez en français" },
            suggestions: { label: "Suggestions intelligentes", desc: "L'IA suggère des commandes pertinentes" },
            batch: { label: "Opérations par lots", desc: "Modifiez plusieurs éléments à la fois" },
            history: { label: "Historique des commandes", desc: "Réutilisez les commandes précédentes" }
          },
          commands: {
            select: { name: "Sélection intelligente", desc: "Sélectionner des éléments par critères" },
            modify: { name: "Modification par lots", desc: "Modifier les paramètres en masse" },
            create: { name: "Création d'éléments", desc: "Générer de nouveaux éléments" },
            analyze: { name: "Analyse", desc: "Analyser le modèle pour les problèmes" }
          }
        },
        clash: {
          title: "Détection des conflits",
          subtitle: "Trouver et résoudre les conflits",
          highlights: {
            detect: { label: "Détection auto", desc: "Trouver automatiquement les conflits" },
            categorize: { label: "Catégorisation", desc: "Grouper les conflits par type" },
            navigate: { label: "Navigation", desc: "Aller directement aux conflits" },
            report: { label: "Rapports", desc: "Exporter les rapports de conflits" }
          }
        },
        design: {
          title: "Outils de conception",
          subtitle: "Améliorer le flux de travail de conception",
          highlights: {
            templates: { label: "Modèles", desc: "Démarrer avec des modèles préconçus" },
            standards: { label: "Standards", desc: "Appliquer les standards de l'entreprise" },
            validation: { label: "Validation", desc: "Vérifier la conformité de la conception" },
            documentation: { label: "Documentation", desc: "Générer la documentation automatiquement" }
          }
        },
        qaqc: {
          title: "Contrôle qualité",
          subtitle: "Assurance qualité du modèle",
          highlights: {
            rules: { label: "Règles personnalisées", desc: "Définir des règles de validation personnalisées" },
            automated: { label: "Vérifications automatisées", desc: "Exécuter les contrôles automatiquement" },
            reports: { label: "Rapports détaillés", desc: "Générer des rapports de qualité" },
            tracking: { label: "Suivi des problèmes", desc: "Suivre la résolution des problèmes" }
          }
        },
        sync: {
          title: "Synchronisation Web",
          subtitle: "Connecter Revit à la plateforme web",
          highlights: {
            realtime: { label: "Temps réel", desc: "Synchronisation instantanée des changements" },
            selective: { label: "Sync sélective", desc: "Choisir ce qu'il faut synchroniser" },
            conflict: { label: "Résolution de conflits", desc: "Gérer les changements conflictuels" },
            offline: { label: "Mode hors ligne", desc: "Travailler sans connexion" }
          }
        }
      },
      propertySystem: {
        title: "Système de propriétés",
        subtitle: "Plus de 45 types de propriétés pour tout modéliser",
        categories: {
          basic: "Base",
          selection: "Sélection",
          people: "Personnes",
          dateTime: "Date/Heure",
          media: "Média",
          advanced: "Avancé",
          bimAec: "BIM/AEC",
          auto: "Auto"
        },
        properties: {
          text: { name: "Texte", desc: "Champs texte simple ou multiligne" },
          number: { name: "Nombre", desc: "Valeurs numériques avec formatage" },
          checkbox: { name: "Case à cocher", desc: "Valeurs vrai/faux" },
          select: { name: "Sélection", desc: "Choix unique parmi les options" },
          multiSelect: { name: "Multi-sélection", desc: "Choix multiples parmi les options" },
          status: { name: "Statut", desc: "Suivi du statut du flux de travail" },
          priority: { name: "Priorité", desc: "Niveaux de priorité des tâches" },
          person: { name: "Personne", desc: "Assigner des membres de l'équipe" },
          date: { name: "Date", desc: "Sélecteur de date" },
          dateTime: { name: "Date/Heure", desc: "Date avec heure" },
          dateRange: { name: "Plage de dates", desc: "Dates de début et fin" },
          files: { name: "Fichiers", desc: "Pièces jointes" },
          images: { name: "Images", desc: "Galerie d'images" },
          url: { name: "URL", desc: "Liens web" },
          email: { name: "Email", desc: "Adresses email" },
          phone: { name: "Téléphone", desc: "Numéros de téléphone" },
          relation: { name: "Relation", desc: "Lier à d'autres tâches" },
          rollup: { name: "Agrégation", desc: "Agréger les données des relations" },
          formula: { name: "Formule", desc: "Champs calculés" },
          viewer: { name: "Visionneuse 3D", desc: "Visionneuse de modèle intégrée" },
          modelElement: { name: "Élément de modèle", desc: "Lien vers les éléments BIM" },
          location: { name: "Emplacement", desc: "Coordonnées géographiques" },
          createdTime: { name: "Date de création", desc: "Création automatique" },
          createdBy: { name: "Créé par", desc: "Créateur automatique" },
          lastEdited: { name: "Dernière modification", desc: "Dernière modification automatique" },
          lastEditedBy: { name: "Modifié par", desc: "Dernier éditeur automatique" }
        }
      },
      cta: {
        title: "Prêt à commencer ?",
        subtitle: "Essayez InvoratecAI gratuitement pendant 7 jours",
        webButton: "Démarrer l'essai Web",
        revitButton: "Télécharger l'extension Revit"
      }
    }
  },
  de: {
    featuresPage: {
      hero: {
        badge: "45+ Eigenschaftstypen • Vollständige BIM-Integration",
        title: "Komplette Funktionsübersicht",
        subtitle: "Entdecken Sie alle Funktionen von InvoratecAI - von flexiblem datenbankgestütztem Aufgabenmanagement bis hin zur KI-gestützten Revit-Automatisierung"
      },
      webPlatform: {
        title: "Web-Plattform",
        subtitle: "Browserbasierte Zusammenarbeit",
        freeTrial: "7-Tage kostenlose Testversion",
        signupNow: "Jetzt anmelden"
      },
      revitAddin: {
        title: "Revit-Add-in",
        subtitle: "Desktop-Plugin • Revit 2019-2026 unterstützt",
        freeTrial: "7-Tage kostenlose Testversion",
        downloadNow: "Jetzt herunterladen"
      },
      webFeatures: {
        tasks: {
          title: "Aufgabenverwaltung",
          subtitle: "Flexibles datenbankgestütztes Aufgabensystem",
          highlights: {
            customPages: { label: "Benutzerdefinierte Seiten", desc: "Erstellen Sie unbegrenzte Aufgabenseiten mit benutzerdefinierten Eigenschaften" },
            smartFiltering: { label: "Intelligente Filterung", desc: "Filtern nach Eigenschaft, Zuständigem, Status oder Datum" },
            excelImport: { label: "Excel Import/Export", desc: "Massenimport aus Excel, jederzeit Berichte exportieren" },
            subTasks: { label: "Unteraufgaben", desc: "Hierarchische Aufgabenstruktur mit Eltern-Kind-Beziehungen" }
          },
          properties: {
            text: { name: "Text", type: "Basis", desc: "Ein-/mehrzeilige Textfelder" },
            number: { name: "Zahl", type: "Basis", desc: "Numerische Werte mit Formatierung" },
            date: { name: "Datum/Zeit", type: "Basis", desc: "Datumsauswahl mit Zeitunterstützung" },
            select: { name: "Auswahl/Mehrfachauswahl", type: "Auswahl", desc: "Dropdown-Optionen mit Farb-Tags" },
            status: { name: "Status", type: "Auswahl", desc: "Workflow-Statusverfolgung" },
            priority: { name: "Priorität", type: "Auswahl", desc: "Aufgabenprioritätsstufen" },
            person: { name: "Person", type: "Personen", desc: "Teammitglieder zuweisen" },
            checkbox: { name: "Kontrollkästchen", type: "Basis", desc: "Boolesche Schalter" },
            url: { name: "URL/E-Mail/Telefon", type: "Links", desc: "Anklickbare Kontaktlinks" },
            files: { name: "Dateien", type: "Medien", desc: "Dateianhänge" },
            relation: { name: "Relation", type: "Erweitert", desc: "Aufgaben miteinander verknüpfen" },
            rollup: { name: "Rollup", type: "Erweitert", desc: "Daten aus Relationen aggregieren" },
            formula: { name: "Formel", type: "Erweitert", desc: "Berechnete Felder" },
            createdTime: { name: "Erstellungszeit", type: "Auto", desc: "Automatische Zeitstempel" },
            createdBy: { name: "Erstellt von", type: "Auto", desc: "Automatischer Benutzer" }
          }
        },
        viewer: {
          title: "3D-Modell-Viewer",
          subtitle: "APS-gestützte interaktive Modellansicht",
          highlights: {
            isolation: { label: "Elementisolierung", desc: "Klicken zum Isolieren und Inspizieren von Elementen" },
            properties: { label: "Eigenschaftsinspektor", desc: "Alle Elementparameter und Eigenschaften anzeigen" },
            measurement: { label: "Messwerkzeuge", desc: "Abstands-, Flächen- und Winkelmessungen" },
            section: { label: "Schnittebenen", desc: "Dynamische Schnitte erstellen" }
          },
          properties: {
            viewer: { name: "Standard-Modell-Viewer", type: "BIM", desc: "Eingebettete 3D-Modell-Viewer-Eigenschaft" },
            selection: { name: "Modellauswahl", type: "Funktion", desc: "Modelle aus Invoratec-Ordner auswählen" },
            linking: { name: "Elementverknüpfung", type: "Funktion", desc: "Aufgaben mit Modellelementen verknüpfen" },
            viewStates: { name: "Ansichtszustände", type: "Funktion", desc: "Kamerapositionen speichern und wiederherstellen" }
          }
        },
        timeline: {
          title: "Zeitachse & Gantt",
          subtitle: "Visuelle Projektplanung",
          highlights: {
            gantt: { label: "Gantt-Diagramm", desc: "Visuelle Zeitachse mit Abhängigkeiten" },
            dragDrop: { label: "Drag & Drop", desc: "Aufgaben einfach neu planen" },
            milestones: { label: "Meilensteine", desc: "Wichtige Projektmeilensteine verfolgen" },
            criticalPath: { label: "Kritischer Pfad", desc: "Terminengpässe identifizieren" }
          },
          properties: {
            startDate: { name: "Startdatum", type: "Datum", desc: "Gantt-Aufgabenstart" },
            endDate: { name: "Enddatum", type: "Datum", desc: "Gantt-Aufgabenende" },
            dependencies: { name: "Abhängigkeiten", type: "Relation", desc: "Aufgabenabhängigkeitslinks" },
            progress: { name: "Fortschritt", type: "Zahl", desc: "Fertigstellungsgrad" }
          }
        },
        acc: {
          title: "ACC-Integration",
          subtitle: "Autodesk Construction Cloud Synchronisation",
          highlights: {
            projects: { label: "Projektsynchronisation", desc: "ACC-Projekte direkt verbinden" },
            issues: { label: "Problemsynchronisation", desc: "ACC-Probleme importieren und verwalten" },
            models: { label: "Modellzugriff", desc: "ACC-Modelle durchsuchen und anzeigen" },
            bidirectional: { label: "Bidirektionale Sync", desc: "Updates werden beidseitig reflektiert" }
          },
          properties: {
            accProject: { name: "ACC-Projekt", type: "Integration", desc: "Link zum ACC-Projekt" },
            accIssue: { name: "ACC-Problem", type: "Integration", desc: "Synchronisiertes ACC-Problem" },
            syncStatus: { name: "Sync-Status", type: "Auto", desc: "ACC-Synchronisierungsstatus" }
          }
        },
        ai: {
          title: "KI-Assistent",
          subtitle: "KI-gestützte Produktivität",
          highlights: {
            chat: { label: "KI-Chat", desc: "Fragen zu Ihren Aufgaben und Projekten stellen" },
            automation: { label: "Automatisierung", desc: "Wiederholende Workflows automatisieren" },
            insights: { label: "Erkenntnisse", desc: "Intelligente Vorschläge erhalten" },
            natural: { label: "Natürliche Sprache", desc: "In Alltagssprache kommunizieren" }
          }
        }
      },
      revitFeatures: {
        aiCommands: {
          title: "KI-Befehle",
          subtitle: "KI-gestützte Revit-Automatisierung",
          highlights: {
            natural: { label: "Natürliche Sprache", desc: "Beschreiben Sie auf Deutsch, was Sie möchten" },
            suggestions: { label: "Intelligente Vorschläge", desc: "KI schlägt relevante Befehle vor" },
            batch: { label: "Stapeloperationen", desc: "Mehrere Elemente gleichzeitig ändern" },
            history: { label: "Befehlsverlauf", desc: "Frühere Befehle wiederverwenden" }
          },
          commands: {
            select: { name: "Intelligente Auswahl", desc: "Elemente nach Kriterien auswählen" },
            modify: { name: "Stapelmodifikation", desc: "Parameter massenhaft ändern" },
            create: { name: "Elementerstellung", desc: "Neue Elemente generieren" },
            analyze: { name: "Analyse", desc: "Modell auf Probleme analysieren" }
          }
        },
        clash: {
          title: "Kollisionserkennung",
          subtitle: "Kollisionen finden und lösen",
          highlights: {
            detect: { label: "Auto-Erkennung", desc: "Kollisionen automatisch finden" },
            categorize: { label: "Kategorisierung", desc: "Kollisionen nach Typ gruppieren" },
            navigate: { label: "Navigation", desc: "Direkt zu Kollisionen navigieren" },
            report: { label: "Berichte", desc: "Kollisionsberichte exportieren" }
          }
        },
        design: {
          title: "Design-Werkzeuge",
          subtitle: "Design-Workflow verbessern",
          highlights: {
            templates: { label: "Vorlagen", desc: "Mit vorgefertigten Vorlagen starten" },
            standards: { label: "Standards", desc: "Unternehmensstandards anwenden" },
            validation: { label: "Validierung", desc: "Design-Konformität prüfen" },
            documentation: { label: "Dokumentation", desc: "Dokumentation automatisch generieren" }
          }
        },
        qaqc: {
          title: "Qualitätskontrolle",
          subtitle: "Modellqualitätssicherung",
          highlights: {
            rules: { label: "Benutzerdefinierte Regeln", desc: "Benutzerdefinierte Validierungsregeln definieren" },
            automated: { label: "Automatisierte Prüfungen", desc: "Prüfungen automatisch ausführen" },
            reports: { label: "Detaillierte Berichte", desc: "Qualitätsberichte generieren" },
            tracking: { label: "Problemverfolgung", desc: "Problemlösung verfolgen" }
          }
        },
        sync: {
          title: "Web-Synchronisation",
          subtitle: "Revit mit Web-Plattform verbinden",
          highlights: {
            realtime: { label: "Echtzeit", desc: "Sofortige Änderungssynchronisation" },
            selective: { label: "Selektive Sync", desc: "Wählen, was synchronisiert werden soll" },
            conflict: { label: "Konfliktlösung", desc: "Widersprüchliche Änderungen behandeln" },
            offline: { label: "Offline-Modus", desc: "Ohne Verbindung arbeiten" }
          }
        }
      },
      propertySystem: {
        title: "Eigenschaftssystem",
        subtitle: "Über 45 Eigenschaftstypen zum Modellieren von allem",
        categories: {
          basic: "Basis",
          selection: "Auswahl",
          people: "Personen",
          dateTime: "Datum/Zeit",
          media: "Medien",
          advanced: "Erweitert",
          bimAec: "BIM/AEC",
          auto: "Auto"
        },
        properties: {
          text: { name: "Text", desc: "Ein- oder mehrzeilige Textfelder" },
          number: { name: "Zahl", desc: "Numerische Werte mit Formatierung" },
          checkbox: { name: "Kontrollkästchen", desc: "Wahr/Falsch-Werte" },
          select: { name: "Auswahl", desc: "Einzelauswahl aus Optionen" },
          multiSelect: { name: "Mehrfachauswahl", desc: "Mehrfachauswahl aus Optionen" },
          status: { name: "Status", desc: "Workflow-Statusverfolgung" },
          priority: { name: "Priorität", desc: "Aufgabenprioritätsstufen" },
          person: { name: "Person", desc: "Teammitglieder zuweisen" },
          date: { name: "Datum", desc: "Datumsauswahl" },
          dateTime: { name: "Datum/Zeit", desc: "Datum mit Uhrzeit" },
          dateRange: { name: "Datumsbereich", desc: "Start- und Enddaten" },
          files: { name: "Dateien", desc: "Dateianhänge" },
          images: { name: "Bilder", desc: "Bildergalerie" },
          url: { name: "URL", desc: "Web-Links" },
          email: { name: "E-Mail", desc: "E-Mail-Adressen" },
          phone: { name: "Telefon", desc: "Telefonnummern" },
          relation: { name: "Relation", desc: "Mit anderen Aufgaben verknüpfen" },
          rollup: { name: "Rollup", desc: "Daten aus Relationen aggregieren" },
          formula: { name: "Formel", desc: "Berechnete Felder" },
          viewer: { name: "3D-Viewer", desc: "Eingebetteter Modell-Viewer" },
          modelElement: { name: "Modellelement", desc: "Link zu BIM-Elementen" },
          location: { name: "Standort", desc: "Geografische Koordinaten" },
          createdTime: { name: "Erstellungszeit", desc: "Automatische Erstellung" },
          createdBy: { name: "Erstellt von", desc: "Automatischer Ersteller" },
          lastEdited: { name: "Zuletzt bearbeitet", desc: "Automatische letzte Bearbeitung" },
          lastEditedBy: { name: "Bearbeitet von", desc: "Automatischer letzter Bearbeiter" }
        }
      },
      cta: {
        title: "Bereit loszulegen?",
        subtitle: "Testen Sie InvoratecAI 7 Tage kostenlos",
        webButton: "Web-Testversion starten",
        revitButton: "Revit-Add-in herunterladen"
      }
    }
  },
  es: {
    featuresPage: {
      hero: {
        badge: "45+ tipos de propiedades • Integración BIM completa",
        title: "Vista completa de funcionalidades",
        subtitle: "Descubre todas las capacidades de InvoratecAI - desde gestión flexible de tareas basada en base de datos hasta automatización de Revit impulsada por IA"
      },
      webPlatform: {
        title: "Plataforma Web",
        subtitle: "Colaboración basada en navegador",
        freeTrial: "Prueba gratuita de 7 días",
        signupNow: "Registrarse ahora"
      },
      revitAddin: {
        title: "Complemento de Revit",
        subtitle: "Plugin de escritorio • Revit 2019-2026 soportado",
        freeTrial: "Prueba gratuita de 7 días",
        downloadNow: "Descargar ahora"
      },
      webFeatures: {
        tasks: {
          title: "Gestión de tareas",
          subtitle: "Sistema de tareas flexible basado en base de datos",
          highlights: {
            customPages: { label: "Páginas personalizadas", desc: "Crea páginas de tareas ilimitadas con propiedades personalizadas" },
            smartFiltering: { label: "Filtrado inteligente", desc: "Filtra por propiedad, asignado, estado o fecha" },
            excelImport: { label: "Importar/Exportar Excel", desc: "Importación masiva desde Excel, exporta informes en cualquier momento" },
            subTasks: { label: "Subtareas", desc: "Estructura jerárquica de tareas con relaciones padre-hijo" }
          },
          properties: {
            text: { name: "Texto", type: "Básico", desc: "Campos de texto simple/multilínea" },
            number: { name: "Número", type: "Básico", desc: "Valores numéricos con formato" },
            date: { name: "Fecha/Hora", type: "Básico", desc: "Selectores de fecha con soporte de hora" },
            select: { name: "Selección/Multi-selección", type: "Selección", desc: "Opciones desplegables con etiquetas de color" },
            status: { name: "Estado", type: "Selección", desc: "Seguimiento de estado del flujo de trabajo" },
            priority: { name: "Prioridad", type: "Selección", desc: "Niveles de prioridad de tareas" },
            person: { name: "Persona", type: "Personas", desc: "Asignar miembros del equipo" },
            checkbox: { name: "Casilla", type: "Básico", desc: "Interruptores booleanos" },
            url: { name: "URL/Email/Teléfono", type: "Enlaces", desc: "Enlaces de contacto clicables" },
            files: { name: "Archivos", type: "Medios", desc: "Archivos adjuntos" },
            relation: { name: "Relación", type: "Avanzado", desc: "Vincular tareas entre sí" },
            rollup: { name: "Agregación", type: "Avanzado", desc: "Agregar datos de relaciones" },
            formula: { name: "Fórmula", type: "Avanzado", desc: "Campos calculados" },
            createdTime: { name: "Fecha de creación", type: "Auto", desc: "Marcas de tiempo automáticas" },
            createdBy: { name: "Creado por", type: "Auto", desc: "Usuario automático" }
          }
        },
        viewer: {
          title: "Visor 3D",
          subtitle: "Visualización interactiva de modelos con APS",
          highlights: {
            isolation: { label: "Aislamiento de elementos", desc: "Haz clic para aislar e inspeccionar elementos" },
            properties: { label: "Inspector de propiedades", desc: "Ver todos los parámetros y propiedades de elementos" },
            measurement: { label: "Herramientas de medición", desc: "Mediciones de distancia, área y ángulo" },
            section: { label: "Planos de corte", desc: "Crear cortes dinámicos" }
          },
          properties: {
            viewer: { name: "Visor de modelo predeterminado", type: "BIM", desc: "Propiedad de visor 3D integrado" },
            selection: { name: "Selección de modelo", type: "Característica", desc: "Seleccionar modelos de la carpeta Invoratec" },
            linking: { name: "Vinculación de elementos", type: "Característica", desc: "Vincular tareas a elementos del modelo" },
            viewStates: { name: "Estados de vista", type: "Característica", desc: "Guardar y restaurar posiciones de cámara" }
          }
        },
        timeline: {
          title: "Cronología y Gantt",
          subtitle: "Planificación visual de proyectos",
          highlights: {
            gantt: { label: "Diagrama de Gantt", desc: "Cronología visual con dependencias" },
            dragDrop: { label: "Arrastrar y soltar", desc: "Reprogramar tareas fácilmente" },
            milestones: { label: "Hitos", desc: "Seguir hitos clave del proyecto" },
            criticalPath: { label: "Ruta crítica", desc: "Identificar cuellos de botella del cronograma" }
          },
          properties: {
            startDate: { name: "Fecha de inicio", type: "Fecha", desc: "Inicio de tarea Gantt" },
            endDate: { name: "Fecha de fin", type: "Fecha", desc: "Fin de tarea Gantt" },
            dependencies: { name: "Dependencias", type: "Relación", desc: "Enlaces de dependencia de tareas" },
            progress: { name: "Progreso", type: "Número", desc: "Porcentaje de completado" }
          }
        },
        acc: {
          title: "Integración ACC",
          subtitle: "Sincronización con Autodesk Construction Cloud",
          highlights: {
            projects: { label: "Sincronización de proyectos", desc: "Conectar proyectos ACC directamente" },
            issues: { label: "Sincronización de problemas", desc: "Importar y gestionar problemas ACC" },
            models: { label: "Acceso a modelos", desc: "Explorar y ver modelos ACC" },
            bidirectional: { label: "Sincronización bidireccional", desc: "Las actualizaciones se reflejan en ambos sentidos" }
          },
          properties: {
            accProject: { name: "Proyecto ACC", type: "Integración", desc: "Enlace al proyecto ACC" },
            accIssue: { name: "Problema ACC", type: "Integración", desc: "Problema ACC sincronizado" },
            syncStatus: { name: "Estado de sincronización", type: "Auto", desc: "Estado de sincronización ACC" }
          }
        },
        ai: {
          title: "Asistente IA",
          subtitle: "Productividad impulsada por IA",
          highlights: {
            chat: { label: "Chat IA", desc: "Haz preguntas sobre tus tareas y proyectos" },
            automation: { label: "Automatización", desc: "Automatizar flujos de trabajo repetitivos" },
            insights: { label: "Insights", desc: "Obtener sugerencias inteligentes" },
            natural: { label: "Lenguaje natural", desc: "Interactuar en lenguaje cotidiano" }
          }
        }
      },
      revitFeatures: {
        aiCommands: {
          title: "Comandos IA",
          subtitle: "Automatización de Revit impulsada por IA",
          highlights: {
            natural: { label: "Lenguaje natural", desc: "Describe lo que quieres en español" },
            suggestions: { label: "Sugerencias inteligentes", desc: "La IA sugiere comandos relevantes" },
            batch: { label: "Operaciones por lotes", desc: "Modificar múltiples elementos a la vez" },
            history: { label: "Historial de comandos", desc: "Reutilizar comandos anteriores" }
          },
          commands: {
            select: { name: "Selección inteligente", desc: "Seleccionar elementos por criterios" },
            modify: { name: "Modificación por lotes", desc: "Modificar parámetros en masa" },
            create: { name: "Creación de elementos", desc: "Generar nuevos elementos" },
            analyze: { name: "Análisis", desc: "Analizar modelo en busca de problemas" }
          }
        },
        clash: {
          title: "Detección de conflictos",
          subtitle: "Encontrar y resolver conflictos",
          highlights: {
            detect: { label: "Detección automática", desc: "Encontrar conflictos automáticamente" },
            categorize: { label: "Categorización", desc: "Agrupar conflictos por tipo" },
            navigate: { label: "Navegación", desc: "Ir directamente a los conflictos" },
            report: { label: "Informes", desc: "Exportar informes de conflictos" }
          }
        },
        design: {
          title: "Herramientas de diseño",
          subtitle: "Mejorar el flujo de trabajo de diseño",
          highlights: {
            templates: { label: "Plantillas", desc: "Comenzar con plantillas prediseñadas" },
            standards: { label: "Estándares", desc: "Aplicar estándares de la empresa" },
            validation: { label: "Validación", desc: "Verificar conformidad del diseño" },
            documentation: { label: "Documentación", desc: "Generar documentación automáticamente" }
          }
        },
        qaqc: {
          title: "Control de calidad",
          subtitle: "Aseguramiento de calidad del modelo",
          highlights: {
            rules: { label: "Reglas personalizadas", desc: "Definir reglas de validación personalizadas" },
            automated: { label: "Verificaciones automatizadas", desc: "Ejecutar verificaciones automáticamente" },
            reports: { label: "Informes detallados", desc: "Generar informes de calidad" },
            tracking: { label: "Seguimiento de problemas", desc: "Rastrear resolución de problemas" }
          }
        },
        sync: {
          title: "Sincronización Web",
          subtitle: "Conectar Revit con la plataforma web",
          highlights: {
            realtime: { label: "Tiempo real", desc: "Sincronización instantánea de cambios" },
            selective: { label: "Sync selectiva", desc: "Elegir qué sincronizar" },
            conflict: { label: "Resolución de conflictos", desc: "Manejar cambios conflictivos" },
            offline: { label: "Modo offline", desc: "Trabajar sin conexión" }
          }
        }
      },
      propertySystem: {
        title: "Sistema de propiedades",
        subtitle: "Más de 45 tipos de propiedades para modelar todo",
        categories: {
          basic: "Básico",
          selection: "Selección",
          people: "Personas",
          dateTime: "Fecha/Hora",
          media: "Medios",
          advanced: "Avanzado",
          bimAec: "BIM/AEC",
          auto: "Auto"
        },
        properties: {
          text: { name: "Texto", desc: "Campos de texto simple o multilínea" },
          number: { name: "Número", desc: "Valores numéricos con formato" },
          checkbox: { name: "Casilla", desc: "Valores verdadero/falso" },
          select: { name: "Selección", desc: "Elección única de opciones" },
          multiSelect: { name: "Multi-selección", desc: "Elección múltiple de opciones" },
          status: { name: "Estado", desc: "Seguimiento de estado del flujo de trabajo" },
          priority: { name: "Prioridad", desc: "Niveles de prioridad de tareas" },
          person: { name: "Persona", desc: "Asignar miembros del equipo" },
          date: { name: "Fecha", desc: "Selector de fecha" },
          dateTime: { name: "Fecha/Hora", desc: "Fecha con hora" },
          dateRange: { name: "Rango de fechas", desc: "Fechas de inicio y fin" },
          files: { name: "Archivos", desc: "Archivos adjuntos" },
          images: { name: "Imágenes", desc: "Galería de imágenes" },
          url: { name: "URL", desc: "Enlaces web" },
          email: { name: "Email", desc: "Direcciones de correo" },
          phone: { name: "Teléfono", desc: "Números de teléfono" },
          relation: { name: "Relación", desc: "Vincular a otras tareas" },
          rollup: { name: "Agregación", desc: "Agregar datos de relaciones" },
          formula: { name: "Fórmula", desc: "Campos calculados" },
          viewer: { name: "Visor 3D", desc: "Visor de modelo integrado" },
          modelElement: { name: "Elemento de modelo", desc: "Enlace a elementos BIM" },
          location: { name: "Ubicación", desc: "Coordenadas geográficas" },
          createdTime: { name: "Fecha de creación", desc: "Creación automática" },
          createdBy: { name: "Creado por", desc: "Creador automático" },
          lastEdited: { name: "Última edición", desc: "Última edición automática" },
          lastEditedBy: { name: "Editado por", desc: "Último editor automático" }
        }
      },
      cta: {
        title: "¿Listo para empezar?",
        subtitle: "Prueba InvoratecAI gratis durante 7 días",
        webButton: "Iniciar prueba Web",
        revitButton: "Descargar complemento Revit"
      }
    }
  }
};

// Apply translations
const languages = Object.keys(featuresPageTranslations);

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = deepMerge(existing, featuresPageTranslations[lang]);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Added featuresPage translations to ' + lang + '.json');
});

console.log('\nFeaturesPage translations complete for FR, DE, ES!');
console.log('Run next script for PT, KO, RU, AR...');
