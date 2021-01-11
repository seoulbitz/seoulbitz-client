import firebase from '@/services/firebase';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { useEffect, useState } from 'react';
import StyledButton from '../../button/button';
import P from '@/components/styled-system/p/p';
import { useRouter } from 'next/dist/client/router';
import Layout from '@/components/layout/layout';
import A from '@/components/styled-system/a/a';
import Link from 'next/link';
import BackButton from '@/components/back-button/back-button';
import { SendResetPasswordLinkEmail } from '@/services/firebase/auth';
import { useGlobalUIState } from '@/services/react/hooks';
import { ModalType } from 'types';

const AccountSettings = () => {
  const router = useRouter();
  const globalUIState = useGlobalUIState();

  const [user, setUser] = useState(null);
  const [isProviderPassword, setIsProviderPassword] = useState(false);

  const [
    isSendResetPasswordLinkButtonLoading,
    setIsSendResetPasswordLinkButtonLoading
  ] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const user = await firebase.auth.getVerifiedUser();
      if (user) {
        setUser(user);
        user.providerData.forEach((provider) => {
          if (provider.providerId === 'password') {
            setIsProviderPassword(true);
          }
        });
        return;
      }
      router.push('/');
    };

    fetch();
  }, []);

  const handleSendResetPasswordLinkButtonClick = async () => {
    setIsSendResetPasswordLinkButtonLoading(true);
    const result = await firebase.auth.sendResetPasswordLinkEmail(user.email);

    switch (result) {
      case SendResetPasswordLinkEmail.success: {
        globalUIState.openModal(ModalType.resetPasswordLinkSentModal);
        break;
      }
    }
    setIsSendResetPasswordLinkButtonLoading(false);
  };

  const handleDeleteAccountButtonClick = () => {
    globalUIState.openModal(ModalType.deleteAccountConfirmModal);
  };

  return (
    <Layout>
      {user && (
        <Grid
          width="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingBottom={['88px', null, '96px']}>
          <Cell marginTop="40px" width={1}>
            <Link href="/account" passHref>
              <A>
                <BackButton text="ACCOUNT" />
              </A>
            </Link>
          </Cell>

          <Cell
            marginTop={['40px', null, '56px']}
            width={[1, 1 / 2]}
            display="flex"
            flexDirection="row"
            justifyContent="center">
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="28px"
              lineHeight="34px"
              fontWeight="700">
              Account settings
            </Div>
          </Cell>
          {isProviderPassword && (
            <>
              <Cell
                width={[1, 1 / 2]}
                display="flex"
                justifyContent="center"
                marginTop={['56px', null, '64px']}>
                <Div
                  fontFamily={theme.fonts.futura}
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="700">
                  Change password
                </Div>
              </Cell>
              <Cell width={[1, 1 / 2]} marginTop="32px">
                <StyledButton
                  variant="blue"
                  disabled={isSendResetPasswordLinkButtonLoading}
                  onClick={handleSendResetPasswordLinkButtonClick}>
                  SEND RESET PASSWORD LINK
                </StyledButton>
              </Cell>
            </>
          )}

          <Cell
            display="flex"
            justifyContent="center"
            width={[1, 1 / 2]}
            marginTop={['56px', null, '64px']}>
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="20px"
              lineHeight="24px"
              fontWeight="700">
              Delete account
            </Div>
          </Cell>
          <Cell width={[1, 1 / 2]} marginTop="16px">
            <P
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              lineHeight="20px"
              fontWeight="400"
              color="#000000">
              Deleting your account is permanent. All your data will be wiped
              out immediately and you won't be able to get it back. Requires
              password.
            </P>
          </Cell>
          <Cell width={[1, 1 / 2]} marginTop="24px">
            <StyledButton
              variant="warning"
              onClick={handleDeleteAccountButtonClick}>
              DELETE ACCOUNT
            </StyledButton>
          </Cell>
        </Grid>
      )}
    </Layout>
  );

  // );
};

export default AccountSettings;
