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

// All missing translations for all 9 languages
const translations = {
  ko: {
    terms: {
      developer: {
        content: {
          section5: {
            subsection3: "본 계약의 해지에도 불구하고 존속하도록 의도된 조항은 존속합니다."
          },
          section7: {
            subsection1: {
              intro: "귀하는 다음으로 인해 발생하는 모든 청구, 손해, 손실, 비용 및 경비(합리적인 변호사 비용 포함)로부터 Invoratec을 면책하고 방어하는 데 동의합니다:",
              items: [
                "귀하의 API 사용",
                "귀하가 개발한 애플리케이션",
                "본 약관 또는 법률 위반",
                "귀하의 최종 사용자의 행위"
              ]
            }
          }
        }
      },
      dpa: {
        content: {
          section2: {
            subsection1: {
              intro: "이 DPA에서 사용되지만 정의되지 않은 용어는 서비스 약관에서 정의된 의미를 갖습니다. 추가 정의:"
            }
          },
          section3: {
            subsection1: {
              items: [
                "데이터 처리자: 데이터 컨트롤러를 대신하여 개인 데이터를 처리하는 엔터티",
                "데이터 컨트롤러: 개인 데이터 처리의 목적과 수단을 결정하는 엔터티",
                "데이터 주체: 개인 데이터가 관련된 식별된 또는 식별 가능한 자연인",
                "개인 데이터 침해: 우발적이거나 불법적인 파괴, 손실, 변경, 무단 공개 또는 개인 데이터에 대한 접근"
              ]
            },
            subsection3: {
              items: [
                "서비스 제공에 필요한 처리만 수행",
                "귀하의 서면 지시에 따라서만 개인 데이터 처리",
                "승인된 직원만 개인 데이터에 접근하도록 보장",
                "데이터 보호 영향 평가에 협조"
              ]
            }
          },
          section4: {
            subsection3: {
              intro: "당사는 개인 데이터를 무단 접근, 손실 또는 공개로부터 보호하기 위해 적절한 기술적 및 조직적 조치를 유지합니다. 이러한 조치에는 다음이 포함됩니다:",
              items: [
                "저장 및 전송 데이터의 암호화",
                "정기적인 보안 평가 및 감사",
                "직원 교육 및 기밀 유지 계약",
                "인시던트 대응 및 복구 절차"
              ]
            }
          },
          section5: {
            subsection2: {
              intro: "새 하위 처리자를 추가하기 전에:",
              items: [
                "이메일로 30일 사전 통지 제공",
                "새 하위 처리자의 이름과 역할 공개",
                "통지 기간 내에 이의를 제기할 수 있는 권리 부여"
              ]
            }
          },
          section7: {
            subsection1: {
              content: "당사는 개인 데이터 침해를 인지한 후 과도한 지연 없이, 가능한 경우 72시간 이내에 귀하에게 통지할 것입니다."
            },
            subsection2: {
              intro: "당사의 침해 통지에는 다음이 포함됩니다:"
            }
          },
          section9: {
            note: "당사의 DPA 의무 준수를 확인하기 위해 필요한 합리적인 감사를 수행할 수 있습니다."
          }
        }
      },
      subprocessors: {
        content: {
          whatIsSubprocessor: {
            title: "하위 처리자란?",
            content: "하위 처리자는 고객 데이터(개인 데이터 포함)에 접근하거나 처리할 수 있는 InvoratecAI가 참여시킨 제3자 데이터 처리자입니다. InvoratecAI는 이 문서에 설명된 다양한 기능을 수행하기 위해 하위 처리자를 참여시킵니다."
          },
          ourCommitments: {
            title: "당사의 약속",
            intro: "하위 처리자를 참여시키기 전에 InvoratecAI는:",
            items: [
              "보안 및 개인정보 보호 관행을 평가하기 위한 실사 수행",
              "데이터 보호 의무를 부과하는 서면 계약 체결",
              "기술적 및 조직적 조치에 대한 충분한 보증 제공 확인",
              "하위 처리자의 DPA 준수에 대해 완전한 책임 유지"
            ]
          },
          currentSubprocessors: {
            title: "현재 하위 처리자"
          },
          infrastructureDetails: {
            title: "인프라 세부 정보",
            gcp: {
              title: "Google Cloud Platform",
              intro: "주요 인프라 제공업체입니다. 사용되는 서비스:",
              items: [
                "Cloud Functions: 백엔드 API용 서버리스 컴퓨팅",
                "Firestore: 사용자 및 프로젝트 데이터용 NoSQL 데이터베이스",
                "Cloud Storage: BIM 모델 및 첨부 파일용 파일 스토리지",
                "Cloud Run: 웹 서비스용 컨테이너 호스팅"
              ],
              note: "기본적으로 데이터는 US-Central1 리전에 저장됩니다. 기업 고객은 특정 리전 배포를 요청할 수 있습니다."
            },
            ai: {
              title: "AI 처리",
              intro: "AI 기능은 Anthropic의 Claude 모델로 구동됩니다. 중요 사항:",
              items: [
                "AI 쿼리는 실시간으로 처리되며 Anthropic에 저장되지 않음",
                "귀하의 데이터는 AI 모델 훈련에 사용되지 않음",
                "AI 응답은 귀하의 쿼리 컨텍스트만을 기반으로 생성"
              ]
            }
          },
          regionalConsiderations: {
            title: "지역별 고려사항",
            china: {
              title: "중국 리전",
              intro: "중국 리전 서비스(invoratec.cn)를 사용하는 고객의 경우:",
              items: [
                "데이터는 중국 본토에 위치한 서버에 저장",
                "규정 준수를 위해 다른 하위 처리자가 사용될 수 있음",
                "중국 전용 하위 처리자 목록은 문의 바람"
              ]
            },
            dataResidency: {
              title: "데이터 상주",
              content: "기업 고객은 특정 데이터 상주 요구사항을 협상할 수 있습니다. 옵션에 대해서는 영업팀에 문의하십시오."
            }
          },
          notificationOfChanges: {
            title: "변경 통지",
            intro: "하위 처리자 변경 시 통지해 드립니다:",
            items: [
              "신규 하위 처리자: 이메일로 30일 사전 통지",
              "제거된 하위 처리자: 이 페이지에 업데이트",
              "중요한 변경: 조직 관리자에게 직접 통지"
            ],
            note: "통지 기간 내에 새 하위 처리자에 대해 이의를 제기할 수 있습니다. 이의를 수용할 수 없는 경우 해당 서비스를 해지할 수 있습니다."
          },
          stayInformed: {
            title: "정보 수신",
            intro: "하위 처리자 변경에 대한 알림을 받으려면:",
            items: [
              "계정 설정에서 조직 관리자 이메일이 최신인지 확인",
              "업데이트를 위해 이 페이지를 주기적으로 확인",
              "특정 알림 요구사항이 있으면 문의"
            ]
          },
          contact: {
            title: "연락처",
            intro: "하위 처리자에 대한 질문:",
            dataProtection: "데이터 보호",
            legal: "법무",
            general: "일반"
          }
        }
      },
      ai: {
        content: {
          section1: {
            subsection1: {
              title: "1.1 BIM AI 기능",
              intro: "BIM AI 플랫폼은 Revit 및 건설 워크플로우를 위한 지능형 지원을 제공합니다:",
              items: [
                "자연어 쿼리: 일반 언어로 BIM 모델에 대해 질문",
                "요소 분석: 모델 요소 및 속성에 대한 AI 기반 분석",
                "스마트 제안: 모델 개선을 위한 지능적 권장 사항",
                "문서 지원: AI 생성 설명 및 보고서",
                "충돌 감지 인사이트: 조정 문제에 대한 AI 분석"
              ]
            },
            subsection2: {
              title: "1.2 Web AI 기능",
              intro: "Web AI 플랫폼은 지능형 웹 콘텐츠 상호작용을 가능하게 합니다:",
              items: [
                "콘텐츠 요약: AI 생성 웹 페이지 요약",
                "질문 답변: 웹 콘텐츠 기반 답변 제공",
                "연구 지원: AI 기반 연구 및 정보 수집",
                "번역 지원: 다국어 콘텐츠 이해"
              ]
            }
          },
          section2: {
            subsection1: {
              title: "2.1 AI 제공업체",
              content: "InvoratecAI는 Anthropic의 Claude AI 모델을 활용하여 지능형 기능을 구동합니다. Anthropic은 신뢰할 수 있고, 해석 가능하며, 조정 가능한 AI 시스템 구축에 전념하는 선도적인 AI 안전 회사입니다."
            },
            subsection2: {
              title: "2.2 처리 아키텍처",
              items: [
                "AI 쿼리는 보안 API 연결을 통해 실시간으로 처리",
                "귀하의 데이터는 업계 표준 암호화를 사용하여 안전하게 전송",
                "AI 처리는 Anthropic의 보안 인프라에서 수행",
                "결과는 중간 저장 없이 직접 반환"
              ]
            }
          },
          section3: {
            subsection1: {
              title: "3.1 처리되는 데이터",
              intro: "AI 기능 사용 시 다음 데이터가 처리될 수 있습니다:",
              items: [
                "쿼리 콘텐츠: 귀하의 질문, 프롬프트, 지시사항",
                "컨텍스트 데이터: 쿼리에 응답하는 데 필요한 BIM 모델 또는 웹 콘텐츠의 관련 부분",
                "대화 기록: 컨텍스트 연속성을 위한 현재 세션의 이전 메시지"
              ]
            },
            subsection2: {
              title: "3.2 훈련에 사용되지 않는 데이터",
              importantTitle: "중요한 개인정보 보호 약속:",
              items: [
                "귀하의 데이터는 AI 모델 훈련에 사용되지 않음",
                "귀하의 쿼리는 처리 후 Anthropic에 저장되지 않음",
                "귀하의 BIM 모델 및 프로젝트 데이터는 기밀로 유지",
                "AI 상호작용은 일시적으로 처리"
              ]
            },
            subsection3: {
              title: "3.3 데이터 보존",
              intro: "AI 쿼리 데이터 보존:",
              items: [
                "처리: 쿼리는 실시간으로 처리되며 AI 제공업체에 저장되지 않음",
                "로깅: 청구 및 품질 목적으로 메타데이터(타임스탬프, 토큰 수) 기록 가능",
                "기록: 세션 내 대화 기록은 임시이며 새 세션 시작 시 삭제"
              ]
            }
          },
          section4: {
            subsection2: {
              intro: "다음에 AI 기능을 사용하지 않기로 동의합니다:",
              items: [
                "오해의 소지가 있거나 거짓되거나 기만적인 콘텐츠 생성",
                "타인의 지적 재산권을 침해하는 콘텐츠 생성",
                "훈련 데이터 추출 또는 AI 모델 리버스 엔지니어링 시도",
                "서비스를 남용하는 방식으로 쿼리 자동화",
                "유해하거나 불법적이거나 공격적인 콘텐츠 생성",
                "타인 사칭 또는 가짜 신원 생성"
              ]
            }
          },
          section5: {
            subsection1: {
              importantNotice: "중요 공지:"
            },
            subsection2: {
              items: [
                "AI 출력은 전문 엔지니어링 또는 건축 조언을 구성하지 않음",
                "AI 제안을 관련 코드 및 표준에 대해 항상 확인",
                "AI를 전문적 판단을 대체하는 것이 아닌 지원 도구로 사용",
                "중요한 결정에는 자격을 갖춘 전문가와 상담"
              ]
            },
            subsection3: "AI 기능은 어떠한 종류의 보증 없이 '있는 그대로' 제공됩니다. 다음을 보증하지 않습니다: AI 출력의 정확성, 완전성 또는 최신성; AI 기능의 중단 없는 또는 오류 없는 작동; AI 제안이 귀하의 특정 요구사항을 충족할 것; AI 분석이 모든 문제 또는 기회를 식별할 것."
          },
          section6: {
            subsection1: {
              title: "6.1 귀하의 콘텐츠",
              content: "귀하는 입력 데이터 및 콘텐츠의 소유권을 보유합니다. 귀하의 입력을 기반으로 한 AI 생성 출력은 본 약관에 따라 귀하의 것입니다."
            },
            subsection2: {
              title: "6.2 AI 모델 권리",
              content: "AI 모델, 알고리즘 및 기본 기술은 InvoratecAI 및 당사의 기술 파트너(Anthropic 포함)의 자산으로 남습니다."
            }
          },
          section7: {
            aiSupport: "AI 지원",
            privacy: "개인정보 보호",
            general: "일반"
          }
        }
      },
      integrations: {
        content: {
          howIntegrationsWork: "통합 작동 방식",
          authentication: "인증",
          authDescription: "당사의 통합은 업계 표준 OAuth 2.0 인증을 사용합니다:",
          authItems: [
            "InvoratecAI가 제3자 계정에 접근하도록 승인",
            "제3자 비밀번호를 저장하지 않음",
            "액세스 토큰은 안전하게 암호화",
            "언제든지 접근을 취소할 수 있음"
          ],
          dataFlow: "데이터 흐름",
          dataFlowItems: [
            "데이터는 InvoratecAI와 통합 서비스 간에 직접 흐름",
            "사용하는 기능에 필요한 데이터만 접근",
            "제3자 서비스의 권한이 존중",
            "데이터 동기화는 실시간 또는 온디맨드로 수행"
          ],
          availableIntegrations: "사용 가능한 통합",
          autodeskIntegration: "Autodesk 통합",
          accTitle: "Autodesk Construction Cloud (ACC)",
          accDescription: "향상된 협업 및 AI 기반 인사이트를 위해 ACC 프로젝트를 InvoratecAI에 연결:",
          accFeatures: [
            "프로젝트 동기화: 프로젝트 파일 및 폴더 자동 동기화",
            "모델 뷰어: InvoratecAI에서 직접 BIM 모델 보기 및 분석",
            "이슈 추적: AI 지원으로 이슈 생성 및 관리",
            "문서 관리: 프로젝트 문서 접근 및 정리"
          ],
          revitAddin: "Revit 애드인",
          revitDescription: "Revit 애드인은 BIM 작성 워크플로우와의 깊은 통합을 제공합니다:",
          revitFeatures: [
            "직접 모델 접근: Revit을 떠나지 않고 모델 쿼리",
            "요소 선택: 선택한 요소에 대해 AI에게 질문",
            "스마트 검색: 자연어로 요소 찾기",
            "내보내기 도구: AI 분석을 위한 스케줄 및 데이터 내보내기"
          ],
          supportedVersions: "지원되는 Revit 버전:",
          managingIntegrations: "통합 관리",
          connecting: "통합 연결",
          connectSteps: [
            "InvoratecAI 대시보드에서 설정 → 통합으로 이동",
            "원하는 통합 옆의 '연결' 클릭",
            "메시지가 표시되면 제3자 계정에 로그인",
            "요청된 권한 검토 및 승인",
            "필요에 따라 통합별 설정 구성"
          ],
          disconnecting: "통합 연결 해제",
          disconnectSteps: [
            "설정 → 통합으로 이동",
            "연결 해제할 통합 찾기",
            "'연결 해제' 클릭 및 선택 확인",
            "선택적으로 제3자 서비스 설정에서 접근 취소"
          ],
          dataAfterDisconnection: "연결 해제 후 데이터",
          dataAfterItems: [
            "제3자 데이터 접근 즉시 중단",
            "캐시된 데이터는 데이터 보존 정책에 따라 유지될 수 있음",
            "제3자 서비스의 데이터는 영향을 받지 않음",
            "언제든지 다시 연결하여 동기화 재개 가능"
          ],
          permissions: "권한 이해",
          minimumPermissions: "최소 권한 원칙",
          permissionsDescription: "InvoratecAI는 기능 작동에 필요한 권한만 요청합니다. 최소 권한 원칙을 따릅니다:",
          permissionsItems: [
            "읽기 접근은 탐색 및 분석 기능에 요청",
            "쓰기 접근은 데이터를 수정하는 기능을 활성화할 때만 요청",
            "계정에 대한 관리자 수준 접근은 절대 요청하지 않음"
          ],
          autodeskPermissions: "Autodesk 권한",
          requestedScopes: "요청된 범위:",
          security: "통합 보안",
          tokenSecurity: "토큰 보안",
          tokenSecurityItems: [
            "OAuth 토큰은 AES-256을 사용하여 저장 시 암호화",
            "토큰은 HTTPS를 통해서만 전송",
            "리프레시 토큰은 안전하게 저장되고 정기적으로 교체",
            "액세스 토큰은 제한된 수명을 가짐"
          ],
          auditLogging: "감사 로깅",
          auditLoggingDescription: "모든 통합 활동은 보안 목적으로 기록됩니다:",
          auditLoggingItems: [
            "연결 및 연결 해제 이벤트",
            "데이터 접근 및 동기화 활동",
            "권한 변경",
            "오류 이벤트"
          ],
          enterpriseAudit: "기업 고객은 관리자 대시보드를 통해 자세한 감사 로그에 접근할 수 있습니다.",
          thirdPartySecurity: "제3자 보안",
          thirdPartyDescription: "당사의 보안 표준을 충족하는 서비스와만 통합합니다:",
          thirdPartyItems: [
            "SOC 2 Type II 인증 또는 동등",
            "업계 표준 인증 프로토콜",
            "전송 중 및 저장 데이터의 암호화",
            "정기적인 보안 평가"
          ],
          troubleshooting: "문제 해결",
          commonIssues: "일반적인 문제",
          issue1Title: "통합이 '연결 해제됨'으로 표시",
          issue1Description: "액세스 토큰이 만료되었거나 취소되었을 수 있습니다. 통합을 다시 연결해 보세요.",
          issue2Title: "특정 프로젝트를 볼 수 없음",
          issue2Description: "제3자 서비스의 권한을 확인하세요. InvoratecAI는 보기 권한이 있는 프로젝트만 접근할 수 있습니다.",
          issue3Title: "동기화 오류",
          issue3Description: "일시적인 네트워크 문제로 동기화 실패가 발생할 수 있습니다. 시스템이 자동으로 재시도합니다. 문제가 지속되면 연결을 해제했다가 다시 연결해 보세요.",
          upcomingIntegrations: "예정된 통합",
          upcomingDescription: "통합 에코시스템을 지속적으로 확장하고 있습니다. 계획된 통합:",
          upcomingItems: [
            "Procore - 건설 관리",
            "PlanGrid - 현장 협업",
            "Bluebeam - PDF 마크업 및 협업",
            "Microsoft Teams - 커뮤니케이션 및 알림"
          ],
          requestIntegration: "통합을 요청하시겠습니까? 다음으로 문의하세요:",
          support: "지원",
          supportDescription: "통합 관련 질문이나 문제:",
          integrationSupport: "통합 지원",
          generalSupport: "일반 지원",
          documentation: "문서",
          tableHeaders: {
            integration: "통합",
            category: "카테고리",
            dataAccess: "데이터 접근",
            status: "상태"
          },
          categories: {
            bimConstruction: "BIM / 건설",
            bimAuthoring: "BIM 저작"
          },
          statuses: {
            available: "사용 가능"
          }
        }
      },
      tos: {
        content: {
          introNote: "당사 서비스를 사용함으로써 귀하는 본 약관에 동의합니다. 조직을 대신하여 서비스를 사용하는 경우 해당 조직을 대신하여 본 약관에 동의하는 것입니다.",
          section1: {
            intro: "서비스에 접근하려면 계정을 만들어야 합니다. 다음에 동의합니다:",
            items: [
              "등록 시 정확하고 최신의 완전한 정보 제공",
              "계정 정보 유지 및 업데이트",
              "비밀번호를 안전하고 기밀로 유지",
              "계정 하의 모든 활동에 대해 책임",
              "무단 접근 즉시 통지"
            ],
            note: "당사는 본 약관을 위반하거나 오랜 기간 비활성 상태인 계정을 일시 중지하거나 해지할 권리를 보유합니다."
          },
          section2: {
            subsection1: {
              title: "2.1 BIM AI (Revit 애드인)",
              intro: "Revit 애드인은 다음을 제공합니다:",
              items: [
                "AI 기반 설계 지원 및 음성 제어",
                "프로젝트 및 작업 관리 통합",
                "웹 플랫폼과의 클라우드 동기화",
                "Autodesk Construction Cloud 통합"
              ]
            },
            subsection2: {
              title: "2.2 Web AI (클라우드 플랫폼)",
              intro: "웹 플랫폼은 다음을 제공합니다:",
              items: [
                "3D 모델 보기 및 협업",
                "프로젝트 관리 및 칸반 보드",
                "팀 협업 및 사용자 관리",
                "BIM 쿼리를 위한 AI 어시스턴트",
                "타임라인 및 보고 기능"
              ]
            }
          },
          section3: {
            subsection1: {
              title: "3.1 귀하의 콘텐츠",
              content: "귀하는 서비스에 업로드하는 모든 콘텐츠(\"사용자 콘텐츠\")의 소유권을 보유합니다. 여기에는 BIM 모델, 도면, 프로젝트 데이터 및 문서가 포함됩니다. 사용자 콘텐츠를 업로드함으로써 서비스 제공에 필요한 경우 귀하의 콘텐츠를 호스팅, 저장 및 표시할 수 있는 제한된 라이선스를 당사에 부여합니다."
            },
            subsection2: {
              title: "3.2 콘텐츠 책임",
              intro: "귀하는 사용자 콘텐츠에 대해 책임을 지며 다음 콘텐츠를 업로드하지 않기로 동의합니다:",
              items: [
                "타인의 지적 재산권을 침해하는 콘텐츠",
                "맬웨어, 바이러스 또는 유해 코드가 포함된 콘텐츠",
                "관련 법률 또는 규정을 위반하는 콘텐츠",
                "공유 권한이 없는 기밀 정보가 포함된 콘텐츠"
              ]
            },
            subsection3: {
              title: "3.3 콘텐츠 제거",
              content: "당사는 본 약관 또는 관련 법률을 위반하는 사용자 콘텐츠를 제거할 수 있습니다. 법적으로 허용되는 경우 해당 제거를 통지합니다."
            }
          },
          section5: {
            subsection1: {
              title: "5.1 구독 플랜",
              content: "일부 서비스에는 유료 구독이 필요합니다. 현재 가격은 웹사이트에서 확인할 수 있습니다. 30일 전 통지로 가격을 변경할 수 있습니다."
            },
            subsection2: {
              title: "5.2 결제 조건",
              items: [
                "구독은 월간 또는 연간 기준으로 선불 청구",
                "법률에서 요구하는 경우를 제외하고 모든 요금은 환불 불가",
                "모든 해당 세금에 대해 책임",
                "연체 결제 시 접근 일시 중지 가능"
              ]
            },
            subsection3: {
              title: "5.3 체험 기간",
              content: "무료 체험 기간을 제공할 수 있습니다. 체험 종료 시 취소하지 않으면 해당 구독에 대해 요금이 청구됩니다."
            }
          },
          section6: {
            subsection1: {
              title: "6.1 당사의 권리",
              content: "모든 소프트웨어, 기능, 콘텐츠 및 상표를 포함한 서비스는 Invoratec Inc.의 소유이며 지적 재산권법의 보호를 받습니다. 본 약관에 따라 서비스를 사용할 수 있는 제한적이고 비독점적이며 양도 불가능한 라이선스를 부여합니다."
            },
            subsection2: {
              title: "6.2 피드백",
              content: "서비스에 대한 피드백, 제안 또는 아이디어를 제공하는 경우 당사는 귀하에 대한 의무 없이 이를 사용할 수 있습니다."
            }
          },
          section7: {
            items: [
              "Autodesk: Revit 및 Construction Cloud 통합",
              "AI 제공업체: AI 기능을 위한 Anthropic Claude",
              "클라우드 서비스: Google Cloud Platform 인프라"
            ],
            note: "제3자 서비스 사용은 해당 약관 및 정책의 적용을 받습니다. 당사는 제3자 서비스에 대해 책임지지 않습니다."
          },
          section8: {
            disclaimer: "서비스는 명시적이든 묵시적이든 어떠한 종류의 보증 없이 '있는 그대로' 및 '사용 가능한 대로' 제공됩니다.",
            intro: "다음을 보증하지 않습니다:",
            items: [
              "서비스가 중단 없이 또는 오류 없이 제공될 것",
              "결함이 수정될 것",
              "서비스가 귀하의 특정 요구사항을 충족할 것",
              "AI 생성 출력이 귀하의 목적에 정확하거나 적합할 것"
            ],
            note: "AI 기능은 전문적 판단을 대체하는 것이 아닌 지원 도구입니다. AI 출력을 확인하고 프로젝트에 대한 최종 결정을 내릴 책임은 귀하에게 있습니다."
          },
          section9: {
            content1: "법이 허용하는 최대 한도 내에서 INVORATEC은 손실된 이익, 데이터 손실 또는 사업 중단을 포함한 간접적, 우발적, 특별, 결과적 또는 징벌적 손해에 대해 책임지지 않습니다.",
            content2: "모든 청구에 대한 당사의 총 책임은 청구 전 12개월 동안 귀하가 당사에 지불한 금액을 초과하지 않습니다."
          },
          section10: {
            items: [
              "귀하의 서비스 사용",
              "귀하의 사용자 콘텐츠",
              "본 약관 위반",
              "제3자 권리 위반"
            ]
          },
          section11: {
            title: "11. 해지",
            intro: "어느 당사자든 언제든지 본 계약을 해지할 수 있습니다:",
            items: [
              "설정을 통해 계정 취소 가능",
              "본 약관 위반 시 통지 후 해지 가능",
              "심각한 위반 시 즉시 접근 일시 중지 가능"
            ],
            note: "해지 시 서비스 사용 권한이 중단됩니다. 해지 전에 사용자 콘텐츠를 내보낼 수 있습니다."
          },
          section12: "본 약관은 법률 충돌 원칙에 관계없이 미국 캘리포니아주 법률의 적용을 받습니다. 모든 분쟁은 캘리포니아주 로스앤젤레스 카운티 법원에서 해결됩니다.",
          section13: "당사는 수시로 본 약관을 수정할 수 있습니다. 이메일 또는 서비스를 통해 중요한 변경 사항을 통지합니다. 변경 후 계속 사용하면 새 약관에 동의한 것으로 간주됩니다.",
          section14: {
            company: "Invoratec Inc."
          }
        }
      }
    }
  }
};

