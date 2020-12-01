import * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, system, Theme, TLengthStyledSystem } from 'styled-system';

export const cursor = system({
  cursor: true
});

export const outline = system({
  outline: true
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
