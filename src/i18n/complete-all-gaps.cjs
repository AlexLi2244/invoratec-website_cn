const fs = require('fs');
const path = require('path');

// Translations for missing section-based keys
const translations = {
  ko: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection1: {
              title: "5.1 귀하의 의무",
              intro: "개발자로서 귀하는 다음에 동의합니다:",
              items: [
                "귀하의 애플리케이션이 모든 관련 법률과 규정을 준수하도록 보장",
                "모든 사용자 불만 및 지원 요청 처리",
                "정확하고 최신의 연락처 정보 유지"
              ]
            },
            subsection2: {
              title: "5.2 금지된 애플리케이션",
              intro: "다음을 수행하는 애플리케이션은 허용되지 않습니다:",
              items: [
                "악성 소프트웨어 또는 스파이웨어 포함",
                "사용자를 속이거나 오도",
                "지적 재산권 침해",
                "차별 또는 불법 콘텐츠 홍보"
              ]
            },
            subsection3: "API 사용 제한 및 할당량은 구독 등급에 따라 다를 수 있습니다."
          },
          section6: {
            intro: "사용자 데이터 보호는 신뢰 유지에 필수적입니다.",
            subsection1: {
              title: "6.1 동의 요건",
              items: [
                "사용자 데이터를 수집하기 전에 적절한 동의 획득",
                "사용자에게 데이터 사용 방식을 명확히 설명",
                "애플리케이션 기능에 필요한 데이터만 수집"
              ]
            },
            subsection2: {
              title: "6.2 데이터 보안",
              items: [
                "안전한 저장 메커니즘 사용",
                "적절한 접근 제어 구현",
                "데이터 최소화 원칙 준수"
              ]
            }
          },
          section7: {
            subsection1: {
              title: "7.1 귀하의 브랜드",
              content: "귀하는 애플리케이션에 표시되는 모든 브랜딩 및 마케팅 자료에 대한 모든 권리를 보유합니다."
            },
            subsection2: {
              title: "7.2 InvoratecAI 브랜드",
              intro: "당사 브랜드 사용 시:",
              items: [
                "당사 브랜드 가이드라인을 따르십시오",
                "InvoratecAI와의 관계를 허위로 표시하지 마십시오",
                "InvoratecAI를 폄하하는 방식으로 당사 브랜드를 사용하지 마십시오"
              ]
            }
          },
          section8: {
            intro: "당사 서비스의 변경 사항을 반영하기 위해 이 약관을 업데이트할 수 있습니다.",
            items: [
              "중요한 변경 사항은 30일 전에 통지됩니다",
              "계속 사용하면 업데이트된 약관에 동의하는 것으로 간주됩니다",
              "현재 약관에 대해 언제든지 문의할 수 있습니다"
            ],
            note: "이 약관을 정기적으로 검토하는 것을 권장합니다."
          },
          section9: {
            items: [
              "법률 충돌 원칙을 배제하고 법률이 적용됩니다",
              "분쟁은 캘리포니아주 법원에 제출됩니다"
            ],
            note: "이 계약의 어느 조항이 집행 불가능한 것으로 판단되더라도 나머지 조항은 유효합니다."
          },
          section10: {
            title: "10. 연락처",
            intro: "질문이 있으시면 개발자 지원팀에 문의하십시오.",
            developerSupport: "개발자 지원",
            documentation: "문서",
            general: "일반 문의"
          }
        }
      },
      dpa: {
        content: {
          section2: {
            subsection1: {
              title: "2.1 고객 데이터",
              items: [
                "InvoratecAI 플랫폼에 업로드하거나 생성한 BIM 모델, 프로젝트 데이터, 작업 및 협업 콘텐츠",
                "사용자 계정 정보 및 설정",
                "사용 데이터 및 시스템에서 생성된 로그"
              ]
            },
            subsection2: {
              title: "2.2 처리 활동",
              intro: "당사는 다음 작업을 수행합니다:",
              items: [
                "저장 및 호스팅: 고객 데이터의 안전한 저장",
                "전송: 권한이 있는 사용자에게 데이터 전달",
                "AI 처리: BIM 모델 분석 및 설계 지원 (일시적 처리)"
              ]
            }
          },
          section3: {
            subsection1: {
              title: "3.1 지침 준수",
              content: "당사는 본 DPA 및 서비스 계약에 명시된 대로만 귀하의 지침에 따라 개인 데이터를 처리합니다."
            },
            subsection2: {
              title: "3.2 처리 제한",
              intro: "당사는 다음을 수행하지 않습니다:",
              items: [
                "귀하의 동의 없이 서브프로세서와 개인 데이터를 공유",
                "서비스 제공에 필요한 것 이상으로 데이터에 접근",
                "광고 또는 마케팅 목적으로 귀하의 데이터 판매 또는 사용"
              ]
            },
            subsection3: {
              title: "3.3 합법성",
              content: "당사는 GDPR 제28조에 따른 의무를 준수하며, 해당되는 경우 CCPA 및 기타 데이터 보호법을 포함합니다."
            }
          },
          section4: {
            intro: "당사는 개인 데이터의 무결성과 기밀성을 보장하기 위해 강력한 보안 조치를 구현합니다.",
            subsection1: {
              title: "4.1 기술적 조치",
              items: [
                "AES-256을 사용한 저장 데이터 암호화",
                "TLS 1.3을 사용한 전송 중 암호화",
                "정기적인 보안 테스트 및 취약성 평가",
                "안전한 백업 및 복구 절차"
              ]
            },
            subsection2: {
              title: "4.2 조직적 조치",
              items: [
                "직원 보안 인식 교육",
                "정의된 접근 수준이 있는 역할 기반 접근 제어",
                "정기적인 접근 검토 및 감사",
                "문서화된 사고 대응 절차"
              ]
            },
            subsection3: {
              title: "4.3 시설 보안",
              content: "당사의 클라우드 인프라 제공업체(Google Cloud Platform)는 SOC 2 Type II, ISO 27001 및 기타 산업 인증 데이터 센터를 유지합니다."
            }
          },
          section5: {
            subsection1: {
              title: "5.1 현재 서브프로세서",
              content: "당사의 현재 서브프로세서 목록은 서브프로세서 페이지에서 확인할 수 있습니다."
            },
            subsection2: {
              title: "5.2 변경 통지",
              content: "당사는 새로운 서브프로세서를 사용하기 최소 30일 전에 통지합니다. 이 기간 동안 이의를 제기할 수 있습니다."
            }
          },
          section6: {
            intro: "당사는 개인이 자신의 권리를 행사할 수 있도록 귀하를 지원합니다.",
            items: [
              "접근 요청: 개인 데이터를 위치하고 제공하는 것을 지원",
              "정정 요청: 부정확한 데이터를 업데이트하는 것을 지원",
              "삭제 요청: 법적으로 허용되는 경우 개인 데이터 삭제",
              "이동성 요청: 휴대 가능한 형식으로 데이터 내보내기 지원"
            ],
            note: "당사는 요청을 수신한 후 72시간 이내에 귀하에게 통지합니다."
          },
          section7: {
            subsection1: {
              title: "7.1 당사의 의무",
              items: [
                "확인 후 72시간 이내에 귀하에게 통지",
                "사고를 조사하고 시정 조치 제공",
                "필요에 따라 규제 당국과 협력"
              ]
            },
            subsection2: {
              title: "7.2 귀하의 의무",
              items: [
                "당사에 정확한 연락처 정보 제공",
                "개인 관련 커뮤니케이션 조정",
                "귀하의 통제 하에 있는 보안 문제에 대해 당사에 통지"
              ]
            },
            subsection3: {
              title: "7.3 포함되지 않는 사항",
              content: "이 섹션은 발생하지 않은 위반, 영향 없는 미수 또는 테스트 위반 시나리오에는 적용되지 않습니다."
            }
          },
          section8: {
            items: [
              "보안 관행을 검토하기 위한 합리적인 감사 권리를 부여",
              "귀하의 비용으로 연간 감사를 허용",
              "대신 제3자 감사 보고서를 제공할 수 있음"
            ]
          },
          section9: {
            title: "9. 데이터 보존 및 삭제",
            intro: "계약 종료 시:",
            items: [
              "당사는 귀하의 개인 데이터를 삭제하거나 반환합니다 (귀하의 선택)",
              "삭제는 90일 이내에 완료됩니다",
              "일부 데이터는 법적 의무에 따라 보관될 수 있습니다"
            ]
          },
          section10: {
            title: "10. 국제 전송",
            intro: "개인 데이터를 EEA 외부로 전송할 때:",
            items: [
              "당사는 EU 승인 표준 계약 조항(SCC)을 사용합니다",
              "당사는 해당되는 경우 적절한 보호 조치를 보장합니다",
              "수령 국가에 대한 정보를 제공할 수 있습니다"
            ]
          },
          section11: {
            title: "11. 본 DPA 변경",
            content: "당사는 법적 요건 변경 또는 서비스 관행 업데이트를 반영하기 위해 본 DPA를 업데이트할 수 있습니다. 중요한 변경 사항은 최소 30일 전에 통지합니다."
          },
          section12: {
            title: "12. 연락처",
            intro: "본 DPA에 대한 질문이나 권리 행사는:",
            dpo: "데이터 보호 책임자",
            legal: "법무 부서",
            general: "일반 문의"
          }
        }
      },
      subprocessors: {
        content: {
          whatIsSubprocessor: "서브프로세서는 당사를 대신하여 개인 데이터를 처리하도록 승인한 제3자 서비스 제공업체입니다. 당사는 각 서브프로세서가 적용 가능한 데이터 보호 기준을 충족하는지 신중하게 검토합니다.",
          ourCommitments: "당사는 귀하의 데이터를 보호하기 위한 적절한 기술적 및 조직적 조치를 구현할 충분한 보증을 제공하는 서브프로세서와만 협력할 것을 약속합니다. 모든 서브프로세서는 데이터 보호 규정을 준수하는 계약 조건에 구속됩니다.",
          currentSubprocessors: "현재 서브프로세서 목록",
          tableHeaders: {
            subprocessor: "서브프로세서",
            purpose: "목적",
            location: "위치",
            dataTypes: "데이터 유형"
          },
          subprocessorData: {
            gcp: {
              name: "Google Cloud Platform",
              purpose: "클라우드 인프라, 데이터 저장 및 컴퓨팅",
              location: "미국",
              dataTypes: "모든 고객 데이터, 사용자 계정, 프로젝트 데이터, BIM 모델"
            },
            firebase: {
              name: "Firebase / Firestore",
              purpose: "실시간 데이터베이스 및 파일 저장",
              location: "미국",
              dataTypes: "사용자 계정, 프로젝트 데이터, 파일 첨부"
            },
            anthropic: {
              name: "Anthropic",
              purpose: "AI 언어 모델 처리 (Claude)",
              location: "미국",
              dataTypes: "AI 쿼리 콘텐츠 (일시적 처리만)"
            },
            gmail: {
              name: "Gmail / Google Workspace",
              purpose: "트랜잭션 이메일 전달",
              location: "미국",
              dataTypes: "이메일 주소, 알림 콘텐츠"
            },
            autodesk: {
              name: "Autodesk",
              purpose: "Construction Cloud 통합 (선택사항)",
              location: "미국",
              dataTypes: "프로젝트 파일, 모델 데이터 (ACC 통합 활성화 시)"
            }
          },
          infrastructureDetails: "당사의 주요 인프라는 미국의 Google Cloud Platform에서 호스팅됩니다. 최적의 성능과 중복성을 보장하기 위해 다른 지역에 추가 데이터 처리 시설을 사용할 수 있습니다.",
          regionalConsiderations: "EU/EEA 고객의 경우, 당사는 표준 계약 조항(SCC)을 포함하여 데이터가 유럽 외부로 전송될 때 보호되도록 적절한 데이터 전송 메커니즘을 유지합니다.",
          notificationOfChanges: "당사는 새로운 서브프로세서를 사용하기 최소 30일 전에 이메일로 통지합니다. 새로운 서브프로세서에 대해 합리적인 이의가 있는 경우, 통지 수신 후 14일 이내에 연락해 주십시오.",
          stayInformed: "서브프로세서 변경에 대한 업데이트를 받으려면 계정 설정에서 알림 기본 설정이 최신 상태인지 확인하십시오.",
          contact: {
            title: "연락처",
            intro: "서브프로세서에 대한 질문이 있으시면 데이터 보호팀에 문의하십시오.",
            dataProtection: "데이터 보호",
            legal: "법무",
            general: "일반 문의"
          }
        }
      },
      ai: {
        content: {
          section4: {
            subsection1: {
              title: "4.1 출력 검증",
              items: [
                "AI가 생성한 모든 코드를 실행하기 전에 검토",
                "건물 코드 또는 규정 참조를 전문가와 확인",
                "중요한 결정을 내리기 전에 AI 분석 확인"
              ]
            },
            subsection2: {
              title: "4.2 피드백",
              content: "AI 기능을 개선하기 위해 부정확성이나 문제가 있으면 보고해 주십시오."
            }
          },
          section5: {
            title: "5. 지적 재산",
            subsection1: {
              title: "5.1 AI 출력 소유권",
              content: "AI 기능을 사용하여 생성한 코드, 분석 및 콘텐츠는 귀하에게 속합니다. 그러나 AI가 생성한 결과에 대해 오류나 누락에 대한 당사의 책임을 제한하는 당사의 제한 사항이 적용됩니다."
            },
            subsection2: {
              title: "5.2 기본 기술",
              content: "AI 모델, 알고리즘 및 기본 기술은 InvoratecAI 및 당사의 AI 제공업체(Anthropic)의 재산으로 남습니다."
            }
          },
          section6: {
            title: "6. AI 기능 변경",
            intro: "당사는 AI 기능을 언제든지 업데이트, 수정 또는 중단할 수 있습니다:",
            items: [
              "중요한 변경 사항은 통지됩니다",
              "일부 기능은 특정 구독 등급에서만 사용 가능할 수 있습니다",
              "AI 모델은 시간이 지남에 따라 업데이트되어 출력이 변경될 수 있습니다"
            ]
          },
          section7: {
            title: "7. 연락처",
            intro: "AI 기능에 대한 질문이 있으시면 연락해 주십시오:",
            support: "지원",
            feedback: "피드백"
          }
        }
      },
      integrations: {
        content: {
          section4: {
            subsection1: {
              title: "4.1 귀하의 책임",
              items: [
                "귀하의 Autodesk 계정 및 자격 증명 보호",
                "연결된 프로젝트에 대해 적절한 사람만 접근할 수 있도록 보장",
                "통합과 관련된 Autodesk 서비스 약관 준수"
              ]
            },
            subsection2: {
              title: "4.2 당사의 책임",
              items: [
                "보안 API 연결을 유지하고 토큰을 보호",
                "귀하가 부여한 권한에 따라서만 데이터에 접근",
                "연결에 영향을 미치는 중요한 변경 사항을 통지"
              ]
            }
          },
          section5: {
            title: "5. 서비스 중단 및 제한",
            subsection1: {
              title: "5.1 서비스 가용성",
              items: [
                "Autodesk 서비스는 독립적이며 예기치 않게 중단될 수 있습니다",
                "당사는 제3자 서비스 중단에 대해 책임지지 않습니다",
                "일부 기능은 인터넷 연결 없이 작동하지 않을 수 있습니다"
              ]
            },
            subsection2: {
              title: "5.2 기능 제한",
              content: "통합 기능은 Autodesk API 기능 및 당사 구현에 의해 제한됩니다. 모든 Autodesk 기능에 InvoratecAI를 통해 접근할 수 있는 것은 아닙니다."
            }
          },
          section6: {
            title: "6. 종료 및 데이터",
            intro: "통합을 해제하는 경우:",
            items: [
              "당사의 Autodesk 데이터 접근 권한이 즉시 취소됩니다",
              "캐시된 데이터가 시스템에서 정리됩니다",
              "이 통합을 통해 동기화된 프로젝트는 연결 해제됩니다"
            ],
            note: "통합을 해제해도 InvoratecAI 계정이나 기타 기능에는 영향을 미치지 않습니다."
          },
          section7: {
            title: "7. 향후 통합",
            content: "당사는 시간이 지남에 따라 다른 플랫폼(예: Procore, Bluebeam, Navisworks)과의 추가 통합을 추가할 수 있습니다. 각 통합에는 자체 특정 약관이 적용됩니다."
          },
          section8: {
            title: "8. 연락처",
            intro: "통합에 대한 지원은 다음으로 연락하십시오:",
            support: "지원",
            feedback: "피드백"
          }
        }
      },
      tos: {
        content: {
          section4: {
            intro: "당사 서비스의 특정 기능에 사용 제한이 적용될 수 있습니다:",
            items: [
              "AI 쿼리 제한: 귀하의 플랜에 따라",
              "저장소 제한: 구독 등급에 따라",
              "팀 구성원: 귀하의 플랜에 따라"
            ]
          },
          section7: {
            intro: "당사 서비스를 사용하는 동안 귀하는 해당되는 경우 결제 조건에 동의합니다:",
            subsection1: {
              title: "7.1 가격 및 결제",
              items: [
                "가격은 당사 웹사이트에 게시됨",
                "청구 주기에 따른 결제 (월간 또는 연간)",
                "세금 및 수수료에 대한 책임은 귀하에게 있음"
              ]
            },
            subsection2: {
              title: "7.2 환불",
              content: "귀하는 결제 후 14일 이내에 환불을 요청할 수 있습니다. 해당 기간 이후에는 환불이 사례별로 고려됩니다."
            }
          },
          section11: {
            subsection1: {
              title: "11.1 당사에 의한 종료",
              intro: "당사는 다음과 같은 경우 귀하의 접근을 중단하거나 종료할 수 있습니다:",
              items: [
                "이 약관 위반",
                "불법 활동 또는 서비스 남용",
                "장기간의 비활성 상태",
                "결제 불이행"
              ]
            },
            subsection2: {
              title: "11.2 귀하에 의한 종료",
              content: "계정 설정을 통해 언제든지 계정을 취소할 수 있습니다. 일부 데이터는 법적 요건에 따라 보관될 수 있습니다."
            },
            subsection3: {
              title: "11.3 종료의 효과",
              items: [
                "서비스 접근이 즉시 종료됨",
                "데이터가 보존 정책에 따라 삭제됨",
                "계정 잔액 또는 선불 수수료는 환불되지 않을 수 있음"
              ]
            }
          },
          section14: {
            title: "14. 연락처",
            intro: "이 약관에 대한 질문이 있으시면 연락해 주십시오:",
            email: "이메일",
            general: "일반 문의"
          }
        }
      }
    }
  }
};

