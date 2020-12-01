import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import React, { FC } from 'react';
import Div from '../styled-system/div/div';
import Main from '../styled-system/main/main';
import LayoutDesktopHeader from './layout-desktop-header';
import LayoutMobileHeader from './layout-mobile-header';
import LayoutSidebar from './layout-sidebar';

const Layout: FC = ({ children }) => {
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
