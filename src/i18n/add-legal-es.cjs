const fs = require('fs');
const path = require('path');

// Spanish legal content translations
const esTranslations = {
  terms: {
    backToDocs: "Volver a la documentacion",
    legalPolicies: "Seguridad y politicas",
    nav: {
      security: "Politica de seguridad",
      privacy: "Politica de privacidad",
      cookies: "Politica de cookies",
      developer: "Acuerdo de desarrollador",
      dpa: "Acuerdo de procesamiento de datos",
      subprocessors: "Subprocesadores",
      ai: "Terminos de uso de IA",
      integrations: "Terminos de integracion",
      tos: "Terminos de servicio"
    },
    security: {
      title: "Politica de seguridad",
      lastUpdated: "Ultima actualizacion: 15 de enero de 2025",
      content: {
        intro: "En InvoratecAI, la seguridad es nuestra maxima prioridad. Esta politica describe nuestras medidas de seguridad integrales para proteger sus datos y garantizar la integridad de nuestros servicios.",
        principlesTitle: "Principios de seguridad",
        principles: {
          defenseInDepth: "Defensa en profundidad: Controles de seguridad multicapa en toda nuestra infraestructura",
          leastPrivilege: "Privilegio minimo: Acceso solo a lo necesario para cada funcion",
          zeroTrust: "Arquitectura Zero Trust: Verificar todo, no confiar en nada por defecto",
          continuousMonitoring: "Monitoreo continuo: Deteccion y respuesta a amenazas en tiempo real",
          secureByDesign: "Seguro por diseno: La seguridad esta integrada en nuestros procesos de desarrollo desde el principio"
        },
        dataProtectionTitle: "Proteccion de datos",
        dataProtection: {
          encryption: "Cifrado: Todos los datos estan cifrados en reposo con AES-256 y en transito con TLS 1.3",
          keyManagement: "Gestion de claves: Almacenamiento seguro de claves y rotacion con modulos de seguridad de hardware (HSM)",
          dataIsolation: "Aislamiento de datos: La separacion estricta de inquilinos garantiza que sus datos permanezcan aislados de otros usuarios",
          backups: "Copias de seguridad: Copias de seguridad cifradas regulares con almacenamiento geo-redundante",
          retention: "Retencion: Politicas claras de retencion de datos con eliminacion segura al vencimiento"
        },
        accessControlTitle: "Control de acceso",
        accessControl: {
          authentication: "Autenticacion: Autenticacion multifactor (MFA) requerida para todas las cuentas",
          authorization: "Autorizacion: Control de acceso basado en roles (RBAC) con permisos granulares",
          sessionManagement: "Gestion de sesiones: Manejo seguro de sesiones con tiempo de espera automatico",
          auditLogging: "Registro de auditoria: Registros completos de todos los accesos y modificaciones"
        },
        infrastructureTitle: "Seguridad de infraestructura",
        infrastructure: {
          cloudSecurity: "Seguridad en la nube: Alojado en centros de datos certificados SOC 2 Tipo II",
          networkSecurity: "Seguridad de red: Firewalls, deteccion de intrusiones y proteccion DDoS",
          containerSecurity: "Seguridad de contenedores: Entornos de contenedores aislados con escaneo regular de vulnerabilidades",
          patchManagement: "Gestion de parches: Actualizaciones de seguridad regulares y remediacion de vulnerabilidades"
        },
        incidentResponseTitle: "Respuesta a incidentes",
        incidentResponse: {
          detection: "Deteccion: Deteccion automatizada de amenazas con revision manual",
          response: "Respuesta: Procedimientos de respuesta a incidentes establecidos con rutas de escalada definidas",
          communication: "Comunicacion: Notificacion oportuna a las partes afectadas en caso de incidente de seguridad",
          postIncident: "Post-incidente: Analisis exhaustivo y acciones de mejora"
        },
        complianceTitle: "Cumplimiento",
        compliance: {
          standards: "Estandares: Alineacion con los requisitos de ISO 27001, SOC 2 y GDPR",
          audits: "Auditorias: Evaluaciones de seguridad regulares y pruebas de penetracion por terceros",
          certifications: "Certificaciones: Mantenimiento de certificaciones de seguridad actualizadas",
          training: "Capacitacion: Capacitacion regular de concientizacion de seguridad para todos los empleados"
        },
        contactTitle: "Contacto de seguridad",
        contact: "Si desea reportar un incidente de seguridad o vulnerabilidad, por favor contacte a nuestro equipo de seguridad en security@invoratec.com. Tomamos todos los informes de seguridad en serio y responderemos rapidamente."
      }
    },
    privacy: {
      title: "Politica de privacidad",
      lastUpdated: "Ultima actualizacion: 15 de enero de 2025",
      content: {
        intro: "Esta politica de privacidad describe como InvoratecAI recopila, utiliza y protege su informacion personal cuando utiliza nuestros servicios.",
        dataCollectionTitle: "Recopilacion de datos",
        dataCollection: {
          accountInfo: "Informacion de cuenta: Nombre, direccion de correo electronico y detalles de la empresa al registrarse",
          usageData: "Datos de uso: Informacion sobre como interactua con nuestros servicios",
          technicalData: "Datos tecnicos: Direccion IP, tipo de navegador, informacion del dispositivo",
          projectData: "Datos del proyecto: Datos y archivos del proyecto Revit que carga en nuestra plataforma"
        },
        dataUseTitle: "Como usamos sus datos",
        dataUse: {
          serviceProvision: "Para proporcionar y mantener nuestros servicios",
          improvement: "Para mejorar y desarrollar nuestros servicios",
          communication: "Para comunicarnos con usted sobre actualizaciones, soporte y materiales promocionales",
          analytics: "Para analizar patrones de uso y optimizar la experiencia del usuario",
          legal: "Para cumplir con obligaciones legales"
        },
        dataSharingTitle: "Compartir datos",
        dataSharing: {
          serviceProviders: "Compartimos datos con proveedores de servicios de confianza que nos ayudan a proporcionar nuestros servicios",
          legalRequirements: "Podemos divulgar datos cuando lo requiera la ley o para proteger nuestros derechos",
          businessTransfers: "En caso de fusion o adquisicion, los datos pueden ser transferidos a los nuevos propietarios"
        },
        dataRetentionTitle: "Retencion de datos",
        dataRetention: "Conservamos sus datos mientras su cuenta este activa o segun sea necesario para proporcionar nuestros servicios. Puede solicitar la eliminacion de sus datos en cualquier momento.",
        userRightsTitle: "Sus derechos",
        userRights: {
          access: "Acceso: Solicitar una copia de sus datos personales",
          rectification: "Rectificacion: Corregir datos inexactos o incompletos",
          erasure: "Eliminacion: Solicitar la eliminacion de sus datos",
          portability: "Portabilidad: Recibir sus datos en un formato portable",
          objection: "Objecion: Oponerse al procesamiento de sus datos",
          restriction: "Restriccion: Solicitar el procesamiento restringido de sus datos"
        },
        cookiesTitle: "Cookies",
        cookies: "Utilizamos cookies y tecnologias similares para proporcionar funcionalidad, recordar sus preferencias y analizar patrones de uso. Consulte nuestra politica de cookies para mas informacion.",
        securityTitle: "Seguridad",
        security: "Implementamos medidas de seguridad estandar de la industria para proteger sus datos, incluyendo cifrado, controles de acceso y auditorias de seguridad regulares.",
        childrenTitle: "Privacidad de los ninos",
        children: "Nuestros servicios no estan dirigidos a ninos menores de 16 anos. No recopilamos conscientemente datos de ninos.",
        changesTitle: "Cambios en esta politica",
        changes: "Podemos actualizar esta politica de vez en cuando. Le notificaremos sobre cambios significativos publicando la nueva politica en esta pagina.",
        contactTitle: "Contacto",
        contact: "Para preguntas sobre esta politica de privacidad, por favor contactenos en privacy@invoratec.com."
      }
    },
    cookies: {
      title: "Politica de cookies",
      lastUpdated: "Ultima actualizacion: 15 de enero de 2025",
      content: {
        intro: "Esta politica de cookies explica como InvoratecAI utiliza cookies y tecnologias similares cuando visita nuestro sitio web y utiliza nuestros servicios.",
        whatAreCookiesTitle: "Que son las cookies?",
        whatAreCookies: "Las cookies son pequenos archivos de texto almacenados en su dispositivo cuando visita nuestro sitio web. Nos ayudan a proporcionar funcionalidad, recordar sus preferencias y entender como utiliza nuestros servicios.",
        typesOfCookiesTitle: "Tipos de cookies que utilizamos",
        typesOfCookies: {
          essential: "Cookies esenciales: Necesarias para la funcionalidad basica del sitio web como autenticacion y seguridad",
          functional: "Cookies funcionales: Recuerdan sus preferencias y configuraciones",
          analytics: "Cookies analiticas: Nos ayudan a entender como los usuarios interactuan con nuestros servicios",
          marketing: "Cookies de marketing: Utilizadas para entregar publicidad y promociones relevantes"
        },
        thirdPartyCookiesTitle: "Cookies de terceros",
        thirdPartyCookies: "Tambien podemos utilizar servicios de terceros que establecen sus propias cookies, como herramientas de analisis y plataformas de publicidad. Estas cookies estan sujetas a las politicas de privacidad de los terceros respectivos.",
        managingCookiesTitle: "Gestion de cookies",
        managingCookies: "Puede controlar y eliminar cookies a traves de la configuracion de su navegador. Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de nuestros servicios.",
        changesTitle: "Cambios en esta politica",
        changes: "Podemos actualizar esta politica de cookies para reflejar cambios en nuestras practicas o por otras razones operativas, legales o regulatorias.",
        contactTitle: "Contacto",
        contact: "Si tiene preguntas sobre nuestro uso de cookies, por favor contactenos en privacy@invoratec.com."
      }
    },
    developer: {
      title: "Acuerdo de desarrollador",
      lastUpdated: "Ultima actualizacion: 15 de enero de 2025",
      content: {
        intro: "Este acuerdo de desarrollador rige su uso de las APIs, SDKs y herramientas de desarrollo de InvoratecAI. Al acceder o utilizar nuestros recursos para desarrolladores, acepta estos terminos.",
        licenseTitle: "Concesion de licencia",
        license: {
          grant: "Le otorgamos una licencia limitada, no exclusiva e intransferible para usar nuestras herramientas de desarrollo y APIs",
          scope: "Esta licencia le permite crear aplicaciones que se integren con los servicios de InvoratecAI",
          restrictions: "No puede sublicenciar, asignar o transferir esta licencia a terceros",
          revocation: "Nos reservamos el derecho de revocar esta licencia en cualquier momento por violacion de estos terminos"
        },
        restrictionsTitle: "Restricciones de uso",
        restrictions: {
          noMisuse: "No utilice nuestras APIs para fines ilegales o de manera que dane nuestros servicios",
          rateLimits: "Respete los limites de tasa y cuotas de uso de las APIs",
          noReverseEngineering: "No intente realizar ingenieria inversa, descompilar o desensamblar nuestras APIs o servicios",
          noCompetition: "No utilice nuestras herramientas de desarrollo para crear un servicio competidor",
          attribution: "Atribuya credito a InvoratecAI segun sea requerido en su aplicacion"
        },
        intellectualPropertyTitle: "Propiedad intelectual",
        intellectualProperty: {
          ownership: "InvoratecAI retiene todos los derechos sobre nuestras APIs, SDKs y documentacion asociada",
          yourContent: "Usted retiene la propiedad de sus aplicaciones y contenido que cree usando nuestras herramientas",
          feedback: "Cualquier comentario que proporcione sobre nuestras herramientas de desarrollo puede ser utilizado por nosotros sin obligacion hacia usted"
        },
        privacyTitle: "Privacidad y datos",
        privacy: {
          userConsent: "Obtenga el consentimiento apropiado del usuario antes de acceder a sus datos a traves de nuestras APIs",
          dataHandling: "Maneje todos los datos del usuario de acuerdo con las leyes de privacidad aplicables",
          security: "Implemente medidas de seguridad apropiadas para proteger los datos del usuario"
        },
        supportTitle: "Soporte",
        support: "Proporcionamos soporte para desarrolladores a traves de nuestra documentacion y foros comunitarios. El soporte premium esta disponible para cuentas elegibles.",
        terminationTitle: "Terminacion",
        termination: {
          byYou: "Puede dejar de usar nuestras herramientas de desarrollo en cualquier momento",
          byUs: "Podemos suspender o terminar su acceso por violacion de estos terminos o por cualquier otra razon",
          effect: "Despues de la terminacion, debe dejar de usar nuestras APIs y eliminar todos los materiales de InvoratecAI"
        },
        liabilityTitle: "Limitacion de responsabilidad",
        liability: {
          disclaimer: "Nuestras herramientas de desarrollo se proporcionan 'tal cual' sin garantias de ningun tipo",
          limitation: "No somos responsables de danos indirectos, incidentales o consecuentes derivados de su uso de nuestras herramientas de desarrollo"
        },
        generalTitle: "Disposiciones generales",
        general: {
          modifications: "Podemos modificar este acuerdo con previo aviso",
          entireAgreement: "Este acuerdo constituye el acuerdo completo con respecto al uso de nuestras herramientas de desarrollo",
          severability: "Si alguna parte de este acuerdo es inaplicable, las partes restantes permanecen en vigor",
          governingLaw: "Este acuerdo se rige por las leyes del Estado de California"
        },
        contactTitle: "Contacto",
        contact: "Para preguntas sobre este acuerdo de desarrollador, por favor contactenos en developers@invoratec.com."
      }
    },
    dpa: {
      title: "Acuerdo de procesamiento de datos",
      lastUpdated: "Ultima actualizacion: 15 de enero de 2025",
      content: {
        intro: "Este acuerdo de procesamiento de datos (DPA) forma parte del acuerdo entre usted e InvoratecAI y describe nuestras obligaciones con respecto al procesamiento de datos personales en su nombre.",
        definitionsTitle: "Definiciones",
        definitions: {
          personalData: "Datos personales: Cualquier informacion relacionada con una persona fisica identificada o identificable",
          processing: "Procesamiento: Cualquier operacion o conjunto de operaciones realizadas sobre datos personales",
          controller: "Controlador: La entidad que determina los propositos y medios del procesamiento de datos personales",
          processor: "Procesador: La entidad que procesa datos personales en nombre del controlador",
          dataSubject: "Sujeto de datos: El individuo cuyos datos personales se procesan",
          subprocessor: "Subprocesador: Un tercero contratado por el procesador para procesar datos personales"
        },
        processingTitle: "Procesamiento de datos",
        processing: {
          scope: "Procesamos datos personales solo como se describe en nuestro acuerdo de servicio y segun sus instrucciones",
          purpose: "El procesamiento se realiza con el proposito de proporcionarle nuestros servicios",
          duration: "Procesamos datos durante la duracion de nuestro acuerdo mas el tiempo necesario para requisitos legales",
          types: "Los tipos de datos procesados incluyen informacion de contacto, datos de uso y datos del proyecto"
        },
        securityTitle: "Medidas de seguridad",
        security: {
          measures: "Implementamos medidas tecnicas y organizativas apropiadas para proteger los datos personales",
          encryption: "Los datos estan cifrados en reposo y en transito utilizando metodos estandar de la industria",
          accessControl: "El acceso a los datos personales esta limitado al personal autorizado"
        },
        subprocessorsTitle: "Subprocesadores",
        subprocessors: {
          authorization: "Usted nos autoriza a contratar subprocesadores para el procesamiento de datos personales",
          list: "Una lista de nuestros subprocesadores actuales esta disponible en nuestra pagina de subprocesadores",
          notification: "Le notificaremos sobre cualquier cambio en los subprocesadores"
        },
        dataSubjectRightsTitle: "Derechos del sujeto de datos",
        dataSubjectRights: {
          assistance: "Le asistiremos en responder a las solicitudes de los sujetos de datos",
          notification: "Le notificaremos prontamente sobre cualquier solicitud de sujeto de datos que recibamos"
        },
        dataBreachesTitle: "Violaciones de datos",
        dataBreaches: {
          notification: "Le notificaremos sin demora indebida de cualquier violacion de datos que afecte datos personales",
          cooperation: "Cooperaremos con las investigaciones y proporcionaremos la informacion necesaria",
          mitigation: "Tomaremos las medidas apropiadas para mitigar el impacto de las violaciones de datos"
        },
        auditsTitle: "Auditorias",
        audits: "Tiene derecho a realizar o hacer que se realicen auditorias de nuestras actividades de procesamiento de datos, sujeto a aviso razonable y acuerdos de confidencialidad.",
        terminationTitle: "Terminacion",
        termination: "Al terminar, eliminaremos o le devolveremos todos los datos personales procesados en su nombre, segun su eleccion, a menos que la ley requiera la retencion.",
        contactTitle: "Contacto",
        contact: "Para preguntas sobre este acuerdo de procesamiento de datos, por favor contactenos en dpa@invoratec.com."
      }
    },
    subprocessors: {
      title: "Subprocesadores",
      lastUpdated: "Ultima actualizacion: 15 de enero de 2025",
      content: {
        intro: "InvoratecAI contrata a los siguientes subprocesadores para ayudarnos a proporcionar nuestros servicios. Estos subprocesadores estan sujetos a obligaciones contractuales para proteger sus datos.",
        listTitle: "Subprocesadores actuales",
        list: [
          {
            name: "Google Cloud Platform",
            purpose: "Infraestructura en la nube y alojamiento",
            location: "Estados Unidos / UE"
          },
          {
            name: "Amazon Web Services",
            purpose: "Almacenamiento en la nube y respaldo",
            location: "Estados Unidos / UE"
          },
          {
            name: "Stripe",
            purpose: "Procesamiento de pagos",
            location: "Estados Unidos"
          },
          {
            name: "SendGrid",
            purpose: "Servicios de correo electronico",
            location: "Estados Unidos"
          },
          {
            name: "Intercom",
            purpose: "Soporte al cliente",
            location: "Estados Unidos"
          },
          {
            name: "OpenAI",
            purpose: "Procesamiento de IA",
            location: "Estados Unidos"
          },
          {
            name: "Anthropic",
            purpose: "Procesamiento de IA",
            location: "Estados Unidos"
          }
        ],
        updatesTitle: "Notificacion de cambios",
        updates: "Actualizaremos esta pagina y notificaremos a los clientes sobre cualquier cambio en nuestros subprocesadores. Los clientes seran notificados al menos 30 dias antes de contratar un nuevo subprocesador.",
        contactTitle: "Contacto",
        contact: "Si tiene preguntas sobre nuestros subprocesadores, por favor contactenos en dpa@invoratec.com."
      }
    },
    ai: {
      title: "Terminos de uso de IA",
      lastUpdated: "Ultima actualizacion: 15 de enero de 2025",
      content: {
        intro: "Estos terminos adicionales rigen su uso de las funciones impulsadas por IA dentro de los servicios de InvoratecAI. Estos terminos complementan nuestros terminos de servicio.",
        aiFeaturesTitle: "Funciones de IA",
        aiFeatures: {
          description: "InvoratecAI integra inteligencia artificial para mejorar su productividad y capacidades de automatizacion",
          nlp: "Procesamiento de lenguaje natural: Comprenda comandos y consultas en lenguaje natural",
          codeGeneration: "Generacion de codigo: Genere automaticamente codigo de automatizacion de Revit basado en sus instrucciones",
          smartSuggestions: "Sugerencias inteligentes: Recomendaciones para flujos de trabajo y acciones"
        },
        dataUsageTitle: "Uso de datos para IA",
        dataUsage: {
          training: "Sus datos pueden ser utilizados para mejorar nuestros modelos de IA a menos que se oponga",
          anonymization: "Todos los datos utilizados para entrenamiento son anonimizados y agregados",
          optOut: "Puede optar por no participar en el uso de sus datos para entrenamiento de IA en la configuracion de su cuenta",
          retention: "Los datos de procesamiento de IA se retienen segun nuestra politica de retencion de datos"
        },
        limitationsTitle: "Limitaciones",
        limitations: {
          accuracy: "El contenido generado por IA puede no siempre ser preciso y debe ser verificado",
          noGuarantee: "No garantizamos la exactitud o idoneidad de las salidas de IA",
          humanReview: "Las decisiones criticas no deben basarse unicamente en recomendaciones de IA",
          availability: "Las funciones de IA pueden estar sujetas a limitaciones de disponibilidad y limites de tasa"
        },
        userResponsibilitiesTitle: "Responsabilidades del usuario",
        userResponsibilities: {
          review: "Revise todo el contenido generado por IA antes de usarlo en produccion",
          compliance: "Asegurese de que su uso de las funciones de IA cumpla con las regulaciones aplicables",
          feedback: "Proporcione comentarios sobre las salidas de IA para ayudar a mejorar la precision",
          restrictions: "No utilice las funciones de IA para contenido o actividades prohibidas"
        },
        updatesTitle: "Actualizaciones de funciones de IA",
        updates: "Podemos actualizar y mejorar nuestras funciones de IA regularmente. Estas actualizaciones pueden afectar como funcionan las funciones o las salidas que producen.",
        contactTitle: "Contacto",
        contact: "Para preguntas sobre nuestras funciones de IA, por favor contactenos en support@invoratec.com."
      }
    },
    integrations: {
      title: "Terminos de integracion",
      lastUpdated: "Ultima actualizacion: 15 de enero de 2025",
      content: {
        intro: "Estos terminos rigen el uso de integraciones de terceros dentro de los servicios de InvoratecAI, incluyendo Autodesk Construction Cloud (ACC) y otras plataformas conectadas.",
        supportedIntegrationsTitle: "Integraciones soportadas",
        supportedIntegrations: {
          acc: "Autodesk Construction Cloud (ACC): Conectese a proyectos y archivos de ACC",
          revit: "Revit: Integracion directa con Autodesk Revit para automatizacion de modelos",
          bim360: "BIM 360: Acceda a datos de proyectos BIM 360 y funciones de colaboracion",
          thirdParty: "Herramientas de terceros: Integrese con herramientas y servicios de terceros aprobados"
        },
        dataFlowTitle: "Flujo de datos",
        dataFlow: {
          access: "Cuando conecta una integracion, InvoratecAI puede acceder a datos de esa plataforma segun sus permisos",
          sync: "Los datos pueden sincronizarse entre InvoratecAI y las plataformas conectadas",
          storage: "Algunos datos de integracion pueden almacenarse en los servidores de InvoratecAI de acuerdo con nuestra politica de privacidad"
        },
        securityTitle: "Seguridad de integracion",
        security: {
          oauth: "Utilizamos autenticacion OAuth estandar de la industria para integraciones",
          permissions: "Usted controla que permisos se otorgan a cada integracion",
          revocation: "Puede revocar el acceso de integracion en cualquier momento desde la configuracion de su cuenta"
        },
        responsibilitiesTitle: "Responsabilidades",
        responsibilities: {
          thirdPartyTerms: "Es responsable de cumplir con los terminos de servicio de las plataformas de terceros",
          credentials: "Mantenga las credenciales de integracion seguras y no las comparta con partes no autorizadas",
          monitoring: "Monitoree las cuentas integradas para acceso no autorizado",
          updates: "Mantenga las credenciales de integracion actualizadas para evitar interrupciones del servicio"
        },
        contactTitle: "Contacto",
        contact: "Para preguntas sobre integraciones, por favor contactenos en support@invoratec.com."
      }
    },
    tos: {
      title: "Terminos de servicio",
      lastUpdated: "Ultima actualizacion: 15 de enero de 2025",
      content: {
        intro: "Bienvenido a InvoratecAI. Estos terminos de servicio rigen su uso de nuestros servicios. Al usar InvoratecAI, acepta estos terminos.",
        acceptanceTitle: "Aceptacion de terminos",
        acceptance: "Al acceder o usar nuestros servicios, acepta estar sujeto a estos terminos. Si no esta de acuerdo, no use nuestros servicios.",
        servicesTitle: "Nuestros servicios",
        services: {
          description: "InvoratecAI proporciona herramientas de automatizacion impulsadas por IA para flujos de trabajo de Revit y BIM",
          availability: "Nos esforzamos por mantener una alta disponibilidad del servicio pero no podemos garantizar 100% de tiempo de actividad",
          modifications: "Podemos modificar, suspender o descontinuar nuestros servicios en cualquier momento sin previo aviso"
        },
        accountsTitle: "Cuentas de usuario",
        accounts: {
          registration: "Debe proporcionar informacion precisa y completa al crear su cuenta",
          security: "Es responsable de mantener la seguridad de su cuenta",
          responsibility: "Es responsable de todas las actividades bajo su cuenta",
          notification: "Notifiquenos inmediatamente si sospecha de acceso no autorizado"
        },
        paymentTitle: "Pago",
        payment: {
          pricing: "Los precios de nuestros servicios se describen en nuestro sitio web",
          billing: "Acepta pagar todas las tarifas de acuerdo con los terminos de su suscripcion",
          taxes: "Es responsable de todos los impuestos aplicables",
          refunds: "Los reembolsos se manejan de acuerdo con nuestra politica de reembolso"
        },
        intellectualPropertyTitle: "Propiedad intelectual",
        intellectualProperty: {
          ownership: "InvoratecAI retiene todos los derechos sobre nuestros servicios, incluyendo software y contenido",
          license: "Le otorgamos una licencia limitada para usar nuestros servicios de acuerdo con estos terminos",
          restrictions: "No puede copiar, modificar o realizar ingenieria inversa de nuestros servicios"
        },
        userContentTitle: "Contenido del usuario",
        userContent: {
          ownership: "Retiene la propiedad del contenido que carga en nuestra plataforma",
          license: "Nos otorga una licencia para usar su contenido para proporcionar nuestros servicios",
          responsibility: "Es responsable del contenido que carga"
        },
        prohibitedUseTitle: "Uso prohibido",
        prohibitedUse: {
          illegal: "No use nuestros servicios para actividades ilegales",
          harmful: "No intente danar o interrumpir nuestros servicios",
          unauthorized: "No acceda a otras cuentas o sistemas sin autorizacion",
          malware: "No cargue malware o codigo danino",
          spam: "No use nuestros servicios para enviar spam o mensajes no solicitados"
        },
        terminationTitle: "Terminacion",
        termination: {
          byYou: "Puede terminar su cuenta en cualquier momento",
          byUs: "Podemos suspender o terminar su cuenta por violacion de estos terminos",
          effect: "Despues de la terminacion, su acceso a nuestros servicios terminara"
        },
        liabilityTitle: "Limitacion de responsabilidad",
        liability: {
          disclaimer: "Nuestros servicios se proporcionan 'tal cual' sin garantias",
          limitation: "No somos responsables de danos indirectos o perdida de beneficios",
          cap: "Nuestra responsabilidad total esta limitada a la cantidad que nos pago en los ultimos 12 meses"
        },
        indemnificationTitle: "Indemnizacion",
        indemnification: "Acepta indemnizar a InvoratecAI contra cualquier reclamo que surja de su uso de nuestros servicios o de su violacion de estos terminos.",
        changesTitle: "Cambios en los terminos",
        changes: "Podemos actualizar estos terminos en cualquier momento. Le notificaremos sobre cambios significativos publicando los nuevos terminos en nuestro sitio web.",
        governingTitle: "Ley aplicable",
        governing: "Estos terminos se rigen por las leyes del Estado de California, sin tener en cuenta los principios de conflicto de leyes.",
        contactTitle: "Contacto",
        contact: "Para preguntas sobre estos terminos de servicio, por favor contactenos en legal@invoratec.com."
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

// Read existing es.json
const esPath = path.join(__dirname, 'es.json');
const existingEs = JSON.parse(fs.readFileSync(esPath, 'utf8'));

// Merge translations
const updatedEs = deepMerge(existingEs, esTranslations);

// Write back
fs.writeFileSync(esPath, JSON.stringify(updatedEs, null, 2), 'utf8');

console.log('Updated es.json with legal content translations');
