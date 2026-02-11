"use client";

import Text from "@/components/common/Text";
import Wrapper from "@/components/layout/Wrapper";
import styled from "@emotion/styled";
import Link from "next/link";

const Article = styled.article`
  width: 100%;
  border-radius: var(--radius-6);
  padding: var(--padding-7);
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.35);
  display: flex;
  flex-direction: column;
  gap: var(--gap-5);
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-2);
  margin-bottom: var(--gap-4);
  font-size: 0.85rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.muted};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-4);
  line-height: 1.7;
`;

const posts = {
  "react-get-started": {
    title: "React로 시작하는 프론트엔드 개발",
    date: "2026-02-08",
    body: [
      "React는 Facebook에서 개발한 UI 라이브러리입니다. 컴포넌트 기반 아키텍처를 통해 재사용 가능한 UI를 효율적으로 구축할 수 있습니다.",
      "컴포넌트, JSX, State, Props는 React를 이해하는 데 가장 중요한 네 가지 개념입니다.",
      "이 글에서는 간단한 예제를 통해 React 애플리케이션을 어떻게 시작할 수 있는지 살펴봅니다.",
    ],
  },
  "practical-typescript-tips": {
    title: "실무에서 유용한 TypeScript 팁 5가지",
    date: "2026-02-05",
    body: [
      "TypeScript는 대규모 프론트엔드 코드베이스를 안정적으로 유지하는 데 매우 큰 도움을 줍니다.",
      "실제 프로젝트에서 자주 사용하는 유틸리티 타입과 패턴을 정리해 보면 재사용성과 가독성이 크게 향상됩니다.",
    ],
  },
  "modern-css-layout": {
    title: "모던 CSS 레이아웃 완전 정복",
    date: "2026-01-28",
    body: [
      "Flexbox와 CSS Grid는 현대적인 웹 레이아웃의 핵심입니다.",
      "반응형 디자인을 구현할 때 두 레이아웃 시스템을 적절히 조합하면 깔끔하고 유지보수하기 쉬운 UI를 만들 수 있습니다.",
    ],
  },
} as const;

interface PageProps {
  params: { slug: keyof typeof posts };
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = posts[params.slug];

  if (!post) {
    return null;
  }

  return (
    <Wrapper maxWidth={760} center fullHeight>
      <BackLink href="/blog">← 목록으로</BackLink>

      <Article>
        <Text variant="caption" color="gray70">
          {post.date}
        </Text>
        <Text variant="h2" color="text">
          {post.title}
        </Text>

        <Content>
          {post.body.map((paragraph) => (
            <Text key={paragraph} variant="body" color="text">
              {paragraph}
            </Text>
          ))}
        </Content>
      </Article>
    </Wrapper>
  );
}

