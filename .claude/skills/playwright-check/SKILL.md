---
name: playwright-check
description: KeepLog에서 실제 브라우저를 열고 화면 캡처를 남기며 UI를 점검할 때 사용합니다. 로컬 dev 서버 실행, Playwright CLI 연결, 스냅샷/스크린샷 저장 경로를 KeepLog 기준으로 고정합니다.
---

# KeepLog Playwright Check Skill

KeepLog 화면을 코드만 보고 판단하지 않고, 실제 브라우저에서 열어 캡처와 함께 검증할 때 사용한다.

이 스킬은 전역 `playwright` 스킬을 기반으로 하지만, KeepLog에서 반복되는 준비 절차를 프로젝트 기준으로 고정한다.

## 먼저 확인할 것

1. `blog/package.json`
2. `CLAUDE.md`
3. 필요 시 관련 화면의 `view`, `styles`, `model` 파일

## 전제

- 앱 루트는 `blog/`
- 로컬 점검 기본 URL은 `http://127.0.0.1:3001`
- 개발 서버는 `pnpm --dir blog dev:pw`로 실행
- 캡처 산출물은 `blog/output/playwright/`에 저장
- 실제 브라우저 자동화는 전역 Codex Playwright wrapper를 사용

## 사전 점검

1. `command -v npx >/dev/null 2>&1`
2. `ls ~/.codex/skills/playwright/scripts/playwright_cli.sh`
3. 필요하면 `pnpm --dir blog dev:pw`로 서버를 먼저 실행

`npx`가 없으면 Playwright 실행을 시도하지 않는다.

## 기본 워크플로

1. 대상 화면과 확인 항목을 정한다
2. `pnpm --dir blog dev:pw`로 로컬 서버를 실행한다
3. `~/.codex/skills/playwright/scripts/playwright_cli.sh`로 실제 브라우저를 연다
4. `snapshot`으로 현재 DOM ref를 확보한다
5. 필요한 상호작용 후 다시 `snapshot` 한다
6. `blog/output/playwright/` 아래에 스크린샷을 저장한다
7. 캡처 결과를 코드 변경 사항과 연결해 기록한다

## KeepLog 권장 명령

```bash
pnpm --dir blog dev:pw
```

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"
export KEEPLOG_PLAYWRIGHT_URL="${KEEPLOG_PLAYWRIGHT_URL:-http://127.0.0.1:3001}"
```

```bash
"$PWCLI" open "$KEEPLOG_PLAYWRIGHT_URL" --headed
"$PWCLI" snapshot
```

스크린샷 파일명은 화면 단위로 명확하게 남긴다.

- `blog/output/playwright/home-desktop.png`
- `blog/output/playwright/blog-list-mobile.png`
- `blog/output/playwright/post-detail-dark.png`
- `blog/output/playwright/resume-tablet.png`

## 점검 체크리스트

- 홈: 소개 문장, CTA, 최근 포스트 리스트의 우선순위가 분명한가
- 블로그 목록: 제목, 설명, 태그, 날짜 정렬이 한 눈에 읽히는가
- 상세: 메타 정보와 본문 리듬이 끊기지 않는가
- 이력서: 섹션 이동, sticky 내비, 밀도 높은 정보 블록이 안정적인가
- 공통: 다크 모드, focus-visible, 작은 화면에서 간격이 무너지지 않는가

## 검증 원칙

- 반드시 실제 브라우저 스냅샷 또는 스크린샷을 남긴다
- 스냅샷 없이 element ref를 추정하지 않는다
- 한 번에 여러 문제를 섞지 말고 화면 단위로 캡처를 남긴다
- 코드 수정 전/후를 같은 URL과 비슷한 viewport로 비교한다
- 결과에는 실행 URL, viewport, 캡처 파일 경로를 함께 적는다

## KeepLog 전용 산출물 규칙

- 임시 캡처도 `blog/output/playwright/` 아래에 둔다
- 저장소에 큰 바이너리를 남기지 않도록 폴더 자체는 유지하고 실제 이미지 파일은 기본적으로 커밋하지 않는다
- 리뷰 메모에는 캡처 파일명과 확인한 UI 포인트를 함께 적는다

## 사용 예시

```text
홈 화면을 실제 브라우저로 열고 데스크톱/모바일 캡처를 남긴 뒤 CTA 정렬을 점검해줘
블로그 상세 페이지 다크 모드 화면을 열고 markdown 본문 대비를 캡처 기준으로 검증해줘
이력서 페이지 sticky 내비를 실제 스크롤로 확인하고 스냅샷을 남겨줘
```
