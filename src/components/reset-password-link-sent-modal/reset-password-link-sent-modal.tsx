import { theme } from '@/styles/theme';
import React from 'react';
import Button from '../button/button';
import Modal from '../modal/modal';
import Div from '../styled-system/div/div';

const ResetPasswordLinkSentModal = () => {
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
          Reset password link sent
        </Div>
        <Div
          marginTop="16px"
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500">
          We just sent you an email with a link to reset your password to the
          following email address. Please check your inbox.
        </Div>
        <Button
          variant="mixed"
          marginTop="24px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="22px">
          RESEND EMAIL
        </Button>
      </Div>
    </Modal>
  );
};

export default ResetPasswordLinkSentModal;
