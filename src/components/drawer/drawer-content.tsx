import firebase from '@/services/firebase';
import { useGlobalUIState } from '@/services/react/hooks';
import React, { FC, useEffect, useState } from 'react';
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
import { withTranslation, i18n } from '../../../i18n';
import { TFunction } from 'next-i18next';

type DrawerContentProps = { DivProps; readonly t: TFunction };

const DrawerContent: FC<DrawerContentProps> = ({ t }) => {
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
                  <StyledButton variant="blue" marginRight="10px">
                    MY ACCOUNT
                  </StyledButton>
                </A>
              </Link>
              {/* TODO: Add internalization */}
              <StyledButton
                flex="1"
                variant="black"
                marginLeft="10px"
                onClick={() =>
                  i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')
                }>
                {t('common:language')}
              </StyledButton>
            </>
          ) : (
            <>
              <StyledButton
                variant="blue"
                marginRight="10px"
                onClick={() => {
                  globalUIState.openModal(ModalType.logInModal);
                }}>
                {t('common:login')}
              </StyledButton>

              <StyledButton
                variant="black"
                marginLeft="10px"
                onClick={() =>
                  i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')
                }>
                {t('common:language')}
              </StyledButton>
            </>
          )}
        </Div>
      </Div>
      <MenuContents />
    </Div>
  );
};

export default withTranslation('common')(DrawerContent);
