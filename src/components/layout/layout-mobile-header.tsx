import React from 'react';
import Div from '../styled-system/div/div';
import Header from '../styled-system/header/header';

const MenuBar = () => {
  return <Div height="56px" backgroundColor="#ffffff"></Div>;
};

const FlowBar = () => {
  return <Div height="28px" backgroundColor="#000000"></Div>;
};

const LayoutMobileHeader = () => {
  return (
    <Div display={[null, null, 'none']}>
      <Header position="fixed" top="0" height="84px" width="100%" zIndex={10}>
        <MenuBar />
        <FlowBar />
      </Header>
    </Div>
  );
};

export default LayoutMobileHeader;
