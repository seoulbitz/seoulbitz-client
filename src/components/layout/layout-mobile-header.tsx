import { globalUIState } from '@/services/recoil';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import Div from '../styled-system/div/div';
import Header from '../styled-system/header/header';

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
    </Div>
  );
};

const FlowBar = () => {
  return <Div height="28px" backgroundColor="#000000"></Div>;
};

const LayoutMobileHeader = () => {
  return (
    <Div display={[null, null, 'none']}>
      <Header position="fixed" top="0" height="84px" width="100%" zIndex={10}>
        <MenuBar />
        <FlowBar />
      </Header>
    </Div>
  );
};

export default LayoutMobileHeader;
