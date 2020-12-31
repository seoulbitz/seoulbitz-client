import { theme } from '@/styles/theme';
import React from 'react';
import Button from '../button/button';
import Modal from '../modal/modal';
import Div from '../styled-system/div/div';

const CheckInboxModal = () => {
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
          Check your inbox
        </Div>
        <Div
          marginTop="16px"
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500">
          We sent an email to alextester201230@yopmail.com. Verify your email
          address and complete signing up.
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

export default CheckInboxModal;
