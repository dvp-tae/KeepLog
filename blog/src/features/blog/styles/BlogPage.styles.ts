import Text from "@/components/common/Text";
import Flex from "@/components/layout/Flex";
import styled from "@emotion/styled";
import Link from "next/link";

export const Content = styled.div`
  padding: clamp(3rem, 7vw, 5rem) var(--padding-6) clamp(4rem, 8vw, 6rem);

  @media (max-width: 640px) {
    padding-left: var(--padding-4);
    padding-right: var(--padding-4);
  }
`;

export const Header = styled(Flex)`
  gap: var(--gap-3);
  margin-bottom: var(--gap-8);
`;

export const HeaderTitle = styled(Text)`
  display: block;
`;

export const PostList = styled(Flex)`
  margin-top: 0;
`;

export const PostRow = styled(Link)`
  display: grid;
  grid-template-columns: 2.2rem minmax(0, 1fr) auto;
  align-items: start;
  column-gap: var(--gap-5);
  row-gap: 0.35rem;
  padding: var(--padding-5) 0;
  text-decoration: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    background-color: transparent;
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
    transform: translateX(5px);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
    row-gap: var(--gap-2);
  }
`;

export const PostIndex = styled(Text)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary08};
`;

export const PostTitle = styled(Text)`
  transition: color 0.15s ease;
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

export const PostReadMore = styled(Text)`
  font-weight: 600;
  margin-top: var(--gap-2);
`;
