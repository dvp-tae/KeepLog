import styled from 'styled-components/native';
import { RADIUS, SPACING } from '../../../theme/theme';
import type { ButtonProps } from '.';

const WIDTH_MAP: Record<NonNullable<ButtonProps['size']>, number> = {
  'x-small': 64,
  small: 128,
  medium: 160,
  large: 192,
};

export const Container = styled.Pressable<ButtonProps>`
  width: ${({ size }) => (size ? `${WIDTH_MAP[size]}px` : '100%')};
  height: 48px;
  border-radius: ${RADIUS[4]}px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, color, disabled }) => (disabled ? theme.colors.gray20 : theme.colors[color])};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${SPACING[3]}px;
  background-color: ${({ theme, selected, color, disabled }) => {
    if (disabled) return theme.colors.gray20;
    if (selected) return theme.colors[color];
    return theme.colors.background;
  }};
`;
