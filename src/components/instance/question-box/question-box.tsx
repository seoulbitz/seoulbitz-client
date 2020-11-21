import React, { FC } from 'react';
import Div from '../../styled-system/div/div';
import P from '../../styled-system/p/p';
import { theme } from '@/styles/theme';
import Close from '../../../../public/images/close';

type QuestionBoxProps = {};

export const QuestionBox: FC<QuestionBoxProps> = (props) => {
  return (
    <Div display="flex" justifyContent="space-between" borderBottom="1px solid">
      <P
        display="flex"
        alignItems="flex-end"
        height="64px"
        fontFamily={theme.fonts.futura}
        fontSize="14px"
        lineHeight="18px"
        fontWeight="500">
        What is Seoulbitz?
      </P>
      <P display="flex" alignItems="flex-end" verticalAlign="text-top">
        <Close width="16px" height="16px" />
      </P>
    </Div>
  );
};
export default QuestionBox;
