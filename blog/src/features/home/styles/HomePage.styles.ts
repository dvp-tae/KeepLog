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
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary08};
    animation: wave 4.8s ease-in-out infinite;
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
    70%,
    100% {
      transform: translateY(0);
      opacity: 0.8;
    }
    12% {
      transform: translateY(-4px);
      opacity: 1;
    }
  }
`;

export const Name = styled(Text)`
  max-width: 12ch;
`;

export const HeroCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: clamp(26rem, 70vh, 40rem);
  padding: clamp(4.5rem, 9vw, 7rem) var(--padding-6) clamp(3rem, 6vw, 5rem);
  background: ${({ theme }) =>
    theme.colors.background === "#000000"
      ? "linear-gradient(180deg, rgba(17, 17, 17, 0.96) 0%, rgba(0, 0, 0, 1) 100%)"
      : "linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(237, 244, 255, 0.8) 100%)"};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    align-items: center;
    padding: 5rem var(--padding-4) 3rem;
  }
`;

export const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-3);
  max-width: 42rem;
`;

export const HeroActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const SocialLinkButton = styled.a`
  min-height: 2.875rem;
  padding: 0 1rem;
  border-radius: 999px;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-2);
  cursor: pointer;
  font-size: 0.94rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    background 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.08s ease,
    opacity 0.15s ease,
    border-color 0.15s ease;

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  &:hover {
    opacity: 0.96;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const GithubButton = styled(SocialLinkButton)`
  background: ${({ theme }) =>
    theme.colors.background === "#000000" ? theme.colors.surface : theme.colors.text};
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.background};
`;

export const LinkedInButton = styled(SocialLinkButton)`
  background: ${({ theme }) =>
    theme.colors.background === "#000000" ? "rgba(41, 151, 255, 0.16)" : theme.colors.primary08};
  color: #f5f5f7;
`;

export const PostsSection = styled.section`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--gap-9);
  padding: clamp(3rem, 7vw, 5rem) var(--padding-6) clamp(4rem, 8vw, 6rem);

  @media (max-width: 640px) {
    padding-left: var(--padding-4);
    padding-right: var(--padding-4);
  }
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

export const HeroDescription = styled(Text)`
  max-width: 36rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const PostIndex = styled(Text)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary08};
`;

export const PostTitle = styled(Text)`
  transition: color 0.15s ease;
`;

export const PostCta = styled(Text)`
  font-weight: 600;
  margin-top: var(--gap-2);
`;
