import { globalUIState } from '@/services/recoil/atoms';
import React, { FC } from 'react';
import { useSetRecoilState } from 'recoil';
import ClientPortal from '../client-portal/client-portal';
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
        backgroundColor="rgba(0, 0, 0, 0.6)">
        <Div
          position="fixed"
          top={[0, '50%']}
          right={[0, 'initial']}
          bottom={[0, 'initial']}
          left={[0, '50%']}
          zIndex={101}
          backgroundColor="#FFFFFF"
          transform={[null, 'translate(-50%, -50%)']}>
          <Div
            position="relative"
            display="flex"
            flexDirection="column"
            width={[null, '360px', '400px']}>
            <Div position="absolute" top="0" right="0">
              <Button onClick={handleClose}>X</Button>
            </Div>
            {children}
          </Div>
        </Div>
      </Div>
    </ClientPortal>
  );
};

export default Modal;
