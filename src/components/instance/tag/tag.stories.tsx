import React from 'react';
import Tag from './tag';
import { theme } from '../../../../styles/theme';
import { ThemeProvider } from 'emotion-theming';

export default {
  title: 'component/Tag',
  component: Tag
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Tag {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.argTypes = {
  variant: {
    defaultValue: 'outlined',
    control: {
      type: 'inline-radio',
      options: ['outlined', 'solid']
    }
  },
  onClick: {
    action: 'onClick'
  }
};
