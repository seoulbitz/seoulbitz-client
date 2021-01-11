import firebase from '@/services/firebase';
import { useGlobalUIState } from '@/services/react/hooks';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ModalType } from 'types';
import Button from '../button/button';
import SearchBox from '../search-box/search-box';
import A from '../styled-system/a/a';
import Div from '../styled-system/div/div';
import Header from '../styled-system/header/header';

const DesktopHeader = () => {
  const globalUIState = useGlobalUIState();
  const router = useRouter();

  const [user, setUser] = useState(null);
  // Get user on mount
  useEffect(() => {
    const fetch = async () => {
      const user = await firebase.auth.getVerifiedUser();
      if (user) {
        setUser(user);
        return;
      }
    };

    fetch();
  }, []);

  const handleLogInClick = () => {
    globalUIState.openModal(ModalType.logInModal);
  };

  return (
    <Div
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 24px">
      <Div width="240px">
        <SearchBox
          onSearch={async (keyword) => {
            await router.push(`/search?query=${keyword}`);
            globalUIState.closeDrawer();
          }}
        />
      </Div>
      <Div display="flex" flexDirection="row">
        {user ? (
          <>
            <Link href="/account" passHref>
              <A textDecoration="none">
                <Button
                  variant="blue"
                  width="initial"
                  // marginRight="16px" TODO: Add internalization
                >
                  MY ACCOUNT
                </Button>
              </A>
            </Link>
            {/* TODO: Add internalization */}
            {/* <Button variant="black" width="initial">
              EN
            </Button> */}
          </>
        ) : (
          <>
            <Button
              variant="blue"
              // marginRight="16px" TODO: Add internalization
              width="initial"
              onClick={handleLogInClick}>
              LOG IN
            </Button>
            {/* TODO: Add internalization */}
            {/* <Button variant="black" width="initial">
              EN
            </Button> */}
          </>
        )}
      </Div>
    </Div>
  );
};

const HeaderDesktop = () => {
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

export default HeaderDesktop;
