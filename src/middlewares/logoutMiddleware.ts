/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { actionTypes } from 'store/login';
import { keychain_removeSessionToken, keychain_removeSessionTokenExpireDate, axiosRemoveAuthToken } from 'utils';

const logoutMiddleware = () => (next: any) => async (action: any) => {
  if (action.type === actionTypes.LOG_OUT_USER) {
    keychain_removeSessionToken();
    axiosRemoveAuthToken();
    keychain_removeSessionTokenExpireDate();
    return next(action);
  }
  return next(action);
};
export default logoutMiddleware;
