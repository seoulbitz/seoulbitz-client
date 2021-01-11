import { theme } from '@/styles/theme';
import { motion } from 'framer-motion';
import React from 'react';
import Div from '../styled-system/div/div';

const SidebarMarquee = () => {
  const texts = [];
  for (let i = 0; i < 8; i += 1) {
    texts.push(
      <React.Fragment key={i}>
        <Div
          display="inline-block"
          marginRight="24px"
          fontFamily={theme.fonts.futura}
          fontSize="14px"
          fontWeight="700"
          lineHeight="18px"
          color="#ffffff"
          userSelect="none">
          SEOUL IS COOL
        </Div>
        <Div
          display="inline-block"
          marginRight="24px"
          fontFamily={theme.fonts.nanumSquare}
          fontSize="14px"
          fontWeight="800"
          lineHeight="18px"
          color="#ffffff"
          userSelect="none">
          서울은 참 멋져
        </Div>
      </React.Fragment>
    );
  }
  return (
    <Div
      width="32px"
      height="100%"
      backgroundColor="#000000"
      position="relative">
      {/* Marquee group 1 */}
      <Div
        position="absolute"
        left="50%"
        bottom="0"
        transform="rotate(-90deg) translateY(50%)"
        transformOrigin="bottom left"
        whiteSpace="nowrap"
        overflow="hidden">
        <motion.div
          initial={{
            transform: 'translate(0%, 0%)'
          }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity
          }}
          animate={{
            transform: 'translate(100%, 0%)'
          }}>
          {texts}
        </motion.div>
      </Div>
      {/* Marquee group 2 */}
      <Div
        position="absolute"
        left="50%"
        bottom="0"
        transform="rotate(-90deg) translateY(50%)"
        transformOrigin="bottom left"
        whiteSpace="nowrap"
        overflow="hidden">
        <motion.div
          initial={{
            transform: 'translate(-100%, 0%)'
          }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity
          }}
          animate={{
            transform: 'translate(0%, 0%)'
          }}>
          {texts}
        </motion.div>
      </Div>
    </Div>
  );
};

export default SidebarMarquee;
