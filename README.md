# KeepLog

Next.js + TypeScript + Emotion으로 구성된 프로젝트입니다.

## 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Emotion** - CSS-in-JS 스타일링
- **ESLint** - 코드 린팅
- **Prettier** - 코드 포맷팅
- **pnpm** - 패키지 매니저

## 시작하기

### 의존성 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
pnpm build
pnpm start
```

### 코드 포맷팅

```bash
# 코드 포맷팅
pnpm format

# 포맷팅 확인
pnpm format:check
```

### 린팅

```bash
# 린트 확인
pnpm lint

# 린트 자동 수정
pnpm lint:fix
```

## 프로젝트 구조

```
keeplog/
├── app/                    # App Router 디렉토리
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈 페이지
│   ├── globals.css        # 전역 스타일
│   └── providers/         # 프로바이더
│       └── EmotionProvider.tsx
├── next.config.js         # Next.js 설정
├── tsconfig.json          # TypeScript 설정
├── .eslintrc.json         # ESLint 설정
├── .prettierrc            # Prettier 설정
├── .prettierignore        # Prettier 무시 파일
├── .npmrc                 # pnpm 설정
└── package.json           # 프로젝트 의존성
```

## 설정 정보

### ESLint

- Next.js 기본 설정 사용
- Prettier와 충돌 방지를 위한 `eslint-config-prettier` 포함
- TypeScript 관련 규칙 적용

### Prettier

- 세미콜론 없음
- 싱글 쿼트 사용
- 탭 너비: 2칸
- 줄 길이: 80자
- 자동 import 정리 플러그인 포함