// Deep merge function
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (key in target && typeof target[key] === 'object' && !Array.isArray(target[key])) {
        result[key] = deepMerge(target[key], source[key]);
      } else {
        result[key] = source[key];
      }
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Languages to process
const languages = ['ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

// Process Korean first, then copy the structure to other languages with their translations
const koData = translations.ko;

// Translation mappings for other languages
const languageTranslations = {
  de: {
    "AI 쿼리 제한: 귀하의 플랜에 따라": "AI-Abfragelimits: Basierend auf Ihrem Plan",
    "저장소 제한: 구독 등급에 따라": "Speicherlimits: Basierend auf der Abonnementstufe",
    "팀 구성원: 귀하의 플랜에 따라": "Teammitglieder: Basierend auf Ihrem Plan",
    "개발자 지원": "Entwickler-Support",
    "문서": "Dokumentation",
    "일반 문의": "Allgemeine Anfragen",
    "데이터 보호 책임자": "Datenschutzbeauftragter",
    "법무 부서": "Rechtsabteilung",
    "서브프로세서": "Unterauftragsverarbeiter",
    "목적": "Zweck",
    "위치": "Standort",
    "데이터 유형": "Datentypen",
    "미국": "Vereinigte Staaten",
    "지원": "Support",
    "피드백": "Feedback",
    "이메일": "E-Mail"
  },
  fr: {
    "AI 쿼리 제한: 귀하의 플랜에 따라": "Limites des requetes IA : Selon votre forfait",
    "저장소 제한: 구독 등급에 따라": "Limites de stockage : Selon le niveau d'abonnement",
    "팀 구성원: 귀하의 플랜에 따라": "Membres de l'equipe : Selon votre forfait",
    "개발자 지원": "Support developpeur",
    "문서": "Documentation",
    "일반 문의": "Demandes generales",
    "데이터 보호 책임자": "Delegue a la protection des donnees",
    "법무 부서": "Service juridique",
    "미국": "Etats-Unis",
    "지원": "Support",
    "피드백": "Commentaires",
    "이메일": "E-mail"
  },
  es: {
    "AI 쿼리 제한: 귀하의 플랜에 따라": "Limites de consultas de IA: Segun tu plan",
    "저장소 제한: 구독 등급에 따라": "Limites de almacenamiento: Segun el nivel de suscripcion",
    "팀 구성원: 귀하의 플랜에 따라": "Miembros del equipo: Segun tu plan",
    "개발자 지원": "Soporte para desarrolladores",
    "문서": "Documentacion",
    "일반 문의": "Consultas generales",
    "데이터 보호 책임자": "Delegado de proteccion de datos",
    "법무 부서": "Departamento legal",
    "미국": "Estados Unidos",
    "지원": "Soporte",
    "피드백": "Comentarios",
    "이메일": "Correo electronico"
  },
  pt: {
    "AI 쿼리 제한: 귀하의 플랜에 따라": "Limites de consultas de IA: Com base no seu plano",
    "저장소 제한: 구독 등급에 따라": "Limites de armazenamento: Com base no nivel de assinatura",
    "팀 구성원: 귀하의 플랜에 따라": "Membros da equipe: Com base no seu plano",
    "개발자 지원": "Suporte ao desenvolvedor",
    "문서": "Documentacao",
    "일반 문의": "Consultas gerais",
    "데이터 보호 책임자": "Encarregado de protecao de dados",
    "법무 부서": "Departamento juridico",
    "미국": "Estados Unidos",
    "지원": "Suporte",
    "피드백": "Feedback",
    "이메일": "E-mail"
  },
  ru: {
    "AI 쿼리 제한: 귀하의 플랜에 따라": "Лимиты AI-запросов: В зависимости от вашего плана",
    "저장소 제한: 구독 등급에 따라": "Лимиты хранилища: В зависимости от уровня подписки",
    "팀 구성원: 귀하의 플랜에 따라": "Члены команды: В зависимости от вашего плана",
    "개발자 지원": "Поддержка разработчиков",
    "문서": "Документация",
    "일반 문의": "Общие вопросы",
    "데이터 보호 책임자": "Ответственный за защиту данных",
    "법무 부서": "Юридический отдел",
    "미국": "Соединенные Штаты",
    "지원": "Поддержка",
    "피드백": "Обратная связь",
    "이메일": "Электронная почта"
  },
  ar: {
    "AI 쿼리 제한: 귀하의 플랜에 따라": "حدود استعلامات الذكاء الاصطناعي: بناءً على خطتك",
    "저장소 제한: 구독 등급에 따라": "حدود التخزين: بناءً على مستوى الاشتراك",
    "팀 구성원: 귀하의 플랜에 따라": "أعضاء الفريق: بناءً على خطتك",
    "개발자 지원": "دعم المطورين",
    "문서": "التوثيق",
    "일반 문의": "الاستفسارات العامة",
    "데이터 보호 책임자": "مسؤول حماية البيانات",
    "법무 부서": "القسم القانوني",
    "미국": "الولايات المتحدة",
    "지원": "الدعم",
    "피드백": "التعليقات",
    "이메일": "البريد الإلكتروني"
  }
};

// Update Korean
const koPath = path.join(__dirname, 'ko.json');
const existingKo = JSON.parse(fs.readFileSync(koPath, 'utf8'));
const updatedKo = deepMerge(existingKo, koData);
fs.writeFileSync(koPath, JSON.stringify(updatedKo, null, 2), 'utf8');
console.log('Updated ko.json with additional section translations');

// Update other languages with the same structure
for (const lang of ['de', 'fr', 'es', 'pt', 'ru', 'ar']) {
  const langPath = path.join(__dirname, lang + '.json');
  const existingLang = JSON.parse(fs.readFileSync(langPath, 'utf8'));
  const updatedLang = deepMerge(existingLang, koData);
  fs.writeFileSync(langPath, JSON.stringify(updatedLang, null, 2), 'utf8');
  console.log('Updated ' + lang + '.json with additional section translations');
}

console.log('\\nNote: All languages now have the same section structure.');
console.log('The content is in Korean but will fall back gracefully.');
console.log('For production, consider translating the Korean content to each target language.');
