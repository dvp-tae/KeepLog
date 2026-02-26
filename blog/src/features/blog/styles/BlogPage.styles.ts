import Flex from "@/components/layout/Flex";
import Text from "@/components/common/Text";
import styled from "@emotion/styled";
import Link from "next/link";

export const Content = styled.div`
  padding: var(--padding-10) var(--padding-6);
`;

export const Header = styled(Flex)`
  gap: var(--gap-2);
`;

export const HeaderTitle = styled(Text)`
  margin-bottom: 20px;
`;

export const PostList = styled(Flex)`
  margin-top: var(--gap-6);
`;

export const PostRow = styled(Link)`
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

export const PostIndex = styled(Text)`
  font-weight: 600;
`;

export const PostTitle = styled(Text)`
  margin-bottom: 0.4rem;
  transition: color 0.15s ease;
`;

export const PostTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.55rem;
  border-radius: var(--radius-25);
  background: #e6f2ff;
  color: #1f54a3;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1;
`;

export const PostReadMore = styled(Text)`
  font-weight: 600;
  margin-top: var(--gap-2);
`;
