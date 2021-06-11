import { useContext } from 'react';

import { ToastContext, ToastContextProps, ToastState } from 'contexts';

type ReturnDataType = {
  showToast: (args: ToastState) => void;
  hideToast: () => void;
  toastState: ToastState;
};

export const useToast: () => ReturnDataType = () => {
  const { showToast, hideToast, toastState } = useContext(ToastContext) as ToastContextProps;

  const returnObject: ReturnDataType = {
    hideToast,
    showToast,
    toastState,
  };

  return returnObject;
};

export default useToast;
