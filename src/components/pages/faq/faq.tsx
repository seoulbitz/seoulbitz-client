import React, { FC } from 'react';
import { theme } from '@/styles/theme';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Div from '../../styled-system/div/div';
import Header from '../../styled-system/header/header';
import Img from '../../styled-system/img/img';
import { ThemeProvider } from 'emotion-theming';
import P from '../../styled-system/p/p';
import Close from '../../../../public/images/close';
import QuestionBox from '../../instance/question-box/question-box';
import AnswerBox from '../../instance/answer-box/answer-box';
import ChangeFaq from './change-faq';

const MenuBar = () => {
  return <Div height="56px" backgroundColor="#ffffff"></Div>;
};

const FlowBar = () => {
  return <Div height="28px" backgroundColor="#000000"></Div>;
};

export type FaqProps = {
  onClick?: (event: MouseEvent) => void;
};

const Faq: FC<FaqProps> = ({ ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <Div display="flex" flexDirection="column" minHeight="100%">
        {/* Mobile Header */}
        <Div display={[null, null, 'none']}>
          <MenuBar />
          <FlowBar />
          <Div
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="72px"
            fontFamily={theme.fonts.futura}
            fontSize="24px"
            lineHeight="30px"
            fontWeight="800"
            color="#000000">
            FAQ
          </Div>
          <Div display="flex" justifyContent="center" alignItems="center" marginTop="32px">
            <Img width="150px" src="https://via.placeholder.com/300x188" />
          </Div>
          <Div margin="0px 20px 0px 20px">
            <ChangeFaq />
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
};

export default Faq;
