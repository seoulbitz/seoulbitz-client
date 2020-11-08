import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { theme } from '../../../../../styles/theme';
import SolidTag from './solid-tag';

export default {
  title: 'Instance/SolidTag',
  component: SolidTag
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <SolidTag />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
