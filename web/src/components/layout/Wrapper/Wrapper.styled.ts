import styled from "@emotion/styled";
import { WrapperProps } from ".";

export const Container = styled.div<WrapperProps>`
  position: ${({ position }) => position ?? "relative"};
  width: 100%;
  margin: ${({ center }) => (center ? "0 auto" : "0")};
  max-width: ${({ maxWidth }) =>
    typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth};
  /*
   * 고정 height를 주면 콘텐츠가 길 때 footer 위로 겹칠 수 있어
   * fullHeight는 최소 높이 보장(min-height)으로만 처리합니다.
   */
  min-height: ${({ fullHeight }) =>
    fullHeight ? "calc(100dvh - 57px)" : "auto"};
  height: auto;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.colors.background};

  ${({ padding, paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    padding
      ? `padding: ${padding ?? "0"};`
      : `
          padding-top: ${paddingTop ?? "0"};
          padding-right: ${paddingRight ?? "0"};
          padding-bottom: ${paddingBottom ?? "0"};
          padding-left: ${paddingLeft ?? "0"};
        `}

  border-radius: ${({ borderRadius }) => borderRadius ?? "0"};
`;
