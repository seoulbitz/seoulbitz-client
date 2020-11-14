import React from 'react';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Button from './button';
export default {
  title: 'component/Button',
  component: null
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Grid>
      <Cell width={[1, 1 / 3]} marginBottom="24px">
        <Button>BLACK BUTTON</Button>
      </Cell>
      <Cell width={[1, 1 / 3]} marginBottom="24px">
        <Button variant="blue">BLUE BUTTON</Button>
      </Cell>
      <Cell width={[1, 1 / 3]} marginBottom="24px">
        <Button variant="mixed">MIXED BUTTON</Button>
      </Cell>
      <Cell width={[1, 1 / 3]} marginBottom="24px">
        <Button variant="warning">WARNING BUTTON</Button>
      </Cell>
      <Cell width={[1, 1 / 3]} marginBottom="24px">
        <Button disabled>DISABLED BUTTON</Button>
      </Cell>
    </Grid>
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.argTypes = {};
