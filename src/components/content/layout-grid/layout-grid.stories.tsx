import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { theme } from '../../../../styles/theme';
import Div from '../../styled-system/div/div';
import { Cell, Grid } from './layout-grid';

export default {
  title: 'Content/Layout Grid',
  component: Grid
};

const DUMMY_DATA_LIST = {
  items: [
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    },
    {
      name: 'Sample'
    }
  ]
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Grid>
      {DUMMY_DATA_LIST.items.map((item, index) => {
        return (
          <Cell key={index} width={[1, 1 / 2, 1 / 3]}>
            <Div backgroundColor="green" marginBottom={['34px', '32px', '24px']}>
              {item.name}
            </Div>
          </Cell>
        );
      })}
    </Grid>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
