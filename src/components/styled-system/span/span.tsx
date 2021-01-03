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
  cursor,
  CursorProps,
  textDecoration,
  TextDecorationProps,
  whiteSpace,
  WhiteSpaceProps
} from '@/services/styled-system';

export type SpanProps = SpaceProps &
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
  TextDecorationProps &
  React.HTMLAttributes<HTMLSpanElement>;

const Span = styled('span', { shouldForwardProp })<SpanProps>(
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
    textDecoration
  )
);

export default Span;
