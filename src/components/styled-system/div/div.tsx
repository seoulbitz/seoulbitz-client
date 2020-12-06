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
import { cursor, CursorProps } from '@/services/styled-system';

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
    cursor
  )
);

export default Div;