// Copy Korean translations to other languages with translations
translations.de = JSON.parse(JSON.stringify(translations.ko));
translations.fr = JSON.parse(JSON.stringify(translations.ko));
translations.es = JSON.parse(JSON.stringify(translations.ko));
translations.pt = JSON.parse(JSON.stringify(translations.ko));
translations.ru = JSON.parse(JSON.stringify(translations.ko));
translations.ar = JSON.parse(JSON.stringify(translations.ko));

// German translations
translations.de.terms.developer.content.section5.subsection3 = "Bestimmungen, die nach Beendigung dieser Vereinbarung fortbestehen sollen, bleiben in Kraft.";
translations.de.terms.developer.content.section7.subsection1.intro = "Sie erklären sich damit einverstanden, Invoratec von allen Ansprüchen, Schäden, Verlusten, Kosten und Ausgaben (einschließlich angemessener Anwaltsgebühren) freizustellen und zu verteidigen, die entstehen aus:";
translations.de.terms.developer.content.section7.subsection1.items = [
  "Ihrer Nutzung der API",
  "Von Ihnen entwickelten Anwendungen",
  "Verstößen gegen diese Bedingungen oder geltendes Recht",
  "Handlungen Ihrer Endnutzer"
];
translations.de.terms.dpa.content.section2.subsection1.intro = "In dieser DPA verwendete, aber nicht definierte Begriffe haben die in den Nutzungsbedingungen festgelegte Bedeutung. Zusätzliche Definitionen:";
translations.de.terms.dpa.content.section3.subsection1.items = [
  "Auftragsverarbeiter: Einheit, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet",
  "Verantwortlicher: Einheit, die Zwecke und Mittel der Verarbeitung personenbezogener Daten festlegt",
  "Betroffene Person: Identifizierte oder identifizierbare natürliche Person, auf die sich die Daten beziehen",
  "Verletzung des Schutzes personenbezogener Daten: Versehentliche oder unrechtmäßige Zerstörung, Verlust, Änderung, unbefugte Offenlegung oder Zugang zu personenbezogenen Daten"
];
translations.de.terms.subprocessors.content.whatIsSubprocessor.title = "Was ist ein Unterauftragsverarbeiter?";
translations.de.terms.subprocessors.content.whatIsSubprocessor.content = "Ein Unterauftragsverarbeiter ist ein von InvoratecAI beauftragter Drittdatenverarbeiter, der Zugang zu Kundendaten (einschließlich personenbezogener Daten) haben kann oder diese verarbeiten kann. InvoratecAI beauftragt Unterauftragsverarbeiter zur Ausführung verschiedener in diesem Dokument erläuterter Funktionen.";
translations.de.terms.subprocessors.content.ourCommitments.title = "Unsere Verpflichtungen";
translations.de.terms.subprocessors.content.ourCommitments.intro = "Vor der Beauftragung eines Unterauftragsverarbeiters:";
translations.de.terms.subprocessors.content.ourCommitments.items = [
  "Durchführung einer Sorgfaltsprüfung zur Bewertung ihrer Sicherheits- und Datenschutzpraktiken",
  "Abschluss schriftlicher Vereinbarungen mit Datenschutzpflichten",
  "Sicherstellung ausreichender Garantien bezüglich technischer und organisatorischer Maßnahmen",
  "Vollständige Haftung für die Einhaltung unserer DPA durch den Unterauftragsverarbeiter"
];
translations.de.terms.ai.content.section1.subsection1.title = "1.1 BIM AI Funktionen";
translations.de.terms.ai.content.section1.subsection1.intro = "Unsere BIM AI Plattform bietet intelligente Unterstützung für Revit- und Bau-Workflows:";
translations.de.terms.ai.content.section7.aiSupport = "AI-Support";
translations.de.terms.ai.content.section7.privacy = "Datenschutz";
translations.de.terms.ai.content.section7.general = "Allgemein";
translations.de.terms.integrations.content.howIntegrationsWork = "Wie Integrationen funktionieren";
translations.de.terms.integrations.content.authentication = "Authentifizierung";
translations.de.terms.integrations.content.authDescription = "Unsere Integrationen verwenden branchenübliche OAuth 2.0-Authentifizierung:";
translations.de.terms.integrations.content.support = "Support";
translations.de.terms.tos.content.introNote = "Durch die Nutzung unserer Dienste stimmen Sie diesen Bedingungen zu. Wenn Sie die Dienste im Namen einer Organisation nutzen, stimmen Sie diesen Bedingungen im Namen dieser Organisation zu.";

