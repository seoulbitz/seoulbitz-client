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
import { cursor, CursorProps, outline, OutlineProps } from '@/services/styled-system';

export type ButtonProps = SpaceProps &
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
  OutlineProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = styled('button', { shouldForwardProp })<ButtonProps>(
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
    cursor,
    outline
  )
);

export default Button;
