# KeepLog 하네스 아키텍처

## 목적

KeepLog는 단순한 웹사이트 저장소가 아니다. UI, 콘텐츠, 테스트, 문서, CI, 배포를 에이전트가 낮은 조정 비용으로 반복 개선할 수 있도록 설계된 저장소다.

이 하네스는 다음 문제를 해결하기 위해 존재한다.

- 제품 의도가 대화, 커밋, 일부 문서에 흩어져 사라지는 문제
- 코드가 문서보다 빨리 바뀌며 드리프트가 생기는 문제
- UI 작업을 반복 가능한 방식으로 검증하기 어려운 문제
- 명령, 디렉터리, 책임 범위가 암묵적이라 자동화가 쉽게 깨지는 문제

## 시스템 개요

```text
사용자 요청
  -> AGENTS.md 확인
  -> 제품/디자인 문서 확인
  -> 실행 계획 확인 또는 생성
  -> blog/ 또는 post/ 구현
  -> 로컬 검증
      -> format/docs/build 중심 검증
      -> UI 변경 시 브라우저 확인
  -> 문서 갱신
  -> PR 템플릿 기반 정리
  -> CI 검증
  -> main 기준 GitHub Pages 배포
```

## 저장소 레이아웃

```text
/
|-- AGENTS.md
|-- ARCHITECTURE.md
|-- .github/
|   |-- PULL_REQUEST_TEMPLATE.md
|   `-- workflows/
|       |-- ci.yml
|       `-- deploy-pages.yml
|-- blog/
|   |-- package.json
|   |-- next.config.js
|   |-- src/
|   |-- public/
|   `-- .codex/
|-- post/
|-- scripts/
|   `-- check-docs.mjs
`-- docs/
    |-- design-docs/
    |-- exec-plans/
    |   |-- active/
    |   `-- completed/
    |-- frontend/
    |-- observability/
    |-- operations/
    |-- product-specs/
    |-- quality/
    |-- references/
    |-- testing/
    `-- generated/
```

## 문서 모델

- `AGENTS.md`는 정책 백과사전이 아니라 길잡이 문서다
- `ARCHITECTURE.md`는 시스템 구조와 디렉터리 책임을 설명한다
- `docs/product-specs/`는 사용자 관점의 제품 동작 기준을 담는다
- `docs/design-docs/`는 디자인 원칙과 구조적 결정을 담는다
- `docs/exec-plans/`는 진행 중인 계획과 완료된 계획을 관리한다
- `docs/quality/`, `docs/testing/`, `docs/operations/`, `docs/observability/`는 운영 규칙을 담는다
- `docs/operations/HARNESS_WORKFLOW.md`는 실제 작업 절차와 예시를 담는다
- `docs/generated/`는 기계 생성 보고서나 요약용으로 남겨 두며 수동 수정 대상이 아니다

## 검증 모델

로컬 검증은 에이전트가 읽고 실행하기 쉬운 명령 기반으로 맞췄다.

- `pnpm format:check`
- `pnpm docs:check`
- `pnpm typecheck`
- `pnpm lint`
- `pnpm build`
- `pnpm verify`

UI에 영향을 주는 변경은 정식 시각 회귀 테스트가 아직 없더라도 브라우저 확인을 하네스의 일부로 본다.

## 배포 모델

- CI는 PR과 `main` 푸시에 실행된다
- GitHub Pages 배포는 `main`에서만 실행된다
- export 빌드는 `GITHUB_PAGES=true`와 `PAGES_BASE_PATH`를 사용해 저장소명 경로를 하드코딩하지 않고도 배포할 수 있게 했다
- Markdown 콘텐츠만 바뀐 경우에도 앱 코드를 수정하지 않고 배포 가능해야 한다

## 역할 분리

- 사람은 범위를 정하고, 큰 아키텍처 변경을 승인하고, 고위험 변경을 리뷰한다
- 에이전트는 문서화된 제약 안에서 구현하고, 계획을 갱신하고, 코드와 문서를 맞춘다
- 문서와 코드가 다를 때는 조용히 추정하지 않고 PR에 불일치를 명시한다
