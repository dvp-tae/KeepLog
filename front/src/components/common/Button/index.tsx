import React from 'react';
import type { PressableProps } from 'react-native';
import type { ColorsKey } from '../../../theme/theme';
import * as S from './Button.styled';

export interface ButtonProps extends PressableProps {
  size?: 'x-small' | 'small' | 'medium' | 'large';
  color: ColorsKey;
  selected?: boolean;
  children: React.ReactNode;
}

const Button = ({ size, color, selected, children, ...props }: ButtonProps) => {
  return (
    <S.Container size={size} color={color} selected={selected} {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
