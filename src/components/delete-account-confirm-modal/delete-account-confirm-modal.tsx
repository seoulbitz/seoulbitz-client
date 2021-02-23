import firebase from '@/services/firebase';
import { DeleteAccountResult } from '@/services/firebase/auth';
import { useGlobalUIState } from '@/services/react/hooks';
import { theme } from '@/styles/theme';
import { useRouter } from 'next/dist/client/router';
import React, { FC, useState } from 'react';
import Button from '../button/button';
import Modal from '../modal/modal';
import Div from '../styled-system/div/div';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../../i18n';

type DeleteAccountConfirmModalProps = { readonly t: TFunction };

const DeleteAccountConfirmModal: FC<DeleteAccountConfirmModalProps> = ({
  t
}) => {
  const router = useRouter();
  const globalUIState = useGlobalUIState();
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  return (
    <Modal>
      <Div
        width={1}
        padding={['72px 20px 48px 20px', null, '88px 40px 64px 40px']}>
        <Div
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="28px"
          lineHeight="34px"
          fontWeight="700"
          color="#080CCE">
          {t('delete-account:title')}
        </Div>
        <Div
          marginTop="16px"
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#000000">
          {t('delete-account:explaination')}
        </Div>
        <Button
          marginTop="32px"
          variant="warning"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="22px"
          disabled={isButtonLoading}
          onClick={async () => {
            setIsButtonLoading(true);
            const result = await firebase.auth.deleteAccount();

            switch (result) {
              case DeleteAccountResult.requiresRecentLogin: {
                alert(
                  "It's been too old since you logged in. Please log out and log in again to delete your account."
                );
                break;
              }
              case DeleteAccountResult.success: {
                router.push('/');
                globalUIState.closeModal();
                break;
              }
            }

            setIsButtonLoading(false);
          }}>
          {t('delete-account:button-text')}
        </Button>
      </Div>
    </Modal>
  );
};

export default withTranslation('common')(DeleteAccountConfirmModal);
