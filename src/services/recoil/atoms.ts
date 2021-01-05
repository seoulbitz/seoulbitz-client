import { atom } from 'recoil';

// Modals - openedModal
// signInModal
// signUpModal
// forgotPasswordModal
// deleteAccountConfirmModal

export const globalUIState = atom<{
  openedModal: any;
  isDrawerOpen: boolean;
  data: { [key: string]: any };
}>({
  key: 'globalUIState',
  default: {
    openedModal: null,
    isDrawerOpen: false,
    data: {}
  }
});

export const locationListState = atom({
  key: 'locationListState',
  default: {
    sortBy: 'latest', // 'latest' | 'likes' | 'distance'
    locations: []
  }
});

export const articleListState = atom({
  key: 'articleListState',
  default: {
    sortBy: 'latest', // 'latest' | 'likes'
    articles: []
  }
});
