import { addDecorator } from '@storybook/react';
import React from 'react';
import { globalStyles } from '../src/styles/global';

addDecorator((style) => (
  <>
    {globalStyles}
    {style()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};
