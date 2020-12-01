import React from 'react';
import Div from '../styled-system/div/div';
import Aside from '../styled-system/aside/aside';

const SideBar = () => {
  return (
    <>
      <Div height="88px" backgroundColor="#F4F2EF"></Div>
      <Div height="96px" backgroundColor="#ffffff"></Div>
      <Div height="614px" backgroundColor="#fafafa"></Div>
      <Div height="532px" padding="24px 0 48px 0" backgroundColor="#ffffff" />
    </>
  );
};

const LayoutSidebar = () => {
  return (
    <Div display={['none', null, 'block']} minWidth="392px" zIndex={20}>
      <Aside position="fixed" top={0} left={0} bottom={0} width="392px" display="flex">
        <Div width="100%" overflowY="auto">
          <SideBar />
        </Div>
        <Div width="32px" backgroundColor="#000000" height="100%"></Div>
      </Aside>
    </Div>
  );
};

export default LayoutSidebar;
