import Text from "@/components/common/Text";
import styled from "@emotion/styled";
import Link from "next/link";

export const Content = styled.div`
  padding: clamp(3rem, 7vw, 5rem) var(--padding-6) clamp(4rem, 8vw, 6rem);

  @media (max-width: 640px) {
    padding-left: var(--padding-4);
    padding-right: var(--padding-4);
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-2);
  margin-bottom: var(--gap-6);
  font-size: 0.85rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-6);
`;

export const PostTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.34rem 0.65rem;
  border-radius: var(--radius-25);
  background: ${({ theme }) => theme.colors.tagBg};
  color: ${({ theme }) => theme.colors.tagText};
  font-size: 0.74rem;
  font-weight: 500;
  line-height: 1;
`;

export const PostDate = styled(Text)`
  color: ${({ theme }) => theme.colors.primary08};
`;

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--gap-3);
  padding-bottom: var(--padding-6);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const PostDescription = styled(Text)`
  max-width: 38rem;
  color: ${({ theme }) => theme.colors.muted};
`;
