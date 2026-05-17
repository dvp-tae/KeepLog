# KeepLog — Claude Code 가이드

이 문서는 Claude Code가 KeepLog 저장소에서 작업할 때 첫 진입점으로 읽는 길잡이다. 세부 규칙은 모두 여기에 담지 말고 아래 연결된 문서를 따라간다. AGENTS.md(루트)와 짝을 이루며, Claude Code 전용 절차/명령은 이 파일이 단일 출처다.

## 프로젝트 개요

KeepLog는 정적 콘텐츠 중심의 Next.js 14 App Router 기반 개인 블로그/포트폴리오 사이트다. 백엔드는 없고 GitHub Pages로 정적 배포된다. 에이전트가 UI·콘텐츠·문서·CI를 낮은 조정 비용으로 반복 개선할 수 있도록 설계된 "하네스 저장소"라는 점이 일반 웹사이트 저장소와 다르다.

## 저장소 구조

```text
/
├── CLAUDE.md            # 이 파일 — Claude Code 전용 진입점
├── AGENTS.md            # 일반 에이전트 진입점 (Codex 포함)
├── ARCHITECTURE.md      # 시스템 구조 개요
├── 하네스엔지니어링.md   # 하네스 방법론 단일 출처 (도구 무관)
├── DESIGN.md            # 시각 언어 단일 출처 (도구 무관)
├── .claude/             # Claude Code 전용 에이전트/스킬/설정
├── .codex/              # Codex 전용 에이전트/스킬/설정
├── .github/             # 워크플로우, PR 템플릿
├── blog/                # Next.js 14 앱 (App Router)
│   ├── src/
│   │   ├── app/         # 라우트 엔트리
│   │   ├── features/    # feature-first 구현 (blog/home/layout/projects/resume)
│   │   ├── components/  # 공용 컴포넌트
│   │   ├── lib/         # Markdown 처리 등 공용 로직
│   │   ├── providers/   # Context/Provider
│   │   └── styles/      # theme.ts, index.css, reset.css
│   ├── public/
│   └── package.json
├── post/                # Markdown 원본 게시물
├── docs/                # 제품/디자인/품질/운영 문서
└── scripts/             # check-docs.mjs 등 저장소 도구
```

## 핵심 기술 스택

- 프레임워크: Next.js 14 (App Router)
- 언어: TypeScript
- 스타일: Emotion (`@emotion/react`, `@emotion/styled`) + theme 토큰
- 콘텐츠: `gray-matter` + `remark` 기반 Markdown 렌더
- 3D/그래픽: `three` (Home Scene 등)
- 패키지 매니저: pnpm 8.15

새 라이브러리를 import하기 전에 반드시 `blog/package.json`을 확인한다.

## 권장 읽기 순서

1. `하네스엔지니어링.md` — 하네스 방법론 (왜 이렇게 일하는가)
2. `ARCHITECTURE.md`
3. `DESIGN.md` — 시각 언어 단일 출처
4. `docs/product-specs/index.md`
5. `docs/design-docs/core-beliefs.md`
6. `docs/frontend/FRONTEND.md`
7. `docs/testing/TESTING.md`
8. `docs/quality/QUALITY_SCORE.md`
9. `docs/operations/RELIABILITY.md`
10. 현재 작업과 관련된 `docs/exec-plans/active/` 문서

## 기본 명령

명령은 `blog/`에서 실행한다.

- 설치: `pnpm install`
- 개발 서버: `pnpm dev`
- Playwright 확인용 개발 서버: `pnpm dev:pw` (포트 3001)
- 타입체크: `pnpm typecheck`
- 린트: `pnpm lint`
- 포맷 검사: `pnpm format:check`
- 문서 검사: `pnpm docs:check`
- 전체 검증: `pnpm verify`

저장소 루트에서는 `pnpm check:*` 래퍼도 사용할 수 있다 (`check:format`, `check:type`, `check:lint`, `check:build`, `check:commit`, `check:push`).

## 작업 규칙

- `docs/`를 제품 의도, 설계 규칙, 품질 게이트, 실행 이력의 단일 기준으로 본다
- 단순하지 않은 작업은 코드 수정 전에 실행 계획(`docs/exec-plans/active/*`)을 만들거나 갱신한다
- GitHub 이슈를 만들면 바로 해당 이슈 번호를 포함한 작업 브랜치를 생성해 연동한다
- GitHub 이슈와 PR을 만들 때는 작성자를 자동 Assign 한다
- PR 본문에는 연관 이슈를 닫는 `close #이슈번호`를 항상 포함한다
- PR은 작게 유지한다. 가능하면 사용자 변화 1개 또는 인프라 변화 1개 단위로 나눈다
- 코드 변경이 동작·아키텍처·워크플로우·운영 방식에 영향을 주면 문서도 함께 갱신한다
- KeepLog는 정적 콘텐츠 중심 웹 앱이므로 백엔드 존재를 전제하지 않는다
- GitHub Pages 경로를 앱 코드에 하드코딩하지 않는다. export 빌드에서는 `PAGES_BASE_PATH`를 사용한다

