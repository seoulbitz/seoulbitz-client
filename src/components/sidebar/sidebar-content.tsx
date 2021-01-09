import Link from 'next/link';
import React from 'react';
import SeoulbitzLogo from '../icons/seoulbitz-logo/seoulbitz-logo';
import MenuContents from '../menu-contents/menu-contents';
import A from '../styled-system/a/a';
import Div from '../styled-system/div/div';

const SidebarContent = () => {
  return (
    <Div width="360px" overflowY="auto">
      <Div
        height="88px"
        backgroundSize="contain"
        backgroundImage="url('https://cdn.sanity.io/images/duesb6xh/production/5d167f567b9445326e5299b68313b1d9c81e0db0-1440x352.png')"
      />

      <Div
        height="96px"
        backgroundColor="#ffffff"
        paddingLeft="20px"
        display="flex"
        alignItems="center">
        <Link href="/" passHref>
          <A>
            <SeoulbitzLogo />
          </A>
        </Link>
      </Div>
      <MenuContents />
    </Div>
  );
};

export default SidebarContent;
