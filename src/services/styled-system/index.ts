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
