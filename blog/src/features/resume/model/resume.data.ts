import type {
  ResumeCareerGroup,
  ResumeCertification,
  ResumeEducation,
  ResumeExperienceYear,
  ResumeHero,
  ResumeProject,
  ResumeSkillGroup,
  ResumeStrengths,
} from "./resume.types";

export const hero: ResumeHero = {
  name: "성태현 (Sung Tae Hyeon)",
  role: "사용자 경험과 서비스 완성도 향상에 집중하는 프론트엔드 개발자입니다.",
  quote:
    "창업팀에서 1년간 실제 서비스를 개발·운영하며 Next.js 기반 구조 개선과 사용자 흐름 최적화를 진행했습니다. 600여 명 규모 운영 환경에서 서비스 품질과 유지보수성을 함께 고민한 경험을 지향합니다.",
  summary: [
    "문제의 증상을 화면 단위가 아니라 구조 단위로 다시 정의하고, 제품이 장기적으로 유지될 수 있는 경계를 만드는 데 강점이 있습니다.",
    "웹과 앱, Electron, WebView 환경을 오가며 인증, 상태, 배포, 성능 이슈를 사용자 경험 관점에서 정리해 왔습니다.",
  ],
  contacts: [
    {
      label: "Phone",
      value: "010-5380-3018",
      href: "tel:01053803018",
    },
    {
      label: "Email",
      value: "sungth3016@gmail.com",
      href: "mailto:sungth3016@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/dvp-tae",
      href: "https://github.com/dvp-tae",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/dvptae",
      href: "https://www.linkedin.com/in/dvptae",
    },
  ],
};

export const strengths: ResumeStrengths = {
  tags: [
    "# Frontend Architecture",
    "# WebView Hybrid",
    "# Performance Optimization",
  ],
  bullets: [
    "실서비스 운영 환경에서 아키텍처 리팩토링을 통해 안정성과 유지보수성을 개선한 경험이 있습니다.",
    "WebView와 Native 환경에서 브리지 구조 설계 및 상태 동기화 문제를 해결한 경험이 있습니다.",
    "Electron 기반 앱에서 플랫폼 레이어 설계 및 인증 구조 단순화 경험이 있습니다.",
    "성능 및 구조 개선을 통해 TTI 단축, 디버깅 난이도 감소 등 정량적 성과를 만든 경험이 있습니다.",
  ],
};

