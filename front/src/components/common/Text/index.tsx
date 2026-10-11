import React from 'react';
import type { TextProps as RNTextProps } from 'react-native';
import type { ColorsKey, TypographyKey } from '../../../theme/theme';
import * as S from './Text.styled';

export interface TextProps extends RNTextProps {
  variant?: TypographyKey;
  color?: ColorsKey;
  opacity?: boolean;
  children: React.ReactNode;
}

const Text = ({
  variant = 'body',
  color = 'gray90',
  opacity = true,
  children,
  ...props
}: TextProps) => {
  return (
    <S.Container variant={variant} color={color} opacity={opacity ? 1 : 0} {...props}>
      {children}
    </S.Container>
  );
};

export default Text;