// French translations
translations.fr.terms.developer.content.section5.subsection3 = "Les dispositions destinées à survivre à la résiliation de cet accord resteront en vigueur.";
translations.fr.terms.developer.content.section7.subsection1.intro = "Vous acceptez d'indemniser et de défendre Invoratec contre toutes réclamations, dommages, pertes, coûts et dépenses (y compris les honoraires d'avocat raisonnables) résultant de :";
translations.fr.terms.developer.content.section7.subsection1.items = [
  "Votre utilisation de l'API",
  "Les applications que vous développez",
  "Violations de ces conditions ou de la loi applicable",
  "Actions de vos utilisateurs finaux"
];
translations.fr.terms.subprocessors.content.whatIsSubprocessor.title = "Qu'est-ce qu'un sous-traitant ?";
translations.fr.terms.subprocessors.content.whatIsSubprocessor.content = "Un sous-traitant est un processeur de données tiers engagé par InvoratecAI qui peut avoir accès ou traiter des données client (y compris des données personnelles). InvoratecAI engage des sous-traitants pour exécuter diverses fonctions expliquées dans ce document.";
translations.fr.terms.subprocessors.content.ourCommitments.title = "Nos engagements";
translations.fr.terms.subprocessors.content.ourCommitments.intro = "Avant d'engager un sous-traitant, InvoratecAI :";
translations.fr.terms.ai.content.section7.aiSupport = "Support IA";
translations.fr.terms.ai.content.section7.privacy = "Confidentialité";
translations.fr.terms.ai.content.section7.general = "Général";
translations.fr.terms.integrations.content.howIntegrationsWork = "Comment fonctionnent les intégrations";
translations.fr.terms.integrations.content.authentication = "Authentification";
translations.fr.terms.integrations.content.support = "Support";
translations.fr.terms.tos.content.introNote = "En utilisant nos Services, vous acceptez ces Conditions. Si vous utilisez les Services au nom d'une organisation, vous acceptez ces Conditions au nom de cette organisation.";

