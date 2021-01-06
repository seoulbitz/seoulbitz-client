import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import { globalUIState } from '@/services/recoil/atoms';
import React from 'react';
import { useRecoilValue } from 'recoil';
import DeleteAccountConfirmModal from '../delete-account-confirm-modal/delete-account-confirm-modal';
import Drawer from '../drawer/drawer';
import ForgotPasswordModal from '../forgot-password-modal/forgot-password-modal';
import LogInModal from '../log-in-modal/log-in-modal';
import SignUpModal from '../sign-up-modal/sign-up-modal';
import CheckInboxModal from '../check-inbox-modal/check-inbox-modal';
import ResetPasswordLinkSentModal from '../reset-password-link-sent-modal/reset-password-link-sent-modal';
import SurveyModal from '../survey-modal/survey-modal';
import { ModalType } from 'types';

const SurfaceRoot = () => {
  const { openedModal, isDrawerOpen } = useRecoilValue(globalUIState);

  let content = null;

  if (openedModal === ModalType.logInModal) {
    content = <LogInModal />;
  }

  if (openedModal === ModalType.signUpModal) {
    content = <SignUpModal />;
  }

  if (openedModal === ModalType.forgotPasswordModal) {
    content = <ForgotPasswordModal />;
  }

  if (openedModal === ModalType.deleteAccountConfirmModal) {
    content = <DeleteAccountConfirmModal />;
  }

  if (openedModal === ModalType.checkInboxModal) {
    content = <CheckInboxModal />;
  }

  if (openedModal === ModalType.resetPasswordLinkSentModal) {
    content = <ResetPasswordLinkSentModal />;
  }

  if (openedModal === ModalType.surveyModal) {
    content = <SurveyModal />;
  }

  if (isDrawerOpen) {
    content = <Drawer />;
  }

  return <ThemeProvider theme={theme}>{content}</ThemeProvider>;
};

export default SurfaceRoot;
