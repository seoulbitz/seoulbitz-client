import React from 'react';
import Div from '../styled-system/div/div';
import Header from '../styled-system/header/header';

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

const LayoutDesktopHeader = () => {
  return (
    <Div display={['none', null, 'block']}>
      <Header
        position="fixed"
        top={0}
        left={0}
        height="88px"
        paddingLeft="392px"
        width="100%"
        backgroundColor="#ffffff"
        zIndex={10}>
        <DesktopHeader />
      </Header>
    </Div>
  );
};

export default LayoutDesktopHeader;
