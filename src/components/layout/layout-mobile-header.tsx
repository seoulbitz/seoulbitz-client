import { motion } from 'framer-motion';
import { globalUIState } from '@/services/recoil/atoms';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Div from '../styled-system/div/div';
import Header from '../styled-system/header/header';
import Span from '../styled-system/span/span';
import { theme } from '@/styles/theme';

const MenuBar = () => {
  const setGlobalUIState = useSetRecoilState(globalUIState);

  return (
    <Div height="56px" backgroundColor="#ffffff">
      <button
        onClick={() => {
          setGlobalUIState((state) => {
            return {
              ...state,
              openedModal: 'signInModal'
            };
          });
        }}>
        Open Sign In Modal
      </button>
      <button
        onClick={() => {
          setGlobalUIState((state) => {
            return {
              ...state,
              openedModal: 'signUpModal'
            };
          });
        }}>
        Open Sign Up Modal
      </button>
      <button
        onClick={() => {
          setGlobalUIState((state) => {
            return {
              ...state,
              openedModal: 'forgotPasswordModal'
            };
          });
        }}>
        Open Forgot Password Modal
      </button>
      <button>Open Menu</button>

      <button
        onClick={() => {
          setGlobalUIState((state) => {
            return {
              ...state,
              openedModal: 'deleteAccountConfirmModal'
            };
          });
        }}>
        Delete Account confirm modal
      </button>

      <button
        onClick={() => {
          setGlobalUIState((state) => {
            return {
              ...state,
              openedModal: 'checkInboxModal'
            };
          });
        }}>
        check inbox modal
      </button>
    </Div>
  );
};

const MarqueeBar = () => {
  const texts = [];
  for (let i = 0; i < 8; i += 1) {
    texts.push(
      <>
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
      </>
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

const LayoutMobileHeader = () => {
  return (
    <Div display={[null, null, 'none']}>
      <Header position="fixed" top="0" height="84px" width="100%" zIndex={10}>
        <MenuBar />
        <MarqueeBar />
      </Header>
    </Div>
  );
};

export default LayoutMobileHeader;
