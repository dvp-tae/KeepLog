# KeepLog 에이전트 맵

이 문서는 이 저장소에서 작업하는 에이전트를 위한 첫 진입점이다. 세부 규칙을 이 파일에 모두 적지 말고, 아래에 연결된 문서를 따라간다.

## 저장소 구조

- 앱 코드는 `blog/`에 있다
- 콘텐츠 원본은 `post/`에 있다
- 공식 기록 문서는 `docs/`에 있다
- GitHub 워크플로우와 PR 규칙은 `.github/`에 있다
- Codex 전용 작업 가이드는 저장소 루트 `.codex/`에 있다

## 권장 읽기 순서

1. `ARCHITECTURE.md`
2. `docs/product-specs/index.md`
3. `docs/design-docs/core-beliefs.md`
4. `docs/frontend/FRONTEND.md`
5. `docs/testing/TESTING.md`
6. `docs/quality/QUALITY_SCORE.md`
7. `docs/operations/RELIABILITY.md`
8. 현재 작업과 관련된 `docs/exec-plans/active/` 문서

## 기본 명령

명령은 `blog/`에서 실행한다.

- 설치: `pnpm install`
- 개발 서버: `pnpm dev`
- Playwright 확인용 개발 서버: `pnpm dev:pw`
- 검증 빌드: `pnpm typecheck`
- 린트: `pnpm lint`
- 포맷 검사: `pnpm format:check`
- 문서 검사: `pnpm docs:check`
- 전체 검증: `pnpm verify`

## 작업 규칙

- `docs/`를 제품 의도, 설계 규칙, 품질 게이트, 실행 이력의 단일 기준으로 본다
- 단순하지 않은 작업은 코드 수정 전에 실행 계획을 만들거나 갱신한다
- GitHub 이슈를 만들 때 제목과 본문은 항상 한글로 작성한다
- 작업 브랜치명은 `taehyeon/${커밋컨벤션}/${이슈번호}` 형식을 따른다
- PR은 작게 유지한다. 가능하면 사용자 변화 1개 또는 인프라 변화 1개 단위로 나눈다
- 코드 변경이 동작, 아키텍처, 워크플로우, 운영 방식에 영향을 주면 문서도 함께 갱신한다
- 현재 KeepLog는 정적 콘텐츠 중심 웹 앱이므로 백엔드 존재를 전제하지 않는다
- GitHub Pages 경로를 앱 코드에 하드코딩하지 않는다. export 빌드에서는 `PAGES_BASE_PATH`를 사용한다

## 기능 작업 시 절차

1. 관련 제품 명세와 활성 실행 계획을 읽는다
2. 대상 기능이 있는 `blog/src/features`를 확인한다
3. 가장 작은 일관된 변경을 만든다
4. 먼저 좁은 범위 검증을 하고, 머지 가능한 상태라면 `pnpm verify`를 실행한다
5. 실행 계획, 관련 문서, PR 체크리스트를 갱신한다

## 콘텐츠 작업 시 절차

1. `post/`의 Markdown을 수정한다
2. 프론트매터 형식과 slug 안정성을 확인한다
3. `blog/`에서 `pnpm docs:check`와 `pnpm build`를 실행한다
4. 렌더링 결과로 레이아웃이 바뀌면 브라우저 확인도 수행한다

## 관련 문서

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
