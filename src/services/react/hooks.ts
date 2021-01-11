import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { globalUIState } from '@/services/recoil/atoms';
import { ModalType } from 'types';

export const useDidUpdateEffect = (fn, inputs) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs);
};

export const useGlobalUIState = () => {
  const [state, setState] = useRecoilState(globalUIState);

  const openModal = (type: ModalType, data?) => {
    setState((prevState) => {
      return {
        ...prevState,
        openedModal: type,
        data: data ? data : {},
        isDrawerOpen: false
      };
    });
  };

  const closeModal = () => {
    setState((prevState) => {
      return {
        ...prevState,
        openedModal: null,
        data: {},
        isDrawerOpen: false
      };
    });
  };

  const openDrawer = () => {
    setState((prevState) => {
      return {
        ...prevState,
        openedModal: null,
        data: {},
        isDrawerOpen: true
      };
    });
  };

  const closeDrawer = () => {
    setState((prevState) => {
      return {
        ...prevState,
        openedModal: null,
        data: {},
        isDrawerOpen: false
      };
    });
  };

  return {
    ...state,
    openModal,
    closeModal,
    openDrawer,
    closeDrawer
  };
};
