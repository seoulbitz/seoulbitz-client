import { globalUIState } from '@/services/recoil';
import React, { FC } from 'react';
import { useSetRecoilState } from 'recoil';
import ClientPortal from '../client-portal/client-portal';
import Close from '../icons/close/close';
import Button from '../styled-system/button/button';
import Div from '../styled-system/div/div';

const Modal: FC = ({ children }) => {
  const setGlobalUIState = useSetRecoilState(globalUIState);

  const handleClose = () => {
    setGlobalUIState((state) => {
      return {
        ...state,
        openedModal: null
      };
    });
  };
  return (
    <ClientPortal selector="#surface-root">
      <Div
        position="fixed"
        top={0}
        right={0}
        left={0}
        bottom={0}
        zIndex={100}
        backgroundColor="rgba(0, 0, 0, 0.6)"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        overflowY="scroll">
        <Div
          zIndex={101}
          backgroundColor="#FFFFFF"
          width={['100%', 'initial']}
          margin={[null, '88px']}
          minHeight={['100vh', 'initial']}>
          <Div
            position="relative"
            display="flex"
            flexDirection="column"
            width={[null, '360px', '400px']}>
            <Div
              position="absolute"
              top={['24px', null, '40px']}
              right={['20px', null, '40px']}>
              <Button
                display="block"
                onClick={handleClose}
                boxShadow="none"
                backgroundColor="#ffffff"
                padding={0}
                border="none">
                <Close display="block" />
              </Button>
            </Div>
            {children}
          </Div>
        </Div>
      </Div>
    </ClientPortal>
  );
};

export default Modal;