export const careerGroups: ResumeCareerGroup[] = [
  {
    organization: "(주)케어마인더",
    tenure: "25.03 - now",
    entries: [
      {
        title: "웹 뷰 기반 인증 구조 단순화를 위한 Electron 아키텍처 재설계",
        period: "2025.05 - 2025.06",
        tags: [
          "Next.js 14 App Router",
          "TypeScript",
          "Electron",
          "SSE",
          "Vite",
          "GitHub Release",
        ],
        bullets: [
          {
            lead: "인증 토큰 발급과 실제 API 요청 주체가 분산돼 로그인 책임 경계가 흐렸습니다.",
            detail:
              "인증 WebView를 중심으로 재구성하고 Electron을 토큰 저장소 역할로 한정해 인증 흐름을 단순화하고 책임 경계를 명확히 했습니다.",
          },
          {
            lead: "Electron이 인증·비즈니스 로직·토큰 저장을 함께 포함해 플랫폼 레이어와 서비스 레이어 경계가 모호했습니다.",
            detail:
              "Electron을 창 관리·업데이트·로컬 저장만 담당하는 플랫폼 레이어로 재정의해 서비스 로직과 분리된 구조로 개선했습니다.",
          },
          {
            lead: "기존 코드는 구조가 비정형적으로 구성되어 디버깅 난이도와 수정 비용이 큰 상태였습니다.",
            detail:
              "플러스 기반 구조와 책임 분리 원칙을 적용해 리팩토링했고, 디버깅 수정 파일 수를 68개에서 12개로 줄여 약 94.8% 개선했습니다.",
          },
          {
            lead: "수동 배포 기반 운영 프로세스로 인해 배포 공수와 운영 리소스가 반복적으로 발생했습니다.",
            detail:
              "GitHub Release 기반 자동 배포 체계를 정리해 업데이트 전달을 일원화하고, 수동 배포 의존도를 낮췄습니다.",
          },
        ],
      },
      {
        title: "CareVoice 서비스 운영 안정화를 위한 앱 아키텍처 리팩토링",
        period: "2026.02 - 2026.03",
        tags: ["react-native", "TypeScript", "Jest", "expo-router", "firebase"],
        bullets: [
          {
            lead: "WebView, 인증, FCM, 앱 모달, 백그라운드 동기화 책임이 RootLayout과 hook들에 흩어져 장애 원인 추적이 어려웠습니다.",
            detail:
              "runtime / service / shared utils 구조로 재편하고 실행 흐름을 재구성해 관심사와 책임 경계를 분명히 했습니다.",
          },
          {
            lead: "WebView와 Native, FCM, 앱 메시지 규약이 암묵적으로 관리돼 payload 변경이 런타임 이슈로 이어졌습니다.",
            detail:
              "메시지 스펙을 타입으로 표준화하고 브리지 로직을 서비스 계층으로 이동해 변경 영향이 컴파일 단계에서 드러나도록 정리했습니다.",
          },
          {
            lead: "인증, 세션 종료, 토큰 갱신 로직이 저장소 접근과 라우팅에 결합돼 중복 처리와 오류 대응이 어려웠습니다.",
            detail:
              "TokenService / SessionService / 인터셉터 구조로 통합해 단일 인증 흐름으로 단순화했습니다.",
          },
          {
            lead: "리팩토링 이후 구조 검증을 위한 자동화 검증 기반이 부족했습니다.",
            detail:
              "Jest 테스트를 0개에서 28개로 확장했고, 주요 기능 97% 이상과 공통 유틸 100% 수준 점검으로 안정성을 보강했습니다.",
          },
        ],
      },
      {
        title:
          "Jenkins에서 GitHub Actions로 전환한 모노레포 CI/CD 아키텍처 구축",
        period: "2026.02",
        tags: ["GitHub Actions", "Docker", "NCP Registry", "Monorepo"],
        bullets: [
          {
            lead: "Jenkins 단일 파이프라인은 책임 분리가 약하고 장애 원인 추적이 어려운 구조였습니다.",
            detail:
              "GitHub Actions로 전환하면서 체크를 모듈화하고 개발 서버·운영 서버 각각에 맞는 Lint·CI·CD 단계를 분리했습니다.",
          },
          {
            lead: "변경 영향과 무관하게 전체 빌드가 수행돼 불필요한 빌드 반복과 배포 비용이 발생했습니다.",
            detail:
              "paths-filter와 matrix 전략을 적용해 변경 서비스만 선택적으로 빌드·배포하도록 최적화했습니다.",
          },
          {
            lead: "수동 배포 중심 프로세스로 인해 운영 중 장애 대응 속도가 제한적이었습니다.",
            detail:
              "Nginx 기반 prepare -> switch -> rollback 배포 전략과 알림 연동을 도입해 배포 리드타임을 약 60% 단축했습니다.",
          },
        ],
      },
      {
        title: "CareNote 간호사 음성 인수인계 자동 차트화 서비스 개발",
        period: "2026.03 - 진행 중",
        tags: ["Next.js", "react-native", "TypeScript"],
        bullets: [
          {
            lead: "간호사 인수인계는 구두 전달과 수기 기록에 의존해 정보 전달 오류와 누락 위험이 존재했습니다.",
            detail:
              "분당서울대병원·세브란스병원 관계자 인터뷰와 KIMES 리서치를 바탕으로 음성 입력 기반 인수인계 자동 차트 문제를 정의했습니다.",
          },
          {
            lead: "인수인계 기록을 효율적으로 남기기 어려워 기록 입력이 부담이 되는 흐름이 있었습니다.",
            detail:
              "녹음 기록, 전사 확인, 요약으로 이어지는 음성 기반 입력 흐름을 설계하고 전환 UX를 정리했습니다.",
          },
          {
            lead: "모바일 브라우저와 디바이스별로 녹음 기능 동작 편차가 컸습니다.",
            detail:
              "MediaRecorder 제약 차이를 고려해 audioType(webm/mp4) 정책 테이블을 설계하고 브라우저·OS별 대응 구조를 정비했습니다.",
          },
          {
            lead: "현재 의료 현장 요구를 검증하기 위한 MVP 기반 실험을 진행 중입니다.",
            detail:
              "앱 스토어 출시와 병원 B2B 확장을 목표로 기능 확정과 배포 준비, 크레딧 기반 결제 구조 검토를 병행하고 있습니다.",
          },
        ],
      },
      {
        title: "CareVoice 웹뷰 아키텍처 리팩토링",
        period: "2026.01 - 2026.02",
        tags: ["Next.js 14 App Router", "TypeScript", "Jest", "Zustand"],
        bullets: [
          {
            lead: "기능이 페이지 단위로 분산되어 변경 영향 범위를 예측하기 어려웠습니다.",
            detail:
              "FSD 관점으로 도메인·기능 단위를 재편해 변경 영향 반경을 줄이고 유지보수성을 높였습니다.",
          },
          {
            lead: "상태 관리가 일관되지 않아 prop drilling과 로직 중복이 반복됐습니다.",
            detail:
              "Zustand 기반 상태 관리 구조를 재배치해 흐름을 단순화하고 코드 가독성을 높였습니다.",
          },
          {
            lead: "성능 병목 구간이 명확하지 않아 초기 로딩 경험이 저하됐습니다.",
            detail:
              "LightHouse 기반 병목 분석 후 코드 스플리팅과 렌더링 최적화를 적용해 초기 경험을 개선했습니다.",
          },
          {
            lead: "테스트 기반이 약해 회귀 위험이 큰 상태였습니다.",
            detail:
              "핵심 브리지와 인증 흐름을 중심으로 Jest 테스트를 설계해 회귀 방지 기반을 구축했습니다.",
          },
        ],
      },
    ],
  },
];

