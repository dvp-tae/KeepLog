"use client";

import Text from "@/components/common/Text";
import Wrapper from "@/components/layout/Wrapper";
import styled from "@emotion/styled";
import Link from "next/link";

const List = styled.div`
  margin-top: var(--gap-6);
  border-radius: var(--radius-4);
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: var(--padding-5) var(--padding-6);
  display: flex;
  flex-direction: column;
  gap: var(--gap-4);
`;

const Row = styled(Link)`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: var(--gap-6);
  row-gap: var(--gap-2);
  padding: 0.5rem 0;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

const posts = [
  {
    id: "react-get-started",
    title: "React로 시작하는 프론트엔드 개발",
    description: "React의 핵심 개념과 함께 프론트엔드 개발을 시작하는 방법을 알아봅니다.",
    date: "2026-02-08",
  },
  {
    id: "practical-typescript-tips",
    title: "실무에서 유용한 TypeScript 팁 5가지",
    description: "TypeScript를 더 효과적으로 사용하기 위한 실전 팁들을 공유합니다.",
    date: "2026-02-05",
  },
  {
    id: "modern-css-layout",
    title: "모던 CSS 레이아웃 완전 정복",
    description: "Flexbox와 Grid를 활용한 모던 CSS 레이아웃 기법을 정리합니다.",
    date: "2026-01-28",
  },
];

export default function BlogPage() {
  return (
    <Wrapper maxWidth={960} center fullHeight>
      <Text variant="h2" color="text">
        Blog
      </Text>
      <Text variant="body" color="muted">
        프론트엔드 개발에 대한 글들을 모아놓은 공간입니다.
      </Text>

      <List>
        {posts.map((post) => (
          <Row key={post.id} href={`/blog/${post.id}`}>
            <div>
              <Text variant="h4" color="text">
                {post.title}
              </Text>
              <br />
              <Text variant="body" color="muted">
                {post.description}
              </Text>
            </div>
            <Text variant="caption" color="gray70">
              {post.date}
            </Text>
          </Row>
        ))}
      </List>
    </Wrapper>
  );
}

