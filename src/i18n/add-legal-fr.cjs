const fs = require('fs');
const path = require('path');

// French legal content translations
const frTranslations = {
  terms: {
    backToDocs: "Retour a la documentation",
    legalPolicies: "Securite et politiques",
    nav: {
      security: "Politique de securite",
      privacy: "Politique de confidentialite",
      cookies: "Politique des cookies",
      developer: "Accord developpeur",
      dpa: "Accord de traitement des donnees",
      subprocessors: "Sous-traitants",
      ai: "Conditions d'utilisation de l'IA",
      integrations: "Conditions d'integration",
      tos: "Conditions d'utilisation"
    },
    security: {
      title: "Politique de securite",
      lastUpdated: "Derniere mise a jour : 15 janvier 2025",
      content: {
        intro: "Chez InvoratecAI, la securite est notre priorite absolue. Cette politique decrit nos mesures de securite completes pour proteger vos donnees et assurer l'integrite de nos services.",
        principlesTitle: "Principes de securite",
        principles: {
          defenseInDepth: "Defense en profondeur : Controles de securite multicouches dans toute notre infrastructure",
          leastPrivilege: "Moindre privilege : Acces uniquement a ce qui est necessaire pour chaque fonction",
          zeroTrust: "Architecture Zero Trust : Verifiez tout, ne faites confiance a rien par defaut",
          continuousMonitoring: "Surveillance continue : Detection et reponse aux menaces en temps reel",
          secureByDesign: "Securite des la conception : La securite est integree dans nos processus de developpement des le depart"
        },
        dataProtectionTitle: "Protection des donnees",
        dataProtection: {
          encryption: "Chiffrement : Toutes les donnees sont chiffrees au repos avec AES-256 et en transit avec TLS 1.3",
          keyManagement: "Gestion des cles : Stockage securise des cles et rotation avec des modules de securite materielle (HSM)",
          dataIsolation: "Isolation des donnees : La separation stricte des locataires garantit que vos donnees restent isolees des autres utilisateurs",
          backups: "Sauvegardes : Sauvegardes chiffrees regulieres avec stockage geo-redondant",
          retention: "Conservation : Politiques claires de conservation des donnees avec suppression securisee a l'expiration"
        },
        accessControlTitle: "Controle d'acces",
        accessControl: {
          authentication: "Authentification : Authentification multi-facteurs (MFA) requise pour tous les comptes",
          authorization: "Autorisation : Controle d'acces base sur les roles (RBAC) avec permissions granulaires",
          sessionManagement: "Gestion des sessions : Gestion securisee des sessions avec expiration automatique",
          auditLogging: "Journalisation d'audit : Journaux complets de tous les acces et modifications"
        },
        infrastructureTitle: "Securite de l'infrastructure",
        infrastructure: {
          cloudSecurity: "Securite cloud : Heberge dans des centres de donnees certifies SOC 2 Type II",
          networkSecurity: "Securite reseau : Pare-feu, detection d'intrusion et protection DDoS",
          containerSecurity: "Securite des conteneurs : Environnements conteneurises isoles avec analyse reguliere des vulnerabilites",
          patchManagement: "Gestion des correctifs : Mises a jour de securite regulieres et remediation des vulnerabilites"
        },
        incidentResponseTitle: "Reponse aux incidents",
        incidentResponse: {
          detection: "Detection : Detection automatisee des menaces avec examen manuel",
          response: "Reponse : Procedures de reponse aux incidents etablies avec chemins d'escalade definis",
          communication: "Communication : Notification rapide des parties concernees en cas d'incident de securite",
          postIncident: "Post-incident : Analyse approfondie et actions d'amelioration"
        },
        complianceTitle: "Conformite",
        compliance: {
          standards: "Normes : Alignement sur les exigences ISO 27001, SOC 2 et RGPD",
          audits: "Audits : Evaluations de securite regulieres et tests de penetration par des tiers",
          certifications: "Certifications : Maintenance des certifications de securite a jour",
          training: "Formation : Formation reguliere a la sensibilisation a la securite pour tous les employes"
        },
        contactTitle: "Contact securite",
        contact: "Si vous souhaitez signaler un incident de securite ou une vulnerabilite, veuillez contacter notre equipe de securite a security@invoratec.com. Nous prenons tous les rapports de securite au serieux et repondrons rapidement."
      }
    },
    privacy: {
      title: "Politique de confidentialite",
      lastUpdated: "Derniere mise a jour : 15 janvier 2025",
      content: {
        intro: "Cette politique de confidentialite decrit comment InvoratecAI collecte, utilise et protege vos informations personnelles lorsque vous utilisez nos services.",
        dataCollectionTitle: "Collecte des donnees",
        dataCollection: {
          accountInfo: "Informations de compte : Nom, adresse e-mail et details de l'entreprise lors de l'inscription",
          usageData: "Donnees d'utilisation : Informations sur la facon dont vous interagissez avec nos services",
          technicalData: "Donnees techniques : Adresse IP, type de navigateur, informations sur l'appareil",
          projectData: "Donnees de projet : Donnees et fichiers de projet Revit que vous televersez sur notre plateforme"
        },
        dataUseTitle: "Comment nous utilisons vos donnees",
        dataUse: {
          serviceProvision: "Pour fournir et maintenir nos services",
          improvement: "Pour ameliorer et developper nos services",
          communication: "Pour communiquer avec vous concernant les mises a jour, le support et les documents promotionnels",
          analytics: "Pour analyser les modeles d'utilisation et optimiser l'experience utilisateur",
          legal: "Pour nous conformer aux obligations legales"
        },
        dataSharingTitle: "Partage des donnees",
        dataSharing: {
          serviceProviders: "Nous partageons des donnees avec des fournisseurs de services de confiance qui nous aident a fournir nos services",
          legalRequirements: "Nous pouvons divulguer des donnees lorsque la loi l'exige ou pour proteger nos droits",
          businessTransfers: "En cas de fusion ou d'acquisition, les donnees peuvent etre transferees aux nouveaux proprietaires"
        },
        dataRetentionTitle: "Conservation des donnees",
        dataRetention: "Nous conservons vos donnees aussi longtemps que votre compte est actif ou selon les besoins pour fournir nos services. Vous pouvez demander la suppression de vos donnees a tout moment.",
        userRightsTitle: "Vos droits",
        userRights: {
          access: "Acces : Demander une copie de vos donnees personnelles",
          rectification: "Rectification : Corriger des donnees inexactes ou incompletes",
          erasure: "Effacement : Demander la suppression de vos donnees",
          portability: "Portabilite : Recevoir vos donnees dans un format portable",
          objection: "Opposition : S'opposer au traitement de vos donnees",
          restriction: "Limitation : Demander un traitement restreint de vos donnees"
        },
        cookiesTitle: "Cookies",
        cookies: "Nous utilisons des cookies et des technologies similaires pour fournir des fonctionnalites, memoriser vos preferences et analyser les modeles d'utilisation. Consultez notre politique de cookies pour plus d'informations.",
        securityTitle: "Securite",
        security: "Nous mettons en oeuvre des mesures de securite conformes aux normes de l'industrie pour proteger vos donnees, y compris le chiffrement, les controles d'acces et les audits de securite reguliers.",
        childrenTitle: "Confidentialite des enfants",
        children: "Nos services ne sont pas destines aux enfants de moins de 16 ans. Nous ne collectons pas sciemment de donnees aupres d'enfants.",
        changesTitle: "Modifications de cette politique",
        changes: "Nous pouvons mettre a jour cette politique de temps en temps. Nous vous informerons des changements importants en publiant la nouvelle politique sur cette page.",
        contactTitle: "Contact",
        contact: "Pour toute question concernant cette politique de confidentialite, veuillez nous contacter a privacy@invoratec.com."
      }
    },
    cookies: {
      title: "Politique des cookies",
      lastUpdated: "Derniere mise a jour : 15 janvier 2025",
      content: {
        intro: "Cette politique des cookies explique comment InvoratecAI utilise les cookies et technologies similaires lorsque vous visitez notre site web et utilisez nos services.",
        whatAreCookiesTitle: "Qu'est-ce que les cookies ?",
        whatAreCookies: "Les cookies sont de petits fichiers texte stockes sur votre appareil lorsque vous visitez notre site web. Ils nous aident a fournir des fonctionnalites, a memoriser vos preferences et a comprendre comment vous utilisez nos services.",
        typesOfCookiesTitle: "Types de cookies que nous utilisons",
        typesOfCookies: {
          essential: "Cookies essentiels : Necessaires pour les fonctionnalites de base du site web comme l'authentification et la securite",
          functional: "Cookies fonctionnels : Memorisent vos preferences et parametres",
          analytics: "Cookies analytiques : Nous aident a comprendre comment les utilisateurs interagissent avec nos services",
          marketing: "Cookies marketing : Utilises pour diffuser des publicites et promotions pertinentes"
        },
        thirdPartyCookiesTitle: "Cookies tiers",
        thirdPartyCookies: "Nous pouvons egalement utiliser des services tiers qui definissent leurs propres cookies, tels que des outils d'analyse et des plateformes publicitaires. Ces cookies sont soumis aux politiques de confidentialite des tiers respectifs.",
        managingCookiesTitle: "Gestion des cookies",
        managingCookies: "Vous pouvez controler et supprimer les cookies via les parametres de votre navigateur. Veuillez noter que la desactivation de certains cookies peut affecter la fonctionnalite de nos services.",
        changesTitle: "Modifications de cette politique",
        changes: "Nous pouvons mettre a jour cette politique des cookies pour refleter des changements dans nos pratiques ou pour d'autres raisons operationnelles, legales ou reglementaires.",
        contactTitle: "Contact",
        contact: "Si vous avez des questions sur notre utilisation des cookies, veuillez nous contacter a privacy@invoratec.com."
      }
    },
    developer: {
      title: "Accord developpeur",
      lastUpdated: "Derniere mise a jour : 15 janvier 2025",
      content: {
        intro: "Cet accord developpeur regit votre utilisation des API, SDK et outils de developpement InvoratecAI. En accedant ou en utilisant nos ressources pour developpeurs, vous acceptez ces conditions.",
        licenseTitle: "Octroi de licence",
        license: {
          grant: "Nous vous accordons une licence limitee, non exclusive et non transferable pour utiliser nos outils de developpement et API",
          scope: "Cette licence vous permet de creer des applications qui s'integrent aux services InvoratecAI",
          restrictions: "Vous ne pouvez pas sous-licencier, ceder ou transferer cette licence a des tiers",
          revocation: "Nous nous reservons le droit de revoquer cette licence a tout moment en cas de violation de ces conditions"
        },
        restrictionsTitle: "Restrictions d'utilisation",
        restrictions: {
          noMisuse: "N'utilisez pas nos API a des fins illegales ou de maniere a nuire a nos services",
          rateLimits: "Respectez les limites de debit et les quotas d'utilisation des API",
          noReverseEngineering: "N'essayez pas de faire de l'ingenierie inverse, de decompiler ou de desassembler nos API ou services",
          noCompetition: "N'utilisez pas nos outils de developpement pour creer un service concurrent",
          attribution: "Attribuez le credit a InvoratecAI comme requis dans votre application"
        },
        intellectualPropertyTitle: "Propriete intellectuelle",
        intellectualProperty: {
          ownership: "InvoratecAI conserve tous les droits sur nos API, SDK et documentation associee",
          yourContent: "Vous conservez la propriete de vos applications et du contenu que vous creez a l'aide de nos outils",
          feedback: "Tout commentaire que vous fournissez sur nos outils de developpement peut etre utilise par nous sans obligation envers vous"
        },
        privacyTitle: "Confidentialite et donnees",
        privacy: {
          userConsent: "Obtenez le consentement utilisateur approprie avant d'acceder a leurs donnees via nos API",
          dataHandling: "Gerez toutes les donnees utilisateur conformement aux lois de confidentialite applicables",
          security: "Implementez des mesures de securite appropriees pour proteger les donnees utilisateur"
        },
        supportTitle: "Support",
        support: "Nous fournissons un support aux developpeurs via notre documentation et nos forums communautaires. Un support premium est disponible pour les comptes eligibles.",
        terminationTitle: "Resiliation",
        termination: {
          byYou: "Vous pouvez cesser d'utiliser nos outils de developpement a tout moment",
          byUs: "Nous pouvons suspendre ou resilier votre acces pour violation de ces conditions ou pour toute autre raison",
          effect: "Apres la resiliation, vous devez cesser d'utiliser nos API et supprimer tous les materiaux InvoratecAI"
        },
        liabilityTitle: "Limitation de responsabilite",
        liability: {
          disclaimer: "Nos outils de developpement sont fournis 'tels quels' sans garantie d'aucune sorte",
          limitation: "Nous ne sommes pas responsables des dommages indirects, accessoires ou consecutifs resultant de votre utilisation de nos outils de developpement"
        },
        generalTitle: "Dispositions generales",
        general: {
          modifications: "Nous pouvons modifier cet accord avec preavis",
          entireAgreement: "Cet accord constitue l'accord complet concernant l'utilisation de nos outils de developpement",
          severability: "Si une partie de cet accord est inapplicable, les parties restantes restent en vigueur",
          governingLaw: "Cet accord est regi par les lois de l'Etat de Californie"
        },
        contactTitle: "Contact",
        contact: "Pour toute question concernant cet accord developpeur, veuillez nous contacter a developers@invoratec.com."
      }
    },
    dpa: {
      title: "Accord de traitement des donnees",
      lastUpdated: "Derniere mise a jour : 15 janvier 2025",
      content: {
        intro: "Cet accord de traitement des donnees (DPA) fait partie de l'accord entre vous et InvoratecAI et decrit nos obligations concernant le traitement des donnees personnelles en votre nom.",
        definitionsTitle: "Definitions",
        definitions: {
          personalData: "Donnees personnelles : Toute information relative a une personne physique identifiee ou identifiable",
          processing: "Traitement : Toute operation ou ensemble d'operations effectuees sur des donnees personnelles",
          controller: "Responsable du traitement : L'entite qui determine les finalites et les moyens du traitement des donnees personnelles",
          processor: "Sous-traitant : L'entite qui traite les donnees personnelles pour le compte du responsable du traitement",
          dataSubject: "Personne concernee : L'individu dont les donnees personnelles sont traitees",
          subprocessor: "Sous-traitant ulterieur : Un tiers engage par le sous-traitant pour traiter les donnees personnelles"
        },
        processingTitle: "Traitement des donnees",
        processing: {
          scope: "Nous traitons les donnees personnelles uniquement comme decrit dans notre accord de service et conformement a vos instructions",
          purpose: "Le traitement est effectue dans le but de vous fournir nos services",
          duration: "Nous traitons les donnees pendant la duree de notre accord plus le temps necessaire pour les exigences legales",
          types: "Les types de donnees traitees comprennent les informations de contact, les donnees d'utilisation et les donnees de projet"
        },
        securityTitle: "Mesures de securite",
        security: {
          measures: "Nous mettons en oeuvre des mesures techniques et organisationnelles appropriees pour proteger les donnees personnelles",
          encryption: "Les donnees sont chiffrees au repos et en transit selon les methodes standard de l'industrie",
          accessControl: "L'acces aux donnees personnelles est limite au personnel autorise"
        },
        subprocessorsTitle: "Sous-traitants ulterieurs",
        subprocessors: {
          authorization: "Vous nous autorisez a engager des sous-traitants ulterieurs pour le traitement des donnees personnelles",
          list: "Une liste de nos sous-traitants ulterieurs actuels est disponible sur notre page des sous-traitants",
          notification: "Nous vous informerons de tout changement concernant les sous-traitants ulterieurs"
        },
        dataSubjectRightsTitle: "Droits des personnes concernees",
        dataSubjectRights: {
          assistance: "Nous vous assisterons pour repondre aux demandes des personnes concernees",
          notification: "Nous vous informerons rapidement de toute demande de personne concernee que nous recevons"
        },
        dataBreachesTitle: "Violations de donnees",
        dataBreaches: {
          notification: "Nous vous informerons sans delai de toute violation de donnees affectant des donnees personnelles",
          cooperation: "Nous coopererons aux enquetes et fournirons les informations necessaires",
          mitigation: "Nous prendrons les mesures appropriees pour attenuer l'impact des violations de donnees"
        },
        auditsTitle: "Audits",
        audits: "Vous avez le droit de mener ou de faire mener des audits de nos activites de traitement des donnees, sous reserve d'un preavis raisonnable et d'accords de confidentialite.",
        terminationTitle: "Resiliation",
        termination: "A la resiliation, nous supprimerons ou vous retournerons toutes les donnees personnelles traitees en votre nom, selon votre choix, sauf si la loi exige la conservation.",
        contactTitle: "Contact",
        contact: "Pour toute question concernant cet accord de traitement des donnees, veuillez nous contacter a dpa@invoratec.com."
      }
    },
    subprocessors: {
      title: "Sous-traitants",
      lastUpdated: "Derniere mise a jour : 15 janvier 2025",
      content: {
        intro: "InvoratecAI engage les sous-traitants suivants pour nous aider a fournir nos services. Ces sous-traitants sont lies par des obligations contractuelles de protection de vos donnees.",
        listTitle: "Sous-traitants actuels",
        list: [
          {
            name: "Google Cloud Platform",
            purpose: "Infrastructure cloud et hebergement",
            location: "Etats-Unis / UE"
          },
          {
            name: "Amazon Web Services",
            purpose: "Stockage cloud et sauvegarde",
            location: "Etats-Unis / UE"
          },
          {
            name: "Stripe",
            purpose: "Traitement des paiements",
            location: "Etats-Unis"
          },
          {
            name: "SendGrid",
            purpose: "Services de messagerie",
            location: "Etats-Unis"
          },
          {
            name: "Intercom",
            purpose: "Support client",
            location: "Etats-Unis"
          },
          {
            name: "OpenAI",
            purpose: "Traitement IA",
            location: "Etats-Unis"
          },
          {
            name: "Anthropic",
            purpose: "Traitement IA",
            location: "Etats-Unis"
          }
        ],
        updatesTitle: "Notification des changements",
        updates: "Nous mettrons a jour cette page et informerons les clients de tout changement concernant nos sous-traitants. Les clients seront informes au moins 30 jours avant l'engagement d'un nouveau sous-traitant.",
        contactTitle: "Contact",
        contact: "Si vous avez des questions sur nos sous-traitants, veuillez nous contacter a dpa@invoratec.com."
      }
    },
    ai: {
      title: "Conditions d'utilisation de l'IA",
      lastUpdated: "Derniere mise a jour : 15 janvier 2025",
      content: {
        intro: "Ces conditions supplementaires regissent votre utilisation des fonctionnalites alimentees par l'IA au sein des services InvoratecAI. Ces conditions completent nos conditions d'utilisation.",
        aiFeaturesTitle: "Fonctionnalites IA",
        aiFeatures: {
          description: "InvoratecAI integre l'intelligence artificielle pour ameliorer votre productivite et vos capacites d'automatisation",
          nlp: "Traitement du langage naturel : Comprenez les commandes et requetes en langage naturel",
          codeGeneration: "Generation de code : Generez automatiquement du code d'automatisation Revit base sur vos instructions",
          smartSuggestions: "Suggestions intelligentes : Recommandations pour les flux de travail et les actions"
        },
        dataUsageTitle: "Utilisation des donnees pour l'IA",
        dataUsage: {
          training: "Vos donnees peuvent etre utilisees pour ameliorer nos modeles d'IA sauf si vous vous y opposez",
          anonymization: "Toutes les donnees utilisees pour l'entrainement sont anonymisees et agregees",
          optOut: "Vous pouvez vous opposer a l'utilisation de vos donnees pour l'entrainement de l'IA dans les parametres de votre compte",
          retention: "Les donnees de traitement IA sont conservees conformement a notre politique de conservation des donnees"
        },
        limitationsTitle: "Limitations",
        limitations: {
          accuracy: "Le contenu genere par l'IA peut ne pas toujours etre precis et doit etre verifie",
          noGuarantee: "Nous ne garantissons pas l'exactitude ou l'adequation des sorties de l'IA",
          humanReview: "Les decisions critiques ne doivent pas etre basees uniquement sur les recommandations de l'IA",
          availability: "Les fonctionnalites IA peuvent etre soumises a des limitations de disponibilite et des limites de debit"
        },
        userResponsibilitiesTitle: "Responsabilites de l'utilisateur",
        userResponsibilities: {
          review: "Examinez tout le contenu genere par l'IA avant de l'utiliser en production",
          compliance: "Assurez-vous que votre utilisation des fonctionnalites IA est conforme aux reglementations applicables",
          feedback: "Fournissez des commentaires sur les sorties de l'IA pour aider a ameliorer la precision",
          restrictions: "N'utilisez pas les fonctionnalites IA pour du contenu ou des activites interdits"
        },
        updatesTitle: "Mises a jour des fonctionnalites IA",
        updates: "Nous pouvons mettre a jour et ameliorer nos fonctionnalites IA regulierement. Ces mises a jour peuvent affecter le fonctionnement des fonctionnalites ou les sorties qu'elles produisent.",
        contactTitle: "Contact",
        contact: "Pour toute question concernant nos fonctionnalites IA, veuillez nous contacter a support@invoratec.com."
      }
    },
    integrations: {
      title: "Conditions d'integration",
      lastUpdated: "Derniere mise a jour : 15 janvier 2025",
      content: {
        intro: "Ces conditions regissent l'utilisation des integrations tierces au sein des services InvoratecAI, y compris Autodesk Construction Cloud (ACC) et d'autres plateformes connectees.",
        supportedIntegrationsTitle: "Integrations prises en charge",
        supportedIntegrations: {
          acc: "Autodesk Construction Cloud (ACC) : Connectez-vous aux projets et fichiers ACC",
          revit: "Revit : Integration directe avec Autodesk Revit pour l'automatisation des modeles",
          bim360: "BIM 360 : Accedez aux donnees de projet BIM 360 et aux fonctionnalites de collaboration",
          thirdParty: "Outils tiers : Integrez-vous avec des outils et services tiers approuves"
        },
        dataFlowTitle: "Flux de donnees",
        dataFlow: {
          access: "Lorsque vous connectez une integration, InvoratecAI peut acceder aux donnees de cette plateforme selon vos autorisations",
          sync: "Les donnees peuvent etre synchronisees entre InvoratecAI et les plateformes connectees",
          storage: "Certaines donnees d'integration peuvent etre stockees sur les serveurs InvoratecAI conformement a notre politique de confidentialite"
        },
        securityTitle: "Securite des integrations",
        security: {
          oauth: "Nous utilisons l'authentification OAuth standard de l'industrie pour les integrations",
          permissions: "Vous controlez quelles autorisations sont accordees a chaque integration",
          revocation: "Vous pouvez revoquer l'acces a l'integration a tout moment dans les parametres de votre compte"
        },
        responsibilitiesTitle: "Responsabilites",
        responsibilities: {
          thirdPartyTerms: "Vous etes responsable du respect des conditions d'utilisation des plateformes tierces",
          credentials: "Gardez les identifiants d'integration securises et ne les partagez pas avec des parties non autorisees",
          monitoring: "Surveillez les comptes integres pour tout acces non autorise",
          updates: "Maintenez les identifiants d'integration a jour pour eviter les interruptions de service"
        },
        contactTitle: "Contact",
        contact: "Pour toute question concernant les integrations, veuillez nous contacter a support@invoratec.com."
      }
    },
    tos: {
      title: "Conditions d'utilisation",
      lastUpdated: "Derniere mise a jour : 15 janvier 2025",
      content: {
        intro: "Bienvenue sur InvoratecAI. Ces conditions d'utilisation regissent votre utilisation de nos services. En utilisant InvoratecAI, vous acceptez ces conditions.",
        acceptanceTitle: "Acceptation des conditions",
        acceptance: "En accedant ou en utilisant nos services, vous acceptez d'etre lie par ces conditions. Si vous n'etes pas d'accord, n'utilisez pas nos services.",
        servicesTitle: "Nos services",
        services: {
          description: "InvoratecAI fournit des outils d'automatisation alimentes par l'IA pour les flux de travail Revit et BIM",
          availability: "Nous nous efforcons de maintenir une haute disponibilite du service mais ne pouvons garantir une disponibilite a 100%",
          modifications: "Nous pouvons modifier, suspendre ou interrompre nos services a tout moment sans preavis"
        },
        accountsTitle: "Comptes utilisateurs",
        accounts: {
          registration: "Vous devez fournir des informations exactes et completes lors de la creation de votre compte",
          security: "Vous etes responsable du maintien de la securite de votre compte",
          responsibility: "Vous etes responsable de toutes les activites sous votre compte",
          notification: "Informez-nous immediatement si vous suspectez un acces non autorise"
        },
        paymentTitle: "Paiement",
        payment: {
          pricing: "Les prix de nos services sont decrits sur notre site web",
          billing: "Vous acceptez de payer tous les frais conformement aux conditions de votre abonnement",
          taxes: "Vous etes responsable de toutes les taxes applicables",
          refunds: "Les remboursements sont traites conformement a notre politique de remboursement"
        },
        intellectualPropertyTitle: "Propriete intellectuelle",
        intellectualProperty: {
          ownership: "InvoratecAI conserve tous les droits sur nos services, y compris les logiciels et le contenu",
          license: "Nous vous accordons une licence limitee pour utiliser nos services conformement a ces conditions",
          restrictions: "Vous ne pouvez pas copier, modifier ou faire de l'ingenierie inverse de nos services"
        },
        userContentTitle: "Contenu utilisateur",
        userContent: {
          ownership: "Vous conservez la propriete du contenu que vous televersez sur notre plateforme",
          license: "Vous nous accordez une licence pour utiliser votre contenu afin de fournir nos services",
          responsibility: "Vous etes responsable du contenu que vous televersez"
        },
        prohibitedUseTitle: "Utilisation interdite",
        prohibitedUse: {
          illegal: "N'utilisez pas nos services pour des activites illegales",
          harmful: "N'essayez pas d'endommager ou de perturber nos services",
          unauthorized: "N'accedez pas a d'autres comptes ou systemes sans autorisation",
          malware: "Ne televersez pas de logiciels malveillants ou de code nuisible",
          spam: "N'utilisez pas nos services pour envoyer du spam ou des messages non sollicites"
        },
        terminationTitle: "Resiliation",
        termination: {
          byYou: "Vous pouvez resilier votre compte a tout moment",
          byUs: "Nous pouvons suspendre ou resilier votre compte pour violation de ces conditions",
          effect: "Apres la resiliation, votre acces a nos services prendra fin"
        },
        liabilityTitle: "Limitation de responsabilite",
        liability: {
          disclaimer: "Nos services sont fournis 'tels quels' sans garantie",
          limitation: "Nous ne sommes pas responsables des dommages indirects ou de la perte de profits",
          cap: "Notre responsabilite totale est limitee au montant que vous nous avez paye au cours des 12 derniers mois"
        },
        indemnificationTitle: "Indemnisation",
        indemnification: "Vous acceptez d'indemniser InvoratecAI contre toutes reclamations decoulant de votre utilisation de nos services ou de votre violation de ces conditions.",
        changesTitle: "Modifications des conditions",
        changes: "Nous pouvons mettre a jour ces conditions a tout moment. Nous vous informerons des changements importants en publiant les nouvelles conditions sur notre site web.",
        governingTitle: "Droit applicable",
        governing: "Ces conditions sont regies par les lois de l'Etat de Californie, sans egard aux principes de conflits de lois.",
        contactTitle: "Contact",
        contact: "Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter a legal@invoratec.com."
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

// Read existing fr.json
const frPath = path.join(__dirname, 'fr.json');
const existingFr = JSON.parse(fs.readFileSync(frPath, 'utf8'));

// Merge translations
const updatedFr = deepMerge(existingFr, frTranslations);

// Write back
fs.writeFileSync(frPath, JSON.stringify(updatedFr, null, 2), 'utf8');

console.log('Updated fr.json with legal content translations');
