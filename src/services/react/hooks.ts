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
        data: data ? data : {}
      };
    });
  };

  const closeModal = () => {
    setState((prevState) => {
      return {
        ...prevState,
        openedModal: null,
        data: {}
      };
    });
  };

  return {
    ...state,
    openModal,
    closeModal
  };
};
