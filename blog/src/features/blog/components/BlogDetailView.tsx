"use client";

import Text from "@/components/common/Text";
import Flex from "@/components/layout/Flex";
import Wrapper from "@/components/layout/Wrapper";
import {
  Article,
  BackLink,
  Content,
  PostDate,
  PostDescription,
  PostHeader,
  PostTag,
} from "@/features/blog/styles/BlogDetailPage.styles";
import type { PostDetail } from "@/lib/posts";

interface BlogDetailViewProps {
  post: PostDetail;
}

export default function BlogDetailView({ post }: BlogDetailViewProps) {
  return (
    <Wrapper maxWidth={768} center fullHeight>
      <Content>
        <BackLink href="/blog">← 목록으로</BackLink>

        <Article>
          <PostHeader>
            <PostDate variant="caption">{post.date}</PostDate>
            <Text variant="h2" color="text">
              {post.title}
            </Text>
            {post.description ? (
              <PostDescription variant="body" color="muted">
                {post.description}
              </PostDescription>
            ) : null}

            <Flex direction="row" gap="var(--gap-2)" wrap="wrap">
              {post.tags.map((tag) => (
                <PostTag key={`${post.slug}-${tag}`}>{tag}</PostTag>
              ))}
            </Flex>
          </PostHeader>

          <div
            className="blog-markdown"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Article>
      </Content>
    </Wrapper>
  );
}
