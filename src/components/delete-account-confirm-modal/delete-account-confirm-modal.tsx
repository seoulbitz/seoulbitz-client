import { theme } from '@/styles/theme';
import React from 'react';
import Button from '../button/button';
import Modal from '../modal/modal';
import Div from '../styled-system/div/div';

const DeleteAccountConfirmModal = () => {
  return (
    <Modal>
      <Div width={1} marginTop="32px" padding="0px 20px 288px 20px">
        <Div
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="24px"
          lineHeight="30px"
          fontWeight="700"
          color="#080CCE">
          Are you sure?
        </Div>
        <Div
          marginTop="16px"
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="14px"
          lineHeight="18px"
          fontWeight="500"
          color="#000000">
          Your account will no longer be available and all your personal
          information will be permanently deleted. This process can’t be
          reversed.
        </Div>
        <Button
          marginTop="32px"
          variant="warning"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="22px">
          YES. DELETE MY ACCOUNT
        </Button>
      </Div>
    </Modal>
  );
};

export default DeleteAccountConfirmModal;
