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

// Translations for developer.content.section5.subsection3 (must be an object to match English)
const translations = {
  ko: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 보안 요구사항",
              items: [
                "모든 API 통신에 HTTPS 사용",
                "API 자격 증명을 안전하게 저장 (클라이언트 측 코드에 절대 저장하지 않음)",
                "최종 사용자를 위한 적절한 인증 구현",
                "보안 코딩 관행 준수"
              ]
            }
          }
        }
      },
      ai: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 책임 제한",
              content: "InvoratecAI는 AI 출력에 기반한 결정이나 AI 생성 콘텐츠에 대한 의존으로 인한 손해에 대해 책임지지 않습니다.",
              intro: "AI 기능은 어떠한 종류의 보증 없이 '있는 그대로' 제공됩니다. 다음을 보증하지 않습니다:",
              items: [
                "AI 출력이 정확하거나 완전하거나 최신일 것",
                "AI 기능이 중단 없이 또는 오류 없이 작동할 것",
                "AI 제안이 귀하의 특정 요구사항을 충족할 것",
                "AI 분석이 모든 문제 또는 기회를 식별할 것"
              ]
            }
          }
        }
      },
      tos: {
        content: {
          section12: {
            title: "12. 준거법",
            content: "본 약관은 법률 충돌 원칙에 관계없이 미국 캘리포니아주 법률의 적용을 받습니다. 모든 분쟁은 캘리포니아주 로스앤젤레스 카운티 법원에서 해결됩니다."
          },
          section13: {
            title: "13. 약관 변경",
            content: "당사는 수시로 본 약관을 수정할 수 있습니다. 이메일 또는 서비스를 통해 중요한 변경 사항을 통지합니다. 변경 후 계속 사용하면 새 약관에 동의한 것으로 간주됩니다."
          }
        }
      }
    }
  },
  zh: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 安全要求",
              items: [
                "所有 API 通信使用 HTTPS",
                "安全存储 API 凭据（切勿存储在客户端代码中）",
                "为最终用户实施适当的身份验证",
                "遵循安全编码实践"
              ]
            }
          }
        }
      }
    }
  },
  ja: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 セキュリティ要件",
              items: [
                "すべての API 通信に HTTPS を使用",
                "API 資格情報を安全に保存（クライアント側コードに保存しない）",
                "エンドユーザーに適切な認証を実装",
                "セキュアなコーディング慣行に従う"
              ]
            }
          }
        }
      }
    }
  },
  de: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 Sicherheitsanforderungen",
              items: [
                "HTTPS für alle API-Kommunikation verwenden",
                "API-Anmeldedaten sicher speichern (niemals im clientseitigen Code)",
                "Ordnungsgemäße Authentifizierung für Endbenutzer implementieren",
                "Sichere Codierungspraktiken befolgen"
              ]
            }
          }
        }
      },
      ai: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 Haftungsbeschränkung",
              content: "InvoratecAI haftet nicht für Entscheidungen, die auf AI-Ausgaben basieren, oder für Schäden, die aus dem Vertrauen auf AI-generierte Inhalte entstehen.",
              intro: "AI-Funktionen werden ohne jegliche Garantien bereitgestellt. Wir garantieren nicht, dass:",
              items: [
                "AI-Ausgaben genau, vollständig oder aktuell sind",
                "AI-Funktionen unterbrechungsfrei oder fehlerfrei sind",
                "AI-Vorschläge Ihre spezifischen Anforderungen erfüllen",
                "AI-Analysen alle Probleme oder Chancen identifizieren"
              ]
            }
          }
        }
      },
      tos: {
        content: {
          section12: {
            title: "12. Anwendbares Recht",
            content: "Diese Bedingungen unterliegen den Gesetzen des Staates Kalifornien, USA, ohne Rücksicht auf Kollisionsnormen. Alle Streitigkeiten werden vor den Gerichten von Los Angeles County, Kalifornien, beigelegt."
          },
          section13: {
            title: "13. Änderungen der Bedingungen",
            content: "Wir können diese Bedingungen von Zeit zu Zeit ändern. Wir werden Sie per E-Mail oder über die Dienste über wesentliche Änderungen informieren. Die fortgesetzte Nutzung nach Änderungen gilt als Zustimmung zu den neuen Bedingungen."
          }
        }
      }
    }
  },
  fr: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 Exigences de sécurité",
              items: [
                "Utiliser HTTPS pour toutes les communications API",
                "Stocker les identifiants API en toute sécurité (jamais dans le code côté client)",
                "Implémenter une authentification appropriée pour les utilisateurs finaux",
                "Suivre les pratiques de codage sécurisé"
              ]
            }
          }
        }
      },
      ai: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 Limitation de responsabilité",
              content: "InvoratecAI n'est pas responsable des décisions prises sur la base des sorties IA ou des dommages résultant de la confiance dans le contenu généré par l'IA.",
              intro: "Les fonctionnalités IA sont fournies « EN L'ÉTAT » sans garantie d'aucune sorte. Nous ne garantissons pas que :",
              items: [
                "Les sorties IA seront exactes, complètes ou actuelles",
                "Les fonctionnalités IA seront ininterrompues ou sans erreur",
                "Les suggestions IA répondront à vos exigences spécifiques",
                "L'analyse IA identifiera tous les problèmes ou opportunités"
              ]
            }
          }
        }
      },
      tos: {
        content: {
          section12: {
            title: "12. Droit applicable",
            content: "Ces Conditions sont régies par les lois de l'État de Californie, États-Unis, sans égard aux principes de conflit de lois. Tout litige sera résolu devant les tribunaux du comté de Los Angeles, Californie."
          },
          section13: {
            title: "13. Modifications des conditions",
            content: "Nous pouvons modifier ces Conditions de temps à autre. Nous vous informerons des modifications importantes par e-mail ou via les Services. L'utilisation continue après les modifications constitue une acceptation des nouvelles Conditions."
          }
        }
      }
    }
  },
  es: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 Requisitos de seguridad",
              items: [
                "Usar HTTPS para todas las comunicaciones de API",
                "Almacenar credenciales de API de forma segura (nunca en código del lado del cliente)",
                "Implementar autenticación adecuada para usuarios finales",
                "Seguir prácticas de codificación segura"
              ]
            }
          }
        }
      },
      ai: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 Limitación de responsabilidad",
              content: "InvoratecAI no es responsable de las decisiones tomadas basándose en las salidas de IA o de los daños resultantes de confiar en contenido generado por IA.",
              intro: "Las funciones de IA se proporcionan \"TAL CUAL\" sin garantías de ningún tipo. No garantizamos que:",
              items: [
                "Las salidas de IA serán precisas, completas o actuales",
                "Las funciones de IA serán ininterrumpidas o sin errores",
                "Las sugerencias de IA cumplirán con sus requisitos específicos",
                "El análisis de IA identificará todos los problemas u oportunidades"
              ]
            }
          }
        }
      },
      tos: {
        content: {
          section12: {
            title: "12. Ley aplicable",
            content: "Estos Términos se rigen por las leyes del Estado de California, Estados Unidos, sin tener en cuenta los principios de conflicto de leyes. Cualquier disputa se resolverá en los tribunales del Condado de Los Ángeles, California."
          },
          section13: {
            title: "13. Cambios en los términos",
            content: "Podemos modificar estos Términos de vez en cuando. Le notificaremos los cambios importantes por correo electrónico o a través de los Servicios. El uso continuado después de los cambios constituye la aceptación de los nuevos Términos."
          }
        }
      }
    }
  },
  pt: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 Requisitos de segurança",
              items: [
                "Usar HTTPS para todas as comunicações de API",
                "Armazenar credenciais de API com segurança (nunca em código do lado do cliente)",
                "Implementar autenticação adequada para usuários finais",
                "Seguir práticas de codificação segura"
              ]
            }
          }
        }
      },
      ai: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 Limitação de responsabilidade",
              content: "A InvoratecAI não é responsável por decisões tomadas com base em saídas de IA ou por danos resultantes da confiança em conteúdo gerado por IA.",
              intro: "Os recursos de IA são fornecidos \"COMO ESTÃO\" sem garantias de qualquer tipo. Não garantimos que:",
              items: [
                "As saídas de IA serão precisas, completas ou atuais",
                "Os recursos de IA serão ininterruptos ou livres de erros",
                "As sugestões de IA atenderão aos seus requisitos específicos",
                "A análise de IA identificará todos os problemas ou oportunidades"
              ]
            }
          }
        }
      },
      tos: {
        content: {
          section12: {
            title: "12. Lei aplicável",
            content: "Estes Termos são regidos pelas leis do Estado da Califórnia, Estados Unidos, sem considerar os princípios de conflito de leis. Qualquer disputa será resolvida nos tribunais do Condado de Los Angeles, Califórnia."
          },
          section13: {
            title: "13. Alterações nos termos",
            content: "Podemos modificar estes Termos de tempos em tempos. Notificaremos você sobre alterações materiais por e-mail ou através dos Serviços. O uso contínuo após as alterações constitui aceitação dos novos Termos."
          }
        }
      }
    }
  },
  ru: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 Требования безопасности",
              items: [
                "Использовать HTTPS для всех API-коммуникаций",
                "Безопасно хранить учетные данные API (никогда в клиентском коде)",
                "Реализовать надлежащую аутентификацию для конечных пользователей",
                "Следовать практикам безопасного кодирования"
              ]
            }
          }
        }
      },
      ai: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 Ограничение ответственности",
              content: "InvoratecAI не несет ответственности за решения, принятые на основе выходных данных ИИ, или за ущерб, возникший в результате доверия к контенту, созданному ИИ.",
              intro: "Функции ИИ предоставляются «КАК ЕСТЬ» без каких-либо гарантий. Мы не гарантируем, что:",
              items: [
                "Выходные данные ИИ будут точными, полными или актуальными",
                "Функции ИИ будут работать бесперебойно или без ошибок",
                "Предложения ИИ будут соответствовать вашим конкретным требованиям",
                "Анализ ИИ выявит все проблемы или возможности"
              ]
            }
          }
        }
      },
      tos: {
        content: {
          section12: {
            title: "12. Применимое право",
            content: "Настоящие Условия регулируются законами штата Калифорния, США, без учета принципов коллизионного права. Любые споры будут разрешаться в судах округа Лос-Анджелес, Калифорния."
          },
          section13: {
            title: "13. Изменения условий",
            content: "Мы можем время от времени изменять настоящие Условия. Мы уведомим вас о существенных изменениях по электронной почте или через Услуги. Продолжение использования после изменений означает принятие новых Условий."
          }
        }
      }
    }
  },
  ar: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 متطلبات الأمان",
              items: [
                "استخدام HTTPS لجميع اتصالات API",
                "تخزين بيانات اعتماد API بشكل آمن (أبداً في كود جانب العميل)",
                "تنفيذ المصادقة المناسبة للمستخدمين النهائيين",
                "اتباع ممارسات الترميز الآمن"
              ]
            }
          }
        }
      },
      ai: {
        content: {
          section5: {
            subsection3: {
              title: "5.3 تحديد المسؤولية",
              content: "InvoratecAI غير مسؤولة عن أي قرارات تُتخذ بناءً على مخرجات الذكاء الاصطناعي أو أي أضرار ناتجة عن الاعتماد على المحتوى المُنشأ بواسطة الذكاء الاصطناعي.",
              intro: "يتم توفير ميزات الذكاء الاصطناعي \"كما هي\" دون أي ضمانات من أي نوع. نحن لا نضمن أن:",
              items: [
                "ستكون مخرجات الذكاء الاصطناعي دقيقة أو كاملة أو محدثة",
                "ستعمل ميزات الذكاء الاصطناعي دون انقطاع أو بدون أخطاء",
                "ستلبي اقتراحات الذكاء الاصطناعي متطلباتك المحددة",
                "سيحدد تحليل الذكاء الاصطناعي جميع المشاكل أو الفرص"
              ]
            }
          }
        }
      },
      tos: {
        content: {
          section12: {
            title: "12. القانون الحاكم",
            content: "تخضع هذه الشروط لقوانين ولاية كاليفورنيا، الولايات المتحدة، دون اعتبار لمبادئ تعارض القوانين. سيتم حل أي نزاعات في محاكم مقاطعة لوس أنجلوس، كاليفورنيا."
          },
          section13: {
            title: "13. تغييرات الشروط",
            content: "قد نقوم بتعديل هذه الشروط من وقت لآخر. سنخطرك بالتغييرات الجوهرية عبر البريد الإلكتروني أو من خلال الخدمات. يشكل الاستخدام المستمر بعد التغييرات قبولاً للشروط الجديدة."
          }
        }
      }
    }
  }
};

// Process each language
const languages = ['ko', 'zh', 'ja', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = deepMerge(existing, translations[lang]);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Fixed structure in ' + lang + '.json');
});

console.log('\nAll structures fixed!');
