const fs = require('fs');
const path = require('path');

// Portuguese legal content translations
const ptTranslations = {
  terms: {
    backToDocs: "Voltar a documentacao",
    legalPolicies: "Seguranca e politicas",
    nav: {
      security: "Politica de seguranca",
      privacy: "Politica de privacidade",
      cookies: "Politica de cookies",
      developer: "Acordo de desenvolvedor",
      dpa: "Acordo de processamento de dados",
      subprocessors: "Subprocessadores",
      ai: "Termos de uso de IA",
      integrations: "Termos de integracao",
      tos: "Termos de servico"
    },
    security: {
      title: "Politica de seguranca",
      lastUpdated: "Ultima atualizacao: 15 de janeiro de 2025",
      content: {
        intro: "Na InvoratecAI, a seguranca e nossa maior prioridade. Esta politica descreve nossas medidas de seguranca abrangentes para proteger seus dados e garantir a integridade de nossos servicos.",
        principlesTitle: "Principios de seguranca",
        principles: {
          defenseInDepth: "Defesa em profundidade: Controles de seguranca multicamadas em toda nossa infraestrutura",
          leastPrivilege: "Privilegio minimo: Acesso apenas ao necessario para cada funcao",
          zeroTrust: "Arquitetura Zero Trust: Verifique tudo, nao confie em nada por padrao",
          continuousMonitoring: "Monitoramento continuo: Deteccao e resposta a ameacas em tempo real",
          secureByDesign: "Seguro por design: A seguranca esta integrada em nossos processos de desenvolvimento desde o inicio"
        },
        dataProtectionTitle: "Protecao de dados",
        dataProtection: {
          encryption: "Criptografia: Todos os dados sao criptografados em repouso com AES-256 e em transito com TLS 1.3",
          keyManagement: "Gerenciamento de chaves: Armazenamento seguro de chaves e rotacao com modulos de seguranca de hardware (HSM)",
          dataIsolation: "Isolamento de dados: A separacao rigorosa de inquilinos garante que seus dados permanecam isolados de outros usuarios",
          backups: "Backups: Backups criptografados regulares com armazenamento geo-redundante",
          retention: "Retencao: Politicas claras de retencao de dados com exclusao segura no vencimento"
        },
        accessControlTitle: "Controle de acesso",
        accessControl: {
          authentication: "Autenticacao: Autenticacao multifator (MFA) necessaria para todas as contas",
          authorization: "Autorizacao: Controle de acesso baseado em funcoes (RBAC) com permissoes granulares",
          sessionManagement: "Gerenciamento de sessao: Tratamento seguro de sessoes com tempo limite automatico",
          auditLogging: "Registro de auditoria: Logs abrangentes de todos os acessos e modificacoes"
        },
        infrastructureTitle: "Seguranca de infraestrutura",
        infrastructure: {
          cloudSecurity: "Seguranca na nuvem: Hospedado em data centers certificados SOC 2 Tipo II",
          networkSecurity: "Seguranca de rede: Firewalls, deteccao de intrusao e protecao DDoS",
          containerSecurity: "Seguranca de containers: Ambientes de containers isolados com varredura regular de vulnerabilidades",
          patchManagement: "Gerenciamento de patches: Atualizacoes de seguranca regulares e remediacao de vulnerabilidades"
        },
        incidentResponseTitle: "Resposta a incidentes",
        incidentResponse: {
          detection: "Deteccao: Deteccao automatizada de ameacas com revisao manual",
          response: "Resposta: Procedimentos de resposta a incidentes estabelecidos com caminhos de escalacao definidos",
          communication: "Comunicacao: Notificacao oportuna as partes afetadas em caso de incidente de seguranca",
          postIncident: "Pos-incidente: Analise completa e acoes de melhoria"
        },
        complianceTitle: "Conformidade",
        compliance: {
          standards: "Padroes: Alinhamento com os requisitos ISO 27001, SOC 2 e GDPR",
          audits: "Auditorias: Avaliacoes de seguranca regulares e testes de penetracao por terceiros",
          certifications: "Certificacoes: Manutencao de certificacoes de seguranca atualizadas",
          training: "Treinamento: Treinamento regular de conscientizacao de seguranca para todos os funcionarios"
        },
        contactTitle: "Contato de seguranca",
        contact: "Se voce deseja relatar um incidente de seguranca ou vulnerabilidade, entre em contato com nossa equipe de seguranca em security@invoratec.com. Levamos todos os relatorios de seguranca a serio e responderemos prontamente."
      }
    },
    privacy: {
      title: "Politica de privacidade",
      lastUpdated: "Ultima atualizacao: 15 de janeiro de 2025",
      content: {
        intro: "Esta politica de privacidade descreve como a InvoratecAI coleta, usa e protege suas informacoes pessoais quando voce usa nossos servicos.",
        dataCollectionTitle: "Coleta de dados",
        dataCollection: {
          accountInfo: "Informacoes da conta: Nome, endereco de e-mail e detalhes da empresa ao se registrar",
          usageData: "Dados de uso: Informacoes sobre como voce interage com nossos servicos",
          technicalData: "Dados tecnicos: Endereco IP, tipo de navegador, informacoes do dispositivo",
          projectData: "Dados do projeto: Dados e arquivos do projeto Revit que voce carrega em nossa plataforma"
        },
        dataUseTitle: "Como usamos seus dados",
        dataUse: {
          serviceProvision: "Para fornecer e manter nossos servicos",
          improvement: "Para melhorar e desenvolver nossos servicos",
          communication: "Para nos comunicar com voce sobre atualizacoes, suporte e materiais promocionais",
          analytics: "Para analisar padroes de uso e otimizar a experiencia do usuario",
          legal: "Para cumprir obrigacoes legais"
        },
        dataSharingTitle: "Compartilhamento de dados",
        dataSharing: {
          serviceProviders: "Compartilhamos dados com provedores de servicos confiaveis que nos ajudam a fornecer nossos servicos",
          legalRequirements: "Podemos divulgar dados quando exigido por lei ou para proteger nossos direitos",
          businessTransfers: "Em caso de fusao ou aquisicao, os dados podem ser transferidos para os novos proprietarios"
        },
        dataRetentionTitle: "Retencao de dados",
        dataRetention: "Retemos seus dados enquanto sua conta estiver ativa ou conforme necessario para fornecer nossos servicos. Voce pode solicitar a exclusao de seus dados a qualquer momento.",
        userRightsTitle: "Seus direitos",
        userRights: {
          access: "Acesso: Solicitar uma copia de seus dados pessoais",
          rectification: "Retificacao: Corrigir dados imprecisos ou incompletos",
          erasure: "Exclusao: Solicitar a exclusao de seus dados",
          portability: "Portabilidade: Receber seus dados em um formato portavel",
          objection: "Objecao: Opor-se ao processamento de seus dados",
          restriction: "Restricao: Solicitar processamento restrito de seus dados"
        },
        cookiesTitle: "Cookies",
        cookies: "Usamos cookies e tecnologias similares para fornecer funcionalidade, lembrar suas preferencias e analisar padroes de uso. Consulte nossa politica de cookies para mais informacoes.",
        securityTitle: "Seguranca",
        security: "Implementamos medidas de seguranca padrao da industria para proteger seus dados, incluindo criptografia, controles de acesso e auditorias de seguranca regulares.",
        childrenTitle: "Privacidade de criancas",
        children: "Nossos servicos nao sao direcionados a criancas menores de 16 anos. Nao coletamos conscientemente dados de criancas.",
        changesTitle: "Alteracoes nesta politica",
        changes: "Podemos atualizar esta politica de tempos em tempos. Notificaremos voce sobre alteracoes significativas publicando a nova politica nesta pagina.",
        contactTitle: "Contato",
        contact: "Para perguntas sobre esta politica de privacidade, entre em contato conosco em privacy@invoratec.com."
      }
    },
    cookies: {
      title: "Politica de cookies",
      lastUpdated: "Ultima atualizacao: 15 de janeiro de 2025",
      content: {
        intro: "Esta politica de cookies explica como a InvoratecAI usa cookies e tecnologias similares quando voce visita nosso site e usa nossos servicos.",
        whatAreCookiesTitle: "O que sao cookies?",
        whatAreCookies: "Cookies sao pequenos arquivos de texto armazenados em seu dispositivo quando voce visita nosso site. Eles nos ajudam a fornecer funcionalidade, lembrar suas preferencias e entender como voce usa nossos servicos.",
        typesOfCookiesTitle: "Tipos de cookies que usamos",
        typesOfCookies: {
          essential: "Cookies essenciais: Necessarios para a funcionalidade basica do site, como autenticacao e seguranca",
          functional: "Cookies funcionais: Lembram suas preferencias e configuracoes",
          analytics: "Cookies analiticos: Nos ajudam a entender como os usuarios interagem com nossos servicos",
          marketing: "Cookies de marketing: Usados para entregar publicidade e promocoes relevantes"
        },
        thirdPartyCookiesTitle: "Cookies de terceiros",
        thirdPartyCookies: "Tambem podemos usar servicos de terceiros que definem seus proprios cookies, como ferramentas de analise e plataformas de publicidade. Esses cookies estao sujeitos as politicas de privacidade dos respectivos terceiros.",
        managingCookiesTitle: "Gerenciamento de cookies",
        managingCookies: "Voce pode controlar e excluir cookies atraves das configuracoes do seu navegador. Observe que desabilitar certos cookies pode afetar a funcionalidade de nossos servicos.",
        changesTitle: "Alteracoes nesta politica",
        changes: "Podemos atualizar esta politica de cookies para refletir mudancas em nossas praticas ou por outras razoes operacionais, legais ou regulatorias.",
        contactTitle: "Contato",
        contact: "Se voce tiver perguntas sobre nosso uso de cookies, entre em contato conosco em privacy@invoratec.com."
      }
    },
    developer: {
      title: "Acordo de desenvolvedor",
      lastUpdated: "Ultima atualizacao: 15 de janeiro de 2025",
      content: {
        intro: "Este acordo de desenvolvedor rege seu uso das APIs, SDKs e ferramentas de desenvolvimento da InvoratecAI. Ao acessar ou usar nossos recursos para desenvolvedores, voce concorda com estes termos.",
        licenseTitle: "Concessao de licenca",
        license: {
          grant: "Concedemos a voce uma licenca limitada, nao exclusiva e intransferivel para usar nossas ferramentas de desenvolvimento e APIs",
          scope: "Esta licenca permite que voce crie aplicativos que se integrem aos servicos da InvoratecAI",
          restrictions: "Voce nao pode sublicenciar, ceder ou transferir esta licenca a terceiros",
          revocation: "Reservamo-nos o direito de revogar esta licenca a qualquer momento por violacao destes termos"
        },
        restrictionsTitle: "Restricoes de uso",
        restrictions: {
          noMisuse: "Nao use nossas APIs para fins ilegais ou de maneira que prejudique nossos servicos",
          rateLimits: "Respeite os limites de taxa e cotas de uso das APIs",
          noReverseEngineering: "Nao tente fazer engenharia reversa, descompilar ou desmontar nossas APIs ou servicos",
          noCompetition: "Nao use nossas ferramentas de desenvolvimento para criar um servico concorrente",
          attribution: "Atribua credito a InvoratecAI conforme exigido em seu aplicativo"
        },
        intellectualPropertyTitle: "Propriedade intelectual",
        intellectualProperty: {
          ownership: "A InvoratecAI rettem todos os direitos sobre nossas APIs, SDKs e documentacao associada",
          yourContent: "Voce rettem a propriedade de seus aplicativos e conteudo que criar usando nossas ferramentas",
          feedback: "Qualquer feedback que voce fornecer sobre nossas ferramentas de desenvolvimento pode ser usado por nos sem obrigacao para voce"
        },
        privacyTitle: "Privacidade e dados",
        privacy: {
          userConsent: "Obtenha o consentimento apropriado do usuario antes de acessar seus dados atraves de nossas APIs",
          dataHandling: "Trate todos os dados do usuario de acordo com as leis de privacidade aplicaveis",
          security: "Implemente medidas de seguranca apropriadas para proteger os dados do usuario"
        },
        supportTitle: "Suporte",
        support: "Fornecemos suporte para desenvolvedores atraves de nossa documentacao e foruns da comunidade. Suporte premium esta disponivel para contas elegiveis.",
        terminationTitle: "Rescisao",
        termination: {
          byYou: "Voce pode parar de usar nossas ferramentas de desenvolvimento a qualquer momento",
          byUs: "Podemos suspender ou encerrar seu acesso por violacao destes termos ou por qualquer outro motivo",
          effect: "Apos a rescisao, voce deve parar de usar nossas APIs e excluir todos os materiais da InvoratecAI"
        },
        liabilityTitle: "Limitacao de responsabilidade",
        liability: {
          disclaimer: "Nossas ferramentas de desenvolvimento sao fornecidas 'como estao' sem garantias de qualquer tipo",
          limitation: "Nao somos responsaveis por danos indiretos, incidentais ou consequentes decorrentes do seu uso de nossas ferramentas de desenvolvimento"
        },
        generalTitle: "Disposicoes gerais",
        general: {
          modifications: "Podemos modificar este acordo com aviso previo",
          entireAgreement: "Este acordo constitui o acordo completo em relacao ao uso de nossas ferramentas de desenvolvimento",
          severability: "Se alguma parte deste acordo for inaplicavel, as partes restantes permanecem em vigor",
          governingLaw: "Este acordo e regido pelas leis do Estado da California"
        },
        contactTitle: "Contato",
        contact: "Para perguntas sobre este acordo de desenvolvedor, entre em contato conosco em developers@invoratec.com."
      }
    },
    dpa: {
      title: "Acordo de processamento de dados",
      lastUpdated: "Ultima atualizacao: 15 de janeiro de 2025",
      content: {
        intro: "Este acordo de processamento de dados (DPA) faz parte do acordo entre voce e a InvoratecAI e descreve nossas obrigacoes em relacao ao processamento de dados pessoais em seu nome.",
        definitionsTitle: "Definicoes",
        definitions: {
          personalData: "Dados pessoais: Qualquer informacao relacionada a uma pessoa fisica identificada ou identificavel",
          processing: "Processamento: Qualquer operacao ou conjunto de operacoes realizadas em dados pessoais",
          controller: "Controlador: A entidade que determina os propositos e meios do processamento de dados pessoais",
          processor: "Processador: A entidade que processa dados pessoais em nome do controlador",
          dataSubject: "Titular dos dados: O individuo cujos dados pessoais sao processados",
          subprocessor: "Subprocessador: Um terceiro contratado pelo processador para processar dados pessoais"
        },
        processingTitle: "Processamento de dados",
        processing: {
          scope: "Processamos dados pessoais apenas conforme descrito em nosso acordo de servico e de acordo com suas instrucoes",
          purpose: "O processamento e realizado com o proposito de fornecer nossos servicos a voce",
          duration: "Processamos dados durante a duracao do nosso acordo mais o tempo necessario para requisitos legais",
          types: "Os tipos de dados processados incluem informacoes de contato, dados de uso e dados do projeto"
        },
        securityTitle: "Medidas de seguranca",
        security: {
          measures: "Implementamos medidas tecnicas e organizacionais apropriadas para proteger dados pessoais",
          encryption: "Os dados sao criptografados em repouso e em transito usando metodos padrao da industria",
          accessControl: "O acesso a dados pessoais e limitado ao pessoal autorizado"
        },
        subprocessorsTitle: "Subprocessadores",
        subprocessors: {
          authorization: "Voce nos autoriza a contratar subprocessadores para o processamento de dados pessoais",
          list: "Uma lista de nossos subprocessadores atuais esta disponivel em nossa pagina de subprocessadores",
          notification: "Notificaremos voce sobre quaisquer alteracoes nos subprocessadores"
        },
        dataSubjectRightsTitle: "Direitos do titular dos dados",
        dataSubjectRights: {
          assistance: "Auxiliaremos voce a responder a solicitacoes de titulares de dados",
          notification: "Notificaremos voce prontamente sobre qualquer solicitacao de titular de dados que recebermos"
        },
        dataBreachesTitle: "Violacoes de dados",
        dataBreaches: {
          notification: "Notificaremos voce sem demora indevida sobre qualquer violacao de dados que afete dados pessoais",
          cooperation: "Cooperaremos com investigacoes e forneceremos as informacoes necessarias",
          mitigation: "Tomaremos as medidas apropriadas para mitigar o impacto das violacoes de dados"
        },
        auditsTitle: "Auditorias",
        audits: "Voce tem o direito de conduzir ou fazer conduzir auditorias de nossas atividades de processamento de dados, sujeito a aviso previo razoavel e acordos de confidencialidade.",
        terminationTitle: "Rescisao",
        termination: "Apos a rescisao, excluiremos ou devolveremos todos os dados pessoais processados em seu nome, conforme sua escolha, a menos que a lei exija retencao.",
        contactTitle: "Contato",
        contact: "Para perguntas sobre este acordo de processamento de dados, entre em contato conosco em dpa@invoratec.com."
      }
    },
    subprocessors: {
      title: "Subprocessadores",
      lastUpdated: "Ultima atualizacao: 15 de janeiro de 2025",
      content: {
        intro: "A InvoratecAI contrata os seguintes subprocessadores para nos ajudar a fornecer nossos servicos. Esses subprocessadores estao sujeitos a obrigacoes contratuais para proteger seus dados.",
        listTitle: "Subprocessadores atuais",
        list: [
          {
            name: "Google Cloud Platform",
            purpose: "Infraestrutura de nuvem e hospedagem",
            location: "Estados Unidos / UE"
          },
          {
            name: "Amazon Web Services",
            purpose: "Armazenamento em nuvem e backup",
            location: "Estados Unidos / UE"
          },
          {
            name: "Stripe",
            purpose: "Processamento de pagamentos",
            location: "Estados Unidos"
          },
          {
            name: "SendGrid",
            purpose: "Servicos de e-mail",
            location: "Estados Unidos"
          },
          {
            name: "Intercom",
            purpose: "Suporte ao cliente",
            location: "Estados Unidos"
          },
          {
            name: "OpenAI",
            purpose: "Processamento de IA",
            location: "Estados Unidos"
          },
          {
            name: "Anthropic",
            purpose: "Processamento de IA",
            location: "Estados Unidos"
          }
        ],
        updatesTitle: "Notificacao de alteracoes",
        updates: "Atualizaremos esta pagina e notificaremos os clientes sobre quaisquer alteracoes em nossos subprocessadores. Os clientes serao notificados pelo menos 30 dias antes da contratacao de um novo subprocessador.",
        contactTitle: "Contato",
        contact: "Se voce tiver perguntas sobre nossos subprocessadores, entre em contato conosco em dpa@invoratec.com."
      }
    },
    ai: {
      title: "Termos de uso de IA",
      lastUpdated: "Ultima atualizacao: 15 de janeiro de 2025",
      content: {
        intro: "Estes termos adicionais regem seu uso de recursos alimentados por IA dentro dos servicos da InvoratecAI. Esses termos complementam nossos termos de servico.",
        aiFeaturesTitle: "Recursos de IA",
        aiFeatures: {
          description: "A InvoratecAI integra inteligencia artificial para melhorar sua produtividade e capacidades de automacao",
          nlp: "Processamento de linguagem natural: Compreenda comandos e consultas em linguagem natural",
          codeGeneration: "Geracao de codigo: Gere automaticamente codigo de automacao Revit com base em suas instrucoes",
          smartSuggestions: "Sugestoes inteligentes: Recomendacoes para fluxos de trabalho e acoes"
        },
        dataUsageTitle: "Uso de dados para IA",
        dataUsage: {
          training: "Seus dados podem ser usados para melhorar nossos modelos de IA, a menos que voce se oponha",
          anonymization: "Todos os dados usados para treinamento sao anonimizados e agregados",
          optOut: "Voce pode optar por nao permitir o uso de seus dados para treinamento de IA nas configuracoes da sua conta",
          retention: "Os dados de processamento de IA sao retidos de acordo com nossa politica de retencao de dados"
        },
        limitationsTitle: "Limitacoes",
        limitations: {
          accuracy: "O conteudo gerado por IA pode nem sempre ser preciso e deve ser verificado",
          noGuarantee: "Nao garantimos a precisao ou adequacao das saidas de IA",
          humanReview: "Decisoes criticas nao devem ser baseadas apenas em recomendacoes de IA",
          availability: "Os recursos de IA podem estar sujeitos a limitacoes de disponibilidade e limites de taxa"
        },
        userResponsibilitiesTitle: "Responsabilidades do usuario",
        userResponsibilities: {
          review: "Revise todo o conteudo gerado por IA antes de usar em producao",
          compliance: "Certifique-se de que seu uso de recursos de IA esteja em conformidade com os regulamentos aplicaveis",
          feedback: "Forneca feedback sobre as saidas de IA para ajudar a melhorar a precisao",
          restrictions: "Nao use recursos de IA para conteudo ou atividades proibidas"
        },
        updatesTitle: "Atualizacoes de recursos de IA",
        updates: "Podemos atualizar e melhorar nossos recursos de IA regularmente. Essas atualizacoes podem afetar como os recursos funcionam ou as saidas que produzem.",
        contactTitle: "Contato",
        contact: "Para perguntas sobre nossos recursos de IA, entre em contato conosco em support@invoratec.com."
      }
    },
    integrations: {
      title: "Termos de integracao",
      lastUpdated: "Ultima atualizacao: 15 de janeiro de 2025",
      content: {
        intro: "Estes termos regem o uso de integracoes de terceiros dentro dos servicos da InvoratecAI, incluindo Autodesk Construction Cloud (ACC) e outras plataformas conectadas.",
        supportedIntegrationsTitle: "Integracoes suportadas",
        supportedIntegrations: {
          acc: "Autodesk Construction Cloud (ACC): Conecte-se a projetos e arquivos do ACC",
          revit: "Revit: Integracao direta com Autodesk Revit para automacao de modelos",
          bim360: "BIM 360: Acesse dados de projetos BIM 360 e recursos de colaboracao",
          thirdParty: "Ferramentas de terceiros: Integre-se com ferramentas e servicos de terceiros aprovados"
        },
        dataFlowTitle: "Fluxo de dados",
        dataFlow: {
          access: "Quando voce conecta uma integracao, a InvoratecAI pode acessar dados dessa plataforma de acordo com suas permissoes",
          sync: "Os dados podem ser sincronizados entre a InvoratecAI e as plataformas conectadas",
          storage: "Alguns dados de integracao podem ser armazenados nos servidores da InvoratecAI de acordo com nossa politica de privacidade"
        },
        securityTitle: "Seguranca de integracao",
        security: {
          oauth: "Usamos autenticacao OAuth padrao da industria para integracoes",
          permissions: "Voce controla quais permissoes sao concedidas a cada integracao",
          revocation: "Voce pode revogar o acesso da integracao a qualquer momento nas configuracoes da sua conta"
        },
        responsibilitiesTitle: "Responsabilidades",
        responsibilities: {
          thirdPartyTerms: "Voce e responsavel por cumprir os termos de servico das plataformas de terceiros",
          credentials: "Mantenha as credenciais de integracao seguras e nao as compartilhe com partes nao autorizadas",
          monitoring: "Monitore contas integradas para acesso nao autorizado",
          updates: "Mantenha as credenciais de integracao atualizadas para evitar interrupcoes de servico"
        },
        contactTitle: "Contato",
        contact: "Para perguntas sobre integracoes, entre em contato conosco em support@invoratec.com."
      }
    },
    tos: {
      title: "Termos de servico",
      lastUpdated: "Ultima atualizacao: 15 de janeiro de 2025",
      content: {
        intro: "Bem-vindo a InvoratecAI. Estes termos de servico regem seu uso de nossos servicos. Ao usar a InvoratecAI, voce concorda com estes termos.",
        acceptanceTitle: "Aceitacao dos termos",
        acceptance: "Ao acessar ou usar nossos servicos, voce concorda em estar vinculado a estes termos. Se voce nao concordar, nao use nossos servicos.",
        servicesTitle: "Nossos servicos",
        services: {
          description: "A InvoratecAI fornece ferramentas de automacao alimentadas por IA para fluxos de trabalho Revit e BIM",
          availability: "Nos esforcarmos para manter alta disponibilidade do servico, mas nao podemos garantir 100% de uptime",
          modifications: "Podemos modificar, suspender ou descontinuar nossos servicos a qualquer momento sem aviso previo"
        },
        accountsTitle: "Contas de usuario",
        accounts: {
          registration: "Voce deve fornecer informacoes precisas e completas ao criar sua conta",
          security: "Voce e responsavel por manter a seguranca de sua conta",
          responsibility: "Voce e responsavel por todas as atividades em sua conta",
          notification: "Notifique-nos imediatamente se suspeitar de acesso nao autorizado"
        },
        paymentTitle: "Pagamento",
        payment: {
          pricing: "Os precos de nossos servicos sao descritos em nosso site",
          billing: "Voce concorda em pagar todas as taxas de acordo com os termos de sua assinatura",
          taxes: "Voce e responsavel por todos os impostos aplicaveis",
          refunds: "Reembolsos sao tratados de acordo com nossa politica de reembolso"
        },
        intellectualPropertyTitle: "Propriedade intelectual",
        intellectualProperty: {
          ownership: "A InvoratecAI rettem todos os direitos sobre nossos servicos, incluindo software e conteudo",
          license: "Concedemos a voce uma licenca limitada para usar nossos servicos de acordo com estes termos",
          restrictions: "Voce nao pode copiar, modificar ou fazer engenharia reversa de nossos servicos"
        },
        userContentTitle: "Conteudo do usuario",
        userContent: {
          ownership: "Voce rettem a propriedade do conteudo que carrega em nossa plataforma",
          license: "Voce nos concede uma licenca para usar seu conteudo para fornecer nossos servicos",
          responsibility: "Voce e responsavel pelo conteudo que carrega"
        },
        prohibitedUseTitle: "Uso proibido",
        prohibitedUse: {
          illegal: "Nao use nossos servicos para atividades ilegais",
          harmful: "Nao tente danificar ou interromper nossos servicos",
          unauthorized: "Nao acesse outras contas ou sistemas sem autorizacao",
          malware: "Nao carregue malware ou codigo prejudicial",
          spam: "Nao use nossos servicos para enviar spam ou mensagens nao solicitadas"
        },
        terminationTitle: "Rescisao",
        termination: {
          byYou: "Voce pode encerrar sua conta a qualquer momento",
          byUs: "Podemos suspender ou encerrar sua conta por violacao destes termos",
          effect: "Apos a rescisao, seu acesso aos nossos servicos sera encerrado"
        },
        liabilityTitle: "Limitacao de responsabilidade",
        liability: {
          disclaimer: "Nossos servicos sao fornecidos 'como estao' sem garantias",
          limitation: "Nao somos responsaveis por danos indiretos ou perda de lucros",
          cap: "Nossa responsabilidade total e limitada ao valor que voce nos pagou nos ultimos 12 meses"
        },
        indemnificationTitle: "Indenizacao",
        indemnification: "Voce concorda em indenizar a InvoratecAI contra quaisquer reivindicacoes decorrentes de seu uso de nossos servicos ou de sua violacao destes termos.",
        changesTitle: "Alteracoes nos termos",
        changes: "Podemos atualizar estes termos a qualquer momento. Notificaremos voce sobre alteracoes significativas publicando os novos termos em nosso site.",
        governingTitle: "Lei aplicavel",
        governing: "Estes termos sao regidos pelas leis do Estado da California, sem considerar os principios de conflito de leis.",
        contactTitle: "Contato",
        contact: "Para perguntas sobre estes termos de servico, entre em contato conosco em legal@invoratec.com."
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

// Read existing pt.json
const ptPath = path.join(__dirname, 'pt.json');
const existingPt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));

// Merge translations
const updatedPt = deepMerge(existingPt, ptTranslations);

// Write back
fs.writeFileSync(ptPath, JSON.stringify(updatedPt, null, 2), 'utf8');

console.log('Updated pt.json with legal content translations');
