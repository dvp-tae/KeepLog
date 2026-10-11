import React from 'react';
import type { SpacingKey } from '../../../theme/theme';
import * as S from './Flex.styled';

export interface FlexProps {
  children: React.ReactNode;
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  direction?: 'row' | 'column';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: SpacingKey;
}

export interface FlexItemProps {
  children: React.ReactNode;
  flex?: number;
}

interface FlexComponent extends React.FC<FlexProps> {
  Item: React.FC<FlexItemProps>;
}

const FlexBase: React.FC<FlexProps> = ({ children, ...rest }) => {
  return <S.Container {...rest}>{children}</S.Container>;
};

const FlexItem: React.FC<FlexItemProps> = ({ children, flex }) => {
  return <S.Item flex={flex}>{children}</S.Item>;
};

const Flex = FlexBase as FlexComponent;
Flex.Item = FlexItem;

export default Flex;
