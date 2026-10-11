import styled from 'styled-components/native';
import { SPACING } from '../../../theme/theme';
import type { FlexProps } from '.';

export const Container = styled.View<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'row'};
  flex-wrap: ${({ wrap }) => wrap ?? 'nowrap'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  align-items: ${({ align }) => align ?? 'stretch'};
  gap: ${({ gap }) => (gap ? SPACING[gap] : 0)}px;
`;

export const Item = styled.View<{ flex?: number }>`
  ${({ flex }) => (typeof flex === 'number' ? `flex: ${flex};` : '')}
`;
