"use client";

import Text from "@/components/common/Text";
import Flex from "@/components/layout/Flex";
import Wrapper from "@/components/layout/Wrapper";
import {
  Content,
  Header,
  HeaderTitle,
  PostIndex,
  PostList,
  PostReadMore,
  PostRow,
  PostTag,
  PostTitle,
} from "@/features/blog/styles/BlogPage.styles";
import type { PostSummary } from "@/lib/posts";

interface BlogListViewProps {
  posts: PostSummary[];
}

const formatOrder = (index: number) => String(index + 1).padStart(2, "0");

export default function BlogListView({ posts }: BlogListViewProps) {
  return (
    <Wrapper maxWidth={768} center fullHeight>
      <Content>
        <Header direction="column">
          <HeaderTitle variant="h2" color="text">
            Blog
          </HeaderTitle>
          <Text variant="body" color="muted">
            Obsidian에서 작성한 글을 KeepLog에 바로 발행합니다.
          </Text>
        </Header>

        <PostList direction="column" gap="var(--gap-4)">
          {posts.map((post, index) => (
            <PostRow key={post.slug} href={`/blog/${post.slug}`}>
              <PostIndex variant="h3" color="text">
                {formatOrder(index)}
              </PostIndex>

              <Flex direction="column" gap="var(--gap-2)">
                <PostTitle variant="h2" color="text" className="post-title">
                  {post.title}
                </PostTitle>
                {post.description ? (
                  <Text variant="body" color="muted">
                    {post.description}
                  </Text>
                ) : null}
                <Flex direction="row" gap="var(--gap-2)" wrap="wrap">
                  {post.tags.map((tag) => (
                    <PostTag key={`${post.slug}-${tag}`}>{tag}</PostTag>
                  ))}
                </Flex>
                <PostReadMore variant="caption" color="primary05">
                  더 보기 <span className="arrow">→</span>
                </PostReadMore>
              </Flex>

              <Text variant="caption" color="gray70">
                {post.date}
              </Text>
            </PostRow>
          ))}
        </PostList>
      </Content>
    </Wrapper>
  );
}
