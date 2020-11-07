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

export type SelectProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = styled('select', { shouldForwardProp })<SelectProps>(
  compose(space, color, typography, layout, flexbox, grid, background, border, position, shadow),
);

export default Select;
