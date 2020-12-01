import { css } from '@emotion/core';
export const futura = css`
  // Book
  @font-face {
    font-family: 'Futura Seoulbitz';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('/fonts/futura/Futura-Book.woff2') format('woff2'),
      url('/fonts/futura/Futura-Book.woff') format('woff'),
      url('/fonts/futura/Futura-Book.ttf') format('ttf');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  // Medium
  @font-face {
    font-family: 'Futura Seoulbitz';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url('/fonts/futura/Futura-Medium.woff2') format('woff2'),
      url('/fonts/futura/Futura-Medium.woff') format('woff'),
      url('/fonts/futura/Futura-Medium.ttf') format('ttf');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  // Heavy
  @font-face {
    font-family: 'Futura Seoulbitz';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url('/fonts/futura/Futura-Heavy.woff2') format('woff2'),
      url('/fonts/futura/Futura-Heavy.woff') format('woff'),
      url('/fonts/futura/Futura-Heavy.ttf') format('ttf');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
`;