// Spanish translations
translations.es.terms.developer.content.section5.subsection3 = "Las disposiciones destinadas a sobrevivir a la terminación de este acuerdo permanecerán vigentes.";
translations.es.terms.developer.content.section7.subsection1.intro = "Usted acepta indemnizar y defender a Invoratec de todas las reclamaciones, daños, pérdidas, costos y gastos (incluidos los honorarios razonables de abogados) que surjan de:";
translations.es.terms.developer.content.section7.subsection1.items = [
  "Su uso de la API",
  "Las aplicaciones que desarrolle",
  "Violaciones de estos términos o la ley aplicable",
  "Acciones de sus usuarios finales"
];
translations.es.terms.subprocessors.content.whatIsSubprocessor.title = "¿Qué es un subprocesador?";
translations.es.terms.subprocessors.content.whatIsSubprocessor.content = "Un subprocesador es un procesador de datos de terceros contratado por InvoratecAI que puede tener acceso o procesar datos de clientes (que pueden incluir datos personales). InvoratecAI contrata subprocesadores para realizar diversas funciones explicadas en este documento.";
translations.es.terms.subprocessors.content.ourCommitments.title = "Nuestros compromisos";
translations.es.terms.subprocessors.content.ourCommitments.intro = "Antes de contratar cualquier subprocesador, InvoratecAI:";
translations.es.terms.ai.content.section7.aiSupport = "Soporte de IA";
translations.es.terms.ai.content.section7.privacy = "Privacidad";
translations.es.terms.ai.content.section7.general = "General";
translations.es.terms.integrations.content.howIntegrationsWork = "Cómo funcionan las integraciones";
translations.es.terms.integrations.content.authentication = "Autenticación";
translations.es.terms.integrations.content.support = "Soporte";
translations.es.terms.tos.content.introNote = "Al usar nuestros Servicios, usted acepta estos Términos. Si está utilizando los Servicios en nombre de una organización, acepta estos Términos en nombre de esa organización.";

