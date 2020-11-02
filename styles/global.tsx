import React from 'react';
import { css, Global } from '@emotion/core';

export const globalStyles = (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      html,
      body {
        padding: 0;
        margin: 0;
      }
    `}
  />
);
