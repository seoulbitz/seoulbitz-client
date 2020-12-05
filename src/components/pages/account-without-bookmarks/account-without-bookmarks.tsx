import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Aside from '@/components/styled-system/aside/aside';
import Div from '@/components/styled-system/div/div';
import H2 from '@/components/styled-system/h2/h2';
import Header from '@/components/styled-system/header/header';
import Main from '@/components/styled-system/main/main';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import StyledButton from '../../button/button';

const MenuBar = () => {
  return <Div height="56px" backgroundColor="#ffffff"></Div>;
};

const FlowBar = () => {
  return <Div height="28px" backgroundColor="#000000"></Div>;
};

const DesktopHeader = () => {
  return (
    <Div
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 24px">
      <Div width="240px" height="48px" borderBottom="1px solid #0511F2"></Div>
      <Div display="flex">
        <Div width="108px" height="48px" border="1px solid #0511F2" marginRight="16px"></Div>
        <Div width="67px" height="48px" border="1px solid #000000"></Div>
      </Div>
    </Div>
  );
};

const SideBar = () => {
  return (
    <>
      <Div height="88px" backgroundColor="#999999"></Div>
      <Div height="80px" backgroundColor="#ffffff"></Div>
      <Div height="196px" backgroundColor="#080CCE"></Div>
      <Div height="208px" backgroundColor="#EBEDED"></Div>
      <Div height="168px" backgroundColor="#ffffff" borderBottom="1px solid #000000"></Div>
      <Div height="80px" backgroundColor="#ffffff"></Div>
      <Div
        height="56px"
        backgroundColor="#ffffff"
        borderTop="1px solid #080CCE"
        borderBottom="1px solid #080CCE"></Div>
      <Div height="500px" backgroundColor="#F5F3F0"></Div>
    </>
  );
};

const AccountWithoutBookmarkContent = () => {
  return (
    <Grid width="100%" justifyContent="center" alignItems="center" flexDirection="column">
      <Cell
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={['100%', null, 10 / 12]}
        marginTop={['72px', null, '80px']}>
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="28px"
          lineHeight="34px"
          fontWeight="700"
          color="#000000">
          My Profile
        </Div>
      </Cell>
      <Cell
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={[1, 1 / 2]}
        marginTop={['32px', null, '40px']}>
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#080CCE">
          Username: Patricia
        </Div>
      </Cell>
      <Cell
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={[1, 1 / 2]}
        marginTop="8px">
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#080CCE">
          Email: patricia@gmail.com
        </Div>
      </Cell>
      <Cell
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={[1, 1 / 2]}
        marginTop={['32px', null, '40px']}>
        <StyledButton width="150px" variant="black">
          Edit
        </StyledButton>
      </Cell>
      <Cell
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={[1, 1 / 2]}
        marginTop={['24px', null, '32px']}>
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#000000"
          text-decoration-line="underline">
          Account settings
        </Div>
      </Cell>
      <Cell marginTop="24px">
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#F43333">
          Log out
        </Div>
      </Cell>
      <Cell
        display="flex"
        justifyContent="center"
        width={[1, 1 / 2]}
        marginTop={['72px', null, '80px']}>
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="28px"
          lineHeight="34px"
          fontWeight="700"
          color="#000000">
          Bookmarks
        </Div>
      </Cell>
      <Cell
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={[1, 1 / 2]}
        marginTop={['28px', '32px', '40px']}>
        <Div
          display="flex"
          justifyContent="center"
          width="160px"
          border="2px solid #0511F2"
          borderRadius="29px">
          <Span
            padding="15px"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="500"
            color="#0511F2">
            Places
          </Span>
          <Span
            padding="15px"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="500"
            color="#0511F2">
            Article
          </Span>
        </Div>
      </Cell>
      <Cell
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={[1, 1 / 2]}
        marginTop={['40px', null, '48px']}>
        <Div
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="#FAFAFA"
          height="232px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400"
          color="#000000">
          You have no bookmarked items. Use the bookmark to save places or articles.
        </Div>
      </Cell>
    </Grid>
  );
};

const AccountWithoutBookmarks = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div display="flex" flexDirection="column" minHeight="100%">
        {/* Mobile Header */}
        <Div display={[null, null, 'none']}>
          <Header position="fixed" top="0" height="84px" width="100%">
            <MenuBar />
            <FlowBar />
          </Header>
        </Div>

        {/* Desktop Header */}
        <Div display={['none', null, 'block']}>
          <Header
            position="fixed"
            top={0}
            left={0}
            height="88px"
            paddingLeft="392px"
            width="100%"
            backgroundColor="#ffffff">
            <DesktopHeader />
          </Header>
        </Div>

        <Div display="flex">
          {/* Sidebar */}
          <Div display={['none', null, 'block']} minWidth="392px">
            <Aside position="fixed" top={0} left={0} bottom={0} width="392px" display="flex">
              <Div width="100%" overflowY="auto">
                <SideBar />
              </Div>
              <Div width="32px" backgroundColor="#000000" height="100%"></Div>
            </Aside>
          </Div>

          {/* Content */}
          <Div
            width="100%"
            marginTop={['84px', null, '96px']}
            marginBottom={['20px', null, '24px']}>
            <Main display="flex" flexDirection="column"></Main>
            <AccountWithoutBookmarkContent />
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
};

export default AccountWithoutBookmarks;
