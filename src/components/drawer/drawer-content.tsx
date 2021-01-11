import firebase from '@/services/firebase';
import { useGlobalUIState } from '@/services/react/hooks';
import React, { useEffect, useState } from 'react';
import Close from '../icons/close/close';
import MenuContents from '../menu-contents/menu-contents';
import StyledButton from '../button/button';
import Button from '../styled-system/button/button';
import Div from '../styled-system/div/div';
import SearchBox from '../search-box/search-box';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import A from '../styled-system/a/a';
import { ModalType } from 'types';

const DrawerContent = () => {
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

  const handleClose = () => {
    globalUIState.closeDrawer();
  };

  return (
    <Div position="relative">
      {/* Close button */}
      <Div position="absolute" top="20px" right="20px">
        <Button
          cursor="pointer"
          display="block"
          onClick={handleClose}
          boxShadow="none"
          backgroundColor="#ffffff"
          padding={0}
          border="none">
          <Close display="block" />
        </Button>
      </Div>
      <Div padding="56px 20px 0px 20px" paddingBottom={['16px', null, '0px']}>
        <SearchBox
          onSearch={async (keyword) => {
            await router.push(`/search?query=${keyword}`);
            globalUIState.closeDrawer();
          }}
        />
        <Div marginTop="24px" display="flex">
          {user ? (
            <>
              <Link href="/account" passHref>
                <A flex="3" textDecoration="none">
                  <StyledButton
                    variant="blue"
                    // marginRight="10px" TODO: Add internalization
                  >
                    MY ACCOUNT
                  </StyledButton>
                </A>
              </Link>
              {/* TODO: Add internalization */}
              {/* <StyledButton flex="1" variant="black" marginLeft="10px">
                EN
              </StyledButton> */}
            </>
          ) : (
            <>
              <StyledButton
                variant="blue"
                // marginRight="10px" TODO: Add internalization
                onClick={() => {
                  globalUIState.openModal(ModalType.logInModal);
                }}>
                LOG IN
              </StyledButton>
              {/* TODO: Add internalization */}

              {/* <StyledButton variant="black" marginLeft="10px">
                EN
              </StyledButton> */}
            </>
          )}
        </Div>
      </Div>
      <MenuContents />
    </Div>
  );
};

export default DrawerContent;