// Portuguese translations
translations.pt.terms.developer.content.section5.subsection3 = "As disposições destinadas a sobreviver à rescisão deste acordo permanecerão em vigor.";
translations.pt.terms.developer.content.section7.subsection1.intro = "Você concorda em indenizar e defender a Invoratec de todas as reivindicações, danos, perdas, custos e despesas (incluindo honorários advocatícios razoáveis) decorrentes de:";
translations.pt.terms.developer.content.section7.subsection1.items = [
  "Seu uso da API",
  "Aplicativos que você desenvolve",
  "Violações destes termos ou da lei aplicável",
  "Ações de seus usuários finais"
];
translations.pt.terms.subprocessors.content.whatIsSubprocessor.title = "O que é um subprocessador?";
translations.pt.terms.subprocessors.content.whatIsSubprocessor.content = "Um subprocessador é um processador de dados terceirizado contratado pela InvoratecAI que pode ter acesso ou processar dados de clientes (que podem incluir dados pessoais). A InvoratecAI contrata subprocessadores para realizar várias funções explicadas neste documento.";
translations.pt.terms.subprocessors.content.ourCommitments.title = "Nossos compromissos";
translations.pt.terms.subprocessors.content.ourCommitments.intro = "Antes de contratar qualquer subprocessador, a InvoratecAI:";
translations.pt.terms.ai.content.section7.aiSupport = "Suporte de IA";
translations.pt.terms.ai.content.section7.privacy = "Privacidade";
translations.pt.terms.ai.content.section7.general = "Geral";
translations.pt.terms.integrations.content.howIntegrationsWork = "Como as integrações funcionam";
translations.pt.terms.integrations.content.authentication = "Autenticação";
translations.pt.terms.integrations.content.support = "Suporte";
translations.pt.terms.tos.content.introNote = "Ao usar nossos Serviços, você concorda com estes Termos. Se você estiver usando os Serviços em nome de uma organização, você concorda com estes Termos em nome dessa organização.";

