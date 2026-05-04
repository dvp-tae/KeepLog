# 하네스 작업 흐름

## 목적

이 문서는 KeepLog에서 하네스 엔지니어링을 실제로 사용하는 방법을 예시 중심으로 설명한다.

## 기본 흐름

1. 요청을 받으면 `AGENTS.md`와 관련 문서를 먼저 읽는다
2. 단순 작업이 아니면 `docs/exec-plans/active/`에 계획 문서를 만든다
3. 코드를 수정한다
4. 필요한 검증을 실행한다
5. 계획과 문서를 갱신한다
6. 규칙에 맞는 커밋 메시지로 커밋한다
7. 브랜치를 푸시하고 PR을 만든다

## 예시 1: 새 블로그 태그 필터 기능 추가

### 시작

- `docs/product-specs/`에 태그 필터 요구사항이 있는지 확인한다
- 없으면 먼저 간단한 명세를 추가한다
- `docs/exec-plans/active/2026-04-xx-tag-filter.md` 같은 계획 문서를 만든다

### 구현

- `blog/src/features/blog/` 아래 기존 구조를 우선 활용한다
- 태그 데이터는 `blog/src/lib/posts.ts`에서 가져올지 검토한다
- UI가 바뀌므로 브라우저 확인 대상 라우트를 계획에 적는다

### 검증

- `pnpm verify`
- 브라우저에서 `/blog` 확인
- 모바일 viewport에서도 필터 동작 확인

### 마무리

- 계획 문서의 단계와 검증 결과를 갱신한다
- 필요하면 `docs/frontend/FRONTEND.md` 또는 제품 명세 문서도 함께 갱신한다
- 커밋 메시지 예시: `feat(blog): add tag filter to blog list`

## 예시 2: 글 수정 후 배포까지 진행

### 시작

- `post/`의 Markdown 파일을 수정한다
- 프론트매터와 slug가 유지되는지 본다

### 검증

- `pnpm --dir blog docs:check`
- `pnpm --dir blog build`

### 마무리

- 콘텐츠 성격상 실행 계획이 필요 없을 수도 있지만, 발행 흐름 자체를 바꾸는 작업이면 계획을 만든다
- 커밋 메시지 예시: `docs(content): update markdown workflow post`

## 예시 3: GitHub Pages 배포 오류 수정

### 시작

- `docs/operations/RELIABILITY.md`와 `ARCHITECTURE.md`를 먼저 읽는다
- 오류 증상과 실패한 워크플로우 단계를 실행 계획에 적는다

### 구현

- `blog/next.config.js`, `.github/workflows/deploy-pages.yml`, 관련 앱 코드를 좁게 확인한다
- 정적 호스팅 제약과 충돌하는 미들웨어, 서버 전용 기능이 있는지 본다

### 검증

- `pnpm verify`
- `GITHUB_PAGES=true PAGES_BASE_PATH=/KeepLog pnpm --dir blog build`

### 마무리

- 실패 원인과 해결 방식을 계획 문서 결정 로그에 남긴다
- 커밋 메시지 예시: `fix(deploy): align pages export settings`

## 문서를 쌓아가는 팁

- 처음부터 완벽한 문서를 만들려 하지 말고, 현재 의사결정에 필요한 최소 문서부터 만든다
- 제품 동작은 `product-specs`, 설계 원칙은 `design-docs`, 작업 흐름은 `exec-plans`로 분리한다
- 기능을 만들 때 문서를 쓰는 것이 아니라, 판단 기준이 필요할 때 문서를 쓴다고 생각하면 유지가 쉽다
- 같은 질문이 두 번 나오면 문서로 승격할 타이밍이다
- 완료된 계획은 버리지 말고 `completed/`로 옮겨서 이후 작업의 근거로 재사용한다
- 채팅에서만 설명된 규칙은 다음 작업에서 거의 사라진다. 중요한 결정은 반드시 파일로 남긴다

## 커밋과 PR 운영

- 커밋 전에는 `pre-commit` 훅이 포맷과 문서를 점검한다
- 커밋 메시지는 `type(scope): subject` 형태를 권장한다
- GitHub 이슈 제목과 본문은 항상 한글로 작성한다
- 작업 브랜치는 `taehyeon/${커밋컨벤션}/${이슈번호}` 형식을 사용한다
- 푸시 전에는 `pre-push` 훅이 `pnpm --dir blog verify`를 실행한다
- PR 본문은 `.github/PULL_REQUEST_TEMPLATE.md`를 기준으로 채운다

## 관련 명령

- 커밋: `pnpm commit:all -- "feat(harness): add issue and pr workflow"`
- 이슈 생성: `GITHUB_TOKEN=... pnpm issue:create -- --title "한글 제목" --body "한글 본문"`
- PR 생성: `GITHUB_TOKEN=... pnpm pr:create -- --title "제목" --body "본문" --base main`
