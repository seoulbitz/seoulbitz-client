import firebase from '@/services/firebase';
import { SendResetPasswordLinkEmail } from '@/services/firebase/auth';
import { useGlobalUIState } from '@/services/react/hooks';
import { theme } from '@/styles/theme';
import React, { FC, useState } from 'react';
import Button from '../button/button';
import Modal from '../modal/modal';
import Div from '../styled-system/div/div';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../../i18n';

type ResetPasswordLinkSentProps = { readonly t: TFunction };

const ResetPasswordLinkSentModal: FC<ResetPasswordLinkSentProps> = ({ t }) => {
  const globalUIState = useGlobalUIState();
  const { email } = globalUIState.data;

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleResendEmailButton = async () => {
    setIsButtonLoading(true);
    const result = await firebase.auth.sendResetPasswordLinkEmail(email);

    switch (result) {
      case SendResetPasswordLinkEmail.success: {
        alert(`We sent an email to ${email}.`);
        break;
      }
    }
    setIsButtonLoading(false);
  };

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
          {t('reset-password-link-sent:reset-password-link')}
        </Div>
        <Div
          marginTop="16px"
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500">
          {t('reset-password-link-sent:email-sent')}
        </Div>
        <Button
          variant="mixed"
          marginTop="24px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="22px"
          disabled={isButtonLoading}
          onClick={handleResendEmailButton}>
          {t('reset-password-link-sent:resend-email')}
        </Button>
      </Div>
    </Modal>
  );
};

export default withTranslation('common')(ResetPasswordLinkSentModal);
