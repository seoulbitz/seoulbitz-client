import { useGlobalUIState } from '@/services/react/hooks';
import firebase from '@/services/firebase';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import Button from '../button/button';
import Modal from '../modal/modal';
import Div from '../styled-system/div/div';
import { ResendVerificationEmailResult } from '@/services/firebase/auth';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../../i18n';

type CheckInboxModalProps = { readonly t: TFunction };

const CheckInboxModal: FC<CheckInboxModalProps> = ({ t }) => {
  const globalUIState = useGlobalUIState();

  const handleResendButtonClick = async () => {
    const result = await firebase.auth.resendVerificationEmail();

    switch (result) {
      case ResendVerificationEmailResult.tooManyRequests: {
        alert(
          "The email can't be sent right now. Please wait for a moment and try again."
        );
        break;
      }
      default: {
        const user = result;
        alert(`We sent an email to ${user.email}.`);
        break;
      }
    }
  };

  return (
    <Modal>
      <Div
        width={1}
        padding={['88px 20px 64px 20px', null, '88px 40px 64px 40px']}>
        <Div
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="28px"
          lineHeight="34px"
          fontWeight="700"
          color="#080CCE">
          {t('check-inbox:verify-email')}
        </Div>
        <Div
          marginTop="16px"
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500">
          {globalUIState.data.email &&
            `${t('check-inbox:email-data')}${globalUIState.data.email}.`}
          <br />
          {t('check-inbox:instructions')}
        </Div>
        <Button
          variant="mixed"
          marginTop="24px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="22px"
          onClick={handleResendButtonClick}>
          {t('check-inbox:resent-button')}
        </Button>
      </Div>
    </Modal>
  );
};

export default withTranslation('common')(CheckInboxModal);
