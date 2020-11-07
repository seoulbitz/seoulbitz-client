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
  ShadowProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

export type OlProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  React.OlHTMLAttributes<HTMLOListElement>;

const Ol = styled('ol', { shouldForwardProp })<OlProps>(
  compose(space, color, typography, layout, flexbox, grid, background, border, position, shadow),
);

export default Ol;
