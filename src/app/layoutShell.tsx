"use client";

import Text from "@/components/common/Text";
import Flex from "@/components/layout/Flex";
import Wrapper from "@/components/layout/Wrapper";
import { useTheme } from "@/providers/ThemeProvider";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageBackground = styled.div`
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition:
    background 0.3s ease,
    color 0.3s ease;
`;

const Header = styled.header`
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

const HeaderInner = styled.nav`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: var(--padding-6);
  padding-right: var(--padding-6);
`;

const Brand = styled.button`
  border: none;
  background: transparent;
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

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-1);
`;

interface NavLinkProps {
  active?: boolean;
}

const NavLink = styled(Link, {
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
    background: ${theme.colors.primary04};
    color: ${theme.colors.text};
  `}
`;

const ThemeToggleButton = styled.button`
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

const ThemeIcon = styled.span`
  font-size: 0.9rem;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: var(--padding-2) 0;
`;

const FooterInner = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { themeMode, toggleTheme } = useTheme();

  return (
    <PageBackground>
      <Header>
        <Wrapper maxWidth={768} center>
          <HeaderInner>
            <Link href="/" legacyBehavior>
              <Brand as="a">
                <Flex direction="row" align="center" gap="var(--gap-1)">
                  <Image
                    src="/images/logo.png"
                    alt="KeepLog"
                    width={40}
                    height={35}
                  />
                  <Text variant="h3" color="text" style={{ fontWeight: 700 }}>
                    KeepLog
                  </Text>
                </Flex>
              </Brand>
            </Link>

            <Nav>
              <NavLink href="/blog" active={pathname === "/blog"}>
                Blog
              </NavLink>
              <NavLink href="/resume" active={pathname === "/resume"}>
                Resume
              </NavLink>
              <ThemeToggleButton
                type="button"
                aria-label="테마 전환"
                onClick={toggleTheme}
              >
                <ThemeIcon>{themeMode === "dark" ? "🌙" : "☀️"}</ThemeIcon>
              </ThemeToggleButton>
            </Nav>
          </HeaderInner>
        </Wrapper>
      </Header>

      <Wrapper maxWidth={"100%"} center fullHeight={false}>
        {children}
      </Wrapper>

      <Footer>
        <Wrapper maxWidth={768} center>
          <FooterInner>
            <Text variant="body" color="muted">
              &copy; {new Date().getFullYear()} KeepLog. All rights reserved.
            </Text>
          </FooterInner>
        </Wrapper>
      </Footer>
    </PageBackground>
  );
}
