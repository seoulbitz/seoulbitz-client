import * as CSS from 'csstype';
import {
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
  TLengthStyledSystem
} from 'styled-system';

export const cursor = system({
  cursor: true
});

export const outline = system({
  outline: true
});

export const whiteSpace = system({
  whiteSpace: true
});

export const textDecoration = system({
  textDecoration: true
});

export const transform = system({
  transform: true
});

export const userSelect = system({
  userSelect: true
});

export const transformOrigin = system({
  transformOrigin: true
});

export interface CursorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Left<TLengthStyledSystem>
> {
  cursor?: ResponsiveValue<TVal, ThemeType>;
}

export interface OutlineProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Left<TLengthStyledSystem>
> {
  outline?: ResponsiveValue<TVal, ThemeType>;
}

export interface WhiteSpaceProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Left<TLengthStyledSystem>
> {
  whiteSpace?: ResponsiveValue<TVal, ThemeType>;
}

export interface TextDecorationProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Left<TLengthStyledSystem>
> {
  textDecoration?: ResponsiveValue<TVal, ThemeType>;
}

export interface TransformProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Left<TLengthStyledSystem>
> {
  transform?: ResponsiveValue<TVal, ThemeType>;
}

export interface UserSelectProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Left<TLengthStyledSystem>
> {
  userSelect?: ResponsiveValue<TVal, ThemeType>;
}

export interface TransformOriginProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Left<TLengthStyledSystem>
> {
  transformOrigin?: ResponsiveValue<TVal, ThemeType>;
}
