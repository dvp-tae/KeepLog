"use client";

import Flex from "@/components/layout/Flex";
import Wrapper from "@/components/layout/Wrapper";
import {
  BrandText,
  Brand as HeaderBrandButton,
  HeaderInner as HeaderContainer,
  Nav as HeaderNavGroup,
  NavLink as HeaderNavLink,
  Header as HeaderRoot,
  ThemeIcon as HeaderThemeIcon,
  ThemeToggleButton as HeaderThemeToggleButton,
} from "@/features/layout/styles/LayoutShell.styles";
import { useTheme } from "@/providers/ThemeProvider";
import Link from "next/link";

interface HeaderCompoundComponent {
  ({ children }: { children: React.ReactNode }): React.ReactNode;
  Brand: () => React.ReactNode;
  Navigation: ({ pathname }: HeaderNavigationProps) => React.ReactNode;
  ThemeToggle: () => React.ReactNode;
}

const Header: HeaderCompoundComponent = ({ children }) => {
  return (
    <HeaderRoot>
      <Wrapper maxWidth={768} center>
        <HeaderContainer>{children}</HeaderContainer>
      </Wrapper>
    </HeaderRoot>
  );
};

function HeaderBrand() {
  return (
    <Link href="/" legacyBehavior>
      <HeaderBrandButton as="a">
        <Flex direction="row" align="center" gap="var(--gap-1)">
          <BrandText variant="h3" color="text">
            KeepLog
          </BrandText>
        </Flex>
      </HeaderBrandButton>
    </Link>
  );
}

interface HeaderNavigationProps {
  pathname: string;
}

function HeaderNavigation({ pathname }: HeaderNavigationProps) {
  return (
    <HeaderNavGroup>
      <HeaderNavLink href="/blog" active={pathname === "/blog"}>
        Blog
      </HeaderNavLink>
      <HeaderNavLink href="/resume" active={pathname === "/resume"}>
        Resume
      </HeaderNavLink>
      <Header.ThemeToggle />
    </HeaderNavGroup>
  );
}

function HeaderThemeToggle() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <HeaderThemeToggleButton
      type="button"
      aria-label="테마 전환"
      onClick={toggleTheme}
    >
      <HeaderThemeIcon>{themeMode === "dark" ? "🌙" : "☀️"}</HeaderThemeIcon>
    </HeaderThemeToggleButton>
  );
}

Header.Brand = HeaderBrand;
Header.Navigation = HeaderNavigation;
Header.ThemeToggle = HeaderThemeToggle;

export default Header;
