import React from 'react';
import { css, Global } from '@emotion/core';
import { futura } from './fonts/futura';
import { nanumSquare } from './fonts/nanum-square';
import { adelle } from './fonts/adelle';

export const globalStyles = (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        outline: none;
      }

      html,
      body {
        padding: 0 !important;
        margin: 0 !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overscroll-behavior: none; /* https://www.smashingmagazine.com/2018/08/scroll-bouncing-websites/ */
      }

      ${futura}
      ${nanumSquare}
      ${adelle}
    `}
  />
);
