import Div from '@/components/styled-system/div/div';
import Header from '@/components/styled-system/header/header';
import Aside from '@/components/styled-system/aside/aside';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import React, { FC } from 'react';
import Main from '@/components/styled-system/main/main';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Img from '@/components/styled-system/img/img';
import FAQItem from '@/components/faq-item/faq-item';
import ChangeFaq from './change-faq';
import QuestionBox from '@/components/instance/question-box/question-box';
import AnswerBox from '@/components/instance/answer-box/answer-box';

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

const FAQContent = () => {
  return (
    <Grid width="100%" justifyContent="center">
      <Cell width={['100%', null, 10 / 12]}>
        <Div
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={['48px', null, '88px']}
          fontFamily={theme.fonts.futura}
          fontSize="28px"
          lineHeight="34px"
          fontWeight="700"
          color="#000000">
          FAQ
        </Div>
        <Div display="flex" justifyContent="center" alignItems="center" marginTop="32px">
          <Img width="150px" src="https://via.placeholder.com/300x188" />
        </Div>
        <Div marginTop={['40px', null, '48px']}>
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          {/* <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <AnswerBox />
          <QuestionBox />
          <QuestionBox /> */}
        </Div>
      </Cell>
    </Grid>
  );
};

const FAQ = () => {
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
          <Div width="100%" marginTop={['84px', null, '96px']}>
            <Main display="flex" flexDirection="column">
              <FAQContent />
            </Main>
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
};

export default FAQ;