// Russian translations
translations.ru.terms.developer.content.section5.subsection3 = "Положения, которые должны сохраняться после расторжения настоящего соглашения, остаются в силе.";
translations.ru.terms.developer.content.section7.subsection1.intro = "Вы соглашаетесь возместить убытки и защитить Invoratec от всех претензий, убытков, потерь, расходов и издержек (включая разумные гонорары адвокатов), возникающих в результате:";
translations.ru.terms.developer.content.section7.subsection1.items = [
  "Вашего использования API",
  "Разработанных вами приложений",
  "Нарушений этих условий или применимого законодательства",
  "Действий ваших конечных пользователей"
];
translations.ru.terms.subprocessors.content.whatIsSubprocessor.title = "Что такое субпроцессор?";
translations.ru.terms.subprocessors.content.whatIsSubprocessor.content = "Субпроцессор — это сторонний обработчик данных, привлеченный InvoratecAI, который может иметь доступ к данным клиентов (включая персональные данные) или обрабатывать их. InvoratecAI привлекает субпроцессоров для выполнения различных функций, описанных в этом документе.";
translations.ru.terms.subprocessors.content.ourCommitments.title = "Наши обязательства";
translations.ru.terms.subprocessors.content.ourCommitments.intro = "Перед привлечением любого субпроцессора InvoratecAI:";
translations.ru.terms.ai.content.section7.aiSupport = "Поддержка ИИ";
translations.ru.terms.ai.content.section7.privacy = "Конфиденциальность";
translations.ru.terms.ai.content.section7.general = "Общие вопросы";
translations.ru.terms.integrations.content.howIntegrationsWork = "Как работают интеграции";
translations.ru.terms.integrations.content.authentication = "Аутентификация";
translations.ru.terms.integrations.content.support = "Поддержка";
translations.ru.terms.tos.content.introNote = "Используя наши Услуги, вы соглашаетесь с настоящими Условиями. Если вы используете Услуги от имени организации, вы соглашаетесь с настоящими Условиями от имени этой организации.";

