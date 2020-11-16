import React from 'react';
import FlowtextBar from './flowtext-bar';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'emotion-theming';

export default {
  title: 'component/FlowtextBar',
  component: FlowtextBar
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <FlowtextBar />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.argTypes = {};
