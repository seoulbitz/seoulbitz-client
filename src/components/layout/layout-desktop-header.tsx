import firebase from '@/services/firebase';
import { useGlobalUIState } from '@/services/react/hooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ModalType } from 'types';
import Button from '../button/button';
import A from '../styled-system/a/a';
import Div from '../styled-system/div/div';
import Header from '../styled-system/header/header';

const DesktopHeader = () => {
  const globalUIState = useGlobalUIState();

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
      <Div width="240px" height="48px" borderBottom="1px solid #0511F2"></Div>
      <Div display="flex" flexDirection="row">
        {user ? (
          <>
            <Link href="/account" passHref>
              <A textDecoration="none">
                <Button variant="blue" width="initial">
                  MY ACCOUNT
                </Button>
              </A>
            </Link>
          </>
        ) : (
          <>
            <Button
              variant="blue"
              marginRight="16px"
              width="initial"
              onClick={handleLogInClick}>
              LOG IN
            </Button>
            <Button variant="black" marginRight="16px" width="initial">
              EN
            </Button>
          </>
        )}
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
