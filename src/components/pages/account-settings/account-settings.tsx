import firebase from '@/services/firebase';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC, useEffect, useState } from 'react';
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
import { TFunction } from 'next-i18next';
import { i18n, withTranslation } from '../../../../i18n';
import Meta from '@/components/meta/Meta';

type AccountSettingsProps = { readonly t: TFunction };

const AccountSettings: FC<AccountSettingsProps> = ({ t }) => {
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
    <>
      <Meta
        meta={{
          title: 'Account Settings | Seoulbitz',
          description: '',
          keywords: '',
          ogTitle: 'Account Settings | Seoulbitz',
          ogDescription: '',
          ogSiteName: 'Seoulbitz',
          ogImage: ''
        }}
      />
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
                  <BackButton
                    text={i18n.language === 'en' ? 'ACCOUNT' : '내 계정'}
                  />
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
                whiteSpace="nowrap"
                fontFamily={theme.fonts.futura}
                fontSize="28px"
                lineHeight="34px"
                fontWeight="700">
                {t('account-settings:title')}
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
                    whiteSpace="nowrap"
                    fontFamily={theme.fonts.futura}
                    fontSize="20px"
                    lineHeight="24px"
                    fontWeight="700">
                    {t('account-settings:change-password')}
                  </Div>
                </Cell>
                <Cell width={[1, 1 / 2]} marginTop="32px">
                  <StyledButton
                    variant="blue"
                    disabled={isSendResetPasswordLinkButtonLoading}
                    onClick={handleSendResetPasswordLinkButtonClick}>
                    {t('account-settings:send-link')}
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
                whiteSpace="nowrap"
                fontFamily={theme.fonts.futura}
                fontSize="20px"
                lineHeight="24px"
                fontWeight="700">
                {t('account-settings:delete')}
              </Div>
            </Cell>
            <Cell width={[1, 1 / 2]} marginTop="16px">
              <P
                fontFamily={theme.fonts.futura}
                fontSize="16px"
                lineHeight="20px"
                fontWeight="400"
                color="#000000">
                {t('account-settings:delete-warning')}
              </P>
            </Cell>
            <Cell width={[1, 1 / 2]} marginTop="24px">
              <StyledButton
                variant="warning"
                onClick={handleDeleteAccountButtonClick}>
                {t('account-settings:delete-button')}
              </StyledButton>
            </Cell>
          </Grid>
        )}
      </Layout>
    </>
  );
};

export default withTranslation('common')(AccountSettings);
