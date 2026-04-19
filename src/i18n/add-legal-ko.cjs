// Script to add Korean legal content translations
const fs = require('fs');
const path = require('path');

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

const koTranslations = {
  terms: {
    backToDocs: "문서로 돌아가기",
    legalPolicies: "보안 및 정책",
    nav: {
      developer: "개발자 약관",
      privacy: "개인정보 처리방침",
      security: "보안 정책",
      cookies: "쿠키 정책",
      terms: "서비스 이용약관",
      dpa: "데이터 처리 계약",
      subprocessors: "하위 처리자",
      ai: "AI 약관",
      integrations: "통합 정책"
    },
    security: {
      title: "보안 정책",
      lastUpdated: "최종 업데이트",
      content: {
        intro: "InvoratecAI에서는 귀하의 데이터 보안을 최우선으로 생각합니다. 이 보안 정책은 BIM AI(Revit 애드인) 및 Web AI(클라우드 플랫폼) 제품 전반에서 귀하의 정보를 보호하기 위해 구현하는 조치를 설명합니다.",
        section1: {
          title: "1. 인프라 보안",
          subsection1: {
            title: "1.1 클라우드 인프라",
            intro: "InvoratecAI는 엔터프라이즈급 보안 기능을 활용하는 Google Cloud Platform(GCP)에서 호스팅됩니다:",
            items: [
              "데이터 센터: SOC 1, SOC 2, SOC 3 인증을 받은 Google의 세계적 수준의 데이터 센터",
              "네트워크 보안: DDoS 보호가 내장된 Google Cloud의 글로벌 네트워크",
              "Cloud Functions: 자동 확장 및 격리 기능이 있는 서버리스 아키텍처",
              "Firebase/Firestore: 엔터프라이즈 보안 및 암호화가 적용된 실시간 데이터베이스"
            ]
          },
          subsection2: {
            title: "1.2 데이터 스토리지",
            intro: "귀하의 BIM 모델, 프로젝트 데이터 및 사용자 정보는 다중 보호 계층으로 저장됩니다:",
            items: [
              "저장 시 암호화: AES-256 암호화를 사용한 모든 데이터 암호화",
              "전송 중 암호화: 모든 데이터 전송에 TLS 1.3 적용",
              "격리 스토리지: 조직 ID별로 분리된 회사 데이터",
              "백업 및 복구: 시점 복구가 가능한 자동 일일 백업"
            ]
          }
        },
        section2: {
          title: "2. 애플리케이션 보안",
          subsection1: {
            title: "2.1 인증 및 접근 제어",
            items: [
              "비밀번호 보안: 보안 키 파생을 사용한 SHA-256 비밀번호 해싱",
              "세션 관리: 자동 타임아웃이 있는 보안 세션 처리",
              "역할 기반 접근: 관리자, 매니저, 사용자 역할 권한",
              "사용자 승인 워크플로우: 새 사용자는 접근 전 관리자 승인 필요"
            ]
          },
          subsection2: {
            title: "2.2 Revit 애드인 보안",
            intro: "BIM AI Revit 플러그인은 추가 보안 조치를 구현합니다:",
            items: [
              "코드 서명: 디지털 서명된 설치 프로그램 및 DLL 파일",
              "로컬 데이터 보호: 보안 스토리지가 적용된 암호화된 로컬 캐시",
              "API 통신: 인증서 피닝이 적용된 HTTPS로 모든 API 호출",
              "오프라인 보안: 자격 증명은 절대 평문으로 저장되지 않음"
            ]
          },
          subsection3: {
            title: "2.3 웹 플랫폼 보안",
            items: [
              "CORS 보호: 엄격한 교차 출처 리소스 공유 정책",
              "XSS 방지: 콘텐츠 보안 정책 헤더 및 입력 새니타이징",
              "CSRF 보호: 토큰 기반 요청 검증",
              "보안 헤더: HSTS, X-Content-Type-Options, X-Frame-Options"
            ]
          }
        },
        section3: {
          title: "3. AI 및 데이터 처리 보안",
          subsection1: {
            title: "3.1 AI 모델 보안",
            intro: "AI 기능(Claude/Anthropic 기반)은 엄격한 데이터 처리 관행을 따릅니다:",
            items: [
              "귀하의 데이터로 학습하지 않음: 귀하의 프로젝트 데이터는 AI 모델 학습에 절대 사용되지 않습니다",
              "임시 처리: AI 쿼리는 실시간으로 처리되며 보관되지 않습니다",
              "프롬프트 필터링: 프롬프트 인젝션 공격을 방지하기 위한 입력 검증",
              "응답 새니타이징: AI 출력은 표시 전에 검증됩니다"
            ]
          },
          subsection2: {
            title: "3.2 서드파티 통합",
            items: [
              "Autodesk 통합: ACC 접근을 위한 범위 권한이 적용된 OAuth 2.0",
              "이메일 서비스: Gmail SMTP를 통한 TLS 암호화 이메일 전송",
              "API 키: 환경 변수에 안전하게 저장되며 클라이언트에 절대 노출되지 않음"
            ]
          }
        },
        section4: {
          title: "4. 운영 보안",
          subsection1: {
            title: "4.1 모니터링 및 로깅",
            items: [
              "접근 로그: 타임스탬프 및 사용자 식별이 포함된 모든 API 접근 로깅",
              "오류 추적: 실시간 오류 모니터링 및 알림",
              "성능 모니터링: Cloud Function 메트릭 및 지연 시간 추적",
              "감사 추적: 사용자 작업 및 데이터 수정에 대한 활동 로그"
            ]
          },
          subsection2: {
            title: "4.2 사고 대응",
            intro: "포괄적인 사고 대응 계획을 유지합니다:",
            items: [
              "탐지: 의심스러운 활동에 대한 자동 알림",
              "대응: 정의된 에스컬레이션 절차 및 대응 팀",
              "커뮤니케이션: 확인된 침해 발생 72시간 이내 고객 통지",
              "복구: 문서화된 복구 절차 및 사후 검토"
            ]
          }
        },
        section5: {
          title: "5. 규정 준수 및 인증",
          items: [
            "GDPR: 유럽 데이터 보호 요구사항 준수",
            "CCPA: 캘리포니아 소비자 개인정보 보호법 준수",
            "클라우드 제공자 인증: GCP의 SOC 2 Type II, ISO 27001, ISO 27017 인증 상속"
          ]
        },
        section6: {
          title: "6. 사용자를 위한 보안 모범 사례",
          intro: "다음 보안 관행을 권장합니다:",
          items: [
            "강력하고 고유한 비밀번호 사용 (대소문자 및 숫자가 혼합된 최소 8자)",
            "Revit 애드인을 최신 버전으로 유지",
            "사용자 접근 권한을 정기적으로 검토",
            "의심스러운 활동을 즉시 보안 팀에 보고",
            "HTTPS로만 웹 플랫폼 사용"
          ]
        },
        section7: {
          title: "7. 보안 연락처",
          intro: "보안 관련 문의 또는 취약점 보고는 다음으로 연락해 주세요:",
          email: "이메일",
          general: "일반 지원"
        }
      }
    },
    privacy: {
      title: "개인정보 처리방침",
      content: {
        intro: "본 개인정보 처리방침은 Invoratec Inc.(\"InvoratecAI,\" \"당사\" 또는 \"저희\")가 귀하의 BIM AI(Revit 애드인), Web AI(클라우드 플랫폼) 및 관련 서비스(통칭 \"서비스\") 이용 시 귀하에 대한 정보를 수집, 사용 및 공유하는 방법을 설명합니다.",
        section1: {
          title: "1. 수집하는 정보",
          subsection1: {
            title: "1.1 귀하가 제공하는 정보",
            items: [
              "계정 정보: 계정 생성 시 이름, 이메일 주소, 회사명, 비밀번호 및 역할",
              "프로젝트 데이터: 업로드하거나 생성하는 BIM 모델, 도면, 프로젝트 정보, 작업 및 협업 콘텐츠",
              "커뮤니케이션: 지원 요청 및 피드백을 포함하여 귀하가 보내는 메시지",
              "결제 정보: 결제 제공업체를 통해 처리되는 청구 세부 정보 (전체 결제 카드 번호는 저장하지 않음)"
            ]
          },
          subsection2: {
            title: "1.2 자동으로 수집되는 정보",
            items: [
              "이용 데이터: 사용된 기능, 수행된 작업, 소요 시간 및 상호작용 패턴",
              "기기 정보: 운영 체제, Revit 버전, 브라우저 유형 및 기기 식별자",
              "로그 데이터: IP 주소, 접근 시간, 조회한 페이지 및 리퍼러 URL",
              "위치 데이터: 서비스 최적화를 위한 IP 주소 기반 일반 지리적 지역"
            ]
          },
          subsection3: {
            title: "1.3 제3자로부터의 정보",
            items: [
              "Autodesk 통합: Autodesk Construction Cloud(ACC)에 연결할 때 귀하가 승인한 프로젝트 데이터를 수신합니다",
              "AI 서비스: AI 쿼리는 귀하의 데이터를 보관하지 않고 Anthropic의 Claude API를 통해 처리됩니다"
            ]
          }
        },
        section2: {
          title: "2. 정보 사용 방법",
          intro: "수집한 정보를 다음과 같이 사용합니다:",
          items: [
            "서비스 제공: BIM AI 및 Web AI 플랫폼 운영 및 유지",
            "AI 쿼리 처리: BIM 모델 분석 및 설계 지원을 위한 AI 어시스턴트 기능 지원",
            "협업 활성화: 팀 협업, 작업 관리 및 모델 공유 촉진",
            "서비스 개선: 기능 및 사용자 경험 향상을 위한 사용 패턴 분석",
            "커뮤니케이션: 서비스 업데이트, 보안 알림 및 지원 메시지 전송",
            "보안 보장: 사기, 남용 및 보안 사고 탐지 및 방지",
            "법률 준수: 법적 의무 이행 및 적법한 요청에 대응"
          ]
        },
        section3: {
          title: "3. 정보 공유 방법",
          subsection1: {
            title: "3.1 서비스 제공업체",
            intro: "서비스 운영을 지원하는 서드파티 서비스 제공업체와 정보를 공유합니다:",
            items: [
              "Google Cloud Platform: 클라우드 인프라 및 데이터 스토리지",
              "Anthropic: 지능형 기능을 위한 AI 처리",
              "이메일 서비스: 트랜잭션 이메일 전송",
              "분석 제공업체: 사용 분석 및 성능 모니터링"
            ]
          },
          subsection2: {
            title: "3.2 조직 내부",
            intro: "조직의 일부로 InvoratecAI를 사용하는 경우:",
            items: [
              "조직 관리자가 구성원 활동을 보고 접근을 관리할 수 있습니다",
              "팀원들이 공유 프로젝트 및 협업 콘텐츠를 볼 수 있습니다",
              "조직 관리자에게 사용 보고서가 제공될 수 있습니다"
            ]
          },
          subsection3: {
            title: "3.3 법적 요구사항",
            content: "법률에 의해 요구되거나 유효한 법적 절차에 대응하여 정보를 공개할 수 있습니다."
          },
          subsection4: {
            title: "3.4 사업 양도",
            content: "합병, 인수 또는 자산 매각의 경우 귀하의 정보는 해당 거래의 일부로 이전될 수 있습니다."
          }
        },
        section4: {
          title: "4. 데이터 보관",
          intro: "필요한 기간 동안 귀하의 정보를 보관합니다:",
          items: [
            "요청하신 서비스 제공",
            "법적 의무 준수",
            "분쟁 해결 및 계약 이행",
            "감사 목적을 위한 사업 기록 유지"
          ],
          note: "계정을 삭제하면 법률에 의해 보관이 요구되는 경우를 제외하고 90일 이내에 귀하의 개인정보를 삭제하거나 익명화합니다."
        },
        section5: {
          title: "5. 귀하의 권리 및 선택",
          subsection1: {
            title: "5.1 접근 및 이동성",
            content: "InvoratecAI 플랫폼을 통해 데이터에 접근하고 프로젝트 및 정보를 내보낼 수 있습니다."
          },
          subsection2: {
            title: "5.2 수정",
            content: "설정을 통해 언제든지 계정 정보 및 프로젝트 데이터를 업데이트할 수 있습니다."
          },
          subsection3: {
            title: "5.3 삭제",
            content: "privacy@invoratec.com으로 연락하여 계정 및 개인 데이터 삭제를 요청할 수 있습니다."
          },
          subsection4: {
            title: "5.4 수신 거부",
            items: [
              "마케팅 이메일: 마케팅 이메일의 링크를 사용하여 수신 거부",
              "분석: 추적을 제한하기 위해 브라우저 설정 조정",
              "쿠키: 쿠키 정책을 통해 환경 설정 관리"
            ]
          },
          subsection5: {
            title: "5.5 지역별 권리",
            content: "유럽경제지역(EEA) 또는 캘리포니아에 거주하시는 경우 GDPR 또는 CCPA에 따라 감독 기관에 불만을 제기할 권리를 포함한 추가 권리가 있습니다."
          }
        },
        section6: {
          title: "6. 국제 데이터 전송",
          intro: "귀하의 정보는 미국을 포함하여 귀하의 거주 국가 이외의 국가로 전송되어 처리될 수 있습니다. 다음을 포함하여 이러한 전송에 적절한 보호 조치를 구현합니다:",
          items: [
            "유럽 위원회가 승인한 표준 계약 조항",
            "적용 가능한 데이터 보호 프레임워크 준수"
          ]
        },
        section7: {
          title: "7. 아동 개인정보",
          content: "당사의 서비스는 16세 미만의 아동을 대상으로 하지 않습니다. 16세 미만의 아동으로부터 개인정보를 고의로 수집하지 않습니다. 16세 미만의 아동으로부터 개인정보를 수집했음을 알게 되면 해당 정보를 삭제합니다."
        },
        section8: {
          title: "8. 본 정책의 변경",
          content: "본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 이 페이지에 새 정책을 게시하고 \"최종 업데이트\" 날짜를 업데이트하여 중요한 변경 사항을 알려드립니다. 이 정책을 정기적으로 검토하시기 바랍니다."
        },
        section9: {
          title: "9. 연락처",
          intro: "본 개인정보 처리방침 또는 당사의 데이터 관행에 대한 질문은 다음으로 문의해 주세요:",
          company: "Invoratec Inc.",
          email: "이메일",
          general: "일반"
        }
      }
    },
    cookies: {
      title: "쿠키 정책",
      content: {
        intro: "본 쿠키 정책은 Invoratec Inc.(\"InvoratecAI,\" \"당사\" 또는 \"저희\")가 웹사이트 및 애플리케이션에서 쿠키 및 유사 기술을 사용하는 방법을 설명합니다. 당사의 서비스를 사용함으로써 귀하는 본 정책에 설명된 대로 쿠키 사용에 동의합니다.",
        section1: {
          title: "1. 쿠키란 무엇인가요?",
          content: "쿠키는 웹사이트를 방문할 때 귀하의 기기(컴퓨터, 태블릿 또는 모바일)에 저장되는 작은 텍스트 파일입니다. 쿠키는 웹사이트가 귀하의 환경 설정을 기억하고 탐색 경험을 개선하는 데 도움을 줍니다.",
          intro: "유사 기술은 다음을 포함합니다:",
          items: [
            "로컬 스토리지: 브라우저에 더 오랜 기간 데이터를 저장합니다",
            "세션 스토리지: 탐색 세션 중에 일시적으로 데이터를 저장합니다",
            "픽셀/웹 비콘: 페이지 방문 및 작업을 추적하는 작은 이미지"
          ]
        },
        section2: {
          title: "2. 사용하는 쿠키 유형",
          subsection1: {
            title: "2.1 필수 쿠키",
            intro: "이 쿠키는 웹사이트가 작동하는 데 필요하며 비활성화할 수 없습니다. 다음을 포함합니다:",
            cookies: [
              { name: "invoratec_user", purpose: "사용자 인증 상태 저장", duration: "세션" },
              { name: "locale", purpose: "언어 환경 설정 저장", duration: "1년" },
              { name: "region", purpose: "지역 환경 설정 저장 (미국/중국)", duration: "1년" },
              { name: "cookie_consent", purpose: "쿠키 환경 설정 기억", duration: "1년" }
            ]
          },
          subsection2: {
            title: "2.2 기능 쿠키",
            intro: "이 쿠키는 향상된 기능 및 개인화를 가능하게 합니다:",
            cookies: [
              { name: "theme", purpose: "라이트/다크 모드 환경 설정 기억", duration: "1년" },
              { name: "recent_projects", purpose: "최근 조회한 프로젝트 저장", duration: "30일" }
            ]
          },
          subsection3: {
            title: "2.3 분석 쿠키",
            intro: "방문자가 웹사이트를 어떻게 사용하는지 이해하기 위해 분석 쿠키를 사용합니다:",
            items: [
              "Google Analytics: 웹사이트 트래픽 및 사용 패턴 이해에 도움",
              "이 쿠키는 페이지 조회, 소요 시간 및 탐색에 대한 익명 데이터를 수집합니다"
            ]
          },
          subsection4: {
            title: "2.4 마케팅 쿠키",
            content: "현재 마케팅 또는 광고 쿠키를 사용하지 않습니다."
          }
        },
        section3: {
          title: "3. 쿠키 관리",
          subsection1: {
            title: "3.1 브라우저 설정",
            content: "브라우저 설정을 통해 쿠키를 제어할 수 있습니다. 대부분의 브라우저에서 다음을 할 수 있습니다:",
            items: [
              "저장된 쿠키를 보고 삭제",
              "서드파티 쿠키 차단",
              "특정 사이트의 모든 쿠키 차단",
              "모든 쿠키 완전히 차단"
            ],
            note: "참고: 필수 쿠키를 차단하면 웹사이트가 제대로 작동하지 않을 수 있습니다."
          },
          subsection2: {
            title: "3.2 쿠키 환경 설정",
            content: "사이트를 처음 방문할 때 쿠키 동의 배너를 사용하여 쿠키 환경 설정을 관리하거나 환경 설정을 업데이트하려면 문의해 주세요."
          }
        },
        section4: {
          title: "4. 서드파티 쿠키",
          content: "사이트의 일부 기능은 서드파티의 쿠키를 설정할 수 있습니다:",
          items: [
            "Google Analytics (분석)",
            "Autodesk (ACC 통합 기능용)",
            "YouTube (삽입된 동영상이 있는 경우)"
          ],
          note: "이 서드파티는 쿠키 사용을 관장하는 자체 개인정보 보호정책이 있습니다."
        },
        section5: {
          title: "5. 쿠키 기간",
          intro: "쿠키마다 수명이 다릅니다:",
          items: [
            "세션 쿠키: 브라우저를 닫으면 삭제됩니다",
            "영구 쿠키: 만료되거나 삭제할 때까지 유지됩니다"
          ]
        },
        section6: {
          title: "6. 본 정책 업데이트",
          content: "본 쿠키 정책을 수시로 업데이트할 수 있습니다. 변경 사항은 업데이트된 개정 날짜와 함께 이 페이지에 게시됩니다."
        },
        section7: {
          title: "7. 연락처",
          intro: "쿠키 사용에 대한 질문:",
          privacy: "개인정보",
          general: "일반"
        },
        tableHeaders: {
          cookieName: "쿠키 이름",
          purpose: "목적",
          duration: "기간"
        }
      }
    },
    developer: {
      title: "개발자 약관",
      content: {
        intro: "InvoratecAI의 개발자 프로그램에 오신 것을 환영합니다! 본 개발자 약관(\"약관\")은 참조로 포함된 다른 약관 및 정책과 함께 Invoratec Inc.(\"InvoratecAI,\" \"당사\" 또는 \"저희\")와 개발자로 등록하는 개인 또는 법인(\"귀하\" 또는 \"개발자\") 간의 구속력 있는 계약입니다.",
        introNote: "\"동의합니다\"를 클릭하거나 API, SDK 또는 개발자 플랫폼을 사용함으로써 귀하는 본 약관에 구속되는 것에 동의합니다.",
        section1: {
          title: "1. 정의",
          items: [
            "\"API\"는 InvoratecAI의 애플리케이션 프로그래밍 인터페이스, SDK 및 첨부 문서를 의미합니다",
            "\"애플리케이션\"은 당사 API를 사용하는 소프트웨어 애플리케이션, 플러그인, 확장 프로그램 또는 통합을 의미합니다",
            "\"고객 데이터\"는 최종 사용자가 InvoratecAI 플랫폼을 통해 제출하는 모든 데이터, 콘텐츠 또는 정보를 의미합니다",
            "\"개발자 플랫폼\"은 개발자 포털, 문서 및 관련 도구를 의미합니다",
            "\"최종 사용자\"는 귀하의 애플리케이션을 사용하는 개인을 의미합니다"
          ]
        },
        section2: {
          title: "2. API 라이선스 부여",
          subsection1: {
            title: "2.1 라이선스",
            intro: "본 약관에 따라 귀하에게 다음을 위한 제한적, 비독점적, 양도 불가능한, 취소 가능한 라이선스를 부여합니다:",
            items: [
              "애플리케이션 개발을 위해 API에 접근하고 사용",
              "문서 및 개발자 도구 사용",
              "브랜드 가이드라인에 따라 InvoratecAI 브랜딩 표시"
            ]
          },
          subsection2: {
            title: "2.2 제한 사항",
            intro: "귀하는 다음을 하지 않기로 동의합니다:",
            items: [
              "API 접근 권한을 재라이선스, 판매 또는 재배포",
              "API를 사용하여 경쟁 제품 생성",
              "속도 제한 또는 접근 제어 우회",
              "API의 일부를 리버스 엔지니어링, 디컴파일 또는 분해",
              "불법적이거나 무단 목적으로 API 사용",
              "API 또는 InvoratecAI 서비스 방해 또는 중단",
              "애플리케이션에 필요한 것 이상으로 고객 데이터에 접근"
            ]
          }
        },
        section3: {
          title: "3. API 접근 및 인증",
          subsection1: {
            title: "3.1 API 키",
            intro: "API에 접근하려면 다음을 수행해야 합니다:",
            items: [
              "개발자 계정 등록",
              "API 자격 증명(API 키 또는 OAuth 토큰) 획득",
              "자격 증명을 안전하고 기밀로 유지",
              "자격 증명이 손상된 경우 즉시 통지"
            ]
          },
          subsection2: {
            title: "3.2 속도 제한",
            intro: "API 사용에는 속도 제한이 적용됩니다:",
            items: [
              "스탠다드 티어: 분당 100 요청",
              "프로페셔널 티어: 분당 1,000 요청",
              "엔터프라이즈 티어: 계약에 따른 커스텀 제한"
            ],
            note: "속도 제한을 초과하면 일시적 또는 영구적으로 API 접근이 정지될 수 있습니다."
          }
        },
        section4: {
          title: "4. 데이터 처리 요구사항",
          subsection1: {
            title: "4.1 고객 데이터 보호",
            intro: "애플리케이션이 고객 데이터에 접근할 때 다음을 수행해야 합니다:",
            items: [
              "최종 사용자가 명시적으로 승인한 데이터에만 접근",
              "데이터를 보호하기 위한 적절한 보안 조치 구현",
              "최종 사용자 요청 시 또는 더 이상 필요하지 않을 때 데이터 삭제",
              "모든 적용 가능한 데이터 보호법(GDPR, CCPA 등) 준수"
            ]
          },
          subsection2: {
            title: "4.2 개인정보 처리방침",
            intro: "다음을 충족하는 개인정보 처리방침을 유지해야 합니다:",
            items: [
              "데이터 수집 및 사용 관행을 정확하게 설명",
              "InvoratecAI API 및 서비스 사용 공개",
              "최종 사용자가 쉽게 접근 가능"
            ]
          },
          subsection3: {
            title: "4.3 BIM 모델 데이터",
            intro: "BIM 모델 데이터에는 특별한 처리가 필요합니다:",
            items: [
              "필요 이상으로 BIM 모델을 저장하지 않음",
              "민감한 프로젝트 데이터에 대한 접근 제어 구현",
              "무단 서드파티와 모델 데이터를 공유하지 않음",
              "설계의 지적 재산권 존중"
            ]
          }
        },
        section5: {
          title: "5. 지적 재산권",
          content: "InvoratecAI는 API, 문서 및 브랜딩에 대한 모든 권리, 소유권 및 이익을 보유합니다. 본 약관의 어떤 내용도 귀하에게 InvoratecAI의 지적 재산에 대한 소유권을 부여하지 않습니다."
        },
        section6: {
          title: "6. 지원",
          content: "개발자 문서 및 커뮤니티 포럼을 통해 개발자 지원을 제공합니다. 엔터프라이즈 개발자는 전용 지원 채널에 접근할 수 있습니다."
        },
        section7: {
          title: "7. 해지",
          content: "당사는 통지와 함께 또는 통지 없이 언제든지 귀하의 API 접근을 일시 정지하거나 해지할 수 있습니다. 해지 시 귀하는 API 사용 및 모든 InvoratecAI 자료 사용을 중단해야 합니다."
        },
        section8: {
          title: "8. 책임 제한",
          content: "법률이 허용하는 최대 범위 내에서 InvoratecAI는 본 약관 또는 API 사용으로 인해 발생하는 간접적, 우발적, 특별, 결과적 또는 징벌적 손해에 대해 책임지지 않습니다."
        },
        section9: {
          title: "9. 연락처",
          intro: "개발자 약관에 대한 질문:",
          email: "이메일"
        }
      }
    },
    dpa: {
      title: "데이터 처리 계약",
      content: {
        intro: "본 데이터 처리 계약(\"DPA\")은 Invoratec Inc.(\"처리자\")와 InvoratecAI 서비스를 사용하는 법인(\"컨트롤러\") 간에 체결됩니다. 본 DPA는 서비스 계약의 일부이며 개인 데이터 처리 관행을 규율합니다.",
        section1: {
          title: "1. 정의",
          items: [
            "\"개인 데이터\"는 식별되거나 식별 가능한 자연인과 관련된 모든 정보를 의미합니다",
            "\"처리\"는 개인 데이터에 대해 수행되는 모든 작업 또는 작업 집합을 의미합니다",
            "\"데이터 주체\"는 개인 데이터와 관련된 식별된 또는 식별 가능한 자연인을 의미합니다",
            "\"하위 처리자\"는 처리자를 대신하여 개인 데이터를 처리하는 서드파티를 의미합니다"
          ]
        },
        section2: {
          title: "2. 처리 범위",
          content: "처리자는 서비스 제공에 필요한 경우에만 컨트롤러를 대신하여 개인 데이터를 처리합니다. 처리되는 개인 데이터의 범주에는 사용자 계정 정보, 프로젝트 데이터 및 사용 로그가 포함됩니다."
        },
        section3: {
          title: "3. 보안 조치",
          intro: "처리자는 다음을 포함한 적절한 기술적 및 조직적 조치를 구현합니다:",
          items: [
            "저장 및 전송 중 데이터 암호화",
            "정기적인 보안 평가 및 테스트",
            "개인 데이터에 대한 접근 제어",
            "직원 보안 교육"
          ]
        },
        section4: {
          title: "4. 하위 처리자",
          content: "처리자는 서비스 제공을 지원하기 위해 하위 처리자를 사용합니다. 승인된 하위 처리자 목록은 하위 처리자 페이지에서 확인할 수 있습니다. 처리자는 새 하위 처리자를 추가하기 전에 컨트롤러에게 통지합니다."
        },
        section5: {
          title: "5. 데이터 주체 권리",
          content: "처리자는 접근, 수정, 삭제 및 이동성에 대한 데이터 주체 요청에 대응하는 데 있어 컨트롤러를 지원합니다."
        },
        section6: {
          title: "6. 데이터 침해",
          content: "처리자는 개인 데이터 침해를 인지한 후 과도한 지체 없이, 가능한 경우 72시간 이내에 컨트롤러에게 통지합니다."
        },
        section7: {
          title: "7. 국제 전송",
          content: "서비스 제공을 위해 개인 데이터는 유럽경제지역 외부로 전송될 수 있습니다. 처리자는 표준 계약 조항을 포함한 적절한 보호 조치를 보장합니다."
        },
        section8: {
          title: "8. 연락처",
          intro: "DPA 관련 질문:",
          email: "이메일"
        }
      }
    },
    subprocessors: {
      title: "하위 처리자",
      content: {
        intro: "InvoratecAI는 다음 하위 처리자를 사용하여 서비스를 제공합니다. 이 목록은 정기적으로 업데이트됩니다.",
        list: [
          { name: "Google Cloud Platform", purpose: "클라우드 인프라 및 데이터 호스팅", location: "미국/글로벌" },
          { name: "Anthropic", purpose: "AI 처리 (Claude API)", location: "미국" },
          { name: "Firebase", purpose: "인증 및 실시간 데이터베이스", location: "미국" },
          { name: "SendGrid", purpose: "이메일 전송", location: "미국" }
        ],
        updates: "새 하위 처리자를 추가하기 전에 이메일로 고객에게 통지합니다.",
        tableHeaders: {
          name: "하위 처리자",
          purpose: "목적",
          location: "위치"
        },
        contact: {
          intro: "하위 처리자에 대한 질문:",
          email: "이메일"
        }
      }
    },
    ai: {
      title: "AI 추가 약관",
      content: {
        intro: "본 AI 추가 약관은 InvoratecAI의 인공지능 기능 사용에 적용됩니다. 서비스 이용약관과 함께 읽어야 합니다.",
        section1: {
          title: "1. AI 기능",
          intro: "InvoratecAI는 다음을 포함한 AI 기반 기능을 제공합니다:",
          items: [
            "BIM 모델 분석 및 설계 제안을 위한 자연어 처리",
            "충돌 감지 및 조정 지원을 위한 AI 어시스턴트",
            "Revit 명령을 위한 음성 제어",
            "프로젝트 데이터 분석 및 인사이트"
          ]
        },
        section2: {
          title: "2. 데이터 사용",
          intro: "AI 기능 관련:",
          items: [
            "AI 쿼리는 응답 생성을 위해 실시간으로 처리됩니다",
            "귀하의 프로젝트 데이터는 AI 모델 학습에 사용되지 않습니다",
            "AI 대화는 서비스 개선을 위해 일시적으로 로깅될 수 있습니다",
            "민감한 데이터가 AI 프롬프트에 포함되지 않도록 조치를 취했습니다"
          ]
        },
        section3: {
          title: "3. AI 제한 사항",
          intro: "다음에 유의해 주세요:",
          items: [
            "AI 응답은 제안이며 전문적인 판단을 대체하지 않습니다",
            "AI가 생성한 설계 제안을 항상 검증해야 합니다",
            "AI 기능에는 가용성 제한이 있을 수 있습니다",
            "AI 기술의 발전에 따라 AI 기능을 업데이트할 수 있습니다"
          ]
        },
        section4: {
          title: "4. 사용자 책임",
          intro: "AI 기능을 사용함으로써 귀하는 다음에 동의합니다:",
          items: [
            "구현 전에 AI 제안 검토",
            "AI 생성 결과에 대한 최종 결정 책임 유지",
            "AI 출력을 부정확하거나 해로운 콘텐츠 생성에 사용하지 않음",
            "AI 관련 문제를 보고"
          ]
        },
        section5: {
          title: "5. 연락처",
          intro: "AI 기능에 대한 질문:",
          email: "이메일"
        }
      }
    },
    integrations: {
      title: "통합 매니저",
      content: {
        intro: "InvoratecAI는 다양한 서드파티 서비스와 통합됩니다. 본 통합 약관은 이러한 통합의 사용을 규율합니다.",
        section1: {
          title: "1. 사용 가능한 통합",
          intro: "현재 통합은 다음을 포함합니다:",
          items: [
            "Autodesk Construction Cloud (ACC): 프로젝트 동기화 및 모델 접근",
            "Autodesk Revit: 직접 애드인 통합",
            "이메일 서비스: 알림 및 보고서 전송"
          ]
        },
        section2: {
          title: "2. 승인",
          content: "통합을 활성화하면 해당 서드파티 서비스와 데이터를 공유하는 것을 승인하는 것입니다. 각 통합에는 고유한 권한 범위가 있으며 활성화 전에 검토해야 합니다."
        },
        section3: {
          title: "3. 서드파티 약관",
          content: "통합된 서비스 사용 시 해당 서드파티의 서비스 약관 및 개인정보 처리방침도 준수해야 합니다."
        },
        section4: {
          title: "4. 데이터 흐름",
          intro: "통합 사용 시:",
          items: [
            "귀하의 데이터는 연결된 서비스와 공유될 수 있습니다",
            "서드파티 데이터가 InvoratecAI로 가져올 수 있습니다",
            "당사는 서드파티 서비스의 데이터 관행을 통제하지 않습니다"
          ]
        },
        section5: {
          title: "5. 연락처",
          intro: "통합에 대한 질문:",
          email: "이메일"
        }
      }
    },
    tos: {
      title: "서비스 이용약관",
      content: {
        intro: "Invoratec Inc.(\"InvoratecAI,\" \"당사\" 또는 \"저희\")가 제공하는 서비스를 이용해 주셔서 감사합니다. 서비스에 접근하거나 사용함으로써 귀하는 본 이용약관에 구속되는 것에 동의합니다.",
        section1: {
          title: "1. 서비스 설명",
          content: "InvoratecAI는 BIM 및 건설 관리를 위한 AI 기반 도구를 제공합니다. 여기에는 Revit 애드인(BIM AI), 클라우드 플랫폼(Web AI) 및 관련 서비스가 포함됩니다."
        },
        section2: {
          title: "2. 계정",
          intro: "서비스를 사용하려면 계정을 생성해야 할 수 있습니다. 귀하는 다음에 동의합니다:",
          items: [
            "정확하고 완전한 등록 정보 제공",
            "계정 자격 증명의 보안 유지",
            "계정 활동에 대한 책임",
            "무단 접근 즉시 통지"
          ]
        },
        section3: {
          title: "3. 허용된 사용",
          intro: "귀하는 다음을 하지 않기로 동의합니다:",
          items: [
            "불법적인 목적으로 서비스 사용",
            "보안 기능 우회 시도",
            "시스템 또는 네트워크 방해",
            "무단 서드파티에게 접근 권한 제공",
            "당사 서비스와 경쟁하는 제품 개발을 위해 사용"
          ]
        },
        section4: {
          title: "4. 결제",
          content: "유료 서비스에 대해 구독 또는 일회성 결제를 제공합니다. 결제는 환불되지 않습니다. 단, 해당 법률에서 요구하는 경우는 예외입니다."
        },
        section5: {
          title: "5. 지적 재산권",
          content: "서비스 및 원본 콘텐츠는 InvoratecAI의 재산입니다. 귀하는 라이선스를 부여받으며 소유권을 획득하지 않습니다."
        },
        section6: {
          title: "6. 해지",
          content: "귀하 또는 당사는 언제든지 계정을 해지할 수 있습니다. 해지 시 귀하의 서비스 접근 권한이 종료됩니다."
        },
        section7: {
          title: "7. 보증 부인",
          content: "서비스는 \"있는 그대로\" 및 \"이용 가능한 대로\" 제공됩니다. 당사는 어떠한 종류의 보증도 하지 않습니다."
        },
        section8: {
          title: "8. 책임 제한",
          content: "법률이 허용하는 최대 범위 내에서 InvoratecAI는 간접적, 우발적, 특별, 결과적 또는 징벌적 손해에 대해 책임지지 않습니다."
        },
        section9: {
          title: "9. 준거법",
          content: "본 약관은 미국 캘리포니아주 법률에 따라 규율되고 해석됩니다."
        },
        section10: {
          title: "10. 연락처",
          intro: "본 약관에 대한 질문:",
          email: "이메일",
          general: "일반"
        }
      }
    }
  }
};

const filePath = path.join(__dirname, 'ko.json');

try {
  let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  content = deepMerge(content, koTranslations);
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log('Updated ko.json with legal content translations');
} catch (err) {
  console.error('Error updating ko.json:', err.message);
}