export const projects: ResumeProject[] = [
  {
    organization: "디프만 17기",
    period: "25.08 - 25.11",
    title:
      "일상·배변 루틴 데이터를 기반으로 장 건강을 분석하는 AI 리포트 서비스, kkruk",
    summary:
      "일상 행동 패턴 속에서 건강 데이터를 더 쉽게 남기게 만드는 개인 기록형 AI 리포트 제품입니다.",
    tags: [
      "Next.js 15 App Router",
      "Tanstack Query",
      "react-hook-form",
      "zod",
      "biome",
    ],
    bullets: [
      "react-hook-form 기반으로 단계형 입력 플로우를 설계해 6개 섹션을 단일 폼 컨텍스트에서 일관되게 관리했습니다.",
      "입력 타입과 렌더링 전략을 분리하고, 커스텀 셀렉트·텍스트 입력을 제어 컴포넌트로 정리해 재사용성을 높였습니다.",
      "폼 상태 구독 범위를 필드 단위로 줄여 최대 7개 수준이던 불필요 렌더링을 구조적으로 완화했습니다.",
    ],
  },
  {
    organization: "큐시즘 31기",
    period: "25.02 - 25.06",
    title: "AISAC 스토리보드 개선 프로젝트",
    summary:
      "한국방송광고진흥공사 Kobaco 스토리보드 제작 AI 서비스 개선 과제입니다.",
    tags: ["React", "TypeScript", "framer-motion", "tailwindCSS"],
    bullets: [
      "PM, 개발, 디자인 파트 간 소통을 책임지며 전반적인 타임라인과 업무 프로세스를 함께 조율했습니다.",
      "태블릿 환경에 최적화된 반응형 편집기와 motion 상호작용을 적용해 스토리보드 사용 경험을 개선했습니다.",
      "광고 카테고리 입력 기반 AI 키워드 추천 기능을 구현해 실무 자동화 아이디어를 제품 흐름에 녹였습니다.",
    ],
  },
  {
    organization: "큐시즘 30기",
    period: "24.08 - 24.12",
    title: "클래식 공연 길잡이 서비스, Claco",
    summary:
      "진입 장벽이 높은 클래식 공연 탐색을 돕기 위해 취향 기반 큐레이션을 제공한 서비스입니다.",
    tags: [
      "React",
      "TypeScript",
      "tailwindCSS",
      "Tanstack Query",
      "Zustand",
      "PWA",
    ],
    bullets: [
      "프론트엔드 리드로 설계 기준을 정리하고 PWA 기반 접근성을 도입해 모바일 탐색 경험을 다듬었습니다.",
      "디바운스 기반 검색 자동 완성과 공연 키워드 기반 필터 흐름을 구성해 탐색 동선을 짧게 만들었습니다.",
      "html2canvas를 활용한 포스터 저장 기능과 이미지 지연 로딩을 적용해 사용성과 리소스 효율을 함께 챙겼습니다.",
    ],
  },
  {
    organization: "SKT DevOcean",
    period: "24.08 - 24.09",
    title: "DevOcean 마이페이지 개선 프로젝트",
    summary:
      "SK Telecom 개발자 커뮤니티 DevOcean의 회원 활성화를 목표로 한 마이페이지 개선 과제입니다.",
    tags: ["jsp", "jQuery"],
    bullets: [
      "사용자 활동 요약, 월간/주간 랭킹, 대표 리뷰를 한 화면에서 탐색할 수 있는 정보 구조를 제안했습니다.",
      "랭킹 페이지에 무한 스크롤을 적용해 사용성 체감을 개선했습니다.",
      "jsp와 jQuery 기반 레거시 환경에서도 서비스 품질 개선이 가능한 협업 방식을 경험했습니다.",
    ],
  },
];

