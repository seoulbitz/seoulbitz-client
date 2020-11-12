import React from 'react';
import PlaceItem from './place-item';
import { theme } from '../../../../styles/theme';
import { ThemeProvider } from 'emotion-theming';

export default {
  title: 'component/PlaceItem',
  component: PlaceItem
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <PlaceItem {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.argTypes = {};
