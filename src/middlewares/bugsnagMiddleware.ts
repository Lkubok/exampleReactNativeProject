/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { endsWith, get } from 'lodash';
import Bugsnag from '@bugsnag/react-native';

type Args = {
  dispatch: any;
};

const securityGuard: (a: Args) => any = () => (next: any) => (action: any) => {
  const failureAction = endsWith(action.type, '/SET_REQUEST_FAILED');
  const message = failureAction && get(action, 'message');

  if (failureAction) {
    Bugsnag.notify(message);
    return next(action);
  }

  return next(action);
};
export default securityGuard;
