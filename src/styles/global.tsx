import React from 'react';
import { css, Global } from '@emotion/core';
import { futura } from './fonts/futura';
import { nanumSquare } from './fonts/nanum-square';

export const globalStyles = (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      html,
      body {
        padding: 0 !important;
        margin: 0 !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      ${futura}
      ${nanumSquare}
    `}
  />
);