## 기능 작업 절차

1. 관련 제품 명세와 활성 실행 계획을 읽는다
2. 대상 기능이 있는 `blog/src/features/*`를 확인한다
3. server/client 경계, 데이터 흐름, 스타일 영향 범위를 구분한다
4. 가장 작은 일관된 변경을 만든다
5. 좁은 범위 검증을 먼저 하고, 머지 가능한 상태라면 `pnpm verify`를 실행한다
6. UI 변경이 있으면 브라우저 확인을 수행한다 (`playwright-check` 스킬 참고)
7. 실행 계획·관련 문서·PR 체크리스트를 갱신한다

## 콘텐츠 작업 절차

1. `post/`의 Markdown을 수정한다
2. 프론트매터 형식과 slug 안정성을 확인한다
3. `blog/`에서 `pnpm docs:check`와 `pnpm build`를 실행한다
4. 렌더링 결과로 레이아웃이 바뀌면 브라우저 확인도 수행한다

## 스타일링 규칙

- 색상·간격·타이포 값은 `blog/src/styles/theme.ts`와 `blog/src/styles/index.css` 토큰을 우선 재사용한다
- Tailwind 유틸리티 규칙을 Emotion 코드에 복붙하지 않는다
- 스타일 수정은 가능하면 해당 feature의 `styles/*.ts`에 모은다
- 공통 규칙이면 `src/styles/index.css` 또는 공용 컴포넌트로 올린다

## 검증 모델

- 로컬: `pnpm format:check`, `pnpm docs:check`, `pnpm typecheck`, `pnpm lint`, `pnpm build`, `pnpm verify`
- UI 영향이 있는 변경은 정식 시각 회귀 테스트가 없더라도 실제 브라우저 확인을 하네스의 일부로 본다
- CI는 PR과 `main` 푸시에 실행되며, GitHub Pages 배포는 `main`에서만 동작한다

## Claude Code 에이전트와 스킬

`.claude/agents/`와 `.claude/skills/`에 KeepLog 전용 서브에이전트·스킬이 들어 있다. 광범위한 재작성은 사용자가 명시적으로 원할 때만 한다.

### 서브에이전트

- `planner`: 작업 범위 정리, 의존성 확인, 실행 순서 수립
- `coder`: App Router, feature, server/client 경계, 데이터 흐름 수정
- `designer`: 화면 구조, 타이포, 상호작용, Emotion 스타일 정리
- `browser-checker`: 실제 브라우저 실행, 화면 캡처, 반응형/다크 모드/UI 회귀 점검
- `reviewer`: 회귀 위험, 복잡도, 테스트/검증 공백 점검
- `product-manager`: 범위·우선순위·수용 기준 정리
- `ux-researcher`: UI 피드백을 실행 가능한 변경으로 번역

### 스킬

- `taste`: 신규 화면이나 시각 완성도 향상이 필요할 때
- `redesign`: 기존 화면을 유지한 채 단계적으로 다듬을 때
- `playwright-check`: 실제 브라우저 기반 UI 점검

스킬 충돌 시 우선순위는 `DESIGN.md` > `.claude/skills/<name>/SKILL.md` > 에이전트 instruction 순서다.

## 관련 문서

- 하네스 방법론: `하네스엔지니어링.md`
- 시각 언어/디자인 토큰 단일 출처: `DESIGN.md`
- 시스템 개요: `ARCHITECTURE.md`
- 디자인 원칙: `docs/design-docs/core-beliefs.md`
- 실행 계획 운영: `docs/exec-plans/README.md`
- 품질 기준: `docs/quality/QUALITY_SCORE.md`
- 신뢰성: `docs/operations/RELIABILITY.md`
- 보안: `docs/operations/SECURITY.md`
- 프론트엔드 규칙: `docs/frontend/FRONTEND.md`
- 테스트 전략: `docs/testing/TESTING.md`
- 관측 가능성: `docs/observability/OBSERVABILITY.md`
- 실제 작업 흐름: `docs/operations/HARNESS_WORKFLOW.md`
