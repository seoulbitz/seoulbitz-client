import React, { FC } from 'react';
import Div from '../../styled-system/div/div';
import P from '../../styled-system/p/p';
import { theme } from '@/styles/theme';
import Minus from '../../../../public/images/minus';

type AnswerBoxProps = {};

export const AnswerBox: FC<AnswerBoxProps> = (props) => {
  return (
    <>
      <Div display="flex" justifyContent="space-between">
        <P
          display="flex"
          alignItems="flex-end"
          height="64px"
          fontFamily={theme.fonts.futura}
          fontSize="14px"
          lineHeight="18px"
          fontWeight="500"
          color=" #0511F2">
          What is Seoulbitz?
        </P>
        <P display="flex" alignItems="flex-end" verticalAlign="text-top">
          <Minus width="16px" height="16px" />
        </P>
      </Div>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna.
      </P>
    </>
  );
};
export default AnswerBox;
