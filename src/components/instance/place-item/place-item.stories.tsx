import React from 'react';
import PlaceItem from './place-item';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';

export default {
  title: 'component/PlaceItem',
  component: PlaceItem
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Grid>
      <Cell width={[1, 1 / 2, 7 / 12]}>
        <PlaceItem {...args} />
      </Cell>
    </Grid>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.argTypes = {};
