import styled from 'styled-components/native';
import { RADIUS, SPACING } from '../../../theme/theme';
import type { WrapperProps } from '.';

export const Container = styled.View<WrapperProps>`
  position: ${({ position }) => position ?? 'relative'};
  width: 100%;
  ${({ center }) => (center ? 'align-self: center;' : '')}
  ${({ maxWidth }) =>
    maxWidth !== undefined
      ? `max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};`
      : ''}
  ${({ fullHeight }) => (fullHeight ? 'flex: 1;' : '')}
  background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.colors.background};
  ${({ padding, paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    padding !== undefined
      ? `padding: ${SPACING[padding]}px;`
      : `
        ${paddingTop !== undefined ? `padding-top: ${SPACING[paddingTop]}px;` : ''}
        ${paddingRight !== undefined ? `padding-right: ${SPACING[paddingRight]}px;` : ''}
        ${paddingBottom !== undefined ? `padding-bottom: ${SPACING[paddingBottom]}px;` : ''}
        ${paddingLeft !== undefined ? `padding-left: ${SPACING[paddingLeft]}px;` : ''}
      `}
  ${({ borderRadius }) => (borderRadius !== undefined ? `border-radius: ${RADIUS[borderRadius]}px;` : '')}
`;
