import { motion } from 'framer-motion';
import React from 'react';
import { useGlobalUIState } from '@/services/react/hooks';
import Div from '../styled-system/div/div';
import Header from '../styled-system/header/header';
import { theme } from '@/styles/theme';
import Hamburger from '../icons/hamburger/hamburger';
import SeoulbitzLogo from '../icons/seoulbitz-logo/seoulbitz-logo';
import Button from '../styled-system/button/button';
import Link from 'next/link';
import A from '../styled-system/a/a';

const MenuBar = () => {
  const globalUIState = useGlobalUIState();

  return (
    <Div
      height="56px"
      backgroundColor="#ffffff"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="0px 20px">
      <Link href="/" passHref>
        <A>
          <SeoulbitzLogo width="94.5px" height="18px" />
        </A>
      </Link>
      <Div>
        <Button
          padding="initial"
          border="initial"
          background="initial"
          onClick={() => {
            globalUIState.openDrawer();
          }}>
          <Hamburger display="block" />
        </Button>
      </Div>
    </Div>
  );
};

const MarqueeBar = () => {
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
    <Div height="28px" backgroundColor="#000000" position="relative">
      {/* Marquee group 1 */}
      <Div
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
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
        left="0"
        top="50%"
        transform="translateY(-50%)"
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

const HeaderMobile = () => {
  return (
    <Div display={[null, null, 'none']}>
      <Header position="fixed" top="0" height="84px" width="100%" zIndex={10}>
        <MenuBar />
        <MarqueeBar />
      </Header>
    </Div>
  );
};

export default HeaderMobile;
