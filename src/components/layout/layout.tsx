import firebase from '@/services/firebase';
import { useGlobalUIState } from '@/services/react/hooks';
import sanity from '@/services/sanity';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import React, { FC, useEffect } from 'react';
import { ModalType } from 'types';
import Div from '../styled-system/div/div';
import Main from '../styled-system/main/main';
import LayoutDesktopHeader from './layout-desktop-header';
import LayoutMobileHeader from './layout-mobile-header';
import LayoutSidebar from './layout-sidebar';
import { CheckUserSurveySubmissionResult } from '@/services/sanity/api/user-survey';

const Layout: FC = ({ children }) => {
  const globalUIState = useGlobalUIState();

  useEffect(() => {
    const fetch = async () => {
      const user = await firebase.auth.getVerifiedUser();
      if (!user) {
        return;
      }

      const result = await sanity.api.userSurvey.checkUserSubmission();

      switch (result) {
        case CheckUserSurveySubmissionResult.neverSubmitted: {
          globalUIState.openModal(ModalType.surveyModal);
          break;
        }
        case CheckUserSurveySubmissionResult.everSubmitted: {
          break;
        }
      }
    };

    fetch();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Div display="flex" flexDirection="column" minHeight="100%">
        {/* Mobile Header */}
        <LayoutMobileHeader />

        {/* Desktop Header */}
        <LayoutDesktopHeader />

        <Div display="flex">
          {/* Sidebar */}
          <LayoutSidebar />

          {/* Content */}
          <Div width="100%" marginTop={['84px', null, '88px']}>
            <Main display="flex" flexDirection="column">
              {children}
            </Main>
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
};

export default Layout;
