import React from 'react';
import type { ViewProps } from 'react-native';
import type { RadiusKey, SpacingKey } from '../../../theme/theme';
import * as S from './Wrapper.styled';

export interface WrapperProps extends ViewProps {
  // RN/Yoga only supports 'relative' | 'absolute' — no 'fixed' or 'sticky' equivalent.
  position?: 'relative' | 'absolute';
  // No 'fit-content' equivalent in RN layout — numeric px or '100%' only.
  maxWidth?: number | '100%';
  // flex: 1 — fills the parent flex container.
  fullHeight?: boolean;
  backgroundColor?: string;
  padding?: SpacingKey;
  paddingTop?: SpacingKey;
  paddingRight?: SpacingKey;
  paddingBottom?: SpacingKey;
  paddingLeft?: SpacingKey;
  center?: boolean;
  borderRadius?: RadiusKey;
  children: React.ReactNode;
}

const Wrapper = ({ center = true, children, ...rest }: WrapperProps) => {
  return (
    <S.Container center={center} {...rest}>
      {children}
    </S.Container>
  );
};

export default Wrapper;
