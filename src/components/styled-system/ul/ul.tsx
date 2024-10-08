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
import { listStyle, ListStyleProps } from '@/services/styled-system';

export type UlProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  ListStyleProps &
  React.HTMLAttributes<HTMLUListElement>;

const Ul = styled('ul', { shouldForwardProp })<UlProps>(
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
    listStyle
  )
);

export default Ul;
