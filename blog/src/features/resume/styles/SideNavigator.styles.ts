import styled from "@emotion/styled";

export const SideNavRail = styled.aside`
  --side-nav-width: 160px;
  --side-nav-gap: var(--gap-8);

  position: absolute;
  left: calc(-1 * (var(--side-nav-width) + var(--side-nav-gap)));
  top: var(--padding-8);
  bottom: var(--padding-8);
  width: var(--side-nav-width);

  @media (max-width: 980px) {
    display: none;
  }
`;

export const SideNav = styled.nav`
  position: sticky;
  top: 88px;
`;

export const SideNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
`;

export const SideNavButton = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  min-height: 2.25rem;
  padding: 0.375rem var(--padding-3);
  border-radius: var(--radius-2);
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray50};
  font-size: 0.875rem;
  font-weight: 500;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  &[data-active="true"] {
    background: ${({ theme }) => theme.colors.primary03};
    color: ${({ theme }) => theme.colors.primary08};
    font-weight: 600;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary03};
    color: ${({ theme }) => theme.colors.primary08};
  }
`;
