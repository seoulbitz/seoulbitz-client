import React from 'react';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';
import { theme } from '../../styles/theme';

const FlowtextBar = () => {
  return (
    <Div display="flex" alignItems="center" height="28px" backgroundColor="#000000">
      <Span
        margin="5px 20px 5px 20px"
        fontFamily={theme.fonts.futura}
        fontSize="14px"
        lineHeight="18px"
        fontWeight="700"
        color="#ffffff">
        SEOUL IS COOL
      </Span>
      <Span
        margin="5px 0px 5px 0px"
        fontFamily={theme.fonts.nanumSquare}
        fontSize="14px"
        lineHeight="18px"
        fontWeight="800"
        color="#ffffff">
        서울은 참 멋져!
      </Span>
      <Span
        margin="5px 20px 5px 20px"
        fontFamily={theme.fonts.futura}
        fontSize="14px"
        lineHeight="18px"
        fontWeight="700"
        color="#ffffff">
        SEOUL IS COOL
      </Span>
    </Div>
  );
};

export default FlowtextBar;