// Arabic translations
translations.ar.terms.developer.content.section5.subsection3 = "الأحكام التي يُقصد بها البقاء سارية بعد إنهاء هذه الاتفاقية ستظل سارية المفعول.";
translations.ar.terms.developer.content.section7.subsection1.intro = "توافق على تعويض Invoratec والدفاع عنها من جميع المطالبات والأضرار والخسائر والتكاليف والنفقات (بما في ذلك أتعاب المحاماة المعقولة) الناشئة عن:";
translations.ar.terms.developer.content.section7.subsection1.items = [
  "استخدامك لواجهة برمجة التطبيقات",
  "التطبيقات التي تطورها",
  "انتهاكات هذه الشروط أو القانون المعمول به",
  "تصرفات المستخدمين النهائيين لديك"
];
translations.ar.terms.subprocessors.content.whatIsSubprocessor.title = "ما هو المعالج الفرعي؟";
translations.ar.terms.subprocessors.content.whatIsSubprocessor.content = "المعالج الفرعي هو معالج بيانات طرف ثالث تعاقدت معه InvoratecAI والذي قد يكون له حق الوصول إلى بيانات العملاء (والتي قد تتضمن بيانات شخصية) أو معالجتها. تتعاقد InvoratecAI مع المعالجين الفرعيين لأداء وظائف متنوعة موضحة في هذه الوثيقة.";
translations.ar.terms.subprocessors.content.ourCommitments.title = "التزاماتنا";
translations.ar.terms.subprocessors.content.ourCommitments.intro = "قبل التعاقد مع أي معالج فرعي، تقوم InvoratecAI بما يلي:";
translations.ar.terms.ai.content.section7.aiSupport = "دعم الذكاء الاصطناعي";
translations.ar.terms.ai.content.section7.privacy = "الخصوصية";
translations.ar.terms.ai.content.section7.general = "عام";
translations.ar.terms.integrations.content.howIntegrationsWork = "كيف تعمل عمليات التكامل";
translations.ar.terms.integrations.content.authentication = "المصادقة";
translations.ar.terms.integrations.content.support = "الدعم";
translations.ar.terms.tos.content.introNote = "باستخدام خدماتنا، فإنك توافق على هذه الشروط. إذا كنت تستخدم الخدمات نيابة عن مؤسسة، فإنك توافق على هذه الشروط نيابة عن تلك المؤسسة.";

