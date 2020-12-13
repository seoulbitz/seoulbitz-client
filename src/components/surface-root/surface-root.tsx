import { globalUIState } from '@/services/recoil';
import React from 'react';
import { useRecoilValue } from 'recoil';
import DeleteAccountConfirmModal from '../delete-account-confirm-modal/delete-account-confirm-modal';
import Drawer from '../drawer/drawer';
import ForgotPasswordModal from '../forgot-password-modal/forgot-password-modal';
import SignInModal from '../sign-in-modal/sign-in-modal';
import SignUpModal from '../sign-up-modal/sign-up-modal';

const SurfaceRoot = () => {
  const { openedModal, isDrawerOpen } = useRecoilValue(globalUIState);

  if (openedModal === 'signInModal') {
    return <SignInModal />;
  }

  if (openedModal === 'signUpModal') {
    return <SignUpModal />;
  }

  if (openedModal === 'forgotPasswordModal') {
    return <ForgotPasswordModal />;
  }

  if (openedModal === 'deleteAccountConfirmModal') {
    return <DeleteAccountConfirmModal />;
  }

  if (isDrawerOpen) {
    return <Drawer />;
  }

  return null;
};

export default SurfaceRoot;
