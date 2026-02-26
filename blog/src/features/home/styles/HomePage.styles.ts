import Text from "@/components/common/Text";
import Flex from "@/components/layout/Flex";
import Wrapper from "@/components/layout/Wrapper";
import styled from "@emotion/styled";
import Link from "next/link";

export const PageWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Hello = styled(Flex)`
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

export const Name = styled(Text)`
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

export const HeroCard = styled.section`
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

export const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const HeroActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const SocialLinkButton = styled.a`
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

export const GithubButton = styled(SocialLinkButton)`
  background: #0f172a;
  color: #f9fafb;
`;

export const LinkedInButton = styled(SocialLinkButton)`
  background: #0a66c2;
  color: #f9fafb;
`;

export const PostsSection = styled.section`
  width: 100%;
  max-width: 768px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  user-select: none;
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

export const HeroDescription = styled(Text)`
  line-height: 1.5;
`;

export const PostIndex = styled(Text)`
  font-weight: 600;
`;

export const PostTitle = styled(Text)`
  transition: color 0.15s ease;
`;

export const PostCta = styled(Text)`
  font-weight: 600;
  margin-top: var(--gap-2);
`;
