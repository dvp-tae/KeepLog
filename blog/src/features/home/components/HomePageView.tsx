"use client";

import Text from "@/components/common/Text";
import Flex from "@/components/layout/Flex";
import {
  GithubButton,
  Hello,
  HeroActions,
  HeroCard,
  HeroDescription,
  HeroHeader,
  LinkedInButton,
  Name,
  PageWrapper,
  PostCta,
  PostIndex,
  PostRow,
  PostTitle,
  PostsSection,
} from "@/features/home/styles/HomePage.styles";

interface HomeRecentPost {
  id: string;
  index: string;
  title: string;
  description: string;
  date: string;
}

interface HomePageViewProps {
  posts: HomeRecentPost[];
}

const names = ["안", "녕", "하", "세", "요"];

export default function HomePageView({ posts }: HomePageViewProps) {
  return (
    <PageWrapper maxWidth={"100%"} center fullHeight={false}>
      <HeroCard>
        <Flex
          direction="column"
          align="center"
          gap="var(--gap-10)"
          justify="center"
        >
          <HeroHeader>
            <Hello direction="row" align="center">
              {names.map((name, index) => (
                <Text variant="h3" color="text" key={index}>
                  {name}
                </Text>
              ))}
            </Hello>
            <Name variant="h1" color="text">
              프론트엔드 개발자 성태현입니다.
            </Name>
            <HeroDescription variant="h4" color="muted">
              프론트엔드 개발에 대한 경험과 트러블 슈팅을 기록하는 곳입니다.
              <br />
              1년 간의 창업 경험을 바탕으로 프론트엔드 경력을 쌓아나가고
              있습니다.
            </HeroDescription>
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
              <PostIndex variant="h3" color="text">
                {post.index}
              </PostIndex>
              <Flex direction="column" gap="var(--gap-2)">
                <PostTitle variant="h2" color="text" className="post-title">
                  {post.title}
                </PostTitle>
                <Text variant="body" color="muted">
                  {post.description}
                </Text>
                <PostCta variant="caption" color="primary05">
                  <span>더 보기</span>
                  <span className="arrow">→</span>
                </PostCta>
              </Flex>
              <Text variant="caption" color="gray70">
                {post.date}
              </Text>
            </PostRow>
          ))}
        </Flex>
      </PostsSection>
    </PageWrapper>
  );
}