// Chinese translations for remaining gaps
translations.zh = {
  terms: {
    developer: {
      content: {
        section5: {
          subsection3: "旨在在本协议终止后继续有效的条款将继续有效。"
        }
      }
    },
    subprocessors: {
      content: {
        whatIsSubprocessor: {
          title: "什么是子处理商？",
          content: "子处理商是 InvoratecAI 聘用的第三方数据处理商，可能有权访问或处理客户数据（可能包括个人数据）。InvoratecAI 聘用子处理商执行本文件中说明的各种功能。"
        },
        ourCommitments: {
          title: "我们的承诺",
          intro: "在聘用任何子处理商之前，InvoratecAI：",
          items: [
            "进行尽职调查以评估其安全和隐私实践",
            "签订书面协议，施加数据保护义务",
            "确保他们就技术和组织措施提供充分保证",
            "对子处理商遵守我们的 DPA 承担全部责任"
          ]
        },
        currentSubprocessors: {
          title: "当前子处理商"
        },
        infrastructureDetails: {
          title: "基础设施详情",
          gcp: {
            title: "Google Cloud Platform",
            intro: "我们的主要基础设施提供商。使用的服务包括：",
            items: [
              "Cloud Functions：后端 API 的无服务器计算",
              "Firestore：用于用户和项目数据的 NoSQL 数据库",
              "Cloud Storage：BIM 模型和附件的文件存储",
              "Cloud Run：Web 服务的容器托管"
            ],
            note: "数据默认存储在 US-Central1 区域。企业客户可以请求特定区域部署。"
          },
          ai: {
            title: "AI 处理",
            intro: "我们的 AI 功能由 Anthropic 的 Claude 模型提供支持。重要说明：",
            items: [
              "AI 查询实时处理，不由 Anthropic 存储",
              "您的数据不用于训练 AI 模型",
              "AI 响应仅基于您的查询上下文生成"
            ]
          }
        },
        regionalConsiderations: {
          title: "区域考虑",
          china: {
            title: "中国区域",
            intro: "对于使用我们中国区域服务 (invoratec.cn) 的客户：",
            items: [
              "数据存储在位于中国大陆的服务器上",
              "可能因合规目的使用不同的子处理商",
              "请联系我们获取中国特定子处理商列表"
            ]
          },
          dataResidency: {
            title: "数据驻留",
            content: "企业客户可以协商特定的数据驻留要求。请联系我们的销售团队了解选项。"
          }
        },
        notificationOfChanges: {
          title: "变更通知",
          intro: "我们将通知您子处理商的任何变更：",
          items: [
            "新子处理商：通过电子邮件提前 30 天通知",
            "移除的子处理商：在此页面更新",
            "重大变更：直接通知组织管理员"
          ],
          note: "您可以在通知期内对新子处理商提出异议。如果我们无法满足您的异议，您可以终止受影响的服务。"
        },
        stayInformed: {
          title: "保持知情",
          intro: "要接收有关子处理商变更的通知：",
          items: [
            "确保您的组织管理员电子邮件在帐户设置中是最新的",
            "定期查看此页面以获取更新",
            "如果您有特定的通知要求，请联系我们"
          ]
        },
        contact: {
          title: "联系方式",
          intro: "有关子处理商的问题：",
          dataProtection: "数据保护",
          legal: "法务",
          general: "一般咨询"
        }
      }
    }
  }
};

// Japanese translations for remaining gaps
translations.ja = {
  terms: {
    developer: {
      content: {
        section5: {
          subsection3: "本契約の終了後も存続することを意図した条項は、引き続き有効です。"
        }
      }
    },
    subprocessors: {
      content: {
        whatIsSubprocessor: {
          title: "サブプロセッサーとは？",
          content: "サブプロセッサーとは、InvoratecAI が委託した第三者のデータ処理者であり、顧客データ（個人データを含む場合があります）にアクセスまたは処理する可能性があります。InvoratecAI は、本書に記載されているさまざまな機能を実行するためにサブプロセッサーを委託しています。"
        },
        ourCommitments: {
          title: "当社のコミットメント",
          intro: "サブプロセッサーを委託する前に、InvoratecAI は：",
          items: [
            "セキュリティとプライバシー慣行を評価するためのデューデリジェンスを実施",
            "データ保護義務を課す書面契約を締結",
            "技術的および組織的措置に関する十分な保証を確認",
            "サブプロセッサーの DPA 遵守について完全な責任を維持"
          ]
        },
        currentSubprocessors: {
          title: "現在のサブプロセッサー"
        },
        infrastructureDetails: {
          title: "インフラストラクチャの詳細",
          gcp: {
            title: "Google Cloud Platform",
            intro: "主要なインフラプロバイダーです。使用されるサービス：",
            items: [
              "Cloud Functions：バックエンド API 用のサーバーレスコンピューティング",
              "Firestore：ユーザーおよびプロジェクトデータ用の NoSQL データベース",
              "Cloud Storage：BIM モデルと添付ファイル用のファイルストレージ",
              "Cloud Run：Web サービス用のコンテナホスティング"
            ],
            note: "データはデフォルトで US-Central1 リージョンに保存されます。エンタープライズのお客様は特定のリージョンへのデプロイをリクエストできます。"
          },
          ai: {
            title: "AI 処理",
            intro: "AI 機能は Anthropic の Claude モデルによって提供されています。重要な注意事項：",
            items: [
              "AI クエリはリアルタイムで処理され、Anthropic には保存されません",
              "お客様のデータは AI モデルのトレーニングには使用されません",
              "AI 応答はクエリコンテキストのみに基づいて生成されます"
            ]
          }
        },
        regionalConsiderations: {
          title: "地域別の考慮事項",
          china: {
            title: "中国リージョン",
            intro: "中国リージョンサービス（invoratec.cn）をご利用のお客様：",
            items: [
              "データは中国本土にあるサーバーに保存されます",
              "コンプライアンス目的で異なるサブプロセッサーが使用される場合があります",
              "中国固有のサブプロセッサーリストについてはお問い合わせください"
            ]
          },
          dataResidency: {
            title: "データレジデンシー",
            content: "エンタープライズのお客様は、特定のデータレジデンシー要件について交渉できます。オプションについては営業チームにお問い合わせください。"
          }
        },
        notificationOfChanges: {
          title: "変更通知",
          intro: "サブプロセッサーの変更についてお知らせします：",
          items: [
            "新しいサブプロセッサー：メールで30日前に通知",
            "削除されたサブプロセッサー：このページで更新",
            "重要な変更：組織管理者に直接通知"
          ],
          note: "通知期間内に新しいサブプロセッサーに異議を申し立てることができます。異議に対応できない場合は、影響を受けるサービスを終了できます。"
        },
        stayInformed: {
          title: "最新情報を入手",
          intro: "サブプロセッサーの変更に関する通知を受け取るには：",
          items: [
            "アカウント設定で組織管理者のメールが最新であることを確認",
            "定期的にこのページで更新を確認",
            "特定の通知要件がある場合はお問い合わせください"
          ]
        },
        contact: {
          title: "お問い合わせ",
          intro: "サブプロセッサーに関するご質問：",
          dataProtection: "データ保護",
          legal: "法務",
          general: "一般"
        }
      }
    }
  }
};

// Process each language
const languages = ['ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar', 'zh', 'ja'];

languages.forEach(function(lang) {
  const filePath = path.join(__dirname, lang + '.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = deepMerge(existing, translations[lang]);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Updated ' + lang + '.json');
});

console.log('All translations updated successfully!');
