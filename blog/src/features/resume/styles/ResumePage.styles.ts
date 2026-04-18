import styled from "@emotion/styled";

export const PageRoot = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: clamp(3rem, 7vw, 5rem) var(--padding-6) clamp(4rem, 8vw, 6rem);
  max-width: 100%;

  @media (max-width: 640px) {
    padding-left: var(--padding-4);
    padding-right: var(--padding-4);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 8vw, 5rem);
`;
