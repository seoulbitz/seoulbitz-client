import styled from '@emotion/styled';

import {
  compose,
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps
} from 'styled-system';

import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  whiteSpace,
  WhiteSpaceProps,
  cursor,
  CursorProps,
  transform,
  TransformProps
} from '@/services/styled-system';

export type StrongProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  WhiteSpaceProps &
  CursorProps &
  TransformProps &
  React.HTMLAttributes<HTMLDivElement>;

const Strong = styled('strong', { shouldForwardProp })<StrongProps>(
  compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
    whiteSpace,
    cursor,
    transform
  )
);

export default Strong;
