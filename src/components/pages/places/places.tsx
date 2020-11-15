import Div from '@/components/styled-system/div/div';
import Header from '@/components/styled-system/header/header';
import Aside from '@/components/styled-system/aside/aside';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import React, { FC } from 'react';
import Main from '@/components/styled-system/main/main';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';

const MenuBar = () => {
  return <Div height="56px" backgroundColor="#ffffff"></Div>;
};

const FilterBar = () => {
  return <Div height="28px" backgroundColor="#080CCE"></Div>;
};

const FlowBar = () => {
  return <Div height="28px" backgroundColor="#000000"></Div>;
};

const DesktopHeader = () => {
  return (
    <Div
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 24px">
      <Div width="240px" height="48px" borderBottom="1px solid #0511F2"></Div>
      <Div display="flex">
        <Div width="108px" height="48px" border="1px solid #0511F2" marginRight="16px"></Div>
        <Div width="67px" height="48px" border="1px solid #000000"></Div>
      </Div>
    </Div>
  );
};

const SideBar = () => {
  return (
    <>
      <Div height="88px" backgroundColor="#999999"></Div>
      <Div height="80px" backgroundColor="#ffffff"></Div>
      <Div height="196px" backgroundColor="#080CCE"></Div>
      <Div height="208px" backgroundColor="#EBEDED"></Div>
      <Div height="168px" backgroundColor="#ffffff" borderBottom="1px solid #000000"></Div>
      <Div height="80px" backgroundColor="#ffffff"></Div>
      <Div
        height="56px"
        backgroundColor="#ffffff"
        borderTop="1px solid #080CCE"
        borderBottom="1px solid #080CCE"></Div>
      <Div height="500px" backgroundColor="#F5F3F0"></Div>
    </>
  );
};

const PlacesContent = () => {
  const contents = [];
  for (let i = 0; i < 1000; i += 1) {
    const remainder = i % 4;
    contents.push(
      <Cell
        key={i}
        width={[1, 1 / 2, remainder === 1 || remainder === 2 ? 1 / 3 : 2 / 3]}
        marginBottom={['20px', null, '24px']}>
        <Div backgroundColor="#f2f2f2" height="288px"></Div>
      </Cell>
    );
  }
  return <Grid paddingTop={['20px', '24px', '80px']}>{contents}</Grid>;
};

const Places = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div display="flex" flexDirection="column" minHeight="100%">
        {/* Mobile Header */}
        <Div display={[null, null, 'none']}>
          <Header position="fixed" top="0" height="112px" width="100%">
            <MenuBar />
            <FilterBar />
            <FlowBar />
          </Header>
        </Div>

        {/* Desktop Header */}
        <Div display={['none', null, 'block']}>
          <Header
            position="fixed"
            top={0}
            left={0}
            height="88px"
            paddingLeft="392px"
            width="100%"
            backgroundColor="#ffffff">
            <DesktopHeader />
          </Header>
        </Div>

        <Div display="flex">
          {/* Sidebar */}
          <Div display={['none', null, 'block']} minWidth="392px">
            <Aside position="fixed" top={0} left={0} bottom={0} width="392px" display="flex">
              <Div width="100%" overflowY="auto">
                <SideBar />
              </Div>
              <Div width="32px" backgroundColor="#000000" height="100%"></Div>
            </Aside>
          </Div>

          {/* Content */}
          <Div width="100%" marginTop={['112px', null, '96px']}>
            <Main display="flex" flexDirection="column">
              <PlacesContent />
            </Main>
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
};

export default Places;
