---
title: "Next.js + Obsidian 블로그 시작하기"
description: "Obsidian에서 작성한 마크다운을 Next.js 블로그에 연결하는 기본 세팅."
date: "2026-02-23"
tags: ["Next.js", "Obsidian", "Markdown"]
draft: false
---

이 글은 Obsidian에서 작성한 노트를 Next.js 블로그에 연결하는 가장 기본 흐름을 정리합니다.

## 핵심 구조

- `post/` 디렉토리에 `.md` 파일을 저장한다.
- 파일명은 URL slug로 사용한다.
- frontmatter의 `draft: true`는 목록에서 제외한다.

## 작성 팁

1. 제목은 `title`에 명확하게 작성한다.
2. 요약은 `description`에 짧게 적는다.
3. `tags`는 검색/분류 기준으로 일관되게 관리한다.

```ts
const example = "Hello from Obsidian";
console.log(example);
```
