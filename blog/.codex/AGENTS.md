# KeepLog Codex 운영 가이드

이 디렉터리는 `blog` 애플리케이션에서 사용할 Codex 전용 설정 묶음입니다.
목표는 세 가지입니다.

- KeepLog의 실제 기술 스택과 구조를 기준으로 작업 범위를 좁힙니다.
- 스킬과 서브 에이전트가 같은 용어와 기준으로 판단하도록 맞춥니다.
- 문서용 규칙과 실행용 설정이 어긋나지 않게 유지합니다.

## 프로젝트 기준

- 앱 위치: `blog/`
- 프레임워크: Next.js 14 App Router
- 언어: TypeScript
- 스타일링: Emotion
- 디자인 자산: `blog/src/styles/theme.ts`, `blog/src/styles/index.css`
- 화면 구조: `blog/src/features/*` 기반 feature-first 구성
- 콘텐츠 소스: Markdown 게시물 + 포트폴리오/이력서 화면

## 우선 적용 순서

1. `DESIGN.md`
2. 관련 `SKILL.md`
3. 필요 시 `agents/*.toml`

충돌 시 우선순위는 항상 위 순서를 따릅니다.

## 스킬 사용 원칙

- `skills/taste`:
  신규 화면을 만들거나 시각 완성도를 끌어올릴 때 사용합니다.
- `skills/redesign`:
  기존 화면을 유지한 채 단계적으로 다듬을 때 사용합니다.
- `skills/playwright-check`:
  실제 브라우저를 열고 스냅샷/스크린샷 기준으로 UI를 점검할 때 사용합니다.

두 스킬 모두 KeepLog의 실제 제약을 전제로 합니다.

- Tailwind 기준 규칙을 그대로 복사하지 않습니다.
- Emotion styled 컴포넌트와 theme 토큰을 먼저 사용합니다.
- 기존 feature 구조를 무너뜨리는 전면 재작성은 기본값이 아닙니다.

## 서브 에이전트 구성

- `planner`: 작업 범위 정리, 의존성 확인, 실행 순서 수립
- `coder`: App Router, feature, server/client 경계, 데이터 흐름 수정
- `designer`: 화면 구조, 타이포, 상호작용, Emotion 스타일 정리
- `browser-checker`: 실제 브라우저 실행, 화면 캡처, 반응형/다크 모드/UI 회귀 점검
- `reviewer`: 회귀 위험, 복잡도, 테스트/검증 공백 점검

각 에이전트는 자기 역할 밖의 광범위한 재설계를 기본값으로 하지 않습니다.

## 유지보수 규칙

- `blog/package.json` 기준으로 존재하지 않는 라이브러리는 전제하지 않습니다.
- 새 규칙을 추가할 때는 반드시 `DESIGN.md`와 관련 `SKILL.md`를 함께 갱신합니다.
- 에이전트 설명은 추상 문장보다 이 저장소의 실제 경로와 제약을 우선합니다.
