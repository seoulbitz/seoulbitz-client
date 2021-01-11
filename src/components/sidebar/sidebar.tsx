import React from 'react';
import Aside from '../styled-system/aside/aside';
import Div from '../styled-system/div/div';
import SidebarContent from './sidebar-content';
import SidebarMarquee from './sidebar-marquee';

const Sidebar = () => {
  return (
    <Div display={['none', null, 'block']} minWidth="392px" zIndex={20}>
      <Aside
        position="fixed"
        top="0"
        left="0"
        bottom="0"
        width="392px"
        display="flex">
        <SidebarContent />
        <SidebarMarquee />
      </Aside>
    </Div>
  );
};

export default Sidebar;
