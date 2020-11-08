import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { theme } from '../../../../../styles/theme';
import OutlinedTag from './outlined-tag';

export default {
  title: 'Instance/OutlinedTag',
  component: OutlinedTag
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <OutlinedTag />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
