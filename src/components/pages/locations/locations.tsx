import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import LocationsToggle from './locations-toggle';
import Layout from '@/components/layout/layout';

const LocationsContent = () => {
  const contents = [];
  for (let i = 0; i < 1000; i += 1) {
    const remainder = i % 4;
    contents.push(
      <>
        <Cell
          key={i}
          width={[1, 1 / 2, remainder === 1 || remainder === 2 ? 1 / 3 : 2 / 3]}
          marginBottom={['20px', null, '24px']}>
          <Div backgroundColor="#f2f2f2" height="288px"></Div>
        </Cell>
      </>
    );
  }
  return <Grid paddingTop={['20px', '24px', '80px']}>{contents}</Grid>;
};

const Locations = () => {
  return (
    <Layout>
      <LocationsToggle />
      <LocationsContent />
    </Layout>
  );
};

export default Locations;
