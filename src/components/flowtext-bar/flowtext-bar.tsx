import React from 'react';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';
import { theme } from '../../styles/theme';
import { motion } from 'framer-motion';

const FlowtextBar = () => {
  return (
    // <motion.div animate={{ rotate: [0, 0, 270, 270, 0] }}>
    <Div display="flex" alignItems="center" height="28px" backgroundColor="#000000">
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        // animate={{ x: -100 }}
        transition={{ repeat: Infinity, duration: 0.5 }}>
        <Div
          margin="5px 20px 5px 20px"
          fontFamily={theme.fonts.futura}
          fontSize="14px"
          lineHeight="18px"
          fontWeight="700"
          color="#ffffff">
          SEOUL IS COOL
        </Div>
      </motion.div>

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
    // </motion.div>
  );
};

export default FlowtextBar;
