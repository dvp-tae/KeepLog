"use client";

import Text from "@/components/common/Text";
import Flex from "@/components/layout/Flex";
import Wrapper from "@/components/layout/Wrapper";
import styled from "@emotion/styled";
import Link from "next/link";

const Inner = styled(Flex)`
  flex-direction: column;
  padding: var(--padding-10) var(--padding-6);
`;

const List = styled(Flex)`
  margin-top: var(--gap-6);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-4);
`;

const Row = styled(Link)`
  height: fit-content;
  display: grid;
  grid-template-columns: 20px 1fr auto;
  align-items: baseline;
  column-gap: var(--gap-6);
  row-gap: 0.25rem;
  padding: var(--padding-4) var(--padding-5);
  text-decoration: none;
  border-radius: var(--radius-3);
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    transform 0.15s ease,
    color 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray05};
    transform: scale(1.02);
  }

  &:hover .post-title {
    color: ${({ theme }) => theme.colors.primary08};
  }

  .arrow {
    display: inline-block;
    margin-left: 0.2rem;
    transition: transform 0.15s ease;
    will-change: transform;
  }

  &:hover .arrow {
    transform: translateX(8px);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
    row-gap: 0.25rem;
  }
`;

const TagList = styled(Flex)`
  flex-wrap: wrap;
`;

const TagChip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.55rem;
  border-radius: var(--radius-25);
  background: ${({ theme }) => theme.colors.tagBg};
  color: ${({ theme }) => theme.colors.tagText};
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1;
`;

const posts = [
  {
    id: "react-get-started",
    index: "01",
    title: "React로 시작하는 프론트엔드 개발",
    description:
      "React의 핵심 개념과 함께 프론트엔드 개발을 시작하는 방법을 알아봅니다.",
    date: "2026-02-08",
    tags: ["React", "Frontend", "입문"],
  },
  {
    id: "practical-typescript-tips",
    index: "02",
    title: "실무에서 유용한 TypeScript 팁 5가지",
    description:
      "TypeScript를 더 효과적으로 사용하기 위한 실전 팁들을 공유합니다.",
    date: "2026-02-05",
    tags: ["TypeScript", "실무팁", "생산성"],
  },
  {
    id: "modern-css-layout",
    index: "03",
    title: "모던 CSS 레이아웃 완전 정복",
    description: "Flexbox와 Grid를 활용한 모던 CSS 레이아웃 기법을 정리합니다.",
    date: "2026-01-28",
    tags: ["CSS", "Flexbox", "Grid"],
  },
];

export default function BlogPage() {
  return (
    <Wrapper maxWidth={768} center fullHeight>
      <Inner>
        <Text variant="h2" color="text" style={{ marginBottom: "20px" }}>
          Blog
        </Text>
        <Text variant="body" color="muted">
          프론트엔드 개발에 대한 글들을 모아놓은 공간입니다.
        </Text>

        <List direction="column" gap="var(--gap-4)">
          {posts.map((post) => (
            <Row key={post.id} href={`/blog/${post.id}`}>
              <Text variant="h3" color="text" style={{ fontWeight: 600 }}>
                {post.index}
              </Text>
              <Flex direction="column" gap="var(--gap-2)">
                <Text
                  variant="h2"
                  color="text"
                  className="post-title"
                  style={{
                    transition: "color 0.15s ease",
                    marginBottom: "0.4rem",
                  }}
                >
                  {post.title}
                </Text>
                <Text variant="body" color="muted">
                  {post.description}
                </Text>
                <TagList direction="row" gap="var(--gap-2)">
                  {post.tags.map((tag) => (
                    <TagChip key={`${post.id}-${tag}`}>{tag}</TagChip>
                  ))}
                </TagList>
                <Text
                  variant="caption"
                  color="primary05"
                  style={{ fontWeight: 600, marginTop: "var(--gap-2)" }}
                >
                  <span>더 보기</span>
                  <span className="arrow">→</span>
                </Text>
              </Flex>
              <Text variant="caption" color="gray70">
                {post.date}
              </Text>
            </Row>
          ))}
        </List>
      </Inner>
    </Wrapper>
  );
}
