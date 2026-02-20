import type {
  CompactItem,
  ResumeSectionLink,
  TimelineItem,
  TimelineOrganization,
} from "./resume.types";

export const sections: ResumeSectionLink[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certification", label: "Certification" },
  { id: "awards", label: "Awards" },
  { id: "activity", label: "Activity" },
];

export const experienceOrganization: TimelineOrganization = {
  name: "(주)케어마인더",
  role: "사원 | 프론트엔드 팀",
};

export const experienceItems: TimelineItem[] = [
  {
    title: "웹 뷰와 Electron을 활용한 데스크탑 애플리케이션 개발",
    period: "2024.03 - 현재",
    summary:
      "Next.js 기반 웹 서비스를 Electron으로 래핑하여 크로스 플랫폼 데스크탑 솔루션을 개발했습니다.",
    tags: ["Electron", "Vite", "TypeScript", "Github release"],
    bullets: [
      "플러그인형 아키텍처를 도입하여 싱글톤 패턴을 적용, 기존 Electron 코드 파일 수를 75% 감소",
      "디버깅 및 기능 수정 작업 시 평균 소요 파일 수를 75% 감소 (68개 -> 12개), 리소스 30% 절감",
      "Electron과 TypeScript 결합을 통해 타입 안정성 100% 확보",
    ],
  },
  {
    title: "Next.js 14 마이그레이션",
    period: "2025.04 - 2025.05",
    summary:
      "SSR을 활용해 초기 로드 속도를 개선하고, 기존 외주 개발 스파게티 코드를 리팩토링했습니다.",
    tags: ["Next.js 14 App Router", "TypeScript", "Tanstack Query", "Zustand"],
    bullets: [
      "라우팅 기반 모달 시스템 도입으로 다수의 boolean 상태 관리를 URL 기반으로 통합하여 코드 가독성 향상",
      "SSR 적용을 통해 초기 페이지 로드 시간 80% 단축 (기존 대비)",
      "TanStack Query prefetching으로 데이터 배칭 최적화, 실시간 대시보드 체감 로딩 시간 최소화",
    ],
  },
];

export const projectItems: TimelineItem[] = [
  {
    title: "일상, 배변 루틴 기록 서비스 Kkruk",
    sub: "Depromeet 17th",
    period: "2025.06 - 2025.11",
    tags: [
      "Next.js 15 App Router",
      "TanstackQuery",
      "react-hook-form",
      "zod",
      "biome",
    ],
    bullets: [
      "루틴 기록의 진입 장벽을 낮추는 인터랙션 중심 입력 플로우 설계",
      "폼 검증/상태/API 계층 분리로 유지보수성 높은 구조 구현",
      "반복 기록 패턴 기반으로 사용자 행동 인사이트 확인 가능하도록 개선",
    ],
  },
  {
    title: "클래식 공연 길잡이 서비스 Claco",
    sub: "한국대학생 IT 경영학회 큐시즘 30기",
    period: "2024.09 - 2024.12",
    tags: [
      "React",
      "TypeScript",
      "TanstackQuery",
      "tailwindCSS",
      "Zustand",
      "PWA",
      "html2canvas",
    ],
    bullets: [
      "공연 큐레이션 및 검색 UX 개선으로 탐색 동선 단축",
      "PWA 도입으로 모바일 접근성과 로딩 성능 개선",
      "html2canvas를 활용한 포스터 저장 기능 구현",
    ],
  },
  {
    title: "데보션 영 마이페이지 개선 과제",
    sub: "SK Telecom 개발자 커뮤니티 데보션",
    period: "2024.08 - 2024.09",
    tags: ["jsp", "jQuery"],
    bullets: [
      "데보션 커뮤니티 활성화와 사용자 동기부여를 위한 마이페이지 개선",
      "사용자 리텐션 향상을 목표로 한 정보 구조 및 화면 흐름 개선",
    ],
  },
];

export const educationItems: CompactItem[] = [
  {
    title: "숭실대학교",
    detail: "소프트웨어학부(학사)",
    period: "2019.03 - 2026.08(졸업예정)",
  },
];

export const certificationItems: CompactItem[] = [
  { title: "OPIC IM1", period: "2025", detail: "English Proficiency" },
  { title: "정보처리기사", period: "2024", detail: "Information Processing" },
];

export const awardItems: CompactItem[] = [
  { title: "kkruk(꾸룩) | 최우수상", period: "2025.11", detail: "디프만 17기" },
  {
    title: "Claco(클라코) | 최우수상",
    period: "2024.12",
    detail: "큐시즘 30기",
  },
  {
    title: "Recipable | 동상",
    period: "2024.09",
    detail: "숭실대학교 캡스톤 경진대회",
  },
];

export const activityItems: CompactItem[] = [
  { title: "디프만 17기 | Web 파트", period: "2025" },
  {
    title:
      "한국대학생 IT 경영학회 큐시즘 31기 | 경영총괄팀장 & 프론트엔드 파트",
    period: "2025",
  },
  {
    title: "한국대학생 IT 경영학회 큐시즘 30기 | 프론트엔드 파트",
    period: "2024",
  },
  { title: "UMC 5th | Web", period: "2023" },
];