export const skillGroups: ResumeSkillGroup[] = [
  {
    label: "Core",
    items: ["Next.js", "React", "TypeScript", "React Native", "Electron"],
  },
  {
    label: "App / Platform",
    items: ["Tanstack Query", "Zustand"],
  },
  {
    label: "Testing / Architecture",
    items: ["Jest", "Storybook", "Monorepo"],
  },
  {
    label: "DevOps / Tooling",
    items: ["GitHub Actions", "Docker", "Jenkins", "Figma"],
  },
];

export const education: ResumeEducation = {
  school: "숭실대학교",
  program: "소프트웨어학부(학사)",
  period: "2019.03 - 2026.08(졸업예정)",
};

export const certifications: ResumeCertification[] = [
  { year: "2025", name: "OPIC IM1" },
];

export const experienceTimeline: ResumeExperienceYear[] = [
  {
    year: "2025",
    items: [
      {
        title: "디프만",
        organization: "대학생 IT 직장인 연합 사이드 프로젝트 동아리",
        period: "2025.08 - 2025.11",
        bullets: ["17기 Web 파트 활동", "kkruk 서비스 개발", "최우수상 수상"],
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "큐시즘",
        organization: "한국대학생 IT 경영학회",
        period: "2024.08 - 2025.06",
        bullets: [
          "31기 경영총괄팀장 수행",
          "학회 운영 전반 총괄, 행사 기획/사무/대관/회계 관리 및 의사결정 책임",
          "네트워킹 행사 기획·운영으로 회원 간 유대 강화 및 커뮤니티 활성화",
          "OB 네트워킹 프로그램 신규 기획·도입으로 학회 발전 기여",
          "30기, 31기 프론트엔드 파트 활동",
          "Claco 서비스 개발(30기) 및 최우수상 수상",
          "SK Telecom DevOcean, Kobaco AISAC 기업협력 과제 수행",
          "Progressive Web App 기반 발표로 학회 내 개발 커뮤니티 기여",
          "이력서/자기소개서 작성 역량 강화 스터디 참여",
        ],
      },
      {
        title: "숭실대학교 캡스톤 경진 대회",
        period: "2024.09",
        bullets: [
          "자취생을 위한 레시피 추천 및 식재료 관리 서비스 Recipable 개발",
          "동상 수상",
        ],
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "UMC",
        organization: "대학생 IT 동아리",
        period: "2023.10 - 2024.02",
        bullets: ["숭실대 지부 5기 Web 파트 활동", "React 스터디 참여"],
      },
    ],
  },
];
