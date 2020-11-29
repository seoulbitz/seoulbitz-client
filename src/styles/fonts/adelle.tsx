import { css } from '@emotion/core';

export const adelle = css`
  // Normal
  @font-face {
    font-family: 'Adelle';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Adelle'), url('/fonts/adelle/Adelle_Regular.eot'),
      url('/fonts/adelle/Adelle_Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/adelle/Adelle_Regular.woff') format('woff'),
      url('/fonts/adelle/Adelle_Regular.ttf') format('ttf');
  }

  // Bold
  @font-face {
    font-family: 'Adelle';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Adelle'), url('/fonts/adelle/Adelle_Bold.eot'),
      url('/fonts/adelle/Adelle_Bold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/adelle/Adelle_Bold.woff') format('woff'),
      url('/fonts/adelle/Adelle_Bold.ttf') format('ttf');
  }
`;
