# 테스트 전략

## 현재 테스트 표면

현재 KeepLog는 명령 기반 검증과 브라우저 확인을 중심으로 테스트한다.

## 표준 명령

명령은 `blog/`에서 실행한다.

- `pnpm typecheck`
- `pnpm lint`
- `pnpm format:check`
- `pnpm docs:check`
- `pnpm build`
- `pnpm verify`

## 변경 유형별 테스트 정책

- 콘텐츠 전용 변경: `pnpm docs:check`와 `pnpm build`
- UI 변경: `pnpm verify`와 브라우저 확인
- 빌드 또는 워크플로우 변경: `pnpm verify` 실행 후 워크플로우 diff를 별도로 검토

## 브라우저 검증 기준

다음 상황이면 브라우저 확인을 수행한다.

- 레이아웃 변경
- 타이포그래피 또는 여백 변경
- 반응형 동작 변경
- Markdown 렌더링 변경

기록할 항목은 아래와 같다.

- 확인한 라우트
- 사용한 viewport
- 명확한 회귀가 있었는지 여부

## 앞으로 메워야 할 공백

- 프론트매터 및 스키마 검증 추가
- 라우트 단위 스모크 테스트 추가
- 중요한 페이지에 대한 자동 스크린샷 비교 추가
