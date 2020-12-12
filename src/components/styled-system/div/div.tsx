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
  CursorProps
} from '@/services/styled-system';

export type DivProps = SpaceProps &
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
  React.HTMLAttributes<HTMLDivElement>;

const Div = styled('div', { shouldForwardProp })<DivProps>(
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
    cursor
  )
);

export default Div;
