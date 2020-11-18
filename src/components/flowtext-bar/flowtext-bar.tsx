import React from 'react';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';
import { theme } from '../../styles/theme';
import { motion } from 'framer-motion';

const FlowtextBar = () => {
  return (
    <Div display="flex" alignItems="center" width="100%" height="28px" backgroundColor="#000000">
      <motion.div
        animate={{ x: -1500 }}
        initial={{ x: 700 }}
        exit={{ x: -1500 }}
        transition={{ repeat: Infinity, duration: 12 }}>
        <Div flexWrap="nowrap" textAlign="center">
          <Div
            margin="5px 20px 5px 20px"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="700"
            color="#ffffff">
            SEOUL IS COOL
          </Div>
          <Div
            margin="5px 0px 5px 0px"
            fontFamily={theme.fonts.nanumSquare}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="800"
            color="#ffffff">
            서울은 참 멋져!
          </Div>
          <Div
            margin="5px 20px 5px 20px"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="700"
            color="#ffffff">
            SEOUL IS COOL
          </Div>
          <Div
            margin="5px 0px 5px 0px"
            fontFamily={theme.fonts.nanumSquare}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="800"
            color="#ffffff">
            서울은 참 멋져!
          </Div>
          <Div
            margin="5px 20px 5px 20px"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="700"
            color="#ffffff">
            SEOUL IS COOL
          </Div>
          <Div
            margin="5px 0px 5px 0px"
            fontFamily={theme.fonts.nanumSquare}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="800"
            color="#ffffff">
            서울은 참 멋져!
          </Div>
          <Div
            margin="5px 20px 5px 20px"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="700"
            color="#ffffff">
            SEOUL IS COOL
          </Div>
          <Div
            margin="5px 0px 5px 0px"
            fontFamily={theme.fonts.nanumSquare}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="800"
            color="#ffffff">
            서울은 참 멋져!
          </Div>
          <Div
            margin="5px 20px 5px 20px"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="700"
            color="#ffffff">
            SEOUL IS COOL
          </Div>
          <Div
            margin="5px 0px 5px 0px"
            fontFamily={theme.fonts.nanumSquare}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="800"
            color="#ffffff">
            서울은 참 멋져!
          </Div>
          <Div
            margin="5px 20px 5px 20px"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="700"
            color="#ffffff">
            SEOUL IS COOL
          </Div>
          <Div
            margin="5px 0px 5px 0px"
            fontFamily={theme.fonts.nanumSquare}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="800"
            color="#ffffff">
            서울은 참 멋져!
          </Div>
          <Div
            margin="5px 20px 5px 20px"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="700"
            color="#ffffff">
            SEOUL IS COOL
          </Div>
          <Div
            margin="5px 0px 5px 0px"
            fontFamily={theme.fonts.nanumSquare}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="800"
            color="#ffffff">
            서울은 참 멋져!
          </Div>
          <Div
            margin="5px 20px 5px 20px"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="700"
            color="#ffffff">
            SEOUL IS COOL
          </Div>
          <Div
            margin="5px 0px 5px 0px"
            fontFamily={theme.fonts.nanumSquare}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="800"
            color="#ffffff">
            서울은 참 멋져!
          </Div>
        </Div>
      </motion.div>
    </Div>
  );
};

export default FlowtextBar;
