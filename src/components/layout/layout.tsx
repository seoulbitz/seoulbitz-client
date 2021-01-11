import firebase from '@/services/firebase';
import { useGlobalUIState } from '@/services/react/hooks';
import sanity from '@/services/sanity';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import React, { FC, useEffect } from 'react';
import { ModalType } from 'types';
import Div from '../styled-system/div/div';
import Main from '../styled-system/main/main';
import { CheckUserSurveySubmissionResult } from '@/services/sanity/api/user-survey';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import { useRouter } from 'next/dist/client/router';

const Layout: FC = ({ children }) => {
  const globalUIState = useGlobalUIState();

  const router = useRouter();

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

  useEffect(() => {
    globalUIState.closeDrawer();
  }, [router.asPath]);

  return (
    <ThemeProvider theme={theme}>
      <Div display="flex" flexDirection="column" minHeight="100%">
        <Header />

        <Div display="flex">
          <Sidebar />

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
