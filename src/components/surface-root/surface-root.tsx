import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import { globalUIState } from '@/services/recoil/atoms';
import React from 'react';
import { useRecoilValue } from 'recoil';
import DeleteAccountConfirmModal from '../delete-account-confirm-modal/delete-account-confirm-modal';
import Drawer from '../drawer/drawer';
import ForgotPasswordModal from '../forgot-password-modal/forgot-password-modal';
import SignInModal from '../sign-in-modal/sign-in-modal';
import SignUpModal from '../sign-up-modal/sign-up-modal';
import CheckInboxModal from '../check-inbox-modal/check-inbox-modal';
import ResetPasswordLinkSentModal from '../reset-password-link-sent-modal/reset-password-link-sent-modal';

const SurfaceRoot = () => {
  const { openedModal, isDrawerOpen } = useRecoilValue(globalUIState);

  let content = null;

  if (openedModal === 'signInModal') {
    content = <SignInModal />;
  }

  if (openedModal === 'signUpModal') {
    content = <SignUpModal />;
  }

  if (openedModal === 'forgotPasswordModal') {
    content = <ForgotPasswordModal />;
  }

  if (openedModal === 'deleteAccountConfirmModal') {
    content = <DeleteAccountConfirmModal />;
  }

  if (openedModal === 'checkInboxModal') {
    content = <CheckInboxModal />;
  }

  if (openedModal === 'resetPasswordLinkSentModal') {
    content = <ResetPasswordLinkSentModal />;
  }

  if (isDrawerOpen) {
    content = <Drawer />;
  }

  return <ThemeProvider theme={theme}>{content}</ThemeProvider>;
};

export default SurfaceRoot;
