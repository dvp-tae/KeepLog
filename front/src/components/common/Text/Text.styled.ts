import styled from 'styled-components/native';
import type { ColorsKey, Theme, TypographyKey } from '../../../theme/theme';

export const Container = styled.Text<{
  variant: TypographyKey;
  color: ColorsKey;
  opacity: number;
}>`
  ${({ variant, theme }) => getTypographyStyle(variant, theme)}
  color: ${({ color, theme }) => theme.colors[color]};
  opacity: ${({ opacity }) => opacity};
`;

const getTypographyStyle = (variant: TypographyKey, theme: Theme) => {
  const style = theme.typography[variant];

  return `
    font-size: ${style.fontSize}px;
    font-weight: ${style.fontWeight};
    line-height: ${style.lineHeight}px;
    letter-spacing: ${style.letterSpacing}px;
  `;
};
