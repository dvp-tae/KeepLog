import Text from "@/components/common/Text";
import styled from "@emotion/styled";
import Link from "next/link";

export const PageBackground = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition:
    background 0.3s ease,
    color 0.3s ease;
`;

export const Main = styled.main`
  width: 100%;
  flex: 1;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: ${({ theme }) => theme.colors.background};

  &::after {
    content: "";
    display: block;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    opacity: 0.6;
  }
`;

export const HeaderInner = styled.nav`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: var(--padding-6);
  padding-right: var(--padding-6);
`;

export const Brand = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--gap-2);

  span {
    transition: color 0.15s ease;
  }

  &:hover span {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-1);
`;

interface NavLinkProps {
  active?: boolean;
}

export const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop != "active",
})<NavLinkProps>`
  position: relative;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.muted};
  text-decoration: none;
  padding: var(--padding-2) var(--padding-3);
  border-radius: var(--radius-1);
  transition:
    background 0.3s ease,
    color 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary03};
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.colors.tagBg};
    color: ${theme.colors.text};
  `}
`;

export const ThemeToggleButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ThemeIcon = styled.span`
  font-size: 0.9rem;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: var(--padding-2) 0;
`;

export const FooterInner = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BrandText = styled(Text)`
  font-weight: 700;
`;
