import { atom } from 'recoil';

// Modals - openedModal
// signInModal
// signUpModal
// forgotPasswordModal
// deleteAccountConfirmModal

export const globalUIState = atom({
  key: 'globalUIState',
  default: {
    openedModal: null,
    isDrawerOpen: false
  }
});
