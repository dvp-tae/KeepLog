"use client";

import Text from "@/components/common/Text";
import Flex from "@/components/layout/Flex";
import Wrapper from "@/components/layout/Wrapper";
import styled from "@emotion/styled";
import Link from "next/link";

const Hello = styled(Flex)`
  span {
    animation: wave 2s ease infinite;
    animation-iteration-count: infinite;
  }

  span:nth-child(1) {
    animation-delay: 0s;
  }
  span:nth-child(2) {
    animation-delay: 0.1s;
  }
  span:nth-child(3) {
    animation-delay: 0.2s;
  }
  span:nth-child(4) {
    animation-delay: 0.3s;
  }
  span:nth-child(5) {
    animation-delay: 0.4s;
  }

  @keyframes wave {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const Name = styled(Text)`
  width: fit-content;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary08} 0%,
    ${({ theme }) => theme.colors.primary08} 40%,
    ${({ theme }) => theme.colors.primary05} 50%,
    ${({ theme }) => theme.colors.primary08} 60%,
    ${({ theme }) => theme.colors.primary08} 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s linear infinite;
  color: transparent;
  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

const HeroCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  background: ${({ theme }) =>
    `linear-gradient(140deg, ${theme.colors.primary01}11 0%, ${theme.colors.primary02} 35%, ${theme.colors.primary01} 100%)`};

  @media (max-width: 768px) {
    padding: 2.5rem 1.75rem;
  }
`;

const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const HeroActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SocialLinkButton = styled.a`
  height: 3rem;
  padding: 0 var(--padding-5);
  border-radius: var(--radius-4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-2);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    background 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.08s ease,
    opacity 0.15s ease;

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  &:hover {
    opacity: 0.9;
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.12);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const GithubButton = styled(SocialLinkButton)`
  background: #0f172a;
  color: #f9fafb;
`;

const LinkedInButton = styled(SocialLinkButton)`
  background: #0a66c2;
  color: #f9fafb;
`;

const PostsSection = styled.section`
  width: 100%;
  max-width: 768px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  user-select: none;
`;

const PostRow = styled(Link)`
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

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
    row-gap: 0.25rem;
  }
`;

const posts = [
  {
    id: "react-get-started",
    index: "01",
    title: "React로 시작하는 프론트엔드 개발",
    description:
      "React의 핵심 개념과 함께 프론트엔드 개발을 시작하는 방법을 알아봅니다.",
    date: "2026-02-08",
  },
  {
    id: "practical-typescript-tips",
    index: "02",
    title: "실무에서 유용한 TypeScript 팁 5가지",
    description:
      "TypeScript를 더 효과적으로 사용하기 위한 실전 팁들을 공유합니다.",
    date: "2026-02-05",
  },
  {
    id: "modern-css-layout",
    index: "03",
    title: "모던 CSS 레이아웃 완전 정복",
    description: "Flexbox와 Grid를 활용한 모던 CSS 레이아웃 기법을 정리합니다.",
    date: "2026-01-28",
  },
];

const Names = ["안", "녕", "하", "세", "요"];

export default function Home() {
  return (
    <Wrapper maxWidth={"100%"} center fullHeight={false}>
      <HeroCard>
        <Flex
          direction="column"
          align="center"
          gap="var(--gap-10)"
          justify="center"
        >
          <HeroHeader>
            <Hello direction="row" align="center">
              {Names.map((name, index) => {
                return (
                  <div key={index}>
                    <Text variant="h3" color="text" key={index}>
                      {name}
                    </Text>
                    {name === "\n" && "\u00A0"}
                  </div>
                );
              })}
            </Hello>
            <Name variant="h1" color="text">
              프론트엔드 개발자 성태현입니다.
            </Name>
            <Text variant="h4" color="muted" style={{ lineHeight: "1.5" }}>
              프론트엔드 개발에 대한 경험과 트러블 슈팅을 기록하는 곳입니다.
              <br />
              1년 간의 창업 경험을 바탕으로 프론트엔드 경력을 쌓아나가고
              있습니다.
            </Text>
          </HeroHeader>

          <HeroActions>
            <GithubButton
              href="https://github.com/dvp-tae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49
                0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62
                1 .07 1.53 1.06 1.53 1.06.89 1.55 2.34 1.1 2.91.84.09-.67.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.08
                0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.18 9.18 0 0 1 12 6.15c.85 0 1.71.12 2.51.35
                1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9
                0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                />
              </svg>
              Github
            </GithubButton>

            <LinkedInButton
              href="https://www.linkedin.com/in/dvptae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.25h4.56V24H.22zM8.67 8.25h4.37v2.14h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.35c0-1.75-.03-4-2.44-4-2.44 0-2.82 1.9-2.82 3.87V24H8.67z"
                />
              </svg>
              LinkedIn
            </LinkedInButton>
          </HeroActions>
        </Flex>
      </HeroCard>

      <PostsSection>
        <Text variant="h2" color="text">
          최근 포스트
        </Text>
        <Flex direction="column" gap="var(--gap-4)">
          {posts.map((post) => (
            <PostRow key={post.id} href={`/blog/${post.id}`}>
              <Text variant="h3" color="text" style={{ fontWeight: 600 }}>
                {post.index}
              </Text>
              <Flex direction="column" gap="var(--gap-2)">
                <Text
                  variant="h2"
                  color="text"
                  className="post-title"
                  style={{ transition: "color 0.15s ease" }}
                >
                  {post.title}
                </Text>
                <Text variant="body" color="muted">
                  {post.description}
                </Text>
                <Text
                  variant="caption"
                  color="primary05"
                  style={{ fontWeight: 600, marginTop: "var(--gap-2)" }}
                >
                  더 보기 →
                </Text>
              </Flex>
              <Text variant="caption" color="gray70">
                {post.date}
              </Text>
            </PostRow>
          ))}
        </Flex>
      </PostsSection>
    </Wrapper>
  );
}
