/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import i18n from 'translations/index';
import { Alert } from 'react-native';
import { endsWith, get } from 'lodash';
import { actions } from 'store/login';

import { keychain_removeSessionToken, keychain_removeSessionTokenExpireDate, axiosRemoveAuthToken } from 'utils';

type Args = {
  dispatch: any;
};

const securityGuard: (a: Args) => any = ({ dispatch }) => (next: any) => (action: any) => {
  const failureAction = endsWith(action.type, '/SET_REQUEST_FAILED');
  const status = failureAction && get(action, 'status');

  if (action.type === 'SECURITY_LOGOUT' || status === 401) {
    dispatch(actions.logOutUser());
    keychain_removeSessionToken();
    axiosRemoveAuthToken();
    keychain_removeSessionTokenExpireDate();
    Alert.alert(i18n.t('security_guard_alert_header'), i18n.t('security_guard_alert_body'));
    return next(action);
  }
  if (status === 500) {
    Alert.alert(i18n.t('internal_server_error_alert_header'), i18n.t('internal_server_error_alert_body'));
    return next(action);
  }
  return next(action);
};
export default securityGuard;
